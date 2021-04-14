import { SyntaxNode, SyntaxKind, NodeFlags, AutoFix } from '../syntax-node';
import { TypeParameter } from './type-parameter';

export interface GenericType extends SyntaxNode {
  kind: SyntaxKind.GenericType;
  id: any;
  typeParameters: TypeParameter | null;
}

export function createGenericType(
  id: any,
  typeParameters: TypeParameter | null,
  start: number,
  end: number
): GenericType {
  return {
    kind: SyntaxKind.GenericType,
    id,
    typeParameters,
    autofix: AutoFix.NotFixable,
    flags: NodeFlags.None,
    start,
    end
  };
}
