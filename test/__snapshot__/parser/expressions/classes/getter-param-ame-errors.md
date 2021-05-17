# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: false }
`````

## Input

`````js

class C { get name(interface) {} }

class C { get name(public) {} }

class C { get name(private) {} }

'use strict'; class C { get name(implements) {} }

'use strict'; class C { get name(yield) {} }

'use strict'; class C { get name(var) {} }

'use strict'; (class { get name(package) {} })

'use strict'; (class { get name(static) {} })

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
                "flags": 1,
                "start": 0,
                "end": 6
            },
            "name": {
                "kind": 134299649,
                "text": "C",
                "rawText": "C",
                "flags": 96,
                "start": 6,
                "end": 8
            },
            "typeParameters": null,
            "members": {
                "kind": 277,
                "classHeritage": null,
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
                            "start": 10,
                            "end": 14
                        },
                        "getKeyword": null,
                        "method": {
                            "kind": 209,
                            "name": {
                                "kind": 134299649,
                                "text": "name",
                                "rawText": "name",
                                "flags": 96,
                                "start": 14,
                                "end": 19
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
                                            "text": "interface",
                                            "rawText": "interface",
                                            "flags": 96,
                                            "start": 20,
                                            "end": 29
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": null,
                                        "flags": 32,
                                        "start": 20,
                                        "end": 29
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 1056,
                                "start": 20,
                                "end": 30
                            },
                            "type": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "start": 32,
                                    "end": 32
                                },
                                "flags": 32,
                                "start": 30,
                                "end": 33
                            },
                            "flags": 1024,
                            "start": 19,
                            "end": 33
                        },
                        "flags": 1024,
                        "start": 10,
                        "end": 33
                    }
                ],
                "flags": 32,
                "start": 10,
                "end": 35
            },
            "flags": 16,
            "start": 0,
            "end": 35
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 1,
                "start": 35,
                "end": 42
            },
            "name": {
                "kind": 134299649,
                "text": "C",
                "rawText": "C",
                "flags": 96,
                "start": 42,
                "end": 44
            },
            "typeParameters": null,
            "members": {
                "kind": 277,
                "classHeritage": null,
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
                            "start": 46,
                            "end": 50
                        },
                        "getKeyword": null,
                        "method": {
                            "kind": 209,
                            "name": {
                                "kind": 134299649,
                                "text": "name",
                                "rawText": "name",
                                "flags": 96,
                                "start": 50,
                                "end": 55
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
                                            "text": "public",
                                            "rawText": "public",
                                            "flags": 96,
                                            "start": 56,
                                            "end": 62
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": null,
                                        "flags": 32,
                                        "start": 56,
                                        "end": 62
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 1056,
                                "start": 56,
                                "end": 63
                            },
                            "type": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "start": 65,
                                    "end": 65
                                },
                                "flags": 32,
                                "start": 63,
                                "end": 66
                            },
                            "flags": 1024,
                            "start": 55,
                            "end": 66
                        },
                        "flags": 1024,
                        "start": 46,
                        "end": 66
                    }
                ],
                "flags": 32,
                "start": 46,
                "end": 68
            },
            "flags": 16,
            "start": 35,
            "end": 68
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 1,
                "start": 68,
                "end": 75
            },
            "name": {
                "kind": 134299649,
                "text": "C",
                "rawText": "C",
                "flags": 96,
                "start": 75,
                "end": 77
            },
            "typeParameters": null,
            "members": {
                "kind": 277,
                "classHeritage": null,
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
                            "start": 79,
                            "end": 83
                        },
                        "getKeyword": null,
                        "method": {
                            "kind": 209,
                            "name": {
                                "kind": 134299649,
                                "text": "name",
                                "rawText": "name",
                                "flags": 96,
                                "start": 83,
                                "end": 88
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
                                            "text": "private",
                                            "rawText": "private",
                                            "flags": 96,
                                            "start": 89,
                                            "end": 96
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": null,
                                        "flags": 32,
                                        "start": 89,
                                        "end": 96
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 1056,
                                "start": 89,
                                "end": 97
                            },
                            "type": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "start": 99,
                                    "end": 99
                                },
                                "flags": 32,
                                "start": 97,
                                "end": 100
                            },
                            "flags": 1024,
                            "start": 88,
                            "end": 100
                        },
                        "flags": 1024,
                        "start": 79,
                        "end": 100
                    }
                ],
                "flags": 32,
                "start": 79,
                "end": 102
            },
            "flags": 16,
            "start": 68,
            "end": 102
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "use strict",
                "rawText": "'use strict'",
                "flags": 4194401,
                "start": 102,
                "end": 116
            },
            "flags": 16,
            "start": 102,
            "end": 117
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 0,
                "start": 117,
                "end": 123
            },
            "name": {
                "kind": 134299649,
                "text": "C",
                "rawText": "C",
                "flags": 96,
                "start": 123,
                "end": 125
            },
            "typeParameters": null,
            "members": {
                "kind": 277,
                "classHeritage": null,
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
                            "start": 127,
                            "end": 131
                        },
                        "getKeyword": null,
                        "method": {
                            "kind": 209,
                            "name": {
                                "kind": 134299649,
                                "text": "name",
                                "rawText": "name",
                                "flags": 96,
                                "start": 131,
                                "end": 136
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
                                            "text": "implements",
                                            "rawText": "implements",
                                            "flags": 96,
                                            "start": 137,
                                            "end": 147
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": null,
                                        "flags": 32,
                                        "start": 137,
                                        "end": 147
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 1056,
                                "start": 137,
                                "end": 148
                            },
                            "type": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "start": 150,
                                    "end": 150
                                },
                                "flags": 32,
                                "start": 148,
                                "end": 151
                            },
                            "flags": 1024,
                            "start": 136,
                            "end": 151
                        },
                        "flags": 1024,
                        "start": 127,
                        "end": 151
                    }
                ],
                "flags": 32,
                "start": 127,
                "end": 153
            },
            "flags": 16,
            "start": 117,
            "end": 153
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "use strict",
                "rawText": "'use strict'",
                "flags": 4194401,
                "start": 153,
                "end": 167
            },
            "flags": 16,
            "start": 153,
            "end": 168
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 0,
                "start": 168,
                "end": 174
            },
            "name": {
                "kind": 134299649,
                "text": "C",
                "rawText": "C",
                "flags": 96,
                "start": 174,
                "end": 176
            },
            "typeParameters": null,
            "members": {
                "kind": 277,
                "classHeritage": null,
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
                            "start": 178,
                            "end": 182
                        },
                        "getKeyword": null,
                        "method": {
                            "kind": 209,
                            "name": {
                                "kind": 134299649,
                                "text": "name",
                                "rawText": "name",
                                "flags": 96,
                                "start": 182,
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
                                            "text": "yield",
                                            "rawText": "yield",
                                            "flags": 96,
                                            "start": 188,
                                            "end": 193
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": null,
                                        "flags": 32,
                                        "start": 188,
                                        "end": 193
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 1056,
                                "start": 188,
                                "end": 194
                            },
                            "type": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "start": 196,
                                    "end": 196
                                },
                                "flags": 32,
                                "start": 194,
                                "end": 197
                            },
                            "flags": 1024,
                            "start": 187,
                            "end": 197
                        },
                        "flags": 1024,
                        "start": 178,
                        "end": 197
                    }
                ],
                "flags": 32,
                "start": 178,
                "end": 199
            },
            "flags": 16,
            "start": 168,
            "end": 199
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "use strict",
                "rawText": "'use strict'",
                "flags": 4194401,
                "start": 199,
                "end": 213
            },
            "flags": 16,
            "start": 199,
            "end": 214
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 0,
                "start": 214,
                "end": 220
            },
            "name": {
                "kind": 134299649,
                "text": "C",
                "rawText": "C",
                "flags": 96,
                "start": 220,
                "end": 222
            },
            "typeParameters": null,
            "members": {
                "kind": 277,
                "classHeritage": null,
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
                            "start": 224,
                            "end": 228
                        },
                        "getKeyword": null,
                        "method": {
                            "kind": 209,
                            "name": {
                                "kind": 134299649,
                                "text": "name",
                                "rawText": "name",
                                "flags": 96,
                                "start": 228,
                                "end": 233
                            },
                            "typeParameters": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 1024,
                                "start": 234,
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
                                    "start": 234,
                                    "end": 234
                                },
                                "flags": 32,
                                "start": 234,
                                "end": 234
                            },
                            "flags": 1024,
                            "start": 233,
                            "end": 234
                        },
                        "flags": 1024,
                        "start": 224,
                        "end": 234
                    },
                    {
                        "kind": 280,
                        "decorators": null,
                        "declaredToken": null,
                        "staticToken": null,
                        "asyncKeyword": null,
                        "key": {
                            "kind": 134299649,
                            "text": "var",
                            "rawText": "var",
                            "flags": 96,
                            "start": 234,
                            "end": 237
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 32,
                        "start": 234,
                        "end": 237
                    }
                ],
                "flags": 32,
                "start": 224,
                "end": 237
            },
            "flags": 16,
            "start": 214,
            "end": 237
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "flags": 16,
                "start": 240,
                "end": 240
            },
            "flags": 16,
            "start": 238,
            "end": 241
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "use strict",
                "rawText": "'use strict'",
                "flags": 4194401,
                "start": 243,
                "end": 257
            },
            "flags": 16,
            "start": 243,
            "end": 258
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
                        "start": 260,
                        "end": 265
                    },
                    "name": null,
                    "typeParameters": null,
                    "members": {
                        "kind": 277,
                        "classHeritage": null,
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
                                    "start": 267,
                                    "end": 271
                                },
                                "getKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "name",
                                        "rawText": "name",
                                        "flags": 96,
                                        "start": 271,
                                        "end": 276
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
                                                    "text": "package",
                                                    "rawText": "package",
                                                    "flags": 96,
                                                    "start": 277,
                                                    "end": 284
                                                },
                                                "optionalToken": null,
                                                "type": null,
                                                "initializer": null,
                                                "flags": 32,
                                                "start": 277,
                                                "end": 284
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 1056,
                                        "start": 277,
                                        "end": 285
                                    },
                                    "type": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "start": 287,
                                            "end": 287
                                        },
                                        "flags": 32,
                                        "start": 285,
                                        "end": 288
                                    },
                                    "flags": 1024,
                                    "start": 276,
                                    "end": 288
                                },
                                "flags": 1024,
                                "start": 267,
                                "end": 288
                            }
                        ],
                        "flags": 32,
                        "start": 267,
                        "end": 290
                    },
                    "flags": 32,
                    "start": 260,
                    "end": 290
                },
                "flags": 32,
                "start": 258,
                "end": 291
            },
            "flags": 16,
            "start": 258,
            "end": 291
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "use strict",
                "rawText": "'use strict'",
                "flags": 4194401,
                "start": 291,
                "end": 305
            },
            "flags": 16,
            "start": 291,
            "end": 306
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
                        "start": 308,
                        "end": 313
                    },
                    "name": null,
                    "typeParameters": null,
                    "members": {
                        "kind": 277,
                        "classHeritage": null,
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
                                    "start": 315,
                                    "end": 319
                                },
                                "getKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "name",
                                        "rawText": "name",
                                        "flags": 96,
                                        "start": 319,
                                        "end": 324
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
                                                    "text": "static",
                                                    "rawText": "static",
                                                    "flags": 96,
                                                    "start": 325,
                                                    "end": 331
                                                },
                                                "optionalToken": null,
                                                "type": null,
                                                "initializer": null,
                                                "flags": 32,
                                                "start": 325,
                                                "end": 331
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 1056,
                                        "start": 325,
                                        "end": 332
                                    },
                                    "type": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "start": 334,
                                            "end": 334
                                        },
                                        "flags": 32,
                                        "start": 332,
                                        "end": 335
                                    },
                                    "flags": 1024,
                                    "start": 324,
                                    "end": 335
                                },
                                "flags": 1024,
                                "start": 315,
                                "end": 335
                            }
                        ],
                        "flags": 32,
                        "start": 315,
                        "end": 337
                    },
                    "flags": 32,
                    "start": 308,
                    "end": 337
                },
                "flags": 32,
                "start": 306,
                "end": 338
            },
            "flags": 16,
            "start": 306,
            "end": 338
        }
    ],
    "isModule": false,
    "source": "\nclass C { get name(interface) {} }\n\nclass C { get name(public) {} }\n\nclass C { get name(private) {} }\n\n'use strict'; class C { get name(implements) {} }\n\n'use strict'; class C { get name(yield) {} }\n\n'use strict'; class C { get name(var) {} }\n\n'use strict'; (class { get name(package) {} })\n\n'use strict'; (class { get name(static) {} })\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 339
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ A 'get' accessor cannot have parameters. - start: 20, end: 29
✖ A 'get' accessor cannot have parameters. - start: 56, end: 62
✖ Identifier expected. Reserved word in strict mode - start: 56, end: 62
✖ A 'get' accessor cannot have parameters. - start: 89, end: 96
✖ Identifier expected. Reserved word in strict mode - start: 89, end: 96
✖ A 'get' accessor cannot have parameters. - start: 137, end: 147
✖ Identifier expected. Reserved word in strict mode - start: 137, end: 147
✖ A 'get' accessor cannot have parameters. - start: 188, end: 193
✖ `Yield` expression cannot be used in function parameters - start: 188, end: 193
✖ A 'get' accessor cannot have parameters. - start: 234, end: 237
✖ Expected a ')' to match the '(' token here - start: 234, end: 237
✖ Unexpected token. - start: 234, end: 237
✖ The parser expected to find a '}' to match the '{' token here - start: 237, end: 238
✖ Declaration or statement expected - start: 241, end: 243
✖ A 'get' accessor cannot have parameters. - start: 277, end: 284
✖ A 'get' accessor cannot have parameters. - start: 325, end: 331

```

