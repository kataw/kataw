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
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 71,
                "name": {
                    "kind": 196712,
                    "text": "numbers",
                    "rawText": "numbers",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 11,
                    "end": 19
                },
                "members": {
                    "kind": 73,
                    "enumMembersList": [
                        {
                            "kind": 72,
                            "name": {
                                "kind": 196711,
                                "text": "zero",
                                "rawText": "zero",
                                "flags": 16384,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 21,
                                "end": 30
                            },
                            "initializer": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 21,
                            "end": 30
                        },
                        {
                            "kind": 72,
                            "name": {
                                "kind": 196711,
                                "text": "one",
                                "rawText": "one",
                                "flags": 16384,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 31,
                                "end": 39
                            },
                            "initializer": null,
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 31,
                            "end": 39
                        }
                    ],
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "parent": null,
                    "emitNode": null,
                    "start": 21,
                    "end": 39
                },
                "isConst": true,
                "flags": 16384,
                "intersects": false,
                "transformFlags": 2097152,
                "parent": null,
                "emitNode": null,
                "start": 0,
                "end": 41
            },
            {
                "kind": 119,
                "name": {
                    "kind": 196712,
                    "text": "indexAccess",
                    "rawText": "indexAccess",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 52,
                    "end": 64
                },
                "typeParameters": null,
                "heritageClauses": null,
                "objectTypeMembers": {
                    "kind": 169,
                    "members": [
                        {
                            "kind": 188,
                            "name": {
                                "kind": 4261540,
                                "text": 0,
                                "rawText": "0",
                                "flags": 16384,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 66,
                                "end": 72
                            },
                            "isOptional": false,
                            "accessModifier": null,
                            "type": {
                                "kind": 4194510,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 73,
                                "end": 80
                            },
                            "isStatic": false,
                            "isReadOnly": false,
                            "initializer": null,
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 66,
                            "end": 81
                        },
                        {
                            "kind": 188,
                            "name": {
                                "kind": 4261540,
                                "text": 1,
                                "rawText": "1",
                                "flags": 16384,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 81,
                                "end": 87
                            },
                            "isOptional": false,
                            "accessModifier": null,
                            "type": {
                                "kind": 161,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 88,
                                "end": 95
                            },
                            "isStatic": false,
                            "isReadOnly": false,
                            "initializer": null,
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 81,
                            "end": 96
                        }
                    ],
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "parent": null,
                    "emitNode": null,
                    "start": 66,
                    "end": 96
                },
                "flags": 16384,
                "intersects": false,
                "transformFlags": 2097152,
                "parent": null,
                "emitNode": null,
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
                            "kind": 141,
                            "binding": {
                                "kind": 131102,
                                "text": "test",
                                "rawText": "test",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "parent": null,
                                "emitNode": null,
                                "start": 103,
                                "end": 108
                            },
                            "exclamation": false,
                            "type": {
                                "kind": 236,
                                "typeName": {
                                    "kind": 196711,
                                    "text": "indexAccess",
                                    "rawText": "indexAccess",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 109,
                                    "end": 121
                                },
                                "typeArguments": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 109,
                                "end": 122
                            },
                            "initializer": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 103,
                            "end": 121
                        }
                    ],
                    "flags": 16,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 103,
                    "end": 121
                },
                "flags": 16400,
                "intersects": false,
                "transformFlags": 769,
                "parent": null,
                "emitNode": null,
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
                            "kind": 141,
                            "binding": {
                                "kind": 131102,
                                "text": "s",
                                "rawText": "s",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "parent": null,
                                "emitNode": null,
                                "start": 127,
                                "end": 129
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 74308,
                                "member": {
                                    "kind": 196712,
                                    "text": "test",
                                    "rawText": "test",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
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
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 137,
                                    "end": 138
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 136,
                                "end": 139
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 127,
                            "end": 139
                        }
                    ],
                    "flags": 16,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 127,
                    "end": 139
                },
                "flags": 16400,
                "intersects": false,
                "transformFlags": 769,
                "parent": null,
                "emitNode": null,
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
                            "kind": 141,
                            "binding": {
                                "kind": 131102,
                                "text": "n",
                                "rawText": "n",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "parent": null,
                                "emitNode": null,
                                "start": 144,
                                "end": 146
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 74308,
                                "member": {
                                    "kind": 196712,
                                    "text": "test",
                                    "rawText": "test",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
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
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 154,
                                    "end": 155
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 153,
                                "end": 156
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 144,
                            "end": 156
                        }
                    ],
                    "flags": 16,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 144,
                    "end": 156
                },
                "flags": 16400,
                "intersects": false,
                "transformFlags": 769,
                "parent": null,
                "emitNode": null,
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
                            "kind": 141,
                            "binding": {
                                "kind": 131102,
                                "text": "s1",
                                "rawText": "s1",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "parent": null,
                                "emitNode": null,
                                "start": 162,
                                "end": 165
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 74308,
                                "member": {
                                    "kind": 196712,
                                    "text": "test",
                                    "rawText": "test",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 167,
                                    "end": 172
                                },
                                "expression": {
                                    "kind": 74424,
                                    "member": {
                                        "kind": 196712,
                                        "text": "numbers",
                                        "rawText": "numbers",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
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
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 181,
                                        "end": 185
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 180,
                                    "end": 185
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 172,
                                "end": 186
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 162,
                            "end": 186
                        }
                    ],
                    "flags": 16,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 162,
                    "end": 186
                },
                "flags": 16400,
                "intersects": false,
                "transformFlags": 769,
                "parent": null,
                "emitNode": null,
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
                            "kind": 141,
                            "binding": {
                                "kind": 131102,
                                "text": "n1",
                                "rawText": "n1",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "parent": null,
                                "emitNode": null,
                                "start": 191,
                                "end": 194
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 74308,
                                "member": {
                                    "kind": 196712,
                                    "text": "test",
                                    "rawText": "test",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 196,
                                    "end": 201
                                },
                                "expression": {
                                    "kind": 74424,
                                    "member": {
                                        "kind": 196712,
                                        "text": "numbers",
                                        "rawText": "numbers",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
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
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 210,
                                        "end": 213
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 209,
                                    "end": 213
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 201,
                                "end": 214
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 191,
                            "end": 214
                        }
                    ],
                    "flags": 16,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 191,
                    "end": 214
                },
                "flags": 16400,
                "intersects": false,
                "transformFlags": 769,
                "parent": null,
                "emitNode": null,
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
                            "kind": 141,
                            "binding": {
                                "kind": 131102,
                                "text": "s2",
                                "rawText": "s2",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "parent": null,
                                "emitNode": null,
                                "start": 220,
                                "end": 223
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 74308,
                                "member": {
                                    "kind": 196712,
                                    "text": "test",
                                    "rawText": "test",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 225,
                                    "end": 230
                                },
                                "expression": {
                                    "kind": 74308,
                                    "member": {
                                        "kind": 196712,
                                        "text": "numbers",
                                        "rawText": "numbers",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 231,
                                        "end": 238
                                    },
                                    "expression": {
                                        "kind": 67279,
                                        "text": "zero",
                                        "rawText": "zero",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 239,
                                        "end": 245
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 238,
                                    "end": 246
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 230,
                                "end": 247
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 220,
                            "end": 247
                        }
                    ],
                    "flags": 16,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 220,
                    "end": 247
                },
                "flags": 16400,
                "intersects": false,
                "transformFlags": 769,
                "parent": null,
                "emitNode": null,
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
                            "kind": 141,
                            "binding": {
                                "kind": 131102,
                                "text": "n2",
                                "rawText": "n2",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "parent": null,
                                "emitNode": null,
                                "start": 252,
                                "end": 255
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 74308,
                                "member": {
                                    "kind": 196712,
                                    "text": "test",
                                    "rawText": "test",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 257,
                                    "end": 262
                                },
                                "expression": {
                                    "kind": 74308,
                                    "member": {
                                        "kind": 196712,
                                        "text": "numbers",
                                        "rawText": "numbers",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 263,
                                        "end": 270
                                    },
                                    "expression": {
                                        "kind": 67279,
                                        "text": "one",
                                        "rawText": "one",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 271,
                                        "end": 276
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 270,
                                    "end": 277
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 262,
                                "end": 278
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 252,
                            "end": 278
                        }
                    ],
                    "flags": 16,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 252,
                    "end": 278
                },
                "flags": 16400,
                "intersects": false,
                "transformFlags": 769,
                "parent": null,
                "emitNode": null,
                "start": 248,
                "end": 279
            },
            {
                "kind": 71,
                "name": {
                    "kind": 196712,
                    "text": "numbersNotConst",
                    "rawText": "numbersNotConst",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 285,
                    "end": 301
                },
                "members": {
                    "kind": 73,
                    "enumMembersList": [
                        {
                            "kind": 72,
                            "name": {
                                "kind": 196711,
                                "text": "zero",
                                "rawText": "zero",
                                "flags": 16384,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 303,
                                "end": 312
                            },
                            "initializer": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 303,
                            "end": 312
                        },
                        {
                            "kind": 72,
                            "name": {
                                "kind": 196711,
                                "text": "one",
                                "rawText": "one",
                                "flags": 16384,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 313,
                                "end": 321
                            },
                            "initializer": null,
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 313,
                            "end": 321
                        }
                    ],
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "parent": null,
                    "emitNode": null,
                    "start": 303,
                    "end": 321
                },
                "isConst": false,
                "flags": 16384,
                "intersects": false,
                "transformFlags": 2097152,
                "parent": null,
                "emitNode": null,
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
                            "kind": 141,
                            "binding": {
                                "kind": 131102,
                                "text": "s3",
                                "rawText": "s3",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "parent": null,
                                "emitNode": null,
                                "start": 328,
                                "end": 331
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 74308,
                                "member": {
                                    "kind": 196712,
                                    "text": "test",
                                    "rawText": "test",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 333,
                                    "end": 338
                                },
                                "expression": {
                                    "kind": 74424,
                                    "member": {
                                        "kind": 196712,
                                        "text": "numbersNotConst",
                                        "rawText": "numbersNotConst",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
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
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 355,
                                        "end": 359
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 354,
                                    "end": 359
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 338,
                                "end": 360
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 328,
                            "end": 360
                        }
                    ],
                    "flags": 16,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 328,
                    "end": 360
                },
                "flags": 16400,
                "intersects": false,
                "transformFlags": 769,
                "parent": null,
                "emitNode": null,
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
                            "kind": 141,
                            "binding": {
                                "kind": 131102,
                                "text": "n3",
                                "rawText": "n3",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "parent": null,
                                "emitNode": null,
                                "start": 365,
                                "end": 368
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 74308,
                                "member": {
                                    "kind": 196712,
                                    "text": "test",
                                    "rawText": "test",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 370,
                                    "end": 375
                                },
                                "expression": {
                                    "kind": 74424,
                                    "member": {
                                        "kind": 196712,
                                        "text": "numbersNotConst",
                                        "rawText": "numbersNotConst",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
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
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 392,
                                        "end": 395
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 391,
                                    "end": 395
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 375,
                                "end": 396
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 365,
                            "end": 396
                        }
                    ],
                    "flags": 16,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 365,
                    "end": 396
                },
                "flags": 16400,
                "intersects": false,
                "transformFlags": 769,
                "parent": null,
                "emitNode": null,
                "start": 361,
                "end": 397
            }
        ],
        "transformFlags": 0,
        "flags": 16384,
        "intersects": false,
        "parent": null,
        "emitNode": null,
        "start": 0,
        "end": 397
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

