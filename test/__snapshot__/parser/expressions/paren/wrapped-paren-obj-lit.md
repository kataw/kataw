# Kataw parser test case

## Input

`````js
(((((({x:foo().x, y:foo().y} = {x:201, y:301}))))));

(((((({x:foo().x, y:foo().y} = {x:201, y:301}))))), (((((({x:foo().x, y:foo().y} = {x:201, y:301})))))));
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
                    "kind": 121,
                    "expression": {
                        "kind": 121,
                        "expression": {
                            "kind": 121,
                            "expression": {
                                "kind": 121,
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
                                                            "kind": 129,
                                                            "member": {
                                                                "kind": 131,
                                                                "expression": {
                                                                    "kind": 81921,
                                                                    "text": "foo",
                                                                    "rawText": "foo",
                                                                    "flags": 768,
                                                                    "start": 9,
                                                                    "end": 12
                                                                },
                                                                "argumentList": {
                                                                    "kind": 256,
                                                                    "elements": [],
                                                                    "trailingComma": false,
                                                                    "flags": 256,
                                                                    "start": 13,
                                                                    "end": 13
                                                                },
                                                                "flags": 256,
                                                                "start": 7,
                                                                "end": 14
                                                            },
                                                            "expression": {
                                                                "kind": 81921,
                                                                "text": "x",
                                                                "rawText": "x",
                                                                "flags": 768,
                                                                "start": 15,
                                                                "end": 16
                                                            },
                                                            "autofix": 0,
                                                            "flags": 256,
                                                            "start": 7,
                                                            "end": 16
                                                        },
                                                        "right": {
                                                            "kind": 81921,
                                                            "text": "x",
                                                            "rawText": "x",
                                                            "flags": 768,
                                                            "start": 7,
                                                            "end": 8
                                                        },
                                                        "flags": 256,
                                                        "start": 7,
                                                        "end": 16
                                                    },
                                                    {
                                                        "kind": 219,
                                                        "left": {
                                                            "kind": 129,
                                                            "member": {
                                                                "kind": 131,
                                                                "expression": {
                                                                    "kind": 81921,
                                                                    "text": "foo",
                                                                    "rawText": "foo",
                                                                    "flags": 768,
                                                                    "start": 20,
                                                                    "end": 23
                                                                },
                                                                "argumentList": {
                                                                    "kind": 256,
                                                                    "elements": [],
                                                                    "trailingComma": false,
                                                                    "flags": 256,
                                                                    "start": 24,
                                                                    "end": 24
                                                                },
                                                                "flags": 256,
                                                                "start": 17,
                                                                "end": 25
                                                            },
                                                            "expression": {
                                                                "kind": 81921,
                                                                "text": "y",
                                                                "rawText": "y",
                                                                "flags": 768,
                                                                "start": 26,
                                                                "end": 27
                                                            },
                                                            "autofix": 0,
                                                            "flags": 256,
                                                            "start": 17,
                                                            "end": 27
                                                        },
                                                        "right": {
                                                            "kind": 81921,
                                                            "text": "y",
                                                            "rawText": "y",
                                                            "flags": 768,
                                                            "start": 17,
                                                            "end": 19
                                                        },
                                                        "flags": 256,
                                                        "start": 17,
                                                        "end": 27
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "multiline": false,
                                                "flags": 0,
                                                "start": 7,
                                                "end": 27
                                            },
                                            "flags": 256,
                                            "start": 6,
                                            "end": 28
                                        },
                                        "operatorToken": {
                                            "kind": 4125,
                                            "flags": 768,
                                            "start": 28,
                                            "end": 30
                                        },
                                        "right": {
                                            "kind": 220,
                                            "propertyList": {
                                                "kind": 218,
                                                "properties": [
                                                    {
                                                        "kind": 219,
                                                        "left": {
                                                            "kind": 81921,
                                                            "text": 201,
                                                            "rawText": "201",
                                                            "flags": 768,
                                                            "start": 34,
                                                            "end": 37
                                                        },
                                                        "right": {
                                                            "kind": 81921,
                                                            "text": "x",
                                                            "rawText": "x",
                                                            "flags": 768,
                                                            "start": 32,
                                                            "end": 33
                                                        },
                                                        "flags": 256,
                                                        "start": 32,
                                                        "end": 37
                                                    },
                                                    {
                                                        "kind": 219,
                                                        "left": {
                                                            "kind": 81921,
                                                            "text": 301,
                                                            "rawText": "301",
                                                            "flags": 768,
                                                            "start": 41,
                                                            "end": 44
                                                        },
                                                        "right": {
                                                            "kind": 81921,
                                                            "text": "y",
                                                            "rawText": "y",
                                                            "flags": 768,
                                                            "start": 38,
                                                            "end": 40
                                                        },
                                                        "flags": 256,
                                                        "start": 38,
                                                        "end": 44
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "multiline": false,
                                                "flags": 0,
                                                "start": 32,
                                                "end": 44
                                            },
                                            "flags": 256,
                                            "start": 30,
                                            "end": 45
                                        },
                                        "flags": 256,
                                        "start": 6,
                                        "end": 45
                                    },
                                    "flags": 256,
                                    "start": 5,
                                    "end": 46
                                },
                                "flags": 256,
                                "start": 4,
                                "end": 47
                            },
                            "flags": 256,
                            "start": 3,
                            "end": 48
                        },
                        "flags": 256,
                        "start": 2,
                        "end": 49
                    },
                    "flags": 256,
                    "start": 1,
                    "end": 50
                },
                "flags": 256,
                "start": 0,
                "end": 51
            },
            "flags": 128,
            "start": 0,
            "end": 52
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 132,
                    "expressions": [
                        {
                            "kind": 121,
                            "expression": {
                                "kind": 121,
                                "expression": {
                                    "kind": 121,
                                    "expression": {
                                        "kind": 121,
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
                                                                    "kind": 129,
                                                                    "member": {
                                                                        "kind": 131,
                                                                        "expression": {
                                                                            "kind": 81921,
                                                                            "text": "foo",
                                                                            "rawText": "foo",
                                                                            "flags": 768,
                                                                            "start": 63,
                                                                            "end": 66
                                                                        },
                                                                        "argumentList": {
                                                                            "kind": 256,
                                                                            "elements": [],
                                                                            "trailingComma": false,
                                                                            "flags": 256,
                                                                            "start": 67,
                                                                            "end": 67
                                                                        },
                                                                        "flags": 256,
                                                                        "start": 61,
                                                                        "end": 68
                                                                    },
                                                                    "expression": {
                                                                        "kind": 81921,
                                                                        "text": "x",
                                                                        "rawText": "x",
                                                                        "flags": 768,
                                                                        "start": 69,
                                                                        "end": 70
                                                                    },
                                                                    "autofix": 0,
                                                                    "flags": 256,
                                                                    "start": 61,
                                                                    "end": 70
                                                                },
                                                                "right": {
                                                                    "kind": 81921,
                                                                    "text": "x",
                                                                    "rawText": "x",
                                                                    "flags": 768,
                                                                    "start": 61,
                                                                    "end": 62
                                                                },
                                                                "flags": 256,
                                                                "start": 61,
                                                                "end": 70
                                                            },
                                                            {
                                                                "kind": 219,
                                                                "left": {
                                                                    "kind": 129,
                                                                    "member": {
                                                                        "kind": 131,
                                                                        "expression": {
                                                                            "kind": 81921,
                                                                            "text": "foo",
                                                                            "rawText": "foo",
                                                                            "flags": 768,
                                                                            "start": 74,
                                                                            "end": 77
                                                                        },
                                                                        "argumentList": {
                                                                            "kind": 256,
                                                                            "elements": [],
                                                                            "trailingComma": false,
                                                                            "flags": 256,
                                                                            "start": 78,
                                                                            "end": 78
                                                                        },
                                                                        "flags": 256,
                                                                        "start": 71,
                                                                        "end": 79
                                                                    },
                                                                    "expression": {
                                                                        "kind": 81921,
                                                                        "text": "y",
                                                                        "rawText": "y",
                                                                        "flags": 768,
                                                                        "start": 80,
                                                                        "end": 81
                                                                    },
                                                                    "autofix": 0,
                                                                    "flags": 256,
                                                                    "start": 71,
                                                                    "end": 81
                                                                },
                                                                "right": {
                                                                    "kind": 81921,
                                                                    "text": "y",
                                                                    "rawText": "y",
                                                                    "flags": 768,
                                                                    "start": 71,
                                                                    "end": 73
                                                                },
                                                                "flags": 256,
                                                                "start": 71,
                                                                "end": 81
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "multiline": false,
                                                        "flags": 0,
                                                        "start": 61,
                                                        "end": 81
                                                    },
                                                    "flags": 256,
                                                    "start": 60,
                                                    "end": 82
                                                },
                                                "operatorToken": {
                                                    "kind": 4125,
                                                    "flags": 768,
                                                    "start": 82,
                                                    "end": 84
                                                },
                                                "right": {
                                                    "kind": 220,
                                                    "propertyList": {
                                                        "kind": 218,
                                                        "properties": [
                                                            {
                                                                "kind": 219,
                                                                "left": {
                                                                    "kind": 81921,
                                                                    "text": 201,
                                                                    "rawText": "201",
                                                                    "flags": 768,
                                                                    "start": 88,
                                                                    "end": 91
                                                                },
                                                                "right": {
                                                                    "kind": 81921,
                                                                    "text": "x",
                                                                    "rawText": "x",
                                                                    "flags": 768,
                                                                    "start": 86,
                                                                    "end": 87
                                                                },
                                                                "flags": 256,
                                                                "start": 86,
                                                                "end": 91
                                                            },
                                                            {
                                                                "kind": 219,
                                                                "left": {
                                                                    "kind": 81921,
                                                                    "text": 301,
                                                                    "rawText": "301",
                                                                    "flags": 768,
                                                                    "start": 95,
                                                                    "end": 98
                                                                },
                                                                "right": {
                                                                    "kind": 81921,
                                                                    "text": "y",
                                                                    "rawText": "y",
                                                                    "flags": 768,
                                                                    "start": 92,
                                                                    "end": 94
                                                                },
                                                                "flags": 256,
                                                                "start": 92,
                                                                "end": 98
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "multiline": false,
                                                        "flags": 0,
                                                        "start": 86,
                                                        "end": 98
                                                    },
                                                    "flags": 256,
                                                    "start": 84,
                                                    "end": 99
                                                },
                                                "flags": 256,
                                                "start": 60,
                                                "end": 99
                                            },
                                            "flags": 256,
                                            "start": 59,
                                            "end": 100
                                        },
                                        "flags": 256,
                                        "start": 58,
                                        "end": 101
                                    },
                                    "flags": 256,
                                    "start": 57,
                                    "end": 102
                                },
                                "flags": 256,
                                "start": 56,
                                "end": 103
                            },
                            "flags": 256,
                            "start": 55,
                            "end": 104
                        },
                        {
                            "kind": 121,
                            "expression": {
                                "kind": 121,
                                "expression": {
                                    "kind": 121,
                                    "expression": {
                                        "kind": 121,
                                        "expression": {
                                            "kind": 121,
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
                                                                        "kind": 129,
                                                                        "member": {
                                                                            "kind": 131,
                                                                            "expression": {
                                                                                "kind": 81921,
                                                                                "text": "foo",
                                                                                "rawText": "foo",
                                                                                "flags": 768,
                                                                                "start": 115,
                                                                                "end": 118
                                                                            },
                                                                            "argumentList": {
                                                                                "kind": 256,
                                                                                "elements": [],
                                                                                "trailingComma": false,
                                                                                "flags": 256,
                                                                                "start": 119,
                                                                                "end": 119
                                                                            },
                                                                            "flags": 256,
                                                                            "start": 113,
                                                                            "end": 120
                                                                        },
                                                                        "expression": {
                                                                            "kind": 81921,
                                                                            "text": "x",
                                                                            "rawText": "x",
                                                                            "flags": 768,
                                                                            "start": 121,
                                                                            "end": 122
                                                                        },
                                                                        "autofix": 0,
                                                                        "flags": 256,
                                                                        "start": 113,
                                                                        "end": 122
                                                                    },
                                                                    "right": {
                                                                        "kind": 81921,
                                                                        "text": "x",
                                                                        "rawText": "x",
                                                                        "flags": 768,
                                                                        "start": 113,
                                                                        "end": 114
                                                                    },
                                                                    "flags": 256,
                                                                    "start": 113,
                                                                    "end": 122
                                                                },
                                                                {
                                                                    "kind": 219,
                                                                    "left": {
                                                                        "kind": 129,
                                                                        "member": {
                                                                            "kind": 131,
                                                                            "expression": {
                                                                                "kind": 81921,
                                                                                "text": "foo",
                                                                                "rawText": "foo",
                                                                                "flags": 768,
                                                                                "start": 126,
                                                                                "end": 129
                                                                            },
                                                                            "argumentList": {
                                                                                "kind": 256,
                                                                                "elements": [],
                                                                                "trailingComma": false,
                                                                                "flags": 256,
                                                                                "start": 130,
                                                                                "end": 130
                                                                            },
                                                                            "flags": 256,
                                                                            "start": 123,
                                                                            "end": 131
                                                                        },
                                                                        "expression": {
                                                                            "kind": 81921,
                                                                            "text": "y",
                                                                            "rawText": "y",
                                                                            "flags": 768,
                                                                            "start": 132,
                                                                            "end": 133
                                                                        },
                                                                        "autofix": 0,
                                                                        "flags": 256,
                                                                        "start": 123,
                                                                        "end": 133
                                                                    },
                                                                    "right": {
                                                                        "kind": 81921,
                                                                        "text": "y",
                                                                        "rawText": "y",
                                                                        "flags": 768,
                                                                        "start": 123,
                                                                        "end": 125
                                                                    },
                                                                    "flags": 256,
                                                                    "start": 123,
                                                                    "end": 133
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "multiline": false,
                                                            "flags": 0,
                                                            "start": 113,
                                                            "end": 133
                                                        },
                                                        "flags": 256,
                                                        "start": 112,
                                                        "end": 134
                                                    },
                                                    "operatorToken": {
                                                        "kind": 4125,
                                                        "flags": 768,
                                                        "start": 134,
                                                        "end": 136
                                                    },
                                                    "right": {
                                                        "kind": 220,
                                                        "propertyList": {
                                                            "kind": 218,
                                                            "properties": [
                                                                {
                                                                    "kind": 219,
                                                                    "left": {
                                                                        "kind": 81921,
                                                                        "text": 201,
                                                                        "rawText": "201",
                                                                        "flags": 768,
                                                                        "start": 140,
                                                                        "end": 143
                                                                    },
                                                                    "right": {
                                                                        "kind": 81921,
                                                                        "text": "x",
                                                                        "rawText": "x",
                                                                        "flags": 768,
                                                                        "start": 138,
                                                                        "end": 139
                                                                    },
                                                                    "flags": 256,
                                                                    "start": 138,
                                                                    "end": 143
                                                                },
                                                                {
                                                                    "kind": 219,
                                                                    "left": {
                                                                        "kind": 81921,
                                                                        "text": 301,
                                                                        "rawText": "301",
                                                                        "flags": 768,
                                                                        "start": 147,
                                                                        "end": 150
                                                                    },
                                                                    "right": {
                                                                        "kind": 81921,
                                                                        "text": "y",
                                                                        "rawText": "y",
                                                                        "flags": 768,
                                                                        "start": 144,
                                                                        "end": 146
                                                                    },
                                                                    "flags": 256,
                                                                    "start": 144,
                                                                    "end": 150
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "multiline": false,
                                                            "flags": 0,
                                                            "start": 138,
                                                            "end": 150
                                                        },
                                                        "flags": 256,
                                                        "start": 136,
                                                        "end": 151
                                                    },
                                                    "flags": 256,
                                                    "start": 112,
                                                    "end": 151
                                                },
                                                "flags": 256,
                                                "start": 111,
                                                "end": 152
                                            },
                                            "flags": 256,
                                            "start": 110,
                                            "end": 153
                                        },
                                        "flags": 256,
                                        "start": 109,
                                        "end": 154
                                    },
                                    "flags": 256,
                                    "start": 108,
                                    "end": 155
                                },
                                "flags": 256,
                                "start": 107,
                                "end": 156
                            },
                            "flags": 256,
                            "start": 105,
                            "end": 157
                        }
                    ],
                    "flags": 256,
                    "start": 52,
                    "end": 157
                },
                "flags": 256,
                "start": 52,
                "end": 158
            },
            "flags": 128,
            "start": 52,
            "end": 159
        }
    ],
    "isModule": false,
    "text": "(((((({x:foo().x, y:foo().y} = {x:201, y:301}))))));\n\n(((((({x:foo().x, y:foo().y} = {x:201, y:301}))))), (((((({x:foo().x, y:foo().y} = {x:201, y:301})))))));",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 159
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

