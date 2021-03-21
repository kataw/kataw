import { visitNode, visitEachChild } from '../../visitor';
import { NodeKind } from '../../ast/node';
import { createPropertyAccessExpression } from '../../ast/expressions/property-access-expr';
import { createElementAccessExpression } from '../../ast/expressions/element-access-expr';
import { createAssignmentExpression } from '../../ast/expressions/assignment-expr';
import { addUniqueIdentifier, createMathPow } from '../common';

export function transformES7(context: any): any {
  const { hoistVariableDeclaration } = context;

  return transformSourceFile;

  function transformSourceFile(root: any) {
    return visitEachChild(root, visitor, context);
  }

  function visitor(node: any): any {
    switch (node.kind) {
      case NodeKind.AssignmentExpression:
        return visitAssignmentExpression(node);
      case NodeKind.BinaryExpression:
        return visitBinaryExpression(node);
      default:
        return visitEachChild(node, visitor, context);
    }
  }

  function visitAssignmentExpression(node: any): any {
    const left = visitNode(node.left, visitor);
    const right = visitNode(node.right, visitor);

    if (node.operator === '**=') {
      let target = left;
      let value = left;
      if (left.kind === NodeKind.ElementAccessExpression) {
        const expressionTemp = addUniqueIdentifier(hoistVariableDeclaration);
        const argumentExpressionTemp = addUniqueIdentifier(hoistVariableDeclaration);
        const { expression, flags, start, end, member } = left;
        target = createElementAccessExpression(
          createAssignmentExpression(expressionTemp, '=', member, flags, member.start, member.end),
          createAssignmentExpression(argumentExpressionTemp, '=', expression, flags, expression.start, expression.end),
          flags,
          start,
          right
        );
        value = createElementAccessExpression(expressionTemp, argumentExpressionTemp, flags, start, end);
      } else if (left.kind === NodeKind.PropertyAccessExpression) {
        const expressionTemp = addUniqueIdentifier(hoistVariableDeclaration);
        const { expression, flags, start, end, member } = left;

        target = createPropertyAccessExpression(
          createAssignmentExpression(expressionTemp, '=', member, flags, member.start, member.end),
          expression,
          flags,
          start,
          end
        );

        value = createPropertyAccessExpression(expressionTemp, expression, flags, start, end);
      }

      return createAssignmentExpression(
        target,
        '=',
        createMathPow(value, right, node),
        node.flags,
        node.start,
        node.end
      );
    }
    return visitEachChild(node, visitor, context);
  }

  function visitBinaryExpression(node: any): any {
    if (node.operator === '**') {
      return createMathPow(
        visitNode(visitNode(node.left, visitor), visitor),
        visitNode(visitNode(node.right, visitor), visitor),
        node
      );
    }
    return visitEachChild(node, visitor, context);
  }
}
