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
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 219,
                                    "left": {
                                        "kind": 130,
                                        "member": {
                                            "kind": 81921,
                                            "value": "b",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 4,
                                            "end": 5
                                        },
                                        "expression": {
                                            "kind": 81921,
                                            "value": 0,
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 6,
                                            "end": 7
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 2,
                                        "end": 8
                                    },
                                    "right": {
                                        "kind": 81921,
                                        "value": "a",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 2,
                                        "end": 3
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 2,
                                    "end": 8
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "autofix": 0,
                            "flags": 0,
                            "start": 2,
                            "end": 8
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 1,
                        "end": 9
                    }
                ],
                "asyncToken": false,
                "returnType": null,
                "contents": {
                    "kind": 81921,
                    "value": "x",
                    "autofix": 0,
                    "flags": 768,
                    "start": 13,
                    "end": 15
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 15
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 16
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 119,
                        "elementList": {
                            "kind": 270,
                            "elements": [
                                {
                                    "kind": 125,
                                    "left": {
                                        "kind": 220,
                                        "propertyList": {
                                            "kind": 218,
                                            "properties": [
                                                {
                                                    "kind": 219,
                                                    "left": {
                                                        "kind": 129,
                                                        "member": {
                                                            "kind": 81921,
                                                            "value": "y",
                                                            "autofix": 0,
                                                            "flags": 768,
                                                            "start": 23,
                                                            "end": 25
                                                        },
                                                        "expression": {
                                                            "kind": 81921,
                                                            "value": "z",
                                                            "autofix": 0,
                                                            "flags": 768,
                                                            "start": 26,
                                                            "end": 27
                                                        },
                                                        "autofix": 0,
                                                        "flags": 256,
                                                        "start": 21,
                                                        "end": 27
                                                    },
                                                    "right": {
                                                        "kind": 81921,
                                                        "value": "x",
                                                        "autofix": 0,
                                                        "flags": 768,
                                                        "start": 21,
                                                        "end": 22
                                                    },
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 21,
                                                    "end": 27
                                                }
                                            ],
                                            "trailingComma": false,
                                            "multiline": false,
                                            "autofix": 0,
                                            "flags": 0,
                                            "start": 21,
                                            "end": 27
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 20,
                                        "end": 28
                                    },
                                    "operatorToken": {
                                        "kind": 4125,
                                        "autofix": 0,
                                        "flags": 0,
                                        "start": 28,
                                        "end": 30
                                    },
                                    "right": {
                                        "kind": 81921,
                                        "value": "a",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 30,
                                        "end": 32
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 20,
                                    "end": 32
                                }
                            ],
                            "trailingComma": false,
                            "autofix": 0,
                            "flags": 256,
                            "start": 20,
                            "end": 32
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 19,
                        "end": 33
                    }
                ],
                "asyncToken": false,
                "returnType": null,
                "contents": {
                    "kind": 81921,
                    "value": "b",
                    "autofix": 0,
                    "flags": 768,
                    "start": 37,
                    "end": 39
                },
                "autofix": 0,
                "flags": 256,
                "start": 16,
                "end": 39
            },
            "autofix": 0,
            "flags": 128,
            "start": 16,
            "end": 40
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 119,
                        "elementList": {
                            "kind": 270,
                            "elements": [
                                {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 129,
                                                    "member": {
                                                        "kind": 81921,
                                                        "value": "y",
                                                        "autofix": 0,
                                                        "flags": 768,
                                                        "start": 46,
                                                        "end": 48
                                                    },
                                                    "expression": {
                                                        "kind": 81921,
                                                        "value": "z",
                                                        "autofix": 0,
                                                        "flags": 768,
                                                        "start": 49,
                                                        "end": 50
                                                    },
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 44,
                                                    "end": 50
                                                },
                                                "right": {
                                                    "kind": 81921,
                                                    "value": "x",
                                                    "autofix": 0,
                                                    "flags": 768,
                                                    "start": 44,
                                                    "end": 45
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 44,
                                                "end": 50
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": false,
                                        "autofix": 0,
                                        "flags": 0,
                                        "start": 44,
                                        "end": 50
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 43,
                                    "end": 51
                                }
                            ],
                            "trailingComma": false,
                            "autofix": 0,
                            "flags": 256,
                            "start": 43,
                            "end": 51
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 42,
                        "end": 52
                    }
                ],
                "asyncToken": false,
                "returnType": null,
                "contents": {
                    "kind": 81921,
                    "value": "b",
                    "autofix": 0,
                    "flags": 768,
                    "start": 56,
                    "end": 58
                },
                "autofix": 0,
                "flags": 256,
                "start": 40,
                "end": 58
            },
            "autofix": 0,
            "flags": 128,
            "start": 40,
            "end": 59
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 125,
                        "left": {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 220,
                                        "propertyList": {
                                            "kind": 218,
                                            "properties": [
                                                {
                                                    "kind": 219,
                                                    "left": {
                                                        "kind": 129,
                                                        "member": {
                                                            "kind": 81921,
                                                            "value": "y",
                                                            "autofix": 0,
                                                            "flags": 768,
                                                            "start": 65,
                                                            "end": 67
                                                        },
                                                        "expression": {
                                                            "kind": 81921,
                                                            "value": "z",
                                                            "autofix": 0,
                                                            "flags": 768,
                                                            "start": 68,
                                                            "end": 69
                                                        },
                                                        "autofix": 0,
                                                        "flags": 256,
                                                        "start": 63,
                                                        "end": 69
                                                    },
                                                    "right": {
                                                        "kind": 81921,
                                                        "value": "x",
                                                        "autofix": 0,
                                                        "flags": 768,
                                                        "start": 63,
                                                        "end": 64
                                                    },
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 63,
                                                    "end": 69
                                                }
                                            ],
                                            "trailingComma": false,
                                            "multiline": false,
                                            "autofix": 0,
                                            "flags": 0,
                                            "start": 63,
                                            "end": 69
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 62,
                                        "end": 70
                                    }
                                ],
                                "trailingComma": false,
                                "autofix": 0,
                                "flags": 256,
                                "start": 62,
                                "end": 70
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 61,
                            "end": 71
                        },
                        "operatorToken": {
                            "kind": 4125,
                            "autofix": 0,
                            "flags": 0,
                            "start": 71,
                            "end": 73
                        },
                        "right": {
                            "kind": 81921,
                            "value": "a",
                            "autofix": 0,
                            "flags": 768,
                            "start": 73,
                            "end": 75
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 61,
                        "end": 75
                    }
                ],
                "asyncToken": false,
                "returnType": null,
                "contents": {
                    "kind": 81921,
                    "value": "b",
                    "autofix": 0,
                    "flags": 768,
                    "start": 79,
                    "end": 81
                },
                "autofix": 0,
                "flags": 256,
                "start": 59,
                "end": 81
            },
            "autofix": 0,
            "flags": 128,
            "start": 59,
            "end": 82
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 119,
                        "elementList": {
                            "kind": 270,
                            "elements": [
                                {
                                    "kind": 125,
                                    "left": {
                                        "kind": 220,
                                        "propertyList": {
                                            "kind": 218,
                                            "properties": [
                                                {
                                                    "kind": 219,
                                                    "left": {
                                                        "kind": 129,
                                                        "member": {
                                                            "kind": 81921,
                                                            "value": "y",
                                                            "autofix": 0,
                                                            "flags": 768,
                                                            "start": 92,
                                                            "end": 94
                                                        },
                                                        "expression": {
                                                            "kind": 81921,
                                                            "value": "z",
                                                            "autofix": 0,
                                                            "flags": 768,
                                                            "start": 95,
                                                            "end": 96
                                                        },
                                                        "autofix": 0,
                                                        "flags": 256,
                                                        "start": 86,
                                                        "end": 96
                                                    },
                                                    "right": {
                                                        "kind": 67174403,
                                                        "value": "foo",
                                                        "autofix": 0,
                                                        "flags": 768,
                                                        "start": 86,
                                                        "end": 91
                                                    },
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 86,
                                                    "end": 96
                                                }
                                            ],
                                            "trailingComma": false,
                                            "multiline": false,
                                            "autofix": 0,
                                            "flags": 0,
                                            "start": 86,
                                            "end": 96
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 85,
                                        "end": 97
                                    },
                                    "operatorToken": {
                                        "kind": 4125,
                                        "autofix": 0,
                                        "flags": 0,
                                        "start": 97,
                                        "end": 99
                                    },
                                    "right": {
                                        "kind": 81921,
                                        "value": "a",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 99,
                                        "end": 101
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 85,
                                    "end": 101
                                }
                            ],
                            "trailingComma": false,
                            "autofix": 0,
                            "flags": 256,
                            "start": 85,
                            "end": 101
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 84,
                        "end": 102
                    }
                ],
                "asyncToken": false,
                "returnType": null,
                "contents": {
                    "kind": 81921,
                    "value": "b",
                    "autofix": 0,
                    "flags": 768,
                    "start": 106,
                    "end": 108
                },
                "autofix": 0,
                "flags": 256,
                "start": 82,
                "end": 108
            },
            "autofix": 0,
            "flags": 128,
            "start": 82,
            "end": 109
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 125,
                        "left": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 219,
                                        "left": {
                                            "kind": 129,
                                            "member": {
                                                "kind": 81921,
                                                "value": "y",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 118,
                                                "end": 120
                                            },
                                            "expression": {
                                                "kind": 81921,
                                                "value": "z",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 121,
                                                "end": 122
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 112,
                                            "end": 122
                                        },
                                        "right": {
                                            "kind": 67174403,
                                            "value": "foo",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 112,
                                            "end": 117
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 112,
                                        "end": 122
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "autofix": 0,
                                "flags": 0,
                                "start": 112,
                                "end": 122
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 111,
                            "end": 123
                        },
                        "operatorToken": {
                            "kind": 4125,
                            "autofix": 0,
                            "flags": 0,
                            "start": 123,
                            "end": 125
                        },
                        "right": {
                            "kind": 81921,
                            "value": "a",
                            "autofix": 0,
                            "flags": 768,
                            "start": 125,
                            "end": 127
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 111,
                        "end": 127
                    }
                ],
                "asyncToken": false,
                "returnType": null,
                "contents": {
                    "kind": 81921,
                    "value": "b",
                    "autofix": 0,
                    "flags": 768,
                    "start": 131,
                    "end": 133
                },
                "autofix": 0,
                "flags": 256,
                "start": 109,
                "end": 133
            },
            "autofix": 0,
            "flags": 128,
            "start": 109,
            "end": 134
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 119,
                        "elementList": {
                            "kind": 270,
                            "elements": [
                                {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 129,
                                                    "member": {
                                                        "kind": 81921,
                                                        "value": "y",
                                                        "autofix": 0,
                                                        "flags": 768,
                                                        "start": 144,
                                                        "end": 146
                                                    },
                                                    "expression": {
                                                        "kind": 81921,
                                                        "value": "z",
                                                        "autofix": 0,
                                                        "flags": 768,
                                                        "start": 147,
                                                        "end": 148
                                                    },
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 138,
                                                    "end": 148
                                                },
                                                "right": {
                                                    "kind": 67174403,
                                                    "value": "foo",
                                                    "autofix": 0,
                                                    "flags": 768,
                                                    "start": 138,
                                                    "end": 143
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 138,
                                                "end": 148
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": false,
                                        "autofix": 0,
                                        "flags": 0,
                                        "start": 138,
                                        "end": 148
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 137,
                                    "end": 149
                                }
                            ],
                            "trailingComma": false,
                            "autofix": 0,
                            "flags": 256,
                            "start": 137,
                            "end": 149
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 136,
                        "end": 150
                    }
                ],
                "asyncToken": false,
                "returnType": null,
                "contents": {
                    "kind": 81921,
                    "value": "b",
                    "autofix": 0,
                    "flags": 768,
                    "start": 154,
                    "end": 156
                },
                "autofix": 0,
                "flags": 256,
                "start": 134,
                "end": 156
            },
            "autofix": 0,
            "flags": 128,
            "start": 134,
            "end": 157
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 125,
                        "left": {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 220,
                                        "propertyList": {
                                            "kind": 218,
                                            "properties": [
                                                {
                                                    "kind": 219,
                                                    "left": {
                                                        "kind": 129,
                                                        "member": {
                                                            "kind": 81921,
                                                            "value": "y",
                                                            "autofix": 0,
                                                            "flags": 768,
                                                            "start": 167,
                                                            "end": 169
                                                        },
                                                        "expression": {
                                                            "kind": 81921,
                                                            "value": "z",
                                                            "autofix": 0,
                                                            "flags": 768,
                                                            "start": 170,
                                                            "end": 171
                                                        },
                                                        "autofix": 0,
                                                        "flags": 256,
                                                        "start": 161,
                                                        "end": 171
                                                    },
                                                    "right": {
                                                        "kind": 67174403,
                                                        "value": "foo",
                                                        "autofix": 0,
                                                        "flags": 768,
                                                        "start": 161,
                                                        "end": 166
                                                    },
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 161,
                                                    "end": 171
                                                }
                                            ],
                                            "trailingComma": false,
                                            "multiline": false,
                                            "autofix": 0,
                                            "flags": 0,
                                            "start": 161,
                                            "end": 171
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 160,
                                        "end": 172
                                    }
                                ],
                                "trailingComma": false,
                                "autofix": 0,
                                "flags": 256,
                                "start": 160,
                                "end": 172
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 159,
                            "end": 173
                        },
                        "operatorToken": {
                            "kind": 4125,
                            "autofix": 0,
                            "flags": 0,
                            "start": 173,
                            "end": 175
                        },
                        "right": {
                            "kind": 81921,
                            "value": "a",
                            "autofix": 0,
                            "flags": 768,
                            "start": 175,
                            "end": 177
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 159,
                        "end": 177
                    }
                ],
                "asyncToken": false,
                "returnType": null,
                "contents": {
                    "kind": 81921,
                    "value": "b",
                    "autofix": 0,
                    "flags": 768,
                    "start": 181,
                    "end": 183
                },
                "autofix": 0,
                "flags": 256,
                "start": 157,
                "end": 183
            },
            "autofix": 0,
            "flags": 128,
            "start": 157,
            "end": 184
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "typeParameters": null,
                "parameters": [
                    null
                ],
                "asyncToken": false,
                "returnType": null,
                "contents": {
                    "kind": 81921,
                    "value": 42,
                    "autofix": 0,
                    "flags": 768,
                    "start": 195,
                    "end": 198
                },
                "autofix": 0,
                "flags": 256,
                "start": 184,
                "end": 198
            },
            "autofix": 0,
            "flags": 128,
            "start": 184,
            "end": 198
        },
        {
            "kind": 168,
            "autofix": 0,
            "flags": 128,
            "start": 199,
            "end": 200
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "typeParameters": null,
                "parameters": [
                    null
                ],
                "asyncToken": false,
                "returnType": null,
                "contents": {
                    "kind": 81921,
                    "value": 42,
                    "autofix": 0,
                    "flags": 768,
                    "start": 216,
                    "end": 219
                },
                "autofix": 0,
                "flags": 256,
                "start": 200,
                "end": 219
            },
            "autofix": 0,
            "flags": 128,
            "start": 200,
            "end": 219
        },
        {
            "kind": 168,
            "autofix": 0,
            "flags": 128,
            "start": 220,
            "end": 221
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 253,
                    "text": "",
                    "autofix": 0,
                    "flags": 12,
                    "start": 223,
                    "end": 223
                },
                "autofix": 0,
                "flags": 256,
                "start": 221,
                "end": 223
            },
            "autofix": 0,
            "flags": 128,
            "start": 221,
            "end": 223
        },
        {
            "kind": 164,
            "expression": {
                "kind": 253,
                "text": "",
                "autofix": 0,
                "flags": 12,
                "start": 225,
                "end": 225
            },
            "consequent": {
                "kind": 120,
                "expression": {
                    "kind": 253,
                    "text": "",
                    "autofix": 0,
                    "flags": 12,
                    "start": 226,
                    "end": 226
                },
                "autofix": 0,
                "flags": 128,
                "start": 226,
                "end": 226
            },
            "alternate": null,
            "autofix": 0,
            "flags": 128,
            "start": 223,
            "end": 226
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "multiLine": false,
                "autofix": 0,
                "flags": 128,
                "start": 231,
                "end": 231
            },
            "autofix": 0,
            "flags": 128,
            "start": 229,
            "end": 232
        },
        {
            "kind": 168,
            "autofix": 0,
            "flags": 128,
            "start": 232,
            "end": 233
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 132,
                    "expressions": [
                        {
                            "kind": 81921,
                            "value": "a",
                            "autofix": 0,
                            "flags": 768,
                            "start": 235,
                            "end": 236
                        }
                    ],
                    "autofix": 0,
                    "flags": 256,
                    "start": 233,
                    "end": 237
                },
                "autofix": 0,
                "flags": 256,
                "start": 233,
                "end": 237
            },
            "autofix": 0,
            "flags": 128,
            "start": 233,
            "end": 237
        },
        {
            "kind": 164,
            "expression": {
                "kind": 253,
                "text": "",
                "autofix": 0,
                "flags": 12,
                "start": 240,
                "end": 240
            },
            "consequent": {
                "kind": 120,
                "expression": {
                    "kind": 253,
                    "text": "",
                    "autofix": 0,
                    "flags": 12,
                    "start": 241,
                    "end": 241
                },
                "autofix": 0,
                "flags": 128,
                "start": 241,
                "end": 241
            },
            "alternate": null,
            "autofix": 0,
            "flags": 128,
            "start": 237,
            "end": 241
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "multiLine": false,
                "autofix": 0,
                "flags": 128,
                "start": 246,
                "end": 246
            },
            "autofix": 0,
            "flags": 128,
            "start": 244,
            "end": 247
        },
        {
            "kind": 168,
            "autofix": 0,
            "flags": 128,
            "start": 247,
            "end": 248
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 132,
                    "expressions": [
                        {
                            "kind": 81921,
                            "value": "q",
                            "autofix": 0,
                            "flags": 768,
                            "start": 250,
                            "end": 251
                        },
                        {
                            "kind": 198,
                            "left": {
                                "kind": 81921,
                                "value": "a",
                                "autofix": 0,
                                "flags": 768,
                                "start": 252,
                                "end": 254
                            },
                            "operatorToken": {
                                "kind": 34098,
                                "autofix": 0,
                                "flags": 0,
                                "start": 254,
                                "end": 256
                            },
                            "right": {
                                "kind": 81921,
                                "value": "b",
                                "autofix": 0,
                                "flags": 768,
                                "start": 256,
                                "end": 258
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 248,
                            "end": 258
                        }
                    ],
                    "autofix": 0,
                    "flags": 256,
                    "start": 248,
                    "end": 259
                },
                "autofix": 0,
                "flags": 256,
                "start": 248,
                "end": 259
            },
            "autofix": 0,
            "flags": 128,
            "start": 248,
            "end": 259
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "multiLine": false,
                "autofix": 0,
                "flags": 128,
                "start": 264,
                "end": 264
            },
            "autofix": 0,
            "flags": 128,
            "start": 262,
            "end": 265
        },
        {
            "kind": 168,
            "autofix": 0,
            "flags": 128,
            "start": 265,
            "end": 266
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "typeParameters": null,
                "parameters": [
                    [
                        {
                            "kind": 81921,
                            "value": "q",
                            "autofix": 0,
                            "flags": 768,
                            "start": 268,
                            "end": 269
                        },
                        {
                            "kind": 198,
                            "left": {
                                "kind": 81921,
                                "value": "a",
                                "autofix": 0,
                                "flags": 768,
                                "start": 270,
                                "end": 272
                            },
                            "operatorToken": {
                                "kind": 34098,
                                "autofix": 0,
                                "flags": 0,
                                "start": 272,
                                "end": 274
                            },
                            "right": {
                                "kind": 81921,
                                "value": "b",
                                "autofix": 0,
                                "flags": 768,
                                "start": 274,
                                "end": 276
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 266,
                            "end": 276
                        },
                        {
                            "kind": 81921,
                            "value": "c",
                            "autofix": 0,
                            "flags": 768,
                            "start": 277,
                            "end": 279
                        }
                    ]
                ],
                "asyncToken": false,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "statements": [],
                        "multiline": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 285,
                        "end": 285
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 283,
                    "end": 286
                },
                "autofix": 0,
                "flags": 256,
                "start": 266,
                "end": 286
            },
            "autofix": 0,
            "flags": 128,
            "start": 266,
            "end": 287
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "typeParameters": null,
                "parameters": [
                    null
                ],
                "asyncToken": false,
                "returnType": null,
                "contents": {
                    "kind": 81921,
                    "value": 42,
                    "autofix": 0,
                    "flags": 768,
                    "start": 296,
                    "end": 299
                },
                "autofix": 0,
                "flags": 256,
                "start": 287,
                "end": 299
            },
            "autofix": 0,
            "flags": 128,
            "start": 287,
            "end": 299
        },
        {
            "kind": 168,
            "autofix": 0,
            "flags": 128,
            "start": 300,
            "end": 301
        }
    ],
    "isModule": false,
    "text": "({a:b[0]}) => x;\n\n([{x: y.z} = a]) => b;\n([{x: y.z}]) => b;\n([{x: y.z}] = a) => b;\n([{\"foo\": y.z} = a]) => b;\n({\"foo\": y.z} = a) => b;\n([{\"foo\": y.z}]) => b;\n([{\"foo\": y.z}] = a) => b;\n([a, b] => 42);\n([a, b] = [] => 42);\n(if) => {};\n(a, if) => {};\n(q, a + b) => {};\n(q, a + b, c) => {};\n(...a => 42);",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 31,
            "error": "The left hand side of the arrow is not destructible ",
            "start": 10,
            "end": 13
        },
        {
            "kind": 2,
            "source": 2,
            "code": 31,
            "error": "The left hand side of the arrow is not destructible ",
            "start": 34,
            "end": 37
        },
        {
            "kind": 2,
            "source": 2,
            "code": 31,
            "error": "The left hand side of the arrow is not destructible ",
            "start": 53,
            "end": 56
        },
        {
            "kind": 2,
            "source": 2,
            "code": 31,
            "error": "The left hand side of the arrow is not destructible ",
            "start": 76,
            "end": 79
        },
        {
            "kind": 2,
            "source": 2,
            "code": 31,
            "error": "The left hand side of the arrow is not destructible ",
            "start": 103,
            "end": 106
        },
        {
            "kind": 2,
            "source": 2,
            "code": 31,
            "error": "The left hand side of the arrow is not destructible ",
            "start": 128,
            "end": 131
        },
        {
            "kind": 2,
            "source": 2,
            "code": 31,
            "error": "The left hand side of the arrow is not destructible ",
            "start": 151,
            "end": 154
        },
        {
            "kind": 2,
            "source": 2,
            "code": 31,
            "error": "The left hand side of the arrow is not destructible ",
            "start": 178,
            "end": 181
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 192,
            "end": 195
        },
        {
            "kind": 2,
            "source": 2,
            "code": 31,
            "error": "The left hand side of the arrow is not destructible ",
            "start": 192,
            "end": 195
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 198,
            "end": 199
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 198,
            "end": 199
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 213,
            "end": 216
        },
        {
            "kind": 2,
            "source": 2,
            "code": 31,
            "error": "The left hand side of the arrow is not destructible ",
            "start": 213,
            "end": 216
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 219,
            "end": 220
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 219,
            "end": 220
        },
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 223,
            "end": 225
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 223,
            "end": 225
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 223,
            "end": 225
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 225,
            "end": 226
        },
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 225,
            "end": 226
        },
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 226,
            "end": 229
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 226,
            "end": 229
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 226,
            "end": 229
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 237,
            "end": 240
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 237,
            "end": 240
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 240,
            "end": 241
        },
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 240,
            "end": 241
        },
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 241,
            "end": 244
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 241,
            "end": 244
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 241,
            "end": 244
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 259,
            "end": 262
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 259,
            "end": 262
        },
        {
            "kind": 2,
            "source": 2,
            "code": 31,
            "error": "The left hand side of the arrow is not destructible ",
            "start": 280,
            "end": 283
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 293,
            "end": 296
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 299,
            "end": 300
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 299,
            "end": 300
        }
    ],
    "start": 0,
    "end": 301
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

