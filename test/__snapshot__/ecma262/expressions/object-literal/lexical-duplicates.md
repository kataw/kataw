# Kataw parser test case

## Input

`````js
!{f([a, b, a]) {}};

!{f([b, a, a]) {}};

!{f([a, a, b]) {}};

!{f([b, a, b, a]) {}};

!{f([b, a], b) {}};

!{f([b, a], {b}) {}};

!{f([b, a], b=x) {}};

!{f([b, a], ...b) {}};

!{f(){ let x; var x; }};

!{f(){ var x; let x; }};

!{f(){ const x = y; var x; }};

!{f(){ var x; const x = y; }};

!{f({b}, ...b) {}}
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
                "kind": 126,
                "operandToken": {
                    "kind": 65584,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 1
                },
                "operand": {
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
                                        "start": 2,
                                        "end": 3
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
                                                            "text": "a",
                                                            "rawText": "a",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 5,
                                                            "end": 6
                                                        },
                                                        {
                                                            "kind": 134299649,
                                                            "text": "b",
                                                            "rawText": "b",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 7,
                                                            "end": 9
                                                        },
                                                        {
                                                            "kind": 134299649,
                                                            "text": "a",
                                                            "rawText": "a",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 10,
                                                            "end": 12
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 0,
                                                    "transformFlags": 0,
                                                    "start": 5,
                                                    "end": 12
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 4,
                                                "end": 13
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 4,
                                        "end": 14
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
                                            "start": 16,
                                            "end": 16
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 14,
                                        "end": 17
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 3,
                                    "end": 17
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 2,
                                "end": 17
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 2,
                        "end": 17
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 1,
                    "end": 18
                },
                "flags": 32,
                "transformFlags": 1024,
                "start": 0,
                "end": 18
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 19
        },
        {
            "kind": 120,
            "expression": {
                "kind": 126,
                "operandToken": {
                    "kind": 65584,
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 19,
                    "end": 22
                },
                "operand": {
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
                                        "start": 23,
                                        "end": 24
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
                                                            "start": 26,
                                                            "end": 27
                                                        },
                                                        {
                                                            "kind": 134299649,
                                                            "text": "a",
                                                            "rawText": "a",
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
                                                    "flags": 0,
                                                    "transformFlags": 0,
                                                    "start": 26,
                                                    "end": 33
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 25,
                                                "end": 34
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 25,
                                        "end": 35
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
                                            "start": 37,
                                            "end": 37
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 35,
                                        "end": 38
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 24,
                                    "end": 38
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 23,
                                "end": 38
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 23,
                        "end": 38
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 22,
                    "end": 39
                },
                "flags": 32,
                "transformFlags": 1024,
                "start": 19,
                "end": 39
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 19,
            "end": 40
        },
        {
            "kind": 120,
            "expression": {
                "kind": 126,
                "operandToken": {
                    "kind": 65584,
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 40,
                    "end": 43
                },
                "operand": {
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
                                        "start": 44,
                                        "end": 45
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
                                                            "text": "a",
                                                            "rawText": "a",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 47,
                                                            "end": 48
                                                        },
                                                        {
                                                            "kind": 134299649,
                                                            "text": "a",
                                                            "rawText": "a",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 49,
                                                            "end": 51
                                                        },
                                                        {
                                                            "kind": 134299649,
                                                            "text": "b",
                                                            "rawText": "b",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 52,
                                                            "end": 54
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 0,
                                                    "transformFlags": 0,
                                                    "start": 47,
                                                    "end": 54
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 46,
                                                "end": 55
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 46,
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
                                    "start": 45,
                                    "end": 59
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 44,
                                "end": 59
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 44,
                        "end": 59
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 43,
                    "end": 60
                },
                "flags": 32,
                "transformFlags": 1024,
                "start": 40,
                "end": 60
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 40,
            "end": 61
        },
        {
            "kind": 120,
            "expression": {
                "kind": 126,
                "operandToken": {
                    "kind": 65584,
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 61,
                    "end": 64
                },
                "operand": {
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
                                        "start": 65,
                                        "end": 66
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
                                                            "start": 68,
                                                            "end": 69
                                                        },
                                                        {
                                                            "kind": 134299649,
                                                            "text": "a",
                                                            "rawText": "a",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 70,
                                                            "end": 72
                                                        },
                                                        {
                                                            "kind": 134299649,
                                                            "text": "b",
                                                            "rawText": "b",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 73,
                                                            "end": 75
                                                        },
                                                        {
                                                            "kind": 134299649,
                                                            "text": "a",
                                                            "rawText": "a",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 76,
                                                            "end": 78
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 0,
                                                    "transformFlags": 0,
                                                    "start": 68,
                                                    "end": 78
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 67,
                                                "end": 79
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 67,
                                        "end": 80
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
                                            "start": 82,
                                            "end": 82
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 80,
                                        "end": 83
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 66,
                                    "end": 83
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 65,
                                "end": 83
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 65,
                        "end": 83
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 64,
                    "end": 84
                },
                "flags": 32,
                "transformFlags": 1024,
                "start": 61,
                "end": 84
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 61,
            "end": 85
        },
        {
            "kind": 120,
            "expression": {
                "kind": 126,
                "operandToken": {
                    "kind": 65584,
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 85,
                    "end": 88
                },
                "operand": {
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
                                        "start": 89,
                                        "end": 90
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
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 0,
                                                    "transformFlags": 0,
                                                    "start": 92,
                                                    "end": 96
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 91,
                                                "end": 97
                                            },
                                            {
                                                "kind": 134299649,
                                                "text": "b",
                                                "rawText": "b",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 98,
                                                "end": 100
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 91,
                                        "end": 101
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
                                            "start": 103,
                                            "end": 103
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 101,
                                        "end": 104
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 90,
                                    "end": 104
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 89,
                                "end": 104
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 89,
                        "end": 104
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 88,
                    "end": 105
                },
                "flags": 32,
                "transformFlags": 1024,
                "start": 85,
                "end": 105
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 85,
            "end": 106
        },
        {
            "kind": 120,
            "expression": {
                "kind": 126,
                "operandToken": {
                    "kind": 65584,
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 106,
                    "end": 109
                },
                "operand": {
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
                                        "start": 110,
                                        "end": 111
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
                                                            "start": 113,
                                                            "end": 114
                                                        },
                                                        {
                                                            "kind": 134299649,
                                                            "text": "a",
                                                            "rawText": "a",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 115,
                                                            "end": 117
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 0,
                                                    "transformFlags": 0,
                                                    "start": 113,
                                                    "end": 117
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 112,
                                                "end": 118
                                            },
                                            {
                                                "kind": 212,
                                                "propertyList": {
                                                    "kind": 213,
                                                    "properties": [
                                                        {
                                                            "kind": 134299649,
                                                            "text": "b",
                                                            "rawText": "b",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 121,
                                                            "end": 122
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 121,
                                                    "end": 122
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 119,
                                                "end": 123
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 112,
                                        "end": 124
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
                                            "start": 126,
                                            "end": 126
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 124,
                                        "end": 127
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 111,
                                    "end": 127
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 110,
                                "end": 127
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 110,
                        "end": 127
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 109,
                    "end": 128
                },
                "flags": 32,
                "transformFlags": 1024,
                "start": 106,
                "end": 128
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 106,
            "end": 129
        },
        {
            "kind": 120,
            "expression": {
                "kind": 126,
                "operandToken": {
                    "kind": 65584,
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 129,
                    "end": 132
                },
                "operand": {
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
                                        "start": 133,
                                        "end": 134
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
                                                            "start": 136,
                                                            "end": 137
                                                        },
                                                        {
                                                            "kind": 134299649,
                                                            "text": "a",
                                                            "rawText": "a",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 138,
                                                            "end": 140
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 0,
                                                    "transformFlags": 0,
                                                    "start": 136,
                                                    "end": 140
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 135,
                                                "end": 141
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
                                                    "start": 142,
                                                    "end": 144
                                                },
                                                "optionalToken": null,
                                                "type": null,
                                                "right": {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 145,
                                                    "end": 146
                                                },
                                                "flags": 34,
                                                "transformFlags": 0,
                                                "start": 142,
                                                "end": 146
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 34,
                                        "transformFlags": 0,
                                        "start": 135,
                                        "end": 147
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
                                            "start": 149,
                                            "end": 149
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 147,
                                        "end": 150
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 134,
                                    "end": 150
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 133,
                                "end": 150
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 133,
                        "end": 150
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 132,
                    "end": 151
                },
                "flags": 32,
                "transformFlags": 1024,
                "start": 129,
                "end": 151
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 129,
            "end": 152
        },
        {
            "kind": 120,
            "expression": {
                "kind": 126,
                "operandToken": {
                    "kind": 65584,
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 152,
                    "end": 155
                },
                "operand": {
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
                                        "start": 156,
                                        "end": 157
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
                                                            "start": 159,
                                                            "end": 160
                                                        },
                                                        {
                                                            "kind": 134299649,
                                                            "text": "a",
                                                            "rawText": "a",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 161,
                                                            "end": 163
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 0,
                                                    "transformFlags": 0,
                                                    "start": 159,
                                                    "end": 163
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 158,
                                                "end": 164
                                            },
                                            {
                                                "kind": 281,
                                                "ellipsisToken": {
                                                    "kind": 524302,
                                                    "flags": 64,
                                                    "transformFlags": 0,
                                                    "start": 165,
                                                    "end": 169
                                                },
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "b",
                                                    "rawText": "b",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 169,
                                                    "end": 170
                                                },
                                                "optionalToken": null,
                                                "type": null,
                                                "right": null,
                                                "flags": 34,
                                                "transformFlags": 0,
                                                "start": 165,
                                                "end": 170
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 34,
                                        "transformFlags": 0,
                                        "start": 158,
                                        "end": 171
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
                                            "start": 173,
                                            "end": 173
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 171,
                                        "end": 174
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 157,
                                    "end": 174
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 156,
                                "end": 174
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 156,
                        "end": 174
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 155,
                    "end": 175
                },
                "flags": 32,
                "transformFlags": 1024,
                "start": 152,
                "end": 175
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 152,
            "end": 176
        },
        {
            "kind": 120,
            "expression": {
                "kind": 126,
                "operandToken": {
                    "kind": 65584,
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 176,
                    "end": 179
                },
                "operand": {
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
                                        "formalParameters": [],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 182,
                                        "end": 183
                                    },
                                    "returnType": null,
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
                                                        "transformFlags": 0,
                                                        "start": 184,
                                                        "end": 188
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
                                                                    "transformFlags": 0,
                                                                    "start": 188,
                                                                    "end": 190
                                                                },
                                                                "type": null,
                                                                "initializer": null,
                                                                "flags": 16,
                                                                "transformFlags": 128,
                                                                "start": 188,
                                                                "end": 190
                                                            }
                                                        ],
                                                        "flags": 16,
                                                        "transformFlags": 0,
                                                        "start": 188,
                                                        "end": 190
                                                    },
                                                    "flags": 33554448,
                                                    "transformFlags": 0,
                                                    "start": 184,
                                                    "end": 191
                                                },
                                                {
                                                    "kind": 155,
                                                    "declareKeyword": null,
                                                    "varKeyword": {
                                                        "kind": 37757002,
                                                        "flags": 80,
                                                        "transformFlags": 0,
                                                        "start": 191,
                                                        "end": 195
                                                    },
                                                    "declarationList": {
                                                        "kind": 156,
                                                        "declarations": [
                                                            {
                                                                "kind": 157,
                                                                "binding": {
                                                                    "kind": 134299649,
                                                                    "text": "x",
                                                                    "rawText": "x",
                                                                    "flags": 96,
                                                                    "transformFlags": 0,
                                                                    "start": 195,
                                                                    "end": 197
                                                                },
                                                                "type": null,
                                                                "initializer": null,
                                                                "flags": 16,
                                                                "transformFlags": 128,
                                                                "start": 195,
                                                                "end": 197
                                                            }
                                                        ],
                                                        "flags": 16,
                                                        "transformFlags": 0,
                                                        "start": 195,
                                                        "end": 197
                                                    },
                                                    "flags": 16,
                                                    "transformFlags": 0,
                                                    "start": 191,
                                                    "end": 198
                                                }
                                            ],
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 184,
                                            "end": 198
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 183,
                                        "end": 200
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 181,
                                    "end": 200
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 180,
                                "end": 200
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 180,
                        "end": 200
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 179,
                    "end": 201
                },
                "flags": 32,
                "transformFlags": 1024,
                "start": 176,
                "end": 201
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 176,
            "end": 202
        },
        {
            "kind": 120,
            "expression": {
                "kind": 126,
                "operandToken": {
                    "kind": 65584,
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 202,
                    "end": 205
                },
                "operand": {
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
                                        "start": 206,
                                        "end": 207
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 208,
                                        "end": 209
                                    },
                                    "returnType": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [
                                                {
                                                    "kind": 155,
                                                    "declareKeyword": null,
                                                    "varKeyword": {
                                                        "kind": 37757002,
                                                        "flags": 80,
                                                        "transformFlags": 0,
                                                        "start": 210,
                                                        "end": 214
                                                    },
                                                    "declarationList": {
                                                        "kind": 156,
                                                        "declarations": [
                                                            {
                                                                "kind": 157,
                                                                "binding": {
                                                                    "kind": 134299649,
                                                                    "text": "x",
                                                                    "rawText": "x",
                                                                    "flags": 96,
                                                                    "transformFlags": 0,
                                                                    "start": 214,
                                                                    "end": 216
                                                                },
                                                                "type": null,
                                                                "initializer": null,
                                                                "flags": 16,
                                                                "transformFlags": 128,
                                                                "start": 214,
                                                                "end": 216
                                                            }
                                                        ],
                                                        "flags": 16,
                                                        "transformFlags": 0,
                                                        "start": 214,
                                                        "end": 216
                                                    },
                                                    "flags": 16,
                                                    "transformFlags": 0,
                                                    "start": 210,
                                                    "end": 217
                                                },
                                                {
                                                    "kind": 162,
                                                    "lexicalKeyword": {
                                                        "kind": 41951307,
                                                        "flags": 80,
                                                        "transformFlags": 0,
                                                        "start": 217,
                                                        "end": 221
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
                                                                    "transformFlags": 0,
                                                                    "start": 221,
                                                                    "end": 223
                                                                },
                                                                "type": null,
                                                                "initializer": null,
                                                                "flags": 16,
                                                                "transformFlags": 128,
                                                                "start": 221,
                                                                "end": 223
                                                            }
                                                        ],
                                                        "flags": 16,
                                                        "transformFlags": 0,
                                                        "start": 221,
                                                        "end": 223
                                                    },
                                                    "flags": 33554448,
                                                    "transformFlags": 0,
                                                    "start": 217,
                                                    "end": 224
                                                }
                                            ],
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 210,
                                            "end": 224
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 209,
                                        "end": 226
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 207,
                                    "end": 226
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 206,
                                "end": 226
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 206,
                        "end": 226
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 205,
                    "end": 227
                },
                "flags": 32,
                "transformFlags": 1024,
                "start": 202,
                "end": 227
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 202,
            "end": 228
        },
        {
            "kind": 120,
            "expression": {
                "kind": 126,
                "operandToken": {
                    "kind": 65584,
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 228,
                    "end": 231
                },
                "operand": {
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
                                        "start": 232,
                                        "end": 233
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 234,
                                        "end": 235
                                    },
                                    "returnType": null,
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
                                                        "transformFlags": 0,
                                                        "start": 236,
                                                        "end": 242
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
                                                                    "transformFlags": 0,
                                                                    "start": 242,
                                                                    "end": 244
                                                                },
                                                                "type": null,
                                                                "initializer": {
                                                                    "kind": 134299649,
                                                                    "text": "y",
                                                                    "rawText": "y",
                                                                    "flags": 96,
                                                                    "transformFlags": 0,
                                                                    "start": 246,
                                                                    "end": 248
                                                                },
                                                                "flags": 16,
                                                                "transformFlags": 128,
                                                                "start": 242,
                                                                "end": 248
                                                            }
                                                        ],
                                                        "flags": 16777232,
                                                        "transformFlags": 0,
                                                        "start": 242,
                                                        "end": 248
                                                    },
                                                    "flags": 33554448,
                                                    "transformFlags": 0,
                                                    "start": 236,
                                                    "end": 249
                                                },
                                                {
                                                    "kind": 155,
                                                    "declareKeyword": null,
                                                    "varKeyword": {
                                                        "kind": 37757002,
                                                        "flags": 80,
                                                        "transformFlags": 0,
                                                        "start": 249,
                                                        "end": 253
                                                    },
                                                    "declarationList": {
                                                        "kind": 156,
                                                        "declarations": [
                                                            {
                                                                "kind": 157,
                                                                "binding": {
                                                                    "kind": 134299649,
                                                                    "text": "x",
                                                                    "rawText": "x",
                                                                    "flags": 96,
                                                                    "transformFlags": 0,
                                                                    "start": 253,
                                                                    "end": 255
                                                                },
                                                                "type": null,
                                                                "initializer": null,
                                                                "flags": 16,
                                                                "transformFlags": 128,
                                                                "start": 253,
                                                                "end": 255
                                                            }
                                                        ],
                                                        "flags": 16,
                                                        "transformFlags": 0,
                                                        "start": 253,
                                                        "end": 255
                                                    },
                                                    "flags": 16,
                                                    "transformFlags": 0,
                                                    "start": 249,
                                                    "end": 256
                                                }
                                            ],
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 236,
                                            "end": 256
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 235,
                                        "end": 258
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 233,
                                    "end": 258
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 232,
                                "end": 258
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 232,
                        "end": 258
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 231,
                    "end": 259
                },
                "flags": 32,
                "transformFlags": 1024,
                "start": 228,
                "end": 259
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 228,
            "end": 260
        },
        {
            "kind": 120,
            "expression": {
                "kind": 126,
                "operandToken": {
                    "kind": 65584,
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 260,
                    "end": 263
                },
                "operand": {
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
                                        "start": 264,
                                        "end": 265
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 266,
                                        "end": 267
                                    },
                                    "returnType": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [
                                                {
                                                    "kind": 155,
                                                    "declareKeyword": null,
                                                    "varKeyword": {
                                                        "kind": 37757002,
                                                        "flags": 80,
                                                        "transformFlags": 0,
                                                        "start": 268,
                                                        "end": 272
                                                    },
                                                    "declarationList": {
                                                        "kind": 156,
                                                        "declarations": [
                                                            {
                                                                "kind": 157,
                                                                "binding": {
                                                                    "kind": 134299649,
                                                                    "text": "x",
                                                                    "rawText": "x",
                                                                    "flags": 96,
                                                                    "transformFlags": 0,
                                                                    "start": 272,
                                                                    "end": 274
                                                                },
                                                                "type": null,
                                                                "initializer": null,
                                                                "flags": 16,
                                                                "transformFlags": 128,
                                                                "start": 272,
                                                                "end": 274
                                                            }
                                                        ],
                                                        "flags": 16,
                                                        "transformFlags": 0,
                                                        "start": 272,
                                                        "end": 274
                                                    },
                                                    "flags": 16,
                                                    "transformFlags": 0,
                                                    "start": 268,
                                                    "end": 275
                                                },
                                                {
                                                    "kind": 162,
                                                    "lexicalKeyword": {
                                                        "kind": 37757004,
                                                        "flags": 80,
                                                        "transformFlags": 0,
                                                        "start": 275,
                                                        "end": 281
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
                                                                    "transformFlags": 0,
                                                                    "start": 281,
                                                                    "end": 283
                                                                },
                                                                "type": null,
                                                                "initializer": {
                                                                    "kind": 134299649,
                                                                    "text": "y",
                                                                    "rawText": "y",
                                                                    "flags": 96,
                                                                    "transformFlags": 0,
                                                                    "start": 285,
                                                                    "end": 287
                                                                },
                                                                "flags": 16,
                                                                "transformFlags": 128,
                                                                "start": 281,
                                                                "end": 287
                                                            }
                                                        ],
                                                        "flags": 16777232,
                                                        "transformFlags": 0,
                                                        "start": 281,
                                                        "end": 287
                                                    },
                                                    "flags": 33554448,
                                                    "transformFlags": 0,
                                                    "start": 275,
                                                    "end": 288
                                                }
                                            ],
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 268,
                                            "end": 288
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 267,
                                        "end": 290
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 265,
                                    "end": 290
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 264,
                                "end": 290
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 264,
                        "end": 290
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 263,
                    "end": 291
                },
                "flags": 32,
                "transformFlags": 1024,
                "start": 260,
                "end": 291
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 260,
            "end": 292
        },
        {
            "kind": 120,
            "expression": {
                "kind": 126,
                "operandToken": {
                    "kind": 65584,
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 292,
                    "end": 295
                },
                "operand": {
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
                                        "start": 296,
                                        "end": 297
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [
                                            {
                                                "kind": 212,
                                                "propertyList": {
                                                    "kind": 213,
                                                    "properties": [
                                                        {
                                                            "kind": 134299649,
                                                            "text": "b",
                                                            "rawText": "b",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 299,
                                                            "end": 300
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 299,
                                                    "end": 300
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 298,
                                                "end": 301
                                            },
                                            {
                                                "kind": 281,
                                                "ellipsisToken": {
                                                    "kind": 524302,
                                                    "flags": 64,
                                                    "transformFlags": 0,
                                                    "start": 302,
                                                    "end": 306
                                                },
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "b",
                                                    "rawText": "b",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 306,
                                                    "end": 307
                                                },
                                                "optionalToken": null,
                                                "type": null,
                                                "right": null,
                                                "flags": 34,
                                                "transformFlags": 0,
                                                "start": 302,
                                                "end": 307
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 34,
                                        "transformFlags": 0,
                                        "start": 298,
                                        "end": 308
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
                                            "start": 310,
                                            "end": 310
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 308,
                                        "end": 311
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 297,
                                    "end": 311
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 296,
                                "end": 311
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 296,
                        "end": 311
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 295,
                    "end": 312
                },
                "flags": 32,
                "transformFlags": 1024,
                "start": 292,
                "end": 312
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 292,
            "end": 312
        }
    ],
    "isModule": false,
    "source": "!{f([a, b, a]) {}};\n\n!{f([b, a, a]) {}};\n\n!{f([a, a, b]) {}};\n\n!{f([b, a, b, a]) {}};\n\n!{f([b, a], b) {}};\n\n!{f([b, a], {b}) {}};\n\n!{f([b, a], b=x) {}};\n\n!{f([b, a], ...b) {}};\n\n!{f(){ let x; var x; }};\n\n!{f(){ var x; let x; }};\n\n!{f(){ const x = y; var x; }};\n\n!{f(){ var x; const x = y; }};\n\n!{f({b}, ...b) {}}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 312
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ A formal parameter cannot be bound multiple times in the same parameter list - start: 10, end: 14
✖ A formal parameter cannot be bound multiple times in the same parameter list - start: 31, end: 35
✖ A formal parameter cannot be bound multiple times in the same parameter list - start: 49, end: 56
✖ A formal parameter cannot be bound multiple times in the same parameter list - start: 76, end: 80
✖ A formal parameter cannot be bound multiple times in the same parameter list - start: 98, end: 101
✖ A formal parameter cannot be bound multiple times in the same parameter list - start: 122, end: 124
✖ A formal parameter cannot be bound multiple times in the same parameter list - start: 142, end: 147
✖ Duplicate identifier - start: 169, end: 170
✖ Cannot redeclare block-scoped variable - start: 195, end: 197
✖ Duplicate identifier - start: 221, end: 223
✖ Cannot redeclare block-scoped variable - start: 253, end: 255
✖ Duplicate identifier - start: 281, end: 283
✖ Duplicate identifier - start: 306, end: 307

```

