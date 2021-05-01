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
    "directives": [],
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
                                    "kind": 134299649,
                                    "original": "method",
                                    "text": "method",
                                    "rawText": "method",
                                    "flags": 96,
                                    "start": 4,
                                    "end": 10
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 160,
                                    "start": 11,
                                    "end": 12
                                },
                                "type": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [
                                            {
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 125,
                                                    "left": {
                                                        "kind": 134299649,
                                                        "original": "y",
                                                        "text": "y",
                                                        "rawText": " y",
                                                        "flags": 96,
                                                        "start": 14,
                                                        "end": 16
                                                    },
                                                    "operatorToken": {
                                                        "kind": 4125,
                                                        "flags": 64,
                                                        "start": 16,
                                                        "end": 18
                                                    },
                                                    "right": {
                                                        "kind": 203,
                                                        "chain": {
                                                            "kind": 225,
                                                            "superKeyword": {
                                                                "kind": 4259935,
                                                                "flags": 0,
                                                                "start": 18,
                                                                "end": 24
                                                            },
                                                            "flags": 96,
                                                            "start": 18,
                                                            "end": 24
                                                        },
                                                        "expression": {
                                                            "kind": 16637,
                                                            "text": "",
                                                            "flags": 68,
                                                            "start": 24,
                                                            "end": 24
                                                        },
                                                        "flags": 32,
                                                        "start": 18,
                                                        "end": 24
                                                    },
                                                    "flags": 32,
                                                    "start": 14,
                                                    "end": 24
                                                },
                                                "flags": 16,
                                                "start": 14,
                                                "end": 24
                                            }
                                        ],
                                        "flags": 32,
                                        "start": 14,
                                        "end": 24
                                    },
                                    "flags": 32,
                                    "start": 12,
                                    "end": 26
                                },
                                "flags": 160,
                                "start": 10,
                                "end": 26
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 2,
                        "end": 26
                    },
                    "flags": 32,
                    "start": 1,
                    "end": 28
                },
                "flags": 32,
                "start": 0,
                "end": 29
            },
            "flags": 16,
            "start": 0,
            "end": 29
        }
    ],
    "isModule": false,
    "source": "({ *method() { y = super } })",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 29
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ 'super' must be followed by an argument list or member access. - start: 24, end: 26
✖ Dot property must be an identifier - start: 24, end: 26

```

