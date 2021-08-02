
import { join, resolve } from 'path';
import { camelize, arrayify, find } from '../util';
import { existsSync } from 'fs';

export const enum RuleSeverity {
  None,
  Default,
  Warning,
  Error,
  Off
}

// The core rules are found in '/src/linter/rules
const CORE_RULES_DIRECTORY = resolve(__dirname, 'rules');

const cachedRules = new Map<string, any | -1>();

export function findRule(name: string, rulesDirectories?: string | string[]): any | undefined {
  const camelizedName = transformName(name);
  const rule = loadCachedRule(CORE_RULES_DIRECTORY, camelizedName);

  return rule !== undefined
    ? rule
    : find(arrayify(rulesDirectories), (dir: any) => loadCachedRule(dir, camelizedName, true));
}

function transformName(name: string): string {
  const nameMatch = name.match(/^([-_]*)(.*?)([-_]*)$/);
  if (nameMatch === null) {
    return `${name}`;
  }
  return `${nameMatch[1]}${camelize(nameMatch[2])}${nameMatch[3]}`;
}

function loadCachedRule(directory: string, ruleName: string, isCustomPath?: boolean): any | undefined {
  const fullPath = join(directory, ruleName);
  const cachedRule = cachedRules.get(fullPath);

  if (cachedRule !== undefined) {
    return cachedRule === -1 ? undefined : cachedRule;
  }

  let absolutePath: string = directory;
  if (isCustomPath) {
    absolutePath = resolve(directory);
    if (!existsSync(absolutePath)) {
      throw new Error(`Could not find custom rule directory: ${absolutePath}`);
    }
  }

  const rule = loadRule(absolutePath, ruleName);

  cachedRules.set(fullPath, rule);

  return rule === -1 ? undefined : rule;
}

function loadRule(directory: string, ruleName: string): any | -1 {
  let ruleFullPath: string;

  try {
    ruleFullPath = require.resolve(join(directory, ruleName));
  } catch {
    return -1;
  }
  return (require(ruleFullPath) as any).rule;
}

export function loadRules(ruleOptionsList: any[], rulesDirectories?: string | string[]): any[] {
  const rules: any[] = [];
  const notFoundRules: string[] = [];

  for (const ruleOptions of ruleOptionsList) {
    if (ruleOptions.ruleSeverity === RuleSeverity.Off) {
      continue;
    }

    const ruleName = ruleOptions.ruleName;
    const rule = findRule(ruleName, rulesDirectories);

    if (rule === undefined) {
      notFoundRules.push(ruleName);
    } else {
      rules.push(rule.lint(ruleOptions));
    }
  }

  if (notFoundRules.length > 0) {
    console.log(
      'Could not find implementations for the following rules specified in the configuration:' +
        notFoundRules.join('\n                ')
    );
  }

  return rules;
}
