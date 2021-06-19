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

### CST

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
                                    "kind": 301,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
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
                                                    "flags": 96,
                                                    "start": 7,
                                                    "end": 8
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 7,
                                            "end": 8
                                        },
                                        "flags": 32,
                                        "start": 5,
                                        "end": 9
                                    },
                                    "flags": 32,
                                    "start": 2,
                                    "end": 9
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 2,
                            "end": 9
                        },
                        "flags": 48,
                        "start": 1,
                        "end": 10
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "start": 10,
                        "end": 12
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "c",
                        "rawText": "c",
                        "flags": 96,
                        "start": 12,
                        "end": 14
                    },
                    "flags": 32,
                    "start": 1,
                    "end": 14
                },
                "flags": 32,
                "start": 0,
                "end": 15
            },
            "flags": 16,
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
                                    "kind": 301,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
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
                                                    "flags": 96,
                                                    "start": 24,
                                                    "end": 25
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 24,
                                            "end": 25
                                        },
                                        "flags": 32,
                                        "start": 22,
                                        "end": 26
                                    },
                                    "flags": 32,
                                    "start": 19,
                                    "end": 26
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 19,
                            "end": 26
                        },
                        "flags": 48,
                        "start": 18,
                        "end": 27
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "start": 27,
                        "end": 29
                    },
                    "right": {
                        "kind": 201392131,
                        "text": "a",
                        "rawText": "\"a\"",
                        "flags": 96,
                        "start": 29,
                        "end": 33
                    },
                    "flags": 32,
                    "start": 18,
                    "end": 33
                },
                "flags": 32,
                "start": 16,
                "end": 34
            },
            "flags": 16,
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
                                    "kind": 301,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
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
                                                    "flags": 96,
                                                    "start": 43,
                                                    "end": 44
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 43,
                                            "end": 44
                                        },
                                        "flags": 32,
                                        "start": 41,
                                        "end": 45
                                    },
                                    "flags": 32,
                                    "start": 38,
                                    "end": 45
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 38,
                            "end": 45
                        },
                        "flags": 48,
                        "start": 37,
                        "end": 46
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "start": 46,
                        "end": 48
                    },
                    "right": {
                        "kind": 198,
                        "left": {
                            "kind": 201392130,
                            "text": 1,
                            "rawText": "1",
                            "flags": 96,
                            "start": 48,
                            "end": 50
                        },
                        "operatorToken": {
                            "kind": 35640,
                            "flags": 96,
                            "start": 50,
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
                                    "flags": 96,
                                    "start": 54,
                                    "end": 55
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 96,
                                    "start": 55,
                                    "end": 57
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "d",
                                    "rawText": "d",
                                    "flags": 96,
                                    "start": 57,
                                    "end": 59
                                },
                                "flags": 32,
                                "start": 52,
                                "end": 59
                            },
                            "flags": 32,
                            "start": 52,
                            "end": 60
                        },
                        "flags": 32,
                        "start": 48,
                        "end": 60
                    },
                    "flags": 32,
                    "start": 37,
                    "end": 60
                },
                "flags": 32,
                "start": 35,
                "end": 61
            },
            "flags": 16,
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
                                    "kind": 301,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
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
                                                    "flags": 96,
                                                    "start": 70,
                                                    "end": 71
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 70,
                                            "end": 71
                                        },
                                        "flags": 32,
                                        "start": 68,
                                        "end": 72
                                    },
                                    "flags": 32,
                                    "start": 65,
                                    "end": 72
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 65,
                            "end": 72
                        },
                        "flags": 48,
                        "start": 64,
                        "end": 73
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "start": 73,
                        "end": 75
                    },
                    "right": {
                        "kind": 198,
                        "left": {
                            "kind": 201392130,
                            "text": 1,
                            "rawText": "1",
                            "flags": 96,
                            "start": 75,
                            "end": 77
                        },
                        "operatorToken": {
                            "kind": 35640,
                            "flags": 96,
                            "start": 77,
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
                                    "flags": 96,
                                    "start": 81,
                                    "end": 82
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 96,
                                    "start": 82,
                                    "end": 84
                                },
                                "right": {
                                    "kind": 121,
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "e",
                                        "rawText": "e",
                                        "flags": 96,
                                        "start": 86,
                                        "end": 87
                                    },
                                    "flags": 32,
                                    "start": 84,
                                    "end": 88
                                },
                                "flags": 32,
                                "start": 79,
                                "end": 88
                            },
                            "flags": 32,
                            "start": 79,
                            "end": 89
                        },
                        "flags": 32,
                        "start": 75,
                        "end": 89
                    },
                    "flags": 32,
                    "start": 64,
                    "end": 89
                },
                "flags": 32,
                "start": 62,
                "end": 90
            },
            "flags": 16,
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
                                    "asteriskToken": null,
                                    "left": {
                                        "kind": 201392131,
                                        "text": "a",
                                        "rawText": "\"a\"",
                                        "flags": 96,
                                        "start": 94,
                                        "end": 97
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
                                                    "flags": 96,
                                                    "start": 100,
                                                    "end": 101
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 100,
                                            "end": 101
                                        },
                                        "flags": 32,
                                        "start": 98,
                                        "end": 102
                                    },
                                    "flags": 32,
                                    "start": 94,
                                    "end": 102
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 94,
                            "end": 102
                        },
                        "flags": 48,
                        "start": 93,
                        "end": 103
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "start": 103,
                        "end": 105
                    },
                    "right": {
                        "kind": 198,
                        "left": {
                            "kind": 201392130,
                            "text": 1,
                            "rawText": "1",
                            "flags": 96,
                            "start": 105,
                            "end": 107
                        },
                        "operatorToken": {
                            "kind": 35640,
                            "flags": 96,
                            "start": 107,
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
                                    "flags": 96,
                                    "start": 111,
                                    "end": 112
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 96,
                                    "start": 112,
                                    "end": 114
                                },
                                "right": {
                                    "kind": 121,
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "e",
                                        "rawText": "e",
                                        "flags": 96,
                                        "start": 116,
                                        "end": 117
                                    },
                                    "flags": 32,
                                    "start": 114,
                                    "end": 118
                                },
                                "flags": 32,
                                "start": 109,
                                "end": 118
                            },
                            "flags": 32,
                            "start": 109,
                            "end": 119
                        },
                        "flags": 32,
                        "start": 105,
                        "end": 119
                    },
                    "flags": 32,
                    "start": 93,
                    "end": 119
                },
                "flags": 32,
                "start": 91,
                "end": 120
            },
            "flags": 16,
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
                                    "asteriskToken": null,
                                    "left": {
                                        "kind": 194,
                                        "expression": {
                                            "kind": 201392131,
                                            "text": "a",
                                            "rawText": "\"a\"",
                                            "flags": 96,
                                            "start": 125,
                                            "end": 128
                                        },
                                        "flags": 32,
                                        "start": 124,
                                        "end": 129
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
                                                    "flags": 96,
                                                    "start": 132,
                                                    "end": 133
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 132,
                                            "end": 133
                                        },
                                        "flags": 32,
                                        "start": 130,
                                        "end": 134
                                    },
                                    "flags": 32,
                                    "start": 124,
                                    "end": 134
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 124,
                            "end": 134
                        },
                        "flags": 48,
                        "start": 123,
                        "end": 135
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "start": 135,
                        "end": 137
                    },
                    "right": {
                        "kind": 198,
                        "left": {
                            "kind": 201392130,
                            "text": 1,
                            "rawText": "1",
                            "flags": 96,
                            "start": 137,
                            "end": 139
                        },
                        "operatorToken": {
                            "kind": 35640,
                            "flags": 96,
                            "start": 139,
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
                                    "flags": 96,
                                    "start": 143,
                                    "end": 144
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 96,
                                    "start": 144,
                                    "end": 146
                                },
                                "right": {
                                    "kind": 121,
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "e",
                                        "rawText": "e",
                                        "flags": 96,
                                        "start": 148,
                                        "end": 149
                                    },
                                    "flags": 32,
                                    "start": 146,
                                    "end": 150
                                },
                                "flags": 32,
                                "start": 141,
                                "end": 150
                            },
                            "flags": 32,
                            "start": 141,
                            "end": 151
                        },
                        "flags": 32,
                        "start": 137,
                        "end": 151
                    },
                    "flags": 32,
                    "start": 123,
                    "end": 151
                },
                "flags": 32,
                "start": 121,
                "end": 152
            },
            "flags": 16,
            "start": 121,
            "end": 153
        }
    ],
    "isModule": false,
    "source": "({a = [b]} = c);\n({a = [b]} = \"a\");\n({a = [b]} = 1 / (c = d));\n({a = [b]} = 1 / (d = (e)));\n({\"a\": [b]} = 1 / (d = (e)));\n({[\"a\"]: [b]} = 1 / (d = (e)));",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 153
}
```

### Printed

```javascript

({ a = [b] } = c);
({ a = [b] } = "\"a\"");
({ a = [b] } = 1 / (c = d));
({ a = [b] } = 1 / (d = (e)));
({ "\"a\"": [b] } = 1 / (d = (e)));
({ ["\"a\""]: [b] } = 1 / (d = (e)));
```

### Diagnostics

```javascript
✔ No errors
```

