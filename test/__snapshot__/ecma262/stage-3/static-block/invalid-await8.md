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
      await = 1;
      x = await;
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
                                                            "staticKeyword": null,
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
                                                            "kind": 1108353041,
                                                            "flags": 64,
                                                            "start": 61,
                                                            "end": 62
                                                        },
                                                        {
                                                            "kind": 280,
                                                            "decorators": null,
                                                            "declaredToken": null,
                                                            "staticKeyword": null,
                                                            "asyncKeyword": null,
                                                            "key": {
                                                                "kind": 134299649,
                                                                "text": "x",
                                                                "rawText": "x",
                                                                "flags": 96,
                                                                "start": 62,
                                                                "end": 70
                                                            },
                                                            "optionalToken": null,
                                                            "type": null,
                                                            "initializer": {
                                                                "kind": 208,
                                                                "awaitKeyword": {
                                                                    "kind": 82196,
                                                                    "flags": 64,
                                                                    "start": 72,
                                                                    "end": 78
                                                                },
                                                                "expression": {
                                                                    "kind": 16637,
                                                                    "text": "",
                                                                    "rawText": "",
                                                                    "flags": 64,
                                                                    "start": 78,
                                                                    "end": 78
                                                                },
                                                                "flags": 32,
                                                                "start": 72,
                                                                "end": 78
                                                            },
                                                            "flags": 32,
                                                            "start": 62,
                                                            "end": 78
                                                        },
                                                        {
                                                            "kind": 1108353041,
                                                            "flags": 64,
                                                            "start": 78,
                                                            "end": 79
                                                        }
                                                    ],
                                                    "flags": 32,
                                                    "start": 45,
                                                    "end": 79
                                                },
                                                "flags": 43,
                                                "start": 32,
                                                "end": 85
                                            },
                                            "flags": 17,
                                            "start": 31,
                                            "end": 85
                                        },
                                        {
                                            "kind": 168,
                                            "flags": 16,
                                            "start": 85,
                                            "end": 86
                                        }
                                    ],
                                    "flags": 17,
                                    "start": 31,
                                    "end": 86
                                },
                                "flags": 20,
                                "start": 0,
                                "end": 90
                            },
                            "flags": 32,
                            "start": 20,
                            "end": 90
                        }
                    ],
                    "flags": 32,
                    "start": 20,
                    "end": 90
                },
                "flags": 18,
                "start": 32,
                "end": 92
            },
            "flags": 17,
            "start": 10,
            "end": 92
        }
    ],
    "isModule": false,
    "source": "let await;\nclass C {\n  static {\n    class D {\n      await = 1;\n      x = await;\n    };\n  }\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 92
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 78, end: 79

```

