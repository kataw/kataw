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
                "transformFlags": 0,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "C",
                "rawText": "C",
                "flags": 96,
                "transformFlags": 0,
                "start": 5,
                "end": 7
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
                                "transformFlags": 0,
                                "start": 9,
                                "end": 18
                            },
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
                                                            "transformFlags": 0,
                                                            "start": 26,
                                                            "end": 34
                                                        },
                                                        "asteriskToken": null,
                                                        "name": null,
                                                        "typeParameters": null,
                                                        "formalParameterList": {
                                                            "kind": 214,
                                                            "formalParameters": [
                                                                {
                                                                    "kind": 281,
                                                                    "ellipsisToken": null,
                                                                    "left": {
                                                                        "kind": 134299649,
                                                                        "text": "x",
                                                                        "rawText": "x",
                                                                        "flags": 96,
                                                                        "transformFlags": 0,
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
                                                                            "transformFlags": 0,
                                                                            "start": 39,
                                                                            "end": 49
                                                                        },
                                                                        "operatorToken": {
                                                                            "kind": 4125,
                                                                            "flags": 96,
                                                                            "transformFlags": 0,
                                                                            "start": 49,
                                                                            "end": 51
                                                                        },
                                                                        "right": {
                                                                            "kind": 134299649,
                                                                            "text": "await",
                                                                            "rawText": "await",
                                                                            "flags": 96,
                                                                            "transformFlags": 0,
                                                                            "start": 51,
                                                                            "end": 57
                                                                        },
                                                                        "flags": 0,
                                                                        "transformFlags": 128,
                                                                        "start": 39,
                                                                        "end": 57
                                                                    },
                                                                    "flags": 34,
                                                                    "transformFlags": 4096,
                                                                    "start": 36,
                                                                    "end": 57
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 34,
                                                            "transformFlags": 0,
                                                            "start": 36,
                                                            "end": 57
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
                                                                                "flags": 97,
                                                                                "transformFlags": 0,
                                                                                "start": 60,
                                                                                "end": 75
                                                                            },
                                                                            "operatorToken": {
                                                                                "kind": 4125,
                                                                                "flags": 96,
                                                                                "transformFlags": 0,
                                                                                "start": 75,
                                                                                "end": 77
                                                                            },
                                                                            "right": {
                                                                                "kind": 134299649,
                                                                                "text": "await",
                                                                                "rawText": "await",
                                                                                "flags": 96,
                                                                                "transformFlags": 0,
                                                                                "start": 77,
                                                                                "end": 83
                                                                            },
                                                                            "flags": 0,
                                                                            "transformFlags": 128,
                                                                            "start": 60,
                                                                            "end": 83
                                                                        },
                                                                        "flags": 16,
                                                                        "transformFlags": 4096,
                                                                        "start": 60,
                                                                        "end": 84
                                                                    }
                                                                ],
                                                                "flags": 33,
                                                                "transformFlags": 0,
                                                                "start": 60,
                                                                "end": 84
                                                            },
                                                            "flags": 32,
                                                            "transformFlags": 0,
                                                            "start": 58,
                                                            "end": 90
                                                        },
                                                        "returnType": null,
                                                        "flags": 32,
                                                        "transformFlags": 0,
                                                        "start": 26,
                                                        "end": 90
                                                    },
                                                    "flags": 20,
                                                    "transformFlags": 0,
                                                    "start": 33,
                                                    "end": 91
                                                },
                                                "argumentList": {
                                                    "kind": 256,
                                                    "elements": [],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 92,
                                                    "end": 92
                                                },
                                                "flags": 32,
                                                "transformFlags": 1,
                                                "start": 20,
                                                "end": 93
                                            },
                                            "flags": 16,
                                            "transformFlags": 4096,
                                            "start": 20,
                                            "end": 94
                                        }
                                    ],
                                    "flags": 17,
                                    "transformFlags": 0,
                                    "start": 20,
                                    "end": 94
                                },
                                "flags": 9,
                                "transformFlags": 0,
                                "start": 0,
                                "end": 98
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 9,
                            "end": 98
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 9,
                    "end": 98
                },
                "flags": 7,
                "transformFlags": 0,
                "start": 32,
                "end": 100
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 100
        }
    ],
    "isModule": false,
    "source": "class C {\n  static {\n    (function (x = fromParam = await) {\n      fromBody = await;\n    })();\n  }\n}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 100
}
```

### Printed

```javascript
class C {

}
```

### Diagnostics

```javascript
✔ No errors
```

