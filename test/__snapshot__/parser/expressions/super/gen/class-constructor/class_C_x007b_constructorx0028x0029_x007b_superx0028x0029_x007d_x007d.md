# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: class-constructor
> :: case: class C { constructor() { super(); } }
## Input

`````js
class C { constructor() { class C { constructor() { super(); } } } }
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
                                            "kind": 178,
                                            "decorators": null,
                                            "name": {
                                                "kind": 81921,
                                                "value": "C",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 31,
                                                "end": 33
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
                                                                "start": 35,
                                                                "end": 47
                                                            },
                                                            "typeParameters": null,
                                                            "formalParameters": {
                                                                "kind": 214,
                                                                "formalParameterList": [],
                                                                "trailingComma": false,
                                                                "autofix": 0,
                                                                "flags": 256,
                                                                "start": 48,
                                                                "end": 49
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
                                                                                "kind": 131,
                                                                                "expression": {
                                                                                    "kind": 225,
                                                                                    "autofix": 0,
                                                                                    "flags": 768,
                                                                                    "start": 51,
                                                                                    "end": 57
                                                                                },
                                                                                "argumentList": {
                                                                                    "kind": 256,
                                                                                    "elements": [],
                                                                                    "trailingComma": false,
                                                                                    "autofix": 0,
                                                                                    "flags": 256,
                                                                                    "start": 58,
                                                                                    "end": 58
                                                                                },
                                                                                "flags": 256,
                                                                                "start": 51,
                                                                                "end": 59
                                                                            },
                                                                            "autofix": 0,
                                                                            "flags": 128,
                                                                            "start": 51,
                                                                            "end": 60
                                                                        }
                                                                    ],
                                                                    "multiline": false,
                                                                    "autofix": 0,
                                                                    "flags": 256,
                                                                    "start": 51,
                                                                    "end": 60
                                                                },
                                                                "autofix": 0,
                                                                "flags": 256,
                                                                "start": 49,
                                                                "end": 62
                                                            },
                                                            "autofix": 0,
                                                            "flags": 0,
                                                            "start": 47,
                                                            "end": 62
                                                        },
                                                        "flags": 256,
                                                        "start": 35,
                                                        "end": 62
                                                    }
                                                ],
                                                "flags": 256,
                                                "start": 35,
                                                "end": 64
                                            },
                                            "flags": 128,
                                            "start": 25,
                                            "end": 64
                                        }
                                    ],
                                    "multiline": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 25,
                                    "end": 64
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 23,
                                "end": 66
                            },
                            "autofix": 0,
                            "flags": 0,
                            "start": 21,
                            "end": 66
                        },
                        "flags": 256,
                        "start": 9,
                        "end": 66
                    }
                ],
                "flags": 256,
                "start": 9,
                "end": 68
            },
            "flags": 128,
            "start": 0,
            "end": 68
        }
    ],
    "isModule": false,
    "text": "class C { constructor() { class C { constructor() { super(); } } } }",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 73,
            "error": "'super' can only be referenced in members of derived classes or object literal expressions",
            "start": 57,
            "end": 58
        }
    ],
    "start": 0,
    "end": 68
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: class-constructor
> :: case: class C { constructor() { super(); } }
## Input

`````js
class C { constructor() { class C { constructor() { super(); } } } }
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: class-constructor
> :: case: class C { constructor() { super(); } }
## Input

`````js
class C { constructor() { class C { constructor() { super(); } } } }
`````
```

