# Kataw parser test case

> Auto-generated tests to validate error recovery
>

## Input

### Cases

> `````js
> ({...{eval}.x} = {});
> `````

> `````js
> ({...{b: 0}.x} = {});
> `````

> `````js
> a[foo].c = () => { throw Error(); };
> `````

> `````js
> ({...[0].x} = {});
> `````

> `````js
> async function foo(a = () => { "use strict"; return eval("x"); }) {}
> `````

> `````js
> async function foo(a = () => { "use strict"; return eval("x") }) { var x; return a(); }
> `````

> `````js
> async (a = b => await (0)) => {}
> `````

> `````js
> while(true) let[a] = 0
> `````

> `````js
> async function foo(a = () => { "use strict"; return eval =>("x"); }) {}
> `````

> `````js
> async function foo(a = (eval) => { "use strict"; funeval("x"); }) {}
> `````

> `````js
> let [o.x=1]=[]
> `````

> `````js
> let {x:o.f=1}={x:1}
> `````

> `````js
> var [((((a)))), b] = [];
> `````

> `````js
> var [(a)] = 0
> `````

> `````js
> const [(x)] = []
> `````

> `````js
> let [(x().foo)] = x
> `````

> `````js
> let [(x) = y] = [];
> `````

> `````js
> let [(x)] = [];
> `````

> `````js
> [++([])
> `````

> `````js
> [(++[])
> `````

> `````js
> this.foo[foo].bar(this)(bar)[foo]()--
> `````

> `````js
> ((x,x)) = 5
> `````

> `````js
> (((x,x))) = 5
> `````

> `````js
> async ({a = b})
> `````

> `````js
> new Date++;
> `````

> `````js
> for(let.a of 0);
> `````

> `````js
> for (let x in {}) { var x; }
> `````

> `````js
> [...{a = 0}.x] = [];
> `````

> `````js
> ({...{b = 0}.x} = {});
> `````

> `````js
> ({a: {b = 0}.x} = {});
> `````

> `````js
> [[(x, y)]] = x;
> `````

> `````js
> [...[(x, y)]] = x;
> `````

> `````js
> (async function*() { } = 1);
> `````

> `````js
> ([(x().foo)]) => x
> `````

> `````js
> let [(x) = y] = [];
> `````

> `````js
> ({a: {b = 0}.x} = {});
> `````

> `````js
> [...{a = 0}.x] = [];
> `````

> `````js
> [[(x, y)]] = x;
> `````

> `````js
> [...[(x, y)]] = x;
> `````

> `````js
> [...(a,b)] = [],
> `````

> `````js
> [...{ a }] = b,
> `````

> `````js
> for (+i in {});
> `````

> `````js
> /x
> y/
> `````

> `````js
> true:oops;
> `````

> `````js
> for(let.a of 0);
> `````

> `````js
> var x;
> `````

> `````js
> for([] = 0 of {});
> `````

> `````js
> for([,] = 0 of {});
> `````

> `````js
> for([a] = 0 of {});
> `````

> `````js
> for([a = 0] = 0 of {});
> `````

> `````js
> for([...a] = 0 of {});
> `````

> `````js
> for([...[]] = 0 of {});
> `````

> `````js
> for([...[a]] = 0 of {});
> `````

> `````js
> for({} = 0 of {});
> `````

> `````js
> for({p: x} = 0 of {});
> `````

> `````js
> for({p: x = 0} = 0 of {});
> `````

> `````js
> for({x} = 0 of {});
> `````

> `````js
> for({x = 0} = 0 of {});
> `````

> `````js
> async function f() { for await ({0: a = 1} = 1 of []) ; }
> `````

> `````js
> async function * f() { for await({a: a = 1} = 1 of []){ } }
> `````

> `````js
> async function * f() { for await({a} = 1 of []){ } }
> `````

> `````js
> async function f() { for await ([a] = 1 of []) ; }
> `````

> `````js
> async function f() { for await ({[Symbol.iterator]: a = 1} = 1 of []) ; }
> `````

> `````js
> for ((a?b:c) in y)z;
> `````

> `````js
> for ((a,b) in c);
> `````

> `````js
> for (((a,b)) in c);
> `````

> `````js
> for ({}.x);
> `````

> `````js
> for ([...[a]] = 0 in {});
> `````

> `````js
> /*@__PURE__*/
> `````

> `````js
> if (1) //! test\nfoo()
> `````

> `````js
>     /*!\r     * Re-indent test\r     */
> `````

> `````js
> //
> `````

> `````js
> //preserve
> `````

> `````js
> //@license
> `````

> `````js
> #!police
> `````

> `````js
> /*@__PURE__*/
> `````

> `````js
> for ({/*@__PURE__*/}.x);
> `````

> `````js
> for (/*x*/[/*x*/...[/*x*/a/*x*/]/*x*/] = 0 in { /*x*/ });
> `````

> `````js
> for ({/*x*/}.x); /*x*/
> `````

> `````js
> for/*x*/ ([...[a]] = 0 in {});
> `````

> `````js
> for ({}.x);
> `````

> `````js
> for ([...[a]/*x*/] = 0 in/*x*/ {});
> `````

> `````js
> foo() //! test
> `````

> `````js
> while (a/*x*/) {}
> `````

> `````js
> for ({}.x
> `````

> `````js
> for ([...a]] = 0 in {});
> `````

> `````js
> for ({}.
> `````

> `````js
> do while
> `````

> `````js
> [,,,,,,,/*x*/,,,,,,,,,,,,,/*x*/,,,,,,,,,,,];
> `````

> `````js
> for ([...[a]] = 0 in {/*x*/});
> `````

> `````js
> class /*x*/ x {}
> `````

### Templates

#### a/ case

`````js
#
`````
