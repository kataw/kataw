import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { Identifier } from '../expressions/identifier-expr';
import { TypeParameter } from './type-parameter';

/**
 * InterfaceDeclaration
 */

export interface InterfaceExtends extends SyntaxNode {
  readonly name: Identifier;
  readonly typeParameters: TypeParameter | null;
}

export function createInterfaceExtends(
  name: Identifier,
  typeParameters: TypeParameter | null,
  start: number,
  end: number
): InterfaceExtends {
  return {
    kind: SyntaxKind.InterfaceExtends,
    name,
    typeParameters,
    flags: NodeFlags.None,
    start,
    end
  };
}
