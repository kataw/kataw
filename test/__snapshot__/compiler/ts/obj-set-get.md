# Kataw parser test case

## Input

`````js
const thing = {
    _size: 0,
    get size(): number {
        return this._size;
    },
    set size(value: string | number) {
        this._size = typeof value === 'string' ? parseInt(value) : value;
    }
}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "const thing = {\n    _size: 0,\n    get size(): number {\n        return this._size;\n    },\n    set size(value: string | number) {\n        this._size = typeof value === 'string' ? parseInt(value) : value;\n    }\n}",
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
                            "text": "thing",
                            "rawText": "thing",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 5,
                            "end": 11
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 98984,
                            "propertyList": {
                                "kind": 65722,
                                "properties": [
                                    {
                                        "kind": 65721,
                                        "left": {
                                            "kind": 196711,
                                            "text": "_size",
                                            "rawText": "_size",
                                            "flags": 32768,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 15,
                                            "end": 25
                                        },
                                        "right": {
                                            "kind": 4261540,
                                            "text": 0,
                                            "rawText": "0",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 26,
                                            "end": 28
                                        },
                                        "accessModifier": null,
                                        "decorators": null,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 15,
                                        "end": 28
                                    },
                                    {
                                        "kind": 16844946,
                                        "name": {
                                            "kind": 196711,
                                            "text": "size",
                                            "rawText": "size",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 37,
                                            "end": 42
                                        },
                                        "formalParameters": {
                                            "kind": 90,
                                            "formalParameterList": [],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 43,
                                            "end": 44
                                        },
                                        "isSetter": false,
                                        "isGetter": true,
                                        "contents": {
                                            "kind": 91,
                                            "functionStatementList": {
                                                "kind": 94,
                                                "statements": [
                                                    {
                                                        "kind": 2097346,
                                                        "expression": {
                                                            "kind": 67175096,
                                                            "member": {
                                                                "kind": 4260571,
                                                                "flags": 0,
                                                                "symbol": null,
                                                                "transformFlags": 0,
                                                                "start": 69,
                                                                "end": 74
                                                            },
                                                            "expression": {
                                                                "kind": 196711,
                                                                "text": "_size",
                                                                "rawText": "_size",
                                                                "flags": 0,
                                                                "symbol": null,
                                                                "transformFlags": 0,
                                                                "start": 75,
                                                                "end": 80
                                                            },
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 74,
                                                            "end": 80,
                                                            "period": {
                                                                "kind": 255,
                                                                "pos": 74,
                                                                "end": 75
                                                            }
                                                        },
                                                        "flags": 32768,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 54,
                                                        "end": 81
                                                    }
                                                ],
                                                "multiline": true,
                                                "flags": 32768,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 54,
                                                "end": 81
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 52,
                                            "end": 87
                                        },
                                        "decorators": null,
                                        "type": {
                                            "kind": 4202657,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 45,
                                            "end": 52
                                        },
                                        "accessModifier": null,
                                        "typeParameters": null,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 42,
                                        "end": 87
                                    },
                                    {
                                        "kind": 16844946,
                                        "name": {
                                            "kind": 196711,
                                            "text": "size",
                                            "rawText": "size",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 96,
                                            "end": 101
                                        },
                                        "formalParameters": {
                                            "kind": 90,
                                            "formalParameterList": [
                                                {
                                                    "kind": 16473,
                                                    "ellipsis": false,
                                                    "binding": {
                                                        "kind": 131102,
                                                        "text": "value",
                                                        "rawText": "value",
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 1025,
                                                        "start": 102,
                                                        "end": 107
                                                    },
                                                    "isOptional": false,
                                                    "type": {
                                                        "kind": 8432,
                                                        "types": [
                                                            {
                                                                "kind": 4202702,
                                                                "flags": 0,
                                                                "symbol": null,
                                                                "transformFlags": 2097152,
                                                                "start": 108,
                                                                "end": 115
                                                            },
                                                            {
                                                                "kind": 4202657,
                                                                "flags": 0,
                                                                "symbol": null,
                                                                "transformFlags": 2097152,
                                                                "start": 117,
                                                                "end": 124
                                                            }
                                                        ],
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 2097152,
                                                        "start": 115,
                                                        "end": 124
                                                    },
                                                    "initializer": null,
                                                    "decorators": null,
                                                    "accessModifier": null,
                                                    "isReadOnly": false,
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 1,
                                                    "start": 102,
                                                    "end": 124
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 102,
                                            "end": 125
                                        },
                                        "isSetter": true,
                                        "isGetter": false,
                                        "contents": {
                                            "kind": 91,
                                            "functionStatementList": {
                                                "kind": 94,
                                                "statements": [
                                                    {
                                                        "kind": 2097233,
                                                        "expression": {
                                                            "kind": 65550,
                                                            "left": {
                                                                "kind": 67175096,
                                                                "member": {
                                                                    "kind": 4260571,
                                                                    "flags": 0,
                                                                    "symbol": null,
                                                                    "transformFlags": 0,
                                                                    "start": 127,
                                                                    "end": 140
                                                                },
                                                                "expression": {
                                                                    "kind": 196711,
                                                                    "text": "_size",
                                                                    "rawText": "_size",
                                                                    "flags": 0,
                                                                    "symbol": null,
                                                                    "transformFlags": 0,
                                                                    "start": 141,
                                                                    "end": 146
                                                                },
                                                                "flags": 0,
                                                                "symbol": null,
                                                                "transformFlags": 0,
                                                                "start": 140,
                                                                "end": 146,
                                                                "period": {
                                                                    "kind": 255,
                                                                    "pos": 140,
                                                                    "end": 141
                                                                }
                                                            },
                                                            "operator": "=",
                                                            "right": {
                                                                "kind": 65592,
                                                                "shortCircuit": {
                                                                    "kind": 65563,
                                                                    "left": {
                                                                        "kind": 65774,
                                                                        "operator": "typeof",
                                                                        "operand": {
                                                                            "kind": 196712,
                                                                            "text": "value",
                                                                            "rawText": "value",
                                                                            "flags": 0,
                                                                            "symbol": null,
                                                                            "transformFlags": 0,
                                                                            "start": 155,
                                                                            "end": 161
                                                                        },
                                                                        "flags": 0,
                                                                        "symbol": null,
                                                                        "transformFlags": 0,
                                                                        "start": 148,
                                                                        "end": 161
                                                                    },
                                                                    "operator": "===",
                                                                    "right": {
                                                                        "kind": 4261583,
                                                                        "text": "string",
                                                                        "rawText": "string",
                                                                        "flags": 33554432,
                                                                        "symbol": null,
                                                                        "transformFlags": 0,
                                                                        "start": 165,
                                                                        "end": 174
                                                                    },
                                                                    "flags": 0,
                                                                    "symbol": null,
                                                                    "transformFlags": 0,
                                                                    "start": 148,
                                                                    "end": 174
                                                                },
                                                                "consequent": {
                                                                    "kind": 1073807915,
                                                                    "expression": {
                                                                        "kind": 196712,
                                                                        "text": "parseInt",
                                                                        "rawText": "parseInt",
                                                                        "flags": 0,
                                                                        "symbol": null,
                                                                        "transformFlags": 0,
                                                                        "start": 176,
                                                                        "end": 185
                                                                    },
                                                                    "typeArguments": null,
                                                                    "argumentList": {
                                                                        "kind": 3,
                                                                        "elements": [
                                                                            {
                                                                                "kind": 196712,
                                                                                "text": "value",
                                                                                "rawText": "value",
                                                                                "flags": 0,
                                                                                "symbol": null,
                                                                                "transformFlags": 0,
                                                                                "start": 186,
                                                                                "end": 191
                                                                            }
                                                                        ],
                                                                        "trailingComma": false,
                                                                        "transformFlags": 0,
                                                                        "flags": 0,
                                                                        "symbol": null,
                                                                        "start": 191,
                                                                        "end": 192
                                                                    },
                                                                    "flags": 0,
                                                                    "symbol": null,
                                                                    "transformFlags": 0,
                                                                    "start": 185,
                                                                    "end": 192
                                                                },
                                                                "alternate": {
                                                                    "kind": 196712,
                                                                    "text": "value",
                                                                    "rawText": "value",
                                                                    "flags": 0,
                                                                    "symbol": null,
                                                                    "transformFlags": 0,
                                                                    "start": 194,
                                                                    "end": 200
                                                                },
                                                                "flags": 0,
                                                                "symbol": null,
                                                                "transformFlags": 0,
                                                                "start": 148,
                                                                "end": 200
                                                            },
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 127,
                                                            "end": 200
                                                        },
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 127,
                                                        "end": 201
                                                    }
                                                ],
                                                "multiline": true,
                                                "flags": 32768,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 127,
                                                "end": 201
                                            },
                                            "flags": 32768,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 125,
                                            "end": 207
                                        },
                                        "decorators": null,
                                        "type": null,
                                        "accessModifier": null,
                                        "typeParameters": null,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 101,
                                        "end": 207
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": true,
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 15,
                                "end": 207
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 13,
                            "end": 209
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 5,
                        "end": 209
                    }
                ],
                "flags": 40,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 209
            },
            "flags": 40,
            "symbol": null,
            "transformFlags": 769,
            "start": 0,
            "end": 209
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
    "end": 209
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

