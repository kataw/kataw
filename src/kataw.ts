import { parse, Options } from './parser/parser';
import { Context, OnError } from './parser/common';
import { RootNode } from './ast/rootNode';
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
  containsInvalidEscape,
  isAssignOp,
  isBinaryOp,
  isStatementStart,
  isExpressionStart,
  isPropertyOrCall,
  isEllipsis,
  isInOrOf,
  isKeyword,
  isFutureReserved,
  isStartOfType,
  isSemicolon
} from './parser/common';

export function parseScript(source: string, options?: Options, onError?: OnError): RootNode {
  return parse(source, /* filename */ '__root__', Context.None, /* isModule */ false, options, onError);
}

export function parseModule(source: string, options?: Options, onError?: OnError): RootNode {
  return parse(
    source,
    /* filename */ '__root__',
    Context.Module | Context.Strict | Context.AllowImportMeta,
    /* isModule */ true,
    options,
    onError
  );
}
