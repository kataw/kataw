# Kataw parser test case

## Input

`````js
 const t: Partial<T> = {};

 const {a = 10}: T = t as T;

 const { a }: T = { a: 10,  ...t };

 const output: ((ctrl: number|string) => void)[] = y;

 const k: keyof T = "a";

 const numericK: KeysByType<T, number> = "a"; //Error, though it shouldn't be.

 const va: number = obj.a;
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": " const t: Partial<T> = {};\n\n const {a = 10}: T = t as T;\n\n const { a }: T = { a: 10,  ...t };\n\n const output: ((ctrl: number|string) => void)[] = y;\n\n const k: keyof T = \"a\";\n\n const numericK: KeysByType<T, number> = \"a\"; //Error, though it shouldn't be.\n\n const va: number = obj.a;",
    "filename": "",
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
                            "text": "t",
                            "rawText": "t",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 6,
                            "end": 8
                        },
                        "exclamation": false,
                        "type": {
                            "kind": 134226156,
                            "typeName": {
                                "kind": 196711,
                                "text": "Partial",
                                "rawText": "Partial",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 9,
                                "end": 17
                            },
                            "typeArguments": {
                                "kind": 8419,
                                "typeArgumentsList": [
                                    {
                                        "kind": 134226156,
                                        "typeName": {
                                            "kind": 196711,
                                            "text": "T",
                                            "rawText": "T",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 18,
                                            "end": 19
                                        },
                                        "typeArguments": null,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 2097152,
                                        "start": 18,
                                        "end": 20
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 18,
                                "end": 19
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 9,
                            "end": 22
                        },
                        "initializer": {
                            "kind": 98984,
                            "propertyList": {
                                "kind": 65722,
                                "properties": [],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 24,
                                "end": 24
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 22,
                            "end": 25
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 6,
                        "end": 25
                    }
                ],
                "flags": 40,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 25
            },
            "flags": 32776,
            "symbol": null,
            "transformFlags": 769,
            "start": 0,
            "end": 26
        },
        {
            "kind": 142,
            "binding": {
                "kind": 31,
                "bindingList": [
                    {
                        "kind": 16525,
                        "binding": {
                            "kind": 33554598,
                            "propertyList": {
                                "kind": 33,
                                "properties": [
                                    {
                                        "kind": 203,
                                        "ellipsis": false,
                                        "left": {
                                            "kind": 131102,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 36,
                                            "end": 37
                                        },
                                        "right": {
                                            "kind": 4261540,
                                            "text": 10,
                                            "rawText": "10",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 39,
                                            "end": 42
                                        },
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1024,
                                        "start": 36,
                                        "end": 42
                                    }
                                ],
                                "multiline": false,
                                "trailingComma": false,
                                "transformFlags": 1025,
                                "flags": 0,
                                "symbol": null,
                                "start": 36,
                                "end": 42
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 34,
                            "end": 43
                        },
                        "exclamation": false,
                        "type": {
                            "kind": 134226156,
                            "typeName": {
                                "kind": 196711,
                                "text": "T",
                                "rawText": "T",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 44,
                                "end": 46
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 44,
                            "end": 48
                        },
                        "initializer": {
                            "kind": 73738,
                            "expression": {
                                "kind": 196712,
                                "text": "t",
                                "rawText": "t",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 48,
                                "end": 50
                            },
                            "type": {
                                "kind": 134226156,
                                "typeName": {
                                    "kind": 196711,
                                    "text": "T",
                                    "rawText": "T",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 53,
                                    "end": 55
                                },
                                "typeArguments": null,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 53,
                                "end": 56
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 50,
                            "end": 55
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 34,
                        "end": 55
                    }
                ],
                "flags": 40,
                "symbol": null,
                "transformFlags": 0,
                "start": 26,
                "end": 55
            },
            "flags": 32776,
            "symbol": null,
            "transformFlags": 769,
            "start": 26,
            "end": 56
        },
        {
            "kind": 142,
            "binding": {
                "kind": 31,
                "bindingList": [
                    {
                        "kind": 16525,
                        "binding": {
                            "kind": 33554598,
                            "propertyList": {
                                "kind": 33,
                                "properties": [
                                    {
                                        "kind": 203,
                                        "ellipsis": false,
                                        "left": {
                                            "kind": 131102,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1025,
                                            "start": 66,
                                            "end": 68
                                        },
                                        "right": null,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1024,
                                        "start": 66,
                                        "end": 68
                                    }
                                ],
                                "multiline": false,
                                "trailingComma": false,
                                "transformFlags": 1025,
                                "flags": 0,
                                "symbol": null,
                                "start": 66,
                                "end": 68
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 64,
                            "end": 70
                        },
                        "exclamation": false,
                        "type": {
                            "kind": 134226156,
                            "typeName": {
                                "kind": 196711,
                                "text": "T",
                                "rawText": "T",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 71,
                                "end": 73
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 71,
                            "end": 75
                        },
                        "initializer": {
                            "kind": 98984,
                            "propertyList": {
                                "kind": 65722,
                                "properties": [
                                    {
                                        "kind": 65721,
                                        "left": {
                                            "kind": 196711,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 77,
                                            "end": 79
                                        },
                                        "right": {
                                            "kind": 4261540,
                                            "text": 10,
                                            "rawText": "10",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 80,
                                            "end": 83
                                        },
                                        "accessModifier": null,
                                        "decorators": null,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 77,
                                        "end": 83
                                    },
                                    {
                                        "kind": 65741,
                                        "argument": {
                                            "kind": 196712,
                                            "text": "t",
                                            "rawText": "t",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 89,
                                            "end": 90
                                        },
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 4104,
                                        "start": 89,
                                        "end": 90
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 77,
                                "end": 90
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 75,
                            "end": 92
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 64,
                        "end": 92
                    }
                ],
                "flags": 40,
                "symbol": null,
                "transformFlags": 0,
                "start": 56,
                "end": 92
            },
            "flags": 32776,
            "symbol": null,
            "transformFlags": 769,
            "start": 56,
            "end": 93
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
                            "text": "output",
                            "rawText": "output",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 101,
                            "end": 108
                        },
                        "exclamation": false,
                        "type": {
                            "kind": 8199,
                            "elementType": {
                                "kind": 8369,
                                "type": {
                                    "kind": 8287,
                                    "typeParameters": null,
                                    "parameters": {
                                        "kind": 134226095,
                                        "parameterList": [
                                            {
                                                "kind": 134226094,
                                                "ellipsis": false,
                                                "binding": {
                                                    "kind": 131102,
                                                    "text": "ctrl",
                                                    "rawText": "ctrl",
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 1025,
                                                    "start": 112,
                                                    "end": 116
                                                },
                                                "isOptional": false,
                                                "type": {
                                                    "kind": 8432,
                                                    "types": [
                                                        {
                                                            "kind": 4202657,
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 2097152,
                                                            "start": 117,
                                                            "end": 124
                                                        },
                                                        {
                                                            "kind": 4202702,
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 2097152,
                                                            "start": 125,
                                                            "end": 131
                                                        }
                                                    ],
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 2097152,
                                                    "start": 124,
                                                    "end": 131
                                                },
                                                "initializer": null,
                                                "accessModifier": null,
                                                "isReadOnly": false,
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 1,
                                                "start": 112,
                                                "end": 131
                                            }
                                        ],
                                        "trailingcomma": false,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 2097152,
                                        "start": 112,
                                        "end": 131
                                    },
                                    "returnType": {
                                        "kind": 4202742,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 2097152,
                                        "start": 135,
                                        "end": 140
                                    },
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 2097152,
                                    "start": 111,
                                    "end": 140
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 109,
                                "end": 141
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 109,
                            "end": 145
                        },
                        "initializer": {
                            "kind": 196712,
                            "text": "y",
                            "rawText": "y",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 145,
                            "end": 147
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 101,
                        "end": 147
                    }
                ],
                "flags": 40,
                "symbol": null,
                "transformFlags": 0,
                "start": 93,
                "end": 147
            },
            "flags": 32776,
            "symbol": null,
            "transformFlags": 769,
            "start": 93,
            "end": 148
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
                            "text": "k",
                            "rawText": "k",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 156,
                            "end": 158
                        },
                        "exclamation": false,
                        "type": {
                            "kind": 8423,
                            "operator": "keyof",
                            "type": {
                                "kind": 134226156,
                                "typeName": {
                                    "kind": 196711,
                                    "text": "T",
                                    "rawText": "T",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 165,
                                    "end": 167
                                },
                                "typeArguments": null,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 165,
                                "end": 169
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 159,
                            "end": 167
                        },
                        "initializer": {
                            "kind": 4261583,
                            "text": "a",
                            "rawText": "a",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 169,
                            "end": 173
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 156,
                        "end": 173
                    }
                ],
                "flags": 40,
                "symbol": null,
                "transformFlags": 0,
                "start": 148,
                "end": 173
            },
            "flags": 32776,
            "symbol": null,
            "transformFlags": 769,
            "start": 148,
            "end": 174
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
                            "text": "numericK",
                            "rawText": "numericK",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 182,
                            "end": 191
                        },
                        "exclamation": false,
                        "type": {
                            "kind": 134226156,
                            "typeName": {
                                "kind": 196711,
                                "text": "KeysByType",
                                "rawText": "KeysByType",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 192,
                                "end": 203
                            },
                            "typeArguments": {
                                "kind": 8419,
                                "typeArgumentsList": [
                                    {
                                        "kind": 134226156,
                                        "typeName": {
                                            "kind": 196711,
                                            "text": "T",
                                            "rawText": "T",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 204,
                                            "end": 205
                                        },
                                        "typeArguments": null,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 2097152,
                                        "start": 204,
                                        "end": 206
                                    },
                                    {
                                        "kind": 4202657,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 2097152,
                                        "start": 206,
                                        "end": 213
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 204,
                                "end": 213
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 192,
                            "end": 216
                        },
                        "initializer": {
                            "kind": 4261583,
                            "text": "a",
                            "rawText": "a",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 216,
                            "end": 220
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 182,
                        "end": 220
                    }
                ],
                "flags": 40,
                "symbol": null,
                "transformFlags": 0,
                "start": 174,
                "end": 220
            },
            "flags": 32776,
            "symbol": null,
            "transformFlags": 769,
            "start": 174,
            "end": 221
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
                            "text": "va",
                            "rawText": "va",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 262,
                            "end": 265
                        },
                        "exclamation": false,
                        "type": {
                            "kind": 4202657,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 266,
                            "end": 273
                        },
                        "initializer": {
                            "kind": 67175096,
                            "member": {
                                "kind": 196712,
                                "text": "obj",
                                "rawText": "obj",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 275,
                                "end": 279
                            },
                            "expression": {
                                "kind": 196711,
                                "text": "a",
                                "rawText": "a",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 280,
                                "end": 281
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 279,
                            "end": 281,
                            "period": {
                                "kind": 255,
                                "pos": 279,
                                "end": 280
                            }
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 262,
                        "end": 281
                    }
                ],
                "flags": 40,
                "symbol": null,
                "transformFlags": 0,
                "start": 221,
                "end": 281
            },
            "flags": 32776,
            "symbol": null,
            "transformFlags": 769,
            "start": 221,
            "end": 282
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
    "end": 282
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

