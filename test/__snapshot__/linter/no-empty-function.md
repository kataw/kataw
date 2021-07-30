# Kataw parser test case

## Input

`````js
function foo() {}

var foo = function() {};

var foo = () => {};

function* foo() {}

var foo = function*() {};

var obj = {
    foo: function() {},

    foo: function*() {},

    foo() {},

    *foo() {},

    get foo() {},

    set foo(value) {}
};

class A {
    constructor() {}

    foo() {}

    *foo() {}

    get foo() {}

    set foo(value) {}

    static foo() {}

    static *foo() {}

    static get foo() {}

    static set foo(value) {}
}
`````

## Options

### Parser Options

`````js
{ allowTypes: true, lint: { noEmptyFunction: true } }
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "transformFlags": 0,
                "start": 0,
                "end": 8
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo",
                "rawText": "foo",
                "flags": 96,
                "transformFlags": 0,
                "start": 8,
                "end": 12
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 13,
                "end": 13
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 16,
                    "end": 16
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 14,
                "end": 17
            },
            "returnType": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 17
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "transformFlags": 0,
                "start": 17,
                "end": 22
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 22,
                            "end": 26
                        },
                        "type": null,
                        "initializer": {
                            "kind": 177,
                            "asyncKeyword": null,
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 28,
                                "end": 37
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
                                "start": 38,
                                "end": 38
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 41,
                                    "end": 41
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 39,
                                "end": 42
                            },
                            "returnType": null,
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 28,
                            "end": 42
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 22,
                        "end": 42
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 22,
                "end": 42
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 17,
            "end": 43
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "transformFlags": 0,
                "start": 43,
                "end": 48
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 48,
                            "end": 52
                        },
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "asyncKeyword": null,
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 342,
                                "parameters": [],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 56,
                                "end": 56
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 57,
                                "end": 60
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 62,
                                    "end": 62
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 60,
                                "end": 63
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 54,
                            "end": 63
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 48,
                        "end": 63
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 48,
                "end": 63
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 43,
            "end": 64
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 64,
                "end": 74
            },
            "asteriskToken": {
                "kind": 201360950,
                "flags": 64,
                "transformFlags": 32,
                "start": 74,
                "end": 75
            },
            "name": {
                "kind": 134299649,
                "text": "foo",
                "rawText": "foo",
                "flags": 96,
                "transformFlags": 0,
                "start": 75,
                "end": 79
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 80,
                "end": 80
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 83,
                    "end": 83
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 81,
                "end": 84
            },
            "returnType": null,
            "flags": 272,
            "transformFlags": 0,
            "start": 64,
            "end": 84
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "transformFlags": 0,
                "start": 84,
                "end": 89
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 89,
                            "end": 93
                        },
                        "type": null,
                        "initializer": {
                            "kind": 177,
                            "asyncKeyword": null,
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 95,
                                "end": 104
                            },
                            "asteriskToken": {
                                "kind": 201360950,
                                "flags": 64,
                                "transformFlags": 32,
                                "start": 104,
                                "end": 105
                            },
                            "name": null,
                            "typeParameters": null,
                            "formalParameterList": {
                                "kind": 214,
                                "formalParameters": [],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 106,
                                "end": 106
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 109,
                                    "end": 109
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 107,
                                "end": 110
                            },
                            "returnType": null,
                            "flags": 288,
                            "transformFlags": 0,
                            "start": 95,
                            "end": 110
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 89,
                        "end": 110
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 89,
                "end": 110
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 84,
            "end": 111
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "transformFlags": 0,
                "start": 111,
                "end": 116
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "obj",
                            "rawText": "obj",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 116,
                            "end": 120
                        },
                        "type": null,
                        "initializer": {
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
                                            "flags": 97,
                                            "transformFlags": 0,
                                            "start": 124,
                                            "end": 132
                                        },
                                        "right": {
                                            "kind": 177,
                                            "asyncKeyword": null,
                                            "functionKeyword": {
                                                "kind": 37822554,
                                                "flags": 64,
                                                "transformFlags": 0,
                                                "start": 133,
                                                "end": 142
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
                                                "start": 143,
                                                "end": 143
                                            },
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [],
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 146,
                                                    "end": 146
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 144,
                                                "end": 147
                                            },
                                            "returnType": null,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 133,
                                            "end": 147
                                        },
                                        "flags": 32,
                                        "transformFlags": 128,
                                        "start": 124,
                                        "end": 147
                                    },
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "foo",
                                            "rawText": "foo",
                                            "flags": 97,
                                            "transformFlags": 0,
                                            "start": 148,
                                            "end": 157
                                        },
                                        "right": {
                                            "kind": 177,
                                            "asyncKeyword": null,
                                            "functionKeyword": {
                                                "kind": 37822554,
                                                "flags": 64,
                                                "transformFlags": 0,
                                                "start": 158,
                                                "end": 167
                                            },
                                            "asteriskToken": {
                                                "kind": 201360950,
                                                "flags": 64,
                                                "transformFlags": 32,
                                                "start": 167,
                                                "end": 168
                                            },
                                            "name": null,
                                            "typeParameters": null,
                                            "formalParameterList": {
                                                "kind": 214,
                                                "formalParameters": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 169,
                                                "end": 169
                                            },
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [],
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 172,
                                                    "end": 172
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 170,
                                                "end": 173
                                            },
                                            "returnType": null,
                                            "flags": 288,
                                            "transformFlags": 0,
                                            "start": 158,
                                            "end": 173
                                        },
                                        "flags": 32,
                                        "transformFlags": 128,
                                        "start": 148,
                                        "end": 173
                                    },
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
                                                "flags": 97,
                                                "transformFlags": 0,
                                                "start": 174,
                                                "end": 183
                                            },
                                            "typeParameters": null,
                                            "formalParameterList": {
                                                "kind": 214,
                                                "formalParameters": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 184,
                                                "end": 185
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
                                                    "start": 187,
                                                    "end": 187
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 185,
                                                "end": 188
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 183,
                                            "end": 188
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 174,
                                        "end": 188
                                    },
                                    {
                                        "kind": 351,
                                        "asyncKeyword": null,
                                        "asteriskToken": {
                                            "kind": 201360950,
                                            "flags": 65,
                                            "transformFlags": 32,
                                            "start": 189,
                                            "end": 196
                                        },
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
                                                "start": 196,
                                                "end": 199
                                            },
                                            "typeParameters": null,
                                            "formalParameterList": {
                                                "kind": 214,
                                                "formalParameters": [],
                                                "trailingComma": false,
                                                "flags": 160,
                                                "transformFlags": 0,
                                                "start": 200,
                                                "end": 201
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
                                                    "start": 203,
                                                    "end": 203
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 201,
                                                "end": 204
                                            },
                                            "flags": 160,
                                            "transformFlags": 0,
                                            "start": 199,
                                            "end": 204
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 189,
                                        "end": 204
                                    },
                                    {
                                        "kind": 351,
                                        "asyncKeyword": null,
                                        "asteriskToken": null,
                                        "getKeyword": {
                                            "kind": 16498,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 205,
                                            "end": 214
                                        },
                                        "setKeyword": null,
                                        "method": {
                                            "kind": 209,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "foo",
                                                "rawText": "foo",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 214,
                                                "end": 218
                                            },
                                            "typeParameters": null,
                                            "formalParameterList": {
                                                "kind": 214,
                                                "formalParameters": [],
                                                "trailingComma": false,
                                                "flags": 1056,
                                                "transformFlags": 0,
                                                "start": 219,
                                                "end": 220
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
                                                    "start": 222,
                                                    "end": 222
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 220,
                                                "end": 223
                                            },
                                            "flags": 1056,
                                            "transformFlags": 0,
                                            "start": 218,
                                            "end": 223
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 205,
                                        "end": 223
                                    },
                                    {
                                        "kind": 351,
                                        "asyncKeyword": null,
                                        "asteriskToken": null,
                                        "getKeyword": null,
                                        "setKeyword": {
                                            "kind": 16499,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 224,
                                            "end": 233
                                        },
                                        "method": {
                                            "kind": 209,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "foo",
                                                "rawText": "foo",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 233,
                                                "end": 237
                                            },
                                            "typeParameters": null,
                                            "formalParameterList": {
                                                "kind": 214,
                                                "formalParameters": [
                                                    {
                                                        "kind": 134299649,
                                                        "text": "value",
                                                        "rawText": "value",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 238,
                                                        "end": 243
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 608,
                                                "transformFlags": 0,
                                                "start": 238,
                                                "end": 244
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
                                                    "start": 246,
                                                    "end": 246
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 244,
                                                "end": 247
                                            },
                                            "flags": 544,
                                            "transformFlags": 0,
                                            "start": 237,
                                            "end": 247
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 224,
                                        "end": 247
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 17,
                                "transformFlags": 0,
                                "start": 124,
                                "end": 247
                            },
                            "flags": 49,
                            "transformFlags": 8,
                            "start": 122,
                            "end": 249
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 116,
                        "end": 249
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 116,
                "end": 249
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 111,
            "end": 250
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "transformFlags": 0,
                "start": 250,
                "end": 257
            },
            "name": {
                "kind": 134299649,
                "text": "A",
                "rawText": "A",
                "flags": 96,
                "transformFlags": 0,
                "start": 257,
                "end": 259
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
                                    "flags": 97,
                                    "transformFlags": 0,
                                    "start": 261,
                                    "end": 277
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 2048,
                                    "transformFlags": 0,
                                    "start": 278,
                                    "end": 279
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
                                        "start": 281,
                                        "end": 281
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 279,
                                    "end": 282
                                },
                                "flags": 2048,
                                "transformFlags": 0,
                                "start": 277,
                                "end": 282
                            },
                            "flags": 2048,
                            "transformFlags": 0,
                            "start": 261,
                            "end": 282
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
                                    "flags": 97,
                                    "transformFlags": 0,
                                    "start": 282,
                                    "end": 291
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 292,
                                    "end": 293
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
                                        "start": 295,
                                        "end": 295
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 293,
                                    "end": 296
                                },
                                "flags": 0,
                                "transformFlags": 0,
                                "start": 291,
                                "end": 296
                            },
                            "flags": 0,
                            "transformFlags": 0,
                            "start": 282,
                            "end": 296
                        },
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "asteriskToken": {
                                "kind": 201360950,
                                "flags": 65,
                                "transformFlags": 32,
                                "start": 296,
                                "end": 303
                            },
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 303,
                                    "end": 306
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 307,
                                    "end": 308
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
                                        "start": 310,
                                        "end": 310
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 308,
                                    "end": 311
                                },
                                "flags": 0,
                                "transformFlags": 0,
                                "start": 306,
                                "end": 311
                            },
                            "flags": 0,
                            "transformFlags": 0,
                            "start": 296,
                            "end": 311
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
                                "transformFlags": 0,
                                "start": 311,
                                "end": 320
                            },
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
                                    "start": 320,
                                    "end": 324
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 1024,
                                    "transformFlags": 0,
                                    "start": 325,
                                    "end": 326
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
                                        "start": 328,
                                        "end": 328
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 326,
                                    "end": 329
                                },
                                "flags": 1024,
                                "transformFlags": 0,
                                "start": 324,
                                "end": 329
                            },
                            "flags": 1024,
                            "transformFlags": 0,
                            "start": 311,
                            "end": 329
                        },
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
                                "transformFlags": 0,
                                "start": 329,
                                "end": 338
                            },
                            "asteriskToken": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 338,
                                    "end": 342
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [
                                        {
                                            "kind": 134299649,
                                            "text": "value",
                                            "rawText": "value",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 343,
                                            "end": 348
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 608,
                                    "transformFlags": 0,
                                    "start": 343,
                                    "end": 349
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
                                        "start": 351,
                                        "end": 351
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 349,
                                    "end": 352
                                },
                                "flags": 512,
                                "transformFlags": 0,
                                "start": 342,
                                "end": 352
                            },
                            "flags": 512,
                            "transformFlags": 0,
                            "start": 329,
                            "end": 352
                        },
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "staticKeyword": {
                                "kind": 8388716,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 352,
                                "end": 364
                            },
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
                                    "start": 364,
                                    "end": 368
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 369,
                                    "end": 370
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
                                        "start": 372,
                                        "end": 372
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 370,
                                    "end": 373
                                },
                                "flags": 0,
                                "transformFlags": 0,
                                "start": 368,
                                "end": 373
                            },
                            "flags": 0,
                            "transformFlags": 0,
                            "start": 364,
                            "end": 373
                        },
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "staticKeyword": {
                                "kind": 8388716,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 373,
                                "end": 385
                            },
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "asteriskToken": {
                                "kind": 201360950,
                                "flags": 64,
                                "transformFlags": 32,
                                "start": 385,
                                "end": 387
                            },
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 387,
                                    "end": 390
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 391,
                                    "end": 392
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
                                        "start": 394,
                                        "end": 394
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 392,
                                    "end": 395
                                },
                                "flags": 0,
                                "transformFlags": 0,
                                "start": 390,
                                "end": 395
                            },
                            "flags": 0,
                            "transformFlags": 0,
                            "start": 385,
                            "end": 395
                        },
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "staticKeyword": {
                                "kind": 8388716,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 395,
                                "end": 407
                            },
                            "asyncKeyword": null,
                            "setKeyword": {
                                "kind": 16498,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 407,
                                "end": 411
                            },
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
                                    "start": 411,
                                    "end": 415
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 1024,
                                    "transformFlags": 0,
                                    "start": 416,
                                    "end": 417
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
                                        "start": 419,
                                        "end": 419
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 417,
                                    "end": 420
                                },
                                "flags": 1024,
                                "transformFlags": 0,
                                "start": 415,
                                "end": 420
                            },
                            "flags": 1024,
                            "transformFlags": 0,
                            "start": 407,
                            "end": 420
                        },
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "staticKeyword": {
                                "kind": 8388716,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 420,
                                "end": 432
                            },
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": {
                                "kind": 16499,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 432,
                                "end": 436
                            },
                            "asteriskToken": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 436,
                                    "end": 440
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [
                                        {
                                            "kind": 134299649,
                                            "text": "value",
                                            "rawText": "value",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 441,
                                            "end": 446
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 608,
                                    "transformFlags": 0,
                                    "start": 441,
                                    "end": 447
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
                                        "start": 449,
                                        "end": 449
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 447,
                                    "end": 450
                                },
                                "flags": 512,
                                "transformFlags": 0,
                                "start": 440,
                                "end": 450
                            },
                            "flags": 512,
                            "transformFlags": 0,
                            "start": 432,
                            "end": 450
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 261,
                    "end": 450
                },
                "flags": 259,
                "transformFlags": 0,
                "start": 32,
                "end": 452
            },
            "flags": 17,
            "transformFlags": 0,
            "start": 250,
            "end": 452
        }
    ],
    "isModule": false,
    "source": "function foo() {}\n\nvar foo = function() {};\n\nvar foo = () => {};\n\nfunction* foo() {}\n\nvar foo = function*() {};\n\nvar obj = {\n    foo: function() {},\n\n    foo: function*() {},\n\n    foo() {},\n\n    *foo() {},\n\n    get foo() {},\n\n    set foo(value) {}\n};\n\nclass A {\n    constructor() {}\n\n    foo() {}\n\n    *foo() {}\n\n    get foo() {}\n\n    set foo(value) {}\n\n    static foo() {}\n\n    static *foo() {}\n\n    static get foo() {}\n\n    static set foo(value) {}\n}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 452
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Unexpected empty function - start: 16, end: 17
✖ Unexpected empty function - start: 41, end: 42
✖ Unexpected empty function - start: 62, end: 63
✖ Unexpected empty function - start: 83, end: 84
✖ Unexpected empty function - start: 109, end: 110
✖ Unexpected empty function - start: 146, end: 147
✖ Unexpected empty function - start: 172, end: 173
✖ Unexpected empty function - start: 187, end: 188
✖ Unexpected empty function - start: 203, end: 204
✖ Unexpected empty function - start: 222, end: 223
✖ Unexpected empty function - start: 246, end: 247
✖ Unexpected empty function - start: 281, end: 282
✖ Unexpected empty function - start: 295, end: 296
✖ Unexpected empty function - start: 310, end: 311
✖ Unexpected empty function - start: 328, end: 329
✖ Unexpected empty function - start: 351, end: 352
✖ Unexpected empty function - start: 372, end: 373
✖ Unexpected empty function - start: 394, end: 395
✖ Unexpected empty function - start: 419, end: 420
✖ Unexpected empty function - start: 449, end: 450

```

