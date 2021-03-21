import { visitEachChild } from '../../visitor';
import { Node, NodeKind, NodeFlags } from '../../ast/node';
import { createVariableDeclarationList, VariableDeclarationList } from '../../ast/statements/variable-declarationList';
import { createVariableDeclaration, VariableDeclaration } from '../../ast/statements/variable-declaration';
import { createVariableStatement, VariableStatement } from '../../ast/statements/variable-stmt';
import { updateFunctionDeclaration, FunctionDeclaration } from '../../ast/statements/function-declaration';
import { updateClassDeclaration, ClassDeclaration } from '../../ast/statements/class-declaration';

export function transformTpescript(context: any): any {
  return transformSourceFile;

  function transformSourceFile(root: any) {
    return visitEachChild(root, visitor, context);
  }

  function visitor(node: any): any {
    return visitTypeScript(node);
  }

  function visitTypeScript(node: any): any {
    switch (node.kind) {
      case NodeKind.StringKeyword:
      case NodeKind.BindingElement:
      case NodeKind.ArrayType:
      case NodeKind.TupleType:
      case NodeKind.OptionalType:
      case NodeKind.RestType:
      case NodeKind.TypeLiteral:
      case NodeKind.TypePredicate:
      case NodeKind.TypeParameter:
      case NodeKind.AnyKeyword:
      case NodeKind.UnknownKeyword:
      case NodeKind.BooleanKeyword:
      case NodeKind.StringKeyword:
      case NodeKind.NumberKeyword:
      case NodeKind.NeverKeyword:
      case NodeKind.VoidKeyword:
      case NodeKind.SymbolKeyword:
      case NodeKind.ConstructorType:
      case NodeKind.FunctionType:
      case NodeKind.TypeQuery:
      case NodeKind.TypeReference:
      case NodeKind.UnionType:
      case NodeKind.IntersectionType:
      case NodeKind.ConditionalType:
      case NodeKind.ParenthesizedType:
      case NodeKind.ThisType:
      case NodeKind.TypeOperator:
      case NodeKind.IndexedAccessType:
      case NodeKind.MappedType:
      case NodeKind.IndexSignature:
      case NodeKind.Decorator:
      case NodeKind.TypeAliasDeclaration:
      case NodeKind.NamespaceExportDeclaration:
      case NodeKind.InterfaceDeclaration:
        return null;
      case NodeKind.TypeAssertionExpression:
      case NodeKind.AsExpression:
        // TypeScript type assertions are removed, but their subtrees are preserved.
        return visitAssertionExpression(node);
      case NodeKind.VariableDeclaration:
        return visitVariableDeclaration(node);
      case NodeKind.ClassDeclaration:
        return visitClassDeclaration(node);
      case NodeKind.AsyncFunctionDeclaration:
        return visitAsyncFuncionDeclaration(node);
      case NodeKind.FunctionDeclaration:
        return visitFuncionDeclaration(node);
      case NodeKind.EnumDeclaration:
        return visitEnumDeclaration(node);
    }

    return visitEachChild(node, visitor, context);
  }

  function visitAssertionExpression(node: any): any {
    return node;
  }

  function visitAsyncFuncionDeclaration(node: any): any {
    node.flags = (node.flags | NodeFlags.Declared) ^ NodeFlags.Declared;
    return updateFunctionDeclaration(
      node,
      /* isGenerator */ node.isGenerator,
      /* isAsync */ 1,
      /* name */ node.name,
      /* formalParameters */ node.formalParameters,
      /* contents */ node.contents,
      /* typeParameters */ null,
      /* type */ null
    );
  }

  function visitFuncionDeclaration(node: any): any {
    node.flags = (node.flags | NodeFlags.Declared) ^ NodeFlags.Declared;
    return updateFunctionDeclaration(
      node,
      /* isGenerator */ node.isGenerator,
      /* isAsync */ 0,
      /* name */ node.name,
      /* formalParameters */ node.formalParameters,
      /* contents */ node.contents,
      /* typeParameters */ null,
      /* type */ null
    );
  }

  function visitClassDeclaration(node: any): any {
    node.flags = (node.flags | NodeFlags.Declared | NodeFlags.Abstract) ^ (NodeFlags.Declared | NodeFlags.Abstract);
    return updateClassDeclaration(
      node,
      /* name */ node.name,
      /* typeParameters */ null,
      /* classHeritage */ node.classHeritage,
      /* implementClauses */ null,
      /* members */ node.members,
      /* decorators */ null,
      /* isAbstract */ false
    );
  }

  function visitVariableDeclaration(node: any): any {
    node.exclamation = null;
    node.type = null;
    return node;
  }

  function visitEnumDeclaration(node: any): any {
    const statements: any[] = [];
    console.log(node.members.enumMembersList);

    const varAdded = createVariableStatement(
      createVariableDeclarationList(
        [createVariableDeclaration(node.members.enumMembersList as any, false, null, null, NodeFlags.None, -1, -1)],
        NodeFlags.None,
        -1,
        -2
      ),
      NodeFlags.None,
      -1,
      -1
    );
  }
}
