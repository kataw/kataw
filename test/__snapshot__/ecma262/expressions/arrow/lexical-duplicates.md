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
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [
                        {
                            "kind": 201,
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
                            "kind": 281,
                            "ellipsisToken": {
                                "kind": 524302,
                                "flags": 64,
                                "start": 5,
                                "end": 8
                            },
                            "left": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "start": 8,
                                "end": 9
                            },
                            "optionalToken": null,
                            "type": null,
                            "right": null,
                            "flags": 34,
                            "start": 5,
                            "end": 9
                        }
                    ],
                    "trailingComma": false,
                    "flags": 34,
                    "start": 1,
                    "end": 10
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 10,
                    "end": 12
                },
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
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
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
                    "trailingComma": false,
                    "flags": 33,
                    "start": 18,
                    "end": 20
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 20,
                    "end": 23
                },
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
                "flags": 33,
                "start": 15,
                "end": 33
            },
            "flags": 16,
            "start": 15,
            "end": 33
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [
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
                    "flags": 33,
                    "start": 36,
                    "end": 38
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 38,
                    "end": 41
                },
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
                                    "flags": 80,
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
                        "flags": 32,
                        "start": 43,
                        "end": 55
                    },
                    "flags": 32,
                    "start": 41,
                    "end": 57
                },
                "flags": 33,
                "start": 33,
                "end": 57
            },
            "flags": 16,
            "start": 33,
            "end": 57
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [
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
                    ],
                    "trailingComma": false,
                    "flags": 33,
                    "start": 60,
                    "end": 68
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 68,
                    "end": 71
                },
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
                "flags": 33,
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
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 97,
                    "start": 75,
                    "end": 78
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 78,
                    "end": 81
                },
                "contents": {
                    "kind": 16637,
                    "text": "",
                    "rawText": "",
                    "flags": 64,
                    "start": 81,
                    "end": 81
                },
                "flags": 32,
                "start": 75,
                "end": 81
            },
            "flags": 16,
            "start": 75,
            "end": 81
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 80,
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
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
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
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 134299649,
                    "text": "yield",
                    "rawText": "yield",
                    "flags": 97,
                    "start": 92,
                    "end": 99
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 99,
                    "end": 102
                },
                "contents": {
                    "kind": 134299649,
                    "text": "let",
                    "rawText": "let",
                    "flags": 96,
                    "start": 102,
                    "end": 106
                },
                "flags": 32,
                "start": 92,
                "end": 106
            },
            "flags": 16,
            "start": 92,
            "end": 106
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "yield",
                "rawText": "yield",
                "flags": 96,
                "start": 106,
                "end": 112
            },
            "flags": 16,
            "start": 106,
            "end": 113
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 97,
                    "start": 113,
                    "end": 116
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 116,
                    "end": 119
                },
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
                                    "flags": 80,
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
                "asyncKeyword": {
                    "kind": 82031,
                    "flags": 65,
                    "start": 131,
                    "end": 138
                },
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "start": 138,
                    "end": 140
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 140,
                    "end": 143
                },
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
                                    "flags": 80,
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
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 97,
                    "start": 155,
                    "end": 158
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 158,
                    "end": 161
                },
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
                                                    "kind": 324,
                                                    "elements": [
                                                        {
                                                            "kind": 134299649,
                                                            "text": "a",
                                                            "rawText": "a",
                                                            "flags": 96,
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
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 97,
                    "start": 178,
                    "end": 181
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 181,
                    "end": 184
                },
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
                                                            "kind": 134299649,
                                                            "text": "a",
                                                            "rawText": "a",
                                                            "flags": 96,
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
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 97,
                    "start": 200,
                    "end": 203
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 203,
                    "end": 206
                },
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
                                                    "kind": 324,
                                                    "elements": [
                                                        {
                                                            "kind": 134299649,
                                                            "text": "a",
                                                            "rawText": "a",
                                                            "flags": 96,
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
            "flags": 16,
            "start": 200,
            "end": 223
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [
                        {
                            "kind": 201,
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
                    "flags": 35,
                    "start": 226,
                    "end": 233
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 233,
                    "end": 236
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 238,
                        "end": 238
                    },
                    "flags": 32,
                    "start": 236,
                    "end": 239
                },
                "flags": 35,
                "start": 223,
                "end": 239
            },
            "flags": 16,
            "start": 223,
            "end": 240
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [
                        {
                            "kind": 201,
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
                            "kind": 201,
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
                    ],
                    "trailingComma": false,
                    "flags": 35,
                    "start": 243,
                    "end": 256
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 256,
                    "end": 259
                },
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
                "flags": 35,
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
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [
                        {
                            "kind": 201,
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
                    "trailingComma": false,
                    "flags": 35,
                    "start": 266,
                    "end": 273
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 273,
                    "end": 276
                },
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
                "flags": 35,
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
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [
                        {
                            "kind": 201,
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
                    "trailingComma": false,
                    "flags": 35,
                    "start": 283,
                    "end": 293
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 293,
                    "end": 296
                },
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
                "flags": 35,
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
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [
                        {
                            "kind": 201,
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
                    ],
                    "trailingComma": false,
                    "flags": 35,
                    "start": 303,
                    "end": 313
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 313,
                    "end": 316
                },
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
                "flags": 35,
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
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [
                        {
                            "kind": 201,
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
                    "trailingComma": false,
                    "flags": 35,
                    "start": 323,
                    "end": 336
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 336,
                    "end": 339
                },
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
                "flags": 35,
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
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [
                        {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 346,
                            "end": 347
                        },
                        {
                            "kind": 212,
                            "propertyList": {
                                "kind": 213,
                                "properties": [
                                    {
                                        "kind": 329,
                                        "key": {
                                            "kind": 134299649,
                                            "text": "y",
                                            "rawText": "y",
                                            "flags": 96,
                                            "start": 350,
                                            "end": 351
                                        },
                                        "value": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 352,
                                            "end": 354
                                        },
                                        "initializer": null,
                                        "flags": 32,
                                        "start": 350,
                                        "end": 354
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 350,
                                "end": 354
                            },
                            "flags": 48,
                            "start": 348,
                            "end": 355
                        }
                    ],
                    "trailingComma": false,
                    "flags": 35,
                    "start": 346,
                    "end": 356
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 356,
                    "end": 359
                },
                "contents": {
                    "kind": 201392130,
                    "text": 1,
                    "rawText": "1",
                    "flags": 96,
                    "start": 359,
                    "end": 361
                },
                "flags": 35,
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
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [
                        {
                            "kind": 201,
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
                    "trailingComma": false,
                    "flags": 35,
                    "start": 365,
                    "end": 373
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 373,
                    "end": 376
                },
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
                                    "flags": 80,
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
                "flags": 35,
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
                    "flags": 97,
                    "start": 394,
                    "end": 397
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 397,
                    "end": 399
                },
                "right": {
                    "kind": 271,
                    "asyncKeyword": null,
                    "typeParameters": null,
                    "arrowPatameterList": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "start": 399,
                        "end": 401
                    },
                    "returnType": null,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "start": 401,
                        "end": 404
                    },
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
                "flags": 0,
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
                "asyncKeyword": null,
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
                                            "text": "y",
                                            "rawText": "y",
                                            "flags": 96,
                                            "start": 420,
                                            "end": 421
                                        },
                                        "value": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 422,
                                            "end": 424
                                        },
                                        "initializer": null,
                                        "flags": 32,
                                        "start": 420,
                                        "end": 424
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 420,
                                "end": 424
                            },
                            "flags": 48,
                            "start": 419,
                            "end": 425
                        },
                        {
                            "kind": 281,
                            "ellipsisToken": {
                                "kind": 524302,
                                "flags": 64,
                                "start": 426,
                                "end": 430
                            },
                            "left": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 430,
                                "end": 431
                            },
                            "optionalToken": null,
                            "type": null,
                            "right": null,
                            "flags": 34,
                            "start": 426,
                            "end": 431
                        }
                    ],
                    "trailingComma": false,
                    "flags": 35,
                    "start": 419,
                    "end": 432
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 432,
                    "end": 435
                },
                "contents": {
                    "kind": 201392130,
                    "text": 1,
                    "rawText": "1",
                    "flags": 96,
                    "start": 435,
                    "end": 437
                },
                "flags": 35,
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
                "asyncKeyword": null,
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
                                            "kind": 201392131,
                                            "text": "x",
                                            "rawText": "\"x\"",
                                            "flags": 96,
                                            "start": 442,
                                            "end": 445
                                        },
                                        "value": {
                                            "kind": 134299649,
                                            "text": "y",
                                            "rawText": "y",
                                            "flags": 96,
                                            "start": 446,
                                            "end": 448
                                        },
                                        "initializer": null,
                                        "flags": 32,
                                        "start": 442,
                                        "end": 448
                                    },
                                    {
                                        "kind": 329,
                                        "key": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 449,
                                            "end": 451
                                        },
                                        "value": {
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
                                                "flags": 96,
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
                                            "flags": 0,
                                            "start": 449,
                                            "end": 458
                                        },
                                        "initializer": null,
                                        "flags": 32,
                                        "start": 449,
                                        "end": 458
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 442,
                                "end": 458
                            },
                            "flags": 48,
                            "start": 441,
                            "end": 459
                        }
                    ],
                    "trailingComma": false,
                    "flags": 35,
                    "start": 441,
                    "end": 460
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 460,
                    "end": 463
                },
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
                "flags": 35,
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
✖ Cannot redeclare block-scoped variable - start: 49, end: 51
✖ Duplicate arrow formal parameter - start: 65, end: 73
✖ Identifier expected - start: 81, end: 87
✖ Missing initializer in const declaration - start: 91, end: 92
✖ Expected a `;` - start: 106, end: 112
✖ Cannot redeclare block-scoped variable - start: 127, end: 129
✖ Missing initializer in const declaration - start: 129, end: 131
✖ Cannot redeclare block-scoped variable - start: 151, end: 153
✖ Missing initializer in const declaration - start: 153, end: 155
✖ Cannot redeclare block-scoped variable - start: 169, end: 170
✖ Cannot redeclare block-scoped variable - start: 193, end: 194
✖ Cannot redeclare block-scoped variable - start: 214, end: 215
✖ Duplicate arrow formal parameter - start: 230, end: 238
✖ Duplicate arrow formal parameter - start: 254, end: 261
✖ Duplicate arrow formal parameter - start: 271, end: 278
✖ Duplicate arrow formal parameter - start: 288, end: 298
✖ Duplicate arrow formal parameter - start: 310, end: 318
✖ Duplicate arrow formal parameter - start: 334, end: 341
✖ Cannot redeclare block-scoped variable - start: 384, end: 386
✖ Cannot redeclare block-scoped variable - start: 410, end: 412

```

