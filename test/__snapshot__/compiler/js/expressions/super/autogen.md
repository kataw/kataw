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
    "kind": 196,
    "source": "class C { constructor() { # } }",
    "filename": "",
    "statements": [
        {
            "kind": 48,
            "name": {
                "kind": 131102,
                "text": "C",
                "rawText": "C",
                "flags": 0,
                "intersects": false,
                "transformFlags": 1025,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "classHeritage": null,
            "implementClauses": null,
            "members": {
                "kind": 50,
                "elements": [
                    {
                        "kind": 49,
                        "isStatic": false,
                        "isAbstract": false,
                        "isReadOnly": false,
                        "isOptional": false,
                        "method": {
                            "kind": 16844946,
                            "name": {
                                "kind": 196711,
                                "text": "constructor",
                                "rawText": "constructor",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 9,
                                "end": 21
                            },
                            "formalParameters": {
                                "kind": 90,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 22,
                                "end": 23
                            },
                            "isSetter": false,
                            "isGetter": false,
                            "contents": {
                                "kind": 91,
                                "functionStatementList": {
                                    "kind": 94,
                                    "statements": [
                                        {
                                            "kind": 2097233,
                                            "expression": {
                                                "kind": 196712,
                                                "text": "#",
                                                "rawText": "constructor",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 25,
                                                "end": 27
                                            },
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 25,
                                            "end": 27
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 25,
                                    "end": 27
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 23,
                                "end": 29
                            },
                            "decorators": null,
                            "type": null,
                            "accessModifier": null,
                            "typeParameters": null,
                            "flags": 524288,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 21,
                            "end": 29
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 1,
                        "start": 9,
                        "end": 29
                    }
                ],
                "flags": 0,
                "intersects": false,
                "transformFlags": 1,
                "start": 9,
                "end": 31
            },
            "decorators": null,
            "isAbstract": false,
            "flags": 0,
            "intersects": false,
            "transformFlags": 1,
            "start": 0,
            "end": 31
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 0,
            "message": "Invalid character",
            "start": 27,
            "length": 1
        }
    ],
    "intersects": false,
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
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

