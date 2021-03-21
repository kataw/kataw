# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-17
- From: kataw/test/__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw/test/__snapshot__/compiler/error-recovery/types/gen/lexical_const
> :: test: lexical const
> :: case: T = t as
## Input

`````js
const x: T = t as= {x:T = t as}:T = t as
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "const x: T = t as= {x:T = t as}:T = t as",
    "filename": "",
    "statements": [
        {
            "kind": 142,
            "binding": {
                "kind": 31,
                "lexicals": [
                    {
                        "kind": 16525,
                        "binding": {
                            "kind": 131102,
                            "text": "x",
                            "rawText": "x",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 5,
                            "end": 7
                        },
                        "exclamation": false,
                        "type": {
                            "kind": 134226156,
                            "typeName": {
                                "kind": 196711,
                                "text": "T",
                                "rawText": "T",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 8,
                                "end": 10
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 8,
                            "end": 12
                        },
                        "initializer": {
                            "kind": 65550,
                            "left": {
                                "kind": 73738,
                                "expression": {
                                    "kind": 196712,
                                    "text": "t",
                                    "rawText": "t",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 12,
                                    "end": 14
                                },
                                "type": {
                                    "kind": 134226156,
                                    "typeName": {
                                        "kind": 131322,
                                        "text": "",
                                        "flags": 3,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 17,
                                        "end": 17
                                    },
                                    "typeArguments": null,
                                    "flags": 1,
                                    "symbol": null,
                                    "transformFlags": 2097152,
                                    "start": 17,
                                    "end": 18
                                },
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 14,
                                "end": 17
                            },
                            "operator": "=",
                            "right": {
                                "kind": 98984,
                                "propertyList": {
                                    "kind": 65722,
                                    "properties": [
                                        {
                                            "kind": 65721,
                                            "left": {
                                                "kind": 196711,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 20,
                                                "end": 21
                                            },
                                            "right": {
                                                "kind": 65550,
                                                "left": {
                                                    "kind": 196712,
                                                    "text": "T",
                                                    "rawText": "T",
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 22,
                                                    "end": 23
                                                },
                                                "operator": "=",
                                                "right": {
                                                    "kind": 73738,
                                                    "expression": {
                                                        "kind": 196712,
                                                        "text": "t",
                                                        "rawText": "t",
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 25,
                                                        "end": 27
                                                    },
                                                    "type": {
                                                        "kind": 134226156,
                                                        "typeName": {
                                                            "kind": 131322,
                                                            "text": "",
                                                            "flags": 3,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 30,
                                                            "end": 30
                                                        },
                                                        "typeArguments": null,
                                                        "flags": 1,
                                                        "symbol": null,
                                                        "transformFlags": 2097152,
                                                        "start": 30,
                                                        "end": 31
                                                    },
                                                    "flags": 1,
                                                    "symbol": null,
                                                    "transformFlags": 2097152,
                                                    "start": 27,
                                                    "end": 30
                                                },
                                                "flags": 1,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 22,
                                                "end": 30
                                            },
                                            "accessModifier": null,
                                            "decorators": null,
                                            "flags": 1,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 20,
                                            "end": 30
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "flags": 1,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 20,
                                    "end": 30
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 18,
                                "end": 31
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 12,
                            "end": 31
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 5,
                        "end": 31
                    }
                ],
                "flags": 40,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 31
            },
            "flags": 40,
            "symbol": null,
            "transformFlags": 769,
            "start": 0,
            "end": 31
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 65550,
                "left": {
                    "kind": 196712,
                    "text": "T",
                    "rawText": "T",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 32,
                    "end": 33
                },
                "operator": "=",
                "right": {
                    "kind": 73738,
                    "expression": {
                        "kind": 196712,
                        "text": "t",
                        "rawText": "t",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 35,
                        "end": 37
                    },
                    "type": {
                        "kind": 134226156,
                        "typeName": {
                            "kind": 131322,
                            "text": "",
                            "flags": 3,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 40,
                            "end": 40
                        },
                        "typeArguments": null,
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 40,
                        "end": 40
                    },
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 2097152,
                    "start": 37,
                    "end": 40
                },
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 32,
                "end": 40
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 32,
            "end": 40
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "Type expected",
            "start": 17,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Type expected",
            "start": 30,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 31,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Type expected",
            "start": 38,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 40
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

