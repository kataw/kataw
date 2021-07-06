import { SyntaxNode, SyntaxKind, NodeFlags , TransformFlags} from '../syntax-node';

export interface BigIntType extends SyntaxNode {
  readonly text: number;
  readonly rawText: string;
}

export function createBigIntType(text: number, rawText: string, start: number, end: number): BigIntType {
  return {
    kind: SyntaxKind.BigIntType,
    text,
    rawText,
    flags: NodeFlags.IsTypeNode | NodeFlags.NoChildren,
    transformFlags: TransformFlags.None,
    start,
    end
  };
}
