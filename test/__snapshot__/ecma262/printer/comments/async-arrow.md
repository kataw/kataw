# Kataw parser test case

## Input

`````js

async (/*1*/)=>x;

async (a/*1*/)=>x;

async (/*1*/a/*2*/)=>x;

async (/*1*/a/*2*/)=>x;

async (/*1*/a/*2*/)=>x;

async (a/*1*/, /*2*/b)=>x;

async (a/*1*/,/*2*/)=>x;

async (a/*1*/: /*2*/ string)=>x;

async (...a/*1*/: /*2*/ string)=>x;

async (...a/*1*/: /*2*/ string, [/*2*/])=>x;

 async /* 1 */ (x/* 2 */ ?/* 3 */ :/* 4 */ string/* 5 */ )/* 6 */ :/* 7 */  string /* 8 */ => /* 9 */  {}


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
                "asyncKeyword": {
                    "kind": 82031,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 6
                },
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 8,
                    "end": 8
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 14,
                    "end": 16
                },
                "contents": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 16,
                    "end": 17
                },
                "flags": 288,
                "transformFlags": 0,
                "start": 0,
                "end": 17
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 18
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": {
                    "kind": 82031,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 18,
                    "end": 25
                },
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
                            "start": 27,
                            "end": 28
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 27,
                    "end": 34
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 34,
                    "end": 36
                },
                "contents": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 36,
                    "end": 37
                },
                "flags": 288,
                "transformFlags": 0,
                "start": 18,
                "end": 37
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 18,
            "end": 38
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": {
                    "kind": 82031,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 38,
                    "end": 45
                },
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
                            "start": 47,
                            "end": 53
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 47,
                    "end": 59
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 59,
                    "end": 61
                },
                "contents": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 61,
                    "end": 62
                },
                "flags": 288,
                "transformFlags": 0,
                "start": 38,
                "end": 62
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 38,
            "end": 63
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": {
                    "kind": 82031,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 63,
                    "end": 70
                },
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
                            "start": 72,
                            "end": 78
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 72,
                    "end": 84
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 84,
                    "end": 86
                },
                "contents": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 86,
                    "end": 87
                },
                "flags": 288,
                "transformFlags": 0,
                "start": 63,
                "end": 87
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 63,
            "end": 88
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": {
                    "kind": 82031,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 88,
                    "end": 95
                },
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
                            "start": 97,
                            "end": 103
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 97,
                    "end": 109
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 109,
                    "end": 111
                },
                "contents": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 111,
                    "end": 112
                },
                "flags": 288,
                "transformFlags": 0,
                "start": 88,
                "end": 112
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 88,
            "end": 113
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": {
                    "kind": 82031,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 113,
                    "end": 120
                },
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
                            "start": 122,
                            "end": 123
                        },
                        {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 129,
                            "end": 136
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 122,
                    "end": 137
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 137,
                    "end": 139
                },
                "contents": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 139,
                    "end": 140
                },
                "flags": 288,
                "transformFlags": 0,
                "start": 113,
                "end": 140
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 113,
            "end": 141
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": {
                    "kind": 82031,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 141,
                    "end": 148
                },
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
                            "start": 150,
                            "end": 151
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 150,
                    "end": 163
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 163,
                    "end": 165
                },
                "contents": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 165,
                    "end": 166
                },
                "flags": 288,
                "transformFlags": 0,
                "start": 141,
                "end": 166
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 141,
            "end": 167
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": {
                    "kind": 82031,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 167,
                    "end": 174
                },
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
                                "start": 176,
                                "end": 177
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
                                    "start": 183,
                                    "end": 196
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 183,
                                "end": 196
                            },
                            "right": null,
                            "flags": 32,
                            "transformFlags": 4096,
                            "start": 176,
                            "end": 196
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 176,
                    "end": 197
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 197,
                    "end": 199
                },
                "contents": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 199,
                    "end": 200
                },
                "flags": 288,
                "transformFlags": 0,
                "start": 167,
                "end": 200
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 167,
            "end": 201
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": {
                    "kind": 82031,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 201,
                    "end": 208
                },
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
                                "start": 210,
                                "end": 213
                            },
                            "left": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 213,
                                "end": 214
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
                                    "start": 220,
                                    "end": 233
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 220,
                                "end": 233
                            },
                            "right": null,
                            "flags": 32,
                            "transformFlags": 4096,
                            "start": 210,
                            "end": 233
                        }
                    ],
                    "trailingComma": false,
                    "flags": 34,
                    "transformFlags": 0,
                    "start": 210,
                    "end": 234
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 234,
                    "end": 236
                },
                "contents": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 236,
                    "end": 237
                },
                "flags": 290,
                "transformFlags": 0,
                "start": 201,
                "end": 237
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 201,
            "end": 238
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": {
                    "kind": 82031,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 238,
                    "end": 245
                },
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
                                "start": 247,
                                "end": 250
                            },
                            "left": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 250,
                                "end": 251
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
                                    "start": 257,
                                    "end": 270
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 257,
                                "end": 270
                            },
                            "right": null,
                            "flags": 32,
                            "transformFlags": 4096,
                            "start": 247,
                            "end": 270
                        },
                        {
                            "kind": 201,
                            "elementList": {
                                "kind": 270,
                                "elements": [],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 273,
                                "end": 273
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 271,
                            "end": 279
                        }
                    ],
                    "trailingComma": false,
                    "flags": 34,
                    "transformFlags": 0,
                    "start": 247,
                    "end": 280
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 280,
                    "end": 282
                },
                "contents": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 282,
                    "end": 283
                },
                "flags": 290,
                "transformFlags": 0,
                "start": 238,
                "end": 283
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 238,
            "end": 284
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": {
                    "kind": 82031,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 284,
                    "end": 292
                },
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [
                        {
                            "kind": 281,
                            "ellipsisToken": null,
                            "left": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 302,
                                "end": 303
                            },
                            "optionalToken": {
                                "kind": 134217750,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 303,
                                "end": 312
                            },
                            "type": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 134234347,
                                    "flags": 2097216,
                                    "transformFlags": 0,
                                    "start": 321,
                                    "end": 335
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 321,
                                "end": 335
                            },
                            "right": null,
                            "flags": 32,
                            "transformFlags": 4096,
                            "start": 302,
                            "end": 335
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 302,
                    "end": 368
                },
                "returnType": {
                    "kind": 139,
                    "bitwiseOrToken": null,
                    "bitwiseAndToken": null,
                    "type": {
                        "kind": 134234347,
                        "flags": 2097216,
                        "transformFlags": 0,
                        "start": 353,
                        "end": 368
                    },
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 353,
                    "end": 368
                },
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 368,
                    "end": 379
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 390,
                        "end": 390
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 379,
                    "end": 391
                },
                "flags": 288,
                "transformFlags": 0,
                "start": 284,
                "end": 391
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 284,
            "end": 391
        }
    ],
    "isModule": false,
    "source": "\nasync (/*1*/)=>x;\n\nasync (a/*1*/)=>x;\n\nasync (/*1*/a/*2*/)=>x;\n\nasync (/*1*/a/*2*/)=>x;\n\nasync (/*1*/a/*2*/)=>x;\n\nasync (a/*1*/, /*2*/b)=>x;\n\nasync (a/*1*/,/*2*/)=>x;\n\nasync (a/*1*/: /*2*/ string)=>x;\n\nasync (...a/*1*/: /*2*/ string)=>x;\n\nasync (...a/*1*/: /*2*/ string, [/*2*/])=>x;\n\n async /* 1 */ (x/* 2 */ ?/* 3 */ :/* 4 */ string/* 5 */ )/* 6 */ :/* 7 */  string /* 8 */ => /* 9 */  {}\n\n",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 393
}
```

### Printed

```javascript
async (/*1*/ ) => x;
async (a /*1*/) => x;

async (/*1*/ a /*2*/) => x;

async (/*1*/ a /*2*/) => x;

async (/*1*/ a /*2*/) => x;

async (a /*1*/, /*2*/ b) => x;

async (a /*1*/) => x;

async (a /*1*/:/*2*/  string) => x;

async (...a /*1*/:/*2*/  string) => x;

async (...a /*1*/:/*2*/  string, [/*2*/ ]) => x;

async /* 1 */ (x /* 2 */? /* 3 */ :/* 3 */  string /* 5 */) =>/* 9 */  {};

```

### Diagnostics

```javascript
✔ No errors
```

