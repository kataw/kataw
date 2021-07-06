import { SyntaxNode, SyntaxKind, NodeFlags , TransformFlags} from '../syntax-node';
import { TypeNode } from '.';

/**
 * An array type node.
 */

export interface ArrayType extends SyntaxNode {
  readonly type: TypeNode;
}

export function createArrayType(type: TypeNode, start: number, end: number): ArrayType {
  return {
    kind: SyntaxKind.ArrayType,
    type,
    flags: NodeFlags.IsTypeNode,
    transformFlags: TransformFlags.None,
    start,
    end
  };
}
