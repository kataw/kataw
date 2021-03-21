import { visitEachChild, visitNode } from '../../visitor';
import { Node, NodeKind, NodeFlags } from '../../ast/node';
import { createVariableDeclarationList, VariableDeclarationList } from '../../ast/statements/variable-declarationList';
import { createVariableDeclaration, VariableDeclaration } from '../../ast/statements/variable-declaration';
import { createVariableStatement, VariableStatement } from '../../ast/statements/variable-stmt';
import { updateFunctionDeclaration, FunctionDeclaration } from '../../ast/statements/function-declaration';
import { updateClassDeclaration, ClassDeclaration } from '../../ast/statements/class-declaration';
import { createBinaryExpression } from '../../ast/expressions/binary-expr';
import { createAssignmentExpression } from '../../ast/expressions/assignment-expr';
import { createObjectLiteral } from '../../ast/expressions/object-literal';
import { createPropertyDefinitionList } from '../../ast/expressions/property-definition-list';
import { createFunctionExpression } from '../../ast/expressions/function-expr';
import { createCallExpression, updateCallExpression } from '../../ast/expressions/call-expr';
import { updateNewExpression, NewExpression } from '../../ast/expressions/new-expr';
import { FormalParameter, updateFormalParameter } from '../../ast/expressions/formal-parameter';
import { createExpressionStatement } from '../../ast/statements/expr-stmt';
import { createPartiallyEmittedExpression } from '../../ast/types/partially-emitted-expression';

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
      case NodeKind.PropertyDefinition:
        return null;
      case NodeKind.FormalParameter:
        return visitFormalParameter(node);
      case NodeKind.ParenthesizedExpression:
        return visitParenthesizedExpression(node);
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
      case NodeKind.AsyncFunctionExpression:
        return visitAsyncFuncionExpression(node);
      case NodeKind.FunctionExpression:
        return visitFuncionFuncionExpression(node);
      case NodeKind.EnumDeclaration:
        return visitEnumDeclaration(node);
      case NodeKind.CallExpression:
        return visitCallExpression(node);
      case NodeKind.NewExpression:
        return visitNewExpression(node);
    }

    return visitEachChild(node, visitor, context);
  }

  function visitAssertionExpression(node: any): any {
    const expression = visitNode(node.expression, visitor);
    return createPartiallyEmittedExpression(expression, node, NodeFlags.None, node.start, node.end);
  }

  function visitFormalParameter(node: any): any {
    return updateFormalParameter(
      node,
      /* ellipsis */ node.ellipsis,
      /* binding */ visitNode(node.binding, visitor),
      /* isOptional  */ false,
      /* type  */ null,
      /* initilizer */ visitNode(node.initializer, visitor),
      /* decorators */ node.decorators,
      /* accessModifier */ null,
      /* isReadOnly */ false
    );
  }

  function visitAsyncFuncionDeclaration(node: any): any {
    const updated = updateFunctionDeclaration(
      node,
      /* isGenerator */ node.isGenerator,
      /* isAsync */ 1,
      /* name */ node.name,
      /* formalParameters */ node.formalParameters,
      /* contents */ node.contents,
      /* typeParameters */ null,
      /* type */ null
    );
    updated.flags = (updated.flags | NodeFlags.Declared) ^ NodeFlags.Declared;
    return updated;
  }

  function visitFuncionDeclaration(node: any): any {
    node.flags = (node.flags | NodeFlags.Declared) ^ NodeFlags.Declared;
    const updated = updateFunctionDeclaration(
      node,
      /* isGenerator */ node.isGenerator,
      /* isAsync */ 0,
      /* name */ node.name,
      /* formalParameters */ visitNode(node.formalParameters, visitor),
      /* contents */ visitNode(node.contents, visitor, context),
      /* typeParameters */ null,
      /* type */ null
    );
    updated.flags = (updated.flags | NodeFlags.Declared) ^ NodeFlags.Declared;
    return updated;
  }

  function visitAsyncFuncionExpression(node: any): any {
    node.flags = (node.flags | NodeFlags.Declared) ^ NodeFlags.Declared;
    const updated = updateFunctionDeclaration(
      node,
      /* isGenerator */ node.isGenerator,
      /* isAsync */ 0,
      /* name */ node.name,
      /* formalParameters */ visitNode(node.formalParameters, visitor),
      /* contents */ visitNode(node.contents, visitor, context),
      /* typeParameters */ null,
      /* type */ null
    );
    updated.flags = (updated.flags | NodeFlags.Declared) ^ NodeFlags.Declared;
    return updated;
  }

  function visitFuncionFuncionExpression(node: any): any {
    node.flags = (node.flags | NodeFlags.Declared) ^ NodeFlags.Declared;
    const updated = updateFunctionDeclaration(
      node,
      /* isGenerator */ node.isGenerator,
      /* isAsync */ 0,
      /* name */ node.name,
      /* formalParameters */ visitNode(node.formalParameters, visitor),
      /* contents */ visitNode(node.contents, visitor, context),
      /* typeParameters */ null,
      /* type */ null
    );
    updated.flags = (updated.flags | NodeFlags.Declared) ^ NodeFlags.Declared;
    return updated;
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

  function visitParenthesizedExpression(node: any): any {
    const innerExpression = node.expression;
    if (innerExpression === NodeKind.TypeAssertion || innerExpression.kind === NodeKind.AsExpression) {
      const expression = visitNode(node.expression, visitor);
      return createPartiallyEmittedExpression(expression, node, NodeFlags.None, node.start, node.end);
    }
    return visitEachChild(node, visitor, context);
  }

  function visitCallExpression(node: any): any {
    return updateCallExpression(
      node,
      visitNode(node.expression, visitor),
      /*typeArguments*/ null,
      visitNode(node.rgumentList, visitor)
    );
  }

  function visitNewExpression(node: NewExpression) {
    return updateNewExpression(
      node,
      visitNode(node.expression, visitor),
      /*typeArguments*/ null,
      visitNode(node.argumentList, visitor)
    );
  }

  function visitVariableDeclaration(node: any): any {
    node.exclamation = null;
    node.type = null;
    return node;
  }

  function visitEnumDeclaration(node: any): any {
    const statements: any[] = [];
    if (node.isConst) {
      // TODO
    }

    node.flags = (node.flags | NodeFlags.Declared) ^ NodeFlags.Declared;

    console.log(node.members.enumMembersList);

    const varAdded = createVariableStatement(
      createVariableDeclarationList(
        [createVariableDeclaration(node.members.enumMembersList as any, false, null, null, NodeFlags.None, -1, -1)],
        NodeFlags.None,
        -1,
        -2
      ),
      NodeFlags.Let,
      -1,
      -1
    );

    const exportName = node.name;

    //  x || (x = {})
    //  exports.x || (exports.x = {})

    let moduleArg = createBinaryExpression(
      exportName,
      '||',
      createAssignmentExpression(
        exportName,
        '=',
        createObjectLiteral(
          createPropertyDefinitionList(
            [],
            /* trailingComma */ false,
            /* multiline */ false,
            /* NodeFlags */ NodeFlags.None,
            /* start */ -1,
            /* end */ -1
          ),
          /* NodeFlags */ NodeFlags.None,
          /* start */ -1,
          /* end */ -1
        ),
        /* NodeFlags */ NodeFlags.None,
        /* start */ -1,
        /* end */ -1
      ),
      /* NodeFlags */ NodeFlags.None,
      /* start */ -1,
      /* end */ -1
    );
  }

  // TODO
}
