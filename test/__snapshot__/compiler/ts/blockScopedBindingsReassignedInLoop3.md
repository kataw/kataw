# Kataw parser test case

## Input

`````js
for (let x = 1, y = 2; x < y; ++x, --y) {
    let a = () => x++ + y++;
    if (x == 1) {
        break;
    }
    else {
        for (let a = 1; a < 5; --a) {
            let f = () => a;
            if (a) {
                a = x;
                break;
            }
            else {
                y++;
            }
        }

        y = 5;
    }
}

for (let x = 1, y = 2; x < y; ++x, --y) {
    let a = () => x++ + y++;
    if (x == 1) {
        continue;
    }
    else {
        for (let a = 1; a < 5; --a) {
            let f = () => a;
            if (a) {
                a = x;
                continue;
            }
            else {
                y++;
            }
        }

        y = 5;
    }
}

loop2:
for (let x = 1, y = 2; x < y; ++x, --y) {
    let a = () => x++ + y++;
    if (x == 1) {
        break loop2;
    }
    else {
        loop1:
        for (let a = 1; a < 5; --a) {
            let f = () => a;
            if (a) {
                a = x;
                break loop1;
            }
            else {
                y++;
                break loop2
            }
        }

        y = 5;
    }
}

loop2:
for (let x = 1, y = 2; x < y; ++x, --y) {
    let a = () => x++ + y++;
    if (x == 1) {
        continue loop2;
    }
    else {
        loop1:
        for (let a = 1; a < 5; --a) {
            let f = () => a;
            if (a) {
                a = x;
                continue loop1;
            }
            else {
                y++;
                continue loop2
            }
        }

        y = 5;
    }
}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "for (let x = 1, y = 2; x < y; ++x, --y) {\n    let a = () => x++ + y++;\n    if (x == 1) {\n        break;\n    }\n    else {\n        for (let a = 1; a < 5; --a) {\n            let f = () => a;\n            if (a) {\n                a = x;\n                break;\n            }\n            else {\n                y++;\n            }\n        }\n\n        y = 5;\n    }\n}\n\nfor (let x = 1, y = 2; x < y; ++x, --y) {\n    let a = () => x++ + y++;\n    if (x == 1) {\n        continue;\n    }\n    else {\n        for (let a = 1; a < 5; --a) {\n            let f = () => a;\n            if (a) {\n                a = x;\n                continue;\n            }\n            else {\n                y++;\n            }\n        }\n\n        y = 5;\n    }\n}\n\nloop2:\nfor (let x = 1, y = 2; x < y; ++x, --y) {\n    let a = () => x++ + y++;\n    if (x == 1) {\n        break loop2;\n    }\n    else {\n        loop1:\n        for (let a = 1; a < 5; --a) {\n            let f = () => a;\n            if (a) {\n                a = x;\n                break loop1;\n            }\n            else {\n                y++;\n                break loop2\n            }\n        }\n\n        y = 5;\n    }\n}\n\nloop2:\nfor (let x = 1, y = 2; x < y; ++x, --y) {\n    let a = () => x++ + y++;\n    if (x == 1) {\n        continue loop2;\n    }\n    else {\n        loop1:\n        for (let a = 1; a < 5; --a) {\n            let f = () => a;\n            if (a) {\n                a = x;\n                continue loop1;\n            }\n            else {\n                y++;\n                continue loop2\n            }\n        }\n\n        y = 5;\n    }\n}",
    "filename": "",
    "statements": [
        {
            "kind": 2099288,
            "initializer": {
                "kind": 142,
                "isConst": false,
                "binding": {
                    "kind": 31,
                    "bindingList": [
                        {
                            "kind": 16525,
                            "binding": {
                                "kind": 131102,
                                "text": "x",
                                "rawText": "x",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 1025,
                                "start": 8,
                                "end": 10
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
                                "start": 12,
                                "end": 14
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 8,
                            "end": 14
                        },
                        {
                            "kind": 16525,
                            "binding": {
                                "kind": 131102,
                                "text": "y",
                                "rawText": "y",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 1025,
                                "start": 15,
                                "end": 17
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 4261540,
                                "text": 2,
                                "rawText": "2",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 19,
                                "end": 21
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 15,
                            "end": 21
                        }
                    ],
                    "flags": 8,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 8,
                    "end": 21
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 256,
                "start": 5,
                "end": 21
            },
            "condition": {
                "kind": 65715,
                "operator": "++",
                "operand": {
                    "kind": 196712,
                    "text": "x",
                    "rawText": "x",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 32,
                    "end": 33
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 29,
                "end": 33
            },
            "incrementor": {
                "kind": 65563,
                "left": {
                    "kind": 196712,
                    "text": "x",
                    "rawText": "x",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 22,
                    "end": 24
                },
                "operator": "<",
                "right": {
                    "kind": 196712,
                    "text": "y",
                    "rawText": "y",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 26,
                    "end": 28
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 22,
                "end": 28
            },
            "statement": {
                "kind": 2097233,
                "expression": {
                    "kind": 65590,
                    "expressions": [
                        {
                            "kind": 131322,
                            "text": "",
                            "flags": 3,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 33,
                            "end": 33
                        },
                        {
                            "kind": 65715,
                            "operator": "--",
                            "operand": {
                                "kind": 196712,
                                "text": "y",
                                "rawText": "y",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 37,
                                "end": 38
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 34,
                            "end": 38
                        }
                    ],
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 33,
                    "end": 38
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 33,
                "end": 38
            },
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 38
        },
        {
            "kind": 2099237,
            "block": {
                "kind": 2084,
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
                                        "kind": 131102,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1025,
                                        "start": 49,
                                        "end": 51
                                    },
                                    "exclamation": false,
                                    "type": null,
                                    "initializer": {
                                        "kind": 83976,
                                        "typeParameters": null,
                                        "arrowParameters": {
                                            "kind": 81929,
                                            "elements": [],
                                            "type": null,
                                            "accessModifier": null,
                                            "trailingComma": false,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 53,
                                            "end": 53
                                        },
                                        "contents": {
                                            "kind": 65563,
                                            "left": {
                                                "kind": 65714,
                                                "operator": "++",
                                                "operand": {
                                                    "kind": 196712,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 59,
                                                    "end": 61
                                                },
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 59,
                                                "end": 63
                                            },
                                            "operator": "+",
                                            "right": {
                                                "kind": 65714,
                                                "operator": "++",
                                                "operand": {
                                                    "kind": 196712,
                                                    "text": "y",
                                                    "rawText": "y",
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 65,
                                                    "end": 67
                                                },
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 65,
                                                "end": 69
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 59,
                                            "end": 69
                                        },
                                        "flags": 1073741824,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 53,
                                        "end": 69
                                    },
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 49,
                                    "end": 69
                                }
                            ],
                            "flags": 8,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 49,
                            "end": 69
                        },
                        "flags": 32776,
                        "symbol": null,
                        "transformFlags": 769,
                        "start": 41,
                        "end": 70
                    },
                    {
                        "kind": 2097257,
                        "expression": {
                            "kind": 65563,
                            "left": {
                                "kind": 196712,
                                "text": "x",
                                "rawText": "x",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 79,
                                "end": 80
                            },
                            "operator": "==",
                            "right": {
                                "kind": 4261540,
                                "text": 1,
                                "rawText": "1",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 83,
                                "end": 85
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 79,
                            "end": 85
                        },
                        "consequent": {
                            "kind": 2099237,
                            "block": {
                                "kind": 2084,
                                "statements": [
                                    {
                                        "kind": 2097193,
                                        "label": null,
                                        "flags": 32768,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 88,
                                        "end": 103
                                    }
                                ],
                                "multiline": true,
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 88,
                                "end": 103
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 86,
                            "end": 109
                        },
                        "alternate": {
                            "kind": 2099237,
                            "block": {
                                "kind": 2084,
                                "statements": [
                                    {
                                        "kind": 2099288,
                                        "initializer": {
                                            "kind": 142,
                                            "isConst": false,
                                            "binding": {
                                                "kind": 31,
                                                "bindingList": [
                                                    {
                                                        "kind": 16525,
                                                        "binding": {
                                                            "kind": 131102,
                                                            "text": "a",
                                                            "rawText": "a",
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 1025,
                                                            "start": 137,
                                                            "end": 139
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
                                                            "start": 141,
                                                            "end": 143
                                                        },
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 137,
                                                        "end": 143
                                                    }
                                                ],
                                                "flags": 8,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 137,
                                                "end": 143
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 256,
                                            "start": 134,
                                            "end": 143
                                        },
                                        "condition": {
                                            "kind": 65715,
                                            "operator": "--",
                                            "operand": {
                                                "kind": 196712,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 154,
                                                "end": 155
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 151,
                                            "end": 155
                                        },
                                        "incrementor": {
                                            "kind": 65563,
                                            "left": {
                                                "kind": 196712,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 144,
                                                "end": 146
                                            },
                                            "operator": "<",
                                            "right": {
                                                "kind": 4261540,
                                                "text": 5,
                                                "rawText": "5",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 148,
                                                "end": 150
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 144,
                                            "end": 150
                                        },
                                        "statement": {
                                            "kind": 2099237,
                                            "block": {
                                                "kind": 2084,
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
                                                                        "kind": 131102,
                                                                        "text": "f",
                                                                        "rawText": "f",
                                                                        "flags": 0,
                                                                        "symbol": null,
                                                                        "transformFlags": 1025,
                                                                        "start": 174,
                                                                        "end": 176
                                                                    },
                                                                    "exclamation": false,
                                                                    "type": null,
                                                                    "initializer": {
                                                                        "kind": 83976,
                                                                        "typeParameters": null,
                                                                        "arrowParameters": {
                                                                            "kind": 81929,
                                                                            "elements": [],
                                                                            "type": null,
                                                                            "accessModifier": null,
                                                                            "trailingComma": false,
                                                                            "flags": 0,
                                                                            "symbol": null,
                                                                            "transformFlags": 0,
                                                                            "start": 178,
                                                                            "end": 178
                                                                        },
                                                                        "contents": {
                                                                            "kind": 196712,
                                                                            "text": "a",
                                                                            "rawText": "a",
                                                                            "flags": 0,
                                                                            "symbol": null,
                                                                            "transformFlags": 0,
                                                                            "start": 184,
                                                                            "end": 186
                                                                        },
                                                                        "flags": 1073741824,
                                                                        "symbol": null,
                                                                        "transformFlags": 0,
                                                                        "start": 178,
                                                                        "end": 186
                                                                    },
                                                                    "flags": 0,
                                                                    "symbol": null,
                                                                    "transformFlags": 0,
                                                                    "start": 174,
                                                                    "end": 186
                                                                }
                                                            ],
                                                            "flags": 8,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 174,
                                                            "end": 186
                                                        },
                                                        "flags": 32776,
                                                        "symbol": null,
                                                        "transformFlags": 769,
                                                        "start": 158,
                                                        "end": 187
                                                    },
                                                    {
                                                        "kind": 2097257,
                                                        "expression": {
                                                            "kind": 196712,
                                                            "text": "a",
                                                            "rawText": "a",
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 204,
                                                            "end": 205
                                                        },
                                                        "consequent": {
                                                            "kind": 2099237,
                                                            "block": {
                                                                "kind": 2084,
                                                                "statements": [
                                                                    {
                                                                        "kind": 2097233,
                                                                        "expression": {
                                                                            "kind": 65550,
                                                                            "left": {
                                                                                "kind": 196712,
                                                                                "text": "a",
                                                                                "rawText": "a",
                                                                                "flags": 32768,
                                                                                "symbol": null,
                                                                                "transformFlags": 0,
                                                                                "start": 208,
                                                                                "end": 226
                                                                            },
                                                                            "operator": "=",
                                                                            "right": {
                                                                                "kind": 196712,
                                                                                "text": "x",
                                                                                "rawText": "x",
                                                                                "flags": 0,
                                                                                "symbol": null,
                                                                                "transformFlags": 0,
                                                                                "start": 228,
                                                                                "end": 230
                                                                            },
                                                                            "flags": 0,
                                                                            "symbol": null,
                                                                            "transformFlags": 0,
                                                                            "start": 208,
                                                                            "end": 230
                                                                        },
                                                                        "flags": 0,
                                                                        "symbol": null,
                                                                        "transformFlags": 0,
                                                                        "start": 208,
                                                                        "end": 231
                                                                    },
                                                                    {
                                                                        "kind": 2097193,
                                                                        "label": null,
                                                                        "flags": 32768,
                                                                        "symbol": null,
                                                                        "transformFlags": 0,
                                                                        "start": 231,
                                                                        "end": 254
                                                                    }
                                                                ],
                                                                "multiline": true,
                                                                "flags": 32768,
                                                                "symbol": null,
                                                                "transformFlags": 0,
                                                                "start": 208,
                                                                "end": 254
                                                            },
                                                            "flags": 32768,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 206,
                                                            "end": 268
                                                        },
                                                        "alternate": {
                                                            "kind": 2099237,
                                                            "block": {
                                                                "kind": 2084,
                                                                "statements": [
                                                                    {
                                                                        "kind": 2097233,
                                                                        "expression": {
                                                                            "kind": 65714,
                                                                            "operator": "++",
                                                                            "operand": {
                                                                                "kind": 196712,
                                                                                "text": "y",
                                                                                "rawText": "y",
                                                                                "flags": 32768,
                                                                                "symbol": null,
                                                                                "transformFlags": 0,
                                                                                "start": 287,
                                                                                "end": 305
                                                                            },
                                                                            "flags": 0,
                                                                            "symbol": null,
                                                                            "transformFlags": 0,
                                                                            "start": 287,
                                                                            "end": 307
                                                                        },
                                                                        "flags": 0,
                                                                        "symbol": null,
                                                                        "transformFlags": 0,
                                                                        "start": 287,
                                                                        "end": 308
                                                                    }
                                                                ],
                                                                "multiline": true,
                                                                "flags": 32768,
                                                                "symbol": null,
                                                                "transformFlags": 0,
                                                                "start": 287,
                                                                "end": 308
                                                            },
                                                            "flags": 32768,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 285,
                                                            "end": 322
                                                        },
                                                        "isWebCompat": true,
                                                        "flags": 32768,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 187,
                                                        "end": 322
                                                    }
                                                ],
                                                "multiline": true,
                                                "flags": 32768,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 158,
                                                "end": 322
                                            },
                                            "flags": 32768,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 156,
                                            "end": 332
                                        },
                                        "flags": 32768,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 120,
                                        "end": 332
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
                                                "start": 332,
                                                "end": 343
                                            },
                                            "operator": "=",
                                            "right": {
                                                "kind": 4261540,
                                                "text": 5,
                                                "rawText": "5",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 345,
                                                "end": 347
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 332,
                                            "end": 347
                                        },
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 332,
                                        "end": 348
                                    }
                                ],
                                "multiline": true,
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 120,
                                "end": 348
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 118,
                            "end": 354
                        },
                        "isWebCompat": true,
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 70,
                        "end": 354
                    }
                ],
                "multiline": true,
                "flags": 32768,
                "symbol": null,
                "transformFlags": 0,
                "start": 41,
                "end": 354
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 39,
            "end": 356
        },
        {
            "kind": 2099288,
            "initializer": {
                "kind": 142,
                "isConst": false,
                "binding": {
                    "kind": 31,
                    "bindingList": [
                        {
                            "kind": 16525,
                            "binding": {
                                "kind": 131102,
                                "text": "x",
                                "rawText": "x",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 1025,
                                "start": 366,
                                "end": 368
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
                                "start": 370,
                                "end": 372
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 366,
                            "end": 372
                        },
                        {
                            "kind": 16525,
                            "binding": {
                                "kind": 131102,
                                "text": "y",
                                "rawText": "y",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 1025,
                                "start": 373,
                                "end": 375
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 4261540,
                                "text": 2,
                                "rawText": "2",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 377,
                                "end": 379
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 373,
                            "end": 379
                        }
                    ],
                    "flags": 8,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 366,
                    "end": 379
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 256,
                "start": 363,
                "end": 379
            },
            "condition": {
                "kind": 65715,
                "operator": "++",
                "operand": {
                    "kind": 196712,
                    "text": "x",
                    "rawText": "x",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 390,
                    "end": 391
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 387,
                "end": 391
            },
            "incrementor": {
                "kind": 65563,
                "left": {
                    "kind": 196712,
                    "text": "x",
                    "rawText": "x",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 380,
                    "end": 382
                },
                "operator": "<",
                "right": {
                    "kind": 196712,
                    "text": "y",
                    "rawText": "y",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 384,
                    "end": 386
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 380,
                "end": 386
            },
            "statement": {
                "kind": 2097233,
                "expression": {
                    "kind": 65590,
                    "expressions": [
                        {
                            "kind": 131322,
                            "text": "",
                            "flags": 3,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 391,
                            "end": 391
                        },
                        {
                            "kind": 65715,
                            "operator": "--",
                            "operand": {
                                "kind": 196712,
                                "text": "y",
                                "rawText": "y",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 395,
                                "end": 396
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 392,
                            "end": 396
                        }
                    ],
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 391,
                    "end": 396
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 391,
                "end": 396
            },
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 356,
            "end": 396
        },
        {
            "kind": 2099237,
            "block": {
                "kind": 2084,
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
                                        "kind": 131102,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1025,
                                        "start": 407,
                                        "end": 409
                                    },
                                    "exclamation": false,
                                    "type": null,
                                    "initializer": {
                                        "kind": 83976,
                                        "typeParameters": null,
                                        "arrowParameters": {
                                            "kind": 81929,
                                            "elements": [],
                                            "type": null,
                                            "accessModifier": null,
                                            "trailingComma": false,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 411,
                                            "end": 411
                                        },
                                        "contents": {
                                            "kind": 65563,
                                            "left": {
                                                "kind": 65714,
                                                "operator": "++",
                                                "operand": {
                                                    "kind": 196712,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 417,
                                                    "end": 419
                                                },
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 417,
                                                "end": 421
                                            },
                                            "operator": "+",
                                            "right": {
                                                "kind": 65714,
                                                "operator": "++",
                                                "operand": {
                                                    "kind": 196712,
                                                    "text": "y",
                                                    "rawText": "y",
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 423,
                                                    "end": 425
                                                },
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 423,
                                                "end": 427
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 417,
                                            "end": 427
                                        },
                                        "flags": 1073741824,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 411,
                                        "end": 427
                                    },
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 407,
                                    "end": 427
                                }
                            ],
                            "flags": 8,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 407,
                            "end": 427
                        },
                        "flags": 32776,
                        "symbol": null,
                        "transformFlags": 769,
                        "start": 399,
                        "end": 428
                    },
                    {
                        "kind": 2097257,
                        "expression": {
                            "kind": 65563,
                            "left": {
                                "kind": 196712,
                                "text": "x",
                                "rawText": "x",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 437,
                                "end": 438
                            },
                            "operator": "==",
                            "right": {
                                "kind": 4261540,
                                "text": 1,
                                "rawText": "1",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 441,
                                "end": 443
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 437,
                            "end": 443
                        },
                        "consequent": {
                            "kind": 2099237,
                            "block": {
                                "kind": 2084,
                                "statements": [
                                    {
                                        "kind": 2097212,
                                        "label": null,
                                        "flags": 32768,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 446,
                                        "end": 464
                                    }
                                ],
                                "multiline": true,
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 446,
                                "end": 464
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 444,
                            "end": 470
                        },
                        "alternate": {
                            "kind": 2099237,
                            "block": {
                                "kind": 2084,
                                "statements": [
                                    {
                                        "kind": 2099288,
                                        "initializer": {
                                            "kind": 142,
                                            "isConst": false,
                                            "binding": {
                                                "kind": 31,
                                                "bindingList": [
                                                    {
                                                        "kind": 16525,
                                                        "binding": {
                                                            "kind": 131102,
                                                            "text": "a",
                                                            "rawText": "a",
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 1025,
                                                            "start": 498,
                                                            "end": 500
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
                                                            "start": 502,
                                                            "end": 504
                                                        },
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 498,
                                                        "end": 504
                                                    }
                                                ],
                                                "flags": 8,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 498,
                                                "end": 504
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 256,
                                            "start": 495,
                                            "end": 504
                                        },
                                        "condition": {
                                            "kind": 65715,
                                            "operator": "--",
                                            "operand": {
                                                "kind": 196712,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 515,
                                                "end": 516
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 512,
                                            "end": 516
                                        },
                                        "incrementor": {
                                            "kind": 65563,
                                            "left": {
                                                "kind": 196712,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 505,
                                                "end": 507
                                            },
                                            "operator": "<",
                                            "right": {
                                                "kind": 4261540,
                                                "text": 5,
                                                "rawText": "5",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 509,
                                                "end": 511
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 505,
                                            "end": 511
                                        },
                                        "statement": {
                                            "kind": 2099237,
                                            "block": {
                                                "kind": 2084,
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
                                                                        "kind": 131102,
                                                                        "text": "f",
                                                                        "rawText": "f",
                                                                        "flags": 0,
                                                                        "symbol": null,
                                                                        "transformFlags": 1025,
                                                                        "start": 535,
                                                                        "end": 537
                                                                    },
                                                                    "exclamation": false,
                                                                    "type": null,
                                                                    "initializer": {
                                                                        "kind": 83976,
                                                                        "typeParameters": null,
                                                                        "arrowParameters": {
                                                                            "kind": 81929,
                                                                            "elements": [],
                                                                            "type": null,
                                                                            "accessModifier": null,
                                                                            "trailingComma": false,
                                                                            "flags": 0,
                                                                            "symbol": null,
                                                                            "transformFlags": 0,
                                                                            "start": 539,
                                                                            "end": 539
                                                                        },
                                                                        "contents": {
                                                                            "kind": 196712,
                                                                            "text": "a",
                                                                            "rawText": "a",
                                                                            "flags": 0,
                                                                            "symbol": null,
                                                                            "transformFlags": 0,
                                                                            "start": 545,
                                                                            "end": 547
                                                                        },
                                                                        "flags": 1073741824,
                                                                        "symbol": null,
                                                                        "transformFlags": 0,
                                                                        "start": 539,
                                                                        "end": 547
                                                                    },
                                                                    "flags": 0,
                                                                    "symbol": null,
                                                                    "transformFlags": 0,
                                                                    "start": 535,
                                                                    "end": 547
                                                                }
                                                            ],
                                                            "flags": 8,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 535,
                                                            "end": 547
                                                        },
                                                        "flags": 32776,
                                                        "symbol": null,
                                                        "transformFlags": 769,
                                                        "start": 519,
                                                        "end": 548
                                                    },
                                                    {
                                                        "kind": 2097257,
                                                        "expression": {
                                                            "kind": 196712,
                                                            "text": "a",
                                                            "rawText": "a",
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 565,
                                                            "end": 566
                                                        },
                                                        "consequent": {
                                                            "kind": 2099237,
                                                            "block": {
                                                                "kind": 2084,
                                                                "statements": [
                                                                    {
                                                                        "kind": 2097233,
                                                                        "expression": {
                                                                            "kind": 65550,
                                                                            "left": {
                                                                                "kind": 196712,
                                                                                "text": "a",
                                                                                "rawText": "a",
                                                                                "flags": 32768,
                                                                                "symbol": null,
                                                                                "transformFlags": 0,
                                                                                "start": 569,
                                                                                "end": 587
                                                                            },
                                                                            "operator": "=",
                                                                            "right": {
                                                                                "kind": 196712,
                                                                                "text": "x",
                                                                                "rawText": "x",
                                                                                "flags": 0,
                                                                                "symbol": null,
                                                                                "transformFlags": 0,
                                                                                "start": 589,
                                                                                "end": 591
                                                                            },
                                                                            "flags": 0,
                                                                            "symbol": null,
                                                                            "transformFlags": 0,
                                                                            "start": 569,
                                                                            "end": 591
                                                                        },
                                                                        "flags": 0,
                                                                        "symbol": null,
                                                                        "transformFlags": 0,
                                                                        "start": 569,
                                                                        "end": 592
                                                                    },
                                                                    {
                                                                        "kind": 2097212,
                                                                        "label": null,
                                                                        "flags": 32768,
                                                                        "symbol": null,
                                                                        "transformFlags": 0,
                                                                        "start": 592,
                                                                        "end": 618
                                                                    }
                                                                ],
                                                                "multiline": true,
                                                                "flags": 32768,
                                                                "symbol": null,
                                                                "transformFlags": 0,
                                                                "start": 569,
                                                                "end": 618
                                                            },
                                                            "flags": 32768,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 567,
                                                            "end": 632
                                                        },
                                                        "alternate": {
                                                            "kind": 2099237,
                                                            "block": {
                                                                "kind": 2084,
                                                                "statements": [
                                                                    {
                                                                        "kind": 2097233,
                                                                        "expression": {
                                                                            "kind": 65714,
                                                                            "operator": "++",
                                                                            "operand": {
                                                                                "kind": 196712,
                                                                                "text": "y",
                                                                                "rawText": "y",
                                                                                "flags": 32768,
                                                                                "symbol": null,
                                                                                "transformFlags": 0,
                                                                                "start": 651,
                                                                                "end": 669
                                                                            },
                                                                            "flags": 0,
                                                                            "symbol": null,
                                                                            "transformFlags": 0,
                                                                            "start": 651,
                                                                            "end": 671
                                                                        },
                                                                        "flags": 0,
                                                                        "symbol": null,
                                                                        "transformFlags": 0,
                                                                        "start": 651,
                                                                        "end": 672
                                                                    }
                                                                ],
                                                                "multiline": true,
                                                                "flags": 32768,
                                                                "symbol": null,
                                                                "transformFlags": 0,
                                                                "start": 651,
                                                                "end": 672
                                                            },
                                                            "flags": 32768,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 649,
                                                            "end": 686
                                                        },
                                                        "isWebCompat": true,
                                                        "flags": 32768,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 548,
                                                        "end": 686
                                                    }
                                                ],
                                                "multiline": true,
                                                "flags": 32768,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 519,
                                                "end": 686
                                            },
                                            "flags": 32768,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 517,
                                            "end": 696
                                        },
                                        "flags": 32768,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 481,
                                        "end": 696
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
                                                "start": 696,
                                                "end": 707
                                            },
                                            "operator": "=",
                                            "right": {
                                                "kind": 4261540,
                                                "text": 5,
                                                "rawText": "5",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 709,
                                                "end": 711
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 696,
                                            "end": 711
                                        },
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 696,
                                        "end": 712
                                    }
                                ],
                                "multiline": true,
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 481,
                                "end": 712
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 479,
                            "end": 718
                        },
                        "isWebCompat": true,
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 428,
                        "end": 718
                    }
                ],
                "multiline": true,
                "flags": 32768,
                "symbol": null,
                "transformFlags": 0,
                "start": 399,
                "end": 718
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 397,
            "end": 720
        },
        {
            "kind": 2097292,
            "label": {
                "kind": 196712,
                "text": "loop2",
                "rawText": "loop2",
                "flags": 32768,
                "symbol": null,
                "transformFlags": 0,
                "start": 720,
                "end": 727
            },
            "statement": {
                "kind": 2099288,
                "initializer": {
                    "kind": 142,
                    "isConst": false,
                    "binding": {
                        "kind": 31,
                        "bindingList": [
                            {
                                "kind": 16525,
                                "binding": {
                                    "kind": 131102,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 1025,
                                    "start": 737,
                                    "end": 739
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
                                    "start": 741,
                                    "end": 743
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 737,
                                "end": 743
                            },
                            {
                                "kind": 16525,
                                "binding": {
                                    "kind": 131102,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 1025,
                                    "start": 744,
                                    "end": 746
                                },
                                "exclamation": false,
                                "type": null,
                                "initializer": {
                                    "kind": 4261540,
                                    "text": 2,
                                    "rawText": "2",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 748,
                                    "end": 750
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 744,
                                "end": 750
                            }
                        ],
                        "flags": 8,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 737,
                        "end": 750
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 256,
                    "start": 734,
                    "end": 750
                },
                "condition": {
                    "kind": 65715,
                    "operator": "++",
                    "operand": {
                        "kind": 196712,
                        "text": "x",
                        "rawText": "x",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 761,
                        "end": 762
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 758,
                    "end": 762
                },
                "incrementor": {
                    "kind": 65563,
                    "left": {
                        "kind": 196712,
                        "text": "x",
                        "rawText": "x",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 751,
                        "end": 753
                    },
                    "operator": "<",
                    "right": {
                        "kind": 196712,
                        "text": "y",
                        "rawText": "y",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 755,
                        "end": 757
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 751,
                    "end": 757
                },
                "statement": {
                    "kind": 2097233,
                    "expression": {
                        "kind": 65590,
                        "expressions": [
                            {
                                "kind": 131322,
                                "text": "",
                                "flags": 3,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 762,
                                "end": 762
                            },
                            {
                                "kind": 65715,
                                "operator": "--",
                                "operand": {
                                    "kind": 196712,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 766,
                                    "end": 767
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 763,
                                "end": 767
                            }
                        ],
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 762,
                        "end": 767
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 762,
                    "end": 767
                },
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 728,
                "end": 767
            },
            "isWebCompat": true,
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 720,
            "end": 767
        },
        {
            "kind": 2099237,
            "block": {
                "kind": 2084,
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
                                        "kind": 131102,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1025,
                                        "start": 778,
                                        "end": 780
                                    },
                                    "exclamation": false,
                                    "type": null,
                                    "initializer": {
                                        "kind": 83976,
                                        "typeParameters": null,
                                        "arrowParameters": {
                                            "kind": 81929,
                                            "elements": [],
                                            "type": null,
                                            "accessModifier": null,
                                            "trailingComma": false,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 782,
                                            "end": 782
                                        },
                                        "contents": {
                                            "kind": 65563,
                                            "left": {
                                                "kind": 65714,
                                                "operator": "++",
                                                "operand": {
                                                    "kind": 196712,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 788,
                                                    "end": 790
                                                },
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 788,
                                                "end": 792
                                            },
                                            "operator": "+",
                                            "right": {
                                                "kind": 65714,
                                                "operator": "++",
                                                "operand": {
                                                    "kind": 196712,
                                                    "text": "y",
                                                    "rawText": "y",
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 794,
                                                    "end": 796
                                                },
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 794,
                                                "end": 798
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 788,
                                            "end": 798
                                        },
                                        "flags": 1073741824,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 782,
                                        "end": 798
                                    },
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 778,
                                    "end": 798
                                }
                            ],
                            "flags": 8,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 778,
                            "end": 798
                        },
                        "flags": 32776,
                        "symbol": null,
                        "transformFlags": 769,
                        "start": 770,
                        "end": 799
                    },
                    {
                        "kind": 2097257,
                        "expression": {
                            "kind": 65563,
                            "left": {
                                "kind": 196712,
                                "text": "x",
                                "rawText": "x",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 808,
                                "end": 809
                            },
                            "operator": "==",
                            "right": {
                                "kind": 4261540,
                                "text": 1,
                                "rawText": "1",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 812,
                                "end": 814
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 808,
                            "end": 814
                        },
                        "consequent": {
                            "kind": 2099237,
                            "block": {
                                "kind": 2084,
                                "statements": [
                                    {
                                        "kind": 2097193,
                                        "label": {
                                            "kind": 196712,
                                            "text": "loop2",
                                            "rawText": "loop2",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 831,
                                            "end": 837
                                        },
                                        "flags": 32768,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 817,
                                        "end": 838
                                    }
                                ],
                                "multiline": true,
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 817,
                                "end": 838
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 815,
                            "end": 844
                        },
                        "alternate": {
                            "kind": 2099237,
                            "block": {
                                "kind": 2084,
                                "statements": [
                                    {
                                        "kind": 2097292,
                                        "label": {
                                            "kind": 196712,
                                            "text": "loop1",
                                            "rawText": "loop1",
                                            "flags": 32768,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 855,
                                            "end": 869
                                        },
                                        "statement": {
                                            "kind": 2099288,
                                            "initializer": {
                                                "kind": 142,
                                                "isConst": false,
                                                "binding": {
                                                    "kind": 31,
                                                    "bindingList": [
                                                        {
                                                            "kind": 16525,
                                                            "binding": {
                                                                "kind": 131102,
                                                                "text": "a",
                                                                "rawText": "a",
                                                                "flags": 0,
                                                                "symbol": null,
                                                                "transformFlags": 1025,
                                                                "start": 887,
                                                                "end": 889
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
                                                                "start": 891,
                                                                "end": 893
                                                            },
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 887,
                                                            "end": 893
                                                        }
                                                    ],
                                                    "flags": 8,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 887,
                                                    "end": 893
                                                },
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 256,
                                                "start": 884,
                                                "end": 893
                                            },
                                            "condition": {
                                                "kind": 65715,
                                                "operator": "--",
                                                "operand": {
                                                    "kind": 196712,
                                                    "text": "a",
                                                    "rawText": "a",
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 904,
                                                    "end": 905
                                                },
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 901,
                                                "end": 905
                                            },
                                            "incrementor": {
                                                "kind": 65563,
                                                "left": {
                                                    "kind": 196712,
                                                    "text": "a",
                                                    "rawText": "a",
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 894,
                                                    "end": 896
                                                },
                                                "operator": "<",
                                                "right": {
                                                    "kind": 4261540,
                                                    "text": 5,
                                                    "rawText": "5",
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 898,
                                                    "end": 900
                                                },
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 894,
                                                "end": 900
                                            },
                                            "statement": {
                                                "kind": 2099237,
                                                "block": {
                                                    "kind": 2084,
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
                                                                            "kind": 131102,
                                                                            "text": "f",
                                                                            "rawText": "f",
                                                                            "flags": 0,
                                                                            "symbol": null,
                                                                            "transformFlags": 1025,
                                                                            "start": 924,
                                                                            "end": 926
                                                                        },
                                                                        "exclamation": false,
                                                                        "type": null,
                                                                        "initializer": {
                                                                            "kind": 83976,
                                                                            "typeParameters": null,
                                                                            "arrowParameters": {
                                                                                "kind": 81929,
                                                                                "elements": [],
                                                                                "type": null,
                                                                                "accessModifier": null,
                                                                                "trailingComma": false,
                                                                                "flags": 0,
                                                                                "symbol": null,
                                                                                "transformFlags": 0,
                                                                                "start": 928,
                                                                                "end": 928
                                                                            },
                                                                            "contents": {
                                                                                "kind": 196712,
                                                                                "text": "a",
                                                                                "rawText": "a",
                                                                                "flags": 0,
                                                                                "symbol": null,
                                                                                "transformFlags": 0,
                                                                                "start": 934,
                                                                                "end": 936
                                                                            },
                                                                            "flags": 1073741824,
                                                                            "symbol": null,
                                                                            "transformFlags": 0,
                                                                            "start": 928,
                                                                            "end": 936
                                                                        },
                                                                        "flags": 0,
                                                                        "symbol": null,
                                                                        "transformFlags": 0,
                                                                        "start": 924,
                                                                        "end": 936
                                                                    }
                                                                ],
                                                                "flags": 8,
                                                                "symbol": null,
                                                                "transformFlags": 0,
                                                                "start": 924,
                                                                "end": 936
                                                            },
                                                            "flags": 32776,
                                                            "symbol": null,
                                                            "transformFlags": 769,
                                                            "start": 908,
                                                            "end": 937
                                                        },
                                                        {
                                                            "kind": 2097257,
                                                            "expression": {
                                                                "kind": 196712,
                                                                "text": "a",
                                                                "rawText": "a",
                                                                "flags": 0,
                                                                "symbol": null,
                                                                "transformFlags": 0,
                                                                "start": 954,
                                                                "end": 955
                                                            },
                                                            "consequent": {
                                                                "kind": 2099237,
                                                                "block": {
                                                                    "kind": 2084,
                                                                    "statements": [
                                                                        {
                                                                            "kind": 2097233,
                                                                            "expression": {
                                                                                "kind": 65550,
                                                                                "left": {
                                                                                    "kind": 196712,
                                                                                    "text": "a",
                                                                                    "rawText": "a",
                                                                                    "flags": 32768,
                                                                                    "symbol": null,
                                                                                    "transformFlags": 0,
                                                                                    "start": 958,
                                                                                    "end": 976
                                                                                },
                                                                                "operator": "=",
                                                                                "right": {
                                                                                    "kind": 196712,
                                                                                    "text": "x",
                                                                                    "rawText": "x",
                                                                                    "flags": 0,
                                                                                    "symbol": null,
                                                                                    "transformFlags": 0,
                                                                                    "start": 978,
                                                                                    "end": 980
                                                                                },
                                                                                "flags": 0,
                                                                                "symbol": null,
                                                                                "transformFlags": 0,
                                                                                "start": 958,
                                                                                "end": 980
                                                                            },
                                                                            "flags": 0,
                                                                            "symbol": null,
                                                                            "transformFlags": 0,
                                                                            "start": 958,
                                                                            "end": 981
                                                                        },
                                                                        {
                                                                            "kind": 2097193,
                                                                            "label": {
                                                                                "kind": 196712,
                                                                                "text": "loop1",
                                                                                "rawText": "loop1",
                                                                                "flags": 0,
                                                                                "symbol": null,
                                                                                "transformFlags": 0,
                                                                                "start": 1003,
                                                                                "end": 1009
                                                                            },
                                                                            "flags": 32768,
                                                                            "symbol": null,
                                                                            "transformFlags": 0,
                                                                            "start": 981,
                                                                            "end": 1010
                                                                        }
                                                                    ],
                                                                    "multiline": true,
                                                                    "flags": 32768,
                                                                    "symbol": null,
                                                                    "transformFlags": 0,
                                                                    "start": 958,
                                                                    "end": 1010
                                                                },
                                                                "flags": 32768,
                                                                "symbol": null,
                                                                "transformFlags": 0,
                                                                "start": 956,
                                                                "end": 1024
                                                            },
                                                            "alternate": {
                                                                "kind": 2099237,
                                                                "block": {
                                                                    "kind": 2084,
                                                                    "statements": [
                                                                        {
                                                                            "kind": 2097233,
                                                                            "expression": {
                                                                                "kind": 65714,
                                                                                "operator": "++",
                                                                                "operand": {
                                                                                    "kind": 196712,
                                                                                    "text": "y",
                                                                                    "rawText": "y",
                                                                                    "flags": 32768,
                                                                                    "symbol": null,
                                                                                    "transformFlags": 0,
                                                                                    "start": 1043,
                                                                                    "end": 1061
                                                                                },
                                                                                "flags": 0,
                                                                                "symbol": null,
                                                                                "transformFlags": 0,
                                                                                "start": 1043,
                                                                                "end": 1063
                                                                            },
                                                                            "flags": 0,
                                                                            "symbol": null,
                                                                            "transformFlags": 0,
                                                                            "start": 1043,
                                                                            "end": 1064
                                                                        },
                                                                        {
                                                                            "kind": 2097193,
                                                                            "label": {
                                                                                "kind": 196712,
                                                                                "text": "loop2",
                                                                                "rawText": "loop2",
                                                                                "flags": 0,
                                                                                "symbol": null,
                                                                                "transformFlags": 0,
                                                                                "start": 1086,
                                                                                "end": 1092
                                                                            },
                                                                            "flags": 32768,
                                                                            "symbol": null,
                                                                            "transformFlags": 0,
                                                                            "start": 1064,
                                                                            "end": 1092
                                                                        }
                                                                    ],
                                                                    "multiline": true,
                                                                    "flags": 32768,
                                                                    "symbol": null,
                                                                    "transformFlags": 0,
                                                                    "start": 1043,
                                                                    "end": 1092
                                                                },
                                                                "flags": 32768,
                                                                "symbol": null,
                                                                "transformFlags": 0,
                                                                "start": 1041,
                                                                "end": 1106
                                                            },
                                                            "isWebCompat": true,
                                                            "flags": 32768,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 937,
                                                            "end": 1106
                                                        }
                                                    ],
                                                    "multiline": true,
                                                    "flags": 32768,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 908,
                                                    "end": 1106
                                                },
                                                "flags": 32768,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 906,
                                                "end": 1116
                                            },
                                            "flags": 32768,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 870,
                                            "end": 1116
                                        },
                                        "isWebCompat": true,
                                        "flags": 32768,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 855,
                                        "end": 1116
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
                                                "start": 1116,
                                                "end": 1127
                                            },
                                            "operator": "=",
                                            "right": {
                                                "kind": 4261540,
                                                "text": 5,
                                                "rawText": "5",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 1129,
                                                "end": 1131
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 1116,
                                            "end": 1131
                                        },
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 1116,
                                        "end": 1132
                                    }
                                ],
                                "multiline": true,
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 855,
                                "end": 1132
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 853,
                            "end": 1138
                        },
                        "isWebCompat": true,
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 799,
                        "end": 1138
                    }
                ],
                "multiline": true,
                "flags": 32768,
                "symbol": null,
                "transformFlags": 0,
                "start": 770,
                "end": 1138
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 768,
            "end": 1140
        },
        {
            "kind": 2097292,
            "label": {
                "kind": 196712,
                "text": "loop2",
                "rawText": "loop2",
                "flags": 32768,
                "symbol": null,
                "transformFlags": 0,
                "start": 1140,
                "end": 1147
            },
            "statement": {
                "kind": 2099288,
                "initializer": {
                    "kind": 142,
                    "isConst": false,
                    "binding": {
                        "kind": 31,
                        "bindingList": [
                            {
                                "kind": 16525,
                                "binding": {
                                    "kind": 131102,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 1025,
                                    "start": 1157,
                                    "end": 1159
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
                                    "start": 1161,
                                    "end": 1163
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 1157,
                                "end": 1163
                            },
                            {
                                "kind": 16525,
                                "binding": {
                                    "kind": 131102,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 1025,
                                    "start": 1164,
                                    "end": 1166
                                },
                                "exclamation": false,
                                "type": null,
                                "initializer": {
                                    "kind": 4261540,
                                    "text": 2,
                                    "rawText": "2",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 1168,
                                    "end": 1170
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 1164,
                                "end": 1170
                            }
                        ],
                        "flags": 8,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 1157,
                        "end": 1170
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 256,
                    "start": 1154,
                    "end": 1170
                },
                "condition": {
                    "kind": 65715,
                    "operator": "++",
                    "operand": {
                        "kind": 196712,
                        "text": "x",
                        "rawText": "x",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 1181,
                        "end": 1182
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 1178,
                    "end": 1182
                },
                "incrementor": {
                    "kind": 65563,
                    "left": {
                        "kind": 196712,
                        "text": "x",
                        "rawText": "x",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 1171,
                        "end": 1173
                    },
                    "operator": "<",
                    "right": {
                        "kind": 196712,
                        "text": "y",
                        "rawText": "y",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 1175,
                        "end": 1177
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 1171,
                    "end": 1177
                },
                "statement": {
                    "kind": 2097233,
                    "expression": {
                        "kind": 65590,
                        "expressions": [
                            {
                                "kind": 131322,
                                "text": "",
                                "flags": 3,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 1182,
                                "end": 1182
                            },
                            {
                                "kind": 65715,
                                "operator": "--",
                                "operand": {
                                    "kind": 196712,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 1186,
                                    "end": 1187
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 1183,
                                "end": 1187
                            }
                        ],
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 1182,
                        "end": 1187
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 1182,
                    "end": 1187
                },
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 1148,
                "end": 1187
            },
            "isWebCompat": true,
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 1140,
            "end": 1187
        },
        {
            "kind": 2099237,
            "block": {
                "kind": 2084,
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
                                        "kind": 131102,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1025,
                                        "start": 1198,
                                        "end": 1200
                                    },
                                    "exclamation": false,
                                    "type": null,
                                    "initializer": {
                                        "kind": 83976,
                                        "typeParameters": null,
                                        "arrowParameters": {
                                            "kind": 81929,
                                            "elements": [],
                                            "type": null,
                                            "accessModifier": null,
                                            "trailingComma": false,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 1202,
                                            "end": 1202
                                        },
                                        "contents": {
                                            "kind": 65563,
                                            "left": {
                                                "kind": 65714,
                                                "operator": "++",
                                                "operand": {
                                                    "kind": 196712,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 1208,
                                                    "end": 1210
                                                },
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 1208,
                                                "end": 1212
                                            },
                                            "operator": "+",
                                            "right": {
                                                "kind": 65714,
                                                "operator": "++",
                                                "operand": {
                                                    "kind": 196712,
                                                    "text": "y",
                                                    "rawText": "y",
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 1214,
                                                    "end": 1216
                                                },
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 1214,
                                                "end": 1218
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 1208,
                                            "end": 1218
                                        },
                                        "flags": 1073741824,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 1202,
                                        "end": 1218
                                    },
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 1198,
                                    "end": 1218
                                }
                            ],
                            "flags": 8,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 1198,
                            "end": 1218
                        },
                        "flags": 32776,
                        "symbol": null,
                        "transformFlags": 769,
                        "start": 1190,
                        "end": 1219
                    },
                    {
                        "kind": 2097257,
                        "expression": {
                            "kind": 65563,
                            "left": {
                                "kind": 196712,
                                "text": "x",
                                "rawText": "x",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 1228,
                                "end": 1229
                            },
                            "operator": "==",
                            "right": {
                                "kind": 4261540,
                                "text": 1,
                                "rawText": "1",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 1232,
                                "end": 1234
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 1228,
                            "end": 1234
                        },
                        "consequent": {
                            "kind": 2099237,
                            "block": {
                                "kind": 2084,
                                "statements": [
                                    {
                                        "kind": 2097212,
                                        "label": {
                                            "kind": 196712,
                                            "text": "loop2",
                                            "rawText": "loop2",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 1254,
                                            "end": 1260
                                        },
                                        "flags": 32768,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 1237,
                                        "end": 1261
                                    }
                                ],
                                "multiline": true,
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 1237,
                                "end": 1261
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 1235,
                            "end": 1267
                        },
                        "alternate": {
                            "kind": 2099237,
                            "block": {
                                "kind": 2084,
                                "statements": [
                                    {
                                        "kind": 2097292,
                                        "label": {
                                            "kind": 196712,
                                            "text": "loop1",
                                            "rawText": "loop1",
                                            "flags": 32768,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 1278,
                                            "end": 1292
                                        },
                                        "statement": {
                                            "kind": 2099288,
                                            "initializer": {
                                                "kind": 142,
                                                "isConst": false,
                                                "binding": {
                                                    "kind": 31,
                                                    "bindingList": [
                                                        {
                                                            "kind": 16525,
                                                            "binding": {
                                                                "kind": 131102,
                                                                "text": "a",
                                                                "rawText": "a",
                                                                "flags": 0,
                                                                "symbol": null,
                                                                "transformFlags": 1025,
                                                                "start": 1310,
                                                                "end": 1312
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
                                                                "start": 1314,
                                                                "end": 1316
                                                            },
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 1310,
                                                            "end": 1316
                                                        }
                                                    ],
                                                    "flags": 8,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 1310,
                                                    "end": 1316
                                                },
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 256,
                                                "start": 1307,
                                                "end": 1316
                                            },
                                            "condition": {
                                                "kind": 65715,
                                                "operator": "--",
                                                "operand": {
                                                    "kind": 196712,
                                                    "text": "a",
                                                    "rawText": "a",
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 1327,
                                                    "end": 1328
                                                },
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 1324,
                                                "end": 1328
                                            },
                                            "incrementor": {
                                                "kind": 65563,
                                                "left": {
                                                    "kind": 196712,
                                                    "text": "a",
                                                    "rawText": "a",
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 1317,
                                                    "end": 1319
                                                },
                                                "operator": "<",
                                                "right": {
                                                    "kind": 4261540,
                                                    "text": 5,
                                                    "rawText": "5",
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 1321,
                                                    "end": 1323
                                                },
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 1317,
                                                "end": 1323
                                            },
                                            "statement": {
                                                "kind": 2099237,
                                                "block": {
                                                    "kind": 2084,
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
                                                                            "kind": 131102,
                                                                            "text": "f",
                                                                            "rawText": "f",
                                                                            "flags": 0,
                                                                            "symbol": null,
                                                                            "transformFlags": 1025,
                                                                            "start": 1347,
                                                                            "end": 1349
                                                                        },
                                                                        "exclamation": false,
                                                                        "type": null,
                                                                        "initializer": {
                                                                            "kind": 83976,
                                                                            "typeParameters": null,
                                                                            "arrowParameters": {
                                                                                "kind": 81929,
                                                                                "elements": [],
                                                                                "type": null,
                                                                                "accessModifier": null,
                                                                                "trailingComma": false,
                                                                                "flags": 0,
                                                                                "symbol": null,
                                                                                "transformFlags": 0,
                                                                                "start": 1351,
                                                                                "end": 1351
                                                                            },
                                                                            "contents": {
                                                                                "kind": 196712,
                                                                                "text": "a",
                                                                                "rawText": "a",
                                                                                "flags": 0,
                                                                                "symbol": null,
                                                                                "transformFlags": 0,
                                                                                "start": 1357,
                                                                                "end": 1359
                                                                            },
                                                                            "flags": 1073741824,
                                                                            "symbol": null,
                                                                            "transformFlags": 0,
                                                                            "start": 1351,
                                                                            "end": 1359
                                                                        },
                                                                        "flags": 0,
                                                                        "symbol": null,
                                                                        "transformFlags": 0,
                                                                        "start": 1347,
                                                                        "end": 1359
                                                                    }
                                                                ],
                                                                "flags": 8,
                                                                "symbol": null,
                                                                "transformFlags": 0,
                                                                "start": 1347,
                                                                "end": 1359
                                                            },
                                                            "flags": 32776,
                                                            "symbol": null,
                                                            "transformFlags": 769,
                                                            "start": 1331,
                                                            "end": 1360
                                                        },
                                                        {
                                                            "kind": 2097257,
                                                            "expression": {
                                                                "kind": 196712,
                                                                "text": "a",
                                                                "rawText": "a",
                                                                "flags": 0,
                                                                "symbol": null,
                                                                "transformFlags": 0,
                                                                "start": 1377,
                                                                "end": 1378
                                                            },
                                                            "consequent": {
                                                                "kind": 2099237,
                                                                "block": {
                                                                    "kind": 2084,
                                                                    "statements": [
                                                                        {
                                                                            "kind": 2097233,
                                                                            "expression": {
                                                                                "kind": 65550,
                                                                                "left": {
                                                                                    "kind": 196712,
                                                                                    "text": "a",
                                                                                    "rawText": "a",
                                                                                    "flags": 32768,
                                                                                    "symbol": null,
                                                                                    "transformFlags": 0,
                                                                                    "start": 1381,
                                                                                    "end": 1399
                                                                                },
                                                                                "operator": "=",
                                                                                "right": {
                                                                                    "kind": 196712,
                                                                                    "text": "x",
                                                                                    "rawText": "x",
                                                                                    "flags": 0,
                                                                                    "symbol": null,
                                                                                    "transformFlags": 0,
                                                                                    "start": 1401,
                                                                                    "end": 1403
                                                                                },
                                                                                "flags": 0,
                                                                                "symbol": null,
                                                                                "transformFlags": 0,
                                                                                "start": 1381,
                                                                                "end": 1403
                                                                            },
                                                                            "flags": 0,
                                                                            "symbol": null,
                                                                            "transformFlags": 0,
                                                                            "start": 1381,
                                                                            "end": 1404
                                                                        },
                                                                        {
                                                                            "kind": 2097212,
                                                                            "label": {
                                                                                "kind": 196712,
                                                                                "text": "loop1",
                                                                                "rawText": "loop1",
                                                                                "flags": 0,
                                                                                "symbol": null,
                                                                                "transformFlags": 0,
                                                                                "start": 1429,
                                                                                "end": 1435
                                                                            },
                                                                            "flags": 32768,
                                                                            "symbol": null,
                                                                            "transformFlags": 0,
                                                                            "start": 1404,
                                                                            "end": 1436
                                                                        }
                                                                    ],
                                                                    "multiline": true,
                                                                    "flags": 32768,
                                                                    "symbol": null,
                                                                    "transformFlags": 0,
                                                                    "start": 1381,
                                                                    "end": 1436
                                                                },
                                                                "flags": 32768,
                                                                "symbol": null,
                                                                "transformFlags": 0,
                                                                "start": 1379,
                                                                "end": 1450
                                                            },
                                                            "alternate": {
                                                                "kind": 2099237,
                                                                "block": {
                                                                    "kind": 2084,
                                                                    "statements": [
                                                                        {
                                                                            "kind": 2097233,
                                                                            "expression": {
                                                                                "kind": 65714,
                                                                                "operator": "++",
                                                                                "operand": {
                                                                                    "kind": 196712,
                                                                                    "text": "y",
                                                                                    "rawText": "y",
                                                                                    "flags": 32768,
                                                                                    "symbol": null,
                                                                                    "transformFlags": 0,
                                                                                    "start": 1469,
                                                                                    "end": 1487
                                                                                },
                                                                                "flags": 0,
                                                                                "symbol": null,
                                                                                "transformFlags": 0,
                                                                                "start": 1469,
                                                                                "end": 1489
                                                                            },
                                                                            "flags": 0,
                                                                            "symbol": null,
                                                                            "transformFlags": 0,
                                                                            "start": 1469,
                                                                            "end": 1490
                                                                        },
                                                                        {
                                                                            "kind": 2097212,
                                                                            "label": {
                                                                                "kind": 196712,
                                                                                "text": "loop2",
                                                                                "rawText": "loop2",
                                                                                "flags": 0,
                                                                                "symbol": null,
                                                                                "transformFlags": 0,
                                                                                "start": 1515,
                                                                                "end": 1521
                                                                            },
                                                                            "flags": 32768,
                                                                            "symbol": null,
                                                                            "transformFlags": 0,
                                                                            "start": 1490,
                                                                            "end": 1521
                                                                        }
                                                                    ],
                                                                    "multiline": true,
                                                                    "flags": 32768,
                                                                    "symbol": null,
                                                                    "transformFlags": 0,
                                                                    "start": 1469,
                                                                    "end": 1521
                                                                },
                                                                "flags": 32768,
                                                                "symbol": null,
                                                                "transformFlags": 0,
                                                                "start": 1467,
                                                                "end": 1535
                                                            },
                                                            "isWebCompat": true,
                                                            "flags": 32768,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 1360,
                                                            "end": 1535
                                                        }
                                                    ],
                                                    "multiline": true,
                                                    "flags": 32768,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 1331,
                                                    "end": 1535
                                                },
                                                "flags": 32768,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 1329,
                                                "end": 1545
                                            },
                                            "flags": 32768,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 1293,
                                            "end": 1545
                                        },
                                        "isWebCompat": true,
                                        "flags": 32768,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 1278,
                                        "end": 1545
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
                                                "start": 1545,
                                                "end": 1556
                                            },
                                            "operator": "=",
                                            "right": {
                                                "kind": 4261540,
                                                "text": 5,
                                                "rawText": "5",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 1558,
                                                "end": 1560
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 1545,
                                            "end": 1560
                                        },
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 1545,
                                        "end": 1561
                                    }
                                ],
                                "multiline": true,
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 1278,
                                "end": 1561
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 1276,
                            "end": 1567
                        },
                        "isWebCompat": true,
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 1219,
                        "end": 1567
                    }
                ],
                "multiline": true,
                "flags": 32768,
                "symbol": null,
                "transformFlags": 0,
                "start": 1190,
                "end": 1567
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 1188,
            "end": 1569
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
    "end": 1569
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

