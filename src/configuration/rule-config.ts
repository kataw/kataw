import { RuleSeverity } from '../linter/common';

export interface RuleOptions {
  ruleArguments: any[];
  ruleSeverity: RuleSeverity;
  ruleName: string;
}

export interface RulesConfig {
  [key: string]: RuleConfig;
}

export type RuleConfig =
  // kataw:disable-next-line no-null-undefined-union
  | null
  | undefined
  | boolean
  | any[]
  | {
      severity?: RuleSeverity;
      options?: RuleOptions;
    };

export interface LinterConfigFile {
  enable: boolean;

  /**
   * An array of config files whose rules are inherited by this config file.
   */
  extends: string[];

  /**
   * A subset of the CLI options.
   */
  linterOptions?: Partial<{
    exclude: string[];
    format: string;
  }>;

  /**
   * Directories containing custom rules. Resolved using node module semantics.
   */
  rulesDirectory: string[];

  /**
   * Rules that are used to lint TypeScript files.
   */
  rules: Map<string, Partial<RuleOptions>>;
}

export interface RuleConfigFile {
  enable: boolean;
  extends?: string | string[];
  linterOptions?: LinterConfigFile['linterOptions'];
  rulesDirectory?: string | string[];
  defaultSeverity?: string;
  rules?: RulesConfig | boolean;
}

export const EMPTY_LINTER_CONFIG: LinterConfigFile = {
  enable: false,
  extends: [],
  rules: new Map<string, Partial<RuleOptions>>(),
  rulesDirectory: []
};
