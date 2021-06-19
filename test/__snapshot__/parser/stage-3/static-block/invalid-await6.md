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
                                            "kind": 163,
                                            "label": {
                                                "kind": 208,
                                                "awaitKeyword": {
                                                    "kind": 82196,
                                                    "flags": 65,
                                                    "start": 31,
                                                    "end": 41
                                                },
                                                "expression": {
                                                    "kind": 16637,
                                                    "text": "",
                                                    "rawText": "",
                                                    "flags": 64,
                                                    "start": 41,
                                                    "end": 41
                                                },
                                                "flags": 32,
                                                "start": 31,
                                                "end": 41
                                            },
                                            "colonToken": {
                                                "kind": 21,
                                                "flags": 64,
                                                "start": 41,
                                                "end": 42
                                            },
                                            "statement": {
                                                "kind": 150,
                                                "breakKeyword": {
                                                    "kind": 37757005,
                                                    "flags": 81,
                                                    "start": 42,
                                                    "end": 100
                                                },
                                                "label": {
                                                    "kind": 134299649,
                                                    "text": "await",
                                                    "rawText": "await",
                                                    "flags": 96,
                                                    "start": 100,
                                                    "end": 106
                                                },
                                                "flags": 16,
                                                "start": 42,
                                                "end": 107
                                            },
                                            "flags": 17,
                                            "start": 31,
                                            "end": 107
                                        }
                                    ],
                                    "flags": 17,
                                    "start": 31,
                                    "end": 107
                                },
                                "flags": 20,
                                "start": 0,
                                "end": 157
                            },
                            "flags": 32,
                            "start": 20,
                            "end": 157
                        }
                    ],
                    "flags": 32,
                    "start": 20,
                    "end": 157
                },
                "flags": 18,
                "start": 32,
                "end": 159
            },
            "flags": 17,
            "start": 10,
            "end": 159
        }
    ],
    "isModule": false,
    "source": "let await;\nclass C {\n  static {\n    await: // illegal, 'await' cannot be used as a label\n      break await; // illegal, 'await' cannot be used as a label\n  }\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 159
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 41, end: 42
✖ Identifier expected. 'await' is a reserved word in strict mode and module goal and cannot be used as an label - start: 31, end: 42
✖ A 'break' statement can only jump to a label of an enclosing statement - start: 106, end: 107

```

