import { Transform } from '../core';
import { SyntaxKind, NodeFlags } from '../../ast/syntax-node';
import { createToken } from '../../ast/token';
import { createUniqueIdentifier, UniqueIdentifierFlags } from '../../ast/internal/unique-identifier';
import { visitEachChild, visitNode } from '../../visitor';
import { hoistVariableDeclaration } from '../core';
import { createConditionalExpression } from '../../ast/expressions/conditional-expr';
import { createBinaryExpression } from '../../ast/expressions/binary-expr';
import { createParenthesizedExpression } from '../../ast/expressions/parenthesized-expr';
import { createAssignmentExpression } from '../../ast/expressions/assignment-expr';
import { createIdentifier } from '../../ast/expressions/identifier-expr';

export function transformES2020(transform: Transform): (node: any) => any {
  return transformSourceFile;

  function transformSourceFile(root: any): any {
    return visitEachChild(transform, root, visitor);
  }

  function visitor(node: any): any {
    switch (node.kind) {
      case SyntaxKind.BinaryExpression:
        if (node.operatorToken.kind === SyntaxKind.QuestionMarkQuestionMark) {
          // Create an unique identifier
          const right: any = createUniqueIdentifier(
            UniqueIdentifierFlags.Auto,
            transform.nextAutoGenerateId,
            /* reservedInNestedScopes */ false
          );
          transform.nextAutoGenerateId++;
          hoistVariableDeclaration(transform, right);
          const operatorToken = createToken(SyntaxKind.LooseEqual, NodeFlags.ChildLess, -1, -1);

          return createConditionalExpression(
            createBinaryExpression(
              createBinaryExpression(
                createParenthesizedExpression(
                  createAssignmentExpression(
                    right,
                    createToken(SyntaxKind.Assign, NodeFlags.ChildLess, -1, -1),
                    visitNode(node.left, visitor),
                    -1,
                    -1
                  ),
                  -1,
                  -1
                ),
                operatorToken,
                createToken(SyntaxKind.NullKeyword, NodeFlags.ChildLess, -1, -1) as any,
                -1,
                -1
              ),
              createToken(SyntaxKind.LogicalAnd, NodeFlags.ChildLess, -1, -1),
              createBinaryExpression(right, operatorToken, createIdentifier('undefined', 'undefined', -1, -1), -1, -1),
              -1,
              -1
            ),
            createToken(SyntaxKind.QuestionMark, NodeFlags.ChildLess, -1, -1),
            right,
            createToken(SyntaxKind.Colon, NodeFlags.ChildLess, -1, -1),
            visitNode(node.right, visitor),
            -1,
            -1
          );
        }
      default:
        return visitEachChild(transform, node, visitor);
    }
  }
}
