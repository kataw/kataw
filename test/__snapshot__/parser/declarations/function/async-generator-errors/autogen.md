# Kataw parser test case

> Auto-generated tests to validate error recovery
>

### Cases

> `````js
> function await() { }
> `````

> `````js
> (async function * yield() { })
> `````

> `````js
> async function * foo(yield) { }
> `````

> `````js
> (async function * foo(yield) { })
> `````

> `````js
> yield = 1;
> `````

> `````js
> await = 1;
> `````

> `````js
> await++;
> `````

> `````js
> ++yield;
> `````

> `````js
> (yield *)
> `````

> `````js
> yield 3 + yield 4;
> `````

> `````js
> yield ? 1 : 2
> `````

> `````js
> yield / yield
> `````

> `````js
> + yield
> `````

> `````js
> + yield 3
> `````

> `````js
> var [yield] = [42];
> `````

> `````js
> var [await] = [42];
> `````

> `````js
> var {foo: await} = {a: 42};
> `````

> `````js
> var {foo: yield 24} = {a: 42};
> `````

> `````js
> [yield 24] = [42];
> `````

> `````js
> ({a: yield 24} = {a: 42});
> ````

> `````js
> for (await 'x' in {});
> `````

> `````js
> class C extends yield { }
> `````

> `````js
> class C extends await { }
> `````

> `````js
> for (await 'x' in {} of {});
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
