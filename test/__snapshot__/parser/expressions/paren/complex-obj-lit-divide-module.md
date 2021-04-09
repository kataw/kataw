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
                                                    "kind": 81921,
                                                    "value": "b",
                                                    "autofix": 0,
                                                    "flags": 768,
                                                    "start": 8,
                                                    "end": 9
                                                }
                                            ],
                                            "trailingComma": false,
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 8,
                                            "end": 9
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 6,
                                        "end": 10
                                    },
                                    "right": {
                                        "kind": 67174403,
                                        "value": "a",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 2,
                                        "end": 5
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 2,
                                    "end": 10
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "autofix": 0,
                            "flags": 0,
                            "start": 2,
                            "end": 10
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 1,
                        "end": 11
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "autofix": 0,
                        "flags": 0,
                        "start": 11,
                        "end": 13
                    },
                    "right": {
                        "kind": 198,
                        "left": {
                            "kind": 81921,
                            "value": 1,
                            "autofix": 0,
                            "flags": 768,
                            "start": 13,
                            "end": 15
                        },
                        "operatorToken": {
                            "kind": 35640,
                            "autofix": 0,
                            "flags": 0,
                            "start": 15,
                            "end": 17
                        },
                        "right": {
                            "kind": 121,
                            "expression": {
                                "kind": 125,
                                "left": {
                                    "kind": 81921,
                                    "value": "d",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 19,
                                    "end": 20
                                },
                                "operatorToken": {
                                    "kind": 537067531,
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 17,
                                    "end": 22
                                },
                                "right": {
                                    "kind": 125,
                                    "left": {
                                        "kind": 121,
                                        "expression": {
                                            "kind": 121,
                                            "expression": {
                                                "kind": 81921,
                                                "value": "a",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 25,
                                                "end": 26
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 24,
                                            "end": 27
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 22,
                                        "end": 28
                                    },
                                    "operatorToken": {
                                        "kind": 81921,
                                        "autofix": 0,
                                        "flags": 0,
                                        "start": 22,
                                        "end": 30
                                    },
                                    "right": {
                                        "kind": 81921,
                                        "value": "a",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 30,
                                        "end": 32
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 22,
                                    "end": 32
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 17,
                                "end": 32
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 17,
                            "end": 33
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 13,
                        "end": 33
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 1,
                    "end": 33
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 34
            },
            "autofix": 0,
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
                                                            "kind": 81921,
                                                            "value": "b",
                                                            "autofix": 0,
                                                            "flags": 768,
                                                            "start": 45,
                                                            "end": 46
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 45,
                                                    "end": 46
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 43,
                                                "end": 47
                                            },
                                            "right": {
                                                "kind": 67174403,
                                                "value": "a",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 39,
                                                "end": 42
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 39,
                                            "end": 47
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 39,
                                    "end": 47
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 38,
                                "end": 48
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "autofix": 0,
                                "flags": 0,
                                "start": 48,
                                "end": 50
                            },
                            "right": {
                                "kind": 198,
                                "left": {
                                    "kind": 81921,
                                    "value": 1,
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 50,
                                    "end": 52
                                },
                                "operatorToken": {
                                    "kind": 35640,
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 52,
                                    "end": 54
                                },
                                "right": {
                                    "kind": 121,
                                    "expression": {
                                        "kind": 125,
                                        "left": {
                                            "kind": 81921,
                                            "value": "d",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 56,
                                            "end": 57
                                        },
                                        "operatorToken": {
                                            "kind": 537067531,
                                            "autofix": 0,
                                            "flags": 0,
                                            "start": 54,
                                            "end": 59
                                        },
                                        "right": {
                                            "kind": 125,
                                            "left": {
                                                "kind": 121,
                                                "expression": {
                                                    "kind": 121,
                                                    "expression": {
                                                        "kind": 81921,
                                                        "value": "a",
                                                        "autofix": 0,
                                                        "flags": 768,
                                                        "start": 62,
                                                        "end": 63
                                                    },
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 61,
                                                    "end": 64
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 59,
                                                "end": 65
                                            },
                                            "operatorToken": {
                                                "kind": 81921,
                                                "autofix": 0,
                                                "flags": 0,
                                                "start": 59,
                                                "end": 67
                                            },
                                            "right": {
                                                "kind": 81921,
                                                "value": "a",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 67,
                                                "end": 69
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 59,
                                            "end": 69
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 54,
                                        "end": 69
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 54,
                                    "end": 70
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 50,
                                "end": 70
                            },
                            "autofix": 0,
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
                                                                "kind": 81921,
                                                                "value": "b",
                                                                "autofix": 0,
                                                                "flags": 768,
                                                                "start": 80,
                                                                "end": 81
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "autofix": 0,
                                                        "flags": 256,
                                                        "start": 80,
                                                        "end": 81
                                                    },
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 78,
                                                    "end": 82
                                                },
                                                "right": {
                                                    "kind": 67174403,
                                                    "value": "a",
                                                    "autofix": 0,
                                                    "flags": 768,
                                                    "start": 74,
                                                    "end": 77
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 74,
                                                "end": 82
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": false,
                                        "autofix": 0,
                                        "flags": 0,
                                        "start": 74,
                                        "end": 82
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 73,
                                    "end": 83
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 83,
                                    "end": 85
                                },
                                "right": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 81921,
                                        "value": 1,
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 85,
                                        "end": 87
                                    },
                                    "operatorToken": {
                                        "kind": 35640,
                                        "autofix": 0,
                                        "flags": 0,
                                        "start": 87,
                                        "end": 89
                                    },
                                    "right": {
                                        "kind": 121,
                                        "expression": {
                                            "kind": 125,
                                            "left": {
                                                "kind": 81921,
                                                "value": "d",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 91,
                                                "end": 92
                                            },
                                            "operatorToken": {
                                                "kind": 537067531,
                                                "autofix": 0,
                                                "flags": 0,
                                                "start": 89,
                                                "end": 94
                                            },
                                            "right": {
                                                "kind": 125,
                                                "left": {
                                                    "kind": 121,
                                                    "expression": {
                                                        "kind": 121,
                                                        "expression": {
                                                            "kind": 81921,
                                                            "value": "a",
                                                            "autofix": 0,
                                                            "flags": 768,
                                                            "start": 97,
                                                            "end": 98
                                                        },
                                                        "autofix": 0,
                                                        "flags": 256,
                                                        "start": 96,
                                                        "end": 99
                                                    },
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 94,
                                                    "end": 100
                                                },
                                                "operatorToken": {
                                                    "kind": 81921,
                                                    "autofix": 0,
                                                    "flags": 0,
                                                    "start": 94,
                                                    "end": 102
                                                },
                                                "right": {
                                                    "kind": 81921,
                                                    "value": "a",
                                                    "autofix": 0,
                                                    "flags": 768,
                                                    "start": 102,
                                                    "end": 104
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 94,
                                                "end": 104
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 89,
                                            "end": 104
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 89,
                                        "end": 105
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 85,
                                    "end": 105
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 73,
                                "end": 105
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 71,
                            "end": 106
                        }
                    ],
                    "autofix": 0,
                    "flags": 256,
                    "start": 35,
                    "end": 106
                },
                "autofix": 0,
                "flags": 256,
                "start": 35,
                "end": 107
            },
            "autofix": 0,
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
                            "kind": 81921,
                            "value": "x",
                            "autofix": 0,
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
                                                            "kind": 81921,
                                                            "value": "b",
                                                            "autofix": 0,
                                                            "flags": 768,
                                                            "start": 121,
                                                            "end": 122
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 121,
                                                    "end": 122
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 119,
                                                "end": 123
                                            },
                                            "right": {
                                                "kind": 67174403,
                                                "value": "a",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 115,
                                                "end": 118
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 115,
                                            "end": 123
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 115,
                                    "end": 123
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 113,
                                "end": 124
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "autofix": 0,
                                "flags": 0,
                                "start": 124,
                                "end": 126
                            },
                            "right": {
                                "kind": 198,
                                "left": {
                                    "kind": 81921,
                                    "value": 1,
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 126,
                                    "end": 128
                                },
                                "operatorToken": {
                                    "kind": 35640,
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 128,
                                    "end": 130
                                },
                                "right": {
                                    "kind": 121,
                                    "expression": {
                                        "kind": 125,
                                        "left": {
                                            "kind": 81921,
                                            "value": "d",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 132,
                                            "end": 133
                                        },
                                        "operatorToken": {
                                            "kind": 537067531,
                                            "autofix": 0,
                                            "flags": 0,
                                            "start": 130,
                                            "end": 135
                                        },
                                        "right": {
                                            "kind": 125,
                                            "left": {
                                                "kind": 121,
                                                "expression": {
                                                    "kind": 121,
                                                    "expression": {
                                                        "kind": 81921,
                                                        "value": "a",
                                                        "autofix": 0,
                                                        "flags": 768,
                                                        "start": 138,
                                                        "end": 139
                                                    },
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 137,
                                                    "end": 140
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 135,
                                                "end": 141
                                            },
                                            "operatorToken": {
                                                "kind": 81921,
                                                "autofix": 0,
                                                "flags": 0,
                                                "start": 135,
                                                "end": 143
                                            },
                                            "right": {
                                                "kind": 81921,
                                                "value": "a",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 143,
                                                "end": 145
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 135,
                                            "end": 145
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 130,
                                        "end": 145
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 130,
                                    "end": 146
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 126,
                                "end": 146
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 113,
                            "end": 146
                        }
                    ],
                    "autofix": 0,
                    "flags": 256,
                    "start": 108,
                    "end": 147
                },
                "autofix": 0,
                "flags": 256,
                "start": 108,
                "end": 147
            },
            "autofix": 0,
            "flags": 128,
            "start": 108,
            "end": 148
        }
    ],
    "isModule": false,
    "text": "({\"a\": [b]} = 1 / (d = ((a)) = a));\n\n({\"a\": [b]} = 1 / (d = ((a)) = a), ({\"a\": [b]} = 1 / (d = ((a)) = a)));\n\n(x, {\"a\": [b]} = 1 / (d = ((a)) = a));",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 148
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

