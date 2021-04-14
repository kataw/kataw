import { parse } from './parser';
export {
  isStatementNode,
  isExpressionNode,
  isChildLess,
  isSingleQuote,
  containsSeparator,
  hasUnicodeEscape,
  hasErrors,
  isConstructor,
  isGenerator,
  isAsync,
  isDeclared,
  isNoneSimpleParamList,
  hasExtendedUnicodeEscape,
  isImplicitOctal,
  isOctalIntegerLiteral,
  isBinaryIntegerLiteral,
  isUnterminated,
  hexIntegerLiteral,
  containsInvalidEscape
} from './common';

export function parseScript(source: string, _options: any) {
  return parse(source, /* filename */ '__root__', /* isModule */ false);
}

export function parseModule(source: string, _options: any) {
  return parse(source, /* filename */ '__root__', /* isModule */ true);
}
