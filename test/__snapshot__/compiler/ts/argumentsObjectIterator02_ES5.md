# Kataw parser test case

## Input

`````js
function doubleAndReturnAsArray(x: number, y: number, z: number): [number, number, number] {
    let blah = arguments[Symbol.iterator];

    let result = [];
    for (let arg of blah()) {
        result.push(arg + arg);
    }
    return <[any, any, any]>result;
}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "function doubleAndReturnAsArray(x: number, y: number, z: number): [number, number, number] {\n    let blah = arguments[Symbol.iterator];\n\n    let result = [];\n    for (let arg of blah()) {\n        result.push(arg + arg);\n    }\n    return <[any, any, any]>result;\n}",
    "filename": "",
    "statements": [
        {
            "kind": 264284,
            "name": {
                "kind": 131102,
                "text": "doubleAndReturnAsArray",
                "rawText": "doubleAndReturnAsArray",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 8,
                "end": 31
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [
                    {
                        "kind": 16473,
                        "ellipsis": false,
                        "binding": {
                            "kind": 131102,
                            "text": "x",
                            "rawText": "x",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 32,
                            "end": 33
                        },
                        "isOptional": false,
                        "type": {
                            "kind": 4202657,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 34,
                            "end": 41
                        },
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": null,
                        "isReadOnly": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 32,
                        "end": 41
                    },
                    {
                        "kind": 16473,
                        "ellipsis": false,
                        "binding": {
                            "kind": 131102,
                            "text": "y",
                            "rawText": "y",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 42,
                            "end": 44
                        },
                        "isOptional": false,
                        "type": {
                            "kind": 4202657,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 45,
                            "end": 52
                        },
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": null,
                        "isReadOnly": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 42,
                        "end": 52
                    },
                    {
                        "kind": 16473,
                        "ellipsis": false,
                        "binding": {
                            "kind": 131102,
                            "text": "z",
                            "rawText": "z",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 53,
                            "end": 55
                        },
                        "isOptional": false,
                        "type": {
                            "kind": 4202657,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 56,
                            "end": 63
                        },
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": null,
                        "isReadOnly": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 53,
                        "end": 63
                    }
                ],
                "trailingComma": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 32,
                "end": 64
            },
            "type": {
                "kind": 134226144,
                "elementTypes": [
                    {
                        "kind": 4202657,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 67,
                        "end": 73
                    },
                    {
                        "kind": 4202657,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 74,
                        "end": 81
                    },
                    {
                        "kind": 4202657,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 82,
                        "end": 89
                    }
                ],
                "multiline": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 65,
                "end": 90
            },
            "contents": {
                "kind": 91,
                "functionStatementList": {
                    "kind": 94,
                    "statements": [
                        {
                            "kind": 142,
                            "binding": {
                                "kind": 31,
                                "bindingList": [
                                    {
                                        "kind": 16525,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "blah",
                                            "rawText": "blah",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 100,
                                            "end": 105
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": {
                                            "kind": 67174980,
                                            "member": {
                                                "kind": 196712,
                                                "text": "arguments",
                                                "rawText": "arguments",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 107,
                                                "end": 117
                                            },
                                            "expression": {
                                                "kind": 67175096,
                                                "member": {
                                                    "kind": 196712,
                                                    "text": "Symbol",
                                                    "rawText": "Symbol",
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 118,
                                                    "end": 124
                                                },
                                                "expression": {
                                                    "kind": 196711,
                                                    "text": "iterator",
                                                    "rawText": "iterator",
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 125,
                                                    "end": 133
                                                },
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 124,
                                                "end": 133,
                                                "period": {
                                                    "kind": 255,
                                                    "pos": 124,
                                                    "end": 125
                                                }
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 117,
                                            "end": 134
                                        },
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 100,
                                        "end": 134
                                    }
                                ],
                                "flags": 24,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 92,
                                "end": 134
                            },
                            "flags": 32776,
                            "symbol": null,
                            "transformFlags": 769,
                            "start": 92,
                            "end": 135
                        },
                        {
                            "kind": 142,
                            "binding": {
                                "kind": 31,
                                "bindingList": [
                                    {
                                        "kind": 16525,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "result",
                                            "rawText": "result",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 144,
                                            "end": 151
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": {
                                            "kind": 98822,
                                            "elementList": {
                                                "kind": 65605,
                                                "elements": [],
                                                "trailingComma": false,
                                                "multiline": false,
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 155,
                                                "end": 155
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 153,
                                            "end": 156
                                        },
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 144,
                                        "end": 156
                                    }
                                ],
                                "flags": 24,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 135,
                                "end": 156
                            },
                            "flags": 32776,
                            "symbol": null,
                            "transformFlags": 769,
                            "start": 135,
                            "end": 157
                        },
                        {
                            "kind": 2099287,
                            "initializer": {
                                "kind": 31,
                                "bindingList": [
                                    {
                                        "kind": 16525,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "arg",
                                            "rawText": "arg",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 170,
                                            "end": 174
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": null,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 170,
                                        "end": 174
                                    }
                                ],
                                "flags": 24,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 167,
                                "end": 174
                            },
                            "expression": {
                                "kind": 1073807915,
                                "expression": {
                                    "kind": 196712,
                                    "text": "blah",
                                    "rawText": "blah",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 177,
                                    "end": 182
                                },
                                "typeArguments": null,
                                "argumentList": {
                                    "kind": 3,
                                    "elements": [],
                                    "trailingComma": false,
                                    "transformFlags": 0,
                                    "flags": 0,
                                    "symbol": null,
                                    "start": 184,
                                    "end": 184
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 182,
                                "end": 184
                            },
                            "statement": {
                                "kind": 2099237,
                                "block": {
                                    "kind": 2084,
                                    "statements": [
                                        {
                                            "kind": 2097233,
                                            "expression": {
                                                "kind": 1073807915,
                                                "expression": {
                                                    "kind": 67175096,
                                                    "member": {
                                                        "kind": 196712,
                                                        "text": "result",
                                                        "rawText": "result",
                                                        "flags": 32768,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 187,
                                                        "end": 202
                                                    },
                                                    "expression": {
                                                        "kind": 196711,
                                                        "text": "push",
                                                        "rawText": "push",
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 203,
                                                        "end": 207
                                                    },
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 202,
                                                    "end": 207,
                                                    "period": {
                                                        "kind": 255,
                                                        "pos": 202,
                                                        "end": 203
                                                    }
                                                },
                                                "typeArguments": null,
                                                "argumentList": {
                                                    "kind": 3,
                                                    "elements": [
                                                        {
                                                            "kind": 65563,
                                                            "left": {
                                                                "kind": 196712,
                                                                "text": "arg",
                                                                "rawText": "arg",
                                                                "flags": 0,
                                                                "symbol": null,
                                                                "transformFlags": 0,
                                                                "start": 208,
                                                                "end": 211
                                                            },
                                                            "operator": "+",
                                                            "right": {
                                                                "kind": 196712,
                                                                "text": "arg",
                                                                "rawText": "arg",
                                                                "flags": 0,
                                                                "symbol": null,
                                                                "transformFlags": 0,
                                                                "start": 213,
                                                                "end": 217
                                                            },
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 208,
                                                            "end": 217
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "transformFlags": 0,
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "start": 211,
                                                    "end": 218
                                                },
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 207,
                                                "end": 218
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 187,
                                            "end": 219
                                        }
                                    ],
                                    "multiline": true,
                                    "flags": 32768,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 187,
                                    "end": 219
                                },
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 185,
                                "end": 225
                            },
                            "isAwait": false,
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 1,
                            "start": 157,
                            "end": 225
                        },
                        {
                            "kind": 2097346,
                            "expression": {
                                "kind": 134291684,
                                "type": {
                                    "kind": 134226144,
                                    "elementTypes": [
                                        {
                                            "kind": 4202498,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 239,
                                            "end": 242
                                        },
                                        {
                                            "kind": 4202498,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 243,
                                            "end": 247
                                        },
                                        {
                                            "kind": 4202498,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 248,
                                            "end": 252
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 2097152,
                                    "start": 238,
                                    "end": 253
                                },
                                "expression": {
                                    "kind": 196712,
                                    "text": "result",
                                    "rawText": "result",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 254,
                                    "end": 260
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 236,
                                "end": 260
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 225,
                            "end": 261
                        }
                    ],
                    "multiline": true,
                    "flags": 32768,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 92,
                    "end": 261
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 90,
                "end": 263
            },
            "typeParameters": null,
            "flags": 0,
            "symbol": null,
            "transformFlags": 256,
            "start": 0,
            "end": 263
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
    "end": 263
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

