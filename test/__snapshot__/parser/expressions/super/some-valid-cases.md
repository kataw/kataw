# Kataw parser test case

## Input

`````js
class x extends y { }

class x extends y { f(){} }

class x extends y { constructor() { super(); } }

class x { constructor(){ super.foo; }}

class x { foo(){ super.foo; }}

class x { foo(x=super.foo){ }}

x={ foo(a = super.foo){ }}

class x { constructor(){ super[foo]; }}

class x { foo(){ super[foo]; }}

class x { foo(x=super[foo]){ }}

x={ foo(){ super[foo]; }}

x={ foo(a = super[foo]){ }}

class x extends y { constructor(){ return (a=super()) => a; }}

class x extends y { constructor(){ return () => super[foo]; }}

class x { fo(){ return () => super.foo; }}

class x { dsda(){ return (a=super.foo) => a; }}

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
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": {
                    "kind": 279,
                    "extendsKeyword": {
                        "kind": 4194391,
                        "flags": 80,
                        "start": 7,
                        "end": 15
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "start": 15,
                        "end": 17
                    },
                    "typeParameter": null,
                    "flags": 16,
                    "start": 15,
                    "end": 17
                },
                "body": {
                    "kind": 303,
                    "elements": [],
                    "flags": 32,
                    "start": 19,
                    "end": 19
                },
                "flags": 7,
                "start": 32,
                "end": 21
            },
            "flags": 16,
            "start": 0,
            "end": 21
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "start": 21,
                "end": 28
            },
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 28,
                "end": 30
            },
            "typeParameters": null,
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
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "start": 38,
                        "end": 40
                    },
                    "typeParameter": null,
                    "flags": 16,
                    "start": 38,
                    "end": 40
                },
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
                                    "text": "f",
                                    "rawText": "f",
                                    "flags": 96,
                                    "start": 42,
                                    "end": 44
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 45,
                                    "end": 46
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 47,
                                        "end": 47
                                    },
                                    "flags": 32,
                                    "start": 46,
                                    "end": 48
                                },
                                "flags": 0,
                                "start": 44,
                                "end": 48
                            },
                            "flags": 0,
                            "start": 42,
                            "end": 48
                        }
                    ],
                    "flags": 32,
                    "start": 42,
                    "end": 48
                },
                "flags": 30,
                "start": 32,
                "end": 50
            },
            "flags": 17,
            "start": 21,
            "end": 50
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "start": 50,
                "end": 57
            },
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 57,
                "end": 59
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": {
                    "kind": 279,
                    "extendsKeyword": {
                        "kind": 4194391,
                        "flags": 80,
                        "start": 59,
                        "end": 67
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "start": 67,
                        "end": 69
                    },
                    "typeParameter": null,
                    "flags": 16,
                    "start": 67,
                    "end": 69
                },
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
                                    "text": "constructor",
                                    "rawText": "constructor",
                                    "flags": 96,
                                    "start": 71,
                                    "end": 83
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 2048,
                                    "start": 84,
                                    "end": 85
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
                                                    "kind": 131,
                                                    "expression": {
                                                        "kind": 225,
                                                        "superKeyword": {
                                                            "kind": 4259935,
                                                            "flags": 96,
                                                            "start": 87,
                                                            "end": 93
                                                        },
                                                        "flags": 96,
                                                        "start": 87,
                                                        "end": 93
                                                    },
                                                    "argumentList": {
                                                        "kind": 256,
                                                        "elements": [],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "start": 94,
                                                        "end": 94
                                                    },
                                                    "flags": 268435488,
                                                    "start": 87,
                                                    "end": 95
                                                },
                                                "flags": 16,
                                                "start": 87,
                                                "end": 96
                                            }
                                        ],
                                        "flags": 32,
                                        "start": 87,
                                        "end": 96
                                    },
                                    "flags": 32,
                                    "start": 85,
                                    "end": 98
                                },
                                "flags": 2048,
                                "start": 83,
                                "end": 98
                            },
                            "flags": 2048,
                            "start": 71,
                            "end": 98
                        }
                    ],
                    "flags": 32,
                    "start": 71,
                    "end": 98
                },
                "flags": 59,
                "start": 32,
                "end": 100
            },
            "flags": 17,
            "start": 50,
            "end": 100
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "start": 100,
                "end": 107
            },
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 107,
                "end": 109
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
                                    "text": "constructor",
                                    "rawText": "constructor",
                                    "flags": 96,
                                    "start": 111,
                                    "end": 123
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 2048,
                                    "start": 124,
                                    "end": 125
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
                                                    "kind": 129,
                                                    "member": {
                                                        "kind": 225,
                                                        "superKeyword": {
                                                            "kind": 4259935,
                                                            "flags": 96,
                                                            "start": 126,
                                                            "end": 132
                                                        },
                                                        "flags": 96,
                                                        "start": 126,
                                                        "end": 132
                                                    },
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "foo",
                                                        "rawText": "foo",
                                                        "flags": 96,
                                                        "start": 133,
                                                        "end": 136
                                                    },
                                                    "flags": 536870944,
                                                    "start": 126,
                                                    "end": 136
                                                },
                                                "flags": 16,
                                                "start": 126,
                                                "end": 137
                                            }
                                        ],
                                        "flags": 32,
                                        "start": 126,
                                        "end": 137
                                    },
                                    "flags": 32,
                                    "start": 125,
                                    "end": 139
                                },
                                "flags": 2048,
                                "start": 123,
                                "end": 139
                            },
                            "flags": 2048,
                            "start": 111,
                            "end": 139
                        }
                    ],
                    "flags": 32,
                    "start": 111,
                    "end": 139
                },
                "flags": 109,
                "start": 32,
                "end": 140
            },
            "flags": 17,
            "start": 100,
            "end": 140
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "start": 140,
                "end": 147
            },
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 147,
                "end": 149
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
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 96,
                                    "start": 151,
                                    "end": 155
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 156,
                                    "end": 157
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
                                                    "kind": 129,
                                                    "member": {
                                                        "kind": 225,
                                                        "superKeyword": {
                                                            "kind": 4259935,
                                                            "flags": 96,
                                                            "start": 158,
                                                            "end": 164
                                                        },
                                                        "flags": 96,
                                                        "start": 158,
                                                        "end": 164
                                                    },
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "foo",
                                                        "rawText": "foo",
                                                        "flags": 96,
                                                        "start": 165,
                                                        "end": 168
                                                    },
                                                    "flags": 536870944,
                                                    "start": 158,
                                                    "end": 168
                                                },
                                                "flags": 16,
                                                "start": 158,
                                                "end": 169
                                            }
                                        ],
                                        "flags": 32,
                                        "start": 158,
                                        "end": 169
                                    },
                                    "flags": 32,
                                    "start": 157,
                                    "end": 171
                                },
                                "flags": 0,
                                "start": 155,
                                "end": 171
                            },
                            "flags": 0,
                            "start": 151,
                            "end": 171
                        }
                    ],
                    "flags": 32,
                    "start": 151,
                    "end": 171
                },
                "flags": 149,
                "start": 32,
                "end": 172
            },
            "flags": 17,
            "start": 140,
            "end": 172
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "start": 172,
                "end": 179
            },
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 179,
                "end": 181
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
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 96,
                                    "start": 183,
                                    "end": 187
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
                                                "start": 188,
                                                "end": 189
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "right": {
                                                "kind": 129,
                                                "member": {
                                                    "kind": 225,
                                                    "superKeyword": {
                                                        "kind": 4259935,
                                                        "flags": 96,
                                                        "start": 190,
                                                        "end": 195
                                                    },
                                                    "flags": 96,
                                                    "start": 190,
                                                    "end": 195
                                                },
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "foo",
                                                    "rawText": "foo",
                                                    "flags": 96,
                                                    "start": 196,
                                                    "end": 199
                                                },
                                                "flags": 536870944,
                                                "start": 190,
                                                "end": 199
                                            },
                                            "flags": 34,
                                            "start": 188,
                                            "end": 199
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 34,
                                    "start": 188,
                                    "end": 200
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 201,
                                        "end": 201
                                    },
                                    "flags": 32,
                                    "start": 200,
                                    "end": 203
                                },
                                "flags": 0,
                                "start": 187,
                                "end": 203
                            },
                            "flags": 0,
                            "start": 183,
                            "end": 203
                        }
                    ],
                    "flags": 32,
                    "start": 183,
                    "end": 203
                },
                "flags": 181,
                "start": 32,
                "end": 204
            },
            "flags": 17,
            "start": 172,
            "end": 204
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 204,
                    "end": 207
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 207,
                    "end": 208
                },
                "right": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 257,
                                "asyncKeyword": null,
                                "generatorToken": null,
                                "getKeyword": null,
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "foo",
                                        "rawText": "foo",
                                        "flags": 96,
                                        "start": 209,
                                        "end": 213
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
                                                    "text": "a",
                                                    "rawText": "a",
                                                    "flags": 96,
                                                    "start": 214,
                                                    "end": 215
                                                },
                                                "optionalToken": null,
                                                "type": null,
                                                "right": {
                                                    "kind": 129,
                                                    "member": {
                                                        "kind": 225,
                                                        "superKeyword": {
                                                            "kind": 4259935,
                                                            "flags": 96,
                                                            "start": 217,
                                                            "end": 223
                                                        },
                                                        "flags": 96,
                                                        "start": 217,
                                                        "end": 223
                                                    },
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "foo",
                                                        "rawText": "foo",
                                                        "flags": 96,
                                                        "start": 224,
                                                        "end": 227
                                                    },
                                                    "flags": 536870944,
                                                    "start": 217,
                                                    "end": 227
                                                },
                                                "flags": 34,
                                                "start": 214,
                                                "end": 227
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 34,
                                        "start": 214,
                                        "end": 228
                                    },
                                    "returnType": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "start": 229,
                                            "end": 229
                                        },
                                        "flags": 32,
                                        "start": 228,
                                        "end": 231
                                    },
                                    "flags": 32,
                                    "start": 213,
                                    "end": 231
                                },
                                "flags": 32,
                                "start": 209,
                                "end": 231
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 209,
                        "end": 231
                    },
                    "flags": 48,
                    "start": 208,
                    "end": 232
                },
                "flags": 32,
                "start": 204,
                "end": 232
            },
            "flags": 16,
            "start": 204,
            "end": 232
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "start": 232,
                "end": 239
            },
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 239,
                "end": 241
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
                                    "text": "constructor",
                                    "rawText": "constructor",
                                    "flags": 96,
                                    "start": 243,
                                    "end": 255
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 2048,
                                    "start": 256,
                                    "end": 257
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
                                                    "kind": 536871042,
                                                    "member": {
                                                        "kind": 225,
                                                        "superKeyword": {
                                                            "kind": 4259935,
                                                            "flags": 96,
                                                            "start": 258,
                                                            "end": 264
                                                        },
                                                        "flags": 96,
                                                        "start": 258,
                                                        "end": 264
                                                    },
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "foo",
                                                        "rawText": "foo",
                                                        "flags": 96,
                                                        "start": 265,
                                                        "end": 268
                                                    },
                                                    "flags": 32,
                                                    "start": 258,
                                                    "end": 269
                                                },
                                                "flags": 16,
                                                "start": 258,
                                                "end": 270
                                            }
                                        ],
                                        "flags": 32,
                                        "start": 258,
                                        "end": 270
                                    },
                                    "flags": 32,
                                    "start": 257,
                                    "end": 272
                                },
                                "flags": 2048,
                                "start": 255,
                                "end": 272
                            },
                            "flags": 2048,
                            "start": 243,
                            "end": 272
                        }
                    ],
                    "flags": 32,
                    "start": 243,
                    "end": 272
                },
                "flags": 241,
                "start": 32,
                "end": 273
            },
            "flags": 17,
            "start": 232,
            "end": 273
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "start": 273,
                "end": 280
            },
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 280,
                "end": 282
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
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 96,
                                    "start": 284,
                                    "end": 288
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 289,
                                    "end": 290
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
                                                    "kind": 536871042,
                                                    "member": {
                                                        "kind": 225,
                                                        "superKeyword": {
                                                            "kind": 4259935,
                                                            "flags": 96,
                                                            "start": 291,
                                                            "end": 297
                                                        },
                                                        "flags": 96,
                                                        "start": 291,
                                                        "end": 297
                                                    },
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "foo",
                                                        "rawText": "foo",
                                                        "flags": 96,
                                                        "start": 298,
                                                        "end": 301
                                                    },
                                                    "flags": 32,
                                                    "start": 291,
                                                    "end": 302
                                                },
                                                "flags": 16,
                                                "start": 291,
                                                "end": 303
                                            }
                                        ],
                                        "flags": 32,
                                        "start": 291,
                                        "end": 303
                                    },
                                    "flags": 32,
                                    "start": 290,
                                    "end": 305
                                },
                                "flags": 0,
                                "start": 288,
                                "end": 305
                            },
                            "flags": 0,
                            "start": 284,
                            "end": 305
                        }
                    ],
                    "flags": 32,
                    "start": 284,
                    "end": 305
                },
                "flags": 282,
                "start": 32,
                "end": 306
            },
            "flags": 17,
            "start": 273,
            "end": 306
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "start": 306,
                "end": 313
            },
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 313,
                "end": 315
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
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 96,
                                    "start": 317,
                                    "end": 321
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
                                                "start": 322,
                                                "end": 323
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "right": {
                                                "kind": 536871042,
                                                "member": {
                                                    "kind": 225,
                                                    "superKeyword": {
                                                        "kind": 4259935,
                                                        "flags": 96,
                                                        "start": 324,
                                                        "end": 329
                                                    },
                                                    "flags": 96,
                                                    "start": 324,
                                                    "end": 329
                                                },
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "foo",
                                                    "rawText": "foo",
                                                    "flags": 96,
                                                    "start": 330,
                                                    "end": 333
                                                },
                                                "flags": 32,
                                                "start": 324,
                                                "end": 334
                                            },
                                            "flags": 34,
                                            "start": 322,
                                            "end": 334
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 34,
                                    "start": 322,
                                    "end": 335
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 336,
                                        "end": 336
                                    },
                                    "flags": 32,
                                    "start": 335,
                                    "end": 338
                                },
                                "flags": 0,
                                "start": 321,
                                "end": 338
                            },
                            "flags": 0,
                            "start": 317,
                            "end": 338
                        }
                    ],
                    "flags": 32,
                    "start": 317,
                    "end": 338
                },
                "flags": 315,
                "start": 32,
                "end": 339
            },
            "flags": 17,
            "start": 306,
            "end": 339
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 339,
                    "end": 342
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 342,
                    "end": 343
                },
                "right": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 257,
                                "asyncKeyword": null,
                                "generatorToken": null,
                                "getKeyword": null,
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "foo",
                                        "rawText": "foo",
                                        "flags": 96,
                                        "start": 344,
                                        "end": 348
                                    },
                                    "typeParameters": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 349,
                                        "end": 350
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
                                                        "kind": 536871042,
                                                        "member": {
                                                            "kind": 225,
                                                            "superKeyword": {
                                                                "kind": 4259935,
                                                                "flags": 96,
                                                                "start": 351,
                                                                "end": 357
                                                            },
                                                            "flags": 96,
                                                            "start": 351,
                                                            "end": 357
                                                        },
                                                        "expression": {
                                                            "kind": 134299649,
                                                            "text": "foo",
                                                            "rawText": "foo",
                                                            "flags": 96,
                                                            "start": 358,
                                                            "end": 361
                                                        },
                                                        "flags": 32,
                                                        "start": 351,
                                                        "end": 362
                                                    },
                                                    "flags": 16,
                                                    "start": 351,
                                                    "end": 363
                                                }
                                            ],
                                            "flags": 32,
                                            "start": 351,
                                            "end": 363
                                        },
                                        "flags": 32,
                                        "start": 350,
                                        "end": 365
                                    },
                                    "flags": 32,
                                    "start": 348,
                                    "end": 365
                                },
                                "flags": 32,
                                "start": 344,
                                "end": 365
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 344,
                        "end": 365
                    },
                    "flags": 48,
                    "start": 343,
                    "end": 366
                },
                "flags": 32,
                "start": 339,
                "end": 366
            },
            "flags": 16,
            "start": 339,
            "end": 366
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 366,
                    "end": 369
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 369,
                    "end": 370
                },
                "right": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 257,
                                "asyncKeyword": null,
                                "generatorToken": null,
                                "getKeyword": null,
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "foo",
                                        "rawText": "foo",
                                        "flags": 96,
                                        "start": 371,
                                        "end": 375
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
                                                    "text": "a",
                                                    "rawText": "a",
                                                    "flags": 96,
                                                    "start": 376,
                                                    "end": 377
                                                },
                                                "optionalToken": null,
                                                "type": null,
                                                "right": {
                                                    "kind": 536871042,
                                                    "member": {
                                                        "kind": 225,
                                                        "superKeyword": {
                                                            "kind": 4259935,
                                                            "flags": 96,
                                                            "start": 379,
                                                            "end": 385
                                                        },
                                                        "flags": 96,
                                                        "start": 379,
                                                        "end": 385
                                                    },
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "foo",
                                                        "rawText": "foo",
                                                        "flags": 96,
                                                        "start": 386,
                                                        "end": 389
                                                    },
                                                    "flags": 32,
                                                    "start": 379,
                                                    "end": 390
                                                },
                                                "flags": 34,
                                                "start": 376,
                                                "end": 390
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 34,
                                        "start": 376,
                                        "end": 391
                                    },
                                    "returnType": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "start": 392,
                                            "end": 392
                                        },
                                        "flags": 32,
                                        "start": 391,
                                        "end": 394
                                    },
                                    "flags": 32,
                                    "start": 375,
                                    "end": 394
                                },
                                "flags": 32,
                                "start": 371,
                                "end": 394
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 371,
                        "end": 394
                    },
                    "flags": 48,
                    "start": 370,
                    "end": 395
                },
                "flags": 32,
                "start": 366,
                "end": 395
            },
            "flags": 16,
            "start": 366,
            "end": 395
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "start": 395,
                "end": 402
            },
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 402,
                "end": 404
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": {
                    "kind": 279,
                    "extendsKeyword": {
                        "kind": 4194391,
                        "flags": 80,
                        "start": 404,
                        "end": 412
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "start": 412,
                        "end": 414
                    },
                    "typeParameter": null,
                    "flags": 16,
                    "start": 412,
                    "end": 414
                },
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
                                    "text": "constructor",
                                    "rawText": "constructor",
                                    "flags": 96,
                                    "start": 416,
                                    "end": 428
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 2048,
                                    "start": 429,
                                    "end": 430
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
                                                    "start": 431,
                                                    "end": 438
                                                },
                                                "expression": {
                                                    "kind": 271,
                                                    "arrowToken": {
                                                        "kind": 10,
                                                        "flags": 64,
                                                        "start": 450,
                                                        "end": 453
                                                    },
                                                    "typeParameters": null,
                                                    "parameters": [
                                                        {
                                                            "kind": 281,
                                                            "ellipsisToken": null,
                                                            "left": {
                                                                "kind": 134299649,
                                                                "text": "a",
                                                                "rawText": "a",
                                                                "flags": 96,
                                                                "start": 440,
                                                                "end": 441
                                                            },
                                                            "optionalToken": null,
                                                            "type": null,
                                                            "right": {
                                                                "kind": 131,
                                                                "expression": {
                                                                    "kind": 225,
                                                                    "superKeyword": {
                                                                        "kind": 4259935,
                                                                        "flags": 96,
                                                                        "start": 442,
                                                                        "end": 447
                                                                    },
                                                                    "flags": 96,
                                                                    "start": 442,
                                                                    "end": 447
                                                                },
                                                                "argumentList": {
                                                                    "kind": 256,
                                                                    "elements": [],
                                                                    "trailingComma": false,
                                                                    "flags": 32,
                                                                    "start": 448,
                                                                    "end": 448
                                                                },
                                                                "flags": 268435488,
                                                                "start": 442,
                                                                "end": 449
                                                            },
                                                            "flags": 32,
                                                            "start": 438,
                                                            "end": 449
                                                        }
                                                    ],
                                                    "asyncKeyword": null,
                                                    "returnType": null,
                                                    "contents": {
                                                        "kind": 134299649,
                                                        "text": "a",
                                                        "rawText": "a",
                                                        "flags": 96,
                                                        "start": 453,
                                                        "end": 455
                                                    },
                                                    "flags": 34,
                                                    "start": 438,
                                                    "end": 455
                                                },
                                                "flags": 80,
                                                "start": 431,
                                                "end": 456
                                            }
                                        ],
                                        "flags": 32,
                                        "start": 431,
                                        "end": 456
                                    },
                                    "flags": 32,
                                    "start": 430,
                                    "end": 458
                                },
                                "flags": 2048,
                                "start": 428,
                                "end": 458
                            },
                            "flags": 2048,
                            "start": 416,
                            "end": 458
                        }
                    ],
                    "flags": 32,
                    "start": 416,
                    "end": 458
                },
                "flags": 404,
                "start": 32,
                "end": 459
            },
            "flags": 17,
            "start": 395,
            "end": 459
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "start": 459,
                "end": 466
            },
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 466,
                "end": 468
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": {
                    "kind": 279,
                    "extendsKeyword": {
                        "kind": 4194391,
                        "flags": 80,
                        "start": 468,
                        "end": 476
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "start": 476,
                        "end": 478
                    },
                    "typeParameter": null,
                    "flags": 16,
                    "start": 476,
                    "end": 478
                },
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
                                    "text": "constructor",
                                    "rawText": "constructor",
                                    "flags": 96,
                                    "start": 480,
                                    "end": 492
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 2048,
                                    "start": 493,
                                    "end": 494
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
                                                    "start": 495,
                                                    "end": 502
                                                },
                                                "expression": {
                                                    "kind": 271,
                                                    "arrowToken": {
                                                        "kind": 10,
                                                        "flags": 64,
                                                        "start": 505,
                                                        "end": 508
                                                    },
                                                    "typeParameters": null,
                                                    "parameters": [],
                                                    "asyncKeyword": null,
                                                    "returnType": null,
                                                    "contents": {
                                                        "kind": 536871042,
                                                        "member": {
                                                            "kind": 225,
                                                            "superKeyword": {
                                                                "kind": 4259935,
                                                                "flags": 96,
                                                                "start": 508,
                                                                "end": 514
                                                            },
                                                            "flags": 96,
                                                            "start": 508,
                                                            "end": 514
                                                        },
                                                        "expression": {
                                                            "kind": 134299649,
                                                            "text": "foo",
                                                            "rawText": "foo",
                                                            "flags": 96,
                                                            "start": 515,
                                                            "end": 518
                                                        },
                                                        "flags": 32,
                                                        "start": 508,
                                                        "end": 519
                                                    },
                                                    "flags": 32,
                                                    "start": 502,
                                                    "end": 519
                                                },
                                                "flags": 80,
                                                "start": 495,
                                                "end": 520
                                            }
                                        ],
                                        "flags": 32,
                                        "start": 495,
                                        "end": 520
                                    },
                                    "flags": 32,
                                    "start": 494,
                                    "end": 522
                                },
                                "flags": 2048,
                                "start": 492,
                                "end": 522
                            },
                            "flags": 2048,
                            "start": 480,
                            "end": 522
                        }
                    ],
                    "flags": 32,
                    "start": 480,
                    "end": 522
                },
                "flags": 468,
                "start": 32,
                "end": 523
            },
            "flags": 17,
            "start": 459,
            "end": 523
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "start": 523,
                "end": 530
            },
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 530,
                "end": 532
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
                                    "text": "fo",
                                    "rawText": "fo",
                                    "flags": 96,
                                    "start": 534,
                                    "end": 537
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 538,
                                    "end": 539
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
                                                    "start": 540,
                                                    "end": 547
                                                },
                                                "expression": {
                                                    "kind": 271,
                                                    "arrowToken": {
                                                        "kind": 10,
                                                        "flags": 64,
                                                        "start": 550,
                                                        "end": 553
                                                    },
                                                    "typeParameters": null,
                                                    "parameters": [],
                                                    "asyncKeyword": null,
                                                    "returnType": null,
                                                    "contents": {
                                                        "kind": 129,
                                                        "member": {
                                                            "kind": 225,
                                                            "superKeyword": {
                                                                "kind": 4259935,
                                                                "flags": 96,
                                                                "start": 553,
                                                                "end": 559
                                                            },
                                                            "flags": 96,
                                                            "start": 553,
                                                            "end": 559
                                                        },
                                                        "expression": {
                                                            "kind": 134299649,
                                                            "text": "foo",
                                                            "rawText": "foo",
                                                            "flags": 96,
                                                            "start": 560,
                                                            "end": 563
                                                        },
                                                        "flags": 536870944,
                                                        "start": 553,
                                                        "end": 563
                                                    },
                                                    "flags": 32,
                                                    "start": 547,
                                                    "end": 563
                                                },
                                                "flags": 80,
                                                "start": 540,
                                                "end": 564
                                            }
                                        ],
                                        "flags": 32,
                                        "start": 540,
                                        "end": 564
                                    },
                                    "flags": 32,
                                    "start": 539,
                                    "end": 566
                                },
                                "flags": 0,
                                "start": 537,
                                "end": 566
                            },
                            "flags": 0,
                            "start": 534,
                            "end": 566
                        }
                    ],
                    "flags": 32,
                    "start": 534,
                    "end": 566
                },
                "flags": 532,
                "start": 32,
                "end": 567
            },
            "flags": 17,
            "start": 523,
            "end": 567
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "start": 567,
                "end": 574
            },
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 574,
                "end": 576
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
                                    "text": "dsda",
                                    "rawText": "dsda",
                                    "flags": 96,
                                    "start": 578,
                                    "end": 583
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 584,
                                    "end": 585
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
                                                    "start": 586,
                                                    "end": 593
                                                },
                                                "expression": {
                                                    "kind": 271,
                                                    "arrowToken": {
                                                        "kind": 10,
                                                        "flags": 64,
                                                        "start": 607,
                                                        "end": 610
                                                    },
                                                    "typeParameters": null,
                                                    "parameters": [
                                                        {
                                                            "kind": 281,
                                                            "ellipsisToken": null,
                                                            "left": {
                                                                "kind": 134299649,
                                                                "text": "a",
                                                                "rawText": "a",
                                                                "flags": 96,
                                                                "start": 595,
                                                                "end": 596
                                                            },
                                                            "optionalToken": null,
                                                            "type": null,
                                                            "right": {
                                                                "kind": 129,
                                                                "member": {
                                                                    "kind": 225,
                                                                    "superKeyword": {
                                                                        "kind": 4259935,
                                                                        "flags": 96,
                                                                        "start": 597,
                                                                        "end": 602
                                                                    },
                                                                    "flags": 96,
                                                                    "start": 597,
                                                                    "end": 602
                                                                },
                                                                "expression": {
                                                                    "kind": 134299649,
                                                                    "text": "foo",
                                                                    "rawText": "foo",
                                                                    "flags": 96,
                                                                    "start": 603,
                                                                    "end": 606
                                                                },
                                                                "flags": 536870944,
                                                                "start": 597,
                                                                "end": 606
                                                            },
                                                            "flags": 32,
                                                            "start": 593,
                                                            "end": 606
                                                        }
                                                    ],
                                                    "asyncKeyword": null,
                                                    "returnType": null,
                                                    "contents": {
                                                        "kind": 134299649,
                                                        "text": "a",
                                                        "rawText": "a",
                                                        "flags": 96,
                                                        "start": 610,
                                                        "end": 612
                                                    },
                                                    "flags": 34,
                                                    "start": 593,
                                                    "end": 612
                                                },
                                                "flags": 80,
                                                "start": 586,
                                                "end": 613
                                            }
                                        ],
                                        "flags": 32,
                                        "start": 586,
                                        "end": 613
                                    },
                                    "flags": 32,
                                    "start": 585,
                                    "end": 615
                                },
                                "flags": 0,
                                "start": 583,
                                "end": 615
                            },
                            "flags": 0,
                            "start": 578,
                            "end": 615
                        }
                    ],
                    "flags": 32,
                    "start": 578,
                    "end": 615
                },
                "flags": 576,
                "start": 32,
                "end": 616
            },
            "flags": 17,
            "start": 567,
            "end": 616
        }
    ],
    "isModule": false,
    "source": "class x extends y { }\n\nclass x extends y { f(){} }\n\nclass x extends y { constructor() { super(); } }\n\nclass x { constructor(){ super.foo; }}\n\nclass x { foo(){ super.foo; }}\n\nclass x { foo(x=super.foo){ }}\n\nx={ foo(a = super.foo){ }}\n\nclass x { constructor(){ super[foo]; }}\n\nclass x { foo(){ super[foo]; }}\n\nclass x { foo(x=super[foo]){ }}\n\nx={ foo(){ super[foo]; }}\n\nx={ foo(a = super[foo]){ }}\n\nclass x extends y { constructor(){ return (a=super()) => a; }}\n\nclass x extends y { constructor(){ return () => super[foo]; }}\n\nclass x { fo(){ return () => super.foo; }}\n\nclass x { dsda(){ return (a=super.foo) => a; }}\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 617
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Duplicate identifier - start: 28, end: 30
✖ Duplicate identifier - start: 57, end: 59
✖ Duplicate identifier - start: 107, end: 109
✖ Duplicate identifier - start: 147, end: 149
✖ Duplicate identifier - start: 179, end: 181
✖ Duplicate identifier - start: 239, end: 241
✖ Duplicate identifier - start: 280, end: 282
✖ Duplicate identifier - start: 313, end: 315
✖ Duplicate identifier - start: 402, end: 404
✖ Duplicate identifier - start: 466, end: 468
✖ Duplicate identifier - start: 530, end: 532
✖ Duplicate identifier - start: 574, end: 576

```

