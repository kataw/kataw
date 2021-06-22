# Kataw parser test case

## Input

`````js
let f1 = (/* ... */) => {}
(function (/* ... */) {})(/* ... */)
function f2(/* ... */) {}

const obj = {
  f(/* ... */) {},
  f: (/* ... */) => {},
  f: function(/* ... */) {},
  f: function f(/* ... */) {}
}

f(/* ... */);
f(a, /* ... */);
f(a, /* ... */ b);
f(/* ... */ a, b);

let f3 = () => import(a /* ... */);
let f4 = () => doThing(a, /* ... */ b);
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "f1",
                            "rawText": "f1",
                            "flags": 96,
                            "start": 3,
                            "end": 6
                        },
                        "type": null,
                        "initializer": {
                            "kind": 131,
                            "expression": {
                                "kind": 131,
                                "expression": {
                                    "kind": 271,
                                    "asyncKeyword": null,
                                    "typeParameters": null,
                                    "arrowPatameterList": {
                                        "kind": 342,
                                        "parameters": [],
                                        "trailingComma": false,
                                        "flags": 0,
                                        "start": 10,
                                        "end": 10
                                    },
                                    "returnType": null,
                                    "arrowToken": {
                                        "kind": 10,
                                        "flags": 64,
                                        "start": 20,
                                        "end": 23
                                    },
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "start": 25,
                                            "end": 25
                                        },
                                        "flags": 32,
                                        "start": 23,
                                        "end": 26
                                    },
                                    "flags": 32,
                                    "start": 8,
                                    "end": 26
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 177,
                                            "asyncKeyword": null,
                                            "functionKeyword": {
                                                "kind": 37822554,
                                                "flags": 64,
                                                "start": 28,
                                                "end": 36
                                            },
                                            "asteriskToken": null,
                                            "name": null,
                                            "typeParameters": null,
                                            "formalParameterList": {
                                                "kind": 214,
                                                "formalParameters": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 36,
                                                "end": 48
                                            },
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [],
                                                    "flags": 32,
                                                    "start": 50,
                                                    "end": 50
                                                },
                                                "flags": 32,
                                                "start": 48,
                                                "end": 51
                                            },
                                            "returnType": null,
                                            "flags": 32,
                                            "start": 28,
                                            "end": 51
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 28,
                                    "end": 51
                                },
                                "flags": 268435489,
                                "start": 8,
                                "end": 52
                            },
                            "argumentList": {
                                "kind": 256,
                                "elements": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 53,
                                "end": 53
                            },
                            "flags": 268435488,
                            "start": 8,
                            "end": 63
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 63
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 63
            },
            "flags": 33554448,
            "start": 0,
            "end": 63
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 63,
                "end": 72
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "f2",
                "rawText": "f2",
                "flags": 96,
                "start": 72,
                "end": 75
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 75,
                "end": 86
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 88,
                    "end": 88
                },
                "flags": 32,
                "start": 86,
                "end": 89
            },
            "returnType": null,
            "flags": 16,
            "start": 63,
            "end": 89
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "start": 89,
                "end": 96
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "obj",
                            "rawText": "obj",
                            "flags": 96,
                            "start": 96,
                            "end": 100
                        },
                        "type": null,
                        "initializer": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 351,
                                        "asyncKeyword": null,
                                        "asteriskToken": null,
                                        "getKeyword": null,
                                        "setKeyword": null,
                                        "method": {
                                            "kind": 209,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "f",
                                                "rawText": "f",
                                                "flags": 96,
                                                "start": 104,
                                                "end": 108
                                            },
                                            "typeParameters": null,
                                            "formalParameterList": {
                                                "kind": 214,
                                                "formalParameters": [],
                                                "trailingComma": false,
                                                "flags": 33,
                                                "start": 109,
                                                "end": 119
                                            },
                                            "returnType": null,
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [],
                                                    "flags": 32,
                                                    "start": 121,
                                                    "end": 121
                                                },
                                                "flags": 32,
                                                "start": 119,
                                                "end": 122
                                            },
                                            "flags": 33,
                                            "start": 108,
                                            "end": 122
                                        },
                                        "flags": 32,
                                        "start": 104,
                                        "end": 122
                                    },
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "f",
                                            "rawText": "f",
                                            "flags": 96,
                                            "start": 123,
                                            "end": 127
                                        },
                                        "right": {
                                            "kind": 271,
                                            "asyncKeyword": null,
                                            "typeParameters": null,
                                            "arrowPatameterList": {
                                                "kind": 342,
                                                "parameters": [],
                                                "trailingComma": false,
                                                "flags": 0,
                                                "start": 130,
                                                "end": 130
                                            },
                                            "returnType": null,
                                            "arrowToken": {
                                                "kind": 10,
                                                "flags": 64,
                                                "start": 140,
                                                "end": 143
                                            },
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [],
                                                    "flags": 32,
                                                    "start": 145,
                                                    "end": 145
                                                },
                                                "flags": 32,
                                                "start": 143,
                                                "end": 146
                                            },
                                            "flags": 32,
                                            "start": 128,
                                            "end": 146
                                        },
                                        "flags": 33,
                                        "start": 123,
                                        "end": 146
                                    },
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "f",
                                            "rawText": "f",
                                            "flags": 96,
                                            "start": 147,
                                            "end": 151
                                        },
                                        "right": {
                                            "kind": 177,
                                            "asyncKeyword": null,
                                            "functionKeyword": {
                                                "kind": 37822554,
                                                "flags": 64,
                                                "start": 152,
                                                "end": 161
                                            },
                                            "asteriskToken": null,
                                            "name": null,
                                            "typeParameters": null,
                                            "formalParameterList": {
                                                "kind": 214,
                                                "formalParameters": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 161,
                                                "end": 172
                                            },
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [],
                                                    "flags": 32,
                                                    "start": 174,
                                                    "end": 174
                                                },
                                                "flags": 32,
                                                "start": 172,
                                                "end": 175
                                            },
                                            "returnType": null,
                                            "flags": 32,
                                            "start": 152,
                                            "end": 175
                                        },
                                        "flags": 33,
                                        "start": 147,
                                        "end": 175
                                    },
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "f",
                                            "rawText": "f",
                                            "flags": 96,
                                            "start": 176,
                                            "end": 180
                                        },
                                        "right": {
                                            "kind": 177,
                                            "asyncKeyword": null,
                                            "functionKeyword": {
                                                "kind": 37822554,
                                                "flags": 64,
                                                "start": 181,
                                                "end": 190
                                            },
                                            "asteriskToken": null,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "f",
                                                "rawText": "f",
                                                "flags": 96,
                                                "start": 190,
                                                "end": 192
                                            },
                                            "typeParameters": null,
                                            "formalParameterList": {
                                                "kind": 214,
                                                "formalParameters": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 192,
                                                "end": 203
                                            },
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [],
                                                    "flags": 32,
                                                    "start": 205,
                                                    "end": 205
                                                },
                                                "flags": 32,
                                                "start": 203,
                                                "end": 206
                                            },
                                            "returnType": null,
                                            "flags": 32,
                                            "start": 181,
                                            "end": 206
                                        },
                                        "flags": 33,
                                        "start": 176,
                                        "end": 206
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 17,
                                "start": 104,
                                "end": 206
                            },
                            "flags": 49,
                            "start": 102,
                            "end": 208
                        },
                        "flags": 16,
                        "start": 96,
                        "end": 208
                    }
                ],
                "flags": 16777232,
                "start": 96,
                "end": 208
            },
            "flags": 33554448,
            "start": 89,
            "end": 208
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "f",
                    "rawText": "f",
                    "flags": 96,
                    "start": 208,
                    "end": 211
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 212,
                    "end": 212
                },
                "flags": 268435488,
                "start": 208,
                "end": 222
            },
            "flags": 16,
            "start": 208,
            "end": 223
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "f",
                    "rawText": "f",
                    "flags": 96,
                    "start": 223,
                    "end": 225
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 226,
                            "end": 227
                        }
                    ],
                    "trailingComma": true,
                    "flags": 32,
                    "start": 226,
                    "end": 228
                },
                "flags": 268435488,
                "start": 223,
                "end": 239
            },
            "flags": 16,
            "start": 223,
            "end": 240
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "f",
                    "rawText": "f",
                    "flags": 96,
                    "start": 240,
                    "end": 242
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 243,
                            "end": 244
                        },
                        {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "start": 245,
                            "end": 257
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 243,
                    "end": 257
                },
                "flags": 268435488,
                "start": 240,
                "end": 258
            },
            "flags": 16,
            "start": 240,
            "end": 259
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "f",
                    "rawText": "f",
                    "flags": 96,
                    "start": 259,
                    "end": 261
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 262,
                            "end": 273
                        },
                        {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "start": 274,
                            "end": 276
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 262,
                    "end": 276
                },
                "flags": 268435488,
                "start": 259,
                "end": 277
            },
            "flags": 16,
            "start": 259,
            "end": 278
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 81,
                "start": 278,
                "end": 283
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "f3",
                            "rawText": "f3",
                            "flags": 96,
                            "start": 283,
                            "end": 286
                        },
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "asyncKeyword": null,
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 342,
                                "parameters": [],
                                "trailingComma": false,
                                "flags": 0,
                                "start": 290,
                                "end": 290
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "start": 291,
                                "end": 294
                            },
                            "contents": {
                                "kind": 120,
                                "expression": {
                                    "kind": 206,
                                    "importKeyword": {
                                        "kind": 37814364,
                                        "flags": 64,
                                        "start": 294,
                                        "end": 301
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "start": 302,
                                        "end": 303
                                    },
                                    "flags": 32,
                                    "start": 301,
                                    "end": 314
                                },
                                "flags": 16,
                                "start": 301,
                                "end": 315
                            },
                            "flags": 32,
                            "start": 288,
                            "end": 315
                        },
                        "flags": 16,
                        "start": 283,
                        "end": 315
                    }
                ],
                "flags": 17,
                "start": 283,
                "end": 315
            },
            "flags": 33554448,
            "start": 278,
            "end": 315
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 81,
                "start": 315,
                "end": 319
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "f4",
                            "rawText": "f4",
                            "flags": 96,
                            "start": 319,
                            "end": 322
                        },
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "asyncKeyword": null,
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 342,
                                "parameters": [],
                                "trailingComma": false,
                                "flags": 0,
                                "start": 326,
                                "end": 326
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "start": 327,
                                "end": 330
                            },
                            "contents": {
                                "kind": 131,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "doThing",
                                    "rawText": "doThing",
                                    "flags": 96,
                                    "start": 330,
                                    "end": 338
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "start": 339,
                                            "end": 340
                                        },
                                        {
                                            "kind": 134299649,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 96,
                                            "start": 341,
                                            "end": 353
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 339,
                                    "end": 353
                                },
                                "flags": 268435488,
                                "start": 330,
                                "end": 354
                            },
                            "flags": 32,
                            "start": 324,
                            "end": 354
                        },
                        "flags": 16,
                        "start": 319,
                        "end": 354
                    }
                ],
                "flags": 17,
                "start": 319,
                "end": 354
            },
            "flags": 33554448,
            "start": 315,
            "end": 355
        }
    ],
    "isModule": false,
    "source": "let f1 = (/* ... */) => {}\n(function (/* ... */) {})(/* ... */)\nfunction f2(/* ... */) {}\n\nconst obj = {\n  f(/* ... */) {},\n  f: (/* ... */) => {},\n  f: function(/* ... */) {},\n  f: function f(/* ... */) {}\n}\n\nf(/* ... */);\nf(a, /* ... */);\nf(a, /* ... */ b);\nf(/* ... */ a, b);\n\nlet f3 = () => import(a /* ... */);\nlet f4 = () => doThing(a, /* ... */ b);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 355
}
```

### Printed

```javascript

let f1 = () =>  {}(function () {})();
function f2() {}
const obj = { f() {}, f: () =>  {}, f: function () {}, f: function f() {} };
f();
f(a);
f(a, /* ... */ b);
f(/* ... */ a, b);
let f3 = () =>  ;
let f4 = () =>  doThing(a, /* ... */ b);
```

### Diagnostics

```javascript
✔ No errors
```

