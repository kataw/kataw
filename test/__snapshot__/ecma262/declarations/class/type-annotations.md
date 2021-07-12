# Kataw parser test case

## Input

`````js
class Foo4<T> {}
class Foo5<T> extends Bar<T> {}
class Foo6<T> extends mixin(Bar) {}
class Foo1 {
  set fooProp(value: number) {}
}
class Foo2 {
  set fooProp(value: number): void {}
}
class Foo3 {
  get fooProp(): number {}
}
class Foo8 {
  "bar"<T>() {}
}
class Foo10 {
  static prop1: string;
  prop2: number;
}
class Foo11 {
  #prop1: string;
  prop2: number;
}
class Array { concat(items:number | string) {}; }
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
                "text": "Foo4",
                "rawText": "Foo4",
                "flags": 96,
                "start": 5,
                "end": 10
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
                                "text": "T",
                                "rawText": "T",
                                "flags": 96,
                                "start": 11,
                                "end": 12
                            },
                            "type": null,
                            "assignToken": null,
                            "defaultType": null,
                            "flags": 2097152,
                            "start": 11,
                            "end": 12
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "start": 11,
                    "end": 12
                },
                "flags": 2097152,
                "start": 10,
                "end": 13
            },
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 303,
                    "elements": [],
                    "flags": 32,
                    "start": 15,
                    "end": 15
                },
                "flags": 13,
                "start": 32,
                "end": 16
            },
            "flags": 16,
            "start": 0,
            "end": 16
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "start": 16,
                "end": 22
            },
            "name": {
                "kind": 134299649,
                "text": "Foo5",
                "rawText": "Foo5",
                "flags": 96,
                "start": 22,
                "end": 27
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
                                "text": "T",
                                "rawText": "T",
                                "flags": 96,
                                "start": 28,
                                "end": 29
                            },
                            "type": null,
                            "assignToken": null,
                            "defaultType": null,
                            "flags": 2097152,
                            "start": 28,
                            "end": 29
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "start": 28,
                    "end": 29
                },
                "flags": 2097152,
                "start": 27,
                "end": 30
            },
            "tail": {
                "kind": 277,
                "classHeritage": {
                    "kind": 279,
                    "extendsKeyword": {
                        "kind": 4194391,
                        "flags": 80,
                        "start": 30,
                        "end": 38
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "Bar",
                        "rawText": "Bar",
                        "flags": 96,
                        "start": 38,
                        "end": 42
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
                                            "text": "T",
                                            "rawText": "T",
                                            "flags": 96,
                                            "start": 43,
                                            "end": 44
                                        },
                                        "typeParameters": null,
                                        "flags": 2097152,
                                        "start": 43,
                                        "end": 44
                                    },
                                    "flags": 2097152,
                                    "start": 43,
                                    "end": 44
                                }
                            ],
                            "trailingComma": false,
                            "flags": 2097152,
                            "start": 43,
                            "end": 44
                        },
                        "flags": 2097152,
                        "start": 42,
                        "end": 45
                    },
                    "flags": 16,
                    "start": 38,
                    "end": 45
                },
                "body": {
                    "kind": 303,
                    "elements": [],
                    "flags": 32,
                    "start": 47,
                    "end": 47
                },
                "flags": 30,
                "start": 32,
                "end": 48
            },
            "flags": 17,
            "start": 16,
            "end": 48
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "start": 48,
                "end": 54
            },
            "name": {
                "kind": 134299649,
                "text": "Foo6",
                "rawText": "Foo6",
                "flags": 96,
                "start": 54,
                "end": 59
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
                                "text": "T",
                                "rawText": "T",
                                "flags": 96,
                                "start": 60,
                                "end": 61
                            },
                            "type": null,
                            "assignToken": null,
                            "defaultType": null,
                            "flags": 2097152,
                            "start": 60,
                            "end": 61
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "start": 60,
                    "end": 61
                },
                "flags": 2097152,
                "start": 59,
                "end": 62
            },
            "tail": {
                "kind": 277,
                "classHeritage": {
                    "kind": 279,
                    "extendsKeyword": {
                        "kind": 4194391,
                        "flags": 80,
                        "start": 62,
                        "end": 70
                    },
                    "expression": {
                        "kind": 131,
                        "expression": {
                            "kind": 134299649,
                            "text": "mixin",
                            "rawText": "mixin",
                            "flags": 96,
                            "start": 70,
                            "end": 76
                        },
                        "argumentList": {
                            "kind": 256,
                            "elements": [
                                {
                                    "kind": 134299649,
                                    "text": "Bar",
                                    "rawText": "Bar",
                                    "flags": 96,
                                    "start": 77,
                                    "end": 80
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 77,
                            "end": 80
                        },
                        "flags": 268435488,
                        "start": 70,
                        "end": 81
                    },
                    "typeParameter": null,
                    "flags": 16,
                    "start": 70,
                    "end": 81
                },
                "body": {
                    "kind": 303,
                    "elements": [],
                    "flags": 32,
                    "start": 83,
                    "end": 83
                },
                "flags": 62,
                "start": 32,
                "end": 84
            },
            "flags": 17,
            "start": 48,
            "end": 84
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "start": 84,
                "end": 90
            },
            "name": {
                "kind": 134299649,
                "text": "Foo1",
                "rawText": "Foo1",
                "flags": 96,
                "start": 90,
                "end": 95
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
                            "getKeyword": {
                                "kind": 16499,
                                "flags": 65,
                                "start": 97,
                                "end": 103
                            },
                            "asteriskToken": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "fooProp",
                                    "rawText": "fooProp",
                                    "flags": 96,
                                    "start": 103,
                                    "end": 111
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
                                                "text": "value",
                                                "rawText": "value",
                                                "flags": 96,
                                                "start": 112,
                                                "end": 117
                                            },
                                            "optionalToken": null,
                                            "type": {
                                                "kind": 139,
                                                "bitwiseOrToken": null,
                                                "bitwiseAndToken": null,
                                                "type": {
                                                    "kind": 134234345,
                                                    "flags": 2097216,
                                                    "start": 118,
                                                    "end": 125
                                                },
                                                "flags": 2097152,
                                                "start": 118,
                                                "end": 125
                                            },
                                            "right": null,
                                            "flags": 32,
                                            "start": 112,
                                            "end": 125
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 544,
                                    "start": 112,
                                    "end": 126
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 128,
                                        "end": 128
                                    },
                                    "flags": 32,
                                    "start": 126,
                                    "end": 129
                                },
                                "flags": 512,
                                "start": 111,
                                "end": 129
                            },
                            "flags": 512,
                            "start": 97,
                            "end": 129
                        }
                    ],
                    "flags": 32,
                    "start": 97,
                    "end": 129
                },
                "flags": 95,
                "start": 32,
                "end": 131
            },
            "flags": 17,
            "start": 84,
            "end": 131
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "start": 131,
                "end": 137
            },
            "name": {
                "kind": 134299649,
                "text": "Foo2",
                "rawText": "Foo2",
                "flags": 96,
                "start": 137,
                "end": 142
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
                            "getKeyword": {
                                "kind": 16499,
                                "flags": 65,
                                "start": 144,
                                "end": 150
                            },
                            "asteriskToken": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "fooProp",
                                    "rawText": "fooProp",
                                    "flags": 96,
                                    "start": 150,
                                    "end": 158
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
                                                "text": "value",
                                                "rawText": "value",
                                                "flags": 96,
                                                "start": 159,
                                                "end": 164
                                            },
                                            "optionalToken": null,
                                            "type": {
                                                "kind": 139,
                                                "bitwiseOrToken": null,
                                                "bitwiseAndToken": null,
                                                "type": {
                                                    "kind": 134234345,
                                                    "flags": 2097216,
                                                    "start": 165,
                                                    "end": 172
                                                },
                                                "flags": 2097152,
                                                "start": 165,
                                                "end": 172
                                            },
                                            "right": null,
                                            "flags": 32,
                                            "start": 159,
                                            "end": 172
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 544,
                                    "start": 159,
                                    "end": 173
                                },
                                "returnType": {
                                    "kind": 139,
                                    "bitwiseOrToken": null,
                                    "bitwiseAndToken": null,
                                    "type": {
                                        "kind": 138477615,
                                        "flags": 2097216,
                                        "start": 174,
                                        "end": 179
                                    },
                                    "flags": 2097152,
                                    "start": 174,
                                    "end": 179
                                },
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 181,
                                        "end": 181
                                    },
                                    "flags": 32,
                                    "start": 179,
                                    "end": 182
                                },
                                "flags": 512,
                                "start": 158,
                                "end": 182
                            },
                            "flags": 512,
                            "start": 144,
                            "end": 182
                        }
                    ],
                    "flags": 32,
                    "start": 144,
                    "end": 182
                },
                "flags": 142,
                "start": 32,
                "end": 184
            },
            "flags": 17,
            "start": 131,
            "end": 184
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "start": 184,
                "end": 190
            },
            "name": {
                "kind": 134299649,
                "text": "Foo3",
                "rawText": "Foo3",
                "flags": 96,
                "start": 190,
                "end": 195
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
                                "start": 197,
                                "end": 203
                            },
                            "getKeyword": null,
                            "asteriskToken": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "fooProp",
                                    "rawText": "fooProp",
                                    "flags": 96,
                                    "start": 203,
                                    "end": 211
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 1024,
                                    "start": 212,
                                    "end": 213
                                },
                                "returnType": {
                                    "kind": 139,
                                    "bitwiseOrToken": null,
                                    "bitwiseAndToken": null,
                                    "type": {
                                        "kind": 134234345,
                                        "flags": 2097216,
                                        "start": 214,
                                        "end": 221
                                    },
                                    "flags": 2097152,
                                    "start": 214,
                                    "end": 221
                                },
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 223,
                                        "end": 223
                                    },
                                    "flags": 32,
                                    "start": 221,
                                    "end": 224
                                },
                                "flags": 1024,
                                "start": 211,
                                "end": 224
                            },
                            "flags": 1024,
                            "start": 197,
                            "end": 224
                        }
                    ],
                    "flags": 32,
                    "start": 197,
                    "end": 224
                },
                "flags": 195,
                "start": 32,
                "end": 226
            },
            "flags": 17,
            "start": 184,
            "end": 226
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "start": 226,
                "end": 232
            },
            "name": {
                "kind": 134299649,
                "text": "Foo8",
                "rawText": "Foo8",
                "flags": 96,
                "start": 232,
                "end": 237
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
                                    "kind": 201392131,
                                    "text": "bar",
                                    "rawText": "\"bar\"",
                                    "flags": 97,
                                    "start": 239,
                                    "end": 247
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
                                                    "text": "T",
                                                    "rawText": "T",
                                                    "flags": 96,
                                                    "start": 248,
                                                    "end": 249
                                                },
                                                "type": null,
                                                "assignToken": null,
                                                "defaultType": null,
                                                "flags": 2097152,
                                                "start": 248,
                                                "end": 249
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 2097152,
                                        "start": 248,
                                        "end": 249
                                    },
                                    "flags": 2097152,
                                    "start": 247,
                                    "end": 250
                                },
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 251,
                                    "end": 252
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 254,
                                        "end": 254
                                    },
                                    "flags": 32,
                                    "start": 252,
                                    "end": 255
                                },
                                "flags": 0,
                                "start": 247,
                                "end": 255
                            },
                            "flags": 0,
                            "start": 239,
                            "end": 255
                        }
                    ],
                    "flags": 32,
                    "start": 239,
                    "end": 255
                },
                "flags": 237,
                "start": 32,
                "end": 257
            },
            "flags": 17,
            "start": 226,
            "end": 257
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "start": 257,
                "end": 263
            },
            "name": {
                "kind": 134299649,
                "text": "Foo10",
                "rawText": "Foo10",
                "flags": 96,
                "start": 263,
                "end": 269
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
                            "staticKeyword": {
                                "kind": 8388716,
                                "flags": 64,
                                "start": 271,
                                "end": 280
                            },
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "prop1",
                                "rawText": "prop1",
                                "flags": 96,
                                "start": 280,
                                "end": 286
                            },
                            "optionalToken": null,
                            "type": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 134234347,
                                    "flags": 2097216,
                                    "start": 287,
                                    "end": 294
                                },
                                "flags": 2097152,
                                "start": 287,
                                "end": 294
                            },
                            "initializer": null,
                            "flags": 32,
                            "start": 280,
                            "end": 294
                        },
                        {
                            "kind": 1108353041,
                            "flags": 64,
                            "start": 294,
                            "end": 295
                        },
                        {
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "prop2",
                                "rawText": "prop2",
                                "flags": 97,
                                "start": 295,
                                "end": 303
                            },
                            "optionalToken": null,
                            "type": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 134234345,
                                    "flags": 2097216,
                                    "start": 304,
                                    "end": 311
                                },
                                "flags": 2097152,
                                "start": 304,
                                "end": 311
                            },
                            "initializer": null,
                            "flags": 32,
                            "start": 295,
                            "end": 311
                        },
                        {
                            "kind": 1108353041,
                            "flags": 64,
                            "start": 311,
                            "end": 312
                        }
                    ],
                    "flags": 32,
                    "start": 271,
                    "end": 312
                },
                "flags": 269,
                "start": 32,
                "end": 314
            },
            "flags": 17,
            "start": 257,
            "end": 314
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "start": 314,
                "end": 320
            },
            "name": {
                "kind": 134299649,
                "text": "Foo11",
                "rawText": "Foo11",
                "flags": 96,
                "start": 320,
                "end": 326
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
                                "text": "#prop1",
                                "rawText": "#prop1",
                                "flags": 97,
                                "start": 328,
                                "end": 337
                            },
                            "optionalToken": null,
                            "type": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 134234347,
                                    "flags": 2097216,
                                    "start": 338,
                                    "end": 345
                                },
                                "flags": 2097152,
                                "start": 338,
                                "end": 345
                            },
                            "initializer": null,
                            "flags": 32,
                            "start": 328,
                            "end": 345
                        },
                        {
                            "kind": 1108353041,
                            "flags": 64,
                            "start": 345,
                            "end": 346
                        },
                        {
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "prop2",
                                "rawText": "prop2",
                                "flags": 97,
                                "start": 346,
                                "end": 354
                            },
                            "optionalToken": null,
                            "type": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 134234345,
                                    "flags": 2097216,
                                    "start": 355,
                                    "end": 362
                                },
                                "flags": 2097152,
                                "start": 355,
                                "end": 362
                            },
                            "initializer": null,
                            "flags": 32,
                            "start": 346,
                            "end": 362
                        },
                        {
                            "kind": 1108353041,
                            "flags": 64,
                            "start": 362,
                            "end": 363
                        }
                    ],
                    "flags": 32,
                    "start": 328,
                    "end": 363
                },
                "flags": 326,
                "start": 32,
                "end": 365
            },
            "flags": 17,
            "start": 314,
            "end": 365
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "start": 365,
                "end": 371
            },
            "name": {
                "kind": 134299649,
                "text": "Array",
                "rawText": "Array",
                "flags": 96,
                "start": 371,
                "end": 377
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
                                    "text": "concat",
                                    "rawText": "concat",
                                    "flags": 96,
                                    "start": 379,
                                    "end": 386
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
                                                "text": "items",
                                                "rawText": "items",
                                                "flags": 96,
                                                "start": 387,
                                                "end": 392
                                            },
                                            "optionalToken": null,
                                            "type": {
                                                "kind": 139,
                                                "bitwiseOrToken": null,
                                                "bitwiseAndToken": null,
                                                "type": {
                                                    "kind": 137,
                                                    "types": [
                                                        {
                                                            "kind": 134234345,
                                                            "flags": 2097216,
                                                            "start": 393,
                                                            "end": 399
                                                        },
                                                        {
                                                            "kind": 134234347,
                                                            "flags": 2097216,
                                                            "start": 401,
                                                            "end": 408
                                                        }
                                                    ],
                                                    "flags": 2097152,
                                                    "start": 399,
                                                    "end": 408
                                                },
                                                "flags": 2097152,
                                                "start": 393,
                                                "end": 408
                                            },
                                            "right": null,
                                            "flags": 32,
                                            "start": 387,
                                            "end": 408
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 387,
                                    "end": 409
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 411,
                                        "end": 411
                                    },
                                    "flags": 32,
                                    "start": 409,
                                    "end": 412
                                },
                                "flags": 0,
                                "start": 386,
                                "end": 412
                            },
                            "flags": 0,
                            "start": 379,
                            "end": 412
                        },
                        {
                            "kind": 1108353041,
                            "flags": 64,
                            "start": 412,
                            "end": 413
                        }
                    ],
                    "flags": 32,
                    "start": 379,
                    "end": 413
                },
                "flags": 377,
                "start": 32,
                "end": 415
            },
            "flags": 17,
            "start": 365,
            "end": 415
        }
    ],
    "isModule": false,
    "source": "class Foo4<T> {}\nclass Foo5<T> extends Bar<T> {}\nclass Foo6<T> extends mixin(Bar) {}\nclass Foo1 {\n  set fooProp(value: number) {}\n}\nclass Foo2 {\n  set fooProp(value: number): void {}\n}\nclass Foo3 {\n  get fooProp(): number {}\n}\nclass Foo8 {\n  \"bar\"<T>() {}\n}\nclass Foo10 {\n  static prop1: string;\n  prop2: number;\n}\nclass Foo11 {\n  #prop1: string;\n  prop2: number;\n}\nclass Array { concat(items:number | string) {}; }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 415
}
```

### Printed

```javascript

  class Foo4 <T>{
  }
  class Foo5 <T> extends Bar<T> {
  }
  class Foo6 <T> extends mixin(Bar) {
  }
  class Foo1 {
    set fooProp(value: number) {}
  }
  class Foo2 {
    set fooProp(value: number): void {}
  }
  class Foo3 {
    get fooProp(): number {}
  }
  class Foo8 {
    "\"bar\""<T>() {}
  }
  class Foo10 {
    static prop1: string
    ;
    prop2: number
    ;
  }
  class Foo11 {
    #prop1: string
    ;
    prop2: number
    ;
  }
  class Array {
    concat(items: number | string) {}
    ;
  }

```

### Diagnostics

```javascript
✔ No errors
```

