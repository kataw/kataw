# Kataw parser test case

## Input

`````js
function a(...[a = 1, b = true]: string[]) { }

function b(...[...foo = []]: string[]) { }

function c(...{0: a, length, 3: d}: [boolean, string, number]) { }

function d(...[a, , , d]: [boolean, string, number]) { }

function e(...{0: a = 1, 1: b = true, ...rest: rest}: [boolean, string, number]) { }
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "function a(...[a = 1, b = true]: string[]) { }\n\nfunction b(...[...foo = []]: string[]) { }\n\nfunction c(...{0: a, length, 3: d}: [boolean, string, number]) { }\n\nfunction d(...[a, , , d]: [boolean, string, number]) { }\n\nfunction e(...{0: a = 1, 1: b = true, ...rest: rest}: [boolean, string, number]) { }",
    "filename": "",
    "statements": [
        {
            "kind": 264284,
            "name": {
                "kind": 131102,
                "text": "a",
                "rawText": "a",
                "flags": 0,
                "intersects": false,
                "transformFlags": 1025,
                "start": 8,
                "end": 10
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [
                    {
                        "kind": 16473,
                        "ellipsis": true,
                        "binding": {
                            "kind": 33554437,
                            "elementList": {
                                "kind": 29,
                                "elements": [
                                    {
                                        "kind": 16412,
                                        "ellipsis": false,
                                        "left": {
                                            "kind": 131102,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1025,
                                            "start": 15,
                                            "end": 16
                                        },
                                        "right": {
                                            "kind": 4261540,
                                            "text": 1,
                                            "rawText": "1",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 18,
                                            "end": 20
                                        },
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 1,
                                        "start": 15,
                                        "end": 20
                                    },
                                    {
                                        "kind": 16412,
                                        "ellipsis": false,
                                        "left": {
                                            "kind": 131102,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1025,
                                            "start": 21,
                                            "end": 23
                                        },
                                        "right": {
                                            "kind": 4260391,
                                            "text": true,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 25,
                                            "end": 30
                                        },
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 1,
                                        "start": 21,
                                        "end": 30
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1,
                                "start": 15,
                                "end": 30
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1025,
                            "start": 14,
                            "end": 31
                        },
                        "isOptional": false,
                        "type": {
                            "kind": 8199,
                            "elementType": {
                                "kind": 4202702,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 32,
                                "end": 39
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 32,
                            "end": 42
                        },
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": null,
                        "isReadOnly": false,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 4097,
                        "start": 11,
                        "end": 41
                    }
                ],
                "trailingComma": false,
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 11,
                "end": 42
            },
            "type": null,
            "contents": {
                "kind": 91,
                "functionStatementList": {
                    "kind": 94,
                    "statements": [],
                    "multiline": false,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 44,
                    "end": 44
                },
                "flags": 32768,
                "intersects": false,
                "transformFlags": 0,
                "start": 42,
                "end": 46
            },
            "typeParameters": null,
            "flags": 32768,
            "intersects": false,
            "transformFlags": 256,
            "start": 0,
            "end": 46
        },
        {
            "kind": 264284,
            "name": {
                "kind": 131102,
                "text": "b",
                "rawText": "b",
                "flags": 0,
                "intersects": false,
                "transformFlags": 1025,
                "start": 56,
                "end": 58
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [
                    {
                        "kind": 16473,
                        "ellipsis": true,
                        "binding": {
                            "kind": 33554437,
                            "elementList": {
                                "kind": 29,
                                "elements": [
                                    {
                                        "kind": 16412,
                                        "ellipsis": true,
                                        "left": {
                                            "kind": 131102,
                                            "text": "foo",
                                            "rawText": "foo",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1025,
                                            "start": 66,
                                            "end": 69
                                        },
                                        "right": {
                                            "kind": 98822,
                                            "elementList": {
                                                "kind": 65605,
                                                "elements": [],
                                                "trailingComma": false,
                                                "multiline": false,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 73,
                                                "end": 73
                                            },
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 71,
                                            "end": 74
                                        },
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 4097,
                                        "start": 63,
                                        "end": 74
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1,
                                "start": 63,
                                "end": 74
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1025,
                            "start": 62,
                            "end": 75
                        },
                        "isOptional": false,
                        "type": {
                            "kind": 8199,
                            "elementType": {
                                "kind": 4202702,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 76,
                                "end": 83
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 76,
                            "end": 86
                        },
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": null,
                        "isReadOnly": false,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 4097,
                        "start": 59,
                        "end": 85
                    }
                ],
                "trailingComma": false,
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 59,
                "end": 86
            },
            "type": null,
            "contents": {
                "kind": 91,
                "functionStatementList": {
                    "kind": 94,
                    "statements": [],
                    "multiline": false,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 88,
                    "end": 88
                },
                "flags": 32768,
                "intersects": false,
                "transformFlags": 0,
                "start": 86,
                "end": 90
            },
            "typeParameters": null,
            "flags": 32768,
            "intersects": false,
            "transformFlags": 256,
            "start": 46,
            "end": 90
        },
        {
            "kind": 264284,
            "name": {
                "kind": 131102,
                "text": "c",
                "rawText": "c",
                "flags": 0,
                "intersects": false,
                "transformFlags": 1025,
                "start": 100,
                "end": 102
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [
                    {
                        "kind": 16473,
                        "ellipsis": true,
                        "binding": {
                            "kind": 33554598,
                            "propertyList": {
                                "kind": 33,
                                "properties": [
                                    {
                                        "kind": 32,
                                        "ellipsis": false,
                                        "key": {
                                            "kind": 4261540,
                                            "text": 0,
                                            "rawText": "0",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 107,
                                            "end": 108
                                        },
                                        "value": {
                                            "kind": 16412,
                                            "ellipsis": false,
                                            "left": {
                                                "kind": 131102,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 1025,
                                                "start": 109,
                                                "end": 111
                                            },
                                            "right": null,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1,
                                            "start": 109,
                                            "end": 111
                                        },
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 1025,
                                        "start": 107,
                                        "end": 111
                                    },
                                    {
                                        "kind": 203,
                                        "ellipsis": false,
                                        "left": {
                                            "kind": 131102,
                                            "text": "length",
                                            "rawText": "length",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1025,
                                            "start": 112,
                                            "end": 119
                                        },
                                        "right": null,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 1024,
                                        "start": 112,
                                        "end": 119
                                    },
                                    {
                                        "kind": 32,
                                        "ellipsis": false,
                                        "key": {
                                            "kind": 4261540,
                                            "text": 3,
                                            "rawText": "3",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 120,
                                            "end": 122
                                        },
                                        "value": {
                                            "kind": 16412,
                                            "ellipsis": false,
                                            "left": {
                                                "kind": 131102,
                                                "text": "d",
                                                "rawText": "d",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 1025,
                                                "start": 123,
                                                "end": 125
                                            },
                                            "right": null,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1,
                                            "start": 123,
                                            "end": 125
                                        },
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 1025,
                                        "start": 120,
                                        "end": 125
                                    }
                                ],
                                "multiline": false,
                                "trailingComma": false,
                                "transformFlags": 1025,
                                "flags": 0,
                                "intersects": false,
                                "start": 107,
                                "end": 125
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1025,
                            "start": 106,
                            "end": 126
                        },
                        "isOptional": false,
                        "type": {
                            "kind": 134226144,
                            "elementTypes": [
                                {
                                    "kind": 4268070,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 129,
                                    "end": 136
                                },
                                {
                                    "kind": 4202702,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 137,
                                    "end": 144
                                },
                                {
                                    "kind": 4202657,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 145,
                                    "end": 152
                                }
                            ],
                            "multiline": false,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 127,
                            "end": 153
                        },
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": null,
                        "isReadOnly": false,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 4097,
                        "start": 103,
                        "end": 153
                    }
                ],
                "trailingComma": false,
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 103,
                "end": 154
            },
            "type": null,
            "contents": {
                "kind": 91,
                "functionStatementList": {
                    "kind": 94,
                    "statements": [],
                    "multiline": false,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 156,
                    "end": 156
                },
                "flags": 32768,
                "intersects": false,
                "transformFlags": 0,
                "start": 154,
                "end": 158
            },
            "typeParameters": null,
            "flags": 32768,
            "intersects": false,
            "transformFlags": 256,
            "start": 90,
            "end": 158
        },
        {
            "kind": 264284,
            "name": {
                "kind": 131102,
                "text": "d",
                "rawText": "d",
                "flags": 0,
                "intersects": false,
                "transformFlags": 1025,
                "start": 168,
                "end": 170
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [
                    {
                        "kind": 16473,
                        "ellipsis": true,
                        "binding": {
                            "kind": 33554437,
                            "elementList": {
                                "kind": 29,
                                "elements": [
                                    {
                                        "kind": 16412,
                                        "ellipsis": false,
                                        "left": {
                                            "kind": 131102,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1025,
                                            "start": 175,
                                            "end": 176
                                        },
                                        "right": null,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 1,
                                        "start": 175,
                                        "end": 176
                                    },
                                    {
                                        "kind": 4276394,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 177,
                                        "end": 177
                                    },
                                    {
                                        "kind": 4276394,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 179,
                                        "end": 179
                                    },
                                    {
                                        "kind": 16412,
                                        "ellipsis": false,
                                        "left": {
                                            "kind": 131102,
                                            "text": "d",
                                            "rawText": "d",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1025,
                                            "start": 181,
                                            "end": 183
                                        },
                                        "right": null,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 1,
                                        "start": 181,
                                        "end": 183
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1,
                                "start": 175,
                                "end": 183
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1025,
                            "start": 174,
                            "end": 184
                        },
                        "isOptional": false,
                        "type": {
                            "kind": 134226144,
                            "elementTypes": [
                                {
                                    "kind": 4268070,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 187,
                                    "end": 194
                                },
                                {
                                    "kind": 4202702,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 195,
                                    "end": 202
                                },
                                {
                                    "kind": 4202657,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 203,
                                    "end": 210
                                }
                            ],
                            "multiline": false,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 185,
                            "end": 211
                        },
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": null,
                        "isReadOnly": false,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 4097,
                        "start": 171,
                        "end": 211
                    }
                ],
                "trailingComma": false,
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 171,
                "end": 212
            },
            "type": null,
            "contents": {
                "kind": 91,
                "functionStatementList": {
                    "kind": 94,
                    "statements": [],
                    "multiline": false,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 214,
                    "end": 214
                },
                "flags": 32768,
                "intersects": false,
                "transformFlags": 0,
                "start": 212,
                "end": 216
            },
            "typeParameters": null,
            "flags": 32768,
            "intersects": false,
            "transformFlags": 256,
            "start": 158,
            "end": 216
        },
        {
            "kind": 264284,
            "name": {
                "kind": 131102,
                "text": "e",
                "rawText": "e",
                "flags": 0,
                "intersects": false,
                "transformFlags": 1025,
                "start": 226,
                "end": 228
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [
                    {
                        "kind": 16473,
                        "ellipsis": true,
                        "binding": {
                            "kind": 33554598,
                            "propertyList": {
                                "kind": 33,
                                "properties": [
                                    {
                                        "kind": 32,
                                        "ellipsis": false,
                                        "key": {
                                            "kind": 4261540,
                                            "text": 0,
                                            "rawText": "0",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 233,
                                            "end": 234
                                        },
                                        "value": {
                                            "kind": 16412,
                                            "ellipsis": false,
                                            "left": {
                                                "kind": 131102,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 1025,
                                                "start": 235,
                                                "end": 237
                                            },
                                            "right": {
                                                "kind": 4261540,
                                                "text": 1,
                                                "rawText": "1",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 239,
                                                "end": 241
                                            },
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1,
                                            "start": 235,
                                            "end": 241
                                        },
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 1025,
                                        "start": 233,
                                        "end": 241
                                    },
                                    {
                                        "kind": 32,
                                        "ellipsis": false,
                                        "key": {
                                            "kind": 4261540,
                                            "text": 1,
                                            "rawText": "1",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 242,
                                            "end": 244
                                        },
                                        "value": {
                                            "kind": 16412,
                                            "ellipsis": false,
                                            "left": {
                                                "kind": 131102,
                                                "text": "b",
                                                "rawText": "b",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 1025,
                                                "start": 245,
                                                "end": 247
                                            },
                                            "right": {
                                                "kind": 4260391,
                                                "text": true,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 249,
                                                "end": 254
                                            },
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1,
                                            "start": 245,
                                            "end": 254
                                        },
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 1025,
                                        "start": 242,
                                        "end": 254
                                    },
                                    {
                                        "kind": 32,
                                        "ellipsis": true,
                                        "key": {
                                            "kind": 196711,
                                            "text": "rest",
                                            "rawText": "rest",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 255,
                                            "end": 264
                                        },
                                        "value": {
                                            "kind": 16412,
                                            "ellipsis": false,
                                            "left": {
                                                "kind": 131102,
                                                "text": "rest",
                                                "rawText": "rest",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 1025,
                                                "start": 264,
                                                "end": 269
                                            },
                                            "right": null,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1,
                                            "start": 264,
                                            "end": 269
                                        },
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 1025,
                                        "start": 255,
                                        "end": 269
                                    }
                                ],
                                "multiline": false,
                                "trailingComma": false,
                                "transformFlags": 1025,
                                "flags": 0,
                                "intersects": false,
                                "start": 233,
                                "end": 269
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1025,
                            "start": 232,
                            "end": 270
                        },
                        "isOptional": false,
                        "type": {
                            "kind": 134226144,
                            "elementTypes": [
                                {
                                    "kind": 4268070,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 273,
                                    "end": 280
                                },
                                {
                                    "kind": 4202702,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 281,
                                    "end": 288
                                },
                                {
                                    "kind": 4202657,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 289,
                                    "end": 296
                                }
                            ],
                            "multiline": false,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 271,
                            "end": 297
                        },
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": null,
                        "isReadOnly": false,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 4097,
                        "start": 229,
                        "end": 297
                    }
                ],
                "trailingComma": false,
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 229,
                "end": 298
            },
            "type": null,
            "contents": {
                "kind": 91,
                "functionStatementList": {
                    "kind": 94,
                    "statements": [],
                    "multiline": false,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 300,
                    "end": 300
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 298,
                "end": 302
            },
            "typeParameters": null,
            "flags": 32768,
            "intersects": false,
            "transformFlags": 256,
            "start": 216,
            "end": 302
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [],
    "intersects": false,
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 302
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

