# Kataw parser test case

## Input

`````js
const a = function({ async = true }) {};

const b = function({ async: bar }) {};

const c = async ({ async: bar }) => {
  await baz;
};

const d = async ({ async = bar }) => {
  await baz;
};

const e = async function({ async: bar }) {
  await baz;
};

const f = async function({ async = bar }) {
  await baz;
};

const { async = true } = x;
`````

## Options

### Parser Options

`````js
{ allowTypes : true }
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 5
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 5,
                            "end": 7
                        },
                        "type": null,
                        "initializer": {
                            "kind": 177,
                            "asyncKeyword": null,
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 9,
                                "end": 18
                            },
                            "asteriskToken": null,
                            "name": null,
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
                                                    "kind": 281,
                                                    "ellipsisToken": null,
                                                    "left": {
                                                        "kind": 134299649,
                                                        "text": "async",
                                                        "rawText": "async",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 20,
                                                        "end": 26
                                                    },
                                                    "optionalToken": null,
                                                    "type": null,
                                                    "right": {
                                                        "kind": 24752947,
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 28,
                                                        "end": 33
                                                    },
                                                    "flags": 0,
                                                    "transformFlags": 4096,
                                                    "start": 20,
                                                    "end": 33
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 20,
                                            "end": 33
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 19,
                                        "end": 35
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 19,
                                "end": 35
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 38,
                                    "end": 38
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 36,
                                "end": 39
                            },
                            "returnType": null,
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 9,
                            "end": 39
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 5,
                        "end": 39
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 5,
                "end": 39
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 0,
            "end": 40
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "transformFlags": 0,
                "start": 40,
                "end": 47
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 47,
                            "end": 49
                        },
                        "type": null,
                        "initializer": {
                            "kind": 177,
                            "asyncKeyword": null,
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 51,
                                "end": 60
                            },
                            "asteriskToken": null,
                            "name": null,
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
                                                    "kind": 329,
                                                    "key": {
                                                        "kind": 134299649,
                                                        "text": "async",
                                                        "rawText": "async",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 62,
                                                        "end": 68
                                                    },
                                                    "value": {
                                                        "kind": 134299649,
                                                        "text": "bar",
                                                        "rawText": "bar",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 69,
                                                        "end": 73
                                                    },
                                                    "initializer": null,
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 62,
                                                    "end": 73
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 62,
                                            "end": 73
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 61,
                                        "end": 75
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 61,
                                "end": 75
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 78,
                                    "end": 78
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 76,
                                "end": 79
                            },
                            "returnType": null,
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 51,
                            "end": 79
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 47,
                        "end": 79
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 47,
                "end": 79
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 40,
            "end": 80
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "transformFlags": 0,
                "start": 80,
                "end": 87
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "c",
                            "rawText": "c",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 87,
                            "end": 89
                        },
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "asyncKeyword": {
                                "kind": 82031,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 91,
                                "end": 97
                            },
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 342,
                                "parameters": [
                                    {
                                        "kind": 212,
                                        "propertyList": {
                                            "kind": 213,
                                            "properties": [
                                                {
                                                    "kind": 329,
                                                    "key": {
                                                        "kind": 134299649,
                                                        "text": "async",
                                                        "rawText": "async",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 100,
                                                        "end": 106
                                                    },
                                                    "value": {
                                                        "kind": 134299649,
                                                        "text": "bar",
                                                        "rawText": "bar",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 107,
                                                        "end": 111
                                                    },
                                                    "initializer": null,
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 100,
                                                    "end": 111
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 100,
                                            "end": 111
                                        },
                                        "flags": 48,
                                        "transformFlags": 0,
                                        "start": 99,
                                        "end": 113
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 34,
                                "transformFlags": 0,
                                "start": 99,
                                "end": 114
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 114,
                                "end": 117
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
                                                "kind": 208,
                                                "awaitKeyword": {
                                                    "kind": 82196,
                                                    "flags": 65,
                                                    "transformFlags": 0,
                                                    "start": 119,
                                                    "end": 127
                                                },
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "baz",
                                                    "rawText": "baz",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 127,
                                                    "end": 131
                                                },
                                                "flags": 32,
                                                "transformFlags": 4096,
                                                "start": 119,
                                                "end": 131
                                            },
                                            "flags": 16,
                                            "transformFlags": 4096,
                                            "start": 119,
                                            "end": 132
                                        }
                                    ],
                                    "flags": 33,
                                    "transformFlags": 0,
                                    "start": 119,
                                    "end": 132
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 117,
                                "end": 134
                            },
                            "flags": 290,
                            "transformFlags": 0,
                            "start": 91,
                            "end": 134
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 87,
                        "end": 134
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 87,
                "end": 134
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 80,
            "end": 135
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "transformFlags": 0,
                "start": 135,
                "end": 142
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "d",
                            "rawText": "d",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 142,
                            "end": 144
                        },
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "asyncKeyword": {
                                "kind": 82031,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 146,
                                "end": 152
                            },
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 342,
                                "parameters": [
                                    {
                                        "kind": 212,
                                        "propertyList": {
                                            "kind": 213,
                                            "properties": [
                                                {
                                                    "kind": 281,
                                                    "ellipsisToken": null,
                                                    "left": {
                                                        "kind": 134299649,
                                                        "text": "async",
                                                        "rawText": "async",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 155,
                                                        "end": 161
                                                    },
                                                    "optionalToken": null,
                                                    "type": null,
                                                    "right": {
                                                        "kind": 134299649,
                                                        "text": "bar",
                                                        "rawText": "bar",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 163,
                                                        "end": 167
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 4096,
                                                    "start": 155,
                                                    "end": 167
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 155,
                                            "end": 167
                                        },
                                        "flags": 48,
                                        "transformFlags": 0,
                                        "start": 154,
                                        "end": 169
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 34,
                                "transformFlags": 0,
                                "start": 154,
                                "end": 170
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 170,
                                "end": 173
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
                                                "kind": 208,
                                                "awaitKeyword": {
                                                    "kind": 82196,
                                                    "flags": 65,
                                                    "transformFlags": 0,
                                                    "start": 175,
                                                    "end": 183
                                                },
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "baz",
                                                    "rawText": "baz",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 183,
                                                    "end": 187
                                                },
                                                "flags": 32,
                                                "transformFlags": 4096,
                                                "start": 175,
                                                "end": 187
                                            },
                                            "flags": 16,
                                            "transformFlags": 4096,
                                            "start": 175,
                                            "end": 188
                                        }
                                    ],
                                    "flags": 33,
                                    "transformFlags": 0,
                                    "start": 175,
                                    "end": 188
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 173,
                                "end": 190
                            },
                            "flags": 290,
                            "transformFlags": 0,
                            "start": 146,
                            "end": 190
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 142,
                        "end": 190
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 142,
                "end": 190
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 135,
            "end": 191
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "transformFlags": 0,
                "start": 191,
                "end": 198
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "e",
                            "rawText": "e",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 198,
                            "end": 200
                        },
                        "type": null,
                        "initializer": {
                            "kind": 177,
                            "asyncKeyword": {
                                "kind": 82031,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 202,
                                "end": 208
                            },
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 208,
                                "end": 217
                            },
                            "asteriskToken": null,
                            "name": null,
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
                                                    "kind": 329,
                                                    "key": {
                                                        "kind": 134299649,
                                                        "text": "async",
                                                        "rawText": "async",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 219,
                                                        "end": 225
                                                    },
                                                    "value": {
                                                        "kind": 134299649,
                                                        "text": "bar",
                                                        "rawText": "bar",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 226,
                                                        "end": 230
                                                    },
                                                    "initializer": null,
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 219,
                                                    "end": 230
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 219,
                                            "end": 230
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 218,
                                        "end": 232
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 218,
                                "end": 232
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
                                                "kind": 208,
                                                "awaitKeyword": {
                                                    "kind": 82196,
                                                    "flags": 65,
                                                    "transformFlags": 0,
                                                    "start": 235,
                                                    "end": 243
                                                },
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "baz",
                                                    "rawText": "baz",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 243,
                                                    "end": 247
                                                },
                                                "flags": 32,
                                                "transformFlags": 4096,
                                                "start": 235,
                                                "end": 247
                                            },
                                            "flags": 16,
                                            "transformFlags": 4096,
                                            "start": 235,
                                            "end": 248
                                        }
                                    ],
                                    "flags": 33,
                                    "transformFlags": 0,
                                    "start": 235,
                                    "end": 248
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 233,
                                "end": 250
                            },
                            "returnType": null,
                            "flags": 160,
                            "transformFlags": 0,
                            "start": 202,
                            "end": 250
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 198,
                        "end": 250
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 198,
                "end": 250
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 191,
            "end": 251
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "transformFlags": 0,
                "start": 251,
                "end": 258
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "f",
                            "rawText": "f",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 258,
                            "end": 260
                        },
                        "type": null,
                        "initializer": {
                            "kind": 177,
                            "asyncKeyword": {
                                "kind": 82031,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 262,
                                "end": 268
                            },
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 268,
                                "end": 277
                            },
                            "asteriskToken": null,
                            "name": null,
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
                                                    "kind": 281,
                                                    "ellipsisToken": null,
                                                    "left": {
                                                        "kind": 134299649,
                                                        "text": "async",
                                                        "rawText": "async",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 279,
                                                        "end": 285
                                                    },
                                                    "optionalToken": null,
                                                    "type": null,
                                                    "right": {
                                                        "kind": 134299649,
                                                        "text": "bar",
                                                        "rawText": "bar",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 287,
                                                        "end": 291
                                                    },
                                                    "flags": 0,
                                                    "transformFlags": 4096,
                                                    "start": 279,
                                                    "end": 291
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 279,
                                            "end": 291
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 278,
                                        "end": 293
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 278,
                                "end": 293
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
                                                "kind": 208,
                                                "awaitKeyword": {
                                                    "kind": 82196,
                                                    "flags": 65,
                                                    "transformFlags": 0,
                                                    "start": 296,
                                                    "end": 304
                                                },
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "baz",
                                                    "rawText": "baz",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 304,
                                                    "end": 308
                                                },
                                                "flags": 32,
                                                "transformFlags": 4096,
                                                "start": 296,
                                                "end": 308
                                            },
                                            "flags": 16,
                                            "transformFlags": 4096,
                                            "start": 296,
                                            "end": 309
                                        }
                                    ],
                                    "flags": 33,
                                    "transformFlags": 0,
                                    "start": 296,
                                    "end": 309
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 294,
                                "end": 311
                            },
                            "returnType": null,
                            "flags": 160,
                            "transformFlags": 0,
                            "start": 262,
                            "end": 311
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 258,
                        "end": 311
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 258,
                "end": 311
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 251,
            "end": 312
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "transformFlags": 0,
                "start": 312,
                "end": 319
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 212,
                            "propertyList": {
                                "kind": 213,
                                "properties": [
                                    {
                                        "kind": 281,
                                        "ellipsisToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "async",
                                            "rawText": "async",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 321,
                                            "end": 327
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "right": {
                                            "kind": 24752947,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 329,
                                            "end": 334
                                        },
                                        "flags": 0,
                                        "transformFlags": 4096,
                                        "start": 321,
                                        "end": 334
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 321,
                                "end": 334
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 319,
                            "end": 336
                        },
                        "type": null,
                        "initializer": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 338,
                            "end": 340
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 319,
                        "end": 340
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 319,
                "end": 340
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 312,
            "end": 341
        }
    ],
    "isModule": false,
    "source": "const a = function({ async = true }) {};\n\nconst b = function({ async: bar }) {};\n\nconst c = async ({ async: bar }) => {\n  await baz;\n};\n\nconst d = async ({ async = bar }) => {\n  await baz;\n};\n\nconst e = async function({ async: bar }) {\n  await baz;\n};\n\nconst f = async function({ async = bar }) {\n  await baz;\n};\n\nconst { async = true } = x;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 341
}
```

### Printed

```javascript
const a = function ({ async = true }) {};
const b = function ({ async: bar }) {};

const c = async ({ async: bar }) => {
    await baz;
  };

const d = async ({ async = bar }) => {
    await baz;
  };

const e = async function ({ async: bar }) {
    await baz;
  };

const f = async function ({ async = bar }) {
    await baz;
  };

const { async = true } = x;

```

### Diagnostics

```javascript
✔ No errors
```

