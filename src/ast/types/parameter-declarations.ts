import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { TypeParameter } from './type-parameter';

export interface ParameterDeclarations extends SyntaxNode {
  readonly parameters: TypeParameter[];
  readonly trailingComma: boolean;
}

export function createParameterDeclarations(
  parameters: TypeParameter[],
  trailingComma: boolean,
  start: number,
  end: number
): ParameterDeclarations {
  return {
    kind: SyntaxKind.ParameterDeclarations,
    parameters,
    trailingComma,
    flags: NodeFlags.IsTypeNode,
    start,
    end
  };
}
