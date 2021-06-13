# Kataw parser test case

## Input

`````js
x ? ( (x, y) => (u, v) => x*u + y*v ) : baz;
x ? ( (a, b) => 0, (c, d) => 1 ) : baz;
x ? ( (a, (a, (b, c) => 0)) ) : baz;
x ? ( (a, {}) => {} ) : baz;
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
                "kind": 197,
                "shortCircuit": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 0,
                    "end": 1
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 64,
                    "start": 1,
                    "end": 3
                },
                "consequent": {
                    "kind": 121,
                    "expression": {
                        "kind": 271,
                        "arrowToken": {
                            "kind": 10,
                            "flags": 64,
                            "start": 12,
                            "end": 15
                        },
                        "typeParameters": null,
                        "parameters": [
                            {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 7,
                                "end": 8
                            },
                            {
                                "kind": 134299649,
                                "text": "y",
                                "rawText": "y",
                                "flags": 96,
                                "start": 9,
                                "end": 11
                            }
                        ],
                        "asyncKeyword": null,
                        "returnType": null,
                        "contents": {
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "start": 22,
                                "end": 25
                            },
                            "typeParameters": null,
                            "parameters": [
                                {
                                    "kind": 134299649,
                                    "text": "u",
                                    "rawText": "u",
                                    "flags": 96,
                                    "start": 17,
                                    "end": 18
                                },
                                {
                                    "kind": 134299649,
                                    "text": "v",
                                    "rawText": "v",
                                    "flags": 96,
                                    "start": 19,
                                    "end": 21
                                }
                            ],
                            "asyncKeyword": null,
                            "returnType": null,
                            "contents": {
                                "kind": 198,
                                "left": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 25,
                                        "end": 27
                                    },
                                    "operatorToken": {
                                        "kind": 67143222,
                                        "flags": 96,
                                        "start": 27,
                                        "end": 28
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "u",
                                        "rawText": "u",
                                        "flags": 96,
                                        "start": 28,
                                        "end": 29
                                    },
                                    "flags": 32,
                                    "start": 25,
                                    "end": 29
                                },
                                "operatorToken": {
                                    "kind": 99634,
                                    "flags": 96,
                                    "start": 29,
                                    "end": 31
                                },
                                "right": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 96,
                                        "start": 31,
                                        "end": 33
                                    },
                                    "operatorToken": {
                                        "kind": 67143222,
                                        "flags": 96,
                                        "start": 33,
                                        "end": 34
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "v",
                                        "rawText": "v",
                                        "flags": 96,
                                        "start": 34,
                                        "end": 35
                                    },
                                    "flags": 32,
                                    "start": 33,
                                    "end": 35
                                },
                                "flags": 32,
                                "start": 25,
                                "end": 35
                            },
                            "flags": 32,
                            "start": 15,
                            "end": 35
                        },
                        "flags": 32,
                        "start": 5,
                        "end": 35
                    },
                    "flags": 32,
                    "start": 3,
                    "end": 37
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 64,
                    "start": 37,
                    "end": 39
                },
                "alternate": {
                    "kind": 134299649,
                    "text": "baz",
                    "rawText": "baz",
                    "flags": 96,
                    "start": 39,
                    "end": 43
                },
                "flags": 32,
                "start": 0,
                "end": 43
            },
            "flags": 16,
            "start": 0,
            "end": 44
        },
        {
            "kind": 120,
            "expression": {
                "kind": 197,
                "shortCircuit": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 44,
                    "end": 46
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 64,
                    "start": 46,
                    "end": 48
                },
                "consequent": {
                    "kind": 121,
                    "expression": {
                        "kind": 132,
                        "expressions": [
                            {
                                "kind": 271,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "start": 57,
                                    "end": 60
                                },
                                "typeParameters": null,
                                "parameters": [
                                    {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "start": 52,
                                        "end": 53
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 96,
                                        "start": 54,
                                        "end": 56
                                    }
                                ],
                                "asyncKeyword": null,
                                "returnType": null,
                                "contents": {
                                    "kind": 201392130,
                                    "text": 0,
                                    "rawText": "0",
                                    "flags": 96,
                                    "start": 60,
                                    "end": 62
                                },
                                "flags": 32,
                                "start": 50,
                                "end": 62
                            },
                            {
                                "kind": 271,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "start": 70,
                                    "end": 73
                                },
                                "typeParameters": null,
                                "parameters": [
                                    {
                                        "kind": 134299649,
                                        "text": "c",
                                        "rawText": "c",
                                        "flags": 96,
                                        "start": 65,
                                        "end": 66
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": "d",
                                        "rawText": "d",
                                        "flags": 96,
                                        "start": 67,
                                        "end": 69
                                    }
                                ],
                                "asyncKeyword": null,
                                "returnType": null,
                                "contents": {
                                    "kind": 201392130,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 96,
                                    "start": 73,
                                    "end": 75
                                },
                                "flags": 32,
                                "start": 63,
                                "end": 75
                            }
                        ],
                        "flags": 32,
                        "start": 48,
                        "end": 75
                    },
                    "flags": 32,
                    "start": 48,
                    "end": 77
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 64,
                    "start": 77,
                    "end": 79
                },
                "alternate": {
                    "kind": 134299649,
                    "text": "baz",
                    "rawText": "baz",
                    "flags": 96,
                    "start": 79,
                    "end": 83
                },
                "flags": 32,
                "start": 44,
                "end": 83
            },
            "flags": 16,
            "start": 44,
            "end": 84
        },
        {
            "kind": 120,
            "expression": {
                "kind": 197,
                "shortCircuit": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 84,
                    "end": 86
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 64,
                    "start": 86,
                    "end": 88
                },
                "consequent": {
                    "kind": 121,
                    "expression": {
                        "kind": 121,
                        "expression": {
                            "kind": 132,
                            "expressions": [
                                {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "start": 92,
                                    "end": 93
                                },
                                {
                                    "kind": 121,
                                    "expression": {
                                        "kind": 132,
                                        "expressions": [
                                            {
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 96,
                                                "start": 96,
                                                "end": 97
                                            },
                                            {
                                                "kind": 271,
                                                "arrowToken": {
                                                    "kind": 10,
                                                    "flags": 64,
                                                    "start": 105,
                                                    "end": 108
                                                },
                                                "typeParameters": null,
                                                "parameters": [
                                                    {
                                                        "kind": 134299649,
                                                        "text": "b",
                                                        "rawText": "b",
                                                        "flags": 96,
                                                        "start": 100,
                                                        "end": 101
                                                    },
                                                    {
                                                        "kind": 134299649,
                                                        "text": "c",
                                                        "rawText": "c",
                                                        "flags": 96,
                                                        "start": 102,
                                                        "end": 104
                                                    }
                                                ],
                                                "asyncKeyword": null,
                                                "returnType": null,
                                                "contents": {
                                                    "kind": 201392130,
                                                    "text": 0,
                                                    "rawText": "0",
                                                    "flags": 96,
                                                    "start": 108,
                                                    "end": 110
                                                },
                                                "flags": 32,
                                                "start": 98,
                                                "end": 110
                                            }
                                        ],
                                        "flags": 32,
                                        "start": 94,
                                        "end": 110
                                    },
                                    "flags": 32,
                                    "start": 94,
                                    "end": 111
                                }
                            ],
                            "flags": 32,
                            "start": 90,
                            "end": 111
                        },
                        "flags": 32,
                        "start": 90,
                        "end": 112
                    },
                    "flags": 32,
                    "start": 88,
                    "end": 114
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 64,
                    "start": 114,
                    "end": 116
                },
                "alternate": {
                    "kind": 134299649,
                    "text": "baz",
                    "rawText": "baz",
                    "flags": 96,
                    "start": 116,
                    "end": 120
                },
                "flags": 32,
                "start": 84,
                "end": 120
            },
            "flags": 16,
            "start": 84,
            "end": 121
        },
        {
            "kind": 120,
            "expression": {
                "kind": 197,
                "shortCircuit": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 121,
                    "end": 123
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 64,
                    "start": 123,
                    "end": 125
                },
                "consequent": {
                    "kind": 121,
                    "expression": {
                        "kind": 271,
                        "arrowToken": {
                            "kind": 10,
                            "flags": 64,
                            "start": 135,
                            "end": 138
                        },
                        "typeParameters": null,
                        "parameters": [
                            {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "start": 129,
                                "end": 130
                            },
                            {
                                "kind": 212,
                                "propertyList": {
                                    "kind": 213,
                                    "properties": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 133,
                                    "end": 133
                                },
                                "flags": 48,
                                "start": 131,
                                "end": 134
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
                                "start": 140,
                                "end": 140
                            },
                            "flags": 32,
                            "start": 138,
                            "end": 141
                        },
                        "flags": 34,
                        "start": 127,
                        "end": 141
                    },
                    "flags": 32,
                    "start": 125,
                    "end": 143
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 64,
                    "start": 143,
                    "end": 145
                },
                "alternate": {
                    "kind": 134299649,
                    "text": "baz",
                    "rawText": "baz",
                    "flags": 96,
                    "start": 145,
                    "end": 149
                },
                "flags": 32,
                "start": 121,
                "end": 149
            },
            "flags": 16,
            "start": 121,
            "end": 150
        }
    ],
    "isModule": false,
    "source": "x ? ( (x, y) => (u, v) => x*u + y*v ) : baz;\nx ? ( (a, b) => 0, (c, d) => 1 ) : baz;\nx ? ( (a, (a, (b, c) => 0)) ) : baz;\nx ? ( (a, {}) => {} ) : baz;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 150
}
```

### Printed

```javascript

x ? ((x, y) =>  (u, v) =>  x * u + y * v) : baz;
x ? ((a, b) =>  0, (c, d) =>  1) : baz;
x ? (a, (a, (b, c) =>  0)) : baz;
x ? ((a, {}) =>  {}) : baz;
```

### Diagnostics

```javascript
✔ No errors
```

