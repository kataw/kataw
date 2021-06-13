# Kataw parser test case

## Input

`````js
var yieldSet, C, iter;
function* g() {
  class C_ {
    get [yield]() { return 'get yield'; }
    set [yield](param) { yieldSet = param; }
  }

  C = C_;
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
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "yieldSet",
                            "rawText": "yieldSet",
                            "flags": 96,
                            "start": 3,
                            "end": 12
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 3,
                        "end": 12
                    },
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "C",
                            "rawText": "C",
                            "flags": 96,
                            "start": 13,
                            "end": 15
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 13,
                        "end": 15
                    },
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "iter",
                            "rawText": "iter",
                            "flags": 96,
                            "start": 16,
                            "end": 21
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 16,
                        "end": 21
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 21
            },
            "flags": 16,
            "start": 0,
            "end": 22
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 22,
                "end": 31
            },
            "generatorToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 31,
                "end": 32
            },
            "name": {
                "kind": 134299649,
                "text": "g",
                "rawText": "g",
                "flags": 96,
                "start": 32,
                "end": 34
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
                "start": 34,
                "end": 36
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 178,
                            "declareKeyword": null,
                            "decorators": null,
                            "classKeyword": {
                                "kind": 37822544,
                                "flags": 81,
                                "start": 38,
                                "end": 46
                            },
                            "name": {
                                "kind": 134299649,
                                "text": "C_",
                                "rawText": "C_",
                                "flags": 96,
                                "start": 46,
                                "end": 49
                            },
                            "typeParameters": null,
                            "tail": {
                                "kind": 277,
                                "classHeritage": null,
                                "body": {
                                    "kind": 262,
                                    "elements": [
                                        {
                                            "kind": 278,
                                            "declareToken": null,
                                            "decorators": null,
                                            "generatorToken": null,
                                            "staticKeyword": null,
                                            "asyncKeyword": null,
                                            "setKeyword": {
                                                "kind": 16498,
                                                "flags": 65,
                                                "start": 51,
                                                "end": 59
                                            },
                                            "getKeyword": null,
                                            "method": {
                                                "kind": 209,
                                                "name": {
                                                    "kind": 194,
                                                    "expression": {
                                                        "kind": 229,
                                                        "yieldKeyword": {
                                                            "kind": 8454253,
                                                            "flags": 64,
                                                            "start": 61,
                                                            "end": 66
                                                        },
                                                        "delegate": false,
                                                        "asteriskToken": null,
                                                        "expression": null,
                                                        "flags": 32,
                                                        "start": 61,
                                                        "end": 66
                                                    },
                                                    "flags": 32,
                                                    "start": 59,
                                                    "end": 67
                                                },
                                                "typeParameters": null,
                                                "formalParameters": {
                                                    "kind": 214,
                                                    "formalParameterList": [],
                                                    "trailingComma": false,
                                                    "flags": 1024,
                                                    "start": 68,
                                                    "end": 69
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
                                                                    "flags": 80,
                                                                    "start": 71,
                                                                    "end": 78
                                                                },
                                                                "expression": {
                                                                    "kind": 201392131,
                                                                    "text": "get yield",
                                                                    "rawText": "'get yield'",
                                                                    "flags": 4194400,
                                                                    "start": 78,
                                                                    "end": 90
                                                                },
                                                                "flags": 80,
                                                                "start": 71,
                                                                "end": 91
                                                            }
                                                        ],
                                                        "flags": 32,
                                                        "start": 71,
                                                        "end": 91
                                                    },
                                                    "flags": 32,
                                                    "start": 69,
                                                    "end": 93
                                                },
                                                "flags": 1024,
                                                "start": 67,
                                                "end": 93
                                            },
                                            "flags": 1024,
                                            "start": 51,
                                            "end": 93
                                        },
                                        {
                                            "kind": 278,
                                            "declareToken": null,
                                            "decorators": null,
                                            "generatorToken": null,
                                            "staticKeyword": null,
                                            "asyncKeyword": null,
                                            "setKeyword": null,
                                            "getKeyword": {
                                                "kind": 16499,
                                                "flags": 65,
                                                "start": 93,
                                                "end": 101
                                            },
                                            "method": {
                                                "kind": 209,
                                                "name": {
                                                    "kind": 194,
                                                    "expression": {
                                                        "kind": 229,
                                                        "yieldKeyword": {
                                                            "kind": 8454253,
                                                            "flags": 64,
                                                            "start": 103,
                                                            "end": 108
                                                        },
                                                        "delegate": false,
                                                        "asteriskToken": null,
                                                        "expression": null,
                                                        "flags": 32,
                                                        "start": 103,
                                                        "end": 108
                                                    },
                                                    "flags": 32,
                                                    "start": 101,
                                                    "end": 109
                                                },
                                                "typeParameters": null,
                                                "formalParameters": {
                                                    "kind": 214,
                                                    "formalParameterList": [
                                                        {
                                                            "kind": 134299649,
                                                            "text": "param",
                                                            "rawText": "param",
                                                            "flags": 96,
                                                            "start": 110,
                                                            "end": 115
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 608,
                                                    "start": 110,
                                                    "end": 116
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
                                                                        "text": "yieldSet",
                                                                        "rawText": "yieldSet",
                                                                        "flags": 96,
                                                                        "start": 118,
                                                                        "end": 127
                                                                    },
                                                                    "operatorToken": {
                                                                        "kind": 4125,
                                                                        "flags": 96,
                                                                        "start": 127,
                                                                        "end": 129
                                                                    },
                                                                    "right": {
                                                                        "kind": 134299649,
                                                                        "text": "param",
                                                                        "rawText": "param",
                                                                        "flags": 96,
                                                                        "start": 129,
                                                                        "end": 135
                                                                    },
                                                                    "flags": 32,
                                                                    "start": 118,
                                                                    "end": 135
                                                                },
                                                                "flags": 16,
                                                                "start": 118,
                                                                "end": 136
                                                            }
                                                        ],
                                                        "flags": 32,
                                                        "start": 118,
                                                        "end": 136
                                                    },
                                                    "flags": 32,
                                                    "start": 116,
                                                    "end": 138
                                                },
                                                "flags": 512,
                                                "start": 109,
                                                "end": 138
                                            },
                                            "flags": 512,
                                            "start": 93,
                                            "end": 138
                                        }
                                    ],
                                    "flags": 32,
                                    "start": 51,
                                    "end": 138
                                },
                                "flags": 49,
                                "start": 32,
                                "end": 142
                            },
                            "flags": 17,
                            "start": 38,
                            "end": 142
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 125,
                                "left": {
                                    "kind": 134299649,
                                    "text": "C",
                                    "rawText": "C",
                                    "flags": 96,
                                    "start": 142,
                                    "end": 147
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 96,
                                    "start": 147,
                                    "end": 149
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "C_",
                                    "rawText": "C_",
                                    "flags": 96,
                                    "start": 149,
                                    "end": 152
                                },
                                "flags": 32,
                                "start": 142,
                                "end": 152
                            },
                            "flags": 16,
                            "start": 142,
                            "end": 153
                        }
                    ],
                    "flags": 33,
                    "start": 38,
                    "end": 153
                },
                "flags": 32,
                "start": 36,
                "end": 155
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 272,
            "start": 22,
            "end": 155
        }
    ],
    "isModule": false,
    "source": "var yieldSet, C, iter;\nfunction* g() {\n  class C_ {\n    get [yield]() { return 'get yield'; }\n    set [yield](param) { yieldSet = param; }\n  }\n\n  C = C_;\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 155
}
```

### Printed

```javascript

var yieldSet, C, iter;
function * g() {
  class C_ {
    get [ yield]() {
      return  "'get yield'";
    }
    set [ yield](param) {
      yieldSet = param;
    }
  }
  C = C_;
}
```

### Diagnostics

```javascript
✔ No errors
```

