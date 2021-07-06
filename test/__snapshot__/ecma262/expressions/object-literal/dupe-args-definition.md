# Kataw parser test case

## Input

`````js
o = {f(a, a) {}};

o = {f(a, b, a) {}};

o = {f(b, a, a) {}};

o = {f(a, a, b) {}};

o = {f(b, a, b, a, [fine]) {}};

o = {f(b, a, b, a = x) {}};

o = {f(b, a, b, ...a) {}};

o = {f([b, a], b) {}};

o = {f([b, a], b=x) {}};

o = {f([b, a], ...b) {}};

o = {f([b, a], b=x) {}};
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
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "o",
                    "rawText": "o",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 3
                },
                "right": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 351,
                                "asyncKeyword": null,
                                "asteriskToken": null,
                                "getKeyword": null,
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "f",
                                        "rawText": "f",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 5,
                                        "end": 6
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [
                                            {
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 7,
                                                "end": 8
                                            },
                                            {
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 9,
                                                "end": 11
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 7,
                                        "end": 12
                                    },
                                    "returnType": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 14,
                                            "end": 14
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 12,
                                        "end": 15
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 6,
                                    "end": 15
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 5,
                                "end": 15
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 5,
                        "end": 15
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 3,
                    "end": 16
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 0,
                "end": 16
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 17
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "o",
                    "rawText": "o",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 17,
                    "end": 20
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 20,
                    "end": 22
                },
                "right": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 351,
                                "asyncKeyword": null,
                                "asteriskToken": null,
                                "getKeyword": null,
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "f",
                                        "rawText": "f",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 24,
                                        "end": 25
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [
                                            {
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 26,
                                                "end": 27
                                            },
                                            {
                                                "kind": 134299649,
                                                "text": "b",
                                                "rawText": "b",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 28,
                                                "end": 30
                                            },
                                            {
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 31,
                                                "end": 33
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 26,
                                        "end": 34
                                    },
                                    "returnType": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 36,
                                            "end": 36
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 34,
                                        "end": 37
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 25,
                                    "end": 37
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 24,
                                "end": 37
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 24,
                        "end": 37
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 22,
                    "end": 38
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 17,
                "end": 38
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 17,
            "end": 39
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "o",
                    "rawText": "o",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 39,
                    "end": 42
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 42,
                    "end": 44
                },
                "right": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 351,
                                "asyncKeyword": null,
                                "asteriskToken": null,
                                "getKeyword": null,
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "f",
                                        "rawText": "f",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 46,
                                        "end": 47
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [
                                            {
                                                "kind": 134299649,
                                                "text": "b",
                                                "rawText": "b",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 48,
                                                "end": 49
                                            },
                                            {
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 50,
                                                "end": 52
                                            },
                                            {
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 53,
                                                "end": 55
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 48,
                                        "end": 56
                                    },
                                    "returnType": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 58,
                                            "end": 58
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 56,
                                        "end": 59
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 47,
                                    "end": 59
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 46,
                                "end": 59
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 46,
                        "end": 59
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 44,
                    "end": 60
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 39,
                "end": 60
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 39,
            "end": 61
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "o",
                    "rawText": "o",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 61,
                    "end": 64
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 64,
                    "end": 66
                },
                "right": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 351,
                                "asyncKeyword": null,
                                "asteriskToken": null,
                                "getKeyword": null,
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "f",
                                        "rawText": "f",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 68,
                                        "end": 69
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [
                                            {
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 70,
                                                "end": 71
                                            },
                                            {
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 72,
                                                "end": 74
                                            },
                                            {
                                                "kind": 134299649,
                                                "text": "b",
                                                "rawText": "b",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 75,
                                                "end": 77
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 70,
                                        "end": 78
                                    },
                                    "returnType": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 80,
                                            "end": 80
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 78,
                                        "end": 81
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 69,
                                    "end": 81
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 68,
                                "end": 81
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 68,
                        "end": 81
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 66,
                    "end": 82
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 61,
                "end": 82
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 61,
            "end": 83
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "o",
                    "rawText": "o",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 83,
                    "end": 86
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 86,
                    "end": 88
                },
                "right": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 351,
                                "asyncKeyword": null,
                                "asteriskToken": null,
                                "getKeyword": null,
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "f",
                                        "rawText": "f",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 90,
                                        "end": 91
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [
                                            {
                                                "kind": 134299649,
                                                "text": "b",
                                                "rawText": "b",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 92,
                                                "end": 93
                                            },
                                            {
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 94,
                                                "end": 96
                                            },
                                            {
                                                "kind": 134299649,
                                                "text": "b",
                                                "rawText": "b",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 97,
                                                "end": 99
                                            },
                                            {
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 100,
                                                "end": 102
                                            },
                                            {
                                                "kind": 201,
                                                "elementList": {
                                                    "kind": 324,
                                                    "elements": [
                                                        {
                                                            "kind": 134299649,
                                                            "text": "fine",
                                                            "rawText": "fine",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 105,
                                                            "end": 109
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 0,
                                                    "transformFlags": 0,
                                                    "start": 105,
                                                    "end": 109
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 103,
                                                "end": 110
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 92,
                                        "end": 111
                                    },
                                    "returnType": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 113,
                                            "end": 113
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 111,
                                        "end": 114
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 91,
                                    "end": 114
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 90,
                                "end": 114
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 90,
                        "end": 114
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 88,
                    "end": 115
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 83,
                "end": 115
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 83,
            "end": 116
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "o",
                    "rawText": "o",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 116,
                    "end": 119
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 119,
                    "end": 121
                },
                "right": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 351,
                                "asyncKeyword": null,
                                "asteriskToken": null,
                                "getKeyword": null,
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "f",
                                        "rawText": "f",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 123,
                                        "end": 124
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [
                                            {
                                                "kind": 134299649,
                                                "text": "b",
                                                "rawText": "b",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 125,
                                                "end": 126
                                            },
                                            {
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 127,
                                                "end": 129
                                            },
                                            {
                                                "kind": 134299649,
                                                "text": "b",
                                                "rawText": "b",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 130,
                                                "end": 132
                                            },
                                            {
                                                "kind": 281,
                                                "ellipsisToken": null,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "a",
                                                    "rawText": "a",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 133,
                                                    "end": 135
                                                },
                                                "optionalToken": null,
                                                "type": null,
                                                "right": {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 137,
                                                    "end": 139
                                                },
                                                "flags": 34,
                                                "transformFlags": 0,
                                                "start": 133,
                                                "end": 139
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 98,
                                        "transformFlags": 0,
                                        "start": 125,
                                        "end": 140
                                    },
                                    "returnType": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 142,
                                            "end": 142
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 140,
                                        "end": 143
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 124,
                                    "end": 143
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 123,
                                "end": 143
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 123,
                        "end": 143
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 121,
                    "end": 144
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 116,
                "end": 144
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 116,
            "end": 145
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "o",
                    "rawText": "o",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 145,
                    "end": 148
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 148,
                    "end": 150
                },
                "right": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 351,
                                "asyncKeyword": null,
                                "asteriskToken": null,
                                "getKeyword": null,
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "f",
                                        "rawText": "f",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 152,
                                        "end": 153
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [
                                            {
                                                "kind": 134299649,
                                                "text": "b",
                                                "rawText": "b",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 154,
                                                "end": 155
                                            },
                                            {
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 156,
                                                "end": 158
                                            },
                                            {
                                                "kind": 134299649,
                                                "text": "b",
                                                "rawText": "b",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 159,
                                                "end": 161
                                            },
                                            {
                                                "kind": 281,
                                                "ellipsisToken": {
                                                    "kind": 524302,
                                                    "flags": 64,
                                                    "transformFlags": 0,
                                                    "start": 162,
                                                    "end": 166
                                                },
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "a",
                                                    "rawText": "a",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 166,
                                                    "end": 167
                                                },
                                                "optionalToken": null,
                                                "type": null,
                                                "right": null,
                                                "flags": 34,
                                                "transformFlags": 0,
                                                "start": 162,
                                                "end": 167
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 98,
                                        "transformFlags": 0,
                                        "start": 154,
                                        "end": 168
                                    },
                                    "returnType": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 170,
                                            "end": 170
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 168,
                                        "end": 171
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 153,
                                    "end": 171
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 152,
                                "end": 171
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 152,
                        "end": 171
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 150,
                    "end": 172
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 145,
                "end": 172
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 145,
            "end": 173
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "o",
                    "rawText": "o",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 173,
                    "end": 176
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 176,
                    "end": 178
                },
                "right": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 351,
                                "asyncKeyword": null,
                                "asteriskToken": null,
                                "getKeyword": null,
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "f",
                                        "rawText": "f",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 180,
                                        "end": 181
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [
                                            {
                                                "kind": 201,
                                                "elementList": {
                                                    "kind": 324,
                                                    "elements": [
                                                        {
                                                            "kind": 134299649,
                                                            "text": "b",
                                                            "rawText": "b",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 183,
                                                            "end": 184
                                                        },
                                                        {
                                                            "kind": 134299649,
                                                            "text": "a",
                                                            "rawText": "a",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 185,
                                                            "end": 187
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 0,
                                                    "transformFlags": 0,
                                                    "start": 183,
                                                    "end": 187
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 182,
                                                "end": 188
                                            },
                                            {
                                                "kind": 134299649,
                                                "text": "b",
                                                "rawText": "b",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 189,
                                                "end": 191
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 182,
                                        "end": 192
                                    },
                                    "returnType": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 194,
                                            "end": 194
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 192,
                                        "end": 195
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 181,
                                    "end": 195
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 180,
                                "end": 195
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 180,
                        "end": 195
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 178,
                    "end": 196
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 173,
                "end": 196
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 173,
            "end": 197
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "o",
                    "rawText": "o",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 197,
                    "end": 200
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 200,
                    "end": 202
                },
                "right": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 351,
                                "asyncKeyword": null,
                                "asteriskToken": null,
                                "getKeyword": null,
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "f",
                                        "rawText": "f",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 204,
                                        "end": 205
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [
                                            {
                                                "kind": 201,
                                                "elementList": {
                                                    "kind": 324,
                                                    "elements": [
                                                        {
                                                            "kind": 134299649,
                                                            "text": "b",
                                                            "rawText": "b",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 207,
                                                            "end": 208
                                                        },
                                                        {
                                                            "kind": 134299649,
                                                            "text": "a",
                                                            "rawText": "a",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 209,
                                                            "end": 211
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 0,
                                                    "transformFlags": 0,
                                                    "start": 207,
                                                    "end": 211
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 206,
                                                "end": 212
                                            },
                                            {
                                                "kind": 281,
                                                "ellipsisToken": null,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "b",
                                                    "rawText": "b",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 213,
                                                    "end": 215
                                                },
                                                "optionalToken": null,
                                                "type": null,
                                                "right": {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 216,
                                                    "end": 217
                                                },
                                                "flags": 34,
                                                "transformFlags": 0,
                                                "start": 213,
                                                "end": 217
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 34,
                                        "transformFlags": 0,
                                        "start": 206,
                                        "end": 218
                                    },
                                    "returnType": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 220,
                                            "end": 220
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 218,
                                        "end": 221
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 205,
                                    "end": 221
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 204,
                                "end": 221
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 204,
                        "end": 221
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 202,
                    "end": 222
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 197,
                "end": 222
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 197,
            "end": 223
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "o",
                    "rawText": "o",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 223,
                    "end": 226
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 226,
                    "end": 228
                },
                "right": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 351,
                                "asyncKeyword": null,
                                "asteriskToken": null,
                                "getKeyword": null,
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "f",
                                        "rawText": "f",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 230,
                                        "end": 231
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [
                                            {
                                                "kind": 201,
                                                "elementList": {
                                                    "kind": 324,
                                                    "elements": [
                                                        {
                                                            "kind": 134299649,
                                                            "text": "b",
                                                            "rawText": "b",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 233,
                                                            "end": 234
                                                        },
                                                        {
                                                            "kind": 134299649,
                                                            "text": "a",
                                                            "rawText": "a",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 235,
                                                            "end": 237
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 0,
                                                    "transformFlags": 0,
                                                    "start": 233,
                                                    "end": 237
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 232,
                                                "end": 238
                                            },
                                            {
                                                "kind": 281,
                                                "ellipsisToken": {
                                                    "kind": 524302,
                                                    "flags": 64,
                                                    "transformFlags": 0,
                                                    "start": 239,
                                                    "end": 243
                                                },
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "b",
                                                    "rawText": "b",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 243,
                                                    "end": 244
                                                },
                                                "optionalToken": null,
                                                "type": null,
                                                "right": null,
                                                "flags": 34,
                                                "transformFlags": 0,
                                                "start": 239,
                                                "end": 244
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 34,
                                        "transformFlags": 0,
                                        "start": 232,
                                        "end": 245
                                    },
                                    "returnType": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 247,
                                            "end": 247
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 245,
                                        "end": 248
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 231,
                                    "end": 248
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 230,
                                "end": 248
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 230,
                        "end": 248
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 228,
                    "end": 249
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 223,
                "end": 249
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 223,
            "end": 250
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "o",
                    "rawText": "o",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 250,
                    "end": 253
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 253,
                    "end": 255
                },
                "right": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 351,
                                "asyncKeyword": null,
                                "asteriskToken": null,
                                "getKeyword": null,
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "f",
                                        "rawText": "f",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 257,
                                        "end": 258
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [
                                            {
                                                "kind": 201,
                                                "elementList": {
                                                    "kind": 324,
                                                    "elements": [
                                                        {
                                                            "kind": 134299649,
                                                            "text": "b",
                                                            "rawText": "b",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 260,
                                                            "end": 261
                                                        },
                                                        {
                                                            "kind": 134299649,
                                                            "text": "a",
                                                            "rawText": "a",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 262,
                                                            "end": 264
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 0,
                                                    "transformFlags": 0,
                                                    "start": 260,
                                                    "end": 264
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 259,
                                                "end": 265
                                            },
                                            {
                                                "kind": 281,
                                                "ellipsisToken": null,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "b",
                                                    "rawText": "b",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 266,
                                                    "end": 268
                                                },
                                                "optionalToken": null,
                                                "type": null,
                                                "right": {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 269,
                                                    "end": 270
                                                },
                                                "flags": 34,
                                                "transformFlags": 0,
                                                "start": 266,
                                                "end": 270
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 34,
                                        "transformFlags": 0,
                                        "start": 259,
                                        "end": 271
                                    },
                                    "returnType": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 273,
                                            "end": 273
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 271,
                                        "end": 274
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 258,
                                    "end": 274
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 257,
                                "end": 274
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 257,
                        "end": 274
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 255,
                    "end": 275
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 250,
                "end": 275
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 250,
            "end": 276
        }
    ],
    "isModule": false,
    "source": "o = {f(a, a) {}};\n\no = {f(a, b, a) {}};\n\no = {f(b, a, a) {}};\n\no = {f(a, a, b) {}};\n\no = {f(b, a, b, a, [fine]) {}};\n\no = {f(b, a, b, a = x) {}};\n\no = {f(b, a, b, ...a) {}};\n\no = {f([b, a], b) {}};\n\no = {f([b, a], b=x) {}};\n\no = {f([b, a], ...b) {}};\n\no = {f([b, a], b=x) {}};",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 276
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ A formal parameter cannot be bound multiple times in the same parameter list - start: 9, end: 12
✖ A formal parameter cannot be bound multiple times in the same parameter list - start: 31, end: 34
✖ A formal parameter cannot be bound multiple times in the same parameter list - start: 53, end: 56
✖ A formal parameter cannot be bound multiple times in the same parameter list - start: 72, end: 78
✖ A formal parameter cannot be bound multiple times in the same parameter list - start: 100, end: 111
✖ A formal parameter cannot be bound multiple times in the same parameter list - start: 133, end: 140
✖ Duplicate identifier - start: 166, end: 167
✖ A formal parameter cannot be bound multiple times in the same parameter list - start: 162, end: 168
✖ A formal parameter cannot be bound multiple times in the same parameter list - start: 189, end: 192
✖ A formal parameter cannot be bound multiple times in the same parameter list - start: 213, end: 218
✖ Duplicate identifier - start: 243, end: 244
✖ A formal parameter cannot be bound multiple times in the same parameter list - start: 266, end: 271

```

