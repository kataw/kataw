# Kataw parser test case

## Input

`````js

const enum numbers {
    zero,
    one
}

interface indexAccess {
    0: string;
    1: number;
}

let test: indexAccess;

let s = test[0];
let n = test[1];

let s1 = test[numbers.zero];
let n1 = test[numbers.one];

let s2 = test[numbers["zero"]];
let n2 = test[numbers["one"]];

enum numbersNotConst {
    zero,
    one
}

let s3 = test[numbersNotConst.zero];
let n3 = test[numbersNotConst.one];

`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "\nconst enum numbers {\n    zero,\n    one\n}\n\ninterface indexAccess {\n    0: string;\n    1: number;\n}\n\nlet test: indexAccess;\n\nlet s = test[0];\nlet n = test[1];\n\nlet s1 = test[numbers.zero];\nlet n1 = test[numbers.one];\n\nlet s2 = test[numbers[\"zero\"]];\nlet n2 = test[numbers[\"one\"]];\n\nenum numbersNotConst {\n    zero,\n    one\n}\n\nlet s3 = test[numbersNotConst.zero];\nlet n3 = test[numbersNotConst.one];\n",
    "filename": "",
    "statements": [
        {
            "kind": 8263,
            "name": {
                "kind": 196712,
                "text": "numbers",
                "rawText": "numbers",
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 11,
                "end": 19
            },
            "members": {
                "kind": 8265,
                "enumMembersList": [
                    {
                        "kind": 8264,
                        "name": {
                            "kind": 196711,
                            "text": "zero",
                            "rawText": "zero",
                            "flags": 32768,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 21,
                            "end": 30
                        },
                        "initializer": null,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 21,
                        "end": 30
                    },
                    {
                        "kind": 8264,
                        "name": {
                            "kind": 196711,
                            "text": "one",
                            "rawText": "one",
                            "flags": 32768,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 31,
                            "end": 39
                        },
                        "initializer": null,
                        "flags": 32768,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 31,
                        "end": 39
                    }
                ],
                "flags": 32768,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 21,
                "end": 39
            },
            "isConst": true,
            "flags": 32768,
            "intersects": false,
            "transformFlags": 2097152,
            "start": 0,
            "end": 41
        },
        {
            "kind": 8311,
            "name": {
                "kind": 196712,
                "text": "indexAccess",
                "rawText": "indexAccess",
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 52,
                "end": 64
            },
            "typeParameters": null,
            "heritageClauses": null,
            "objectTypeMembers": {
                "kind": 536871081,
                "members": [
                    {
                        "kind": 8380,
                        "name": {
                            "kind": 4261540,
                            "text": 0,
                            "rawText": "0",
                            "flags": 32768,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 66,
                            "end": 72
                        },
                        "isOptional": false,
                        "accessModifier": null,
                        "type": {
                            "kind": 4202702,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 73,
                            "end": 80
                        },
                        "isStatic": false,
                        "isReadOnly": false,
                        "initializer": null,
                        "flags": 32768,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 66,
                        "end": 81
                    },
                    {
                        "kind": 8380,
                        "name": {
                            "kind": 4261540,
                            "text": 1,
                            "rawText": "1",
                            "flags": 32768,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 81,
                            "end": 87
                        },
                        "isOptional": false,
                        "accessModifier": null,
                        "type": {
                            "kind": 4202657,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 88,
                            "end": 95
                        },
                        "isStatic": false,
                        "isReadOnly": false,
                        "initializer": null,
                        "flags": 32768,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 81,
                        "end": 96
                    }
                ],
                "multiline": true,
                "flags": 32768,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 66,
                "end": 96
            },
            "flags": 32768,
            "intersects": false,
            "transformFlags": 2097152,
            "start": 41,
            "end": 98
        },
        {
            "kind": 142,
            "isConst": false,
            "binding": {
                "kind": 31,
                "bindingList": [
                    {
                        "kind": 16525,
                        "binding": {
                            "kind": 131102,
                            "text": "test",
                            "rawText": "test",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1025,
                            "start": 103,
                            "end": 108
                        },
                        "exclamation": false,
                        "type": {
                            "kind": 134226156,
                            "typeName": {
                                "kind": 196711,
                                "text": "indexAccess",
                                "rawText": "indexAccess",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 109,
                                "end": 121
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 109,
                            "end": 122
                        },
                        "initializer": null,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 103,
                        "end": 121
                    }
                ],
                "flags": 8,
                "intersects": false,
                "transformFlags": 0,
                "start": 103,
                "end": 121
            },
            "flags": 32776,
            "intersects": false,
            "transformFlags": 769,
            "start": 98,
            "end": 122
        },
        {
            "kind": 142,
            "isConst": false,
            "binding": {
                "kind": 31,
                "bindingList": [
                    {
                        "kind": 16525,
                        "binding": {
                            "kind": 131102,
                            "text": "s",
                            "rawText": "s",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1025,
                            "start": 127,
                            "end": 129
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 67174980,
                            "member": {
                                "kind": 196712,
                                "text": "test",
                                "rawText": "test",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 131,
                                "end": 136
                            },
                            "expression": {
                                "kind": 4261540,
                                "text": 0,
                                "rawText": "0",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 137,
                                "end": 138
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 136,
                            "end": 139
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 127,
                        "end": 139
                    }
                ],
                "flags": 8,
                "intersects": false,
                "transformFlags": 0,
                "start": 127,
                "end": 139
            },
            "flags": 32776,
            "intersects": false,
            "transformFlags": 769,
            "start": 122,
            "end": 140
        },
        {
            "kind": 142,
            "isConst": false,
            "binding": {
                "kind": 31,
                "bindingList": [
                    {
                        "kind": 16525,
                        "binding": {
                            "kind": 131102,
                            "text": "n",
                            "rawText": "n",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1025,
                            "start": 144,
                            "end": 146
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 67174980,
                            "member": {
                                "kind": 196712,
                                "text": "test",
                                "rawText": "test",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 148,
                                "end": 153
                            },
                            "expression": {
                                "kind": 4261540,
                                "text": 1,
                                "rawText": "1",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 154,
                                "end": 155
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 153,
                            "end": 156
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 144,
                        "end": 156
                    }
                ],
                "flags": 8,
                "intersects": false,
                "transformFlags": 0,
                "start": 144,
                "end": 156
            },
            "flags": 32776,
            "intersects": false,
            "transformFlags": 769,
            "start": 140,
            "end": 157
        },
        {
            "kind": 142,
            "isConst": false,
            "binding": {
                "kind": 31,
                "bindingList": [
                    {
                        "kind": 16525,
                        "binding": {
                            "kind": 131102,
                            "text": "s1",
                            "rawText": "s1",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1025,
                            "start": 162,
                            "end": 165
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 67174980,
                            "member": {
                                "kind": 196712,
                                "text": "test",
                                "rawText": "test",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 167,
                                "end": 172
                            },
                            "expression": {
                                "kind": 67175096,
                                "member": {
                                    "kind": 196712,
                                    "text": "numbers",
                                    "rawText": "numbers",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 173,
                                    "end": 180
                                },
                                "expression": {
                                    "kind": 196711,
                                    "text": "zero",
                                    "rawText": "zero",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 181,
                                    "end": 185
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 180,
                                "end": 185,
                                "period": {
                                    "kind": 255,
                                    "pos": 180,
                                    "end": 181
                                }
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 172,
                            "end": 186
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 162,
                        "end": 186
                    }
                ],
                "flags": 8,
                "intersects": false,
                "transformFlags": 0,
                "start": 162,
                "end": 186
            },
            "flags": 32776,
            "intersects": false,
            "transformFlags": 769,
            "start": 157,
            "end": 187
        },
        {
            "kind": 142,
            "isConst": false,
            "binding": {
                "kind": 31,
                "bindingList": [
                    {
                        "kind": 16525,
                        "binding": {
                            "kind": 131102,
                            "text": "n1",
                            "rawText": "n1",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1025,
                            "start": 191,
                            "end": 194
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 67174980,
                            "member": {
                                "kind": 196712,
                                "text": "test",
                                "rawText": "test",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 196,
                                "end": 201
                            },
                            "expression": {
                                "kind": 67175096,
                                "member": {
                                    "kind": 196712,
                                    "text": "numbers",
                                    "rawText": "numbers",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 202,
                                    "end": 209
                                },
                                "expression": {
                                    "kind": 196711,
                                    "text": "one",
                                    "rawText": "one",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 210,
                                    "end": 213
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 209,
                                "end": 213,
                                "period": {
                                    "kind": 255,
                                    "pos": 209,
                                    "end": 210
                                }
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 201,
                            "end": 214
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 191,
                        "end": 214
                    }
                ],
                "flags": 8,
                "intersects": false,
                "transformFlags": 0,
                "start": 191,
                "end": 214
            },
            "flags": 32776,
            "intersects": false,
            "transformFlags": 769,
            "start": 187,
            "end": 215
        },
        {
            "kind": 142,
            "isConst": false,
            "binding": {
                "kind": 31,
                "bindingList": [
                    {
                        "kind": 16525,
                        "binding": {
                            "kind": 131102,
                            "text": "s2",
                            "rawText": "s2",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1025,
                            "start": 220,
                            "end": 223
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 67174980,
                            "member": {
                                "kind": 196712,
                                "text": "test",
                                "rawText": "test",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 225,
                                "end": 230
                            },
                            "expression": {
                                "kind": 67174980,
                                "member": {
                                    "kind": 196712,
                                    "text": "numbers",
                                    "rawText": "numbers",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 231,
                                    "end": 238
                                },
                                "expression": {
                                    "kind": 4261583,
                                    "text": "zero",
                                    "rawText": "zero",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 239,
                                    "end": 245
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 238,
                                "end": 246
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 230,
                            "end": 247
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 220,
                        "end": 247
                    }
                ],
                "flags": 8,
                "intersects": false,
                "transformFlags": 0,
                "start": 220,
                "end": 247
            },
            "flags": 32776,
            "intersects": false,
            "transformFlags": 769,
            "start": 215,
            "end": 248
        },
        {
            "kind": 142,
            "isConst": false,
            "binding": {
                "kind": 31,
                "bindingList": [
                    {
                        "kind": 16525,
                        "binding": {
                            "kind": 131102,
                            "text": "n2",
                            "rawText": "n2",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1025,
                            "start": 252,
                            "end": 255
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 67174980,
                            "member": {
                                "kind": 196712,
                                "text": "test",
                                "rawText": "test",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 257,
                                "end": 262
                            },
                            "expression": {
                                "kind": 67174980,
                                "member": {
                                    "kind": 196712,
                                    "text": "numbers",
                                    "rawText": "numbers",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 263,
                                    "end": 270
                                },
                                "expression": {
                                    "kind": 4261583,
                                    "text": "one",
                                    "rawText": "one",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 271,
                                    "end": 276
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 270,
                                "end": 277
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 262,
                            "end": 278
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 252,
                        "end": 278
                    }
                ],
                "flags": 8,
                "intersects": false,
                "transformFlags": 0,
                "start": 252,
                "end": 278
            },
            "flags": 32776,
            "intersects": false,
            "transformFlags": 769,
            "start": 248,
            "end": 279
        },
        {
            "kind": 8263,
            "name": {
                "kind": 196712,
                "text": "numbersNotConst",
                "rawText": "numbersNotConst",
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 285,
                "end": 301
            },
            "members": {
                "kind": 8265,
                "enumMembersList": [
                    {
                        "kind": 8264,
                        "name": {
                            "kind": 196711,
                            "text": "zero",
                            "rawText": "zero",
                            "flags": 32768,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 303,
                            "end": 312
                        },
                        "initializer": null,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 303,
                        "end": 312
                    },
                    {
                        "kind": 8264,
                        "name": {
                            "kind": 196711,
                            "text": "one",
                            "rawText": "one",
                            "flags": 32768,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 313,
                            "end": 321
                        },
                        "initializer": null,
                        "flags": 32768,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 313,
                        "end": 321
                    }
                ],
                "flags": 32768,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 303,
                "end": 321
            },
            "isConst": false,
            "flags": 32768,
            "intersects": false,
            "transformFlags": 2097152,
            "start": 279,
            "end": 323
        },
        {
            "kind": 142,
            "isConst": false,
            "binding": {
                "kind": 31,
                "bindingList": [
                    {
                        "kind": 16525,
                        "binding": {
                            "kind": 131102,
                            "text": "s3",
                            "rawText": "s3",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1025,
                            "start": 328,
                            "end": 331
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 67174980,
                            "member": {
                                "kind": 196712,
                                "text": "test",
                                "rawText": "test",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 333,
                                "end": 338
                            },
                            "expression": {
                                "kind": 67175096,
                                "member": {
                                    "kind": 196712,
                                    "text": "numbersNotConst",
                                    "rawText": "numbersNotConst",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 339,
                                    "end": 354
                                },
                                "expression": {
                                    "kind": 196711,
                                    "text": "zero",
                                    "rawText": "zero",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 355,
                                    "end": 359
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 354,
                                "end": 359,
                                "period": {
                                    "kind": 255,
                                    "pos": 354,
                                    "end": 355
                                }
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 338,
                            "end": 360
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 328,
                        "end": 360
                    }
                ],
                "flags": 8,
                "intersects": false,
                "transformFlags": 0,
                "start": 328,
                "end": 360
            },
            "flags": 32776,
            "intersects": false,
            "transformFlags": 769,
            "start": 323,
            "end": 361
        },
        {
            "kind": 142,
            "isConst": false,
            "binding": {
                "kind": 31,
                "bindingList": [
                    {
                        "kind": 16525,
                        "binding": {
                            "kind": 131102,
                            "text": "n3",
                            "rawText": "n3",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1025,
                            "start": 365,
                            "end": 368
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 67174980,
                            "member": {
                                "kind": 196712,
                                "text": "test",
                                "rawText": "test",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 370,
                                "end": 375
                            },
                            "expression": {
                                "kind": 67175096,
                                "member": {
                                    "kind": 196712,
                                    "text": "numbersNotConst",
                                    "rawText": "numbersNotConst",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 376,
                                    "end": 391
                                },
                                "expression": {
                                    "kind": 196711,
                                    "text": "one",
                                    "rawText": "one",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 392,
                                    "end": 395
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 391,
                                "end": 395,
                                "period": {
                                    "kind": 255,
                                    "pos": 391,
                                    "end": 392
                                }
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 375,
                            "end": 396
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 365,
                        "end": 396
                    }
                ],
                "flags": 8,
                "intersects": false,
                "transformFlags": 0,
                "start": 365,
                "end": 396
            },
            "flags": 32776,
            "intersects": false,
            "transformFlags": 769,
            "start": 361,
            "end": 397
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [],
    "intersects": false,
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 398
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

