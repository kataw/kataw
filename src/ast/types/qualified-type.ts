import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { Identifier } from '../expressions/identifier-expr';

export interface QualifiedType extends SyntaxNode {
  readonly qualification: Identifier | QualifiedType;
  readonly id: Identifier;
}

export function createQualifiedType(
  qualification: Identifier | QualifiedType,
  id: Identifier,
  start: number,
  end: number
): QualifiedType {
  return {
    kind: SyntaxKind.QualifiedType,
    qualification,
    id,
    flags: NodeFlags.None,
    start,
    end
  };
}
