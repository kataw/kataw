import { deepStrictEqual } from 'assert';
import { parse } from '../../src/parser/parser';
import { Context } from '../../src/parser/common';

describe('Parser - Array', () => {
  it('[]', () => {
    const source = parse(
      `


      function f([x]) { 'use strict' }

    `,
      'a',
      Context.None,
      true,
      {
        allowTypes: true
      },
      function (a: any, b: any, c: any, d: any) {
        throw b + '(' + c + ', ' + d + ')';
      }
    );
    console.log(source);
  });
});
