# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-14
- From: kataw/test/__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw/test/__snapshot__/compiler/error-recovery/types/gen/in_class
> :: test: in class
> :: case: <U extends object = { x: number }> = Array<
## Input

`````js
<U extends object = { x: number }> = Array< class <U extends object = { x: number }> = Array< { field: <U extends object = { x: number }> = Array<}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "<U extends object = { x: number }> = Array< class <U extends object = { x: number }> = Array< { field: <U extends object = { x: number }> = Array<}",
    "filename": "",
    "statements": [
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
                                "start": 1,
                                "end": 2
                            },
                            "constraint": {
                                "kind": 4202663,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 10,
                                "end": 17
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
                                                "start": 21,
                                                "end": 23
                                            },
                                            "isOptional": false,
                                            "accessModifier": null,
                                            "type": {
                                                "kind": 4202657,
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 2097152,
                                                "start": 24,
                                                "end": 31
                                            },
                                            "isStatic": false,
                                            "isReadOnly": false,
                                            "initializer": null,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 21,
                                            "end": 31
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 2097152,
                                    "start": 21,
                                    "end": 33
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 19,
                                "end": 33
                            },
                            "expression": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 1,
                            "end": 33
                        }
                    ],
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 2097152,
                    "start": 1,
                    "end": 33
                },
                "parameters": {
                    "kind": 131322,
                    "text": "",
                    "flags": 3,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 34,
                    "end": 34
                },
                "contents": {
                    "kind": 65550,
                    "left": {
                        "kind": 131322,
                        "text": "",
                        "flags": 3,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 34,
                        "end": 34
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
                                "start": 36,
                                "end": 42
                            },
                            "operator": "<",
                            "right": {
                                "kind": 66099,
                                "name": null,
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
                                                "start": 51,
                                                "end": 52
                                            },
                                            "constraint": {
                                                "kind": 4202663,
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 2097152,
                                                "start": 60,
                                                "end": 67
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
                                                                "start": 71,
                                                                "end": 73
                                                            },
                                                            "isOptional": false,
                                                            "accessModifier": null,
                                                            "type": {
                                                                "kind": 4202657,
                                                                "flags": 0,
                                                                "symbol": null,
                                                                "transformFlags": 2097152,
                                                                "start": 74,
                                                                "end": 81
                                                            },
                                                            "isStatic": false,
                                                            "isReadOnly": false,
                                                            "initializer": null,
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 2097152,
                                                            "start": 71,
                                                            "end": 81
                                                        }
                                                    ],
                                                    "multiline": false,
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 2097152,
                                                    "start": 71,
                                                    "end": 83
                                                },
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 2097152,
                                                "start": 69,
                                                "end": 83
                                            },
                                            "expression": null,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 51,
                                            "end": 83
                                        }
                                    ],
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 2097152,
                                    "start": 51,
                                    "end": 83
                                },
                                "classHeritage": null,
                                "implementClauses": null,
                                "members": {
                                    "kind": 50,
                                    "elements": [],
                                    "flags": 1,
                                    "symbol": null,
                                    "transformFlags": 1,
                                    "start": 43,
                                    "end": 43
                                },
                                "decorators": null,
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 1,
                                "start": 43,
                                "end": 84
                            },
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 36,
                            "end": 84
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
                                "start": 86,
                                "end": 92
                            },
                            "operator": "<",
                            "right": {
                                "kind": 98984,
                                "propertyList": {
                                    "kind": 65722,
                                    "properties": [
                                        {
                                            "kind": 65721,
                                            "left": {
                                                "kind": 196711,
                                                "text": "field",
                                                "rawText": "field",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 95,
                                                "end": 101
                                            },
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
                                                                "start": 104,
                                                                "end": 105
                                                            },
                                                            "constraint": {
                                                                "kind": 4202663,
                                                                "flags": 0,
                                                                "symbol": null,
                                                                "transformFlags": 2097152,
                                                                "start": 113,
                                                                "end": 120
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
                                                                                "start": 124,
                                                                                "end": 126
                                                                            },
                                                                            "isOptional": false,
                                                                            "accessModifier": null,
                                                                            "type": {
                                                                                "kind": 4202657,
                                                                                "flags": 0,
                                                                                "symbol": null,
                                                                                "transformFlags": 2097152,
                                                                                "start": 127,
                                                                                "end": 134
                                                                            },
                                                                            "isStatic": false,
                                                                            "isReadOnly": false,
                                                                            "initializer": null,
                                                                            "flags": 0,
                                                                            "symbol": null,
                                                                            "transformFlags": 2097152,
                                                                            "start": 124,
                                                                            "end": 134
                                                                        }
                                                                    ],
                                                                    "multiline": false,
                                                                    "flags": 0,
                                                                    "symbol": null,
                                                                    "transformFlags": 2097152,
                                                                    "start": 124,
                                                                    "end": 136
                                                                },
                                                                "flags": 0,
                                                                "symbol": null,
                                                                "transformFlags": 2097152,
                                                                "start": 122,
                                                                "end": 136
                                                            },
                                                            "expression": null,
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 2097152,
                                                            "start": 104,
                                                            "end": 136
                                                        }
                                                    ],
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 2097152,
                                                    "start": 104,
                                                    "end": 136
                                                },
                                                "parameters": {
                                                    "kind": 131322,
                                                    "text": "",
                                                    "flags": 3,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 137,
                                                    "end": 137
                                                },
                                                "contents": {
                                                    "kind": 65550,
                                                    "left": {
                                                        "kind": 131322,
                                                        "text": "",
                                                        "flags": 3,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 137,
                                                        "end": 137
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
                                                            "start": 139,
                                                            "end": 145
                                                        },
                                                        "operator": "<",
                                                        "right": {
                                                            "kind": 131322,
                                                            "text": "",
                                                            "flags": 3,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 146,
                                                            "end": 146
                                                        },
                                                        "flags": 1,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 139,
                                                        "end": 146
                                                    },
                                                    "flags": 1,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 137,
                                                    "end": 146
                                                },
                                                "flags": 1,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 102,
                                                "end": 146
                                            },
                                            "accessModifier": null,
                                            "decorators": null,
                                            "flags": 1,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 95,
                                            "end": 146
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "flags": 1,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 95,
                                    "end": 146
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 93,
                                "end": 147
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 86,
                            "end": 147
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 36,
                        "end": 147
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 34,
                    "end": 147
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 147
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 147
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 146,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 147
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

