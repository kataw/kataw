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
                "flags": 768,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 768,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "classHeritage": {
                "kind": 279,
                "extendsToken": {
                    "kind": 4194391,
                    "flags": 768,
                    "start": 7,
                    "end": 15
                },
                "expression": {
                    "kind": 129,
                    "member": {
                        "kind": 225,
                        "superKeyword": {
                            "kind": 4259935,
                            "flags": 768,
                            "start": 15,
                            "end": 21
                        },
                        "flags": 768,
                        "start": 15,
                        "end": 21
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "foo",
                        "rawText": "foo",
                        "flags": 768,
                        "start": 22,
                        "end": 25
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 15,
                    "end": 25
                },
                "typeParameter": null,
                "flags": 128,
                "start": 15,
                "end": 25
            },
            "members": {
                "kind": 277,
                "elements": [],
                "flags": 256,
                "start": 27,
                "end": 29
            },
            "flags": 128,
            "start": 0,
            "end": 29
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 29,
            "end": 30
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 768,
                "start": 30,
                "end": 36
            },
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 768,
                "start": 36,
                "end": 38
            },
            "typeParameters": null,
            "classHeritage": {
                "kind": 279,
                "extendsToken": {
                    "kind": 4194391,
                    "flags": 768,
                    "start": 38,
                    "end": 46
                },
                "expression": {
                    "kind": 129,
                    "member": {
                        "kind": 225,
                        "superKeyword": {
                            "kind": 4259935,
                            "flags": 768,
                            "start": 46,
                            "end": 52
                        },
                        "flags": 768,
                        "start": 46,
                        "end": 52
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "foo",
                        "rawText": "foo",
                        "flags": 768,
                        "start": 53,
                        "end": 56
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 46,
                    "end": 56
                },
                "typeParameter": null,
                "flags": 128,
                "start": 46,
                "end": 56
            },
            "members": {
                "kind": 277,
                "elements": [],
                "flags": 256,
                "start": 30,
                "end": 30
            },
            "flags": 128,
            "start": 30,
            "end": 56
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "y",
                "rawText": "y",
                "flags": 768,
                "start": 56,
                "end": 58
            },
            "flags": 128,
            "start": 56,
            "end": 58
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "multiLine": false,
                "flags": 128,
                "start": 60,
                "end": 60
            },
            "flags": 128,
            "start": 58,
            "end": 62
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 62,
            "end": 63
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 768,
                "start": 63,
                "end": 69
            },
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 768,
                "start": 69,
                "end": 71
            },
            "typeParameters": null,
            "classHeritage": {
                "kind": 279,
                "extendsToken": {
                    "kind": 4194391,
                    "flags": 768,
                    "start": 71,
                    "end": 79
                },
                "expression": {
                    "kind": 131,
                    "expression": {
                        "kind": 134299649,
                        "text": "feh",
                        "rawText": "feh",
                        "flags": 768,
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
                                        "flags": 768,
                                        "start": 84,
                                        "end": 89
                                    },
                                    "flags": 768,
                                    "start": 84,
                                    "end": 89
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 768,
                                    "start": 90,
                                    "end": 93
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 84,
                                "end": 93
                            }
                        ],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 84,
                        "end": 93
                    },
                    "flags": 256,
                    "start": 79,
                    "end": 94
                },
                "typeParameter": null,
                "flags": 128,
                "start": 79,
                "end": 94
            },
            "members": {
                "kind": 277,
                "elements": [],
                "flags": 256,
                "start": 96,
                "end": 98
            },
            "flags": 128,
            "start": 63,
            "end": 98
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 98,
            "end": 99
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 768,
                "start": 99,
                "end": 105
            },
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 768,
                "start": 105,
                "end": 107
            },
            "typeParameters": null,
            "classHeritage": {
                "kind": 279,
                "extendsToken": {
                    "kind": 4194391,
                    "flags": 768,
                    "start": 107,
                    "end": 115
                },
                "expression": {
                    "kind": 131,
                    "expression": {
                        "kind": 134299649,
                        "text": "feh",
                        "rawText": "feh",
                        "flags": 768,
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
                                        "flags": 768,
                                        "start": 120,
                                        "end": 125
                                    },
                                    "flags": 768,
                                    "start": 120,
                                    "end": 125
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 768,
                                    "start": 126,
                                    "end": 129
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 120,
                                "end": 129
                            },
                            {
                                "kind": 134299649,
                                "text": "y",
                                "rawText": "y",
                                "flags": 768,
                                "start": 129,
                                "end": 131
                            }
                        ],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 120,
                        "end": 131
                    },
                    "flags": 256,
                    "start": 115,
                    "end": 132
                },
                "typeParameter": null,
                "flags": 128,
                "start": 115,
                "end": 132
            },
            "members": {
                "kind": 277,
                "elements": [],
                "flags": 256,
                "start": 134,
                "end": 136
            },
            "flags": 128,
            "start": 99,
            "end": 136
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 136,
            "end": 137
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 768,
                "start": 137,
                "end": 143
            },
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 768,
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
                                "flags": 768,
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
                                    "multiline": false,
                                    "flags": 256,
                                    "start": 152,
                                    "end": 152
                                },
                                "flags": 256,
                                "start": 152,
                                "end": 152
                            },
                            "flags": 0,
                            "start": 151,
                            "end": 152
                        },
                        "flags": 256,
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
                            "flags": 768,
                            "start": 152,
                            "end": 157
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 256,
                        "start": 152,
                        "end": 157
                    }
                ],
                "flags": 256,
                "start": 147,
                "end": 157
            },
            "flags": 128,
            "start": 137,
            "end": 157
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "foo",
                "rawText": "foo",
                "flags": 768,
                "start": 158,
                "end": 161
            },
            "flags": 128,
            "start": 158,
            "end": 161
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "multiLine": false,
                "flags": 128,
                "start": 163,
                "end": 163
            },
            "flags": 128,
            "start": 162,
            "end": 164
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 166,
            "end": 167
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 768,
                "start": 167,
                "end": 173
            },
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 768,
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
                            "flags": 768,
                            "start": 177,
                            "end": 183
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 256,
                        "start": 177,
                        "end": 183
                    }
                ],
                "flags": 256,
                "start": 177,
                "end": 183
            },
            "flags": 128,
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
                    "flags": 768,
                    "start": 184,
                    "end": 187
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 256,
                    "start": 188,
                    "end": 188
                },
                "flags": 256,
                "start": 184,
                "end": 189
            },
            "flags": 128,
            "start": 184,
            "end": 189
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "multiLine": false,
                "flags": 128,
                "start": 190,
                "end": 190
            },
            "flags": 128,
            "start": 189,
            "end": 191
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 193,
            "end": 194
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 768,
                "start": 194,
                "end": 200
            },
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 768,
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
                                            "flags": 768,
                                            "start": 206,
                                            "end": 211
                                        },
                                        "flags": 768,
                                        "start": 206,
                                        "end": 211
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "foo",
                                        "rawText": "foo",
                                        "flags": 768,
                                        "start": 212,
                                        "end": 215
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 206,
                                    "end": 215
                                },
                                "flags": 256,
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
                                    "multiline": false,
                                    "flags": 256,
                                    "start": 219,
                                    "end": 219
                                },
                                "flags": 256,
                                "start": 218,
                                "end": 220
                            },
                            "flags": 0,
                            "start": 216,
                            "end": 220
                        },
                        "flags": 256,
                        "start": 204,
                        "end": 220
                    }
                ],
                "flags": 256,
                "start": 204,
                "end": 222
            },
            "flags": 128,
            "start": 194,
            "end": 222
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 222,
            "end": 223
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 768,
                "start": 223,
                "end": 229
            },
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 768,
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
                                        "flags": 768,
                                        "start": 235,
                                        "end": 240
                                    },
                                    "flags": 768,
                                    "start": 235,
                                    "end": 240
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 768,
                                    "start": 241,
                                    "end": 244
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 235,
                                "end": 244
                            },
                            "flags": 256,
                            "start": 233,
                            "end": 244
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 256,
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
                            "flags": 768,
                            "start": 244,
                            "end": 246
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 256,
                        "start": 244,
                        "end": 246
                    }
                ],
                "flags": 256,
                "start": 233,
                "end": 246
            },
            "flags": 128,
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
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 16637,
                    "text": "",
                    "autofix": 0,
                    "flags": 12,
                    "start": 250,
                    "end": 250
                },
                "flags": 256,
                "start": 247,
                "end": 250
            },
            "flags": 128,
            "start": 247,
            "end": 250
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 253,
            "end": 254
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 768,
                "start": 254,
                "end": 260
            },
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 768,
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
                                "flags": 768,
                                "start": 264,
                                "end": 276
                            },
                            "typeParameters": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
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
                                                "flags": 768,
                                                "start": 279,
                                                "end": 285
                                            },
                                            "name": {
                                                "kind": 16637,
                                                "text": "",
                                                "autofix": 0,
                                                "flags": 12,
                                                "start": 285,
                                                "end": 285
                                            },
                                            "typeParameters": null,
                                            "classHeritage": null,
                                            "members": {
                                                "kind": 277,
                                                "elements": [],
                                                "flags": 256,
                                                "start": 279,
                                                "end": 279
                                            },
                                            "flags": 128,
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
                                                        "flags": 768,
                                                        "start": 285,
                                                        "end": 291
                                                    },
                                                    "flags": 768,
                                                    "start": 285,
                                                    "end": 291
                                                },
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "foo",
                                                    "rawText": "foo",
                                                    "flags": 768,
                                                    "start": 292,
                                                    "end": 295
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 285,
                                                "end": 295
                                            },
                                            "flags": 128,
                                            "start": 285,
                                            "end": 295
                                        },
                                        {
                                            "kind": 249,
                                            "block": {
                                                "kind": 124,
                                                "statements": [],
                                                "multiLine": false,
                                                "flags": 128,
                                                "start": 297,
                                                "end": 297
                                            },
                                            "flags": 128,
                                            "start": 295,
                                            "end": 299
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 256,
                                    "start": 279,
                                    "end": 299
                                },
                                "flags": 256,
                                "start": 278,
                                "end": 302
                            },
                            "flags": 0,
                            "start": 276,
                            "end": 302
                        },
                        "flags": 256,
                        "start": 264,
                        "end": 302
                    }
                ],
                "flags": 256,
                "start": 264,
                "end": 303
            },
            "flags": 128,
            "start": 254,
            "end": 303
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 303,
            "end": 304
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 768,
                "start": 304,
                "end": 310
            },
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 768,
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
                                "flags": 768,
                                "start": 314,
                                "end": 326
                            },
                            "typeParameters": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
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
                                                "flags": 768,
                                                "start": 329,
                                                "end": 335
                                            },
                                            "name": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 768,
                                                "start": 335,
                                                "end": 337
                                            },
                                            "typeParameters": null,
                                            "classHeritage": {
                                                "kind": 279,
                                                "extendsToken": {
                                                    "kind": 4194391,
                                                    "flags": 768,
                                                    "start": 337,
                                                    "end": 345
                                                },
                                                "expression": {
                                                    "kind": 129,
                                                    "member": {
                                                        "kind": 225,
                                                        "superKeyword": {
                                                            "kind": 4259935,
                                                            "flags": 768,
                                                            "start": 345,
                                                            "end": 351
                                                        },
                                                        "flags": 768,
                                                        "start": 345,
                                                        "end": 351
                                                    },
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "foo",
                                                        "rawText": "foo",
                                                        "flags": 768,
                                                        "start": 352,
                                                        "end": 355
                                                    },
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 345,
                                                    "end": 355
                                                },
                                                "typeParameter": null,
                                                "flags": 128,
                                                "start": 345,
                                                "end": 355
                                            },
                                            "members": {
                                                "kind": 277,
                                                "elements": [],
                                                "flags": 256,
                                                "start": 329,
                                                "end": 329
                                            },
                                            "flags": 128,
                                            "start": 329,
                                            "end": 355
                                        },
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "y",
                                                "rawText": "y",
                                                "flags": 768,
                                                "start": 355,
                                                "end": 357
                                            },
                                            "flags": 128,
                                            "start": 355,
                                            "end": 357
                                        },
                                        {
                                            "kind": 249,
                                            "block": {
                                                "kind": 124,
                                                "statements": [],
                                                "multiLine": false,
                                                "flags": 128,
                                                "start": 359,
                                                "end": 359
                                            },
                                            "flags": 128,
                                            "start": 357,
                                            "end": 361
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 256,
                                    "start": 329,
                                    "end": 361
                                },
                                "flags": 256,
                                "start": 328,
                                "end": 364
                            },
                            "flags": 0,
                            "start": 326,
                            "end": 364
                        },
                        "flags": 256,
                        "start": 314,
                        "end": 364
                    }
                ],
                "flags": 256,
                "start": 314,
                "end": 365
            },
            "flags": 128,
            "start": 304,
            "end": 365
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 365,
            "end": 366
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 768,
                "start": 366,
                "end": 372
            },
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 768,
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
                                "flags": 768,
                                "start": 376,
                                "end": 388
                            },
                            "typeParameters": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
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
                                                "flags": 768,
                                                "start": 391,
                                                "end": 397
                                            },
                                            "name": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 768,
                                                "start": 397,
                                                "end": 399
                                            },
                                            "typeParameters": null,
                                            "classHeritage": {
                                                "kind": 279,
                                                "extendsToken": {
                                                    "kind": 4194391,
                                                    "flags": 768,
                                                    "start": 399,
                                                    "end": 407
                                                },
                                                "expression": {
                                                    "kind": 131,
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "feh",
                                                        "rawText": "feh",
                                                        "flags": 768,
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
                                                                        "flags": 768,
                                                                        "start": 412,
                                                                        "end": 417
                                                                    },
                                                                    "flags": 768,
                                                                    "start": 412,
                                                                    "end": 417
                                                                },
                                                                "expression": {
                                                                    "kind": 134299649,
                                                                    "text": "foo",
                                                                    "rawText": "foo",
                                                                    "flags": 768,
                                                                    "start": 418,
                                                                    "end": 421
                                                                },
                                                                "autofix": 0,
                                                                "flags": 256,
                                                                "start": 412,
                                                                "end": 421
                                                            },
                                                            {
                                                                "kind": 134299649,
                                                                "text": "y",
                                                                "rawText": "y",
                                                                "flags": 768,
                                                                "start": 421,
                                                                "end": 423
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 256,
                                                        "start": 412,
                                                        "end": 423
                                                    },
                                                    "flags": 256,
                                                    "start": 407,
                                                    "end": 424
                                                },
                                                "typeParameter": null,
                                                "flags": 128,
                                                "start": 407,
                                                "end": 424
                                            },
                                            "members": {
                                                "kind": 277,
                                                "elements": [],
                                                "flags": 256,
                                                "start": 426,
                                                "end": 428
                                            },
                                            "flags": 128,
                                            "start": 391,
                                            "end": 428
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 256,
                                    "start": 391,
                                    "end": 428
                                },
                                "flags": 256,
                                "start": 390,
                                "end": 431
                            },
                            "flags": 0,
                            "start": 388,
                            "end": 431
                        },
                        "flags": 256,
                        "start": 376,
                        "end": 431
                    }
                ],
                "flags": 256,
                "start": 376,
                "end": 432
            },
            "flags": 128,
            "start": 366,
            "end": 432
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 432,
            "end": 433
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 768,
                "start": 433,
                "end": 439
            },
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 768,
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
                                "flags": 768,
                                "start": 443,
                                "end": 455
                            },
                            "typeParameters": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
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
                                                "flags": 768,
                                                "start": 458,
                                                "end": 464
                                            },
                                            "name": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 768,
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
                                                                "flags": 768,
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
                                                                    "multiline": false,
                                                                    "flags": 256,
                                                                    "start": 473,
                                                                    "end": 473
                                                                },
                                                                "flags": 256,
                                                                "start": 473,
                                                                "end": 473
                                                            },
                                                            "flags": 0,
                                                            "start": 472,
                                                            "end": 473
                                                        },
                                                        "flags": 256,
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
                                                            "flags": 768,
                                                            "start": 473,
                                                            "end": 478
                                                        },
                                                        "optionalToken": null,
                                                        "type": null,
                                                        "initializer": null,
                                                        "flags": 256,
                                                        "start": 473,
                                                        "end": 478
                                                    }
                                                ],
                                                "flags": 256,
                                                "start": 468,
                                                "end": 478
                                            },
                                            "flags": 128,
                                            "start": 458,
                                            "end": 478
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 256,
                                    "start": 458,
                                    "end": 478
                                },
                                "flags": 256,
                                "start": 457,
                                "end": 478
                            },
                            "flags": 0,
                            "start": 455,
                            "end": 478
                        },
                        "flags": 256,
                        "start": 443,
                        "end": 478
                    }
                ],
                "flags": 256,
                "start": 443,
                "end": 478
            },
            "flags": 128,
            "start": 433,
            "end": 478
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "foo",
                "rawText": "foo",
                "flags": 768,
                "start": 479,
                "end": 482
            },
            "flags": 128,
            "start": 479,
            "end": 482
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "multiLine": false,
                "flags": 128,
                "start": 484,
                "end": 484
            },
            "flags": 128,
            "start": 483,
            "end": 485
        },
        {
            "kind": 168,
            "flags": 128,
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
                    "flags": 768,
                    "start": 492,
                    "end": 494
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 768,
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
                                "left": {
                                    "kind": 177,
                                    "asyncKeyword": null,
                                    "functionKeyword": {
                                        "kind": 37822554,
                                        "flags": 768,
                                        "start": 501,
                                        "end": 510
                                    },
                                    "generatorToken": null,
                                    "name": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 256,
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
                                                                "flags": 768,
                                                                "start": 513,
                                                                "end": 519
                                                            },
                                                            "flags": 768,
                                                            "start": 513,
                                                            "end": 519
                                                        },
                                                        "expression": {
                                                            "kind": 134299649,
                                                            "text": "foo",
                                                            "rawText": "foo",
                                                            "flags": 768,
                                                            "start": 520,
                                                            "end": 523
                                                        },
                                                        "autofix": 0,
                                                        "flags": 256,
                                                        "start": 513,
                                                        "end": 523
                                                    },
                                                    "flags": 128,
                                                    "start": 513,
                                                    "end": 524
                                                }
                                            ],
                                            "multiline": false,
                                            "flags": 256,
                                            "start": 513,
                                            "end": 524
                                        },
                                        "flags": 256,
                                        "start": 512,
                                        "end": 526
                                    },
                                    "typeParameters": null,
                                    "returnType": null,
                                    "flags": 256,
                                    "start": 501,
                                    "end": 526
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 768,
                                    "start": 496,
                                    "end": 500
                                },
                                "flags": 256,
                                "start": 496,
                                "end": 526
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 496,
                        "end": 526
                    },
                    "flags": 256,
                    "start": 495,
                    "end": 527
                },
                "flags": 256,
                "start": 492,
                "end": 527
            },
            "flags": 128,
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
                    "flags": 768,
                    "start": 528,
                    "end": 530
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 768,
                    "start": 530,
                    "end": 531
                },
                "right": {
                    "kind": 177,
                    "asyncKeyword": null,
                    "functionKeyword": {
                        "kind": 37822554,
                        "flags": 768,
                        "start": 531,
                        "end": 539
                    },
                    "generatorToken": null,
                    "name": {
                        "kind": 134299649,
                        "text": "f",
                        "rawText": "f",
                        "flags": 768,
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
                                    "flags": 768,
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
                                            "flags": 768,
                                            "start": 545,
                                            "end": 551
                                        },
                                        "flags": 768,
                                        "start": 545,
                                        "end": 551
                                    },
                                    "argumentList": {
                                        "kind": 256,
                                        "elements": [],
                                        "trailingComma": false,
                                        "flags": 256,
                                        "start": 552,
                                        "end": 552
                                    },
                                    "flags": 256,
                                    "start": 545,
                                    "end": 553
                                },
                                "flags": 258,
                                "start": 542,
                                "end": 553
                            }
                        ],
                        "trailingComma": false,
                        "flags": 258,
                        "start": 541,
                        "end": 554
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [],
                            "multiline": false,
                            "flags": 256,
                            "start": 555,
                            "end": 555
                        },
                        "flags": 256,
                        "start": 554,
                        "end": 557
                    },
                    "typeParameters": null,
                    "returnType": null,
                    "flags": 256,
                    "start": 531,
                    "end": 557
                },
                "flags": 256,
                "start": 528,
                "end": 557
            },
            "flags": 128,
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
                    "flags": 768,
                    "start": 558,
                    "end": 560
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 768,
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
                                "left": {
                                    "kind": 177,
                                    "asyncKeyword": null,
                                    "functionKeyword": {
                                        "kind": 37822554,
                                        "flags": 768,
                                        "start": 564,
                                        "end": 573
                                    },
                                    "generatorToken": null,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "f",
                                        "rawText": "f",
                                        "flags": 768,
                                        "start": 573,
                                        "end": 575
                                    },
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 256,
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
                                                                "flags": 768,
                                                                "start": 578,
                                                                "end": 584
                                                            },
                                                            "flags": 768,
                                                            "start": 578,
                                                            "end": 584
                                                        },
                                                        "argumentList": {
                                                            "kind": 256,
                                                            "elements": [],
                                                            "trailingComma": false,
                                                            "flags": 256,
                                                            "start": 585,
                                                            "end": 585
                                                        },
                                                        "flags": 256,
                                                        "start": 578,
                                                        "end": 586
                                                    },
                                                    "flags": 128,
                                                    "start": 578,
                                                    "end": 586
                                                }
                                            ],
                                            "multiline": false,
                                            "flags": 256,
                                            "start": 578,
                                            "end": 586
                                        },
                                        "flags": 256,
                                        "start": 577,
                                        "end": 588
                                    },
                                    "typeParameters": null,
                                    "returnType": null,
                                    "flags": 256,
                                    "start": 564,
                                    "end": 588
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "f",
                                    "rawText": "f",
                                    "flags": 768,
                                    "start": 562,
                                    "end": 563
                                },
                                "flags": 256,
                                "start": 562,
                                "end": 588
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 562,
                        "end": 588
                    },
                    "flags": 256,
                    "start": 561,
                    "end": 588
                },
                "flags": 256,
                "start": 558,
                "end": 588
            },
            "flags": 128,
            "start": 558,
            "end": 588
        },
        {
            "kind": 168,
            "flags": 128,
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
                    "flags": 768,
                    "start": 590,
                    "end": 592
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 768,
                    "start": 592,
                    "end": 593
                },
                "right": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "constructor",
                                    "rawText": "constructor",
                                    "flags": 768,
                                    "start": 594,
                                    "end": 605
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 256,
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
                                                            "flags": 768,
                                                            "start": 608,
                                                            "end": 614
                                                        },
                                                        "flags": 768,
                                                        "start": 608,
                                                        "end": 614
                                                    },
                                                    "argumentList": {
                                                        "kind": 256,
                                                        "elements": [],
                                                        "trailingComma": false,
                                                        "flags": 256,
                                                        "start": 615,
                                                        "end": 615
                                                    },
                                                    "flags": 256,
                                                    "start": 608,
                                                    "end": 616
                                                },
                                                "flags": 128,
                                                "start": 608,
                                                "end": 617
                                            }
                                        ],
                                        "multiline": false,
                                        "flags": 256,
                                        "start": 608,
                                        "end": 617
                                    },
                                    "flags": 256,
                                    "start": 607,
                                    "end": 619
                                },
                                "flags": 256,
                                "start": 605,
                                "end": 619
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 594,
                        "end": 619
                    },
                    "flags": 256,
                    "start": 593,
                    "end": 620
                },
                "flags": 256,
                "start": 590,
                "end": 620
            },
            "flags": 128,
            "start": 590,
            "end": 621
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 768,
                "start": 621,
                "end": 630
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 768,
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
                            "flags": 768,
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
                                    "flags": 768,
                                    "start": 636,
                                    "end": 642
                                },
                                "flags": 768,
                                "start": 636,
                                "end": 642
                            },
                            "argumentList": {
                                "kind": 256,
                                "elements": [],
                                "trailingComma": false,
                                "flags": 256,
                                "start": 643,
                                "end": 643
                            },
                            "flags": 256,
                            "start": 636,
                            "end": 644
                        },
                        "flags": 258,
                        "start": 633,
                        "end": 644
                    }
                ],
                "trailingComma": false,
                "flags": 258,
                "start": 632,
                "end": 645
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "multiline": false,
                    "flags": 256,
                    "start": 646,
                    "end": 646
                },
                "flags": 256,
                "start": 645,
                "end": 648
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 128,
            "start": 621,
            "end": 648
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 648,
            "end": 649
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 768,
                "start": 649,
                "end": 658
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 768,
                "start": 658,
                "end": 660
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 256,
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
                                        "flags": 768,
                                        "start": 663,
                                        "end": 669
                                    },
                                    "flags": 768,
                                    "start": 663,
                                    "end": 669
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [],
                                    "trailingComma": false,
                                    "flags": 256,
                                    "start": 670,
                                    "end": 670
                                },
                                "flags": 256,
                                "start": 663,
                                "end": 671
                            },
                            "flags": 128,
                            "start": 663,
                            "end": 672
                        }
                    ],
                    "multiline": false,
                    "flags": 256,
                    "start": 663,
                    "end": 672
                },
                "flags": 256,
                "start": 662,
                "end": 674
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 128,
            "start": 649,
            "end": 674
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 674,
            "end": 675
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 768,
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
                            "flags": 768,
                            "start": 681,
                            "end": 683
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 198,
                            "left": {
                                "kind": 134299649,
                                "text": 5,
                                "rawText": "5",
                                "flags": 768,
                                "start": 685,
                                "end": 687
                            },
                            "operatorToken": {
                                "kind": 34098,
                                "flags": 768,
                                "start": 687,
                                "end": 689
                            },
                            "right": {
                                "kind": 131,
                                "expression": {
                                    "kind": 225,
                                    "superKeyword": {
                                        "kind": 4259935,
                                        "flags": 768,
                                        "start": 689,
                                        "end": 695
                                    },
                                    "flags": 768,
                                    "start": 689,
                                    "end": 695
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [],
                                    "trailingComma": false,
                                    "flags": 256,
                                    "start": 696,
                                    "end": 696
                                },
                                "flags": 256,
                                "start": 689,
                                "end": 697
                            },
                            "flags": 256,
                            "start": 685,
                            "end": 697
                        },
                        "flags": 128,
                        "start": 681,
                        "end": 697
                    }
                ],
                "flags": 160,
                "start": 681,
                "end": 697
            },
            "flags": 128,
            "start": 675,
            "end": 698
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 698,
            "end": 699
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 768,
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
                            "flags": 768,
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
                                        "kind": 209,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "foo",
                                            "rawText": "foo",
                                            "flags": 768,
                                            "start": 709,
                                            "end": 713
                                        },
                                        "typeParameters": null,
                                        "formalParameters": {
                                            "kind": 214,
                                            "formalParameterList": [],
                                            "trailingComma": false,
                                            "flags": 256,
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
                                                                    "flags": 768,
                                                                    "start": 716,
                                                                    "end": 722
                                                                },
                                                                "flags": 768,
                                                                "start": 716,
                                                                "end": 722
                                                            },
                                                            "argumentList": {
                                                                "kind": 256,
                                                                "elements": [],
                                                                "trailingComma": false,
                                                                "flags": 256,
                                                                "start": 723,
                                                                "end": 723
                                                            },
                                                            "flags": 256,
                                                            "start": 716,
                                                            "end": 724
                                                        },
                                                        "flags": 128,
                                                        "start": 716,
                                                        "end": 725
                                                    }
                                                ],
                                                "multiline": false,
                                                "flags": 256,
                                                "start": 716,
                                                "end": 725
                                            },
                                            "flags": 256,
                                            "start": 715,
                                            "end": 727
                                        },
                                        "flags": 256,
                                        "start": 713,
                                        "end": 727
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "start": 709,
                                "end": 727
                            },
                            "flags": 256,
                            "start": 707,
                            "end": 729
                        },
                        "flags": 128,
                        "start": 703,
                        "end": 729
                    }
                ],
                "flags": 128,
                "start": 703,
                "end": 729
            },
            "flags": 128,
            "start": 699,
            "end": 730
        }
    ],
    "isModule": false,
    "text": "class x extends super.foo { };\nclass x extends super.foo y { };\nclass x extends feh(super.foo) { };\nclass x extends feh(super.foo y) { };\nclass x { foo(super.foo){} };\nclass x { super.foo(){} };\nclass x { [super.foo](){} };\nclass x { [super.foo y](){} };\nclass f { constructor(){ class super.foo { }  }};\nclass f { constructor(){ class x extends super.foo y { }  }};\nclass f { constructor(){ class x extends feh(super.foo y) { }  }};\nclass f { constructor(){ class x { foo(super.foo){} }  }};\nx={ foo: function(){ super.foo; }};\ng=function f(x = super()){ };\ng={f: function f(){ super() }];\nx={constructor(){ super(); }};\nfunction f(x = super()){ };\nfunction f(){ super(); };\nconst x = 5 + super();;\nlet x = { foo(){ super(); } };",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 730
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

