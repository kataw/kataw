# Kataw parser test case

## Input

`````js

functionName<A /* A comment */>();

const a: T</* comment */> = 1;

functionName</* comment */>();

function foo</* comment */>() {}

interface Foo {

 </* comment */>(arg): any;

}

type T = </* comment */>(arg) => any;



functionName<

  A // comment

>();

const a: T<

  // comment

> = 1;

functionName<

  // comment

>();

function foo<

  // comment

>() {}

interface Foo {

 <

  A// comment

 >(arg): any;

}

type T = <

  // comment

>(arg) => any;

`````



## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "functionName",
                        "rawText": "functionName",
                        "flags": 768,
                        "start": 0,
                        "end": 13
                    },
                    "operatorToken": {
                        "kind": 536971330,
                        "flags": 768,
                        "start": 13,
                        "end": 14
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "A",
                        "rawText": "A",
                        "flags": 768,
                        "start": 14,
                        "end": 15
                    },
                    "flags": 256,
                    "start": 0,
                    "end": 15
                },
                "operatorToken": {
                    "kind": 34883,
                    "flags": 768,
                    "start": 15,
                    "end": 32
                },
                "right": {
                    "kind": 16637,
                    "text": "",
                    "flags": 12,
                    "start": 32,
                    "end": 32
                },
                "flags": 256,
                "start": 0,
                "end": 34
            },
            "flags": 128,
            "start": 0,
            "end": 35
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 768,
                "start": 35,
                "end": 42
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 768,
                            "start": 42,
                            "end": 44
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 128,
                        "start": 42,
                        "end": 44
                    }
                ],
                "flags": 160,
                "start": 42,
                "end": 44
            },
            "flags": 129,
            "start": 35,
            "end": 44
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "T",
                        "rawText": "T",
                        "flags": 768,
                        "start": 45,
                        "end": 47
                    },
                    "operatorToken": {
                        "kind": 536971330,
                        "flags": 768,
                        "start": 47,
                        "end": 48
                    },
                    "right": {
                        "kind": 16637,
                        "text": "",
                        "flags": 12,
                        "start": 48,
                        "end": 48
                    },
                    "flags": 256,
                    "start": 45,
                    "end": 48
                },
                "operatorToken": {
                    "kind": 34883,
                    "flags": 768,
                    "start": 48,
                    "end": 62
                },
                "right": {
                    "kind": 16637,
                    "text": "",
                    "flags": 12,
                    "start": 62,
                    "end": 62
                },
                "flags": 256,
                "start": 45,
                "end": 62
            },
            "flags": 128,
            "start": 45,
            "end": 62
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 1,
                "rawText": "1",
                "flags": 768,
                "start": 64,
                "end": 66
            },
            "flags": 128,
            "start": 64,
            "end": 67
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "functionName",
                        "rawText": "functionName",
                        "flags": 768,
                        "start": 67,
                        "end": 81
                    },
                    "operatorToken": {
                        "kind": 536971330,
                        "flags": 768,
                        "start": 81,
                        "end": 82
                    },
                    "right": {
                        "kind": 16637,
                        "text": "",
                        "flags": 12,
                        "start": 82,
                        "end": 82
                    },
                    "flags": 256,
                    "start": 67,
                    "end": 82
                },
                "operatorToken": {
                    "kind": 34883,
                    "flags": 768,
                    "start": 82,
                    "end": 96
                },
                "right": {
                    "kind": 16637,
                    "text": "",
                    "flags": 12,
                    "start": 96,
                    "end": 96
                },
                "flags": 256,
                "start": 67,
                "end": 98
            },
            "flags": 128,
            "start": 67,
            "end": 99
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 768,
                "start": 99,
                "end": 109
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo",
                "rawText": "foo",
                "flags": 768,
                "start": 109,
                "end": 113
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 256,
                "start": 113,
                "end": 113
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "multiline": false,
                    "flags": 256,
                    "start": 113,
                    "end": 113
                },
                "flags": 256,
                "start": 113,
                "end": 113
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 129,
            "start": 99,
            "end": 113
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": null,
                "typeParameters": {
                    "kind": 146,
                    "types": [],
                    "flags": 0,
                    "start": 113,
                    "end": 128
                },
                "parameters": [],
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 16637,
                    "text": "",
                    "flags": 12,
                    "start": 132,
                    "end": 132
                },
                "flags": 256,
                "start": 113,
                "end": 132
            },
            "flags": 128,
            "start": 113,
            "end": 132
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "interface",
                "rawText": "interface",
                "flags": 768,
                "start": 133,
                "end": 144
            },
            "flags": 128,
            "start": 133,
            "end": 144
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "Foo",
                "rawText": "Foo",
                "flags": 768,
                "start": 144,
                "end": 148
            },
            "flags": 128,
            "start": 144,
            "end": 148
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 121,
                            "expression": {
                                "kind": 134299649,
                                "text": "arg",
                                "rawText": "arg",
                                "flags": 768,
                                "start": 169,
                                "end": 172
                            },
                            "flags": 256,
                            "start": 150,
                            "end": 173
                        },
                        "flags": 128,
                        "start": 150,
                        "end": 173
                    }
                ],
                "multiLine": true,
                "flags": 128,
                "start": 150,
                "end": 173
            },
            "flags": 128,
            "start": 148,
            "end": 173
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "any",
                "rawText": "any",
                "flags": 768,
                "start": 174,
                "end": 178
            },
            "flags": 128,
            "start": 174,
            "end": 179
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "type",
                "rawText": "type",
                "flags": 768,
                "start": 182,
                "end": 188
            },
            "flags": 128,
            "start": 182,
            "end": 188
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "T",
                    "rawText": "T",
                    "flags": 768,
                    "start": 188,
                    "end": 190
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 768,
                    "start": 190,
                    "end": 192
                },
                "right": {
                    "kind": 271,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 768,
                        "start": 213,
                        "end": 216
                    },
                    "typeParameters": {
                        "kind": 146,
                        "types": [],
                        "flags": 0,
                        "start": 192,
                        "end": 208
                    },
                    "parameters": [
                        {
                            "kind": 134299649,
                            "text": "arg",
                            "rawText": "arg",
                            "flags": 768,
                            "start": 209,
                            "end": 212
                        }
                    ],
                    "asyncToken": null,
                    "returnType": null,
                    "contents": {
                        "kind": 134299649,
                        "text": "any",
                        "rawText": "any",
                        "flags": 768,
                        "start": 216,
                        "end": 220
                    },
                    "flags": 256,
                    "start": 192,
                    "end": 220
                },
                "flags": 256,
                "start": 188,
                "end": 220
            },
            "flags": 128,
            "start": 188,
            "end": 221
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "functionName",
                        "rawText": "functionName",
                        "flags": 768,
                        "start": 221,
                        "end": 237
                    },
                    "operatorToken": {
                        "kind": 536971330,
                        "flags": 768,
                        "start": 237,
                        "end": 238
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "A",
                        "rawText": "A",
                        "flags": 768,
                        "start": 238,
                        "end": 243
                    },
                    "flags": 256,
                    "start": 221,
                    "end": 243
                },
                "operatorToken": {
                    "kind": 34883,
                    "flags": 768,
                    "start": 243,
                    "end": 257
                },
                "right": {
                    "kind": 16637,
                    "text": "",
                    "flags": 12,
                    "start": 257,
                    "end": 257
                },
                "flags": 256,
                "start": 221,
                "end": 259
            },
            "flags": 128,
            "start": 221,
            "end": 260
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 768,
                "start": 260,
                "end": 267
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 768,
                            "start": 267,
                            "end": 269
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 128,
                        "start": 267,
                        "end": 269
                    }
                ],
                "flags": 160,
                "start": 267,
                "end": 269
            },
            "flags": 129,
            "start": 260,
            "end": 269
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "T",
                        "rawText": "T",
                        "flags": 768,
                        "start": 270,
                        "end": 272
                    },
                    "operatorToken": {
                        "kind": 536971330,
                        "flags": 768,
                        "start": 272,
                        "end": 273
                    },
                    "right": {
                        "kind": 16637,
                        "text": "",
                        "flags": 12,
                        "start": 273,
                        "end": 273
                    },
                    "flags": 256,
                    "start": 270,
                    "end": 273
                },
                "operatorToken": {
                    "kind": 34883,
                    "flags": 768,
                    "start": 273,
                    "end": 290
                },
                "right": {
                    "kind": 16637,
                    "text": "",
                    "flags": 12,
                    "start": 290,
                    "end": 290
                },
                "flags": 256,
                "start": 270,
                "end": 290
            },
            "flags": 128,
            "start": 270,
            "end": 290
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 1,
                "rawText": "1",
                "flags": 768,
                "start": 292,
                "end": 294
            },
            "flags": 128,
            "start": 292,
            "end": 295
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "functionName",
                        "rawText": "functionName",
                        "flags": 768,
                        "start": 295,
                        "end": 309
                    },
                    "operatorToken": {
                        "kind": 536971330,
                        "flags": 768,
                        "start": 309,
                        "end": 310
                    },
                    "right": {
                        "kind": 16637,
                        "text": "",
                        "flags": 12,
                        "start": 310,
                        "end": 310
                    },
                    "flags": 256,
                    "start": 295,
                    "end": 310
                },
                "operatorToken": {
                    "kind": 34883,
                    "flags": 768,
                    "start": 310,
                    "end": 327
                },
                "right": {
                    "kind": 16637,
                    "text": "",
                    "flags": 12,
                    "start": 327,
                    "end": 327
                },
                "flags": 256,
                "start": 295,
                "end": 329
            },
            "flags": 128,
            "start": 295,
            "end": 330
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 768,
                "start": 330,
                "end": 340
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo",
                "rawText": "foo",
                "flags": 768,
                "start": 340,
                "end": 344
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 256,
                "start": 344,
                "end": 344
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "multiline": false,
                    "flags": 256,
                    "start": 344,
                    "end": 344
                },
                "flags": 256,
                "start": 344,
                "end": 344
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 129,
            "start": 330,
            "end": 344
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": null,
                "typeParameters": {
                    "kind": 146,
                    "types": [],
                    "flags": 0,
                    "start": 344,
                    "end": 362
                },
                "parameters": [],
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 16637,
                    "text": "",
                    "flags": 12,
                    "start": 366,
                    "end": 366
                },
                "flags": 256,
                "start": 344,
                "end": 366
            },
            "flags": 128,
            "start": 344,
            "end": 366
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "interface",
                "rawText": "interface",
                "flags": 768,
                "start": 367,
                "end": 378
            },
            "flags": 128,
            "start": 367,
            "end": 378
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "Foo",
                "rawText": "Foo",
                "flags": 768,
                "start": 378,
                "end": 382
            },
            "flags": 128,
            "start": 378,
            "end": 382
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 121,
                            "expression": {
                                "kind": 134299649,
                                "text": "arg",
                                "rawText": "arg",
                                "flags": 768,
                                "start": 408,
                                "end": 411
                            },
                            "flags": 256,
                            "start": 384,
                            "end": 412
                        },
                        "flags": 128,
                        "start": 384,
                        "end": 412
                    }
                ],
                "multiLine": true,
                "flags": 128,
                "start": 384,
                "end": 412
            },
            "flags": 128,
            "start": 382,
            "end": 412
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "any",
                "rawText": "any",
                "flags": 768,
                "start": 413,
                "end": 417
            },
            "flags": 128,
            "start": 413,
            "end": 418
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "type",
                "rawText": "type",
                "flags": 768,
                "start": 421,
                "end": 427
            },
            "flags": 128,
            "start": 421,
            "end": 427
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "T",
                    "rawText": "T",
                    "flags": 768,
                    "start": 427,
                    "end": 429
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 768,
                    "start": 429,
                    "end": 431
                },
                "right": {
                    "kind": 271,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 768,
                        "start": 455,
                        "end": 458
                    },
                    "typeParameters": {
                        "kind": 146,
                        "types": [],
                        "flags": 0,
                        "start": 431,
                        "end": 450
                    },
                    "parameters": [
                        {
                            "kind": 134299649,
                            "text": "arg",
                            "rawText": "arg",
                            "flags": 768,
                            "start": 451,
                            "end": 454
                        }
                    ],
                    "asyncToken": null,
                    "returnType": null,
                    "contents": {
                        "kind": 134299649,
                        "text": "any",
                        "rawText": "any",
                        "flags": 768,
                        "start": 458,
                        "end": 462
                    },
                    "flags": 256,
                    "start": 431,
                    "end": 462
                },
                "flags": 256,
                "start": 427,
                "end": 462
            },
            "flags": 128,
            "start": 427,
            "end": 463
        }
    ],
    "isModule": false,
    "text": "\nfunctionName<A /* A comment */>();\n\nconst a: T</* comment */> = 1;\n\nfunctionName</* comment */>();\n\nfunction foo</* comment */>() {}\n\ninterface Foo {\n\n </* comment */>(arg): any;\n\n}\n\ntype T = </* comment */>(arg) => any;\n\n\n\nfunctionName<\n\n  A // comment\n\n>();\n\nconst a: T<\n\n  // comment\n\n> = 1;\n\nfunctionName<\n\n  // comment\n\n>();\n\nfunction foo<\n\n  // comment\n\n>() {}\n\ninterface Foo {\n\n <\n\n  A// comment\n\n >(arg): any;\n\n}\n\ntype T = <\n\n  // comment\n\n>(arg) => any;\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 464
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Expression expected - start: 34, end: 35
✖ Missing initializer in const declaration - start: 44, end: 45
✖ ',' expected - start: 44, end: 45
✖ Statement expected - start: 44, end: 45
✖ Expression expected - start: 48, end: 62
✖ Expression expected - start: 62, end: 64
✖ Statement expected - start: 62, end: 64
✖ Expression expected - start: 82, end: 96
✖ Expression expected - start: 98, end: 99
✖ Unexpected token. - start: 113, end: 114
✖ Expression expected - start: 132, end: 133
✖ Statement expected - start: 132, end: 133
✖ Statement expected - start: 173, end: 174
✖ Statement expected - start: 179, end: 182
✖ Expression expected - start: 259, end: 260
✖ Missing initializer in const declaration - start: 269, end: 270
✖ ',' expected - start: 269, end: 270
✖ Statement expected - start: 269, end: 270
✖ Expression expected - start: 273, end: 290
✖ Expression expected - start: 290, end: 292
✖ Statement expected - start: 290, end: 292
✖ Expression expected - start: 310, end: 327
✖ Expression expected - start: 329, end: 330
✖ Unexpected token. - start: 344, end: 345
✖ Expression expected - start: 366, end: 367
✖ Statement expected - start: 366, end: 367
✖ Statement expected - start: 412, end: 413
✖ Statement expected - start: 418, end: 421

```

