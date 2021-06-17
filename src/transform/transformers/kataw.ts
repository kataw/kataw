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
      case SyntaxKind.OpaqueType:
        return null;
      case SyntaxKind.LexicalBinding:
      case SyntaxKind.VariableDeclaration:
        node.optionalToken = null;
        node.type = null;
        node.flags = node.flags & ~(NodeFlags.IsTypeNode | NodeFlags.Declared);
        return node;
      case SyntaxKind.MethodDefinition:
        node.typeParameters = null;
        node.flags = node.flags & ~(NodeFlags.IsTypeNode | NodeFlags.Declared);
        return node;
      case SyntaxKind.FieldDefinition:
        node.declaredToken = null;
        node.optionalToken = null;
        node.type = null;
        node.flags = node.flags & ~(NodeFlags.IsTypeNode | NodeFlags.Declared);
        return node;
      case SyntaxKind.CallChain:
        node.typeArguments = null;
        node.flags = node.flags & ~(NodeFlags.IsTypeNode | NodeFlags.Declared);
        return node;
      case SyntaxKind.ImportDeclaration:
        node.typeofKeyword = null;
      case SyntaxKind.ImportSpecifier:
        node.typeKeyword = null;
        node.flags = node.flags & ~(NodeFlags.IsTypeNode | NodeFlags.Declared);
        return node;
      case SyntaxKind.ArrowFunction:
        node.typeParameters = null;
        node.returnType = null;
        node.flags = node.flags & ~(NodeFlags.IsTypeNode | NodeFlags.Declared);
        return node;
      case SyntaxKind.ClassDeclaration:
        node.declareKeyword = null;
      case SyntaxKind.ClassExpression:
        node.typeParameters = null;
        node.flags = node.flags & ~(NodeFlags.IsTypeNode | NodeFlags.Declared);
        return node;
      case SyntaxKind.ClassHeritage:
        node.typeParameter = null;
        node.flags = node.flags & ~(NodeFlags.IsTypeNode | NodeFlags.Declared);
        return node;
      case SyntaxKind.BindingElement:
        node.optionalToken = null;
        node.type = null;
        node.flags = node.flags & ~(NodeFlags.IsTypeNode | NodeFlags.Declared);
        return node;
      case SyntaxKind.VariableStatement:
        node.declareKeyword = null;
        node.flags = node.flags & ~(NodeFlags.IsTypeNode | NodeFlags.Declared);
        return node;
      case SyntaxKind.FunctionDeclaration:
        node.declareKeyword = null;
      case SyntaxKind.FunctionExpression:
        node.typeParameters = null;
        node.returnType = null;
        node.flags = node.flags & ~(NodeFlags.IsTypeNode | NodeFlags.Declared);
        return node;
    }

    // Unset type related flags to avoid conflicts
    node.flags = node.flags & ~(NodeFlags.IsTypeNode | NodeFlags.Declared);
    return visitEachChild(transform, node, visitor);
  }
}
