# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: d
> :: test: obj-method
> :: case: y = super
## Input

`````js
({ method() { y = super } })
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
                                "kind": 257,
                                "generatorToken": null,
                                "asyncKeyword": null,
                                "getKeyword": null,
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "method",
                                        "rawText": "method",
                                        "flags": 96,
                                        "start": 2,
                                        "end": 9
                                    },
                                    "typeParameters": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 10,
                                        "end": 11
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
                                                            "flags": 96,
                                                            "start": 13,
                                                            "end": 15
                                                        },
                                                        "operatorToken": {
                                                            "kind": 4125,
                                                            "flags": 64,
                                                            "start": 15,
                                                            "end": 17
                                                        },
                                                        "right": {
                                                            "kind": 203,
                                                            "chain": {
                                                                "kind": 225,
                                                                "superKeyword": {
                                                                    "kind": 4259935,
                                                                    "flags": 0,
                                                                    "start": 17,
                                                                    "end": 23
                                                                },
                                                                "flags": 96,
                                                                "start": 17,
                                                                "end": 23
                                                            },
                                                            "expression": {
                                                                "kind": 16637,
                                                                "text": "",
                                                                "flags": 68,
                                                                "start": 23,
                                                                "end": 23
                                                            },
                                                            "flags": 32,
                                                            "start": 17,
                                                            "end": 23
                                                        },
                                                        "flags": 32,
                                                        "start": 13,
                                                        "end": 23
                                                    },
                                                    "flags": 16,
                                                    "start": 13,
                                                    "end": 23
                                                }
                                            ],
                                            "flags": 32,
                                            "start": 13,
                                            "end": 23
                                        },
                                        "flags": 32,
                                        "start": 11,
                                        "end": 25
                                    },
                                    "flags": 32,
                                    "start": 9,
                                    "end": 25
                                },
                                "flags": 32,
                                "start": 2,
                                "end": 25
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 2,
                        "end": 25
                    },
                    "flags": 32,
                    "start": 1,
                    "end": 27
                },
                "flags": 32,
                "start": 0,
                "end": 28
            },
            "flags": 16,
            "start": 0,
            "end": 28
        }
    ],
    "isModule": false,
    "source": "({ method() { y = super } })",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 28
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ 'super' must be followed by an argument list or member access. - start: 23, end: 25
✖ Dot property must be an identifier - start: 23, end: 25

```

