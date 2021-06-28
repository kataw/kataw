# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, next: true }
`````

## Input

`````js

try {
  class C {
    static {
      throw thrown;
      sameBlock = true;
    }
    static x = subsequentField = true;
    static {
      subsequentBlock = true;
    }
  }
} catch (error) {
  caught = error;
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
            "kind": 159,
            "tryKeyword": {
                "kind": 37757027,
                "flags": 81,
                "start": 0,
                "end": 4
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
                                "start": 6,
                                "end": 14
                            },
                            "name": {
                                "kind": 134299649,
                                "text": "C",
                                "rawText": "C",
                                "flags": 96,
                                "start": 14,
                                "end": 16
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
                                                            "kind": 158,
                                                            "throwKeyword": {
                                                                "kind": 37757026,
                                                                "flags": 81,
                                                                "start": 31,
                                                                "end": 43
                                                            },
                                                            "expression": {
                                                                "kind": 134299649,
                                                                "text": "thrown",
                                                                "rawText": "thrown",
                                                                "flags": 96,
                                                                "start": 43,
                                                                "end": 50
                                                            },
                                                            "flags": 81,
                                                            "start": 31,
                                                            "end": 51
                                                        },
                                                        {
                                                            "kind": 120,
                                                            "expression": {
                                                                "kind": 125,
                                                                "left": {
                                                                    "kind": 134299649,
                                                                    "text": "sameBlock",
                                                                    "rawText": "sameBlock",
                                                                    "flags": 96,
                                                                    "start": 51,
                                                                    "end": 67
                                                                },
                                                                "operatorToken": {
                                                                    "kind": 4125,
                                                                    "flags": 96,
                                                                    "start": 67,
                                                                    "end": 69
                                                                },
                                                                "right": {
                                                                    "kind": 24752947,
                                                                    "flags": 96,
                                                                    "start": 69,
                                                                    "end": 74
                                                                },
                                                                "flags": 32,
                                                                "start": 51,
                                                                "end": 74
                                                            },
                                                            "flags": 16,
                                                            "start": 51,
                                                            "end": 75
                                                        }
                                                    ],
                                                    "flags": 17,
                                                    "start": 31,
                                                    "end": 75
                                                },
                                                "flags": 18,
                                                "start": 0,
                                                "end": 81
                                            },
                                            "flags": 32,
                                            "start": 18,
                                            "end": 81
                                        },
                                        {
                                            "kind": 280,
                                            "decorators": null,
                                            "declaredToken": null,
                                            "staticToken": {
                                                "kind": 8388716,
                                                "flags": 64,
                                                "start": 81,
                                                "end": 92
                                            },
                                            "asyncKeyword": null,
                                            "key": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 92,
                                                "end": 94
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": {
                                                "kind": 125,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "subsequentField",
                                                    "rawText": "subsequentField",
                                                    "flags": 96,
                                                    "start": 96,
                                                    "end": 112
                                                },
                                                "operatorToken": {
                                                    "kind": 4125,
                                                    "flags": 96,
                                                    "start": 112,
                                                    "end": 114
                                                },
                                                "right": {
                                                    "kind": 24752947,
                                                    "flags": 96,
                                                    "start": 114,
                                                    "end": 119
                                                },
                                                "flags": 32,
                                                "start": 96,
                                                "end": 119
                                            },
                                            "flags": 32,
                                            "start": 92,
                                            "end": 119
                                        },
                                        {
                                            "kind": 1108353041,
                                            "flags": 64,
                                            "start": 119,
                                            "end": 120
                                        },
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
                                                            "kind": 120,
                                                            "expression": {
                                                                "kind": 125,
                                                                "left": {
                                                                    "kind": 134299649,
                                                                    "text": "subsequentBlock",
                                                                    "rawText": "subsequentBlock",
                                                                    "flags": 96,
                                                                    "start": 133,
                                                                    "end": 155
                                                                },
                                                                "operatorToken": {
                                                                    "kind": 4125,
                                                                    "flags": 96,
                                                                    "start": 155,
                                                                    "end": 157
                                                                },
                                                                "right": {
                                                                    "kind": 24752947,
                                                                    "flags": 96,
                                                                    "start": 157,
                                                                    "end": 162
                                                                },
                                                                "flags": 32,
                                                                "start": 133,
                                                                "end": 162
                                                            },
                                                            "flags": 16,
                                                            "start": 133,
                                                            "end": 163
                                                        }
                                                    ],
                                                    "flags": 17,
                                                    "start": 133,
                                                    "end": 163
                                                },
                                                "flags": 120,
                                                "start": 0,
                                                "end": 169
                                            },
                                            "flags": 32,
                                            "start": 120,
                                            "end": 169
                                        }
                                    ],
                                    "flags": 32,
                                    "start": 18,
                                    "end": 169
                                },
                                "flags": 16,
                                "start": 32,
                                "end": 173
                            },
                            "flags": 17,
                            "start": 6,
                            "end": 173
                        }
                    ],
                    "flags": 17,
                    "start": 6,
                    "end": 173
                },
                "flags": 16,
                "start": 4,
                "end": 175
            },
            "catchClause": {
                "kind": 173,
                "catchKeyword": {
                    "kind": 4202575,
                    "flags": 80,
                    "start": 175,
                    "end": 181
                },
                "catchParameter": {
                    "kind": 134299649,
                    "text": "error",
                    "rawText": "error",
                    "flags": 96,
                    "start": 183,
                    "end": 188
                },
                "block": {
                    "kind": 124,
                    "block": {
                        "kind": 249,
                        "statements": [
                            {
                                "kind": 120,
                                "expression": {
                                    "kind": 125,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "caught",
                                        "rawText": "caught",
                                        "flags": 96,
                                        "start": 191,
                                        "end": 200
                                    },
                                    "operatorToken": {
                                        "kind": 4125,
                                        "flags": 96,
                                        "start": 200,
                                        "end": 202
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "error",
                                        "rawText": "error",
                                        "flags": 96,
                                        "start": 202,
                                        "end": 208
                                    },
                                    "flags": 32,
                                    "start": 191,
                                    "end": 208
                                },
                                "flags": 16,
                                "start": 191,
                                "end": 209
                            }
                        ],
                        "flags": 17,
                        "start": 191,
                        "end": 209
                    },
                    "flags": 16,
                    "start": 189,
                    "end": 211
                },
                "flags": 80,
                "start": 175,
                "end": 211
            },
            "finallyKeyword": null,
            "finallyBlock": null,
            "flags": 16,
            "start": 0,
            "end": 211
        }
    ],
    "isModule": false,
    "source": "\ntry {\n  class C {\n    static {\n      throw thrown;\n      sameBlock = true;\n    }\n    static x = subsequentField = true;\n    static {\n      subsequentBlock = true;\n    }\n  }\n} catch (error) {\n  caught = error;\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 211
}
```

### Printed

```javascript

try {
  class C {

    static x = subsequentField = true;


  }
} catch (error) {
  caught = error;
}
```

### Diagnostics

```javascript
✔ No errors
```

