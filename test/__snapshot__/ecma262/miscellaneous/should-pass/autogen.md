# Kataw parser test case

> Auto-generated tests to validate error recovery
>

### Cases

> `````js
> (function () { "use\x20strict"; with (a); }())
> `````

> `````js
> (function foo([[x]]) { var x;{ function x() {} }  })([[1]]);
> `````

> `````js
> (function foo(...[x]) { var x; { function x() {} } })(1);
> `````

> `````js
> (function foo(y, z) {{function x() {}} })(1);
> `````

> `````js
> {(function foo() { { function foo() { return 0; } } })();}
> `````

> `````js
> (function foo(x) { {  function x() {} } })(1);
> `````

> `````js
> let b = ((x, y) => (x, x * y), 1);
> `````

> `````js
> const {a: b = my_var} = {}
> `````

> `````js
> function inner2({a} = {a: my_var}) { }
> `````

> `````js
> x => (y, z) => z * (x + y)
> `````

> `````js
> (x, y) => (u, v) => x*u + y*v
> `````

> `````js
> a, b => 0
> `````

> `````js
> a, b, (c, d) => 0
> `````

> `````js
> (a, b, (c, d) => 0)
> `````

> `````js
> (a, b) => 0, (c, d) => 1
> `````

> `````js
> ((a, b) => {}, (a => a + 1))
> `````

> `````js
> foo ? bar : baz => {}
> `````

> `````js
> ({}) => {}
> `````

> `````js
> (a, b = c) => {}
> `````

> `````js
> (x, y = 9, z) => {}
> `````

> `````js
> (x = 9, ...a) => {}
> `````

> `````js
> (x, y = 9, {b}, z = 8, ...a) => {}
> `````

> `````js
> ({a} = {}) => {}
> `````

> `````js
> (a = eval('')) => { }
> `````

> `````js
> for ([a, my_var, b] in {}) { my_var; }
> `````

> `````js
> for ({a, my_var} in {}) { my_var; }
> `````

> `````js
> for (let my_var = 0; my_var < 1; ++my_var) { } my_var;
> `````

> `````js
> 'use strict'; if (true) { function my_var() {} } my_var;
> `````

> `````js
> (a = my_var) => {}
> `````

> `````js
> var my_var; my_var;
> `````

> `````js
> let [a, my_var] = [1, 2]; my_var;
> `````

> `````js
> var {a: my_var} = {a: 3}; my_var;
> `````

> `````js
> var {my_var} = {my_var: 3}; my_var;
> `````

> `````js
> let {my_var} = {my_var: 3}; my_var;
> `````

> `````js
> [a, {b: {c = 1}}] = arr
> `````

> `````js
> `${/\\d/.exec("1")[0]}`
> `````

> `````js
> async function f() { for await (var x of xs); }
> `````

> `````js
> `a${await foo}d`
> `````

> `````js
> `a${b=c}d`
> `````

> `````js
> async (a, b, c);
> `````

> `````js
> async (a, async, c);
> `````

> `````js
> async (a, async, await);
> `````

> `````js
> (...{destruct}) => x
> `````

> `````js
> [{x: y.z}] = a
> `````

> `````js
> [{x: y.z}]
> `````

> `````js
> [{}.foo] = x
> `````

> `````js
> [{}[foo]] = x
> `````

> `````js
> [x = y]
> `````

> `````js
> [x.y = z]
> `````

> `````js
> [x + y]
> `````

> `````js
> [this]
> `````

> `````js
> ([...x+y]);
> `````

> `````js
> [5[foo]]=x
> `````

> `````js
> (z = [...x.y] = z) => z
> `````

> `````js
> ({"a b c"(){}});
> `````

> `````js
> ({"a b c": bar}) => x
> `````

> `````js
> ({15: bar});
> `````

> `````js
> ({15: bar}) => x
> `````

> `````js
> ({...x, ...y});
> `````

> `````js
> [...new x];
> `````

> `````js
> var [localVar = defaultValue] = obj
> `````

> `````js
> (a.b().c().d) = 1;
> `````

> `````js
> ([x, y] = z);
> `````

> `````js
> ([[x, y] = z]);
> `````

> `````js
> ([[x, y] = z]) => x;
> `````

> `````js
> (a[b]) += 1;
> `````

> `````js
> (a) += 1;
> `````

> `````js
> (this[b]) += 1;
> `````

> `````js
> (delete /a/.x);
> `````

> `````js
> (void /=/g/m.x);
> `````

> `````js
> ([new x]);
> `````

> `````js
> ([a / b]);
> `````

> `````js
> ([a \
> /b/g]);
> `````

> `````js
> ([void /=/g/m.x]);
> `````

> `````js
> (this[b]) = 1;
> `````

> `````js
> x({'a':b, 'c':d}=obj);
> `````

> `````js
> x({'a':b, c:d}=obj);
> `````

> `````js
> ({ident: [foo, bar].join("")})
> `````

> `````js
> [...{x}/y]
> `````

> `````js
> [.../x//y]
> `````

> `````js
> new x()[y] = z
> `````

> `````js
> typeof new x()
> `````

> `````js
> [(a) = 0] = 1
> `````

> `````js
> [(a = 0)]
> `````

> `````js
> ({a:(b = 0)})
> `````

> `````js
> a = { b(c=1) {} }
> `````

> `````js
> (...my_var) => { }
> `````

> `````js
> ([a, my_var, b]) => my_var;
> `````

> `````js
> ([a, my_var, b] = [1, 2, 3]) => my_var;
> `````

> `````js
> { let x; } var x;
> `````

> `````js
> o = {f(f) { }}
> `````

> `````js
> class o {f(x) { function x() {} }}
> `````

> `````js
> [[x = true] = true] = y
> `````

> `````js
> [x = true] = y
> `````

> `````js
> [[x] = true] = y
> `````

> `````js
> ({a: x = true} = y)
> `````

> `````js
> ({a: {x = true} = true} = y)
> `````

> `````js
> f = ([xCls2 = class { static name() {} }]) => {}
> `````

> `````js
> ({a, my_var} = {a: 0, my_var: 5}) => my_var;
> `````

> `````js
> ++let;
> `````

> `````js
> ({ let: 1 })
> `````

> `````js
> function arguments() { }
> `````

> `````js
> (function f() { 0, function g() { var a; } })();
> `````

> `````js
> for([a,b[a],{c,d=e,[f]:[g,h().a,(1).i,...j[2]]}] in 3);
> `````

> `````js
> a *= b
> `````

> `````js
> 5 + yield
> `````

> `````js
> log({foo: [bar]} = obj);
> `````

> `````js
> switch (true) { default: function g() {} }
> `````

> `````js
> a = null      && b + 16;
> `````

> `````js
> a = !"e" && 24 % b;
> `````

> `````js
> a = b + 32    && null;
> `````

> `````js
> arrObj0[0] = -1482624655;
> `````

> `````js
> async function foo() {};
> `````

> `````js
> async
> function foo() {
>
>};
> `````

> `````js
> function f(enum) {}
> `````

> `````js
> (function* (enum) {});
> `````

> `````js
> (class enum {})
> `````

> `````js
> (class { constructor(enum) {} });
> `````

> `````js
> ({ set p(enum) {} });
> `````

> `````js
> try {} catch (enum) {}
> `````

> `````js
> let [enum] = [];
> `````

> `````js
> { let enum; }
> `````

> `````js
> { const enum = null; }
> `````

> `````js
> ({get __proto__() {}, set __proto__(x) {}})
> `````

> `````js
> ({[6+3]() {}})
> `````

> `````js
> ({[2*308]:0})
> `````

> `````js
> ({2e308:0})
> `````

> `````js
> ({0x0:0})
> `````

> `````js
> let g = /* before */GeneratorFunction("a", " /* a */ b, c /* b */ //", "/* c */ yield yield; /* d */ //")/* after */;
> `````

> `````js
> /* before */async function /* a */ f /* b */ ( /* c */ x /* d */ , /* e */ y /* f */ ) /* g */ { /* h */ ; /* i */ ; /* j */ }/* after */
> `````

> `````js
> class G { /* before */async /* a */ [ /* b */ "g" /* c */ ] /* d */ ( /* e */ ) /* f */ { /* g */ }/* after */ }
> `````

> `````js
> /* before */class /* a */ A /* b */ extends /* c */ class /* d */ B /* e */ { /* f */ } /* g */ { /* h */ }/* after */
> `````

> `````js
> let g = /* before */function /* a */ ( /* b */ x /* c */ , /* d */ y /* e */ ) /* f */ { /* g */ ; /* h */ ; /* i */ }/* after */;
> `````

> `````js
> /*
>   */ /* optional SingleLineDelimitedCommentSequence */-->the comment extends to these characters
> `````

> `````js
> var x = 42;/*\n*/-->is eol-comment\nvar y = 37;
> `````

> `````js
> -->
> `````

> `````js
> 42 /* block comment 1 */ /* block comment 2 */
> `````

> `````js
> // line comment
>  42
> `````

> `````js
> function f() { /* infinite */ while (true) { } /* bar */ var each; }
> `````

> `````js
> while (i-->0) {}
> `````

> `````js
> /**/ function a() {}
> `````

> `````js
> #!---IGNORED---\n
> `````

> `````js
> #!---IGNORED---\xE2\x80\xA8
> `````

> `````js
> 0/*\n*/--> a comment
> `````

> `````js
> Function("-->", "");
> `````

> `````js
> -->[0];
> `````

> `````js
> x = -1 <!--x;
> `````

> `````js
> <!-- test --->
> `````

> `````js
> <!--the comment extends to these characters
> `````

> `````js
> ('\0')
> `````

> `````js
> ("x")
> `````

> `````js
> ('\7a')
> `````

> `````js
> x = a > b instanceof c
> `````

> `````js
> foo( a instanceof b + c )
> `````

> `````js
> foo( a instanceof b > c )
> `````

> `````js
> foo( a + b instanceof c )
> `````

> `````js
> (a * b + c) * d
> `````

> `````js
> a|=b^=c&=d>>>=e>>=f<<=g%=h/=i*=j**=k-=l+=m=n
> `````

> `````js
> a !== b === c != d == e
> `````

> `````js
> var \u0052oo = 0;
> `````

> `````js
> var \u{00000000052}oo = 0;
> `````

> `````js
> var foob\u{c481}r = 0;
> `````

> `````js
> if (a) --a;
> `````

> `````js
> --(((x)));
> `````

> `````js
> (--this.x)
> `````

> `````js
> (((x)))++;
> `````

> `````js
> while ({"a": 2e308.b = function* u() {}} = 8381.11);
> `````

> `````js
> (delete new function f(){} + function(a,b){}(5)(6))
> `````

> `````js
> function f() { [] in [5,6] * [,5,] / [,,5,,] || [a,] && new [,b] % [,,] }
> `````

> `````js
> 1 + {get get(){}, set set(a){}, get1:4, set1:get-set, }
> `````

> `````js
> function f() { 1 + {get get(){}, set set(a){}, get1:4, set1:get-set, } }
> `````


> `````js
> for (; ([x, bw, y = z], [{j, [(((t)))]: g = "N	¯B", c, o} = class u extends `c` {}], bar, ka) => `c{([, ] ** delete 2e308.static ++), arguments}`;) hnjtmujeg: for (ikdgsltnabvjnk of false) var y = /([])*?|K\x78B\b/gu
> `````

> `````js
> const a = (((({})))`æhq` / (b))
> `````

> `````js
> ({} = (x), of, a) => (a)
> `````

> `````js
> throw (b = function* eo() { yield; }, [a]) => 2e308
> `````

> `````js
> (eval), a = ((((((-2e308)))).if)(...((this)), ...((r)), (( of => {}))));
> `````

> `````js
> ({a: 1 || 1}.a = 1)
> `````

> `````js
> for (;; ({} = (--x), of, ...bar) => (a)) {}
> `````

> `````js
> (class extends a { constructor() {}  *i() {}  })
> `````

> `````js
> if (new (2e308)) try {} finally {} else do debugger; while (((6.98114699124408e222)));
> `````

> `````js
> function f() { (4,(5,a(3,4))),f[4,a-6] }
> `````

> `````js
> delete void 0
> `````

> `````js
> a(5,)
> `````

> `````js
> function f() { a(b[7], c <d> e.l, new a() > b) }
> `````

> `````js
> async () => { let b = async () => []; for (a in await b()); }
> `````

> `````js
> switch (sw) { case a ? b - 7[1] ? [c,,] : d = 6 : { } : }
> `````

> `````js
> switch (l) { case a = b ? c : d : }
> `````

> `````js
> switch (f()) { case 5 * f(): default: case '6' - 9: ++i }
> `````

> `````js
> if (0) obj.foo\u03bb;
> `````

> `````js
> ([1 || 1].a = 1)
> `````

> `````js
> const a = 7; eval(""); a-=1
> `````

> `````js
> do if (a) with (b) continue; else debugger; while (false)
> `````

> `````js
> { a[5],6; {} ++b-new (-5)() } c().l++
> `````

> `````js
> { l1: l2: l3: { this } a = 32 ; { i++ ; { { { } } ++i } } }
> `````

> `````js
> 1 + {get get(){}, set set(a){}, get1:4, set1:get-set, }
> `````

> `````js
> class x {static set key(ident){}}
> `````

> `````js
> for (class x { [a](){} }.x in c);
> `````

> `````js
> (a)++
> `````

> `````js
> ({a:b,...obj}) => {}
> `````

> `````js
> ({a,...obj}) => {}
> `````

> `````js
> ({a:b,...obj} = foo)
> `````

> `````js
> var h = tempFun `${ (x => x) } ${ (((x => x))) } ${ undefined }`
> `````

> `````js
> new (-1)
> `````

> `````js
> ({a:b,...obj}) => {}
> `````

> `````js
> ({a,...obj}) => {}
> `````

> `````js
> ({a:b,...obj} = foo)
> `````

> `````js
> let foo = (async bar => bar);
> `````

> `````js
> class A { foo() {} foo() {} }
> `````

> `````js
> class F { static get foo() {} static get foo() {} }
> `````

> `````js
> for ([a, ...b] in {}) {}
> `````

> `````js
> a ? b + 1 ? c + 3 * d.l : d[5][6] : e
> `````

> `````js
> a in b instanceof delete -c
> `````

> `````js
> ~new new a(1)(i++)(c[l])
> `````

> `````js
> a[2] = b.l += c /= 4 * 7 ^ !6
> `````

> `````js
> new (f + 5)(6, (g)() - 'l'() - true(false))
> `````

> `````js
> for ( a ; ; ) { break }
> `````

> `````js
> for (of of of){}
> `````

> `````js
> for (var of of of){}
> `````

> `````js
> o[foo](a,...bar)
> `````

> `````js
> 1 * (((2 + 3) / 4) * ((5) / 6 + 7) - 8)
> `````

> `````js
> (++((((a)))))
> `````

> `````js
> test !== false ? success() : error()
> `````

> `````js
> for ({a,b};;);
> `````

> `````js
> a <<= b << c;
> `````

> `````js
> function f({a = 20} = {a: 40}, b = a) {}
> `````

> `````js
> function f([a,b,c] = [1,2,3]) {}
> `````

> `````js
> var {x: [y, ...[...[...{z: [...z]}]]]} = 20
> `````

> `````js
> (({a, b, ...r}) => {})({a: 1, b: 2, c: 3, d: 4});
> `````

> `````js
> let c = {}; let o = {a: 1, b: 2, ...c, d: 3, ...c, e: 5};
> `````

> `````js
> if(x)/y/;;
> `````

> `````js
> for(;;)/y/;
> `````

> `````js
> function f(){}/1/;
> `````

> `````js
> for(;function(){}/1;)break
> `````

> `````js
> for (var a='5' in {key:5} ? 5 : bar in {key:5});
> `````

> `````js
> foo:for(;;)continue foo
> /bar/d
> `````

> `````js
> new[]
> `````

> `````js
> a++
> `````

> `````js
> /p/;
> `````

> `````js
> ({ __proto__: null, get __proto__(){} })
> `````

> `````js
> (eval = 10) => 4
> `````

> `````js
> function foo(y) {} / 100 /
> `````

> `````js
> ++a+b
> `````

> `````js
> ++a - b--
> `````

> `````js
> ++a - - --b
> `````

> `````js
> --a+b--
> `````

> `````js
> --a - + ++b
> `````

> `````js
> + ++a + + ++b
> `````

> `````js
> -a++- -b++
> `````

> `````js
> ++arguments;
> `````

> `````js
> var yield;
> `````

> `````js
> with ({}) { block; }
> `````

> `````js
> (function not_gen() {yield * 2;})
> `````

> `````js
> (function * gen() { (function not_gen() {yield(100)}) })
> `````

> `````js
> { var foo; };
> `````

> `````js
> ext(function() {foo++}); ext(foo)
> `````

> `````js
> var {a = my_var} = {}
> `````

> `````js
> result = (0 >>> 0)
> `````

> `````js
> [ b, a ] = [ a, b ]
> `````

> `````js
> 1e+05
> `````

> `````js
> 0o110/2
> `````

> `````js
> var N = 70*1000;
> `````

> `````js
> function fnc({x: {}}) {}
> `````

> `````js
> function spreadOpt3(r, ...[]){ return spreadTarget(...r); }
> `````

> `````js
> function argsLengthRestObject(...{a}) {}
> `````

> `````js
> function arrayRestWithNestedRest(...[...r]) {}
> `````

> `````js
> it => { var [,,...rest] = it; return rest; }
> `````

> `````js
> function* g() { (yield), (yield) }
> `````

> `````js
> function yield(yield) { yield: yield (yield + yield (0)); }
> `````

> `````js
> function* g() { function f(yield) { yield (yield + yield (0)); } }
> `````

> `````js
> ({ [x = y]: 1 / 2 })
> `````

> `````js
> ({ x: (x) })
> `````

> `````js
> ({ x: x / y })
> `````

> `````js
> ({ [x]: (x) })
> `````

> `````js
> ({ [x]: (x) = "bar" })
> `````

> `````js
> while ({["a"]: 2e308.b = function* u() {}} = 8381.11);
> `````

> `````js
> for (const [x,y,z] of foo);
> `````

> `````js
> [{a = 0}] = [{}];
> `````

> `````js
> var h = ([...[{a = 0}]]) => {};
> `````

> `````js
> [...[]]
> `````

> `````js
> [a, ...b]
> `````

> `````js
> { var foo; };
> `````

> `````js
> { var {foo=3} = {}; };
> `````

> `````js
> { var [foo] = [1]; };
> `````

> `````js
> try {} catch({}) {}
> `````

> `````js
> { let [{a = 0}] = [{}]; }
> `````

> `````js
> [{a = 0}] = [{}];
> `````

> `````js
> f = function({x} = {x: 10}) {};
> `````

> `````js
> [ok.v] = 20;
> `````

> `````js
> [a,,b] = array;
> `````

> `````js
> var [x = 10, y, z] = a;
> `````

> `````js
> [{x:x = 1, y:y = 2, ...z}, [a = 3, b = 4, c = 5]]
> `````

> `````js
> for (const {x, z} = { x : 0, z : 3 }; z != 3 || x != 0;) {}
> `````

> `````js
> for (let {x, z} = { x : 0, z : 3 }; z != 0; z--) {}
> `````

> `````js
> [[[[[[[[[[[[[[[[[[[[{a=b[0]}]]]]]]]]]]]]]]]]]]]]=0;
> `````

> `````js
> [[x]] = 0
> `````

> `````js
> [a,a,,...a]=0;
> `````

> `````js
> [,,]=0
> `````

> `````js
> [a,b=0,[c,...a[0]]={}]=0
> `````

> `````js
> ({d=0,f:h().a} = 0)
> `````

> `````js
> ({x: y = z = 0} = 1)
> `````

> `````js
> ({x: [y] = 0} = 1)
> `````

> `````js
> ({a:let} = 0);
> `````

> `````js
> ({0: y} = 0)
> `````

> `````js
> ({x=0, y:z} = 0)
> `````

> `````js
> a = [arguments = 4, eval = 5] = value;
> `````

> `````js
> x = [ x = 14 ] = [,];
> `````

> `````js
> a = [, , x, , ...y] = [1, 2, 3, 4, 5, 6];
> `````

> `````js
> a = { x: [y] } =  { x: [321] };
> `````

> `````js
> [,] = 1;
> `````

> `````js
> x = {42e-2 : x = 42}
> `````

> `````js
> ([[]]=0)
> `````

> `````js
> [(x) = y] = z
> `````

> `````js
> [_, x]
> `````

> `````js
> a = { x: x = flag1 = true, y: y = flag2 = true } = { y: 1 };
> `````

> `````js
> 0, {} = undefined;
> `````

> `````js
> a = { a: x, y } = { a: 3 };
> `````

> `````js
> [ {}[x()] , ]
> `````

> `````js
> [ x , ...{}[yield] ]
> `````

> `````js
> [...x, y]
> `````

> `````js
> [...x,]
> `````

> `````js
> [ , ...x]
> `````

> `````js
> [...x = 1]
> `````

> `````js
> [...x.y]
> `````

> `````js
> [[(x, y)]]
> `````

> `````js
> [ {}[x()] ]
> `````

> `````js
> [ {}[ yield ] ]
> `````

> `````js
> [ x = yield ]
> `````

> `````js
> [ xCover = (0, function() {}), cover = (function() {}) ]
> `````

> `````js
> ({ x: { x } } = { x: undefined });
> `````

> `````js
> ({ [a.b]: x } = {});
> `````

> `````js
> ({ c } = { c: 1 });
> `````

> `````js
> ({ x = y } = {});
> `````

> `````js
> a = { a = x += 1, b = x *= 2 } = value;
> `````

> `````js
> a = [...{ 0: x, length }] = value;
> `````

> `````js
> a = [[x[await]]] = value;
> `````

> `````js
> [[x[yield]]] = value;
> `````

> `````js
> a = [arguments = 4, eval = 5] = value;
> `````

> `````js
> () => { [ { c } ]  = [ { c: "string" } ]; }
> `````

> `````js
> () => { ({ a: { c } } = { a: { c: "string" } }); }
> `````

> `````js
> () => { ({ a: [ c ] } = { a: [ "string" ] }); }
> `````

> `````js
> [a.x] = g()
> `````

> `````js
> var {[foo("abc")]:x} = {abc:42};
> `````

> `````js
> [...x] = it
> `````

> `````js
> [ a = (initialized = true, initializer) ] = value
> `````

> `````js
> ({ }).x
> `````

> `````js
> a += (b + c)
> `````

> `````js
> if (0) new a(b+c).d = 5
> `````

> `````js
> ({} = undefined);
> `````

> `````js
> [[a]=[1]] = [];
> `````

> `````js
> [[[] = [function () { }] ] = []]
> `````

> `````js
> (function () { var x; for ({x:x}.x of [1,2]) {}; })();
> `````

> `````js
> ((a, { b = 0, c = 3 }) => { return a === 1 && b === 2 && c === 3; })(1, { b: 2 });
> `````

> `````js
> ({a: ("string") / a[3](a = b) })
> `````

> `````js
> ({a: ("string") / a[3](a = b.c) })
> `````

> `````js
> ({a: ("string") / a[3](((((a = b.c))))) })
> `````

> `````js
> ({a: ("string") / a[3](a = b.c) })
> `````

> `````js
> ({a: ("string") / a[3] })
> `````

> `````js
> ({a: ("string") / 3 })
> `````

> `````js
> ({a: "string"})
> `````

> `````js
> ({a: {b: (c)}})
> `````

> `````js
> ({"string": {a: (a)}})
> `````

> `````js
> ({["a"]: [b]} = 1 / (d = ((a)) = a))
> `````

> `````js
> ({"a": [b]} = 1 / (d = ((a)) = a))
> `````

> `````js
> ({a: [b]} = 1 / (d = ((a)) = a)
> `````

> `````js
> ({"a": [b.c = x]} = 1 / (d = ((a)) = a))
> `````

> `````js
> ({1: [b.c = x]} = 1 / (d = ((a)) = a))
> `````

> `````js
> ({1: [b.c = x]} = 2 / (dd = ((a)) = 3))
> `````

> `````js
> ({a = [b]} = 1)
> `````

> `````js
> ({a = [b]} = 1)
> `````

> `````js
> ({a = [b]} = 1 / (c = d))
> `````

> `````js
> ({a = [b]} = 1 / (d = (e)))
> `````

> `````js
> (x, {a = [b]} = 1 / (d = (e)))
> `````

> `````js
> (x, {a = [b]} = 1)
> `````

> `````js
> ({a = [b]} = 1)
> `````

> `````js
> (x, {a = [b]} = 1)
> `````

> `````js
> {[(a)()]: {}})
> `````

> `````js
> {[(x, a)()]: {}})
> `````

> `````js
> (x, {[a = (b)]: {}})
> `````

> `````js
> ({[a = (b)]: {}})
> `````

> `````js
> [(x.y)] = obj
> `````

> `````js
> [[x]] = 0
> `````

> `````js
> ({ a: obj["a"] } = {})
> `````

> `````js
> (x, { a: obj["a"] } = {})
> `````

> `````js
> ({b = (a,) => {}}) => {}
> `````

> `````js
> (x, {b = (a,) => {}}) => {}
> `````

> `````js
> (((((({x:foo().x, y:foo().y} = {x:201, y:301}))))));
> `````

> `````js
> (x, ((((({x:foo().x, y:foo().y} = {x:201, y:301}))))));
> `````

> `````js
> ({x:a["x"]} = {x:20});
> `````

> `````js
> (x, {x:a["x"]} = {x:20});
> `````

> `````js
> (x, {[`abc${"def"}`]:x2} = {abcdef:30});
> `````

> `````js
> ({[`abc${"def"}`]:x2} = {abcdef:30});
> `````

> `````js
> ({x = 1} = {});
> `````

> `````js
> (x, {x = 1} = {});
> `````

> `````js
> (x,   {} = {});
> `````

> `````js
> ({} = {});
> `````

> `````js
> var {__proto__: a, __proto__: b} = {};
> `````

> `````js
> var f3 = ({__proto__: a, __proto__: b} = {}) => {}
> `````

> `````js
> [...[function f() {}.prop]] = []
> `````

> `````js
> a = {}; ({x:a["x"]} = {});
> `````

> `````js
> function foo() { return {}; }; ({x:foo()["x"]} = {});
> `````

> `````js
>  a = {}; ({x:a.x} = {});
> `````

> `````js
> ({x:z = 1, x1:y = 20} = {});
> `````

> `````js
> ({x, x1:y = 20} = {});
> `````

> `````js
> [a] = [];
> `````

> `````js
> ( [a] = []);
> `````

> `````js
> [a] = [2];
> `````

> `````js
> [a, b] = [1];
> `````

> `````js
> [a] = [1, 2];
> `````

> `````js
> function foo() { return {}; }; [foo().x] = [];
> `````

> `````js
> a = {}; [a.x] = [];
> `````

> `````js
> [[...a], ...b] = [[],];
> `````

> `````js
> [[[...a]]] = [[[]]];
> `````

> `````js
> [a, [b]] = [1, []];
> `````

> `````js
> [[a]] = [[]];
> `````

> `````js
> [a = 1, b] = [];
> `````

> `````js
> [a = 1] = [];
> `````

> `````js
> [...a] = [];
> `````

> `````js
> [a] = [,,];
> `````

> `````js
>  [,,a] = [];
> `````

> `````js
> a = [1], i = 0; [a[(() => 1 + i)()]] = [];
> `````

> `````js
> [a, b] = [1];
> `````

> `````js
> [a] = [2];
> `````

> `````js
> obj = {x:1}; [...obj["x"]] = [10];
> `````

> `````js
> [a, b] = [1];
> `````

> `````js
> zee = "x"; ({[zee +"foo"]:x1} = {})
> `````


> `````js
> [...{a:a = 1}] = [{}];
> `````

> `````js
> [...[a = 1]] = [[]];
> `````

> `````js
> ({a: [b = 1, c = 2].b} = {a:[]});
> `````


> `````js
> obj = { foo({x}) {}, set prop([x]) {} }
> `````

> `````js
> [...((a))] = [1, 2, 3]
> `````

> `````js
> ({ tyssjh = ((cspagh = 4) => a) } = 1) => { /*jjj*/ }; (function(a) { })()
> `````

> `````js
> [(async function() {})]
> `````

> `````js
> [(function*() {})]
> `````

> `````js
> [(foo())]
> `````

> `````js
> [[[] = [function () { }] ] = []]
> `````

> `````js
> a = ({x = 1}) => x;
> `````

> `````js
> a = (b, {x = 1}) => x
> `````

> `````js
> [[[] = [function () { }] ] = []]
> `````

> `````js
> ([x] = []) => {}
> `````

> `````js
> (x = 9, y) => {}
> `````

> `````js
> (x = 9) => {}
> `````

> `````js
> [x=10] = x
> `````

> `````js
> ([a,...b])=>0;
> `````

> `````js
> for([a,b[a],{c,d=e,[f]:[g,h().a,(0).k,...i[0]]}] in 0);
> `````

> `````js
> [{a=b}=0]
> `````

> `````js
> [a,b=0,[c,...a[0]]={}]=0;
> `````

> `````js
> [...a[0]] = 0;
> `````

> `````js
> ({x=0, y:z} = 0)
> `````

> `````js
> ({[a]: a} = 1)
> `````

> `````js
> ({x: [y] = 0} = 1)
> `````

> `````js
> ({a:let} = 0);
> `````

> `````js
> ([a,b])=>0;
> `````

> `````js
> (x, [a,b])=>0;
> `````

> `````js
> ([a]) => [0];
> `````

> `````js
> (x, [a]) => [0];
> `````

> `````js
> [a=10] = 0
> `````

> `````js
> [y, a=10] = 0
> `````

> `````js
> ([a,...b])=>0;
> `````

> `````js
> ({a,b=b,a:c,[a]:[d]})=>0;
> `````

> `````js
> ({x = 10, y: { z = 10 }}) => [x,y]
> `````

> `````js
> try {} catch ({e}) {}
> `````

> `````js
> let [a,,]=0
> `````

> `````js
> [x[a]=a] = b
> `````

> `````js
> [x, ...{0: y}] = 0
> `````

> `````js
> [x, y, ...z] = 0
> `````

> `````js
> [a,a,,...a]=0;
> `````

> `````js
> ({x: y} = 0)
> `````

> `````js
> ({x = 0,} = 1)
> `````

> `````js
> ({x,y,} = 0)
> `````

> `````js
> (x, {"x": y} = 0)
> `````

> `````js
> ({42e-2 : x = 42})
> `````

> `````js
> (a, b => {}, a => a + 1)
> `````

> `````js
> ({ x: (foo.bar) })
> `````

> `````js
> ([((x, y) => z)['x']])
> `````

> `````js
> [([b].c.d) === e ? f : g /= 1]
> `````

> `````js
> [...{}[x ? {zzz} : (z)] /= a]
> `````

> `````js
> [...[b].c.d === e ? f : g ]
> `````

> `````js
> ...[][x ? y : z] += a]
> `````

> `````js
> [ c.d === (e ? f : g ) ? x : y]
> `````

> `````js
> [x.y = 42]
> `````

> `````js
> [[], [b, c], []];
> `````

> `````js
> [a,, b,];
> `````

> `````js
> ([(x), y] = x);
> `````

> `````js
> [[[a.b =[{ x: x.b }]]] = abc]
> `````

> `````js
> [(a) = (b)]
> `````

> `````js
> [(x) = y = (z)]
> `````

> `````js
> [(x) => y = (z)]
> `````

> `````js
> [(x), y = x] = x;
> `````

> `````js
> [(x), y] = x;
> `````

> `````js
> [(x), async] = x;
> `````

> `````js
> [(x), y] = x;
> `````

> `````js
> [{}[x ? y : z] += a]
> `````

> `````js
> [ c.d === e ? f : g ]
> `````

> `````js
> [{}[x ? y : z] += a]
> `````

> `````js
> [ c.d === (e ? f : g )]
> `````

> `````js
> [["b"] === e ? f : g ]
> `````

> `````js
> [([b].c.d) === {string} ? f : g ]
> `````

> `````js
> [([3].c.d) === e ? f : g /= 1]
> `````

> `````js
> [{}[x ? {zzz} : (z)] /= a]
> `````

> `````js
> [a=5, b=(async)] = ([1]);
> `````

> `````js
> [a=5, b=("foo")] = ([async]);
> `````

> `````js
> a, b] = f(() => { [a, b.c] = [d.e, (f.g) = h]; });
> `````

> `````js
> [a, b] = f();
> `````

> `````js
> [a, ...b] = [1, 2, ...(c / 2)];
> `````

> `````js
> [a, ...b] = [1, 2, ...c / 2];
> `````

> `````js
> [a, ...b] = ([1, 2, ...c / 2]);
> `````

> `````js
> [a=5, b=7] = [1];
> `````

> `````js
> [a=5, b=(7)] = ([1]);
> `````

> `````js
> [a=5, b=("foo")] = ([async]);
> `````

> `````js
> [a=5, b=(7).c.d] = ([1]);
> `````

> `````js
> [a, b] = f(() => {  });
> `````

> `````js
> [[[[[[[a]]]]]]] = b;
> `````

> `````js
> [[[[[[[a=b] = c] = c] = c] = c] = c] = c] = c;
> `````

> `````js
> [[[[[[[a=b] = c] = c] = c] = c] = c] = c] = [[[[[[[a=b] = c]]] = c] = c] = c] = c;
> `````

> `````js
> [[[[[[[a=b]] = c]] = c] = c[[[[[[[a=b] = c]]] = c] = c] = c] = c] = c] = c;
> `````

> `````js
> [1, ...rest]
> `````

> `````js
> [{a: 0}.x] = [];
> `````

> `````js
> [...{a: 0}.x] = [];
> `````

> `````js
> ({a: {b: 0}.x} = {});
> `````

> `````js
> ({...{b: 0}.x} = {});
> `````

> `````js
> {...{eval}.x} = {});
> `````

> `````js
> [...{eval}.x] = [[...{arguments}.x] = []];
> `````

> `````js
> [, , x, , ...y] = [1, 2, 3, 4, 5, 6];
> `````

> `````js
> [,,,,,,,,,,,,,,,,,,,,,,,,,]
> `````

> `````js
> [[1,2], [3], []];
> `````

> `````js
> [...a[0]] = 0;
> `````

> `````js
> [a,b=0,[c,...a[0]]={}]=0;
> `````

> `````js
> [ a = x += 1, b = x *= 2 ]
> `````

> `````js
> [[1]];
> `````

> `````js
> ({ a: {prop: 1}.prop } = {})
> `````

> `````js
> [...[x]=y];
> `````

> `````js
> [...[{a: b}.c]] = [];
> `````

> `````js
> [...[{prop: 1}.prop]] = []
> `````

> `````js
> ({ a: {prop: 1}.prop } = {})
> `````

> `````js
> [({a: 1}.c)] = [];
> `````

> `````js
> [foo.foo, foo.bar] = [1, 2];
> `````

> `````js
> ({ a: {prop: 1}.prop } = {})
> `````

> `````js
> [{}.foo]=x
> `````

> `````js
> [5[foo]]=x
> `````

> `````js
> ["x".foo]=x
> `````

> `````js
> {"a b c"(){}});
> `````

> `````js
> [...[1], ..."foo" ]
> `````

> `````js
> [...[1], ..."a".b]
> `````

> `````js
> [...[1], ..."a"[b]]
> `````

> `````js
> [...[1], ..."a"(b)]
> `````

> `````js
> [...[1], ["a"](b)]
> `````

> `````js
> [...[1], "a"(b)]
> `````

> `````js
> [[] = [9], {} = [], c = d, [,,a,a=> {}]]
> `````

> `````js
> a = [(b) => {}, [(b) => {}, (c) => {}, (d) => { [b]}]]
> `````

> `````js
> async ([[[]]]) => [[,,a,a=> {}]]
> `````

> `````js
> [[,,a=> {},a]]
> `````

> `````js
> [[] = [9], {} = [], c = d, [,,a,a=> {}]]
> `````

> `````js
> [...this, y];
> `````

> `````js
> [a,a,]
> `````

> `````js
> ([...x]) => y
> `````

> `````js
> [a,a,,]
> `````

> `````js
> [,a,]
> `````

> `````js
> [...{x} ? y : z]
> `````

> `````js
> [...{x}.foo] = x
> `````

> `````js
> ([...[x]]) => x
> `````

> `````js
> [...[x]]
> `````

> `````js
> [...[...a]]
> `````

> `````js
> [,,1,,,2,3,,]
> `````

> `````js
> [(x().foo)] = x
> `````

> `````js
> [x().foo] = x
> `````

> `````js
> [x()]
> `````

> `````js
> [[a]] = x
> `````

> `````js
> [{x = y}] = z
> `````

> `````js
> [...[a]] = x
> `````

> `````js
> [[a] = b] = x
> `````

> `````js
> [a, ...b=c.d = 2]
> `````

> `````js
> [a, ...(b=c)]
> `````

> `````js
> [a, ...b=c]
> `````

> `````js
> ({"foo": [x].foo}=y)
> `````

> `````js
> ({s: "foo".foo} = x)
> `````

> `````js
> (a, {s: "foo".foo} = x)
> `````

> `````js
> ({l: 50..foo} = x)
> `````

> `````js
> assignmentResult = { x: x = yield } = value
> `````

> `````js
> ({x, ...y, a, ...b, c})
> `````

> `````js
> (a, {x, ...y, a, ...b, c})
> `````

> `````js
> fn = ({text = "default", ...props}) => text + props.children
> `````

> `````js
> someObject = { someKey: { ...mapGetters([ "some_val_1", "some_val_2" ]) } }
> `````

> `````js
> ([[ x ]] = [undefined]= {});
> `````

> `````js
> ({x, ...y} = {x, ...y})
> `````

> `````js
> ({a,...obj}) => {}
> `````

> `````js
> ({...obj} = foo)
> `````

> `````js
> (a, {...obj} = foo)
> `````

> `````js
> s = {foo: yield / x}
> `````

> `````js
> s = {foo: yield}
> `````

> `````js
> function *f(){   s = {"foo": yield /x/g}   }
> `````

> `````js
> ({...obj}) => {}
> `````

> `````js
> var b = { ["__proto__"]: { abc: 123 }};
> `````

> `````js
> ({a: (b).c = d} = [2])
> `````

> `````js
> ({a: (b).c} = [2])
> `````

> `````js
> ({a: (b) = c} = [2])
> `````

> `````js
> ({a: b = c} = [2])
> `````

> `````js
> x = {'__proto__': 1, __proto__: 2}
> `````

> `````js
> ({b: x, a: 1, a: 2})
> `````

> `````js
> ({a: 1, a: 2, b: 3})
> `````

> `````js
> ({a, a})
> `````

> `````js
> ({a, a: 1})
> `````

> `````js
> ({a: 1, a})
> `````

> `````js
> wrap({async "foo"(){}});
> `````

> `````js
> wrap({async 100(){}});
> `````

> `````js
> ({"x": 600})
> `````

> `````js
> ({"x": 600..xyz})
> `````

> `````js
> wrap({[a]:b}=obj);
> `````

> `````js
> wrap({[a]:b, [15]:d}=obj);
> `````

> `````js
> x, {foo, bar} = doo
> `````

> `````js
> ({*ident(){}})
> `````

> `````js
> ({*set(){}})
> `````

> `````js
> ({*async(){}})
> `````

> `````js
> ({653: [x].foo})
> `````

> `````js
> ({"x": {y: z}}) => x
> `````

> `````js
> ({"a":b}=obj);
> `````

> `````js
> {"x": [y]} = x)
> `````

> `````js
> ({[foo]: x} = x) => y
> `````

> `````js
> ({x, ...y, a, ...b, c})
> `````

> `````js
> z = {x, ...y}
> `````

> `````js
> let z = {...x}
> `````

> `````js
> ({a:b,...obj} = foo)
> `````

> `````js
> ({a,...obj} = foo)
> `````

> `````js
> ({...(a,b),c})
> `````

> `````js
> ({...a,b,c})
> `````

> `````js
> x = {__proto__: a, __proto__: b} = y
> `````

> `````js
> ({__proto__: a, __proto__: b} = x)
> `````

> `````js
> ({x:a["x"]} = {x:20});
> `````

> `````js
> ({x:y} = {});
> `````

> `````js
> ({y:y2} = {y:y2-2})
> `````

> `````js
> ({async foo(a) { await a }});
> `````

> `````js
> ({async, foo})
> `````

> `````js
> o({async await() { }})
> `````

> `````js
> (foo + (bar + boo) + ding)
> `````

> `````js
> [(a)] = 0
> `````

> `````js
> [(a) = 0] = 1
> `````

> `````js
> [(a.b)] = 0
> `````

> `````js
> ({a:(b)} = 0)
> `````

> `````js
> ({a:(b.c)} = 0)
> `````

> `````js
> ({a:(b = 0)})
> `````

> `````js
> ({b} = b);
> `````

> `````js
> [...{a}] = [{}]
> `````

> `````js
> [(x) = y = (z) => (a)]
> `````

> `````js
> async [(x) = y = (z) => (a)]
> `````


> `````js
> [.../x//yield]
> `````

> `````js
> "use strict"; const { [eval]: []} = a;
> `````

> `````js
> [1, 2, ...target = source]
> `````

> `````js
> [5, ...[6, 7, 8], 9]
> `````

> `````js
> [() => {}]
> `````

> `````js
> [abc => {}]
> `````

> `````js
> [x.y] = z
> `````

> `````js
> [x().y] = z
> `````

> `````js
> [a[x.y]] = z
> `````

> `````js
> [x()[y]] = z
> `````

> `````js
> [x.y = a] = z
> `````

> `````js
> [x().y = a] = z
> `````

> `````js
> [a[x.y] = a] = z
> `````

> `````js
> [x()[y] = a ] = z
> `````

> `````js
> [x.y = a + b] = z
> `````

> `````js
> [x().y = a + b] = z
> `````

> `````js
> [a[x.y] = a + b] = z
> `````

> `````js
> [x()[y] = a + b] = z
> `````

> `````js
> [5..length] = x
> `````

> `````js
> ["X".length] = x
> `````

> `````js
> [{}.x] = y
> `````

> `````js
> [{}[x]] = x
> `````

> `````js
> [x, y, ...z]
> `````

> `````js
>  [...target = source]
> `````

> `````js
> [x, ...y, z]
> `````

> `````js
> [x, y, ...z()]
> `````

> `````js
> [x, ...z = arr, y]
> `````

> `````js
> x, ...z + arr, y]
> `````

> `````js
> [foo = A] = arr;
> `````

> `````js
> [foo, [x,y,z], bar = B] = arr;
> `````

> `````js
> [foo, [[[[[[[[[[[[[x,y,z]]]]]]]]]]]]], bar = B] = arr;
> `````

> `````js
> [foo, [x,y = 20,z], bar = B] = arr;
> `````

> `````js
> [...x.list];
> `````

> `````js
> [...x.list] = a;
> `````

> `````js
> [...x += y];
> `````

> `````js
> [...[x].map(y, z)];
> `````

> `````js
> [...[x].map(y, z)[x]] = a;
> `````

> `````js
> [a, b] = c = d
> `````

### Templates

#### stand-alone

`````js
#
`````
