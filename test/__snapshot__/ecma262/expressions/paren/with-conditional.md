# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, allowTypes: true }
`````

## Input

`````js
([b]?) => {};
([b]?: string) => {};
([b]?b:c);
({b}?) => {};
({b}?:string) => {};
({b}?b:c);

(a, [b]?) => {};
(a, [b]?: string) => {};
(a, [b]?b:c);
(a, {b}?) => {};
(a, {b}?:string) => {};
(a, {b}?b:c);
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
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [
                        {
                            "kind": 281,
                            "ellipsisToken": null,
                            "left": {
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
                                            "start": 2,
                                            "end": 3
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 2,
                                    "end": 3
                                },
                                "flags": 32,
                                "transformFlags": 8,
                                "start": 1,
                                "end": 4
                            },
                            "optionalToken": {
                                "kind": 134217750,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 4,
                                "end": 5
                            },
                            "type": null,
                            "right": null,
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 0,
                            "end": 5
                        }
                    ],
                    "trailingComma": false,
                    "flags": 34,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 6
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 6,
                    "end": 9
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 11,
                        "end": 11
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 9,
                    "end": 12
                },
                "flags": 34,
                "transformFlags": 0,
                "start": 0,
                "end": 12
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 13
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [
                        {
                            "kind": 281,
                            "ellipsisToken": null,
                            "left": {
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
                                            "start": 16,
                                            "end": 17
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 16,
                                    "end": 17
                                },
                                "flags": 32,
                                "transformFlags": 8,
                                "start": 15,
                                "end": 18
                            },
                            "optionalToken": {
                                "kind": 134217750,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 18,
                                "end": 19
                            },
                            "type": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 134234347,
                                    "flags": 2097216,
                                    "transformFlags": 0,
                                    "start": 20,
                                    "end": 27
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 20,
                                "end": 27
                            },
                            "right": null,
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 13,
                            "end": 27
                        }
                    ],
                    "trailingComma": false,
                    "flags": 35,
                    "transformFlags": 0,
                    "start": 15,
                    "end": 28
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 28,
                    "end": 31
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 33,
                        "end": 33
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 31,
                    "end": 34
                },
                "flags": 35,
                "transformFlags": 0,
                "start": 13,
                "end": 34
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 13,
            "end": 35
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 197,
                    "shortCircuit": {
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
                                    "start": 38,
                                    "end": 39
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 38,
                            "end": 39
                        },
                        "flags": 32,
                        "transformFlags": 8,
                        "start": 37,
                        "end": 40
                    },
                    "questionToken": {
                        "kind": 134217750,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 40,
                        "end": 41
                    },
                    "consequent": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 41,
                        "end": 42
                    },
                    "colonToken": {
                        "kind": 21,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 42,
                        "end": 43
                    },
                    "alternate": {
                        "kind": 134299649,
                        "text": "c",
                        "rawText": "c",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 43,
                        "end": 44
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 35,
                    "end": 44
                },
                "flags": 35,
                "transformFlags": 0,
                "start": 35,
                "end": 45
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 35,
            "end": 46
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [
                        {
                            "kind": 281,
                            "ellipsisToken": null,
                            "left": {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [
                                        {
                                            "kind": 134299649,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 49,
                                            "end": 50
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 49,
                                    "end": 50
                                },
                                "flags": 48,
                                "transformFlags": 8,
                                "start": 48,
                                "end": 51
                            },
                            "optionalToken": {
                                "kind": 134217750,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 51,
                                "end": 52
                            },
                            "type": null,
                            "right": null,
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 46,
                            "end": 52
                        }
                    ],
                    "trailingComma": false,
                    "flags": 35,
                    "transformFlags": 0,
                    "start": 48,
                    "end": 53
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 53,
                    "end": 56
                },
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
                "flags": 35,
                "transformFlags": 0,
                "start": 46,
                "end": 59
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 46,
            "end": 60
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [
                        {
                            "kind": 281,
                            "ellipsisToken": null,
                            "left": {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [
                                        {
                                            "kind": 134299649,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 63,
                                            "end": 64
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 63,
                                    "end": 64
                                },
                                "flags": 48,
                                "transformFlags": 8,
                                "start": 62,
                                "end": 65
                            },
                            "optionalToken": {
                                "kind": 134217750,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 65,
                                "end": 66
                            },
                            "type": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 134234347,
                                    "flags": 2097216,
                                    "transformFlags": 0,
                                    "start": 67,
                                    "end": 73
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 67,
                                "end": 73
                            },
                            "right": null,
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 60,
                            "end": 73
                        }
                    ],
                    "trailingComma": false,
                    "flags": 35,
                    "transformFlags": 0,
                    "start": 62,
                    "end": 74
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 74,
                    "end": 77
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 79,
                        "end": 79
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 77,
                    "end": 80
                },
                "flags": 35,
                "transformFlags": 0,
                "start": 60,
                "end": 80
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 60,
            "end": 81
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 197,
                    "shortCircuit": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 84,
                                    "end": 85
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 84,
                            "end": 85
                        },
                        "flags": 48,
                        "transformFlags": 8,
                        "start": 83,
                        "end": 86
                    },
                    "questionToken": {
                        "kind": 134217750,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 86,
                        "end": 87
                    },
                    "consequent": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 87,
                        "end": 88
                    },
                    "colonToken": {
                        "kind": 21,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 88,
                        "end": 89
                    },
                    "alternate": {
                        "kind": 134299649,
                        "text": "c",
                        "rawText": "c",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 89,
                        "end": 90
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 81,
                    "end": 90
                },
                "flags": 81,
                "transformFlags": 0,
                "start": 35,
                "end": 91
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 81,
            "end": 92
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [
                        {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 95,
                            "end": 96
                        },
                        {
                            "kind": 281,
                            "ellipsisToken": null,
                            "left": {
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
                                            "start": 99,
                                            "end": 100
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 99,
                                    "end": 100
                                },
                                "flags": 32,
                                "transformFlags": 8,
                                "start": 97,
                                "end": 101
                            },
                            "optionalToken": {
                                "kind": 134217750,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 101,
                                "end": 102
                            },
                            "type": null,
                            "right": null,
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 92,
                            "end": 102
                        }
                    ],
                    "trailingComma": false,
                    "flags": 35,
                    "transformFlags": 0,
                    "start": 95,
                    "end": 103
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 103,
                    "end": 106
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 108,
                        "end": 108
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 106,
                    "end": 109
                },
                "flags": 35,
                "transformFlags": 0,
                "start": 92,
                "end": 109
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 92,
            "end": 110
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [
                        {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 112,
                            "end": 113
                        },
                        {
                            "kind": 281,
                            "ellipsisToken": null,
                            "left": {
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
                                            "start": 116,
                                            "end": 117
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 116,
                                    "end": 117
                                },
                                "flags": 32,
                                "transformFlags": 8,
                                "start": 114,
                                "end": 118
                            },
                            "optionalToken": {
                                "kind": 134217750,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 118,
                                "end": 119
                            },
                            "type": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 134234347,
                                    "flags": 2097216,
                                    "transformFlags": 0,
                                    "start": 120,
                                    "end": 127
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 120,
                                "end": 127
                            },
                            "right": null,
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 110,
                            "end": 127
                        }
                    ],
                    "trailingComma": false,
                    "flags": 35,
                    "transformFlags": 0,
                    "start": 112,
                    "end": 128
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 128,
                    "end": 131
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 133,
                        "end": 133
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 131,
                    "end": 134
                },
                "flags": 35,
                "transformFlags": 0,
                "start": 110,
                "end": 134
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 110,
            "end": 135
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
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 137,
                            "end": 138
                        },
                        {
                            "kind": 197,
                            "shortCircuit": {
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
                                            "start": 141,
                                            "end": 142
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 141,
                                    "end": 142
                                },
                                "flags": 32,
                                "transformFlags": 8,
                                "start": 139,
                                "end": 143
                            },
                            "questionToken": {
                                "kind": 134217750,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 143,
                                "end": 144
                            },
                            "consequent": {
                                "kind": 134299649,
                                "text": "b",
                                "rawText": "b",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 144,
                                "end": 145
                            },
                            "colonToken": {
                                "kind": 21,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 145,
                                "end": 146
                            },
                            "alternate": {
                                "kind": 134299649,
                                "text": "c",
                                "rawText": "c",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 146,
                                "end": 147
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 135,
                            "end": 147
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 1024,
                    "start": 135,
                    "end": 148
                },
                "flags": 135,
                "transformFlags": 0,
                "start": 35,
                "end": 148
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 135,
            "end": 149
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [
                        {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 151,
                            "end": 152
                        },
                        {
                            "kind": 281,
                            "ellipsisToken": null,
                            "left": {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [
                                        {
                                            "kind": 134299649,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 155,
                                            "end": 156
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 155,
                                    "end": 156
                                },
                                "flags": 48,
                                "transformFlags": 8,
                                "start": 153,
                                "end": 157
                            },
                            "optionalToken": {
                                "kind": 134217750,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 157,
                                "end": 158
                            },
                            "type": null,
                            "right": null,
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 149,
                            "end": 158
                        }
                    ],
                    "trailingComma": false,
                    "flags": 35,
                    "transformFlags": 0,
                    "start": 151,
                    "end": 159
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 159,
                    "end": 162
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 164,
                        "end": 164
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 162,
                    "end": 165
                },
                "flags": 35,
                "transformFlags": 0,
                "start": 149,
                "end": 165
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 149,
            "end": 166
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [
                        {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 168,
                            "end": 169
                        },
                        {
                            "kind": 281,
                            "ellipsisToken": null,
                            "left": {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [
                                        {
                                            "kind": 134299649,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 172,
                                            "end": 173
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 172,
                                    "end": 173
                                },
                                "flags": 48,
                                "transformFlags": 8,
                                "start": 170,
                                "end": 174
                            },
                            "optionalToken": {
                                "kind": 134217750,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 174,
                                "end": 175
                            },
                            "type": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 134234347,
                                    "flags": 2097216,
                                    "transformFlags": 0,
                                    "start": 176,
                                    "end": 182
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 176,
                                "end": 182
                            },
                            "right": null,
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 166,
                            "end": 182
                        }
                    ],
                    "trailingComma": false,
                    "flags": 35,
                    "transformFlags": 0,
                    "start": 168,
                    "end": 183
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 183,
                    "end": 186
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 188,
                        "end": 188
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 186,
                    "end": 189
                },
                "flags": 35,
                "transformFlags": 0,
                "start": 166,
                "end": 189
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 166,
            "end": 190
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
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 192,
                            "end": 193
                        },
                        {
                            "kind": 197,
                            "shortCircuit": {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [
                                        {
                                            "kind": 134299649,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 196,
                                            "end": 197
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 196,
                                    "end": 197
                                },
                                "flags": 48,
                                "transformFlags": 8,
                                "start": 194,
                                "end": 198
                            },
                            "questionToken": {
                                "kind": 134217750,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 198,
                                "end": 199
                            },
                            "consequent": {
                                "kind": 134299649,
                                "text": "b",
                                "rawText": "b",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 199,
                                "end": 200
                            },
                            "colonToken": {
                                "kind": 21,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 200,
                                "end": 201
                            },
                            "alternate": {
                                "kind": 134299649,
                                "text": "c",
                                "rawText": "c",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 201,
                                "end": 202
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 190,
                            "end": 202
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 1024,
                    "start": 190,
                    "end": 203
                },
                "flags": 190,
                "transformFlags": 0,
                "start": 35,
                "end": 203
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 190,
            "end": 204
        }
    ],
    "isModule": false,
    "source": "([b]?) => {};\n([b]?: string) => {};\n([b]?b:c);\n({b}?) => {};\n({b}?:string) => {};\n({b}?b:c);\n\n(a, [b]?) => {};\n(a, [b]?: string) => {};\n(a, [b]?b:c);\n(a, {b}?) => {};\n(a, {b}?:string) => {};\n(a, {b}?b:c);",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 204
}
```

### Printed

```javascript
([b]? ) => {};
([b]? : string) => {};

([b] ? b : c);

({ b }? ) => {};

({ b }? : string) => {};

({ b } ? b : c);

(a, [b]? ) => {};

(a, [b]? : string) => {};

(a, [b] ? b : c);

(a, { b }? ) => {};

(a, { b }? : string) => {};

(a, { b } ? b : c);

```

### Diagnostics

```javascript
✔ No errors
```

