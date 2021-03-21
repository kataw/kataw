# Kataw parser test case

## Input

`````js
var x: string[];
x = new Array(1);
x = new Array('hi', 'bye');
x = new Array<string>('hi', 'bye');

var y: number[];
y = new Array(1);
y = new Array(1,2);
y = new Array<number>(1, 2);

`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "var x: string[];\nx = new Array(1);\nx = new Array('hi', 'bye');\nx = new Array<string>('hi', 'bye');\n\nvar y: number[];\ny = new Array(1);\ny = new Array(1,2);\ny = new Array<number>(1, 2);\n",
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
                            "kind": 8199,
                            "elementType": {
                                "kind": 4202702,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 6,
                                "end": 13
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 6,
                            "end": 16
                        },
                        "initializer": null,
                        "flags": 3,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 15
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 3,
                "end": 15
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 16
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 65550,
                "left": {
                    "kind": 196712,
                    "text": "x",
                    "rawText": "x",
                    "flags": 32768,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 16,
                    "end": 18
                },
                "operator": "=",
                "right": {
                    "kind": 66204,
                    "expression": {
                        "kind": 196712,
                        "text": "Array",
                        "rawText": "Array",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 24,
                        "end": 30
                    },
                    "typeArguments": null,
                    "argumentList": {
                        "kind": 3,
                        "elements": [
                            {
                                "kind": 4261540,
                                "text": 1,
                                "rawText": "1",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 31,
                                "end": 32
                            }
                        ],
                        "trailingComma": false,
                        "transformFlags": 0,
                        "flags": 0,
                        "symbol": null,
                        "start": 31,
                        "end": 32
                    },
                    "flags": 20,
                    "symbol": null,
                    "transformFlags": 32,
                    "start": 0,
                    "end": 33
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 16,
                "end": 33
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 16,
            "end": 34
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 65550,
                "left": {
                    "kind": 196712,
                    "text": "x",
                    "rawText": "x",
                    "flags": 32768,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 34,
                    "end": 36
                },
                "operator": "=",
                "right": {
                    "kind": 66204,
                    "expression": {
                        "kind": 196712,
                        "text": "Array",
                        "rawText": "Array",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 42,
                        "end": 48
                    },
                    "typeArguments": null,
                    "argumentList": {
                        "kind": 3,
                        "elements": [
                            {
                                "kind": 4261583,
                                "text": "hi",
                                "rawText": "hi",
                                "flags": 33554432,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 49,
                                "end": 53
                            },
                            {
                                "kind": 4261583,
                                "text": "bye",
                                "rawText": "bye",
                                "flags": 33554432,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 54,
                                "end": 60
                            }
                        ],
                        "trailingComma": false,
                        "transformFlags": 0,
                        "flags": 0,
                        "symbol": null,
                        "start": 49,
                        "end": 60
                    },
                    "flags": 38,
                    "symbol": null,
                    "transformFlags": 32,
                    "start": 0,
                    "end": 61
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 34,
                "end": 61
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 34,
            "end": 62
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 65550,
                "left": {
                    "kind": 196712,
                    "text": "x",
                    "rawText": "x",
                    "flags": 32768,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 62,
                    "end": 64
                },
                "operator": "=",
                "right": {
                    "kind": 66204,
                    "expression": {
                        "kind": 1073807915,
                        "expression": {
                            "kind": 196712,
                            "text": "Array",
                            "rawText": "Array",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 70,
                            "end": 76
                        },
                        "typeArguments": {
                            "kind": 8419,
                            "typeArgumentsList": [
                                {
                                    "kind": 4202702,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 2097152,
                                    "start": 77,
                                    "end": 83
                                }
                            ],
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 77,
                            "end": 84
                        },
                        "argumentList": {
                            "kind": 3,
                            "elements": [
                                {
                                    "kind": 4261583,
                                    "text": "hi",
                                    "rawText": "hi",
                                    "flags": 33554432,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 85,
                                    "end": 89
                                },
                                {
                                    "kind": 4261583,
                                    "text": "bye",
                                    "rawText": "bye",
                                    "flags": 33554432,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 90,
                                    "end": 96
                                }
                            ],
                            "trailingComma": false,
                            "transformFlags": 0,
                            "flags": 0,
                            "symbol": null,
                            "start": 85,
                            "end": 96
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 76,
                        "end": 97
                    },
                    "typeArguments": null,
                    "argumentList": null,
                    "flags": 66,
                    "symbol": null,
                    "transformFlags": 32,
                    "start": 0,
                    "end": 97
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 62,
                "end": 97
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 62,
            "end": 98
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
                            "text": "y",
                            "rawText": "y",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 103,
                            "end": 105
                        },
                        "exclamation": false,
                        "type": {
                            "kind": 8199,
                            "elementType": {
                                "kind": 4202657,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 106,
                                "end": 113
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 106,
                            "end": 116
                        },
                        "initializer": null,
                        "flags": 103,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 115
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 103,
                "end": 115
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 98,
            "end": 116
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 65550,
                "left": {
                    "kind": 196712,
                    "text": "y",
                    "rawText": "y",
                    "flags": 32768,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 116,
                    "end": 118
                },
                "operator": "=",
                "right": {
                    "kind": 66204,
                    "expression": {
                        "kind": 196712,
                        "text": "Array",
                        "rawText": "Array",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 124,
                        "end": 130
                    },
                    "typeArguments": null,
                    "argumentList": {
                        "kind": 3,
                        "elements": [
                            {
                                "kind": 4261540,
                                "text": 1,
                                "rawText": "1",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 131,
                                "end": 132
                            }
                        ],
                        "trailingComma": false,
                        "transformFlags": 0,
                        "flags": 0,
                        "symbol": null,
                        "start": 131,
                        "end": 132
                    },
                    "flags": 120,
                    "symbol": null,
                    "transformFlags": 32,
                    "start": 0,
                    "end": 133
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 116,
                "end": 133
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 116,
            "end": 134
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 65550,
                "left": {
                    "kind": 196712,
                    "text": "y",
                    "rawText": "y",
                    "flags": 32768,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 134,
                    "end": 136
                },
                "operator": "=",
                "right": {
                    "kind": 66204,
                    "expression": {
                        "kind": 196712,
                        "text": "Array",
                        "rawText": "Array",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 142,
                        "end": 148
                    },
                    "typeArguments": null,
                    "argumentList": {
                        "kind": 3,
                        "elements": [
                            {
                                "kind": 4261540,
                                "text": 1,
                                "rawText": "1",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 149,
                                "end": 150
                            },
                            {
                                "kind": 4261540,
                                "text": 2,
                                "rawText": "2",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 151,
                                "end": 152
                            }
                        ],
                        "trailingComma": false,
                        "transformFlags": 0,
                        "flags": 0,
                        "symbol": null,
                        "start": 149,
                        "end": 152
                    },
                    "flags": 138,
                    "symbol": null,
                    "transformFlags": 32,
                    "start": 0,
                    "end": 153
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 134,
                "end": 153
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 134,
            "end": 154
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 65550,
                "left": {
                    "kind": 196712,
                    "text": "y",
                    "rawText": "y",
                    "flags": 32768,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 154,
                    "end": 156
                },
                "operator": "=",
                "right": {
                    "kind": 66204,
                    "expression": {
                        "kind": 1073807915,
                        "expression": {
                            "kind": 196712,
                            "text": "Array",
                            "rawText": "Array",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 162,
                            "end": 168
                        },
                        "typeArguments": {
                            "kind": 8419,
                            "typeArgumentsList": [
                                {
                                    "kind": 4202657,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 2097152,
                                    "start": 169,
                                    "end": 175
                                }
                            ],
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 169,
                            "end": 176
                        },
                        "argumentList": {
                            "kind": 3,
                            "elements": [
                                {
                                    "kind": 4261540,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 177,
                                    "end": 178
                                },
                                {
                                    "kind": 4261540,
                                    "text": 2,
                                    "rawText": "2",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 179,
                                    "end": 181
                                }
                            ],
                            "trailingComma": false,
                            "transformFlags": 0,
                            "flags": 0,
                            "symbol": null,
                            "start": 177,
                            "end": 181
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 168,
                        "end": 182
                    },
                    "typeArguments": null,
                    "argumentList": null,
                    "flags": 158,
                    "symbol": null,
                    "transformFlags": 32,
                    "start": 0,
                    "end": 182
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 154,
                "end": 182
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 154,
            "end": 183
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
    "end": 184
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

