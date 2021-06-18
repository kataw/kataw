import { visitEachChild } from '../../src/visitor';
import { createTransform } from '../../src/transform/core';
import { strict as assert } from 'assert';

const transform = createTransform();

export function visit(cst: any, filename: string) {
  if(!cst) console.log(cst)
  assertType(cst.fileName, 'string');
  assertType(cst.start, 'number');
  assertType(cst.end, 'number');

  return visitEachChild(transform, cst, visitor);

  function visitor(node: any): any {
    return visitEachChild(transform, node, visitor);
  }

  function assertType(value: any, type: any) {
    assert.equal(typeof value, type, `snap: ${filename}: expected ${type}, passed ${value}.`);
  }

}

