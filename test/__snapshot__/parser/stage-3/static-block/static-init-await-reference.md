# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, next: true }
`````

## Input

`````js
class C {
  static {
    (function (x = fromParam = await) {
      fromBody = await;
    })();
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
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 80,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "C",
                "rawText": "C",
                "flags": 96,
                "start": 5,
                "end": 7
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
                                                "kind": 131,
                                                "expression": {
                                                    "kind": 121,
                                                    "expression": {
                                                        "kind": 177,
                                                        "asyncKeyword": null,
                                                        "functionKeyword": {
                                                            "kind": 37822554,
                                                            "flags": 64,
                                                            "start": 26,
                                                            "end": 34
                                                        },
                                                        "generatorToken": null,
                                                        "name": null,
                                                        "formalParameters": {
                                                            "kind": 214,
                                                            "formalParameterList": [
                                                                {
                                                                    "kind": 281,
                                                                    "ellipsisToken": null,
                                                                    "left": {
                                                                        "kind": 134299649,
                                                                        "text": "x",
                                                                        "rawText": "x",
                                                                        "flags": 96,
                                                                        "start": 36,
                                                                        "end": 37
                                                                    },
                                                                    "optionalToken": null,
                                                                    "type": null,
                                                                    "right": {
                                                                        "kind": 125,
                                                                        "left": {
                                                                            "kind": 134299649,
                                                                            "text": "fromParam",
                                                                            "rawText": "fromParam",
                                                                            "flags": 96,
                                                                            "start": 39,
                                                                            "end": 49
                                                                        },
                                                                        "operatorToken": {
                                                                            "kind": 4125,
                                                                            "flags": 64,
                                                                            "start": 49,
                                                                            "end": 51
                                                                        },
                                                                        "right": {
                                                                            "kind": 134299649,
                                                                            "text": "await",
                                                                            "rawText": "await",
                                                                            "flags": 96,
                                                                            "start": 51,
                                                                            "end": 57
                                                                        },
                                                                        "flags": 32,
                                                                        "start": 39,
                                                                        "end": 57
                                                                    },
                                                                    "flags": 34,
                                                                    "start": 36,
                                                                    "end": 57
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 32,
                                                            "start": 34,
                                                            "end": 58
                                                        },
                                                        "contents": {
                                                            "kind": 216,
                                                            "functionStatementList": {
                                                                "kind": 217,
                                                                "directives": [],
                                                                "statements": [
                                                                    {
                                                                        "kind": 120,
                                                                        "expression": {
                                                                            "kind": 125,
                                                                            "left": {
                                                                                "kind": 134299649,
                                                                                "text": "fromBody",
                                                                                "rawText": "fromBody",
                                                                                "flags": 96,
                                                                                "start": 60,
                                                                                "end": 75
                                                                            },
                                                                            "operatorToken": {
                                                                                "kind": 4125,
                                                                                "flags": 64,
                                                                                "start": 75,
                                                                                "end": 77
                                                                            },
                                                                            "right": {
                                                                                "kind": 134299649,
                                                                                "text": "await",
                                                                                "rawText": "await",
                                                                                "flags": 96,
                                                                                "start": 77,
                                                                                "end": 83
                                                                            },
                                                                            "flags": 32,
                                                                            "start": 60,
                                                                            "end": 83
                                                                        },
                                                                        "flags": 16,
                                                                        "start": 60,
                                                                        "end": 84
                                                                    }
                                                                ],
                                                                "flags": 33,
                                                                "start": 60,
                                                                "end": 84
                                                            },
                                                            "flags": 32,
                                                            "start": 58,
                                                            "end": 90
                                                        },
                                                        "typeParameters": null,
                                                        "returnType": null,
                                                        "flags": 32,
                                                        "start": 26,
                                                        "end": 90
                                                    },
                                                    "flags": 32,
                                                    "start": 20,
                                                    "end": 91
                                                },
                                                "argumentList": {
                                                    "kind": 256,
                                                    "elements": [],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "start": 92,
                                                    "end": 92
                                                },
                                                "flags": 268435488,
                                                "start": 20,
                                                "end": 93
                                            },
                                            "flags": 16,
                                            "start": 20,
                                            "end": 94
                                        }
                                    ],
                                    "flags": 17,
                                    "start": 20,
                                    "end": 94
                                },
                                "flags": 16,
                                "start": 9,
                                "end": 98
                            },
                            "flags": 32,
                            "start": 9,
                            "end": 98
                        }
                    ],
                    "flags": 32,
                    "start": 9,
                    "end": 98
                },
                "flags": 7,
                "start": 32,
                "end": 100
            },
            "flags": 16,
            "start": 0,
            "end": 100
        }
    ],
    "isModule": false,
    "source": "class C {\n  static {\n    (function (x = fromParam = await) {\n      fromBody = await;\n    })();\n  }\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 100
}
```

### Printed

```javascript

class C {
   ;
}
```

### Diagnostics

```javascript
✔ No errors
```

