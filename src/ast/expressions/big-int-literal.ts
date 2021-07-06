import { SyntaxNode, SyntaxKind, NodeFlags , TransformFlags} from '../syntax-node';

export interface BigIntLiteral extends SyntaxNode {
  readonly text: string;
  readonly rawText: string;
}

export function createBigIntLiteral(text: string, rawText: string, flags: NodeFlags, start: number, end: number): BigIntLiteral {
  return {
    kind: SyntaxKind.BigIntLiteral,
    text,
    rawText,
    flags,
    transformFlags: TransformFlags.None,
    start,
    end
  };
}
