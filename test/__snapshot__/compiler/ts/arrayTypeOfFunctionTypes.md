# Kataw parser test case

## Input

`````js
var x: () => string[];
var r = x[1];
var r2 = r();
var r2b = new r();

var x2: { (): string }[];
var r3 = x2[1];
var r4 = r3();
var r4b = new r3();

var x3: Array<() => string>;
var r5 = x2[1];
var r6 = r5();
var r6b = new r5();

var x;
var r = x[1];
var r2 = r();
var r2b = new r();
var x2;
var r3 = x2[1];
var r4 = r3();
var r4b = new r3();
var x3;
var r5 = x2[1];
var r6 = r5();
var r6b = new r5();
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "var x: () => string[];\nvar r = x[1];\nvar r2 = r();\nvar r2b = new r();\n\nvar x2: { (): string }[];\nvar r3 = x2[1];\nvar r4 = r3();\nvar r4b = new r3();\n\nvar x3: Array<() => string>;\nvar r5 = x2[1];\nvar r6 = r5();\nvar r6b = new r5();\n\nvar x;\nvar r = x[1];\nvar r2 = r();\nvar r2b = new r();\nvar x2;\nvar r3 = x2[1];\nvar r4 = r3();\nvar r4b = new r3();\nvar x3;\nvar r5 = x2[1];\nvar r6 = r5();\nvar r6b = new r5();",
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
                            "kind": 8287,
                            "typeParameters": null,
                            "parameters": {
                                "kind": 134226095,
                                "parameterList": [],
                                "trailingcomma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 8,
                                "end": 8
                            },
                            "returnType": {
                                "kind": 8199,
                                "elementType": {
                                    "kind": 4202702,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 2097152,
                                    "start": 12,
                                    "end": 19
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 12,
                                "end": 22
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 6,
                            "end": 21
                        },
                        "initializer": null,
                        "flags": 3,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 21
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 3,
                "end": 21
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 22
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
                            "text": "r",
                            "rawText": "r",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 26,
                            "end": 28
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 67174980,
                            "member": {
                                "kind": 196712,
                                "text": "x",
                                "rawText": "x",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 30,
                                "end": 32
                            },
                            "expression": {
                                "kind": 4261540,
                                "text": 1,
                                "rawText": "1",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 33,
                                "end": 34
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 32,
                            "end": 35
                        },
                        "flags": 26,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 35
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 26,
                "end": 35
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 22,
            "end": 36
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
                            "text": "r2",
                            "rawText": "r2",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 40,
                            "end": 43
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 1073807915,
                            "expression": {
                                "kind": 196712,
                                "text": "r",
                                "rawText": "r",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 45,
                                "end": 47
                            },
                            "typeArguments": null,
                            "argumentList": {
                                "kind": 3,
                                "elements": [],
                                "trailingComma": false,
                                "transformFlags": 0,
                                "flags": 0,
                                "symbol": null,
                                "start": 49,
                                "end": 49
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 47,
                            "end": 49
                        },
                        "flags": 40,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 49
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 40,
                "end": 49
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 36,
            "end": 50
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
                            "text": "r2b",
                            "rawText": "r2b",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 54,
                            "end": 58
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
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 64,
                                "end": 66
                            },
                            "typeArguments": null,
                            "argumentList": {
                                "kind": 3,
                                "elements": [],
                                "trailingComma": false,
                                "transformFlags": 0,
                                "flags": 0,
                                "symbol": null,
                                "start": 67,
                                "end": 67
                            },
                            "flags": 60,
                            "symbol": null,
                            "transformFlags": 32,
                            "start": 0,
                            "end": 68
                        },
                        "flags": 54,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 68
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 54,
                "end": 68
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 50,
            "end": 69
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
                            "text": "x2",
                            "rawText": "x2",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 74,
                            "end": 77
                        },
                        "exclamation": false,
                        "type": {
                            "kind": 8199,
                            "elementType": {
                                "kind": 536879334,
                                "objectTypeMembers": {
                                    "kind": 536871081,
                                    "members": [
                                        {
                                            "kind": 8236,
                                            "isReadOnly": false,
                                            "accessModifier": null,
                                            "typeParameters": null,
                                            "parameters": {
                                                "kind": 134226095,
                                                "parameterList": [],
                                                "trailingcomma": false,
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 2097152,
                                                "start": 82,
                                                "end": 82
                                            },
                                            "returnType": {
                                                "kind": 4202702,
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 2097152,
                                                "start": 84,
                                                "end": 91
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 80,
                                            "end": 91
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 2097152,
                                    "start": 80,
                                    "end": 93
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 78,
                                "end": 93
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 78,
                            "end": 96
                        },
                        "initializer": null,
                        "flags": 74,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 95
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 74,
                "end": 95
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 69,
            "end": 96
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
                            "text": "r3",
                            "rawText": "r3",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 100,
                            "end": 103
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 67174980,
                            "member": {
                                "kind": 196712,
                                "text": "x2",
                                "rawText": "x2",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 105,
                                "end": 108
                            },
                            "expression": {
                                "kind": 4261540,
                                "text": 1,
                                "rawText": "1",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 109,
                                "end": 110
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 108,
                            "end": 111
                        },
                        "flags": 100,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 111
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 100,
                "end": 111
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 96,
            "end": 112
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
                            "text": "r4",
                            "rawText": "r4",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 116,
                            "end": 119
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 1073807915,
                            "expression": {
                                "kind": 196712,
                                "text": "r3",
                                "rawText": "r3",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 121,
                                "end": 124
                            },
                            "typeArguments": null,
                            "argumentList": {
                                "kind": 3,
                                "elements": [],
                                "trailingComma": false,
                                "transformFlags": 0,
                                "flags": 0,
                                "symbol": null,
                                "start": 126,
                                "end": 126
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 124,
                            "end": 126
                        },
                        "flags": 116,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 126
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 116,
                "end": 126
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 112,
            "end": 127
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
                            "text": "r4b",
                            "rawText": "r4b",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 131,
                            "end": 135
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
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 141,
                                "end": 144
                            },
                            "typeArguments": null,
                            "argumentList": {
                                "kind": 3,
                                "elements": [],
                                "trailingComma": false,
                                "transformFlags": 0,
                                "flags": 0,
                                "symbol": null,
                                "start": 145,
                                "end": 145
                            },
                            "flags": 137,
                            "symbol": null,
                            "transformFlags": 32,
                            "start": 0,
                            "end": 146
                        },
                        "flags": 131,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 146
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 131,
                "end": 146
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 127,
            "end": 147
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
                            "text": "x3",
                            "rawText": "x3",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 152,
                            "end": 155
                        },
                        "exclamation": false,
                        "type": {
                            "kind": 134226156,
                            "typeName": {
                                "kind": 196711,
                                "text": "Array",
                                "rawText": "Array",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 156,
                                "end": 162
                            },
                            "typeArguments": {
                                "kind": 8419,
                                "typeArgumentsList": [
                                    {
                                        "kind": 8287,
                                        "typeParameters": null,
                                        "parameters": {
                                            "kind": 134226095,
                                            "parameterList": [],
                                            "trailingcomma": false,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 164,
                                            "end": 164
                                        },
                                        "returnType": {
                                            "kind": 4202702,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2097152,
                                            "start": 168,
                                            "end": 175
                                        },
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 2097152,
                                        "start": 163,
                                        "end": 175
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 163,
                                "end": 175
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 156,
                            "end": 177
                        },
                        "initializer": null,
                        "flags": 152,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 176
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 152,
                "end": 176
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 147,
            "end": 177
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
                            "text": "r5",
                            "rawText": "r5",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 181,
                            "end": 184
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 67174980,
                            "member": {
                                "kind": 196712,
                                "text": "x2",
                                "rawText": "x2",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 186,
                                "end": 189
                            },
                            "expression": {
                                "kind": 4261540,
                                "text": 1,
                                "rawText": "1",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 190,
                                "end": 191
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 189,
                            "end": 192
                        },
                        "flags": 181,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 192
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 181,
                "end": 192
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 177,
            "end": 193
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
                            "text": "r6",
                            "rawText": "r6",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 197,
                            "end": 200
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 1073807915,
                            "expression": {
                                "kind": 196712,
                                "text": "r5",
                                "rawText": "r5",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 202,
                                "end": 205
                            },
                            "typeArguments": null,
                            "argumentList": {
                                "kind": 3,
                                "elements": [],
                                "trailingComma": false,
                                "transformFlags": 0,
                                "flags": 0,
                                "symbol": null,
                                "start": 207,
                                "end": 207
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 205,
                            "end": 207
                        },
                        "flags": 197,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 207
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 197,
                "end": 207
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 193,
            "end": 208
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
                            "text": "r6b",
                            "rawText": "r6b",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 212,
                            "end": 216
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
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 222,
                                "end": 225
                            },
                            "typeArguments": null,
                            "argumentList": {
                                "kind": 3,
                                "elements": [],
                                "trailingComma": false,
                                "transformFlags": 0,
                                "flags": 0,
                                "symbol": null,
                                "start": 226,
                                "end": 226
                            },
                            "flags": 218,
                            "symbol": null,
                            "transformFlags": 32,
                            "start": 0,
                            "end": 227
                        },
                        "flags": 212,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 227
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 212,
                "end": 227
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 208,
            "end": 228
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
                            "start": 233,
                            "end": 235
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": null,
                        "flags": 233,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 235
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 233,
                "end": 235
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 228,
            "end": 236
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
                            "text": "r",
                            "rawText": "r",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 240,
                            "end": 242
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 67174980,
                            "member": {
                                "kind": 196712,
                                "text": "x",
                                "rawText": "x",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 244,
                                "end": 246
                            },
                            "expression": {
                                "kind": 4261540,
                                "text": 1,
                                "rawText": "1",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 247,
                                "end": 248
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 246,
                            "end": 249
                        },
                        "flags": 240,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 249
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 240,
                "end": 249
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 236,
            "end": 250
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
                            "text": "r2",
                            "rawText": "r2",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 254,
                            "end": 257
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 1073807915,
                            "expression": {
                                "kind": 196712,
                                "text": "r",
                                "rawText": "r",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 259,
                                "end": 261
                            },
                            "typeArguments": null,
                            "argumentList": {
                                "kind": 3,
                                "elements": [],
                                "trailingComma": false,
                                "transformFlags": 0,
                                "flags": 0,
                                "symbol": null,
                                "start": 263,
                                "end": 263
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 261,
                            "end": 263
                        },
                        "flags": 254,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 263
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 254,
                "end": 263
            },
            "flags": 32768,
            "symbol": null,
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
                        "kind": 16627,
                        "binding": {
                            "kind": 131102,
                            "text": "r2b",
                            "rawText": "r2b",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 268,
                            "end": 272
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
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 278,
                                "end": 280
                            },
                            "typeArguments": null,
                            "argumentList": {
                                "kind": 3,
                                "elements": [],
                                "trailingComma": false,
                                "transformFlags": 0,
                                "flags": 0,
                                "symbol": null,
                                "start": 281,
                                "end": 281
                            },
                            "flags": 274,
                            "symbol": null,
                            "transformFlags": 32,
                            "start": 0,
                            "end": 282
                        },
                        "flags": 268,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 282
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 268,
                "end": 282
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 264,
            "end": 283
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
                            "text": "x2",
                            "rawText": "x2",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 287,
                            "end": 290
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": null,
                        "flags": 287,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 290
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 287,
                "end": 290
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 283,
            "end": 291
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
                            "text": "r3",
                            "rawText": "r3",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 295,
                            "end": 298
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 67174980,
                            "member": {
                                "kind": 196712,
                                "text": "x2",
                                "rawText": "x2",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 300,
                                "end": 303
                            },
                            "expression": {
                                "kind": 4261540,
                                "text": 1,
                                "rawText": "1",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 304,
                                "end": 305
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 303,
                            "end": 306
                        },
                        "flags": 295,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 306
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 295,
                "end": 306
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 291,
            "end": 307
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
                            "text": "r4",
                            "rawText": "r4",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 311,
                            "end": 314
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 1073807915,
                            "expression": {
                                "kind": 196712,
                                "text": "r3",
                                "rawText": "r3",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 316,
                                "end": 319
                            },
                            "typeArguments": null,
                            "argumentList": {
                                "kind": 3,
                                "elements": [],
                                "trailingComma": false,
                                "transformFlags": 0,
                                "flags": 0,
                                "symbol": null,
                                "start": 321,
                                "end": 321
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 319,
                            "end": 321
                        },
                        "flags": 311,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 321
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 311,
                "end": 321
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 307,
            "end": 322
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
                            "text": "r4b",
                            "rawText": "r4b",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 326,
                            "end": 330
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
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 336,
                                "end": 339
                            },
                            "typeArguments": null,
                            "argumentList": {
                                "kind": 3,
                                "elements": [],
                                "trailingComma": false,
                                "transformFlags": 0,
                                "flags": 0,
                                "symbol": null,
                                "start": 340,
                                "end": 340
                            },
                            "flags": 332,
                            "symbol": null,
                            "transformFlags": 32,
                            "start": 0,
                            "end": 341
                        },
                        "flags": 326,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 341
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 326,
                "end": 341
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 322,
            "end": 342
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
                            "text": "x3",
                            "rawText": "x3",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 346,
                            "end": 349
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": null,
                        "flags": 346,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 349
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 346,
                "end": 349
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 342,
            "end": 350
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
                            "text": "r5",
                            "rawText": "r5",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 354,
                            "end": 357
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 67174980,
                            "member": {
                                "kind": 196712,
                                "text": "x2",
                                "rawText": "x2",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 359,
                                "end": 362
                            },
                            "expression": {
                                "kind": 4261540,
                                "text": 1,
                                "rawText": "1",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 363,
                                "end": 364
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 362,
                            "end": 365
                        },
                        "flags": 354,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 365
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 354,
                "end": 365
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 350,
            "end": 366
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
                            "text": "r6",
                            "rawText": "r6",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 370,
                            "end": 373
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 1073807915,
                            "expression": {
                                "kind": 196712,
                                "text": "r5",
                                "rawText": "r5",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 375,
                                "end": 378
                            },
                            "typeArguments": null,
                            "argumentList": {
                                "kind": 3,
                                "elements": [],
                                "trailingComma": false,
                                "transformFlags": 0,
                                "flags": 0,
                                "symbol": null,
                                "start": 380,
                                "end": 380
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 378,
                            "end": 380
                        },
                        "flags": 370,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 380
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 370,
                "end": 380
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 366,
            "end": 381
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
                            "text": "r6b",
                            "rawText": "r6b",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 385,
                            "end": 389
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
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 395,
                                "end": 398
                            },
                            "typeArguments": null,
                            "argumentList": {
                                "kind": 3,
                                "elements": [],
                                "trailingComma": false,
                                "transformFlags": 0,
                                "flags": 0,
                                "symbol": null,
                                "start": 399,
                                "end": 399
                            },
                            "flags": 391,
                            "symbol": null,
                            "transformFlags": 32,
                            "start": 0,
                            "end": 400
                        },
                        "flags": 385,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 400
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 385,
                "end": 400
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 381,
            "end": 401
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
    "end": 401
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

