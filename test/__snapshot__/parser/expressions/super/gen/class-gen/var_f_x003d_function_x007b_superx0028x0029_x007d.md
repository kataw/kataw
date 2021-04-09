# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: class-gen
> :: case: var f = function { super(); }
## Input

`````js
class C { *method() { var f = function { super(); } } }
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
                        "kind": 280,
                        "decorators": null,
                        "declaredToken": null,
                        "staticToken": null,
                        "key": {
                            "kind": 253,
                            "text": "",
                            "autofix": 0,
                            "flags": 12,
                            "start": 9,
                            "end": 9
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 256,
                        "start": 9,
                        "end": 11
                    },
                    {
                        "kind": 278,
                        "decorators": null,
                        "staticToken": null,
                        "method": {
                            "kind": 209,
                            "name": {
                                "kind": 81921,
                                "value": "method",
                                "autofix": 0,
                                "flags": 768,
                                "start": 11,
                                "end": 17
                            },
                            "typeParameters": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "autofix": 0,
                                "flags": 256,
                                "start": 18,
                                "end": 19
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
                                                            "start": 25,
                                                            "end": 27
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
                                                                "start": 38,
                                                                "end": 38
                                                            },
                                                            "formalParameters": {
                                                                "kind": 214,
                                                                "formalParameterList": [],
                                                                "trailingComma": false,
                                                                "autofix": 0,
                                                                "flags": 256,
                                                                "start": 38,
                                                                "end": 38
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
                                                                                    "start": 40,
                                                                                    "end": 46
                                                                                },
                                                                                "argumentList": {
                                                                                    "kind": 256,
                                                                                    "elements": [],
                                                                                    "trailingComma": false,
                                                                                    "autofix": 0,
                                                                                    "flags": 256,
                                                                                    "start": 47,
                                                                                    "end": 47
                                                                                },
                                                                                "flags": 256,
                                                                                "start": 40,
                                                                                "end": 48
                                                                            },
                                                                            "autofix": 0,
                                                                            "flags": 128,
                                                                            "start": 40,
                                                                            "end": 49
                                                                        }
                                                                    ],
                                                                    "multiline": false,
                                                                    "autofix": 0,
                                                                    "flags": 256,
                                                                    "start": 40,
                                                                    "end": 49
                                                                },
                                                                "autofix": 0,
                                                                "flags": 256,
                                                                "start": 38,
                                                                "end": 51
                                                            },
                                                            "typeParameters": null,
                                                            "returnType": null,
                                                            "autofix": 0,
                                                            "flags": 256,
                                                            "start": 29,
                                                            "end": 51
                                                        },
                                                        "autofix": 0,
                                                        "flags": 128,
                                                        "start": 25,
                                                        "end": 51
                                                    }
                                                ],
                                                "autofix": 0,
                                                "flags": 128,
                                                "start": 25,
                                                "end": 51
                                            },
                                            "autofix": 0,
                                            "flags": 128,
                                            "start": 21,
                                            "end": 51
                                        }
                                    ],
                                    "multiline": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 21,
                                    "end": 51
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 19,
                                "end": 53
                            },
                            "autofix": 0,
                            "flags": 0,
                            "start": 17,
                            "end": 53
                        },
                        "flags": 256,
                        "start": 11,
                        "end": 53
                    }
                ],
                "flags": 256,
                "start": 9,
                "end": 55
            },
            "flags": 128,
            "start": 0,
            "end": 55
        }
    ],
    "isModule": false,
    "text": "class C { *method() { var f = function { super(); } } }",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 18,
            "error": "A rest element cannot have an initializer",
            "start": 9,
            "end": 11
        },
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 38,
            "end": 40
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 38,
            "end": 40
        },
        {
            "kind": 2,
            "source": 2,
            "code": 73,
            "error": "'super' can only be referenced in members of derived classes or object literal expressions",
            "start": 46,
            "end": 47
        }
    ],
    "start": 0,
    "end": 55
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: class-gen
> :: case: var f = function { super(); }
## Input

`````js
class C { *method() { var f = function { super(); } } }
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: class-gen
> :: case: var f = function { super(); }
## Input

`````js
class C { *method() { var f = function { super(); } } }
`````
```

