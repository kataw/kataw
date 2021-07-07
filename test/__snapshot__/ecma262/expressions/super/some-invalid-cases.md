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
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "transformFlags": 0,
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
                        "transformFlags": 0,
                        "start": 7,
                        "end": 15
                    },
                    "expression": {
                        "kind": 129,
                        "member": {
                            "kind": 4259935,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 15,
                            "end": 21
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 22,
                            "end": 25
                        },
                        "flags": 96,
                        "transformFlags": 2,
                        "start": 15,
                        "end": 25
                    },
                    "typeParameter": null,
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 15,
                    "end": 25
                },
                "body": {
                    "kind": 303,
                    "elements": [],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 27,
                    "end": 27
                },
                "flags": 7,
                "transformFlags": 0,
                "start": 32,
                "end": 29
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 29
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 29,
            "end": 30
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "transformFlags": 0,
                "start": 30,
                "end": 36
            },
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "transformFlags": 0,
                "start": 36,
                "end": 38
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": {
                    "kind": 279,
                    "extendsKeyword": {
                        "kind": 4194391,
                        "flags": 80,
                        "transformFlags": 0,
                        "start": 38,
                        "end": 46
                    },
                    "expression": {
                        "kind": 129,
                        "member": {
                            "kind": 4259935,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 46,
                            "end": 52
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 53,
                            "end": 56
                        },
                        "flags": 96,
                        "transformFlags": 2,
                        "start": 46,
                        "end": 56
                    },
                    "typeParameter": null,
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 46,
                    "end": 56
                },
                "body": {
                    "kind": 303,
                    "elements": [],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 38,
                    "end": 38
                },
                "flags": 38,
                "transformFlags": 0,
                "start": 32,
                "end": 38
            },
            "flags": 17,
            "transformFlags": 0,
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
                "transformFlags": 0,
                "start": 56,
                "end": 58
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 56,
            "end": 58
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "transformFlags": 0,
                "start": 60,
                "end": 60
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 58,
            "end": 62
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 62,
            "end": 63
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "transformFlags": 0,
                "start": 63,
                "end": 69
            },
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "transformFlags": 0,
                "start": 69,
                "end": 71
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": {
                    "kind": 279,
                    "extendsKeyword": {
                        "kind": 4194391,
                        "flags": 80,
                        "transformFlags": 0,
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
                            "transformFlags": 0,
                            "start": 79,
                            "end": 83
                        },
                        "argumentList": {
                            "kind": 256,
                            "elements": [
                                {
                                    "kind": 129,
                                    "member": {
                                        "kind": 4259935,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 84,
                                        "end": 89
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "foo",
                                        "rawText": "foo",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 90,
                                        "end": 93
                                    },
                                    "flags": 96,
                                    "transformFlags": 2,
                                    "start": 84,
                                    "end": 93
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 84,
                            "end": 93
                        },
                        "flags": 268435488,
                        "transformFlags": 1,
                        "start": 79,
                        "end": 94
                    },
                    "typeParameter": null,
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 79,
                    "end": 94
                },
                "body": {
                    "kind": 303,
                    "elements": [],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 96,
                    "end": 96
                },
                "flags": 71,
                "transformFlags": 0,
                "start": 32,
                "end": 98
            },
            "flags": 17,
            "transformFlags": 0,
            "start": 63,
            "end": 98
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 98,
            "end": 99
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "transformFlags": 0,
                "start": 99,
                "end": 105
            },
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "transformFlags": 0,
                "start": 105,
                "end": 107
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": {
                    "kind": 279,
                    "extendsKeyword": {
                        "kind": 4194391,
                        "flags": 80,
                        "transformFlags": 0,
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
                            "transformFlags": 0,
                            "start": 115,
                            "end": 119
                        },
                        "argumentList": {
                            "kind": 256,
                            "elements": [
                                {
                                    "kind": 129,
                                    "member": {
                                        "kind": 4259935,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 120,
                                        "end": 125
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "foo",
                                        "rawText": "foo",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 126,
                                        "end": 129
                                    },
                                    "flags": 96,
                                    "transformFlags": 2,
                                    "start": 120,
                                    "end": 129
                                },
                                {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 129,
                                    "end": 131
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 120,
                            "end": 131
                        },
                        "flags": 268435488,
                        "transformFlags": 1,
                        "start": 115,
                        "end": 132
                    },
                    "typeParameter": null,
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 115,
                    "end": 132
                },
                "body": {
                    "kind": 303,
                    "elements": [],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 134,
                    "end": 134
                },
                "flags": 107,
                "transformFlags": 0,
                "start": 32,
                "end": 136
            },
            "flags": 17,
            "transformFlags": 0,
            "start": 99,
            "end": 136
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 136,
            "end": 137
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "transformFlags": 0,
                "start": 137,
                "end": 143
            },
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "transformFlags": 0,
                "start": 143,
                "end": 145
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
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 147,
                                    "end": 151
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 152,
                                    "end": 157
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 152,
                                        "end": 152
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 152,
                                    "end": 152
                                },
                                "flags": 0,
                                "transformFlags": 0,
                                "start": 151,
                                "end": 152
                            },
                            "flags": 0,
                            "transformFlags": 0,
                            "start": 147,
                            "end": 152
                        },
                        {
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "super",
                                "rawText": "super",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 152,
                                "end": 157
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "flags": 32,
                            "transformFlags": 128,
                            "start": 152,
                            "end": 157
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 147,
                    "end": 157
                },
                "flags": 145,
                "transformFlags": 0,
                "start": 32,
                "end": 157
            },
            "flags": 17,
            "transformFlags": 0,
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
                "transformFlags": 0,
                "start": 158,
                "end": 161
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 158,
            "end": 161
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "transformFlags": 0,
                "start": 163,
                "end": 163
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 162,
            "end": 164
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 166,
            "end": 167
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "transformFlags": 0,
                "start": 167,
                "end": 173
            },
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "transformFlags": 0,
                "start": 173,
                "end": 175
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
                                "text": "super",
                                "rawText": "super",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 177,
                                "end": 183
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "flags": 32,
                            "transformFlags": 128,
                            "start": 177,
                            "end": 183
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 177,
                    "end": 183
                },
                "flags": 175,
                "transformFlags": 0,
                "start": 32,
                "end": 183
            },
            "flags": 17,
            "transformFlags": 0,
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
                    "transformFlags": 0,
                    "start": 184,
                    "end": 187
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 188,
                    "end": 188
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 184,
                "end": 189
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 184,
            "end": 189
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "transformFlags": 0,
                "start": 190,
                "end": 190
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 189,
            "end": 191
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 193,
            "end": 194
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "transformFlags": 0,
                "start": 194,
                "end": 200
            },
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "transformFlags": 0,
                "start": 200,
                "end": 202
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
                                    "kind": 194,
                                    "expression": {
                                        "kind": 129,
                                        "member": {
                                            "kind": 4259935,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 206,
                                            "end": 211
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "foo",
                                            "rawText": "foo",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 212,
                                            "end": 215
                                        },
                                        "flags": 96,
                                        "transformFlags": 2,
                                        "start": 206,
                                        "end": 215
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 204,
                                    "end": 216
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 217,
                                    "end": 218
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 219,
                                        "end": 219
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 218,
                                    "end": 220
                                },
                                "flags": 0,
                                "transformFlags": 0,
                                "start": 216,
                                "end": 220
                            },
                            "flags": 0,
                            "transformFlags": 0,
                            "start": 204,
                            "end": 220
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 204,
                    "end": 220
                },
                "flags": 202,
                "transformFlags": 0,
                "start": 32,
                "end": 222
            },
            "flags": 17,
            "transformFlags": 0,
            "start": 194,
            "end": 222
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 222,
            "end": 223
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "transformFlags": 0,
                "start": 223,
                "end": 229
            },
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "transformFlags": 0,
                "start": 229,
                "end": 231
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
                                "kind": 194,
                                "expression": {
                                    "kind": 129,
                                    "member": {
                                        "kind": 4259935,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 235,
                                        "end": 240
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "foo",
                                        "rawText": "foo",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 241,
                                        "end": 244
                                    },
                                    "flags": 96,
                                    "transformFlags": 2,
                                    "start": 235,
                                    "end": 244
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 233,
                                "end": 244
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "flags": 32,
                            "transformFlags": 128,
                            "start": 233,
                            "end": 244
                        },
                        {
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "y",
                                "rawText": "y",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 244,
                                "end": 246
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "flags": 32,
                            "transformFlags": 128,
                            "start": 244,
                            "end": 246
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 233,
                    "end": 246
                },
                "flags": 231,
                "transformFlags": 0,
                "start": 32,
                "end": 246
            },
            "flags": 17,
            "transformFlags": 0,
            "start": 223,
            "end": 246
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 248,
                    "end": 248
                },
                "returnType": null,
                "arrowToken": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 250,
                        "end": 250
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 249,
                    "end": 251
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 247,
                "end": 251
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 247,
            "end": 251
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 253,
            "end": 254
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "transformFlags": 0,
                "start": 254,
                "end": 260
            },
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "transformFlags": 0,
                "start": 260,
                "end": 262
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
                                    "text": "constructor",
                                    "rawText": "constructor",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 264,
                                    "end": 276
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 2048,
                                    "transformFlags": 0,
                                    "start": 277,
                                    "end": 278
                                },
                                "returnType": null,
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
                                                    "flags": 80,
                                                    "transformFlags": 0,
                                                    "start": 279,
                                                    "end": 285
                                                },
                                                "name": {
                                                    "kind": 16637,
                                                    "text": "",
                                                    "rawText": "",
                                                    "flags": 64,
                                                    "transformFlags": 0,
                                                    "start": 285,
                                                    "end": 285
                                                },
                                                "typeParameters": null,
                                                "tail": {
                                                    "kind": 277,
                                                    "classHeritage": null,
                                                    "body": {
                                                        "kind": 303,
                                                        "elements": [],
                                                        "flags": 32,
                                                        "transformFlags": 0,
                                                        "start": 285,
                                                        "end": 285
                                                    },
                                                    "flags": 285,
                                                    "transformFlags": 0,
                                                    "start": 32,
                                                    "end": 285
                                                },
                                                "flags": 16,
                                                "transformFlags": 0,
                                                "start": 279,
                                                "end": 285
                                            },
                                            {
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 129,
                                                    "member": {
                                                        "kind": 4259935,
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 285,
                                                        "end": 291
                                                    },
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "foo",
                                                        "rawText": "foo",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 292,
                                                        "end": 295
                                                    },
                                                    "flags": 96,
                                                    "transformFlags": 2,
                                                    "start": 285,
                                                    "end": 295
                                                },
                                                "flags": 16,
                                                "transformFlags": 4096,
                                                "start": 285,
                                                "end": 295
                                            },
                                            {
                                                "kind": 124,
                                                "block": {
                                                    "kind": 249,
                                                    "statements": [],
                                                    "flags": 16,
                                                    "transformFlags": 0,
                                                    "start": 297,
                                                    "end": 297
                                                },
                                                "flags": 16,
                                                "transformFlags": 0,
                                                "start": 295,
                                                "end": 299
                                            }
                                        ],
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 279,
                                        "end": 299
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 278,
                                    "end": 302
                                },
                                "flags": 2048,
                                "transformFlags": 0,
                                "start": 276,
                                "end": 302
                            },
                            "flags": 2048,
                            "transformFlags": 0,
                            "start": 264,
                            "end": 302
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 264,
                    "end": 302
                },
                "flags": 262,
                "transformFlags": 0,
                "start": 32,
                "end": 303
            },
            "flags": 17,
            "transformFlags": 0,
            "start": 254,
            "end": 303
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 303,
            "end": 304
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "transformFlags": 0,
                "start": 304,
                "end": 310
            },
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "transformFlags": 0,
                "start": 310,
                "end": 312
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
                                    "text": "constructor",
                                    "rawText": "constructor",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 314,
                                    "end": 326
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 2048,
                                    "transformFlags": 0,
                                    "start": 327,
                                    "end": 328
                                },
                                "returnType": null,
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
                                                    "flags": 80,
                                                    "transformFlags": 0,
                                                    "start": 329,
                                                    "end": 335
                                                },
                                                "name": {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 335,
                                                    "end": 337
                                                },
                                                "typeParameters": null,
                                                "tail": {
                                                    "kind": 277,
                                                    "classHeritage": {
                                                        "kind": 279,
                                                        "extendsKeyword": {
                                                            "kind": 4194391,
                                                            "flags": 80,
                                                            "transformFlags": 0,
                                                            "start": 337,
                                                            "end": 345
                                                        },
                                                        "expression": {
                                                            "kind": 129,
                                                            "member": {
                                                                "kind": 4259935,
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 345,
                                                                "end": 351
                                                            },
                                                            "expression": {
                                                                "kind": 134299649,
                                                                "text": "foo",
                                                                "rawText": "foo",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 352,
                                                                "end": 355
                                                            },
                                                            "flags": 96,
                                                            "transformFlags": 2,
                                                            "start": 345,
                                                            "end": 355
                                                        },
                                                        "typeParameter": null,
                                                        "flags": 16,
                                                        "transformFlags": 0,
                                                        "start": 345,
                                                        "end": 355
                                                    },
                                                    "body": {
                                                        "kind": 303,
                                                        "elements": [],
                                                        "flags": 32,
                                                        "transformFlags": 0,
                                                        "start": 337,
                                                        "end": 337
                                                    },
                                                    "flags": 337,
                                                    "transformFlags": 0,
                                                    "start": 32,
                                                    "end": 337
                                                },
                                                "flags": 16,
                                                "transformFlags": 0,
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
                                                    "transformFlags": 0,
                                                    "start": 355,
                                                    "end": 357
                                                },
                                                "flags": 16,
                                                "transformFlags": 4096,
                                                "start": 355,
                                                "end": 357
                                            },
                                            {
                                                "kind": 124,
                                                "block": {
                                                    "kind": 249,
                                                    "statements": [],
                                                    "flags": 16,
                                                    "transformFlags": 0,
                                                    "start": 359,
                                                    "end": 359
                                                },
                                                "flags": 16,
                                                "transformFlags": 0,
                                                "start": 357,
                                                "end": 361
                                            }
                                        ],
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 329,
                                        "end": 361
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 328,
                                    "end": 364
                                },
                                "flags": 2048,
                                "transformFlags": 0,
                                "start": 326,
                                "end": 364
                            },
                            "flags": 2048,
                            "transformFlags": 0,
                            "start": 314,
                            "end": 364
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 314,
                    "end": 364
                },
                "flags": 312,
                "transformFlags": 0,
                "start": 32,
                "end": 365
            },
            "flags": 17,
            "transformFlags": 0,
            "start": 304,
            "end": 365
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 365,
            "end": 366
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "transformFlags": 0,
                "start": 366,
                "end": 372
            },
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "transformFlags": 0,
                "start": 372,
                "end": 374
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
                                    "text": "constructor",
                                    "rawText": "constructor",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 376,
                                    "end": 388
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 2048,
                                    "transformFlags": 0,
                                    "start": 389,
                                    "end": 390
                                },
                                "returnType": null,
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
                                                    "flags": 80,
                                                    "transformFlags": 0,
                                                    "start": 391,
                                                    "end": 397
                                                },
                                                "name": {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 397,
                                                    "end": 399
                                                },
                                                "typeParameters": null,
                                                "tail": {
                                                    "kind": 277,
                                                    "classHeritage": {
                                                        "kind": 279,
                                                        "extendsKeyword": {
                                                            "kind": 4194391,
                                                            "flags": 80,
                                                            "transformFlags": 0,
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
                                                                "transformFlags": 0,
                                                                "start": 407,
                                                                "end": 411
                                                            },
                                                            "argumentList": {
                                                                "kind": 256,
                                                                "elements": [
                                                                    {
                                                                        "kind": 129,
                                                                        "member": {
                                                                            "kind": 4259935,
                                                                            "flags": 96,
                                                                            "transformFlags": 0,
                                                                            "start": 412,
                                                                            "end": 417
                                                                        },
                                                                        "expression": {
                                                                            "kind": 134299649,
                                                                            "text": "foo",
                                                                            "rawText": "foo",
                                                                            "flags": 96,
                                                                            "transformFlags": 0,
                                                                            "start": 418,
                                                                            "end": 421
                                                                        },
                                                                        "flags": 96,
                                                                        "transformFlags": 2,
                                                                        "start": 412,
                                                                        "end": 421
                                                                    },
                                                                    {
                                                                        "kind": 134299649,
                                                                        "text": "y",
                                                                        "rawText": "y",
                                                                        "flags": 96,
                                                                        "transformFlags": 0,
                                                                        "start": 421,
                                                                        "end": 423
                                                                    }
                                                                ],
                                                                "trailingComma": false,
                                                                "flags": 32,
                                                                "transformFlags": 0,
                                                                "start": 412,
                                                                "end": 423
                                                            },
                                                            "flags": 268435488,
                                                            "transformFlags": 1,
                                                            "start": 407,
                                                            "end": 424
                                                        },
                                                        "typeParameter": null,
                                                        "flags": 16,
                                                        "transformFlags": 0,
                                                        "start": 407,
                                                        "end": 424
                                                    },
                                                    "body": {
                                                        "kind": 303,
                                                        "elements": [],
                                                        "flags": 32,
                                                        "transformFlags": 0,
                                                        "start": 426,
                                                        "end": 426
                                                    },
                                                    "flags": 399,
                                                    "transformFlags": 0,
                                                    "start": 32,
                                                    "end": 428
                                                },
                                                "flags": 16,
                                                "transformFlags": 0,
                                                "start": 391,
                                                "end": 428
                                            }
                                        ],
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 391,
                                        "end": 428
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 390,
                                    "end": 431
                                },
                                "flags": 2048,
                                "transformFlags": 0,
                                "start": 388,
                                "end": 431
                            },
                            "flags": 2048,
                            "transformFlags": 0,
                            "start": 376,
                            "end": 431
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 376,
                    "end": 431
                },
                "flags": 374,
                "transformFlags": 0,
                "start": 32,
                "end": 432
            },
            "flags": 17,
            "transformFlags": 0,
            "start": 366,
            "end": 432
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 432,
            "end": 433
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "transformFlags": 0,
                "start": 433,
                "end": 439
            },
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "transformFlags": 0,
                "start": 439,
                "end": 441
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
                                    "text": "constructor",
                                    "rawText": "constructor",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 443,
                                    "end": 455
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 2048,
                                    "transformFlags": 0,
                                    "start": 456,
                                    "end": 457
                                },
                                "returnType": null,
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
                                                    "flags": 80,
                                                    "transformFlags": 0,
                                                    "start": 458,
                                                    "end": 464
                                                },
                                                "name": {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 464,
                                                    "end": 466
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
                                                                        "text": "foo",
                                                                        "rawText": "foo",
                                                                        "flags": 96,
                                                                        "transformFlags": 0,
                                                                        "start": 468,
                                                                        "end": 472
                                                                    },
                                                                    "typeParameters": null,
                                                                    "formalParameterList": {
                                                                        "kind": 214,
                                                                        "formalParameters": [],
                                                                        "trailingComma": false,
                                                                        "flags": 0,
                                                                        "transformFlags": 0,
                                                                        "start": 473,
                                                                        "end": 478
                                                                    },
                                                                    "returnType": null,
                                                                    "contents": {
                                                                        "kind": 216,
                                                                        "functionStatementList": {
                                                                            "kind": 217,
                                                                            "directives": [],
                                                                            "statements": [],
                                                                            "flags": 32,
                                                                            "transformFlags": 0,
                                                                            "start": 473,
                                                                            "end": 473
                                                                        },
                                                                        "flags": 32,
                                                                        "transformFlags": 0,
                                                                        "start": 473,
                                                                        "end": 473
                                                                    },
                                                                    "flags": 0,
                                                                    "transformFlags": 0,
                                                                    "start": 472,
                                                                    "end": 473
                                                                },
                                                                "flags": 0,
                                                                "transformFlags": 0,
                                                                "start": 468,
                                                                "end": 473
                                                            },
                                                            {
                                                                "kind": 280,
                                                                "decorators": null,
                                                                "declaredToken": null,
                                                                "staticKeyword": null,
                                                                "asyncKeyword": null,
                                                                "key": {
                                                                    "kind": 134299649,
                                                                    "text": "super",
                                                                    "rawText": "super",
                                                                    "flags": 96,
                                                                    "transformFlags": 0,
                                                                    "start": 473,
                                                                    "end": 478
                                                                },
                                                                "optionalToken": null,
                                                                "type": null,
                                                                "initializer": null,
                                                                "flags": 32,
                                                                "transformFlags": 128,
                                                                "start": 473,
                                                                "end": 478
                                                            }
                                                        ],
                                                        "flags": 32,
                                                        "transformFlags": 0,
                                                        "start": 468,
                                                        "end": 478
                                                    },
                                                    "flags": 466,
                                                    "transformFlags": 0,
                                                    "start": 32,
                                                    "end": 478
                                                },
                                                "flags": 16,
                                                "transformFlags": 0,
                                                "start": 458,
                                                "end": 478
                                            }
                                        ],
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 458,
                                        "end": 478
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 457,
                                    "end": 478
                                },
                                "flags": 2048,
                                "transformFlags": 0,
                                "start": 455,
                                "end": 478
                            },
                            "flags": 2048,
                            "transformFlags": 0,
                            "start": 443,
                            "end": 478
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 443,
                    "end": 478
                },
                "flags": 441,
                "transformFlags": 0,
                "start": 32,
                "end": 478
            },
            "flags": 17,
            "transformFlags": 0,
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
                "transformFlags": 0,
                "start": 479,
                "end": 482
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 479,
            "end": 482
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "transformFlags": 0,
                "start": 484,
                "end": 484
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 483,
            "end": 485
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
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
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 492,
                    "end": 494
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
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
                                "asteriskToken": null,
                                "left": {
                                    "kind": 134299649,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 496,
                                    "end": 500
                                },
                                "right": {
                                    "kind": 177,
                                    "asyncKeyword": null,
                                    "functionKeyword": {
                                        "kind": 37822554,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 501,
                                        "end": 510
                                    },
                                    "asteriskToken": null,
                                    "name": null,
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 511,
                                        "end": 511
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
                                                            "kind": 4259935,
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 513,
                                                            "end": 519
                                                        },
                                                        "expression": {
                                                            "kind": 134299649,
                                                            "text": "foo",
                                                            "rawText": "foo",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 520,
                                                            "end": 523
                                                        },
                                                        "flags": 96,
                                                        "transformFlags": 2,
                                                        "start": 513,
                                                        "end": 523
                                                    },
                                                    "flags": 16,
                                                    "transformFlags": 4096,
                                                    "start": 513,
                                                    "end": 524
                                                }
                                            ],
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 513,
                                            "end": 524
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 512,
                                        "end": 526
                                    },
                                    "returnType": null,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 501,
                                    "end": 526
                                },
                                "flags": 32,
                                "transformFlags": 128,
                                "start": 496,
                                "end": 526
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 496,
                        "end": 526
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 495,
                    "end": 527
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 492,
                "end": 527
            },
            "flags": 16,
            "transformFlags": 4096,
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
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 528,
                    "end": 530
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 530,
                    "end": 531
                },
                "right": {
                    "kind": 177,
                    "asyncKeyword": null,
                    "functionKeyword": {
                        "kind": 37822554,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 531,
                        "end": 539
                    },
                    "asteriskToken": null,
                    "name": {
                        "kind": 134299649,
                        "text": "f",
                        "rawText": "f",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 539,
                        "end": 541
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
                                    "start": 542,
                                    "end": 543
                                },
                                "optionalToken": null,
                                "type": null,
                                "right": {
                                    "kind": 131,
                                    "expression": {
                                        "kind": 4259935,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 545,
                                        "end": 551
                                    },
                                    "argumentList": {
                                        "kind": 256,
                                        "elements": [],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 552,
                                        "end": 552
                                    },
                                    "flags": 268435488,
                                    "transformFlags": 1,
                                    "start": 545,
                                    "end": 553
                                },
                                "flags": 34,
                                "transformFlags": 4096,
                                "start": 542,
                                "end": 553
                            }
                        ],
                        "trailingComma": false,
                        "flags": 34,
                        "transformFlags": 0,
                        "start": 542,
                        "end": 553
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 555,
                            "end": 555
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 554,
                        "end": 557
                    },
                    "returnType": null,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 531,
                    "end": 557
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 528,
                "end": 557
            },
            "flags": 16,
            "transformFlags": 4096,
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
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 558,
                    "end": 560
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
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
                                "asteriskToken": null,
                                "left": {
                                    "kind": 134299649,
                                    "text": "f",
                                    "rawText": "f",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 562,
                                    "end": 563
                                },
                                "right": {
                                    "kind": 177,
                                    "asyncKeyword": null,
                                    "functionKeyword": {
                                        "kind": 37822554,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 564,
                                        "end": 573
                                    },
                                    "asteriskToken": null,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "f",
                                        "rawText": "f",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 573,
                                        "end": 575
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 576,
                                        "end": 576
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
                                                            "kind": 4259935,
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 578,
                                                            "end": 584
                                                        },
                                                        "argumentList": {
                                                            "kind": 256,
                                                            "elements": [],
                                                            "trailingComma": false,
                                                            "flags": 32,
                                                            "transformFlags": 0,
                                                            "start": 585,
                                                            "end": 585
                                                        },
                                                        "flags": 268435488,
                                                        "transformFlags": 1,
                                                        "start": 578,
                                                        "end": 586
                                                    },
                                                    "flags": 16,
                                                    "transformFlags": 4096,
                                                    "start": 578,
                                                    "end": 586
                                                }
                                            ],
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 578,
                                            "end": 586
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 577,
                                        "end": 588
                                    },
                                    "returnType": null,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 564,
                                    "end": 588
                                },
                                "flags": 32,
                                "transformFlags": 128,
                                "start": 562,
                                "end": 588
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 562,
                        "end": 588
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 561,
                    "end": 588
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 558,
                "end": 588
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 558,
            "end": 588
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
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
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 590,
                    "end": 592
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 592,
                    "end": 593
                },
                "right": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 351,
                                "asyncKeyword": null,
                                "asteriskToken": null,
                                "getKeyword": null,
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "constructor",
                                        "rawText": "constructor",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 594,
                                        "end": 605
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 606,
                                        "end": 607
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
                                                            "kind": 4259935,
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 608,
                                                            "end": 614
                                                        },
                                                        "argumentList": {
                                                            "kind": 256,
                                                            "elements": [],
                                                            "trailingComma": false,
                                                            "flags": 32,
                                                            "transformFlags": 0,
                                                            "start": 615,
                                                            "end": 615
                                                        },
                                                        "flags": 268435488,
                                                        "transformFlags": 1,
                                                        "start": 608,
                                                        "end": 616
                                                    },
                                                    "flags": 16,
                                                    "transformFlags": 4096,
                                                    "start": 608,
                                                    "end": 617
                                                }
                                            ],
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 608,
                                            "end": 617
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 607,
                                        "end": 619
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 605,
                                    "end": 619
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 594,
                                "end": 619
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 594,
                        "end": 619
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 593,
                    "end": 620
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 590,
                "end": 620
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 590,
            "end": 621
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 621,
                "end": 630
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "transformFlags": 0,
                "start": 630,
                "end": 632
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
                            "start": 633,
                            "end": 634
                        },
                        "optionalToken": null,
                        "type": null,
                        "right": {
                            "kind": 131,
                            "expression": {
                                "kind": 4259935,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 636,
                                "end": 642
                            },
                            "argumentList": {
                                "kind": 256,
                                "elements": [],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 643,
                                "end": 643
                            },
                            "flags": 268435488,
                            "transformFlags": 1,
                            "start": 636,
                            "end": 644
                        },
                        "flags": 34,
                        "transformFlags": 4096,
                        "start": 633,
                        "end": 644
                    }
                ],
                "trailingComma": false,
                "flags": 34,
                "transformFlags": 0,
                "start": 633,
                "end": 644
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 646,
                    "end": 646
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 645,
                "end": 648
            },
            "returnType": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 621,
            "end": 648
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 648,
            "end": 649
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 649,
                "end": 658
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "transformFlags": 0,
                "start": 658,
                "end": 660
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 661,
                "end": 661
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
                                    "kind": 4259935,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 663,
                                    "end": 669
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 670,
                                    "end": 670
                                },
                                "flags": 268435488,
                                "transformFlags": 1,
                                "start": 663,
                                "end": 671
                            },
                            "flags": 16,
                            "transformFlags": 4096,
                            "start": 663,
                            "end": 672
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 663,
                    "end": 672
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 662,
                "end": 674
            },
            "returnType": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 649,
            "end": 674
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 674,
            "end": 675
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "transformFlags": 0,
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
                            "transformFlags": 0,
                            "start": 681,
                            "end": 683
                        },
                        "type": null,
                        "initializer": {
                            "kind": 198,
                            "left": {
                                "kind": 201392130,
                                "text": 5,
                                "rawText": "5",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 685,
                                "end": 687
                            },
                            "operatorToken": {
                                "kind": 99634,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 687,
                                "end": 689
                            },
                            "right": {
                                "kind": 131,
                                "expression": {
                                    "kind": 4259935,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 689,
                                    "end": 695
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 696,
                                    "end": 696
                                },
                                "flags": 268435488,
                                "transformFlags": 1,
                                "start": 689,
                                "end": 697
                            },
                            "flags": 96,
                            "transformFlags": 5120,
                            "start": 685,
                            "end": 697
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 681,
                        "end": 697
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 681,
                "end": 697
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 675,
            "end": 698
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 698,
            "end": 699
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 81,
                "transformFlags": 0,
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
                            "transformFlags": 0,
                            "start": 703,
                            "end": 705
                        },
                        "type": null,
                        "initializer": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 351,
                                        "asyncKeyword": null,
                                        "asteriskToken": null,
                                        "getKeyword": null,
                                        "setKeyword": null,
                                        "method": {
                                            "kind": 209,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "foo",
                                                "rawText": "foo",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 709,
                                                "end": 713
                                            },
                                            "typeParameters": null,
                                            "formalParameterList": {
                                                "kind": 214,
                                                "formalParameters": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 714,
                                                "end": 715
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
                                                                    "kind": 4259935,
                                                                    "flags": 96,
                                                                    "transformFlags": 0,
                                                                    "start": 716,
                                                                    "end": 722
                                                                },
                                                                "argumentList": {
                                                                    "kind": 256,
                                                                    "elements": [],
                                                                    "trailingComma": false,
                                                                    "flags": 32,
                                                                    "transformFlags": 0,
                                                                    "start": 723,
                                                                    "end": 723
                                                                },
                                                                "flags": 268435488,
                                                                "transformFlags": 1,
                                                                "start": 716,
                                                                "end": 724
                                                            },
                                                            "flags": 16,
                                                            "transformFlags": 4096,
                                                            "start": 716,
                                                            "end": 725
                                                        }
                                                    ],
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 716,
                                                    "end": 725
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 715,
                                                "end": 727
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 713,
                                            "end": 727
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 709,
                                        "end": 727
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 709,
                                "end": 727
                            },
                            "flags": 48,
                            "transformFlags": 8,
                            "start": 707,
                            "end": 729
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 703,
                        "end": 729
                    }
                ],
                "flags": 17,
                "transformFlags": 0,
                "start": 703,
                "end": 729
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 699,
            "end": 730
        }
    ],
    "isModule": false,
    "source": "class x extends super.foo { };\nclass x extends super.foo y { };\nclass x extends feh(super.foo) { };\nclass x extends feh(super.foo y) { };\nclass x { foo(super.foo){} };\nclass x { super.foo(){} };\nclass x { [super.foo](){} };\nclass x { [super.foo y](){} };\nclass f { constructor(){ class super.foo { }  }};\nclass f { constructor(){ class x extends super.foo y { }  }};\nclass f { constructor(){ class x extends feh(super.foo y) { }  }};\nclass f { constructor(){ class x { foo(super.foo){} }  }};\nx={ foo: function(){ super.foo; }};\ng=function f(x = super()){ };\ng={f: function f(){ super() }];\nx={constructor(){ super(); }};\nfunction f(x = super()){ };\nfunction f(){ super(); };\nconst x = 5 + super();;\nlet x = { foo(){ super(); } };",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 730
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'super' can only be referenced in members of derived classes or object literal expressions - start: 15, end: 22
✖ Duplicate identifier - start: 36, end: 38
✖ 'super' can only be referenced in members of derived classes or object literal expressions - start: 46, end: 53
✖ Missing an opening brace - '{ - start: 57, end: 58
✖ Expected a `;` - start: 58, end: 60
✖ Duplicate identifier - start: 69, end: 71
✖ 'super' can only be referenced in members of derived classes or object literal expressions - start: 84, end: 90
✖ Duplicate identifier - start: 105, end: 107
✖ 'super' can only be referenced in members of derived classes or object literal expressions - start: 120, end: 126
✖ ',' expected - start: 130, end: 131
✖ Duplicate identifier - start: 143, end: 145
✖ Expected a ')' to match the '(' token here - start: 152, end: 157
✖ The parser expected to find a '}' to match the '{' token here - start: 157, end: 158
✖ Expected a `;` - start: 161, end: 162
✖ Declaration or statement expected - start: 164, end: 166
✖ Duplicate identifier - start: 173, end: 175
✖ The parser expected to find a '}' to match the '{' token here - start: 183, end: 184
✖ Expected a `;` - start: 189, end: 190
✖ Declaration or statement expected - start: 191, end: 193
✖ Duplicate identifier - start: 200, end: 202
✖ 'super' can only be referenced in members of derived classes or object literal expressions - start: 206, end: 212
✖ Duplicate identifier - start: 229, end: 231
✖ 'super' can only be referenced in members of derived classes or object literal expressions - start: 235, end: 241
✖ Expected a computed property - start: 245, end: 246
✖ The parser expected to find a '}' to match the '{' token here - start: 246, end: 247
✖ Declaration or statement expected - start: 251, end: 253
✖ Binding identifier expected - start: 285, end: 291
✖ Expected a `;` - start: 295, end: 297
✖ Duplicate identifier - start: 310, end: 312
✖ Missing an opening brace - '{ - start: 356, end: 357
✖ Expected a `;` - start: 357, end: 359
✖ Duplicate identifier - start: 372, end: 374
✖ ',' expected - start: 422, end: 423
✖ Duplicate identifier - start: 439, end: 441
✖ Expected a ')' to match the '(' token here - start: 473, end: 478
✖ The parser expected to find a '}' to match the '{' token here - start: 478, end: 479
✖ Expected a `;` - start: 482, end: 483
✖ Declaration or statement expected - start: 485, end: 487
✖ Declaration or statement expected - start: 487, end: 490
✖ Declaration or statement expected - start: 490, end: 491
✖ 'super' can only be referenced in members of derived classes or object literal expressions - start: 513, end: 520
✖ 'super' can only be referenced in members of derived classes or object literal expressions - start: 545, end: 552
✖ 'super' can only be referenced in members of derived classes or object literal expressions - start: 578, end: 585
✖ ',' expected - start: 588, end: 589
✖ 'super' can only be referenced in members of derived classes or object literal expressions - start: 608, end: 615
✖ Cannot redeclare block-scoped variable - start: 630, end: 632
✖ 'super' can only be referenced in members of derived classes or object literal expressions - start: 636, end: 643
✖ 'super' can only be referenced in members of derived classes or object literal expressions - start: 663, end: 670
✖ Duplicate identifier - start: 681, end: 683
✖ 'super' can only be referenced in members of derived classes or object literal expressions - start: 689, end: 696
✖ Duplicate identifier - start: 703, end: 705
✖ 'super' can only be referenced in members of derived classes or object literal expressions - start: 716, end: 723

```

