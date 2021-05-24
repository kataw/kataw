import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { Identifier } from '../expressions/identifier-expr';
import { DummyIdentifier } from '../internal/dummy-identifier';

export interface QualifiedType extends SyntaxNode {
  readonly qualification: Identifier | DummyIdentifier | QualifiedType;
  readonly id: Identifier | DummyIdentifier;
}

export function createQualifiedType(
  qualification: Identifier | DummyIdentifier | QualifiedType,
  id: Identifier | DummyIdentifier,
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
