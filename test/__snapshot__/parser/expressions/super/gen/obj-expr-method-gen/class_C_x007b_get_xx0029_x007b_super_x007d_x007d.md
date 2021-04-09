# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: obj-expr-method-gen
> :: case: class C { get x) { super; } }
## Input

`````js
({ *method() { class C { get x) { super; } } } })
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
                                                            "kind": 280,
                                                            "decorators": null,
                                                            "declaredToken": null,
                                                            "staticToken": null,
                                                            "key": {
                                                                "kind": 81921,
                                                                "value": "x",
                                                                "autofix": 0,
                                                                "flags": 768,
                                                                "start": 28,
                                                                "end": 30
                                                            },
                                                            "optionalToken": null,
                                                            "type": null,
                                                            "initializer": null,
                                                            "flags": 256,
                                                            "start": 24,
                                                            "end": 30
                                                        }
                                                    ],
                                                    "flags": 256,
                                                    "start": 24,
                                                    "end": 30
                                                },
                                                "flags": 128,
                                                "start": 14,
                                                "end": 30
                                            }
                                        ],
                                        "multiline": false,
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 14,
                                        "end": 30
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 12,
                                    "end": 30
                                },
                                "autofix": 0,
                                "flags": 1280,
                                "start": 10,
                                "end": 30
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "autofix": 0,
                        "flags": 0,
                        "start": 2,
                        "end": 30
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 1,
                    "end": 30
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 31
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 31
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 203,
                            "chain": {
                                "kind": 225,
                                "autofix": 0,
                                "flags": 768,
                                "start": 33,
                                "end": 39
                            },
                            "expression": {
                                "kind": 253,
                                "text": "",
                                "autofix": 0,
                                "flags": 12,
                                "start": 39,
                                "end": 39
                            },
                            "flags": 256,
                            "start": 33,
                            "end": 39
                        },
                        "autofix": 0,
                        "flags": 128,
                        "start": 33,
                        "end": 40
                    }
                ],
                "multiLine": false,
                "autofix": 0,
                "flags": 128,
                "start": 33,
                "end": 40
            },
            "autofix": 0,
            "flags": 128,
            "start": 31,
            "end": 42
        }
    ],
    "isModule": false,
    "text": "({ *method() { class C { get x) { super; } } } })",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 30,
            "end": 31
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 30,
            "end": 31
        },
        {
            "kind": 2,
            "source": 2,
            "code": 4,
            "error": "',' expected",
            "start": 30,
            "end": 31
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 30,
            "end": 31
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 31,
            "end": 33
        },
        {
            "kind": 2,
            "source": 2,
            "code": 74,
            "error": "'super' must be followed by an argument list or member access.",
            "start": 39,
            "end": 40
        },
        {
            "kind": 2,
            "source": 2,
            "code": 68,
            "error": "Dot property must be an identifier",
            "start": 39,
            "end": 40
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 42,
            "end": 44
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 44,
            "end": 46
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 46,
            "end": 48
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 48,
            "end": 49
        }
    ],
    "start": 0,
    "end": 49
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: obj-expr-method-gen
> :: case: class C { get x) { super; } }
## Input

`````js
({ *method() { class C { get x) { super; } } } })
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: obj-expr-method-gen
> :: case: class C { get x) { super; } }
## Input

`````js
({ *method() { class C { get x) { super; } } } })
`````
```

