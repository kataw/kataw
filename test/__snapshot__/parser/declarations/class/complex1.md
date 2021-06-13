# Kataw parser test case

## Input

`````js
class C<X, Y> {
  x: X;
  constructor(x: X) {
    this.x = x;
  }
  get(): X {
    return this.x;
  }
  get_bad(): Y {
    return this.x;
  }
}

class D<T> {
  x: T;
  m<S>(z: S, u: T): S {
    this.x = u;
    return z;
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
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "C",
                "rawText": "C",
                "flags": 96,
                "start": 5,
                "end": 7
            },
            "typeParameters": {
                "kind": 265,
                "typeParameters": [
                    {
                        "kind": 146,
                        "name": {
                            "kind": 134299649,
                            "text": "X",
                            "rawText": "X",
                            "flags": 96,
                            "start": 8,
                            "end": 9
                        },
                        "type": null,
                        "defaultType": null,
                        "flags": 32,
                        "start": 8,
                        "end": 9
                    },
                    {
                        "kind": 146,
                        "name": {
                            "kind": 134299649,
                            "text": "Y",
                            "rawText": "Y",
                            "flags": 96,
                            "start": 10,
                            "end": 12
                        },
                        "type": null,
                        "defaultType": null,
                        "flags": 32,
                        "start": 10,
                        "end": 12
                    }
                ],
                "flags": 0,
                "start": 7,
                "end": 13
            },
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 262,
                    "elements": [
                        {
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": null,
                            "staticToken": null,
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 15,
                                "end": 19
                            },
                            "optionalToken": null,
                            "type": {
                                "kind": 139,
                                "type": {
                                    "kind": 144,
                                    "id": {
                                        "kind": 134299649,
                                        "text": "X",
                                        "rawText": "X",
                                        "flags": 96,
                                        "start": 20,
                                        "end": 22
                                    },
                                    "typeParameters": null,
                                    "flags": 32,
                                    "start": 20,
                                    "end": 22
                                },
                                "flags": 32,
                                "start": 19,
                                "end": 22
                            },
                            "initializer": null,
                            "flags": 32,
                            "start": 15,
                            "end": 22
                        },
                        {
                            "kind": 281,
                            "flags": 96,
                            "start": 22,
                            "end": 23
                        },
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "generatorToken": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "constructor",
                                    "rawText": "constructor",
                                    "flags": 96,
                                    "start": 23,
                                    "end": 37
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [
                                        {
                                            "kind": 281,
                                            "ellipsisToken": null,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 38,
                                                "end": 39
                                            },
                                            "optionalToken": null,
                                            "type": {
                                                "kind": 139,
                                                "type": {
                                                    "kind": 144,
                                                    "id": {
                                                        "kind": 134299649,
                                                        "text": "X",
                                                        "rawText": "X",
                                                        "flags": 96,
                                                        "start": 40,
                                                        "end": 42
                                                    },
                                                    "typeParameters": null,
                                                    "flags": 32,
                                                    "start": 40,
                                                    "end": 42
                                                },
                                                "flags": 32,
                                                "start": 39,
                                                "end": 42
                                            },
                                            "right": null,
                                            "flags": 32,
                                            "start": 38,
                                            "end": 42
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 2080,
                                    "start": 38,
                                    "end": 43
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
                                                            "start": 45,
                                                            "end": 54
                                                        },
                                                        "expression": {
                                                            "kind": 134299649,
                                                            "text": "x",
                                                            "rawText": "x",
                                                            "flags": 96,
                                                            "start": 55,
                                                            "end": 56
                                                        },
                                                        "flags": 536870944,
                                                        "start": 45,
                                                        "end": 56
                                                    },
                                                    "operatorToken": {
                                                        "kind": 4125,
                                                        "flags": 64,
                                                        "start": 56,
                                                        "end": 58
                                                    },
                                                    "right": {
                                                        "kind": 134299649,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 96,
                                                        "start": 58,
                                                        "end": 60
                                                    },
                                                    "flags": 32,
                                                    "start": 45,
                                                    "end": 60
                                                },
                                                "flags": 16,
                                                "start": 45,
                                                "end": 61
                                            }
                                        ],
                                        "flags": 33,
                                        "start": 45,
                                        "end": 61
                                    },
                                    "flags": 32,
                                    "start": 43,
                                    "end": 65
                                },
                                "flags": 2048,
                                "start": 37,
                                "end": 65
                            },
                            "flags": 2048,
                            "start": 23,
                            "end": 65
                        },
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "generatorToken": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "get",
                                    "rawText": "get",
                                    "flags": 96,
                                    "start": 65,
                                    "end": 71
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 72,
                                    "end": 73
                                },
                                "returnType": {
                                    "kind": 139,
                                    "type": {
                                        "kind": 144,
                                        "id": {
                                            "kind": 134299649,
                                            "text": "X",
                                            "rawText": "X",
                                            "flags": 96,
                                            "start": 74,
                                            "end": 76
                                        },
                                        "typeParameters": null,
                                        "flags": 32,
                                        "start": 74,
                                        "end": 76
                                    },
                                    "flags": 32,
                                    "start": 73,
                                    "end": 76
                                },
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
                                                    "start": 78,
                                                    "end": 89
                                                },
                                                "expression": {
                                                    "kind": 129,
                                                    "member": {
                                                        "kind": 4276321,
                                                        "flags": 96,
                                                        "start": 89,
                                                        "end": 94
                                                    },
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 96,
                                                        "start": 95,
                                                        "end": 96
                                                    },
                                                    "flags": 536870944,
                                                    "start": 89,
                                                    "end": 96
                                                },
                                                "flags": 81,
                                                "start": 78,
                                                "end": 97
                                            }
                                        ],
                                        "flags": 33,
                                        "start": 78,
                                        "end": 97
                                    },
                                    "flags": 32,
                                    "start": 76,
                                    "end": 101
                                },
                                "flags": 0,
                                "start": 71,
                                "end": 101
                            },
                            "flags": 0,
                            "start": 65,
                            "end": 101
                        },
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "generatorToken": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "get_bad",
                                    "rawText": "get_bad",
                                    "flags": 96,
                                    "start": 101,
                                    "end": 111
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 112,
                                    "end": 113
                                },
                                "returnType": {
                                    "kind": 139,
                                    "type": {
                                        "kind": 144,
                                        "id": {
                                            "kind": 134299649,
                                            "text": "Y",
                                            "rawText": "Y",
                                            "flags": 96,
                                            "start": 114,
                                            "end": 116
                                        },
                                        "typeParameters": null,
                                        "flags": 32,
                                        "start": 114,
                                        "end": 116
                                    },
                                    "flags": 32,
                                    "start": 113,
                                    "end": 116
                                },
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
                                                    "start": 118,
                                                    "end": 129
                                                },
                                                "expression": {
                                                    "kind": 129,
                                                    "member": {
                                                        "kind": 4276321,
                                                        "flags": 96,
                                                        "start": 129,
                                                        "end": 134
                                                    },
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 96,
                                                        "start": 135,
                                                        "end": 136
                                                    },
                                                    "flags": 536870944,
                                                    "start": 129,
                                                    "end": 136
                                                },
                                                "flags": 81,
                                                "start": 118,
                                                "end": 137
                                            }
                                        ],
                                        "flags": 33,
                                        "start": 118,
                                        "end": 137
                                    },
                                    "flags": 32,
                                    "start": 116,
                                    "end": 141
                                },
                                "flags": 0,
                                "start": 111,
                                "end": 141
                            },
                            "flags": 0,
                            "start": 101,
                            "end": 141
                        }
                    ],
                    "flags": 32,
                    "start": 15,
                    "end": 141
                },
                "flags": 13,
                "start": 32,
                "end": 143
            },
            "flags": 16,
            "start": 0,
            "end": 143
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "start": 143,
                "end": 150
            },
            "name": {
                "kind": 134299649,
                "text": "D",
                "rawText": "D",
                "flags": 96,
                "start": 150,
                "end": 152
            },
            "typeParameters": {
                "kind": 265,
                "typeParameters": [
                    {
                        "kind": 146,
                        "name": {
                            "kind": 134299649,
                            "text": "T",
                            "rawText": "T",
                            "flags": 96,
                            "start": 153,
                            "end": 154
                        },
                        "type": null,
                        "defaultType": null,
                        "flags": 32,
                        "start": 153,
                        "end": 154
                    }
                ],
                "flags": 0,
                "start": 152,
                "end": 155
            },
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 262,
                    "elements": [
                        {
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": null,
                            "staticToken": null,
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 157,
                                "end": 161
                            },
                            "optionalToken": null,
                            "type": {
                                "kind": 139,
                                "type": {
                                    "kind": 144,
                                    "id": {
                                        "kind": 134299649,
                                        "text": "T",
                                        "rawText": "T",
                                        "flags": 96,
                                        "start": 162,
                                        "end": 164
                                    },
                                    "typeParameters": null,
                                    "flags": 32,
                                    "start": 162,
                                    "end": 164
                                },
                                "flags": 32,
                                "start": 161,
                                "end": 164
                            },
                            "initializer": null,
                            "flags": 32,
                            "start": 157,
                            "end": 164
                        },
                        {
                            "kind": 281,
                            "flags": 96,
                            "start": 164,
                            "end": 165
                        },
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "generatorToken": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "m",
                                    "rawText": "m",
                                    "flags": 96,
                                    "start": 165,
                                    "end": 169
                                },
                                "typeParameters": {
                                    "kind": 265,
                                    "typeParameters": [
                                        {
                                            "kind": 146,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "S",
                                                "rawText": "S",
                                                "flags": 96,
                                                "start": 170,
                                                "end": 171
                                            },
                                            "type": null,
                                            "defaultType": null,
                                            "flags": 32,
                                            "start": 170,
                                            "end": 171
                                        }
                                    ],
                                    "flags": 0,
                                    "start": 169,
                                    "end": 172
                                },
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [
                                        {
                                            "kind": 281,
                                            "ellipsisToken": null,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "z",
                                                "rawText": "z",
                                                "flags": 96,
                                                "start": 173,
                                                "end": 174
                                            },
                                            "optionalToken": null,
                                            "type": {
                                                "kind": 139,
                                                "type": {
                                                    "kind": 144,
                                                    "id": {
                                                        "kind": 134299649,
                                                        "text": "S",
                                                        "rawText": "S",
                                                        "flags": 96,
                                                        "start": 175,
                                                        "end": 177
                                                    },
                                                    "typeParameters": null,
                                                    "flags": 32,
                                                    "start": 175,
                                                    "end": 177
                                                },
                                                "flags": 32,
                                                "start": 174,
                                                "end": 177
                                            },
                                            "right": null,
                                            "flags": 32,
                                            "start": 173,
                                            "end": 177
                                        },
                                        {
                                            "kind": 281,
                                            "ellipsisToken": null,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "u",
                                                "rawText": "u",
                                                "flags": 96,
                                                "start": 178,
                                                "end": 180
                                            },
                                            "optionalToken": null,
                                            "type": {
                                                "kind": 139,
                                                "type": {
                                                    "kind": 144,
                                                    "id": {
                                                        "kind": 134299649,
                                                        "text": "T",
                                                        "rawText": "T",
                                                        "flags": 96,
                                                        "start": 181,
                                                        "end": 183
                                                    },
                                                    "typeParameters": null,
                                                    "flags": 32,
                                                    "start": 181,
                                                    "end": 183
                                                },
                                                "flags": 32,
                                                "start": 180,
                                                "end": 183
                                            },
                                            "right": null,
                                            "flags": 32,
                                            "start": 178,
                                            "end": 183
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 173,
                                    "end": 184
                                },
                                "returnType": {
                                    "kind": 139,
                                    "type": {
                                        "kind": 144,
                                        "id": {
                                            "kind": 134299649,
                                            "text": "S",
                                            "rawText": "S",
                                            "flags": 96,
                                            "start": 185,
                                            "end": 187
                                        },
                                        "typeParameters": null,
                                        "flags": 32,
                                        "start": 185,
                                        "end": 187
                                    },
                                    "flags": 32,
                                    "start": 184,
                                    "end": 187
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
                                                        "kind": 129,
                                                        "member": {
                                                            "kind": 4276321,
                                                            "flags": 97,
                                                            "start": 189,
                                                            "end": 198
                                                        },
                                                        "expression": {
                                                            "kind": 134299649,
                                                            "text": "x",
                                                            "rawText": "x",
                                                            "flags": 96,
                                                            "start": 199,
                                                            "end": 200
                                                        },
                                                        "flags": 536870944,
                                                        "start": 189,
                                                        "end": 200
                                                    },
                                                    "operatorToken": {
                                                        "kind": 4125,
                                                        "flags": 64,
                                                        "start": 200,
                                                        "end": 202
                                                    },
                                                    "right": {
                                                        "kind": 134299649,
                                                        "text": "u",
                                                        "rawText": "u",
                                                        "flags": 96,
                                                        "start": 202,
                                                        "end": 204
                                                    },
                                                    "flags": 32,
                                                    "start": 189,
                                                    "end": 204
                                                },
                                                "flags": 16,
                                                "start": 189,
                                                "end": 205
                                            },
                                            {
                                                "kind": 161,
                                                "returnKeyword": {
                                                    "kind": 37757022,
                                                    "flags": 81,
                                                    "start": 205,
                                                    "end": 216
                                                },
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "z",
                                                    "rawText": "z",
                                                    "flags": 96,
                                                    "start": 216,
                                                    "end": 218
                                                },
                                                "flags": 81,
                                                "start": 205,
                                                "end": 219
                                            }
                                        ],
                                        "flags": 33,
                                        "start": 189,
                                        "end": 219
                                    },
                                    "flags": 32,
                                    "start": 187,
                                    "end": 223
                                },
                                "flags": 0,
                                "start": 169,
                                "end": 223
                            },
                            "flags": 0,
                            "start": 165,
                            "end": 223
                        }
                    ],
                    "flags": 32,
                    "start": 157,
                    "end": 223
                },
                "flags": 155,
                "start": 32,
                "end": 225
            },
            "flags": 17,
            "start": 143,
            "end": 225
        }
    ],
    "isModule": false,
    "source": "class C<X, Y> {\n  x: X;\n  constructor(x: X) {\n    this.x = x;\n  }\n  get(): X {\n    return this.x;\n  }\n  get_bad(): Y {\n    return this.x;\n  }\n}\n\nclass D<T> {\n  x: T;\n  m<S>(z: S, u: T): S {\n    this.x = u;\n    return z;\n  }\n}\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 226
}
```

### Printed

```javascript

class C {
  x;

  constructor(x) {
    this.x = x;
  }
  get() {
    return  this.x;
  }
  get_bad() {
    return  this.x;
  }
}
class D {
  x;

  m(z, u) {
    this.x = u;
    return  z;
  }
}
```

### Diagnostics

```javascript
✔ No errors
```

