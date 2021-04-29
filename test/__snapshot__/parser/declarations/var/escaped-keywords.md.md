# Kataw parser test case

## Input

`````js
var x = n\u0075ll;

var x = ({ w\u0069th }) => {};

var n\u0075ll = 1;

var \u{63}ase = 123;

var \u{63}ontinue = 123;

var \u{65}\u{6e}\u{75}\u{6d} = 123;

var \u0062\u0072\u0065\u0061\u006b = 123;

var {var:v\u0061r} = obj;

var x = ({ tr\u0079 }) => {};

var x = ({ typ\u0065of }) => {};

var i\u0066;

var x = f\u0061lse;

var f\u0061lse = 1;

var { f\u0061lse } = {};
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 0,
                "start": 0,
                "end": 3
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 3,
                            "end": 5
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 269,
                            "text": null,
                            "flags": 96,
                            "start": 7,
                            "end": 17
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 17
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 17
            },
            "flags": 16,
            "start": 0,
            "end": 18
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 1,
                "start": 18,
                "end": 23
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 23,
                            "end": 25
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 0,
                                "start": 43,
                                "end": 46
                            },
                            "typeParameters": null,
                            "parameters": [
                                {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [
                                            {
                                                "kind": 134299649,
                                                "text": "with",
                                                "rawText": "w\\u0069th",
                                                "flags": 96,
                                                "start": 30,
                                                "end": 40
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 16400,
                                        "start": 30,
                                        "end": 40
                                    },
                                    "flags": 32,
                                    "start": 29,
                                    "end": 42
                                }
                            ],
                            "asyncToken": null,
                            "returnType": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "start": 48,
                                    "end": 48
                                },
                                "flags": 32,
                                "start": 46,
                                "end": 49
                            },
                            "flags": 32,
                            "start": 27,
                            "end": 49
                        },
                        "flags": 16,
                        "start": 23,
                        "end": 49
                    }
                ],
                "flags": 16,
                "start": 23,
                "end": 49
            },
            "flags": 16,
            "start": 18,
            "end": 50
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 1,
                "start": 50,
                "end": 55
            },
            "declarationList": {
                "kind": 156,
                "declarations": [],
                "flags": 16,
                "start": 55,
                "end": 55
            },
            "flags": 16,
            "start": 50,
            "end": 55
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 269,
                    "text": null,
                    "flags": 96,
                    "start": 55,
                    "end": 65
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 65,
                    "end": 67
                },
                "right": {
                    "kind": 201392130,
                    "text": 1,
                    "rawText": "1",
                    "flags": 96,
                    "start": 67,
                    "end": 69
                },
                "flags": 32,
                "start": 55,
                "end": 69
            },
            "flags": 16,
            "start": 55,
            "end": 70
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 1,
                "start": 70,
                "end": 75
            },
            "declarationList": {
                "kind": 156,
                "declarations": [],
                "flags": 16,
                "start": 75,
                "end": 75
            },
            "flags": 16,
            "start": 70,
            "end": 75
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 123,
                "rawText": "123",
                "flags": 96,
                "start": 87,
                "end": 91
            },
            "flags": 16,
            "start": 87,
            "end": 92
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 1,
                "start": 92,
                "end": 97
            },
            "declarationList": {
                "kind": 156,
                "declarations": [],
                "flags": 16,
                "start": 97,
                "end": 97
            },
            "flags": 16,
            "start": 92,
            "end": 97
        },
        {
            "kind": 172,
            "continueKeyword": {
                "kind": 37757009,
                "flags": 8192,
                "start": 97,
                "end": 111
            },
            "label": {
                "kind": 16637,
                "text": "",
                "flags": 68,
                "start": 111,
                "end": 111
            },
            "flags": 16,
            "start": 97,
            "end": 111
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 123,
                "rawText": "123",
                "flags": 96,
                "start": 113,
                "end": 117
            },
            "flags": 16,
            "start": 113,
            "end": 118
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 1,
                "start": 118,
                "end": 123
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "enum",
                            "rawText": "var",
                            "flags": 96,
                            "start": 123,
                            "end": 148
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 201392130,
                            "text": 123,
                            "rawText": "123",
                            "flags": 96,
                            "start": 150,
                            "end": 154
                        },
                        "flags": 16,
                        "start": 123,
                        "end": 154
                    }
                ],
                "flags": 16,
                "start": 123,
                "end": 154
            },
            "flags": 16,
            "start": 118,
            "end": 155
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 1,
                "start": 155,
                "end": 160
            },
            "declarationList": {
                "kind": 156,
                "declarations": [],
                "flags": 16,
                "start": 160,
                "end": 160
            },
            "flags": 16,
            "start": 155,
            "end": 160
        },
        {
            "kind": 150,
            "breakKeyword": {
                "kind": 37757005,
                "flags": 16384,
                "start": 160,
                "end": 191
            },
            "label": {
                "kind": 16637,
                "text": "",
                "flags": 68,
                "start": 191,
                "end": 191
            },
            "flags": 16,
            "start": 160,
            "end": 191
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 123,
                "rawText": "123",
                "flags": 96,
                "start": 193,
                "end": 197
            },
            "flags": 16,
            "start": 193,
            "end": 198
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 1,
                "start": 198,
                "end": 203
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 212,
                            "propertyList": {
                                "kind": 213,
                                "properties": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 205,
                                "end": 205
                            },
                            "flags": 32,
                            "start": 203,
                            "end": 205
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 203,
                        "end": 205
                    }
                ],
                "flags": 16,
                "start": 203,
                "end": 205
            },
            "flags": 16,
            "start": 198,
            "end": 205
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 0,
                "start": 205,
                "end": 208
            },
            "declarationList": {
                "kind": 156,
                "declarations": [],
                "flags": 16,
                "start": 208,
                "end": 208
            },
            "flags": 16,
            "start": 205,
            "end": 208
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 16384,
                "start": 209,
                "end": 217
            },
            "declarationList": {
                "kind": 156,
                "declarations": [],
                "flags": 16,
                "start": 217,
                "end": 217
            },
            "flags": 16,
            "start": 209,
            "end": 217
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "obj",
                "rawText": "obj",
                "flags": 96,
                "start": 220,
                "end": 224
            },
            "flags": 16,
            "start": 220,
            "end": 225
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 1,
                "start": 225,
                "end": 230
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 230,
                            "end": 232
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 0,
                                "start": 249,
                                "end": 252
                            },
                            "typeParameters": null,
                            "parameters": [
                                {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [
                                            {
                                                "kind": 134299649,
                                                "text": "try",
                                                "rawText": "tr\\u0079",
                                                "flags": 96,
                                                "start": 237,
                                                "end": 246
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 16400,
                                        "start": 237,
                                        "end": 246
                                    },
                                    "flags": 32,
                                    "start": 236,
                                    "end": 248
                                }
                            ],
                            "asyncToken": null,
                            "returnType": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "start": 254,
                                    "end": 254
                                },
                                "flags": 32,
                                "start": 252,
                                "end": 255
                            },
                            "flags": 32,
                            "start": 234,
                            "end": 255
                        },
                        "flags": 16,
                        "start": 230,
                        "end": 255
                    }
                ],
                "flags": 16,
                "start": 230,
                "end": 255
            },
            "flags": 16,
            "start": 225,
            "end": 256
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 1,
                "start": 256,
                "end": 261
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 261,
                            "end": 263
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 0,
                                "start": 283,
                                "end": 286
                            },
                            "typeParameters": null,
                            "parameters": [
                                {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [
                                            {
                                                "kind": 134299649,
                                                "text": "typeof",
                                                "rawText": "typ\\u0065of",
                                                "flags": 96,
                                                "start": 268,
                                                "end": 280
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 16400,
                                        "start": 268,
                                        "end": 280
                                    },
                                    "flags": 32,
                                    "start": 267,
                                    "end": 282
                                }
                            ],
                            "asyncToken": null,
                            "returnType": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "start": 288,
                                    "end": 288
                                },
                                "flags": 32,
                                "start": 286,
                                "end": 289
                            },
                            "flags": 32,
                            "start": 265,
                            "end": 289
                        },
                        "flags": 16,
                        "start": 261,
                        "end": 289
                    }
                ],
                "flags": 16,
                "start": 261,
                "end": 289
            },
            "flags": 16,
            "start": 256,
            "end": 290
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 1,
                "start": 290,
                "end": 295
            },
            "declarationList": {
                "kind": 156,
                "declarations": [],
                "flags": 16,
                "start": 295,
                "end": 295
            },
            "flags": 16,
            "start": 290,
            "end": 295
        },
        {
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 16384,
                "start": 295,
                "end": 303
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "flags": 68,
                "start": 303,
                "end": 303
            },
            "consequent": {
                "kind": 168,
                "flags": 16,
                "start": 303,
                "end": 304
            },
            "elseKeyword": null,
            "alternate": null,
            "flags": 16,
            "start": 295,
            "end": 304
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 1,
                "start": 304,
                "end": 309
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 309,
                            "end": 311
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 134,
                            "text": false,
                            "flags": 16480,
                            "start": 313,
                            "end": 324
                        },
                        "flags": 16,
                        "start": 309,
                        "end": 324
                    }
                ],
                "flags": 16,
                "start": 309,
                "end": 324
            },
            "flags": 16,
            "start": 304,
            "end": 325
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 1,
                "start": 325,
                "end": 330
            },
            "declarationList": {
                "kind": 156,
                "declarations": [],
                "flags": 16,
                "start": 330,
                "end": 330
            },
            "flags": 16,
            "start": 325,
            "end": 330
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134,
                    "text": false,
                    "flags": 16480,
                    "start": 330,
                    "end": 341
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 341,
                    "end": 343
                },
                "right": {
                    "kind": 201392130,
                    "text": 1,
                    "rawText": "1",
                    "flags": 96,
                    "start": 343,
                    "end": 345
                },
                "flags": 32,
                "start": 330,
                "end": 345
            },
            "flags": 16,
            "start": 330,
            "end": 346
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 1,
                "start": 346,
                "end": 351
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 212,
                            "propertyList": {
                                "kind": 213,
                                "properties": [],
                                "trailingComma": false,
                                "flags": 16416,
                                "start": 353,
                                "end": 353
                            },
                            "flags": 32,
                            "start": 351,
                            "end": 353
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 351,
                        "end": 353
                    }
                ],
                "flags": 16,
                "start": 351,
                "end": 353
            },
            "flags": 16,
            "start": 346,
            "end": 353
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134,
                "text": false,
                "flags": 16480,
                "start": 353,
                "end": 364
            },
            "flags": 16,
            "start": 353,
            "end": 364
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "flags": 16,
                "start": 370,
                "end": 370
            },
            "flags": 16,
            "start": 368,
            "end": 371
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 371,
            "end": 372
        }
    ],
    "isModule": false,
    "source": "var x = n\\u0075ll;\n\nvar x = ({ w\\u0069th }) => {};\n\nvar n\\u0075ll = 1;\n\nvar \\u{63}ase = 123;\n\nvar \\u{63}ontinue = 123;\n\nvar \\u{65}\\u{6e}\\u{75}\\u{6d} = 123;\n\nvar \\u0062\\u0072\\u0065\\u0061\\u006b = 123;\n\nvar {var:v\\u0061r} = obj;\n\nvar x = ({ tr\\u0079 }) => {};\n\nvar x = ({ typ\\u0065of }) => {};\n\nvar i\\u0066;\n\nvar x = f\\u0061lse;\n\nvar f\\u0061lse = 1;\n\nvar { f\\u0061lse } = {};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 372
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 65, end: 67
✖ Statement expected - start: 75, end: 85
✖ Statement expected - start: 85, end: 87
✖ A 'continue' statement can only be used within an enclosing iteration statement. - start: 97, end: 111
✖ Expression expected - start: 111, end: 113
✖ Statement expected - start: 111, end: 113
✖ Expression expected - start: 191, end: 193
✖ Statement expected - start: 191, end: 193
✖ Missing initializer in destructuring declaration - start: 205, end: 208
✖ ',' expected - start: 205, end: 208
✖ Statement expected - start: 208, end: 209
✖ Invalid escaped keyword - start: 217, end: 218
✖ Statement expected - start: 217, end: 218
✖ Statement expected - start: 218, end: 220
✖ Invalid escaped keyword - start: 303, end: 304
✖ Expression expected - start: 303, end: 304
✖ Invalid escaped keyword - start: 313, end: 324
✖ Invalid escaped keyword - start: 330, end: 341
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 341, end: 343
✖ Missing initializer in destructuring declaration - start: 353, end: 364
✖ ',' expected - start: 353, end: 364
✖ Invalid escaped keyword - start: 353, end: 364
✖ Statement expected - start: 364, end: 366
✖ Statement expected - start: 366, end: 368

```

