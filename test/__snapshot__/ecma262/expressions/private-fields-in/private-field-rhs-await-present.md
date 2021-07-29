# Kataw parser test case

## Input

`````js
class C {
  #field;

  static async isNameIn(value) {
    return #field in await(value);
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
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "#field",
                                "rawText": "#field",
                                "flags": 97,
                                "transformFlags": 0,
                                "start": 9,
                                "end": 18
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "flags": 32,
                            "transformFlags": 128,
                            "start": 9,
                            "end": 18
                        },
                        {
                            "kind": 1108353041,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 18,
                            "end": 19
                        },
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "staticKeyword": {
                                "kind": 8388716,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 19,
                                "end": 29
                            },
                            "asyncKeyword": {
                                "kind": 82031,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 29,
                                "end": 35
                            },
                            "setKeyword": null,
                            "getKeyword": null,
                            "asteriskToken": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "isNameIn",
                                    "rawText": "isNameIn",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 35,
                                    "end": 44
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [
                                        {
                                            "kind": 134299649,
                                            "text": "value",
                                            "rawText": "value",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 45,
                                            "end": 50
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 352,
                                    "transformFlags": 0,
                                    "start": 45,
                                    "end": 51
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
                                                    "start": 53,
                                                    "end": 64
                                                },
                                                "expression": {
                                                    "kind": 198,
                                                    "left": {
                                                        "kind": 67191035,
                                                        "text": "#field",
                                                        "rawText": "#field",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 64,
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
                                                        "kind": 208,
                                                        "awaitKeyword": {
                                                            "kind": 82196,
                                                            "flags": 64,
                                                            "transformFlags": 0,
                                                            "start": 74,
                                                            "end": 80
                                                        },
                                                        "expression": {
                                                            "kind": 121,
                                                            "expression": {
                                                                "kind": 134299649,
                                                                "text": "value",
                                                                "rawText": "value",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 81,
                                                                "end": 86
                                                            },
                                                            "flags": 32,
                                                            "transformFlags": 0,
                                                            "start": 80,
                                                            "end": 87
                                                        },
                                                        "flags": 32,
                                                        "transformFlags": 4096,
                                                        "start": 74,
                                                        "end": 87
                                                    },
                                                    "flags": 96,
                                                    "transformFlags": 5120,
                                                    "start": 64,
                                                    "end": 87
                                                },
                                                "flags": 81,
                                                "transformFlags": 256,
                                                "start": 53,
                                                "end": 88
                                            }
                                        ],
                                        "flags": 33,
                                        "transformFlags": 0,
                                        "start": 53,
                                        "end": 88
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 51,
                                    "end": 92
                                },
                                "flags": 256,
                                "transformFlags": 0,
                                "start": 44,
                                "end": 92
                            },
                            "flags": 256,
                            "transformFlags": 0,
                            "start": 29,
                            "end": 92
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 9,
                    "end": 92
                },
                "flags": 7,
                "transformFlags": 0,
                "start": 32,
                "end": 94
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 94
        }
    ],
    "isModule": false,
    "source": "class C {\n  #field;\n\n  static async isNameIn(value) {\n    return #field in await(value);\n  }\n}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 94
}
```

### Printed

```javascript
class C {
  #field;;
  static async isNameIn(value) {
    return #field in await (value);
  }
}
```

### Diagnostics

```javascript
✔ No errors
```

