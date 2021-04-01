import { SyntaxNode, SyntaxKind, NodeFlags, AutoFix } from '../syntax-node';
import { Identifier } from '../expressions/identifier-expr';

export interface QualifiedType extends SyntaxNode {
  kind: SyntaxKind.QualifiedType;
  qualification: Identifier | QualifiedType;
  id: Identifier;
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
    autofix: AutoFix.NotFixable,
    flags: NodeFlags.None,
    start,
    end
  };
}
