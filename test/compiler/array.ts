import { deepStrictEqual } from 'assert';
import { parse } from '../../src/parser/parser';
import { printSourceFile } from '../../src/printer';
import { Context } from '../../src/parser/common';

describe('Parser - Array', () => {
  it('[]', () => {
    const source = parse(
      `
      const ZeroDigitLookup = [
        -1
      ];

      `,
      'a',
      Context.OptionsNext | Context.Module | Context.OptionsAllowTypes | Context.TopLevel | Context.Strict,
      true,
      function (a: any, b: any, c: any, d: any) {
        throw b + '(' + c + ', ' + d + ')';
        //console.log(b + '(' + c + ', ' + d + ')');
      },
      {
        allowTypes: true
      }
    );
    console.log(printSourceFile(source));
  });
});
// for(t`${x in y}`;;);
// class C { #aaa; f() { this.#aaa } }

/*
class Foo {
	#field
	#method() {}
	baseline() {
		a().foo
		b().foo(x)
		c()?.foo(x)
		d().foo?.(x)
		e()?.foo?.(x)
	}
	privateField() {
		a().#field
		b().#field(x)
		c()?.#field(x)
		d().#field?.(x)
		e()?.#field?.(x)
		f()?.foo.#field(x).bar()
	}
	privateMethod() {
		a().#method
		b().#method(x)
		c()?.#method(x)
		d().#method?.(x)
		e()?.#method?.(x)
		f()?.foo.#method(x).bar()
	}
}
*/
