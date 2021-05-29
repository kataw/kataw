# Kataw parser test case

## Input

`````js
([a],...a)=> 0;

(x) => { let x }

(x) => { const x = y }

(a, b, a) => {};

a => const {a};

yield => let yield;

a => { const a }

async a => { const a }

a => { let [a] = x; }

a => { let {a} = x }

a => { let [a] = x; }

([x], x) => {};

([foo], [foo]) => {};

([a, a]) => {};

([a, a, b]) => {};

([b, a], b) => {};

([b, a, b, a]) => {};

(x, {y: x}) => 1;

([a,b,c]) => { const c = x; };

a = b => { let b; };

({y: x}, ...x) => 1;

({"x": y, x: x = y}) => { let y; }

`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 10,
                    "end": 12
                },
                "typeParameters": null,
                "parameters": [
                    [
                        {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "start": 2,
                                        "end": 3
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 2,
                                "end": 3
                            },
                            "flags": 32,
                            "start": 1,
                            "end": 4
                        },
                        {
                            "kind": 215,
                            "ellipsisToken": {
                                "kind": 524302,
                                "flags": 64,
                                "start": 5,
                                "end": 8
                            },
                            "binding": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "start": 8,
                                "end": 9
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "flags": 34,
                            "start": 5,
                            "end": 9
                        }
                    ]
                ],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 201392130,
                    "text": 0,
                    "rawText": "0",
                    "flags": 96,
                    "start": 12,
                    "end": 14
                },
                "flags": 34,
                "start": 0,
                "end": 14
            },
            "flags": 16,
            "start": 0,
            "end": 15
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 271,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "start": 20,
                        "end": 23
                    },
                    "typeParameters": null,
                    "parameters": [
                        {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 18,
                            "end": 19
                        }
                    ],
                    "asyncKeyword": null,
                    "returnType": null,
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [
                                {
                                    "kind": 162,
                                    "lexicalKeyword": {
                                        "kind": 41951307,
                                        "flags": 80,
                                        "start": 25,
                                        "end": 29
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
                                                    "start": 29,
                                                    "end": 31
                                                },
                                                "optionalToken": null,
                                                "type": null,
                                                "initializer": null,
                                                "flags": 16,
                                                "start": 29,
                                                "end": 31
                                            }
                                        ],
                                        "flags": 16,
                                        "start": 29,
                                        "end": 31
                                    },
                                    "flags": 33554448,
                                    "start": 25,
                                    "end": 31
                                }
                            ],
                            "flags": 32,
                            "start": 25,
                            "end": 31
                        },
                        "flags": 32,
                        "start": 23,
                        "end": 33
                    },
                    "flags": 32,
                    "start": 15,
                    "end": 33
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 36,
                            "end": 37
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 36,
                    "end": 37
                },
                "flags": 268435488,
                "start": 15,
                "end": 38
            },
            "flags": 16,
            "start": 15,
            "end": 38
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [
                    {
                        "kind": 162,
                        "lexicalKeyword": {
                            "kind": 37757004,
                            "flags": 64,
                            "start": 43,
                            "end": 49
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
                                        "start": 49,
                                        "end": 51
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": {
                                        "kind": 134299649,
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 96,
                                        "start": 53,
                                        "end": 55
                                    },
                                    "flags": 16,
                                    "start": 49,
                                    "end": 55
                                }
                            ],
                            "flags": 16777232,
                            "start": 49,
                            "end": 55
                        },
                        "flags": 33554448,
                        "start": 43,
                        "end": 55
                    }
                ],
                "flags": 16,
                "start": 43,
                "end": 55
            },
            "flags": 16,
            "start": 41,
            "end": 57
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 68,
                    "end": 71
                },
                "typeParameters": null,
                "parameters": [
                    [
                        {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 60,
                            "end": 61
                        },
                        {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "start": 62,
                            "end": 64
                        },
                        {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 65,
                            "end": 67
                        }
                    ]
                ],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 73,
                        "end": 73
                    },
                    "flags": 32,
                    "start": 71,
                    "end": 74
                },
                "flags": 32,
                "start": 57,
                "end": 74
            },
            "flags": 16,
            "start": 57,
            "end": 75
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 78,
                    "end": 81
                },
                "typeParameters": null,
                "parameters": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "start": 75,
                    "end": 78
                },
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [
                            {
                                "kind": 162,
                                "lexicalKeyword": {
                                    "kind": 37757004,
                                    "flags": 64,
                                    "start": 81,
                                    "end": 87
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
                                                            "kind": 222,
                                                            "ellipsisToken": null,
                                                            "left": {
                                                                "kind": 134299649,
                                                                "text": "a",
                                                                "rawText": "a",
                                                                "flags": 96,
                                                                "start": 89,
                                                                "end": 90
                                                            },
                                                            "right": null,
                                                            "flags": 32,
                                                            "start": 89,
                                                            "end": 90
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "start": 89,
                                                    "end": 90
                                                },
                                                "flags": 32,
                                                "start": 87,
                                                "end": 91
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "flags": 16,
                                            "start": 87,
                                            "end": 91
                                        }
                                    ],
                                    "flags": 16777232,
                                    "start": 87,
                                    "end": 91
                                },
                                "flags": 33554448,
                                "start": 81,
                                "end": 92
                            },
                            {
                                "kind": 120,
                                "expression": {
                                    "kind": 271,
                                    "arrowToken": {
                                        "kind": 10,
                                        "flags": 64,
                                        "start": 99,
                                        "end": 102
                                    },
                                    "typeParameters": null,
                                    "parameters": {
                                        "kind": 134299649,
                                        "text": "yield",
                                        "rawText": "yield",
                                        "flags": 96,
                                        "start": 92,
                                        "end": 99
                                    },
                                    "asyncKeyword": null,
                                    "returnType": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [
                                                {
                                                    "kind": 162,
                                                    "lexicalKeyword": {
                                                        "kind": 41951307,
                                                        "flags": 80,
                                                        "start": 102,
                                                        "end": 106
                                                    },
                                                    "binding": {
                                                        "kind": 151,
                                                        "bindingList": [
                                                            {
                                                                "kind": 190,
                                                                "binding": {
                                                                    "kind": 134299649,
                                                                    "text": "yield",
                                                                    "rawText": "yield",
                                                                    "flags": 96,
                                                                    "start": 106,
                                                                    "end": 112
                                                                },
                                                                "optionalToken": null,
                                                                "type": null,
                                                                "initializer": null,
                                                                "flags": 16,
                                                                "start": 106,
                                                                "end": 112
                                                            }
                                                        ],
                                                        "flags": 16,
                                                        "start": 106,
                                                        "end": 112
                                                    },
                                                    "flags": 33554448,
                                                    "start": 102,
                                                    "end": 113
                                                },
                                                {
                                                    "kind": 120,
                                                    "expression": {
                                                        "kind": 271,
                                                        "arrowToken": {
                                                            "kind": 10,
                                                            "flags": 64,
                                                            "start": 116,
                                                            "end": 119
                                                        },
                                                        "typeParameters": null,
                                                        "parameters": {
                                                            "kind": 134299649,
                                                            "text": "a",
                                                            "rawText": "a",
                                                            "flags": 96,
                                                            "start": 113,
                                                            "end": 116
                                                        },
                                                        "asyncKeyword": null,
                                                        "returnType": null,
                                                        "contents": {
                                                            "kind": 216,
                                                            "functionStatementList": {
                                                                "kind": 217,
                                                                "directives": [],
                                                                "statements": [
                                                                    {
                                                                        "kind": 162,
                                                                        "lexicalKeyword": {
                                                                            "kind": 37757004,
                                                                            "flags": 64,
                                                                            "start": 121,
                                                                            "end": 127
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
                                                                                        "start": 127,
                                                                                        "end": 129
                                                                                    },
                                                                                    "optionalToken": null,
                                                                                    "type": null,
                                                                                    "initializer": null,
                                                                                    "flags": 16,
                                                                                    "start": 127,
                                                                                    "end": 129
                                                                                }
                                                                            ],
                                                                            "flags": 16777232,
                                                                            "start": 127,
                                                                            "end": 129
                                                                        },
                                                                        "flags": 33554448,
                                                                        "start": 121,
                                                                        "end": 129
                                                                    }
                                                                ],
                                                                "flags": 32,
                                                                "start": 121,
                                                                "end": 129
                                                            },
                                                            "flags": 32,
                                                            "start": 119,
                                                            "end": 131
                                                        },
                                                        "flags": 32,
                                                        "start": 113,
                                                        "end": 131
                                                    },
                                                    "flags": 16,
                                                    "start": 113,
                                                    "end": 131
                                                },
                                                {
                                                    "kind": 120,
                                                    "expression": {
                                                        "kind": 271,
                                                        "arrowToken": {
                                                            "kind": 10,
                                                            "flags": 64,
                                                            "start": 140,
                                                            "end": 143
                                                        },
                                                        "typeParameters": null,
                                                        "parameters": {
                                                            "kind": 134299649,
                                                            "text": "a",
                                                            "rawText": "a",
                                                            "flags": 96,
                                                            "start": 138,
                                                            "end": 140
                                                        },
                                                        "asyncKeyword": {
                                                            "kind": 82031,
                                                            "flags": 65,
                                                            "start": 131,
                                                            "end": 138
                                                        },
                                                        "returnType": null,
                                                        "contents": {
                                                            "kind": 216,
                                                            "functionStatementList": {
                                                                "kind": 217,
                                                                "directives": [],
                                                                "statements": [
                                                                    {
                                                                        "kind": 162,
                                                                        "lexicalKeyword": {
                                                                            "kind": 37757004,
                                                                            "flags": 64,
                                                                            "start": 145,
                                                                            "end": 151
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
                                                                                        "start": 151,
                                                                                        "end": 153
                                                                                    },
                                                                                    "optionalToken": null,
                                                                                    "type": null,
                                                                                    "initializer": null,
                                                                                    "flags": 16,
                                                                                    "start": 151,
                                                                                    "end": 153
                                                                                }
                                                                            ],
                                                                            "flags": 16777232,
                                                                            "start": 151,
                                                                            "end": 153
                                                                        },
                                                                        "flags": 33554448,
                                                                        "start": 145,
                                                                        "end": 153
                                                                    }
                                                                ],
                                                                "flags": 32,
                                                                "start": 145,
                                                                "end": 153
                                                            },
                                                            "flags": 32,
                                                            "start": 143,
                                                            "end": 155
                                                        },
                                                        "flags": 288,
                                                        "start": 131,
                                                        "end": 155
                                                    },
                                                    "flags": 16,
                                                    "start": 131,
                                                    "end": 155
                                                },
                                                {
                                                    "kind": 120,
                                                    "expression": {
                                                        "kind": 271,
                                                        "arrowToken": {
                                                            "kind": 10,
                                                            "flags": 64,
                                                            "start": 158,
                                                            "end": 161
                                                        },
                                                        "typeParameters": null,
                                                        "parameters": {
                                                            "kind": 134299649,
                                                            "text": "a",
                                                            "rawText": "a",
                                                            "flags": 96,
                                                            "start": 155,
                                                            "end": 158
                                                        },
                                                        "asyncKeyword": null,
                                                        "returnType": null,
                                                        "contents": {
                                                            "kind": 216,
                                                            "functionStatementList": {
                                                                "kind": 217,
                                                                "directives": [],
                                                                "statements": [
                                                                    {
                                                                        "kind": 162,
                                                                        "lexicalKeyword": {
                                                                            "kind": 41951307,
                                                                            "flags": 80,
                                                                            "start": 163,
                                                                            "end": 167
                                                                        },
                                                                        "binding": {
                                                                            "kind": 151,
                                                                            "bindingList": [
                                                                                {
                                                                                    "kind": 190,
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
                                                                                                        "text": "a",
                                                                                                        "rawText": "a",
                                                                                                        "flags": 96,
                                                                                                        "start": 169,
                                                                                                        "end": 170
                                                                                                    },
                                                                                                    "optionalToken": null,
                                                                                                    "type": null,
                                                                                                    "initializer": null,
                                                                                                    "flags": 32,
                                                                                                    "start": 169,
                                                                                                    "end": 170
                                                                                                }
                                                                                            ],
                                                                                            "trailingComma": false,
                                                                                            "flags": 0,
                                                                                            "start": 169,
                                                                                            "end": 170
                                                                                        },
                                                                                        "flags": 32,
                                                                                        "start": 167,
                                                                                        "end": 171
                                                                                    },
                                                                                    "optionalToken": null,
                                                                                    "type": null,
                                                                                    "initializer": {
                                                                                        "kind": 134299649,
                                                                                        "text": "x",
                                                                                        "rawText": "x",
                                                                                        "flags": 96,
                                                                                        "start": 173,
                                                                                        "end": 175
                                                                                    },
                                                                                    "flags": 16,
                                                                                    "start": 167,
                                                                                    "end": 175
                                                                                }
                                                                            ],
                                                                            "flags": 16,
                                                                            "start": 167,
                                                                            "end": 175
                                                                        },
                                                                        "flags": 33554448,
                                                                        "start": 163,
                                                                        "end": 176
                                                                    }
                                                                ],
                                                                "flags": 32,
                                                                "start": 163,
                                                                "end": 176
                                                            },
                                                            "flags": 32,
                                                            "start": 161,
                                                            "end": 178
                                                        },
                                                        "flags": 32,
                                                        "start": 155,
                                                        "end": 178
                                                    },
                                                    "flags": 16,
                                                    "start": 155,
                                                    "end": 178
                                                },
                                                {
                                                    "kind": 120,
                                                    "expression": {
                                                        "kind": 271,
                                                        "arrowToken": {
                                                            "kind": 10,
                                                            "flags": 64,
                                                            "start": 181,
                                                            "end": 184
                                                        },
                                                        "typeParameters": null,
                                                        "parameters": {
                                                            "kind": 134299649,
                                                            "text": "a",
                                                            "rawText": "a",
                                                            "flags": 96,
                                                            "start": 178,
                                                            "end": 181
                                                        },
                                                        "asyncKeyword": null,
                                                        "returnType": null,
                                                        "contents": {
                                                            "kind": 216,
                                                            "functionStatementList": {
                                                                "kind": 217,
                                                                "directives": [],
                                                                "statements": [
                                                                    {
                                                                        "kind": 162,
                                                                        "lexicalKeyword": {
                                                                            "kind": 41951307,
                                                                            "flags": 80,
                                                                            "start": 186,
                                                                            "end": 190
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
                                                                                                    "kind": 222,
                                                                                                    "ellipsisToken": null,
                                                                                                    "left": {
                                                                                                        "kind": 134299649,
                                                                                                        "text": "a",
                                                                                                        "rawText": "a",
                                                                                                        "flags": 96,
                                                                                                        "start": 192,
                                                                                                        "end": 193
                                                                                                    },
                                                                                                    "right": null,
                                                                                                    "flags": 32,
                                                                                                    "start": 192,
                                                                                                    "end": 193
                                                                                                }
                                                                                            ],
                                                                                            "trailingComma": false,
                                                                                            "flags": 32,
                                                                                            "start": 192,
                                                                                            "end": 193
                                                                                        },
                                                                                        "flags": 32,
                                                                                        "start": 190,
                                                                                        "end": 194
                                                                                    },
                                                                                    "optionalToken": null,
                                                                                    "type": null,
                                                                                    "initializer": {
                                                                                        "kind": 134299649,
                                                                                        "text": "x",
                                                                                        "rawText": "x",
                                                                                        "flags": 96,
                                                                                        "start": 196,
                                                                                        "end": 198
                                                                                    },
                                                                                    "flags": 16,
                                                                                    "start": 190,
                                                                                    "end": 198
                                                                                }
                                                                            ],
                                                                            "flags": 16,
                                                                            "start": 190,
                                                                            "end": 198
                                                                        },
                                                                        "flags": 33554448,
                                                                        "start": 186,
                                                                        "end": 198
                                                                    }
                                                                ],
                                                                "flags": 32,
                                                                "start": 186,
                                                                "end": 198
                                                            },
                                                            "flags": 32,
                                                            "start": 184,
                                                            "end": 200
                                                        },
                                                        "flags": 32,
                                                        "start": 178,
                                                        "end": 200
                                                    },
                                                    "flags": 16,
                                                    "start": 178,
                                                    "end": 200
                                                },
                                                {
                                                    "kind": 120,
                                                    "expression": {
                                                        "kind": 131,
                                                        "expression": {
                                                            "kind": 271,
                                                            "arrowToken": {
                                                                "kind": 10,
                                                                "flags": 64,
                                                                "start": 203,
                                                                "end": 206
                                                            },
                                                            "typeParameters": null,
                                                            "parameters": {
                                                                "kind": 134299649,
                                                                "text": "a",
                                                                "rawText": "a",
                                                                "flags": 96,
                                                                "start": 200,
                                                                "end": 203
                                                            },
                                                            "asyncKeyword": null,
                                                            "returnType": null,
                                                            "contents": {
                                                                "kind": 216,
                                                                "functionStatementList": {
                                                                    "kind": 217,
                                                                    "directives": [],
                                                                    "statements": [
                                                                        {
                                                                            "kind": 162,
                                                                            "lexicalKeyword": {
                                                                                "kind": 41951307,
                                                                                "flags": 80,
                                                                                "start": 208,
                                                                                "end": 212
                                                                            },
                                                                            "binding": {
                                                                                "kind": 151,
                                                                                "bindingList": [
                                                                                    {
                                                                                        "kind": 190,
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
                                                                                                            "text": "a",
                                                                                                            "rawText": "a",
                                                                                                            "flags": 96,
                                                                                                            "start": 214,
                                                                                                            "end": 215
                                                                                                        },
                                                                                                        "optionalToken": null,
                                                                                                        "type": null,
                                                                                                        "initializer": null,
                                                                                                        "flags": 32,
                                                                                                        "start": 214,
                                                                                                        "end": 215
                                                                                                    }
                                                                                                ],
                                                                                                "trailingComma": false,
                                                                                                "flags": 0,
                                                                                                "start": 214,
                                                                                                "end": 215
                                                                                            },
                                                                                            "flags": 32,
                                                                                            "start": 212,
                                                                                            "end": 216
                                                                                        },
                                                                                        "optionalToken": null,
                                                                                        "type": null,
                                                                                        "initializer": {
                                                                                            "kind": 134299649,
                                                                                            "text": "x",
                                                                                            "rawText": "x",
                                                                                            "flags": 96,
                                                                                            "start": 218,
                                                                                            "end": 220
                                                                                        },
                                                                                        "flags": 16,
                                                                                        "start": 212,
                                                                                        "end": 220
                                                                                    }
                                                                                ],
                                                                                "flags": 16,
                                                                                "start": 212,
                                                                                "end": 220
                                                                            },
                                                                            "flags": 33554448,
                                                                            "start": 208,
                                                                            "end": 221
                                                                        }
                                                                    ],
                                                                    "flags": 32,
                                                                    "start": 208,
                                                                    "end": 221
                                                                },
                                                                "flags": 32,
                                                                "start": 206,
                                                                "end": 223
                                                            },
                                                            "flags": 32,
                                                            "start": 200,
                                                            "end": 223
                                                        },
                                                        "argumentList": {
                                                            "kind": 256,
                                                            "elements": [
                                                                {
                                                                    "kind": 119,
                                                                    "elementList": {
                                                                        "kind": 270,
                                                                        "elements": [
                                                                            {
                                                                                "kind": 134299649,
                                                                                "text": "x",
                                                                                "rawText": "x",
                                                                                "flags": 96,
                                                                                "start": 227,
                                                                                "end": 228
                                                                            }
                                                                        ],
                                                                        "trailingComma": false,
                                                                        "flags": 32,
                                                                        "start": 227,
                                                                        "end": 228
                                                                    },
                                                                    "flags": 32,
                                                                    "start": 226,
                                                                    "end": 229
                                                                },
                                                                {
                                                                    "kind": 134299649,
                                                                    "text": "x",
                                                                    "rawText": "x",
                                                                    "flags": 96,
                                                                    "start": 230,
                                                                    "end": 232
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 32,
                                                            "start": 226,
                                                            "end": 232
                                                        },
                                                        "flags": 268435488,
                                                        "start": 200,
                                                        "end": 233
                                                    },
                                                    "flags": 16,
                                                    "start": 200,
                                                    "end": 233
                                                }
                                            ],
                                            "flags": 32,
                                            "start": 102,
                                            "end": 233
                                        },
                                        "flags": 32,
                                        "start": 102,
                                        "end": 233
                                    },
                                    "flags": 32,
                                    "start": 92,
                                    "end": 233
                                },
                                "flags": 16,
                                "start": 92,
                                "end": 233
                            }
                        ],
                        "flags": 32,
                        "start": 81,
                        "end": 233
                    },
                    "flags": 32,
                    "start": 81,
                    "end": 233
                },
                "flags": 32,
                "start": 75,
                "end": 233
            },
            "flags": 16,
            "start": 75,
            "end": 233
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "start": 238,
                "end": 238
            },
            "flags": 16,
            "start": 236,
            "end": 239
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 239,
            "end": 240
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 256,
                    "end": 259
                },
                "typeParameters": null,
                "parameters": [
                    [
                        {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 134299649,
                                        "text": "foo",
                                        "rawText": "foo",
                                        "flags": 96,
                                        "start": 244,
                                        "end": 247
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 244,
                                "end": 247
                            },
                            "flags": 32,
                            "start": 243,
                            "end": 248
                        },
                        {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 134299649,
                                        "text": "foo",
                                        "rawText": "foo",
                                        "flags": 96,
                                        "start": 251,
                                        "end": 254
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 251,
                                "end": 254
                            },
                            "flags": 32,
                            "start": 249,
                            "end": 255
                        }
                    ]
                ],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 261,
                        "end": 261
                    },
                    "flags": 32,
                    "start": 259,
                    "end": 262
                },
                "flags": 34,
                "start": 240,
                "end": 262
            },
            "flags": 16,
            "start": 240,
            "end": 263
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 273,
                    "end": 276
                },
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 119,
                        "elementList": {
                            "kind": 270,
                            "elements": [
                                {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "start": 267,
                                    "end": 268
                                },
                                {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "start": 269,
                                    "end": 271
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 267,
                            "end": 271
                        },
                        "flags": 32,
                        "start": 266,
                        "end": 272
                    }
                ],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 278,
                        "end": 278
                    },
                    "flags": 32,
                    "start": 276,
                    "end": 279
                },
                "flags": 34,
                "start": 263,
                "end": 279
            },
            "flags": 16,
            "start": 263,
            "end": 280
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 293,
                    "end": 296
                },
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 119,
                        "elementList": {
                            "kind": 270,
                            "elements": [
                                {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "start": 284,
                                    "end": 285
                                },
                                {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "start": 286,
                                    "end": 288
                                },
                                {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 96,
                                    "start": 289,
                                    "end": 291
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 284,
                            "end": 291
                        },
                        "flags": 32,
                        "start": 283,
                        "end": 292
                    }
                ],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 298,
                        "end": 298
                    },
                    "flags": 32,
                    "start": 296,
                    "end": 299
                },
                "flags": 34,
                "start": 280,
                "end": 299
            },
            "flags": 16,
            "start": 280,
            "end": 300
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 313,
                    "end": 316
                },
                "typeParameters": null,
                "parameters": [
                    [
                        {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 134299649,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 96,
                                        "start": 304,
                                        "end": 305
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "start": 306,
                                        "end": 308
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 304,
                                "end": 308
                            },
                            "flags": 32,
                            "start": 303,
                            "end": 309
                        },
                        {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "start": 310,
                            "end": 312
                        }
                    ]
                ],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 318,
                        "end": 318
                    },
                    "flags": 32,
                    "start": 316,
                    "end": 319
                },
                "flags": 34,
                "start": 300,
                "end": 319
            },
            "flags": 16,
            "start": 300,
            "end": 320
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 336,
                    "end": 339
                },
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 119,
                        "elementList": {
                            "kind": 270,
                            "elements": [
                                {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 96,
                                    "start": 324,
                                    "end": 325
                                },
                                {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "start": 326,
                                    "end": 328
                                },
                                {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 96,
                                    "start": 329,
                                    "end": 331
                                },
                                {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "start": 332,
                                    "end": 334
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 324,
                            "end": 334
                        },
                        "flags": 32,
                        "start": 323,
                        "end": 335
                    }
                ],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 341,
                        "end": 341
                    },
                    "flags": 32,
                    "start": 339,
                    "end": 342
                },
                "flags": 34,
                "start": 320,
                "end": 342
            },
            "flags": 16,
            "start": 320,
            "end": 343
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 356,
                    "end": 359
                },
                "typeParameters": null,
                "parameters": [
                    [
                        {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 346,
                            "end": 347
                        },
                        {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 219,
                                        "generatorToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "y",
                                            "rawText": "y",
                                            "flags": 96,
                                            "start": 350,
                                            "end": 351
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 352,
                                            "end": 354
                                        },
                                        "flags": 32,
                                        "start": 350,
                                        "end": 354
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 350,
                                "end": 354
                            },
                            "flags": 48,
                            "start": 348,
                            "end": 355
                        }
                    ]
                ],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 201392130,
                    "text": 1,
                    "rawText": "1",
                    "flags": 96,
                    "start": 359,
                    "end": 361
                },
                "flags": 34,
                "start": 343,
                "end": 361
            },
            "flags": 16,
            "start": 343,
            "end": 362
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 373,
                    "end": 376
                },
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 119,
                        "elementList": {
                            "kind": 270,
                            "elements": [
                                {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "start": 366,
                                    "end": 367
                                },
                                {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 96,
                                    "start": 368,
                                    "end": 369
                                },
                                {
                                    "kind": 134299649,
                                    "text": "c",
                                    "rawText": "c",
                                    "flags": 96,
                                    "start": 370,
                                    "end": 371
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 366,
                            "end": 371
                        },
                        "flags": 32,
                        "start": 365,
                        "end": 372
                    }
                ],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [
                            {
                                "kind": 162,
                                "lexicalKeyword": {
                                    "kind": 37757004,
                                    "flags": 64,
                                    "start": 378,
                                    "end": 384
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
                                                "start": 384,
                                                "end": 386
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 388,
                                                "end": 390
                                            },
                                            "flags": 16,
                                            "start": 384,
                                            "end": 390
                                        }
                                    ],
                                    "flags": 16777232,
                                    "start": 384,
                                    "end": 390
                                },
                                "flags": 33554448,
                                "start": 378,
                                "end": 391
                            }
                        ],
                        "flags": 32,
                        "start": 378,
                        "end": 391
                    },
                    "flags": 32,
                    "start": 376,
                    "end": 393
                },
                "flags": 34,
                "start": 362,
                "end": 393
            },
            "flags": 16,
            "start": 362,
            "end": 394
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "start": 394,
                    "end": 397
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 397,
                    "end": 399
                },
                "right": {
                    "kind": 271,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "start": 401,
                        "end": 404
                    },
                    "typeParameters": null,
                    "parameters": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "start": 399,
                        "end": 401
                    },
                    "asyncKeyword": null,
                    "returnType": null,
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [
                                {
                                    "kind": 162,
                                    "lexicalKeyword": {
                                        "kind": 41951307,
                                        "flags": 80,
                                        "start": 406,
                                        "end": 410
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
                                                    "start": 410,
                                                    "end": 412
                                                },
                                                "optionalToken": null,
                                                "type": null,
                                                "initializer": null,
                                                "flags": 16,
                                                "start": 410,
                                                "end": 412
                                            }
                                        ],
                                        "flags": 16,
                                        "start": 410,
                                        "end": 412
                                    },
                                    "flags": 33554448,
                                    "start": 406,
                                    "end": 413
                                }
                            ],
                            "flags": 32,
                            "start": 406,
                            "end": 413
                        },
                        "flags": 32,
                        "start": 404,
                        "end": 415
                    },
                    "flags": 32,
                    "start": 399,
                    "end": 415
                },
                "flags": 32,
                "start": 394,
                "end": 415
            },
            "flags": 16,
            "start": 394,
            "end": 416
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 432,
                    "end": 435
                },
                "typeParameters": null,
                "parameters": [
                    [
                        {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 219,
                                        "generatorToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "y",
                                            "rawText": "y",
                                            "flags": 96,
                                            "start": 420,
                                            "end": 421
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 422,
                                            "end": 424
                                        },
                                        "flags": 32,
                                        "start": 420,
                                        "end": 424
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 420,
                                "end": 424
                            },
                            "flags": 48,
                            "start": 419,
                            "end": 425
                        },
                        {
                            "kind": 215,
                            "ellipsisToken": {
                                "kind": 524302,
                                "flags": 64,
                                "start": 426,
                                "end": 430
                            },
                            "binding": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 430,
                                "end": 431
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "flags": 34,
                            "start": 426,
                            "end": 431
                        }
                    ]
                ],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 201392130,
                    "text": 1,
                    "rawText": "1",
                    "flags": 96,
                    "start": 435,
                    "end": 437
                },
                "flags": 34,
                "start": 416,
                "end": 437
            },
            "flags": 16,
            "start": 416,
            "end": 438
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 460,
                    "end": 463
                },
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 219,
                                    "generatorToken": null,
                                    "left": {
                                        "kind": 201392131,
                                        "text": "x",
                                        "rawText": "\"x\"",
                                        "flags": 96,
                                        "start": 442,
                                        "end": 445
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 96,
                                        "start": 446,
                                        "end": 448
                                    },
                                    "flags": 32,
                                    "start": 442,
                                    "end": 448
                                },
                                {
                                    "kind": 219,
                                    "generatorToken": null,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 449,
                                        "end": 451
                                    },
                                    "right": {
                                        "kind": 125,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 452,
                                            "end": 454
                                        },
                                        "operatorToken": {
                                            "kind": 4125,
                                            "flags": 64,
                                            "start": 454,
                                            "end": 456
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "y",
                                            "rawText": "y",
                                            "flags": 96,
                                            "start": 456,
                                            "end": 458
                                        },
                                        "flags": 32,
                                        "start": 449,
                                        "end": 458
                                    },
                                    "flags": 32,
                                    "start": 449,
                                    "end": 458
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 442,
                            "end": 458
                        },
                        "flags": 48,
                        "start": 441,
                        "end": 459
                    }
                ],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [
                            {
                                "kind": 162,
                                "lexicalKeyword": {
                                    "kind": 41951307,
                                    "flags": 80,
                                    "start": 465,
                                    "end": 469
                                },
                                "binding": {
                                    "kind": 151,
                                    "bindingList": [
                                        {
                                            "kind": 190,
                                            "binding": {
                                                "kind": 134299649,
                                                "text": "y",
                                                "rawText": "y",
                                                "flags": 96,
                                                "start": 469,
                                                "end": 471
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "flags": 16,
                                            "start": 469,
                                            "end": 471
                                        }
                                    ],
                                    "flags": 16,
                                    "start": 469,
                                    "end": 471
                                },
                                "flags": 33554448,
                                "start": 465,
                                "end": 472
                            }
                        ],
                        "flags": 32,
                        "start": 465,
                        "end": 472
                    },
                    "flags": 32,
                    "start": 463,
                    "end": 474
                },
                "flags": 34,
                "start": 438,
                "end": 474
            },
            "flags": 16,
            "start": 438,
            "end": 474
        }
    ],
    "isModule": false,
    "source": "([a],...a)=> 0;\n\n(x) => { let x }\n\n(x) => { const x = y }\n\n(a, b, a) => {};\n\na => const {a};\n\nyield => let yield;\n\na => { const a }\n\nasync a => { const a }\n\na => { let [a] = x; }\n\na => { let {a} = x }\n\na => { let [a] = x; }\n\n([x], x) => {};\n\n([foo], [foo]) => {};\n\n([a, a]) => {};\n\n([a, a, b]) => {};\n\n([b, a], b) => {};\n\n([b, a, b, a]) => {};\n\n(x, {y: x}) => 1;\n\n([a,b,c]) => { const c = x; };\n\na = b => { let b; };\n\n({y: x}, ...x) => 1;\n\n({\"x\": y, x: x = y}) => { let y; }\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 475
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Duplicate identifier - start: 8, end: 9
✖ Cannot redeclare block-scoped variable - start: 29, end: 31
✖ Expected a `;` - start: 38, end: 41
✖ Duplicate arrow formal parameter - start: 65, end: 73
✖ Cannot redeclare block-scoped variable - start: 90, end: 91
✖ Missing initializer in const declaration - start: 91, end: 92
✖ Cannot redeclare block-scoped variable - start: 106, end: 112
✖ Cannot redeclare block-scoped variable - start: 127, end: 129
✖ Missing initializer in const declaration - start: 129, end: 131
✖ Cannot redeclare block-scoped variable - start: 151, end: 153
✖ Missing initializer in const declaration - start: 153, end: 155
✖ Cannot redeclare block-scoped variable - start: 169, end: 170
✖ Cannot redeclare block-scoped variable - start: 193, end: 194
✖ Cannot redeclare block-scoped variable - start: 214, end: 215
✖ Expected a `;` - start: 233, end: 236
✖ Duplicate arrow formal parameter - start: 240, end: 261
✖ Duplicate arrow formal parameter - start: 263, end: 278
✖ Duplicate arrow formal parameter - start: 280, end: 298
✖ Duplicate arrow formal parameter - start: 310, end: 318
✖ Duplicate arrow formal parameter - start: 320, end: 341
✖ Cannot redeclare block-scoped variable - start: 384, end: 386
✖ Cannot redeclare block-scoped variable - start: 410, end: 412

```

