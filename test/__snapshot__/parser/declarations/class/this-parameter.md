# Kataw parser test case

## Input

`````js
declare class one {
  m1(this: string): void,
  m2(this: string, a: number): void,
  m3(this: string, ...a: any): void,
  m4<T>(this: T): void,
}

class two {
  m1(this: number) {}

  m2(this: number, a) {}

  m3(this: number, ...a) {}

  m4(this: number, a, b, ...c) {}

  m5<T>(this: T) {}

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
            "declareKeyword": {
                "kind": 82165,
                "flags": 64,
                "start": 0,
                "end": 7
            },
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 80,
                "start": 0,
                "end": 13
            },
            "name": {
                "kind": 134299649,
                "text": "one",
                "rawText": "one",
                "flags": 96,
                "start": 13,
                "end": 17
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
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
                                "text": "m1",
                                "rawText": "m1",
                                "flags": 96,
                                "start": 19,
                                "end": 24
                            },
                            "optionalToken": null,
                            "value": {
                                "kind": 148,
                                "functionTypeParameterList": {
                                    "kind": 282,
                                    "parameters": [
                                        {
                                            "kind": 149,
                                            "ellipsisToken": null,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "this",
                                                "rawText": "this",
                                                "flags": 96,
                                                "start": 25,
                                                "end": 29
                                            },
                                            "optionalToken": null,
                                            "types": {
                                                "kind": 139,
                                                "bitwiseOrToken": null,
                                                "bitwiseAndToken": null,
                                                "type": {
                                                    "kind": 134234347,
                                                    "flags": 2097216,
                                                    "start": 30,
                                                    "end": 37
                                                },
                                                "flags": 2097152,
                                                "start": 30,
                                                "end": 37
                                            },
                                            "flags": 2097152,
                                            "start": 25,
                                            "end": 37
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 2097152,
                                    "start": 25,
                                    "end": 37
                                },
                                "returnType": {
                                    "kind": 139,
                                    "bitwiseOrToken": null,
                                    "bitwiseAndToken": null,
                                    "type": {
                                        "kind": 138477615,
                                        "flags": 2097216,
                                        "start": 39,
                                        "end": 44
                                    },
                                    "flags": 2097152,
                                    "start": 39,
                                    "end": 44
                                },
                                "typeParameters": null,
                                "flags": 2097152,
                                "start": 24,
                                "end": 44
                            },
                            "flags": 2097152,
                            "start": 19,
                            "end": 45
                        },
                        {
                            "kind": 193,
                            "protoKeyword": null,
                            "staticToken": null,
                            "getKeyword": null,
                            "setKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "m2",
                                "rawText": "m2",
                                "flags": 96,
                                "start": 45,
                                "end": 50
                            },
                            "optionalToken": null,
                            "value": {
                                "kind": 148,
                                "functionTypeParameterList": {
                                    "kind": 282,
                                    "parameters": [
                                        {
                                            "kind": 149,
                                            "ellipsisToken": null,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "this",
                                                "rawText": "this",
                                                "flags": 96,
                                                "start": 51,
                                                "end": 55
                                            },
                                            "optionalToken": null,
                                            "types": {
                                                "kind": 139,
                                                "bitwiseOrToken": null,
                                                "bitwiseAndToken": null,
                                                "type": {
                                                    "kind": 134234347,
                                                    "flags": 2097216,
                                                    "start": 56,
                                                    "end": 63
                                                },
                                                "flags": 2097152,
                                                "start": 56,
                                                "end": 63
                                            },
                                            "flags": 2097152,
                                            "start": 51,
                                            "end": 63
                                        },
                                        {
                                            "kind": 149,
                                            "ellipsisToken": null,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 96,
                                                "start": 64,
                                                "end": 66
                                            },
                                            "optionalToken": null,
                                            "types": {
                                                "kind": 139,
                                                "bitwiseOrToken": null,
                                                "bitwiseAndToken": null,
                                                "type": {
                                                    "kind": 134234345,
                                                    "flags": 2097216,
                                                    "start": 67,
                                                    "end": 74
                                                },
                                                "flags": 2097152,
                                                "start": 67,
                                                "end": 74
                                            },
                                            "flags": 2097152,
                                            "start": 64,
                                            "end": 74
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 2097152,
                                    "start": 51,
                                    "end": 74
                                },
                                "returnType": {
                                    "kind": 139,
                                    "bitwiseOrToken": null,
                                    "bitwiseAndToken": null,
                                    "type": {
                                        "kind": 138477615,
                                        "flags": 2097216,
                                        "start": 76,
                                        "end": 81
                                    },
                                    "flags": 2097152,
                                    "start": 76,
                                    "end": 81
                                },
                                "typeParameters": null,
                                "flags": 2097152,
                                "start": 50,
                                "end": 81
                            },
                            "flags": 2097152,
                            "start": 45,
                            "end": 82
                        },
                        {
                            "kind": 193,
                            "protoKeyword": null,
                            "staticToken": null,
                            "getKeyword": null,
                            "setKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "m3",
                                "rawText": "m3",
                                "flags": 96,
                                "start": 82,
                                "end": 87
                            },
                            "optionalToken": null,
                            "value": {
                                "kind": 148,
                                "functionTypeParameterList": {
                                    "kind": 282,
                                    "parameters": [
                                        {
                                            "kind": 149,
                                            "ellipsisToken": null,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "this",
                                                "rawText": "this",
                                                "flags": 96,
                                                "start": 88,
                                                "end": 92
                                            },
                                            "optionalToken": null,
                                            "types": {
                                                "kind": 139,
                                                "bitwiseOrToken": null,
                                                "bitwiseAndToken": null,
                                                "type": {
                                                    "kind": 134234347,
                                                    "flags": 2097216,
                                                    "start": 93,
                                                    "end": 100
                                                },
                                                "flags": 2097152,
                                                "start": 93,
                                                "end": 100
                                            },
                                            "flags": 2097152,
                                            "start": 88,
                                            "end": 100
                                        },
                                        {
                                            "kind": 149,
                                            "ellipsisToken": {
                                                "kind": 524302,
                                                "flags": 64,
                                                "start": 101,
                                                "end": 105
                                            },
                                            "name": {
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 96,
                                                "start": 105,
                                                "end": 106
                                            },
                                            "optionalToken": null,
                                            "types": {
                                                "kind": 139,
                                                "bitwiseOrToken": null,
                                                "bitwiseAndToken": null,
                                                "type": {
                                                    "kind": 134234252,
                                                    "flags": 2097216,
                                                    "start": 107,
                                                    "end": 111
                                                },
                                                "flags": 2097152,
                                                "start": 107,
                                                "end": 111
                                            },
                                            "flags": 2097152,
                                            "start": 101,
                                            "end": 111
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 2097152,
                                    "start": 88,
                                    "end": 111
                                },
                                "returnType": {
                                    "kind": 139,
                                    "bitwiseOrToken": null,
                                    "bitwiseAndToken": null,
                                    "type": {
                                        "kind": 138477615,
                                        "flags": 2097216,
                                        "start": 113,
                                        "end": 118
                                    },
                                    "flags": 2097152,
                                    "start": 113,
                                    "end": 118
                                },
                                "typeParameters": null,
                                "flags": 2097152,
                                "start": 87,
                                "end": 118
                            },
                            "flags": 2097152,
                            "start": 82,
                            "end": 119
                        },
                        {
                            "kind": 193,
                            "protoKeyword": null,
                            "staticToken": null,
                            "getKeyword": null,
                            "setKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "m4",
                                "rawText": "m4",
                                "flags": 96,
                                "start": 119,
                                "end": 124
                            },
                            "optionalToken": null,
                            "value": {
                                "kind": 148,
                                "functionTypeParameterList": {
                                    "kind": 282,
                                    "parameters": [
                                        {
                                            "kind": 149,
                                            "ellipsisToken": null,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "this",
                                                "rawText": "this",
                                                "flags": 96,
                                                "start": 128,
                                                "end": 132
                                            },
                                            "optionalToken": null,
                                            "types": {
                                                "kind": 139,
                                                "bitwiseOrToken": null,
                                                "bitwiseAndToken": null,
                                                "type": {
                                                    "kind": 144,
                                                    "id": {
                                                        "kind": 134299649,
                                                        "text": "T",
                                                        "rawText": "T",
                                                        "flags": 96,
                                                        "start": 133,
                                                        "end": 135
                                                    },
                                                    "typeParameters": null,
                                                    "flags": 2097152,
                                                    "start": 133,
                                                    "end": 135
                                                },
                                                "flags": 2097152,
                                                "start": 133,
                                                "end": 135
                                            },
                                            "flags": 2097152,
                                            "start": 128,
                                            "end": 135
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 2097152,
                                    "start": 128,
                                    "end": 135
                                },
                                "returnType": {
                                    "kind": 139,
                                    "bitwiseOrToken": null,
                                    "bitwiseAndToken": null,
                                    "type": {
                                        "kind": 138477615,
                                        "flags": 2097216,
                                        "start": 137,
                                        "end": 142
                                    },
                                    "flags": 2097152,
                                    "start": 137,
                                    "end": 142
                                },
                                "typeParameters": {
                                    "kind": 307,
                                    "typeParameters": [
                                        {
                                            "kind": 146,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "T",
                                                "rawText": "T",
                                                "flags": 96,
                                                "start": 125,
                                                "end": 126
                                            },
                                            "type": null,
                                            "defaultType": null,
                                            "flags": 2097152,
                                            "start": 125,
                                            "end": 126
                                        }
                                    ],
                                    "flags": 2097152,
                                    "start": 124,
                                    "end": 127
                                },
                                "flags": 2097152,
                                "start": 124,
                                "end": 142
                            },
                            "flags": 2097152,
                            "start": 119,
                            "end": 143
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "start": 17,
                    "end": 145
                },
                "flags": 4128,
                "start": 17,
                "end": 145
            },
            "flags": 16,
            "start": 0,
            "end": 145
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "start": 145,
                "end": 152
            },
            "name": {
                "kind": 134299649,
                "text": "two",
                "rawText": "two",
                "flags": 96,
                "start": 152,
                "end": 156
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
                            "generatorToken": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "m1",
                                    "rawText": "m1",
                                    "flags": 96,
                                    "start": 158,
                                    "end": 163
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
                                                "text": "this",
                                                "rawText": "this",
                                                "flags": 96,
                                                "start": 164,
                                                "end": 168
                                            },
                                            "optionalToken": null,
                                            "type": {
                                                "kind": 139,
                                                "bitwiseOrToken": null,
                                                "bitwiseAndToken": null,
                                                "type": {
                                                    "kind": 134234345,
                                                    "flags": 2097216,
                                                    "start": 169,
                                                    "end": 176
                                                },
                                                "flags": 2097152,
                                                "start": 169,
                                                "end": 176
                                            },
                                            "right": null,
                                            "flags": 32,
                                            "start": 164,
                                            "end": 176
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 164,
                                    "end": 177
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 179,
                                        "end": 179
                                    },
                                    "flags": 32,
                                    "start": 177,
                                    "end": 180
                                },
                                "flags": 0,
                                "start": 163,
                                "end": 180
                            },
                            "flags": 0,
                            "start": 158,
                            "end": 180
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
                                    "text": "m2",
                                    "rawText": "m2",
                                    "flags": 96,
                                    "start": 180,
                                    "end": 186
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
                                                "text": "this",
                                                "rawText": "this",
                                                "flags": 96,
                                                "start": 187,
                                                "end": 191
                                            },
                                            "optionalToken": null,
                                            "type": {
                                                "kind": 139,
                                                "bitwiseOrToken": null,
                                                "bitwiseAndToken": null,
                                                "type": {
                                                    "kind": 134234345,
                                                    "flags": 2097216,
                                                    "start": 192,
                                                    "end": 199
                                                },
                                                "flags": 2097152,
                                                "start": 192,
                                                "end": 199
                                            },
                                            "right": null,
                                            "flags": 32,
                                            "start": 187,
                                            "end": 199
                                        },
                                        {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "start": 200,
                                            "end": 202
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 96,
                                    "start": 187,
                                    "end": 203
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 205,
                                        "end": 205
                                    },
                                    "flags": 32,
                                    "start": 203,
                                    "end": 206
                                },
                                "flags": 0,
                                "start": 186,
                                "end": 206
                            },
                            "flags": 0,
                            "start": 180,
                            "end": 206
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
                                    "text": "m3",
                                    "rawText": "m3",
                                    "flags": 96,
                                    "start": 206,
                                    "end": 212
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
                                                "text": "this",
                                                "rawText": "this",
                                                "flags": 96,
                                                "start": 213,
                                                "end": 217
                                            },
                                            "optionalToken": null,
                                            "type": {
                                                "kind": 139,
                                                "bitwiseOrToken": null,
                                                "bitwiseAndToken": null,
                                                "type": {
                                                    "kind": 134234345,
                                                    "flags": 2097216,
                                                    "start": 218,
                                                    "end": 225
                                                },
                                                "flags": 2097152,
                                                "start": 218,
                                                "end": 225
                                            },
                                            "right": null,
                                            "flags": 32,
                                            "start": 213,
                                            "end": 225
                                        },
                                        {
                                            "kind": 281,
                                            "ellipsisToken": {
                                                "kind": 524302,
                                                "flags": 64,
                                                "start": 226,
                                                "end": 230
                                            },
                                            "left": {
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 96,
                                                "start": 230,
                                                "end": 231
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "right": null,
                                            "flags": 34,
                                            "start": 226,
                                            "end": 231
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 34,
                                    "start": 213,
                                    "end": 232
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 234,
                                        "end": 234
                                    },
                                    "flags": 32,
                                    "start": 232,
                                    "end": 235
                                },
                                "flags": 0,
                                "start": 212,
                                "end": 235
                            },
                            "flags": 0,
                            "start": 206,
                            "end": 235
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
                                    "text": "m4",
                                    "rawText": "m4",
                                    "flags": 96,
                                    "start": 235,
                                    "end": 241
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
                                                "text": "this",
                                                "rawText": "this",
                                                "flags": 96,
                                                "start": 242,
                                                "end": 246
                                            },
                                            "optionalToken": null,
                                            "type": {
                                                "kind": 139,
                                                "bitwiseOrToken": null,
                                                "bitwiseAndToken": null,
                                                "type": {
                                                    "kind": 134234345,
                                                    "flags": 2097216,
                                                    "start": 247,
                                                    "end": 254
                                                },
                                                "flags": 2097152,
                                                "start": 247,
                                                "end": 254
                                            },
                                            "right": null,
                                            "flags": 32,
                                            "start": 242,
                                            "end": 254
                                        },
                                        {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "start": 255,
                                            "end": 257
                                        },
                                        {
                                            "kind": 134299649,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 96,
                                            "start": 258,
                                            "end": 260
                                        },
                                        {
                                            "kind": 281,
                                            "ellipsisToken": {
                                                "kind": 524302,
                                                "flags": 64,
                                                "start": 261,
                                                "end": 265
                                            },
                                            "left": {
                                                "kind": 134299649,
                                                "text": "c",
                                                "rawText": "c",
                                                "flags": 96,
                                                "start": 265,
                                                "end": 266
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "right": null,
                                            "flags": 34,
                                            "start": 261,
                                            "end": 266
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 98,
                                    "start": 242,
                                    "end": 267
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 269,
                                        "end": 269
                                    },
                                    "flags": 32,
                                    "start": 267,
                                    "end": 270
                                },
                                "flags": 0,
                                "start": 241,
                                "end": 270
                            },
                            "flags": 0,
                            "start": 235,
                            "end": 270
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
                                    "text": "m5",
                                    "rawText": "m5",
                                    "flags": 96,
                                    "start": 270,
                                    "end": 276
                                },
                                "typeParameters": {
                                    "kind": 307,
                                    "typeParameters": [
                                        {
                                            "kind": 146,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "T",
                                                "rawText": "T",
                                                "flags": 96,
                                                "start": 277,
                                                "end": 278
                                            },
                                            "type": null,
                                            "defaultType": null,
                                            "flags": 2097152,
                                            "start": 277,
                                            "end": 278
                                        }
                                    ],
                                    "flags": 2097152,
                                    "start": 276,
                                    "end": 279
                                },
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [
                                        {
                                            "kind": 281,
                                            "ellipsisToken": null,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "this",
                                                "rawText": "this",
                                                "flags": 96,
                                                "start": 280,
                                                "end": 284
                                            },
                                            "optionalToken": null,
                                            "type": {
                                                "kind": 139,
                                                "bitwiseOrToken": null,
                                                "bitwiseAndToken": null,
                                                "type": {
                                                    "kind": 144,
                                                    "id": {
                                                        "kind": 134299649,
                                                        "text": "T",
                                                        "rawText": "T",
                                                        "flags": 96,
                                                        "start": 285,
                                                        "end": 287
                                                    },
                                                    "typeParameters": null,
                                                    "flags": 2097152,
                                                    "start": 285,
                                                    "end": 287
                                                },
                                                "flags": 2097152,
                                                "start": 285,
                                                "end": 287
                                            },
                                            "right": null,
                                            "flags": 32,
                                            "start": 280,
                                            "end": 287
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 280,
                                    "end": 288
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 290,
                                        "end": 290
                                    },
                                    "flags": 32,
                                    "start": 288,
                                    "end": 291
                                },
                                "flags": 0,
                                "start": 276,
                                "end": 291
                            },
                            "flags": 0,
                            "start": 270,
                            "end": 291
                        }
                    ],
                    "flags": 32,
                    "start": 158,
                    "end": 291
                },
                "flags": 156,
                "start": 32,
                "end": 294
            },
            "flags": 17,
            "start": 145,
            "end": 294
        }
    ],
    "isModule": false,
    "source": "declare class one {\n  m1(this: string): void,\n  m2(this: string, a: number): void,\n  m3(this: string, ...a: any): void,\n  m4<T>(this: T): void,\n}\n\nclass two {\n  m1(this: number) {}\n\n  m2(this: number, a) {}\n\n  m3(this: number, ...a) {}\n\n  m4(this: number, a, b, ...c) {}\n\n  m5<T>(this: T) {}\n\n}\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 295
}
```

### Printed

```javascript

declare class one TODO!
class two {
  m1(this) {}
  m2(this, a) {}
  m3(this, ...a) {}
  m4(this, a, b, ...c) {}
  m5(this) {}
}
```

### Diagnostics

```javascript
✔ No errors
```

