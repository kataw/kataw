# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, next: true }
`````

## Input

`````js
let await;
class C {
  static {
    class D {
      await = 1; // legal
      x = await; // legal (initializers have an implicit function boundary)
    };
    (function await() {}); // legal, 'await' in function expression name not bound inside of static block
    (class await {}); // legal, 'await' in class expression name not bound inside of static block
    (function () { return await; }); // legal, 'await' is inside of a new function boundary
    (() => await); // legal, 'await' is inside of a new function boundary
  }
}
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
                            "text": "await",
                            "rawText": "await",
                            "flags": 96,
                            "start": 3,
                            "end": 9
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 3,
                        "end": 9
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 9
            },
            "flags": 33554448,
            "start": 0,
            "end": 10
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "start": 10,
                "end": 16
            },
            "name": {
                "kind": 134299649,
                "text": "C",
                "rawText": "C",
                "flags": 96,
                "start": 16,
                "end": 18
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 303,
                    "elements": [
                        {
                            "kind": 305,
                            "decorators": null,
                            "declaredKeyword": null,
                            "staticKeyword": null,
                            "block": {
                                "kind": 124,
                                "block": {
                                    "kind": 249,
                                    "statements": [
                                        {
                                            "kind": 178,
                                            "declareKeyword": null,
                                            "decorators": null,
                                            "classKeyword": {
                                                "kind": 37822544,
                                                "flags": 81,
                                                "start": 31,
                                                "end": 41
                                            },
                                            "name": {
                                                "kind": 134299649,
                                                "text": "D",
                                                "rawText": "D",
                                                "flags": 96,
                                                "start": 41,
                                                "end": 43
                                            },
                                            "typeParameters": null,
                                            "tail": {
                                                "kind": 277,
                                                "classHeritage": null,
                                                "body": {
                                                    "kind": 303,
                                                    "elements": [
                                                        {
                                                            "kind": 280,
                                                            "decorators": null,
                                                            "declaredToken": null,
                                                            "staticToken": null,
                                                            "asyncKeyword": null,
                                                            "key": {
                                                                "kind": 134299649,
                                                                "text": "await",
                                                                "rawText": "await",
                                                                "flags": 96,
                                                                "start": 45,
                                                                "end": 57
                                                            },
                                                            "optionalToken": null,
                                                            "type": null,
                                                            "initializer": {
                                                                "kind": 201392130,
                                                                "text": 1,
                                                                "rawText": "1",
                                                                "flags": 96,
                                                                "start": 59,
                                                                "end": 61
                                                            },
                                                            "flags": 32,
                                                            "start": 45,
                                                            "end": 61
                                                        },
                                                        {
                                                            "kind": 317,
                                                            "flags": 96,
                                                            "start": 61,
                                                            "end": 62
                                                        },
                                                        {
                                                            "kind": 280,
                                                            "decorators": null,
                                                            "declaredToken": null,
                                                            "staticToken": null,
                                                            "asyncKeyword": null,
                                                            "key": {
                                                                "kind": 134299649,
                                                                "text": "x",
                                                                "rawText": "x",
                                                                "flags": 96,
                                                                "start": 62,
                                                                "end": 79
                                                            },
                                                            "optionalToken": null,
                                                            "type": null,
                                                            "initializer": {
                                                                "kind": 208,
                                                                "awaitKeyword": {
                                                                    "kind": 82196,
                                                                    "flags": 64,
                                                                    "start": 81,
                                                                    "end": 87
                                                                },
                                                                "expression": {
                                                                    "kind": 16637,
                                                                    "text": "",
                                                                    "flags": 64,
                                                                    "start": 87,
                                                                    "end": 87
                                                                },
                                                                "flags": 32,
                                                                "start": 81,
                                                                "end": 87
                                                            },
                                                            "flags": 32,
                                                            "start": 62,
                                                            "end": 87
                                                        },
                                                        {
                                                            "kind": 317,
                                                            "flags": 96,
                                                            "start": 87,
                                                            "end": 88
                                                        }
                                                    ],
                                                    "flags": 32,
                                                    "start": 45,
                                                    "end": 88
                                                },
                                                "flags": 43,
                                                "start": 32,
                                                "end": 153
                                            },
                                            "flags": 17,
                                            "start": 31,
                                            "end": 153
                                        },
                                        {
                                            "kind": 168,
                                            "flags": 16,
                                            "start": 153,
                                            "end": 154
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
                                                        "start": 160,
                                                        "end": 168
                                                    },
                                                    "generatorToken": null,
                                                    "name": {
                                                        "kind": 134299649,
                                                        "text": "await",
                                                        "rawText": "await",
                                                        "flags": 96,
                                                        "start": 168,
                                                        "end": 174
                                                    },
                                                    "typeParameters": null,
                                                    "formalParameterList": {
                                                        "kind": 214,
                                                        "formalParameters": [],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "start": 174,
                                                        "end": 176
                                                    },
                                                    "contents": {
                                                        "kind": 216,
                                                        "functionStatementList": {
                                                            "kind": 217,
                                                            "directives": [],
                                                            "statements": [],
                                                            "flags": 32,
                                                            "start": 178,
                                                            "end": 178
                                                        },
                                                        "flags": 32,
                                                        "start": 176,
                                                        "end": 179
                                                    },
                                                    "returnType": null,
                                                    "flags": 32,
                                                    "start": 160,
                                                    "end": 179
                                                },
                                                "flags": 32,
                                                "start": 154,
                                                "end": 180
                                            },
                                            "flags": 16,
                                            "start": 154,
                                            "end": 181
                                        },
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 121,
                                                "expression": {
                                                    "kind": 189,
                                                    "decorators": null,
                                                    "classKeyword": {
                                                        "kind": 37822544,
                                                        "flags": 64,
                                                        "start": 266,
                                                        "end": 271
                                                    },
                                                    "name": {
                                                        "kind": 134299649,
                                                        "text": "await",
                                                        "rawText": "await",
                                                        "flags": 96,
                                                        "start": 271,
                                                        "end": 277
                                                    },
                                                    "typeParameters": null,
                                                    "tail": {
                                                        "kind": 277,
                                                        "classHeritage": null,
                                                        "body": {
                                                            "kind": 303,
                                                            "elements": [],
                                                            "flags": 32,
                                                            "start": 279,
                                                            "end": 279
                                                        },
                                                        "flags": 277,
                                                        "start": 32,
                                                        "end": 280
                                                    },
                                                    "flags": 32,
                                                    "start": 266,
                                                    "end": 280
                                                },
                                                "flags": 32,
                                                "start": 181,
                                                "end": 281
                                            },
                                            "flags": 16,
                                            "start": 181,
                                            "end": 282
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
                                                        "start": 364,
                                                        "end": 372
                                                    },
                                                    "generatorToken": null,
                                                    "name": null,
                                                    "typeParameters": null,
                                                    "formalParameterList": {
                                                        "kind": 214,
                                                        "formalParameters": [],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "start": 372,
                                                        "end": 375
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
                                                                        "start": 377,
                                                                        "end": 384
                                                                    },
                                                                    "expression": {
                                                                        "kind": 134299649,
                                                                        "text": "await",
                                                                        "rawText": "await",
                                                                        "flags": 96,
                                                                        "start": 384,
                                                                        "end": 390
                                                                    },
                                                                    "flags": 80,
                                                                    "start": 377,
                                                                    "end": 391
                                                                }
                                                            ],
                                                            "flags": 32,
                                                            "start": 377,
                                                            "end": 391
                                                        },
                                                        "flags": 32,
                                                        "start": 375,
                                                        "end": 393
                                                    },
                                                    "returnType": null,
                                                    "flags": 32,
                                                    "start": 364,
                                                    "end": 393
                                                },
                                                "flags": 32,
                                                "start": 282,
                                                "end": 394
                                            },
                                            "flags": 16,
                                            "start": 282,
                                            "end": 395
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
                                                        "start": 458,
                                                        "end": 461
                                                    },
                                                    "typeParameters": null,
                                                    "parameters": [],
                                                    "asyncKeyword": null,
                                                    "returnType": null,
                                                    "contents": {
                                                        "kind": 134299649,
                                                        "text": "await",
                                                        "rawText": "await",
                                                        "flags": 96,
                                                        "start": 461,
                                                        "end": 467
                                                    },
                                                    "flags": 32,
                                                    "start": 456,
                                                    "end": 467
                                                },
                                                "flags": 32,
                                                "start": 395,
                                                "end": 468
                                            },
                                            "flags": 16,
                                            "start": 395,
                                            "end": 469
                                        }
                                    ],
                                    "flags": 17,
                                    "start": 31,
                                    "end": 469
                                },
                                "flags": 20,
                                "start": 0,
                                "end": 528
                            },
                            "flags": 32,
                            "start": 20,
                            "end": 528
                        }
                    ],
                    "flags": 32,
                    "start": 20,
                    "end": 528
                },
                "flags": 18,
                "start": 32,
                "end": 530
            },
            "flags": 17,
            "start": 10,
            "end": 530
        }
    ],
    "isModule": false,
    "source": "let await;\nclass C {\n  static {\n    class D {\n      await = 1; // legal\n      x = await; // legal (initializers have an implicit function boundary)\n    };\n    (function await() {}); // legal, 'await' in function expression name not bound inside of static block\n    (class await {}); // legal, 'await' in class expression name not bound inside of static block\n    (function () { return await; }); // legal, 'await' is inside of a new function boundary\n    (() => await); // legal, 'await' is inside of a new function boundary\n  }\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 530
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 87, end: 88

```

