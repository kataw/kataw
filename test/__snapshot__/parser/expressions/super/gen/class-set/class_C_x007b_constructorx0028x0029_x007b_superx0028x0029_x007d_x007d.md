# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: t
> :: test: class-set
> :: case: class C { constructor() { super(); } }
## Input

`````js
class C { set x(_) { class C { constructor() { super(); } } } }
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
                                "value": "x",
                                "autofix": 0,
                                "flags": 768,
                                "start": 13,
                                "end": 15
                            },
                            "typeParameters": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [
                                    {
                                        "kind": 215,
                                        "ellipsisToken": null,
                                        "binding": {
                                            "kind": 81921,
                                            "value": "_",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 16,
                                            "end": 17
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": null,
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 16,
                                        "end": 17
                                    }
                                ],
                                "trailingComma": false,
                                "autofix": 0,
                                "flags": 256,
                                "start": 16,
                                "end": 18
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
                                                "start": 26,
                                                "end": 28
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
                                                                "start": 30,
                                                                "end": 42
                                                            },
                                                            "typeParameters": null,
                                                            "formalParameters": {
                                                                "kind": 214,
                                                                "formalParameterList": [],
                                                                "trailingComma": false,
                                                                "autofix": 0,
                                                                "flags": 256,
                                                                "start": 43,
                                                                "end": 44
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
                                                                                    "start": 46,
                                                                                    "end": 52
                                                                                },
                                                                                "argumentList": {
                                                                                    "kind": 256,
                                                                                    "elements": [],
                                                                                    "trailingComma": false,
                                                                                    "autofix": 0,
                                                                                    "flags": 256,
                                                                                    "start": 53,
                                                                                    "end": 53
                                                                                },
                                                                                "flags": 256,
                                                                                "start": 46,
                                                                                "end": 54
                                                                            },
                                                                            "autofix": 0,
                                                                            "flags": 128,
                                                                            "start": 46,
                                                                            "end": 55
                                                                        }
                                                                    ],
                                                                    "multiline": false,
                                                                    "autofix": 0,
                                                                    "flags": 256,
                                                                    "start": 46,
                                                                    "end": 55
                                                                },
                                                                "autofix": 0,
                                                                "flags": 256,
                                                                "start": 44,
                                                                "end": 57
                                                            },
                                                            "autofix": 0,
                                                            "flags": 0,
                                                            "start": 42,
                                                            "end": 57
                                                        },
                                                        "flags": 256,
                                                        "start": 30,
                                                        "end": 57
                                                    }
                                                ],
                                                "flags": 256,
                                                "start": 30,
                                                "end": 59
                                            },
                                            "flags": 128,
                                            "start": 20,
                                            "end": 59
                                        }
                                    ],
                                    "multiline": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 20,
                                    "end": 59
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 18,
                                "end": 61
                            },
                            "autofix": 0,
                            "flags": 4096,
                            "start": 15,
                            "end": 61
                        },
                        "flags": 256,
                        "start": 9,
                        "end": 61
                    }
                ],
                "flags": 256,
                "start": 9,
                "end": 63
            },
            "flags": 128,
            "start": 0,
            "end": 63
        }
    ],
    "isModule": false,
    "text": "class C { set x(_) { class C { constructor() { super(); } } } }",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 73,
            "error": "'super' can only be referenced in members of derived classes or object literal expressions",
            "start": 52,
            "end": 53
        }
    ],
    "start": 0,
    "end": 63
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: t
> :: test: class-set
> :: case: class C { constructor() { super(); } }
## Input

`````js
class C { set x(_) { class C { constructor() { super(); } } } }
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: t
> :: test: class-set
> :: case: class C { constructor() { super(); } }
## Input

`````js
class C { set x(_) { class C { constructor() { super(); } } } }
`````
```

