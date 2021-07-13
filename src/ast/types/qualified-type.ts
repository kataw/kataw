import { SyntaxNode, SyntaxKind, NodeFlags, TransformFlags } from '../syntax-node';
import { Identifier } from '../expressions/identifier-expr';
import { DummyIdentifier } from '../internal/dummy-identifier';

export interface QualifiedType extends SyntaxNode {
  readonly qualification: Identifier | DummyIdentifier | QualifiedType;
  readonly name: Identifier | DummyIdentifier;
}

export function createQualifiedType(
  qualification: Identifier | DummyIdentifier | QualifiedType,
  name: Identifier | DummyIdentifier,
  start: number,
  end: number
): QualifiedType {
  return {
    kind: SyntaxKind.QualifiedType,
    qualification,
    name,
    flags: NodeFlags.IsTypeNode,
    transformFlags: TransformFlags.None,
    start,
    end
  };
}
