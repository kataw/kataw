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
                    "flags": 0,
                    "start": 2,
                    "end": 2
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 8,
                    "end": 10
                },
                "contents": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 10,
                    "end": 11
                },
                "flags": 32,
                "start": 0,
                "end": 11
            },
            "flags": 16,
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
                            "start": 15,
                            "end": 16
                        }
                    ],
                    "trailingComma": false,
                    "flags": 0,
                    "start": 15,
                    "end": 22
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 22,
                    "end": 24
                },
                "contents": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 24,
                    "end": 25
                },
                "flags": 32,
                "start": 12,
                "end": 25
            },
            "flags": 16,
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
                            "start": 29,
                            "end": 35
                        }
                    ],
                    "trailingComma": false,
                    "flags": 0,
                    "start": 29,
                    "end": 41
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 41,
                    "end": 43
                },
                "contents": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 43,
                    "end": 44
                },
                "flags": 32,
                "start": 26,
                "end": 44
            },
            "flags": 16,
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
                            "start": 48,
                            "end": 54
                        }
                    ],
                    "trailingComma": false,
                    "flags": 0,
                    "start": 48,
                    "end": 60
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 60,
                    "end": 62
                },
                "contents": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 62,
                    "end": 63
                },
                "flags": 32,
                "start": 45,
                "end": 63
            },
            "flags": 16,
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
                            "start": 67,
                            "end": 73
                        }
                    ],
                    "trailingComma": false,
                    "flags": 0,
                    "start": 67,
                    "end": 79
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 79,
                    "end": 81
                },
                "contents": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 81,
                    "end": 82
                },
                "flags": 32,
                "start": 64,
                "end": 82
            },
            "flags": 16,
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
                            "start": 86,
                            "end": 87
                        },
                        {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "start": 93,
                            "end": 100
                        }
                    ],
                    "trailingComma": false,
                    "flags": 0,
                    "start": 86,
                    "end": 101
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 101,
                    "end": 103
                },
                "contents": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 103,
                    "end": 104
                },
                "flags": 32,
                "start": 83,
                "end": 104
            },
            "flags": 16,
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
                            "start": 108,
                            "end": 109
                        }
                    ],
                    "trailingComma": false,
                    "flags": 0,
                    "start": 108,
                    "end": 121
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 121,
                    "end": 123
                },
                "contents": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 123,
                    "end": 124
                },
                "flags": 32,
                "start": 105,
                "end": 124
            },
            "flags": 16,
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
                                    "start": 135,
                                    "end": 148
                                },
                                "flags": 2097152,
                                "start": 135,
                                "end": 148
                            },
                            "right": null,
                            "flags": 32,
                            "start": 125,
                            "end": 148
                        }
                    ],
                    "trailingComma": false,
                    "flags": 0,
                    "start": 128,
                    "end": 149
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 149,
                    "end": 151
                },
                "contents": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 151,
                    "end": 152
                },
                "flags": 32,
                "start": 125,
                "end": 152
            },
            "flags": 16,
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
                                "start": 156,
                                "end": 159
                            },
                            "left": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
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
                                    "start": 166,
                                    "end": 179
                                },
                                "flags": 2097152,
                                "start": 166,
                                "end": 179
                            },
                            "right": null,
                            "flags": 34,
                            "start": 156,
                            "end": 179
                        }
                    ],
                    "trailingComma": false,
                    "flags": 0,
                    "start": 156,
                    "end": 180
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 180,
                    "end": 182
                },
                "contents": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 182,
                    "end": 183
                },
                "flags": 32,
                "start": 153,
                "end": 183
            },
            "flags": 16,
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
                                "start": 187,
                                "end": 190
                            },
                            "left": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
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
                                    "start": 197,
                                    "end": 210
                                },
                                "flags": 2097152,
                                "start": 197,
                                "end": 210
                            },
                            "right": null,
                            "flags": 34,
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
                                "start": 213,
                                "end": 213
                            },
                            "flags": 32,
                            "start": 211,
                            "end": 219
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2,
                    "start": 187,
                    "end": 220
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 220,
                    "end": 222
                },
                "contents": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 222,
                    "end": 223
                },
                "flags": 34,
                "start": 184,
                "end": 223
            },
            "flags": 16,
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
                    "parameters": [],
                    "trailingComma": false,
                    "flags": 0,
                    "start": 227,
                    "end": 227
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 238,
                    "end": 240
                },
                "contents": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 240,
                    "end": 241
                },
                "flags": 32,
                "start": 224,
                "end": 241
            },
            "flags": 16,
            "start": 224,
            "end": 241
        }
    ],
    "isModule": false,
    "source": "\n(/*1*/)=>x;\n\n(a/*1*/)=>x;\n\n(/*1*/a/*2*/)=>x;\n\n(/*1*/a/*2*/)=>x;\n\n(/*1*/a/*2*/)=>x;\n\n(a/*1*/, /*2*/b)=>x;\n\n(a/*1*/,/*2*/)=>x;\n\n(a/*1*/: /*2*/ string)=>x;\n\n(...a/*1*/: /*2*/ string)=>x;\n\n(...a/*1*/: /*2*/ string, [/*2*/])=>x;\n\n(\n\n/*1*/\n\n\n)=>x\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 242
}
```

### Printed

```javascript

() =>  x;
() =>  x;
() =>  x;
() =>  x;
() =>  x;
() =>  x;
() =>  x;
() =>  x;
() =>  x;
() =>  x;
() =>  x;
```

### Diagnostics

```javascript
✔ No errors
```

