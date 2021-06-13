import { forEachChild, isChildLess } from '../../src/kataw';
import { strict as assert } from 'assert';

export function visit(cst: any, filename: any): void {
  assertType(cst.fileName, 'string');
  assertType(cst.start, 'number');
  assertType(cst.end, 'number');

  forEachChild(cst, function (node: any) {
    return isChildLess(node) || forEachChild(node, visitor);
  });

  function visitor(node: any) {
    if (node) {
      assertType(node.kind, 'number');
      assertType(node.start, 'number');
      assertType(node.end, 'number');
      assertType(node.flags, 'number');
      forEachChild(node, visitor);
    }
  }

  function assertType(value: any, type: any) {
    assert.equal(typeof value, type, `snap: ${filename}: expected ${type}, passed ${value}.`);
  }
}
