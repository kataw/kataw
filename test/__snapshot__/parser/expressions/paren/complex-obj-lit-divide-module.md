# Kataw parser test case

## Input

`````js
({"a": [b]} = 1 / (d = ((a)) = a));

({"a": [b]} = 1 / (d = ((a)) = a), ({"a": [b]} = 1 / (d = ((a)) = a)));

(x, {"a": [b]} = 1 / (d = ((a)) = a));
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
                    "kind": 125,
                    "left": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 219,
                                    "left": {
                                        "kind": 119,
                                        "elementList": {
                                            "kind": 270,
                                            "elements": [
                                                {
                                                    "kind": 134299649,
                                                    "text": "b",
                                                    "rawText": "b",
                                                    "flags": 768,
                                                    "start": 8,
                                                    "end": 9
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 256,
                                            "start": 8,
                                            "end": 9
                                        },
                                        "flags": 256,
                                        "start": 6,
                                        "end": 10
                                    },
                                    "right": {
                                        "kind": 201392131,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 768,
                                        "start": 2,
                                        "end": 5
                                    },
                                    "flags": 256,
                                    "start": 2,
                                    "end": 10
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "start": 2,
                            "end": 10
                        },
                        "flags": 256,
                        "start": 1,
                        "end": 11
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 512,
                        "start": 11,
                        "end": 13
                    },
                    "right": {
                        "kind": 198,
                        "left": {
                            "kind": 201392130,
                            "text": 1,
                            "rawText": "1",
                            "flags": 768,
                            "start": 13,
                            "end": 15
                        },
                        "operatorToken": {
                            "kind": 35640,
                            "flags": 512,
                            "start": 15,
                            "end": 17
                        },
                        "right": {
                            "kind": 121,
                            "expression": {
                                "kind": 125,
                                "left": {
                                    "kind": 134299649,
                                    "text": "d",
                                    "rawText": "d",
                                    "flags": 768,
                                    "start": 19,
                                    "end": 20
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 512,
                                    "start": 20,
                                    "end": 22
                                },
                                "right": {
                                    "kind": 125,
                                    "left": {
                                        "kind": 121,
                                        "expression": {
                                            "kind": 121,
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 768,
                                                "start": 25,
                                                "end": 26
                                            },
                                            "flags": 256,
                                            "start": 24,
                                            "end": 27
                                        },
                                        "flags": 256,
                                        "start": 22,
                                        "end": 28
                                    },
                                    "operatorToken": {
                                        "kind": 4125,
                                        "flags": 512,
                                        "start": 28,
                                        "end": 30
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 768,
                                        "start": 30,
                                        "end": 32
                                    },
                                    "flags": 256,
                                    "start": 22,
                                    "end": 32
                                },
                                "flags": 256,
                                "start": 17,
                                "end": 32
                            },
                            "flags": 256,
                            "start": 17,
                            "end": 33
                        },
                        "flags": 256,
                        "start": 13,
                        "end": 33
                    },
                    "flags": 256,
                    "start": 1,
                    "end": 33
                },
                "flags": 256,
                "start": 0,
                "end": 34
            },
            "flags": 128,
            "start": 0,
            "end": 35
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 132,
                    "expressions": [
                        {
                            "kind": 125,
                            "left": {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [
                                        {
                                            "kind": 219,
                                            "left": {
                                                "kind": 119,
                                                "elementList": {
                                                    "kind": 270,
                                                    "elements": [
                                                        {
                                                            "kind": 134299649,
                                                            "text": "b",
                                                            "rawText": "b",
                                                            "flags": 768,
                                                            "start": 45,
                                                            "end": 46
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 256,
                                                    "start": 45,
                                                    "end": 46
                                                },
                                                "flags": 256,
                                                "start": 43,
                                                "end": 47
                                            },
                                            "right": {
                                                "kind": 201392131,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 768,
                                                "start": 39,
                                                "end": 42
                                            },
                                            "flags": 256,
                                            "start": 39,
                                            "end": 47
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "flags": 0,
                                    "start": 39,
                                    "end": 47
                                },
                                "flags": 256,
                                "start": 38,
                                "end": 48
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 512,
                                "start": 48,
                                "end": 50
                            },
                            "right": {
                                "kind": 198,
                                "left": {
                                    "kind": 201392130,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 768,
                                    "start": 50,
                                    "end": 52
                                },
                                "operatorToken": {
                                    "kind": 35640,
                                    "flags": 512,
                                    "start": 52,
                                    "end": 54
                                },
                                "right": {
                                    "kind": 121,
                                    "expression": {
                                        "kind": 125,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "d",
                                            "rawText": "d",
                                            "flags": 768,
                                            "start": 56,
                                            "end": 57
                                        },
                                        "operatorToken": {
                                            "kind": 4125,
                                            "flags": 512,
                                            "start": 57,
                                            "end": 59
                                        },
                                        "right": {
                                            "kind": 125,
                                            "left": {
                                                "kind": 121,
                                                "expression": {
                                                    "kind": 121,
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "a",
                                                        "rawText": "a",
                                                        "flags": 768,
                                                        "start": 62,
                                                        "end": 63
                                                    },
                                                    "flags": 256,
                                                    "start": 61,
                                                    "end": 64
                                                },
                                                "flags": 256,
                                                "start": 59,
                                                "end": 65
                                            },
                                            "operatorToken": {
                                                "kind": 4125,
                                                "flags": 512,
                                                "start": 65,
                                                "end": 67
                                            },
                                            "right": {
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 768,
                                                "start": 67,
                                                "end": 69
                                            },
                                            "flags": 256,
                                            "start": 59,
                                            "end": 69
                                        },
                                        "flags": 256,
                                        "start": 54,
                                        "end": 69
                                    },
                                    "flags": 256,
                                    "start": 54,
                                    "end": 70
                                },
                                "flags": 256,
                                "start": 50,
                                "end": 70
                            },
                            "flags": 256,
                            "start": 38,
                            "end": 70
                        },
                        {
                            "kind": 121,
                            "expression": {
                                "kind": 125,
                                "left": {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 119,
                                                    "elementList": {
                                                        "kind": 270,
                                                        "elements": [
                                                            {
                                                                "kind": 134299649,
                                                                "text": "b",
                                                                "rawText": "b",
                                                                "flags": 768,
                                                                "start": 80,
                                                                "end": 81
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 256,
                                                        "start": 80,
                                                        "end": 81
                                                    },
                                                    "flags": 256,
                                                    "start": 78,
                                                    "end": 82
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "a",
                                                    "rawText": "a",
                                                    "flags": 768,
                                                    "start": 74,
                                                    "end": 77
                                                },
                                                "flags": 256,
                                                "start": 74,
                                                "end": 82
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": false,
                                        "flags": 0,
                                        "start": 74,
                                        "end": 82
                                    },
                                    "flags": 256,
                                    "start": 73,
                                    "end": 83
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 512,
                                    "start": 83,
                                    "end": 85
                                },
                                "right": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 201392130,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 768,
                                        "start": 85,
                                        "end": 87
                                    },
                                    "operatorToken": {
                                        "kind": 35640,
                                        "flags": 512,
                                        "start": 87,
                                        "end": 89
                                    },
                                    "right": {
                                        "kind": 121,
                                        "expression": {
                                            "kind": 125,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "d",
                                                "rawText": "d",
                                                "flags": 768,
                                                "start": 91,
                                                "end": 92
                                            },
                                            "operatorToken": {
                                                "kind": 4125,
                                                "flags": 512,
                                                "start": 92,
                                                "end": 94
                                            },
                                            "right": {
                                                "kind": 125,
                                                "left": {
                                                    "kind": 121,
                                                    "expression": {
                                                        "kind": 121,
                                                        "expression": {
                                                            "kind": 134299649,
                                                            "text": "a",
                                                            "rawText": "a",
                                                            "flags": 768,
                                                            "start": 97,
                                                            "end": 98
                                                        },
                                                        "flags": 256,
                                                        "start": 96,
                                                        "end": 99
                                                    },
                                                    "flags": 256,
                                                    "start": 94,
                                                    "end": 100
                                                },
                                                "operatorToken": {
                                                    "kind": 4125,
                                                    "flags": 512,
                                                    "start": 100,
                                                    "end": 102
                                                },
                                                "right": {
                                                    "kind": 134299649,
                                                    "text": "a",
                                                    "rawText": "a",
                                                    "flags": 768,
                                                    "start": 102,
                                                    "end": 104
                                                },
                                                "flags": 256,
                                                "start": 94,
                                                "end": 104
                                            },
                                            "flags": 256,
                                            "start": 89,
                                            "end": 104
                                        },
                                        "flags": 256,
                                        "start": 89,
                                        "end": 105
                                    },
                                    "flags": 256,
                                    "start": 85,
                                    "end": 105
                                },
                                "flags": 256,
                                "start": 73,
                                "end": 105
                            },
                            "flags": 256,
                            "start": 71,
                            "end": 106
                        }
                    ],
                    "flags": 256,
                    "start": 35,
                    "end": 106
                },
                "flags": 256,
                "start": 35,
                "end": 107
            },
            "flags": 128,
            "start": 35,
            "end": 108
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 132,
                    "expressions": [
                        {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 768,
                            "start": 111,
                            "end": 112
                        },
                        {
                            "kind": 125,
                            "left": {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [
                                        {
                                            "kind": 219,
                                            "left": {
                                                "kind": 119,
                                                "elementList": {
                                                    "kind": 270,
                                                    "elements": [
                                                        {
                                                            "kind": 134299649,
                                                            "text": "b",
                                                            "rawText": "b",
                                                            "flags": 768,
                                                            "start": 121,
                                                            "end": 122
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 256,
                                                    "start": 121,
                                                    "end": 122
                                                },
                                                "flags": 256,
                                                "start": 119,
                                                "end": 123
                                            },
                                            "right": {
                                                "kind": 201392131,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 768,
                                                "start": 115,
                                                "end": 118
                                            },
                                            "flags": 256,
                                            "start": 115,
                                            "end": 123
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "flags": 0,
                                    "start": 115,
                                    "end": 123
                                },
                                "flags": 256,
                                "start": 113,
                                "end": 124
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 512,
                                "start": 124,
                                "end": 126
                            },
                            "right": {
                                "kind": 198,
                                "left": {
                                    "kind": 201392130,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 768,
                                    "start": 126,
                                    "end": 128
                                },
                                "operatorToken": {
                                    "kind": 35640,
                                    "flags": 512,
                                    "start": 128,
                                    "end": 130
                                },
                                "right": {
                                    "kind": 121,
                                    "expression": {
                                        "kind": 125,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "d",
                                            "rawText": "d",
                                            "flags": 768,
                                            "start": 132,
                                            "end": 133
                                        },
                                        "operatorToken": {
                                            "kind": 4125,
                                            "flags": 512,
                                            "start": 133,
                                            "end": 135
                                        },
                                        "right": {
                                            "kind": 125,
                                            "left": {
                                                "kind": 121,
                                                "expression": {
                                                    "kind": 121,
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "a",
                                                        "rawText": "a",
                                                        "flags": 768,
                                                        "start": 138,
                                                        "end": 139
                                                    },
                                                    "flags": 256,
                                                    "start": 137,
                                                    "end": 140
                                                },
                                                "flags": 256,
                                                "start": 135,
                                                "end": 141
                                            },
                                            "operatorToken": {
                                                "kind": 4125,
                                                "flags": 512,
                                                "start": 141,
                                                "end": 143
                                            },
                                            "right": {
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 768,
                                                "start": 143,
                                                "end": 145
                                            },
                                            "flags": 256,
                                            "start": 135,
                                            "end": 145
                                        },
                                        "flags": 256,
                                        "start": 130,
                                        "end": 145
                                    },
                                    "flags": 256,
                                    "start": 130,
                                    "end": 146
                                },
                                "flags": 256,
                                "start": 126,
                                "end": 146
                            },
                            "flags": 256,
                            "start": 113,
                            "end": 146
                        }
                    ],
                    "flags": 256,
                    "start": 108,
                    "end": 147
                },
                "flags": 256,
                "start": 108,
                "end": 147
            },
            "flags": 128,
            "start": 108,
            "end": 148
        }
    ],
    "isModule": false,
    "text": "({\"a\": [b]} = 1 / (d = ((a)) = a));\n\n({\"a\": [b]} = 1 / (d = ((a)) = a), ({\"a\": [b]} = 1 / (d = ((a)) = a)));\n\n(x, {\"a\": [b]} = 1 / (d = ((a)) = a));",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 148
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 28, end: 30
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 65, end: 67
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 100, end: 102
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 141, end: 143

```

