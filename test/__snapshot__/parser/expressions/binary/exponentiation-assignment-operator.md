# Kataw parser test case

## Input

`````js
({
	0: a ** b ** c,
	1: (a ** b) ** c,
	2: a **= b,
	3: a.b **= c,
	4: a[b] **= c,
	5: a().b **= c,
	6: a()[b] **= c,
	7: a[b()] **= c,
	8: a()[b()] **= c,
	9: a[0] **= b,
	10: a[false] **= b,
	11: a[null] **= b,
	12: a[void 0] **= b,
	13: a[123n] **= b,
	14: a[this] **= b,
	15: a[/x/] **= b,
	16: a[{}] **= b,
	17: a[[]] **= b,
	18: a[() => {}] **= b,
	19: a[function() {}] **= b,
});
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
                                "kind": 219,
                                "generatorToken": null,
                                "left": {
                                    "kind": 201392130,
                                    "text": 0,
                                    "rawText": "0",
                                    "flags": 97,
                                    "start": 2,
                                    "end": 5
                                },
                                "right": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "start": 6,
                                        "end": 8
                                    },
                                    "operatorToken": {
                                        "kind": 35897,
                                        "flags": 64,
                                        "start": 8,
                                        "end": 11
                                    },
                                    "right": {
                                        "kind": 198,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 96,
                                            "start": 11,
                                            "end": 13
                                        },
                                        "operatorToken": {
                                            "kind": 35897,
                                            "flags": 64,
                                            "start": 13,
                                            "end": 16
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "c",
                                            "rawText": "c",
                                            "flags": 96,
                                            "start": 16,
                                            "end": 18
                                        },
                                        "flags": 32,
                                        "start": 13,
                                        "end": 18
                                    },
                                    "flags": 32,
                                    "start": 2,
                                    "end": 18
                                },
                                "flags": 32,
                                "start": 2,
                                "end": 18
                            },
                            {
                                "kind": 219,
                                "generatorToken": null,
                                "left": {
                                    "kind": 201392130,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 97,
                                    "start": 19,
                                    "end": 22
                                },
                                "right": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 121,
                                        "expression": {
                                            "kind": 198,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 96,
                                                "start": 25,
                                                "end": 26
                                            },
                                            "operatorToken": {
                                                "kind": 35897,
                                                "flags": 64,
                                                "start": 26,
                                                "end": 29
                                            },
                                            "right": {
                                                "kind": 134299649,
                                                "text": "b",
                                                "rawText": "b",
                                                "flags": 96,
                                                "start": 29,
                                                "end": 31
                                            },
                                            "flags": 32,
                                            "start": 23,
                                            "end": 31
                                        },
                                        "flags": 32,
                                        "start": 23,
                                        "end": 32
                                    },
                                    "operatorToken": {
                                        "kind": 35897,
                                        "flags": 64,
                                        "start": 32,
                                        "end": 35
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "c",
                                        "rawText": "c",
                                        "flags": 96,
                                        "start": 35,
                                        "end": 37
                                    },
                                    "flags": 32,
                                    "start": 19,
                                    "end": 37
                                },
                                "flags": 32,
                                "start": 19,
                                "end": 37
                            },
                            {
                                "kind": 219,
                                "generatorToken": null,
                                "left": {
                                    "kind": 201392130,
                                    "text": 2,
                                    "rawText": "2",
                                    "flags": 97,
                                    "start": 38,
                                    "end": 41
                                },
                                "right": {
                                    "kind": 125,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "start": 42,
                                        "end": 44
                                    },
                                    "operatorToken": {
                                        "kind": 4129,
                                        "flags": 64,
                                        "start": 44,
                                        "end": 48
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 96,
                                        "start": 48,
                                        "end": 50
                                    },
                                    "flags": 32,
                                    "start": 38,
                                    "end": 50
                                },
                                "flags": 32,
                                "start": 38,
                                "end": 50
                            },
                            {
                                "kind": 219,
                                "generatorToken": null,
                                "left": {
                                    "kind": 201392130,
                                    "text": 3,
                                    "rawText": "3",
                                    "flags": 97,
                                    "start": 51,
                                    "end": 54
                                },
                                "right": {
                                    "kind": 125,
                                    "left": {
                                        "kind": 129,
                                        "member": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "start": 55,
                                            "end": 57
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 96,
                                            "start": 58,
                                            "end": 59
                                        },
                                        "flags": 32,
                                        "start": 51,
                                        "end": 59
                                    },
                                    "operatorToken": {
                                        "kind": 4129,
                                        "flags": 64,
                                        "start": 59,
                                        "end": 63
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "c",
                                        "rawText": "c",
                                        "flags": 96,
                                        "start": 63,
                                        "end": 65
                                    },
                                    "flags": 32,
                                    "start": 51,
                                    "end": 65
                                },
                                "flags": 32,
                                "start": 51,
                                "end": 65
                            },
                            {
                                "kind": 219,
                                "generatorToken": null,
                                "left": {
                                    "kind": 201392130,
                                    "text": 4,
                                    "rawText": "4",
                                    "flags": 97,
                                    "start": 66,
                                    "end": 69
                                },
                                "right": {
                                    "kind": 125,
                                    "left": {
                                        "kind": 130,
                                        "member": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "start": 70,
                                            "end": 72
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 96,
                                            "start": 73,
                                            "end": 74
                                        },
                                        "flags": 32,
                                        "start": 66,
                                        "end": 75
                                    },
                                    "operatorToken": {
                                        "kind": 4129,
                                        "flags": 64,
                                        "start": 75,
                                        "end": 79
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "c",
                                        "rawText": "c",
                                        "flags": 96,
                                        "start": 79,
                                        "end": 81
                                    },
                                    "flags": 32,
                                    "start": 66,
                                    "end": 81
                                },
                                "flags": 32,
                                "start": 66,
                                "end": 81
                            },
                            {
                                "kind": 219,
                                "generatorToken": null,
                                "left": {
                                    "kind": 201392130,
                                    "text": 5,
                                    "rawText": "5",
                                    "flags": 97,
                                    "start": 82,
                                    "end": 85
                                },
                                "right": {
                                    "kind": 125,
                                    "left": {
                                        "kind": 129,
                                        "member": {
                                            "kind": 131,
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 96,
                                                "start": 86,
                                                "end": 88
                                            },
                                            "argumentList": {
                                                "kind": 256,
                                                "elements": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 89,
                                                "end": 89
                                            },
                                            "flags": 32,
                                            "start": 82,
                                            "end": 90
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 96,
                                            "start": 91,
                                            "end": 92
                                        },
                                        "flags": 32,
                                        "start": 82,
                                        "end": 92
                                    },
                                    "operatorToken": {
                                        "kind": 4129,
                                        "flags": 64,
                                        "start": 92,
                                        "end": 96
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "c",
                                        "rawText": "c",
                                        "flags": 96,
                                        "start": 96,
                                        "end": 98
                                    },
                                    "flags": 32,
                                    "start": 82,
                                    "end": 98
                                },
                                "flags": 32,
                                "start": 82,
                                "end": 98
                            },
                            {
                                "kind": 219,
                                "generatorToken": null,
                                "left": {
                                    "kind": 201392130,
                                    "text": 6,
                                    "rawText": "6",
                                    "flags": 97,
                                    "start": 99,
                                    "end": 102
                                },
                                "right": {
                                    "kind": 125,
                                    "left": {
                                        "kind": 130,
                                        "member": {
                                            "kind": 131,
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 96,
                                                "start": 103,
                                                "end": 105
                                            },
                                            "argumentList": {
                                                "kind": 256,
                                                "elements": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 106,
                                                "end": 106
                                            },
                                            "flags": 32,
                                            "start": 99,
                                            "end": 107
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 96,
                                            "start": 108,
                                            "end": 109
                                        },
                                        "flags": 32,
                                        "start": 99,
                                        "end": 110
                                    },
                                    "operatorToken": {
                                        "kind": 4129,
                                        "flags": 64,
                                        "start": 110,
                                        "end": 114
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "c",
                                        "rawText": "c",
                                        "flags": 96,
                                        "start": 114,
                                        "end": 116
                                    },
                                    "flags": 32,
                                    "start": 99,
                                    "end": 116
                                },
                                "flags": 32,
                                "start": 99,
                                "end": 116
                            },
                            {
                                "kind": 219,
                                "generatorToken": null,
                                "left": {
                                    "kind": 201392130,
                                    "text": 7,
                                    "rawText": "7",
                                    "flags": 97,
                                    "start": 117,
                                    "end": 120
                                },
                                "right": {
                                    "kind": 125,
                                    "left": {
                                        "kind": 130,
                                        "member": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "start": 121,
                                            "end": 123
                                        },
                                        "expression": {
                                            "kind": 131,
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "b",
                                                "rawText": "b",
                                                "flags": 96,
                                                "start": 124,
                                                "end": 125
                                            },
                                            "argumentList": {
                                                "kind": 256,
                                                "elements": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 126,
                                                "end": 126
                                            },
                                            "flags": 32,
                                            "start": 124,
                                            "end": 127
                                        },
                                        "flags": 32,
                                        "start": 117,
                                        "end": 128
                                    },
                                    "operatorToken": {
                                        "kind": 4129,
                                        "flags": 64,
                                        "start": 128,
                                        "end": 132
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "c",
                                        "rawText": "c",
                                        "flags": 96,
                                        "start": 132,
                                        "end": 134
                                    },
                                    "flags": 32,
                                    "start": 117,
                                    "end": 134
                                },
                                "flags": 32,
                                "start": 117,
                                "end": 134
                            },
                            {
                                "kind": 219,
                                "generatorToken": null,
                                "left": {
                                    "kind": 201392130,
                                    "text": 8,
                                    "rawText": "8",
                                    "flags": 97,
                                    "start": 135,
                                    "end": 138
                                },
                                "right": {
                                    "kind": 125,
                                    "left": {
                                        "kind": 130,
                                        "member": {
                                            "kind": 131,
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 96,
                                                "start": 139,
                                                "end": 141
                                            },
                                            "argumentList": {
                                                "kind": 256,
                                                "elements": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 142,
                                                "end": 142
                                            },
                                            "flags": 32,
                                            "start": 135,
                                            "end": 143
                                        },
                                        "expression": {
                                            "kind": 131,
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "b",
                                                "rawText": "b",
                                                "flags": 96,
                                                "start": 144,
                                                "end": 145
                                            },
                                            "argumentList": {
                                                "kind": 256,
                                                "elements": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 146,
                                                "end": 146
                                            },
                                            "flags": 32,
                                            "start": 144,
                                            "end": 147
                                        },
                                        "flags": 32,
                                        "start": 135,
                                        "end": 148
                                    },
                                    "operatorToken": {
                                        "kind": 4129,
                                        "flags": 64,
                                        "start": 148,
                                        "end": 152
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "c",
                                        "rawText": "c",
                                        "flags": 96,
                                        "start": 152,
                                        "end": 154
                                    },
                                    "flags": 32,
                                    "start": 135,
                                    "end": 154
                                },
                                "flags": 32,
                                "start": 135,
                                "end": 154
                            },
                            {
                                "kind": 219,
                                "generatorToken": null,
                                "left": {
                                    "kind": 201392130,
                                    "text": 9,
                                    "rawText": "9",
                                    "flags": 97,
                                    "start": 155,
                                    "end": 158
                                },
                                "right": {
                                    "kind": 125,
                                    "left": {
                                        "kind": 130,
                                        "member": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "start": 159,
                                            "end": 161
                                        },
                                        "expression": {
                                            "kind": 201392130,
                                            "text": 0,
                                            "rawText": "0",
                                            "flags": 96,
                                            "start": 162,
                                            "end": 163
                                        },
                                        "flags": 32,
                                        "start": 155,
                                        "end": 164
                                    },
                                    "operatorToken": {
                                        "kind": 4129,
                                        "flags": 64,
                                        "start": 164,
                                        "end": 168
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 96,
                                        "start": 168,
                                        "end": 170
                                    },
                                    "flags": 32,
                                    "start": 155,
                                    "end": 170
                                },
                                "flags": 32,
                                "start": 155,
                                "end": 170
                            },
                            {
                                "kind": 219,
                                "generatorToken": null,
                                "left": {
                                    "kind": 201392130,
                                    "text": 10,
                                    "rawText": "10",
                                    "flags": 97,
                                    "start": 171,
                                    "end": 175
                                },
                                "right": {
                                    "kind": 125,
                                    "left": {
                                        "kind": 130,
                                        "member": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "start": 176,
                                            "end": 178
                                        },
                                        "expression": {
                                            "kind": 134,
                                            "text": false,
                                            "flags": 96,
                                            "start": 179,
                                            "end": 184
                                        },
                                        "flags": 32,
                                        "start": 171,
                                        "end": 185
                                    },
                                    "operatorToken": {
                                        "kind": 4129,
                                        "flags": 64,
                                        "start": 185,
                                        "end": 189
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 96,
                                        "start": 189,
                                        "end": 191
                                    },
                                    "flags": 32,
                                    "start": 171,
                                    "end": 191
                                },
                                "flags": 32,
                                "start": 171,
                                "end": 191
                            },
                            {
                                "kind": 219,
                                "generatorToken": null,
                                "left": {
                                    "kind": 201392130,
                                    "text": 11,
                                    "rawText": "11",
                                    "flags": 97,
                                    "start": 192,
                                    "end": 196
                                },
                                "right": {
                                    "kind": 125,
                                    "left": {
                                        "kind": 130,
                                        "member": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "start": 197,
                                            "end": 199
                                        },
                                        "expression": {
                                            "kind": 269,
                                            "text": null,
                                            "flags": 96,
                                            "start": 200,
                                            "end": 204
                                        },
                                        "flags": 32,
                                        "start": 192,
                                        "end": 205
                                    },
                                    "operatorToken": {
                                        "kind": 4129,
                                        "flags": 64,
                                        "start": 205,
                                        "end": 209
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 96,
                                        "start": 209,
                                        "end": 211
                                    },
                                    "flags": 32,
                                    "start": 192,
                                    "end": 211
                                },
                                "flags": 32,
                                "start": 192,
                                "end": 211
                            },
                            {
                                "kind": 219,
                                "generatorToken": null,
                                "left": {
                                    "kind": 201392130,
                                    "text": 12,
                                    "rawText": "12",
                                    "flags": 97,
                                    "start": 212,
                                    "end": 216
                                },
                                "right": {
                                    "kind": 125,
                                    "left": {
                                        "kind": 130,
                                        "member": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "start": 217,
                                            "end": 219
                                        },
                                        "expression": {
                                            "kind": 126,
                                            "operandToken": {
                                                "kind": 138477615,
                                                "flags": 64,
                                                "start": 220,
                                                "end": 224
                                            },
                                            "operand": {
                                                "kind": 201392130,
                                                "text": 0,
                                                "rawText": "0",
                                                "flags": 96,
                                                "start": 224,
                                                "end": 226
                                            },
                                            "flags": 32,
                                            "start": 220,
                                            "end": 226
                                        },
                                        "flags": 32,
                                        "start": 212,
                                        "end": 227
                                    },
                                    "operatorToken": {
                                        "kind": 4129,
                                        "flags": 64,
                                        "start": 227,
                                        "end": 231
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 96,
                                        "start": 231,
                                        "end": 233
                                    },
                                    "flags": 32,
                                    "start": 212,
                                    "end": 233
                                },
                                "flags": 32,
                                "start": 212,
                                "end": 233
                            },
                            {
                                "kind": 219,
                                "generatorToken": null,
                                "left": {
                                    "kind": 201392130,
                                    "text": 13,
                                    "rawText": "13",
                                    "flags": 97,
                                    "start": 234,
                                    "end": 238
                                },
                                "right": {
                                    "kind": 125,
                                    "left": {
                                        "kind": 130,
                                        "member": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "start": 239,
                                            "end": 241
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "123",
                                            "rawText": "123",
                                            "flags": 96,
                                            "start": 242,
                                            "end": 246
                                        },
                                        "flags": 32,
                                        "start": 234,
                                        "end": 247
                                    },
                                    "operatorToken": {
                                        "kind": 4129,
                                        "flags": 64,
                                        "start": 247,
                                        "end": 251
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 96,
                                        "start": 251,
                                        "end": 253
                                    },
                                    "flags": 32,
                                    "start": 234,
                                    "end": 253
                                },
                                "flags": 32,
                                "start": 234,
                                "end": 253
                            },
                            {
                                "kind": 219,
                                "generatorToken": null,
                                "left": {
                                    "kind": 201392130,
                                    "text": 14,
                                    "rawText": "14",
                                    "flags": 97,
                                    "start": 254,
                                    "end": 258
                                },
                                "right": {
                                    "kind": 125,
                                    "left": {
                                        "kind": 130,
                                        "member": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "start": 259,
                                            "end": 261
                                        },
                                        "expression": {
                                            "kind": 135,
                                            "flags": 96,
                                            "start": 262,
                                            "end": 266
                                        },
                                        "flags": 32,
                                        "start": 254,
                                        "end": 267
                                    },
                                    "operatorToken": {
                                        "kind": 4129,
                                        "flags": 64,
                                        "start": 267,
                                        "end": 271
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 96,
                                        "start": 271,
                                        "end": 273
                                    },
                                    "flags": 32,
                                    "start": 254,
                                    "end": 273
                                },
                                "flags": 32,
                                "start": 254,
                                "end": 273
                            },
                            {
                                "kind": 219,
                                "generatorToken": null,
                                "left": {
                                    "kind": 201392130,
                                    "text": 15,
                                    "rawText": "15",
                                    "flags": 97,
                                    "start": 274,
                                    "end": 278
                                },
                                "right": {
                                    "kind": 125,
                                    "left": {
                                        "kind": 130,
                                        "member": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "start": 279,
                                            "end": 281
                                        },
                                        "expression": {
                                            "kind": 221,
                                            "text": "/x/",
                                            "flags": 96,
                                            "start": 282,
                                            "end": 285
                                        },
                                        "flags": 32,
                                        "start": 274,
                                        "end": 286
                                    },
                                    "operatorToken": {
                                        "kind": 4129,
                                        "flags": 64,
                                        "start": 286,
                                        "end": 290
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 96,
                                        "start": 290,
                                        "end": 292
                                    },
                                    "flags": 32,
                                    "start": 274,
                                    "end": 292
                                },
                                "flags": 32,
                                "start": 274,
                                "end": 292
                            },
                            {
                                "kind": 219,
                                "generatorToken": null,
                                "left": {
                                    "kind": 201392130,
                                    "text": 16,
                                    "rawText": "16",
                                    "flags": 97,
                                    "start": 293,
                                    "end": 297
                                },
                                "right": {
                                    "kind": 125,
                                    "left": {
                                        "kind": 130,
                                        "member": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "start": 298,
                                            "end": 300
                                        },
                                        "expression": {
                                            "kind": 220,
                                            "propertyList": {
                                                "kind": 218,
                                                "properties": [],
                                                "trailingComma": false,
                                                "flags": 16,
                                                "start": 302,
                                                "end": 302
                                            },
                                            "flags": 32,
                                            "start": 301,
                                            "end": 303
                                        },
                                        "flags": 32,
                                        "start": 293,
                                        "end": 304
                                    },
                                    "operatorToken": {
                                        "kind": 4129,
                                        "flags": 64,
                                        "start": 304,
                                        "end": 308
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 96,
                                        "start": 308,
                                        "end": 310
                                    },
                                    "flags": 32,
                                    "start": 293,
                                    "end": 310
                                },
                                "flags": 32,
                                "start": 293,
                                "end": 310
                            },
                            {
                                "kind": 219,
                                "generatorToken": null,
                                "left": {
                                    "kind": 201392130,
                                    "text": 17,
                                    "rawText": "17",
                                    "flags": 97,
                                    "start": 311,
                                    "end": 315
                                },
                                "right": {
                                    "kind": 125,
                                    "left": {
                                        "kind": 130,
                                        "member": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "start": 316,
                                            "end": 318
                                        },
                                        "expression": {
                                            "kind": 119,
                                            "elementList": {
                                                "kind": 270,
                                                "elements": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 320,
                                                "end": 320
                                            },
                                            "flags": 32,
                                            "start": 319,
                                            "end": 321
                                        },
                                        "flags": 32,
                                        "start": 311,
                                        "end": 322
                                    },
                                    "operatorToken": {
                                        "kind": 4129,
                                        "flags": 64,
                                        "start": 322,
                                        "end": 326
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 96,
                                        "start": 326,
                                        "end": 328
                                    },
                                    "flags": 32,
                                    "start": 311,
                                    "end": 328
                                },
                                "flags": 32,
                                "start": 311,
                                "end": 328
                            },
                            {
                                "kind": 219,
                                "generatorToken": null,
                                "left": {
                                    "kind": 201392130,
                                    "text": 18,
                                    "rawText": "18",
                                    "flags": 97,
                                    "start": 329,
                                    "end": 333
                                },
                                "right": {
                                    "kind": 125,
                                    "left": {
                                        "kind": 130,
                                        "member": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "start": 334,
                                            "end": 336
                                        },
                                        "expression": {
                                            "kind": 271,
                                            "arrowToken": {
                                                "kind": 10,
                                                "flags": 0,
                                                "start": 339,
                                                "end": 342
                                            },
                                            "typeParameters": null,
                                            "parameters": [],
                                            "asyncKeyword": null,
                                            "returnType": null,
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [],
                                                    "flags": 32,
                                                    "start": 344,
                                                    "end": 344
                                                },
                                                "flags": 32,
                                                "start": 342,
                                                "end": 345
                                            },
                                            "flags": 32,
                                            "start": 337,
                                            "end": 345
                                        },
                                        "flags": 32,
                                        "start": 329,
                                        "end": 346
                                    },
                                    "operatorToken": {
                                        "kind": 4129,
                                        "flags": 64,
                                        "start": 346,
                                        "end": 350
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 96,
                                        "start": 350,
                                        "end": 352
                                    },
                                    "flags": 32,
                                    "start": 329,
                                    "end": 352
                                },
                                "flags": 32,
                                "start": 329,
                                "end": 352
                            },
                            {
                                "kind": 219,
                                "generatorToken": null,
                                "left": {
                                    "kind": 201392130,
                                    "text": 19,
                                    "rawText": "19",
                                    "flags": 97,
                                    "start": 353,
                                    "end": 357
                                },
                                "right": {
                                    "kind": 125,
                                    "left": {
                                        "kind": 130,
                                        "member": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "start": 358,
                                            "end": 360
                                        },
                                        "expression": {
                                            "kind": 177,
                                            "asyncKeyword": null,
                                            "functionKeyword": {
                                                "kind": 37822554,
                                                "flags": 0,
                                                "start": 361,
                                                "end": 369
                                            },
                                            "generatorToken": null,
                                            "name": null,
                                            "formalParameters": {
                                                "kind": 214,
                                                "formalParameterList": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 369,
                                                "end": 371
                                            },
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [],
                                                    "flags": 32,
                                                    "start": 373,
                                                    "end": 373
                                                },
                                                "flags": 32,
                                                "start": 371,
                                                "end": 374
                                            },
                                            "typeParameters": null,
                                            "returnType": null,
                                            "flags": 32,
                                            "start": 361,
                                            "end": 374
                                        },
                                        "flags": 32,
                                        "start": 353,
                                        "end": 375
                                    },
                                    "operatorToken": {
                                        "kind": 4129,
                                        "flags": 64,
                                        "start": 375,
                                        "end": 379
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 96,
                                        "start": 379,
                                        "end": 381
                                    },
                                    "flags": 32,
                                    "start": 353,
                                    "end": 381
                                },
                                "flags": 32,
                                "start": 353,
                                "end": 381
                            }
                        ],
                        "trailingComma": true,
                        "flags": 17,
                        "start": 2,
                        "end": 382
                    },
                    "flags": 32,
                    "start": 1,
                    "end": 384
                },
                "flags": 32,
                "start": 0,
                "end": 385
            },
            "flags": 16,
            "start": 0,
            "end": 386
        }
    ],
    "isModule": false,
    "source": "({\n\t0: a ** b ** c,\n\t1: (a ** b) ** c,\n\t2: a **= b,\n\t3: a.b **= c,\n\t4: a[b] **= c,\n\t5: a().b **= c,\n\t6: a()[b] **= c,\n\t7: a[b()] **= c,\n\t8: a()[b()] **= c,\n\t9: a[0] **= b,\n\t10: a[false] **= b,\n\t11: a[null] **= b,\n\t12: a[void 0] **= b,\n\t13: a[123n] **= b,\n\t14: a[this] **= b,\n\t15: a[/x/] **= b,\n\t16: a[{}] **= b,\n\t17: a[[]] **= b,\n\t18: a[() => {}] **= b,\n\t19: a[function() {}] **= b,\n});",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 386
}
```

### Printed

```javascript

({
  0: a ** b ** c,
  1: (a ** b) ** c,
  2: a **= b,
  3: a.b **= c,
  4: ab **= c,
  5: a().b **= c,
  6: a()b **= c,
  7: ab() **= c,
  8: a()b() **= c,
  9: a0 **= b,
  10: afalse **= b,
  11: anull **= b,
  12: a0 **= b,
  13: a123 **= b,
  14: athis **= b,
  15: a/x/ **= b,
  16: a{} **= b,
  17: a[] **= b,
  18: a() =>  {} **= b,
  19: afunction () {} **= b
});
```

### Diagnostics

```javascript
✔ No errors
```

