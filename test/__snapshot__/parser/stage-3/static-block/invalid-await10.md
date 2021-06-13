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
                                                "end": 39
                                            },
                                            "name": {
                                                "kind": 134299649,
                                                "text": "D",
                                                "rawText": "D",
                                                "flags": 96,
                                                "start": 39,
                                                "end": 41
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
                                                                "start": 43,
                                                                "end": 55
                                                            },
                                                            "optionalToken": null,
                                                            "type": null,
                                                            "initializer": {
                                                                "kind": 201392130,
                                                                "text": 1,
                                                                "rawText": "1",
                                                                "flags": 96,
                                                                "start": 57,
                                                                "end": 59
                                                            },
                                                            "flags": 32,
                                                            "start": 43,
                                                            "end": 59
                                                        },
                                                        {
                                                            "kind": 317,
                                                            "flags": 96,
                                                            "start": 59,
                                                            "end": 60
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
                                                                "start": 60,
                                                                "end": 77
                                                            },
                                                            "optionalToken": null,
                                                            "type": null,
                                                            "initializer": {
                                                                "kind": 134299649,
                                                                "text": "await",
                                                                "rawText": "await",
                                                                "flags": 96,
                                                                "start": 79,
                                                                "end": 85
                                                            },
                                                            "flags": 32,
                                                            "start": 60,
                                                            "end": 85
                                                        },
                                                        {
                                                            "kind": 317,
                                                            "flags": 96,
                                                            "start": 85,
                                                            "end": 86
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
                                                                    "start": 153,
                                                                    "end": 158
                                                                },
                                                                "flags": 32,
                                                                "start": 86,
                                                                "end": 159
                                                            },
                                                            "optionalToken": null,
                                                            "type": null,
                                                            "initializer": {
                                                                "kind": 201392130,
                                                                "text": 1,
                                                                "rawText": "1",
                                                                "flags": 96,
                                                                "start": 161,
                                                                "end": 163
                                                            },
                                                            "flags": 32,
                                                            "start": 86,
                                                            "end": 163
                                                        },
                                                        {
                                                            "kind": 317,
                                                            "flags": 96,
                                                            "start": 163,
                                                            "end": 164
                                                        }
                                                    ],
                                                    "flags": 32,
                                                    "start": 43,
                                                    "end": 164
                                                },
                                                "flags": 41,
                                                "start": 32,
                                                "end": 244
                                            },
                                            "flags": 17,
                                            "start": 31,
                                            "end": 244
                                        },
                                        {
                                            "kind": 168,
                                            "flags": 16,
                                            "start": 244,
                                            "end": 245
                                        }
                                    ],
                                    "flags": 17,
                                    "start": 31,
                                    "end": 245
                                },
                                "flags": 20,
                                "start": 0,
                                "end": 250
                            },
                            "flags": 32,
                            "start": 20,
                            "end": 250
                        }
                    ],
                    "flags": 32,
                    "start": 20,
                    "end": 250
                },
                "flags": 18,
                "start": 32,
                "end": 252
            },
            "flags": 17,
            "start": 10,
            "end": 252
        }
    ],
    "isModule": false,
    "source": "let await;\nclass C {\n  static {\n  class D {\n      await = 1; // legal\n      x = await; // legal (initializers have an implicit function boundary)\n      [await] = 1; // illegal (computed property names are evaluated outside of a class body\n    };\n\n  }\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 252
}
```

### Printed

```javascript

let await;
class C {

}
```

### Diagnostics

```javascript
✔ No errors
```

