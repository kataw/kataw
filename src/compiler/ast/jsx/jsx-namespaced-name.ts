import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';
import { JsxIdentifier } from './jsx-identifier';

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
  start: number,
  end: number
): JsxNamespacedName {
  return {
    kind: NodeKind.JsxNamespacedName,
    name,
    namespace,
    flags: NodeFlags.None,
    intersects: false,
    transformFlags: TransformFlags.Jsx,
    parent: null,
    emitNode: null,
    start,
    end
  };
}
