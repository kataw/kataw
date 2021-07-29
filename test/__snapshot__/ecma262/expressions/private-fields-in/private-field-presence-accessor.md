# Kataw parser test case

## Input

`````js
let count = 0;

class Class {
  get #accessor() {
    count += 1;
  }

  static isNameIn(value) {
    return #accessor in value;
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
                "transformFlags": 0,
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
                            "text": "count",
                            "rawText": "count",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 9
                        },
                        "type": null,
                        "initializer": {
                            "kind": 201392130,
                            "text": 0,
                            "rawText": "0",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 11,
                            "end": 13
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 3,
                        "end": 13
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 3,
                "end": 13
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 0,
            "end": 14
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "transformFlags": 0,
                "start": 14,
                "end": 21
            },
            "name": {
                "kind": 134299649,
                "text": "Class",
                "rawText": "Class",
                "flags": 96,
                "transformFlags": 0,
                "start": 21,
                "end": 27
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 303,
                    "elements": [
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": {
                                "kind": 16498,
                                "flags": 65,
                                "transformFlags": 0,
                                "start": 29,
                                "end": 35
                            },
                            "getKeyword": null,
                            "asteriskToken": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 67191035,
                                    "text": "#accessor",
                                    "rawText": "#accessor",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 35,
                                    "end": 45
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 1024,
                                    "transformFlags": 0,
                                    "start": 46,
                                    "end": 47
                                },
                                "returnType": null,
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
                                                        "text": "count",
                                                        "rawText": "count",
                                                        "flags": 97,
                                                        "transformFlags": 0,
                                                        "start": 49,
                                                        "end": 59
                                                    },
                                                    "operatorToken": {
                                                        "kind": 4130,
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 59,
                                                        "end": 62
                                                    },
                                                    "right": {
                                                        "kind": 201392130,
                                                        "text": 1,
                                                        "rawText": "1",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 62,
                                                        "end": 64
                                                    },
                                                    "flags": 0,
                                                    "transformFlags": 128,
                                                    "start": 49,
                                                    "end": 64
                                                },
                                                "flags": 16,
                                                "transformFlags": 4096,
                                                "start": 49,
                                                "end": 65
                                            }
                                        ],
                                        "flags": 33,
                                        "transformFlags": 0,
                                        "start": 49,
                                        "end": 65
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 47,
                                    "end": 69
                                },
                                "flags": 1024,
                                "transformFlags": 0,
                                "start": 45,
                                "end": 69
                            },
                            "flags": 1024,
                            "transformFlags": 0,
                            "start": 29,
                            "end": 69
                        },
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "staticKeyword": {
                                "kind": 8388716,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 69,
                                "end": 79
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
                                    "start": 79,
                                    "end": 88
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
                                            "start": 89,
                                            "end": 94
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 89,
                                    "end": 95
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
                                                    "start": 97,
                                                    "end": 108
                                                },
                                                "expression": {
                                                    "kind": 198,
                                                    "left": {
                                                        "kind": 67191035,
                                                        "text": "#accessor",
                                                        "rawText": "#accessor",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 108,
                                                        "end": 118
                                                    },
                                                    "operatorToken": {
                                                        "kind": 21006388,
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 118,
                                                        "end": 121
                                                    },
                                                    "right": {
                                                        "kind": 134299649,
                                                        "text": "value",
                                                        "rawText": "value",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 121,
                                                        "end": 127
                                                    },
                                                    "flags": 96,
                                                    "transformFlags": 5120,
                                                    "start": 108,
                                                    "end": 127
                                                },
                                                "flags": 81,
                                                "transformFlags": 256,
                                                "start": 97,
                                                "end": 128
                                            }
                                        ],
                                        "flags": 33,
                                        "transformFlags": 0,
                                        "start": 97,
                                        "end": 128
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 95,
                                    "end": 132
                                },
                                "flags": 0,
                                "transformFlags": 0,
                                "start": 88,
                                "end": 132
                            },
                            "flags": 0,
                            "transformFlags": 0,
                            "start": 79,
                            "end": 132
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 29,
                    "end": 132
                },
                "flags": 27,
                "transformFlags": 0,
                "start": 32,
                "end": 134
            },
            "flags": 17,
            "transformFlags": 0,
            "start": 14,
            "end": 134
        }
    ],
    "isModule": false,
    "source": "let count = 0;\n\nclass Class {\n  get #accessor() {\n    count += 1;\n  }\n\n  static isNameIn(value) {\n    return #accessor in value;\n  }\n}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 134
}
```

### Printed

```javascript
let count = 0;
class Class {
  get #accessor() {
    count += 1;
  }
  static isNameIn(value) {
    return #accessor in value;
  }
}

```

### Diagnostics

```javascript
✔ No errors
```

