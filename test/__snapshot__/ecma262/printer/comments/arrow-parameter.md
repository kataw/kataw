# Kataw parser test case

## Input

`````js

(/*1*/)=>x;

(a/*1*/)=>x;

(/*1*/a/*2*/)=>x;

(/*1*/a/*2*/)=>x;

(/*1*/a/*2*/)=>x;

(a/*1*/, /*2*/b)=>x;

(a/*1*/,/*2*/)=>x;

(a/*1*/: /*2*/ string)=>x;

(...a/*1*/: /*2*/ string)=>x;

(...a/*1*/: /*2*/ string, [/*2*/])=>x;

(/*1*/x/*2*/,/*3*/) => {}

(

/*1*/


)=>x

`````

## Options

`````js
{ allowTypes : true }

`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [],
                    "trailingComma": false,
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 2,
                    "end": 2
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 8,
                    "end": 10
                },
                "contents": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 10,
                    "end": 11
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 0,
                "end": 11
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 12
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [
                        {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 15,
                            "end": 16
                        }
                    ],
                    "trailingComma": false,
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 15,
                    "end": 22
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 22,
                    "end": 24
                },
                "contents": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 24,
                    "end": 25
                },
                "flags": 33,
                "transformFlags": 0,
                "start": 12,
                "end": 25
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 12,
            "end": 26
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [
                        {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 29,
                            "end": 35
                        }
                    ],
                    "trailingComma": false,
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 29,
                    "end": 41
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 41,
                    "end": 43
                },
                "contents": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 43,
                    "end": 44
                },
                "flags": 33,
                "transformFlags": 0,
                "start": 26,
                "end": 44
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 26,
            "end": 45
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [
                        {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 48,
                            "end": 54
                        }
                    ],
                    "trailingComma": false,
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 48,
                    "end": 60
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 60,
                    "end": 62
                },
                "contents": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 62,
                    "end": 63
                },
                "flags": 33,
                "transformFlags": 0,
                "start": 45,
                "end": 63
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 45,
            "end": 64
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [
                        {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 67,
                            "end": 73
                        }
                    ],
                    "trailingComma": false,
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 67,
                    "end": 79
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 79,
                    "end": 81
                },
                "contents": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 81,
                    "end": 82
                },
                "flags": 33,
                "transformFlags": 0,
                "start": 64,
                "end": 82
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 64,
            "end": 83
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [
                        {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 86,
                            "end": 87
                        },
                        {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 93,
                            "end": 100
                        }
                    ],
                    "trailingComma": false,
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 86,
                    "end": 101
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 101,
                    "end": 103
                },
                "contents": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 103,
                    "end": 104
                },
                "flags": 33,
                "transformFlags": 0,
                "start": 83,
                "end": 104
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 83,
            "end": 105
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [
                        {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 108,
                            "end": 109
                        }
                    ],
                    "trailingComma": false,
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 108,
                    "end": 121
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 121,
                    "end": 123
                },
                "contents": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 123,
                    "end": 124
                },
                "flags": 33,
                "transformFlags": 0,
                "start": 105,
                "end": 124
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 105,
            "end": 125
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [
                        {
                            "kind": 281,
                            "ellipsisToken": null,
                            "left": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 128,
                                "end": 129
                            },
                            "optionalToken": null,
                            "type": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 134234347,
                                    "flags": 2097216,
                                    "transformFlags": 0,
                                    "start": 135,
                                    "end": 148
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 135,
                                "end": 148
                            },
                            "right": null,
                            "flags": 32,
                            "transformFlags": 4096,
                            "start": 125,
                            "end": 148
                        }
                    ],
                    "trailingComma": false,
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 128,
                    "end": 149
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 149,
                    "end": 151
                },
                "contents": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 151,
                    "end": 152
                },
                "flags": 33,
                "transformFlags": 0,
                "start": 125,
                "end": 152
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 125,
            "end": 153
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [
                        {
                            "kind": 281,
                            "ellipsisToken": {
                                "kind": 524302,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 156,
                                "end": 159
                            },
                            "left": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 159,
                                "end": 160
                            },
                            "optionalToken": null,
                            "type": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 134234347,
                                    "flags": 2097216,
                                    "transformFlags": 0,
                                    "start": 166,
                                    "end": 179
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 166,
                                "end": 179
                            },
                            "right": null,
                            "flags": 34,
                            "transformFlags": 4096,
                            "start": 156,
                            "end": 179
                        }
                    ],
                    "trailingComma": false,
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 156,
                    "end": 180
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 180,
                    "end": 182
                },
                "contents": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 182,
                    "end": 183
                },
                "flags": 33,
                "transformFlags": 0,
                "start": 153,
                "end": 183
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 153,
            "end": 184
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [
                        {
                            "kind": 281,
                            "ellipsisToken": {
                                "kind": 524302,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 187,
                                "end": 190
                            },
                            "left": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 190,
                                "end": 191
                            },
                            "optionalToken": null,
                            "type": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 134234347,
                                    "flags": 2097216,
                                    "transformFlags": 0,
                                    "start": 197,
                                    "end": 210
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 197,
                                "end": 210
                            },
                            "right": null,
                            "flags": 34,
                            "transformFlags": 4096,
                            "start": 187,
                            "end": 210
                        },
                        {
                            "kind": 201,
                            "elementList": {
                                "kind": 270,
                                "elements": [],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 213,
                                "end": 213
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 211,
                            "end": 219
                        }
                    ],
                    "trailingComma": false,
                    "flags": 35,
                    "transformFlags": 0,
                    "start": 187,
                    "end": 220
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 220,
                    "end": 222
                },
                "contents": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 222,
                    "end": 223
                },
                "flags": 35,
                "transformFlags": 0,
                "start": 184,
                "end": 223
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 184,
            "end": 224
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [
                        {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 227,
                            "end": 233
                        }
                    ],
                    "trailingComma": false,
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 227,
                    "end": 245
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 245,
                    "end": 248
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 250,
                        "end": 250
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 248,
                    "end": 251
                },
                "flags": 33,
                "transformFlags": 0,
                "start": 224,
                "end": 251
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 224,
            "end": 251
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [],
                    "trailingComma": false,
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 254,
                    "end": 254
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 265,
                    "end": 267
                },
                "contents": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 267,
                    "end": 268
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 251,
                "end": 268
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 251,
            "end": 268
        }
    ],
    "isModule": false,
    "source": "\n(/*1*/)=>x;\n\n(a/*1*/)=>x;\n\n(/*1*/a/*2*/)=>x;\n\n(/*1*/a/*2*/)=>x;\n\n(/*1*/a/*2*/)=>x;\n\n(a/*1*/, /*2*/b)=>x;\n\n(a/*1*/,/*2*/)=>x;\n\n(a/*1*/: /*2*/ string)=>x;\n\n(...a/*1*/: /*2*/ string)=>x;\n\n(...a/*1*/: /*2*/ string, [/*2*/])=>x;\n\n(/*1*/x/*2*/,/*3*/) => {}\n\n(\n\n/*1*/\n\n\n)=>x\n",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 269
}
```

### Printed

```javascript
(/*1*/ ) => x;
(a /*1*/) => x;

(/*1*/ a /*2*/) => x;

(/*1*/ a /*2*/) => x;

(/*1*/ a /*2*/) => x;

(a /*1*/, /*2*/ b) => x;

(a /*1*/) => x;

(a /*1*/: string) => x;

(...a /*1*/: string) => x;

(...a /*1*/: string, [/*2*/ ]) => x;

(/*1*/ x /*2*/) => {};

(/*1*/) => x;

```

### Diagnostics

```javascript
✔ No errors
```

