# Kataw parser test case

## Input

`````js
({ async *method([x] = g[Symbol.iterator] = function() {}) {} });
({ async *method({ w: [x, y, z] = [4, 5, 6] } = {}) {} });
({ async *method({ x: y = thrower() } = {}) {} });
({ async *method([x = 23]) {} });
({ async *method([_, x]) {} });
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
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 351,
                                "asyncKeyword": {
                                    "kind": 82031,
                                    "flags": 352,
                                    "transformFlags": 0,
                                    "start": 2,
                                    "end": 8
                                },
                                "asteriskToken": {
                                    "kind": 67143222,
                                    "flags": 64,
                                    "transformFlags": 32,
                                    "start": 8,
                                    "end": 10
                                },
                                "getKeyword": null,
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "method",
                                        "rawText": "method",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 10,
                                        "end": 16
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [
                                            {
                                                "kind": 281,
                                                "ellipsisToken": null,
                                                "left": {
                                                    "kind": 201,
                                                    "elementList": {
                                                        "kind": 324,
                                                        "elements": [
                                                            {
                                                                "kind": 134299649,
                                                                "text": "x",
                                                                "rawText": "x",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 18,
                                                                "end": 19
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 0,
                                                        "transformFlags": 0,
                                                        "start": 18,
                                                        "end": 19
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 17,
                                                    "end": 20
                                                },
                                                "optionalToken": null,
                                                "type": null,
                                                "right": {
                                                    "kind": 125,
                                                    "left": {
                                                        "kind": 130,
                                                        "member": {
                                                            "kind": 134299649,
                                                            "text": "g",
                                                            "rawText": "g",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 22,
                                                            "end": 24
                                                        },
                                                        "expression": {
                                                            "kind": 129,
                                                            "member": {
                                                                "kind": 134299649,
                                                                "text": "Symbol",
                                                                "rawText": "Symbol",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 25,
                                                                "end": 31
                                                            },
                                                            "expression": {
                                                                "kind": 134299649,
                                                                "text": "iterator",
                                                                "rawText": "iterator",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 32,
                                                                "end": 40
                                                            },
                                                            "flags": 96,
                                                            "transformFlags": 2,
                                                            "start": 25,
                                                            "end": 40
                                                        },
                                                        "flags": 536870944,
                                                        "transformFlags": 4,
                                                        "start": 22,
                                                        "end": 41
                                                    },
                                                    "operatorToken": {
                                                        "kind": 4125,
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 41,
                                                        "end": 43
                                                    },
                                                    "right": {
                                                        "kind": 177,
                                                        "asyncKeyword": null,
                                                        "functionKeyword": {
                                                            "kind": 37822554,
                                                            "flags": 64,
                                                            "transformFlags": 0,
                                                            "start": 43,
                                                            "end": 52
                                                        },
                                                        "asteriskToken": null,
                                                        "name": null,
                                                        "typeParameters": null,
                                                        "formalParameterList": {
                                                            "kind": 214,
                                                            "formalParameters": [],
                                                            "trailingComma": false,
                                                            "flags": 32,
                                                            "transformFlags": 0,
                                                            "start": 53,
                                                            "end": 53
                                                        },
                                                        "contents": {
                                                            "kind": 216,
                                                            "functionStatementList": {
                                                                "kind": 217,
                                                                "directives": [],
                                                                "statements": [],
                                                                "flags": 32,
                                                                "transformFlags": 0,
                                                                "start": 56,
                                                                "end": 56
                                                            },
                                                            "flags": 32,
                                                            "transformFlags": 0,
                                                            "start": 54,
                                                            "end": 57
                                                        },
                                                        "returnType": null,
                                                        "flags": 32,
                                                        "transformFlags": 0,
                                                        "start": 43,
                                                        "end": 57
                                                    },
                                                    "flags": 0,
                                                    "transformFlags": 128,
                                                    "start": 22,
                                                    "end": 57
                                                },
                                                "flags": 34,
                                                "transformFlags": 0,
                                                "start": 17,
                                                "end": 57
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 418,
                                        "transformFlags": 0,
                                        "start": 17,
                                        "end": 58
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
                                            "start": 60,
                                            "end": 60
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 58,
                                        "end": 61
                                    },
                                    "flags": 416,
                                    "transformFlags": 0,
                                    "start": 16,
                                    "end": 61
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 2,
                                "end": 61
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 2,
                        "end": 61
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 1,
                    "end": 63
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 34,
                "end": 64
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 65
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 351,
                                "asyncKeyword": {
                                    "kind": 82031,
                                    "flags": 352,
                                    "transformFlags": 0,
                                    "start": 68,
                                    "end": 74
                                },
                                "asteriskToken": {
                                    "kind": 67143222,
                                    "flags": 64,
                                    "transformFlags": 32,
                                    "start": 74,
                                    "end": 76
                                },
                                "getKeyword": null,
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "method",
                                        "rawText": "method",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 76,
                                        "end": 82
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [
                                            {
                                                "kind": 281,
                                                "ellipsisToken": null,
                                                "left": {
                                                    "kind": 212,
                                                    "propertyList": {
                                                        "kind": 213,
                                                        "properties": [
                                                            {
                                                                "kind": 329,
                                                                "key": {
                                                                    "kind": 134299649,
                                                                    "text": "w",
                                                                    "rawText": "w",
                                                                    "flags": 96,
                                                                    "transformFlags": 0,
                                                                    "start": 84,
                                                                    "end": 86
                                                                },
                                                                "value": {
                                                                    "kind": 201,
                                                                    "elementList": {
                                                                        "kind": 324,
                                                                        "elements": [
                                                                            {
                                                                                "kind": 134299649,
                                                                                "text": "x",
                                                                                "rawText": "x",
                                                                                "flags": 96,
                                                                                "transformFlags": 0,
                                                                                "start": 89,
                                                                                "end": 90
                                                                            },
                                                                            {
                                                                                "kind": 134299649,
                                                                                "text": "y",
                                                                                "rawText": "y",
                                                                                "flags": 96,
                                                                                "transformFlags": 0,
                                                                                "start": 91,
                                                                                "end": 93
                                                                            },
                                                                            {
                                                                                "kind": 134299649,
                                                                                "text": "z",
                                                                                "rawText": "z",
                                                                                "flags": 96,
                                                                                "transformFlags": 0,
                                                                                "start": 94,
                                                                                "end": 96
                                                                            }
                                                                        ],
                                                                        "trailingComma": false,
                                                                        "flags": 0,
                                                                        "transformFlags": 0,
                                                                        "start": 89,
                                                                        "end": 96
                                                                    },
                                                                    "flags": 32,
                                                                    "transformFlags": 0,
                                                                    "start": 87,
                                                                    "end": 97
                                                                },
                                                                "initializer": {
                                                                    "kind": 119,
                                                                    "elementList": {
                                                                        "kind": 270,
                                                                        "elements": [
                                                                            {
                                                                                "kind": 201392130,
                                                                                "text": 4,
                                                                                "rawText": "4",
                                                                                "flags": 96,
                                                                                "transformFlags": 0,
                                                                                "start": 101,
                                                                                "end": 102
                                                                            },
                                                                            {
                                                                                "kind": 201392130,
                                                                                "text": 5,
                                                                                "rawText": "5",
                                                                                "flags": 96,
                                                                                "transformFlags": 0,
                                                                                "start": 103,
                                                                                "end": 105
                                                                            },
                                                                            {
                                                                                "kind": 201392130,
                                                                                "text": 6,
                                                                                "rawText": "6",
                                                                                "flags": 96,
                                                                                "transformFlags": 0,
                                                                                "start": 106,
                                                                                "end": 108
                                                                            }
                                                                        ],
                                                                        "trailingComma": false,
                                                                        "flags": 32,
                                                                        "transformFlags": 0,
                                                                        "start": 101,
                                                                        "end": 108
                                                                    },
                                                                    "flags": 32,
                                                                    "transformFlags": 8,
                                                                    "start": 99,
                                                                    "end": 109
                                                                },
                                                                "flags": 32,
                                                                "transformFlags": 0,
                                                                "start": 84,
                                                                "end": 109
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "transformFlags": 0,
                                                        "start": 84,
                                                        "end": 109
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 83,
                                                    "end": 111
                                                },
                                                "optionalToken": null,
                                                "type": null,
                                                "right": {
                                                    "kind": 220,
                                                    "propertyList": {
                                                        "kind": 218,
                                                        "properties": [],
                                                        "trailingComma": false,
                                                        "flags": 16,
                                                        "transformFlags": 0,
                                                        "start": 115,
                                                        "end": 115
                                                    },
                                                    "flags": 48,
                                                    "transformFlags": 8,
                                                    "start": 113,
                                                    "end": 116
                                                },
                                                "flags": 34,
                                                "transformFlags": 0,
                                                "start": 83,
                                                "end": 116
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 418,
                                        "transformFlags": 0,
                                        "start": 83,
                                        "end": 117
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
                                            "start": 119,
                                            "end": 119
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 117,
                                        "end": 120
                                    },
                                    "flags": 416,
                                    "transformFlags": 0,
                                    "start": 82,
                                    "end": 120
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 68,
                                "end": 120
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 68,
                        "end": 120
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 67,
                    "end": 122
                },
                "flags": 65,
                "transformFlags": 0,
                "start": 35,
                "end": 123
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 65,
            "end": 124
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 351,
                                "asyncKeyword": {
                                    "kind": 82031,
                                    "flags": 352,
                                    "transformFlags": 0,
                                    "start": 127,
                                    "end": 133
                                },
                                "asteriskToken": {
                                    "kind": 67143222,
                                    "flags": 64,
                                    "transformFlags": 32,
                                    "start": 133,
                                    "end": 135
                                },
                                "getKeyword": null,
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "method",
                                        "rawText": "method",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 135,
                                        "end": 141
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [
                                            {
                                                "kind": 281,
                                                "ellipsisToken": null,
                                                "left": {
                                                    "kind": 212,
                                                    "propertyList": {
                                                        "kind": 213,
                                                        "properties": [
                                                            {
                                                                "kind": 329,
                                                                "key": {
                                                                    "kind": 134299649,
                                                                    "text": "x",
                                                                    "rawText": "x",
                                                                    "flags": 96,
                                                                    "transformFlags": 0,
                                                                    "start": 143,
                                                                    "end": 145
                                                                },
                                                                "value": {
                                                                    "kind": 134299649,
                                                                    "text": "y",
                                                                    "rawText": "y",
                                                                    "flags": 96,
                                                                    "transformFlags": 0,
                                                                    "start": 146,
                                                                    "end": 148
                                                                },
                                                                "initializer": {
                                                                    "kind": 131,
                                                                    "expression": {
                                                                        "kind": 134299649,
                                                                        "text": "thrower",
                                                                        "rawText": "thrower",
                                                                        "flags": 96,
                                                                        "transformFlags": 0,
                                                                        "start": 150,
                                                                        "end": 158
                                                                    },
                                                                    "argumentList": {
                                                                        "kind": 256,
                                                                        "elements": [],
                                                                        "trailingComma": false,
                                                                        "flags": 32,
                                                                        "transformFlags": 0,
                                                                        "start": 159,
                                                                        "end": 159
                                                                    },
                                                                    "flags": 268435488,
                                                                    "transformFlags": 1,
                                                                    "start": 150,
                                                                    "end": 160
                                                                },
                                                                "flags": 32,
                                                                "transformFlags": 0,
                                                                "start": 143,
                                                                "end": 160
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "transformFlags": 0,
                                                        "start": 143,
                                                        "end": 160
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 142,
                                                    "end": 162
                                                },
                                                "optionalToken": null,
                                                "type": null,
                                                "right": {
                                                    "kind": 220,
                                                    "propertyList": {
                                                        "kind": 218,
                                                        "properties": [],
                                                        "trailingComma": false,
                                                        "flags": 16,
                                                        "transformFlags": 0,
                                                        "start": 166,
                                                        "end": 166
                                                    },
                                                    "flags": 48,
                                                    "transformFlags": 8,
                                                    "start": 164,
                                                    "end": 167
                                                },
                                                "flags": 34,
                                                "transformFlags": 0,
                                                "start": 142,
                                                "end": 167
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 418,
                                        "transformFlags": 0,
                                        "start": 142,
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
                                    "flags": 416,
                                    "transformFlags": 0,
                                    "start": 141,
                                    "end": 171
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 127,
                                "end": 171
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 127,
                        "end": 171
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 126,
                    "end": 173
                },
                "flags": 124,
                "transformFlags": 0,
                "start": 35,
                "end": 174
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 124,
            "end": 175
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 351,
                                "asyncKeyword": {
                                    "kind": 82031,
                                    "flags": 352,
                                    "transformFlags": 0,
                                    "start": 178,
                                    "end": 184
                                },
                                "asteriskToken": {
                                    "kind": 67143222,
                                    "flags": 64,
                                    "transformFlags": 32,
                                    "start": 184,
                                    "end": 186
                                },
                                "getKeyword": null,
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "method",
                                        "rawText": "method",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 186,
                                        "end": 192
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
                                                            "kind": 281,
                                                            "ellipsisToken": null,
                                                            "left": {
                                                                "kind": 134299649,
                                                                "text": "x",
                                                                "rawText": "x",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 194,
                                                                "end": 195
                                                            },
                                                            "optionalToken": null,
                                                            "type": null,
                                                            "right": {
                                                                "kind": 201392130,
                                                                "text": 23,
                                                                "rawText": "23",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 197,
                                                                "end": 200
                                                            },
                                                            "flags": 32,
                                                            "transformFlags": 0,
                                                            "start": 194,
                                                            "end": 200
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 0,
                                                    "transformFlags": 0,
                                                    "start": 194,
                                                    "end": 200
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 193,
                                                "end": 201
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 416,
                                        "transformFlags": 0,
                                        "start": 193,
                                        "end": 202
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
                                            "start": 204,
                                            "end": 204
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 202,
                                        "end": 205
                                    },
                                    "flags": 416,
                                    "transformFlags": 0,
                                    "start": 192,
                                    "end": 205
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 178,
                                "end": 205
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 178,
                        "end": 205
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 177,
                    "end": 207
                },
                "flags": 175,
                "transformFlags": 0,
                "start": 35,
                "end": 208
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 175,
            "end": 209
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 351,
                                "asyncKeyword": {
                                    "kind": 82031,
                                    "flags": 352,
                                    "transformFlags": 0,
                                    "start": 212,
                                    "end": 218
                                },
                                "asteriskToken": {
                                    "kind": 67143222,
                                    "flags": 64,
                                    "transformFlags": 32,
                                    "start": 218,
                                    "end": 220
                                },
                                "getKeyword": null,
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "method",
                                        "rawText": "method",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 220,
                                        "end": 226
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
                                                            "text": "_",
                                                            "rawText": "_",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 228,
                                                            "end": 229
                                                        },
                                                        {
                                                            "kind": 134299649,
                                                            "text": "x",
                                                            "rawText": "x",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 230,
                                                            "end": 232
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 0,
                                                    "transformFlags": 0,
                                                    "start": 228,
                                                    "end": 232
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 227,
                                                "end": 233
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 416,
                                        "transformFlags": 0,
                                        "start": 227,
                                        "end": 234
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
                                            "start": 236,
                                            "end": 236
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 234,
                                        "end": 237
                                    },
                                    "flags": 416,
                                    "transformFlags": 0,
                                    "start": 226,
                                    "end": 237
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 212,
                                "end": 237
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 212,
                        "end": 237
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 211,
                    "end": 239
                },
                "flags": 209,
                "transformFlags": 0,
                "start": 35,
                "end": 240
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 209,
            "end": 241
        }
    ],
    "isModule": false,
    "source": "({ async *method([x] = g[Symbol.iterator] = function() {}) {} });\n({ async *method({ w: [x, y, z] = [4, 5, 6] } = {}) {} });\n({ async *method({ x: y = thrower() } = {}) {} });\n({ async *method([x = 23]) {} });\n({ async *method([_, x]) {} });",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 241
}
```

### Printed

```javascript

({ async * method([x] = g[Symbol.iterator] = function () {}) {} });
({ async * method({ w: [x, y, z] = [4, 5, 6] } = {}) {} });

({ async * method({ x: y = thrower() } = {}) {} });

({ async * method([x = 23]) {} });

({ async * method([_, x]) {} });

```

### Diagnostics

```javascript
✔ No errors
```

