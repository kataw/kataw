# Kataw parser test case

> Auto-generated tests to validate error recovery
>

### Cases

> `````js
> () => {}
> `````

> `````js
> () => { return 42 }
> `````

> `````js
> x => { return x; }
> `````

> `````js
> (x) => { return x; }
> `````

> `````js
> (x, y) => { return x + y; }
> `````

> `````js
> ((x) => x * x) => x * x
> `````

> `````js
> (x, async (x, y) => x + y) => x + y
> `````

> `````js
> (x, y, z) => x, y, z
> `````

> `````js
> (x, y) => x.a = y
> `````

> `````js
> () => ({'value': 42})
> `````

> `````js
> x => y => x + y
> `````

> `````js
> (x, y) => (u, v) => x*u + y*v
> `````

> `````js
> (x, y) => z => z * (x + y)
> `````

> `````js
> x => (y, z) => z * (x + y)
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
> (a, b => {}, a => a + 1)
> `````

> `````js
> ((a, b) => {}, (a => a + 1))
> `````

> `````js
> (a, (a, (b, c) => 0))
> `````

> `````js
> (x ? b : c) = x
> `````

> `````js
> ({}) => {}
> `````

> `````js
> ({}?) => {}
> `````

> `````js
> ({}:string) => {}
> `````

> `````js
> (x, {}:string) => {}
> `````

> `````js
> (x?: string) => {}
> `````

> `````js
> (x, y?: string) => {}
> `````

> `````js
> (a, []) => {}
> `````

> `````js
> ({}, a) => {}
> `````

> `````js
> (a, b = c) => {}
> `````

> `````js
> (x = 9) => {}
> `````

> `````js
> (x, y = 9) => {}
> `````

> `````js
> (x, y = 9, z) => {}
> `````

> `````js
> (...x, y = 9, z) => {}
> `````

> `````js
> (x, y = 9, z = 8) => {}
> `````

> `````js
> (x, ...a) => {}
> `````

> `````js
> (...a) => {}
> `````

> `````js
> (x, y = 9, {b}, z = 8, ...a) => {}
> `````

> `````js
> (x, y = 9, ...a) => {}
> `````

> `````js
> ({a} = {}) => {}
> `````

> `````js
> ([x] = []) => {}
> `````

> `````js
> ([x = 0]) => {}
> `````

> `````js
> ({a = 42}) => {}
> `````

> `````js
> ((x, y, z)) => 0
> `````

> `````js
> (x, (y, z)) => 0
> `````

> `````js
> ([x = 0]) => {}
> `````

> `````js
> eval => { 'use strict'; 0 }
> `````

> `````js
> (interface) => { 'use strict'; 0 }
> `````

> `````js
> 32 => {}
> `````

> `````js
> (32) => {}
> `````

> `````js
> (a, 32) => {}
> `````

> `````js
> if => {}
> `````

> `````js
> (if) => {}
> `````

> `````js
> a + b => {}
> `````

> `````js
> (a, b - c) => {}
> `````

> `````js
> (a + b, c) => {}
> `````

> `````js
> (-a) => {}
> `````

> `````js
> (a, -b) => {}
> `````

> `````js
> (foo ? bar : baz) => {}
> `````

> `````js
> (a, foo ? bar : baz) => {}
> `````

> `````js
> (foo ? bar : baz, a) => {}
> `````

> `````js
> (a.b, c) => {}
> `````

> `````js
> (c, a.b) => {}
> `````

> `````js
> (a['b'], c) => {}
> `````

> `````js
> (c, a['b']) => {}
> `````

> `````js
> (...a = b) => b
> `````

> `````js
> (...rest - a) => b
> `````

> `````js
> (a, ...b - 10) => b
> `````

> `````js
> ((x)) => 0
> `````

> `````js
> ) => {}
> `````

> `````js
> () =>
> `````

> `````js
> =>
> `````

> `````js
> => 0
> `````

> `````js
> , => {}
> `````

> `````js
> (,) => {}
> `````

> `````js
> return => {}
> `````

> `````js
> () => {'value': 42}
> `````

> `````js
> ) => 0
> `````

> `````js
> foo[()]
> `````

> `````js
> )
> `````

> `````js
> ({a = 42}) => {}
> `````

> `````js
> (x, y) => x.a = y
> `````

> `````js
> ([x = 0]) => {}
> `````

> `````js
> ({a = 42}) => {}
> `````

> `````js
> (x, y) => x.a = y
> `````

> `````js
> ([x = 0]) => {}
> `````

> `````js
> ({a = 42}) => {}
> `````

> `````js
> (x, y) => x.a = y
> `````

> `````js
> ([x = 0]) => {}
> `````

> `````js
> ({a = 42}) => {}
> `````

> `````js
> (x, y) => x.a = y
> `````


### Templates

#### condiional_paren_middle

`````js
bar ? (#) : baz;
`````

#### conditional_paren

`````js
bar ? baz : ( # );
`````

#### conditional_last

`````js
bar, #;
`````

#### conditional

`````js
# , bar;
`````

#### assignmen

`````js
x = # ;
`````

#### stand-alone

`````js
# ;
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 197,
                "shortCircuit": {
                    "kind": 134299649,
                    "text": "bar",
                    "rawText": "bar",
                    "flags": 768,
                    "start": 0,
                    "end": 3
                },
                "questionToken": {
                    "kind": 22,
                    "flags": 768,
                    "start": 3,
                    "end": 5
                },
                "consequent": {
                    "kind": 121,
                    "expression": {
                        "kind": 67109115,
                        "text": "#",
                        "flags": 768,
                        "start": 7,
                        "end": 8
                    },
                    "flags": 256,
                    "start": 5,
                    "end": 9
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 768,
                    "start": 9,
                    "end": 11
                },
                "alternate": {
                    "kind": 134299649,
                    "text": "baz",
                    "rawText": "baz",
                    "flags": 768,
                    "start": 11,
                    "end": 15
                },
                "flags": 256,
                "start": 0,
                "end": 15
            },
            "flags": 128,
            "start": 0,
            "end": 16
        }
    ],
    "isModule": false,
    "text": "bar ? (#) : baz;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 16
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

