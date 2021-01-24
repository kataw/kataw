import { Node, NodeKind, NodeFlags, TransformFlags } from '../node';
import { updateNode } from '../../utils';
import { BindingElement } from './binding-element';
import { SingleNameBinding } from './singleNameBinding';
import { IdentifierName } from './identifier-name';
import { NumericLiteral } from './numeric-literal';
import { BigIntLiteral } from './bigint-literal';
import { StringLiteral } from './string-literal';
import { ComputedPropertyName } from './computed-property-name';
import { PrivateIdentifier } from './private-identifier';
/**
 * Binding element
 */

export type PropertyKey =
  | IdentifierName
  | NumericLiteral
  | BigIntLiteral
  | StringLiteral
  | ComputedPropertyName
  | PrivateIdentifier;

export interface BindingProperty extends Node {
  readonly ellipsis: boolean;
  readonly key: PropertyKey;
  readonly value: BindingElement | SingleNameBinding;
}

export function createBindingProperty(
  ellipsis: boolean,
  key: PropertyKey,
  value: BindingElement | SingleNameBinding,
  flags: NodeFlags,
  start: number,
  end: number
): BindingProperty {
  return {
    kind: NodeKind.BindingProperty,
    ellipsis,
    key,
    value,
    flags,
    intersects: false,
    transformFlags: TransformFlags.ES2015 | TransformFlags.BindingPattern,
    parent: null,
    emitNode: null,
    start,
    end
  };
}

export function updateBindingProperty(
  ellipsis: boolean,
  node: BindingProperty,
  key: PropertyKey,
  value: BindingElement | SingleNameBinding
): BindingProperty {
  return node.ellipsis !== ellipsis || node.key !== key || node.value !== value
    ? updateNode(createBindingProperty(ellipsis, key, value, node.flags, node.start, node.end), node)
    : node;
}
