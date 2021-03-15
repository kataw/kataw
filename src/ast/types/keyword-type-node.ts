import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';

/**
 * KeywordTypeNode
 *
 *  NodeKind.VoidKeyword
 *  NodeKind.NullKeyword
 *  NodeKind.AnyKeyword
 *  NodeKind.UnknownKeyword
 *  NodeKind.StringKeyword
 *  NodeKind.NumberKeyword
 *  NodeKind.BigIntKeyword
 *  NodeKind.SymbolKeyword
 *  NodeKind.BooleanKeyword
 *  NodeKind.UndefinedKeyword
 *  NodeKind.NeverKeyword
 *  NodeKind.ObjectKeyword
 *
 */

export type KeywordTypeNode = Node;

export function createKeywordTypeNode(kind: NodeKind, start: number, end: number): KeywordTypeNode {
  return {
    kind,
    flags: NodeFlags.None,
    symbol: null,
    transformFlags: TransformFlags.TypeScript,
    start,
    end
  };
}
