# Kataw parser test case

## Input

`````js
type A = keyof (T | U);
type B = keyof (X & Y);
type C = keyof T | U;
type D = keyof X & Y;
type E = (keyof T)[];
type F = ((keyof T))[];
type G = (keyof T1)["foo"];
type H = ((keyof T1))["foo"];
type I = (((keyof T1)))["foo"];
type J = ((((keyof T1))))["foo"];
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "type A = keyof (T | U);\ntype B = keyof (X & Y);\ntype C = keyof T | U;\ntype D = keyof X & Y;\ntype E = (keyof T)[];\ntype F = ((keyof T))[];\ntype G = (keyof T1)[\"foo\"];\ntype H = ((keyof T1))[\"foo\"];\ntype I = (((keyof T1)))[\"foo\"];\ntype J = ((((keyof T1))))[\"foo\"];",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 8417,
                "name": {
                    "kind": 196712,
                    "text": "A",
                    "rawText": "A",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 4,
                    "end": 6
                },
                "type": {
                    "kind": 8423,
                    "operator": "keyof",
                    "type": {
                        "kind": 8369,
                        "type": {
                            "kind": 8432,
                            "types": [
                                {
                                    "kind": 8428,
                                    "typeName": {
                                        "kind": 196711,
                                        "text": "T",
                                        "rawText": "T",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 16,
                                        "end": 17
                                    },
                                    "typeArguments": null,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 16,
                                    "end": 19
                                },
                                {
                                    "kind": 8428,
                                    "typeName": {
                                        "kind": 196711,
                                        "text": "U",
                                        "rawText": "U",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 19,
                                        "end": 21
                                    },
                                    "typeArguments": null,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 19,
                                    "end": 22
                                }
                            ],
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 17,
                            "end": 21
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 14,
                        "end": 22
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 8,
                    "end": 22
                },
                "typeParameters": null,
                "flags": 16384,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 0,
                "end": 23
            },
            {
                "kind": 8417,
                "name": {
                    "kind": 196712,
                    "text": "B",
                    "rawText": "B",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 28,
                    "end": 30
                },
                "type": {
                    "kind": 8423,
                    "operator": "keyof",
                    "type": {
                        "kind": 8369,
                        "type": {
                            "kind": 8312,
                            "types": [
                                {
                                    "kind": 8428,
                                    "typeName": {
                                        "kind": 196711,
                                        "text": "X",
                                        "rawText": "X",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 40,
                                        "end": 41
                                    },
                                    "typeArguments": null,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 40,
                                    "end": 43
                                },
                                {
                                    "kind": 8428,
                                    "typeName": {
                                        "kind": 196711,
                                        "text": "Y",
                                        "rawText": "Y",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 43,
                                        "end": 45
                                    },
                                    "typeArguments": null,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 43,
                                    "end": 46
                                }
                            ],
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 41,
                            "end": 45
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 38,
                        "end": 46
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 32,
                    "end": 46
                },
                "typeParameters": null,
                "flags": 16384,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 23,
                "end": 47
            },
            {
                "kind": 8417,
                "name": {
                    "kind": 196712,
                    "text": "C",
                    "rawText": "C",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 52,
                    "end": 54
                },
                "type": {
                    "kind": 8423,
                    "operator": "keyof",
                    "type": {
                        "kind": 8432,
                        "types": [
                            {
                                "kind": 8428,
                                "typeName": {
                                    "kind": 196711,
                                    "text": "T",
                                    "rawText": "T",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 62,
                                    "end": 64
                                },
                                "typeArguments": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 62,
                                "end": 66
                            },
                            {
                                "kind": 8428,
                                "typeName": {
                                    "kind": 196711,
                                    "text": "U",
                                    "rawText": "U",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 66,
                                    "end": 68
                                },
                                "typeArguments": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 66,
                                "end": 69
                            }
                        ],
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 64,
                        "end": 68
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 56,
                    "end": 68
                },
                "typeParameters": null,
                "flags": 16384,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 47,
                "end": 69
            },
            {
                "kind": 8417,
                "name": {
                    "kind": 196712,
                    "text": "D",
                    "rawText": "D",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 74,
                    "end": 76
                },
                "type": {
                    "kind": 8423,
                    "operator": "keyof",
                    "type": {
                        "kind": 8312,
                        "types": [
                            {
                                "kind": 8428,
                                "typeName": {
                                    "kind": 196711,
                                    "text": "X",
                                    "rawText": "X",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 84,
                                    "end": 86
                                },
                                "typeArguments": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 84,
                                "end": 88
                            },
                            {
                                "kind": 8428,
                                "typeName": {
                                    "kind": 196711,
                                    "text": "Y",
                                    "rawText": "Y",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 88,
                                    "end": 90
                                },
                                "typeArguments": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 88,
                                "end": 91
                            }
                        ],
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 86,
                        "end": 90
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 78,
                    "end": 90
                },
                "typeParameters": null,
                "flags": 16384,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 69,
                "end": 91
            },
            {
                "kind": 8417,
                "name": {
                    "kind": 196712,
                    "text": "E",
                    "rawText": "E",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 96,
                    "end": 98
                },
                "type": {
                    "kind": 8199,
                    "elementType": {
                        "kind": 8369,
                        "type": {
                            "kind": 8423,
                            "operator": "keyof",
                            "type": {
                                "kind": 8428,
                                "typeName": {
                                    "kind": 196711,
                                    "text": "T",
                                    "rawText": "T",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 107,
                                    "end": 109
                                },
                                "typeArguments": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 107,
                                "end": 110
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 102,
                            "end": 109
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 100,
                        "end": 110
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 100,
                    "end": 113
                },
                "typeParameters": null,
                "flags": 16384,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 91,
                "end": 113
            },
            {
                "kind": 8417,
                "name": {
                    "kind": 196712,
                    "text": "F",
                    "rawText": "F",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 118,
                    "end": 120
                },
                "type": {
                    "kind": 8199,
                    "elementType": {
                        "kind": 8369,
                        "type": {
                            "kind": 8369,
                            "type": {
                                "kind": 8423,
                                "operator": "keyof",
                                "type": {
                                    "kind": 8428,
                                    "typeName": {
                                        "kind": 196711,
                                        "text": "T",
                                        "rawText": "T",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 130,
                                        "end": 132
                                    },
                                    "typeArguments": null,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 130,
                                    "end": 133
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 125,
                                "end": 132
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 124,
                            "end": 133
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 122,
                        "end": 134
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 122,
                    "end": 137
                },
                "typeParameters": null,
                "flags": 16384,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 113,
                "end": 137
            },
            {
                "kind": 8417,
                "name": {
                    "kind": 196712,
                    "text": "G",
                    "rawText": "G",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 142,
                    "end": 144
                },
                "type": {
                    "kind": 8309,
                    "objectType": {
                        "kind": 8369,
                        "type": {
                            "kind": 8423,
                            "operator": "keyof",
                            "type": {
                                "kind": 8428,
                                "typeName": {
                                    "kind": 196711,
                                    "text": "T1",
                                    "rawText": "T1",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 153,
                                    "end": 156
                                },
                                "typeArguments": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 153,
                                "end": 157
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 148,
                            "end": 156
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 146,
                        "end": 157
                    },
                    "indexType": {
                        "kind": 8400,
                        "text": "foo",
                        "rawText": "foo",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 158,
                        "end": 163
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 146,
                    "end": 165
                },
                "typeParameters": null,
                "flags": 16384,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 137,
                "end": 165
            },
            {
                "kind": 8417,
                "name": {
                    "kind": 196712,
                    "text": "H",
                    "rawText": "H",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 170,
                    "end": 172
                },
                "type": {
                    "kind": 8309,
                    "objectType": {
                        "kind": 8369,
                        "type": {
                            "kind": 8369,
                            "type": {
                                "kind": 8423,
                                "operator": "keyof",
                                "type": {
                                    "kind": 8428,
                                    "typeName": {
                                        "kind": 196711,
                                        "text": "T1",
                                        "rawText": "T1",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 182,
                                        "end": 185
                                    },
                                    "typeArguments": null,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 182,
                                    "end": 186
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 177,
                                "end": 185
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 176,
                            "end": 186
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 174,
                        "end": 187
                    },
                    "indexType": {
                        "kind": 8400,
                        "text": "foo",
                        "rawText": "foo",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 188,
                        "end": 193
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 174,
                    "end": 195
                },
                "typeParameters": null,
                "flags": 16384,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 165,
                "end": 195
            },
            {
                "kind": 8417,
                "name": {
                    "kind": 196712,
                    "text": "I",
                    "rawText": "I",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 200,
                    "end": 202
                },
                "type": {
                    "kind": 8309,
                    "objectType": {
                        "kind": 8369,
                        "type": {
                            "kind": 8369,
                            "type": {
                                "kind": 8369,
                                "type": {
                                    "kind": 8423,
                                    "operator": "keyof",
                                    "type": {
                                        "kind": 8428,
                                        "typeName": {
                                            "kind": 196711,
                                            "text": "T1",
                                            "rawText": "T1",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 213,
                                            "end": 216
                                        },
                                        "typeArguments": null,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 213,
                                        "end": 217
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 208,
                                    "end": 216
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 207,
                                "end": 217
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 206,
                            "end": 218
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 204,
                        "end": 219
                    },
                    "indexType": {
                        "kind": 8400,
                        "text": "foo",
                        "rawText": "foo",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 220,
                        "end": 225
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 204,
                    "end": 227
                },
                "typeParameters": null,
                "flags": 16384,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 195,
                "end": 227
            },
            {
                "kind": 8417,
                "name": {
                    "kind": 196712,
                    "text": "J",
                    "rawText": "J",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 232,
                    "end": 234
                },
                "type": {
                    "kind": 8309,
                    "objectType": {
                        "kind": 8369,
                        "type": {
                            "kind": 8369,
                            "type": {
                                "kind": 8369,
                                "type": {
                                    "kind": 8369,
                                    "type": {
                                        "kind": 8423,
                                        "operator": "keyof",
                                        "type": {
                                            "kind": 8428,
                                            "typeName": {
                                                "kind": 196711,
                                                "text": "T1",
                                                "rawText": "T1",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 246,
                                                "end": 249
                                            },
                                            "typeArguments": null,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 246,
                                            "end": 250
                                        },
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 241,
                                        "end": 249
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 240,
                                    "end": 250
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 239,
                                "end": 251
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 238,
                            "end": 252
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 236,
                        "end": 253
                    },
                    "indexType": {
                        "kind": 8400,
                        "text": "foo",
                        "rawText": "foo",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 254,
                        "end": 259
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 236,
                    "end": 261
                },
                "typeParameters": null,
                "flags": 16384,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 227,
                "end": 261
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 261
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 261
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

