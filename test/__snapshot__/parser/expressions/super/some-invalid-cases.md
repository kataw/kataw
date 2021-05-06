# Kataw parser test case

## Input

`````js
class x extends super.foo { };
class x extends super.foo y { };
class x extends feh(super.foo) { };
class x extends feh(super.foo y) { };
class x { foo(super.foo){} };
class x { super.foo(){} };
class x { [super.foo](){} };
class x { [super.foo y](){} };
class f { constructor(){ class super.foo { }  }};
class f { constructor(){ class x extends super.foo y { }  }};
class f { constructor(){ class x extends feh(super.foo y) { }  }};
class f { constructor(){ class x { foo(super.foo){} }  }};
x={ foo: function(){ super.foo; }};
g=function f(x = super()){ };
g={f: function f(){ super() }];
x={constructor(){ super(); }};
function f(x = super()){ };
function f(){ super(); };
const x = 5 + super();;
let x = { foo(){ super(); } };
`````

## Output

### Hybrid CST

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
                "flags": 0,
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
            "classHeritage": {
                "kind": 279,
                "extendsKeyword": {
                    "kind": 4194391,
                    "flags": 0,
                    "start": 7,
                    "end": 15
                },
                "expression": {
                    "kind": 129,
                    "member": {
                        "kind": 225,
                        "superKeyword": {
                            "kind": 4259935,
                            "flags": 0,
                            "start": 15,
                            "end": 21
                        },
                        "flags": 96,
                        "start": 15,
                        "end": 21
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "foo",
                        "rawText": "foo",
                        "flags": 96,
                        "start": 22,
                        "end": 25
                    },
                    "flags": 32,
                    "start": 15,
                    "end": 25
                },
                "typeParameter": null,
                "flags": 16,
                "start": 15,
                "end": 25
            },
            "members": {
                "kind": 277,
                "elements": [],
                "flags": 32,
                "start": 27,
                "end": 29
            },
            "flags": 16,
            "start": 0,
            "end": 29
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 29,
            "end": 30
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 1,
                "start": 30,
                "end": 36
            },
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 36,
                "end": 38
            },
            "typeParameters": null,
            "classHeritage": {
                "kind": 279,
                "extendsKeyword": {
                    "kind": 4194391,
                    "flags": 0,
                    "start": 38,
                    "end": 46
                },
                "expression": {
                    "kind": 129,
                    "member": {
                        "kind": 225,
                        "superKeyword": {
                            "kind": 4259935,
                            "flags": 0,
                            "start": 46,
                            "end": 52
                        },
                        "flags": 96,
                        "start": 46,
                        "end": 52
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "foo",
                        "rawText": "foo",
                        "flags": 96,
                        "start": 53,
                        "end": 56
                    },
                    "flags": 32,
                    "start": 46,
                    "end": 56
                },
                "typeParameter": null,
                "flags": 16,
                "start": 46,
                "end": 56
            },
            "members": {
                "kind": 277,
                "elements": [],
                "flags": 32,
                "start": 30,
                "end": 30
            },
            "flags": 16,
            "start": 30,
            "end": 56
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "y",
                "rawText": "y",
                "flags": 96,
                "start": 56,
                "end": 58
            },
            "flags": 16,
            "start": 56,
            "end": 58
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "flags": 16,
                "start": 60,
                "end": 60
            },
            "flags": 16,
            "start": 58,
            "end": 62
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 62,
            "end": 63
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 1,
                "start": 63,
                "end": 69
            },
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 69,
                "end": 71
            },
            "typeParameters": null,
            "classHeritage": {
                "kind": 279,
                "extendsKeyword": {
                    "kind": 4194391,
                    "flags": 0,
                    "start": 71,
                    "end": 79
                },
                "expression": {
                    "kind": 131,
                    "expression": {
                        "kind": 134299649,
                        "text": "feh",
                        "rawText": "feh",
                        "flags": 96,
                        "start": 79,
                        "end": 83
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [
                            {
                                "kind": 129,
                                "member": {
                                    "kind": 225,
                                    "superKeyword": {
                                        "kind": 4259935,
                                        "flags": 0,
                                        "start": 84,
                                        "end": 89
                                    },
                                    "flags": 96,
                                    "start": 84,
                                    "end": 89
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 96,
                                    "start": 90,
                                    "end": 93
                                },
                                "flags": 32,
                                "start": 84,
                                "end": 93
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 84,
                        "end": 93
                    },
                    "flags": 32,
                    "start": 79,
                    "end": 94
                },
                "typeParameter": null,
                "flags": 16,
                "start": 79,
                "end": 94
            },
            "members": {
                "kind": 277,
                "elements": [],
                "flags": 32,
                "start": 96,
                "end": 98
            },
            "flags": 16,
            "start": 63,
            "end": 98
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 98,
            "end": 99
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 1,
                "start": 99,
                "end": 105
            },
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 105,
                "end": 107
            },
            "typeParameters": null,
            "classHeritage": {
                "kind": 279,
                "extendsKeyword": {
                    "kind": 4194391,
                    "flags": 0,
                    "start": 107,
                    "end": 115
                },
                "expression": {
                    "kind": 131,
                    "expression": {
                        "kind": 134299649,
                        "text": "feh",
                        "rawText": "feh",
                        "flags": 96,
                        "start": 115,
                        "end": 119
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [
                            {
                                "kind": 129,
                                "member": {
                                    "kind": 225,
                                    "superKeyword": {
                                        "kind": 4259935,
                                        "flags": 0,
                                        "start": 120,
                                        "end": 125
                                    },
                                    "flags": 96,
                                    "start": 120,
                                    "end": 125
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 96,
                                    "start": 126,
                                    "end": 129
                                },
                                "flags": 32,
                                "start": 120,
                                "end": 129
                            },
                            {
                                "kind": 134299649,
                                "text": "y",
                                "rawText": "y",
                                "flags": 96,
                                "start": 129,
                                "end": 131
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 120,
                        "end": 131
                    },
                    "flags": 32,
                    "start": 115,
                    "end": 132
                },
                "typeParameter": null,
                "flags": 16,
                "start": 115,
                "end": 132
            },
            "members": {
                "kind": 277,
                "elements": [],
                "flags": 32,
                "start": 134,
                "end": 136
            },
            "flags": 16,
            "start": 99,
            "end": 136
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 136,
            "end": 137
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 1,
                "start": 137,
                "end": 143
            },
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 143,
                "end": 145
            },
            "typeParameters": null,
            "classHeritage": null,
            "members": {
                "kind": 277,
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
                                "start": 147,
                                "end": 151
                            },
                            "typeParameters": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
                                "start": 152,
                                "end": 157
                            },
                            "type": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "start": 152,
                                    "end": 152
                                },
                                "flags": 32,
                                "start": 152,
                                "end": 152
                            },
                            "flags": 0,
                            "start": 151,
                            "end": 152
                        },
                        "flags": 0,
                        "start": 147,
                        "end": 152
                    },
                    {
                        "kind": 280,
                        "decorators": null,
                        "declaredToken": null,
                        "staticToken": null,
                        "asyncKeyword": null,
                        "key": {
                            "kind": 134299649,
                            "text": "super",
                            "rawText": "super",
                            "flags": 96,
                            "start": 152,
                            "end": 157
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 32,
                        "start": 152,
                        "end": 157
                    }
                ],
                "flags": 32,
                "start": 147,
                "end": 157
            },
            "flags": 16,
            "start": 137,
            "end": 157
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "foo",
                "rawText": "foo",
                "flags": 96,
                "start": 158,
                "end": 161
            },
            "flags": 16,
            "start": 158,
            "end": 161
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "flags": 16,
                "start": 163,
                "end": 163
            },
            "flags": 16,
            "start": 162,
            "end": 164
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 166,
            "end": 167
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 1,
                "start": 167,
                "end": 173
            },
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 173,
                "end": 175
            },
            "typeParameters": null,
            "classHeritage": null,
            "members": {
                "kind": 277,
                "elements": [
                    {
                        "kind": 280,
                        "decorators": null,
                        "declaredToken": null,
                        "staticToken": null,
                        "asyncKeyword": null,
                        "key": {
                            "kind": 134299649,
                            "text": "super",
                            "rawText": "super",
                            "flags": 96,
                            "start": 177,
                            "end": 183
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 32,
                        "start": 177,
                        "end": 183
                    }
                ],
                "flags": 32,
                "start": 177,
                "end": 183
            },
            "flags": 16,
            "start": 167,
            "end": 183
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 96,
                    "start": 184,
                    "end": 187
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 188,
                    "end": 188
                },
                "flags": 32,
                "start": 184,
                "end": 189
            },
            "flags": 16,
            "start": 184,
            "end": 189
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "flags": 16,
                "start": 190,
                "end": 190
            },
            "flags": 16,
            "start": 189,
            "end": 191
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 193,
            "end": 194
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 1,
                "start": 194,
                "end": 200
            },
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 200,
                "end": 202
            },
            "typeParameters": null,
            "classHeritage": null,
            "members": {
                "kind": 277,
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
                                "kind": 194,
                                "expression": {
                                    "kind": 129,
                                    "member": {
                                        "kind": 225,
                                        "superKeyword": {
                                            "kind": 4259935,
                                            "flags": 0,
                                            "start": 206,
                                            "end": 211
                                        },
                                        "flags": 96,
                                        "start": 206,
                                        "end": 211
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "foo",
                                        "rawText": "foo",
                                        "flags": 96,
                                        "start": 212,
                                        "end": 215
                                    },
                                    "flags": 32,
                                    "start": 206,
                                    "end": 215
                                },
                                "flags": 32,
                                "start": 204,
                                "end": 216
                            },
                            "typeParameters": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
                                "start": 217,
                                "end": 218
                            },
                            "type": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "start": 219,
                                    "end": 219
                                },
                                "flags": 32,
                                "start": 218,
                                "end": 220
                            },
                            "flags": 0,
                            "start": 216,
                            "end": 220
                        },
                        "flags": 0,
                        "start": 204,
                        "end": 220
                    }
                ],
                "flags": 32,
                "start": 204,
                "end": 222
            },
            "flags": 16,
            "start": 194,
            "end": 222
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 222,
            "end": 223
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 1,
                "start": 223,
                "end": 229
            },
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 229,
                "end": 231
            },
            "typeParameters": null,
            "classHeritage": null,
            "members": {
                "kind": 277,
                "elements": [
                    {
                        "kind": 280,
                        "decorators": null,
                        "declaredToken": null,
                        "staticToken": null,
                        "asyncKeyword": null,
                        "key": {
                            "kind": 194,
                            "expression": {
                                "kind": 129,
                                "member": {
                                    "kind": 225,
                                    "superKeyword": {
                                        "kind": 4259935,
                                        "flags": 0,
                                        "start": 235,
                                        "end": 240
                                    },
                                    "flags": 96,
                                    "start": 235,
                                    "end": 240
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 96,
                                    "start": 241,
                                    "end": 244
                                },
                                "flags": 32,
                                "start": 235,
                                "end": 244
                            },
                            "flags": 32,
                            "start": 233,
                            "end": 244
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 32,
                        "start": 233,
                        "end": 244
                    },
                    {
                        "kind": 280,
                        "decorators": null,
                        "declaredToken": null,
                        "staticToken": null,
                        "asyncKeyword": null,
                        "key": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 244,
                            "end": 246
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 32,
                        "start": 244,
                        "end": 246
                    }
                ],
                "flags": 32,
                "start": 233,
                "end": 246
            },
            "flags": 16,
            "start": 223,
            "end": 246
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": null,
                "typeParameters": null,
                "parameters": [],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 16637,
                    "text": "",
                    "flags": 68,
                    "start": 250,
                    "end": 250
                },
                "flags": 32,
                "start": 247,
                "end": 250
            },
            "flags": 16,
            "start": 247,
            "end": 250
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 253,
            "end": 254
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 1,
                "start": 254,
                "end": 260
            },
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 260,
                "end": 262
            },
            "typeParameters": null,
            "classHeritage": null,
            "members": {
                "kind": 277,
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
                                "start": 264,
                                "end": 276
                            },
                            "typeParameters": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 2048,
                                "start": 277,
                                "end": 278
                            },
                            "type": null,
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
                                                "flags": 0,
                                                "start": 279,
                                                "end": 285
                                            },
                                            "name": {
                                                "kind": 16637,
                                                "text": "",
                                                "flags": 68,
                                                "start": 285,
                                                "end": 285
                                            },
                                            "typeParameters": null,
                                            "classHeritage": null,
                                            "members": {
                                                "kind": 277,
                                                "elements": [],
                                                "flags": 32,
                                                "start": 279,
                                                "end": 279
                                            },
                                            "flags": 16,
                                            "start": 279,
                                            "end": 285
                                        },
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 129,
                                                "member": {
                                                    "kind": 225,
                                                    "superKeyword": {
                                                        "kind": 4259935,
                                                        "flags": 0,
                                                        "start": 285,
                                                        "end": 291
                                                    },
                                                    "flags": 96,
                                                    "start": 285,
                                                    "end": 291
                                                },
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "foo",
                                                    "rawText": "foo",
                                                    "flags": 96,
                                                    "start": 292,
                                                    "end": 295
                                                },
                                                "flags": 32,
                                                "start": 285,
                                                "end": 295
                                            },
                                            "flags": 16,
                                            "start": 285,
                                            "end": 295
                                        },
                                        {
                                            "kind": 249,
                                            "block": {
                                                "kind": 124,
                                                "statements": [],
                                                "flags": 16,
                                                "start": 297,
                                                "end": 297
                                            },
                                            "flags": 16,
                                            "start": 295,
                                            "end": 299
                                        }
                                    ],
                                    "flags": 32,
                                    "start": 279,
                                    "end": 299
                                },
                                "flags": 32,
                                "start": 278,
                                "end": 302
                            },
                            "flags": 2048,
                            "start": 276,
                            "end": 302
                        },
                        "flags": 2048,
                        "start": 264,
                        "end": 302
                    }
                ],
                "flags": 32,
                "start": 264,
                "end": 303
            },
            "flags": 16,
            "start": 254,
            "end": 303
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 303,
            "end": 304
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 1,
                "start": 304,
                "end": 310
            },
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 310,
                "end": 312
            },
            "typeParameters": null,
            "classHeritage": null,
            "members": {
                "kind": 277,
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
                                "start": 314,
                                "end": 326
                            },
                            "typeParameters": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 2048,
                                "start": 327,
                                "end": 328
                            },
                            "type": null,
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
                                                "flags": 0,
                                                "start": 329,
                                                "end": 335
                                            },
                                            "name": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 335,
                                                "end": 337
                                            },
                                            "typeParameters": null,
                                            "classHeritage": {
                                                "kind": 279,
                                                "extendsKeyword": {
                                                    "kind": 4194391,
                                                    "flags": 0,
                                                    "start": 337,
                                                    "end": 345
                                                },
                                                "expression": {
                                                    "kind": 129,
                                                    "member": {
                                                        "kind": 225,
                                                        "superKeyword": {
                                                            "kind": 4259935,
                                                            "flags": 0,
                                                            "start": 345,
                                                            "end": 351
                                                        },
                                                        "flags": 96,
                                                        "start": 345,
                                                        "end": 351
                                                    },
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "foo",
                                                        "rawText": "foo",
                                                        "flags": 96,
                                                        "start": 352,
                                                        "end": 355
                                                    },
                                                    "flags": 32,
                                                    "start": 345,
                                                    "end": 355
                                                },
                                                "typeParameter": null,
                                                "flags": 16,
                                                "start": 345,
                                                "end": 355
                                            },
                                            "members": {
                                                "kind": 277,
                                                "elements": [],
                                                "flags": 32,
                                                "start": 329,
                                                "end": 329
                                            },
                                            "flags": 16,
                                            "start": 329,
                                            "end": 355
                                        },
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "y",
                                                "rawText": "y",
                                                "flags": 96,
                                                "start": 355,
                                                "end": 357
                                            },
                                            "flags": 16,
                                            "start": 355,
                                            "end": 357
                                        },
                                        {
                                            "kind": 249,
                                            "block": {
                                                "kind": 124,
                                                "statements": [],
                                                "flags": 16,
                                                "start": 359,
                                                "end": 359
                                            },
                                            "flags": 16,
                                            "start": 357,
                                            "end": 361
                                        }
                                    ],
                                    "flags": 32,
                                    "start": 329,
                                    "end": 361
                                },
                                "flags": 32,
                                "start": 328,
                                "end": 364
                            },
                            "flags": 2048,
                            "start": 326,
                            "end": 364
                        },
                        "flags": 2048,
                        "start": 314,
                        "end": 364
                    }
                ],
                "flags": 32,
                "start": 314,
                "end": 365
            },
            "flags": 16,
            "start": 304,
            "end": 365
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 365,
            "end": 366
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 1,
                "start": 366,
                "end": 372
            },
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 372,
                "end": 374
            },
            "typeParameters": null,
            "classHeritage": null,
            "members": {
                "kind": 277,
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
                                "start": 376,
                                "end": 388
                            },
                            "typeParameters": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 2048,
                                "start": 389,
                                "end": 390
                            },
                            "type": null,
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
                                                "flags": 0,
                                                "start": 391,
                                                "end": 397
                                            },
                                            "name": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 397,
                                                "end": 399
                                            },
                                            "typeParameters": null,
                                            "classHeritage": {
                                                "kind": 279,
                                                "extendsKeyword": {
                                                    "kind": 4194391,
                                                    "flags": 0,
                                                    "start": 399,
                                                    "end": 407
                                                },
                                                "expression": {
                                                    "kind": 131,
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "feh",
                                                        "rawText": "feh",
                                                        "flags": 96,
                                                        "start": 407,
                                                        "end": 411
                                                    },
                                                    "argumentList": {
                                                        "kind": 256,
                                                        "elements": [
                                                            {
                                                                "kind": 129,
                                                                "member": {
                                                                    "kind": 225,
                                                                    "superKeyword": {
                                                                        "kind": 4259935,
                                                                        "flags": 0,
                                                                        "start": 412,
                                                                        "end": 417
                                                                    },
                                                                    "flags": 96,
                                                                    "start": 412,
                                                                    "end": 417
                                                                },
                                                                "expression": {
                                                                    "kind": 134299649,
                                                                    "text": "foo",
                                                                    "rawText": "foo",
                                                                    "flags": 96,
                                                                    "start": 418,
                                                                    "end": 421
                                                                },
                                                                "flags": 32,
                                                                "start": 412,
                                                                "end": 421
                                                            },
                                                            {
                                                                "kind": 134299649,
                                                                "text": "y",
                                                                "rawText": "y",
                                                                "flags": 96,
                                                                "start": 421,
                                                                "end": 423
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "start": 412,
                                                        "end": 423
                                                    },
                                                    "flags": 32,
                                                    "start": 407,
                                                    "end": 424
                                                },
                                                "typeParameter": null,
                                                "flags": 16,
                                                "start": 407,
                                                "end": 424
                                            },
                                            "members": {
                                                "kind": 277,
                                                "elements": [],
                                                "flags": 32,
                                                "start": 426,
                                                "end": 428
                                            },
                                            "flags": 16,
                                            "start": 391,
                                            "end": 428
                                        }
                                    ],
                                    "flags": 32,
                                    "start": 391,
                                    "end": 428
                                },
                                "flags": 32,
                                "start": 390,
                                "end": 431
                            },
                            "flags": 2048,
                            "start": 388,
                            "end": 431
                        },
                        "flags": 2048,
                        "start": 376,
                        "end": 431
                    }
                ],
                "flags": 32,
                "start": 376,
                "end": 432
            },
            "flags": 16,
            "start": 366,
            "end": 432
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 432,
            "end": 433
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 1,
                "start": 433,
                "end": 439
            },
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 439,
                "end": 441
            },
            "typeParameters": null,
            "classHeritage": null,
            "members": {
                "kind": 277,
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
                                "start": 443,
                                "end": 455
                            },
                            "typeParameters": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 2048,
                                "start": 456,
                                "end": 457
                            },
                            "type": null,
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
                                                "flags": 0,
                                                "start": 458,
                                                "end": 464
                                            },
                                            "name": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 464,
                                                "end": 466
                                            },
                                            "typeParameters": null,
                                            "classHeritage": null,
                                            "members": {
                                                "kind": 277,
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
                                                                "start": 468,
                                                                "end": 472
                                                            },
                                                            "typeParameters": null,
                                                            "formalParameters": {
                                                                "kind": 214,
                                                                "formalParameterList": [],
                                                                "trailingComma": false,
                                                                "flags": 0,
                                                                "start": 473,
                                                                "end": 478
                                                            },
                                                            "type": null,
                                                            "contents": {
                                                                "kind": 216,
                                                                "functionStatementList": {
                                                                    "kind": 217,
                                                                    "directives": [],
                                                                    "statements": [],
                                                                    "flags": 32,
                                                                    "start": 473,
                                                                    "end": 473
                                                                },
                                                                "flags": 32,
                                                                "start": 473,
                                                                "end": 473
                                                            },
                                                            "flags": 0,
                                                            "start": 472,
                                                            "end": 473
                                                        },
                                                        "flags": 0,
                                                        "start": 468,
                                                        "end": 473
                                                    },
                                                    {
                                                        "kind": 280,
                                                        "decorators": null,
                                                        "declaredToken": null,
                                                        "staticToken": null,
                                                        "asyncKeyword": null,
                                                        "key": {
                                                            "kind": 134299649,
                                                            "text": "super",
                                                            "rawText": "super",
                                                            "flags": 96,
                                                            "start": 473,
                                                            "end": 478
                                                        },
                                                        "optionalToken": null,
                                                        "type": null,
                                                        "initializer": null,
                                                        "flags": 32,
                                                        "start": 473,
                                                        "end": 478
                                                    }
                                                ],
                                                "flags": 32,
                                                "start": 468,
                                                "end": 478
                                            },
                                            "flags": 16,
                                            "start": 458,
                                            "end": 478
                                        }
                                    ],
                                    "flags": 32,
                                    "start": 458,
                                    "end": 478
                                },
                                "flags": 32,
                                "start": 457,
                                "end": 478
                            },
                            "flags": 2048,
                            "start": 455,
                            "end": 478
                        },
                        "flags": 2048,
                        "start": 443,
                        "end": 478
                    }
                ],
                "flags": 32,
                "start": 443,
                "end": 478
            },
            "flags": 16,
            "start": 433,
            "end": 478
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "foo",
                "rawText": "foo",
                "flags": 96,
                "start": 479,
                "end": 482
            },
            "flags": 16,
            "start": 479,
            "end": 482
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "flags": 16,
                "start": 484,
                "end": 484
            },
            "flags": 16,
            "start": 483,
            "end": 485
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 491,
            "end": 492
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
                    "start": 492,
                    "end": 494
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 494,
                    "end": 495
                },
                "right": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 219,
                                "generatorToken": null,
                                "left": {
                                    "kind": 134299649,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 96,
                                    "start": 496,
                                    "end": 500
                                },
                                "right": {
                                    "kind": 177,
                                    "asyncKeyword": null,
                                    "functionKeyword": {
                                        "kind": 37822554,
                                        "flags": 0,
                                        "start": 501,
                                        "end": 510
                                    },
                                    "generatorToken": null,
                                    "name": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 510,
                                        "end": 512
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
                                                        "kind": 129,
                                                        "member": {
                                                            "kind": 225,
                                                            "superKeyword": {
                                                                "kind": 4259935,
                                                                "flags": 0,
                                                                "start": 513,
                                                                "end": 519
                                                            },
                                                            "flags": 96,
                                                            "start": 513,
                                                            "end": 519
                                                        },
                                                        "expression": {
                                                            "kind": 134299649,
                                                            "text": "foo",
                                                            "rawText": "foo",
                                                            "flags": 96,
                                                            "start": 520,
                                                            "end": 523
                                                        },
                                                        "flags": 32,
                                                        "start": 513,
                                                        "end": 523
                                                    },
                                                    "flags": 16,
                                                    "start": 513,
                                                    "end": 524
                                                }
                                            ],
                                            "flags": 32,
                                            "start": 513,
                                            "end": 524
                                        },
                                        "flags": 32,
                                        "start": 512,
                                        "end": 526
                                    },
                                    "typeParameters": null,
                                    "returnType": null,
                                    "flags": 32,
                                    "start": 501,
                                    "end": 526
                                },
                                "flags": 32,
                                "start": 496,
                                "end": 526
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 496,
                        "end": 526
                    },
                    "flags": 32,
                    "start": 495,
                    "end": 527
                },
                "flags": 32,
                "start": 492,
                "end": 527
            },
            "flags": 16,
            "start": 492,
            "end": 528
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "g",
                    "rawText": "g",
                    "flags": 96,
                    "start": 528,
                    "end": 530
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 530,
                    "end": 531
                },
                "right": {
                    "kind": 177,
                    "asyncKeyword": null,
                    "functionKeyword": {
                        "kind": 37822554,
                        "flags": 0,
                        "start": 531,
                        "end": 539
                    },
                    "generatorToken": null,
                    "name": {
                        "kind": 134299649,
                        "text": "f",
                        "rawText": "f",
                        "flags": 96,
                        "start": 539,
                        "end": 541
                    },
                    "formalParameters": {
                        "kind": 214,
                        "formalParameterList": [
                            {
                                "kind": 215,
                                "ellipsisToken": null,
                                "binding": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 542,
                                    "end": 543
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": {
                                    "kind": 131,
                                    "expression": {
                                        "kind": 225,
                                        "superKeyword": {
                                            "kind": 4259935,
                                            "flags": 0,
                                            "start": 545,
                                            "end": 551
                                        },
                                        "flags": 96,
                                        "start": 545,
                                        "end": 551
                                    },
                                    "argumentList": {
                                        "kind": 256,
                                        "elements": [],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 552,
                                        "end": 552
                                    },
                                    "flags": 32,
                                    "start": 545,
                                    "end": 553
                                },
                                "flags": 34,
                                "start": 542,
                                "end": 553
                            }
                        ],
                        "trailingComma": false,
                        "flags": 34,
                        "start": 541,
                        "end": 554
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [],
                            "flags": 32,
                            "start": 555,
                            "end": 555
                        },
                        "flags": 32,
                        "start": 554,
                        "end": 557
                    },
                    "typeParameters": null,
                    "returnType": null,
                    "flags": 32,
                    "start": 531,
                    "end": 557
                },
                "flags": 32,
                "start": 528,
                "end": 557
            },
            "flags": 16,
            "start": 528,
            "end": 558
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "g",
                    "rawText": "g",
                    "flags": 96,
                    "start": 558,
                    "end": 560
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 560,
                    "end": 561
                },
                "right": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 219,
                                "generatorToken": null,
                                "left": {
                                    "kind": 134299649,
                                    "text": "f",
                                    "rawText": "f",
                                    "flags": 96,
                                    "start": 562,
                                    "end": 563
                                },
                                "right": {
                                    "kind": 177,
                                    "asyncKeyword": null,
                                    "functionKeyword": {
                                        "kind": 37822554,
                                        "flags": 0,
                                        "start": 564,
                                        "end": 573
                                    },
                                    "generatorToken": null,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "f",
                                        "rawText": "f",
                                        "flags": 96,
                                        "start": 573,
                                        "end": 575
                                    },
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 575,
                                        "end": 577
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
                                                        "kind": 131,
                                                        "expression": {
                                                            "kind": 225,
                                                            "superKeyword": {
                                                                "kind": 4259935,
                                                                "flags": 0,
                                                                "start": 578,
                                                                "end": 584
                                                            },
                                                            "flags": 96,
                                                            "start": 578,
                                                            "end": 584
                                                        },
                                                        "argumentList": {
                                                            "kind": 256,
                                                            "elements": [],
                                                            "trailingComma": false,
                                                            "flags": 32,
                                                            "start": 585,
                                                            "end": 585
                                                        },
                                                        "flags": 32,
                                                        "start": 578,
                                                        "end": 586
                                                    },
                                                    "flags": 16,
                                                    "start": 578,
                                                    "end": 586
                                                }
                                            ],
                                            "flags": 32,
                                            "start": 578,
                                            "end": 586
                                        },
                                        "flags": 32,
                                        "start": 577,
                                        "end": 588
                                    },
                                    "typeParameters": null,
                                    "returnType": null,
                                    "flags": 32,
                                    "start": 564,
                                    "end": 588
                                },
                                "flags": 32,
                                "start": 562,
                                "end": 588
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 562,
                        "end": 588
                    },
                    "flags": 32,
                    "start": 561,
                    "end": 588
                },
                "flags": 32,
                "start": 558,
                "end": 588
            },
            "flags": 16,
            "start": 558,
            "end": 588
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 589,
            "end": 590
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
                    "start": 590,
                    "end": 592
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 592,
                    "end": 593
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
                                        "text": "constructor",
                                        "rawText": "constructor",
                                        "flags": 96,
                                        "start": 594,
                                        "end": 605
                                    },
                                    "typeParameters": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 606,
                                        "end": 607
                                    },
                                    "type": null,
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
                                                                "flags": 0,
                                                                "start": 608,
                                                                "end": 614
                                                            },
                                                            "flags": 96,
                                                            "start": 608,
                                                            "end": 614
                                                        },
                                                        "argumentList": {
                                                            "kind": 256,
                                                            "elements": [],
                                                            "trailingComma": false,
                                                            "flags": 32,
                                                            "start": 615,
                                                            "end": 615
                                                        },
                                                        "flags": 32,
                                                        "start": 608,
                                                        "end": 616
                                                    },
                                                    "flags": 16,
                                                    "start": 608,
                                                    "end": 617
                                                }
                                            ],
                                            "flags": 32,
                                            "start": 608,
                                            "end": 617
                                        },
                                        "flags": 32,
                                        "start": 607,
                                        "end": 619
                                    },
                                    "flags": 32,
                                    "start": 605,
                                    "end": 619
                                },
                                "flags": 32,
                                "start": 594,
                                "end": 619
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 594,
                        "end": 619
                    },
                    "flags": 32,
                    "start": 593,
                    "end": 620
                },
                "flags": 32,
                "start": 590,
                "end": 620
            },
            "flags": 16,
            "start": 590,
            "end": 621
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 1,
                "start": 621,
                "end": 630
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 630,
                "end": 632
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [
                    {
                        "kind": 215,
                        "ellipsisToken": null,
                        "binding": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 633,
                            "end": 634
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 131,
                            "expression": {
                                "kind": 225,
                                "superKeyword": {
                                    "kind": 4259935,
                                    "flags": 0,
                                    "start": 636,
                                    "end": 642
                                },
                                "flags": 96,
                                "start": 636,
                                "end": 642
                            },
                            "argumentList": {
                                "kind": 256,
                                "elements": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 643,
                                "end": 643
                            },
                            "flags": 32,
                            "start": 636,
                            "end": 644
                        },
                        "flags": 34,
                        "start": 633,
                        "end": 644
                    }
                ],
                "trailingComma": false,
                "flags": 34,
                "start": 632,
                "end": 645
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 646,
                    "end": 646
                },
                "flags": 32,
                "start": 645,
                "end": 648
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 16,
            "start": 621,
            "end": 648
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 648,
            "end": 649
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 1,
                "start": 649,
                "end": 658
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 658,
                "end": 660
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
                "start": 660,
                "end": 662
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
                                "kind": 131,
                                "expression": {
                                    "kind": 225,
                                    "superKeyword": {
                                        "kind": 4259935,
                                        "flags": 0,
                                        "start": 663,
                                        "end": 669
                                    },
                                    "flags": 96,
                                    "start": 663,
                                    "end": 669
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 670,
                                    "end": 670
                                },
                                "flags": 32,
                                "start": 663,
                                "end": 671
                            },
                            "flags": 16,
                            "start": 663,
                            "end": 672
                        }
                    ],
                    "flags": 32,
                    "start": 663,
                    "end": 672
                },
                "flags": 32,
                "start": 662,
                "end": 674
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 16,
            "start": 649,
            "end": 674
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 674,
            "end": 675
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 1,
                "start": 675,
                "end": 681
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 681,
                            "end": 683
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 198,
                            "left": {
                                "kind": 201392130,
                                "text": 5,
                                "rawText": "5",
                                "flags": 96,
                                "start": 685,
                                "end": 687
                            },
                            "operatorToken": {
                                "kind": 34098,
                                "flags": 64,
                                "start": 687,
                                "end": 689
                            },
                            "right": {
                                "kind": 131,
                                "expression": {
                                    "kind": 225,
                                    "superKeyword": {
                                        "kind": 4259935,
                                        "flags": 0,
                                        "start": 689,
                                        "end": 695
                                    },
                                    "flags": 96,
                                    "start": 689,
                                    "end": 695
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 696,
                                    "end": 696
                                },
                                "flags": 32,
                                "start": 689,
                                "end": 697
                            },
                            "flags": 32,
                            "start": 685,
                            "end": 697
                        },
                        "flags": 16,
                        "start": 681,
                        "end": 697
                    }
                ],
                "flags": 16777232,
                "start": 681,
                "end": 697
            },
            "flags": 33554448,
            "start": 675,
            "end": 698
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 698,
            "end": 699
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 81,
                "start": 699,
                "end": 703
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 703,
                            "end": 705
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
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
                                                "start": 709,
                                                "end": 713
                                            },
                                            "typeParameters": null,
                                            "formalParameters": {
                                                "kind": 214,
                                                "formalParameterList": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 714,
                                                "end": 715
                                            },
                                            "type": null,
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
                                                                        "flags": 0,
                                                                        "start": 716,
                                                                        "end": 722
                                                                    },
                                                                    "flags": 96,
                                                                    "start": 716,
                                                                    "end": 722
                                                                },
                                                                "argumentList": {
                                                                    "kind": 256,
                                                                    "elements": [],
                                                                    "trailingComma": false,
                                                                    "flags": 32,
                                                                    "start": 723,
                                                                    "end": 723
                                                                },
                                                                "flags": 32,
                                                                "start": 716,
                                                                "end": 724
                                                            },
                                                            "flags": 16,
                                                            "start": 716,
                                                            "end": 725
                                                        }
                                                    ],
                                                    "flags": 32,
                                                    "start": 716,
                                                    "end": 725
                                                },
                                                "flags": 32,
                                                "start": 715,
                                                "end": 727
                                            },
                                            "flags": 32,
                                            "start": 713,
                                            "end": 727
                                        },
                                        "flags": 32,
                                        "start": 709,
                                        "end": 727
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 709,
                                "end": 727
                            },
                            "flags": 32,
                            "start": 707,
                            "end": 729
                        },
                        "flags": 16,
                        "start": 703,
                        "end": 729
                    }
                ],
                "flags": 33554448,
                "start": 703,
                "end": 729
            },
            "flags": 33554448,
            "start": 699,
            "end": 730
        }
    ],
    "isModule": false,
    "source": "class x extends super.foo { };\nclass x extends super.foo y { };\nclass x extends feh(super.foo) { };\nclass x extends feh(super.foo y) { };\nclass x { foo(super.foo){} };\nclass x { super.foo(){} };\nclass x { [super.foo](){} };\nclass x { [super.foo y](){} };\nclass f { constructor(){ class super.foo { }  }};\nclass f { constructor(){ class x extends super.foo y { }  }};\nclass f { constructor(){ class x extends feh(super.foo y) { }  }};\nclass f { constructor(){ class x { foo(super.foo){} }  }};\nx={ foo: function(){ super.foo; }};\ng=function f(x = super()){ };\ng={f: function f(){ super() }];\nx={constructor(){ super(); }};\nfunction f(x = super()){ };\nfunction f(){ super(); };\nconst x = 5 + super();;\nlet x = { foo(){ super(); } };",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 730
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'super' can only be referenced in members of derived classes or object literal expressions - start: 21, end: 22
✖ 'super' can only be referenced in members of derived classes or object literal expressions - start: 52, end: 53
✖ Expected a `;` - start: 58, end: 60
✖ 'super' can only be referenced in members of derived classes or object literal expressions - start: 89, end: 90
✖ 'super' can only be referenced in members of derived classes or object literal expressions - start: 125, end: 126
✖ ',' expected - start: 129, end: 131
✖ Expected a ')' to match the '(' token here - start: 152, end: 157
✖ Unexpected token. - start: 152, end: 157
✖ The parser expected to find a '}' to match the '{' token here - start: 157, end: 158
✖ Expected a `;` - start: 161, end: 162
✖ Declaration or statement expected - start: 164, end: 166
✖ The parser expected to find a '}' to match the '{' token here - start: 183, end: 184
✖ Expected a `;` - start: 189, end: 190
✖ Declaration or statement expected - start: 191, end: 193
✖ 'super' can only be referenced in members of derived classes or object literal expressions - start: 211, end: 212
✖ 'super' can only be referenced in members of derived classes or object literal expressions - start: 240, end: 241
✖ Expected a computed property - start: 233, end: 246
✖ The parser expected to find a '}' to match the '{' token here - start: 246, end: 247
✖ Expression expected - start: 250, end: 251
✖ Declaration or statement expected - start: 251, end: 253
✖ Binding identifier expected - start: 285, end: 291
✖ Expected a `;` - start: 295, end: 297
✖ Expected a `;` - start: 357, end: 359
✖ ',' expected - start: 421, end: 423
✖ Expected a ')' to match the '(' token here - start: 473, end: 478
✖ Unexpected token. - start: 473, end: 478
✖ The parser expected to find a '}' to match the '{' token here - start: 478, end: 479
✖ Expected a `;` - start: 482, end: 483
✖ Declaration or statement expected - start: 485, end: 487
✖ Declaration or statement expected - start: 487, end: 490
✖ Declaration or statement expected - start: 490, end: 491
✖ 'super' can only be referenced in members of derived classes or object literal expressions - start: 519, end: 520
✖ 'super' can only be referenced in members of derived classes or object literal expressions - start: 551, end: 552
✖ 'super' can only be referenced in members of derived classes or object literal expressions - start: 584, end: 585
✖ ',' expected - start: 588, end: 589
✖ The parser expected to find a '}' to match the '{' token here - start: 588, end: 589
✖ 'super' can only be referenced in members of derived classes or object literal expressions - start: 614, end: 615
✖ 'super' can only be referenced in members of derived classes or object literal expressions - start: 642, end: 643
✖ 'super' can only be referenced in members of derived classes or object literal expressions - start: 669, end: 670
✖ 'super' can only be referenced in members of derived classes or object literal expressions - start: 695, end: 696
✖ 'super' can only be referenced in members of derived classes or object literal expressions - start: 722, end: 723

```

