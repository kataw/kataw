# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: obj-expr-method-gen
> :: case: class C { constructor() { super(); } }
## Input

`````js
({ *method() { class C { constructor() { super(); } } } })
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
                                    "start": 4,
                                    "end": 10
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 11,
                                    "end": 12
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
                                                    "start": 20,
                                                    "end": 22
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
                                                                    "start": 24,
                                                                    "end": 36
                                                                },
                                                                "typeParameters": null,
                                                                "formalParameters": {
                                                                    "kind": 214,
                                                                    "formalParameterList": [],
                                                                    "trailingComma": false,
                                                                    "autofix": 0,
                                                                    "flags": 256,
                                                                    "start": 37,
                                                                    "end": 38
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
                                                                "autofix": 0,
                                                                "flags": 0,
                                                                "start": 36,
                                                                "end": 51
                                                            },
                                                            "flags": 256,
                                                            "start": 24,
                                                            "end": 51
                                                        }
                                                    ],
                                                    "flags": 256,
                                                    "start": 24,
                                                    "end": 53
                                                },
                                                "flags": 128,
                                                "start": 14,
                                                "end": 53
                                            }
                                        ],
                                        "multiline": false,
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 14,
                                        "end": 53
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 12,
                                    "end": 55
                                },
                                "autofix": 0,
                                "flags": 1280,
                                "start": 10,
                                "end": 55
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "autofix": 0,
                        "flags": 0,
                        "start": 2,
                        "end": 55
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 1,
                    "end": 57
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 58
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 58
        }
    ],
    "isModule": false,
    "text": "({ *method() { class C { constructor() { super(); } } } })",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
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
    "end": 58
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: obj-expr-method-gen
> :: case: class C { constructor() { super(); } }
## Input

`````js
({ *method() { class C { constructor() { super(); } } } })
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: obj-expr-method-gen
> :: case: class C { constructor() { super(); } }
## Input

`````js
({ *method() { class C { constructor() { super(); } } } })
`````
```

