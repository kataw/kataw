# Kataw parser test case

## Input

`````js
({a = [b]} = c);
({a = [b]} = "a");
({a = [b]} = 1 / (c = d));
({a = [b]} = 1 / (d = (e)));
({"a": [b]} = 1 / (d = (e)));
({["a"]: [b]} = 1 / (d = (e)));
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
                                    "kind": 205,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 768,
                                        "start": 2,
                                        "end": 3
                                    },
                                    "right": {
                                        "kind": 119,
                                        "elementList": {
                                            "kind": 270,
                                            "elements": [
                                                {
                                                    "kind": 134299649,
                                                    "text": "b",
                                                    "rawText": "b",
                                                    "flags": 768,
                                                    "start": 7,
                                                    "end": 8
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 256,
                                            "start": 7,
                                            "end": 8
                                        },
                                        "flags": 256,
                                        "start": 5,
                                        "end": 9
                                    },
                                    "flags": 256,
                                    "start": 2,
                                    "end": 9
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "start": 2,
                            "end": 9
                        },
                        "flags": 256,
                        "start": 1,
                        "end": 10
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 10,
                        "start": 512,
                        "end": 12
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "c",
                        "rawText": "c",
                        "flags": 768,
                        "start": 12,
                        "end": 14
                    },
                    "flags": 256,
                    "start": 1,
                    "end": 14
                },
                "flags": 256,
                "start": 0,
                "end": 15
            },
            "flags": 128,
            "start": 0,
            "end": 16
        },
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
                                    "kind": 205,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 768,
                                        "start": 19,
                                        "end": 20
                                    },
                                    "right": {
                                        "kind": 119,
                                        "elementList": {
                                            "kind": 270,
                                            "elements": [
                                                {
                                                    "kind": 134299649,
                                                    "text": "b",
                                                    "rawText": "b",
                                                    "flags": 768,
                                                    "start": 24,
                                                    "end": 25
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 256,
                                            "start": 24,
                                            "end": 25
                                        },
                                        "flags": 256,
                                        "start": 22,
                                        "end": 26
                                    },
                                    "flags": 256,
                                    "start": 19,
                                    "end": 26
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "start": 19,
                            "end": 26
                        },
                        "flags": 256,
                        "start": 18,
                        "end": 27
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 27,
                        "start": 512,
                        "end": 29
                    },
                    "right": {
                        "kind": 201392131,
                        "text": "a",
                        "rawText": "a",
                        "flags": 768,
                        "start": 29,
                        "end": 33
                    },
                    "flags": 256,
                    "start": 18,
                    "end": 33
                },
                "flags": 256,
                "start": 16,
                "end": 34
            },
            "flags": 128,
            "start": 16,
            "end": 35
        },
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
                                    "kind": 205,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 768,
                                        "start": 38,
                                        "end": 39
                                    },
                                    "right": {
                                        "kind": 119,
                                        "elementList": {
                                            "kind": 270,
                                            "elements": [
                                                {
                                                    "kind": 134299649,
                                                    "text": "b",
                                                    "rawText": "b",
                                                    "flags": 768,
                                                    "start": 43,
                                                    "end": 44
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 256,
                                            "start": 43,
                                            "end": 44
                                        },
                                        "flags": 256,
                                        "start": 41,
                                        "end": 45
                                    },
                                    "flags": 256,
                                    "start": 38,
                                    "end": 45
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "start": 38,
                            "end": 45
                        },
                        "flags": 256,
                        "start": 37,
                        "end": 46
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 46,
                        "start": 512,
                        "end": 48
                    },
                    "right": {
                        "kind": 198,
                        "left": {
                            "kind": 201392130,
                            "text": 1,
                            "rawText": "1",
                            "flags": 768,
                            "start": 48,
                            "end": 50
                        },
                        "operatorToken": {
                            "kind": 35640,
                            "flags": 50,
                            "start": 512,
                            "end": 52
                        },
                        "right": {
                            "kind": 121,
                            "expression": {
                                "kind": 125,
                                "left": {
                                    "kind": 134299649,
                                    "text": "c",
                                    "rawText": "c",
                                    "flags": 768,
                                    "start": 54,
                                    "end": 55
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 55,
                                    "start": 512,
                                    "end": 57
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "d",
                                    "rawText": "d",
                                    "flags": 768,
                                    "start": 57,
                                    "end": 59
                                },
                                "flags": 256,
                                "start": 52,
                                "end": 59
                            },
                            "flags": 256,
                            "start": 52,
                            "end": 60
                        },
                        "flags": 256,
                        "start": 48,
                        "end": 60
                    },
                    "flags": 256,
                    "start": 37,
                    "end": 60
                },
                "flags": 256,
                "start": 35,
                "end": 61
            },
            "flags": 128,
            "start": 35,
            "end": 62
        },
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
                                    "kind": 205,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 768,
                                        "start": 65,
                                        "end": 66
                                    },
                                    "right": {
                                        "kind": 119,
                                        "elementList": {
                                            "kind": 270,
                                            "elements": [
                                                {
                                                    "kind": 134299649,
                                                    "text": "b",
                                                    "rawText": "b",
                                                    "flags": 768,
                                                    "start": 70,
                                                    "end": 71
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 256,
                                            "start": 70,
                                            "end": 71
                                        },
                                        "flags": 256,
                                        "start": 68,
                                        "end": 72
                                    },
                                    "flags": 256,
                                    "start": 65,
                                    "end": 72
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "start": 65,
                            "end": 72
                        },
                        "flags": 256,
                        "start": 64,
                        "end": 73
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 73,
                        "start": 512,
                        "end": 75
                    },
                    "right": {
                        "kind": 198,
                        "left": {
                            "kind": 201392130,
                            "text": 1,
                            "rawText": "1",
                            "flags": 768,
                            "start": 75,
                            "end": 77
                        },
                        "operatorToken": {
                            "kind": 35640,
                            "flags": 77,
                            "start": 512,
                            "end": 79
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
                                    "start": 81,
                                    "end": 82
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 82,
                                    "start": 512,
                                    "end": 84
                                },
                                "right": {
                                    "kind": 121,
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "e",
                                        "rawText": "e",
                                        "flags": 768,
                                        "start": 86,
                                        "end": 87
                                    },
                                    "flags": 256,
                                    "start": 84,
                                    "end": 88
                                },
                                "flags": 256,
                                "start": 79,
                                "end": 88
                            },
                            "flags": 256,
                            "start": 79,
                            "end": 89
                        },
                        "flags": 256,
                        "start": 75,
                        "end": 89
                    },
                    "flags": 256,
                    "start": 64,
                    "end": 89
                },
                "flags": 256,
                "start": 62,
                "end": 90
            },
            "flags": 128,
            "start": 62,
            "end": 91
        },
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
                                                    "start": 100,
                                                    "end": 101
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 256,
                                            "start": 100,
                                            "end": 101
                                        },
                                        "flags": 256,
                                        "start": 98,
                                        "end": 102
                                    },
                                    "right": {
                                        "kind": 201392131,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 768,
                                        "start": 94,
                                        "end": 97
                                    },
                                    "flags": 256,
                                    "start": 94,
                                    "end": 102
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "start": 94,
                            "end": 102
                        },
                        "flags": 256,
                        "start": 93,
                        "end": 103
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 103,
                        "start": 512,
                        "end": 105
                    },
                    "right": {
                        "kind": 198,
                        "left": {
                            "kind": 201392130,
                            "text": 1,
                            "rawText": "1",
                            "flags": 768,
                            "start": 105,
                            "end": 107
                        },
                        "operatorToken": {
                            "kind": 35640,
                            "flags": 107,
                            "start": 512,
                            "end": 109
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
                                    "start": 111,
                                    "end": 112
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 112,
                                    "start": 512,
                                    "end": 114
                                },
                                "right": {
                                    "kind": 121,
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "e",
                                        "rawText": "e",
                                        "flags": 768,
                                        "start": 116,
                                        "end": 117
                                    },
                                    "flags": 256,
                                    "start": 114,
                                    "end": 118
                                },
                                "flags": 256,
                                "start": 109,
                                "end": 118
                            },
                            "flags": 256,
                            "start": 109,
                            "end": 119
                        },
                        "flags": 256,
                        "start": 105,
                        "end": 119
                    },
                    "flags": 256,
                    "start": 93,
                    "end": 119
                },
                "flags": 256,
                "start": 91,
                "end": 120
            },
            "flags": 128,
            "start": 91,
            "end": 121
        },
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
                                                    "start": 132,
                                                    "end": 133
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 256,
                                            "start": 132,
                                            "end": 133
                                        },
                                        "flags": 256,
                                        "start": 130,
                                        "end": 134
                                    },
                                    "right": {
                                        "kind": 194,
                                        "expression": {
                                            "kind": 201392131,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 768,
                                            "start": 125,
                                            "end": 128
                                        },
                                        "flags": 256,
                                        "start": 124,
                                        "end": 129
                                    },
                                    "flags": 256,
                                    "start": 124,
                                    "end": 134
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "start": 124,
                            "end": 134
                        },
                        "flags": 256,
                        "start": 123,
                        "end": 135
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 135,
                        "start": 512,
                        "end": 137
                    },
                    "right": {
                        "kind": 198,
                        "left": {
                            "kind": 201392130,
                            "text": 1,
                            "rawText": "1",
                            "flags": 768,
                            "start": 137,
                            "end": 139
                        },
                        "operatorToken": {
                            "kind": 35640,
                            "flags": 139,
                            "start": 512,
                            "end": 141
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
                                    "start": 143,
                                    "end": 144
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 144,
                                    "start": 512,
                                    "end": 146
                                },
                                "right": {
                                    "kind": 121,
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "e",
                                        "rawText": "e",
                                        "flags": 768,
                                        "start": 148,
                                        "end": 149
                                    },
                                    "flags": 256,
                                    "start": 146,
                                    "end": 150
                                },
                                "flags": 256,
                                "start": 141,
                                "end": 150
                            },
                            "flags": 256,
                            "start": 141,
                            "end": 151
                        },
                        "flags": 256,
                        "start": 137,
                        "end": 151
                    },
                    "flags": 256,
                    "start": 123,
                    "end": 151
                },
                "flags": 256,
                "start": 121,
                "end": 152
            },
            "flags": 128,
            "start": 121,
            "end": 153
        }
    ],
    "isModule": false,
    "text": "({a = [b]} = c);\n({a = [b]} = \"a\");\n({a = [b]} = 1 / (c = d));\n({a = [b]} = 1 / (d = (e)));\n({\"a\": [b]} = 1 / (d = (e)));\n({[\"a\"]: [b]} = 1 / (d = (e)));",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 153
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

