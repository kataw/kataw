# Kataw parser test case

## Input

`````js
x(/./ ?? 1);

x((() => {}) ?? 1);

x(null ?? 1);

x(y[z] ?? 1);

x(-y ?? 1);

x(++y ?? 1);

x(delete y ?? 1);

x((y, void z) ?? 1);

x((y - z) ?? 1);

x((y | z) ?? 1);

x((y ?? z) ?? 1);

x(class {} ?? 1);
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
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 0,
                    "end": 1
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 198,
                            "left": {
                                "kind": 221,
                                "text": "/./",
                                "flags": 96,
                                "start": 2,
                                "end": 5
                            },
                            "operatorToken": {
                                "kind": 33047,
                                "flags": 96,
                                "start": 5,
                                "end": 8
                            },
                            "right": {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "start": 8,
                                "end": 10
                            },
                            "flags": 32,
                            "start": 2,
                            "end": 10
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 2,
                    "end": 10
                },
                "flags": 268435488,
                "start": 0,
                "end": 11
            },
            "flags": 16,
            "start": 0,
            "end": 12
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 12,
                    "end": 15
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 198,
                            "left": {
                                "kind": 121,
                                "expression": {
                                    "kind": 271,
                                    "arrowToken": {
                                        "kind": 10,
                                        "flags": 64,
                                        "start": 19,
                                        "end": 22
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
                                            "start": 24,
                                            "end": 24
                                        },
                                        "flags": 32,
                                        "start": 22,
                                        "end": 25
                                    },
                                    "flags": 32,
                                    "start": 17,
                                    "end": 25
                                },
                                "flags": 32,
                                "start": 16,
                                "end": 26
                            },
                            "operatorToken": {
                                "kind": 33047,
                                "flags": 96,
                                "start": 26,
                                "end": 29
                            },
                            "right": {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "start": 29,
                                "end": 31
                            },
                            "flags": 32,
                            "start": 16,
                            "end": 31
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 16,
                    "end": 31
                },
                "flags": 268435488,
                "start": 12,
                "end": 32
            },
            "flags": 16,
            "start": 12,
            "end": 33
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 33,
                    "end": 36
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 198,
                            "left": {
                                "kind": 138477575,
                                "flags": 96,
                                "start": 37,
                                "end": 41
                            },
                            "operatorToken": {
                                "kind": 33047,
                                "flags": 96,
                                "start": 41,
                                "end": 44
                            },
                            "right": {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "start": 44,
                                "end": 46
                            },
                            "flags": 32,
                            "start": 37,
                            "end": 46
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 37,
                    "end": 46
                },
                "flags": 268435488,
                "start": 33,
                "end": 47
            },
            "flags": 16,
            "start": 33,
            "end": 48
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 48,
                    "end": 51
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 198,
                            "left": {
                                "kind": 536871042,
                                "member": {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 96,
                                    "start": 52,
                                    "end": 53
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "z",
                                    "rawText": "z",
                                    "flags": 96,
                                    "start": 54,
                                    "end": 55
                                },
                                "flags": 32,
                                "start": 52,
                                "end": 56
                            },
                            "operatorToken": {
                                "kind": 33047,
                                "flags": 96,
                                "start": 56,
                                "end": 59
                            },
                            "right": {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "start": 59,
                                "end": 61
                            },
                            "flags": 32,
                            "start": 52,
                            "end": 61
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 52,
                    "end": 61
                },
                "flags": 268435488,
                "start": 48,
                "end": 62
            },
            "flags": 16,
            "start": 48,
            "end": 63
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 63,
                    "end": 66
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 198,
                            "left": {
                                "kind": 126,
                                "operandToken": {
                                    "kind": 134318643,
                                    "flags": 96,
                                    "start": 67,
                                    "end": 68
                                },
                                "operand": {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 96,
                                    "start": 68,
                                    "end": 69
                                },
                                "flags": 32,
                                "start": 67,
                                "end": 69
                            },
                            "operatorToken": {
                                "kind": 33047,
                                "flags": 96,
                                "start": 69,
                                "end": 72
                            },
                            "right": {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "start": 72,
                                "end": 74
                            },
                            "flags": 32,
                            "start": 67,
                            "end": 74
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 67,
                    "end": 74
                },
                "flags": 268435488,
                "start": 63,
                "end": 75
            },
            "flags": 16,
            "start": 63,
            "end": 76
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 76,
                    "end": 79
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 198,
                            "left": {
                                "kind": 128,
                                "operandToken": {
                                    "kind": 196635,
                                    "flags": 96,
                                    "start": 80,
                                    "end": 82
                                },
                                "operand": {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 96,
                                    "start": 82,
                                    "end": 83
                                },
                                "flags": 32,
                                "start": 80,
                                "end": 83
                            },
                            "operatorToken": {
                                "kind": 33047,
                                "flags": 96,
                                "start": 83,
                                "end": 86
                            },
                            "right": {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "start": 86,
                                "end": 88
                            },
                            "flags": 32,
                            "start": 80,
                            "end": 88
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 80,
                    "end": 88
                },
                "flags": 268435488,
                "start": 76,
                "end": 89
            },
            "flags": 16,
            "start": 76,
            "end": 90
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 90,
                    "end": 93
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 198,
                            "left": {
                                "kind": 126,
                                "operandToken": {
                                    "kind": 4259886,
                                    "flags": 96,
                                    "start": 94,
                                    "end": 100
                                },
                                "operand": {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 96,
                                    "start": 100,
                                    "end": 102
                                },
                                "flags": 32,
                                "start": 94,
                                "end": 102
                            },
                            "operatorToken": {
                                "kind": 33047,
                                "flags": 96,
                                "start": 102,
                                "end": 105
                            },
                            "right": {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "start": 105,
                                "end": 107
                            },
                            "flags": 32,
                            "start": 94,
                            "end": 107
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 94,
                    "end": 107
                },
                "flags": 268435488,
                "start": 90,
                "end": 108
            },
            "flags": 16,
            "start": 90,
            "end": 109
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 109,
                    "end": 112
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 198,
                            "left": {
                                "kind": 121,
                                "expression": {
                                    "kind": 132,
                                    "expressions": [
                                        {
                                            "kind": 134299649,
                                            "text": "y",
                                            "rawText": "y",
                                            "flags": 96,
                                            "start": 114,
                                            "end": 115
                                        },
                                        {
                                            "kind": 126,
                                            "operandToken": {
                                                "kind": 138477615,
                                                "flags": 96,
                                                "start": 116,
                                                "end": 121
                                            },
                                            "operand": {
                                                "kind": 134299649,
                                                "text": "z",
                                                "rawText": "z",
                                                "flags": 96,
                                                "start": 121,
                                                "end": 123
                                            },
                                            "flags": 32,
                                            "start": 116,
                                            "end": 123
                                        }
                                    ],
                                    "flags": 32,
                                    "start": 113,
                                    "end": 123
                                },
                                "flags": 32,
                                "start": 113,
                                "end": 124
                            },
                            "operatorToken": {
                                "kind": 33047,
                                "flags": 96,
                                "start": 124,
                                "end": 127
                            },
                            "right": {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "start": 127,
                                "end": 129
                            },
                            "flags": 32,
                            "start": 113,
                            "end": 129
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 113,
                    "end": 129
                },
                "flags": 268435488,
                "start": 109,
                "end": 130
            },
            "flags": 16,
            "start": 109,
            "end": 131
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 131,
                    "end": 134
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 198,
                            "left": {
                                "kind": 121,
                                "expression": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 96,
                                        "start": 136,
                                        "end": 137
                                    },
                                    "operatorToken": {
                                        "kind": 134318643,
                                        "flags": 96,
                                        "start": 137,
                                        "end": 139
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "z",
                                        "rawText": "z",
                                        "flags": 96,
                                        "start": 139,
                                        "end": 141
                                    },
                                    "flags": 32,
                                    "start": 135,
                                    "end": 141
                                },
                                "flags": 32,
                                "start": 135,
                                "end": 142
                            },
                            "operatorToken": {
                                "kind": 33047,
                                "flags": 96,
                                "start": 142,
                                "end": 145
                            },
                            "right": {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "start": 145,
                                "end": 147
                            },
                            "flags": 32,
                            "start": 135,
                            "end": 147
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 135,
                    "end": 147
                },
                "flags": 268435488,
                "start": 131,
                "end": 148
            },
            "flags": 16,
            "start": 131,
            "end": 149
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 149,
                    "end": 152
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 198,
                            "left": {
                                "kind": 121,
                                "expression": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 96,
                                        "start": 154,
                                        "end": 155
                                    },
                                    "operatorToken": {
                                        "kind": 134251592,
                                        "flags": 96,
                                        "start": 155,
                                        "end": 157
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "z",
                                        "rawText": "z",
                                        "flags": 96,
                                        "start": 157,
                                        "end": 159
                                    },
                                    "flags": 32,
                                    "start": 153,
                                    "end": 159
                                },
                                "flags": 32,
                                "start": 153,
                                "end": 160
                            },
                            "operatorToken": {
                                "kind": 33047,
                                "flags": 96,
                                "start": 160,
                                "end": 163
                            },
                            "right": {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "start": 163,
                                "end": 165
                            },
                            "flags": 32,
                            "start": 153,
                            "end": 165
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 153,
                    "end": 165
                },
                "flags": 268435488,
                "start": 149,
                "end": 166
            },
            "flags": 16,
            "start": 149,
            "end": 167
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 167,
                    "end": 170
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 198,
                            "left": {
                                "kind": 121,
                                "expression": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 96,
                                        "start": 172,
                                        "end": 173
                                    },
                                    "operatorToken": {
                                        "kind": 33047,
                                        "flags": 96,
                                        "start": 173,
                                        "end": 176
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "z",
                                        "rawText": "z",
                                        "flags": 96,
                                        "start": 176,
                                        "end": 178
                                    },
                                    "flags": 32,
                                    "start": 171,
                                    "end": 178
                                },
                                "flags": 32,
                                "start": 171,
                                "end": 179
                            },
                            "operatorToken": {
                                "kind": 33047,
                                "flags": 96,
                                "start": 179,
                                "end": 182
                            },
                            "right": {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "start": 182,
                                "end": 184
                            },
                            "flags": 32,
                            "start": 171,
                            "end": 184
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 171,
                    "end": 184
                },
                "flags": 268435488,
                "start": 167,
                "end": 185
            },
            "flags": 16,
            "start": 167,
            "end": 186
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 186,
                    "end": 189
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 198,
                            "left": {
                                "kind": 189,
                                "decorators": null,
                                "classKeyword": {
                                    "kind": 37822544,
                                    "flags": 64,
                                    "start": 190,
                                    "end": 195
                                },
                                "name": null,
                                "typeParameters": null,
                                "tail": {
                                    "kind": 277,
                                    "classHeritage": null,
                                    "body": {
                                        "kind": 303,
                                        "elements": [],
                                        "flags": 32,
                                        "start": 197,
                                        "end": 197
                                    },
                                    "flags": 195,
                                    "start": 32,
                                    "end": 198
                                },
                                "flags": 32,
                                "start": 190,
                                "end": 198
                            },
                            "operatorToken": {
                                "kind": 33047,
                                "flags": 96,
                                "start": 198,
                                "end": 201
                            },
                            "right": {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "start": 201,
                                "end": 203
                            },
                            "flags": 32,
                            "start": 190,
                            "end": 203
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 190,
                    "end": 203
                },
                "flags": 268435488,
                "start": 186,
                "end": 204
            },
            "flags": 16,
            "start": 186,
            "end": 205
        }
    ],
    "isModule": false,
    "source": "x(/./ ?? 1);\n\nx((() => {}) ?? 1);\n\nx(null ?? 1);\n\nx(y[z] ?? 1);\n\nx(-y ?? 1);\n\nx(++y ?? 1);\n\nx(delete y ?? 1);\n\nx((y, void z) ?? 1);\n\nx((y - z) ?? 1);\n\nx((y | z) ?? 1);\n\nx((y ?? z) ?? 1);\n\nx(class {} ?? 1);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 205
}
```

### Printed

```javascript

x(/./ ?? 1);
x((() =>  {}) ?? 1);
x(null ?? 1);
x( ?? 1);
x(-y ?? 1);
x(++y ?? 1);
x(delete y ?? 1);
x((y, void z) ?? 1);
x((y - z) ?? 1);
x((y | z) ?? 1);
x((y ?? z) ?? 1);
x(class  {} ?? 1);
```

### Diagnostics

```javascript
✔ No errors
```

