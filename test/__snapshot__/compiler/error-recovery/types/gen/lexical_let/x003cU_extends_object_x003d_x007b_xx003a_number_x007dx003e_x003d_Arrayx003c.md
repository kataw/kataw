# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-14
- From: kataw/test/__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw/test/__snapshot__/compiler/error-recovery/types/gen/lexical_let
> :: test: lexical let
> :: case: <U extends object = { x: number }> = Array<
## Input

`````js
let x: <U extends object = { x: number }> = Array< <U extends object = { x: number }> = Array<
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "let x: <U extends object = { x: number }> = Array< <U extends object = { x: number }> = Array<",
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
                            "start": 3,
                            "end": 5
                        },
                        "exclamation": false,
                        "type": {
                            "kind": 8287,
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
                                "kind": 134226095,
                                "parameterList": [],
                                "trailingcomma": false,
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 41,
                                "end": 41
                            },
                            "returnType": {
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
                                "end": 43
                            },
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 6,
                            "end": 41
                        },
                        "initializer": {
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
                                                "start": 52,
                                                "end": 53
                                            },
                                            "constraint": {
                                                "kind": 4202663,
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 2097152,
                                                "start": 61,
                                                "end": 68
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
                                                                "start": 72,
                                                                "end": 74
                                                            },
                                                            "isOptional": false,
                                                            "accessModifier": null,
                                                            "type": {
                                                                "kind": 4202657,
                                                                "flags": 0,
                                                                "symbol": null,
                                                                "transformFlags": 2097152,
                                                                "start": 75,
                                                                "end": 82
                                                            },
                                                            "isStatic": false,
                                                            "isReadOnly": false,
                                                            "initializer": null,
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 2097152,
                                                            "start": 72,
                                                            "end": 82
                                                        }
                                                    ],
                                                    "multiline": false,
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 2097152,
                                                    "start": 72,
                                                    "end": 84
                                                },
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 2097152,
                                                "start": 70,
                                                "end": 84
                                            },
                                            "expression": null,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 52,
                                            "end": 84
                                        }
                                    ],
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 2097152,
                                    "start": 52,
                                    "end": 84
                                },
                                "parameters": {
                                    "kind": 131322,
                                    "text": "",
                                    "flags": 3,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 85,
                                    "end": 85
                                },
                                "contents": {
                                    "kind": 65550,
                                    "left": {
                                        "kind": 131322,
                                        "text": "",
                                        "flags": 3,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 85,
                                        "end": 85
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
                                            "start": 87,
                                            "end": 93
                                        },
                                        "operator": "<",
                                        "right": {
                                            "kind": 131322,
                                            "text": "",
                                            "flags": 3,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 94,
                                            "end": 94
                                        },
                                        "flags": 1,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 87,
                                        "end": 94
                                    },
                                    "flags": 1,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 85,
                                    "end": 94
                                },
                                "flags": 1073741825,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 50,
                                "end": 94
                            },
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 43,
                            "end": 94
                        },
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 3,
                        "end": 94
                    }
                ],
                "flags": 24,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 94
            },
            "flags": 24,
            "symbol": null,
            "transformFlags": 769,
            "start": 0,
            "end": 94
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 93,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 94
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

