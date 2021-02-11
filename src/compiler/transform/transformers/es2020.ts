import { visitNode, visitEachChild } from '../../visitor';
import { Node, NodeKind, NodeFlags } from '../../ast/node';
import { createConditionalExpression } from '../../ast/expressions/conditional-expr';
import { createAssignmentExpression } from '../../ast/expressions/assignment-expr';
import { createBinaryExpression } from '../../ast/expressions/binary-expr';
import { createNullLiteral } from '../../ast/expressions/null-literal';
import { createIdentifierReference } from '../../ast/expressions/identifier-reference';
import { createParenthesizedExpression } from '../../ast/expressions/parenthesized-expr';
import { addUniqueIdentifier } from '../common';

export function transformES2020(context: any): (node: any) => Node {
  return (root: any) => visitEachChild(root, visitor, context);

  function visitor(node: any): Node {
    switch (node.kind) {
      case NodeKind.BinaryExpression:
        // perf(kenny): Consider to use number values for operators
        if (node.operator === '??') {
          // Create an unique identifier
          const right = addUniqueIdentifier(context.hoistVariableDeclaration, false);

          // '!==' is needed in strict mode because of the magic `document.all`
          const operator = (node.flags & NodeFlags.Strict) !== 0 ? '!==' : '!=';

          return createConditionalExpression(
            createBinaryExpression(
              createBinaryExpression(
                createParenthesizedExpression(
                  createAssignmentExpression(
                    right,
                    '=',
                    visitNode(node.left, visitor),
                    NodeFlags.None,
                    /* start */ -1,
                    /* end */ -1
                  ),
                  NodeFlags.None,
                  /* start */ -1,
                  /* end */ -1
                ),
                operator,
                createNullLiteral(NodeFlags.None, /* start */ -1, /* end */ -1),
                NodeFlags.None,
                /* start */ 1,
                /* end */ 1
              ),
              '&&',
              createBinaryExpression(
                right,
                operator,
                createIdentifierReference('undefined', 'undefined', NodeFlags.None, -1, /* end */ -1),
                NodeFlags.None,
                /* start */ 1,
                /* end */ 1
              ),
              NodeFlags.None,
              /* start */ 1,
              /* end */ 1
            ),
            right as any,
            visitNode(node.right, visitor),
            node.flags,
            node.start,
            node.end
          );
        }
      default:
        return visitEachChild(node, visitor, context);
    }
  }
}
