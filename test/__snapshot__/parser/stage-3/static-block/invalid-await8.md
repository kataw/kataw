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

    ({ [await]: 1 }); // illegal
    class D {
      await = 1; // legal
      x = await; // legal (initializers have an implicit function boundary)
      [await] = 1; // illegal (computed property names are evaluated outside of a class body
    };

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
                    "kind": 262,
                    "elements": [
                        {
                            "kind": 263,
                            "decorators": null,
                            "declaredKeyword": null,
                            "staticKeyword": null,
                            "block": {
                                "kind": 124,
                                "block": {
                                    "kind": 249,
                                    "statements": [
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 121,
                                                "expression": {
                                                    "kind": 220,
                                                    "propertyList": {
                                                        "kind": 218,
                                                        "properties": [
                                                            {
                                                                "kind": 219,
                                                                "generatorToken": null,
                                                                "left": {
                                                                    "kind": 194,
                                                                    "expression": {
                                                                        "kind": 134299649,
                                                                        "text": "await",
                                                                        "rawText": "await",
                                                                        "flags": 96,
                                                                        "start": 41,
                                                                        "end": 46
                                                                    },
                                                                    "flags": 32,
                                                                    "start": 39,
                                                                    "end": 47
                                                                },
                                                                "right": {
                                                                    "kind": 201392130,
                                                                    "text": 1,
                                                                    "rawText": "1",
                                                                    "flags": 96,
                                                                    "start": 48,
                                                                    "end": 50
                                                                },
                                                                "flags": 32,
                                                                "start": 39,
                                                                "end": 50
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 16,
                                                        "start": 39,
                                                        "end": 50
                                                    },
                                                    "flags": 48,
                                                    "start": 38,
                                                    "end": 52
                                                },
                                                "flags": 32,
                                                "start": 31,
                                                "end": 53
                                            },
                                            "flags": 16,
                                            "start": 31,
                                            "end": 54
                                        },
                                        {
                                            "kind": 178,
                                            "declareKeyword": null,
                                            "decorators": null,
                                            "classKeyword": {
                                                "kind": 37822544,
                                                "flags": 81,
                                                "start": 54,
                                                "end": 75
                                            },
                                            "name": {
                                                "kind": 134299649,
                                                "text": "D",
                                                "rawText": "D",
                                                "flags": 96,
                                                "start": 75,
                                                "end": 77
                                            },
                                            "typeParameters": null,
                                            "tail": {
                                                "kind": 277,
                                                "classHeritage": null,
                                                "body": {
                                                    "kind": 262,
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
                                                                "start": 79,
                                                                "end": 91
                                                            },
                                                            "optionalToken": null,
                                                            "type": null,
                                                            "initializer": {
                                                                "kind": 201392130,
                                                                "text": 1,
                                                                "rawText": "1",
                                                                "flags": 96,
                                                                "start": 93,
                                                                "end": 95
                                                            },
                                                            "flags": 32,
                                                            "start": 79,
                                                            "end": 95
                                                        },
                                                        {
                                                            "kind": 281,
                                                            "flags": 96,
                                                            "start": 95,
                                                            "end": 96
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
                                                                "start": 96,
                                                                "end": 113
                                                            },
                                                            "optionalToken": null,
                                                            "type": null,
                                                            "initializer": {
                                                                "kind": 134299649,
                                                                "text": "await",
                                                                "rawText": "await",
                                                                "flags": 96,
                                                                "start": 115,
                                                                "end": 121
                                                            },
                                                            "flags": 32,
                                                            "start": 96,
                                                            "end": 121
                                                        },
                                                        {
                                                            "kind": 281,
                                                            "flags": 96,
                                                            "start": 121,
                                                            "end": 122
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
                                                                    "start": 189,
                                                                    "end": 194
                                                                },
                                                                "flags": 32,
                                                                "start": 122,
                                                                "end": 195
                                                            },
                                                            "optionalToken": null,
                                                            "type": null,
                                                            "initializer": {
                                                                "kind": 201392130,
                                                                "text": 1,
                                                                "rawText": "1",
                                                                "flags": 96,
                                                                "start": 197,
                                                                "end": 199
                                                            },
                                                            "flags": 32,
                                                            "start": 122,
                                                            "end": 199
                                                        },
                                                        {
                                                            "kind": 281,
                                                            "flags": 96,
                                                            "start": 199,
                                                            "end": 200
                                                        }
                                                    ],
                                                    "flags": 32,
                                                    "start": 79,
                                                    "end": 200
                                                },
                                                "flags": 77,
                                                "start": 32,
                                                "end": 280
                                            },
                                            "flags": 17,
                                            "start": 54,
                                            "end": 280
                                        },
                                        {
                                            "kind": 168,
                                            "flags": 16,
                                            "start": 280,
                                            "end": 281
                                        }
                                    ],
                                    "flags": 17,
                                    "start": 31,
                                    "end": 281
                                },
                                "flags": 20,
                                "start": 0,
                                "end": 286
                            },
                            "flags": 32,
                            "start": 20,
                            "end": 286
                        }
                    ],
                    "flags": 32,
                    "start": 20,
                    "end": 286
                },
                "flags": 18,
                "start": 32,
                "end": 288
            },
            "flags": 17,
            "start": 10,
            "end": 288
        }
    ],
    "isModule": false,
    "source": "let await;\nclass C {\n  static {\n\n    ({ [await]: 1 }); // illegal\n    class D {\n      await = 1; // legal\n      x = await; // legal (initializers have an implicit function boundary)\n      [await] = 1; // illegal (computed property names are evaluated outside of a class body\n    };\n\n  }\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 288
}
```

### Printed

```javascript

let await;
class C {
   ;
}
```

### Diagnostics

```javascript
✔ No errors
```

