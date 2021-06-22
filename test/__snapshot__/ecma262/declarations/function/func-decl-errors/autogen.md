# Kataw parser test case

> Auto-generated tests to validate error recovery
>

### Cases

> `````js
> try function foo() {} catch (e) {}
> `````

> `````js
> do function foo() {} while (0);
> `````

> `````js
> for (var x in {}) function foo() {}
> `````

> `````js
>for (;false;) label: function foo() {}
> `````

> `````js
> for (var i = 0; i < 1; i++) label: function f() { };
> `````

> `````js
> for (var x in {a: 1}) label: function f() { };
> `````

> `````js
> for (var x in {}) label: function f() { };
> `````

> `````js
> var x; for (x in {}) label: function foo() {}
> `````

> `````js
> if (true) label: function f() {}
> `````

> `````js
> label: async function f() { }
> `````

> `````js
> label: async function* f() { }
> `````

### Templates

#### in func expr body

`````js
(function() {#})()
`````

#### stand alone

`````js
#
`````

#### in block

`````js
{#}
`````

