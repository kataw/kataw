# Kataw parser test case

## Input

`````js
function f(x) { 'use strict' }

function f([x]) { 'use strict' }

function f({x}) { 'use strict' }

function f(x = 1) { 'use strict' }

function f(x, ...y) { 'use strict' }

(function([x]) { 'use strict' });

(function(x = 1) { 'use strict' });

(function(x, ...y) { 'use strict' });
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
                "flags": 0,
                "start": 0,
                "end": 8
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 8,
                "end": 10
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
                            "start": 11,
                            "end": 12
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 32,
                        "start": 11,
                        "end": 12
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 10,
                "end": 13
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [
                        {
                            "kind": 201392131,
                            "text": "use strict",
                            "rawText": "'use strict'",
                            "flags": 4194400,
                            "start": 15,
                            "end": 28
                        }
                    ],
                    "statements": [],
                    "flags": 4194336,
                    "start": 15,
                    "end": 28
                },
                "flags": 32,
                "start": 13,
                "end": 30
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 30
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 1,
                "start": 30,
                "end": 40
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 40,
                "end": 42
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [
                    {
                        "kind": 215,
                        "ellipsisToken": null,
                        "binding": {
                            "kind": 201,
                            "elementList": {
                                "kind": 202,
                                "elements": [
                                    {
                                        "kind": 244,
                                        "ellipsisToken": null,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 44,
                                            "end": 45
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": null,
                                        "flags": 32,
                                        "start": 44,
                                        "end": 45
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 0,
                                "start": 44,
                                "end": 45
                            },
                            "flags": 32,
                            "start": 43,
                            "end": 46
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 34,
                        "start": 43,
                        "end": 46
                    }
                ],
                "trailingComma": false,
                "flags": 34,
                "start": 42,
                "end": 47
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [
                        {
                            "kind": 201392131,
                            "text": "use strict",
                            "rawText": "'use strict'",
                            "flags": 4194400,
                            "start": 49,
                            "end": 62
                        }
                    ],
                    "statements": [],
                    "flags": 4194336,
                    "start": 49,
                    "end": 62
                },
                "flags": 32,
                "start": 47,
                "end": 64
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 16,
            "start": 30,
            "end": 64
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 1,
                "start": 64,
                "end": 74
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 74,
                "end": 76
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [
                    {
                        "kind": 215,
                        "ellipsisToken": null,
                        "binding": {
                            "kind": 212,
                            "propertyList": {
                                "kind": 213,
                                "properties": [
                                    {
                                        "kind": 222,
                                        "ellipsisToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 78,
                                            "end": 79
                                        },
                                        "right": null,
                                        "flags": 32,
                                        "start": 78,
                                        "end": 79
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 78,
                                "end": 79
                            },
                            "flags": 32,
                            "start": 77,
                            "end": 80
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 34,
                        "start": 77,
                        "end": 80
                    }
                ],
                "trailingComma": false,
                "flags": 34,
                "start": 76,
                "end": 81
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [
                        {
                            "kind": 201392131,
                            "text": "use strict",
                            "rawText": "'use strict'",
                            "flags": 4194400,
                            "start": 83,
                            "end": 96
                        }
                    ],
                    "statements": [],
                    "flags": 4194336,
                    "start": 83,
                    "end": 96
                },
                "flags": 32,
                "start": 81,
                "end": 98
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 16,
            "start": 64,
            "end": 98
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 1,
                "start": 98,
                "end": 108
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 108,
                "end": 110
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
                            "start": 111,
                            "end": 112
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 201392130,
                            "text": 1,
                            "rawText": "1",
                            "flags": 96,
                            "start": 114,
                            "end": 116
                        },
                        "flags": 34,
                        "start": 111,
                        "end": 116
                    }
                ],
                "trailingComma": false,
                "flags": 34,
                "start": 110,
                "end": 117
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [
                        {
                            "kind": 201392131,
                            "text": "use strict",
                            "rawText": "'use strict'",
                            "flags": 4194400,
                            "start": 119,
                            "end": 132
                        }
                    ],
                    "statements": [],
                    "flags": 4194336,
                    "start": 119,
                    "end": 132
                },
                "flags": 32,
                "start": 117,
                "end": 134
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 16,
            "start": 98,
            "end": 134
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 1,
                "start": 134,
                "end": 144
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 144,
                "end": 146
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
                            "start": 147,
                            "end": 148
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 32,
                        "start": 147,
                        "end": 148
                    },
                    {
                        "kind": 215,
                        "ellipsisToken": {
                            "kind": 524302,
                            "flags": 64,
                            "start": 149,
                            "end": 153
                        },
                        "binding": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 153,
                            "end": 154
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 34,
                        "start": 149,
                        "end": 154
                    }
                ],
                "trailingComma": false,
                "flags": 34,
                "start": 146,
                "end": 155
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [
                        {
                            "kind": 201392131,
                            "text": "use strict",
                            "rawText": "'use strict'",
                            "flags": 4194400,
                            "start": 157,
                            "end": 170
                        }
                    ],
                    "statements": [],
                    "flags": 4194336,
                    "start": 157,
                    "end": 170
                },
                "flags": 32,
                "start": 155,
                "end": 172
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 16,
            "start": 134,
            "end": 172
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 177,
                    "asyncKeyword": null,
                    "functionKeyword": {
                        "kind": 37822554,
                        "flags": 0,
                        "start": 175,
                        "end": 183
                    },
                    "generatorToken": null,
                    "name": null,
                    "formalParameters": {
                        "kind": 214,
                        "formalParameterList": [
                            {
                                "kind": 215,
                                "ellipsisToken": null,
                                "binding": {
                                    "kind": 201,
                                    "elementList": {
                                        "kind": 202,
                                        "elements": [
                                            {
                                                "kind": 244,
                                                "ellipsisToken": null,
                                                "binding": {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "start": 185,
                                                    "end": 186
                                                },
                                                "optionalToken": null,
                                                "type": null,
                                                "initializer": null,
                                                "flags": 32,
                                                "start": 185,
                                                "end": 186
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 0,
                                        "start": 185,
                                        "end": 186
                                    },
                                    "flags": 32,
                                    "start": 184,
                                    "end": 187
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": null,
                                "flags": 34,
                                "start": 184,
                                "end": 187
                            }
                        ],
                        "trailingComma": false,
                        "flags": 34,
                        "start": 183,
                        "end": 188
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [
                                {
                                    "kind": 201392131,
                                    "text": "use strict",
                                    "rawText": "'use strict'",
                                    "flags": 4194400,
                                    "start": 190,
                                    "end": 203
                                }
                            ],
                            "statements": [],
                            "flags": 4194336,
                            "start": 190,
                            "end": 203
                        },
                        "flags": 32,
                        "start": 188,
                        "end": 205
                    },
                    "typeParameters": null,
                    "returnType": null,
                    "flags": 32,
                    "start": 175,
                    "end": 205
                },
                "flags": 32,
                "start": 172,
                "end": 206
            },
            "flags": 16,
            "start": 172,
            "end": 207
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 177,
                    "asyncKeyword": null,
                    "functionKeyword": {
                        "kind": 37822554,
                        "flags": 0,
                        "start": 210,
                        "end": 218
                    },
                    "generatorToken": null,
                    "name": null,
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
                                    "start": 219,
                                    "end": 220
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": {
                                    "kind": 201392130,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 96,
                                    "start": 222,
                                    "end": 224
                                },
                                "flags": 34,
                                "start": 219,
                                "end": 224
                            }
                        ],
                        "trailingComma": false,
                        "flags": 34,
                        "start": 218,
                        "end": 225
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [
                                {
                                    "kind": 201392131,
                                    "text": "use strict",
                                    "rawText": "'use strict'",
                                    "flags": 4194400,
                                    "start": 227,
                                    "end": 240
                                }
                            ],
                            "statements": [],
                            "flags": 4194336,
                            "start": 227,
                            "end": 240
                        },
                        "flags": 32,
                        "start": 225,
                        "end": 242
                    },
                    "typeParameters": null,
                    "returnType": null,
                    "flags": 32,
                    "start": 210,
                    "end": 242
                },
                "flags": 32,
                "start": 207,
                "end": 243
            },
            "flags": 16,
            "start": 207,
            "end": 244
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 177,
                    "asyncKeyword": null,
                    "functionKeyword": {
                        "kind": 37822554,
                        "flags": 0,
                        "start": 247,
                        "end": 255
                    },
                    "generatorToken": null,
                    "name": null,
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
                                    "start": 256,
                                    "end": 257
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": null,
                                "flags": 32,
                                "start": 256,
                                "end": 257
                            },
                            {
                                "kind": 215,
                                "ellipsisToken": {
                                    "kind": 524302,
                                    "flags": 64,
                                    "start": 258,
                                    "end": 262
                                },
                                "binding": {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 96,
                                    "start": 262,
                                    "end": 263
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": null,
                                "flags": 34,
                                "start": 258,
                                "end": 263
                            }
                        ],
                        "trailingComma": false,
                        "flags": 34,
                        "start": 255,
                        "end": 264
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [
                                {
                                    "kind": 201392131,
                                    "text": "use strict",
                                    "rawText": "'use strict'",
                                    "flags": 4194400,
                                    "start": 266,
                                    "end": 279
                                }
                            ],
                            "statements": [],
                            "flags": 4194336,
                            "start": 266,
                            "end": 279
                        },
                        "flags": 32,
                        "start": 264,
                        "end": 281
                    },
                    "typeParameters": null,
                    "returnType": null,
                    "flags": 32,
                    "start": 247,
                    "end": 281
                },
                "flags": 32,
                "start": 244,
                "end": 282
            },
            "flags": 16,
            "start": 244,
            "end": 283
        }
    ],
    "isModule": false,
    "source": "function f(x) { 'use strict' }\n\nfunction f([x]) { 'use strict' }\n\nfunction f({x}) { 'use strict' }\n\nfunction f(x = 1) { 'use strict' }\n\nfunction f(x, ...y) { 'use strict' }\n\n(function([x]) { 'use strict' });\n\n(function(x = 1) { 'use strict' });\n\n(function(x, ...y) { 'use strict' });",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 283
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ 'use strict' directive cannot be used with non-simple parameter list. - start: 62, end: 64
✖ 'use strict' directive cannot be used with non-simple parameter list. - start: 96, end: 98
✖ 'use strict' directive cannot be used with non-simple parameter list. - start: 132, end: 134
✖ 'use strict' directive cannot be used with non-simple parameter list. - start: 170, end: 172
✖ 'use strict' directive cannot be used with non-simple parameter list. - start: 203, end: 205
✖ 'use strict' directive cannot be used with non-simple parameter list. - start: 240, end: 242
✖ 'use strict' directive cannot be used with non-simple parameter list. - start: 279, end: 281

```

