import { writeFileSync, readFileSync, statSync, existsSync, realpathSync } from 'fs';
import { extname, resolve as resolve, dirname, join } from 'path';
import { stripComments, arrayify } from '../util';
import { homedir } from 'os';
import { sync } from 'resolve';
import { findRule } from '../linter/common';
import { RuleConfig, LinterConfigFile, RuleOptions, RuleConfigFile, EMPTY_LINTER_CONFIG } from './rule-config';
import { RuleSeverity } from '../linter/common';
import { DEFAULT_CONFIG, findup } from './common';
import { PrettifyConfigFile } from './prettify-config';
import { MinifyConfigFile } from './minify-config';

export interface CompilerConfigFile {
  files?: string[];
  module: boolean;
  typecheck: boolean;
  config?: string;
  linter: LinterConfigFile;
  minify: MinifyConfigFile;
  prettify: PrettifyConfigFile;
}

/**
 * Load a config file . A default config file will be returned if no config file
 */
export function loadConfigurationFromPath(configFilePath?: string): CompilerConfigFile {
  if (!configFilePath) return DEFAULT_CONFIG;
  const resolvedConfigFilePath = resolveConfigurationPath(configFilePath);
  const { linter, minify, prettify, module, files, typecheck } = fetchConfigFile(resolvedConfigFilePath);
  return {
    files,
    module,
    typecheck,
    config: configFilePath,
    linter: parseLinterConfig(linter as any, dirname(resolvedConfigFilePath), fetchConfigFile as any),
    minify: minify.enable ? minify.options : false,
    prettify: prettify.enable ? prettify.options : false
  };
}

/**
 * Creates a config file
 */
export function createConfigFile() {
  if (existsSync('kataw.json')) {
    throw new Error(`Cannot generate 'kataw.json': file already exists`);
  }
  writeFileSync('kataw.json', JSON.stringify(DEFAULT_CONFIG, undefined, '    '));
}

export function fetchCompilerConfiguration(configFile: string | null, inputFilePath?: string): any {
  const configPath = fetchCompilerConfigurationPath(configFile, inputFilePath!);
  try {
    return loadConfigurationFromPath(configPath);
  } catch (error) {
    throw new Error(`Failed to load ${configPath}: ${(error as Error).message}`);
  }
}

export function fetchCompilerConfigurationPath(configFile: string | null, inputFilePath: string): string | undefined {
  if (configFile) {
    if (!existsSync(configFile)) {
      throw new Error(`Could not find config file at: ${resolve(configFile)}`);
    }
    return resolve(configFile);
  }
  let useDirName = false;
  try {
    if (statSync(inputFilePath!).isFile()) {
      useDirName = true;
    }
  } catch (e) {
    useDirName = true;
  }
  if (useDirName) {
    inputFilePath = dirname(inputFilePath!);
  }

  let configFilePath = findup(resolve(inputFilePath!));

  if (configFilePath) return configFilePath;

  const homeDir = homedir();
  configFilePath = join(homeDir, 'kataw.json');
  if (existsSync(configFilePath)) return resolve(configFilePath);
  return undefined;
}

export function fetchConfigFile(filepath: string): CompilerConfigFile {
  if (extname(filepath) === '.json') {
    try {
      return JSON.parse(stripComments(readFileSync(filepath, 'utf8').trim())) as CompilerConfigFile;
    } catch (e) {
      throw new Error(`${e.message} in ${filepath}`);
    }
  }
  const RuleConfigFile = require(filepath) as CompilerConfigFile;
  delete (require.cache as { [key: string]: any })[filepath];
  return RuleConfigFile;
}

function resolveConfigurationPath(filePath: string, relativeTo?: string) {
  const matches = filePath.match(/^kataw:(.*)$/);
  const isBuiltInConfig = matches !== null && matches.length > 0;
  if (isBuiltInConfig) {
    const configName = matches![1];
    try {
      return require.resolve(`./configs/${configName}`);
    } catch (err) {
      throw new Error(`${filePath} is not a built-in config, try "kataw:recommended" instead.`);
    }
  }

  const basedir = relativeTo !== undefined ? relativeTo : process.cwd();

  try {
    let resolvedPackagePath: string | undefined = tryResolvePackage(filePath, basedir);
    return resolvedPackagePath ? resolvedPackagePath : require.resolve(filePath);
  } catch (err) {
    throw new Error(`Invalid "extends" configuration value - could not require "${filePath}". `);
  }
}

export function tryResolvePackage(packageName: string, relativeTo?: string): string | undefined {
  const realRelativeToPath: string | undefined = relativeTo !== undefined ? realpathSync(relativeTo) : undefined;

  let resolvedPath: string | undefined = tryResolveSync(packageName, realRelativeToPath);
  if (resolvedPath === undefined) {
    resolvedPath = tryResolveSync(packageName, relativeTo);
  }

  return resolvedPath;
}
function tryResolveSync(packageName: string, relativeTo?: string): string | undefined {
  try {
    return sync(packageName, { basedir: relativeTo });
  } catch {
    return undefined;
  }
}

export function parseLinterConfig(
  configFile: RuleConfigFile,
  configFileDir?: string,
  readConfig?: (path: string) => RuleConfigFile
): LinterConfigFile {
  if (!configFile.enable) return EMPTY_LINTER_CONFIG;

  let defaultSeverity = configFile.defaultSeverity;

  if (readConfig === undefined || configFileDir === undefined) {
    return parse(configFile, configFileDir);
  }

  return loadExtendsRecursive(configFile, configFileDir)
    .map(({ dir, config }) => parse(config, dir))
    .reduce(extendConfigFile, EMPTY_LINTER_CONFIG);

  function loadExtendsRecursive(raw: RuleConfigFile, dir: string) {
    const configs: Array<{ dir: string; config: RuleConfigFile }> = [];
    for (const relativePath of arrayify(raw.extends)) {
      const resolvedPath = resolveConfigurationPath(relativePath, dir);
      const extendedRaw = readConfig!(resolvedPath);
      configs.push(...loadExtendsRecursive(extendedRaw, dirname(resolvedPath)));
    }
    defaultSeverity = raw.defaultSeverity;
    configs.push({ dir, config: raw });
    return configs;
  }

  function parse(config: RuleConfigFile, dir?: string): LinterConfigFile {
    const rulesDirectory: string | string[] = getRulesDirectories(config.rulesDirectory, dir);

    return {
      enable: true,
      extends: arrayify(config.extends),
      linterOptions: parseLinterOptions(config.linterOptions, dir),
      rules:
        typeof config.rules === 'boolean'
          ? filterValidRules(parseRules(config.rules), config.rules, rulesDirectory)
          : parseRules(config.rules),
      rulesDirectory
    };
  }

  function parseRules(config: RuleConfigFile | any | undefined): Map<string, Partial<RuleOptions>> {
    const map = new Map<string, Partial<RuleOptions>>();
    if (config !== undefined) {
      for (const ruleName of Object.keys(config)) {
        map.set(ruleName, parseRuleOptions(config[ruleName], defaultSeverity as any));
      }
    }
    return map;
  }

  function filterValidRules(
    rules: Map<string, Partial<RuleOptions>>,
    copyRulestoLinterRules = false,
    rulesDirectory?: string | string[]
  ): Map<string, Partial<RuleOptions>> {
    const validLinterRules = new Map<string, Partial<RuleOptions>>();
    if (copyRulestoLinterRules) {
      rules.forEach((ruleOptions, ruleName) => {
        const Rule = findRule(ruleName, rulesDirectory);
        if (Rule !== undefined && Rule.metadata === undefined) {
          validLinterRules.set(ruleName, ruleOptions);
        }
      });
    }

    return validLinterRules;
  }

  function parseLinterOptions(raw: RuleConfigFile['linterOptions'], dir?: string): LinterConfigFile['linterOptions'] {
    if (raw === undefined) {
      return {};
    }
    return {
      ...(raw.exclude !== undefined
        ? {
            exclude: arrayify(raw.exclude).map((pattern: any) =>
              dir === undefined ? resolve(pattern) : resolve(dir, pattern)
            )
          }
        : {}),
      ...(raw.format !== undefined
        ? {
            format: raw.format
          }
        : {})
    };
  }
}

export function useAsPath(directory: string) {
  return /^(?:\.?\.?(?:\/|$)|node_modules\/)/.test(directory);
}

export function getRulesDirectories(directories?: string | string[], relativeTo?: string): string[] {
  return arrayify(directories).map((dir) => {
    if (!useAsPath(dir)) {
      const resolvedPackagePath: string | undefined = tryResolvePackage(dir, relativeTo);
      if (resolvedPackagePath !== undefined) {
        return dirname(resolvedPackagePath);
      }
    }

    const absolutePath = relativeTo === undefined ? resolve(dir) : resolve(relativeTo, dir);
    if (absolutePath !== undefined) {
      if (!existsSync(absolutePath)) {
        throw new Error(`Could not find custom rule directory: ${dir}`);
      }
    }
    return absolutePath;
  });
}

function parseRuleOptions(ruleConfigValue: RuleConfig, rawDefaultRuleSeverity: RuleSeverity): Partial<RuleOptions> {
  let ruleArguments: any[] | undefined;
  let defaultRuleSeverity: RuleSeverity = RuleSeverity.Error;

  if (rawDefaultRuleSeverity !== undefined) {
    switch (rawDefaultRuleSeverity) {
      case RuleSeverity.Warning:
        defaultRuleSeverity = RuleSeverity.Warning;
        break;
      case RuleSeverity.None:
        defaultRuleSeverity = RuleSeverity.None;
        break;
      default:
        defaultRuleSeverity = RuleSeverity.Error;
    }
  }

  let ruleSeverity = defaultRuleSeverity;

  if (ruleConfigValue == undefined) {
    ruleArguments = [];
    ruleSeverity = RuleSeverity.None;
  } else if (Array.isArray(ruleConfigValue)) {
    if (ruleConfigValue.length > 0) {
      // old style: array
      ruleArguments = ruleConfigValue.slice(1);
      ruleSeverity = ruleConfigValue[0] === true ? defaultRuleSeverity : RuleSeverity.None;
    }
  } else if (typeof ruleConfigValue === 'boolean') {
    ruleArguments = [];
    ruleSeverity = ruleConfigValue ? defaultRuleSeverity : RuleSeverity.None;
  } else if (typeof ruleConfigValue === 'object') {
    if (ruleConfigValue.severity !== undefined) {
      switch (ruleConfigValue.severity) {
        case RuleSeverity.Default:
          ruleSeverity = defaultRuleSeverity;
          break;
        case RuleSeverity.Error:
          ruleSeverity = RuleSeverity.Error;
          break;
        case RuleSeverity.Warning:
          ruleSeverity = RuleSeverity.Warning;
          break;
        case RuleSeverity.None:
          ruleSeverity = RuleSeverity.None;
          break;
        default:
          console.warn(`Invalid severity level: ${ruleConfigValue.severity}`);
          ruleSeverity = defaultRuleSeverity;
      }
    }
    if (ruleConfigValue.options != undefined) {
      ruleArguments = arrayify(ruleConfigValue.options);
    }
  }

  return {
    ruleArguments,
    ruleSeverity
  };
}

export function extendConfigFile(targetConfig: LinterConfigFile, nextConfigSource: LinterConfigFile): LinterConfigFile {
  function combineProperties<T extends { [key: string]: any }>(
    targetProperty: T | undefined,
    nextProperty: T | undefined
  ): T {
    const combinedProperty: { [key: string]: any } = {};
    add(targetProperty);
    // next config source overwrites the target config object
    add(nextProperty);
    return combinedProperty as T;

    function add(property: T | undefined): void {
      if (property !== undefined) {
        for (const name of Object.keys(property)) {
          combinedProperty[name] = property[name];
        }
      }
    }
  }

  function combineMaps(target: Map<string, Partial<RuleOptions>>, next: Map<string, Partial<RuleOptions>>) {
    const combined = new Map<string, Partial<RuleOptions>>();
    target.forEach((options, ruleName) => {
      combined.set(ruleName, options);
    });
    next.forEach((options, ruleName) => {
      const combinedRule = combined.get(ruleName);
      if (combinedRule !== undefined) {
        combined.set(ruleName, combineProperties(combinedRule, options));
      } else {
        combined.set(ruleName, options);
      }
    });
    return combined;
  }

  const combinedRulesDirs = targetConfig.rulesDirectory.concat(nextConfigSource.rulesDirectory);
  const dedupedRulesDirs = Array.from(new Set(combinedRulesDirs));

  return {
    enable: true,
    extends: [],
    linterOptions: combineProperties(targetConfig.linterOptions, nextConfigSource.linterOptions),
    rules: combineMaps(targetConfig.rules, nextConfigSource.rules),
    rulesDirectory: dedupedRulesDirs
  };
}

export function convertRuleOptions(ruleConfiguration: Map<string, Partial<RuleOptions>>): RuleOptions[] {
  const output: RuleOptions[] = [];
  ruleConfiguration.forEach(({ ruleArguments, ruleSeverity }, ruleName) => {
    const options: RuleOptions = {
      ruleArguments: ruleArguments != undefined ? ruleArguments : [],
      ruleName,
      ruleSeverity: ruleSeverity ? ruleSeverity : RuleSeverity.Error
    };
    output.push(options);
  });
  return output;
}
