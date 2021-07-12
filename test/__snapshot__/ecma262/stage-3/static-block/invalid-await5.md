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
    await(1); // illegal
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
                            "staticKeyword": {
                                "kind": 8388716,
                                "flags": 64,
                                "start": 20,
                                "end": 29
                            },
                            "block": {
                                "kind": 124,
                                "block": {
                                    "kind": 249,
                                    "statements": [
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 208,
                                                "awaitKeyword": {
                                                    "kind": 82196,
                                                    "flags": 65,
                                                    "start": 31,
                                                    "end": 41
                                                },
                                                "expression": {
                                                    "kind": 121,
                                                    "expression": {
                                                        "kind": 201392130,
                                                        "text": 1,
                                                        "rawText": "1",
                                                        "flags": 96,
                                                        "start": 42,
                                                        "end": 43
                                                    },
                                                    "flags": 32,
                                                    "start": 41,
                                                    "end": 44
                                                },
                                                "flags": 32,
                                                "start": 31,
                                                "end": 44
                                            },
                                            "flags": 16,
                                            "start": 31,
                                            "end": 45
                                        }
                                    ],
                                    "flags": 17,
                                    "start": 31,
                                    "end": 45
                                },
                                "flags": 20,
                                "start": 0,
                                "end": 60
                            },
                            "flags": 32,
                            "start": 20,
                            "end": 60
                        }
                    ],
                    "flags": 32,
                    "start": 20,
                    "end": 60
                },
                "flags": 18,
                "start": 32,
                "end": 62
            },
            "flags": 17,
            "start": 10,
            "end": 62
        }
    ],
    "isModule": false,
    "source": "let await;\nclass C {\n  static {\n    await(1); // illegal\n  }\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 62
}
```

### Printed

```javascript

  let await;
  class C {
    static  {
      await (1); // illegal
    }
  }

```

### Diagnostics

```javascript
✔ No errors
```

