# Kataw parser test case

## Input

`````js
(((((({x:foo().x, y:foo().y} = {x:201, y:301}))))));

(((((({x:foo().x, y:foo().y} = {x:201, y:301}))))), (((((({x:foo().x, y:foo().y} = {x:201, y:301})))))));
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
                    "kind": 121,
                    "expression": {
                        "kind": 121,
                        "expression": {
                            "kind": 121,
                            "expression": {
                                "kind": 121,
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
                                                            "kind": 134299649,
                                                            "text": "x",
                                                            "rawText": "x",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 7,
                                                            "end": 8
                                                        },
                                                        "right": {
                                                            "kind": 129,
                                                            "member": {
                                                                "kind": 131,
                                                                "expression": {
                                                                    "kind": 134299649,
                                                                    "text": "foo",
                                                                    "rawText": "foo",
                                                                    "flags": 96,
                                                                    "transformFlags": 0,
                                                                    "start": 9,
                                                                    "end": 12
                                                                },
                                                                "argumentList": {
                                                                    "kind": 256,
                                                                    "elements": [],
                                                                    "trailingComma": false,
                                                                    "flags": 32,
                                                                    "transformFlags": 0,
                                                                    "start": 13,
                                                                    "end": 13
                                                                },
                                                                "flags": 268435488,
                                                                "transformFlags": 1,
                                                                "start": 7,
                                                                "end": 14
                                                            },
                                                            "expression": {
                                                                "kind": 134299649,
                                                                "text": "x",
                                                                "rawText": "x",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 15,
                                                                "end": 16
                                                            },
                                                            "flags": 268435488,
                                                            "transformFlags": 2,
                                                            "start": 7,
                                                            "end": 16
                                                        },
                                                        "flags": 32,
                                                        "transformFlags": 128,
                                                        "start": 7,
                                                        "end": 16
                                                    },
                                                    {
                                                        "kind": 219,
                                                        "asteriskToken": null,
                                                        "left": {
                                                            "kind": 134299649,
                                                            "text": "y",
                                                            "rawText": "y",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 17,
                                                            "end": 19
                                                        },
                                                        "right": {
                                                            "kind": 129,
                                                            "member": {
                                                                "kind": 131,
                                                                "expression": {
                                                                    "kind": 134299649,
                                                                    "text": "foo",
                                                                    "rawText": "foo",
                                                                    "flags": 96,
                                                                    "transformFlags": 0,
                                                                    "start": 20,
                                                                    "end": 23
                                                                },
                                                                "argumentList": {
                                                                    "kind": 256,
                                                                    "elements": [],
                                                                    "trailingComma": false,
                                                                    "flags": 32,
                                                                    "transformFlags": 0,
                                                                    "start": 24,
                                                                    "end": 24
                                                                },
                                                                "flags": 268435488,
                                                                "transformFlags": 1,
                                                                "start": 17,
                                                                "end": 25
                                                            },
                                                            "expression": {
                                                                "kind": 134299649,
                                                                "text": "y",
                                                                "rawText": "y",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 26,
                                                                "end": 27
                                                            },
                                                            "flags": 268435488,
                                                            "transformFlags": 2,
                                                            "start": 17,
                                                            "end": 27
                                                        },
                                                        "flags": 32,
                                                        "transformFlags": 128,
                                                        "start": 17,
                                                        "end": 27
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 16,
                                                "transformFlags": 0,
                                                "start": 7,
                                                "end": 27
                                            },
                                            "flags": 48,
                                            "transformFlags": 8,
                                            "start": 6,
                                            "end": 28
                                        },
                                        "operatorToken": {
                                            "kind": 4125,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 28,
                                            "end": 30
                                        },
                                        "right": {
                                            "kind": 220,
                                            "propertyList": {
                                                "kind": 218,
                                                "properties": [
                                                    {
                                                        "kind": 219,
                                                        "asteriskToken": null,
                                                        "left": {
                                                            "kind": 134299649,
                                                            "text": "x",
                                                            "rawText": "x",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 32,
                                                            "end": 33
                                                        },
                                                        "right": {
                                                            "kind": 201392130,
                                                            "text": 201,
                                                            "rawText": "201",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 34,
                                                            "end": 37
                                                        },
                                                        "flags": 32,
                                                        "transformFlags": 128,
                                                        "start": 32,
                                                        "end": 37
                                                    },
                                                    {
                                                        "kind": 219,
                                                        "asteriskToken": null,
                                                        "left": {
                                                            "kind": 134299649,
                                                            "text": "y",
                                                            "rawText": "y",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 38,
                                                            "end": 40
                                                        },
                                                        "right": {
                                                            "kind": 201392130,
                                                            "text": 301,
                                                            "rawText": "301",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 41,
                                                            "end": 44
                                                        },
                                                        "flags": 32,
                                                        "transformFlags": 128,
                                                        "start": 38,
                                                        "end": 44
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 16,
                                                "transformFlags": 0,
                                                "start": 32,
                                                "end": 44
                                            },
                                            "flags": 48,
                                            "transformFlags": 8,
                                            "start": 30,
                                            "end": 45
                                        },
                                        "flags": 32,
                                        "transformFlags": 128,
                                        "start": 6,
                                        "end": 45
                                    },
                                    "flags": 5,
                                    "transformFlags": 0,
                                    "start": 34,
                                    "end": 46
                                },
                                "flags": 4,
                                "transformFlags": 0,
                                "start": 32,
                                "end": 47
                            },
                            "flags": 3,
                            "transformFlags": 0,
                            "start": 32,
                            "end": 48
                        },
                        "flags": 2,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 49
                    },
                    "flags": 1,
                    "transformFlags": 0,
                    "start": 32,
                    "end": 50
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 32,
                "end": 51
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 52
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 132,
                    "expressions": [
                        {
                            "kind": 121,
                            "expression": {
                                "kind": 121,
                                "expression": {
                                    "kind": 121,
                                    "expression": {
                                        "kind": 121,
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
                                                                    "kind": 134299649,
                                                                    "text": "x",
                                                                    "rawText": "x",
                                                                    "flags": 96,
                                                                    "transformFlags": 0,
                                                                    "start": 61,
                                                                    "end": 62
                                                                },
                                                                "right": {
                                                                    "kind": 129,
                                                                    "member": {
                                                                        "kind": 131,
                                                                        "expression": {
                                                                            "kind": 134299649,
                                                                            "text": "foo",
                                                                            "rawText": "foo",
                                                                            "flags": 96,
                                                                            "transformFlags": 0,
                                                                            "start": 63,
                                                                            "end": 66
                                                                        },
                                                                        "argumentList": {
                                                                            "kind": 256,
                                                                            "elements": [],
                                                                            "trailingComma": false,
                                                                            "flags": 32,
                                                                            "transformFlags": 0,
                                                                            "start": 67,
                                                                            "end": 67
                                                                        },
                                                                        "flags": 268435488,
                                                                        "transformFlags": 1,
                                                                        "start": 61,
                                                                        "end": 68
                                                                    },
                                                                    "expression": {
                                                                        "kind": 134299649,
                                                                        "text": "x",
                                                                        "rawText": "x",
                                                                        "flags": 96,
                                                                        "transformFlags": 0,
                                                                        "start": 69,
                                                                        "end": 70
                                                                    },
                                                                    "flags": 268435488,
                                                                    "transformFlags": 2,
                                                                    "start": 61,
                                                                    "end": 70
                                                                },
                                                                "flags": 32,
                                                                "transformFlags": 128,
                                                                "start": 61,
                                                                "end": 70
                                                            },
                                                            {
                                                                "kind": 219,
                                                                "asteriskToken": null,
                                                                "left": {
                                                                    "kind": 134299649,
                                                                    "text": "y",
                                                                    "rawText": "y",
                                                                    "flags": 96,
                                                                    "transformFlags": 0,
                                                                    "start": 71,
                                                                    "end": 73
                                                                },
                                                                "right": {
                                                                    "kind": 129,
                                                                    "member": {
                                                                        "kind": 131,
                                                                        "expression": {
                                                                            "kind": 134299649,
                                                                            "text": "foo",
                                                                            "rawText": "foo",
                                                                            "flags": 96,
                                                                            "transformFlags": 0,
                                                                            "start": 74,
                                                                            "end": 77
                                                                        },
                                                                        "argumentList": {
                                                                            "kind": 256,
                                                                            "elements": [],
                                                                            "trailingComma": false,
                                                                            "flags": 32,
                                                                            "transformFlags": 0,
                                                                            "start": 78,
                                                                            "end": 78
                                                                        },
                                                                        "flags": 268435488,
                                                                        "transformFlags": 1,
                                                                        "start": 71,
                                                                        "end": 79
                                                                    },
                                                                    "expression": {
                                                                        "kind": 134299649,
                                                                        "text": "y",
                                                                        "rawText": "y",
                                                                        "flags": 96,
                                                                        "transformFlags": 0,
                                                                        "start": 80,
                                                                        "end": 81
                                                                    },
                                                                    "flags": 268435488,
                                                                    "transformFlags": 2,
                                                                    "start": 71,
                                                                    "end": 81
                                                                },
                                                                "flags": 32,
                                                                "transformFlags": 128,
                                                                "start": 71,
                                                                "end": 81
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 16,
                                                        "transformFlags": 0,
                                                        "start": 61,
                                                        "end": 81
                                                    },
                                                    "flags": 48,
                                                    "transformFlags": 8,
                                                    "start": 60,
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
                                                    "kind": 220,
                                                    "propertyList": {
                                                        "kind": 218,
                                                        "properties": [
                                                            {
                                                                "kind": 219,
                                                                "asteriskToken": null,
                                                                "left": {
                                                                    "kind": 134299649,
                                                                    "text": "x",
                                                                    "rawText": "x",
                                                                    "flags": 96,
                                                                    "transformFlags": 0,
                                                                    "start": 86,
                                                                    "end": 87
                                                                },
                                                                "right": {
                                                                    "kind": 201392130,
                                                                    "text": 201,
                                                                    "rawText": "201",
                                                                    "flags": 96,
                                                                    "transformFlags": 0,
                                                                    "start": 88,
                                                                    "end": 91
                                                                },
                                                                "flags": 32,
                                                                "transformFlags": 128,
                                                                "start": 86,
                                                                "end": 91
                                                            },
                                                            {
                                                                "kind": 219,
                                                                "asteriskToken": null,
                                                                "left": {
                                                                    "kind": 134299649,
                                                                    "text": "y",
                                                                    "rawText": "y",
                                                                    "flags": 96,
                                                                    "transformFlags": 0,
                                                                    "start": 92,
                                                                    "end": 94
                                                                },
                                                                "right": {
                                                                    "kind": 201392130,
                                                                    "text": 301,
                                                                    "rawText": "301",
                                                                    "flags": 96,
                                                                    "transformFlags": 0,
                                                                    "start": 95,
                                                                    "end": 98
                                                                },
                                                                "flags": 32,
                                                                "transformFlags": 128,
                                                                "start": 92,
                                                                "end": 98
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 16,
                                                        "transformFlags": 0,
                                                        "start": 86,
                                                        "end": 98
                                                    },
                                                    "flags": 48,
                                                    "transformFlags": 8,
                                                    "start": 84,
                                                    "end": 99
                                                },
                                                "flags": 32,
                                                "transformFlags": 128,
                                                "start": 60,
                                                "end": 99
                                            },
                                            "flags": 59,
                                            "transformFlags": 0,
                                            "start": 34,
                                            "end": 100
                                        },
                                        "flags": 58,
                                        "transformFlags": 0,
                                        "start": 32,
                                        "end": 101
                                    },
                                    "flags": 57,
                                    "transformFlags": 0,
                                    "start": 32,
                                    "end": 102
                                },
                                "flags": 56,
                                "transformFlags": 0,
                                "start": 32,
                                "end": 103
                            },
                            "flags": 55,
                            "transformFlags": 0,
                            "start": 32,
                            "end": 104
                        },
                        {
                            "kind": 121,
                            "expression": {
                                "kind": 121,
                                "expression": {
                                    "kind": 121,
                                    "expression": {
                                        "kind": 121,
                                        "expression": {
                                            "kind": 121,
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
                                                                        "kind": 134299649,
                                                                        "text": "x",
                                                                        "rawText": "x",
                                                                        "flags": 96,
                                                                        "transformFlags": 0,
                                                                        "start": 113,
                                                                        "end": 114
                                                                    },
                                                                    "right": {
                                                                        "kind": 129,
                                                                        "member": {
                                                                            "kind": 131,
                                                                            "expression": {
                                                                                "kind": 134299649,
                                                                                "text": "foo",
                                                                                "rawText": "foo",
                                                                                "flags": 96,
                                                                                "transformFlags": 0,
                                                                                "start": 115,
                                                                                "end": 118
                                                                            },
                                                                            "argumentList": {
                                                                                "kind": 256,
                                                                                "elements": [],
                                                                                "trailingComma": false,
                                                                                "flags": 32,
                                                                                "transformFlags": 0,
                                                                                "start": 119,
                                                                                "end": 119
                                                                            },
                                                                            "flags": 268435488,
                                                                            "transformFlags": 1,
                                                                            "start": 113,
                                                                            "end": 120
                                                                        },
                                                                        "expression": {
                                                                            "kind": 134299649,
                                                                            "text": "x",
                                                                            "rawText": "x",
                                                                            "flags": 96,
                                                                            "transformFlags": 0,
                                                                            "start": 121,
                                                                            "end": 122
                                                                        },
                                                                        "flags": 268435488,
                                                                        "transformFlags": 2,
                                                                        "start": 113,
                                                                        "end": 122
                                                                    },
                                                                    "flags": 32,
                                                                    "transformFlags": 128,
                                                                    "start": 113,
                                                                    "end": 122
                                                                },
                                                                {
                                                                    "kind": 219,
                                                                    "asteriskToken": null,
                                                                    "left": {
                                                                        "kind": 134299649,
                                                                        "text": "y",
                                                                        "rawText": "y",
                                                                        "flags": 96,
                                                                        "transformFlags": 0,
                                                                        "start": 123,
                                                                        "end": 125
                                                                    },
                                                                    "right": {
                                                                        "kind": 129,
                                                                        "member": {
                                                                            "kind": 131,
                                                                            "expression": {
                                                                                "kind": 134299649,
                                                                                "text": "foo",
                                                                                "rawText": "foo",
                                                                                "flags": 96,
                                                                                "transformFlags": 0,
                                                                                "start": 126,
                                                                                "end": 129
                                                                            },
                                                                            "argumentList": {
                                                                                "kind": 256,
                                                                                "elements": [],
                                                                                "trailingComma": false,
                                                                                "flags": 32,
                                                                                "transformFlags": 0,
                                                                                "start": 130,
                                                                                "end": 130
                                                                            },
                                                                            "flags": 268435488,
                                                                            "transformFlags": 1,
                                                                            "start": 123,
                                                                            "end": 131
                                                                        },
                                                                        "expression": {
                                                                            "kind": 134299649,
                                                                            "text": "y",
                                                                            "rawText": "y",
                                                                            "flags": 96,
                                                                            "transformFlags": 0,
                                                                            "start": 132,
                                                                            "end": 133
                                                                        },
                                                                        "flags": 268435488,
                                                                        "transformFlags": 2,
                                                                        "start": 123,
                                                                        "end": 133
                                                                    },
                                                                    "flags": 32,
                                                                    "transformFlags": 128,
                                                                    "start": 123,
                                                                    "end": 133
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 16,
                                                            "transformFlags": 0,
                                                            "start": 113,
                                                            "end": 133
                                                        },
                                                        "flags": 48,
                                                        "transformFlags": 8,
                                                        "start": 112,
                                                        "end": 134
                                                    },
                                                    "operatorToken": {
                                                        "kind": 4125,
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 134,
                                                        "end": 136
                                                    },
                                                    "right": {
                                                        "kind": 220,
                                                        "propertyList": {
                                                            "kind": 218,
                                                            "properties": [
                                                                {
                                                                    "kind": 219,
                                                                    "asteriskToken": null,
                                                                    "left": {
                                                                        "kind": 134299649,
                                                                        "text": "x",
                                                                        "rawText": "x",
                                                                        "flags": 96,
                                                                        "transformFlags": 0,
                                                                        "start": 138,
                                                                        "end": 139
                                                                    },
                                                                    "right": {
                                                                        "kind": 201392130,
                                                                        "text": 201,
                                                                        "rawText": "201",
                                                                        "flags": 96,
                                                                        "transformFlags": 0,
                                                                        "start": 140,
                                                                        "end": 143
                                                                    },
                                                                    "flags": 32,
                                                                    "transformFlags": 128,
                                                                    "start": 138,
                                                                    "end": 143
                                                                },
                                                                {
                                                                    "kind": 219,
                                                                    "asteriskToken": null,
                                                                    "left": {
                                                                        "kind": 134299649,
                                                                        "text": "y",
                                                                        "rawText": "y",
                                                                        "flags": 96,
                                                                        "transformFlags": 0,
                                                                        "start": 144,
                                                                        "end": 146
                                                                    },
                                                                    "right": {
                                                                        "kind": 201392130,
                                                                        "text": 301,
                                                                        "rawText": "301",
                                                                        "flags": 96,
                                                                        "transformFlags": 0,
                                                                        "start": 147,
                                                                        "end": 150
                                                                    },
                                                                    "flags": 32,
                                                                    "transformFlags": 128,
                                                                    "start": 144,
                                                                    "end": 150
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 16,
                                                            "transformFlags": 0,
                                                            "start": 138,
                                                            "end": 150
                                                        },
                                                        "flags": 48,
                                                        "transformFlags": 8,
                                                        "start": 136,
                                                        "end": 151
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 128,
                                                    "start": 112,
                                                    "end": 151
                                                },
                                                "flags": 111,
                                                "transformFlags": 0,
                                                "start": 34,
                                                "end": 152
                                            },
                                            "flags": 110,
                                            "transformFlags": 0,
                                            "start": 32,
                                            "end": 153
                                        },
                                        "flags": 109,
                                        "transformFlags": 0,
                                        "start": 32,
                                        "end": 154
                                    },
                                    "flags": 108,
                                    "transformFlags": 0,
                                    "start": 32,
                                    "end": 155
                                },
                                "flags": 107,
                                "transformFlags": 0,
                                "start": 32,
                                "end": 156
                            },
                            "flags": 105,
                            "transformFlags": 0,
                            "start": 32,
                            "end": 157
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 1024,
                    "start": 52,
                    "end": 157
                },
                "flags": 52,
                "transformFlags": 0,
                "start": 33,
                "end": 158
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 52,
            "end": 159
        }
    ],
    "isModule": false,
    "source": "(((((({x:foo().x, y:foo().y} = {x:201, y:301}))))));\n\n(((((({x:foo().x, y:foo().y} = {x:201, y:301}))))), (((((({x:foo().x, y:foo().y} = {x:201, y:301})))))));",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 159
}
```

### Printed

```javascript

(((((({x: foo().x, y: foo().y} = {x: 201, y: 301}))))));
(
  ((((({x: foo().x, y: foo().y} = {x: 201, y: 301}))))),
  (((((({x: foo().x, y: foo().y} = {x: 201, y: 301}))))))
);

```

### Diagnostics

```javascript
✔ No errors
```

