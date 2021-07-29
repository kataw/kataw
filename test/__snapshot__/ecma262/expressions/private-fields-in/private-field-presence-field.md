# Kataw parser test case

## Input

`````js
class Class {
  #field;

  static isNameIn(value) {
    return #field in value;
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
                "text": "Class",
                "rawText": "Class",
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
                                "text": "#field",
                                "rawText": "#field",
                                "flags": 97,
                                "transformFlags": 0,
                                "start": 13,
                                "end": 22
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
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
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "staticKeyword": {
                                "kind": 8388716,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 23,
                                "end": 33
                            },
                            "asyncKeyword": null,
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
                                    "start": 33,
                                    "end": 42
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
                                            "start": 43,
                                            "end": 48
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 43,
                                    "end": 49
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
                                                    "start": 51,
                                                    "end": 62
                                                },
                                                "expression": {
                                                    "kind": 198,
                                                    "left": {
                                                        "kind": 67191035,
                                                        "text": "#field",
                                                        "rawText": "#field",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 62,
                                                        "end": 69
                                                    },
                                                    "operatorToken": {
                                                        "kind": 21006388,
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 69,
                                                        "end": 72
                                                    },
                                                    "right": {
                                                        "kind": 134299649,
                                                        "text": "value",
                                                        "rawText": "value",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 72,
                                                        "end": 78
                                                    },
                                                    "flags": 96,
                                                    "transformFlags": 5120,
                                                    "start": 62,
                                                    "end": 78
                                                },
                                                "flags": 81,
                                                "transformFlags": 256,
                                                "start": 51,
                                                "end": 79
                                            }
                                        ],
                                        "flags": 33,
                                        "transformFlags": 0,
                                        "start": 51,
                                        "end": 79
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 49,
                                    "end": 83
                                },
                                "flags": 0,
                                "transformFlags": 0,
                                "start": 42,
                                "end": 83
                            },
                            "flags": 0,
                            "transformFlags": 0,
                            "start": 33,
                            "end": 83
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 13,
                    "end": 83
                },
                "flags": 11,
                "transformFlags": 0,
                "start": 32,
                "end": 85
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 85
        }
    ],
    "isModule": false,
    "source": "class Class {\n  #field;\n\n  static isNameIn(value) {\n    return #field in value;\n  }\n}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 85
}
```

### Printed

```javascript
class Class {
  #field;;
  static isNameIn(value) {
    return #field in value;
  }
}
```

### Diagnostics

```javascript
✔ No errors
```

