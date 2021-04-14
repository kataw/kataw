# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: d
> :: test: obj-method
> :: case: new super;
## Input

`````js
({ method() { new super; } })
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
                                    "kind": 81921,
                                    "text": "method",
                                    "rawText": "method",
                                    "flags": 768,
                                    "start": 2,
                                    "end": 9
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 256,
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
                                                    "kind": 210,
                                                    "newKeyword": {
                                                        "kind": 4259933,
                                                        "flags": 768,
                                                        "start": 13,
                                                        "end": 17
                                                    },
                                                    "expression": {
                                                        "kind": 203,
                                                        "chain": {
                                                            "kind": 225,
                                                            "superKeyword": {
                                                                "kind": 4259935,
                                                                "flags": 768,
                                                                "start": 17,
                                                                "end": 23
                                                            },
                                                            "flags": 768,
                                                            "start": 17,
                                                            "end": 23
                                                        },
                                                        "expression": {
                                                            "kind": 16637,
                                                            "text": "",
                                                            "autofix": 0,
                                                            "flags": 12,
                                                            "start": 23,
                                                            "end": 23
                                                        },
                                                        "flags": 256,
                                                        "start": 17,
                                                        "end": 23
                                                    },
                                                    "argumentList": null,
                                                    "flags": 256,
                                                    "start": 13,
                                                    "end": 23
                                                },
                                                "flags": 128,
                                                "start": 13,
                                                "end": 24
                                            }
                                        ],
                                        "multiline": false,
                                        "flags": 256,
                                        "start": 13,
                                        "end": 24
                                    },
                                    "flags": 256,
                                    "start": 11,
                                    "end": 26
                                },
                                "flags": 256,
                                "start": 9,
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
    "text": "({ method() { new super; } })",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 74,
            "error": "'super' must be followed by an argument list or member access.",
            "start": 23,
            "end": 24
        },
        {
            "kind": 2,
            "source": 2,
            "code": 68,
            "error": "Dot property must be an identifier",
            "start": 23,
            "end": 24
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
- Path: d
> :: test: obj-method
> :: case: new super;
## Input

`````js
({ method() { new super; } })
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: d
> :: test: obj-method
> :: case: new super;
## Input

`````js
({ method() { new super; } })
`````
```

