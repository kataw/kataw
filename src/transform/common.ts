import { createCallExpression } from '../ast/expressions/call-expr';
import { createArgumentList } from '../ast/expressions/argument-list';
import { createPropertyAccessExpression } from '../ast/expressions/property-access-expr';
import { createIdentifierReference } from '../ast/expressions/identifier-reference';
import { createTypeArguments } from '../ast/types/type-arguments';
import { NodeFlags, UniqueIdentifierFlags } from '../ast/node';
import { Char } from '../parser/scanner/char';
import { createUniqueIdentifier, UniqueIdentifier } from '../ast/internal/unique-identifier';

let nextAutoGenerateId = 0;

export function addUniqueIdentifier(recordTempVariable: any, reservedInNestedScopes?: boolean): UniqueIdentifier {
  const node = createUniqueIdentifier(UniqueIdentifierFlags.Auto, nextAutoGenerateId, reservedInNestedScopes);

  nextAutoGenerateId++;
  if (recordTempVariable) {
    recordTempVariable(node);
  }

  return node;
}

export function createMathPow(left: any, right: any, node: any) {
  return createCallExpression(
    createPropertyAccessExpression(
      createIdentifierReference('Math', 'Math', NodeFlags.None, /* start*/ -1, /*end*/ -1),
      createIdentifierReference('pow', 'pow', NodeFlags.None, /* start*/ -1, /*end*/ -1),
      NodeFlags.None,
      /* start*/ -1,
      /*end*/ -1
    ),
    createTypeArguments([], NodeFlags.None, -1, -1),
    createArgumentList([left, right], false, node.flags, node.start, node.end),
    node.flags,
    node.start,
    node.end
  );
}
export function escapeLeadingUnderscores(identifier: string): string {
  return (identifier.length >= 2 &&
  identifier.charCodeAt(0) === Char.Underscore &&
  identifier.charCodeAt(1) === Char.Underscore
    ? '_' + identifier
    : '_' + identifier) as string;
}
