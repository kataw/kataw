# Kataw parser test case

> Auto-generated tests to validate error recovery
>

### Cases

> `````js
> for (var i = 0; i < 100; ++i) { br\u0065ak; }
> `````

> `````js
> cl\u0061ss Foo {}
> `````

> `````js
> var x = cl\u0061ss {}
> `````

> `````js
> \u0063onst foo = 1;
> `````

> `````js
> while (i < 10) { if (i++ & 1) c\u006fntinue; this.x++; }
> `````

> `````js
> d\u0065bugger;
> `````

> `````js
> for (var i = 0; i < 100; ++i) { br\u0065ak; }
> `````

> `````js
> cl\u0061ss Foo {}
> `````

> `````js
> var x = cl\u0061ss {}
> `````

> `````js
> \u0063onst foo = 1;
> `````

> `````js
> d\u0065lete this.a;
> `````

> `````js
> \u0063o { } while(0)
> `````

> `````js
> if (d\u006f { true }) {}
> `````

> `````js
> if (false) { this.a = 1; } \u0065lse { this.b = 1; }
> `````

> `````js
> e\u0078port var foo;
> `````

> `````js
> try { } catch (e) {} f\u0069nally { }
> `````

> `````js
> f\u006fr (var i = 0; i < 10; ++i);
> `````

> `````js
> f\u0075nction fn() {}
> `````

> `````js
> for (var i = 0; i < 100; ++i) { br\u0065ak; }
> `````

> `````js
> var f = f\u0075nction() {}
> `````

> `````js
> \u0069f (true) { }
> `````

> `````js
> \u0069mport blah from './foo.js';
> `````

> `````js
> n\u0065w function f() {}
> `````

> `````js
> (function() { r\u0065turn; })()
> `````

> `````js
> class C extends function() {} { constructor() { sup\u0065r() } }
> `````

> `````js
> class C extends function() {} { constructor() { sup\u0065r.a = 1 } }
> `````

> `````js
> sw\u0069tch (this.a) {}
> `````

> `````js
> var x = th\u0069s;
> `````

> `````js
> th\u0069s.a = 1;
> `````

> `````js
> thr\u006fw 'boo';
> `````

> `````js
> t\u0072y { true } catch (e) {}
> `````

> `````js
> var x = typ\u0065of 'blah'
> `````

> `````js
> v\u0061r a = true
> `````

> `````js
> var v\u0061r = true
> `````

> `````js
> (function() { return v\u006fid 0; })()
> `````

> `````js
> wh\u0069le (true) { }
> `````

> `````js
> w\u0069th (this.scope) { }
> `````

> `````js
> (function*() { y\u0069eld 1; })()
> `````

> `````js
> (function*() { var y\u0069eld = 1; })()
> `````

> `````js
> var \u0065num = 1;
> `````

> `````js
> var { \u0065num } = {}
> `````

> `````js
> (\u0065num = 1);
> `````

> `````js
> (x === n\u0075ll);
> `````

> `````js
> var x = n\u0075ll;
> `````

> `````js
> var n\u0075ll = 1;
> `````

> `````js
> var { n\u0075ll } = { 1 };
> `````

> `````js
> tr\u0075e = 1;
> `````

> `````js
> (x === f\u0061lse);
> `````

> `````js
> var f\u0061lse = 1;
> `````

> `````js
> var { f\u0061lse } = {};
> `````

> `````js
> f\u0061lse = 1;
> `````

> `````js
> switch (this.a) { c\u0061se 6: break; }
> `````

> `````js
> try { } c\u0061tch (e) {}
> `````

> `````js
> if ('foo' \u0069n this) {}
> `````

> `````js
> (v\u006fid 0)
> `````

> `````js
> class C { st\u0061tic bar() {} }
> `````

> `````js
> do { ; } wh\u0069le (true) { }
> `````

> `````js
> class C { st\u0061tic bar() {} }
> `````

> `````js
> ({\u0067et get(){}})
> `````

> `````js
> ({\u0073et set(){}})
> `````

> `````js
> (async ()=>{var \u0061wait = 100})()
> `````

### Templates

#### stand-alone

`````js
#
`````
