import { Transform } from './../core';
import { SyntaxKind, NodeFlags } from '../../ast/syntax-node';
import { visitEachChild } from '../visitor';

// Rip of types in Kataw

export function transformKataw(transform: Transform): (node: any) => Node {
  return transformSourceFile;

  function transformSourceFile(root: any) {
    return visitEachChild(transform, root, visitor);
  }

  function visitor(node: any): any {
    switch (node.kind) {
      case SyntaxKind.ArrayType:
      case SyntaxKind.TupleType:
      case SyntaxKind.Multiply:
      case SyntaxKind.TypeAlias:
      case SyntaxKind.AnyKeyword:
      case SyntaxKind.UnknownKeyword:
      case SyntaxKind.UndefinedKeyword:
      case SyntaxKind.ObjectKeyword:
      case SyntaxKind.NeverKeyword:
      case SyntaxKind.SymbolKeyword:
      case SyntaxKind.MixedKeyword:
      case SyntaxKind.NumberKeyword:
      case SyntaxKind.StringKeyword:
      case SyntaxKind.BooleanKeyword:
      case SyntaxKind.EmptyKeyword:
      case SyntaxKind.OpaqueType:
        return null;
      case SyntaxKind.LexicalBinding:
      case SyntaxKind.VariableDeclaration:
        node.optionalToken = null;
        node.type = null;
        break;
      case SyntaxKind.MethodDefinition:
        node.typeParameters = null;
        break;
      case SyntaxKind.FieldDefinition:
        node.declaredToken = null;
        node.optionalToken = null;
        node.type = null;
        break;
      case SyntaxKind.CallChain:
        node.typeArguments = null;
        break;
      case SyntaxKind.ImportDeclaration:
        node.typeofKeyword = null;
      case SyntaxKind.ImportSpecifier:
        node.typeKeyword = null;
        break;
      case SyntaxKind.ArrowFunction:
        node.typeParameters = null;
        node.returnType = null;
        break;
      case SyntaxKind.ClassDeclaration:
        // Return 'null' for declared class
        if (node.declareKeyword) return null;
      case SyntaxKind.ClassExpression:
        node.typeParameters = null;
        break;
      case SyntaxKind.ClassHeritage:
        node.typeParameter = null;
        break;
      case SyntaxKind.BindingElement:
        node.optionalToken = null;
        node.type = null;
        break;
      case SyntaxKind.VariableStatement:
        node.declareKeyword = null;
        break;
      case SyntaxKind.FunctionDeclaration:
        node.declareKeyword = null;
      case SyntaxKind.FunctionExpression:
        node.typeParameters = null;
        node.returnType = null;
        break;
    }

    // Unset type related flags to avoid conflicts
    node.flags = node.flags & ~(NodeFlags.IsTypeNode | NodeFlags.Declared);
    return visitEachChild(transform, node, visitor);
  }
}
