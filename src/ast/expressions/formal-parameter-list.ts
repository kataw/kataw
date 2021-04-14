import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { FormalParameter } from './formal-parameter';

export interface FormalParameterList extends SyntaxNode {
  readonly formalParameterList: readonly FormalParameter[];
  readonly trailingComma: boolean;
}

export function createFormalParameterList(
  formalParameterList: readonly FormalParameter[],
  trailingComma: boolean,
  flags: NodeFlags,
  start: number,
  end: number
): FormalParameterList {
  return {
    kind: SyntaxKind.FormalParameterList,
    formalParameterList,
    trailingComma,
    flags,
    start,
    end
  };
}
