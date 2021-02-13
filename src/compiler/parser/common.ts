import { NodeFlags, NodeKind } from '../ast/node';
import { ParserState } from '../types';
import { Token, KeywordDescTable } from '../ast/token';
import { nextToken } from '../parser/scanner/scan';
import { DiagnosticCode } from '../diagnostics/diagnosticMessages.generated';
import { reportErrorDiagnostic } from '../diagnostics/diagnostic';

export const enum Context {
  None = 0,
  OptionsJSX = 1 << 0,
  OptionsNext = 1 << 1,
  OptionsDisableWebCompat = 1 << 2,
  OptionsLint = 1 << 3,
  OptionsAutoCorrect = 1 << 4,
  OptionsPrettify = 1 << 5,
  OptionsMinify = 1 << 6,
  OptionsESNext = 1 << 7,
  Ambient = 1 << 8,
  TaggedTemplate = 1 << 9,
  Strict = 1 << 10,
  Module = 1 << 11,
  DisallowIn = 1 << 13,
  AllowRegExp = 1 << 14,
  InTypes = 1 << 16,
  InYieldContext = 1 << 21,
  InAwaitContext = 1 << 22,
  InConditionalContext = 1 << 24,
  InArrowContext = 1 << 25,
  AllowConditionalTypes = 1 << 26,
  InDecoratorContext = 1 << 27,
  InGlobal = 1 << 28
}

export const enum PropertyKind {
  None = 0,
  Async = 1 << 0,
  Getter = 1 << 1,
  Setter = 1 << 2,
  Generator = 1 << 3,
  Abstract = 1 << 4,
  Readonly = 1 << 5,
  Constructor = 1 << 6,
  Declare = 1 << 7,
  Static = 1 << 8,
  Optional = 1 << 9
}

export function consumeOpt(parser: ParserState, context: Context, t: Token): boolean {
  if (parser.token === t) {
    nextToken(parser, context);
    return true;
  }
  return false;
}

export function consumeOptAsBitwise(parser: ParserState, context: Context, t: Token): 0 | 1 {
  if (parser.token === t) {
    nextToken(parser, context);
    return 1;
  }
  return 0;
}

export function consume(parser: ParserState, context: Context, t: Token): boolean {
  if (parser.token === t) {
    nextToken(parser, context);
    return true;
  }
  reportErrorDiagnostic(parser, 0, DiagnosticCode._0_expected, KeywordDescTable[t & Token.Type]);

  return false;
}

export function canParseSemicolon(parser: ParserState): boolean {
  // If there's a real semicolon, then we can always parse it out.
  if (parser.token === Token.Semicolon) {
    return true;
  }

  // We can parse out an optional semicolon in ASI cases in the following cases.
  return (
    parser.token === Token.RightBrace ||
    parser.token === Token.EndOfSource ||
    (parser.nodeFlags & NodeFlags.PrecedingLineBreak) !== 0
  );
}

export function parseSemicolon(parser: ParserState, context: Context): boolean {
  if (canParseSemicolon(parser)) {
    if (parser.token === Token.Semicolon) {
      // consume the semicolon if it was explicitly provided.
      nextToken(parser, context | Context.AllowRegExp);
    }

    return true;
  }
  return consume(parser, context | Context.AllowRegExp, Token.Semicolon);
}

export function lastOrUndefined<T>(array: readonly T[]): T | undefined {
  return array.length === 0 ? undefined : array[array.length - 1];
}

/** @internal */
export function tagNamesAreEquivalent(lhs: any, rhs: any): boolean {
  if (lhs.kind !== rhs.kind) {
    return false;
  }

  if (lhs.kind === NodeKind.JsxIdentifier) {
    return lhs.name === rhs.name;
  }

  if (lhs.kind === NodeKind.ThisExpression) {
    return true;
  }

  if (lhs.kind === NodeKind.JsxNamespacedName) {
    if (rhs.kind !== NodeKind.JsxNamespacedName) return false;
    return (
      lhs.name.name === rhs.name.name &&
      lhs.namespace.name === rhs.namespace.name &&
      tagNamesAreEquivalent((<any>lhs).namespace as any, (<any>rhs).namespace as any)
    );
  }

  return (
    lhs.member.name === rhs.member.name &&
    tagNamesAreEquivalent((<any>lhs).expression as any, (<any>rhs).expression as any)
  );
}

export function reinterpretToPattern(node: any, parser: ParserState, context: Context): any {
  switch (node.kind) {
    case NodeKind.ArrowParameters:
    case NodeKind.FormalParameter:
    case NodeKind.BindingElement:
    case NodeKind.OmittedExpression:
      return;
    case NodeKind.IdentifierReference:
    case NodeKind.IdentifierName:
      node.kind = NodeKind.BindingIdentifier | NodeKind.IsChildless;
      return node;
    case NodeKind.ArrayLiteral:
      node.kind = NodeKind.ArrayBindingPattern | NodeKind.IsBindingPattern;
      reinterpretToPattern(node.elementList, parser, context);
      return node;

    case NodeKind.ElementList: {
      node.kind = NodeKind.BindingElementList;
      const elements = node.elements;
      let i = elements.length;
      while (i--) {
        reinterpretToPattern(elements[i], parser, context);
      }
      return node;
    }

    case NodeKind.ObjectLiteral:
      node.kind = NodeKind.ObjectBindingPattern | NodeKind.IsBindingPattern;
      reinterpretToPattern(node.propertyList, parser, context);
      return node;

    case NodeKind.PropertyDefinitionList: {
      node.kind = NodeKind.BindingPropertyList;
      const properties = node.properties;
      let i = properties.length;
      while (i--) {
        reinterpretToPattern(properties[i], parser, context);
      }
      return node;
    }
    case NodeKind.PropertyDefinition: {
      node.kind = NodeKind.BindingElement | NodeKind.IsArrayBindingElement;
      reinterpretToPattern(node.left, parser, context);
      return node;
    }
    case NodeKind.CoverInitializedName: {
      node.kind = NodeKind.SingleNameBinding;
      node.ellipsis = false;
      reinterpretToPattern(node.left, parser, context);
      return node;
    }
    case NodeKind.AssignmentExpression: {
      node.kind = NodeKind.BindingElement | NodeKind.IsArrayBindingElement;
      delete node.operator;
      reinterpretToPattern(node.left, parser, context);
      return node;
    }
    case NodeKind.SpreadElement:
      node.kind = NodeKind.BindingElement | NodeKind.IsArrayBindingElement;
      node.ellipsis = true;
      if (node.argument === NodeKind.AssignmentExpression) {
        reinterpretToPattern(node.argument, parser, context);
        node.left = node.argument.left;
        node.right = node.argument.right;
        delete node.argument;
        return;
      }
      node.left = node.argument;
      node.right = null;
      delete node.argument;
      return;
  }
}
