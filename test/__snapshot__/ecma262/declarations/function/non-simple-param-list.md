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
                "flags": 64,
                "start": 0,
                "end": 8
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 8,
                "end": 10
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 11,
                        "end": 12
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 11,
                "end": 12
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
                "flags": 65,
                "start": 30,
                "end": 40
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 40,
                "end": 42
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 201,
                        "elementList": {
                            "kind": 324,
                            "elements": [
                                {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
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
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 43,
                "end": 46
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
                "flags": 65,
                "start": 64,
                "end": 74
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 74,
                "end": 76
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 212,
                        "propertyList": {
                            "kind": 213,
                            "properties": [
                                {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
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
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 77,
                "end": 80
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
                "flags": 65,
                "start": 98,
                "end": 108
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 108,
                "end": 110
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
                            "start": 111,
                            "end": 112
                        },
                        "optionalToken": null,
                        "type": null,
                        "right": {
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
                "start": 111,
                "end": 116
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
                "flags": 65,
                "start": 134,
                "end": 144
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 144,
                "end": 146
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 147,
                        "end": 148
                    },
                    {
                        "kind": 281,
                        "ellipsisToken": {
                            "kind": 524302,
                            "flags": 64,
                            "start": 149,
                            "end": 153
                        },
                        "left": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 153,
                            "end": 154
                        },
                        "optionalToken": null,
                        "type": null,
                        "right": null,
                        "flags": 34,
                        "start": 149,
                        "end": 154
                    }
                ],
                "trailingComma": false,
                "flags": 34,
                "start": 147,
                "end": 154
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
                        "flags": 64,
                        "start": 175,
                        "end": 183
                    },
                    "asteriskToken": null,
                    "name": null,
                    "typeParameters": null,
                    "formalParameterList": {
                        "kind": 214,
                        "formalParameters": [
                            {
                                "kind": 201,
                                "elementList": {
                                    "kind": 324,
                                    "elements": [
                                        {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
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
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 184,
                        "end": 187
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
                    "returnType": null,
                    "flags": 32,
                    "start": 175,
                    "end": 205
                },
                "flags": 172,
                "start": 33,
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
                        "flags": 64,
                        "start": 210,
                        "end": 218
                    },
                    "asteriskToken": null,
                    "name": null,
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
                                    "start": 219,
                                    "end": 220
                                },
                                "optionalToken": null,
                                "type": null,
                                "right": {
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
                        "start": 219,
                        "end": 224
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
                    "returnType": null,
                    "flags": 32,
                    "start": 210,
                    "end": 242
                },
                "flags": 207,
                "start": 33,
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
                        "flags": 64,
                        "start": 247,
                        "end": 255
                    },
                    "asteriskToken": null,
                    "name": null,
                    "typeParameters": null,
                    "formalParameterList": {
                        "kind": 214,
                        "formalParameters": [
                            {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 256,
                                "end": 257
                            },
                            {
                                "kind": 281,
                                "ellipsisToken": {
                                    "kind": 524302,
                                    "flags": 64,
                                    "start": 258,
                                    "end": 262
                                },
                                "left": {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 96,
                                    "start": 262,
                                    "end": 263
                                },
                                "optionalToken": null,
                                "type": null,
                                "right": null,
                                "flags": 34,
                                "start": 258,
                                "end": 263
                            }
                        ],
                        "trailingComma": false,
                        "flags": 34,
                        "start": 256,
                        "end": 263
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
                    "returnType": null,
                    "flags": 32,
                    "start": 247,
                    "end": 281
                },
                "flags": 244,
                "start": 33,
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

```

### Diagnostics

```javascript
✖ 'use strict' directive cannot be used with non-simple parameter list. - start: 111, end: 134
✖ 'use strict' directive cannot be used with non-simple parameter list. - start: 149, end: 172
✖ 'use strict' directive cannot be used with non-simple parameter list. - start: 219, end: 242
✖ 'use strict' directive cannot be used with non-simple parameter list. - start: 258, end: 281

```

