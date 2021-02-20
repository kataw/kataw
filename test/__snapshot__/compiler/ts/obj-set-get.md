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
    "kind": 149,
    "source": "const thing = {\n    _size: 0,\n    get size(): number {\n        return this._size;\n    },\n    set size(value: string | number) {\n        this._size = typeof value === 'string' ? parseInt(value) : value;\n    }\n}",
    "filename": "",
    "moduleBody": {
        "kind": 150,
        "statements": [
            {
                "kind": 142,
                "isConst": true,
                "binding": {
                    "kind": 31,
                    "bindingList": [
                        {
                            "kind": 141,
                            "binding": {
                                "kind": 131102,
                                "text": "thing",
                                "rawText": "thing",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 1025,
                                "parent": null,
                                "emitNode": null,
                                "start": 5,
                                "end": 11
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 67224232,
                                "propertyList": {
                                    "kind": 65722,
                                    "properties": [
                                        {
                                            "kind": 65721,
                                            "left": {
                                                "kind": 196711,
                                                "text": "_size",
                                                "rawText": "_size",
                                                "flags": 81920,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 15,
                                                "end": 25
                                            },
                                            "right": {
                                                "kind": 4261540,
                                                "text": 0,
                                                "rawText": "0",
                                                "flags": 65536,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 26,
                                                "end": 28
                                            },
                                            "accessModifier": null,
                                            "decorators": null,
                                            "flags": 65536,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 15,
                                            "end": 28
                                        },
                                        {
                                            "kind": 16844946,
                                            "name": {
                                                "kind": 196711,
                                                "text": "size",
                                                "rawText": "size",
                                                "flags": 65536,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 37,
                                                "end": 42
                                            },
                                            "formalParameters": {
                                                "kind": 90,
                                                "formalParameterList": [],
                                                "trailingComma": false,
                                                "flags": 65536,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "parent": null,
                                                "emitNode": null,
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
                                                                "kind": 74424,
                                                                "member": {
                                                                    "kind": 4260571,
                                                                    "flags": 65536,
                                                                    "intersects": false,
                                                                    "transformFlags": 0,
                                                                    "parent": null,
                                                                    "emitNode": null,
                                                                    "start": 69,
                                                                    "end": 74
                                                                },
                                                                "expression": {
                                                                    "kind": 196711,
                                                                    "text": "_size",
                                                                    "rawText": "_size",
                                                                    "flags": 65536,
                                                                    "intersects": false,
                                                                    "transformFlags": 0,
                                                                    "parent": null,
                                                                    "emitNode": null,
                                                                    "start": 75,
                                                                    "end": 80
                                                                },
                                                                "flags": 65536,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "parent": null,
                                                                "emitNode": null,
                                                                "start": 74,
                                                                "end": 80
                                                            },
                                                            "flags": 81920,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "parent": null,
                                                            "emitNode": null,
                                                            "start": 54,
                                                            "end": 81
                                                        }
                                                    ],
                                                    "multiline": true,
                                                    "flags": 81920,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 54,
                                                    "end": 81
                                                },
                                                "flags": 65536,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 52,
                                                "end": 87
                                            },
                                            "decorators": null,
                                            "type": {
                                                "kind": 161,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 45,
                                                "end": 52
                                            },
                                            "accessModifier": null,
                                            "typeParameters": null,
                                            "flags": 65536,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 42,
                                            "end": 87
                                        },
                                        {
                                            "kind": 16844946,
                                            "name": {
                                                "kind": 196711,
                                                "text": "size",
                                                "rawText": "size",
                                                "flags": 65536,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 96,
                                                "end": 101
                                            },
                                            "formalParameters": {
                                                "kind": 90,
                                                "formalParameterList": [
                                                    {
                                                        "kind": 89,
                                                        "ellipsis": false,
                                                        "binding": {
                                                            "kind": 131102,
                                                            "text": "value",
                                                            "rawText": "value",
                                                            "flags": 65536,
                                                            "intersects": false,
                                                            "transformFlags": 1025,
                                                            "parent": null,
                                                            "emitNode": null,
                                                            "start": 102,
                                                            "end": 107
                                                        },
                                                        "isOptional": false,
                                                        "type": {
                                                            "kind": 240,
                                                            "types": [
                                                                {
                                                                    "kind": 4194510,
                                                                    "flags": 0,
                                                                    "intersects": false,
                                                                    "transformFlags": 2097152,
                                                                    "parent": null,
                                                                    "emitNode": null,
                                                                    "start": 108,
                                                                    "end": 115
                                                                },
                                                                {
                                                                    "kind": 161,
                                                                    "flags": 0,
                                                                    "intersects": false,
                                                                    "transformFlags": 2097152,
                                                                    "parent": null,
                                                                    "emitNode": null,
                                                                    "start": 117,
                                                                    "end": 124
                                                                }
                                                            ],
                                                            "flags": 65536,
                                                            "intersects": false,
                                                            "transformFlags": 2097152,
                                                            "parent": null,
                                                            "emitNode": null,
                                                            "start": 115,
                                                            "end": 124
                                                        },
                                                        "initializer": null,
                                                        "decorators": null,
                                                        "accessModifier": null,
                                                        "isReadOnly": false,
                                                        "flags": 65536,
                                                        "intersects": false,
                                                        "transformFlags": 1,
                                                        "parent": null,
                                                        "emitNode": null,
                                                        "start": 102,
                                                        "end": 124
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 65536,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "parent": null,
                                                "emitNode": null,
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
                                                                    "kind": 74424,
                                                                    "member": {
                                                                        "kind": 4260571,
                                                                        "flags": 65536,
                                                                        "intersects": false,
                                                                        "transformFlags": 0,
                                                                        "parent": null,
                                                                        "emitNode": null,
                                                                        "start": 127,
                                                                        "end": 140
                                                                    },
                                                                    "expression": {
                                                                        "kind": 196711,
                                                                        "text": "_size",
                                                                        "rawText": "_size",
                                                                        "flags": 65536,
                                                                        "intersects": false,
                                                                        "transformFlags": 0,
                                                                        "parent": null,
                                                                        "emitNode": null,
                                                                        "start": 141,
                                                                        "end": 146
                                                                    },
                                                                    "flags": 65536,
                                                                    "intersects": false,
                                                                    "transformFlags": 0,
                                                                    "parent": null,
                                                                    "emitNode": null,
                                                                    "start": 140,
                                                                    "end": 146
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
                                                                                "flags": 65536,
                                                                                "intersects": false,
                                                                                "transformFlags": 0,
                                                                                "parent": null,
                                                                                "emitNode": null,
                                                                                "start": 155,
                                                                                "end": 161
                                                                            },
                                                                            "flags": 65536,
                                                                            "intersects": false,
                                                                            "transformFlags": 0,
                                                                            "parent": null,
                                                                            "emitNode": null,
                                                                            "start": 148,
                                                                            "end": 161
                                                                        },
                                                                        "operator": "===",
                                                                        "right": {
                                                                            "kind": 67279,
                                                                            "text": "string",
                                                                            "rawText": "string",
                                                                            "flags": 16842752,
                                                                            "intersects": false,
                                                                            "transformFlags": 0,
                                                                            "parent": null,
                                                                            "emitNode": null,
                                                                            "start": 165,
                                                                            "end": 174
                                                                        },
                                                                        "flags": 65536,
                                                                        "intersects": false,
                                                                        "transformFlags": 0,
                                                                        "parent": null,
                                                                        "emitNode": null,
                                                                        "start": 148,
                                                                        "end": 174
                                                                    },
                                                                    "consequent": {
                                                                        "kind": 66091,
                                                                        "expression": {
                                                                            "kind": 196712,
                                                                            "text": "parseInt",
                                                                            "rawText": "parseInt",
                                                                            "flags": 65536,
                                                                            "intersects": false,
                                                                            "transformFlags": 0,
                                                                            "parent": null,
                                                                            "emitNode": null,
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
                                                                                    "flags": 65536,
                                                                                    "intersects": false,
                                                                                    "transformFlags": 0,
                                                                                    "parent": null,
                                                                                    "emitNode": null,
                                                                                    "start": 186,
                                                                                    "end": 191
                                                                                }
                                                                            ],
                                                                            "trailingComma": false,
                                                                            "transformFlags": 0,
                                                                            "flags": 65536,
                                                                            "intersects": false,
                                                                            "parent": null,
                                                                            "emitNode": null,
                                                                            "start": 191,
                                                                            "end": 192
                                                                        },
                                                                        "flags": 65536,
                                                                        "intersects": false,
                                                                        "transformFlags": 0,
                                                                        "parent": null,
                                                                        "emitNode": null,
                                                                        "start": 185,
                                                                        "end": 192
                                                                    },
                                                                    "alternate": {
                                                                        "kind": 196712,
                                                                        "text": "value",
                                                                        "rawText": "value",
                                                                        "flags": 65536,
                                                                        "intersects": false,
                                                                        "transformFlags": 0,
                                                                        "parent": null,
                                                                        "emitNode": null,
                                                                        "start": 194,
                                                                        "end": 200
                                                                    },
                                                                    "flags": 65536,
                                                                    "intersects": false,
                                                                    "transformFlags": 0,
                                                                    "parent": null,
                                                                    "emitNode": null,
                                                                    "start": 148,
                                                                    "end": 200
                                                                },
                                                                "flags": 65536,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "parent": null,
                                                                "emitNode": null,
                                                                "start": 127,
                                                                "end": 200
                                                            },
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "parent": null,
                                                            "emitNode": null,
                                                            "start": 127,
                                                            "end": 201
                                                        }
                                                    ],
                                                    "multiline": true,
                                                    "flags": 81920,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 127,
                                                    "end": 201
                                                },
                                                "flags": 81920,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 125,
                                                "end": 207
                                            },
                                            "decorators": null,
                                            "type": null,
                                            "accessModifier": null,
                                            "typeParameters": null,
                                            "flags": 65536,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 101,
                                            "end": 207
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": true,
                                    "flags": 81920,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 15,
                                    "end": 207
                                },
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 13,
                                "end": 209
                            },
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 5,
                            "end": 209
                        }
                    ],
                    "flags": 65552,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 5,
                    "end": 209
                },
                "flags": 65552,
                "intersects": false,
                "transformFlags": 769,
                "parent": null,
                "emitNode": null,
                "start": 0,
                "end": 209
            }
        ],
        "transformFlags": 0,
        "flags": 65536,
        "intersects": false,
        "parent": null,
        "emitNode": null,
        "start": 0,
        "end": 209
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "parent": null,
    "emitNode": null,
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 209
}
```

### Printed


```javascript

const thing = { _size : 0, get size(): number {
        return this._size;
    }, set size(value: string | number) {
        this._size = typeof value === "string" ? parseInt(value) : value
    } };

```

### Diagnostics


```javascript
@{x2714}@ No errors
```

