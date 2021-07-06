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
                                        "transformFlags": 0,
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
                                                    "transformFlags": 0,
                                                    "start": 7,
                                                    "end": 8
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 7,
                                            "end": 8
                                        },
                                        "flags": 32,
                                        "transformFlags": 8,
                                        "start": 5,
                                        "end": 9
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 2,
                                    "end": 9
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 2,
                            "end": 9
                        },
                        "flags": 48,
                        "transformFlags": 8,
                        "start": 1,
                        "end": 10
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 10,
                        "end": 12
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "c",
                        "rawText": "c",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 12,
                        "end": 14
                    },
                    "flags": 32,
                    "transformFlags": 128,
                    "start": 1,
                    "end": 14
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 34,
                "end": 15
            },
            "flags": 16,
            "transformFlags": 0,
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
                                        "transformFlags": 0,
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
                                                    "transformFlags": 0,
                                                    "start": 24,
                                                    "end": 25
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 24,
                                            "end": 25
                                        },
                                        "flags": 32,
                                        "transformFlags": 8,
                                        "start": 22,
                                        "end": 26
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 19,
                                    "end": 26
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 19,
                            "end": 26
                        },
                        "flags": 48,
                        "transformFlags": 8,
                        "start": 18,
                        "end": 27
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 27,
                        "end": 29
                    },
                    "right": {
                        "kind": 201392131,
                        "text": "a",
                        "rawText": "\"a\"",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 29,
                        "end": 33
                    },
                    "flags": 32,
                    "transformFlags": 128,
                    "start": 18,
                    "end": 33
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 35,
                "end": 34
            },
            "flags": 16,
            "transformFlags": 0,
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
                                        "transformFlags": 0,
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
                                                    "transformFlags": 0,
                                                    "start": 43,
                                                    "end": 44
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 43,
                                            "end": 44
                                        },
                                        "flags": 32,
                                        "transformFlags": 8,
                                        "start": 41,
                                        "end": 45
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 38,
                                    "end": 45
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 38,
                            "end": 45
                        },
                        "flags": 48,
                        "transformFlags": 8,
                        "start": 37,
                        "end": 46
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "transformFlags": 0,
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
                            "transformFlags": 0,
                            "start": 48,
                            "end": 50
                        },
                        "operatorToken": {
                            "kind": 35640,
                            "flags": 96,
                            "transformFlags": 32,
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
                                    "transformFlags": 0,
                                    "start": 54,
                                    "end": 55
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 55,
                                    "end": 57
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "d",
                                    "rawText": "d",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 57,
                                    "end": 59
                                },
                                "flags": 32,
                                "transformFlags": 128,
                                "start": 52,
                                "end": 59
                            },
                            "flags": 52,
                            "transformFlags": 0,
                            "start": 34,
                            "end": 60
                        },
                        "flags": 96,
                        "transformFlags": 1024,
                        "start": 48,
                        "end": 60
                    },
                    "flags": 32,
                    "transformFlags": 128,
                    "start": 37,
                    "end": 60
                },
                "flags": 35,
                "transformFlags": 0,
                "start": 35,
                "end": 61
            },
            "flags": 16,
            "transformFlags": 0,
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
                                        "transformFlags": 0,
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
                                                    "transformFlags": 0,
                                                    "start": 70,
                                                    "end": 71
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 70,
                                            "end": 71
                                        },
                                        "flags": 32,
                                        "transformFlags": 8,
                                        "start": 68,
                                        "end": 72
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 65,
                                    "end": 72
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 65,
                            "end": 72
                        },
                        "flags": 48,
                        "transformFlags": 8,
                        "start": 64,
                        "end": 73
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "transformFlags": 0,
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
                            "transformFlags": 0,
                            "start": 75,
                            "end": 77
                        },
                        "operatorToken": {
                            "kind": 35640,
                            "flags": 96,
                            "transformFlags": 32,
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
                                    "transformFlags": 0,
                                    "start": 81,
                                    "end": 82
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 96,
                                    "transformFlags": 0,
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
                                        "transformFlags": 0,
                                        "start": 86,
                                        "end": 87
                                    },
                                    "flags": 84,
                                    "transformFlags": 0,
                                    "start": 32,
                                    "end": 88
                                },
                                "flags": 32,
                                "transformFlags": 128,
                                "start": 79,
                                "end": 88
                            },
                            "flags": 79,
                            "transformFlags": 0,
                            "start": 34,
                            "end": 89
                        },
                        "flags": 96,
                        "transformFlags": 1024,
                        "start": 75,
                        "end": 89
                    },
                    "flags": 32,
                    "transformFlags": 128,
                    "start": 64,
                    "end": 89
                },
                "flags": 62,
                "transformFlags": 0,
                "start": 35,
                "end": 90
            },
            "flags": 16,
            "transformFlags": 0,
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
                                        "transformFlags": 0,
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
                                                    "transformFlags": 0,
                                                    "start": 100,
                                                    "end": 101
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 100,
                                            "end": 101
                                        },
                                        "flags": 32,
                                        "transformFlags": 8,
                                        "start": 98,
                                        "end": 102
                                    },
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 94,
                                    "end": 102
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 94,
                            "end": 102
                        },
                        "flags": 48,
                        "transformFlags": 8,
                        "start": 93,
                        "end": 103
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "transformFlags": 0,
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
                            "transformFlags": 0,
                            "start": 105,
                            "end": 107
                        },
                        "operatorToken": {
                            "kind": 35640,
                            "flags": 96,
                            "transformFlags": 32,
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
                                    "transformFlags": 0,
                                    "start": 111,
                                    "end": 112
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 96,
                                    "transformFlags": 0,
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
                                        "transformFlags": 0,
                                        "start": 116,
                                        "end": 117
                                    },
                                    "flags": 114,
                                    "transformFlags": 0,
                                    "start": 32,
                                    "end": 118
                                },
                                "flags": 32,
                                "transformFlags": 128,
                                "start": 109,
                                "end": 118
                            },
                            "flags": 109,
                            "transformFlags": 0,
                            "start": 34,
                            "end": 119
                        },
                        "flags": 96,
                        "transformFlags": 1024,
                        "start": 105,
                        "end": 119
                    },
                    "flags": 32,
                    "transformFlags": 128,
                    "start": 93,
                    "end": 119
                },
                "flags": 91,
                "transformFlags": 0,
                "start": 35,
                "end": 120
            },
            "flags": 16,
            "transformFlags": 0,
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
                                            "transformFlags": 0,
                                            "start": 125,
                                            "end": 128
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
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
                                                    "transformFlags": 0,
                                                    "start": 132,
                                                    "end": 133
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 132,
                                            "end": 133
                                        },
                                        "flags": 32,
                                        "transformFlags": 8,
                                        "start": 130,
                                        "end": 134
                                    },
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 124,
                                    "end": 134
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 124,
                            "end": 134
                        },
                        "flags": 48,
                        "transformFlags": 8,
                        "start": 123,
                        "end": 135
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "transformFlags": 0,
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
                            "transformFlags": 0,
                            "start": 137,
                            "end": 139
                        },
                        "operatorToken": {
                            "kind": 35640,
                            "flags": 96,
                            "transformFlags": 32,
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
                                    "transformFlags": 0,
                                    "start": 143,
                                    "end": 144
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 96,
                                    "transformFlags": 0,
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
                                        "transformFlags": 0,
                                        "start": 148,
                                        "end": 149
                                    },
                                    "flags": 146,
                                    "transformFlags": 0,
                                    "start": 32,
                                    "end": 150
                                },
                                "flags": 32,
                                "transformFlags": 128,
                                "start": 141,
                                "end": 150
                            },
                            "flags": 141,
                            "transformFlags": 0,
                            "start": 34,
                            "end": 151
                        },
                        "flags": 96,
                        "transformFlags": 1024,
                        "start": 137,
                        "end": 151
                    },
                    "flags": 32,
                    "transformFlags": 128,
                    "start": 123,
                    "end": 151
                },
                "flags": 121,
                "transformFlags": 0,
                "start": 35,
                "end": 152
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 121,
            "end": 153
        }
    ],
    "isModule": false,
    "source": "({a = [b]} = c);\n({a = [b]} = \"a\");\n({a = [b]} = 1 / (c = d));\n({a = [b]} = 1 / (d = (e)));\n({\"a\": [b]} = 1 / (d = (e)));\n({[\"a\"]: [b]} = 1 / (d = (e)));",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
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

