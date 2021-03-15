# Kataw parser test case

## Input

`````js
var x = 1;
var xs: typeof x[];
var xs2: typeof Array;
var xs3: typeof Array<number>;
var xs4: typeof Array<typeof x>;

var x = 1;
var xs;
var xs2;
var xs3 = ;
var xs4 = ;
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "var x = 1;\nvar xs: typeof x[];\nvar xs2: typeof Array;\nvar xs3: typeof Array<number>;\nvar xs4: typeof Array<typeof x>;\n\nvar x = 1;\nvar xs;\nvar xs2;\nvar xs3 = ;\nvar xs4 = ;",
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
                        "type": null,
                        "initializer": {
                            "kind": 4261540,
                            "text": 1,
                            "rawText": "1",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 7,
                            "end": 9
                        },
                        "flags": 3,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 9
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 3,
                "end": 9
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 10
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
                            "text": "xs",
                            "rawText": "xs",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 14,
                            "end": 17
                        },
                        "exclamation": false,
                        "type": {
                            "kind": 8199,
                            "elementType": {
                                "kind": 8427,
                                "exprName": {
                                    "kind": 196711,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 25,
                                    "end": 27
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 18,
                                "end": 27
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 18,
                            "end": 30
                        },
                        "initializer": null,
                        "flags": 14,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 29
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 14,
                "end": 29
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 10,
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
                            "text": "xs2",
                            "rawText": "xs2",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 34,
                            "end": 38
                        },
                        "exclamation": false,
                        "type": {
                            "kind": 8427,
                            "exprName": {
                                "kind": 196711,
                                "text": "Array",
                                "rawText": "Array",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 46,
                                "end": 52
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 39,
                            "end": 52
                        },
                        "initializer": null,
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
                            "text": "xs3",
                            "rawText": "xs3",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 57,
                            "end": 61
                        },
                        "exclamation": false,
                        "type": {
                            "kind": 8427,
                            "exprName": {
                                "kind": 196711,
                                "text": "Array",
                                "rawText": "Array",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 69,
                                "end": 75
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 62,
                            "end": 75
                        },
                        "initializer": null,
                        "flags": 57,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 75
                    }
                ],
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 57,
                "end": 75
            },
            "flags": 32769,
            "symbol": null,
            "transformFlags": 0,
            "start": 53,
            "end": 75
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 134291684,
                "type": {
                    "kind": 4202657,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 2097152,
                    "start": 76,
                    "end": 82
                },
                "expression": {
                    "kind": 131322,
                    "text": "",
                    "flags": 3,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 83,
                    "end": 83
                },
                "flags": 1,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 75,
                "end": 83
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 75,
            "end": 84
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
                            "text": "xs4",
                            "rawText": "xs4",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 88,
                            "end": 92
                        },
                        "exclamation": false,
                        "type": {
                            "kind": 8427,
                            "exprName": {
                                "kind": 196711,
                                "text": "Array",
                                "rawText": "Array",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 100,
                                "end": 106
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 93,
                            "end": 106
                        },
                        "initializer": null,
                        "flags": 88,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 106
                    }
                ],
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 88,
                "end": 106
            },
            "flags": 32769,
            "symbol": null,
            "transformFlags": 0,
            "start": 84,
            "end": 106
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 134291684,
                "type": {
                    "kind": 8427,
                    "exprName": {
                        "kind": 196711,
                        "text": "x",
                        "rawText": "x",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 113,
                        "end": 115
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 2097152,
                    "start": 107,
                    "end": 115
                },
                "expression": {
                    "kind": 131322,
                    "text": "",
                    "flags": 3,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 116,
                    "end": 116
                },
                "flags": 1,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 106,
                "end": 116
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 106,
            "end": 117
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
                            "text": "x",
                            "rawText": "x",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 122,
                            "end": 124
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 4261540,
                            "text": 1,
                            "rawText": "1",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 126,
                            "end": 128
                        },
                        "flags": 122,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 128
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 122,
                "end": 128
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 117,
            "end": 129
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
                            "text": "xs",
                            "rawText": "xs",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 133,
                            "end": 136
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": null,
                        "flags": 133,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 136
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 133,
                "end": 136
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 129,
            "end": 137
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
                            "text": "xs2",
                            "rawText": "xs2",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 141,
                            "end": 145
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": null,
                        "flags": 141,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 145
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 141,
                "end": 145
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 137,
            "end": 146
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
                            "text": "xs3",
                            "rawText": "xs3",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 150,
                            "end": 154
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 131322,
                            "text": "",
                            "flags": 3,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 156,
                            "end": 156
                        },
                        "flags": 150,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 156
                    }
                ],
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 150,
                "end": 156
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 146,
            "end": 158
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
                            "text": "xs4",
                            "rawText": "xs4",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 162,
                            "end": 166
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 131322,
                            "text": "",
                            "flags": 3,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 168,
                            "end": 168
                        },
                        "flags": 162,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 168
                    }
                ],
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 162,
                "end": 168
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 158,
            "end": 170
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 75,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 83,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 106,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 116,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 157,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 169,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 170
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

