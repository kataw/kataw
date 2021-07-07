# Kataw parser test case

## Input

`````js
({a:b[0]}) => x;

([{x: y.z} = a]) => b;

([{x: y.z}]) => b;

([{x: y.z}] = a) => b;

([{"foo": y.z} = a]) => b;

({"foo": y.z} = a) => b;

([{"foo": y.z}]) => b;

([{"foo": y.z}] = a) => b;

([a, b] => 42);

([a, b] = [] => 42);

(if) => {};

(a, if) => {};

(q, a + b) => {};

(q, a + b, c) => {};

(...a => 42);

() => {}(0);

x => {}(0);

async x => {}(0);

y = () => {}(0);

(async () => {}(0));

(() => {}(0));

y = (x => {}(0));

(async () => {}(0));

(async () => {}(0));

(async () => {}(0));

(async () => {}(0));
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
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 2,
                                            "end": 3
                                        },
                                        "value": {
                                            "kind": 130,
                                            "member": {
                                                "kind": 134299649,
                                                "text": "b",
                                                "rawText": "b",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 4,
                                                "end": 5
                                            },
                                            "expression": {
                                                "kind": 201392130,
                                                "text": 0,
                                                "rawText": "0",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 6,
                                                "end": 7
                                            },
                                            "flags": 536870944,
                                            "transformFlags": 4,
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
            "transformFlags": 4096,
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
                                                            "start": 21,
                                                            "end": 22
                                                        },
                                                        "value": {
                                                            "kind": 129,
                                                            "member": {
                                                                "kind": 134299649,
                                                                "text": "y",
                                                                "rawText": "y",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 23,
                                                                "end": 25
                                                            },
                                                            "expression": {
                                                                "kind": 134299649,
                                                                "text": "z",
                                                                "rawText": "z",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 26,
                                                                "end": 27
                                                            },
                                                            "flags": 96,
                                                            "transformFlags": 2,
                                                            "start": 21,
                                                            "end": 27
                                                        },
                                                        "initializer": null,
                                                        "flags": 32,
                                                        "transformFlags": 0,
                                                        "start": 21,
                                                        "end": 27
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 21,
                                                "end": 27
                                            },
                                            "flags": 48,
                                            "transformFlags": 0,
                                            "start": 20,
                                            "end": 28
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "right": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 30,
                                            "end": 32
                                        },
                                        "flags": 32,
                                        "transformFlags": 4096,
                                        "start": 20,
                                        "end": 32
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 20,
                                "end": 32
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 19,
                            "end": 33
                        }
                    ],
                    "trailingComma": false,
                    "flags": 35,
                    "transformFlags": 0,
                    "start": 19,
                    "end": 34
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 34,
                    "end": 37
                },
                "contents": {
                    "kind": 134299649,
                    "text": "b",
                    "rawText": "b",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 37,
                    "end": 39
                },
                "flags": 35,
                "transformFlags": 0,
                "start": 16,
                "end": 39
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 16,
            "end": 40
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
                                                        "start": 45,
                                                        "end": 46
                                                    },
                                                    "value": {
                                                        "kind": 129,
                                                        "member": {
                                                            "kind": 134299649,
                                                            "text": "y",
                                                            "rawText": "y",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 47,
                                                            "end": 49
                                                        },
                                                        "expression": {
                                                            "kind": 134299649,
                                                            "text": "z",
                                                            "rawText": "z",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 50,
                                                            "end": 51
                                                        },
                                                        "flags": 96,
                                                        "transformFlags": 2,
                                                        "start": 45,
                                                        "end": 51
                                                    },
                                                    "initializer": null,
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 45,
                                                    "end": 51
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 45,
                                            "end": 51
                                        },
                                        "flags": 48,
                                        "transformFlags": 0,
                                        "start": 44,
                                        "end": 52
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 44,
                                "end": 52
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 43,
                            "end": 53
                        }
                    ],
                    "trailingComma": false,
                    "flags": 35,
                    "transformFlags": 0,
                    "start": 43,
                    "end": 54
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 54,
                    "end": 57
                },
                "contents": {
                    "kind": 134299649,
                    "text": "b",
                    "rawText": "b",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 57,
                    "end": 59
                },
                "flags": 35,
                "transformFlags": 0,
                "start": 40,
                "end": 59
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 40,
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
                                "kind": 201,
                                "elementList": {
                                    "kind": 270,
                                    "elements": [
                                        {
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
                                                            "start": 65,
                                                            "end": 66
                                                        },
                                                        "value": {
                                                            "kind": 129,
                                                            "member": {
                                                                "kind": 134299649,
                                                                "text": "y",
                                                                "rawText": "y",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 67,
                                                                "end": 69
                                                            },
                                                            "expression": {
                                                                "kind": 134299649,
                                                                "text": "z",
                                                                "rawText": "z",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 70,
                                                                "end": 71
                                                            },
                                                            "flags": 96,
                                                            "transformFlags": 2,
                                                            "start": 65,
                                                            "end": 71
                                                        },
                                                        "initializer": null,
                                                        "flags": 32,
                                                        "transformFlags": 0,
                                                        "start": 65,
                                                        "end": 71
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 65,
                                                "end": 71
                                            },
                                            "flags": 48,
                                            "transformFlags": 0,
                                            "start": 64,
                                            "end": 72
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 64,
                                    "end": 72
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 63,
                                "end": 73
                            },
                            "optionalToken": null,
                            "type": null,
                            "right": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 75,
                                "end": 77
                            },
                            "flags": 32,
                            "transformFlags": 4096,
                            "start": 63,
                            "end": 77
                        }
                    ],
                    "trailingComma": false,
                    "flags": 35,
                    "transformFlags": 0,
                    "start": 63,
                    "end": 78
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 78,
                    "end": 81
                },
                "contents": {
                    "kind": 134299649,
                    "text": "b",
                    "rawText": "b",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 81,
                    "end": 83
                },
                "flags": 35,
                "transformFlags": 0,
                "start": 60,
                "end": 83
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 60,
            "end": 84
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
                                        "ellipsisToken": null,
                                        "left": {
                                            "kind": 212,
                                            "propertyList": {
                                                "kind": 213,
                                                "properties": [
                                                    {
                                                        "kind": 329,
                                                        "key": {
                                                            "kind": 201392131,
                                                            "text": "foo",
                                                            "rawText": "\"foo\"",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 89,
                                                            "end": 94
                                                        },
                                                        "value": {
                                                            "kind": 129,
                                                            "member": {
                                                                "kind": 134299649,
                                                                "text": "y",
                                                                "rawText": "y",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 95,
                                                                "end": 97
                                                            },
                                                            "expression": {
                                                                "kind": 134299649,
                                                                "text": "z",
                                                                "rawText": "z",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 98,
                                                                "end": 99
                                                            },
                                                            "flags": 96,
                                                            "transformFlags": 2,
                                                            "start": 89,
                                                            "end": 99
                                                        },
                                                        "initializer": null,
                                                        "flags": 32,
                                                        "transformFlags": 0,
                                                        "start": 89,
                                                        "end": 99
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 89,
                                                "end": 99
                                            },
                                            "flags": 48,
                                            "transformFlags": 0,
                                            "start": 88,
                                            "end": 100
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "right": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 102,
                                            "end": 104
                                        },
                                        "flags": 32,
                                        "transformFlags": 4096,
                                        "start": 88,
                                        "end": 104
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 88,
                                "end": 104
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 87,
                            "end": 105
                        }
                    ],
                    "trailingComma": false,
                    "flags": 35,
                    "transformFlags": 0,
                    "start": 87,
                    "end": 106
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 106,
                    "end": 109
                },
                "contents": {
                    "kind": 134299649,
                    "text": "b",
                    "rawText": "b",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 109,
                    "end": 111
                },
                "flags": 35,
                "transformFlags": 0,
                "start": 84,
                "end": 111
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 84,
            "end": 112
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
                                "kind": 212,
                                "propertyList": {
                                    "kind": 213,
                                    "properties": [
                                        {
                                            "kind": 329,
                                            "key": {
                                                "kind": 201392131,
                                                "text": "foo",
                                                "rawText": "\"foo\"",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 116,
                                                "end": 121
                                            },
                                            "value": {
                                                "kind": 129,
                                                "member": {
                                                    "kind": 134299649,
                                                    "text": "y",
                                                    "rawText": "y",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 122,
                                                    "end": 124
                                                },
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "z",
                                                    "rawText": "z",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 125,
                                                    "end": 126
                                                },
                                                "flags": 96,
                                                "transformFlags": 2,
                                                "start": 116,
                                                "end": 126
                                            },
                                            "initializer": null,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 116,
                                            "end": 126
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 116,
                                    "end": 126
                                },
                                "flags": 48,
                                "transformFlags": 0,
                                "start": 115,
                                "end": 127
                            },
                            "optionalToken": null,
                            "type": null,
                            "right": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 129,
                                "end": 131
                            },
                            "flags": 32,
                            "transformFlags": 4096,
                            "start": 115,
                            "end": 131
                        }
                    ],
                    "trailingComma": false,
                    "flags": 35,
                    "transformFlags": 0,
                    "start": 115,
                    "end": 132
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 132,
                    "end": 135
                },
                "contents": {
                    "kind": 134299649,
                    "text": "b",
                    "rawText": "b",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 135,
                    "end": 137
                },
                "flags": 35,
                "transformFlags": 0,
                "start": 112,
                "end": 137
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 112,
            "end": 138
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
                                        "kind": 212,
                                        "propertyList": {
                                            "kind": 213,
                                            "properties": [
                                                {
                                                    "kind": 329,
                                                    "key": {
                                                        "kind": 201392131,
                                                        "text": "foo",
                                                        "rawText": "\"foo\"",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 143,
                                                        "end": 148
                                                    },
                                                    "value": {
                                                        "kind": 129,
                                                        "member": {
                                                            "kind": 134299649,
                                                            "text": "y",
                                                            "rawText": "y",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 149,
                                                            "end": 151
                                                        },
                                                        "expression": {
                                                            "kind": 134299649,
                                                            "text": "z",
                                                            "rawText": "z",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 152,
                                                            "end": 153
                                                        },
                                                        "flags": 96,
                                                        "transformFlags": 2,
                                                        "start": 143,
                                                        "end": 153
                                                    },
                                                    "initializer": null,
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 143,
                                                    "end": 153
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 143,
                                            "end": 153
                                        },
                                        "flags": 48,
                                        "transformFlags": 0,
                                        "start": 142,
                                        "end": 154
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 142,
                                "end": 154
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 141,
                            "end": 155
                        }
                    ],
                    "trailingComma": false,
                    "flags": 35,
                    "transformFlags": 0,
                    "start": 141,
                    "end": 156
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 156,
                    "end": 159
                },
                "contents": {
                    "kind": 134299649,
                    "text": "b",
                    "rawText": "b",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 159,
                    "end": 161
                },
                "flags": 35,
                "transformFlags": 0,
                "start": 138,
                "end": 161
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 138,
            "end": 162
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
                                "kind": 201,
                                "elementList": {
                                    "kind": 270,
                                    "elements": [
                                        {
                                            "kind": 212,
                                            "propertyList": {
                                                "kind": 213,
                                                "properties": [
                                                    {
                                                        "kind": 329,
                                                        "key": {
                                                            "kind": 201392131,
                                                            "text": "foo",
                                                            "rawText": "\"foo\"",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 167,
                                                            "end": 172
                                                        },
                                                        "value": {
                                                            "kind": 129,
                                                            "member": {
                                                                "kind": 134299649,
                                                                "text": "y",
                                                                "rawText": "y",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 173,
                                                                "end": 175
                                                            },
                                                            "expression": {
                                                                "kind": 134299649,
                                                                "text": "z",
                                                                "rawText": "z",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 176,
                                                                "end": 177
                                                            },
                                                            "flags": 96,
                                                            "transformFlags": 2,
                                                            "start": 167,
                                                            "end": 177
                                                        },
                                                        "initializer": null,
                                                        "flags": 32,
                                                        "transformFlags": 0,
                                                        "start": 167,
                                                        "end": 177
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 167,
                                                "end": 177
                                            },
                                            "flags": 48,
                                            "transformFlags": 0,
                                            "start": 166,
                                            "end": 178
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 166,
                                    "end": 178
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 165,
                                "end": 179
                            },
                            "optionalToken": null,
                            "type": null,
                            "right": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 181,
                                "end": 183
                            },
                            "flags": 32,
                            "transformFlags": 4096,
                            "start": 165,
                            "end": 183
                        }
                    ],
                    "trailingComma": false,
                    "flags": 35,
                    "transformFlags": 0,
                    "start": 165,
                    "end": 184
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 184,
                    "end": 187
                },
                "contents": {
                    "kind": 134299649,
                    "text": "b",
                    "rawText": "b",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 187,
                    "end": 189
                },
                "flags": 35,
                "transformFlags": 0,
                "start": 162,
                "end": 189
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 162,
            "end": 190
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [],
                    "trailingComma": false,
                    "flags": 35,
                    "transformFlags": 0,
                    "start": 193,
                    "end": 199
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 199,
                    "end": 202
                },
                "contents": {
                    "kind": 201392130,
                    "text": 42,
                    "rawText": "42",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 202,
                    "end": 205
                },
                "flags": 35,
                "transformFlags": 0,
                "start": 190,
                "end": 205
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 190,
            "end": 205
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 206,
            "end": 207
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [],
                    "trailingComma": false,
                    "flags": 35,
                    "transformFlags": 0,
                    "start": 210,
                    "end": 221
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 221,
                    "end": 224
                },
                "contents": {
                    "kind": 201392130,
                    "text": 42,
                    "rawText": "42",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 224,
                    "end": 227
                },
                "flags": 35,
                "transformFlags": 0,
                "start": 207,
                "end": 227
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 207,
            "end": 227
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 228,
            "end": 229
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "rawText": "",
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 232,
                    "end": 232
                },
                "flags": 229,
                "transformFlags": 0,
                "start": 33,
                "end": 232
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 229,
            "end": 232
        },
        {
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 80,
                "transformFlags": 0,
                "start": 232,
                "end": 234
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "rawText": "",
                "flags": 64,
                "transformFlags": 0,
                "start": 234,
                "end": 234
            },
            "consequent": {
                "kind": 120,
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "rawText": "",
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 235,
                    "end": 235
                },
                "flags": 16,
                "transformFlags": 4096,
                "start": 235,
                "end": 235
            },
            "elseKeyword": null,
            "alternate": null,
            "flags": 80,
            "transformFlags": 0,
            "start": 232,
            "end": 235
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "transformFlags": 0,
                "start": 240,
                "end": 240
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 238,
            "end": 241
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 241,
            "end": 242
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
                            "start": 245,
                            "end": 246
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 1024,
                    "start": 242,
                    "end": 247
                },
                "flags": 242,
                "transformFlags": 0,
                "start": 33,
                "end": 247
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 242,
            "end": 247
        },
        {
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 80,
                "transformFlags": 0,
                "start": 247,
                "end": 250
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "rawText": "",
                "flags": 64,
                "transformFlags": 0,
                "start": 250,
                "end": 250
            },
            "consequent": {
                "kind": 120,
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "rawText": "",
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 251,
                    "end": 251
                },
                "flags": 16,
                "transformFlags": 4096,
                "start": 251,
                "end": 251
            },
            "elseKeyword": null,
            "alternate": null,
            "flags": 80,
            "transformFlags": 0,
            "start": 247,
            "end": 251
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "transformFlags": 0,
                "start": 256,
                "end": 256
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 254,
            "end": 257
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 257,
            "end": 258
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
                            "text": "q",
                            "rawText": "q",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 261,
                            "end": 262
                        },
                        {
                            "kind": 198,
                            "left": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 263,
                                "end": 265
                            },
                            "operatorToken": {
                                "kind": 99634,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 265,
                                "end": 267
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "b",
                                "rawText": "b",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 267,
                                "end": 269
                            },
                            "flags": 96,
                            "transformFlags": 5120,
                            "start": 258,
                            "end": 269
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 1024,
                    "start": 258,
                    "end": 270
                },
                "flags": 258,
                "transformFlags": 0,
                "start": 33,
                "end": 270
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 258,
            "end": 270
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "transformFlags": 0,
                "start": 275,
                "end": 275
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 273,
            "end": 276
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 276,
            "end": 277
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
                            "text": "q",
                            "rawText": "q",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 280,
                            "end": 281
                        },
                        {
                            "kind": 198,
                            "left": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 282,
                                "end": 284
                            },
                            "operatorToken": {
                                "kind": 99634,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 284,
                                "end": 286
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "b",
                                "rawText": "b",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 286,
                                "end": 288
                            },
                            "flags": 96,
                            "transformFlags": 5120,
                            "start": 277,
                            "end": 288
                        },
                        {
                            "kind": 134299649,
                            "text": "c",
                            "rawText": "c",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 289,
                            "end": 291
                        }
                    ],
                    "trailingComma": false,
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 280,
                    "end": 292
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 292,
                    "end": 295
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 297,
                        "end": 297
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 295,
                    "end": 298
                },
                "flags": 33,
                "transformFlags": 0,
                "start": 277,
                "end": 298
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 277,
            "end": 299
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [],
                    "trailingComma": false,
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 302,
                    "end": 306
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 306,
                    "end": 309
                },
                "contents": {
                    "kind": 201392130,
                    "text": 42,
                    "rawText": "42",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 309,
                    "end": 312
                },
                "flags": 33,
                "transformFlags": 0,
                "start": 299,
                "end": 312
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 299,
            "end": 312
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 313,
            "end": 314
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 271,
                    "asyncKeyword": null,
                    "typeParameters": null,
                    "arrowPatameterList": {
                        "kind": 342,
                        "parameters": [],
                        "trailingComma": false,
                        "flags": 33,
                        "transformFlags": 0,
                        "start": 317,
                        "end": 317
                    },
                    "returnType": null,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 318,
                        "end": 321
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 323,
                            "end": 323
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 321,
                        "end": 324
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 314,
                    "end": 324
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 201392130,
                            "text": 0,
                            "rawText": "0",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 325,
                            "end": 326
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 325,
                    "end": 326
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 314,
                "end": 327
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 314,
            "end": 328
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 271,
                    "asyncKeyword": null,
                    "typeParameters": null,
                    "arrowPatameterList": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 97,
                        "transformFlags": 0,
                        "start": 328,
                        "end": 331
                    },
                    "returnType": null,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 331,
                        "end": 334
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 336,
                            "end": 336
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 334,
                        "end": 337
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 328,
                    "end": 337
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 201392130,
                            "text": 0,
                            "rawText": "0",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 338,
                            "end": 339
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 338,
                    "end": 339
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 328,
                "end": 340
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 328,
            "end": 341
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": {
                    "kind": 82031,
                    "flags": 65,
                    "transformFlags": 0,
                    "start": 341,
                    "end": 348
                },
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 348,
                    "end": 350
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 350,
                    "end": 353
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 355,
                        "end": 355
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 353,
                    "end": 356
                },
                "flags": 288,
                "transformFlags": 0,
                "start": 341,
                "end": 356
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 341,
            "end": 356
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 201392130,
                    "text": 0,
                    "rawText": "0",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 357,
                    "end": 358
                },
                "flags": 356,
                "transformFlags": 0,
                "start": 32,
                "end": 359
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 356,
            "end": 360
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "y",
                    "rawText": "y",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 360,
                    "end": 363
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 363,
                    "end": 365
                },
                "right": {
                    "kind": 271,
                    "asyncKeyword": null,
                    "typeParameters": null,
                    "arrowPatameterList": {
                        "kind": 342,
                        "parameters": [],
                        "trailingComma": false,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 367,
                        "end": 367
                    },
                    "returnType": null,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 368,
                        "end": 371
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 373,
                            "end": 373
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 371,
                        "end": 374
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 365,
                    "end": 374
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 360,
                "end": 374
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 360,
            "end": 374
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 201392130,
                    "text": 0,
                    "rawText": "0",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 375,
                    "end": 376
                },
                "flags": 374,
                "transformFlags": 0,
                "start": 32,
                "end": 377
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 374,
            "end": 378
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 131,
                    "expression": {
                        "kind": 271,
                        "asyncKeyword": {
                            "kind": 82031,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 381,
                            "end": 386
                        },
                        "typeParameters": null,
                        "arrowPatameterList": {
                            "kind": 342,
                            "parameters": [],
                            "trailingComma": false,
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 388,
                            "end": 388
                        },
                        "returnType": null,
                        "arrowToken": {
                            "kind": 10,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 389,
                            "end": 392
                        },
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "directives": [],
                                "statements": [],
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 394,
                                "end": 394
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 392,
                            "end": 395
                        },
                        "flags": 288,
                        "transformFlags": 0,
                        "start": 381,
                        "end": 395
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [
                            {
                                "kind": 201392130,
                                "text": 0,
                                "rawText": "0",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 396,
                                "end": 397
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 396,
                        "end": 397
                    },
                    "flags": 268435488,
                    "transformFlags": 1,
                    "start": 378,
                    "end": 398
                },
                "flags": 378,
                "transformFlags": 0,
                "start": 33,
                "end": 399
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 378,
            "end": 400
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 121,
                    "expression": {
                        "kind": 271,
                        "asyncKeyword": null,
                        "typeParameters": null,
                        "arrowPatameterList": {
                            "kind": 342,
                            "parameters": [],
                            "trailingComma": false,
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 404,
                            "end": 404
                        },
                        "returnType": null,
                        "arrowToken": {
                            "kind": 10,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 405,
                            "end": 408
                        },
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "directives": [],
                                "statements": [],
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 410,
                                "end": 410
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 408,
                            "end": 411
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 403,
                        "end": 411
                    },
                    "flags": 400,
                    "transformFlags": 0,
                    "start": 33,
                    "end": 411
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 201392130,
                            "text": 0,
                            "rawText": "0",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 412,
                            "end": 413
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 412,
                    "end": 413
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 400,
                "end": 414
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 400,
            "end": 414
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 415,
            "end": 416
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "y",
                    "rawText": "y",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 416,
                    "end": 419
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 419,
                    "end": 421
                },
                "right": {
                    "kind": 121,
                    "expression": {
                        "kind": 131,
                        "expression": {
                            "kind": 271,
                            "asyncKeyword": null,
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 423,
                                "end": 424
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 424,
                                "end": 427
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 429,
                                    "end": 429
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 427,
                                "end": 430
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 423,
                            "end": 430
                        },
                        "argumentList": {
                            "kind": 256,
                            "elements": [
                                {
                                    "kind": 201392130,
                                    "text": 0,
                                    "rawText": "0",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 431,
                                    "end": 432
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 431,
                            "end": 432
                        },
                        "flags": 268435488,
                        "transformFlags": 1,
                        "start": 421,
                        "end": 433
                    },
                    "flags": 421,
                    "transformFlags": 0,
                    "start": 32,
                    "end": 434
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 416,
                "end": 434
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 416,
            "end": 435
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 131,
                    "expression": {
                        "kind": 271,
                        "asyncKeyword": {
                            "kind": 82031,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 438,
                            "end": 443
                        },
                        "typeParameters": null,
                        "arrowPatameterList": {
                            "kind": 342,
                            "parameters": [],
                            "trailingComma": false,
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 445,
                            "end": 445
                        },
                        "returnType": null,
                        "arrowToken": {
                            "kind": 10,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 446,
                            "end": 449
                        },
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "directives": [],
                                "statements": [],
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 451,
                                "end": 451
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 449,
                            "end": 452
                        },
                        "flags": 288,
                        "transformFlags": 0,
                        "start": 438,
                        "end": 452
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [
                            {
                                "kind": 201392130,
                                "text": 0,
                                "rawText": "0",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 453,
                                "end": 454
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 453,
                        "end": 454
                    },
                    "flags": 268435488,
                    "transformFlags": 1,
                    "start": 435,
                    "end": 455
                },
                "flags": 435,
                "transformFlags": 0,
                "start": 33,
                "end": 456
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 435,
            "end": 457
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 131,
                    "expression": {
                        "kind": 271,
                        "asyncKeyword": {
                            "kind": 82031,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 460,
                            "end": 465
                        },
                        "typeParameters": null,
                        "arrowPatameterList": {
                            "kind": 342,
                            "parameters": [],
                            "trailingComma": false,
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 467,
                            "end": 467
                        },
                        "returnType": null,
                        "arrowToken": {
                            "kind": 10,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 468,
                            "end": 471
                        },
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "directives": [],
                                "statements": [],
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 473,
                                "end": 473
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 471,
                            "end": 474
                        },
                        "flags": 288,
                        "transformFlags": 0,
                        "start": 460,
                        "end": 474
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [
                            {
                                "kind": 201392130,
                                "text": 0,
                                "rawText": "0",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 475,
                                "end": 476
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 475,
                        "end": 476
                    },
                    "flags": 268435488,
                    "transformFlags": 1,
                    "start": 457,
                    "end": 477
                },
                "flags": 457,
                "transformFlags": 0,
                "start": 33,
                "end": 478
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 457,
            "end": 479
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 131,
                    "expression": {
                        "kind": 271,
                        "asyncKeyword": {
                            "kind": 82031,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 482,
                            "end": 487
                        },
                        "typeParameters": null,
                        "arrowPatameterList": {
                            "kind": 342,
                            "parameters": [],
                            "trailingComma": false,
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 489,
                            "end": 489
                        },
                        "returnType": null,
                        "arrowToken": {
                            "kind": 10,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 490,
                            "end": 493
                        },
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "directives": [],
                                "statements": [],
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 495,
                                "end": 495
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 493,
                            "end": 496
                        },
                        "flags": 288,
                        "transformFlags": 0,
                        "start": 482,
                        "end": 496
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [
                            {
                                "kind": 201392130,
                                "text": 0,
                                "rawText": "0",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 497,
                                "end": 498
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 497,
                        "end": 498
                    },
                    "flags": 268435488,
                    "transformFlags": 1,
                    "start": 479,
                    "end": 499
                },
                "flags": 479,
                "transformFlags": 0,
                "start": 33,
                "end": 500
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 479,
            "end": 501
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 131,
                    "expression": {
                        "kind": 271,
                        "asyncKeyword": {
                            "kind": 82031,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 504,
                            "end": 509
                        },
                        "typeParameters": null,
                        "arrowPatameterList": {
                            "kind": 342,
                            "parameters": [],
                            "trailingComma": false,
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 511,
                            "end": 511
                        },
                        "returnType": null,
                        "arrowToken": {
                            "kind": 10,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 512,
                            "end": 515
                        },
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "directives": [],
                                "statements": [],
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 517,
                                "end": 517
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 515,
                            "end": 518
                        },
                        "flags": 288,
                        "transformFlags": 0,
                        "start": 504,
                        "end": 518
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [
                            {
                                "kind": 201392130,
                                "text": 0,
                                "rawText": "0",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 519,
                                "end": 520
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 519,
                        "end": 520
                    },
                    "flags": 268435488,
                    "transformFlags": 1,
                    "start": 501,
                    "end": 521
                },
                "flags": 501,
                "transformFlags": 0,
                "start": 33,
                "end": 522
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 501,
            "end": 523
        }
    ],
    "isModule": false,
    "source": "({a:b[0]}) => x;\n\n([{x: y.z} = a]) => b;\n\n([{x: y.z}]) => b;\n\n([{x: y.z}] = a) => b;\n\n([{\"foo\": y.z} = a]) => b;\n\n({\"foo\": y.z} = a) => b;\n\n([{\"foo\": y.z}]) => b;\n\n([{\"foo\": y.z}] = a) => b;\n\n([a, b] => 42);\n\n([a, b] = [] => 42);\n\n(if) => {};\n\n(a, if) => {};\n\n(q, a + b) => {};\n\n(q, a + b, c) => {};\n\n(...a => 42);\n\n() => {}(0);\n\nx => {}(0);\n\nasync x => {}(0);\n\ny = () => {}(0);\n\n(async () => {}(0));\n\n(() => {}(0));\n\ny = (x => {}(0));\n\n(async () => {}(0));\n\n(async () => {}(0));\n\n(async () => {}(0));\n\n(async () => {}(0));",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 523
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The left hand side of the arrow is not destructible  - start: 10, end: 13
✖ The left hand side of the arrow is not destructible  - start: 34, end: 37
✖ The left hand side of the arrow is not destructible  - start: 54, end: 57
✖ The left hand side of the arrow is not destructible  - start: 78, end: 81
✖ The left hand side of the arrow is not destructible  - start: 106, end: 109
✖ The left hand side of the arrow is not destructible  - start: 132, end: 135
✖ The left hand side of the arrow is not destructible  - start: 156, end: 159
✖ The left hand side of the arrow is not destructible  - start: 184, end: 187
✖ Expected a ')' to match the '(' token here - start: 200, end: 202
✖ The left hand side of the arrow is not destructible  - start: 199, end: 202
✖ Expected a `;` - start: 205, end: 206
✖ Expected a ')' to match the '(' token here - start: 222, end: 224
✖ The left hand side of the arrow is not destructible  - start: 221, end: 224
✖ Expected a `;` - start: 227, end: 228
✖ Identifier expected - start: 232, end: 234
✖ Missing an opening parentheses - '( - start: 234, end: 235
✖ Identifier expected - start: 235, end: 238
✖ Expected a ')' to match the '(' token here - start: 248, end: 250
✖ Missing an opening parentheses - '( - start: 250, end: 251
✖ Identifier expected - start: 251, end: 254
✖ Expected a `;` - start: 270, end: 273
✖ The left hand side of the arrow is not destructible  - start: 292, end: 295
✖ Expected a ')' to match the '(' token here - start: 307, end: 309
✖ Expected a `;` - start: 312, end: 313
✖ Block body arrows can not be immediately invoked without a group - start: 324, end: 325
✖ Block body arrows can not be immediately invoked without a group - start: 337, end: 338
✖ Block body arrows can not be immediately invoked without a group - start: 356, end: 357
✖ Block body arrows can not be immediately invoked without a group - start: 374, end: 375
✖ Block body arrows can not be immediately invoked without a group - start: 395, end: 396
✖ Block body arrows can not be immediately invoked without a group - start: 411, end: 412
✖ Expected a `;` - start: 414, end: 415
✖ Block body arrows can not be immediately invoked without a group - start: 430, end: 431
✖ Block body arrows can not be immediately invoked without a group - start: 452, end: 453
✖ Block body arrows can not be immediately invoked without a group - start: 474, end: 475
✖ Block body arrows can not be immediately invoked without a group - start: 496, end: 497
✖ Block body arrows can not be immediately invoked without a group - start: 518, end: 519

```

