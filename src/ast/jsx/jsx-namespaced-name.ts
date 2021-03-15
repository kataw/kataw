import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';
import { JsxIdentifier } from './jsx-identifier';
import { updateNode } from '../../utils';

/**
 * JsxOpeningElement
 */

export interface JsxNamespacedName extends Node {
  readonly name: JsxIdentifier;
  readonly namespace: JsxIdentifier;
}

export function createJsxNamespacedName(
  name: JsxIdentifier,
  namespace: JsxIdentifier,
  flags: NodeFlags,
  start: number,
  end: number
): JsxNamespacedName {
  return {
    kind: NodeKind.JsxNamespacedName,
    name,
    namespace,
    flags,
    symbol: null,
    transformFlags: TransformFlags.Jsx,
    start,
    end
  };
}
export function updateJsxNamespacedName(
  node: JsxNamespacedName,
  name: JsxIdentifier,
  namespace: JsxIdentifier
): JsxNamespacedName {
  return node.name !== name || node.namespace !== namespace
    ? updateNode(createJsxNamespacedName(name, namespace, node.flags, node.start, node.end), node)
    : node;
}
