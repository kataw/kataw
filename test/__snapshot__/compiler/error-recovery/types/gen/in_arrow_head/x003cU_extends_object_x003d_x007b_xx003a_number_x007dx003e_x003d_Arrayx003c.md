# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-14
- From: kataw/test/__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw/test/__snapshot__/compiler/error-recovery/types/gen/in_arrow_head
> :: test: in arrow head
> :: case: <U extends object = { x: number }> = Array<
## Input

`````js
([ <U extends object = { x: number }> = Array< , x: <U extends object = { x: number }> = Array< ]) => {}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "([ <U extends object = { x: number }> = Array< , x: <U extends object = { x: number }> = Array< ]) => {}",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 66224,
                "expression": {
                    "kind": 16473,
                    "ellipsis": false,
                    "binding": {
                        "kind": 98822,
                        "elementList": {
                            "kind": 65605,
                            "elements": [
                                {
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
                                                    "start": 4,
                                                    "end": 5
                                                },
                                                "constraint": {
                                                    "kind": 4202663,
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 2097152,
                                                    "start": 13,
                                                    "end": 20
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
                                                                    "start": 24,
                                                                    "end": 26
                                                                },
                                                                "isOptional": false,
                                                                "accessModifier": null,
                                                                "type": {
                                                                    "kind": 4202657,
                                                                    "flags": 0,
                                                                    "symbol": null,
                                                                    "transformFlags": 2097152,
                                                                    "start": 27,
                                                                    "end": 34
                                                                },
                                                                "isStatic": false,
                                                                "isReadOnly": false,
                                                                "initializer": null,
                                                                "flags": 0,
                                                                "symbol": null,
                                                                "transformFlags": 2097152,
                                                                "start": 24,
                                                                "end": 34
                                                            }
                                                        ],
                                                        "multiline": false,
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 2097152,
                                                        "start": 24,
                                                        "end": 36
                                                    },
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 2097152,
                                                    "start": 22,
                                                    "end": 36
                                                },
                                                "expression": null,
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 2097152,
                                                "start": 4,
                                                "end": 36
                                            }
                                        ],
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 2097152,
                                        "start": 4,
                                        "end": 36
                                    },
                                    "parameters": {
                                        "kind": 131322,
                                        "text": "",
                                        "flags": 3,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 37,
                                        "end": 37
                                    },
                                    "contents": {
                                        "kind": 65590,
                                        "expressions": [
                                            {
                                                "kind": 65550,
                                                "left": {
                                                    "kind": 131322,
                                                    "text": "",
                                                    "flags": 3,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 37,
                                                    "end": 37
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
                                                        "start": 39,
                                                        "end": 45
                                                    },
                                                    "operator": "<",
                                                    "right": {
                                                        "kind": 131322,
                                                        "text": "",
                                                        "flags": 3,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 46,
                                                        "end": 46
                                                    },
                                                    "flags": 1,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 39,
                                                    "end": 46
                                                },
                                                "flags": 1,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 37,
                                                "end": 46
                                            },
                                            {
                                                "kind": 196712,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 48,
                                                "end": 50
                                            }
                                        ],
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 37,
                                        "end": 50
                                    },
                                    "flags": 1073741824,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 2,
                                    "end": 50
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 2,
                            "end": 50
                        },
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 50
                    },
                    "isOptional": false,
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
                                        "start": 53,
                                        "end": 54
                                    },
                                    "constraint": {
                                        "kind": 4202663,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 2097152,
                                        "start": 62,
                                        "end": 69
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
                                                        "start": 73,
                                                        "end": 75
                                                    },
                                                    "isOptional": false,
                                                    "accessModifier": null,
                                                    "type": {
                                                        "kind": 4202657,
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 2097152,
                                                        "start": 76,
                                                        "end": 83
                                                    },
                                                    "isStatic": false,
                                                    "isReadOnly": false,
                                                    "initializer": null,
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 2097152,
                                                    "start": 73,
                                                    "end": 83
                                                }
                                            ],
                                            "multiline": false,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 73,
                                            "end": 85
                                        },
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 2097152,
                                        "start": 71,
                                        "end": 85
                                    },
                                    "expression": null,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 2097152,
                                    "start": 53,
                                    "end": 85
                                }
                            ],
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 53,
                            "end": 85
                        },
                        "parameters": {
                            "kind": 134226095,
                            "parameterList": [],
                            "trailingcomma": false,
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 86,
                            "end": 86
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
                                "start": 86,
                                "end": 86
                            },
                            "typeArguments": null,
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 86,
                            "end": 88
                        },
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 51,
                        "end": 86
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
                            "start": 88,
                            "end": 94
                        },
                        "operator": "<",
                        "right": {
                            "kind": 131322,
                            "text": "",
                            "flags": 3,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 95,
                            "end": 95
                        },
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 88,
                        "end": 95
                    },
                    "decorators": null,
                    "accessModifier": null,
                    "isReadOnly": false,
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 1,
                    "start": 0,
                    "end": 95
                },
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 95
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 95
        },
        {
            "kind": 2099237,
            "block": {
                "kind": 2084,
                "statements": [],
                "multiline": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 103,
                "end": 103
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 101,
            "end": 104
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 96,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 97,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 99,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 104
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

