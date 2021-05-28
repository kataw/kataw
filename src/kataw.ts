import { parse, Options } from './parser/parser';
import { Context, OnError } from './parser/common';
import { RootNode } from './ast/rootNode';
import { printSourceFile } from './printer';
export { forEachChild } from './forEachChild';
export {
  isStatementNode,
  isExpressionNode,
  isChildLess,
  isSingleQuote,
  containsSeparator,
  hasUnicodeEscape,
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
  containsInvalidEscape,
  hasDuplicateLabels,
  isAssignOp,
  isBinaryOp,
  hasNewLine,
  isStatementStart,
  isExpressionStart,
  isPropertyOrCall,
  isEllipsis,
  isInOrOf,
  isKeyword,
  isLexical,
  isFutureReserved,
  isStartOfType,
  isSemicolon,
  isCallExpression,
  isMemberExpression,
  isTemplateLiteral
} from './parser/common';

/**
 * Parse a script, optionally with various options.
 */
export function parseScript(source: string, options?: Options, onError?: OnError): RootNode {
  return parse(
    source,
    /* filename */ '__root__',
    Context.TopLevel,
    /* isModule */ false,
    onError || function () {},
    options
  );
}

/**
 * Parse a module, optionally with various options.
 */
export function parseModule(source: string, options?: Options, onError?: OnError): RootNode {
  return parse(
    source,
    '__root__',
    Context.Module | Context.TopLevel | Context.Strict | Context.AllowImportMeta,
    /* isModule */ true,
    onError || function () {},
    options
  );
}

export function prettifyScript(source: string, options?: Options, onError?: OnError): string {
  return printSourceFile(parseScript(source, options, onError), options as any);
}

export function prettifyModule(source: string, options?: Options, onError?: OnError): string {
  return printSourceFile(parseModule(source, options, onError), options as any);
}
