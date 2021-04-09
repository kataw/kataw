# Kataw parser test case

> Auto-generated tests to validate error recovery
>

### Cases

> `````js
> class C { constructor() { super(); } }
> `````

> `````js
> class C { method() { super(); } }
> `````

> `````js
> class C { method() { () => super(); } }
> `````

> `````js
> class C { *method() { super(); } }
> `````

> `````js
> class C { get x() { super(); } }
> `````

> `````js
> class C { set x(_) { super(); } }
> `````

> `````js
> ({ method() { super(); } })
> `````

> `````js
> ({ set x(_) { super(); } })
> `````

> `````js
> ({ f: function() { super(); } })
> `````

> `````js
> var f = function() { super(); }
> `````

> `````js
> ({ f: function*() { super(); } })
> `````

> `````js
> (function*() { super(); })
> `````

> `````js
> var f = function*() { super(); }
> `````

> `````js
> new super;
> `````

> `````js
> new super();
> `````

> `````js
> super;
> `````

> `````js
> y = super
> `````

> `````js
> class C { get x) { super; } }
> `````

> `````js
> class C { set x(_) { super(
> `````

> `````js
> ({ method() { super();
> `````

> `````js
> ({ set x(_) { super(; }
> `````

> `````js
> ({ f: function({ super();  })
> `````

> `````js
> var f = function { super(); }
> `````

> `````js
> ({ f: function* { super(); } })
> `````

> `````js
> (function*() { super(); )
> `````


### Templates

#### class-constructor

`````js
class C { constructor() { # } }
`````

#### class-gen

`````js
class C { *method() { # } }
`````

#### class-set

`````js
class C { set x(_) { # } }
`````

#### obj-method

`````js
({ method() { # } })
`````

#### obj-expr-method-gen

`````js
({ *method() { # } })
`````

#### obj-expr-get

`````js
({ get x() { # } })
`````

#### obj-expr-set

`````js
({ set x(_) { # } })
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 178,
            "name": {
                "kind": 81921,
                "value": "C",
                "autofix": 0,
                "flags": 768,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "classHeritage": null,
            "members": {
                "kind": 277,
                "elements": [
                    {
                        "kind": 278,
                        "staticToken": null,
                        "method": {
                            "kind": 209,
                            "name": {
                                "kind": 81921,
                                "value": "constructor",
                                "autofix": 0,
                                "flags": 768,
                                "start": 9,
                                "end": 21
                            },
                            "typeParameters": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "autofix": 0,
                                "flags": 256,
                                "start": 22,
                                "end": 23
                            },
                            "type": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "statements": [
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 81921,
                                                "value": "#",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 25,
                                                "end": 27
                                            },
                                            "autofix": 0,
                                            "flags": 128,
                                            "start": 25,
                                            "end": 27
                                        }
                                    ],
                                    "multiline": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 25,
                                    "end": 27
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 23,
                                "end": 29
                            },
                            "autofix": 0,
                            "flags": 0,
                            "start": 21,
                            "end": 29
                        },
                        "flags": 256,
                        "start": 9,
                        "end": 29
                    }
                ],
                "flags": 256,
                "start": 9,
                "end": 31
            },
            "flags": 128,
            "start": 0,
            "end": 31
        }
    ],
    "isModule": false,
    "text": "class C { constructor() { # } }",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 25,
            "end": 27
        }
    ],
    "start": 0,
    "end": 31
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

