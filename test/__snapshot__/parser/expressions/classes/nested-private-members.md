# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: false }
`````

## Input

`````js
(class {a = class { #a = 1 }});
(class {a = class { #a = () => {} }});
(class {a = class { #a }});
(class {a = class { #a() { } }});
(class {a = class { get #a() { } }});
(class {a = class { set #a(foo) { } }});
(class {a = class { *#a() { } }});
(class {a = class { async #a() { } }});
(class {a = class { async *#a() { } }});
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 0,
                        "start": 1,
                        "end": 6
                    },
                    "name": null,
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
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "start": 8,
                                    "end": 9
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": {
                                    "kind": 189,
                                    "decorators": null,
                                    "classKeyword": {
                                        "kind": 37822544,
                                        "flags": 0,
                                        "start": 11,
                                        "end": 17
                                    },
                                    "name": null,
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
                                                    "kind": 67174651,
                                                    "text": "#a",
                                                    "flags": 96,
                                                    "start": 19,
                                                    "end": 22
                                                },
                                                "optionalToken": null,
                                                "type": null,
                                                "initializer": {
                                                    "kind": 201392130,
                                                    "text": 1,
                                                    "rawText": "1",
                                                    "flags": 96,
                                                    "start": 24,
                                                    "end": 26
                                                },
                                                "flags": 32,
                                                "start": 19,
                                                "end": 26
                                            }
                                        ],
                                        "flags": 32,
                                        "start": 19,
                                        "end": 28
                                    },
                                    "flags": 32,
                                    "start": 11,
                                    "end": 28
                                },
                                "flags": 32,
                                "start": 8,
                                "end": 28
                            }
                        ],
                        "flags": 32,
                        "start": 8,
                        "end": 29
                    },
                    "flags": 32,
                    "start": 1,
                    "end": 29
                },
                "flags": 32,
                "start": 0,
                "end": 30
            },
            "flags": 16,
            "start": 0,
            "end": 31
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 0,
                        "start": 33,
                        "end": 38
                    },
                    "name": null,
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
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "start": 40,
                                    "end": 41
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": {
                                    "kind": 189,
                                    "decorators": null,
                                    "classKeyword": {
                                        "kind": 37822544,
                                        "flags": 0,
                                        "start": 43,
                                        "end": 49
                                    },
                                    "name": null,
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
                                                    "kind": 67174651,
                                                    "text": "#a",
                                                    "flags": 96,
                                                    "start": 51,
                                                    "end": 54
                                                },
                                                "optionalToken": null,
                                                "type": null,
                                                "initializer": {
                                                    "kind": 271,
                                                    "arrowToken": {
                                                        "kind": 10,
                                                        "flags": 0,
                                                        "start": 59,
                                                        "end": 62
                                                    },
                                                    "typeParameters": null,
                                                    "parameters": [],
                                                    "asyncToken": null,
                                                    "returnType": null,
                                                    "contents": {
                                                        "kind": 216,
                                                        "functionStatementList": {
                                                            "kind": 217,
                                                            "directives": [],
                                                            "statements": [],
                                                            "flags": 32,
                                                            "start": 64,
                                                            "end": 64
                                                        },
                                                        "flags": 32,
                                                        "start": 62,
                                                        "end": 65
                                                    },
                                                    "flags": 32,
                                                    "start": 56,
                                                    "end": 65
                                                },
                                                "flags": 32,
                                                "start": 51,
                                                "end": 65
                                            }
                                        ],
                                        "flags": 32,
                                        "start": 51,
                                        "end": 67
                                    },
                                    "flags": 32,
                                    "start": 43,
                                    "end": 67
                                },
                                "flags": 32,
                                "start": 40,
                                "end": 67
                            }
                        ],
                        "flags": 32,
                        "start": 40,
                        "end": 68
                    },
                    "flags": 32,
                    "start": 33,
                    "end": 68
                },
                "flags": 32,
                "start": 31,
                "end": 69
            },
            "flags": 16,
            "start": 31,
            "end": 70
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 0,
                        "start": 72,
                        "end": 77
                    },
                    "name": null,
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
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "start": 79,
                                    "end": 80
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": {
                                    "kind": 189,
                                    "decorators": null,
                                    "classKeyword": {
                                        "kind": 37822544,
                                        "flags": 0,
                                        "start": 82,
                                        "end": 88
                                    },
                                    "name": null,
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
                                                    "kind": 67174651,
                                                    "text": "#a",
                                                    "flags": 96,
                                                    "start": 90,
                                                    "end": 93
                                                },
                                                "optionalToken": null,
                                                "type": null,
                                                "initializer": null,
                                                "flags": 32,
                                                "start": 90,
                                                "end": 93
                                            }
                                        ],
                                        "flags": 32,
                                        "start": 90,
                                        "end": 95
                                    },
                                    "flags": 32,
                                    "start": 82,
                                    "end": 95
                                },
                                "flags": 32,
                                "start": 79,
                                "end": 95
                            }
                        ],
                        "flags": 32,
                        "start": 79,
                        "end": 96
                    },
                    "flags": 32,
                    "start": 72,
                    "end": 96
                },
                "flags": 32,
                "start": 70,
                "end": 97
            },
            "flags": 16,
            "start": 70,
            "end": 98
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 0,
                        "start": 100,
                        "end": 105
                    },
                    "name": null,
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
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "start": 107,
                                    "end": 108
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": {
                                    "kind": 189,
                                    "decorators": null,
                                    "classKeyword": {
                                        "kind": 37822544,
                                        "flags": 0,
                                        "start": 110,
                                        "end": 116
                                    },
                                    "name": null,
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
                                                        "kind": 67174651,
                                                        "text": "#a",
                                                        "flags": 96,
                                                        "start": 118,
                                                        "end": 121
                                                    },
                                                    "typeParameters": null,
                                                    "formalParameters": {
                                                        "kind": 214,
                                                        "formalParameterList": [],
                                                        "trailingComma": false,
                                                        "flags": 0,
                                                        "start": 122,
                                                        "end": 123
                                                    },
                                                    "type": null,
                                                    "contents": {
                                                        "kind": 216,
                                                        "functionStatementList": {
                                                            "kind": 217,
                                                            "directives": [],
                                                            "statements": [],
                                                            "flags": 32,
                                                            "start": 125,
                                                            "end": 125
                                                        },
                                                        "flags": 32,
                                                        "start": 123,
                                                        "end": 127
                                                    },
                                                    "flags": 0,
                                                    "start": 121,
                                                    "end": 127
                                                },
                                                "flags": 0,
                                                "start": 118,
                                                "end": 127
                                            }
                                        ],
                                        "flags": 32,
                                        "start": 118,
                                        "end": 129
                                    },
                                    "flags": 32,
                                    "start": 110,
                                    "end": 129
                                },
                                "flags": 32,
                                "start": 107,
                                "end": 129
                            }
                        ],
                        "flags": 32,
                        "start": 107,
                        "end": 130
                    },
                    "flags": 32,
                    "start": 100,
                    "end": 130
                },
                "flags": 32,
                "start": 98,
                "end": 131
            },
            "flags": 16,
            "start": 98,
            "end": 132
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 0,
                        "start": 134,
                        "end": 139
                    },
                    "name": null,
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
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "start": 141,
                                    "end": 142
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": {
                                    "kind": 189,
                                    "decorators": null,
                                    "classKeyword": {
                                        "kind": 37822544,
                                        "flags": 0,
                                        "start": 144,
                                        "end": 150
                                    },
                                    "name": null,
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
                                                "setKeyword": {
                                                    "kind": 16498,
                                                    "flags": 64,
                                                    "start": 152,
                                                    "end": 156
                                                },
                                                "getKeyword": null,
                                                "method": {
                                                    "kind": 209,
                                                    "name": {
                                                        "kind": 67174651,
                                                        "text": "#a",
                                                        "flags": 96,
                                                        "start": 156,
                                                        "end": 159
                                                    },
                                                    "typeParameters": null,
                                                    "formalParameters": {
                                                        "kind": 214,
                                                        "formalParameterList": [],
                                                        "trailingComma": false,
                                                        "flags": 1024,
                                                        "start": 160,
                                                        "end": 161
                                                    },
                                                    "type": null,
                                                    "contents": {
                                                        "kind": 216,
                                                        "functionStatementList": {
                                                            "kind": 217,
                                                            "directives": [],
                                                            "statements": [],
                                                            "flags": 32,
                                                            "start": 163,
                                                            "end": 163
                                                        },
                                                        "flags": 32,
                                                        "start": 161,
                                                        "end": 165
                                                    },
                                                    "flags": 1024,
                                                    "start": 159,
                                                    "end": 165
                                                },
                                                "flags": 1024,
                                                "start": 152,
                                                "end": 165
                                            }
                                        ],
                                        "flags": 32,
                                        "start": 152,
                                        "end": 167
                                    },
                                    "flags": 32,
                                    "start": 144,
                                    "end": 167
                                },
                                "flags": 32,
                                "start": 141,
                                "end": 167
                            }
                        ],
                        "flags": 32,
                        "start": 141,
                        "end": 168
                    },
                    "flags": 32,
                    "start": 134,
                    "end": 168
                },
                "flags": 32,
                "start": 132,
                "end": 169
            },
            "flags": 16,
            "start": 132,
            "end": 170
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 0,
                        "start": 172,
                        "end": 177
                    },
                    "name": null,
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
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "start": 179,
                                    "end": 180
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": {
                                    "kind": 189,
                                    "decorators": null,
                                    "classKeyword": {
                                        "kind": 37822544,
                                        "flags": 0,
                                        "start": 182,
                                        "end": 188
                                    },
                                    "name": null,
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
                                                "getKeyword": {
                                                    "kind": 16499,
                                                    "flags": 64,
                                                    "start": 190,
                                                    "end": 194
                                                },
                                                "method": {
                                                    "kind": 209,
                                                    "name": {
                                                        "kind": 67174651,
                                                        "text": "#a",
                                                        "flags": 96,
                                                        "start": 194,
                                                        "end": 197
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
                                                                    "text": "foo",
                                                                    "rawText": "foo",
                                                                    "flags": 96,
                                                                    "start": 198,
                                                                    "end": 201
                                                                },
                                                                "optionalToken": null,
                                                                "type": null,
                                                                "initializer": null,
                                                                "flags": 32,
                                                                "start": 198,
                                                                "end": 201
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 544,
                                                        "start": 198,
                                                        "end": 202
                                                    },
                                                    "type": null,
                                                    "contents": {
                                                        "kind": 216,
                                                        "functionStatementList": {
                                                            "kind": 217,
                                                            "directives": [],
                                                            "statements": [],
                                                            "flags": 32,
                                                            "start": 204,
                                                            "end": 204
                                                        },
                                                        "flags": 32,
                                                        "start": 202,
                                                        "end": 206
                                                    },
                                                    "flags": 512,
                                                    "start": 197,
                                                    "end": 206
                                                },
                                                "flags": 512,
                                                "start": 190,
                                                "end": 206
                                            }
                                        ],
                                        "flags": 32,
                                        "start": 190,
                                        "end": 208
                                    },
                                    "flags": 32,
                                    "start": 182,
                                    "end": 208
                                },
                                "flags": 32,
                                "start": 179,
                                "end": 208
                            }
                        ],
                        "flags": 32,
                        "start": 179,
                        "end": 209
                    },
                    "flags": 32,
                    "start": 172,
                    "end": 209
                },
                "flags": 32,
                "start": 170,
                "end": 210
            },
            "flags": 16,
            "start": 170,
            "end": 211
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 0,
                        "start": 213,
                        "end": 218
                    },
                    "name": null,
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
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "start": 220,
                                    "end": 221
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": {
                                    "kind": 189,
                                    "decorators": null,
                                    "classKeyword": {
                                        "kind": 37822544,
                                        "flags": 0,
                                        "start": 223,
                                        "end": 229
                                    },
                                    "name": null,
                                    "typeParameters": null,
                                    "classHeritage": null,
                                    "members": {
                                        "kind": 277,
                                        "elements": [
                                            {
                                                "kind": 278,
                                                "declareToken": null,
                                                "decorators": null,
                                                "generatorToken": {
                                                    "kind": 67143222,
                                                    "flags": 64,
                                                    "start": 231,
                                                    "end": 233
                                                },
                                                "staticKeyword": null,
                                                "asyncKeyword": null,
                                                "setKeyword": null,
                                                "getKeyword": null,
                                                "method": {
                                                    "kind": 209,
                                                    "name": {
                                                        "kind": 67174651,
                                                        "text": "#a",
                                                        "flags": 96,
                                                        "start": 233,
                                                        "end": 235
                                                    },
                                                    "typeParameters": null,
                                                    "formalParameters": {
                                                        "kind": 214,
                                                        "formalParameterList": [],
                                                        "trailingComma": false,
                                                        "flags": 0,
                                                        "start": 236,
                                                        "end": 237
                                                    },
                                                    "type": null,
                                                    "contents": {
                                                        "kind": 216,
                                                        "functionStatementList": {
                                                            "kind": 217,
                                                            "directives": [],
                                                            "statements": [],
                                                            "flags": 32,
                                                            "start": 239,
                                                            "end": 239
                                                        },
                                                        "flags": 32,
                                                        "start": 237,
                                                        "end": 241
                                                    },
                                                    "flags": 0,
                                                    "start": 235,
                                                    "end": 241
                                                },
                                                "flags": 0,
                                                "start": 231,
                                                "end": 241
                                            }
                                        ],
                                        "flags": 32,
                                        "start": 231,
                                        "end": 243
                                    },
                                    "flags": 32,
                                    "start": 223,
                                    "end": 243
                                },
                                "flags": 32,
                                "start": 220,
                                "end": 243
                            }
                        ],
                        "flags": 32,
                        "start": 220,
                        "end": 244
                    },
                    "flags": 32,
                    "start": 213,
                    "end": 244
                },
                "flags": 32,
                "start": 211,
                "end": 245
            },
            "flags": 16,
            "start": 211,
            "end": 246
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 0,
                        "start": 248,
                        "end": 253
                    },
                    "name": null,
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
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "start": 255,
                                    "end": 256
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": {
                                    "kind": 189,
                                    "decorators": null,
                                    "classKeyword": {
                                        "kind": 37822544,
                                        "flags": 0,
                                        "start": 258,
                                        "end": 264
                                    },
                                    "name": null,
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
                                                "asyncKeyword": {
                                                    "kind": 82031,
                                                    "flags": 64,
                                                    "start": 266,
                                                    "end": 272
                                                },
                                                "setKeyword": null,
                                                "getKeyword": null,
                                                "method": {
                                                    "kind": 209,
                                                    "name": {
                                                        "kind": 67174651,
                                                        "text": "#a",
                                                        "flags": 96,
                                                        "start": 272,
                                                        "end": 275
                                                    },
                                                    "typeParameters": null,
                                                    "formalParameters": {
                                                        "kind": 214,
                                                        "formalParameterList": [],
                                                        "trailingComma": false,
                                                        "flags": 256,
                                                        "start": 276,
                                                        "end": 277
                                                    },
                                                    "type": null,
                                                    "contents": {
                                                        "kind": 216,
                                                        "functionStatementList": {
                                                            "kind": 217,
                                                            "directives": [],
                                                            "statements": [],
                                                            "flags": 32,
                                                            "start": 279,
                                                            "end": 279
                                                        },
                                                        "flags": 32,
                                                        "start": 277,
                                                        "end": 281
                                                    },
                                                    "flags": 256,
                                                    "start": 275,
                                                    "end": 281
                                                },
                                                "flags": 256,
                                                "start": 266,
                                                "end": 281
                                            }
                                        ],
                                        "flags": 32,
                                        "start": 266,
                                        "end": 283
                                    },
                                    "flags": 32,
                                    "start": 258,
                                    "end": 283
                                },
                                "flags": 32,
                                "start": 255,
                                "end": 283
                            }
                        ],
                        "flags": 32,
                        "start": 255,
                        "end": 284
                    },
                    "flags": 32,
                    "start": 248,
                    "end": 284
                },
                "flags": 32,
                "start": 246,
                "end": 285
            },
            "flags": 16,
            "start": 246,
            "end": 286
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 0,
                        "start": 288,
                        "end": 293
                    },
                    "name": null,
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
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "start": 295,
                                    "end": 296
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": {
                                    "kind": 189,
                                    "decorators": null,
                                    "classKeyword": {
                                        "kind": 37822544,
                                        "flags": 0,
                                        "start": 298,
                                        "end": 304
                                    },
                                    "name": null,
                                    "typeParameters": null,
                                    "classHeritage": null,
                                    "members": {
                                        "kind": 277,
                                        "elements": [
                                            {
                                                "kind": 278,
                                                "declareToken": null,
                                                "decorators": null,
                                                "generatorToken": {
                                                    "kind": 67143222,
                                                    "flags": 64,
                                                    "start": 312,
                                                    "end": 314
                                                },
                                                "staticKeyword": null,
                                                "asyncKeyword": {
                                                    "kind": 82031,
                                                    "flags": 64,
                                                    "start": 306,
                                                    "end": 312
                                                },
                                                "setKeyword": null,
                                                "getKeyword": null,
                                                "method": {
                                                    "kind": 209,
                                                    "name": {
                                                        "kind": 67174651,
                                                        "text": "#a",
                                                        "flags": 96,
                                                        "start": 314,
                                                        "end": 316
                                                    },
                                                    "typeParameters": null,
                                                    "formalParameters": {
                                                        "kind": 214,
                                                        "formalParameterList": [],
                                                        "trailingComma": false,
                                                        "flags": 384,
                                                        "start": 317,
                                                        "end": 318
                                                    },
                                                    "type": null,
                                                    "contents": {
                                                        "kind": 216,
                                                        "functionStatementList": {
                                                            "kind": 217,
                                                            "directives": [],
                                                            "statements": [],
                                                            "flags": 32,
                                                            "start": 320,
                                                            "end": 320
                                                        },
                                                        "flags": 32,
                                                        "start": 318,
                                                        "end": 322
                                                    },
                                                    "flags": 384,
                                                    "start": 316,
                                                    "end": 322
                                                },
                                                "flags": 384,
                                                "start": 306,
                                                "end": 322
                                            }
                                        ],
                                        "flags": 32,
                                        "start": 306,
                                        "end": 324
                                    },
                                    "flags": 32,
                                    "start": 298,
                                    "end": 324
                                },
                                "flags": 32,
                                "start": 295,
                                "end": 324
                            }
                        ],
                        "flags": 32,
                        "start": 295,
                        "end": 325
                    },
                    "flags": 32,
                    "start": 288,
                    "end": 325
                },
                "flags": 32,
                "start": 286,
                "end": 326
            },
            "flags": 16,
            "start": 286,
            "end": 327
        }
    ],
    "isModule": false,
    "source": "(class {a = class { #a = 1 }});\n(class {a = class { #a = () => {} }});\n(class {a = class { #a }});\n(class {a = class { #a() { } }});\n(class {a = class { get #a() { } }});\n(class {a = class { set #a(foo) { } }});\n(class {a = class { *#a() { } }});\n(class {a = class { async #a() { } }});\n(class {a = class { async *#a() { } }});",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 327
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

