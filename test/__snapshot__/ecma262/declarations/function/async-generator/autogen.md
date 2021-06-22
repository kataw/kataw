# Kataw parser test case

> Auto-generated tests to validate error recovery
>

### Cases

> `````js
> yield 2;
> `````

> `````js
> yield * 2;
> `````

> `````js
> yield yield 1;
> `````

> `````js
> yield * yield * 1;
> `````

> `````js
> yield 3 + (yield 4);
> `````

> `````js
> yield * 3 + (yield * 4);
> `````

> `````js
> (yield * 3) + (yield * 4);
> `````

> `````js
> yield 3; yield 4;
> `````

> `````js
> (function (yield) { })
> `````

> `````js
> (function yield() { })
> `````

> `````js
> (function await() { })
> `````

> `````js
> yield /* comment */ { yield: 12 }
> `````

> `````js
> yield *
> { yield: 12 }
> `````

> `````js
> yield 1; return
> `````

> `````js
> yield * 1; return 37; yield * 'dead';
> `````

> `````js
> ({ get yield() { } })
> `````

> `````js
> ({ yield: 1 })
> `````

> `````js
> yield * 1; return 37
> `````

> `````js
> ({ [await 1]: x } = { })
> `````

> `````js
> yield;
> ````

> `````js
> yield /* comment */
> `````

> `````js
> (yield)
> `````

> `````js
> [yield]
> `````

> `````js
> {yield}
> `````

> `````js
> yield, yield
> `````

> `````js
> (yield) ? yield : yield
> `````

> `````js
> (yield)
> ? yield : yield
> `````

> `````js
> x = class extends (yield) {}
> `````

> `````js
> x = class extends (null, yield) { }
> `````

> `````js
> x = class extends (await 10) {}
> `````

> `````js
> x = class extends (null, await 10) { }
> `````

> `````js
> x = class extends (a ? null : await 10) { }
> `````

> `````js
> await 10; return
> `````

> `````js
> await (yield 10)
> `````

> `````js
> await (yield 10); return 20; yield 'dead'
> `````

> `````js
> yield await 10
> `````

> `````js
> yield await 10; return
> `````

> `````js
> yield await 10; return 20; yield 'dead'
> `````

> `````js
> yield await /* comment\n */ 10
> `````

> `````js
> yield await // comment\n 10
> `````

> `````js
> await (yield 10); return 20
> `````

### Templates

#### declaration

`````js
async function * gen() {#}

`````

#### expression

`````js
({ async * gen () {#} })
`````
