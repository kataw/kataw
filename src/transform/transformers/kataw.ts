import { SyntaxKind } from '../../ast/syntax-node';
import { visitEachChild } from '../visitor';

// Rip of types in Kataw

export function transformKataw(context: any): (node: any) => Node {
  return transformSourceFile;

  function transformSourceFile(root: any) {
    return visitEachChild(context, root, visitor);
  }

  function visitor(node: any): any {
    switch (node.kind) {
      case SyntaxKind.ArrayType:
      case SyntaxKind.TupleType:
      case SyntaxKind.Multiply:
      case SyntaxKind.TypeAlias:
      case SyntaxKind.ThisKeyword:
      case SyntaxKind.AnyKeyword:
      case SyntaxKind.NullKeyword:
      case SyntaxKind.UnknownKeyword:
      case SyntaxKind.UndefinedKeyword:
      case SyntaxKind.ObjectKeyword:
      case SyntaxKind.NeverKeyword:
      case SyntaxKind.VoidKeyword:
      case SyntaxKind.SymbolKeyword:
      case SyntaxKind.MixedKeyword:
      case SyntaxKind.NumberKeyword:
      case SyntaxKind.StringKeyword:
      case SyntaxKind.BooleanKeyword:
      case SyntaxKind.EmptyKeyword:
      case SyntaxKind.FalseKeyword:
      case SyntaxKind.TrueKeyword:
      case SyntaxKind.TypeParameter:
      case SyntaxKind.ArrowFunctionType:
      case SyntaxKind.FunctionType:
      case SyntaxKind.TypeReference:
      case SyntaxKind.UnionType:
        return null;
    }
  }
}
