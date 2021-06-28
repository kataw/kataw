# Kataw parser test case

## Input

`````js
class Test {
   #x = 2;
   #y = [];
   z = 2;
   get x() { return this.#x; }
   get y() { return this.#y; }
   world() {
      return [1,[2,3],4];
   }
   hello() {
      [this.#x,this.#y,this.z] = this.world();
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
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "Test",
                "rawText": "Test",
                "flags": 96,
                "start": 5,
                "end": 10
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
                            "staticToken": null,
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "#x",
                                "rawText": "#x",
                                "flags": 96,
                                "start": 12,
                                "end": 18
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": {
                                "kind": 201392130,
                                "text": 2,
                                "rawText": "2",
                                "flags": 96,
                                "start": 20,
                                "end": 22
                            },
                            "flags": 32,
                            "start": 12,
                            "end": 22
                        },
                        {
                            "kind": 1108353041,
                            "flags": 64,
                            "start": 22,
                            "end": 23
                        },
                        {
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": null,
                            "staticToken": null,
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "#y",
                                "rawText": "#y",
                                "flags": 96,
                                "start": 23,
                                "end": 29
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": {
                                "kind": 119,
                                "elementList": {
                                    "kind": 270,
                                    "elements": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 33,
                                    "end": 33
                                },
                                "flags": 32,
                                "start": 31,
                                "end": 34
                            },
                            "flags": 32,
                            "start": 23,
                            "end": 34
                        },
                        {
                            "kind": 1108353041,
                            "flags": 64,
                            "start": 34,
                            "end": 35
                        },
                        {
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": null,
                            "staticToken": null,
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "z",
                                "rawText": "z",
                                "flags": 96,
                                "start": 35,
                                "end": 40
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": {
                                "kind": 201392130,
                                "text": 2,
                                "rawText": "2",
                                "flags": 96,
                                "start": 42,
                                "end": 44
                            },
                            "flags": 32,
                            "start": 35,
                            "end": 44
                        },
                        {
                            "kind": 1108353041,
                            "flags": 64,
                            "start": 44,
                            "end": 45
                        },
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": {
                                "kind": 16498,
                                "flags": 65,
                                "start": 45,
                                "end": 52
                            },
                            "getKeyword": null,
                            "asteriskToken": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 52,
                                    "end": 54
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 1024,
                                    "start": 55,
                                    "end": 56
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
                                                    "start": 58,
                                                    "end": 65
                                                },
                                                "expression": {
                                                    "kind": 129,
                                                    "member": {
                                                        "kind": 4276321,
                                                        "flags": 96,
                                                        "start": 65,
                                                        "end": 70
                                                    },
                                                    "expression": {
                                                        "kind": 67191035,
                                                        "text": "#x",
                                                        "rawText": "#x",
                                                        "flags": 96,
                                                        "start": 71,
                                                        "end": 73
                                                    },
                                                    "flags": 96,
                                                    "start": 65,
                                                    "end": 73
                                                },
                                                "flags": 80,
                                                "start": 58,
                                                "end": 74
                                            }
                                        ],
                                        "flags": 32,
                                        "start": 58,
                                        "end": 74
                                    },
                                    "flags": 32,
                                    "start": 56,
                                    "end": 76
                                },
                                "flags": 1024,
                                "start": 54,
                                "end": 76
                            },
                            "flags": 1024,
                            "start": 45,
                            "end": 76
                        },
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": {
                                "kind": 16498,
                                "flags": 65,
                                "start": 76,
                                "end": 83
                            },
                            "getKeyword": null,
                            "asteriskToken": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 96,
                                    "start": 83,
                                    "end": 85
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 1024,
                                    "start": 86,
                                    "end": 87
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
                                                    "start": 89,
                                                    "end": 96
                                                },
                                                "expression": {
                                                    "kind": 129,
                                                    "member": {
                                                        "kind": 4276321,
                                                        "flags": 96,
                                                        "start": 96,
                                                        "end": 101
                                                    },
                                                    "expression": {
                                                        "kind": 67191035,
                                                        "text": "#y",
                                                        "rawText": "#y",
                                                        "flags": 96,
                                                        "start": 102,
                                                        "end": 104
                                                    },
                                                    "flags": 96,
                                                    "start": 96,
                                                    "end": 104
                                                },
                                                "flags": 80,
                                                "start": 89,
                                                "end": 105
                                            }
                                        ],
                                        "flags": 32,
                                        "start": 89,
                                        "end": 105
                                    },
                                    "flags": 32,
                                    "start": 87,
                                    "end": 107
                                },
                                "flags": 1024,
                                "start": 85,
                                "end": 107
                            },
                            "flags": 1024,
                            "start": 76,
                            "end": 107
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
                                    "text": "world",
                                    "rawText": "world",
                                    "flags": 96,
                                    "start": 107,
                                    "end": 116
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 117,
                                    "end": 118
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
                                                    "start": 120,
                                                    "end": 133
                                                },
                                                "expression": {
                                                    "kind": 119,
                                                    "elementList": {
                                                        "kind": 270,
                                                        "elements": [
                                                            {
                                                                "kind": 201392130,
                                                                "text": 1,
                                                                "rawText": "1",
                                                                "flags": 96,
                                                                "start": 135,
                                                                "end": 136
                                                            },
                                                            {
                                                                "kind": 119,
                                                                "elementList": {
                                                                    "kind": 270,
                                                                    "elements": [
                                                                        {
                                                                            "kind": 201392130,
                                                                            "text": 2,
                                                                            "rawText": "2",
                                                                            "flags": 96,
                                                                            "start": 138,
                                                                            "end": 139
                                                                        },
                                                                        {
                                                                            "kind": 201392130,
                                                                            "text": 3,
                                                                            "rawText": "3",
                                                                            "flags": 96,
                                                                            "start": 140,
                                                                            "end": 141
                                                                        }
                                                                    ],
                                                                    "trailingComma": false,
                                                                    "flags": 32,
                                                                    "start": 138,
                                                                    "end": 141
                                                                },
                                                                "flags": 32,
                                                                "start": 137,
                                                                "end": 142
                                                            },
                                                            {
                                                                "kind": 201392130,
                                                                "text": 4,
                                                                "rawText": "4",
                                                                "flags": 96,
                                                                "start": 143,
                                                                "end": 144
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "start": 135,
                                                        "end": 144
                                                    },
                                                    "flags": 32,
                                                    "start": 133,
                                                    "end": 145
                                                },
                                                "flags": 81,
                                                "start": 120,
                                                "end": 146
                                            }
                                        ],
                                        "flags": 33,
                                        "start": 120,
                                        "end": 146
                                    },
                                    "flags": 32,
                                    "start": 118,
                                    "end": 151
                                },
                                "flags": 0,
                                "start": 116,
                                "end": 151
                            },
                            "flags": 0,
                            "start": 107,
                            "end": 151
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
                                    "text": "hello",
                                    "rawText": "hello",
                                    "flags": 96,
                                    "start": 151,
                                    "end": 160
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 161,
                                    "end": 162
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
                                                        "kind": 119,
                                                        "elementList": {
                                                            "kind": 270,
                                                            "elements": [
                                                                {
                                                                    "kind": 129,
                                                                    "member": {
                                                                        "kind": 4276321,
                                                                        "flags": 96,
                                                                        "start": 172,
                                                                        "end": 176
                                                                    },
                                                                    "expression": {
                                                                        "kind": 67191035,
                                                                        "text": "#x",
                                                                        "rawText": "#x",
                                                                        "flags": 96,
                                                                        "start": 177,
                                                                        "end": 179
                                                                    },
                                                                    "flags": 96,
                                                                    "start": 172,
                                                                    "end": 179
                                                                },
                                                                {
                                                                    "kind": 129,
                                                                    "member": {
                                                                        "kind": 4276321,
                                                                        "flags": 96,
                                                                        "start": 180,
                                                                        "end": 184
                                                                    },
                                                                    "expression": {
                                                                        "kind": 67191035,
                                                                        "text": "#y",
                                                                        "rawText": "#y",
                                                                        "flags": 96,
                                                                        "start": 185,
                                                                        "end": 187
                                                                    },
                                                                    "flags": 96,
                                                                    "start": 180,
                                                                    "end": 187
                                                                },
                                                                {
                                                                    "kind": 129,
                                                                    "member": {
                                                                        "kind": 4276321,
                                                                        "flags": 96,
                                                                        "start": 188,
                                                                        "end": 192
                                                                    },
                                                                    "expression": {
                                                                        "kind": 134299649,
                                                                        "text": "z",
                                                                        "rawText": "z",
                                                                        "flags": 96,
                                                                        "start": 193,
                                                                        "end": 194
                                                                    },
                                                                    "flags": 96,
                                                                    "start": 188,
                                                                    "end": 194
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 32,
                                                            "start": 172,
                                                            "end": 194
                                                        },
                                                        "flags": 33,
                                                        "start": 164,
                                                        "end": 195
                                                    },
                                                    "operatorToken": {
                                                        "kind": 4125,
                                                        "flags": 96,
                                                        "start": 195,
                                                        "end": 197
                                                    },
                                                    "right": {
                                                        "kind": 131,
                                                        "expression": {
                                                            "kind": 129,
                                                            "member": {
                                                                "kind": 4276321,
                                                                "flags": 96,
                                                                "start": 197,
                                                                "end": 202
                                                            },
                                                            "expression": {
                                                                "kind": 134299649,
                                                                "text": "world",
                                                                "rawText": "world",
                                                                "flags": 96,
                                                                "start": 203,
                                                                "end": 208
                                                            },
                                                            "flags": 96,
                                                            "start": 197,
                                                            "end": 208
                                                        },
                                                        "argumentList": {
                                                            "kind": 256,
                                                            "elements": [],
                                                            "trailingComma": false,
                                                            "flags": 32,
                                                            "start": 209,
                                                            "end": 209
                                                        },
                                                        "flags": 268435488,
                                                        "start": 197,
                                                        "end": 210
                                                    },
                                                    "flags": 32,
                                                    "start": 164,
                                                    "end": 210
                                                },
                                                "flags": 16,
                                                "start": 164,
                                                "end": 211
                                            }
                                        ],
                                        "flags": 33,
                                        "start": 164,
                                        "end": 211
                                    },
                                    "flags": 32,
                                    "start": 162,
                                    "end": 216
                                },
                                "flags": 0,
                                "start": 160,
                                "end": 216
                            },
                            "flags": 0,
                            "start": 151,
                            "end": 216
                        }
                    ],
                    "flags": 32,
                    "start": 12,
                    "end": 216
                },
                "flags": 10,
                "start": 32,
                "end": 218
            },
            "flags": 16,
            "start": 0,
            "end": 218
        }
    ],
    "isModule": false,
    "source": "class Test {\n   #x = 2;\n   #y = [];\n   z = 2;\n   get x() { return this.#x; }\n   get y() { return this.#y; }\n   world() {\n      return [1,[2,3],4];\n   }\n   hello() {\n      [this.#x,this.#y,this.z] = this.world();\n   }\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 218
}
```

### Printed

```javascript

class Test {
  #x = 2;

  #y = [];

  z = 2;

  get x() {
    return  this.#x;
  }
  get y() {
    return  this.#y;
  }
  world() {
    return  [1, [2, 3], 4];
  }
  hello() {
    [this.#x, this.#y, this.z] = this.world();
  }
}
```

### Diagnostics

```javascript
✔ No errors
```

