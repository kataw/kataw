# Kataw parser test case

## Input

`````js
function foo0(x) {
    for (let x of []) {
        let a = arguments.length;
        (function() { return x + a });
        (() => x + a);
    }
}

function foo0_1(x) {
    for (let x in []) {
        let a = arguments.length;
        (function() { return x + a });
        (() => x + a);
    }
}

function foo1(x) {
    for (let x = 0; x < 1; ++x) {
        let a = arguments.length;
        (function() { return x + a });
        (() => x + a);
    }
}

function foo2(x) {
    while (1 === 1) {
        let a = arguments.length;
        (function() { return x + a });
        (() => x + a);
    }
}

function foo3(x) {
    do {
        let x;
        let a = arguments.length;
        (function() { return x + a });
        (() => x + a);
    } while (1 === 1)
}

function foo4(x) {
    for (let y = 0; y < 1; ++y) {
        let a = arguments.length;
        let x = 1;
        (function() { return x + a });
        (() => x + a);
    }
}

function foo5(x) {
    for (let x = 0, y = 1; x < 1; ++x) {
        let a = arguments.length;
        (function() { return x + y + a });
        (() => x + y + a);
    }
}


function foo6(x) {
    while (1 === 1) {
        let x, y;
        let a = arguments.length;
        (function() { return x + y + a });
        (() => x + y + a);
    }
}

function foo7(x) {
    do {
        let x, y;
        let a = arguments.length;
        (function() { return x + y + a });
        (() => x + y + a);
    } while (1 === 1)
}


function foo8(x) {
    for (let y = 0; y < 1; ++y) {
        let x = 1;
        let a = arguments.length;
        (function() { return x + y + a });
        (() => x + y + a);
    }
}
///=======const
function foo0_c(x) {
    for (const x of []) {
        const a = arguments.length;
        (function() { return x + a });
        (() => x + a);
    }
}

function foo0_1_c(x) {
    for (const x in []) {
        const a = arguments.length;
        (function() { return x + a });
        (() => x + a);
    }
}

function foo1_c(x) {
    for (const x = 0; x < 1;) {
        const a = arguments.length;
        (function() { return x + a });
        (() => x + a);
    }
}

function foo2_c(x) {
    while (1 === 1) {
        const a = arguments.length;
        (function() { return x + a });
        (() => x + a);
    }
}

function foo3_c(x) {
    do {
        const x = 1;
        const a = arguments.length;
        (function() { return x + a });
        (() => x + a);
    } while (1 === 1)
}

function foo4_c(x) {
    for (const y = 0; y < 1;) {
        const a = arguments.length;
        const x = 1;
        (function() { return x + a });
        (() => x + a);
    }
}

function foo5_c(x) {
    for (const x = 0, y = 1; x < 1;) {
        const a = arguments.length;
        (function() { return x + y + a });
        (() => x + y + a);
    }
}


function foo6_c(x) {
    while (1 === 1) {
        const x = 1, y =1 ;
        const a = arguments.length;
        (function() { return x + y + a });
        (() => x + y + a);
    }
}

function foo7_c(x) {
    do {
        const x = 1, y = 1;
        const a = arguments.length;
        (function() { return x + y + a });
        (() => x + y + a);
    } while (1 === 1)
}


function foo8_c(x) {
    for (const y = 0; y < 1;) {
        const x = 1;
        const a = arguments.length;
        (function() { return x + y + a });
        (() => x + y + a);
    }
}
`````

## Options

### Parser Options

`````js
{allowTypes: true}
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 0,
                "end": 8
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo0",
                "rawText": "foo0",
                "flags": 96,
                "start": 8,
                "end": 13
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 14,
                        "end": 15
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 13,
                "end": 16
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 167,
                            "forKeyword": {
                                "kind": 37757017,
                                "flags": 81,
                                "start": 18,
                                "end": 26
                            },
                            "awaitKeyword": null,
                            "initializer": {
                                "kind": 151,
                                "bindingList": [
                                    {
                                        "kind": 190,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 31,
                                            "end": 33
                                        },
                                        "type": null,
                                        "initializer": null,
                                        "flags": 16,
                                        "start": 31,
                                        "end": 33
                                    }
                                ],
                                "flags": 16,
                                "start": 31,
                                "end": 33
                            },
                            "ofKeyword": {
                                "kind": 16793717,
                                "flags": 64,
                                "start": 33,
                                "end": 36
                            },
                            "expression": {
                                "kind": 119,
                                "elementList": {
                                    "kind": 270,
                                    "elements": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 38,
                                    "end": 38
                                },
                                "flags": 32,
                                "start": 36,
                                "end": 39
                            },
                            "statement": {
                                "kind": 124,
                                "block": {
                                    "kind": 249,
                                    "statements": [
                                        {
                                            "kind": 162,
                                            "lexicalKeyword": {
                                                "kind": 41951307,
                                                "flags": 81,
                                                "start": 42,
                                                "end": 54
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
                                                            "flags": 96,
                                                            "start": 54,
                                                            "end": 56
                                                        },
                                                        "type": null,
                                                        "initializer": {
                                                            "kind": 129,
                                                            "member": {
                                                                "kind": 134299649,
                                                                "text": "arguments",
                                                                "rawText": "arguments",
                                                                "flags": 96,
                                                                "start": 58,
                                                                "end": 68
                                                            },
                                                            "expression": {
                                                                "kind": 134299649,
                                                                "text": "length",
                                                                "rawText": "length",
                                                                "flags": 96,
                                                                "start": 69,
                                                                "end": 75
                                                            },
                                                            "flags": 536870944,
                                                            "start": 58,
                                                            "end": 75
                                                        },
                                                        "flags": 16,
                                                        "start": 54,
                                                        "end": 75
                                                    }
                                                ],
                                                "flags": 17,
                                                "start": 54,
                                                "end": 75
                                            },
                                            "flags": 33554448,
                                            "start": 42,
                                            "end": 76
                                        },
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 121,
                                                "expression": {
                                                    "kind": 177,
                                                    "asyncKeyword": null,
                                                    "functionKeyword": {
                                                        "kind": 37822554,
                                                        "flags": 64,
                                                        "start": 86,
                                                        "end": 94
                                                    },
                                                    "asteriskToken": null,
                                                    "name": null,
                                                    "typeParameters": null,
                                                    "formalParameterList": {
                                                        "kind": 214,
                                                        "formalParameters": [],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "start": 94,
                                                        "end": 96
                                                    },
                                                    "contents": {
                                                        "kind": 216,
                                                        "functionStatementList": {
                                                            "kind": 217,
                                                            "directives": [],
                                                            "statements": [
                                                                {
                                                                    "kind": 161,
                                                                    "returnKeyword": {
                                                                        "kind": 37757022,
                                                                        "flags": 80,
                                                                        "start": 98,
                                                                        "end": 105
                                                                    },
                                                                    "expression": {
                                                                        "kind": 198,
                                                                        "left": {
                                                                            "kind": 134299649,
                                                                            "text": "x",
                                                                            "rawText": "x",
                                                                            "flags": 96,
                                                                            "start": 105,
                                                                            "end": 107
                                                                        },
                                                                        "operatorToken": {
                                                                            "kind": 99634,
                                                                            "flags": 96,
                                                                            "start": 107,
                                                                            "end": 109
                                                                        },
                                                                        "right": {
                                                                            "kind": 134299649,
                                                                            "text": "a",
                                                                            "rawText": "a",
                                                                            "flags": 96,
                                                                            "start": 109,
                                                                            "end": 111
                                                                        },
                                                                        "flags": 32,
                                                                        "start": 105,
                                                                        "end": 111
                                                                    },
                                                                    "flags": 80,
                                                                    "start": 98,
                                                                    "end": 111
                                                                }
                                                            ],
                                                            "flags": 32,
                                                            "start": 98,
                                                            "end": 111
                                                        },
                                                        "flags": 32,
                                                        "start": 96,
                                                        "end": 113
                                                    },
                                                    "returnType": null,
                                                    "flags": 32,
                                                    "start": 86,
                                                    "end": 113
                                                },
                                                "flags": 32,
                                                "start": 76,
                                                "end": 114
                                            },
                                            "flags": 16,
                                            "start": 76,
                                            "end": 115
                                        },
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 121,
                                                "expression": {
                                                    "kind": 271,
                                                    "arrowToken": {
                                                        "kind": 10,
                                                        "flags": 64,
                                                        "start": 127,
                                                        "end": 130
                                                    },
                                                    "typeParameters": null,
                                                    "parameters": [],
                                                    "asyncKeyword": null,
                                                    "returnType": null,
                                                    "contents": {
                                                        "kind": 198,
                                                        "left": {
                                                            "kind": 134299649,
                                                            "text": "x",
                                                            "rawText": "x",
                                                            "flags": 96,
                                                            "start": 130,
                                                            "end": 132
                                                        },
                                                        "operatorToken": {
                                                            "kind": 99634,
                                                            "flags": 96,
                                                            "start": 132,
                                                            "end": 134
                                                        },
                                                        "right": {
                                                            "kind": 134299649,
                                                            "text": "a",
                                                            "rawText": "a",
                                                            "flags": 96,
                                                            "start": 134,
                                                            "end": 136
                                                        },
                                                        "flags": 32,
                                                        "start": 130,
                                                        "end": 136
                                                    },
                                                    "flags": 32,
                                                    "start": 125,
                                                    "end": 136
                                                },
                                                "flags": 32,
                                                "start": 115,
                                                "end": 137
                                            },
                                            "flags": 16,
                                            "start": 115,
                                            "end": 138
                                        }
                                    ],
                                    "flags": 17,
                                    "start": 42,
                                    "end": 138
                                },
                                "flags": 16,
                                "start": 40,
                                "end": 144
                            },
                            "flags": 81,
                            "start": 18,
                            "end": 144
                        }
                    ],
                    "flags": 33,
                    "start": 18,
                    "end": 144
                },
                "flags": 32,
                "start": 16,
                "end": 146
            },
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 146
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 146,
                "end": 156
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo0_1",
                "rawText": "foo0_1",
                "flags": 96,
                "start": 156,
                "end": 163
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 164,
                        "end": 165
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 163,
                "end": 166
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 166,
                            "forKeyword": {
                                "kind": 37757017,
                                "flags": 81,
                                "start": 168,
                                "end": 176
                            },
                            "initializer": {
                                "kind": 151,
                                "bindingList": [
                                    {
                                        "kind": 190,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 181,
                                            "end": 183
                                        },
                                        "type": null,
                                        "initializer": null,
                                        "flags": 16,
                                        "start": 181,
                                        "end": 183
                                    }
                                ],
                                "flags": 16,
                                "start": 181,
                                "end": 183
                            },
                            "inKeyword": {
                                "kind": 21006388,
                                "flags": 64,
                                "start": 183,
                                "end": 186
                            },
                            "expression": {
                                "kind": 119,
                                "elementList": {
                                    "kind": 270,
                                    "elements": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 188,
                                    "end": 188
                                },
                                "flags": 32,
                                "start": 186,
                                "end": 189
                            },
                            "statement": {
                                "kind": 124,
                                "block": {
                                    "kind": 249,
                                    "statements": [
                                        {
                                            "kind": 162,
                                            "lexicalKeyword": {
                                                "kind": 41951307,
                                                "flags": 81,
                                                "start": 192,
                                                "end": 204
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
                                                            "flags": 96,
                                                            "start": 204,
                                                            "end": 206
                                                        },
                                                        "type": null,
                                                        "initializer": {
                                                            "kind": 129,
                                                            "member": {
                                                                "kind": 134299649,
                                                                "text": "arguments",
                                                                "rawText": "arguments",
                                                                "flags": 96,
                                                                "start": 208,
                                                                "end": 218
                                                            },
                                                            "expression": {
                                                                "kind": 134299649,
                                                                "text": "length",
                                                                "rawText": "length",
                                                                "flags": 96,
                                                                "start": 219,
                                                                "end": 225
                                                            },
                                                            "flags": 536870944,
                                                            "start": 208,
                                                            "end": 225
                                                        },
                                                        "flags": 16,
                                                        "start": 204,
                                                        "end": 225
                                                    }
                                                ],
                                                "flags": 17,
                                                "start": 204,
                                                "end": 225
                                            },
                                            "flags": 33554448,
                                            "start": 192,
                                            "end": 226
                                        },
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 121,
                                                "expression": {
                                                    "kind": 177,
                                                    "asyncKeyword": null,
                                                    "functionKeyword": {
                                                        "kind": 37822554,
                                                        "flags": 64,
                                                        "start": 236,
                                                        "end": 244
                                                    },
                                                    "asteriskToken": null,
                                                    "name": null,
                                                    "typeParameters": null,
                                                    "formalParameterList": {
                                                        "kind": 214,
                                                        "formalParameters": [],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "start": 244,
                                                        "end": 246
                                                    },
                                                    "contents": {
                                                        "kind": 216,
                                                        "functionStatementList": {
                                                            "kind": 217,
                                                            "directives": [],
                                                            "statements": [
                                                                {
                                                                    "kind": 161,
                                                                    "returnKeyword": {
                                                                        "kind": 37757022,
                                                                        "flags": 80,
                                                                        "start": 248,
                                                                        "end": 255
                                                                    },
                                                                    "expression": {
                                                                        "kind": 198,
                                                                        "left": {
                                                                            "kind": 134299649,
                                                                            "text": "x",
                                                                            "rawText": "x",
                                                                            "flags": 96,
                                                                            "start": 255,
                                                                            "end": 257
                                                                        },
                                                                        "operatorToken": {
                                                                            "kind": 99634,
                                                                            "flags": 96,
                                                                            "start": 257,
                                                                            "end": 259
                                                                        },
                                                                        "right": {
                                                                            "kind": 134299649,
                                                                            "text": "a",
                                                                            "rawText": "a",
                                                                            "flags": 96,
                                                                            "start": 259,
                                                                            "end": 261
                                                                        },
                                                                        "flags": 32,
                                                                        "start": 255,
                                                                        "end": 261
                                                                    },
                                                                    "flags": 80,
                                                                    "start": 248,
                                                                    "end": 261
                                                                }
                                                            ],
                                                            "flags": 32,
                                                            "start": 248,
                                                            "end": 261
                                                        },
                                                        "flags": 32,
                                                        "start": 246,
                                                        "end": 263
                                                    },
                                                    "returnType": null,
                                                    "flags": 32,
                                                    "start": 236,
                                                    "end": 263
                                                },
                                                "flags": 32,
                                                "start": 226,
                                                "end": 264
                                            },
                                            "flags": 16,
                                            "start": 226,
                                            "end": 265
                                        },
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 121,
                                                "expression": {
                                                    "kind": 271,
                                                    "arrowToken": {
                                                        "kind": 10,
                                                        "flags": 64,
                                                        "start": 277,
                                                        "end": 280
                                                    },
                                                    "typeParameters": null,
                                                    "parameters": [],
                                                    "asyncKeyword": null,
                                                    "returnType": null,
                                                    "contents": {
                                                        "kind": 198,
                                                        "left": {
                                                            "kind": 134299649,
                                                            "text": "x",
                                                            "rawText": "x",
                                                            "flags": 96,
                                                            "start": 280,
                                                            "end": 282
                                                        },
                                                        "operatorToken": {
                                                            "kind": 99634,
                                                            "flags": 96,
                                                            "start": 282,
                                                            "end": 284
                                                        },
                                                        "right": {
                                                            "kind": 134299649,
                                                            "text": "a",
                                                            "rawText": "a",
                                                            "flags": 96,
                                                            "start": 284,
                                                            "end": 286
                                                        },
                                                        "flags": 32,
                                                        "start": 280,
                                                        "end": 286
                                                    },
                                                    "flags": 32,
                                                    "start": 275,
                                                    "end": 286
                                                },
                                                "flags": 32,
                                                "start": 265,
                                                "end": 287
                                            },
                                            "flags": 16,
                                            "start": 265,
                                            "end": 288
                                        }
                                    ],
                                    "flags": 17,
                                    "start": 192,
                                    "end": 288
                                },
                                "flags": 16,
                                "start": 190,
                                "end": 294
                            },
                            "flags": 81,
                            "start": 168,
                            "end": 294
                        }
                    ],
                    "flags": 33,
                    "start": 168,
                    "end": 294
                },
                "flags": 32,
                "start": 166,
                "end": 296
            },
            "returnType": null,
            "flags": 16,
            "start": 146,
            "end": 296
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 296,
                "end": 306
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo1",
                "rawText": "foo1",
                "flags": 96,
                "start": 306,
                "end": 311
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 312,
                        "end": 313
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 311,
                "end": 314
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 165,
                            "forKeyword": {
                                "kind": 37757017,
                                "flags": 81,
                                "start": 316,
                                "end": 324
                            },
                            "initializer": {
                                "kind": 151,
                                "bindingList": [
                                    {
                                        "kind": 190,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 329,
                                            "end": 331
                                        },
                                        "type": null,
                                        "initializer": {
                                            "kind": 201392130,
                                            "text": 0,
                                            "rawText": "0",
                                            "flags": 96,
                                            "start": 333,
                                            "end": 335
                                        },
                                        "flags": 16,
                                        "start": 329,
                                        "end": 335
                                    }
                                ],
                                "flags": 16,
                                "start": 329,
                                "end": 335
                            },
                            "condition": {
                                "kind": 128,
                                "operandToken": {
                                    "kind": 196635,
                                    "flags": 96,
                                    "start": 343,
                                    "end": 346
                                },
                                "operand": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 346,
                                    "end": 347
                                },
                                "flags": 32,
                                "start": 343,
                                "end": 347
                            },
                            "incrementor": {
                                "kind": 198,
                                "left": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 336,
                                    "end": 338
                                },
                                "operatorToken": {
                                    "kind": 536971330,
                                    "flags": 96,
                                    "start": 338,
                                    "end": 340
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 96,
                                    "start": 340,
                                    "end": 342
                                },
                                "flags": 32,
                                "start": 336,
                                "end": 342
                            },
                            "statement": {
                                "kind": 124,
                                "block": {
                                    "kind": 249,
                                    "statements": [
                                        {
                                            "kind": 162,
                                            "lexicalKeyword": {
                                                "kind": 41951307,
                                                "flags": 81,
                                                "start": 350,
                                                "end": 362
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
                                                            "flags": 96,
                                                            "start": 362,
                                                            "end": 364
                                                        },
                                                        "type": null,
                                                        "initializer": {
                                                            "kind": 129,
                                                            "member": {
                                                                "kind": 134299649,
                                                                "text": "arguments",
                                                                "rawText": "arguments",
                                                                "flags": 96,
                                                                "start": 366,
                                                                "end": 376
                                                            },
                                                            "expression": {
                                                                "kind": 134299649,
                                                                "text": "length",
                                                                "rawText": "length",
                                                                "flags": 96,
                                                                "start": 377,
                                                                "end": 383
                                                            },
                                                            "flags": 536870944,
                                                            "start": 366,
                                                            "end": 383
                                                        },
                                                        "flags": 16,
                                                        "start": 362,
                                                        "end": 383
                                                    }
                                                ],
                                                "flags": 17,
                                                "start": 362,
                                                "end": 383
                                            },
                                            "flags": 33554448,
                                            "start": 350,
                                            "end": 384
                                        },
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 121,
                                                "expression": {
                                                    "kind": 177,
                                                    "asyncKeyword": null,
                                                    "functionKeyword": {
                                                        "kind": 37822554,
                                                        "flags": 64,
                                                        "start": 394,
                                                        "end": 402
                                                    },
                                                    "asteriskToken": null,
                                                    "name": null,
                                                    "typeParameters": null,
                                                    "formalParameterList": {
                                                        "kind": 214,
                                                        "formalParameters": [],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "start": 402,
                                                        "end": 404
                                                    },
                                                    "contents": {
                                                        "kind": 216,
                                                        "functionStatementList": {
                                                            "kind": 217,
                                                            "directives": [],
                                                            "statements": [
                                                                {
                                                                    "kind": 161,
                                                                    "returnKeyword": {
                                                                        "kind": 37757022,
                                                                        "flags": 80,
                                                                        "start": 406,
                                                                        "end": 413
                                                                    },
                                                                    "expression": {
                                                                        "kind": 198,
                                                                        "left": {
                                                                            "kind": 134299649,
                                                                            "text": "x",
                                                                            "rawText": "x",
                                                                            "flags": 96,
                                                                            "start": 413,
                                                                            "end": 415
                                                                        },
                                                                        "operatorToken": {
                                                                            "kind": 99634,
                                                                            "flags": 96,
                                                                            "start": 415,
                                                                            "end": 417
                                                                        },
                                                                        "right": {
                                                                            "kind": 134299649,
                                                                            "text": "a",
                                                                            "rawText": "a",
                                                                            "flags": 96,
                                                                            "start": 417,
                                                                            "end": 419
                                                                        },
                                                                        "flags": 32,
                                                                        "start": 413,
                                                                        "end": 419
                                                                    },
                                                                    "flags": 80,
                                                                    "start": 406,
                                                                    "end": 419
                                                                }
                                                            ],
                                                            "flags": 32,
                                                            "start": 406,
                                                            "end": 419
                                                        },
                                                        "flags": 32,
                                                        "start": 404,
                                                        "end": 421
                                                    },
                                                    "returnType": null,
                                                    "flags": 32,
                                                    "start": 394,
                                                    "end": 421
                                                },
                                                "flags": 32,
                                                "start": 384,
                                                "end": 422
                                            },
                                            "flags": 16,
                                            "start": 384,
                                            "end": 423
                                        },
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 121,
                                                "expression": {
                                                    "kind": 271,
                                                    "arrowToken": {
                                                        "kind": 10,
                                                        "flags": 64,
                                                        "start": 435,
                                                        "end": 438
                                                    },
                                                    "typeParameters": null,
                                                    "parameters": [],
                                                    "asyncKeyword": null,
                                                    "returnType": null,
                                                    "contents": {
                                                        "kind": 198,
                                                        "left": {
                                                            "kind": 134299649,
                                                            "text": "x",
                                                            "rawText": "x",
                                                            "flags": 96,
                                                            "start": 438,
                                                            "end": 440
                                                        },
                                                        "operatorToken": {
                                                            "kind": 99634,
                                                            "flags": 96,
                                                            "start": 440,
                                                            "end": 442
                                                        },
                                                        "right": {
                                                            "kind": 134299649,
                                                            "text": "a",
                                                            "rawText": "a",
                                                            "flags": 96,
                                                            "start": 442,
                                                            "end": 444
                                                        },
                                                        "flags": 32,
                                                        "start": 438,
                                                        "end": 444
                                                    },
                                                    "flags": 32,
                                                    "start": 433,
                                                    "end": 444
                                                },
                                                "flags": 32,
                                                "start": 423,
                                                "end": 445
                                            },
                                            "flags": 16,
                                            "start": 423,
                                            "end": 446
                                        }
                                    ],
                                    "flags": 17,
                                    "start": 350,
                                    "end": 446
                                },
                                "flags": 16,
                                "start": 348,
                                "end": 452
                            },
                            "flags": 81,
                            "start": 316,
                            "end": 452
                        }
                    ],
                    "flags": 33,
                    "start": 316,
                    "end": 452
                },
                "flags": 32,
                "start": 314,
                "end": 454
            },
            "returnType": null,
            "flags": 16,
            "start": 296,
            "end": 454
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 454,
                "end": 464
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo2",
                "rawText": "foo2",
                "flags": 96,
                "start": 464,
                "end": 469
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 470,
                        "end": 471
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 469,
                "end": 472
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 154,
                            "whileKeyword": {
                                "kind": 37757028,
                                "flags": 81,
                                "start": 474,
                                "end": 484
                            },
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 201392130,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 96,
                                    "start": 486,
                                    "end": 487
                                },
                                "operatorToken": {
                                    "kind": 34620,
                                    "flags": 96,
                                    "start": 487,
                                    "end": 491
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 96,
                                    "start": 491,
                                    "end": 493
                                },
                                "flags": 32,
                                "start": 486,
                                "end": 493
                            },
                            "statement": {
                                "kind": 124,
                                "block": {
                                    "kind": 249,
                                    "statements": [
                                        {
                                            "kind": 162,
                                            "lexicalKeyword": {
                                                "kind": 41951307,
                                                "flags": 81,
                                                "start": 496,
                                                "end": 508
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
                                                            "flags": 96,
                                                            "start": 508,
                                                            "end": 510
                                                        },
                                                        "type": null,
                                                        "initializer": {
                                                            "kind": 129,
                                                            "member": {
                                                                "kind": 134299649,
                                                                "text": "arguments",
                                                                "rawText": "arguments",
                                                                "flags": 96,
                                                                "start": 512,
                                                                "end": 522
                                                            },
                                                            "expression": {
                                                                "kind": 134299649,
                                                                "text": "length",
                                                                "rawText": "length",
                                                                "flags": 96,
                                                                "start": 523,
                                                                "end": 529
                                                            },
                                                            "flags": 536870944,
                                                            "start": 512,
                                                            "end": 529
                                                        },
                                                        "flags": 16,
                                                        "start": 508,
                                                        "end": 529
                                                    }
                                                ],
                                                "flags": 17,
                                                "start": 508,
                                                "end": 529
                                            },
                                            "flags": 33554448,
                                            "start": 496,
                                            "end": 530
                                        },
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 121,
                                                "expression": {
                                                    "kind": 177,
                                                    "asyncKeyword": null,
                                                    "functionKeyword": {
                                                        "kind": 37822554,
                                                        "flags": 64,
                                                        "start": 540,
                                                        "end": 548
                                                    },
                                                    "asteriskToken": null,
                                                    "name": null,
                                                    "typeParameters": null,
                                                    "formalParameterList": {
                                                        "kind": 214,
                                                        "formalParameters": [],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "start": 548,
                                                        "end": 550
                                                    },
                                                    "contents": {
                                                        "kind": 216,
                                                        "functionStatementList": {
                                                            "kind": 217,
                                                            "directives": [],
                                                            "statements": [
                                                                {
                                                                    "kind": 161,
                                                                    "returnKeyword": {
                                                                        "kind": 37757022,
                                                                        "flags": 80,
                                                                        "start": 552,
                                                                        "end": 559
                                                                    },
                                                                    "expression": {
                                                                        "kind": 198,
                                                                        "left": {
                                                                            "kind": 134299649,
                                                                            "text": "x",
                                                                            "rawText": "x",
                                                                            "flags": 96,
                                                                            "start": 559,
                                                                            "end": 561
                                                                        },
                                                                        "operatorToken": {
                                                                            "kind": 99634,
                                                                            "flags": 96,
                                                                            "start": 561,
                                                                            "end": 563
                                                                        },
                                                                        "right": {
                                                                            "kind": 134299649,
                                                                            "text": "a",
                                                                            "rawText": "a",
                                                                            "flags": 96,
                                                                            "start": 563,
                                                                            "end": 565
                                                                        },
                                                                        "flags": 32,
                                                                        "start": 559,
                                                                        "end": 565
                                                                    },
                                                                    "flags": 80,
                                                                    "start": 552,
                                                                    "end": 565
                                                                }
                                                            ],
                                                            "flags": 32,
                                                            "start": 552,
                                                            "end": 565
                                                        },
                                                        "flags": 32,
                                                        "start": 550,
                                                        "end": 567
                                                    },
                                                    "returnType": null,
                                                    "flags": 32,
                                                    "start": 540,
                                                    "end": 567
                                                },
                                                "flags": 32,
                                                "start": 530,
                                                "end": 568
                                            },
                                            "flags": 16,
                                            "start": 530,
                                            "end": 569
                                        },
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 121,
                                                "expression": {
                                                    "kind": 271,
                                                    "arrowToken": {
                                                        "kind": 10,
                                                        "flags": 64,
                                                        "start": 581,
                                                        "end": 584
                                                    },
                                                    "typeParameters": null,
                                                    "parameters": [],
                                                    "asyncKeyword": null,
                                                    "returnType": null,
                                                    "contents": {
                                                        "kind": 198,
                                                        "left": {
                                                            "kind": 134299649,
                                                            "text": "x",
                                                            "rawText": "x",
                                                            "flags": 96,
                                                            "start": 584,
                                                            "end": 586
                                                        },
                                                        "operatorToken": {
                                                            "kind": 99634,
                                                            "flags": 96,
                                                            "start": 586,
                                                            "end": 588
                                                        },
                                                        "right": {
                                                            "kind": 134299649,
                                                            "text": "a",
                                                            "rawText": "a",
                                                            "flags": 96,
                                                            "start": 588,
                                                            "end": 590
                                                        },
                                                        "flags": 32,
                                                        "start": 584,
                                                        "end": 590
                                                    },
                                                    "flags": 32,
                                                    "start": 579,
                                                    "end": 590
                                                },
                                                "flags": 32,
                                                "start": 569,
                                                "end": 591
                                            },
                                            "flags": 16,
                                            "start": 569,
                                            "end": 592
                                        }
                                    ],
                                    "flags": 17,
                                    "start": 496,
                                    "end": 592
                                },
                                "flags": 16,
                                "start": 494,
                                "end": 598
                            },
                            "flags": 81,
                            "start": 474,
                            "end": 598
                        }
                    ],
                    "flags": 33,
                    "start": 474,
                    "end": 598
                },
                "flags": 32,
                "start": 472,
                "end": 600
            },
            "returnType": null,
            "flags": 16,
            "start": 454,
            "end": 600
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 600,
                "end": 610
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo3",
                "rawText": "foo3",
                "flags": 96,
                "start": 610,
                "end": 615
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 616,
                        "end": 617
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 615,
                "end": 618
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 169,
                            "doKeyword": {
                                "kind": 4202580,
                                "flags": 81,
                                "start": 620,
                                "end": 627
                            },
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 201392130,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 96,
                                    "start": 754,
                                    "end": 755
                                },
                                "operatorToken": {
                                    "kind": 34620,
                                    "flags": 96,
                                    "start": 755,
                                    "end": 759
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 96,
                                    "start": 759,
                                    "end": 761
                                },
                                "flags": 32,
                                "start": 754,
                                "end": 761
                            },
                            "whileKeyword": {
                                "kind": 37757028,
                                "flags": 64,
                                "start": 746,
                                "end": 752
                            },
                            "statement": {
                                "kind": 124,
                                "block": {
                                    "kind": 249,
                                    "statements": [
                                        {
                                            "kind": 162,
                                            "lexicalKeyword": {
                                                "kind": 41951307,
                                                "flags": 81,
                                                "start": 629,
                                                "end": 641
                                            },
                                            "binding": {
                                                "kind": 151,
                                                "bindingList": [
                                                    {
                                                        "kind": 190,
                                                        "binding": {
                                                            "kind": 134299649,
                                                            "text": "x",
                                                            "rawText": "x",
                                                            "flags": 96,
                                                            "start": 641,
                                                            "end": 643
                                                        },
                                                        "type": null,
                                                        "initializer": null,
                                                        "flags": 16,
                                                        "start": 641,
                                                        "end": 643
                                                    }
                                                ],
                                                "flags": 17,
                                                "start": 641,
                                                "end": 643
                                            },
                                            "flags": 33554448,
                                            "start": 629,
                                            "end": 644
                                        },
                                        {
                                            "kind": 162,
                                            "lexicalKeyword": {
                                                "kind": 41951307,
                                                "flags": 81,
                                                "start": 644,
                                                "end": 656
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
                                                            "flags": 96,
                                                            "start": 656,
                                                            "end": 658
                                                        },
                                                        "type": null,
                                                        "initializer": {
                                                            "kind": 129,
                                                            "member": {
                                                                "kind": 134299649,
                                                                "text": "arguments",
                                                                "rawText": "arguments",
                                                                "flags": 96,
                                                                "start": 660,
                                                                "end": 670
                                                            },
                                                            "expression": {
                                                                "kind": 134299649,
                                                                "text": "length",
                                                                "rawText": "length",
                                                                "flags": 96,
                                                                "start": 671,
                                                                "end": 677
                                                            },
                                                            "flags": 536870944,
                                                            "start": 660,
                                                            "end": 677
                                                        },
                                                        "flags": 16,
                                                        "start": 656,
                                                        "end": 677
                                                    }
                                                ],
                                                "flags": 17,
                                                "start": 656,
                                                "end": 677
                                            },
                                            "flags": 33554448,
                                            "start": 644,
                                            "end": 678
                                        },
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 121,
                                                "expression": {
                                                    "kind": 177,
                                                    "asyncKeyword": null,
                                                    "functionKeyword": {
                                                        "kind": 37822554,
                                                        "flags": 64,
                                                        "start": 688,
                                                        "end": 696
                                                    },
                                                    "asteriskToken": null,
                                                    "name": null,
                                                    "typeParameters": null,
                                                    "formalParameterList": {
                                                        "kind": 214,
                                                        "formalParameters": [],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "start": 696,
                                                        "end": 698
                                                    },
                                                    "contents": {
                                                        "kind": 216,
                                                        "functionStatementList": {
                                                            "kind": 217,
                                                            "directives": [],
                                                            "statements": [
                                                                {
                                                                    "kind": 161,
                                                                    "returnKeyword": {
                                                                        "kind": 37757022,
                                                                        "flags": 80,
                                                                        "start": 700,
                                                                        "end": 707
                                                                    },
                                                                    "expression": {
                                                                        "kind": 198,
                                                                        "left": {
                                                                            "kind": 134299649,
                                                                            "text": "x",
                                                                            "rawText": "x",
                                                                            "flags": 96,
                                                                            "start": 707,
                                                                            "end": 709
                                                                        },
                                                                        "operatorToken": {
                                                                            "kind": 99634,
                                                                            "flags": 96,
                                                                            "start": 709,
                                                                            "end": 711
                                                                        },
                                                                        "right": {
                                                                            "kind": 134299649,
                                                                            "text": "a",
                                                                            "rawText": "a",
                                                                            "flags": 96,
                                                                            "start": 711,
                                                                            "end": 713
                                                                        },
                                                                        "flags": 32,
                                                                        "start": 707,
                                                                        "end": 713
                                                                    },
                                                                    "flags": 80,
                                                                    "start": 700,
                                                                    "end": 713
                                                                }
                                                            ],
                                                            "flags": 32,
                                                            "start": 700,
                                                            "end": 713
                                                        },
                                                        "flags": 32,
                                                        "start": 698,
                                                        "end": 715
                                                    },
                                                    "returnType": null,
                                                    "flags": 32,
                                                    "start": 688,
                                                    "end": 715
                                                },
                                                "flags": 32,
                                                "start": 678,
                                                "end": 716
                                            },
                                            "flags": 16,
                                            "start": 678,
                                            "end": 717
                                        },
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 121,
                                                "expression": {
                                                    "kind": 271,
                                                    "arrowToken": {
                                                        "kind": 10,
                                                        "flags": 64,
                                                        "start": 729,
                                                        "end": 732
                                                    },
                                                    "typeParameters": null,
                                                    "parameters": [],
                                                    "asyncKeyword": null,
                                                    "returnType": null,
                                                    "contents": {
                                                        "kind": 198,
                                                        "left": {
                                                            "kind": 134299649,
                                                            "text": "x",
                                                            "rawText": "x",
                                                            "flags": 96,
                                                            "start": 732,
                                                            "end": 734
                                                        },
                                                        "operatorToken": {
                                                            "kind": 99634,
                                                            "flags": 96,
                                                            "start": 734,
                                                            "end": 736
                                                        },
                                                        "right": {
                                                            "kind": 134299649,
                                                            "text": "a",
                                                            "rawText": "a",
                                                            "flags": 96,
                                                            "start": 736,
                                                            "end": 738
                                                        },
                                                        "flags": 32,
                                                        "start": 732,
                                                        "end": 738
                                                    },
                                                    "flags": 32,
                                                    "start": 727,
                                                    "end": 738
                                                },
                                                "flags": 32,
                                                "start": 717,
                                                "end": 739
                                            },
                                            "flags": 16,
                                            "start": 717,
                                            "end": 740
                                        }
                                    ],
                                    "flags": 17,
                                    "start": 629,
                                    "end": 740
                                },
                                "flags": 16,
                                "start": 627,
                                "end": 746
                            },
                            "flags": 81,
                            "start": 620,
                            "end": 762
                        }
                    ],
                    "flags": 33,
                    "start": 620,
                    "end": 762
                },
                "flags": 32,
                "start": 618,
                "end": 764
            },
            "returnType": null,
            "flags": 16,
            "start": 600,
            "end": 764
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 764,
                "end": 774
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo4",
                "rawText": "foo4",
                "flags": 96,
                "start": 774,
                "end": 779
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 780,
                        "end": 781
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 779,
                "end": 782
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 165,
                            "forKeyword": {
                                "kind": 37757017,
                                "flags": 81,
                                "start": 784,
                                "end": 792
                            },
                            "initializer": {
                                "kind": 151,
                                "bindingList": [
                                    {
                                        "kind": 190,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "y",
                                            "rawText": "y",
                                            "flags": 96,
                                            "start": 797,
                                            "end": 799
                                        },
                                        "type": null,
                                        "initializer": {
                                            "kind": 201392130,
                                            "text": 0,
                                            "rawText": "0",
                                            "flags": 96,
                                            "start": 801,
                                            "end": 803
                                        },
                                        "flags": 16,
                                        "start": 797,
                                        "end": 803
                                    }
                                ],
                                "flags": 16,
                                "start": 797,
                                "end": 803
                            },
                            "condition": {
                                "kind": 128,
                                "operandToken": {
                                    "kind": 196635,
                                    "flags": 96,
                                    "start": 811,
                                    "end": 814
                                },
                                "operand": {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 96,
                                    "start": 814,
                                    "end": 815
                                },
                                "flags": 32,
                                "start": 811,
                                "end": 815
                            },
                            "incrementor": {
                                "kind": 198,
                                "left": {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 96,
                                    "start": 804,
                                    "end": 806
                                },
                                "operatorToken": {
                                    "kind": 536971330,
                                    "flags": 96,
                                    "start": 806,
                                    "end": 808
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 96,
                                    "start": 808,
                                    "end": 810
                                },
                                "flags": 32,
                                "start": 804,
                                "end": 810
                            },
                            "statement": {
                                "kind": 124,
                                "block": {
                                    "kind": 249,
                                    "statements": [
                                        {
                                            "kind": 162,
                                            "lexicalKeyword": {
                                                "kind": 41951307,
                                                "flags": 81,
                                                "start": 818,
                                                "end": 830
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
                                                            "flags": 96,
                                                            "start": 830,
                                                            "end": 832
                                                        },
                                                        "type": null,
                                                        "initializer": {
                                                            "kind": 129,
                                                            "member": {
                                                                "kind": 134299649,
                                                                "text": "arguments",
                                                                "rawText": "arguments",
                                                                "flags": 96,
                                                                "start": 834,
                                                                "end": 844
                                                            },
                                                            "expression": {
                                                                "kind": 134299649,
                                                                "text": "length",
                                                                "rawText": "length",
                                                                "flags": 96,
                                                                "start": 845,
                                                                "end": 851
                                                            },
                                                            "flags": 536870944,
                                                            "start": 834,
                                                            "end": 851
                                                        },
                                                        "flags": 16,
                                                        "start": 830,
                                                        "end": 851
                                                    }
                                                ],
                                                "flags": 17,
                                                "start": 830,
                                                "end": 851
                                            },
                                            "flags": 33554448,
                                            "start": 818,
                                            "end": 852
                                        },
                                        {
                                            "kind": 162,
                                            "lexicalKeyword": {
                                                "kind": 41951307,
                                                "flags": 81,
                                                "start": 852,
                                                "end": 864
                                            },
                                            "binding": {
                                                "kind": 151,
                                                "bindingList": [
                                                    {
                                                        "kind": 190,
                                                        "binding": {
                                                            "kind": 134299649,
                                                            "text": "x",
                                                            "rawText": "x",
                                                            "flags": 96,
                                                            "start": 864,
                                                            "end": 866
                                                        },
                                                        "type": null,
                                                        "initializer": {
                                                            "kind": 201392130,
                                                            "text": 1,
                                                            "rawText": "1",
                                                            "flags": 96,
                                                            "start": 868,
                                                            "end": 870
                                                        },
                                                        "flags": 16,
                                                        "start": 864,
                                                        "end": 870
                                                    }
                                                ],
                                                "flags": 17,
                                                "start": 864,
                                                "end": 870
                                            },
                                            "flags": 33554448,
                                            "start": 852,
                                            "end": 871
                                        },
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 121,
                                                "expression": {
                                                    "kind": 177,
                                                    "asyncKeyword": null,
                                                    "functionKeyword": {
                                                        "kind": 37822554,
                                                        "flags": 64,
                                                        "start": 881,
                                                        "end": 889
                                                    },
                                                    "asteriskToken": null,
                                                    "name": null,
                                                    "typeParameters": null,
                                                    "formalParameterList": {
                                                        "kind": 214,
                                                        "formalParameters": [],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "start": 889,
                                                        "end": 891
                                                    },
                                                    "contents": {
                                                        "kind": 216,
                                                        "functionStatementList": {
                                                            "kind": 217,
                                                            "directives": [],
                                                            "statements": [
                                                                {
                                                                    "kind": 161,
                                                                    "returnKeyword": {
                                                                        "kind": 37757022,
                                                                        "flags": 80,
                                                                        "start": 893,
                                                                        "end": 900
                                                                    },
                                                                    "expression": {
                                                                        "kind": 198,
                                                                        "left": {
                                                                            "kind": 134299649,
                                                                            "text": "x",
                                                                            "rawText": "x",
                                                                            "flags": 96,
                                                                            "start": 900,
                                                                            "end": 902
                                                                        },
                                                                        "operatorToken": {
                                                                            "kind": 99634,
                                                                            "flags": 96,
                                                                            "start": 902,
                                                                            "end": 904
                                                                        },
                                                                        "right": {
                                                                            "kind": 134299649,
                                                                            "text": "a",
                                                                            "rawText": "a",
                                                                            "flags": 96,
                                                                            "start": 904,
                                                                            "end": 906
                                                                        },
                                                                        "flags": 32,
                                                                        "start": 900,
                                                                        "end": 906
                                                                    },
                                                                    "flags": 80,
                                                                    "start": 893,
                                                                    "end": 906
                                                                }
                                                            ],
                                                            "flags": 32,
                                                            "start": 893,
                                                            "end": 906
                                                        },
                                                        "flags": 32,
                                                        "start": 891,
                                                        "end": 908
                                                    },
                                                    "returnType": null,
                                                    "flags": 32,
                                                    "start": 881,
                                                    "end": 908
                                                },
                                                "flags": 32,
                                                "start": 871,
                                                "end": 909
                                            },
                                            "flags": 16,
                                            "start": 871,
                                            "end": 910
                                        },
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 121,
                                                "expression": {
                                                    "kind": 271,
                                                    "arrowToken": {
                                                        "kind": 10,
                                                        "flags": 64,
                                                        "start": 922,
                                                        "end": 925
                                                    },
                                                    "typeParameters": null,
                                                    "parameters": [],
                                                    "asyncKeyword": null,
                                                    "returnType": null,
                                                    "contents": {
                                                        "kind": 198,
                                                        "left": {
                                                            "kind": 134299649,
                                                            "text": "x",
                                                            "rawText": "x",
                                                            "flags": 96,
                                                            "start": 925,
                                                            "end": 927
                                                        },
                                                        "operatorToken": {
                                                            "kind": 99634,
                                                            "flags": 96,
                                                            "start": 927,
                                                            "end": 929
                                                        },
                                                        "right": {
                                                            "kind": 134299649,
                                                            "text": "a",
                                                            "rawText": "a",
                                                            "flags": 96,
                                                            "start": 929,
                                                            "end": 931
                                                        },
                                                        "flags": 32,
                                                        "start": 925,
                                                        "end": 931
                                                    },
                                                    "flags": 32,
                                                    "start": 920,
                                                    "end": 931
                                                },
                                                "flags": 32,
                                                "start": 910,
                                                "end": 932
                                            },
                                            "flags": 16,
                                            "start": 910,
                                            "end": 933
                                        }
                                    ],
                                    "flags": 17,
                                    "start": 818,
                                    "end": 933
                                },
                                "flags": 16,
                                "start": 816,
                                "end": 939
                            },
                            "flags": 81,
                            "start": 784,
                            "end": 939
                        }
                    ],
                    "flags": 33,
                    "start": 784,
                    "end": 939
                },
                "flags": 32,
                "start": 782,
                "end": 941
            },
            "returnType": null,
            "flags": 16,
            "start": 764,
            "end": 941
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 941,
                "end": 951
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo5",
                "rawText": "foo5",
                "flags": 96,
                "start": 951,
                "end": 956
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 957,
                        "end": 958
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 956,
                "end": 959
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 165,
                            "forKeyword": {
                                "kind": 37757017,
                                "flags": 81,
                                "start": 961,
                                "end": 969
                            },
                            "initializer": {
                                "kind": 151,
                                "bindingList": [
                                    {
                                        "kind": 190,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 974,
                                            "end": 976
                                        },
                                        "type": null,
                                        "initializer": {
                                            "kind": 201392130,
                                            "text": 0,
                                            "rawText": "0",
                                            "flags": 96,
                                            "start": 978,
                                            "end": 980
                                        },
                                        "flags": 16,
                                        "start": 974,
                                        "end": 980
                                    },
                                    {
                                        "kind": 190,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "y",
                                            "rawText": "y",
                                            "flags": 96,
                                            "start": 981,
                                            "end": 983
                                        },
                                        "type": null,
                                        "initializer": {
                                            "kind": 201392130,
                                            "text": 1,
                                            "rawText": "1",
                                            "flags": 96,
                                            "start": 985,
                                            "end": 987
                                        },
                                        "flags": 16,
                                        "start": 981,
                                        "end": 987
                                    }
                                ],
                                "flags": 16,
                                "start": 974,
                                "end": 987
                            },
                            "condition": {
                                "kind": 128,
                                "operandToken": {
                                    "kind": 196635,
                                    "flags": 96,
                                    "start": 995,
                                    "end": 998
                                },
                                "operand": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 998,
                                    "end": 999
                                },
                                "flags": 32,
                                "start": 995,
                                "end": 999
                            },
                            "incrementor": {
                                "kind": 198,
                                "left": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 988,
                                    "end": 990
                                },
                                "operatorToken": {
                                    "kind": 536971330,
                                    "flags": 96,
                                    "start": 990,
                                    "end": 992
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 96,
                                    "start": 992,
                                    "end": 994
                                },
                                "flags": 32,
                                "start": 988,
                                "end": 994
                            },
                            "statement": {
                                "kind": 124,
                                "block": {
                                    "kind": 249,
                                    "statements": [
                                        {
                                            "kind": 162,
                                            "lexicalKeyword": {
                                                "kind": 41951307,
                                                "flags": 81,
                                                "start": 1002,
                                                "end": 1014
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
                                                            "flags": 96,
                                                            "start": 1014,
                                                            "end": 1016
                                                        },
                                                        "type": null,
                                                        "initializer": {
                                                            "kind": 129,
                                                            "member": {
                                                                "kind": 134299649,
                                                                "text": "arguments",
                                                                "rawText": "arguments",
                                                                "flags": 96,
                                                                "start": 1018,
                                                                "end": 1028
                                                            },
                                                            "expression": {
                                                                "kind": 134299649,
                                                                "text": "length",
                                                                "rawText": "length",
                                                                "flags": 96,
                                                                "start": 1029,
                                                                "end": 1035
                                                            },
                                                            "flags": 536870944,
                                                            "start": 1018,
                                                            "end": 1035
                                                        },
                                                        "flags": 16,
                                                        "start": 1014,
                                                        "end": 1035
                                                    }
                                                ],
                                                "flags": 17,
                                                "start": 1014,
                                                "end": 1035
                                            },
                                            "flags": 33554448,
                                            "start": 1002,
                                            "end": 1036
                                        },
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 121,
                                                "expression": {
                                                    "kind": 177,
                                                    "asyncKeyword": null,
                                                    "functionKeyword": {
                                                        "kind": 37822554,
                                                        "flags": 64,
                                                        "start": 1046,
                                                        "end": 1054
                                                    },
                                                    "asteriskToken": null,
                                                    "name": null,
                                                    "typeParameters": null,
                                                    "formalParameterList": {
                                                        "kind": 214,
                                                        "formalParameters": [],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "start": 1054,
                                                        "end": 1056
                                                    },
                                                    "contents": {
                                                        "kind": 216,
                                                        "functionStatementList": {
                                                            "kind": 217,
                                                            "directives": [],
                                                            "statements": [
                                                                {
                                                                    "kind": 161,
                                                                    "returnKeyword": {
                                                                        "kind": 37757022,
                                                                        "flags": 80,
                                                                        "start": 1058,
                                                                        "end": 1065
                                                                    },
                                                                    "expression": {
                                                                        "kind": 198,
                                                                        "left": {
                                                                            "kind": 198,
                                                                            "left": {
                                                                                "kind": 134299649,
                                                                                "text": "x",
                                                                                "rawText": "x",
                                                                                "flags": 96,
                                                                                "start": 1065,
                                                                                "end": 1067
                                                                            },
                                                                            "operatorToken": {
                                                                                "kind": 99634,
                                                                                "flags": 96,
                                                                                "start": 1067,
                                                                                "end": 1069
                                                                            },
                                                                            "right": {
                                                                                "kind": 134299649,
                                                                                "text": "y",
                                                                                "rawText": "y",
                                                                                "flags": 96,
                                                                                "start": 1069,
                                                                                "end": 1071
                                                                            },
                                                                            "flags": 32,
                                                                            "start": 1065,
                                                                            "end": 1071
                                                                        },
                                                                        "operatorToken": {
                                                                            "kind": 99634,
                                                                            "flags": 96,
                                                                            "start": 1071,
                                                                            "end": 1073
                                                                        },
                                                                        "right": {
                                                                            "kind": 134299649,
                                                                            "text": "a",
                                                                            "rawText": "a",
                                                                            "flags": 96,
                                                                            "start": 1073,
                                                                            "end": 1075
                                                                        },
                                                                        "flags": 32,
                                                                        "start": 1065,
                                                                        "end": 1075
                                                                    },
                                                                    "flags": 80,
                                                                    "start": 1058,
                                                                    "end": 1075
                                                                }
                                                            ],
                                                            "flags": 32,
                                                            "start": 1058,
                                                            "end": 1075
                                                        },
                                                        "flags": 32,
                                                        "start": 1056,
                                                        "end": 1077
                                                    },
                                                    "returnType": null,
                                                    "flags": 32,
                                                    "start": 1046,
                                                    "end": 1077
                                                },
                                                "flags": 32,
                                                "start": 1036,
                                                "end": 1078
                                            },
                                            "flags": 16,
                                            "start": 1036,
                                            "end": 1079
                                        },
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 121,
                                                "expression": {
                                                    "kind": 271,
                                                    "arrowToken": {
                                                        "kind": 10,
                                                        "flags": 64,
                                                        "start": 1091,
                                                        "end": 1094
                                                    },
                                                    "typeParameters": null,
                                                    "parameters": [],
                                                    "asyncKeyword": null,
                                                    "returnType": null,
                                                    "contents": {
                                                        "kind": 198,
                                                        "left": {
                                                            "kind": 198,
                                                            "left": {
                                                                "kind": 134299649,
                                                                "text": "x",
                                                                "rawText": "x",
                                                                "flags": 96,
                                                                "start": 1094,
                                                                "end": 1096
                                                            },
                                                            "operatorToken": {
                                                                "kind": 99634,
                                                                "flags": 96,
                                                                "start": 1096,
                                                                "end": 1098
                                                            },
                                                            "right": {
                                                                "kind": 134299649,
                                                                "text": "y",
                                                                "rawText": "y",
                                                                "flags": 96,
                                                                "start": 1098,
                                                                "end": 1100
                                                            },
                                                            "flags": 32,
                                                            "start": 1094,
                                                            "end": 1100
                                                        },
                                                        "operatorToken": {
                                                            "kind": 99634,
                                                            "flags": 96,
                                                            "start": 1100,
                                                            "end": 1102
                                                        },
                                                        "right": {
                                                            "kind": 134299649,
                                                            "text": "a",
                                                            "rawText": "a",
                                                            "flags": 96,
                                                            "start": 1102,
                                                            "end": 1104
                                                        },
                                                        "flags": 32,
                                                        "start": 1094,
                                                        "end": 1104
                                                    },
                                                    "flags": 32,
                                                    "start": 1089,
                                                    "end": 1104
                                                },
                                                "flags": 32,
                                                "start": 1079,
                                                "end": 1105
                                            },
                                            "flags": 16,
                                            "start": 1079,
                                            "end": 1106
                                        }
                                    ],
                                    "flags": 17,
                                    "start": 1002,
                                    "end": 1106
                                },
                                "flags": 16,
                                "start": 1000,
                                "end": 1112
                            },
                            "flags": 81,
                            "start": 961,
                            "end": 1112
                        }
                    ],
                    "flags": 33,
                    "start": 961,
                    "end": 1112
                },
                "flags": 32,
                "start": 959,
                "end": 1114
            },
            "returnType": null,
            "flags": 16,
            "start": 941,
            "end": 1114
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 1114,
                "end": 1125
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo6",
                "rawText": "foo6",
                "flags": 96,
                "start": 1125,
                "end": 1130
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 1131,
                        "end": 1132
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 1130,
                "end": 1133
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 154,
                            "whileKeyword": {
                                "kind": 37757028,
                                "flags": 81,
                                "start": 1135,
                                "end": 1145
                            },
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 201392130,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 96,
                                    "start": 1147,
                                    "end": 1148
                                },
                                "operatorToken": {
                                    "kind": 34620,
                                    "flags": 96,
                                    "start": 1148,
                                    "end": 1152
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 96,
                                    "start": 1152,
                                    "end": 1154
                                },
                                "flags": 32,
                                "start": 1147,
                                "end": 1154
                            },
                            "statement": {
                                "kind": 124,
                                "block": {
                                    "kind": 249,
                                    "statements": [
                                        {
                                            "kind": 162,
                                            "lexicalKeyword": {
                                                "kind": 41951307,
                                                "flags": 81,
                                                "start": 1157,
                                                "end": 1169
                                            },
                                            "binding": {
                                                "kind": 151,
                                                "bindingList": [
                                                    {
                                                        "kind": 190,
                                                        "binding": {
                                                            "kind": 134299649,
                                                            "text": "x",
                                                            "rawText": "x",
                                                            "flags": 96,
                                                            "start": 1169,
                                                            "end": 1171
                                                        },
                                                        "type": null,
                                                        "initializer": null,
                                                        "flags": 16,
                                                        "start": 1169,
                                                        "end": 1171
                                                    },
                                                    {
                                                        "kind": 190,
                                                        "binding": {
                                                            "kind": 134299649,
                                                            "text": "y",
                                                            "rawText": "y",
                                                            "flags": 96,
                                                            "start": 1172,
                                                            "end": 1174
                                                        },
                                                        "type": null,
                                                        "initializer": null,
                                                        "flags": 16,
                                                        "start": 1172,
                                                        "end": 1174
                                                    }
                                                ],
                                                "flags": 17,
                                                "start": 1169,
                                                "end": 1174
                                            },
                                            "flags": 33554448,
                                            "start": 1157,
                                            "end": 1175
                                        },
                                        {
                                            "kind": 162,
                                            "lexicalKeyword": {
                                                "kind": 41951307,
                                                "flags": 81,
                                                "start": 1175,
                                                "end": 1187
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
                                                            "flags": 96,
                                                            "start": 1187,
                                                            "end": 1189
                                                        },
                                                        "type": null,
                                                        "initializer": {
                                                            "kind": 129,
                                                            "member": {
                                                                "kind": 134299649,
                                                                "text": "arguments",
                                                                "rawText": "arguments",
                                                                "flags": 96,
                                                                "start": 1191,
                                                                "end": 1201
                                                            },
                                                            "expression": {
                                                                "kind": 134299649,
                                                                "text": "length",
                                                                "rawText": "length",
                                                                "flags": 96,
                                                                "start": 1202,
                                                                "end": 1208
                                                            },
                                                            "flags": 536870944,
                                                            "start": 1191,
                                                            "end": 1208
                                                        },
                                                        "flags": 16,
                                                        "start": 1187,
                                                        "end": 1208
                                                    }
                                                ],
                                                "flags": 17,
                                                "start": 1187,
                                                "end": 1208
                                            },
                                            "flags": 33554448,
                                            "start": 1175,
                                            "end": 1209
                                        },
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 121,
                                                "expression": {
                                                    "kind": 177,
                                                    "asyncKeyword": null,
                                                    "functionKeyword": {
                                                        "kind": 37822554,
                                                        "flags": 64,
                                                        "start": 1219,
                                                        "end": 1227
                                                    },
                                                    "asteriskToken": null,
                                                    "name": null,
                                                    "typeParameters": null,
                                                    "formalParameterList": {
                                                        "kind": 214,
                                                        "formalParameters": [],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "start": 1227,
                                                        "end": 1229
                                                    },
                                                    "contents": {
                                                        "kind": 216,
                                                        "functionStatementList": {
                                                            "kind": 217,
                                                            "directives": [],
                                                            "statements": [
                                                                {
                                                                    "kind": 161,
                                                                    "returnKeyword": {
                                                                        "kind": 37757022,
                                                                        "flags": 80,
                                                                        "start": 1231,
                                                                        "end": 1238
                                                                    },
                                                                    "expression": {
                                                                        "kind": 198,
                                                                        "left": {
                                                                            "kind": 198,
                                                                            "left": {
                                                                                "kind": 134299649,
                                                                                "text": "x",
                                                                                "rawText": "x",
                                                                                "flags": 96,
                                                                                "start": 1238,
                                                                                "end": 1240
                                                                            },
                                                                            "operatorToken": {
                                                                                "kind": 99634,
                                                                                "flags": 96,
                                                                                "start": 1240,
                                                                                "end": 1242
                                                                            },
                                                                            "right": {
                                                                                "kind": 134299649,
                                                                                "text": "y",
                                                                                "rawText": "y",
                                                                                "flags": 96,
                                                                                "start": 1242,
                                                                                "end": 1244
                                                                            },
                                                                            "flags": 32,
                                                                            "start": 1238,
                                                                            "end": 1244
                                                                        },
                                                                        "operatorToken": {
                                                                            "kind": 99634,
                                                                            "flags": 96,
                                                                            "start": 1244,
                                                                            "end": 1246
                                                                        },
                                                                        "right": {
                                                                            "kind": 134299649,
                                                                            "text": "a",
                                                                            "rawText": "a",
                                                                            "flags": 96,
                                                                            "start": 1246,
                                                                            "end": 1248
                                                                        },
                                                                        "flags": 32,
                                                                        "start": 1238,
                                                                        "end": 1248
                                                                    },
                                                                    "flags": 80,
                                                                    "start": 1231,
                                                                    "end": 1248
                                                                }
                                                            ],
                                                            "flags": 32,
                                                            "start": 1231,
                                                            "end": 1248
                                                        },
                                                        "flags": 32,
                                                        "start": 1229,
                                                        "end": 1250
                                                    },
                                                    "returnType": null,
                                                    "flags": 32,
                                                    "start": 1219,
                                                    "end": 1250
                                                },
                                                "flags": 32,
                                                "start": 1209,
                                                "end": 1251
                                            },
                                            "flags": 16,
                                            "start": 1209,
                                            "end": 1252
                                        },
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 121,
                                                "expression": {
                                                    "kind": 271,
                                                    "arrowToken": {
                                                        "kind": 10,
                                                        "flags": 64,
                                                        "start": 1264,
                                                        "end": 1267
                                                    },
                                                    "typeParameters": null,
                                                    "parameters": [],
                                                    "asyncKeyword": null,
                                                    "returnType": null,
                                                    "contents": {
                                                        "kind": 198,
                                                        "left": {
                                                            "kind": 198,
                                                            "left": {
                                                                "kind": 134299649,
                                                                "text": "x",
                                                                "rawText": "x",
                                                                "flags": 96,
                                                                "start": 1267,
                                                                "end": 1269
                                                            },
                                                            "operatorToken": {
                                                                "kind": 99634,
                                                                "flags": 96,
                                                                "start": 1269,
                                                                "end": 1271
                                                            },
                                                            "right": {
                                                                "kind": 134299649,
                                                                "text": "y",
                                                                "rawText": "y",
                                                                "flags": 96,
                                                                "start": 1271,
                                                                "end": 1273
                                                            },
                                                            "flags": 32,
                                                            "start": 1267,
                                                            "end": 1273
                                                        },
                                                        "operatorToken": {
                                                            "kind": 99634,
                                                            "flags": 96,
                                                            "start": 1273,
                                                            "end": 1275
                                                        },
                                                        "right": {
                                                            "kind": 134299649,
                                                            "text": "a",
                                                            "rawText": "a",
                                                            "flags": 96,
                                                            "start": 1275,
                                                            "end": 1277
                                                        },
                                                        "flags": 32,
                                                        "start": 1267,
                                                        "end": 1277
                                                    },
                                                    "flags": 32,
                                                    "start": 1262,
                                                    "end": 1277
                                                },
                                                "flags": 32,
                                                "start": 1252,
                                                "end": 1278
                                            },
                                            "flags": 16,
                                            "start": 1252,
                                            "end": 1279
                                        }
                                    ],
                                    "flags": 17,
                                    "start": 1157,
                                    "end": 1279
                                },
                                "flags": 16,
                                "start": 1155,
                                "end": 1285
                            },
                            "flags": 81,
                            "start": 1135,
                            "end": 1285
                        }
                    ],
                    "flags": 33,
                    "start": 1135,
                    "end": 1285
                },
                "flags": 32,
                "start": 1133,
                "end": 1287
            },
            "returnType": null,
            "flags": 16,
            "start": 1114,
            "end": 1287
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 1287,
                "end": 1297
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo7",
                "rawText": "foo7",
                "flags": 96,
                "start": 1297,
                "end": 1302
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 1303,
                        "end": 1304
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 1302,
                "end": 1305
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 169,
                            "doKeyword": {
                                "kind": 4202580,
                                "flags": 81,
                                "start": 1307,
                                "end": 1314
                            },
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 201392130,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 96,
                                    "start": 1452,
                                    "end": 1453
                                },
                                "operatorToken": {
                                    "kind": 34620,
                                    "flags": 96,
                                    "start": 1453,
                                    "end": 1457
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 96,
                                    "start": 1457,
                                    "end": 1459
                                },
                                "flags": 32,
                                "start": 1452,
                                "end": 1459
                            },
                            "whileKeyword": {
                                "kind": 37757028,
                                "flags": 64,
                                "start": 1444,
                                "end": 1450
                            },
                            "statement": {
                                "kind": 124,
                                "block": {
                                    "kind": 249,
                                    "statements": [
                                        {
                                            "kind": 162,
                                            "lexicalKeyword": {
                                                "kind": 41951307,
                                                "flags": 81,
                                                "start": 1316,
                                                "end": 1328
                                            },
                                            "binding": {
                                                "kind": 151,
                                                "bindingList": [
                                                    {
                                                        "kind": 190,
                                                        "binding": {
                                                            "kind": 134299649,
                                                            "text": "x",
                                                            "rawText": "x",
                                                            "flags": 96,
                                                            "start": 1328,
                                                            "end": 1330
                                                        },
                                                        "type": null,
                                                        "initializer": null,
                                                        "flags": 16,
                                                        "start": 1328,
                                                        "end": 1330
                                                    },
                                                    {
                                                        "kind": 190,
                                                        "binding": {
                                                            "kind": 134299649,
                                                            "text": "y",
                                                            "rawText": "y",
                                                            "flags": 96,
                                                            "start": 1331,
                                                            "end": 1333
                                                        },
                                                        "type": null,
                                                        "initializer": null,
                                                        "flags": 16,
                                                        "start": 1331,
                                                        "end": 1333
                                                    }
                                                ],
                                                "flags": 17,
                                                "start": 1328,
                                                "end": 1333
                                            },
                                            "flags": 33554448,
                                            "start": 1316,
                                            "end": 1334
                                        },
                                        {
                                            "kind": 162,
                                            "lexicalKeyword": {
                                                "kind": 41951307,
                                                "flags": 81,
                                                "start": 1334,
                                                "end": 1346
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
                                                            "flags": 96,
                                                            "start": 1346,
                                                            "end": 1348
                                                        },
                                                        "type": null,
                                                        "initializer": {
                                                            "kind": 129,
                                                            "member": {
                                                                "kind": 134299649,
                                                                "text": "arguments",
                                                                "rawText": "arguments",
                                                                "flags": 96,
                                                                "start": 1350,
                                                                "end": 1360
                                                            },
                                                            "expression": {
                                                                "kind": 134299649,
                                                                "text": "length",
                                                                "rawText": "length",
                                                                "flags": 96,
                                                                "start": 1361,
                                                                "end": 1367
                                                            },
                                                            "flags": 536870944,
                                                            "start": 1350,
                                                            "end": 1367
                                                        },
                                                        "flags": 16,
                                                        "start": 1346,
                                                        "end": 1367
                                                    }
                                                ],
                                                "flags": 17,
                                                "start": 1346,
                                                "end": 1367
                                            },
                                            "flags": 33554448,
                                            "start": 1334,
                                            "end": 1368
                                        },
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 121,
                                                "expression": {
                                                    "kind": 177,
                                                    "asyncKeyword": null,
                                                    "functionKeyword": {
                                                        "kind": 37822554,
                                                        "flags": 64,
                                                        "start": 1378,
                                                        "end": 1386
                                                    },
                                                    "asteriskToken": null,
                                                    "name": null,
                                                    "typeParameters": null,
                                                    "formalParameterList": {
                                                        "kind": 214,
                                                        "formalParameters": [],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "start": 1386,
                                                        "end": 1388
                                                    },
                                                    "contents": {
                                                        "kind": 216,
                                                        "functionStatementList": {
                                                            "kind": 217,
                                                            "directives": [],
                                                            "statements": [
                                                                {
                                                                    "kind": 161,
                                                                    "returnKeyword": {
                                                                        "kind": 37757022,
                                                                        "flags": 80,
                                                                        "start": 1390,
                                                                        "end": 1397
                                                                    },
                                                                    "expression": {
                                                                        "kind": 198,
                                                                        "left": {
                                                                            "kind": 198,
                                                                            "left": {
                                                                                "kind": 134299649,
                                                                                "text": "x",
                                                                                "rawText": "x",
                                                                                "flags": 96,
                                                                                "start": 1397,
                                                                                "end": 1399
                                                                            },
                                                                            "operatorToken": {
                                                                                "kind": 99634,
                                                                                "flags": 96,
                                                                                "start": 1399,
                                                                                "end": 1401
                                                                            },
                                                                            "right": {
                                                                                "kind": 134299649,
                                                                                "text": "y",
                                                                                "rawText": "y",
                                                                                "flags": 96,
                                                                                "start": 1401,
                                                                                "end": 1403
                                                                            },
                                                                            "flags": 32,
                                                                            "start": 1397,
                                                                            "end": 1403
                                                                        },
                                                                        "operatorToken": {
                                                                            "kind": 99634,
                                                                            "flags": 96,
                                                                            "start": 1403,
                                                                            "end": 1405
                                                                        },
                                                                        "right": {
                                                                            "kind": 134299649,
                                                                            "text": "a",
                                                                            "rawText": "a",
                                                                            "flags": 96,
                                                                            "start": 1405,
                                                                            "end": 1407
                                                                        },
                                                                        "flags": 32,
                                                                        "start": 1397,
                                                                        "end": 1407
                                                                    },
                                                                    "flags": 80,
                                                                    "start": 1390,
                                                                    "end": 1407
                                                                }
                                                            ],
                                                            "flags": 32,
                                                            "start": 1390,
                                                            "end": 1407
                                                        },
                                                        "flags": 32,
                                                        "start": 1388,
                                                        "end": 1409
                                                    },
                                                    "returnType": null,
                                                    "flags": 32,
                                                    "start": 1378,
                                                    "end": 1409
                                                },
                                                "flags": 32,
                                                "start": 1368,
                                                "end": 1410
                                            },
                                            "flags": 16,
                                            "start": 1368,
                                            "end": 1411
                                        },
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 121,
                                                "expression": {
                                                    "kind": 271,
                                                    "arrowToken": {
                                                        "kind": 10,
                                                        "flags": 64,
                                                        "start": 1423,
                                                        "end": 1426
                                                    },
                                                    "typeParameters": null,
                                                    "parameters": [],
                                                    "asyncKeyword": null,
                                                    "returnType": null,
                                                    "contents": {
                                                        "kind": 198,
                                                        "left": {
                                                            "kind": 198,
                                                            "left": {
                                                                "kind": 134299649,
                                                                "text": "x",
                                                                "rawText": "x",
                                                                "flags": 96,
                                                                "start": 1426,
                                                                "end": 1428
                                                            },
                                                            "operatorToken": {
                                                                "kind": 99634,
                                                                "flags": 96,
                                                                "start": 1428,
                                                                "end": 1430
                                                            },
                                                            "right": {
                                                                "kind": 134299649,
                                                                "text": "y",
                                                                "rawText": "y",
                                                                "flags": 96,
                                                                "start": 1430,
                                                                "end": 1432
                                                            },
                                                            "flags": 32,
                                                            "start": 1426,
                                                            "end": 1432
                                                        },
                                                        "operatorToken": {
                                                            "kind": 99634,
                                                            "flags": 96,
                                                            "start": 1432,
                                                            "end": 1434
                                                        },
                                                        "right": {
                                                            "kind": 134299649,
                                                            "text": "a",
                                                            "rawText": "a",
                                                            "flags": 96,
                                                            "start": 1434,
                                                            "end": 1436
                                                        },
                                                        "flags": 32,
                                                        "start": 1426,
                                                        "end": 1436
                                                    },
                                                    "flags": 32,
                                                    "start": 1421,
                                                    "end": 1436
                                                },
                                                "flags": 32,
                                                "start": 1411,
                                                "end": 1437
                                            },
                                            "flags": 16,
                                            "start": 1411,
                                            "end": 1438
                                        }
                                    ],
                                    "flags": 17,
                                    "start": 1316,
                                    "end": 1438
                                },
                                "flags": 16,
                                "start": 1314,
                                "end": 1444
                            },
                            "flags": 81,
                            "start": 1307,
                            "end": 1460
                        }
                    ],
                    "flags": 33,
                    "start": 1307,
                    "end": 1460
                },
                "flags": 32,
                "start": 1305,
                "end": 1462
            },
            "returnType": null,
            "flags": 16,
            "start": 1287,
            "end": 1462
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 1462,
                "end": 1473
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo8",
                "rawText": "foo8",
                "flags": 96,
                "start": 1473,
                "end": 1478
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 1479,
                        "end": 1480
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 1478,
                "end": 1481
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 165,
                            "forKeyword": {
                                "kind": 37757017,
                                "flags": 81,
                                "start": 1483,
                                "end": 1491
                            },
                            "initializer": {
                                "kind": 151,
                                "bindingList": [
                                    {
                                        "kind": 190,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "y",
                                            "rawText": "y",
                                            "flags": 96,
                                            "start": 1496,
                                            "end": 1498
                                        },
                                        "type": null,
                                        "initializer": {
                                            "kind": 201392130,
                                            "text": 0,
                                            "rawText": "0",
                                            "flags": 96,
                                            "start": 1500,
                                            "end": 1502
                                        },
                                        "flags": 16,
                                        "start": 1496,
                                        "end": 1502
                                    }
                                ],
                                "flags": 16,
                                "start": 1496,
                                "end": 1502
                            },
                            "condition": {
                                "kind": 128,
                                "operandToken": {
                                    "kind": 196635,
                                    "flags": 96,
                                    "start": 1510,
                                    "end": 1513
                                },
                                "operand": {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 96,
                                    "start": 1513,
                                    "end": 1514
                                },
                                "flags": 32,
                                "start": 1510,
                                "end": 1514
                            },
                            "incrementor": {
                                "kind": 198,
                                "left": {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 96,
                                    "start": 1503,
                                    "end": 1505
                                },
                                "operatorToken": {
                                    "kind": 536971330,
                                    "flags": 96,
                                    "start": 1505,
                                    "end": 1507
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 96,
                                    "start": 1507,
                                    "end": 1509
                                },
                                "flags": 32,
                                "start": 1503,
                                "end": 1509
                            },
                            "statement": {
                                "kind": 124,
                                "block": {
                                    "kind": 249,
                                    "statements": [
                                        {
                                            "kind": 162,
                                            "lexicalKeyword": {
                                                "kind": 41951307,
                                                "flags": 81,
                                                "start": 1517,
                                                "end": 1529
                                            },
                                            "binding": {
                                                "kind": 151,
                                                "bindingList": [
                                                    {
                                                        "kind": 190,
                                                        "binding": {
                                                            "kind": 134299649,
                                                            "text": "x",
                                                            "rawText": "x",
                                                            "flags": 96,
                                                            "start": 1529,
                                                            "end": 1531
                                                        },
                                                        "type": null,
                                                        "initializer": {
                                                            "kind": 201392130,
                                                            "text": 1,
                                                            "rawText": "1",
                                                            "flags": 96,
                                                            "start": 1533,
                                                            "end": 1535
                                                        },
                                                        "flags": 16,
                                                        "start": 1529,
                                                        "end": 1535
                                                    }
                                                ],
                                                "flags": 17,
                                                "start": 1529,
                                                "end": 1535
                                            },
                                            "flags": 33554448,
                                            "start": 1517,
                                            "end": 1536
                                        },
                                        {
                                            "kind": 162,
                                            "lexicalKeyword": {
                                                "kind": 41951307,
                                                "flags": 81,
                                                "start": 1536,
                                                "end": 1548
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
                                                            "flags": 96,
                                                            "start": 1548,
                                                            "end": 1550
                                                        },
                                                        "type": null,
                                                        "initializer": {
                                                            "kind": 129,
                                                            "member": {
                                                                "kind": 134299649,
                                                                "text": "arguments",
                                                                "rawText": "arguments",
                                                                "flags": 96,
                                                                "start": 1552,
                                                                "end": 1562
                                                            },
                                                            "expression": {
                                                                "kind": 134299649,
                                                                "text": "length",
                                                                "rawText": "length",
                                                                "flags": 96,
                                                                "start": 1563,
                                                                "end": 1569
                                                            },
                                                            "flags": 536870944,
                                                            "start": 1552,
                                                            "end": 1569
                                                        },
                                                        "flags": 16,
                                                        "start": 1548,
                                                        "end": 1569
                                                    }
                                                ],
                                                "flags": 17,
                                                "start": 1548,
                                                "end": 1569
                                            },
                                            "flags": 33554448,
                                            "start": 1536,
                                            "end": 1570
                                        },
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 121,
                                                "expression": {
                                                    "kind": 177,
                                                    "asyncKeyword": null,
                                                    "functionKeyword": {
                                                        "kind": 37822554,
                                                        "flags": 64,
                                                        "start": 1580,
                                                        "end": 1588
                                                    },
                                                    "asteriskToken": null,
                                                    "name": null,
                                                    "typeParameters": null,
                                                    "formalParameterList": {
                                                        "kind": 214,
                                                        "formalParameters": [],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "start": 1588,
                                                        "end": 1590
                                                    },
                                                    "contents": {
                                                        "kind": 216,
                                                        "functionStatementList": {
                                                            "kind": 217,
                                                            "directives": [],
                                                            "statements": [
                                                                {
                                                                    "kind": 161,
                                                                    "returnKeyword": {
                                                                        "kind": 37757022,
                                                                        "flags": 80,
                                                                        "start": 1592,
                                                                        "end": 1599
                                                                    },
                                                                    "expression": {
                                                                        "kind": 198,
                                                                        "left": {
                                                                            "kind": 198,
                                                                            "left": {
                                                                                "kind": 134299649,
                                                                                "text": "x",
                                                                                "rawText": "x",
                                                                                "flags": 96,
                                                                                "start": 1599,
                                                                                "end": 1601
                                                                            },
                                                                            "operatorToken": {
                                                                                "kind": 99634,
                                                                                "flags": 96,
                                                                                "start": 1601,
                                                                                "end": 1603
                                                                            },
                                                                            "right": {
                                                                                "kind": 134299649,
                                                                                "text": "y",
                                                                                "rawText": "y",
                                                                                "flags": 96,
                                                                                "start": 1603,
                                                                                "end": 1605
                                                                            },
                                                                            "flags": 32,
                                                                            "start": 1599,
                                                                            "end": 1605
                                                                        },
                                                                        "operatorToken": {
                                                                            "kind": 99634,
                                                                            "flags": 96,
                                                                            "start": 1605,
                                                                            "end": 1607
                                                                        },
                                                                        "right": {
                                                                            "kind": 134299649,
                                                                            "text": "a",
                                                                            "rawText": "a",
                                                                            "flags": 96,
                                                                            "start": 1607,
                                                                            "end": 1609
                                                                        },
                                                                        "flags": 32,
                                                                        "start": 1599,
                                                                        "end": 1609
                                                                    },
                                                                    "flags": 80,
                                                                    "start": 1592,
                                                                    "end": 1609
                                                                }
                                                            ],
                                                            "flags": 32,
                                                            "start": 1592,
                                                            "end": 1609
                                                        },
                                                        "flags": 32,
                                                        "start": 1590,
                                                        "end": 1611
                                                    },
                                                    "returnType": null,
                                                    "flags": 32,
                                                    "start": 1580,
                                                    "end": 1611
                                                },
                                                "flags": 32,
                                                "start": 1570,
                                                "end": 1612
                                            },
                                            "flags": 16,
                                            "start": 1570,
                                            "end": 1613
                                        },
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 121,
                                                "expression": {
                                                    "kind": 271,
                                                    "arrowToken": {
                                                        "kind": 10,
                                                        "flags": 64,
                                                        "start": 1625,
                                                        "end": 1628
                                                    },
                                                    "typeParameters": null,
                                                    "parameters": [],
                                                    "asyncKeyword": null,
                                                    "returnType": null,
                                                    "contents": {
                                                        "kind": 198,
                                                        "left": {
                                                            "kind": 198,
                                                            "left": {
                                                                "kind": 134299649,
                                                                "text": "x",
                                                                "rawText": "x",
                                                                "flags": 96,
                                                                "start": 1628,
                                                                "end": 1630
                                                            },
                                                            "operatorToken": {
                                                                "kind": 99634,
                                                                "flags": 96,
                                                                "start": 1630,
                                                                "end": 1632
                                                            },
                                                            "right": {
                                                                "kind": 134299649,
                                                                "text": "y",
                                                                "rawText": "y",
                                                                "flags": 96,
                                                                "start": 1632,
                                                                "end": 1634
                                                            },
                                                            "flags": 32,
                                                            "start": 1628,
                                                            "end": 1634
                                                        },
                                                        "operatorToken": {
                                                            "kind": 99634,
                                                            "flags": 96,
                                                            "start": 1634,
                                                            "end": 1636
                                                        },
                                                        "right": {
                                                            "kind": 134299649,
                                                            "text": "a",
                                                            "rawText": "a",
                                                            "flags": 96,
                                                            "start": 1636,
                                                            "end": 1638
                                                        },
                                                        "flags": 32,
                                                        "start": 1628,
                                                        "end": 1638
                                                    },
                                                    "flags": 32,
                                                    "start": 1623,
                                                    "end": 1638
                                                },
                                                "flags": 32,
                                                "start": 1613,
                                                "end": 1639
                                            },
                                            "flags": 16,
                                            "start": 1613,
                                            "end": 1640
                                        }
                                    ],
                                    "flags": 17,
                                    "start": 1517,
                                    "end": 1640
                                },
                                "flags": 16,
                                "start": 1515,
                                "end": 1646
                            },
                            "flags": 81,
                            "start": 1483,
                            "end": 1646
                        }
                    ],
                    "flags": 33,
                    "start": 1483,
                    "end": 1646
                },
                "flags": 32,
                "start": 1481,
                "end": 1648
            },
            "returnType": null,
            "flags": 16,
            "start": 1462,
            "end": 1648
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 1648,
                "end": 1673
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo0_c",
                "rawText": "foo0_c",
                "flags": 96,
                "start": 1673,
                "end": 1680
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 1681,
                        "end": 1682
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 1680,
                "end": 1683
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 167,
                            "forKeyword": {
                                "kind": 37757017,
                                "flags": 81,
                                "start": 1685,
                                "end": 1693
                            },
                            "awaitKeyword": null,
                            "initializer": {
                                "kind": 151,
                                "bindingList": [
                                    {
                                        "kind": 190,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 1700,
                                            "end": 1702
                                        },
                                        "type": null,
                                        "initializer": null,
                                        "flags": 16,
                                        "start": 1700,
                                        "end": 1702
                                    }
                                ],
                                "flags": 16777232,
                                "start": 1700,
                                "end": 1702
                            },
                            "ofKeyword": {
                                "kind": 16793717,
                                "flags": 64,
                                "start": 1702,
                                "end": 1705
                            },
                            "expression": {
                                "kind": 119,
                                "elementList": {
                                    "kind": 270,
                                    "elements": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 1707,
                                    "end": 1707
                                },
                                "flags": 32,
                                "start": 1705,
                                "end": 1708
                            },
                            "statement": {
                                "kind": 124,
                                "block": {
                                    "kind": 249,
                                    "statements": [
                                        {
                                            "kind": 162,
                                            "lexicalKeyword": {
                                                "kind": 37757004,
                                                "flags": 81,
                                                "start": 1711,
                                                "end": 1725
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
                                                            "flags": 96,
                                                            "start": 1725,
                                                            "end": 1727
                                                        },
                                                        "type": null,
                                                        "initializer": {
                                                            "kind": 129,
                                                            "member": {
                                                                "kind": 134299649,
                                                                "text": "arguments",
                                                                "rawText": "arguments",
                                                                "flags": 96,
                                                                "start": 1729,
                                                                "end": 1739
                                                            },
                                                            "expression": {
                                                                "kind": 134299649,
                                                                "text": "length",
                                                                "rawText": "length",
                                                                "flags": 96,
                                                                "start": 1740,
                                                                "end": 1746
                                                            },
                                                            "flags": 536870944,
                                                            "start": 1729,
                                                            "end": 1746
                                                        },
                                                        "flags": 16,
                                                        "start": 1725,
                                                        "end": 1746
                                                    }
                                                ],
                                                "flags": 16777232,
                                                "start": 1725,
                                                "end": 1746
                                            },
                                            "flags": 33554448,
                                            "start": 1711,
                                            "end": 1747
                                        },
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 121,
                                                "expression": {
                                                    "kind": 177,
                                                    "asyncKeyword": null,
                                                    "functionKeyword": {
                                                        "kind": 37822554,
                                                        "flags": 64,
                                                        "start": 1757,
                                                        "end": 1765
                                                    },
                                                    "asteriskToken": null,
                                                    "name": null,
                                                    "typeParameters": null,
                                                    "formalParameterList": {
                                                        "kind": 214,
                                                        "formalParameters": [],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "start": 1765,
                                                        "end": 1767
                                                    },
                                                    "contents": {
                                                        "kind": 216,
                                                        "functionStatementList": {
                                                            "kind": 217,
                                                            "directives": [],
                                                            "statements": [
                                                                {
                                                                    "kind": 161,
                                                                    "returnKeyword": {
                                                                        "kind": 37757022,
                                                                        "flags": 80,
                                                                        "start": 1769,
                                                                        "end": 1776
                                                                    },
                                                                    "expression": {
                                                                        "kind": 198,
                                                                        "left": {
                                                                            "kind": 134299649,
                                                                            "text": "x",
                                                                            "rawText": "x",
                                                                            "flags": 96,
                                                                            "start": 1776,
                                                                            "end": 1778
                                                                        },
                                                                        "operatorToken": {
                                                                            "kind": 99634,
                                                                            "flags": 96,
                                                                            "start": 1778,
                                                                            "end": 1780
                                                                        },
                                                                        "right": {
                                                                            "kind": 134299649,
                                                                            "text": "a",
                                                                            "rawText": "a",
                                                                            "flags": 96,
                                                                            "start": 1780,
                                                                            "end": 1782
                                                                        },
                                                                        "flags": 32,
                                                                        "start": 1776,
                                                                        "end": 1782
                                                                    },
                                                                    "flags": 80,
                                                                    "start": 1769,
                                                                    "end": 1782
                                                                }
                                                            ],
                                                            "flags": 32,
                                                            "start": 1769,
                                                            "end": 1782
                                                        },
                                                        "flags": 32,
                                                        "start": 1767,
                                                        "end": 1784
                                                    },
                                                    "returnType": null,
                                                    "flags": 32,
                                                    "start": 1757,
                                                    "end": 1784
                                                },
                                                "flags": 32,
                                                "start": 1747,
                                                "end": 1785
                                            },
                                            "flags": 16,
                                            "start": 1747,
                                            "end": 1786
                                        },
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 121,
                                                "expression": {
                                                    "kind": 271,
                                                    "arrowToken": {
                                                        "kind": 10,
                                                        "flags": 64,
                                                        "start": 1798,
                                                        "end": 1801
                                                    },
                                                    "typeParameters": null,
                                                    "parameters": [],
                                                    "asyncKeyword": null,
                                                    "returnType": null,
                                                    "contents": {
                                                        "kind": 198,
                                                        "left": {
                                                            "kind": 134299649,
                                                            "text": "x",
                                                            "rawText": "x",
                                                            "flags": 96,
                                                            "start": 1801,
                                                            "end": 1803
                                                        },
                                                        "operatorToken": {
                                                            "kind": 99634,
                                                            "flags": 96,
                                                            "start": 1803,
                                                            "end": 1805
                                                        },
                                                        "right": {
                                                            "kind": 134299649,
                                                            "text": "a",
                                                            "rawText": "a",
                                                            "flags": 96,
                                                            "start": 1805,
                                                            "end": 1807
                                                        },
                                                        "flags": 32,
                                                        "start": 1801,
                                                        "end": 1807
                                                    },
                                                    "flags": 32,
                                                    "start": 1796,
                                                    "end": 1807
                                                },
                                                "flags": 32,
                                                "start": 1786,
                                                "end": 1808
                                            },
                                            "flags": 16,
                                            "start": 1786,
                                            "end": 1809
                                        }
                                    ],
                                    "flags": 17,
                                    "start": 1711,
                                    "end": 1809
                                },
                                "flags": 16,
                                "start": 1709,
                                "end": 1815
                            },
                            "flags": 81,
                            "start": 1685,
                            "end": 1815
                        }
                    ],
                    "flags": 33,
                    "start": 1685,
                    "end": 1815
                },
                "flags": 32,
                "start": 1683,
                "end": 1817
            },
            "returnType": null,
            "flags": 16,
            "start": 1648,
            "end": 1817
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 1817,
                "end": 1827
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo0_1_c",
                "rawText": "foo0_1_c",
                "flags": 96,
                "start": 1827,
                "end": 1836
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 1837,
                        "end": 1838
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 1836,
                "end": 1839
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 166,
                            "forKeyword": {
                                "kind": 37757017,
                                "flags": 81,
                                "start": 1841,
                                "end": 1849
                            },
                            "initializer": {
                                "kind": 151,
                                "bindingList": [
                                    {
                                        "kind": 190,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 1856,
                                            "end": 1858
                                        },
                                        "type": null,
                                        "initializer": null,
                                        "flags": 16,
                                        "start": 1856,
                                        "end": 1858
                                    }
                                ],
                                "flags": 16777232,
                                "start": 1856,
                                "end": 1858
                            },
                            "inKeyword": {
                                "kind": 21006388,
                                "flags": 64,
                                "start": 1858,
                                "end": 1861
                            },
                            "expression": {
                                "kind": 119,
                                "elementList": {
                                    "kind": 270,
                                    "elements": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 1863,
                                    "end": 1863
                                },
                                "flags": 32,
                                "start": 1861,
                                "end": 1864
                            },
                            "statement": {
                                "kind": 124,
                                "block": {
                                    "kind": 249,
                                    "statements": [
                                        {
                                            "kind": 162,
                                            "lexicalKeyword": {
                                                "kind": 37757004,
                                                "flags": 81,
                                                "start": 1867,
                                                "end": 1881
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
                                                            "flags": 96,
                                                            "start": 1881,
                                                            "end": 1883
                                                        },
                                                        "type": null,
                                                        "initializer": {
                                                            "kind": 129,
                                                            "member": {
                                                                "kind": 134299649,
                                                                "text": "arguments",
                                                                "rawText": "arguments",
                                                                "flags": 96,
                                                                "start": 1885,
                                                                "end": 1895
                                                            },
                                                            "expression": {
                                                                "kind": 134299649,
                                                                "text": "length",
                                                                "rawText": "length",
                                                                "flags": 96,
                                                                "start": 1896,
                                                                "end": 1902
                                                            },
                                                            "flags": 536870944,
                                                            "start": 1885,
                                                            "end": 1902
                                                        },
                                                        "flags": 16,
                                                        "start": 1881,
                                                        "end": 1902
                                                    }
                                                ],
                                                "flags": 16777232,
                                                "start": 1881,
                                                "end": 1902
                                            },
                                            "flags": 33554448,
                                            "start": 1867,
                                            "end": 1903
                                        },
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 121,
                                                "expression": {
                                                    "kind": 177,
                                                    "asyncKeyword": null,
                                                    "functionKeyword": {
                                                        "kind": 37822554,
                                                        "flags": 64,
                                                        "start": 1913,
                                                        "end": 1921
                                                    },
                                                    "asteriskToken": null,
                                                    "name": null,
                                                    "typeParameters": null,
                                                    "formalParameterList": {
                                                        "kind": 214,
                                                        "formalParameters": [],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "start": 1921,
                                                        "end": 1923
                                                    },
                                                    "contents": {
                                                        "kind": 216,
                                                        "functionStatementList": {
                                                            "kind": 217,
                                                            "directives": [],
                                                            "statements": [
                                                                {
                                                                    "kind": 161,
                                                                    "returnKeyword": {
                                                                        "kind": 37757022,
                                                                        "flags": 80,
                                                                        "start": 1925,
                                                                        "end": 1932
                                                                    },
                                                                    "expression": {
                                                                        "kind": 198,
                                                                        "left": {
                                                                            "kind": 134299649,
                                                                            "text": "x",
                                                                            "rawText": "x",
                                                                            "flags": 96,
                                                                            "start": 1932,
                                                                            "end": 1934
                                                                        },
                                                                        "operatorToken": {
                                                                            "kind": 99634,
                                                                            "flags": 96,
                                                                            "start": 1934,
                                                                            "end": 1936
                                                                        },
                                                                        "right": {
                                                                            "kind": 134299649,
                                                                            "text": "a",
                                                                            "rawText": "a",
                                                                            "flags": 96,
                                                                            "start": 1936,
                                                                            "end": 1938
                                                                        },
                                                                        "flags": 32,
                                                                        "start": 1932,
                                                                        "end": 1938
                                                                    },
                                                                    "flags": 80,
                                                                    "start": 1925,
                                                                    "end": 1938
                                                                }
                                                            ],
                                                            "flags": 32,
                                                            "start": 1925,
                                                            "end": 1938
                                                        },
                                                        "flags": 32,
                                                        "start": 1923,
                                                        "end": 1940
                                                    },
                                                    "returnType": null,
                                                    "flags": 32,
                                                    "start": 1913,
                                                    "end": 1940
                                                },
                                                "flags": 32,
                                                "start": 1903,
                                                "end": 1941
                                            },
                                            "flags": 16,
                                            "start": 1903,
                                            "end": 1942
                                        },
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 121,
                                                "expression": {
                                                    "kind": 271,
                                                    "arrowToken": {
                                                        "kind": 10,
                                                        "flags": 64,
                                                        "start": 1954,
                                                        "end": 1957
                                                    },
                                                    "typeParameters": null,
                                                    "parameters": [],
                                                    "asyncKeyword": null,
                                                    "returnType": null,
                                                    "contents": {
                                                        "kind": 198,
                                                        "left": {
                                                            "kind": 134299649,
                                                            "text": "x",
                                                            "rawText": "x",
                                                            "flags": 96,
                                                            "start": 1957,
                                                            "end": 1959
                                                        },
                                                        "operatorToken": {
                                                            "kind": 99634,
                                                            "flags": 96,
                                                            "start": 1959,
                                                            "end": 1961
                                                        },
                                                        "right": {
                                                            "kind": 134299649,
                                                            "text": "a",
                                                            "rawText": "a",
                                                            "flags": 96,
                                                            "start": 1961,
                                                            "end": 1963
                                                        },
                                                        "flags": 32,
                                                        "start": 1957,
                                                        "end": 1963
                                                    },
                                                    "flags": 32,
                                                    "start": 1952,
                                                    "end": 1963
                                                },
                                                "flags": 32,
                                                "start": 1942,
                                                "end": 1964
                                            },
                                            "flags": 16,
                                            "start": 1942,
                                            "end": 1965
                                        }
                                    ],
                                    "flags": 17,
                                    "start": 1867,
                                    "end": 1965
                                },
                                "flags": 16,
                                "start": 1865,
                                "end": 1971
                            },
                            "flags": 81,
                            "start": 1841,
                            "end": 1971
                        }
                    ],
                    "flags": 33,
                    "start": 1841,
                    "end": 1971
                },
                "flags": 32,
                "start": 1839,
                "end": 1973
            },
            "returnType": null,
            "flags": 16,
            "start": 1817,
            "end": 1973
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 1973,
                "end": 1983
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo1_c",
                "rawText": "foo1_c",
                "flags": 96,
                "start": 1983,
                "end": 1990
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 1991,
                        "end": 1992
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 1990,
                "end": 1993
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 165,
                            "forKeyword": {
                                "kind": 37757017,
                                "flags": 81,
                                "start": 1995,
                                "end": 2003
                            },
                            "initializer": {
                                "kind": 151,
                                "bindingList": [
                                    {
                                        "kind": 190,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 2010,
                                            "end": 2012
                                        },
                                        "type": null,
                                        "initializer": {
                                            "kind": 201392130,
                                            "text": 0,
                                            "rawText": "0",
                                            "flags": 96,
                                            "start": 2014,
                                            "end": 2016
                                        },
                                        "flags": 16,
                                        "start": 2010,
                                        "end": 2016
                                    }
                                ],
                                "flags": 16777232,
                                "start": 2010,
                                "end": 2016
                            },
                            "condition": null,
                            "incrementor": {
                                "kind": 198,
                                "left": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 2017,
                                    "end": 2019
                                },
                                "operatorToken": {
                                    "kind": 536971330,
                                    "flags": 96,
                                    "start": 2019,
                                    "end": 2021
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 96,
                                    "start": 2021,
                                    "end": 2023
                                },
                                "flags": 32,
                                "start": 2017,
                                "end": 2023
                            },
                            "statement": {
                                "kind": 124,
                                "block": {
                                    "kind": 249,
                                    "statements": [
                                        {
                                            "kind": 162,
                                            "lexicalKeyword": {
                                                "kind": 37757004,
                                                "flags": 81,
                                                "start": 2027,
                                                "end": 2041
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
                                                            "flags": 96,
                                                            "start": 2041,
                                                            "end": 2043
                                                        },
                                                        "type": null,
                                                        "initializer": {
                                                            "kind": 129,
                                                            "member": {
                                                                "kind": 134299649,
                                                                "text": "arguments",
                                                                "rawText": "arguments",
                                                                "flags": 96,
                                                                "start": 2045,
                                                                "end": 2055
                                                            },
                                                            "expression": {
                                                                "kind": 134299649,
                                                                "text": "length",
                                                                "rawText": "length",
                                                                "flags": 96,
                                                                "start": 2056,
                                                                "end": 2062
                                                            },
                                                            "flags": 536870944,
                                                            "start": 2045,
                                                            "end": 2062
                                                        },
                                                        "flags": 16,
                                                        "start": 2041,
                                                        "end": 2062
                                                    }
                                                ],
                                                "flags": 16777232,
                                                "start": 2041,
                                                "end": 2062
                                            },
                                            "flags": 33554448,
                                            "start": 2027,
                                            "end": 2063
                                        },
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 121,
                                                "expression": {
                                                    "kind": 177,
                                                    "asyncKeyword": null,
                                                    "functionKeyword": {
                                                        "kind": 37822554,
                                                        "flags": 64,
                                                        "start": 2073,
                                                        "end": 2081
                                                    },
                                                    "asteriskToken": null,
                                                    "name": null,
                                                    "typeParameters": null,
                                                    "formalParameterList": {
                                                        "kind": 214,
                                                        "formalParameters": [],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "start": 2081,
                                                        "end": 2083
                                                    },
                                                    "contents": {
                                                        "kind": 216,
                                                        "functionStatementList": {
                                                            "kind": 217,
                                                            "directives": [],
                                                            "statements": [
                                                                {
                                                                    "kind": 161,
                                                                    "returnKeyword": {
                                                                        "kind": 37757022,
                                                                        "flags": 80,
                                                                        "start": 2085,
                                                                        "end": 2092
                                                                    },
                                                                    "expression": {
                                                                        "kind": 198,
                                                                        "left": {
                                                                            "kind": 134299649,
                                                                            "text": "x",
                                                                            "rawText": "x",
                                                                            "flags": 96,
                                                                            "start": 2092,
                                                                            "end": 2094
                                                                        },
                                                                        "operatorToken": {
                                                                            "kind": 99634,
                                                                            "flags": 96,
                                                                            "start": 2094,
                                                                            "end": 2096
                                                                        },
                                                                        "right": {
                                                                            "kind": 134299649,
                                                                            "text": "a",
                                                                            "rawText": "a",
                                                                            "flags": 96,
                                                                            "start": 2096,
                                                                            "end": 2098
                                                                        },
                                                                        "flags": 32,
                                                                        "start": 2092,
                                                                        "end": 2098
                                                                    },
                                                                    "flags": 80,
                                                                    "start": 2085,
                                                                    "end": 2098
                                                                }
                                                            ],
                                                            "flags": 32,
                                                            "start": 2085,
                                                            "end": 2098
                                                        },
                                                        "flags": 32,
                                                        "start": 2083,
                                                        "end": 2100
                                                    },
                                                    "returnType": null,
                                                    "flags": 32,
                                                    "start": 2073,
                                                    "end": 2100
                                                },
                                                "flags": 32,
                                                "start": 2063,
                                                "end": 2101
                                            },
                                            "flags": 16,
                                            "start": 2063,
                                            "end": 2102
                                        },
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 121,
                                                "expression": {
                                                    "kind": 271,
                                                    "arrowToken": {
                                                        "kind": 10,
                                                        "flags": 64,
                                                        "start": 2114,
                                                        "end": 2117
                                                    },
                                                    "typeParameters": null,
                                                    "parameters": [],
                                                    "asyncKeyword": null,
                                                    "returnType": null,
                                                    "contents": {
                                                        "kind": 198,
                                                        "left": {
                                                            "kind": 134299649,
                                                            "text": "x",
                                                            "rawText": "x",
                                                            "flags": 96,
                                                            "start": 2117,
                                                            "end": 2119
                                                        },
                                                        "operatorToken": {
                                                            "kind": 99634,
                                                            "flags": 96,
                                                            "start": 2119,
                                                            "end": 2121
                                                        },
                                                        "right": {
                                                            "kind": 134299649,
                                                            "text": "a",
                                                            "rawText": "a",
                                                            "flags": 96,
                                                            "start": 2121,
                                                            "end": 2123
                                                        },
                                                        "flags": 32,
                                                        "start": 2117,
                                                        "end": 2123
                                                    },
                                                    "flags": 32,
                                                    "start": 2112,
                                                    "end": 2123
                                                },
                                                "flags": 32,
                                                "start": 2102,
                                                "end": 2124
                                            },
                                            "flags": 16,
                                            "start": 2102,
                                            "end": 2125
                                        }
                                    ],
                                    "flags": 17,
                                    "start": 2027,
                                    "end": 2125
                                },
                                "flags": 16,
                                "start": 2025,
                                "end": 2131
                            },
                            "flags": 81,
                            "start": 1995,
                            "end": 2131
                        }
                    ],
                    "flags": 33,
                    "start": 1995,
                    "end": 2131
                },
                "flags": 32,
                "start": 1993,
                "end": 2133
            },
            "returnType": null,
            "flags": 16,
            "start": 1973,
            "end": 2133
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 2133,
                "end": 2143
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo2_c",
                "rawText": "foo2_c",
                "flags": 96,
                "start": 2143,
                "end": 2150
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 2151,
                        "end": 2152
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 2150,
                "end": 2153
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 154,
                            "whileKeyword": {
                                "kind": 37757028,
                                "flags": 81,
                                "start": 2155,
                                "end": 2165
                            },
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 201392130,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 96,
                                    "start": 2167,
                                    "end": 2168
                                },
                                "operatorToken": {
                                    "kind": 34620,
                                    "flags": 96,
                                    "start": 2168,
                                    "end": 2172
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 96,
                                    "start": 2172,
                                    "end": 2174
                                },
                                "flags": 32,
                                "start": 2167,
                                "end": 2174
                            },
                            "statement": {
                                "kind": 124,
                                "block": {
                                    "kind": 249,
                                    "statements": [
                                        {
                                            "kind": 162,
                                            "lexicalKeyword": {
                                                "kind": 37757004,
                                                "flags": 81,
                                                "start": 2177,
                                                "end": 2191
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
                                                            "flags": 96,
                                                            "start": 2191,
                                                            "end": 2193
                                                        },
                                                        "type": null,
                                                        "initializer": {
                                                            "kind": 129,
                                                            "member": {
                                                                "kind": 134299649,
                                                                "text": "arguments",
                                                                "rawText": "arguments",
                                                                "flags": 96,
                                                                "start": 2195,
                                                                "end": 2205
                                                            },
                                                            "expression": {
                                                                "kind": 134299649,
                                                                "text": "length",
                                                                "rawText": "length",
                                                                "flags": 96,
                                                                "start": 2206,
                                                                "end": 2212
                                                            },
                                                            "flags": 536870944,
                                                            "start": 2195,
                                                            "end": 2212
                                                        },
                                                        "flags": 16,
                                                        "start": 2191,
                                                        "end": 2212
                                                    }
                                                ],
                                                "flags": 16777232,
                                                "start": 2191,
                                                "end": 2212
                                            },
                                            "flags": 33554448,
                                            "start": 2177,
                                            "end": 2213
                                        },
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 121,
                                                "expression": {
                                                    "kind": 177,
                                                    "asyncKeyword": null,
                                                    "functionKeyword": {
                                                        "kind": 37822554,
                                                        "flags": 64,
                                                        "start": 2223,
                                                        "end": 2231
                                                    },
                                                    "asteriskToken": null,
                                                    "name": null,
                                                    "typeParameters": null,
                                                    "formalParameterList": {
                                                        "kind": 214,
                                                        "formalParameters": [],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "start": 2231,
                                                        "end": 2233
                                                    },
                                                    "contents": {
                                                        "kind": 216,
                                                        "functionStatementList": {
                                                            "kind": 217,
                                                            "directives": [],
                                                            "statements": [
                                                                {
                                                                    "kind": 161,
                                                                    "returnKeyword": {
                                                                        "kind": 37757022,
                                                                        "flags": 80,
                                                                        "start": 2235,
                                                                        "end": 2242
                                                                    },
                                                                    "expression": {
                                                                        "kind": 198,
                                                                        "left": {
                                                                            "kind": 134299649,
                                                                            "text": "x",
                                                                            "rawText": "x",
                                                                            "flags": 96,
                                                                            "start": 2242,
                                                                            "end": 2244
                                                                        },
                                                                        "operatorToken": {
                                                                            "kind": 99634,
                                                                            "flags": 96,
                                                                            "start": 2244,
                                                                            "end": 2246
                                                                        },
                                                                        "right": {
                                                                            "kind": 134299649,
                                                                            "text": "a",
                                                                            "rawText": "a",
                                                                            "flags": 96,
                                                                            "start": 2246,
                                                                            "end": 2248
                                                                        },
                                                                        "flags": 32,
                                                                        "start": 2242,
                                                                        "end": 2248
                                                                    },
                                                                    "flags": 80,
                                                                    "start": 2235,
                                                                    "end": 2248
                                                                }
                                                            ],
                                                            "flags": 32,
                                                            "start": 2235,
                                                            "end": 2248
                                                        },
                                                        "flags": 32,
                                                        "start": 2233,
                                                        "end": 2250
                                                    },
                                                    "returnType": null,
                                                    "flags": 32,
                                                    "start": 2223,
                                                    "end": 2250
                                                },
                                                "flags": 32,
                                                "start": 2213,
                                                "end": 2251
                                            },
                                            "flags": 16,
                                            "start": 2213,
                                            "end": 2252
                                        },
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 121,
                                                "expression": {
                                                    "kind": 271,
                                                    "arrowToken": {
                                                        "kind": 10,
                                                        "flags": 64,
                                                        "start": 2264,
                                                        "end": 2267
                                                    },
                                                    "typeParameters": null,
                                                    "parameters": [],
                                                    "asyncKeyword": null,
                                                    "returnType": null,
                                                    "contents": {
                                                        "kind": 198,
                                                        "left": {
                                                            "kind": 134299649,
                                                            "text": "x",
                                                            "rawText": "x",
                                                            "flags": 96,
                                                            "start": 2267,
                                                            "end": 2269
                                                        },
                                                        "operatorToken": {
                                                            "kind": 99634,
                                                            "flags": 96,
                                                            "start": 2269,
                                                            "end": 2271
                                                        },
                                                        "right": {
                                                            "kind": 134299649,
                                                            "text": "a",
                                                            "rawText": "a",
                                                            "flags": 96,
                                                            "start": 2271,
                                                            "end": 2273
                                                        },
                                                        "flags": 32,
                                                        "start": 2267,
                                                        "end": 2273
                                                    },
                                                    "flags": 32,
                                                    "start": 2262,
                                                    "end": 2273
                                                },
                                                "flags": 32,
                                                "start": 2252,
                                                "end": 2274
                                            },
                                            "flags": 16,
                                            "start": 2252,
                                            "end": 2275
                                        }
                                    ],
                                    "flags": 17,
                                    "start": 2177,
                                    "end": 2275
                                },
                                "flags": 16,
                                "start": 2175,
                                "end": 2281
                            },
                            "flags": 81,
                            "start": 2155,
                            "end": 2281
                        }
                    ],
                    "flags": 33,
                    "start": 2155,
                    "end": 2281
                },
                "flags": 32,
                "start": 2153,
                "end": 2283
            },
            "returnType": null,
            "flags": 16,
            "start": 2133,
            "end": 2283
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 2283,
                "end": 2293
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo3_c",
                "rawText": "foo3_c",
                "flags": 96,
                "start": 2293,
                "end": 2300
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 2301,
                        "end": 2302
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 2300,
                "end": 2303
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 169,
                            "doKeyword": {
                                "kind": 4202580,
                                "flags": 81,
                                "start": 2305,
                                "end": 2312
                            },
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 201392130,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 96,
                                    "start": 2447,
                                    "end": 2448
                                },
                                "operatorToken": {
                                    "kind": 34620,
                                    "flags": 96,
                                    "start": 2448,
                                    "end": 2452
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 96,
                                    "start": 2452,
                                    "end": 2454
                                },
                                "flags": 32,
                                "start": 2447,
                                "end": 2454
                            },
                            "whileKeyword": {
                                "kind": 37757028,
                                "flags": 64,
                                "start": 2439,
                                "end": 2445
                            },
                            "statement": {
                                "kind": 124,
                                "block": {
                                    "kind": 249,
                                    "statements": [
                                        {
                                            "kind": 162,
                                            "lexicalKeyword": {
                                                "kind": 37757004,
                                                "flags": 81,
                                                "start": 2314,
                                                "end": 2328
                                            },
                                            "binding": {
                                                "kind": 151,
                                                "bindingList": [
                                                    {
                                                        "kind": 190,
                                                        "binding": {
                                                            "kind": 134299649,
                                                            "text": "x",
                                                            "rawText": "x",
                                                            "flags": 96,
                                                            "start": 2328,
                                                            "end": 2330
                                                        },
                                                        "type": null,
                                                        "initializer": {
                                                            "kind": 201392130,
                                                            "text": 1,
                                                            "rawText": "1",
                                                            "flags": 96,
                                                            "start": 2332,
                                                            "end": 2334
                                                        },
                                                        "flags": 16,
                                                        "start": 2328,
                                                        "end": 2334
                                                    }
                                                ],
                                                "flags": 16777232,
                                                "start": 2328,
                                                "end": 2334
                                            },
                                            "flags": 33554448,
                                            "start": 2314,
                                            "end": 2335
                                        },
                                        {
                                            "kind": 162,
                                            "lexicalKeyword": {
                                                "kind": 37757004,
                                                "flags": 81,
                                                "start": 2335,
                                                "end": 2349
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
                                                            "flags": 96,
                                                            "start": 2349,
                                                            "end": 2351
                                                        },
                                                        "type": null,
                                                        "initializer": {
                                                            "kind": 129,
                                                            "member": {
                                                                "kind": 134299649,
                                                                "text": "arguments",
                                                                "rawText": "arguments",
                                                                "flags": 96,
                                                                "start": 2353,
                                                                "end": 2363
                                                            },
                                                            "expression": {
                                                                "kind": 134299649,
                                                                "text": "length",
                                                                "rawText": "length",
                                                                "flags": 96,
                                                                "start": 2364,
                                                                "end": 2370
                                                            },
                                                            "flags": 536870944,
                                                            "start": 2353,
                                                            "end": 2370
                                                        },
                                                        "flags": 16,
                                                        "start": 2349,
                                                        "end": 2370
                                                    }
                                                ],
                                                "flags": 16777232,
                                                "start": 2349,
                                                "end": 2370
                                            },
                                            "flags": 33554448,
                                            "start": 2335,
                                            "end": 2371
                                        },
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 121,
                                                "expression": {
                                                    "kind": 177,
                                                    "asyncKeyword": null,
                                                    "functionKeyword": {
                                                        "kind": 37822554,
                                                        "flags": 64,
                                                        "start": 2381,
                                                        "end": 2389
                                                    },
                                                    "asteriskToken": null,
                                                    "name": null,
                                                    "typeParameters": null,
                                                    "formalParameterList": {
                                                        "kind": 214,
                                                        "formalParameters": [],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "start": 2389,
                                                        "end": 2391
                                                    },
                                                    "contents": {
                                                        "kind": 216,
                                                        "functionStatementList": {
                                                            "kind": 217,
                                                            "directives": [],
                                                            "statements": [
                                                                {
                                                                    "kind": 161,
                                                                    "returnKeyword": {
                                                                        "kind": 37757022,
                                                                        "flags": 80,
                                                                        "start": 2393,
                                                                        "end": 2400
                                                                    },
                                                                    "expression": {
                                                                        "kind": 198,
                                                                        "left": {
                                                                            "kind": 134299649,
                                                                            "text": "x",
                                                                            "rawText": "x",
                                                                            "flags": 96,
                                                                            "start": 2400,
                                                                            "end": 2402
                                                                        },
                                                                        "operatorToken": {
                                                                            "kind": 99634,
                                                                            "flags": 96,
                                                                            "start": 2402,
                                                                            "end": 2404
                                                                        },
                                                                        "right": {
                                                                            "kind": 134299649,
                                                                            "text": "a",
                                                                            "rawText": "a",
                                                                            "flags": 96,
                                                                            "start": 2404,
                                                                            "end": 2406
                                                                        },
                                                                        "flags": 32,
                                                                        "start": 2400,
                                                                        "end": 2406
                                                                    },
                                                                    "flags": 80,
                                                                    "start": 2393,
                                                                    "end": 2406
                                                                }
                                                            ],
                                                            "flags": 32,
                                                            "start": 2393,
                                                            "end": 2406
                                                        },
                                                        "flags": 32,
                                                        "start": 2391,
                                                        "end": 2408
                                                    },
                                                    "returnType": null,
                                                    "flags": 32,
                                                    "start": 2381,
                                                    "end": 2408
                                                },
                                                "flags": 32,
                                                "start": 2371,
                                                "end": 2409
                                            },
                                            "flags": 16,
                                            "start": 2371,
                                            "end": 2410
                                        },
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 121,
                                                "expression": {
                                                    "kind": 271,
                                                    "arrowToken": {
                                                        "kind": 10,
                                                        "flags": 64,
                                                        "start": 2422,
                                                        "end": 2425
                                                    },
                                                    "typeParameters": null,
                                                    "parameters": [],
                                                    "asyncKeyword": null,
                                                    "returnType": null,
                                                    "contents": {
                                                        "kind": 198,
                                                        "left": {
                                                            "kind": 134299649,
                                                            "text": "x",
                                                            "rawText": "x",
                                                            "flags": 96,
                                                            "start": 2425,
                                                            "end": 2427
                                                        },
                                                        "operatorToken": {
                                                            "kind": 99634,
                                                            "flags": 96,
                                                            "start": 2427,
                                                            "end": 2429
                                                        },
                                                        "right": {
                                                            "kind": 134299649,
                                                            "text": "a",
                                                            "rawText": "a",
                                                            "flags": 96,
                                                            "start": 2429,
                                                            "end": 2431
                                                        },
                                                        "flags": 32,
                                                        "start": 2425,
                                                        "end": 2431
                                                    },
                                                    "flags": 32,
                                                    "start": 2420,
                                                    "end": 2431
                                                },
                                                "flags": 32,
                                                "start": 2410,
                                                "end": 2432
                                            },
                                            "flags": 16,
                                            "start": 2410,
                                            "end": 2433
                                        }
                                    ],
                                    "flags": 17,
                                    "start": 2314,
                                    "end": 2433
                                },
                                "flags": 16,
                                "start": 2312,
                                "end": 2439
                            },
                            "flags": 81,
                            "start": 2305,
                            "end": 2455
                        }
                    ],
                    "flags": 33,
                    "start": 2305,
                    "end": 2455
                },
                "flags": 32,
                "start": 2303,
                "end": 2457
            },
            "returnType": null,
            "flags": 16,
            "start": 2283,
            "end": 2457
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 2457,
                "end": 2467
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo4_c",
                "rawText": "foo4_c",
                "flags": 96,
                "start": 2467,
                "end": 2474
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 2475,
                        "end": 2476
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 2474,
                "end": 2477
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 165,
                            "forKeyword": {
                                "kind": 37757017,
                                "flags": 81,
                                "start": 2479,
                                "end": 2487
                            },
                            "initializer": {
                                "kind": 151,
                                "bindingList": [
                                    {
                                        "kind": 190,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "y",
                                            "rawText": "y",
                                            "flags": 96,
                                            "start": 2494,
                                            "end": 2496
                                        },
                                        "type": null,
                                        "initializer": {
                                            "kind": 201392130,
                                            "text": 0,
                                            "rawText": "0",
                                            "flags": 96,
                                            "start": 2498,
                                            "end": 2500
                                        },
                                        "flags": 16,
                                        "start": 2494,
                                        "end": 2500
                                    }
                                ],
                                "flags": 16777232,
                                "start": 2494,
                                "end": 2500
                            },
                            "condition": null,
                            "incrementor": {
                                "kind": 198,
                                "left": {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 96,
                                    "start": 2501,
                                    "end": 2503
                                },
                                "operatorToken": {
                                    "kind": 536971330,
                                    "flags": 96,
                                    "start": 2503,
                                    "end": 2505
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 96,
                                    "start": 2505,
                                    "end": 2507
                                },
                                "flags": 32,
                                "start": 2501,
                                "end": 2507
                            },
                            "statement": {
                                "kind": 124,
                                "block": {
                                    "kind": 249,
                                    "statements": [
                                        {
                                            "kind": 162,
                                            "lexicalKeyword": {
                                                "kind": 37757004,
                                                "flags": 81,
                                                "start": 2511,
                                                "end": 2525
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
                                                            "flags": 96,
                                                            "start": 2525,
                                                            "end": 2527
                                                        },
                                                        "type": null,
                                                        "initializer": {
                                                            "kind": 129,
                                                            "member": {
                                                                "kind": 134299649,
                                                                "text": "arguments",
                                                                "rawText": "arguments",
                                                                "flags": 96,
                                                                "start": 2529,
                                                                "end": 2539
                                                            },
                                                            "expression": {
                                                                "kind": 134299649,
                                                                "text": "length",
                                                                "rawText": "length",
                                                                "flags": 96,
                                                                "start": 2540,
                                                                "end": 2546
                                                            },
                                                            "flags": 536870944,
                                                            "start": 2529,
                                                            "end": 2546
                                                        },
                                                        "flags": 16,
                                                        "start": 2525,
                                                        "end": 2546
                                                    }
                                                ],
                                                "flags": 16777232,
                                                "start": 2525,
                                                "end": 2546
                                            },
                                            "flags": 33554448,
                                            "start": 2511,
                                            "end": 2547
                                        },
                                        {
                                            "kind": 162,
                                            "lexicalKeyword": {
                                                "kind": 37757004,
                                                "flags": 81,
                                                "start": 2547,
                                                "end": 2561
                                            },
                                            "binding": {
                                                "kind": 151,
                                                "bindingList": [
                                                    {
                                                        "kind": 190,
                                                        "binding": {
                                                            "kind": 134299649,
                                                            "text": "x",
                                                            "rawText": "x",
                                                            "flags": 96,
                                                            "start": 2561,
                                                            "end": 2563
                                                        },
                                                        "type": null,
                                                        "initializer": {
                                                            "kind": 201392130,
                                                            "text": 1,
                                                            "rawText": "1",
                                                            "flags": 96,
                                                            "start": 2565,
                                                            "end": 2567
                                                        },
                                                        "flags": 16,
                                                        "start": 2561,
                                                        "end": 2567
                                                    }
                                                ],
                                                "flags": 16777232,
                                                "start": 2561,
                                                "end": 2567
                                            },
                                            "flags": 33554448,
                                            "start": 2547,
                                            "end": 2568
                                        },
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 121,
                                                "expression": {
                                                    "kind": 177,
                                                    "asyncKeyword": null,
                                                    "functionKeyword": {
                                                        "kind": 37822554,
                                                        "flags": 64,
                                                        "start": 2578,
                                                        "end": 2586
                                                    },
                                                    "asteriskToken": null,
                                                    "name": null,
                                                    "typeParameters": null,
                                                    "formalParameterList": {
                                                        "kind": 214,
                                                        "formalParameters": [],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "start": 2586,
                                                        "end": 2588
                                                    },
                                                    "contents": {
                                                        "kind": 216,
                                                        "functionStatementList": {
                                                            "kind": 217,
                                                            "directives": [],
                                                            "statements": [
                                                                {
                                                                    "kind": 161,
                                                                    "returnKeyword": {
                                                                        "kind": 37757022,
                                                                        "flags": 80,
                                                                        "start": 2590,
                                                                        "end": 2597
                                                                    },
                                                                    "expression": {
                                                                        "kind": 198,
                                                                        "left": {
                                                                            "kind": 134299649,
                                                                            "text": "x",
                                                                            "rawText": "x",
                                                                            "flags": 96,
                                                                            "start": 2597,
                                                                            "end": 2599
                                                                        },
                                                                        "operatorToken": {
                                                                            "kind": 99634,
                                                                            "flags": 96,
                                                                            "start": 2599,
                                                                            "end": 2601
                                                                        },
                                                                        "right": {
                                                                            "kind": 134299649,
                                                                            "text": "a",
                                                                            "rawText": "a",
                                                                            "flags": 96,
                                                                            "start": 2601,
                                                                            "end": 2603
                                                                        },
                                                                        "flags": 32,
                                                                        "start": 2597,
                                                                        "end": 2603
                                                                    },
                                                                    "flags": 80,
                                                                    "start": 2590,
                                                                    "end": 2603
                                                                }
                                                            ],
                                                            "flags": 32,
                                                            "start": 2590,
                                                            "end": 2603
                                                        },
                                                        "flags": 32,
                                                        "start": 2588,
                                                        "end": 2605
                                                    },
                                                    "returnType": null,
                                                    "flags": 32,
                                                    "start": 2578,
                                                    "end": 2605
                                                },
                                                "flags": 32,
                                                "start": 2568,
                                                "end": 2606
                                            },
                                            "flags": 16,
                                            "start": 2568,
                                            "end": 2607
                                        },
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 121,
                                                "expression": {
                                                    "kind": 271,
                                                    "arrowToken": {
                                                        "kind": 10,
                                                        "flags": 64,
                                                        "start": 2619,
                                                        "end": 2622
                                                    },
                                                    "typeParameters": null,
                                                    "parameters": [],
                                                    "asyncKeyword": null,
                                                    "returnType": null,
                                                    "contents": {
                                                        "kind": 198,
                                                        "left": {
                                                            "kind": 134299649,
                                                            "text": "x",
                                                            "rawText": "x",
                                                            "flags": 96,
                                                            "start": 2622,
                                                            "end": 2624
                                                        },
                                                        "operatorToken": {
                                                            "kind": 99634,
                                                            "flags": 96,
                                                            "start": 2624,
                                                            "end": 2626
                                                        },
                                                        "right": {
                                                            "kind": 134299649,
                                                            "text": "a",
                                                            "rawText": "a",
                                                            "flags": 96,
                                                            "start": 2626,
                                                            "end": 2628
                                                        },
                                                        "flags": 32,
                                                        "start": 2622,
                                                        "end": 2628
                                                    },
                                                    "flags": 32,
                                                    "start": 2617,
                                                    "end": 2628
                                                },
                                                "flags": 32,
                                                "start": 2607,
                                                "end": 2629
                                            },
                                            "flags": 16,
                                            "start": 2607,
                                            "end": 2630
                                        }
                                    ],
                                    "flags": 17,
                                    "start": 2511,
                                    "end": 2630
                                },
                                "flags": 16,
                                "start": 2509,
                                "end": 2636
                            },
                            "flags": 81,
                            "start": 2479,
                            "end": 2636
                        }
                    ],
                    "flags": 33,
                    "start": 2479,
                    "end": 2636
                },
                "flags": 32,
                "start": 2477,
                "end": 2638
            },
            "returnType": null,
            "flags": 16,
            "start": 2457,
            "end": 2638
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 2638,
                "end": 2648
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo5_c",
                "rawText": "foo5_c",
                "flags": 96,
                "start": 2648,
                "end": 2655
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 2656,
                        "end": 2657
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 2655,
                "end": 2658
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 165,
                            "forKeyword": {
                                "kind": 37757017,
                                "flags": 81,
                                "start": 2660,
                                "end": 2668
                            },
                            "initializer": {
                                "kind": 151,
                                "bindingList": [
                                    {
                                        "kind": 190,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 2675,
                                            "end": 2677
                                        },
                                        "type": null,
                                        "initializer": {
                                            "kind": 201392130,
                                            "text": 0,
                                            "rawText": "0",
                                            "flags": 96,
                                            "start": 2679,
                                            "end": 2681
                                        },
                                        "flags": 16,
                                        "start": 2675,
                                        "end": 2681
                                    },
                                    {
                                        "kind": 190,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "y",
                                            "rawText": "y",
                                            "flags": 96,
                                            "start": 2682,
                                            "end": 2684
                                        },
                                        "type": null,
                                        "initializer": {
                                            "kind": 201392130,
                                            "text": 1,
                                            "rawText": "1",
                                            "flags": 96,
                                            "start": 2686,
                                            "end": 2688
                                        },
                                        "flags": 16,
                                        "start": 2682,
                                        "end": 2688
                                    }
                                ],
                                "flags": 16777232,
                                "start": 2675,
                                "end": 2688
                            },
                            "condition": null,
                            "incrementor": {
                                "kind": 198,
                                "left": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 2689,
                                    "end": 2691
                                },
                                "operatorToken": {
                                    "kind": 536971330,
                                    "flags": 96,
                                    "start": 2691,
                                    "end": 2693
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 96,
                                    "start": 2693,
                                    "end": 2695
                                },
                                "flags": 32,
                                "start": 2689,
                                "end": 2695
                            },
                            "statement": {
                                "kind": 124,
                                "block": {
                                    "kind": 249,
                                    "statements": [
                                        {
                                            "kind": 162,
                                            "lexicalKeyword": {
                                                "kind": 37757004,
                                                "flags": 81,
                                                "start": 2699,
                                                "end": 2713
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
                                                            "flags": 96,
                                                            "start": 2713,
                                                            "end": 2715
                                                        },
                                                        "type": null,
                                                        "initializer": {
                                                            "kind": 129,
                                                            "member": {
                                                                "kind": 134299649,
                                                                "text": "arguments",
                                                                "rawText": "arguments",
                                                                "flags": 96,
                                                                "start": 2717,
                                                                "end": 2727
                                                            },
                                                            "expression": {
                                                                "kind": 134299649,
                                                                "text": "length",
                                                                "rawText": "length",
                                                                "flags": 96,
                                                                "start": 2728,
                                                                "end": 2734
                                                            },
                                                            "flags": 536870944,
                                                            "start": 2717,
                                                            "end": 2734
                                                        },
                                                        "flags": 16,
                                                        "start": 2713,
                                                        "end": 2734
                                                    }
                                                ],
                                                "flags": 16777232,
                                                "start": 2713,
                                                "end": 2734
                                            },
                                            "flags": 33554448,
                                            "start": 2699,
                                            "end": 2735
                                        },
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 121,
                                                "expression": {
                                                    "kind": 177,
                                                    "asyncKeyword": null,
                                                    "functionKeyword": {
                                                        "kind": 37822554,
                                                        "flags": 64,
                                                        "start": 2745,
                                                        "end": 2753
                                                    },
                                                    "asteriskToken": null,
                                                    "name": null,
                                                    "typeParameters": null,
                                                    "formalParameterList": {
                                                        "kind": 214,
                                                        "formalParameters": [],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "start": 2753,
                                                        "end": 2755
                                                    },
                                                    "contents": {
                                                        "kind": 216,
                                                        "functionStatementList": {
                                                            "kind": 217,
                                                            "directives": [],
                                                            "statements": [
                                                                {
                                                                    "kind": 161,
                                                                    "returnKeyword": {
                                                                        "kind": 37757022,
                                                                        "flags": 80,
                                                                        "start": 2757,
                                                                        "end": 2764
                                                                    },
                                                                    "expression": {
                                                                        "kind": 198,
                                                                        "left": {
                                                                            "kind": 198,
                                                                            "left": {
                                                                                "kind": 134299649,
                                                                                "text": "x",
                                                                                "rawText": "x",
                                                                                "flags": 96,
                                                                                "start": 2764,
                                                                                "end": 2766
                                                                            },
                                                                            "operatorToken": {
                                                                                "kind": 99634,
                                                                                "flags": 96,
                                                                                "start": 2766,
                                                                                "end": 2768
                                                                            },
                                                                            "right": {
                                                                                "kind": 134299649,
                                                                                "text": "y",
                                                                                "rawText": "y",
                                                                                "flags": 96,
                                                                                "start": 2768,
                                                                                "end": 2770
                                                                            },
                                                                            "flags": 32,
                                                                            "start": 2764,
                                                                            "end": 2770
                                                                        },
                                                                        "operatorToken": {
                                                                            "kind": 99634,
                                                                            "flags": 96,
                                                                            "start": 2770,
                                                                            "end": 2772
                                                                        },
                                                                        "right": {
                                                                            "kind": 134299649,
                                                                            "text": "a",
                                                                            "rawText": "a",
                                                                            "flags": 96,
                                                                            "start": 2772,
                                                                            "end": 2774
                                                                        },
                                                                        "flags": 32,
                                                                        "start": 2764,
                                                                        "end": 2774
                                                                    },
                                                                    "flags": 80,
                                                                    "start": 2757,
                                                                    "end": 2774
                                                                }
                                                            ],
                                                            "flags": 32,
                                                            "start": 2757,
                                                            "end": 2774
                                                        },
                                                        "flags": 32,
                                                        "start": 2755,
                                                        "end": 2776
                                                    },
                                                    "returnType": null,
                                                    "flags": 32,
                                                    "start": 2745,
                                                    "end": 2776
                                                },
                                                "flags": 32,
                                                "start": 2735,
                                                "end": 2777
                                            },
                                            "flags": 16,
                                            "start": 2735,
                                            "end": 2778
                                        },
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 121,
                                                "expression": {
                                                    "kind": 271,
                                                    "arrowToken": {
                                                        "kind": 10,
                                                        "flags": 64,
                                                        "start": 2790,
                                                        "end": 2793
                                                    },
                                                    "typeParameters": null,
                                                    "parameters": [],
                                                    "asyncKeyword": null,
                                                    "returnType": null,
                                                    "contents": {
                                                        "kind": 198,
                                                        "left": {
                                                            "kind": 198,
                                                            "left": {
                                                                "kind": 134299649,
                                                                "text": "x",
                                                                "rawText": "x",
                                                                "flags": 96,
                                                                "start": 2793,
                                                                "end": 2795
                                                            },
                                                            "operatorToken": {
                                                                "kind": 99634,
                                                                "flags": 96,
                                                                "start": 2795,
                                                                "end": 2797
                                                            },
                                                            "right": {
                                                                "kind": 134299649,
                                                                "text": "y",
                                                                "rawText": "y",
                                                                "flags": 96,
                                                                "start": 2797,
                                                                "end": 2799
                                                            },
                                                            "flags": 32,
                                                            "start": 2793,
                                                            "end": 2799
                                                        },
                                                        "operatorToken": {
                                                            "kind": 99634,
                                                            "flags": 96,
                                                            "start": 2799,
                                                            "end": 2801
                                                        },
                                                        "right": {
                                                            "kind": 134299649,
                                                            "text": "a",
                                                            "rawText": "a",
                                                            "flags": 96,
                                                            "start": 2801,
                                                            "end": 2803
                                                        },
                                                        "flags": 32,
                                                        "start": 2793,
                                                        "end": 2803
                                                    },
                                                    "flags": 32,
                                                    "start": 2788,
                                                    "end": 2803
                                                },
                                                "flags": 32,
                                                "start": 2778,
                                                "end": 2804
                                            },
                                            "flags": 16,
                                            "start": 2778,
                                            "end": 2805
                                        }
                                    ],
                                    "flags": 17,
                                    "start": 2699,
                                    "end": 2805
                                },
                                "flags": 16,
                                "start": 2697,
                                "end": 2811
                            },
                            "flags": 81,
                            "start": 2660,
                            "end": 2811
                        }
                    ],
                    "flags": 33,
                    "start": 2660,
                    "end": 2811
                },
                "flags": 32,
                "start": 2658,
                "end": 2813
            },
            "returnType": null,
            "flags": 16,
            "start": 2638,
            "end": 2813
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 2813,
                "end": 2824
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo6_c",
                "rawText": "foo6_c",
                "flags": 96,
                "start": 2824,
                "end": 2831
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 2832,
                        "end": 2833
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 2831,
                "end": 2834
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 154,
                            "whileKeyword": {
                                "kind": 37757028,
                                "flags": 81,
                                "start": 2836,
                                "end": 2846
                            },
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 201392130,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 96,
                                    "start": 2848,
                                    "end": 2849
                                },
                                "operatorToken": {
                                    "kind": 34620,
                                    "flags": 96,
                                    "start": 2849,
                                    "end": 2853
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 96,
                                    "start": 2853,
                                    "end": 2855
                                },
                                "flags": 32,
                                "start": 2848,
                                "end": 2855
                            },
                            "statement": {
                                "kind": 124,
                                "block": {
                                    "kind": 249,
                                    "statements": [
                                        {
                                            "kind": 162,
                                            "lexicalKeyword": {
                                                "kind": 37757004,
                                                "flags": 81,
                                                "start": 2858,
                                                "end": 2872
                                            },
                                            "binding": {
                                                "kind": 151,
                                                "bindingList": [
                                                    {
                                                        "kind": 190,
                                                        "binding": {
                                                            "kind": 134299649,
                                                            "text": "x",
                                                            "rawText": "x",
                                                            "flags": 96,
                                                            "start": 2872,
                                                            "end": 2874
                                                        },
                                                        "type": null,
                                                        "initializer": {
                                                            "kind": 201392130,
                                                            "text": 1,
                                                            "rawText": "1",
                                                            "flags": 96,
                                                            "start": 2876,
                                                            "end": 2878
                                                        },
                                                        "flags": 16,
                                                        "start": 2872,
                                                        "end": 2878
                                                    },
                                                    {
                                                        "kind": 190,
                                                        "binding": {
                                                            "kind": 134299649,
                                                            "text": "y",
                                                            "rawText": "y",
                                                            "flags": 96,
                                                            "start": 2879,
                                                            "end": 2881
                                                        },
                                                        "type": null,
                                                        "initializer": {
                                                            "kind": 201392130,
                                                            "text": 1,
                                                            "rawText": "1",
                                                            "flags": 96,
                                                            "start": 2883,
                                                            "end": 2884
                                                        },
                                                        "flags": 16,
                                                        "start": 2879,
                                                        "end": 2884
                                                    }
                                                ],
                                                "flags": 16777232,
                                                "start": 2872,
                                                "end": 2884
                                            },
                                            "flags": 33554448,
                                            "start": 2858,
                                            "end": 2886
                                        },
                                        {
                                            "kind": 162,
                                            "lexicalKeyword": {
                                                "kind": 37757004,
                                                "flags": 81,
                                                "start": 2886,
                                                "end": 2900
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
                                                            "flags": 96,
                                                            "start": 2900,
                                                            "end": 2902
                                                        },
                                                        "type": null,
                                                        "initializer": {
                                                            "kind": 129,
                                                            "member": {
                                                                "kind": 134299649,
                                                                "text": "arguments",
                                                                "rawText": "arguments",
                                                                "flags": 96,
                                                                "start": 2904,
                                                                "end": 2914
                                                            },
                                                            "expression": {
                                                                "kind": 134299649,
                                                                "text": "length",
                                                                "rawText": "length",
                                                                "flags": 96,
                                                                "start": 2915,
                                                                "end": 2921
                                                            },
                                                            "flags": 536870944,
                                                            "start": 2904,
                                                            "end": 2921
                                                        },
                                                        "flags": 16,
                                                        "start": 2900,
                                                        "end": 2921
                                                    }
                                                ],
                                                "flags": 16777232,
                                                "start": 2900,
                                                "end": 2921
                                            },
                                            "flags": 33554448,
                                            "start": 2886,
                                            "end": 2922
                                        },
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 121,
                                                "expression": {
                                                    "kind": 177,
                                                    "asyncKeyword": null,
                                                    "functionKeyword": {
                                                        "kind": 37822554,
                                                        "flags": 64,
                                                        "start": 2932,
                                                        "end": 2940
                                                    },
                                                    "asteriskToken": null,
                                                    "name": null,
                                                    "typeParameters": null,
                                                    "formalParameterList": {
                                                        "kind": 214,
                                                        "formalParameters": [],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "start": 2940,
                                                        "end": 2942
                                                    },
                                                    "contents": {
                                                        "kind": 216,
                                                        "functionStatementList": {
                                                            "kind": 217,
                                                            "directives": [],
                                                            "statements": [
                                                                {
                                                                    "kind": 161,
                                                                    "returnKeyword": {
                                                                        "kind": 37757022,
                                                                        "flags": 80,
                                                                        "start": 2944,
                                                                        "end": 2951
                                                                    },
                                                                    "expression": {
                                                                        "kind": 198,
                                                                        "left": {
                                                                            "kind": 198,
                                                                            "left": {
                                                                                "kind": 134299649,
                                                                                "text": "x",
                                                                                "rawText": "x",
                                                                                "flags": 96,
                                                                                "start": 2951,
                                                                                "end": 2953
                                                                            },
                                                                            "operatorToken": {
                                                                                "kind": 99634,
                                                                                "flags": 96,
                                                                                "start": 2953,
                                                                                "end": 2955
                                                                            },
                                                                            "right": {
                                                                                "kind": 134299649,
                                                                                "text": "y",
                                                                                "rawText": "y",
                                                                                "flags": 96,
                                                                                "start": 2955,
                                                                                "end": 2957
                                                                            },
                                                                            "flags": 32,
                                                                            "start": 2951,
                                                                            "end": 2957
                                                                        },
                                                                        "operatorToken": {
                                                                            "kind": 99634,
                                                                            "flags": 96,
                                                                            "start": 2957,
                                                                            "end": 2959
                                                                        },
                                                                        "right": {
                                                                            "kind": 134299649,
                                                                            "text": "a",
                                                                            "rawText": "a",
                                                                            "flags": 96,
                                                                            "start": 2959,
                                                                            "end": 2961
                                                                        },
                                                                        "flags": 32,
                                                                        "start": 2951,
                                                                        "end": 2961
                                                                    },
                                                                    "flags": 80,
                                                                    "start": 2944,
                                                                    "end": 2961
                                                                }
                                                            ],
                                                            "flags": 32,
                                                            "start": 2944,
                                                            "end": 2961
                                                        },
                                                        "flags": 32,
                                                        "start": 2942,
                                                        "end": 2963
                                                    },
                                                    "returnType": null,
                                                    "flags": 32,
                                                    "start": 2932,
                                                    "end": 2963
                                                },
                                                "flags": 32,
                                                "start": 2922,
                                                "end": 2964
                                            },
                                            "flags": 16,
                                            "start": 2922,
                                            "end": 2965
                                        },
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 121,
                                                "expression": {
                                                    "kind": 271,
                                                    "arrowToken": {
                                                        "kind": 10,
                                                        "flags": 64,
                                                        "start": 2977,
                                                        "end": 2980
                                                    },
                                                    "typeParameters": null,
                                                    "parameters": [],
                                                    "asyncKeyword": null,
                                                    "returnType": null,
                                                    "contents": {
                                                        "kind": 198,
                                                        "left": {
                                                            "kind": 198,
                                                            "left": {
                                                                "kind": 134299649,
                                                                "text": "x",
                                                                "rawText": "x",
                                                                "flags": 96,
                                                                "start": 2980,
                                                                "end": 2982
                                                            },
                                                            "operatorToken": {
                                                                "kind": 99634,
                                                                "flags": 96,
                                                                "start": 2982,
                                                                "end": 2984
                                                            },
                                                            "right": {
                                                                "kind": 134299649,
                                                                "text": "y",
                                                                "rawText": "y",
                                                                "flags": 96,
                                                                "start": 2984,
                                                                "end": 2986
                                                            },
                                                            "flags": 32,
                                                            "start": 2980,
                                                            "end": 2986
                                                        },
                                                        "operatorToken": {
                                                            "kind": 99634,
                                                            "flags": 96,
                                                            "start": 2986,
                                                            "end": 2988
                                                        },
                                                        "right": {
                                                            "kind": 134299649,
                                                            "text": "a",
                                                            "rawText": "a",
                                                            "flags": 96,
                                                            "start": 2988,
                                                            "end": 2990
                                                        },
                                                        "flags": 32,
                                                        "start": 2980,
                                                        "end": 2990
                                                    },
                                                    "flags": 32,
                                                    "start": 2975,
                                                    "end": 2990
                                                },
                                                "flags": 32,
                                                "start": 2965,
                                                "end": 2991
                                            },
                                            "flags": 16,
                                            "start": 2965,
                                            "end": 2992
                                        }
                                    ],
                                    "flags": 17,
                                    "start": 2858,
                                    "end": 2992
                                },
                                "flags": 16,
                                "start": 2856,
                                "end": 2998
                            },
                            "flags": 81,
                            "start": 2836,
                            "end": 2998
                        }
                    ],
                    "flags": 33,
                    "start": 2836,
                    "end": 2998
                },
                "flags": 32,
                "start": 2834,
                "end": 3000
            },
            "returnType": null,
            "flags": 16,
            "start": 2813,
            "end": 3000
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 3000,
                "end": 3010
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo7_c",
                "rawText": "foo7_c",
                "flags": 96,
                "start": 3010,
                "end": 3017
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 3018,
                        "end": 3019
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 3017,
                "end": 3020
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 169,
                            "doKeyword": {
                                "kind": 4202580,
                                "flags": 81,
                                "start": 3022,
                                "end": 3029
                            },
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 201392130,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 96,
                                    "start": 3179,
                                    "end": 3180
                                },
                                "operatorToken": {
                                    "kind": 34620,
                                    "flags": 96,
                                    "start": 3180,
                                    "end": 3184
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 96,
                                    "start": 3184,
                                    "end": 3186
                                },
                                "flags": 32,
                                "start": 3179,
                                "end": 3186
                            },
                            "whileKeyword": {
                                "kind": 37757028,
                                "flags": 64,
                                "start": 3171,
                                "end": 3177
                            },
                            "statement": {
                                "kind": 124,
                                "block": {
                                    "kind": 249,
                                    "statements": [
                                        {
                                            "kind": 162,
                                            "lexicalKeyword": {
                                                "kind": 37757004,
                                                "flags": 81,
                                                "start": 3031,
                                                "end": 3045
                                            },
                                            "binding": {
                                                "kind": 151,
                                                "bindingList": [
                                                    {
                                                        "kind": 190,
                                                        "binding": {
                                                            "kind": 134299649,
                                                            "text": "x",
                                                            "rawText": "x",
                                                            "flags": 96,
                                                            "start": 3045,
                                                            "end": 3047
                                                        },
                                                        "type": null,
                                                        "initializer": {
                                                            "kind": 201392130,
                                                            "text": 1,
                                                            "rawText": "1",
                                                            "flags": 96,
                                                            "start": 3049,
                                                            "end": 3051
                                                        },
                                                        "flags": 16,
                                                        "start": 3045,
                                                        "end": 3051
                                                    },
                                                    {
                                                        "kind": 190,
                                                        "binding": {
                                                            "kind": 134299649,
                                                            "text": "y",
                                                            "rawText": "y",
                                                            "flags": 96,
                                                            "start": 3052,
                                                            "end": 3054
                                                        },
                                                        "type": null,
                                                        "initializer": {
                                                            "kind": 201392130,
                                                            "text": 1,
                                                            "rawText": "1",
                                                            "flags": 96,
                                                            "start": 3056,
                                                            "end": 3058
                                                        },
                                                        "flags": 16,
                                                        "start": 3052,
                                                        "end": 3058
                                                    }
                                                ],
                                                "flags": 16777232,
                                                "start": 3045,
                                                "end": 3058
                                            },
                                            "flags": 33554448,
                                            "start": 3031,
                                            "end": 3059
                                        },
                                        {
                                            "kind": 162,
                                            "lexicalKeyword": {
                                                "kind": 37757004,
                                                "flags": 81,
                                                "start": 3059,
                                                "end": 3073
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
                                                            "flags": 96,
                                                            "start": 3073,
                                                            "end": 3075
                                                        },
                                                        "type": null,
                                                        "initializer": {
                                                            "kind": 129,
                                                            "member": {
                                                                "kind": 134299649,
                                                                "text": "arguments",
                                                                "rawText": "arguments",
                                                                "flags": 96,
                                                                "start": 3077,
                                                                "end": 3087
                                                            },
                                                            "expression": {
                                                                "kind": 134299649,
                                                                "text": "length",
                                                                "rawText": "length",
                                                                "flags": 96,
                                                                "start": 3088,
                                                                "end": 3094
                                                            },
                                                            "flags": 536870944,
                                                            "start": 3077,
                                                            "end": 3094
                                                        },
                                                        "flags": 16,
                                                        "start": 3073,
                                                        "end": 3094
                                                    }
                                                ],
                                                "flags": 16777232,
                                                "start": 3073,
                                                "end": 3094
                                            },
                                            "flags": 33554448,
                                            "start": 3059,
                                            "end": 3095
                                        },
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 121,
                                                "expression": {
                                                    "kind": 177,
                                                    "asyncKeyword": null,
                                                    "functionKeyword": {
                                                        "kind": 37822554,
                                                        "flags": 64,
                                                        "start": 3105,
                                                        "end": 3113
                                                    },
                                                    "asteriskToken": null,
                                                    "name": null,
                                                    "typeParameters": null,
                                                    "formalParameterList": {
                                                        "kind": 214,
                                                        "formalParameters": [],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "start": 3113,
                                                        "end": 3115
                                                    },
                                                    "contents": {
                                                        "kind": 216,
                                                        "functionStatementList": {
                                                            "kind": 217,
                                                            "directives": [],
                                                            "statements": [
                                                                {
                                                                    "kind": 161,
                                                                    "returnKeyword": {
                                                                        "kind": 37757022,
                                                                        "flags": 80,
                                                                        "start": 3117,
                                                                        "end": 3124
                                                                    },
                                                                    "expression": {
                                                                        "kind": 198,
                                                                        "left": {
                                                                            "kind": 198,
                                                                            "left": {
                                                                                "kind": 134299649,
                                                                                "text": "x",
                                                                                "rawText": "x",
                                                                                "flags": 96,
                                                                                "start": 3124,
                                                                                "end": 3126
                                                                            },
                                                                            "operatorToken": {
                                                                                "kind": 99634,
                                                                                "flags": 96,
                                                                                "start": 3126,
                                                                                "end": 3128
                                                                            },
                                                                            "right": {
                                                                                "kind": 134299649,
                                                                                "text": "y",
                                                                                "rawText": "y",
                                                                                "flags": 96,
                                                                                "start": 3128,
                                                                                "end": 3130
                                                                            },
                                                                            "flags": 32,
                                                                            "start": 3124,
                                                                            "end": 3130
                                                                        },
                                                                        "operatorToken": {
                                                                            "kind": 99634,
                                                                            "flags": 96,
                                                                            "start": 3130,
                                                                            "end": 3132
                                                                        },
                                                                        "right": {
                                                                            "kind": 134299649,
                                                                            "text": "a",
                                                                            "rawText": "a",
                                                                            "flags": 96,
                                                                            "start": 3132,
                                                                            "end": 3134
                                                                        },
                                                                        "flags": 32,
                                                                        "start": 3124,
                                                                        "end": 3134
                                                                    },
                                                                    "flags": 80,
                                                                    "start": 3117,
                                                                    "end": 3134
                                                                }
                                                            ],
                                                            "flags": 32,
                                                            "start": 3117,
                                                            "end": 3134
                                                        },
                                                        "flags": 32,
                                                        "start": 3115,
                                                        "end": 3136
                                                    },
                                                    "returnType": null,
                                                    "flags": 32,
                                                    "start": 3105,
                                                    "end": 3136
                                                },
                                                "flags": 32,
                                                "start": 3095,
                                                "end": 3137
                                            },
                                            "flags": 16,
                                            "start": 3095,
                                            "end": 3138
                                        },
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 121,
                                                "expression": {
                                                    "kind": 271,
                                                    "arrowToken": {
                                                        "kind": 10,
                                                        "flags": 64,
                                                        "start": 3150,
                                                        "end": 3153
                                                    },
                                                    "typeParameters": null,
                                                    "parameters": [],
                                                    "asyncKeyword": null,
                                                    "returnType": null,
                                                    "contents": {
                                                        "kind": 198,
                                                        "left": {
                                                            "kind": 198,
                                                            "left": {
                                                                "kind": 134299649,
                                                                "text": "x",
                                                                "rawText": "x",
                                                                "flags": 96,
                                                                "start": 3153,
                                                                "end": 3155
                                                            },
                                                            "operatorToken": {
                                                                "kind": 99634,
                                                                "flags": 96,
                                                                "start": 3155,
                                                                "end": 3157
                                                            },
                                                            "right": {
                                                                "kind": 134299649,
                                                                "text": "y",
                                                                "rawText": "y",
                                                                "flags": 96,
                                                                "start": 3157,
                                                                "end": 3159
                                                            },
                                                            "flags": 32,
                                                            "start": 3153,
                                                            "end": 3159
                                                        },
                                                        "operatorToken": {
                                                            "kind": 99634,
                                                            "flags": 96,
                                                            "start": 3159,
                                                            "end": 3161
                                                        },
                                                        "right": {
                                                            "kind": 134299649,
                                                            "text": "a",
                                                            "rawText": "a",
                                                            "flags": 96,
                                                            "start": 3161,
                                                            "end": 3163
                                                        },
                                                        "flags": 32,
                                                        "start": 3153,
                                                        "end": 3163
                                                    },
                                                    "flags": 32,
                                                    "start": 3148,
                                                    "end": 3163
                                                },
                                                "flags": 32,
                                                "start": 3138,
                                                "end": 3164
                                            },
                                            "flags": 16,
                                            "start": 3138,
                                            "end": 3165
                                        }
                                    ],
                                    "flags": 17,
                                    "start": 3031,
                                    "end": 3165
                                },
                                "flags": 16,
                                "start": 3029,
                                "end": 3171
                            },
                            "flags": 81,
                            "start": 3022,
                            "end": 3187
                        }
                    ],
                    "flags": 33,
                    "start": 3022,
                    "end": 3187
                },
                "flags": 32,
                "start": 3020,
                "end": 3189
            },
            "returnType": null,
            "flags": 16,
            "start": 3000,
            "end": 3189
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 3189,
                "end": 3200
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo8_c",
                "rawText": "foo8_c",
                "flags": 96,
                "start": 3200,
                "end": 3207
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 3208,
                        "end": 3209
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 3207,
                "end": 3210
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 165,
                            "forKeyword": {
                                "kind": 37757017,
                                "flags": 81,
                                "start": 3212,
                                "end": 3220
                            },
                            "initializer": {
                                "kind": 151,
                                "bindingList": [
                                    {
                                        "kind": 190,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "y",
                                            "rawText": "y",
                                            "flags": 96,
                                            "start": 3227,
                                            "end": 3229
                                        },
                                        "type": null,
                                        "initializer": {
                                            "kind": 201392130,
                                            "text": 0,
                                            "rawText": "0",
                                            "flags": 96,
                                            "start": 3231,
                                            "end": 3233
                                        },
                                        "flags": 16,
                                        "start": 3227,
                                        "end": 3233
                                    }
                                ],
                                "flags": 16777232,
                                "start": 3227,
                                "end": 3233
                            },
                            "condition": null,
                            "incrementor": {
                                "kind": 198,
                                "left": {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 96,
                                    "start": 3234,
                                    "end": 3236
                                },
                                "operatorToken": {
                                    "kind": 536971330,
                                    "flags": 96,
                                    "start": 3236,
                                    "end": 3238
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 96,
                                    "start": 3238,
                                    "end": 3240
                                },
                                "flags": 32,
                                "start": 3234,
                                "end": 3240
                            },
                            "statement": {
                                "kind": 124,
                                "block": {
                                    "kind": 249,
                                    "statements": [
                                        {
                                            "kind": 162,
                                            "lexicalKeyword": {
                                                "kind": 37757004,
                                                "flags": 81,
                                                "start": 3244,
                                                "end": 3258
                                            },
                                            "binding": {
                                                "kind": 151,
                                                "bindingList": [
                                                    {
                                                        "kind": 190,
                                                        "binding": {
                                                            "kind": 134299649,
                                                            "text": "x",
                                                            "rawText": "x",
                                                            "flags": 96,
                                                            "start": 3258,
                                                            "end": 3260
                                                        },
                                                        "type": null,
                                                        "initializer": {
                                                            "kind": 201392130,
                                                            "text": 1,
                                                            "rawText": "1",
                                                            "flags": 96,
                                                            "start": 3262,
                                                            "end": 3264
                                                        },
                                                        "flags": 16,
                                                        "start": 3258,
                                                        "end": 3264
                                                    }
                                                ],
                                                "flags": 16777232,
                                                "start": 3258,
                                                "end": 3264
                                            },
                                            "flags": 33554448,
                                            "start": 3244,
                                            "end": 3265
                                        },
                                        {
                                            "kind": 162,
                                            "lexicalKeyword": {
                                                "kind": 37757004,
                                                "flags": 81,
                                                "start": 3265,
                                                "end": 3279
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
                                                            "flags": 96,
                                                            "start": 3279,
                                                            "end": 3281
                                                        },
                                                        "type": null,
                                                        "initializer": {
                                                            "kind": 129,
                                                            "member": {
                                                                "kind": 134299649,
                                                                "text": "arguments",
                                                                "rawText": "arguments",
                                                                "flags": 96,
                                                                "start": 3283,
                                                                "end": 3293
                                                            },
                                                            "expression": {
                                                                "kind": 134299649,
                                                                "text": "length",
                                                                "rawText": "length",
                                                                "flags": 96,
                                                                "start": 3294,
                                                                "end": 3300
                                                            },
                                                            "flags": 536870944,
                                                            "start": 3283,
                                                            "end": 3300
                                                        },
                                                        "flags": 16,
                                                        "start": 3279,
                                                        "end": 3300
                                                    }
                                                ],
                                                "flags": 16777232,
                                                "start": 3279,
                                                "end": 3300
                                            },
                                            "flags": 33554448,
                                            "start": 3265,
                                            "end": 3301
                                        },
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 121,
                                                "expression": {
                                                    "kind": 177,
                                                    "asyncKeyword": null,
                                                    "functionKeyword": {
                                                        "kind": 37822554,
                                                        "flags": 64,
                                                        "start": 3311,
                                                        "end": 3319
                                                    },
                                                    "asteriskToken": null,
                                                    "name": null,
                                                    "typeParameters": null,
                                                    "formalParameterList": {
                                                        "kind": 214,
                                                        "formalParameters": [],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "start": 3319,
                                                        "end": 3321
                                                    },
                                                    "contents": {
                                                        "kind": 216,
                                                        "functionStatementList": {
                                                            "kind": 217,
                                                            "directives": [],
                                                            "statements": [
                                                                {
                                                                    "kind": 161,
                                                                    "returnKeyword": {
                                                                        "kind": 37757022,
                                                                        "flags": 80,
                                                                        "start": 3323,
                                                                        "end": 3330
                                                                    },
                                                                    "expression": {
                                                                        "kind": 198,
                                                                        "left": {
                                                                            "kind": 198,
                                                                            "left": {
                                                                                "kind": 134299649,
                                                                                "text": "x",
                                                                                "rawText": "x",
                                                                                "flags": 96,
                                                                                "start": 3330,
                                                                                "end": 3332
                                                                            },
                                                                            "operatorToken": {
                                                                                "kind": 99634,
                                                                                "flags": 96,
                                                                                "start": 3332,
                                                                                "end": 3334
                                                                            },
                                                                            "right": {
                                                                                "kind": 134299649,
                                                                                "text": "y",
                                                                                "rawText": "y",
                                                                                "flags": 96,
                                                                                "start": 3334,
                                                                                "end": 3336
                                                                            },
                                                                            "flags": 32,
                                                                            "start": 3330,
                                                                            "end": 3336
                                                                        },
                                                                        "operatorToken": {
                                                                            "kind": 99634,
                                                                            "flags": 96,
                                                                            "start": 3336,
                                                                            "end": 3338
                                                                        },
                                                                        "right": {
                                                                            "kind": 134299649,
                                                                            "text": "a",
                                                                            "rawText": "a",
                                                                            "flags": 96,
                                                                            "start": 3338,
                                                                            "end": 3340
                                                                        },
                                                                        "flags": 32,
                                                                        "start": 3330,
                                                                        "end": 3340
                                                                    },
                                                                    "flags": 80,
                                                                    "start": 3323,
                                                                    "end": 3340
                                                                }
                                                            ],
                                                            "flags": 32,
                                                            "start": 3323,
                                                            "end": 3340
                                                        },
                                                        "flags": 32,
                                                        "start": 3321,
                                                        "end": 3342
                                                    },
                                                    "returnType": null,
                                                    "flags": 32,
                                                    "start": 3311,
                                                    "end": 3342
                                                },
                                                "flags": 32,
                                                "start": 3301,
                                                "end": 3343
                                            },
                                            "flags": 16,
                                            "start": 3301,
                                            "end": 3344
                                        },
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 121,
                                                "expression": {
                                                    "kind": 271,
                                                    "arrowToken": {
                                                        "kind": 10,
                                                        "flags": 64,
                                                        "start": 3356,
                                                        "end": 3359
                                                    },
                                                    "typeParameters": null,
                                                    "parameters": [],
                                                    "asyncKeyword": null,
                                                    "returnType": null,
                                                    "contents": {
                                                        "kind": 198,
                                                        "left": {
                                                            "kind": 198,
                                                            "left": {
                                                                "kind": 134299649,
                                                                "text": "x",
                                                                "rawText": "x",
                                                                "flags": 96,
                                                                "start": 3359,
                                                                "end": 3361
                                                            },
                                                            "operatorToken": {
                                                                "kind": 99634,
                                                                "flags": 96,
                                                                "start": 3361,
                                                                "end": 3363
                                                            },
                                                            "right": {
                                                                "kind": 134299649,
                                                                "text": "y",
                                                                "rawText": "y",
                                                                "flags": 96,
                                                                "start": 3363,
                                                                "end": 3365
                                                            },
                                                            "flags": 32,
                                                            "start": 3359,
                                                            "end": 3365
                                                        },
                                                        "operatorToken": {
                                                            "kind": 99634,
                                                            "flags": 96,
                                                            "start": 3365,
                                                            "end": 3367
                                                        },
                                                        "right": {
                                                            "kind": 134299649,
                                                            "text": "a",
                                                            "rawText": "a",
                                                            "flags": 96,
                                                            "start": 3367,
                                                            "end": 3369
                                                        },
                                                        "flags": 32,
                                                        "start": 3359,
                                                        "end": 3369
                                                    },
                                                    "flags": 32,
                                                    "start": 3354,
                                                    "end": 3369
                                                },
                                                "flags": 32,
                                                "start": 3344,
                                                "end": 3370
                                            },
                                            "flags": 16,
                                            "start": 3344,
                                            "end": 3371
                                        }
                                    ],
                                    "flags": 17,
                                    "start": 3244,
                                    "end": 3371
                                },
                                "flags": 16,
                                "start": 3242,
                                "end": 3377
                            },
                            "flags": 81,
                            "start": 3212,
                            "end": 3377
                        }
                    ],
                    "flags": 33,
                    "start": 3212,
                    "end": 3377
                },
                "flags": 32,
                "start": 3210,
                "end": 3379
            },
            "returnType": null,
            "flags": 16,
            "start": 3189,
            "end": 3379
        }
    ],
    "isModule": false,
    "source": "function foo0(x) {\n    for (let x of []) {\n        let a = arguments.length;\n        (function() { return x + a });\n        (() => x + a);\n    }\n}\n\nfunction foo0_1(x) {\n    for (let x in []) {\n        let a = arguments.length;\n        (function() { return x + a });\n        (() => x + a);\n    }\n}\n\nfunction foo1(x) {\n    for (let x = 0; x < 1; ++x) {\n        let a = arguments.length;\n        (function() { return x + a });\n        (() => x + a);\n    }\n}\n\nfunction foo2(x) {\n    while (1 === 1) {\n        let a = arguments.length;\n        (function() { return x + a });\n        (() => x + a);\n    }\n}\n\nfunction foo3(x) {\n    do {\n        let x;\n        let a = arguments.length;\n        (function() { return x + a });\n        (() => x + a);\n    } while (1 === 1)\n}\n\nfunction foo4(x) {\n    for (let y = 0; y < 1; ++y) {\n        let a = arguments.length;\n        let x = 1;\n        (function() { return x + a });\n        (() => x + a);\n    }\n}\n\nfunction foo5(x) {\n    for (let x = 0, y = 1; x < 1; ++x) {\n        let a = arguments.length;\n        (function() { return x + y + a });\n        (() => x + y + a);\n    }\n}\n\n\nfunction foo6(x) {\n    while (1 === 1) {\n        let x, y;\n        let a = arguments.length;\n        (function() { return x + y + a });\n        (() => x + y + a);\n    }\n}\n\nfunction foo7(x) {\n    do {\n        let x, y;\n        let a = arguments.length;\n        (function() { return x + y + a });\n        (() => x + y + a);\n    } while (1 === 1)\n}\n\n\nfunction foo8(x) {\n    for (let y = 0; y < 1; ++y) {\n        let x = 1;\n        let a = arguments.length;\n        (function() { return x + y + a });\n        (() => x + y + a);\n    }\n}\n///=======const\nfunction foo0_c(x) {\n    for (const x of []) {\n        const a = arguments.length;\n        (function() { return x + a });\n        (() => x + a);\n    }\n}\n\nfunction foo0_1_c(x) {\n    for (const x in []) {\n        const a = arguments.length;\n        (function() { return x + a });\n        (() => x + a);\n    }\n}\n\nfunction foo1_c(x) {\n    for (const x = 0; x < 1;) {\n        const a = arguments.length;\n        (function() { return x + a });\n        (() => x + a);\n    }\n}\n\nfunction foo2_c(x) {\n    while (1 === 1) {\n        const a = arguments.length;\n        (function() { return x + a });\n        (() => x + a);\n    }\n}\n\nfunction foo3_c(x) {\n    do {\n        const x = 1;\n        const a = arguments.length;\n        (function() { return x + a });\n        (() => x + a);\n    } while (1 === 1)\n}\n\nfunction foo4_c(x) {\n    for (const y = 0; y < 1;) {\n        const a = arguments.length;\n        const x = 1;\n        (function() { return x + a });\n        (() => x + a);\n    }\n}\n\nfunction foo5_c(x) {\n    for (const x = 0, y = 1; x < 1;) {\n        const a = arguments.length;\n        (function() { return x + y + a });\n        (() => x + y + a);\n    }\n}\n\n\nfunction foo6_c(x) {\n    while (1 === 1) {\n        const x = 1, y =1 ;\n        const a = arguments.length;\n        (function() { return x + y + a });\n        (() => x + y + a);\n    }\n}\n\nfunction foo7_c(x) {\n    do {\n        const x = 1, y = 1;\n        const a = arguments.length;\n        (function() { return x + y + a });\n        (() => x + y + a);\n    } while (1 === 1)\n}\n\n\nfunction foo8_c(x) {\n    for (const y = 0; y < 1;) {\n        const x = 1;\n        const a = arguments.length;\n        (function() { return x + y + a });\n        (() => x + y + a);\n    }\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 3379
}
```

### Printed

```javascript

function foo0() {
  for (let of [])
    {
      let a = arguments.length;
      (function () {
          return  x + a;
        });
      (() =>  x + a);
    }
}
function foo0_1() {
  for (let in [])
    {}
}
function foo1() {
  for (let; ++x; x  < 1)
    {}
}
function foo2() {
  while (1 === 1) {}
}
function foo3() {
  do {}
  while (1 === 1);
}
function foo4() {
  for (let; ++y; y  < 1)
    {}
}
function foo5() {
  for (let; ++x; x  < 1)
    {}
}
function foo6() {
  while (1 === 1) {}
}
function foo7() {
  do {}
  while (1 === 1);
}
function foo8() {
  for (let; ++y; y  < 1)
    {}
}
///=======const
function foo0_c() {
  for (const of [])
    {
      const a = arguments.length;
      (function () {
          return  x + a;
        });
      (() =>  x + a);
    }
}
function foo0_1_c() {
  for (const in [])
    {}
}
function foo1_c() {
  for (const; ; x  < 1)
    {}
}
function foo2_c() {
  while (1 === 1) {}
}
function foo3_c() {
  do {}
  while (1 === 1);
}
function foo4_c() {
  for (const; ; y  < 1)
    {}
}
function foo5_c() {
  for (const; ; x  < 1)
    {}
}
function foo6_c() {
  while (1 === 1) {}
}
function foo7_c() {
  do {}
  while (1 === 1);
}
function foo8_c() {
  for (const; ; y  < 1)
    {}
}
```

### Diagnostics

```javascript
✔ No errors
```

