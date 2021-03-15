# Kataw parser test case

## Input

`````js
function asReversedTuple(a: number, b: string, c: boolean): [boolean, string, number] {
    let [x, y, z] = arguments;

    return [z, y, x];
}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "function asReversedTuple(a: number, b: string, c: boolean): [boolean, string, number] {\n    let [x, y, z] = arguments;\n\n    return [z, y, x];\n}",
    "filename": "",
    "statements": [
        {
            "kind": 264284,
            "name": {
                "kind": 131102,
                "text": "asReversedTuple",
                "rawText": "asReversedTuple",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 8,
                "end": 24
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [
                    {
                        "kind": 16473,
                        "ellipsis": false,
                        "binding": {
                            "kind": 131102,
                            "text": "a",
                            "rawText": "a",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 25,
                            "end": 26
                        },
                        "isOptional": false,
                        "type": {
                            "kind": 4202657,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 27,
                            "end": 34
                        },
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": null,
                        "isReadOnly": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 25,
                        "end": 34
                    },
                    {
                        "kind": 16473,
                        "ellipsis": false,
                        "binding": {
                            "kind": 131102,
                            "text": "b",
                            "rawText": "b",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 35,
                            "end": 37
                        },
                        "isOptional": false,
                        "type": {
                            "kind": 4202702,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 38,
                            "end": 45
                        },
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": null,
                        "isReadOnly": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 35,
                        "end": 45
                    },
                    {
                        "kind": 16473,
                        "ellipsis": false,
                        "binding": {
                            "kind": 131102,
                            "text": "c",
                            "rawText": "c",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 46,
                            "end": 48
                        },
                        "isOptional": false,
                        "type": {
                            "kind": 4268070,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 49,
                            "end": 57
                        },
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": null,
                        "isReadOnly": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 46,
                        "end": 57
                    }
                ],
                "trailingComma": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 25,
                "end": 58
            },
            "type": {
                "kind": 134226144,
                "elementTypes": [
                    {
                        "kind": 4268070,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 61,
                        "end": 68
                    },
                    {
                        "kind": 4202702,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 69,
                        "end": 76
                    },
                    {
                        "kind": 4202657,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 77,
                        "end": 84
                    }
                ],
                "multiline": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 59,
                "end": 85
            },
            "contents": {
                "kind": 91,
                "functionStatementList": {
                    "kind": 94,
                    "statements": [
                        {
                            "kind": 142,
                            "isConst": false,
                            "binding": {
                                "kind": 31,
                                "bindingList": [
                                    {
                                        "kind": 16525,
                                        "binding": {
                                            "kind": 33554437,
                                            "elementList": {
                                                "kind": 29,
                                                "elements": [
                                                    {
                                                        "kind": 16412,
                                                        "ellipsis": false,
                                                        "left": {
                                                            "kind": 131102,
                                                            "text": "x",
                                                            "rawText": "x",
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 1025,
                                                            "start": 97,
                                                            "end": 98
                                                        },
                                                        "right": null,
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 1,
                                                        "start": 97,
                                                        "end": 98
                                                    },
                                                    {
                                                        "kind": 16412,
                                                        "ellipsis": false,
                                                        "left": {
                                                            "kind": 131102,
                                                            "text": "y",
                                                            "rawText": "y",
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 1025,
                                                            "start": 99,
                                                            "end": 101
                                                        },
                                                        "right": null,
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 1,
                                                        "start": 99,
                                                        "end": 101
                                                    },
                                                    {
                                                        "kind": 16412,
                                                        "ellipsis": false,
                                                        "left": {
                                                            "kind": 131102,
                                                            "text": "z",
                                                            "rawText": "z",
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 1025,
                                                            "start": 102,
                                                            "end": 104
                                                        },
                                                        "right": null,
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 1,
                                                        "start": 102,
                                                        "end": 104
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 1,
                                                "start": 97,
                                                "end": 104
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 95,
                                            "end": 105
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": {
                                            "kind": 196712,
                                            "text": "arguments",
                                            "rawText": "arguments",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 107,
                                            "end": 117
                                        },
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 95,
                                        "end": 117
                                    }
                                ],
                                "flags": 8,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 95,
                                "end": 117
                            },
                            "flags": 32776,
                            "symbol": null,
                            "transformFlags": 769,
                            "start": 87,
                            "end": 118
                        },
                        {
                            "kind": 2097346,
                            "expression": {
                                "kind": 98822,
                                "elementList": {
                                    "kind": 65605,
                                    "elements": [
                                        {
                                            "kind": 196712,
                                            "text": "z",
                                            "rawText": "z",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 132,
                                            "end": 133
                                        },
                                        {
                                            "kind": 196712,
                                            "text": "y",
                                            "rawText": "y",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 134,
                                            "end": 136
                                        },
                                        {
                                            "kind": 196712,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 137,
                                            "end": 139
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 132,
                                    "end": 139
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 130,
                                "end": 140
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 118,
                            "end": 141
                        }
                    ],
                    "multiline": true,
                    "flags": 32768,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 87,
                    "end": 141
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 85,
                "end": 143
            },
            "typeParameters": null,
            "flags": 0,
            "symbol": null,
            "transformFlags": 256,
            "start": 0,
            "end": 143
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
    "end": 143
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

