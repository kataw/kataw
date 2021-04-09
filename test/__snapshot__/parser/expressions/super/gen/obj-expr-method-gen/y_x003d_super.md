# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: obj-expr-method-gen
> :: case: y = super
## Input

`````js
({ *method() { y = super } })
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
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 125,
                                                    "left": {
                                                        "kind": 81921,
                                                        "value": "y",
                                                        "autofix": 0,
                                                        "flags": 768,
                                                        "start": 14,
                                                        "end": 16
                                                    },
                                                    "operatorToken": {
                                                        "kind": 4259935,
                                                        "autofix": 0,
                                                        "flags": 0,
                                                        "start": 14,
                                                        "end": 18
                                                    },
                                                    "right": {
                                                        "kind": 203,
                                                        "chain": {
                                                            "kind": 225,
                                                            "autofix": 0,
                                                            "flags": 768,
                                                            "start": 18,
                                                            "end": 24
                                                        },
                                                        "expression": {
                                                            "kind": 253,
                                                            "text": "",
                                                            "autofix": 0,
                                                            "flags": 12,
                                                            "start": 24,
                                                            "end": 24
                                                        },
                                                        "flags": 256,
                                                        "start": 18,
                                                        "end": 24
                                                    },
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 14,
                                                    "end": 24
                                                },
                                                "autofix": 0,
                                                "flags": 128,
                                                "start": 14,
                                                "end": 24
                                            }
                                        ],
                                        "multiline": false,
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 14,
                                        "end": 24
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 12,
                                    "end": 26
                                },
                                "autofix": 0,
                                "flags": 1280,
                                "start": 10,
                                "end": 26
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "autofix": 0,
                        "flags": 0,
                        "start": 2,
                        "end": 26
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 1,
                    "end": 28
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 29
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 29
        }
    ],
    "isModule": false,
    "text": "({ *method() { y = super } })",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 74,
            "error": "'super' must be followed by an argument list or member access.",
            "start": 24,
            "end": 26
        },
        {
            "kind": 2,
            "source": 2,
            "code": 68,
            "error": "Dot property must be an identifier",
            "start": 24,
            "end": 26
        }
    ],
    "start": 0,
    "end": 29
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: obj-expr-method-gen
> :: case: y = super
## Input

`````js
({ *method() { y = super } })
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: obj-expr-method-gen
> :: case: y = super
## Input

`````js
({ *method() { y = super } })
`````
```

