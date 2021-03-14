# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-14
- From: kataw/test/__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw/test/__snapshot__/compiler/error-recovery/types/gen/in_class
> :: test: in class
> :: case: T = t as
## Input

`````js
T = t as class T = t as { field: T = t as}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "T = t as class T = t as { field: T = t as}",
    "filename": "",
    "statements": [
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
                    "start": 0,
                    "end": 1
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
                        "start": 3,
                        "end": 5
                    },
                    "type": {
                        "kind": 134226156,
                        "typeName": {
                            "kind": 196711,
                            "text": "class",
                            "rawText": "class",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 8,
                            "end": 14
                        },
                        "typeArguments": null,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 8,
                        "end": 16
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 2097152,
                    "start": 5,
                    "end": 14
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 14
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 14
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 65550,
                "left": {
                    "kind": 196712,
                    "text": "T",
                    "rawText": "T",
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 14,
                    "end": 16
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
                        "start": 18,
                        "end": 20
                    },
                    "type": {
                        "kind": 536879334,
                        "objectTypeMembers": {
                            "kind": 536871081,
                            "members": [
                                {
                                    "kind": 8380,
                                    "name": {
                                        "kind": 196711,
                                        "text": "field",
                                        "rawText": "field",
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 25,
                                        "end": 31
                                    },
                                    "isOptional": false,
                                    "accessModifier": null,
                                    "type": {
                                        "kind": 134226156,
                                        "typeName": {
                                            "kind": 196711,
                                            "text": "T",
                                            "rawText": "T",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 32,
                                            "end": 34
                                        },
                                        "typeArguments": null,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 2097152,
                                        "start": 32,
                                        "end": 36
                                    },
                                    "isStatic": false,
                                    "isReadOnly": false,
                                    "initializer": {
                                        "kind": 73738,
                                        "expression": {
                                            "kind": 196712,
                                            "text": "t",
                                            "rawText": "t",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 36,
                                            "end": 38
                                        },
                                        "type": {
                                            "kind": 134226156,
                                            "typeName": {
                                                "kind": 196712,
                                                "text": "",
                                                "rawText": "",
                                                "flags": 1,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 41,
                                                "end": 41
                                            },
                                            "typeArguments": null,
                                            "flags": 1,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 41,
                                            "end": 42
                                        },
                                        "flags": 1,
                                        "symbol": null,
                                        "transformFlags": 2097152,
                                        "start": 38,
                                        "end": 41
                                    },
                                    "flags": 1,
                                    "symbol": null,
                                    "transformFlags": 2097152,
                                    "start": 25,
                                    "end": 41
                                }
                            ],
                            "multiline": false,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 25,
                            "end": 42
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 23,
                        "end": 42
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 2097152,
                    "start": 20,
                    "end": 42
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 14,
                "end": 42
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 14,
            "end": 42
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "Type expected",
            "start": 41,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 42
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

