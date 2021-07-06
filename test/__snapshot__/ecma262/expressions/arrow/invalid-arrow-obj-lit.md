# Kataw parser test case

## Input

`````js
({e: a.b}) => x;

([a.b]) => 0;

({...this}) => x;

([...this]) => x;

({x, ...this}) => x;

([x, ...this]) => x;

({a:b[0]}) => x;

(x, {e: a.b}) => x;

(x, [a.b]) => 0;

(x, {...this}) => x;

(x, [...this]) => x;

(x, {x, ...this}) => x;

(x, [x, ...this]) => x;

(x, {a:b[0]}) => x;

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
                            "kind": 212,
                            "propertyList": {
                                "kind": 213,
                                "properties": [
                                    {
                                        "kind": 329,
                                        "key": {
                                            "kind": 134299649,
                                            "text": "e",
                                            "rawText": "e",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 2,
                                            "end": 3
                                        },
                                        "value": {
                                            "kind": 129,
                                            "member": {
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 4,
                                                "end": 6
                                            },
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "b",
                                                "rawText": "b",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 7,
                                                "end": 8
                                            },
                                            "flags": 96,
                                            "transformFlags": 2,
                                            "start": 2,
                                            "end": 8
                                        },
                                        "initializer": null,
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 2,
                                        "end": 8
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 2,
                                "end": 8
                            },
                            "flags": 48,
                            "transformFlags": 0,
                            "start": 1,
                            "end": 9
                        }
                    ],
                    "trailingComma": false,
                    "flags": 34,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 10
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 10,
                    "end": 13
                },
                "contents": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 13,
                    "end": 15
                },
                "flags": 34,
                "transformFlags": 0,
                "start": 0,
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
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [
                        {
                            "kind": 201,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 129,
                                        "member": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 20,
                                            "end": 21
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 22,
                                            "end": 23
                                        },
                                        "flags": 96,
                                        "transformFlags": 2,
                                        "start": 20,
                                        "end": 23
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 20,
                                "end": 23
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 19,
                            "end": 24
                        }
                    ],
                    "trailingComma": false,
                    "flags": 35,
                    "transformFlags": 0,
                    "start": 19,
                    "end": 25
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 25,
                    "end": 28
                },
                "contents": {
                    "kind": 201392130,
                    "text": 0,
                    "rawText": "0",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 28,
                    "end": 30
                },
                "flags": 35,
                "transformFlags": 0,
                "start": 16,
                "end": 30
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 16,
            "end": 31
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
                            "kind": 212,
                            "propertyList": {
                                "kind": 213,
                                "properties": [
                                    {
                                        "kind": 281,
                                        "ellipsisToken": {
                                            "kind": 524302,
                                            "flags": 64,
                                            "transformFlags": 0,
                                            "start": 35,
                                            "end": 38
                                        },
                                        "left": {
                                            "kind": 4276321,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 38,
                                            "end": 42
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "right": null,
                                        "flags": 1073741856,
                                        "transformFlags": 0,
                                        "start": 35,
                                        "end": 42
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 35,
                                "end": 42
                            },
                            "flags": 48,
                            "transformFlags": 0,
                            "start": 34,
                            "end": 43
                        }
                    ],
                    "trailingComma": false,
                    "flags": 35,
                    "transformFlags": 0,
                    "start": 34,
                    "end": 44
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 44,
                    "end": 47
                },
                "contents": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 47,
                    "end": 49
                },
                "flags": 35,
                "transformFlags": 0,
                "start": 31,
                "end": 49
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 31,
            "end": 50
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
                            "kind": 201,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 281,
                                        "ellipsisToken": {
                                            "kind": 524302,
                                            "flags": 64,
                                            "transformFlags": 0,
                                            "start": 54,
                                            "end": 57
                                        },
                                        "left": {
                                            "kind": 4276321,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 57,
                                            "end": 61
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "right": null,
                                        "flags": 1073741856,
                                        "transformFlags": 0,
                                        "start": 54,
                                        "end": 61
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 54,
                                "end": 61
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 53,
                            "end": 62
                        }
                    ],
                    "trailingComma": false,
                    "flags": 35,
                    "transformFlags": 0,
                    "start": 53,
                    "end": 63
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 63,
                    "end": 66
                },
                "contents": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 66,
                    "end": 68
                },
                "flags": 35,
                "transformFlags": 0,
                "start": 50,
                "end": 68
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 50,
            "end": 69
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
                            "kind": 212,
                            "propertyList": {
                                "kind": 213,
                                "properties": [
                                    {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 73,
                                        "end": 74
                                    },
                                    {
                                        "kind": 281,
                                        "ellipsisToken": {
                                            "kind": 524302,
                                            "flags": 64,
                                            "transformFlags": 0,
                                            "start": 75,
                                            "end": 79
                                        },
                                        "left": {
                                            "kind": 4276321,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 79,
                                            "end": 83
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "right": null,
                                        "flags": 1073741856,
                                        "transformFlags": 0,
                                        "start": 75,
                                        "end": 83
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 73,
                                "end": 83
                            },
                            "flags": 48,
                            "transformFlags": 0,
                            "start": 72,
                            "end": 84
                        }
                    ],
                    "trailingComma": false,
                    "flags": 35,
                    "transformFlags": 0,
                    "start": 72,
                    "end": 85
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 85,
                    "end": 88
                },
                "contents": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 88,
                    "end": 90
                },
                "flags": 35,
                "transformFlags": 0,
                "start": 69,
                "end": 90
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 69,
            "end": 91
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
                            "kind": 201,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 95,
                                        "end": 96
                                    },
                                    {
                                        "kind": 281,
                                        "ellipsisToken": {
                                            "kind": 524302,
                                            "flags": 64,
                                            "transformFlags": 0,
                                            "start": 97,
                                            "end": 101
                                        },
                                        "left": {
                                            "kind": 4276321,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 101,
                                            "end": 105
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "right": null,
                                        "flags": 1073741856,
                                        "transformFlags": 0,
                                        "start": 97,
                                        "end": 105
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 95,
                                "end": 105
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 94,
                            "end": 106
                        }
                    ],
                    "trailingComma": false,
                    "flags": 35,
                    "transformFlags": 0,
                    "start": 94,
                    "end": 107
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 107,
                    "end": 110
                },
                "contents": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 110,
                    "end": 112
                },
                "flags": 35,
                "transformFlags": 0,
                "start": 91,
                "end": 112
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 91,
            "end": 113
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
                            "kind": 212,
                            "propertyList": {
                                "kind": 213,
                                "properties": [
                                    {
                                        "kind": 329,
                                        "key": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 117,
                                            "end": 118
                                        },
                                        "value": {
                                            "kind": 130,
                                            "member": {
                                                "kind": 134299649,
                                                "text": "b",
                                                "rawText": "b",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 119,
                                                "end": 120
                                            },
                                            "expression": {
                                                "kind": 201392130,
                                                "text": 0,
                                                "rawText": "0",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 121,
                                                "end": 122
                                            },
                                            "flags": 536870944,
                                            "transformFlags": 4,
                                            "start": 117,
                                            "end": 123
                                        },
                                        "initializer": null,
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 117,
                                        "end": 123
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 117,
                                "end": 123
                            },
                            "flags": 48,
                            "transformFlags": 0,
                            "start": 116,
                            "end": 124
                        }
                    ],
                    "trailingComma": false,
                    "flags": 35,
                    "transformFlags": 0,
                    "start": 116,
                    "end": 125
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 125,
                    "end": 128
                },
                "contents": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 128,
                    "end": 130
                },
                "flags": 35,
                "transformFlags": 0,
                "start": 113,
                "end": 130
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 113,
            "end": 131
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
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 134,
                            "end": 135
                        },
                        {
                            "kind": 212,
                            "propertyList": {
                                "kind": 213,
                                "properties": [
                                    {
                                        "kind": 329,
                                        "key": {
                                            "kind": 134299649,
                                            "text": "e",
                                            "rawText": "e",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 138,
                                            "end": 139
                                        },
                                        "value": {
                                            "kind": 129,
                                            "member": {
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 140,
                                                "end": 142
                                            },
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "b",
                                                "rawText": "b",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 143,
                                                "end": 144
                                            },
                                            "flags": 96,
                                            "transformFlags": 2,
                                            "start": 138,
                                            "end": 144
                                        },
                                        "initializer": null,
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 138,
                                        "end": 144
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 138,
                                "end": 144
                            },
                            "flags": 48,
                            "transformFlags": 0,
                            "start": 136,
                            "end": 145
                        }
                    ],
                    "trailingComma": false,
                    "flags": 35,
                    "transformFlags": 0,
                    "start": 134,
                    "end": 146
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 146,
                    "end": 149
                },
                "contents": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 149,
                    "end": 151
                },
                "flags": 35,
                "transformFlags": 0,
                "start": 131,
                "end": 151
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 131,
            "end": 152
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
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 155,
                            "end": 156
                        },
                        {
                            "kind": 201,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 129,
                                        "member": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 159,
                                            "end": 160
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 161,
                                            "end": 162
                                        },
                                        "flags": 96,
                                        "transformFlags": 2,
                                        "start": 159,
                                        "end": 162
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 159,
                                "end": 162
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 157,
                            "end": 163
                        }
                    ],
                    "trailingComma": false,
                    "flags": 35,
                    "transformFlags": 0,
                    "start": 155,
                    "end": 164
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 164,
                    "end": 167
                },
                "contents": {
                    "kind": 201392130,
                    "text": 0,
                    "rawText": "0",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 167,
                    "end": 169
                },
                "flags": 35,
                "transformFlags": 0,
                "start": 152,
                "end": 169
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 152,
            "end": 170
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
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 173,
                            "end": 174
                        },
                        {
                            "kind": 212,
                            "propertyList": {
                                "kind": 213,
                                "properties": [
                                    {
                                        "kind": 281,
                                        "ellipsisToken": {
                                            "kind": 524302,
                                            "flags": 64,
                                            "transformFlags": 0,
                                            "start": 177,
                                            "end": 180
                                        },
                                        "left": {
                                            "kind": 4276321,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 180,
                                            "end": 184
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "right": null,
                                        "flags": 1073741856,
                                        "transformFlags": 0,
                                        "start": 177,
                                        "end": 184
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 177,
                                "end": 184
                            },
                            "flags": 48,
                            "transformFlags": 0,
                            "start": 175,
                            "end": 185
                        }
                    ],
                    "trailingComma": false,
                    "flags": 35,
                    "transformFlags": 0,
                    "start": 173,
                    "end": 186
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 186,
                    "end": 189
                },
                "contents": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 189,
                    "end": 191
                },
                "flags": 35,
                "transformFlags": 0,
                "start": 170,
                "end": 191
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 170,
            "end": 192
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
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 195,
                            "end": 196
                        },
                        {
                            "kind": 201,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 281,
                                        "ellipsisToken": {
                                            "kind": 524302,
                                            "flags": 64,
                                            "transformFlags": 0,
                                            "start": 199,
                                            "end": 202
                                        },
                                        "left": {
                                            "kind": 4276321,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 202,
                                            "end": 206
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "right": null,
                                        "flags": 1073741856,
                                        "transformFlags": 0,
                                        "start": 199,
                                        "end": 206
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 199,
                                "end": 206
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 197,
                            "end": 207
                        }
                    ],
                    "trailingComma": false,
                    "flags": 35,
                    "transformFlags": 0,
                    "start": 195,
                    "end": 208
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 208,
                    "end": 211
                },
                "contents": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 211,
                    "end": 213
                },
                "flags": 35,
                "transformFlags": 0,
                "start": 192,
                "end": 213
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 192,
            "end": 214
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
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 217,
                            "end": 218
                        },
                        {
                            "kind": 212,
                            "propertyList": {
                                "kind": 213,
                                "properties": [
                                    {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 221,
                                        "end": 222
                                    },
                                    {
                                        "kind": 281,
                                        "ellipsisToken": {
                                            "kind": 524302,
                                            "flags": 64,
                                            "transformFlags": 0,
                                            "start": 223,
                                            "end": 227
                                        },
                                        "left": {
                                            "kind": 4276321,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 227,
                                            "end": 231
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "right": null,
                                        "flags": 1073741856,
                                        "transformFlags": 0,
                                        "start": 223,
                                        "end": 231
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 221,
                                "end": 231
                            },
                            "flags": 48,
                            "transformFlags": 0,
                            "start": 219,
                            "end": 232
                        }
                    ],
                    "trailingComma": false,
                    "flags": 35,
                    "transformFlags": 0,
                    "start": 217,
                    "end": 233
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 233,
                    "end": 236
                },
                "contents": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 236,
                    "end": 238
                },
                "flags": 35,
                "transformFlags": 0,
                "start": 214,
                "end": 238
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 214,
            "end": 239
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
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 242,
                            "end": 243
                        },
                        {
                            "kind": 201,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 246,
                                        "end": 247
                                    },
                                    {
                                        "kind": 281,
                                        "ellipsisToken": {
                                            "kind": 524302,
                                            "flags": 64,
                                            "transformFlags": 0,
                                            "start": 248,
                                            "end": 252
                                        },
                                        "left": {
                                            "kind": 4276321,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 252,
                                            "end": 256
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "right": null,
                                        "flags": 1073741856,
                                        "transformFlags": 0,
                                        "start": 248,
                                        "end": 256
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 246,
                                "end": 256
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 244,
                            "end": 257
                        }
                    ],
                    "trailingComma": false,
                    "flags": 35,
                    "transformFlags": 0,
                    "start": 242,
                    "end": 258
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 258,
                    "end": 261
                },
                "contents": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 261,
                    "end": 263
                },
                "flags": 35,
                "transformFlags": 0,
                "start": 239,
                "end": 263
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 239,
            "end": 264
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
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 267,
                            "end": 268
                        },
                        {
                            "kind": 212,
                            "propertyList": {
                                "kind": 213,
                                "properties": [
                                    {
                                        "kind": 329,
                                        "key": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 271,
                                            "end": 272
                                        },
                                        "value": {
                                            "kind": 130,
                                            "member": {
                                                "kind": 134299649,
                                                "text": "b",
                                                "rawText": "b",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 273,
                                                "end": 274
                                            },
                                            "expression": {
                                                "kind": 201392130,
                                                "text": 0,
                                                "rawText": "0",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 275,
                                                "end": 276
                                            },
                                            "flags": 536870944,
                                            "transformFlags": 4,
                                            "start": 271,
                                            "end": 277
                                        },
                                        "initializer": null,
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 271,
                                        "end": 277
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 271,
                                "end": 277
                            },
                            "flags": 48,
                            "transformFlags": 0,
                            "start": 269,
                            "end": 278
                        }
                    ],
                    "trailingComma": false,
                    "flags": 35,
                    "transformFlags": 0,
                    "start": 267,
                    "end": 279
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 279,
                    "end": 282
                },
                "contents": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 282,
                    "end": 284
                },
                "flags": 35,
                "transformFlags": 0,
                "start": 264,
                "end": 284
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 264,
            "end": 285
        }
    ],
    "isModule": false,
    "source": "({e: a.b}) => x;\n\n([a.b]) => 0;\n\n({...this}) => x;\n\n([...this]) => x;\n\n({x, ...this}) => x;\n\n([x, ...this]) => x;\n\n({a:b[0]}) => x;\n\n(x, {e: a.b}) => x;\n\n(x, [a.b]) => 0;\n\n(x, {...this}) => x;\n\n(x, [...this]) => x;\n\n(x, {x, ...this}) => x;\n\n(x, [x, ...this]) => x;\n\n(x, {a:b[0]}) => x;\n",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 286
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The left hand side of the arrow is not destructible  - start: 10, end: 13
✖ The left hand side of the arrow is not destructible  - start: 25, end: 28
✖ The left hand side of the arrow is not destructible  - start: 44, end: 47
✖ The left hand side of the arrow is not destructible  - start: 63, end: 66
✖ The left hand side of the arrow is not destructible  - start: 85, end: 88
✖ The left hand side of the arrow is not destructible  - start: 107, end: 110
✖ The left hand side of the arrow is not destructible  - start: 125, end: 128
✖ The left hand side of the arrow is not destructible  - start: 146, end: 149
✖ The left hand side of the arrow is not destructible  - start: 164, end: 167
✖ The left hand side of the arrow is not destructible  - start: 186, end: 189
✖ The left hand side of the arrow is not destructible  - start: 208, end: 211
✖ The left hand side of the arrow is not destructible  - start: 233, end: 236
✖ Duplicate arrow formal parameter - start: 222, end: 238
✖ The left hand side of the arrow is not destructible  - start: 258, end: 261
✖ Duplicate arrow formal parameter - start: 247, end: 263
✖ The left hand side of the arrow is not destructible  - start: 279, end: 282

```

