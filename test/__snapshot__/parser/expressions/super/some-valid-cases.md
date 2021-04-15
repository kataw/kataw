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
                "kind": 37814352,
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
                    "kind": 134299649,
                    "text": "y",
                    "rawText": "y",
                    "flags": 768,
                    "start": 15,
                    "end": 17
                },
                "typeParameter": null,
                "flags": 128,
                "start": 15,
                "end": 17
            },
            "members": {
                "kind": 277,
                "elements": [],
                "flags": 256,
                "start": 19,
                "end": 21
            },
            "flags": 128,
            "start": 0,
            "end": 21
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37814352,
                "flags": 768,
                "start": 21,
                "end": 28
            },
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 768,
                "start": 28,
                "end": 30
            },
            "typeParameters": null,
            "classHeritage": {
                "kind": 279,
                "extendsToken": {
                    "kind": 4194391,
                    "flags": 768,
                    "start": 30,
                    "end": 38
                },
                "expression": {
                    "kind": 134299649,
                    "text": "y",
                    "rawText": "y",
                    "flags": 768,
                    "start": 38,
                    "end": 40
                },
                "typeParameter": null,
                "flags": 128,
                "start": 38,
                "end": 40
            },
            "members": {
                "kind": 277,
                "elements": [
                    {
                        "kind": 278,
                        "decorators": null,
                        "staticToken": null,
                        "method": {
                            "kind": 209,
                            "name": {
                                "kind": 134299649,
                                "text": "f",
                                "rawText": "f",
                                "flags": 768,
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
                            "type": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "multiline": false,
                                    "flags": 256,
                                    "start": 47,
                                    "end": 47
                                },
                                "flags": 256,
                                "start": 46,
                                "end": 48
                            },
                            "flags": 0,
                            "start": 44,
                            "end": 48
                        },
                        "flags": 256,
                        "start": 42,
                        "end": 48
                    }
                ],
                "flags": 256,
                "start": 42,
                "end": 50
            },
            "flags": 128,
            "start": 21,
            "end": 50
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37814352,
                "flags": 768,
                "start": 50,
                "end": 57
            },
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 768,
                "start": 57,
                "end": 59
            },
            "typeParameters": null,
            "classHeritage": {
                "kind": 279,
                "extendsToken": {
                    "kind": 4194391,
                    "flags": 768,
                    "start": 59,
                    "end": 67
                },
                "expression": {
                    "kind": 134299649,
                    "text": "y",
                    "rawText": "y",
                    "flags": 768,
                    "start": 67,
                    "end": 69
                },
                "typeParameter": null,
                "flags": 128,
                "start": 67,
                "end": 69
            },
            "members": {
                "kind": 277,
                "elements": [
                    {
                        "kind": 278,
                        "decorators": null,
                        "staticToken": null,
                        "method": {
                            "kind": 209,
                            "name": {
                                "kind": 134299649,
                                "text": "constructor",
                                "rawText": "constructor",
                                "flags": 768,
                                "start": 71,
                                "end": 83
                            },
                            "typeParameters": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
                                "start": 84,
                                "end": 85
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
                                                        "start": 87,
                                                        "end": 93
                                                    },
                                                    "flags": 768,
                                                    "start": 87,
                                                    "end": 93
                                                },
                                                "argumentList": {
                                                    "kind": 256,
                                                    "elements": [],
                                                    "trailingComma": false,
                                                    "flags": 256,
                                                    "start": 94,
                                                    "end": 94
                                                },
                                                "flags": 256,
                                                "start": 87,
                                                "end": 95
                                            },
                                            "flags": 128,
                                            "start": 87,
                                            "end": 96
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 256,
                                    "start": 87,
                                    "end": 96
                                },
                                "flags": 256,
                                "start": 85,
                                "end": 98
                            },
                            "flags": 0,
                            "start": 83,
                            "end": 98
                        },
                        "flags": 256,
                        "start": 71,
                        "end": 98
                    }
                ],
                "flags": 256,
                "start": 71,
                "end": 100
            },
            "flags": 128,
            "start": 50,
            "end": 100
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37814352,
                "flags": 768,
                "start": 100,
                "end": 107
            },
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 768,
                "start": 107,
                "end": 109
            },
            "typeParameters": null,
            "classHeritage": null,
            "members": {
                "kind": 277,
                "elements": [
                    {
                        "kind": 278,
                        "decorators": null,
                        "staticToken": null,
                        "method": {
                            "kind": 209,
                            "name": {
                                "kind": 134299649,
                                "text": "constructor",
                                "rawText": "constructor",
                                "flags": 768,
                                "start": 111,
                                "end": 123
                            },
                            "typeParameters": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
                                "start": 124,
                                "end": 125
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
                                                "kind": 129,
                                                "member": {
                                                    "kind": 225,
                                                    "superKeyword": {
                                                        "kind": 4259935,
                                                        "flags": 768,
                                                        "start": 126,
                                                        "end": 132
                                                    },
                                                    "flags": 768,
                                                    "start": 126,
                                                    "end": 132
                                                },
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "foo",
                                                    "rawText": "foo",
                                                    "flags": 768,
                                                    "start": 133,
                                                    "end": 136
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 126,
                                                "end": 136
                                            },
                                            "flags": 128,
                                            "start": 126,
                                            "end": 137
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 256,
                                    "start": 126,
                                    "end": 137
                                },
                                "flags": 256,
                                "start": 125,
                                "end": 139
                            },
                            "flags": 0,
                            "start": 123,
                            "end": 139
                        },
                        "flags": 256,
                        "start": 111,
                        "end": 139
                    }
                ],
                "flags": 256,
                "start": 111,
                "end": 140
            },
            "flags": 128,
            "start": 100,
            "end": 140
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37814352,
                "flags": 768,
                "start": 140,
                "end": 147
            },
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 768,
                "start": 147,
                "end": 149
            },
            "typeParameters": null,
            "classHeritage": null,
            "members": {
                "kind": 277,
                "elements": [
                    {
                        "kind": 278,
                        "decorators": null,
                        "staticToken": null,
                        "method": {
                            "kind": 209,
                            "name": {
                                "kind": 134299649,
                                "text": "foo",
                                "rawText": "foo",
                                "flags": 768,
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
                                                "kind": 129,
                                                "member": {
                                                    "kind": 225,
                                                    "superKeyword": {
                                                        "kind": 4259935,
                                                        "flags": 768,
                                                        "start": 158,
                                                        "end": 164
                                                    },
                                                    "flags": 768,
                                                    "start": 158,
                                                    "end": 164
                                                },
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "foo",
                                                    "rawText": "foo",
                                                    "flags": 768,
                                                    "start": 165,
                                                    "end": 168
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 158,
                                                "end": 168
                                            },
                                            "flags": 128,
                                            "start": 158,
                                            "end": 169
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 256,
                                    "start": 158,
                                    "end": 169
                                },
                                "flags": 256,
                                "start": 157,
                                "end": 171
                            },
                            "flags": 0,
                            "start": 155,
                            "end": 171
                        },
                        "flags": 256,
                        "start": 151,
                        "end": 171
                    }
                ],
                "flags": 256,
                "start": 151,
                "end": 172
            },
            "flags": 128,
            "start": 140,
            "end": 172
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37814352,
                "flags": 768,
                "start": 172,
                "end": 179
            },
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 768,
                "start": 179,
                "end": 181
            },
            "typeParameters": null,
            "classHeritage": null,
            "members": {
                "kind": 277,
                "elements": [
                    {
                        "kind": 278,
                        "decorators": null,
                        "staticToken": null,
                        "method": {
                            "kind": 209,
                            "name": {
                                "kind": 134299649,
                                "text": "foo",
                                "rawText": "foo",
                                "flags": 768,
                                "start": 183,
                                "end": 187
                            },
                            "typeParameters": null,
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
                                            "start": 188,
                                            "end": 189
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": {
                                            "kind": 129,
                                            "member": {
                                                "kind": 225,
                                                "superKeyword": {
                                                    "kind": 4259935,
                                                    "flags": 768,
                                                    "start": 190,
                                                    "end": 195
                                                },
                                                "flags": 768,
                                                "start": 190,
                                                "end": 195
                                            },
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "foo",
                                                "rawText": "foo",
                                                "flags": 768,
                                                "start": 196,
                                                "end": 199
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 190,
                                            "end": 199
                                        },
                                        "flags": 258,
                                        "start": 188,
                                        "end": 199
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 258,
                                "start": 188,
                                "end": 200
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
                                    "start": 201,
                                    "end": 201
                                },
                                "flags": 256,
                                "start": 200,
                                "end": 203
                            },
                            "flags": 0,
                            "start": 187,
                            "end": 203
                        },
                        "flags": 256,
                        "start": 183,
                        "end": 203
                    }
                ],
                "flags": 256,
                "start": 183,
                "end": 204
            },
            "flags": 128,
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
                    "flags": 768,
                    "start": 204,
                    "end": 207
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 768,
                    "start": 207,
                    "end": 208
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
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 768,
                                    "start": 209,
                                    "end": 213
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [
                                        {
                                            "kind": 215,
                                            "ellipsisToken": null,
                                            "binding": {
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 768,
                                                "start": 214,
                                                "end": 215
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": {
                                                "kind": 129,
                                                "member": {
                                                    "kind": 225,
                                                    "superKeyword": {
                                                        "kind": 4259935,
                                                        "flags": 768,
                                                        "start": 217,
                                                        "end": 223
                                                    },
                                                    "flags": 768,
                                                    "start": 217,
                                                    "end": 223
                                                },
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "foo",
                                                    "rawText": "foo",
                                                    "flags": 768,
                                                    "start": 224,
                                                    "end": 227
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 217,
                                                "end": 227
                                            },
                                            "flags": 258,
                                            "start": 214,
                                            "end": 227
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 258,
                                    "start": 214,
                                    "end": 228
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
                                        "start": 229,
                                        "end": 229
                                    },
                                    "flags": 256,
                                    "start": 228,
                                    "end": 231
                                },
                                "flags": 256,
                                "start": 213,
                                "end": 231
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 209,
                        "end": 231
                    },
                    "flags": 256,
                    "start": 208,
                    "end": 232
                },
                "flags": 256,
                "start": 204,
                "end": 232
            },
            "flags": 128,
            "start": 204,
            "end": 232
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37814352,
                "flags": 768,
                "start": 232,
                "end": 239
            },
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 768,
                "start": 239,
                "end": 241
            },
            "typeParameters": null,
            "classHeritage": null,
            "members": {
                "kind": 277,
                "elements": [
                    {
                        "kind": 278,
                        "decorators": null,
                        "staticToken": null,
                        "method": {
                            "kind": 209,
                            "name": {
                                "kind": 134299649,
                                "text": "constructor",
                                "rawText": "constructor",
                                "flags": 768,
                                "start": 243,
                                "end": 255
                            },
                            "typeParameters": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
                                "start": 256,
                                "end": 257
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
                                                "kind": 130,
                                                "member": {
                                                    "kind": 225,
                                                    "superKeyword": {
                                                        "kind": 4259935,
                                                        "flags": 768,
                                                        "start": 258,
                                                        "end": 264
                                                    },
                                                    "flags": 768,
                                                    "start": 258,
                                                    "end": 264
                                                },
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "foo",
                                                    "rawText": "foo",
                                                    "flags": 768,
                                                    "start": 265,
                                                    "end": 268
                                                },
                                                "flags": 256,
                                                "start": 258,
                                                "end": 269
                                            },
                                            "flags": 128,
                                            "start": 258,
                                            "end": 270
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 256,
                                    "start": 258,
                                    "end": 270
                                },
                                "flags": 256,
                                "start": 257,
                                "end": 272
                            },
                            "flags": 0,
                            "start": 255,
                            "end": 272
                        },
                        "flags": 256,
                        "start": 243,
                        "end": 272
                    }
                ],
                "flags": 256,
                "start": 243,
                "end": 273
            },
            "flags": 128,
            "start": 232,
            "end": 273
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37814352,
                "flags": 768,
                "start": 273,
                "end": 280
            },
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 768,
                "start": 280,
                "end": 282
            },
            "typeParameters": null,
            "classHeritage": null,
            "members": {
                "kind": 277,
                "elements": [
                    {
                        "kind": 278,
                        "decorators": null,
                        "staticToken": null,
                        "method": {
                            "kind": 209,
                            "name": {
                                "kind": 134299649,
                                "text": "foo",
                                "rawText": "foo",
                                "flags": 768,
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
                                                "kind": 130,
                                                "member": {
                                                    "kind": 225,
                                                    "superKeyword": {
                                                        "kind": 4259935,
                                                        "flags": 768,
                                                        "start": 291,
                                                        "end": 297
                                                    },
                                                    "flags": 768,
                                                    "start": 291,
                                                    "end": 297
                                                },
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "foo",
                                                    "rawText": "foo",
                                                    "flags": 768,
                                                    "start": 298,
                                                    "end": 301
                                                },
                                                "flags": 256,
                                                "start": 291,
                                                "end": 302
                                            },
                                            "flags": 128,
                                            "start": 291,
                                            "end": 303
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 256,
                                    "start": 291,
                                    "end": 303
                                },
                                "flags": 256,
                                "start": 290,
                                "end": 305
                            },
                            "flags": 0,
                            "start": 288,
                            "end": 305
                        },
                        "flags": 256,
                        "start": 284,
                        "end": 305
                    }
                ],
                "flags": 256,
                "start": 284,
                "end": 306
            },
            "flags": 128,
            "start": 273,
            "end": 306
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37814352,
                "flags": 768,
                "start": 306,
                "end": 313
            },
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 768,
                "start": 313,
                "end": 315
            },
            "typeParameters": null,
            "classHeritage": null,
            "members": {
                "kind": 277,
                "elements": [
                    {
                        "kind": 278,
                        "decorators": null,
                        "staticToken": null,
                        "method": {
                            "kind": 209,
                            "name": {
                                "kind": 134299649,
                                "text": "foo",
                                "rawText": "foo",
                                "flags": 768,
                                "start": 317,
                                "end": 321
                            },
                            "typeParameters": null,
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
                                            "start": 322,
                                            "end": 323
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": {
                                            "kind": 130,
                                            "member": {
                                                "kind": 225,
                                                "superKeyword": {
                                                    "kind": 4259935,
                                                    "flags": 768,
                                                    "start": 324,
                                                    "end": 329
                                                },
                                                "flags": 768,
                                                "start": 324,
                                                "end": 329
                                            },
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "foo",
                                                "rawText": "foo",
                                                "flags": 768,
                                                "start": 330,
                                                "end": 333
                                            },
                                            "flags": 256,
                                            "start": 324,
                                            "end": 334
                                        },
                                        "flags": 258,
                                        "start": 322,
                                        "end": 334
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 258,
                                "start": 322,
                                "end": 335
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
                                    "start": 336,
                                    "end": 336
                                },
                                "flags": 256,
                                "start": 335,
                                "end": 338
                            },
                            "flags": 0,
                            "start": 321,
                            "end": 338
                        },
                        "flags": 256,
                        "start": 317,
                        "end": 338
                    }
                ],
                "flags": 256,
                "start": 317,
                "end": 339
            },
            "flags": 128,
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
                    "flags": 768,
                    "start": 339,
                    "end": 342
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 768,
                    "start": 342,
                    "end": 343
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
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 768,
                                    "start": 344,
                                    "end": 348
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 256,
                                    "start": 349,
                                    "end": 350
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
                                                    "kind": 130,
                                                    "member": {
                                                        "kind": 225,
                                                        "superKeyword": {
                                                            "kind": 4259935,
                                                            "flags": 768,
                                                            "start": 351,
                                                            "end": 357
                                                        },
                                                        "flags": 768,
                                                        "start": 351,
                                                        "end": 357
                                                    },
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "foo",
                                                        "rawText": "foo",
                                                        "flags": 768,
                                                        "start": 358,
                                                        "end": 361
                                                    },
                                                    "flags": 256,
                                                    "start": 351,
                                                    "end": 362
                                                },
                                                "flags": 128,
                                                "start": 351,
                                                "end": 363
                                            }
                                        ],
                                        "multiline": false,
                                        "flags": 256,
                                        "start": 351,
                                        "end": 363
                                    },
                                    "flags": 256,
                                    "start": 350,
                                    "end": 365
                                },
                                "flags": 256,
                                "start": 348,
                                "end": 365
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 344,
                        "end": 365
                    },
                    "flags": 256,
                    "start": 343,
                    "end": 366
                },
                "flags": 256,
                "start": 339,
                "end": 366
            },
            "flags": 128,
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
                    "flags": 768,
                    "start": 366,
                    "end": 369
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 768,
                    "start": 369,
                    "end": 370
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
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 768,
                                    "start": 371,
                                    "end": 375
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [
                                        {
                                            "kind": 215,
                                            "ellipsisToken": null,
                                            "binding": {
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 768,
                                                "start": 376,
                                                "end": 377
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": {
                                                "kind": 130,
                                                "member": {
                                                    "kind": 225,
                                                    "superKeyword": {
                                                        "kind": 4259935,
                                                        "flags": 768,
                                                        "start": 379,
                                                        "end": 385
                                                    },
                                                    "flags": 768,
                                                    "start": 379,
                                                    "end": 385
                                                },
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "foo",
                                                    "rawText": "foo",
                                                    "flags": 768,
                                                    "start": 386,
                                                    "end": 389
                                                },
                                                "flags": 256,
                                                "start": 379,
                                                "end": 390
                                            },
                                            "flags": 258,
                                            "start": 376,
                                            "end": 390
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 258,
                                    "start": 376,
                                    "end": 391
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
                                        "start": 392,
                                        "end": 392
                                    },
                                    "flags": 256,
                                    "start": 391,
                                    "end": 394
                                },
                                "flags": 256,
                                "start": 375,
                                "end": 394
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 371,
                        "end": 394
                    },
                    "flags": 256,
                    "start": 370,
                    "end": 395
                },
                "flags": 256,
                "start": 366,
                "end": 395
            },
            "flags": 128,
            "start": 366,
            "end": 395
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37814352,
                "flags": 768,
                "start": 395,
                "end": 402
            },
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 768,
                "start": 402,
                "end": 404
            },
            "typeParameters": null,
            "classHeritage": {
                "kind": 279,
                "extendsToken": {
                    "kind": 4194391,
                    "flags": 768,
                    "start": 404,
                    "end": 412
                },
                "expression": {
                    "kind": 134299649,
                    "text": "y",
                    "rawText": "y",
                    "flags": 768,
                    "start": 412,
                    "end": 414
                },
                "typeParameter": null,
                "flags": 128,
                "start": 412,
                "end": 414
            },
            "members": {
                "kind": 277,
                "elements": [
                    {
                        "kind": 278,
                        "decorators": null,
                        "staticToken": null,
                        "method": {
                            "kind": 209,
                            "name": {
                                "kind": 134299649,
                                "text": "constructor",
                                "rawText": "constructor",
                                "flags": 768,
                                "start": 416,
                                "end": 428
                            },
                            "typeParameters": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
                                "start": 429,
                                "end": 430
                            },
                            "type": null,
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
                                                "flags": 768,
                                                "start": 431,
                                                "end": 438
                                            },
                                            "expression": {
                                                "kind": 271,
                                                "arrowToken": {
                                                    "kind": 10,
                                                    "flags": 768,
                                                    "start": 450,
                                                    "end": 453
                                                },
                                                "typeParameters": null,
                                                "parameters": [
                                                    {
                                                        "kind": 125,
                                                        "left": {
                                                            "kind": 134299649,
                                                            "text": "a",
                                                            "rawText": "a",
                                                            "flags": 768,
                                                            "start": 440,
                                                            "end": 441
                                                        },
                                                        "operatorToken": {
                                                            "kind": 4125,
                                                            "flags": 768,
                                                            "start": 441,
                                                            "end": 442
                                                        },
                                                        "right": {
                                                            "kind": 131,
                                                            "expression": {
                                                                "kind": 225,
                                                                "superKeyword": {
                                                                    "kind": 4259935,
                                                                    "flags": 768,
                                                                    "start": 442,
                                                                    "end": 447
                                                                },
                                                                "flags": 768,
                                                                "start": 442,
                                                                "end": 447
                                                            },
                                                            "argumentList": {
                                                                "kind": 256,
                                                                "elements": [],
                                                                "trailingComma": false,
                                                                "flags": 256,
                                                                "start": 448,
                                                                "end": 448
                                                            },
                                                            "flags": 256,
                                                            "start": 442,
                                                            "end": 449
                                                        },
                                                        "flags": 256,
                                                        "start": 438,
                                                        "end": 449
                                                    }
                                                ],
                                                "asyncToken": null,
                                                "returnType": null,
                                                "contents": {
                                                    "kind": 134299649,
                                                    "text": "a",
                                                    "rawText": "a",
                                                    "flags": 768,
                                                    "start": 453,
                                                    "end": 455
                                                },
                                                "flags": 256,
                                                "start": 438,
                                                "end": 455
                                            },
                                            "flags": 128,
                                            "start": 0,
                                            "end": 431
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 256,
                                    "start": 431,
                                    "end": 456
                                },
                                "flags": 256,
                                "start": 430,
                                "end": 458
                            },
                            "flags": 0,
                            "start": 428,
                            "end": 458
                        },
                        "flags": 256,
                        "start": 416,
                        "end": 458
                    }
                ],
                "flags": 256,
                "start": 416,
                "end": 459
            },
            "flags": 128,
            "start": 395,
            "end": 459
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37814352,
                "flags": 768,
                "start": 459,
                "end": 466
            },
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 768,
                "start": 466,
                "end": 468
            },
            "typeParameters": null,
            "classHeritage": {
                "kind": 279,
                "extendsToken": {
                    "kind": 4194391,
                    "flags": 768,
                    "start": 468,
                    "end": 476
                },
                "expression": {
                    "kind": 134299649,
                    "text": "y",
                    "rawText": "y",
                    "flags": 768,
                    "start": 476,
                    "end": 478
                },
                "typeParameter": null,
                "flags": 128,
                "start": 476,
                "end": 478
            },
            "members": {
                "kind": 277,
                "elements": [
                    {
                        "kind": 278,
                        "decorators": null,
                        "staticToken": null,
                        "method": {
                            "kind": 209,
                            "name": {
                                "kind": 134299649,
                                "text": "constructor",
                                "rawText": "constructor",
                                "flags": 768,
                                "start": 480,
                                "end": 492
                            },
                            "typeParameters": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
                                "start": 493,
                                "end": 494
                            },
                            "type": null,
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
                                                "flags": 768,
                                                "start": 495,
                                                "end": 502
                                            },
                                            "expression": {
                                                "kind": 271,
                                                "arrowToken": {
                                                    "kind": 10,
                                                    "flags": 768,
                                                    "start": 505,
                                                    "end": 508
                                                },
                                                "typeParameters": null,
                                                "parameters": [],
                                                "asyncToken": null,
                                                "returnType": null,
                                                "contents": {
                                                    "kind": 130,
                                                    "member": {
                                                        "kind": 225,
                                                        "superKeyword": {
                                                            "kind": 4259935,
                                                            "flags": 768,
                                                            "start": 508,
                                                            "end": 514
                                                        },
                                                        "flags": 768,
                                                        "start": 508,
                                                        "end": 514
                                                    },
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "foo",
                                                        "rawText": "foo",
                                                        "flags": 768,
                                                        "start": 515,
                                                        "end": 518
                                                    },
                                                    "flags": 256,
                                                    "start": 508,
                                                    "end": 519
                                                },
                                                "flags": 256,
                                                "start": 502,
                                                "end": 519
                                            },
                                            "flags": 128,
                                            "start": 0,
                                            "end": 495
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 256,
                                    "start": 495,
                                    "end": 520
                                },
                                "flags": 256,
                                "start": 494,
                                "end": 522
                            },
                            "flags": 0,
                            "start": 492,
                            "end": 522
                        },
                        "flags": 256,
                        "start": 480,
                        "end": 522
                    }
                ],
                "flags": 256,
                "start": 480,
                "end": 523
            },
            "flags": 128,
            "start": 459,
            "end": 523
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37814352,
                "flags": 768,
                "start": 523,
                "end": 530
            },
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 768,
                "start": 530,
                "end": 532
            },
            "typeParameters": null,
            "classHeritage": null,
            "members": {
                "kind": 277,
                "elements": [
                    {
                        "kind": 278,
                        "decorators": null,
                        "staticToken": null,
                        "method": {
                            "kind": 209,
                            "name": {
                                "kind": 134299649,
                                "text": "fo",
                                "rawText": "fo",
                                "flags": 768,
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
                            "type": null,
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
                                                "flags": 768,
                                                "start": 540,
                                                "end": 547
                                            },
                                            "expression": {
                                                "kind": 271,
                                                "arrowToken": {
                                                    "kind": 10,
                                                    "flags": 768,
                                                    "start": 550,
                                                    "end": 553
                                                },
                                                "typeParameters": null,
                                                "parameters": [],
                                                "asyncToken": null,
                                                "returnType": null,
                                                "contents": {
                                                    "kind": 129,
                                                    "member": {
                                                        "kind": 225,
                                                        "superKeyword": {
                                                            "kind": 4259935,
                                                            "flags": 768,
                                                            "start": 553,
                                                            "end": 559
                                                        },
                                                        "flags": 768,
                                                        "start": 553,
                                                        "end": 559
                                                    },
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "foo",
                                                        "rawText": "foo",
                                                        "flags": 768,
                                                        "start": 560,
                                                        "end": 563
                                                    },
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 553,
                                                    "end": 563
                                                },
                                                "flags": 256,
                                                "start": 547,
                                                "end": 563
                                            },
                                            "flags": 128,
                                            "start": 0,
                                            "end": 540
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 256,
                                    "start": 540,
                                    "end": 564
                                },
                                "flags": 256,
                                "start": 539,
                                "end": 566
                            },
                            "flags": 0,
                            "start": 537,
                            "end": 566
                        },
                        "flags": 256,
                        "start": 534,
                        "end": 566
                    }
                ],
                "flags": 256,
                "start": 534,
                "end": 567
            },
            "flags": 128,
            "start": 523,
            "end": 567
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37814352,
                "flags": 768,
                "start": 567,
                "end": 574
            },
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 768,
                "start": 574,
                "end": 576
            },
            "typeParameters": null,
            "classHeritage": null,
            "members": {
                "kind": 277,
                "elements": [
                    {
                        "kind": 278,
                        "decorators": null,
                        "staticToken": null,
                        "method": {
                            "kind": 209,
                            "name": {
                                "kind": 134299649,
                                "text": "dsda",
                                "rawText": "dsda",
                                "flags": 768,
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
                            "type": null,
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
                                                "flags": 768,
                                                "start": 586,
                                                "end": 593
                                            },
                                            "expression": {
                                                "kind": 271,
                                                "arrowToken": {
                                                    "kind": 10,
                                                    "flags": 768,
                                                    "start": 607,
                                                    "end": 610
                                                },
                                                "typeParameters": null,
                                                "parameters": [
                                                    {
                                                        "kind": 125,
                                                        "left": {
                                                            "kind": 134299649,
                                                            "text": "a",
                                                            "rawText": "a",
                                                            "flags": 768,
                                                            "start": 595,
                                                            "end": 596
                                                        },
                                                        "operatorToken": {
                                                            "kind": 4125,
                                                            "flags": 768,
                                                            "start": 596,
                                                            "end": 597
                                                        },
                                                        "right": {
                                                            "kind": 129,
                                                            "member": {
                                                                "kind": 225,
                                                                "superKeyword": {
                                                                    "kind": 4259935,
                                                                    "flags": 768,
                                                                    "start": 597,
                                                                    "end": 602
                                                                },
                                                                "flags": 768,
                                                                "start": 597,
                                                                "end": 602
                                                            },
                                                            "expression": {
                                                                "kind": 134299649,
                                                                "text": "foo",
                                                                "rawText": "foo",
                                                                "flags": 768,
                                                                "start": 603,
                                                                "end": 606
                                                            },
                                                            "autofix": 0,
                                                            "flags": 256,
                                                            "start": 597,
                                                            "end": 606
                                                        },
                                                        "flags": 256,
                                                        "start": 593,
                                                        "end": 606
                                                    }
                                                ],
                                                "asyncToken": null,
                                                "returnType": null,
                                                "contents": {
                                                    "kind": 134299649,
                                                    "text": "a",
                                                    "rawText": "a",
                                                    "flags": 768,
                                                    "start": 610,
                                                    "end": 612
                                                },
                                                "flags": 256,
                                                "start": 593,
                                                "end": 612
                                            },
                                            "flags": 128,
                                            "start": 0,
                                            "end": 586
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 256,
                                    "start": 586,
                                    "end": 613
                                },
                                "flags": 256,
                                "start": 585,
                                "end": 615
                            },
                            "flags": 0,
                            "start": 583,
                            "end": 615
                        },
                        "flags": 256,
                        "start": 578,
                        "end": 615
                    }
                ],
                "flags": 256,
                "start": 578,
                "end": 616
            },
            "flags": 128,
            "start": 567,
            "end": 616
        }
    ],
    "isModule": false,
    "text": "class x extends y { }\n\nclass x extends y { f(){} }\n\nclass x extends y { constructor() { super(); } }\n\nclass x { constructor(){ super.foo; }}\n\nclass x { foo(){ super.foo; }}\n\nclass x { foo(x=super.foo){ }}\n\nx={ foo(a = super.foo){ }}\n\nclass x { constructor(){ super[foo]; }}\n\nclass x { foo(){ super[foo]; }}\n\nclass x { foo(x=super[foo]){ }}\n\nx={ foo(){ super[foo]; }}\n\nx={ foo(a = super[foo]){ }}\n\nclass x extends y { constructor(){ return (a=super()) => a; }}\n\nclass x extends y { constructor(){ return () => super[foo]; }}\n\nclass x { fo(){ return () => super.foo; }}\n\nclass x { dsda(){ return (a=super.foo) => a; }}\n",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 73,
            "error": "'super' can only be referenced in members of derived classes or object literal expressions",
            "start": 93,
            "end": 94
        },
        {
            "kind": 2,
            "source": 2,
            "code": 73,
            "error": "'super' can only be referenced in members of derived classes or object literal expressions",
            "start": 447,
            "end": 448
        }
    ],
    "start": 0,
    "end": 617
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

