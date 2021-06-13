import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { Identifier } from '../expressions/identifier-expr';
import { TypeParameter } from './type-parameter';
import { InterfaceExtends } from './interface-extends';

/**
 * InterfaceDeclaration
 */

export interface InterfaceDeclaration extends SyntaxNode {
  readonly name: Identifier;
  readonly typeParameters: TypeParameter | null;
  readonly types: InterfaceExtends[];
  readonly members: any;
}

export function createInterfaceDeclaration(
  name: Identifier,
  typeParameters: TypeParameter | null,
  types: InterfaceExtends[],
  members: any,
  start: number,
  end: number
): InterfaceDeclaration {
  return {
    kind: SyntaxKind.InterfaceDeclaration,
    name,
    typeParameters,
    types,
    members,
    flags: NodeFlags.ExpressionNode,
    start,
    end
  };
}
