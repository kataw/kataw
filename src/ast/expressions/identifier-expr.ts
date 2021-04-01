import { SyntaxNode, SyntaxKind, NodeFlags, AutoFix } from '../syntax-node';

export interface Identifier extends SyntaxNode {
  kind: SyntaxKind.Identifier;
  value: string;
}

export function createIdentifier(value: string, start: number, end: number): Identifier {
  return {
    kind: SyntaxKind.Identifier,
    value,
    autofix: AutoFix.NotFixable,
    flags: NodeFlags.ExpressionNode | NodeFlags.ChildLess,
    start,
    end
  };
}
