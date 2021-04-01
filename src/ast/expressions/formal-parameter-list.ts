import { SyntaxNode, SyntaxKind, NodeFlags, AutoFix } from '../syntax-node';
import { FormalParameter } from './formal-parameter';

export interface FormalParameterList extends SyntaxNode {
  readonly formalParameterList: readonly FormalParameter[];
  readonly trailingComma: boolean;
}

export function createFormalParameterList(
  formalParameterList: readonly FormalParameter[],
  trailingComma: boolean,
  start: number,
  end: number
): FormalParameterList {
  return {
    kind: SyntaxKind.FormalParameterList,
    formalParameterList,
    trailingComma,
    autofix: AutoFix.NotFixable,
    flags: NodeFlags.ExpressionNode,
    start,
    end
  };
}
