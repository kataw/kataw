# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: class-constructor
> :: case: var f = function { super(); }
## Input

`````js
class C { constructor() { var f = function { super(); } } }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 178,
            "decorators": null,
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
                        "decorators": null,
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
                                            "kind": 155,
                                            "declarationList": {
                                                "kind": 156,
                                                "declarations": [
                                                    {
                                                        "kind": 157,
                                                        "binding": {
                                                            "kind": 81921,
                                                            "value": "f",
                                                            "autofix": 0,
                                                            "flags": 768,
                                                            "start": 29,
                                                            "end": 31
                                                        },
                                                        "optionalToken": null,
                                                        "type": null,
                                                        "initializer": {
                                                            "kind": 177,
                                                            "asyncToken": null,
                                                            "generatorToken": null,
                                                            "name": {
                                                                "kind": 253,
                                                                "text": "",
                                                                "autofix": 0,
                                                                "flags": 12,
                                                                "start": 42,
                                                                "end": 42
                                                            },
                                                            "formalParameters": {
                                                                "kind": 214,
                                                                "formalParameterList": [],
                                                                "trailingComma": false,
                                                                "autofix": 0,
                                                                "flags": 256,
                                                                "start": 42,
                                                                "end": 42
                                                            },
                                                            "contents": {
                                                                "kind": 216,
                                                                "functionStatementList": {
                                                                    "kind": 217,
                                                                    "statements": [
                                                                        {
                                                                            "kind": 120,
                                                                            "expression": {
                                                                                "kind": 131,
                                                                                "expression": {
                                                                                    "kind": 225,
                                                                                    "autofix": 0,
                                                                                    "flags": 768,
                                                                                    "start": 44,
                                                                                    "end": 50
                                                                                },
                                                                                "argumentList": {
                                                                                    "kind": 256,
                                                                                    "elements": [],
                                                                                    "trailingComma": false,
                                                                                    "autofix": 0,
                                                                                    "flags": 256,
                                                                                    "start": 51,
                                                                                    "end": 51
                                                                                },
                                                                                "flags": 256,
                                                                                "start": 44,
                                                                                "end": 52
                                                                            },
                                                                            "autofix": 0,
                                                                            "flags": 128,
                                                                            "start": 44,
                                                                            "end": 53
                                                                        }
                                                                    ],
                                                                    "multiline": false,
                                                                    "autofix": 0,
                                                                    "flags": 256,
                                                                    "start": 44,
                                                                    "end": 53
                                                                },
                                                                "autofix": 0,
                                                                "flags": 256,
                                                                "start": 42,
                                                                "end": 55
                                                            },
                                                            "typeParameters": null,
                                                            "returnType": null,
                                                            "autofix": 0,
                                                            "flags": 256,
                                                            "start": 33,
                                                            "end": 55
                                                        },
                                                        "autofix": 0,
                                                        "flags": 128,
                                                        "start": 29,
                                                        "end": 55
                                                    }
                                                ],
                                                "autofix": 0,
                                                "flags": 128,
                                                "start": 29,
                                                "end": 55
                                            },
                                            "autofix": 0,
                                            "flags": 128,
                                            "start": 25,
                                            "end": 55
                                        }
                                    ],
                                    "multiline": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 25,
                                    "end": 55
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 23,
                                "end": 57
                            },
                            "autofix": 0,
                            "flags": 0,
                            "start": 21,
                            "end": 57
                        },
                        "flags": 256,
                        "start": 9,
                        "end": 57
                    }
                ],
                "flags": 256,
                "start": 9,
                "end": 59
            },
            "flags": 128,
            "start": 0,
            "end": 59
        }
    ],
    "isModule": false,
    "text": "class C { constructor() { var f = function { super(); } } }",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 42,
            "end": 44
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 42,
            "end": 44
        },
        {
            "kind": 2,
            "source": 2,
            "code": 73,
            "error": "'super' can only be referenced in members of derived classes or object literal expressions",
            "start": 50,
            "end": 51
        }
    ],
    "start": 0,
    "end": 59
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: class-constructor
> :: case: var f = function { super(); }
## Input

`````js
class C { constructor() { var f = function { super(); } } }
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: class-constructor
> :: case: var f = function { super(); }
## Input

`````js
class C { constructor() { var f = function { super(); } } }
`````
```

