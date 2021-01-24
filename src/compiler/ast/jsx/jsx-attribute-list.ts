import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';
import { JsxAttribute } from './jsx-attribute';
import { JsxSpreadAttribute } from './jsx-spread-attribute';
import { updateNode } from '../../utils';

/**
 * Jsx attributes list
 */

export interface JsxAttributesList extends Node {
  readonly attributesList: (JsxSpreadAttribute | JsxAttribute)[];
}

export function createJsxAttributesList(
  attributesList: (JsxSpreadAttribute | JsxAttribute)[],
  flags: NodeFlags,
  start: number,
  end: number
): JsxAttributesList {
  return {
    kind: NodeKind.JsxAttributesList,
    attributesList,
    flags,
    intersects: false,
    transformFlags: TransformFlags.Jsx,
    parent: null,
    emitNode: null,
    start,
    end
  };
}

export function updateJsxAttributesList(
  node: JsxAttributesList,
  attributesList: (JsxSpreadAttribute | JsxAttribute)[]
): JsxAttributesList {
  return node.attributesList !== attributesList
    ? updateNode(createJsxAttributesList(attributesList, node.flags, node.start, node.end), node)
    : node;
}
