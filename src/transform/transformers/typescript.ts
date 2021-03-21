import { visitEachChild } from '../../visitor';
import { Node, NodeKind, NodeFlags } from '../../ast/node';
import { createVariableDeclarationList, VariableDeclarationList } from '../../ast/statements/variable-declarationList';
import { createVariableDeclaration, VariableDeclaration } from '../../ast/statements/variable-declaration';
import { createVariableStatement, VariableStatement } from '../../ast/statements/variable-stmt';

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
        return null;
      case NodeKind.EnumDeclaration:
        return visitEnumDeclaration(node);
    }
    //console.log(node)
    return visitEachChild(node, visitor, context);
  }

  function visitEnumDeclaration(node: any): any {
    const statements: any[] = [];
    console.log(node.members.enumMembersList)

    const varAdded = createVariableStatement(
      createVariableDeclarationList(
        [createVariableDeclaration(node.members.enumMembersList as any, false, null, null, NodeFlags.None, -1, -1)]
        , NodeFlags.None, -1, -2),
      NodeFlags.None,
      -1,
      -1
    );

  }
}
