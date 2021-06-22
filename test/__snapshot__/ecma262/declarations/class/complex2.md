# Kataw parser test case

## Input

`````js
class E<X> extends C<X, number> {
  set(x: X): X {
    this.x = x;
    if (x) {
      return this.get_bad();
    }
    return this.get();
  }
}

class C2<X, Y> {
  x: {p: Y};
  foo(): D2<X, Y> {
    return this.x;
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
                "text": "E",
                "rawText": "E",
                "flags": 96,
                "start": 5,
                "end": 7
            },
            "typeParameters": {
                "kind": 307,
                "declarations": {
                    "kind": 337,
                    "parameters": [
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
                            "flags": 2097152,
                            "start": 8,
                            "end": 9
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "start": 8,
                    "end": 9
                },
                "flags": 2097152,
                "start": 7,
                "end": 10
            },
            "tail": {
                "kind": 277,
                "classHeritage": {
                    "kind": 279,
                    "extendsKeyword": {
                        "kind": 4194391,
                        "flags": 80,
                        "start": 10,
                        "end": 18
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "C",
                        "rawText": "C",
                        "flags": 96,
                        "start": 18,
                        "end": 20
                    },
                    "typeParameter": {
                        "kind": 310,
                        "typeInstantiations": {
                            "kind": 309,
                            "types": [
                                {
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
                                            "start": 21,
                                            "end": 22
                                        },
                                        "typeParameters": null,
                                        "flags": 2097152,
                                        "start": 21,
                                        "end": 22
                                    },
                                    "flags": 2097152,
                                    "start": 21,
                                    "end": 22
                                },
                                {
                                    "kind": 139,
                                    "bitwiseOrToken": null,
                                    "bitwiseAndToken": null,
                                    "type": {
                                        "kind": 134234345,
                                        "flags": 2097216,
                                        "start": 23,
                                        "end": 30
                                    },
                                    "flags": 2097152,
                                    "start": 23,
                                    "end": 30
                                }
                            ],
                            "trailingComma": false,
                            "flags": 2097152,
                            "start": 21,
                            "end": 30
                        },
                        "flags": 2097152,
                        "start": 20,
                        "end": 31
                    },
                    "flags": 16,
                    "start": 18,
                    "end": 31
                },
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
                                    "text": "set",
                                    "rawText": "set",
                                    "flags": 96,
                                    "start": 33,
                                    "end": 39
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
                                                "start": 40,
                                                "end": 41
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
                                                        "start": 42,
                                                        "end": 44
                                                    },
                                                    "typeParameters": null,
                                                    "flags": 2097152,
                                                    "start": 42,
                                                    "end": 44
                                                },
                                                "flags": 2097152,
                                                "start": 42,
                                                "end": 44
                                            },
                                            "right": null,
                                            "flags": 32,
                                            "start": 40,
                                            "end": 44
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 40,
                                    "end": 45
                                },
                                "returnType": {
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
                                            "start": 46,
                                            "end": 48
                                        },
                                        "typeParameters": null,
                                        "flags": 2097152,
                                        "start": 46,
                                        "end": 48
                                    },
                                    "flags": 2097152,
                                    "start": 46,
                                    "end": 48
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
                                                            "start": 50,
                                                            "end": 59
                                                        },
                                                        "expression": {
                                                            "kind": 134299649,
                                                            "text": "x",
                                                            "rawText": "x",
                                                            "flags": 96,
                                                            "start": 60,
                                                            "end": 61
                                                        },
                                                        "flags": 536870944,
                                                        "start": 50,
                                                        "end": 61
                                                    },
                                                    "operatorToken": {
                                                        "kind": 4125,
                                                        "flags": 96,
                                                        "start": 61,
                                                        "end": 63
                                                    },
                                                    "right": {
                                                        "kind": 134299649,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 96,
                                                        "start": 63,
                                                        "end": 65
                                                    },
                                                    "flags": 32,
                                                    "start": 50,
                                                    "end": 65
                                                },
                                                "flags": 16,
                                                "start": 50,
                                                "end": 66
                                            },
                                            {
                                                "kind": 164,
                                                "ifKeyword": {
                                                    "kind": 37757019,
                                                    "flags": 81,
                                                    "start": 66,
                                                    "end": 73
                                                },
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "start": 75,
                                                    "end": 76
                                                },
                                                "consequent": {
                                                    "kind": 124,
                                                    "block": {
                                                        "kind": 249,
                                                        "statements": [
                                                            {
                                                                "kind": 161,
                                                                "returnKeyword": {
                                                                    "kind": 37757022,
                                                                    "flags": 81,
                                                                    "start": 79,
                                                                    "end": 92
                                                                },
                                                                "expression": {
                                                                    "kind": 131,
                                                                    "expression": {
                                                                        "kind": 129,
                                                                        "member": {
                                                                            "kind": 4276321,
                                                                            "flags": 96,
                                                                            "start": 92,
                                                                            "end": 97
                                                                        },
                                                                        "expression": {
                                                                            "kind": 134299649,
                                                                            "text": "get_bad",
                                                                            "rawText": "get_bad",
                                                                            "flags": 96,
                                                                            "start": 98,
                                                                            "end": 105
                                                                        },
                                                                        "flags": 536870944,
                                                                        "start": 92,
                                                                        "end": 105
                                                                    },
                                                                    "argumentList": {
                                                                        "kind": 256,
                                                                        "elements": [],
                                                                        "trailingComma": false,
                                                                        "flags": 32,
                                                                        "start": 106,
                                                                        "end": 106
                                                                    },
                                                                    "flags": 268435488,
                                                                    "start": 92,
                                                                    "end": 107
                                                                },
                                                                "flags": 81,
                                                                "start": 79,
                                                                "end": 108
                                                            }
                                                        ],
                                                        "flags": 17,
                                                        "start": 79,
                                                        "end": 108
                                                    },
                                                    "flags": 16,
                                                    "start": 77,
                                                    "end": 114
                                                },
                                                "elseKeyword": null,
                                                "alternate": null,
                                                "flags": 81,
                                                "start": 66,
                                                "end": 114
                                            },
                                            {
                                                "kind": 161,
                                                "returnKeyword": {
                                                    "kind": 37757022,
                                                    "flags": 81,
                                                    "start": 114,
                                                    "end": 125
                                                },
                                                "expression": {
                                                    "kind": 131,
                                                    "expression": {
                                                        "kind": 129,
                                                        "member": {
                                                            "kind": 4276321,
                                                            "flags": 96,
                                                            "start": 125,
                                                            "end": 130
                                                        },
                                                        "expression": {
                                                            "kind": 134299649,
                                                            "text": "get",
                                                            "rawText": "get",
                                                            "flags": 96,
                                                            "start": 131,
                                                            "end": 134
                                                        },
                                                        "flags": 536870944,
                                                        "start": 125,
                                                        "end": 134
                                                    },
                                                    "argumentList": {
                                                        "kind": 256,
                                                        "elements": [],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "start": 135,
                                                        "end": 135
                                                    },
                                                    "flags": 268435488,
                                                    "start": 125,
                                                    "end": 136
                                                },
                                                "flags": 81,
                                                "start": 114,
                                                "end": 137
                                            }
                                        ],
                                        "flags": 33,
                                        "start": 50,
                                        "end": 137
                                    },
                                    "flags": 32,
                                    "start": 48,
                                    "end": 141
                                },
                                "flags": 0,
                                "start": 39,
                                "end": 141
                            },
                            "flags": 0,
                            "start": 33,
                            "end": 141
                        }
                    ],
                    "flags": 32,
                    "start": 33,
                    "end": 141
                },
                "flags": 10,
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
                "text": "C2",
                "rawText": "C2",
                "flags": 96,
                "start": 150,
                "end": 153
            },
            "typeParameters": {
                "kind": 307,
                "declarations": {
                    "kind": 337,
                    "parameters": [
                        {
                            "kind": 146,
                            "name": {
                                "kind": 134299649,
                                "text": "X",
                                "rawText": "X",
                                "flags": 96,
                                "start": 154,
                                "end": 155
                            },
                            "type": null,
                            "defaultType": null,
                            "flags": 2097152,
                            "start": 154,
                            "end": 155
                        },
                        {
                            "kind": 146,
                            "name": {
                                "kind": 134299649,
                                "text": "Y",
                                "rawText": "Y",
                                "flags": 96,
                                "start": 156,
                                "end": 158
                            },
                            "type": null,
                            "defaultType": null,
                            "flags": 2097152,
                            "start": 156,
                            "end": 158
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "start": 154,
                    "end": 158
                },
                "flags": 2097152,
                "start": 153,
                "end": 159
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
                            "staticToken": null,
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 161,
                                "end": 165
                            },
                            "optionalToken": null,
                            "type": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 134234353,
                                    "properties": [
                                        {
                                            "kind": 193,
                                            "protoKeyword": null,
                                            "staticToken": null,
                                            "getKeyword": null,
                                            "setKeyword": null,
                                            "key": {
                                                "kind": 134299649,
                                                "text": "p",
                                                "rawText": "p",
                                                "flags": 96,
                                                "start": 168,
                                                "end": 169
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
                                                        "text": "Y",
                                                        "rawText": "Y",
                                                        "flags": 96,
                                                        "start": 170,
                                                        "end": 172
                                                    },
                                                    "typeParameters": null,
                                                    "flags": 2097152,
                                                    "start": 170,
                                                    "end": 172
                                                },
                                                "flags": 2097152,
                                                "start": 170,
                                                "end": 172
                                            },
                                            "flags": 2097152,
                                            "start": 168,
                                            "end": 172
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 2097152,
                                    "start": 166,
                                    "end": 173
                                },
                                "flags": 2097152,
                                "start": 166,
                                "end": 173
                            },
                            "initializer": null,
                            "flags": 32,
                            "start": 161,
                            "end": 173
                        },
                        {
                            "kind": 317,
                            "flags": 96,
                            "start": 173,
                            "end": 174
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
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 96,
                                    "start": 174,
                                    "end": 180
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 181,
                                    "end": 182
                                },
                                "returnType": {
                                    "kind": 139,
                                    "bitwiseOrToken": null,
                                    "bitwiseAndToken": null,
                                    "type": {
                                        "kind": 144,
                                        "typeName": {
                                            "kind": 134299649,
                                            "text": "D2",
                                            "rawText": "D2",
                                            "flags": 96,
                                            "start": 183,
                                            "end": 186
                                        },
                                        "typeParameters": {
                                            "kind": 310,
                                            "typeInstantiations": {
                                                "kind": 309,
                                                "types": [
                                                    {
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
                                                                "start": 187,
                                                                "end": 188
                                                            },
                                                            "typeParameters": null,
                                                            "flags": 2097152,
                                                            "start": 187,
                                                            "end": 188
                                                        },
                                                        "flags": 2097152,
                                                        "start": 187,
                                                        "end": 188
                                                    },
                                                    {
                                                        "kind": 139,
                                                        "bitwiseOrToken": null,
                                                        "bitwiseAndToken": null,
                                                        "type": {
                                                            "kind": 144,
                                                            "typeName": {
                                                                "kind": 134299649,
                                                                "text": "Y",
                                                                "rawText": "Y",
                                                                "flags": 96,
                                                                "start": 189,
                                                                "end": 191
                                                            },
                                                            "typeParameters": null,
                                                            "flags": 2097152,
                                                            "start": 189,
                                                            "end": 191
                                                        },
                                                        "flags": 2097152,
                                                        "start": 189,
                                                        "end": 191
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 2097152,
                                                "start": 187,
                                                "end": 191
                                            },
                                            "flags": 2097152,
                                            "start": 186,
                                            "end": 192
                                        },
                                        "flags": 2097152,
                                        "start": 183,
                                        "end": 192
                                    },
                                    "flags": 2097152,
                                    "start": 183,
                                    "end": 192
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
                                                    "start": 194,
                                                    "end": 205
                                                },
                                                "expression": {
                                                    "kind": 129,
                                                    "member": {
                                                        "kind": 4276321,
                                                        "flags": 96,
                                                        "start": 205,
                                                        "end": 210
                                                    },
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 96,
                                                        "start": 211,
                                                        "end": 212
                                                    },
                                                    "flags": 536870944,
                                                    "start": 205,
                                                    "end": 212
                                                },
                                                "flags": 81,
                                                "start": 194,
                                                "end": 213
                                            }
                                        ],
                                        "flags": 33,
                                        "start": 194,
                                        "end": 213
                                    },
                                    "flags": 32,
                                    "start": 192,
                                    "end": 217
                                },
                                "flags": 0,
                                "start": 180,
                                "end": 217
                            },
                            "flags": 0,
                            "start": 174,
                            "end": 217
                        }
                    ],
                    "flags": 32,
                    "start": 161,
                    "end": 217
                },
                "flags": 159,
                "start": 32,
                "end": 219
            },
            "flags": 17,
            "start": 143,
            "end": 219
        }
    ],
    "isModule": false,
    "source": "class E<X> extends C<X, number> {\n  set(x: X): X {\n    this.x = x;\n    if (x) {\n      return this.get_bad();\n    }\n    return this.get();\n  }\n}\n\nclass C2<X, Y> {\n  x: {p: Y};\n  foo(): D2<X, Y> {\n    return this.x;\n  }\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 219
}
```

### Printed

```javascript

class E  {
  set() {
    this.x = x;
    if (x) {
        return  this.get_bad();
      }
    return  this.get();
  }
}
class C2 {
  x;

  foo() {
    return  this.x;
  }
}
```

### Diagnostics

```javascript
✔ No errors
```

