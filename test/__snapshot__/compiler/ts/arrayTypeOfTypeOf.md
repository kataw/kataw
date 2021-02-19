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
    "kind": 196,
    "source": "var x = 1;\nvar xs: typeof x[];\nvar xs2: typeof Array;\nvar xs3: typeof Array<number>;\nvar xs4: typeof Array<typeof x>;\n\nvar x = 1;\nvar xs;\nvar xs2;\nvar xs3 = ;\nvar xs4 = ;",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097397,
                "declarationList": {
                    "kind": 244,
                    "declarations": [
                        {
                            "kind": 243,
                            "binding": {
                                "kind": 131102,
                                "text": "x",
                                "rawText": "x",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "parent": null,
                                "emitNode": null,
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
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 7,
                                "end": 9
                            },
                            "flags": 3,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 0,
                            "end": 9
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 3,
                    "end": 9
                },
                "flags": 16384,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 0,
                "end": 10
            },
            {
                "kind": 2097397,
                "declarationList": {
                    "kind": 244,
                    "declarations": [
                        {
                            "kind": 243,
                            "binding": {
                                "kind": 131102,
                                "text": "xs",
                                "rawText": "xs",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "parent": null,
                                "emitNode": null,
                                "start": 14,
                                "end": 17
                            },
                            "exclamation": false,
                            "type": {
                                "kind": 7,
                                "elementType": {
                                    "kind": 235,
                                    "exprName": {
                                        "kind": 196711,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 25,
                                        "end": 27
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 18,
                                    "end": 27
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 18,
                                "end": 30
                            },
                            "initializer": null,
                            "flags": 14,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 0,
                            "end": 29
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 14,
                    "end": 29
                },
                "flags": 16384,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 10,
                "end": 30
            },
            {
                "kind": 2097397,
                "declarationList": {
                    "kind": 244,
                    "declarations": [
                        {
                            "kind": 243,
                            "binding": {
                                "kind": 131102,
                                "text": "xs2",
                                "rawText": "xs2",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "parent": null,
                                "emitNode": null,
                                "start": 34,
                                "end": 38
                            },
                            "exclamation": false,
                            "type": {
                                "kind": 235,
                                "exprName": {
                                    "kind": 196711,
                                    "text": "Array",
                                    "rawText": "Array",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 46,
                                    "end": 52
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 39,
                                "end": 52
                            },
                            "initializer": null,
                            "flags": 34,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 0,
                            "end": 52
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 34,
                    "end": 52
                },
                "flags": 16384,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 30,
                "end": 53
            },
            {
                "kind": 2097397,
                "declarationList": {
                    "kind": 244,
                    "declarations": [
                        {
                            "kind": 243,
                            "binding": {
                                "kind": 131102,
                                "text": "xs3",
                                "rawText": "xs3",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "parent": null,
                                "emitNode": null,
                                "start": 57,
                                "end": 61
                            },
                            "exclamation": false,
                            "type": {
                                "kind": 235,
                                "exprName": {
                                    "kind": 196711,
                                    "text": "Array",
                                    "rawText": "Array",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 69,
                                    "end": 75
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 62,
                                "end": 75
                            },
                            "initializer": null,
                            "flags": 57,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 0,
                            "end": 75
                        }
                    ],
                    "flags": 2,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 57,
                    "end": 75
                },
                "flags": 16386,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 53,
                "end": 75
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 228,
                    "type": {
                        "kind": 161,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 76,
                        "end": 82
                    },
                    "expression": {
                        "kind": 131322,
                        "text": "",
                        "flags": 6,
                        "intersects": false,
                        "transformFlags": 0,
                        "parent": null,
                        "emitNode": null,
                        "start": 83,
                        "end": 83
                    },
                    "flags": 2,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "parent": null,
                    "emitNode": null,
                    "start": 75,
                    "end": 83
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 75,
                "end": 84
            },
            {
                "kind": 2097397,
                "declarationList": {
                    "kind": 244,
                    "declarations": [
                        {
                            "kind": 243,
                            "binding": {
                                "kind": 131102,
                                "text": "xs4",
                                "rawText": "xs4",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "parent": null,
                                "emitNode": null,
                                "start": 88,
                                "end": 92
                            },
                            "exclamation": false,
                            "type": {
                                "kind": 235,
                                "exprName": {
                                    "kind": 196711,
                                    "text": "Array",
                                    "rawText": "Array",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 100,
                                    "end": 106
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 93,
                                "end": 106
                            },
                            "initializer": null,
                            "flags": 88,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 0,
                            "end": 106
                        }
                    ],
                    "flags": 2,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 88,
                    "end": 106
                },
                "flags": 16386,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 84,
                "end": 106
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 228,
                    "type": {
                        "kind": 235,
                        "exprName": {
                            "kind": 196711,
                            "text": "x",
                            "rawText": "x",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 113,
                            "end": 115
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 107,
                        "end": 115
                    },
                    "expression": {
                        "kind": 131322,
                        "text": "",
                        "flags": 6,
                        "intersects": false,
                        "transformFlags": 0,
                        "parent": null,
                        "emitNode": null,
                        "start": 116,
                        "end": 116
                    },
                    "flags": 2,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "parent": null,
                    "emitNode": null,
                    "start": 106,
                    "end": 116
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 106,
                "end": 117
            },
            {
                "kind": 2097397,
                "declarationList": {
                    "kind": 244,
                    "declarations": [
                        {
                            "kind": 243,
                            "binding": {
                                "kind": 131102,
                                "text": "x",
                                "rawText": "x",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "parent": null,
                                "emitNode": null,
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
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 126,
                                "end": 128
                            },
                            "flags": 122,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 0,
                            "end": 128
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 122,
                    "end": 128
                },
                "flags": 16384,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 117,
                "end": 129
            },
            {
                "kind": 2097397,
                "declarationList": {
                    "kind": 244,
                    "declarations": [
                        {
                            "kind": 243,
                            "binding": {
                                "kind": 131102,
                                "text": "xs",
                                "rawText": "xs",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "parent": null,
                                "emitNode": null,
                                "start": 133,
                                "end": 136
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": null,
                            "flags": 133,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 0,
                            "end": 136
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 133,
                    "end": 136
                },
                "flags": 16384,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 129,
                "end": 137
            },
            {
                "kind": 2097397,
                "declarationList": {
                    "kind": 244,
                    "declarations": [
                        {
                            "kind": 243,
                            "binding": {
                                "kind": 131102,
                                "text": "xs2",
                                "rawText": "xs2",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "parent": null,
                                "emitNode": null,
                                "start": 141,
                                "end": 145
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": null,
                            "flags": 141,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 0,
                            "end": 145
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 141,
                    "end": 145
                },
                "flags": 16384,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 137,
                "end": 146
            },
            {
                "kind": 2097397,
                "declarationList": {
                    "kind": 244,
                    "declarations": [
                        {
                            "kind": 243,
                            "binding": {
                                "kind": 131102,
                                "text": "xs3",
                                "rawText": "xs3",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "parent": null,
                                "emitNode": null,
                                "start": 150,
                                "end": 154
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 131322,
                                "text": "",
                                "flags": 6,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 156,
                                "end": 156
                            },
                            "flags": 150,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 2,
                            "end": 156
                        }
                    ],
                    "flags": 2,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 150,
                    "end": 156
                },
                "flags": 16384,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 146,
                "end": 158
            },
            {
                "kind": 2097397,
                "declarationList": {
                    "kind": 244,
                    "declarations": [
                        {
                            "kind": 243,
                            "binding": {
                                "kind": 131102,
                                "text": "xs4",
                                "rawText": "xs4",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "parent": null,
                                "emitNode": null,
                                "start": 162,
                                "end": 166
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 131322,
                                "text": "",
                                "flags": 6,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 168,
                                "end": 168
                            },
                            "flags": 162,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 2,
                            "end": 168
                        }
                    ],
                    "flags": 2,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 162,
                    "end": 168
                },
                "flags": 16384,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 158,
                "end": 170
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "parent": null,
        "emitNode": null,
        "start": 0,
        "end": 170
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [
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
    "parent": null,
    "emitNode": null,
    "incremental": false,
    "flags": 0,
    "intersects": false,
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

