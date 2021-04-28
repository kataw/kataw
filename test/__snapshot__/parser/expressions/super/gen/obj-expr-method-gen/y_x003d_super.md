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
                                    "text": "method",
                                    "rawText": "method",
                                    "flags": 768,
                                    "start": 4,
                                    "end": 10
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 1280,
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
                                                        "text": "y",
                                                        "rawText": "y",
                                                        "flags": 768,
                                                        "start": 14,
                                                        "end": 16
                                                    },
                                                    "operatorToken": {
                                                        "kind": 4125,
                                                        "flags": 768,
                                                        "start": 16,
                                                        "end": 18
                                                    },
                                                    "right": {
                                                        "kind": 203,
                                                        "chain": {
                                                            "kind": 225,
                                                            "superKeyword": {
                                                                "kind": 4259935,
                                                                "flags": 768,
                                                                "start": 18,
                                                                "end": 24
                                                            },
                                                            "flags": 768,
                                                            "start": 18,
                                                            "end": 24
                                                        },
                                                        "expression": {
                                                            "kind": 16637,
                                                            "text": "",
                                                            "flags": 12,
                                                            "start": 24,
                                                            "end": 24
                                                        },
                                                        "flags": 256,
                                                        "start": 18,
                                                        "end": 24
                                                    },
                                                    "flags": 256,
                                                    "start": 14,
                                                    "end": 24
                                                },
                                                "flags": 128,
                                                "start": 14,
                                                "end": 24
                                            }
                                        ],
                                        "multiline": false,
                                        "flags": 256,
                                        "start": 14,
                                        "end": 24
                                    },
                                    "flags": 256,
                                    "start": 12,
                                    "end": 26
                                },
                                "flags": 1280,
                                "start": 10,
                                "end": 26
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 2,
                        "end": 26
                    },
                    "flags": 256,
                    "start": 1,
                    "end": 28
                },
                "flags": 256,
                "start": 0,
                "end": 29
            },
            "flags": 128,
            "start": 0,
            "end": 29
        }
    ],
    "isModule": false,
    "text": "({ *method() { y = super } })",
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

