# Kataw parser test case

## Input

`````js
var i: IHasVisualizationModel;
var d1 = i || moduleA;
var d2: IHasVisualizationModel = i || moduleA;
var d2: IHasVisualizationModel = moduleA || i;
var e: { x: IHasVisualizationModel } = <{ x: IHasVisualizationModel }>null || { x: moduleA };
var f: { x: IHasVisualizationModel } = <{ x: IHasVisualizationModel }>null ? { x: moduleA } : null;
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "var i: IHasVisualizationModel;\nvar d1 = i || moduleA;\nvar d2: IHasVisualizationModel = i || moduleA;\nvar d2: IHasVisualizationModel = moduleA || i;\nvar e: { x: IHasVisualizationModel } = <{ x: IHasVisualizationModel }>null || { x: moduleA };\nvar f: { x: IHasVisualizationModel } = <{ x: IHasVisualizationModel }>null ? { x: moduleA } : null;",
    "filename": "",
    "statements": [
        {
            "kind": 2097397,
            "declarationList": {
                "kind": 244,
                "declarations": [
                    {
                        "kind": 16627,
                        "binding": {
                            "kind": 131102,
                            "text": "i",
                            "rawText": "i",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 3,
                            "end": 5
                        },
                        "exclamation": false,
                        "type": {
                            "kind": 134226156,
                            "typeName": {
                                "kind": 196711,
                                "text": "IHasVisualizationModel",
                                "rawText": "IHasVisualizationModel",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 6,
                                "end": 29
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 6,
                            "end": 30
                        },
                        "initializer": null,
                        "flags": 3,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 29
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 3,
                "end": 29
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 30
        },
        {
            "kind": 2097397,
            "declarationList": {
                "kind": 244,
                "declarations": [
                    {
                        "kind": 16627,
                        "binding": {
                            "kind": 131102,
                            "text": "d1",
                            "rawText": "d1",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 34,
                            "end": 37
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 65563,
                            "left": {
                                "kind": 196712,
                                "text": "i",
                                "rawText": "i",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 39,
                                "end": 41
                            },
                            "operator": "||",
                            "right": {
                                "kind": 196712,
                                "text": "moduleA",
                                "rawText": "moduleA",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 44,
                                "end": 52
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 39,
                            "end": 52
                        },
                        "flags": 34,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 52
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 34,
                "end": 52
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 30,
            "end": 53
        },
        {
            "kind": 2097397,
            "declarationList": {
                "kind": 244,
                "declarations": [
                    {
                        "kind": 16627,
                        "binding": {
                            "kind": 131102,
                            "text": "d2",
                            "rawText": "d2",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 57,
                            "end": 60
                        },
                        "exclamation": false,
                        "type": {
                            "kind": 134226156,
                            "typeName": {
                                "kind": 196711,
                                "text": "IHasVisualizationModel",
                                "rawText": "IHasVisualizationModel",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 61,
                                "end": 84
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 61,
                            "end": 86
                        },
                        "initializer": {
                            "kind": 65563,
                            "left": {
                                "kind": 196712,
                                "text": "i",
                                "rawText": "i",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 86,
                                "end": 88
                            },
                            "operator": "||",
                            "right": {
                                "kind": 196712,
                                "text": "moduleA",
                                "rawText": "moduleA",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 91,
                                "end": 99
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 86,
                            "end": 99
                        },
                        "flags": 57,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 99
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 57,
                "end": 99
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 53,
            "end": 100
        },
        {
            "kind": 2097397,
            "declarationList": {
                "kind": 244,
                "declarations": [
                    {
                        "kind": 16627,
                        "binding": {
                            "kind": 131102,
                            "text": "d2",
                            "rawText": "d2",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 104,
                            "end": 107
                        },
                        "exclamation": false,
                        "type": {
                            "kind": 134226156,
                            "typeName": {
                                "kind": 196711,
                                "text": "IHasVisualizationModel",
                                "rawText": "IHasVisualizationModel",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 108,
                                "end": 131
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 108,
                            "end": 133
                        },
                        "initializer": {
                            "kind": 65563,
                            "left": {
                                "kind": 196712,
                                "text": "moduleA",
                                "rawText": "moduleA",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 133,
                                "end": 141
                            },
                            "operator": "||",
                            "right": {
                                "kind": 196712,
                                "text": "i",
                                "rawText": "i",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 144,
                                "end": 146
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 133,
                            "end": 146
                        },
                        "flags": 104,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 146
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 104,
                "end": 146
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 100,
            "end": 147
        },
        {
            "kind": 2097397,
            "declarationList": {
                "kind": 244,
                "declarations": [
                    {
                        "kind": 16627,
                        "binding": {
                            "kind": 131102,
                            "text": "e",
                            "rawText": "e",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 151,
                            "end": 153
                        },
                        "exclamation": false,
                        "type": {
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
                                            "start": 156,
                                            "end": 158
                                        },
                                        "isOptional": false,
                                        "accessModifier": null,
                                        "type": {
                                            "kind": 134226156,
                                            "typeName": {
                                                "kind": 196711,
                                                "text": "IHasVisualizationModel",
                                                "rawText": "IHasVisualizationModel",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 159,
                                                "end": 182
                                            },
                                            "typeArguments": null,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 159,
                                            "end": 184
                                        },
                                        "isStatic": false,
                                        "isReadOnly": false,
                                        "initializer": null,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 2097152,
                                        "start": 156,
                                        "end": 182
                                    }
                                ],
                                "multiline": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 156,
                                "end": 184
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 154,
                            "end": 184
                        },
                        "initializer": {
                            "kind": 65563,
                            "left": {
                                "kind": 134291684,
                                "type": {
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
                                                    "start": 189,
                                                    "end": 191
                                                },
                                                "isOptional": false,
                                                "accessModifier": null,
                                                "type": {
                                                    "kind": 134226156,
                                                    "typeName": {
                                                        "kind": 196711,
                                                        "text": "IHasVisualizationModel",
                                                        "rawText": "IHasVisualizationModel",
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 192,
                                                        "end": 215
                                                    },
                                                    "typeArguments": null,
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 2097152,
                                                    "start": 192,
                                                    "end": 217
                                                },
                                                "isStatic": false,
                                                "isReadOnly": false,
                                                "initializer": null,
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 2097152,
                                                "start": 189,
                                                "end": 215
                                            }
                                        ],
                                        "multiline": false,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 2097152,
                                        "start": 189,
                                        "end": 217
                                    },
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 2097152,
                                    "start": 188,
                                    "end": 217
                                },
                                "expression": {
                                    "kind": 4260512,
                                    "text": null,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 218,
                                    "end": 222
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 186,
                                "end": 222
                            },
                            "operator": "||",
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
                                                "start": 227,
                                                "end": 229
                                            },
                                            "right": {
                                                "kind": 196712,
                                                "text": "moduleA",
                                                "rawText": "moduleA",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 230,
                                                "end": 238
                                            },
                                            "accessModifier": null,
                                            "decorators": null,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 227,
                                            "end": 238
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 227,
                                    "end": 238
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 225,
                                "end": 240
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 186,
                            "end": 240
                        },
                        "flags": 151,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 240
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 151,
                "end": 240
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 147,
            "end": 241
        },
        {
            "kind": 2097397,
            "declarationList": {
                "kind": 244,
                "declarations": [
                    {
                        "kind": 16627,
                        "binding": {
                            "kind": 131102,
                            "text": "f",
                            "rawText": "f",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 245,
                            "end": 247
                        },
                        "exclamation": false,
                        "type": {
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
                                            "start": 250,
                                            "end": 252
                                        },
                                        "isOptional": false,
                                        "accessModifier": null,
                                        "type": {
                                            "kind": 134226156,
                                            "typeName": {
                                                "kind": 196711,
                                                "text": "IHasVisualizationModel",
                                                "rawText": "IHasVisualizationModel",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 253,
                                                "end": 276
                                            },
                                            "typeArguments": null,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 253,
                                            "end": 278
                                        },
                                        "isStatic": false,
                                        "isReadOnly": false,
                                        "initializer": null,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 2097152,
                                        "start": 250,
                                        "end": 276
                                    }
                                ],
                                "multiline": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 250,
                                "end": 278
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 248,
                            "end": 278
                        },
                        "initializer": {
                            "kind": 65592,
                            "shortCircuit": {
                                "kind": 134291684,
                                "type": {
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
                                                    "start": 283,
                                                    "end": 285
                                                },
                                                "isOptional": false,
                                                "accessModifier": null,
                                                "type": {
                                                    "kind": 134226156,
                                                    "typeName": {
                                                        "kind": 196711,
                                                        "text": "IHasVisualizationModel",
                                                        "rawText": "IHasVisualizationModel",
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 286,
                                                        "end": 309
                                                    },
                                                    "typeArguments": null,
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 2097152,
                                                    "start": 286,
                                                    "end": 311
                                                },
                                                "isStatic": false,
                                                "isReadOnly": false,
                                                "initializer": null,
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 2097152,
                                                "start": 283,
                                                "end": 309
                                            }
                                        ],
                                        "multiline": false,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 2097152,
                                        "start": 283,
                                        "end": 311
                                    },
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 2097152,
                                    "start": 282,
                                    "end": 311
                                },
                                "expression": {
                                    "kind": 4260512,
                                    "text": null,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 312,
                                    "end": 316
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 280,
                                "end": 316
                            },
                            "consequent": {
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
                                                "start": 320,
                                                "end": 322
                                            },
                                            "right": {
                                                "kind": 196712,
                                                "text": "moduleA",
                                                "rawText": "moduleA",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 323,
                                                "end": 331
                                            },
                                            "accessModifier": null,
                                            "decorators": null,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 320,
                                            "end": 331
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 320,
                                    "end": 331
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 318,
                                "end": 333
                            },
                            "alternate": {
                                "kind": 4260512,
                                "text": null,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 335,
                                "end": 340
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 280,
                            "end": 340
                        },
                        "flags": 245,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 340
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 245,
                "end": 340
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 241,
            "end": 341
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 341
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

