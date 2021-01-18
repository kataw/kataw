import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';
import { JsxAttribute } from './jsx-attribute';
import { JsxSpreadAttribute } from './jsx-spread-attribute';

/**
 * Jsx attributes list
 */

export interface JsxAttributesList extends Node {
  readonly attributesList: (JsxSpreadAttribute | JsxAttribute)[];
}

export function createJsxAttributesList(
  attributesList: (JsxSpreadAttribute | JsxAttribute)[],
  start: number,
  end: number
): JsxAttributesList {
  return {
    kind: NodeKind.JsxAttributesList,
    attributesList,
    flags: NodeFlags.None,
    intersects: false,
    transformFlags: TransformFlags.Jsx,
    parent: null,
    emitNode: null,
    start,
    end
  };
}
