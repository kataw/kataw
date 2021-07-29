# Kataw parser test case

## Input

`````js
let count = 0;

class Class {
  #method() {
    count += 1;
  }

  static isNameIn(value) {
    return #method in value;
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
                            "setKeyword": null,
                            "getKeyword": null,
                            "asteriskToken": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "#method",
                                    "rawText": "#method",
                                    "flags": 97,
                                    "transformFlags": 0,
                                    "start": 29,
                                    "end": 39
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 40,
                                    "end": 41
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
                                                        "start": 43,
                                                        "end": 53
                                                    },
                                                    "operatorToken": {
                                                        "kind": 4130,
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 53,
                                                        "end": 56
                                                    },
                                                    "right": {
                                                        "kind": 201392130,
                                                        "text": 1,
                                                        "rawText": "1",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 56,
                                                        "end": 58
                                                    },
                                                    "flags": 0,
                                                    "transformFlags": 128,
                                                    "start": 43,
                                                    "end": 58
                                                },
                                                "flags": 16,
                                                "transformFlags": 4096,
                                                "start": 43,
                                                "end": 59
                                            }
                                        ],
                                        "flags": 33,
                                        "transformFlags": 0,
                                        "start": 43,
                                        "end": 59
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 41,
                                    "end": 63
                                },
                                "flags": 0,
                                "transformFlags": 0,
                                "start": 39,
                                "end": 63
                            },
                            "flags": 0,
                            "transformFlags": 0,
                            "start": 29,
                            "end": 63
                        },
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "staticKeyword": {
                                "kind": 8388716,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 63,
                                "end": 73
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
                                    "start": 73,
                                    "end": 82
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
                                            "start": 83,
                                            "end": 88
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 83,
                                    "end": 89
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
                                                    "start": 91,
                                                    "end": 102
                                                },
                                                "expression": {
                                                    "kind": 198,
                                                    "left": {
                                                        "kind": 67191035,
                                                        "text": "#method",
                                                        "rawText": "#method",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 102,
                                                        "end": 110
                                                    },
                                                    "operatorToken": {
                                                        "kind": 21006388,
                                                        "flags": 96,
                                                        "transformFlags": 8192,
                                                        "start": 110,
                                                        "end": 113
                                                    },
                                                    "right": {
                                                        "kind": 134299649,
                                                        "text": "value",
                                                        "rawText": "value",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 113,
                                                        "end": 119
                                                    },
                                                    "flags": 96,
                                                    "transformFlags": 5120,
                                                    "start": 102,
                                                    "end": 119
                                                },
                                                "flags": 81,
                                                "transformFlags": 256,
                                                "start": 91,
                                                "end": 120
                                            }
                                        ],
                                        "flags": 33,
                                        "transformFlags": 0,
                                        "start": 91,
                                        "end": 120
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 89,
                                    "end": 124
                                },
                                "flags": 0,
                                "transformFlags": 0,
                                "start": 82,
                                "end": 124
                            },
                            "flags": 0,
                            "transformFlags": 0,
                            "start": 73,
                            "end": 124
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 29,
                    "end": 124
                },
                "flags": 27,
                "transformFlags": 0,
                "start": 32,
                "end": 126
            },
            "flags": 17,
            "transformFlags": 0,
            "start": 14,
            "end": 126
        }
    ],
    "isModule": false,
    "source": "let count = 0;\n\nclass Class {\n  #method() {\n    count += 1;\n  }\n\n  static isNameIn(value) {\n    return #method in value;\n  }\n}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 126
}
```

### Printed

```javascript

let count = 0;
class Class {
    #method() {
        count += 1;
    }
    static isNameIn(value) {
        return #method in value;
    }
}

```

### Diagnostics

```javascript
✔ No errors
```

