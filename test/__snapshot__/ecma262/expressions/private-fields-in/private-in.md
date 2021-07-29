# Kataw parser test case

## Input

`````js
class Point {
  #x = 1;
  #y = 2;
  static isPoint(obj) {
    return #x in obj && #y in obj;
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
                "text": "Point",
                "rawText": "Point",
                "flags": 96,
                "transformFlags": 0,
                "start": 5,
                "end": 11
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
                                "text": "#x",
                                "rawText": "#x",
                                "flags": 97,
                                "transformFlags": 0,
                                "start": 13,
                                "end": 18
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 20,
                                "end": 22
                            },
                            "flags": 32,
                            "transformFlags": 128,
                            "start": 13,
                            "end": 22
                        },
                        {
                            "kind": 1108353041,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 22,
                            "end": 23
                        },
                        {
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "#y",
                                "rawText": "#y",
                                "flags": 97,
                                "transformFlags": 0,
                                "start": 23,
                                "end": 28
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": {
                                "kind": 201392130,
                                "text": 2,
                                "rawText": "2",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 30,
                                "end": 32
                            },
                            "flags": 32,
                            "transformFlags": 128,
                            "start": 23,
                            "end": 32
                        },
                        {
                            "kind": 1108353041,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 32,
                            "end": 33
                        },
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "staticKeyword": {
                                "kind": 8388716,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 33,
                                "end": 42
                            },
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "asteriskToken": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "isPoint",
                                    "rawText": "isPoint",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 42,
                                    "end": 50
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [
                                        {
                                            "kind": 134299649,
                                            "text": "obj",
                                            "rawText": "obj",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 51,
                                            "end": 54
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 51,
                                    "end": 55
                                },
                                "returnType": null,
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
                                                    "flags": 81,
                                                    "transformFlags": 0,
                                                    "start": 57,
                                                    "end": 68
                                                },
                                                "expression": {
                                                    "kind": 198,
                                                    "left": {
                                                        "kind": 198,
                                                        "left": {
                                                            "kind": 67191035,
                                                            "text": "#x",
                                                            "rawText": "#x",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 68,
                                                            "end": 71
                                                        },
                                                        "operatorToken": {
                                                            "kind": 21006388,
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 71,
                                                            "end": 74
                                                        },
                                                        "right": {
                                                            "kind": 134299649,
                                                            "text": "obj",
                                                            "rawText": "obj",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 74,
                                                            "end": 78
                                                        },
                                                        "flags": 96,
                                                        "transformFlags": 5120,
                                                        "start": 68,
                                                        "end": 78
                                                    },
                                                    "operatorToken": {
                                                        "kind": 33594,
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 78,
                                                        "end": 81
                                                    },
                                                    "right": {
                                                        "kind": 198,
                                                        "left": {
                                                            "kind": 67191035,
                                                            "text": "#y",
                                                            "rawText": "#y",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 81,
                                                            "end": 84
                                                        },
                                                        "operatorToken": {
                                                            "kind": 21006388,
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 84,
                                                            "end": 87
                                                        },
                                                        "right": {
                                                            "kind": 134299649,
                                                            "text": "obj",
                                                            "rawText": "obj",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 87,
                                                            "end": 91
                                                        },
                                                        "flags": 96,
                                                        "transformFlags": 5120,
                                                        "start": 84,
                                                        "end": 91
                                                    },
                                                    "flags": 96,
                                                    "transformFlags": 5120,
                                                    "start": 68,
                                                    "end": 91
                                                },
                                                "flags": 81,
                                                "transformFlags": 256,
                                                "start": 57,
                                                "end": 92
                                            }
                                        ],
                                        "flags": 33,
                                        "transformFlags": 0,
                                        "start": 57,
                                        "end": 92
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 55,
                                    "end": 96
                                },
                                "flags": 0,
                                "transformFlags": 0,
                                "start": 50,
                                "end": 96
                            },
                            "flags": 0,
                            "transformFlags": 0,
                            "start": 42,
                            "end": 96
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 13,
                    "end": 96
                },
                "flags": 11,
                "transformFlags": 0,
                "start": 32,
                "end": 98
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 98
        }
    ],
    "isModule": false,
    "source": "class Point {\n  #x = 1;\n  #y = 2;\n  static isPoint(obj) {\n    return #x in obj && #y in obj;\n  }\n}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 98
}
```

### Printed

```javascript
class Point {
  #x = 1;;
  #y = 2;;
  static isPoint(obj) {
    return #x in obj && #y in obj;
  }
}
```

### Diagnostics

```javascript
✔ No errors
```

