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
    let await; // illegal, cannot declare a new binding for await
    let { await } = {}; // illegal, cannot declare a new binding for await
    class D {
      await = 1; // legal
      x = await; // legal (initializers have an implicit function boundary)
      [await] = 1; // illegal (computed property names are evaluated outside of a class body
    };
    (function await() {}); // legal, 'await' in function expression name not bound inside of static block
    (class await {}); // legal, 'await' in class expression name not bound inside of static block
    (function () { return await; }); // legal, 'await' is inside of a new function boundary
    (() => await); // legal, 'await' is inside of a new function boundary
    await: // illegal, 'await' cannot be used as a label
      break await; // illegal, 'await' cannot be used as a label
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
                                            "kind": 162,
                                            "lexicalKeyword": {
                                                "kind": 41951307,
                                                "flags": 81,
                                                "start": 31,
                                                "end": 39
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
                                                            "start": 39,
                                                            "end": 45
                                                        },
                                                        "optionalToken": null,
                                                        "type": null,
                                                        "initializer": null,
                                                        "flags": 16,
                                                        "start": 39,
                                                        "end": 45
                                                    }
                                                ],
                                                "flags": 17,
                                                "start": 39,
                                                "end": 45
                                            },
                                            "flags": 33554448,
                                            "start": 31,
                                            "end": 46
                                        },
                                        {
                                            "kind": 162,
                                            "lexicalKeyword": {
                                                "kind": 41951307,
                                                "flags": 81,
                                                "start": 46,
                                                "end": 105
                                            },
                                            "binding": {
                                                "kind": 151,
                                                "bindingList": [
                                                    {
                                                        "kind": 190,
                                                        "binding": {
                                                            "kind": 212,
                                                            "propertyList": {
                                                                "kind": 213,
                                                                "properties": [
                                                                    {
                                                                        "kind": 134299649,
                                                                        "text": "await",
                                                                        "rawText": "await",
                                                                        "flags": 96,
                                                                        "start": 107,
                                                                        "end": 113
                                                                    }
                                                                ],
                                                                "trailingComma": false,
                                                                "flags": 32,
                                                                "start": 107,
                                                                "end": 113
                                                            },
                                                            "flags": 32,
                                                            "start": 105,
                                                            "end": 115
                                                        },
                                                        "optionalToken": null,
                                                        "type": null,
                                                        "initializer": {
                                                            "kind": 220,
                                                            "propertyList": {
                                                                "kind": 218,
                                                                "properties": [],
                                                                "trailingComma": false,
                                                                "flags": 16,
                                                                "start": 119,
                                                                "end": 119
                                                            },
                                                            "flags": 48,
                                                            "start": 117,
                                                            "end": 120
                                                        },
                                                        "flags": 16,
                                                        "start": 105,
                                                        "end": 120
                                                    }
                                                ],
                                                "flags": 17,
                                                "start": 105,
                                                "end": 120
                                            },
                                            "flags": 33554448,
                                            "start": 46,
                                            "end": 121
                                        },
                                        {
                                            "kind": 178,
                                            "declareKeyword": null,
                                            "decorators": null,
                                            "classKeyword": {
                                                "kind": 37822544,
                                                "flags": 81,
                                                "start": 121,
                                                "end": 182
                                            },
                                            "name": {
                                                "kind": 134299649,
                                                "text": "D",
                                                "rawText": "D",
                                                "flags": 96,
                                                "start": 182,
                                                "end": 184
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
                                                                "start": 186,
                                                                "end": 198
                                                            },
                                                            "optionalToken": null,
                                                            "type": null,
                                                            "initializer": {
                                                                "kind": 201392130,
                                                                "text": 1,
                                                                "rawText": "1",
                                                                "flags": 96,
                                                                "start": 200,
                                                                "end": 202
                                                            },
                                                            "flags": 32,
                                                            "start": 186,
                                                            "end": 202
                                                        },
                                                        {
                                                            "kind": 317,
                                                            "flags": 96,
                                                            "start": 202,
                                                            "end": 203
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
                                                                "start": 203,
                                                                "end": 220
                                                            },
                                                            "optionalToken": null,
                                                            "type": null,
                                                            "initializer": {
                                                                "kind": 134299649,
                                                                "text": "await",
                                                                "rawText": "await",
                                                                "flags": 96,
                                                                "start": 222,
                                                                "end": 228
                                                            },
                                                            "flags": 32,
                                                            "start": 203,
                                                            "end": 228
                                                        },
                                                        {
                                                            "kind": 317,
                                                            "flags": 96,
                                                            "start": 228,
                                                            "end": 229
                                                        },
                                                        {
                                                            "kind": 280,
                                                            "decorators": null,
                                                            "declaredToken": null,
                                                            "staticToken": null,
                                                            "asyncKeyword": null,
                                                            "key": {
                                                                "kind": 194,
                                                                "expression": {
                                                                    "kind": 134299649,
                                                                    "text": "await",
                                                                    "rawText": "await",
                                                                    "flags": 96,
                                                                    "start": 296,
                                                                    "end": 301
                                                                },
                                                                "flags": 32,
                                                                "start": 229,
                                                                "end": 302
                                                            },
                                                            "optionalToken": null,
                                                            "type": null,
                                                            "initializer": {
                                                                "kind": 201392130,
                                                                "text": 1,
                                                                "rawText": "1",
                                                                "flags": 96,
                                                                "start": 304,
                                                                "end": 306
                                                            },
                                                            "flags": 32,
                                                            "start": 229,
                                                            "end": 306
                                                        },
                                                        {
                                                            "kind": 317,
                                                            "flags": 96,
                                                            "start": 306,
                                                            "end": 307
                                                        }
                                                    ],
                                                    "flags": 32,
                                                    "start": 186,
                                                    "end": 307
                                                },
                                                "flags": 184,
                                                "start": 32,
                                                "end": 387
                                            },
                                            "flags": 17,
                                            "start": 121,
                                            "end": 387
                                        },
                                        {
                                            "kind": 168,
                                            "flags": 16,
                                            "start": 387,
                                            "end": 388
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
                                                    "generatorToken": null,
                                                    "name": {
                                                        "kind": 134299649,
                                                        "text": "await",
                                                        "rawText": "await",
                                                        "flags": 96,
                                                        "start": 402,
                                                        "end": 408
                                                    },
                                                    "formalParameters": {
                                                        "kind": 214,
                                                        "formalParameterList": [],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "start": 408,
                                                        "end": 410
                                                    },
                                                    "contents": {
                                                        "kind": 216,
                                                        "functionStatementList": {
                                                            "kind": 217,
                                                            "directives": [],
                                                            "statements": [],
                                                            "flags": 32,
                                                            "start": 412,
                                                            "end": 412
                                                        },
                                                        "flags": 32,
                                                        "start": 410,
                                                        "end": 413
                                                    },
                                                    "typeParameters": null,
                                                    "returnType": null,
                                                    "flags": 32,
                                                    "start": 394,
                                                    "end": 413
                                                },
                                                "flags": 32,
                                                "start": 388,
                                                "end": 414
                                            },
                                            "flags": 16,
                                            "start": 388,
                                            "end": 415
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
                                                        "start": 500,
                                                        "end": 505
                                                    },
                                                    "name": {
                                                        "kind": 134299649,
                                                        "text": "await",
                                                        "rawText": "await",
                                                        "flags": 96,
                                                        "start": 505,
                                                        "end": 511
                                                    },
                                                    "typeParameters": null,
                                                    "tail": {
                                                        "kind": 277,
                                                        "classHeritage": null,
                                                        "body": {
                                                            "kind": 303,
                                                            "elements": [],
                                                            "flags": 32,
                                                            "start": 513,
                                                            "end": 513
                                                        },
                                                        "flags": 511,
                                                        "start": 32,
                                                        "end": 514
                                                    },
                                                    "flags": 32,
                                                    "start": 500,
                                                    "end": 514
                                                },
                                                "flags": 32,
                                                "start": 415,
                                                "end": 515
                                            },
                                            "flags": 16,
                                            "start": 415,
                                            "end": 516
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
                                                        "start": 598,
                                                        "end": 606
                                                    },
                                                    "generatorToken": null,
                                                    "name": null,
                                                    "formalParameters": {
                                                        "kind": 214,
                                                        "formalParameterList": [],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "start": 606,
                                                        "end": 609
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
                                                                        "start": 611,
                                                                        "end": 618
                                                                    },
                                                                    "expression": {
                                                                        "kind": 134299649,
                                                                        "text": "await",
                                                                        "rawText": "await",
                                                                        "flags": 96,
                                                                        "start": 618,
                                                                        "end": 624
                                                                    },
                                                                    "flags": 80,
                                                                    "start": 611,
                                                                    "end": 625
                                                                }
                                                            ],
                                                            "flags": 32,
                                                            "start": 611,
                                                            "end": 625
                                                        },
                                                        "flags": 32,
                                                        "start": 609,
                                                        "end": 627
                                                    },
                                                    "typeParameters": null,
                                                    "returnType": null,
                                                    "flags": 32,
                                                    "start": 598,
                                                    "end": 627
                                                },
                                                "flags": 32,
                                                "start": 516,
                                                "end": 628
                                            },
                                            "flags": 16,
                                            "start": 516,
                                            "end": 629
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
                                                        "start": 692,
                                                        "end": 695
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
                                                        "start": 695,
                                                        "end": 701
                                                    },
                                                    "flags": 32,
                                                    "start": 690,
                                                    "end": 701
                                                },
                                                "flags": 32,
                                                "start": 629,
                                                "end": 702
                                            },
                                            "flags": 16,
                                            "start": 629,
                                            "end": 703
                                        },
                                        {
                                            "kind": 163,
                                            "label": {
                                                "kind": 134299649,
                                                "text": "await",
                                                "rawText": "await",
                                                "flags": 96,
                                                "start": 703,
                                                "end": 768
                                            },
                                            "colonToken": {
                                                "kind": 21,
                                                "flags": 64,
                                                "start": 768,
                                                "end": 769
                                            },
                                            "statement": {
                                                "kind": 150,
                                                "breakKeyword": {
                                                    "kind": 37757005,
                                                    "flags": 81,
                                                    "start": 769,
                                                    "end": 827
                                                },
                                                "label": {
                                                    "kind": 134299649,
                                                    "text": "await",
                                                    "rawText": "await",
                                                    "flags": 96,
                                                    "start": 827,
                                                    "end": 833
                                                },
                                                "flags": 16,
                                                "start": 769,
                                                "end": 834
                                            },
                                            "flags": 17,
                                            "start": 703,
                                            "end": 834
                                        }
                                    ],
                                    "flags": 17,
                                    "start": 31,
                                    "end": 834
                                },
                                "flags": 20,
                                "start": 0,
                                "end": 884
                            },
                            "flags": 32,
                            "start": 20,
                            "end": 884
                        }
                    ],
                    "flags": 32,
                    "start": 20,
                    "end": 884
                },
                "flags": 18,
                "start": 32,
                "end": 886
            },
            "flags": 17,
            "start": 10,
            "end": 886
        }
    ],
    "isModule": false,
    "source": "let await;\nclass C {\n  static {\n    let await; // illegal, cannot declare a new binding for await\n    let { await } = {}; // illegal, cannot declare a new binding for await\n    class D {\n      await = 1; // legal\n      x = await; // legal (initializers have an implicit function boundary)\n      [await] = 1; // illegal (computed property names are evaluated outside of a class body\n    };\n    (function await() {}); // legal, 'await' in function expression name not bound inside of static block\n    (class await {}); // legal, 'await' in class expression name not bound inside of static block\n    (function () { return await; }); // legal, 'await' is inside of a new function boundary\n    (() => await); // legal, 'await' is inside of a new function boundary\n    await: // illegal, 'await' cannot be used as a label\n      break await; // illegal, 'await' cannot be used as a label\n  }\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 886
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'await' cannot be used as an identifier here - start: 39, end: 45
✖ Duplicate identifier - start: 113, end: 115

```

