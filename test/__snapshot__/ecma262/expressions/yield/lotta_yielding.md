# Kataw parser test case

## Input

`````js
var gen = async function *g() {
  callCount += 1;
  yield {
       ...yield yield,
       ...(function(arg) {
          var yield = arg;
          return {...yield};
       }(yield)),
       ...yield,
    }
};
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
                            "text": "gen",
                            "rawText": "gen",
                            "flags": 96,
                            "start": 3,
                            "end": 7
                        },
                        "type": null,
                        "initializer": {
                            "kind": 177,
                            "asyncKeyword": {
                                "kind": 82031,
                                "flags": 64,
                                "start": 9,
                                "end": 15
                            },
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 64,
                                "start": 15,
                                "end": 24
                            },
                            "asteriskToken": {
                                "kind": 67143222,
                                "flags": 64,
                                "start": 24,
                                "end": 26
                            },
                            "name": {
                                "kind": 134299649,
                                "text": "g",
                                "rawText": "g",
                                "flags": 96,
                                "start": 26,
                                "end": 27
                            },
                            "typeParameters": null,
                            "formalParameterList": {
                                "kind": 214,
                                "formalParameters": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 28,
                                "end": 28
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
                                                    "text": "callCount",
                                                    "rawText": "callCount",
                                                    "flags": 97,
                                                    "start": 31,
                                                    "end": 43
                                                },
                                                "operatorToken": {
                                                    "kind": 4130,
                                                    "flags": 96,
                                                    "start": 43,
                                                    "end": 46
                                                },
                                                "right": {
                                                    "kind": 201392130,
                                                    "text": 1,
                                                    "rawText": "1",
                                                    "flags": 96,
                                                    "start": 46,
                                                    "end": 48
                                                },
                                                "flags": 32,
                                                "start": 31,
                                                "end": 48
                                            },
                                            "flags": 16,
                                            "start": 31,
                                            "end": 49
                                        },
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 229,
                                                "yieldKeyword": {
                                                    "kind": 8454253,
                                                    "flags": 65,
                                                    "start": 49,
                                                    "end": 57
                                                },
                                                "delegate": false,
                                                "asteriskToken": null,
                                                "expression": {
                                                    "kind": 220,
                                                    "propertyList": {
                                                        "kind": 218,
                                                        "properties": [
                                                            {
                                                                "kind": 224,
                                                                "ellipsisToken": {
                                                                    "kind": 524302,
                                                                    "flags": 65,
                                                                    "start": 59,
                                                                    "end": 70
                                                                },
                                                                "argument": {
                                                                    "kind": 229,
                                                                    "yieldKeyword": {
                                                                        "kind": 8454253,
                                                                        "flags": 64,
                                                                        "start": 70,
                                                                        "end": 75
                                                                    },
                                                                    "delegate": false,
                                                                    "asteriskToken": null,
                                                                    "expression": {
                                                                        "kind": 229,
                                                                        "yieldKeyword": {
                                                                            "kind": 8454253,
                                                                            "flags": 64,
                                                                            "start": 75,
                                                                            "end": 81
                                                                        },
                                                                        "delegate": false,
                                                                        "asteriskToken": null,
                                                                        "expression": null,
                                                                        "flags": 32,
                                                                        "start": 75,
                                                                        "end": 81
                                                                    },
                                                                    "flags": 32,
                                                                    "start": 70,
                                                                    "end": 81
                                                                },
                                                                "flags": 1073741856,
                                                                "start": 59,
                                                                "end": 81
                                                            },
                                                            {
                                                                "kind": 224,
                                                                "ellipsisToken": {
                                                                    "kind": 524302,
                                                                    "flags": 65,
                                                                    "start": 82,
                                                                    "end": 93
                                                                },
                                                                "argument": {
                                                                    "kind": 121,
                                                                    "expression": {
                                                                        "kind": 131,
                                                                        "expression": {
                                                                            "kind": 177,
                                                                            "asyncKeyword": null,
                                                                            "functionKeyword": {
                                                                                "kind": 37822554,
                                                                                "flags": 64,
                                                                                "start": 94,
                                                                                "end": 102
                                                                            },
                                                                            "asteriskToken": null,
                                                                            "name": null,
                                                                            "typeParameters": null,
                                                                            "formalParameterList": {
                                                                                "kind": 214,
                                                                                "formalParameters": [
                                                                                    {
                                                                                        "kind": 134299649,
                                                                                        "text": "arg",
                                                                                        "rawText": "arg",
                                                                                        "flags": 96,
                                                                                        "start": 103,
                                                                                        "end": 106
                                                                                    }
                                                                                ],
                                                                                "trailingComma": false,
                                                                                "flags": 32,
                                                                                "start": 103,
                                                                                "end": 106
                                                                            },
                                                                            "contents": {
                                                                                "kind": 216,
                                                                                "functionStatementList": {
                                                                                    "kind": 217,
                                                                                    "directives": [],
                                                                                    "statements": [
                                                                                        {
                                                                                            "kind": 155,
                                                                                            "declareKeyword": null,
                                                                                            "varKeyword": {
                                                                                                "kind": 37757002,
                                                                                                "flags": 81,
                                                                                                "start": 109,
                                                                                                "end": 123
                                                                                            },
                                                                                            "declarationList": {
                                                                                                "kind": 156,
                                                                                                "declarations": [
                                                                                                    {
                                                                                                        "kind": 157,
                                                                                                        "binding": {
                                                                                                            "kind": 134299649,
                                                                                                            "text": "yield",
                                                                                                            "rawText": "yield",
                                                                                                            "flags": 96,
                                                                                                            "start": 123,
                                                                                                            "end": 129
                                                                                                        },
                                                                                                        "type": null,
                                                                                                        "initializer": {
                                                                                                            "kind": 134299649,
                                                                                                            "text": "arg",
                                                                                                            "rawText": "arg",
                                                                                                            "flags": 96,
                                                                                                            "start": 131,
                                                                                                            "end": 135
                                                                                                        },
                                                                                                        "flags": 16,
                                                                                                        "start": 123,
                                                                                                        "end": 135
                                                                                                    }
                                                                                                ],
                                                                                                "flags": 16,
                                                                                                "start": 123,
                                                                                                "end": 135
                                                                                            },
                                                                                            "flags": 16,
                                                                                            "start": 109,
                                                                                            "end": 136
                                                                                        },
                                                                                        {
                                                                                            "kind": 161,
                                                                                            "returnKeyword": {
                                                                                                "kind": 37757022,
                                                                                                "flags": 81,
                                                                                                "start": 136,
                                                                                                "end": 153
                                                                                            },
                                                                                            "expression": {
                                                                                                "kind": 220,
                                                                                                "propertyList": {
                                                                                                    "kind": 218,
                                                                                                    "properties": [
                                                                                                        {
                                                                                                            "kind": 224,
                                                                                                            "ellipsisToken": {
                                                                                                                "kind": 524302,
                                                                                                                "flags": 64,
                                                                                                                "start": 155,
                                                                                                                "end": 158
                                                                                                            },
                                                                                                            "argument": {
                                                                                                                "kind": 134299649,
                                                                                                                "text": "yield",
                                                                                                                "rawText": "yield",
                                                                                                                "flags": 96,
                                                                                                                "start": 158,
                                                                                                                "end": 163
                                                                                                            },
                                                                                                            "flags": 1073741856,
                                                                                                            "start": 155,
                                                                                                            "end": 163
                                                                                                        }
                                                                                                    ],
                                                                                                    "trailingComma": false,
                                                                                                    "flags": 16,
                                                                                                    "start": 155,
                                                                                                    "end": 163
                                                                                                },
                                                                                                "flags": 48,
                                                                                                "start": 153,
                                                                                                "end": 164
                                                                                            },
                                                                                            "flags": 81,
                                                                                            "start": 136,
                                                                                            "end": 165
                                                                                        }
                                                                                    ],
                                                                                    "flags": 33,
                                                                                    "start": 109,
                                                                                    "end": 165
                                                                                },
                                                                                "flags": 32,
                                                                                "start": 107,
                                                                                "end": 174
                                                                            },
                                                                            "returnType": null,
                                                                            "flags": 32,
                                                                            "start": 94,
                                                                            "end": 174
                                                                        },
                                                                        "argumentList": {
                                                                            "kind": 256,
                                                                            "elements": [
                                                                                {
                                                                                    "kind": 229,
                                                                                    "yieldKeyword": {
                                                                                        "kind": 8454253,
                                                                                        "flags": 64,
                                                                                        "start": 175,
                                                                                        "end": 180
                                                                                    },
                                                                                    "delegate": false,
                                                                                    "asteriskToken": null,
                                                                                    "expression": null,
                                                                                    "flags": 32,
                                                                                    "start": 175,
                                                                                    "end": 180
                                                                                }
                                                                            ],
                                                                            "trailingComma": false,
                                                                            "flags": 32,
                                                                            "start": 175,
                                                                            "end": 180
                                                                        },
                                                                        "flags": 268435488,
                                                                        "start": 94,
                                                                        "end": 181
                                                                    },
                                                                    "flags": 32,
                                                                    "start": 93,
                                                                    "end": 182
                                                                },
                                                                "flags": 1073741856,
                                                                "start": 82,
                                                                "end": 182
                                                            },
                                                            {
                                                                "kind": 224,
                                                                "ellipsisToken": {
                                                                    "kind": 524302,
                                                                    "flags": 65,
                                                                    "start": 183,
                                                                    "end": 194
                                                                },
                                                                "argument": {
                                                                    "kind": 229,
                                                                    "yieldKeyword": {
                                                                        "kind": 8454253,
                                                                        "flags": 64,
                                                                        "start": 194,
                                                                        "end": 199
                                                                    },
                                                                    "delegate": false,
                                                                    "asteriskToken": null,
                                                                    "expression": null,
                                                                    "flags": 32,
                                                                    "start": 194,
                                                                    "end": 199
                                                                },
                                                                "flags": 1073741856,
                                                                "start": 183,
                                                                "end": 199
                                                            }
                                                        ],
                                                        "trailingComma": true,
                                                        "flags": 17,
                                                        "start": 59,
                                                        "end": 200
                                                    },
                                                    "flags": 49,
                                                    "start": 57,
                                                    "end": 206
                                                },
                                                "flags": 32,
                                                "start": 49,
                                                "end": 206
                                            },
                                            "flags": 16,
                                            "start": 49,
                                            "end": 206
                                        }
                                    ],
                                    "flags": 33,
                                    "start": 31,
                                    "end": 206
                                },
                                "flags": 32,
                                "start": 29,
                                "end": 208
                            },
                            "returnType": null,
                            "flags": 416,
                            "start": 9,
                            "end": 208
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 208
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 208
            },
            "flags": 16,
            "start": 0,
            "end": 209
        }
    ],
    "isModule": false,
    "source": "var gen = async function *g() {\n  callCount += 1;\n  yield {\n       ...yield yield,\n       ...(function(arg) {\n          var yield = arg;\n          return {...yield};\n       }(yield)),\n       ...yield,\n    }\n};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 209
}
```

### Printed

```javascript

  var gen = async function* g() {
    callCount += 1;
    yield  {
      ...yield  yield ,
      ...(function (arg) {
        var yield = arg;
        return { ...yield };
      }(yield )),
      ...yield 
    };
  };

```

### Diagnostics

```javascript
✔ No errors
```

