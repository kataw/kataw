# Kataw parser test case

## Input

`````js
var x: new () => string[];
var r = x[1];
var r2 = new r();
var r2b = r();

var x2: { new(): string }[];
var r3 = x[1];
var r4 = new r3();
var r4b = new r3();

var x3: Array<new () => string>;
var r5 = x2[1];
var r6 = new r5();
var r6b = r5();

var x;
var r = x[1];
var r2 = new r();
var r2b = r();
var x2;
var r3 = x[1];
var r4 = new r3();
var r4b = new r3();
var x3;
var r5 = x2[1];
var r6 = new r5();
var r6b = r5();
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "var x: new () => string[];\nvar r = x[1];\nvar r2 = new r();\nvar r2b = r();\n\nvar x2: { new(): string }[];\nvar r3 = x[1];\nvar r4 = new r3();\nvar r4b = new r3();\n\nvar x3: Array<new () => string>;\nvar r5 = x2[1];\nvar r6 = new r5();\nvar r6b = r5();\n\nvar x;\nvar r = x[1];\nvar r2 = new r();\nvar r2b = r();\nvar x2;\nvar r3 = x[1];\nvar r4 = new r3();\nvar r4b = new r3();\nvar x3;\nvar r5 = x2[1];\nvar r6 = new r5();\nvar r6b = r5();",
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
                                "start": 3,
                                "end": 5
                            },
                            "exclamation": false,
                            "type": {
                                "kind": 8251,
                                "isReadOnly": false,
                                "accessModifier": null,
                                "typeParameters": null,
                                "parameters": {
                                    "kind": 8367,
                                    "parameterList": [],
                                    "trailingcomma": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 12,
                                    "end": 12
                                },
                                "returnType": {
                                    "kind": 8199,
                                    "elementType": {
                                        "kind": 4202702,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 16,
                                        "end": 23
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 16,
                                    "end": 26
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 6,
                                "end": 25
                            },
                            "initializer": null,
                            "flags": 3,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 0,
                            "end": 25
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 3,
                    "end": 25
                },
                "flags": 16384,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 26
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
                                "text": "r",
                                "rawText": "r",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 30,
                                "end": 32
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 66116,
                                "member": {
                                    "kind": 196712,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 34,
                                    "end": 36
                                },
                                "expression": {
                                    "kind": 4261540,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 37,
                                    "end": 38
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 36,
                                "end": 39
                            },
                            "flags": 30,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 0,
                            "end": 39
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 30,
                    "end": 39
                },
                "flags": 16384,
                "intersects": false,
                "transformFlags": 0,
                "start": 26,
                "end": 40
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
                                "text": "r2",
                                "rawText": "r2",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 44,
                                "end": 47
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 66204,
                                "expression": {
                                    "kind": 196712,
                                    "text": "r",
                                    "rawText": "r",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 53,
                                    "end": 55
                                },
                                "typeArguments": null,
                                "argumentList": {
                                    "kind": 3,
                                    "elements": [],
                                    "trailingComma": false,
                                    "transformFlags": 0,
                                    "flags": 0,
                                    "intersects": false,
                                    "start": 56,
                                    "end": 56
                                },
                                "flags": 49,
                                "intersects": false,
                                "transformFlags": 32,
                                "start": 0,
                                "end": 57
                            },
                            "flags": 44,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 0,
                            "end": 57
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 44,
                    "end": 57
                },
                "flags": 16384,
                "intersects": false,
                "transformFlags": 0,
                "start": 40,
                "end": 58
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
                                "text": "r2b",
                                "rawText": "r2b",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 62,
                                "end": 66
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 66091,
                                "expression": {
                                    "kind": 196712,
                                    "text": "r",
                                    "rawText": "r",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 68,
                                    "end": 70
                                },
                                "typeArguments": null,
                                "argumentList": {
                                    "kind": 3,
                                    "elements": [],
                                    "trailingComma": false,
                                    "transformFlags": 0,
                                    "flags": 0,
                                    "intersects": false,
                                    "start": 72,
                                    "end": 72
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 70,
                                "end": 72
                            },
                            "flags": 62,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 0,
                            "end": 72
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 62,
                    "end": 72
                },
                "flags": 16384,
                "intersects": false,
                "transformFlags": 0,
                "start": 58,
                "end": 73
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
                                "text": "x2",
                                "rawText": "x2",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 78,
                                "end": 81
                            },
                            "exclamation": false,
                            "type": {
                                "kind": 8199,
                                "elementType": {
                                    "kind": 8422,
                                    "objectTypeMembers": {
                                        "kind": 169,
                                        "members": [
                                            {
                                                "kind": 8250,
                                                "isReadOnly": false,
                                                "accessModifier": null,
                                                "typeParameters": null,
                                                "parameters": {
                                                    "kind": 8367,
                                                    "parameterList": [],
                                                    "trailingcomma": false,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 2097152,
                                                    "start": 89,
                                                    "end": 89
                                                },
                                                "returnType": {
                                                    "kind": 4202702,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 2097152,
                                                    "start": 91,
                                                    "end": 98
                                                },
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "start": 88,
                                                "end": 98
                                            }
                                        ],
                                        "multiline": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 84,
                                        "end": 100
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 82,
                                    "end": 100
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 82,
                                "end": 103
                            },
                            "initializer": null,
                            "flags": 78,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 0,
                            "end": 102
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 78,
                    "end": 102
                },
                "flags": 16384,
                "intersects": false,
                "transformFlags": 0,
                "start": 73,
                "end": 103
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
                                "text": "r3",
                                "rawText": "r3",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 107,
                                "end": 110
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 66116,
                                "member": {
                                    "kind": 196712,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 112,
                                    "end": 114
                                },
                                "expression": {
                                    "kind": 4261540,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 115,
                                    "end": 116
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 114,
                                "end": 117
                            },
                            "flags": 107,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 0,
                            "end": 117
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 107,
                    "end": 117
                },
                "flags": 16384,
                "intersects": false,
                "transformFlags": 0,
                "start": 103,
                "end": 118
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
                                "text": "r4",
                                "rawText": "r4",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 122,
                                "end": 125
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 66204,
                                "expression": {
                                    "kind": 196712,
                                    "text": "r3",
                                    "rawText": "r3",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 131,
                                    "end": 134
                                },
                                "typeArguments": null,
                                "argumentList": {
                                    "kind": 3,
                                    "elements": [],
                                    "trailingComma": false,
                                    "transformFlags": 0,
                                    "flags": 0,
                                    "intersects": false,
                                    "start": 135,
                                    "end": 135
                                },
                                "flags": 127,
                                "intersects": false,
                                "transformFlags": 32,
                                "start": 0,
                                "end": 136
                            },
                            "flags": 122,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 0,
                            "end": 136
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 122,
                    "end": 136
                },
                "flags": 16384,
                "intersects": false,
                "transformFlags": 0,
                "start": 118,
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
                                "text": "r4b",
                                "rawText": "r4b",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 141,
                                "end": 145
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 66204,
                                "expression": {
                                    "kind": 196712,
                                    "text": "r3",
                                    "rawText": "r3",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 151,
                                    "end": 154
                                },
                                "typeArguments": null,
                                "argumentList": {
                                    "kind": 3,
                                    "elements": [],
                                    "trailingComma": false,
                                    "transformFlags": 0,
                                    "flags": 0,
                                    "intersects": false,
                                    "start": 155,
                                    "end": 155
                                },
                                "flags": 147,
                                "intersects": false,
                                "transformFlags": 32,
                                "start": 0,
                                "end": 156
                            },
                            "flags": 141,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 0,
                            "end": 156
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 141,
                    "end": 156
                },
                "flags": 16384,
                "intersects": false,
                "transformFlags": 0,
                "start": 137,
                "end": 157
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
                                "text": "x3",
                                "rawText": "x3",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 162,
                                "end": 165
                            },
                            "exclamation": false,
                            "type": {
                                "kind": 8428,
                                "typeName": {
                                    "kind": 196711,
                                    "text": "Array",
                                    "rawText": "Array",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 166,
                                    "end": 172
                                },
                                "typeArguments": {
                                    "kind": 8419,
                                    "typeArgumentsList": [
                                        {
                                            "kind": 8251,
                                            "isReadOnly": false,
                                            "accessModifier": null,
                                            "typeParameters": null,
                                            "parameters": {
                                                "kind": 8367,
                                                "parameterList": [],
                                                "trailingcomma": false,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "start": 178,
                                                "end": 178
                                            },
                                            "returnType": {
                                                "kind": 4202702,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "start": 182,
                                                "end": 189
                                            },
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 173,
                                            "end": 189
                                        }
                                    ],
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 173,
                                    "end": 189
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 166,
                                "end": 191
                            },
                            "initializer": null,
                            "flags": 162,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 0,
                            "end": 190
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 162,
                    "end": 190
                },
                "flags": 16384,
                "intersects": false,
                "transformFlags": 0,
                "start": 157,
                "end": 191
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
                                "text": "r5",
                                "rawText": "r5",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 195,
                                "end": 198
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 66116,
                                "member": {
                                    "kind": 196712,
                                    "text": "x2",
                                    "rawText": "x2",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 200,
                                    "end": 203
                                },
                                "expression": {
                                    "kind": 4261540,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 204,
                                    "end": 205
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 203,
                                "end": 206
                            },
                            "flags": 195,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 0,
                            "end": 206
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 195,
                    "end": 206
                },
                "flags": 16384,
                "intersects": false,
                "transformFlags": 0,
                "start": 191,
                "end": 207
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
                                "text": "r6",
                                "rawText": "r6",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 211,
                                "end": 214
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 66204,
                                "expression": {
                                    "kind": 196712,
                                    "text": "r5",
                                    "rawText": "r5",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 220,
                                    "end": 223
                                },
                                "typeArguments": null,
                                "argumentList": {
                                    "kind": 3,
                                    "elements": [],
                                    "trailingComma": false,
                                    "transformFlags": 0,
                                    "flags": 0,
                                    "intersects": false,
                                    "start": 224,
                                    "end": 224
                                },
                                "flags": 216,
                                "intersects": false,
                                "transformFlags": 32,
                                "start": 0,
                                "end": 225
                            },
                            "flags": 211,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 0,
                            "end": 225
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 211,
                    "end": 225
                },
                "flags": 16384,
                "intersects": false,
                "transformFlags": 0,
                "start": 207,
                "end": 226
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
                                "text": "r6b",
                                "rawText": "r6b",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 230,
                                "end": 234
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 66091,
                                "expression": {
                                    "kind": 196712,
                                    "text": "r5",
                                    "rawText": "r5",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 236,
                                    "end": 239
                                },
                                "typeArguments": null,
                                "argumentList": {
                                    "kind": 3,
                                    "elements": [],
                                    "trailingComma": false,
                                    "transformFlags": 0,
                                    "flags": 0,
                                    "intersects": false,
                                    "start": 241,
                                    "end": 241
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 239,
                                "end": 241
                            },
                            "flags": 230,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 0,
                            "end": 241
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 230,
                    "end": 241
                },
                "flags": 16384,
                "intersects": false,
                "transformFlags": 0,
                "start": 226,
                "end": 242
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
                                "start": 247,
                                "end": 249
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": null,
                            "flags": 247,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 0,
                            "end": 249
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 247,
                    "end": 249
                },
                "flags": 16384,
                "intersects": false,
                "transformFlags": 0,
                "start": 242,
                "end": 250
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
                                "text": "r",
                                "rawText": "r",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 254,
                                "end": 256
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 66116,
                                "member": {
                                    "kind": 196712,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 258,
                                    "end": 260
                                },
                                "expression": {
                                    "kind": 4261540,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 261,
                                    "end": 262
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 260,
                                "end": 263
                            },
                            "flags": 254,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 0,
                            "end": 263
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 254,
                    "end": 263
                },
                "flags": 16384,
                "intersects": false,
                "transformFlags": 0,
                "start": 250,
                "end": 264
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
                                "text": "r2",
                                "rawText": "r2",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 268,
                                "end": 271
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 66204,
                                "expression": {
                                    "kind": 196712,
                                    "text": "r",
                                    "rawText": "r",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 277,
                                    "end": 279
                                },
                                "typeArguments": null,
                                "argumentList": {
                                    "kind": 3,
                                    "elements": [],
                                    "trailingComma": false,
                                    "transformFlags": 0,
                                    "flags": 0,
                                    "intersects": false,
                                    "start": 280,
                                    "end": 280
                                },
                                "flags": 273,
                                "intersects": false,
                                "transformFlags": 32,
                                "start": 0,
                                "end": 281
                            },
                            "flags": 268,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 0,
                            "end": 281
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 268,
                    "end": 281
                },
                "flags": 16384,
                "intersects": false,
                "transformFlags": 0,
                "start": 264,
                "end": 282
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
                                "text": "r2b",
                                "rawText": "r2b",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 286,
                                "end": 290
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 66091,
                                "expression": {
                                    "kind": 196712,
                                    "text": "r",
                                    "rawText": "r",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 292,
                                    "end": 294
                                },
                                "typeArguments": null,
                                "argumentList": {
                                    "kind": 3,
                                    "elements": [],
                                    "trailingComma": false,
                                    "transformFlags": 0,
                                    "flags": 0,
                                    "intersects": false,
                                    "start": 296,
                                    "end": 296
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 294,
                                "end": 296
                            },
                            "flags": 286,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 0,
                            "end": 296
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 286,
                    "end": 296
                },
                "flags": 16384,
                "intersects": false,
                "transformFlags": 0,
                "start": 282,
                "end": 297
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
                                "text": "x2",
                                "rawText": "x2",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 301,
                                "end": 304
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": null,
                            "flags": 301,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 0,
                            "end": 304
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 301,
                    "end": 304
                },
                "flags": 16384,
                "intersects": false,
                "transformFlags": 0,
                "start": 297,
                "end": 305
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
                                "text": "r3",
                                "rawText": "r3",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 309,
                                "end": 312
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 66116,
                                "member": {
                                    "kind": 196712,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 314,
                                    "end": 316
                                },
                                "expression": {
                                    "kind": 4261540,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 317,
                                    "end": 318
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 316,
                                "end": 319
                            },
                            "flags": 309,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 0,
                            "end": 319
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 309,
                    "end": 319
                },
                "flags": 16384,
                "intersects": false,
                "transformFlags": 0,
                "start": 305,
                "end": 320
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
                                "text": "r4",
                                "rawText": "r4",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 324,
                                "end": 327
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 66204,
                                "expression": {
                                    "kind": 196712,
                                    "text": "r3",
                                    "rawText": "r3",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 333,
                                    "end": 336
                                },
                                "typeArguments": null,
                                "argumentList": {
                                    "kind": 3,
                                    "elements": [],
                                    "trailingComma": false,
                                    "transformFlags": 0,
                                    "flags": 0,
                                    "intersects": false,
                                    "start": 337,
                                    "end": 337
                                },
                                "flags": 329,
                                "intersects": false,
                                "transformFlags": 32,
                                "start": 0,
                                "end": 338
                            },
                            "flags": 324,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 0,
                            "end": 338
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 324,
                    "end": 338
                },
                "flags": 16384,
                "intersects": false,
                "transformFlags": 0,
                "start": 320,
                "end": 339
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
                                "text": "r4b",
                                "rawText": "r4b",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 343,
                                "end": 347
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 66204,
                                "expression": {
                                    "kind": 196712,
                                    "text": "r3",
                                    "rawText": "r3",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 353,
                                    "end": 356
                                },
                                "typeArguments": null,
                                "argumentList": {
                                    "kind": 3,
                                    "elements": [],
                                    "trailingComma": false,
                                    "transformFlags": 0,
                                    "flags": 0,
                                    "intersects": false,
                                    "start": 357,
                                    "end": 357
                                },
                                "flags": 349,
                                "intersects": false,
                                "transformFlags": 32,
                                "start": 0,
                                "end": 358
                            },
                            "flags": 343,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 0,
                            "end": 358
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 343,
                    "end": 358
                },
                "flags": 16384,
                "intersects": false,
                "transformFlags": 0,
                "start": 339,
                "end": 359
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
                                "text": "x3",
                                "rawText": "x3",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 363,
                                "end": 366
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": null,
                            "flags": 363,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 0,
                            "end": 366
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 363,
                    "end": 366
                },
                "flags": 16384,
                "intersects": false,
                "transformFlags": 0,
                "start": 359,
                "end": 367
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
                                "text": "r5",
                                "rawText": "r5",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 371,
                                "end": 374
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 66116,
                                "member": {
                                    "kind": 196712,
                                    "text": "x2",
                                    "rawText": "x2",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 376,
                                    "end": 379
                                },
                                "expression": {
                                    "kind": 4261540,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 380,
                                    "end": 381
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 379,
                                "end": 382
                            },
                            "flags": 371,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 0,
                            "end": 382
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 371,
                    "end": 382
                },
                "flags": 16384,
                "intersects": false,
                "transformFlags": 0,
                "start": 367,
                "end": 383
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
                                "text": "r6",
                                "rawText": "r6",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 387,
                                "end": 390
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 66204,
                                "expression": {
                                    "kind": 196712,
                                    "text": "r5",
                                    "rawText": "r5",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 396,
                                    "end": 399
                                },
                                "typeArguments": null,
                                "argumentList": {
                                    "kind": 3,
                                    "elements": [],
                                    "trailingComma": false,
                                    "transformFlags": 0,
                                    "flags": 0,
                                    "intersects": false,
                                    "start": 400,
                                    "end": 400
                                },
                                "flags": 392,
                                "intersects": false,
                                "transformFlags": 32,
                                "start": 0,
                                "end": 401
                            },
                            "flags": 387,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 0,
                            "end": 401
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 387,
                    "end": 401
                },
                "flags": 16384,
                "intersects": false,
                "transformFlags": 0,
                "start": 383,
                "end": 402
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
                                "text": "r6b",
                                "rawText": "r6b",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 406,
                                "end": 410
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 66091,
                                "expression": {
                                    "kind": 196712,
                                    "text": "r5",
                                    "rawText": "r5",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 412,
                                    "end": 415
                                },
                                "typeArguments": null,
                                "argumentList": {
                                    "kind": 3,
                                    "elements": [],
                                    "trailingComma": false,
                                    "transformFlags": 0,
                                    "flags": 0,
                                    "intersects": false,
                                    "start": 417,
                                    "end": 417
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 415,
                                "end": 417
                            },
                            "flags": 406,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 0,
                            "end": 417
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 406,
                    "end": 417
                },
                "flags": 16384,
                "intersects": false,
                "transformFlags": 0,
                "start": 402,
                "end": 418
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 418
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 418
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

