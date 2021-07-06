import { SyntaxNode, SyntaxKind, NodeFlags , TransformFlags} from '../syntax-node';

export interface NumberType extends SyntaxNode {
  readonly text: number;
  readonly rawText: string;
}

export function createNumberType(text: number, rawText: string, flags: NodeFlags, start: number, end: number): NumberType {
  return {
    kind: SyntaxKind.NumberType,
    text,
    rawText,
    flags,
    transformFlags: TransformFlags.None,
    start,
    end
  };
}
