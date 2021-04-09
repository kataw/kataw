# Kataw parser test case

## Input

`````js
x ? ( (x, y) => (u, v) => x*u + y*v ) : baz;
x ? ( (a, b) => 0, (c, d) => 1 ) : baz;
x ? ( (a, (a, (b, c) => 0)) ) : baz;
x ? ( (a, {}) => {} ) : baz;
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 197,
                "shortCircuit": {
                    "kind": 81921,
                    "value": "x",
                    "autofix": 0,
                    "flags": 768,
                    "start": 0,
                    "end": 1
                },
                "questionToken": {
                    "kind": 22,
                    "autofix": 0,
                    "flags": 0,
                    "start": 1,
                    "end": 3
                },
                "consequent": {
                    "kind": 121,
                    "expression": {
                        "kind": 271,
                        "typeParameters": null,
                        "parameters": [
                            [
                                {
                                    "kind": 81921,
                                    "value": "x",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 7,
                                    "end": 8
                                },
                                {
                                    "kind": 81921,
                                    "value": "y",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 9,
                                    "end": 11
                                }
                            ]
                        ],
                        "asyncToken": false,
                        "returnType": null,
                        "contents": {
                            "kind": 271,
                            "typeParameters": null,
                            "parameters": [
                                [
                                    {
                                        "kind": 81921,
                                        "value": "u",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 17,
                                        "end": 18
                                    },
                                    {
                                        "kind": 81921,
                                        "value": "v",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 19,
                                        "end": 21
                                    }
                                ]
                            ],
                            "asyncToken": false,
                            "returnType": null,
                            "contents": {
                                "kind": 198,
                                "left": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 81921,
                                        "value": "x",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 25,
                                        "end": 27
                                    },
                                    "operatorToken": {
                                        "kind": 67143222,
                                        "autofix": 0,
                                        "flags": 0,
                                        "start": 27,
                                        "end": 28
                                    },
                                    "right": {
                                        "kind": 81921,
                                        "value": "u",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 28,
                                        "end": 29
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 25,
                                    "end": 29
                                },
                                "operatorToken": {
                                    "kind": 34098,
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 29,
                                    "end": 31
                                },
                                "right": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 81921,
                                        "value": "y",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 31,
                                        "end": 33
                                    },
                                    "operatorToken": {
                                        "kind": 67143222,
                                        "autofix": 0,
                                        "flags": 0,
                                        "start": 33,
                                        "end": 34
                                    },
                                    "right": {
                                        "kind": 81921,
                                        "value": "v",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 34,
                                        "end": 35
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 33,
                                    "end": 35
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 25,
                                "end": 35
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 15,
                            "end": 35
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 5,
                        "end": 35
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 3,
                    "end": 37
                },
                "colonToken": {
                    "kind": 21,
                    "autofix": 0,
                    "flags": 0,
                    "start": 37,
                    "end": 39
                },
                "alternate": {
                    "kind": 81921,
                    "value": "baz",
                    "autofix": 0,
                    "flags": 768,
                    "start": 39,
                    "end": 43
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 43
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 44
        },
        {
            "kind": 120,
            "expression": {
                "kind": 197,
                "shortCircuit": {
                    "kind": 81921,
                    "value": "x",
                    "autofix": 0,
                    "flags": 768,
                    "start": 44,
                    "end": 46
                },
                "questionToken": {
                    "kind": 22,
                    "autofix": 0,
                    "flags": 0,
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
                                "typeParameters": null,
                                "parameters": [
                                    [
                                        {
                                            "kind": 81921,
                                            "value": "a",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 52,
                                            "end": 53
                                        },
                                        {
                                            "kind": 81921,
                                            "value": "b",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 54,
                                            "end": 56
                                        }
                                    ]
                                ],
                                "asyncToken": false,
                                "returnType": null,
                                "contents": {
                                    "kind": 81921,
                                    "value": 0,
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 60,
                                    "end": 62
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 50,
                                "end": 62
                            },
                            {
                                "kind": 271,
                                "typeParameters": null,
                                "parameters": [
                                    [
                                        {
                                            "kind": 81921,
                                            "value": "c",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 65,
                                            "end": 66
                                        },
                                        {
                                            "kind": 81921,
                                            "value": "d",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 67,
                                            "end": 69
                                        }
                                    ]
                                ],
                                "asyncToken": false,
                                "returnType": null,
                                "contents": {
                                    "kind": 81921,
                                    "value": 1,
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 73,
                                    "end": 75
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 63,
                                "end": 75
                            }
                        ],
                        "autofix": 0,
                        "flags": 256,
                        "start": 48,
                        "end": 75
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 48,
                    "end": 77
                },
                "colonToken": {
                    "kind": 21,
                    "autofix": 0,
                    "flags": 0,
                    "start": 77,
                    "end": 79
                },
                "alternate": {
                    "kind": 81921,
                    "value": "baz",
                    "autofix": 0,
                    "flags": 768,
                    "start": 79,
                    "end": 83
                },
                "autofix": 0,
                "flags": 256,
                "start": 44,
                "end": 83
            },
            "autofix": 0,
            "flags": 128,
            "start": 44,
            "end": 84
        },
        {
            "kind": 120,
            "expression": {
                "kind": 197,
                "shortCircuit": {
                    "kind": 81921,
                    "value": "x",
                    "autofix": 0,
                    "flags": 768,
                    "start": 84,
                    "end": 86
                },
                "questionToken": {
                    "kind": 22,
                    "autofix": 0,
                    "flags": 0,
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
                                    "kind": 81921,
                                    "value": "a",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 92,
                                    "end": 93
                                },
                                {
                                    "kind": 121,
                                    "expression": {
                                        "kind": 132,
                                        "expressions": [
                                            {
                                                "kind": 81921,
                                                "value": "a",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 96,
                                                "end": 97
                                            },
                                            {
                                                "kind": 271,
                                                "typeParameters": null,
                                                "parameters": [
                                                    [
                                                        {
                                                            "kind": 81921,
                                                            "value": "b",
                                                            "autofix": 0,
                                                            "flags": 768,
                                                            "start": 100,
                                                            "end": 101
                                                        },
                                                        {
                                                            "kind": 81921,
                                                            "value": "c",
                                                            "autofix": 0,
                                                            "flags": 768,
                                                            "start": 102,
                                                            "end": 104
                                                        }
                                                    ]
                                                ],
                                                "asyncToken": false,
                                                "returnType": null,
                                                "contents": {
                                                    "kind": 81921,
                                                    "value": 0,
                                                    "autofix": 0,
                                                    "flags": 768,
                                                    "start": 108,
                                                    "end": 110
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 98,
                                                "end": 110
                                            }
                                        ],
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 94,
                                        "end": 110
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 94,
                                    "end": 111
                                }
                            ],
                            "autofix": 0,
                            "flags": 256,
                            "start": 90,
                            "end": 111
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 90,
                        "end": 112
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 88,
                    "end": 114
                },
                "colonToken": {
                    "kind": 21,
                    "autofix": 0,
                    "flags": 0,
                    "start": 114,
                    "end": 116
                },
                "alternate": {
                    "kind": 81921,
                    "value": "baz",
                    "autofix": 0,
                    "flags": 768,
                    "start": 116,
                    "end": 120
                },
                "autofix": 0,
                "flags": 256,
                "start": 84,
                "end": 120
            },
            "autofix": 0,
            "flags": 128,
            "start": 84,
            "end": 121
        },
        {
            "kind": 120,
            "expression": {
                "kind": 197,
                "shortCircuit": {
                    "kind": 81921,
                    "value": "x",
                    "autofix": 0,
                    "flags": 768,
                    "start": 121,
                    "end": 123
                },
                "questionToken": {
                    "kind": 22,
                    "autofix": 0,
                    "flags": 0,
                    "start": 123,
                    "end": 125
                },
                "consequent": {
                    "kind": 121,
                    "expression": {
                        "kind": 271,
                        "typeParameters": null,
                        "parameters": [
                            [
                                {
                                    "kind": 81921,
                                    "value": "a",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 129,
                                    "end": 130
                                },
                                {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [],
                                        "trailingComma": false,
                                        "multiline": false,
                                        "autofix": 0,
                                        "flags": 0,
                                        "start": 133,
                                        "end": 133
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 131,
                                    "end": 134
                                }
                            ]
                        ],
                        "asyncToken": false,
                        "returnType": null,
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "statements": [],
                                "multiline": false,
                                "autofix": 0,
                                "flags": 256,
                                "start": 140,
                                "end": 140
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 138,
                            "end": 141
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 127,
                        "end": 141
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 125,
                    "end": 143
                },
                "colonToken": {
                    "kind": 21,
                    "autofix": 0,
                    "flags": 0,
                    "start": 143,
                    "end": 145
                },
                "alternate": {
                    "kind": 81921,
                    "value": "baz",
                    "autofix": 0,
                    "flags": 768,
                    "start": 145,
                    "end": 149
                },
                "autofix": 0,
                "flags": 256,
                "start": 121,
                "end": 149
            },
            "autofix": 0,
            "flags": 128,
            "start": 121,
            "end": 150
        }
    ],
    "isModule": false,
    "text": "x ? ( (x, y) => (u, v) => x*u + y*v ) : baz;\nx ? ( (a, b) => 0, (c, d) => 1 ) : baz;\nx ? ( (a, (a, (b, c) => 0)) ) : baz;\nx ? ( (a, {}) => {} ) : baz;",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 150
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

