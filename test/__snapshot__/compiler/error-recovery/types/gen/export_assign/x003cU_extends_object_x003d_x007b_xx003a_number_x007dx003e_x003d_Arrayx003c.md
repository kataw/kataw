# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-14
- From: kataw/test/__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw/test/__snapshot__/compiler/error-recovery/types/gen/export_assign
> :: test: export assign
> :: case: <U extends object = { x: number }> = Array<
## Input

`````js
export <U extends object = { x: number }> = Array< = <U extends object = { x: number }> = Array<
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "export <U extends object = { x: number }> = Array< = <U extends object = { x: number }> = Array<",
    "filename": "",
    "statements": [
        {
            "kind": 76,
            "declaration": null,
            "namedExports": null,
            "exportFromClause": null,
            "fromClause": null,
            "isTypeOnly": false,
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 6
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 83976,
                "typeParameters": {
                    "kind": 134226153,
                    "typeParameterList": [
                        {
                            "kind": 134226152,
                            "name": {
                                "kind": 196711,
                                "text": "U",
                                "rawText": "U",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 8,
                                "end": 9
                            },
                            "constraint": {
                                "kind": 4202663,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 17,
                                "end": 24
                            },
                            "defaultType": {
                                "kind": 536879334,
                                "objectTypeMembers": {
                                    "kind": 536871081,
                                    "members": [
                                        {
                                            "kind": 8380,
                                            "name": {
                                                "kind": 196711,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 28,
                                                "end": 30
                                            },
                                            "isOptional": false,
                                            "accessModifier": null,
                                            "type": {
                                                "kind": 4202657,
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 2097152,
                                                "start": 31,
                                                "end": 38
                                            },
                                            "isStatic": false,
                                            "isReadOnly": false,
                                            "initializer": null,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 28,
                                            "end": 38
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 2097152,
                                    "start": 28,
                                    "end": 40
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 26,
                                "end": 40
                            },
                            "expression": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 8,
                            "end": 40
                        }
                    ],
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 2097152,
                    "start": 8,
                    "end": 40
                },
                "parameters": {
                    "kind": 131322,
                    "text": "",
                    "flags": 3,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 41,
                    "end": 41
                },
                "contents": {
                    "kind": 65550,
                    "left": {
                        "kind": 131322,
                        "text": "",
                        "flags": 3,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 41,
                        "end": 41
                    },
                    "operator": "=",
                    "right": {
                        "kind": 65550,
                        "left": {
                            "kind": 65563,
                            "left": {
                                "kind": 196712,
                                "text": "Array",
                                "rawText": "Array",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 43,
                                "end": 49
                            },
                            "operator": "<",
                            "right": {
                                "kind": 131322,
                                "text": "",
                                "flags": 3,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 50,
                                "end": 50
                            },
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 43,
                            "end": 50
                        },
                        "operator": "=",
                        "right": {
                            "kind": 83976,
                            "typeParameters": {
                                "kind": 134226153,
                                "typeParameterList": [
                                    {
                                        "kind": 134226152,
                                        "name": {
                                            "kind": 196711,
                                            "text": "U",
                                            "rawText": "U",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 54,
                                            "end": 55
                                        },
                                        "constraint": {
                                            "kind": 4202663,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 63,
                                            "end": 70
                                        },
                                        "defaultType": {
                                            "kind": 536879334,
                                            "objectTypeMembers": {
                                                "kind": 536871081,
                                                "members": [
                                                    {
                                                        "kind": 8380,
                                                        "name": {
                                                            "kind": 196711,
                                                            "text": "x",
                                                            "rawText": "x",
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 74,
                                                            "end": 76
                                                        },
                                                        "isOptional": false,
                                                        "accessModifier": null,
                                                        "type": {
                                                            "kind": 4202657,
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 2097152,
                                                            "start": 77,
                                                            "end": 84
                                                        },
                                                        "isStatic": false,
                                                        "isReadOnly": false,
                                                        "initializer": null,
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 2097152,
                                                        "start": 74,
                                                        "end": 84
                                                    }
                                                ],
                                                "multiline": false,
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 2097152,
                                                "start": 74,
                                                "end": 86
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 72,
                                            "end": 86
                                        },
                                        "expression": null,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 2097152,
                                        "start": 54,
                                        "end": 86
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 54,
                                "end": 86
                            },
                            "parameters": {
                                "kind": 131322,
                                "text": "",
                                "flags": 3,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 87,
                                "end": 87
                            },
                            "contents": {
                                "kind": 65550,
                                "left": {
                                    "kind": 131322,
                                    "text": "",
                                    "flags": 3,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 87,
                                    "end": 87
                                },
                                "operator": "=",
                                "right": {
                                    "kind": 65563,
                                    "left": {
                                        "kind": 196712,
                                        "text": "Array",
                                        "rawText": "Array",
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 89,
                                        "end": 95
                                    },
                                    "operator": "<",
                                    "right": {
                                        "kind": 131322,
                                        "text": "",
                                        "flags": 3,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 96,
                                        "end": 96
                                    },
                                    "flags": 1,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 89,
                                    "end": 96
                                },
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 87,
                                "end": 96
                            },
                            "flags": 1073741825,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 52,
                            "end": 96
                        },
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 43,
                        "end": 96
                    },
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 41,
                    "end": 96
                },
                "flags": 1073741825,
                "symbol": null,
                "transformFlags": 0,
                "start": 6,
                "end": 96
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 6,
            "end": 96
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 95,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 96
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

