# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: d
> :: test: obj-method
> :: case: class C { constructor() { super(); } }
## Input

`````js
({ method() { class C { constructor() { super(); } } } })
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 209,
                                "name": {
                                    "kind": 81921,
                                    "value": "method",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 2,
                                    "end": 9
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 10,
                                    "end": 11
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
                                                    "start": 19,
                                                    "end": 21
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
                                                                    "start": 23,
                                                                    "end": 35
                                                                },
                                                                "typeParameters": null,
                                                                "formalParameters": {
                                                                    "kind": 214,
                                                                    "formalParameterList": [],
                                                                    "trailingComma": false,
                                                                    "autofix": 0,
                                                                    "flags": 256,
                                                                    "start": 36,
                                                                    "end": 37
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
                                                                                        "start": 39,
                                                                                        "end": 45
                                                                                    },
                                                                                    "argumentList": {
                                                                                        "kind": 256,
                                                                                        "elements": [],
                                                                                        "trailingComma": false,
                                                                                        "autofix": 0,
                                                                                        "flags": 256,
                                                                                        "start": 46,
                                                                                        "end": 46
                                                                                    },
                                                                                    "flags": 256,
                                                                                    "start": 39,
                                                                                    "end": 47
                                                                                },
                                                                                "autofix": 0,
                                                                                "flags": 128,
                                                                                "start": 39,
                                                                                "end": 48
                                                                            }
                                                                        ],
                                                                        "multiline": false,
                                                                        "autofix": 0,
                                                                        "flags": 256,
                                                                        "start": 39,
                                                                        "end": 48
                                                                    },
                                                                    "autofix": 0,
                                                                    "flags": 256,
                                                                    "start": 37,
                                                                    "end": 50
                                                                },
                                                                "autofix": 0,
                                                                "flags": 0,
                                                                "start": 35,
                                                                "end": 50
                                                            },
                                                            "flags": 256,
                                                            "start": 23,
                                                            "end": 50
                                                        }
                                                    ],
                                                    "flags": 256,
                                                    "start": 23,
                                                    "end": 52
                                                },
                                                "flags": 128,
                                                "start": 13,
                                                "end": 52
                                            }
                                        ],
                                        "multiline": false,
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 13,
                                        "end": 52
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 11,
                                    "end": 54
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 9,
                                "end": 54
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "autofix": 0,
                        "flags": 0,
                        "start": 2,
                        "end": 54
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 1,
                    "end": 56
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 57
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 57
        }
    ],
    "isModule": false,
    "text": "({ method() { class C { constructor() { super(); } } } })",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 73,
            "error": "'super' can only be referenced in members of derived classes or object literal expressions",
            "start": 45,
            "end": 46
        }
    ],
    "start": 0,
    "end": 57
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: d
> :: test: obj-method
> :: case: class C { constructor() { super(); } }
## Input

`````js
({ method() { class C { constructor() { super(); } } } })
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: d
> :: test: obj-method
> :: case: class C { constructor() { super(); } }
## Input

`````js
({ method() { class C { constructor() { super(); } } } })
`````
```

