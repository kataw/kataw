# Kataw parser test case

## Input

`````js
`a\nb`;
`a\rb`;
`a\r\nb`;
`a\\nb`;
`a\\rb`;
`a\\r\\nb`;
`a\u2028b`;
`a\u2029b`;

`a${foo}b` + `template`;
`a${foo}b` + `x${bar}y`;
`a${i}${j}bb` + `xxx${bar}yyyy`;

tag`template` + `template2`;
`a${foo}b` + 'string';
'string' + `a${foo}b`;

tag`${a}\nb`;
tag`${a}\rb`;
tag`${a}\r\nb`;
tag`${a}\\nb`;
tag`${a}\\rb`;

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
                "kind": 458761,
                "text": "a\nb",
                "rawText": "a\\nb",
                "flags": 134217824,
                "start": 0,
                "end": 6
            },
            "flags": 16,
            "start": 0,
            "end": 7
        },
        {
            "kind": 120,
            "expression": {
                "kind": 458761,
                "text": "a\rb",
                "rawText": "a\\rb",
                "flags": 134217824,
                "start": 7,
                "end": 14
            },
            "flags": 16,
            "start": 7,
            "end": 15
        },
        {
            "kind": 120,
            "expression": {
                "kind": 458761,
                "text": "a\r\nb",
                "rawText": "a\\r\\nb",
                "flags": 134217824,
                "start": 15,
                "end": 24
            },
            "flags": 16,
            "start": 15,
            "end": 25
        },
        {
            "kind": 120,
            "expression": {
                "kind": 458761,
                "text": "a\\nb",
                "rawText": "a\\\\nb",
                "flags": 134217824,
                "start": 25,
                "end": 33
            },
            "flags": 16,
            "start": 25,
            "end": 34
        },
        {
            "kind": 120,
            "expression": {
                "kind": 458761,
                "text": "a\\rb",
                "rawText": "a\\\\rb",
                "flags": 134217824,
                "start": 34,
                "end": 42
            },
            "flags": 16,
            "start": 34,
            "end": 43
        },
        {
            "kind": 120,
            "expression": {
                "kind": 458761,
                "text": "a\\r\\nb",
                "rawText": "a\\\\r\\\\nb",
                "flags": 134217824,
                "start": 43,
                "end": 54
            },
            "flags": 16,
            "start": 43,
            "end": 55
        },
        {
            "kind": 120,
            "expression": {
                "kind": 458761,
                "text": "a b",
                "rawText": "a\\u2028b",
                "flags": 134217824,
                "start": 55,
                "end": 66
            },
            "flags": 16,
            "start": 55,
            "end": 67
        },
        {
            "kind": 120,
            "expression": {
                "kind": 458761,
                "text": "a b",
                "rawText": "a\\u2029b",
                "flags": 134217824,
                "start": 67,
                "end": 78
            },
            "flags": 16,
            "start": 67,
            "end": 79
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 227,
                    "spans": [
                        {
                            "kind": 65764,
                            "rawText": "a",
                            "text": "a",
                            "expression": {
                                "kind": 134299649,
                                "text": "foo",
                                "rawText": "foo",
                                "flags": 96,
                                "start": 85,
                                "end": 88
                            },
                            "flags": 32,
                            "start": 79,
                            "end": 88
                        }
                    ],
                    "tail": {
                        "kind": 458761,
                        "text": "b",
                        "rawText": "b",
                        "flags": 97,
                        "start": 88,
                        "end": 91
                    },
                    "flags": 33,
                    "start": 79,
                    "end": 91
                },
                "operatorToken": {
                    "kind": 99634,
                    "flags": 96,
                    "start": 91,
                    "end": 93
                },
                "right": {
                    "kind": 458761,
                    "text": "template",
                    "rawText": "template",
                    "flags": 134217824,
                    "start": 93,
                    "end": 104
                },
                "flags": 33,
                "start": 79,
                "end": 104
            },
            "flags": 16,
            "start": 79,
            "end": 105
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 227,
                    "spans": [
                        {
                            "kind": 65764,
                            "rawText": "a",
                            "text": "a",
                            "expression": {
                                "kind": 134299649,
                                "text": "foo",
                                "rawText": "foo",
                                "flags": 96,
                                "start": 110,
                                "end": 113
                            },
                            "flags": 32,
                            "start": 105,
                            "end": 113
                        }
                    ],
                    "tail": {
                        "kind": 458761,
                        "text": "b",
                        "rawText": "b",
                        "flags": 97,
                        "start": 113,
                        "end": 116
                    },
                    "flags": 33,
                    "start": 105,
                    "end": 116
                },
                "operatorToken": {
                    "kind": 99634,
                    "flags": 96,
                    "start": 116,
                    "end": 118
                },
                "right": {
                    "kind": 227,
                    "spans": [
                        {
                            "kind": 65764,
                            "rawText": "x",
                            "text": "x",
                            "expression": {
                                "kind": 134299649,
                                "text": "bar",
                                "rawText": "bar",
                                "flags": 96,
                                "start": 123,
                                "end": 126
                            },
                            "flags": 32,
                            "start": 118,
                            "end": 126
                        }
                    ],
                    "tail": {
                        "kind": 458761,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "start": 126,
                        "end": 129
                    },
                    "flags": 32,
                    "start": 118,
                    "end": 129
                },
                "flags": 33,
                "start": 105,
                "end": 129
            },
            "flags": 16,
            "start": 105,
            "end": 130
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 227,
                    "spans": [
                        {
                            "kind": 65764,
                            "rawText": "a",
                            "text": "a",
                            "expression": {
                                "kind": 134299649,
                                "text": "i",
                                "rawText": "i",
                                "flags": 96,
                                "start": 135,
                                "end": 136
                            },
                            "flags": 32,
                            "start": 130,
                            "end": 136
                        },
                        {
                            "kind": 65764,
                            "rawText": "",
                            "text": "",
                            "expression": {
                                "kind": 134299649,
                                "text": "j",
                                "rawText": "j",
                                "flags": 96,
                                "start": 139,
                                "end": 140
                            },
                            "flags": 32,
                            "start": 136,
                            "end": 140
                        }
                    ],
                    "tail": {
                        "kind": 458761,
                        "text": "bb",
                        "rawText": "bb",
                        "flags": 97,
                        "start": 140,
                        "end": 144
                    },
                    "flags": 33,
                    "start": 130,
                    "end": 144
                },
                "operatorToken": {
                    "kind": 99634,
                    "flags": 96,
                    "start": 144,
                    "end": 146
                },
                "right": {
                    "kind": 227,
                    "spans": [
                        {
                            "kind": 65764,
                            "rawText": "xxx",
                            "text": "xxx",
                            "expression": {
                                "kind": 134299649,
                                "text": "bar",
                                "rawText": "bar",
                                "flags": 96,
                                "start": 153,
                                "end": 156
                            },
                            "flags": 32,
                            "start": 146,
                            "end": 156
                        }
                    ],
                    "tail": {
                        "kind": 458761,
                        "text": "yyyy",
                        "rawText": "yyyy",
                        "flags": 96,
                        "start": 156,
                        "end": 162
                    },
                    "flags": 32,
                    "start": 146,
                    "end": 162
                },
                "flags": 33,
                "start": 130,
                "end": 162
            },
            "flags": 16,
            "start": 130,
            "end": 163
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 226,
                    "member": {
                        "kind": 134299649,
                        "text": "tag",
                        "rawText": "tag",
                        "flags": 97,
                        "start": 163,
                        "end": 168
                    },
                    "template": {
                        "kind": 458761,
                        "text": "template",
                        "rawText": "template",
                        "flags": 134217824,
                        "start": 168,
                        "end": 178
                    },
                    "flags": 32,
                    "start": 163,
                    "end": 178
                },
                "operatorToken": {
                    "kind": 99634,
                    "flags": 96,
                    "start": 178,
                    "end": 180
                },
                "right": {
                    "kind": 458761,
                    "text": "template2",
                    "rawText": "template2",
                    "flags": 134217824,
                    "start": 180,
                    "end": 192
                },
                "flags": 32,
                "start": 163,
                "end": 192
            },
            "flags": 16,
            "start": 163,
            "end": 193
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 227,
                    "spans": [
                        {
                            "kind": 65764,
                            "rawText": "a",
                            "text": "a",
                            "expression": {
                                "kind": 134299649,
                                "text": "foo",
                                "rawText": "foo",
                                "flags": 96,
                                "start": 198,
                                "end": 201
                            },
                            "flags": 32,
                            "start": 193,
                            "end": 201
                        }
                    ],
                    "tail": {
                        "kind": 458761,
                        "text": "b",
                        "rawText": "b",
                        "flags": 97,
                        "start": 201,
                        "end": 204
                    },
                    "flags": 33,
                    "start": 193,
                    "end": 204
                },
                "operatorToken": {
                    "kind": 99634,
                    "flags": 96,
                    "start": 204,
                    "end": 206
                },
                "right": {
                    "kind": 201392131,
                    "text": "string",
                    "rawText": "'string'",
                    "flags": 4194400,
                    "start": 206,
                    "end": 215
                },
                "flags": 33,
                "start": 193,
                "end": 215
            },
            "flags": 16,
            "start": 193,
            "end": 216
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 201392131,
                    "text": "string",
                    "rawText": "'string'",
                    "flags": 4194401,
                    "start": 216,
                    "end": 225
                },
                "operatorToken": {
                    "kind": 99634,
                    "flags": 96,
                    "start": 225,
                    "end": 227
                },
                "right": {
                    "kind": 227,
                    "spans": [
                        {
                            "kind": 65764,
                            "rawText": "a",
                            "text": "a",
                            "expression": {
                                "kind": 134299649,
                                "text": "foo",
                                "rawText": "foo",
                                "flags": 96,
                                "start": 232,
                                "end": 235
                            },
                            "flags": 32,
                            "start": 227,
                            "end": 235
                        }
                    ],
                    "tail": {
                        "kind": 458761,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "start": 235,
                        "end": 238
                    },
                    "flags": 32,
                    "start": 227,
                    "end": 238
                },
                "flags": 4194401,
                "start": 216,
                "end": 238
            },
            "flags": 16,
            "start": 216,
            "end": 239
        },
        {
            "kind": 120,
            "expression": {
                "kind": 226,
                "member": {
                    "kind": 134299649,
                    "text": "tag",
                    "rawText": "tag",
                    "flags": 97,
                    "start": 239,
                    "end": 244
                },
                "template": {
                    "kind": 227,
                    "spans": [
                        {
                            "kind": 65764,
                            "rawText": "",
                            "text": "",
                            "expression": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "start": 247,
                                "end": 248
                            },
                            "flags": 32,
                            "start": 244,
                            "end": 248
                        }
                    ],
                    "tail": {
                        "kind": 458761,
                        "text": "\nb",
                        "rawText": "\\nb",
                        "flags": 96,
                        "start": 248,
                        "end": 253
                    },
                    "flags": 32,
                    "start": 244,
                    "end": 253
                },
                "flags": 32,
                "start": 239,
                "end": 253
            },
            "flags": 16,
            "start": 239,
            "end": 254
        },
        {
            "kind": 120,
            "expression": {
                "kind": 226,
                "member": {
                    "kind": 134299649,
                    "text": "tag",
                    "rawText": "tag",
                    "flags": 97,
                    "start": 254,
                    "end": 258
                },
                "template": {
                    "kind": 227,
                    "spans": [
                        {
                            "kind": 65764,
                            "rawText": "",
                            "text": "",
                            "expression": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "start": 261,
                                "end": 262
                            },
                            "flags": 32,
                            "start": 258,
                            "end": 262
                        }
                    ],
                    "tail": {
                        "kind": 458761,
                        "text": "\rb",
                        "rawText": "\\rb",
                        "flags": 96,
                        "start": 262,
                        "end": 267
                    },
                    "flags": 32,
                    "start": 258,
                    "end": 267
                },
                "flags": 32,
                "start": 254,
                "end": 267
            },
            "flags": 16,
            "start": 254,
            "end": 268
        },
        {
            "kind": 120,
            "expression": {
                "kind": 226,
                "member": {
                    "kind": 134299649,
                    "text": "tag",
                    "rawText": "tag",
                    "flags": 97,
                    "start": 268,
                    "end": 272
                },
                "template": {
                    "kind": 227,
                    "spans": [
                        {
                            "kind": 65764,
                            "rawText": "",
                            "text": "",
                            "expression": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "start": 275,
                                "end": 276
                            },
                            "flags": 32,
                            "start": 272,
                            "end": 276
                        }
                    ],
                    "tail": {
                        "kind": 458761,
                        "text": "\r\nb",
                        "rawText": "\\r\\nb",
                        "flags": 96,
                        "start": 276,
                        "end": 283
                    },
                    "flags": 32,
                    "start": 272,
                    "end": 283
                },
                "flags": 32,
                "start": 268,
                "end": 283
            },
            "flags": 16,
            "start": 268,
            "end": 284
        },
        {
            "kind": 120,
            "expression": {
                "kind": 226,
                "member": {
                    "kind": 134299649,
                    "text": "tag",
                    "rawText": "tag",
                    "flags": 97,
                    "start": 284,
                    "end": 288
                },
                "template": {
                    "kind": 227,
                    "spans": [
                        {
                            "kind": 65764,
                            "rawText": "",
                            "text": "",
                            "expression": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "start": 291,
                                "end": 292
                            },
                            "flags": 32,
                            "start": 288,
                            "end": 292
                        }
                    ],
                    "tail": {
                        "kind": 458761,
                        "text": "\\nb",
                        "rawText": "\\\\nb",
                        "flags": 96,
                        "start": 292,
                        "end": 298
                    },
                    "flags": 32,
                    "start": 288,
                    "end": 298
                },
                "flags": 32,
                "start": 284,
                "end": 298
            },
            "flags": 16,
            "start": 284,
            "end": 299
        },
        {
            "kind": 120,
            "expression": {
                "kind": 226,
                "member": {
                    "kind": 134299649,
                    "text": "tag",
                    "rawText": "tag",
                    "flags": 97,
                    "start": 299,
                    "end": 303
                },
                "template": {
                    "kind": 227,
                    "spans": [
                        {
                            "kind": 65764,
                            "rawText": "",
                            "text": "",
                            "expression": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "start": 306,
                                "end": 307
                            },
                            "flags": 32,
                            "start": 303,
                            "end": 307
                        }
                    ],
                    "tail": {
                        "kind": 458761,
                        "text": "\\rb",
                        "rawText": "\\\\rb",
                        "flags": 96,
                        "start": 307,
                        "end": 313
                    },
                    "flags": 32,
                    "start": 303,
                    "end": 313
                },
                "flags": 32,
                "start": 299,
                "end": 313
            },
            "flags": 16,
            "start": 299,
            "end": 314
        }
    ],
    "isModule": false,
    "source": "`a\\nb`;\n`a\\rb`;\n`a\\r\\nb`;\n`a\\\\nb`;\n`a\\\\rb`;\n`a\\\\r\\\\nb`;\n`a\\u2028b`;\n`a\\u2029b`;\n\n`a${foo}b` + `template`;\n`a${foo}b` + `x${bar}y`;\n`a${i}${j}bb` + `xxx${bar}yyyy`;\n\ntag`template` + `template2`;\n`a${foo}b` + 'string';\n'string' + `a${foo}b`;\n\ntag`${a}\\nb`;\ntag`${a}\\rb`;\ntag`${a}\\r\\nb`;\ntag`${a}\\\\nb`;\ntag`${a}\\\\rb`;\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 315
}
```

### Printed

```javascript

`a\nb`;
`a\rb`;
`a\r\nb`;
`a\\nb`;
`a\\rb`;
`a\\r\\nb`;
`a\u2028b`;
`a\u2029b`;
`a${foo}b` + `template`;
`a${foo}b` + `x${bar}y`;
`a${i}${j}bb` + `xxx${bar}yyyy`;
tag`template` + `template2`;
`a${foo}b` + '\'string\'';
'\'string\'' + `a${foo}b`;
tag`${a}\nb`;
tag`${a}\rb`;
tag`${a}\r\nb`;
tag`${a}\\nb`;
tag`${a}\\rb`;

```

### Diagnostics

```javascript
✔ No errors
```

