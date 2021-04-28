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
    "directives": [],
    "statements": [
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 768,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "C",
                "rawText": "C",
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
                        "declareToken": null,
                        "decorators": null,
                        "staticKeyword": null,
                        "asyncKeyword": null,
                        "setKeyword": null,
                        "getKeyword": null,
                        "method": {
                            "kind": 209,
                            "name": {
                                "kind": 134299649,
                                "text": "constructor",
                                "rawText": "constructor",
                                "flags": 768,
                                "start": 9,
                                "end": 21
                            },
                            "typeParameters": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 16384,
                                "start": 22,
                                "end": 23
                            },
                            "type": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "multiline": false,
                                    "flags": 256,
                                    "start": 25,
                                    "end": 25
                                },
                                "flags": 256,
                                "start": 23,
                                "end": 25
                            },
                            "flags": 16384,
                            "start": 21,
                            "end": 25
                        },
                        "flags": 16384,
                        "start": 9,
                        "end": 25
                    },
                    {
                        "kind": 280,
                        "decorators": null,
                        "declaredToken": null,
                        "staticToken": null,
                        "asyncKeyword": null,
                        "key": {
                            "kind": 67109115,
                            "text": "#",
                            "flags": 768,
                            "start": 25,
                            "end": 27
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 256,
                        "start": 25,
                        "end": 27
                    }
                ],
                "flags": 256,
                "start": 9,
                "end": 29
            },
            "flags": 128,
            "start": 0,
            "end": 29
        }
    ],
    "isModule": false,
    "text": "class C { constructor() { # } }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 31
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Invalid character - start: 25, end: 27
✖ Statement expected - start: 29, end: 31

```

