# Kataw parser test case

## Input

`````js
class I<X> {
  #i;
  _f;
  _h(x: X) {
    return x;
  }
  g(x: X) {
    this.#i = x;
    this._f = x;
  }
}
`````

## Options

### Parser Options

`````js
{ allowTypes : true }
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
                "text": "I",
                "rawText": "I",
                "flags": 96,
                "transformFlags": 0,
                "start": 5,
                "end": 7
            },
            "typeParameters": {
                "kind": 307,
                "declarations": [
                    {
                        "kind": 146,
                        "name": {
                            "kind": 134299649,
                            "text": "X",
                            "rawText": "X",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 8,
                            "end": 9
                        },
                        "type": null,
                        "assignToken": null,
                        "defaultType": null,
                        "flags": 2097152,
                        "transformFlags": 0,
                        "start": 8,
                        "end": 9
                    }
                ],
                "trailingComma": false,
                "flags": 2097152,
                "transformFlags": 512,
                "start": 8,
                "end": 9
            },
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
                                "text": "#i",
                                "rawText": "#i",
                                "flags": 97,
                                "transformFlags": 0,
                                "start": 12,
                                "end": 17
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "flags": 32,
                            "transformFlags": 128,
                            "start": 12,
                            "end": 17
                        },
                        {
                            "kind": 1108353041,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 17,
                            "end": 18
                        },
                        {
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "_f",
                                "rawText": "_f",
                                "flags": 97,
                                "transformFlags": 0,
                                "start": 18,
                                "end": 23
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "flags": 32,
                            "transformFlags": 128,
                            "start": 18,
                            "end": 23
                        },
                        {
                            "kind": 1108353041,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 23,
                            "end": 24
                        },
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
                                    "text": "_h",
                                    "rawText": "_h",
                                    "flags": 97,
                                    "transformFlags": 0,
                                    "start": 24,
                                    "end": 29
                                },
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
                                                "start": 30,
                                                "end": 31
                                            },
                                            "optionalToken": null,
                                            "type": {
                                                "kind": 139,
                                                "bitwiseOrToken": null,
                                                "bitwiseAndToken": null,
                                                "type": {
                                                    "kind": 144,
                                                    "typeName": {
                                                        "kind": 134299649,
                                                        "text": "X",
                                                        "rawText": "X",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 32,
                                                        "end": 34
                                                    },
                                                    "typeParameters": null,
                                                    "flags": 2097152,
                                                    "transformFlags": 0,
                                                    "start": 32,
                                                    "end": 34
                                                },
                                                "flags": 2097152,
                                                "transformFlags": 0,
                                                "start": 32,
                                                "end": 34
                                            },
                                            "right": null,
                                            "flags": 32,
                                            "transformFlags": 4096,
                                            "start": 30,
                                            "end": 34
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 30,
                                    "end": 35
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
                                                    "start": 37,
                                                    "end": 48
                                                },
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 48,
                                                    "end": 50
                                                },
                                                "flags": 81,
                                                "transformFlags": 256,
                                                "start": 37,
                                                "end": 51
                                            }
                                        ],
                                        "flags": 33,
                                        "transformFlags": 0,
                                        "start": 37,
                                        "end": 51
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 35,
                                    "end": 55
                                },
                                "flags": 0,
                                "transformFlags": 0,
                                "start": 29,
                                "end": 55
                            },
                            "flags": 0,
                            "transformFlags": 0,
                            "start": 24,
                            "end": 55
                        },
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
                                    "text": "g",
                                    "rawText": "g",
                                    "flags": 97,
                                    "transformFlags": 0,
                                    "start": 55,
                                    "end": 59
                                },
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
                                                "start": 60,
                                                "end": 61
                                            },
                                            "optionalToken": null,
                                            "type": {
                                                "kind": 139,
                                                "bitwiseOrToken": null,
                                                "bitwiseAndToken": null,
                                                "type": {
                                                    "kind": 144,
                                                    "typeName": {
                                                        "kind": 134299649,
                                                        "text": "X",
                                                        "rawText": "X",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 62,
                                                        "end": 64
                                                    },
                                                    "typeParameters": null,
                                                    "flags": 2097152,
                                                    "transformFlags": 0,
                                                    "start": 62,
                                                    "end": 64
                                                },
                                                "flags": 2097152,
                                                "transformFlags": 0,
                                                "start": 62,
                                                "end": 64
                                            },
                                            "right": null,
                                            "flags": 32,
                                            "transformFlags": 4096,
                                            "start": 60,
                                            "end": 64
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 60,
                                    "end": 65
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
                                                        "kind": 129,
                                                        "member": {
                                                            "kind": 4276321,
                                                            "flags": 97,
                                                            "transformFlags": 0,
                                                            "start": 67,
                                                            "end": 76
                                                        },
                                                        "expression": {
                                                            "kind": 67191035,
                                                            "text": "#i",
                                                            "rawText": "#i",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 77,
                                                            "end": 79
                                                        },
                                                        "flags": 97,
                                                        "transformFlags": 2,
                                                        "start": 67,
                                                        "end": 79
                                                    },
                                                    "operatorToken": {
                                                        "kind": 4125,
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 79,
                                                        "end": 81
                                                    },
                                                    "right": {
                                                        "kind": 134299649,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 81,
                                                        "end": 83
                                                    },
                                                    "flags": 0,
                                                    "transformFlags": 128,
                                                    "start": 67,
                                                    "end": 83
                                                },
                                                "flags": 16,
                                                "transformFlags": 4096,
                                                "start": 67,
                                                "end": 84
                                            },
                                            {
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 125,
                                                    "left": {
                                                        "kind": 129,
                                                        "member": {
                                                            "kind": 4276321,
                                                            "flags": 97,
                                                            "transformFlags": 0,
                                                            "start": 84,
                                                            "end": 93
                                                        },
                                                        "expression": {
                                                            "kind": 134299649,
                                                            "text": "_f",
                                                            "rawText": "_f",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 94,
                                                            "end": 96
                                                        },
                                                        "flags": 97,
                                                        "transformFlags": 2,
                                                        "start": 84,
                                                        "end": 96
                                                    },
                                                    "operatorToken": {
                                                        "kind": 4125,
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 96,
                                                        "end": 98
                                                    },
                                                    "right": {
                                                        "kind": 134299649,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 98,
                                                        "end": 100
                                                    },
                                                    "flags": 0,
                                                    "transformFlags": 128,
                                                    "start": 84,
                                                    "end": 100
                                                },
                                                "flags": 16,
                                                "transformFlags": 4096,
                                                "start": 84,
                                                "end": 101
                                            }
                                        ],
                                        "flags": 33,
                                        "transformFlags": 0,
                                        "start": 67,
                                        "end": 101
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 65,
                                    "end": 105
                                },
                                "flags": 0,
                                "transformFlags": 0,
                                "start": 59,
                                "end": 105
                            },
                            "flags": 0,
                            "transformFlags": 0,
                            "start": 55,
                            "end": 105
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 12,
                    "end": 105
                },
                "flags": 10,
                "transformFlags": 0,
                "start": 32,
                "end": 107
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 107
        }
    ],
    "isModule": false,
    "source": "class I<X> {\n  #i;\n  _f;\n  _h(x: X) {\n    return x;\n  }\n  g(x: X) {\n    this.#i = x;\n    this._f = x;\n  }\n}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 107
}
```

### Printed

```javascript
class I {
  #i;;
  _f;;
  _h(x: X) {
    return x;
  }
  g(x: X) {
    this.#i = x;
    this._f = x;
  }
}
```

### Diagnostics

```javascript
✔ No errors
```

