# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: obj-expr-method-gen
> :: case: class C { method() { super(); } }
## Input

`````js
({ *method() { class C { method() { super(); } } } })
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
                                                                    "value": "method",
                                                                    "autofix": 0,
                                                                    "flags": 768,
                                                                    "start": 24,
                                                                    "end": 31
                                                                },
                                                                "typeParameters": null,
                                                                "formalParameters": {
                                                                    "kind": 214,
                                                                    "formalParameterList": [],
                                                                    "trailingComma": false,
                                                                    "autofix": 0,
                                                                    "flags": 256,
                                                                    "start": 32,
                                                                    "end": 33
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
                                                                                        "start": 35,
                                                                                        "end": 41
                                                                                    },
                                                                                    "argumentList": {
                                                                                        "kind": 256,
                                                                                        "elements": [],
                                                                                        "trailingComma": false,
                                                                                        "autofix": 0,
                                                                                        "flags": 256,
                                                                                        "start": 42,
                                                                                        "end": 42
                                                                                    },
                                                                                    "flags": 256,
                                                                                    "start": 35,
                                                                                    "end": 43
                                                                                },
                                                                                "autofix": 0,
                                                                                "flags": 128,
                                                                                "start": 35,
                                                                                "end": 44
                                                                            }
                                                                        ],
                                                                        "multiline": false,
                                                                        "autofix": 0,
                                                                        "flags": 256,
                                                                        "start": 35,
                                                                        "end": 44
                                                                    },
                                                                    "autofix": 0,
                                                                    "flags": 256,
                                                                    "start": 33,
                                                                    "end": 46
                                                                },
                                                                "autofix": 0,
                                                                "flags": 0,
                                                                "start": 31,
                                                                "end": 46
                                                            },
                                                            "flags": 256,
                                                            "start": 24,
                                                            "end": 46
                                                        }
                                                    ],
                                                    "flags": 256,
                                                    "start": 24,
                                                    "end": 48
                                                },
                                                "flags": 128,
                                                "start": 14,
                                                "end": 48
                                            }
                                        ],
                                        "multiline": false,
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 14,
                                        "end": 48
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 12,
                                    "end": 50
                                },
                                "autofix": 0,
                                "flags": 1280,
                                "start": 10,
                                "end": 50
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "autofix": 0,
                        "flags": 0,
                        "start": 2,
                        "end": 50
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 1,
                    "end": 52
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 53
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 53
        }
    ],
    "isModule": false,
    "text": "({ *method() { class C { method() { super(); } } } })",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 73,
            "error": "'super' can only be referenced in members of derived classes or object literal expressions",
            "start": 41,
            "end": 42
        }
    ],
    "start": 0,
    "end": 53
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: obj-expr-method-gen
> :: case: class C { method() { super(); } }
## Input

`````js
({ *method() { class C { method() { super(); } } } })
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: obj-expr-method-gen
> :: case: class C { method() { super(); } }
## Input

`````js
({ *method() { class C { method() { super(); } } } })
`````
```

