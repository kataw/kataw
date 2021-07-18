# Kataw parser test case

## Input

`````js
tag`\\7`;

tag`\\8`;

tag`\\unicode${x}`;

tag``;

(a?.b)``;

(a?.b.c)``;

`a\\nb`;

`a\u2029b`;

`a\r${b}`;

`a\\n${b}`;

`a\u2029${b}`;

tag`a\u2028b`;

tag`a\u2029${b}`;

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
                "kind": 226,
                "member": {
                    "kind": 134299649,
                    "text": "tag",
                    "rawText": "tag",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 3
                },
                "template": {
                    "kind": 458761,
                    "text": "\\7",
                    "rawText": "\\\\7",
                    "flags": 134217824,
                    "transformFlags": 0,
                    "start": 3,
                    "end": 8
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 0,
                "end": 8
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 9
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
                    "transformFlags": 0,
                    "start": 9,
                    "end": 14
                },
                "template": {
                    "kind": 458761,
                    "text": "\\8",
                    "rawText": "\\\\8",
                    "flags": 134217824,
                    "transformFlags": 0,
                    "start": 14,
                    "end": 19
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 9,
                "end": 19
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 9,
            "end": 20
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
                    "transformFlags": 0,
                    "start": 20,
                    "end": 25
                },
                "template": {
                    "kind": 227,
                    "spans": [
                        {
                            "kind": 65764,
                            "rawText": "\\\\unicode",
                            "text": "\\unicode",
                            "expression": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 37,
                                "end": 38
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 25,
                            "end": 38
                        }
                    ],
                    "tail": {
                        "kind": 458761,
                        "text": "",
                        "rawText": "",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 38,
                        "end": 40
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 25,
                    "end": 40
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 20,
                "end": 40
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 20,
            "end": 41
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
                    "transformFlags": 0,
                    "start": 41,
                    "end": 46
                },
                "template": {
                    "kind": 458761,
                    "text": "",
                    "rawText": "",
                    "flags": 134217824,
                    "transformFlags": 0,
                    "start": 46,
                    "end": 48
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 41,
                "end": 48
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 41,
            "end": 49
        },
        {
            "kind": 120,
            "expression": {
                "kind": 226,
                "member": {
                    "kind": 121,
                    "expression": {
                        "kind": 205,
                        "chainToken": {
                            "kind": 393240,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 53,
                            "end": 55
                        },
                        "member": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 52,
                            "end": 53
                        },
                        "chain": {
                            "kind": 302,
                            "chain": {
                                "kind": 202,
                                "chain": null,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 55,
                                    "end": 56
                                },
                                "flags": 32,
                                "transformFlags": 2,
                                "start": 55,
                                "end": 56
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 55,
                            "end": 56
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 49,
                        "end": 56
                    },
                    "flags": 49,
                    "transformFlags": 0,
                    "start": 33,
                    "end": 57
                },
                "template": {
                    "kind": 458761,
                    "text": "",
                    "rawText": "",
                    "flags": 134217824,
                    "transformFlags": 0,
                    "start": 57,
                    "end": 59
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 49,
                "end": 59
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 49,
            "end": 60
        },
        {
            "kind": 120,
            "expression": {
                "kind": 226,
                "member": {
                    "kind": 121,
                    "expression": {
                        "kind": 205,
                        "chainToken": {
                            "kind": 393240,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 64,
                            "end": 66
                        },
                        "member": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 63,
                            "end": 64
                        },
                        "chain": {
                            "kind": 202,
                            "chain": {
                                "kind": 302,
                                "chain": {
                                    "kind": 202,
                                    "chain": null,
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 66,
                                        "end": 67
                                    },
                                    "flags": 32,
                                    "transformFlags": 2,
                                    "start": 66,
                                    "end": 67
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 66,
                                "end": 67
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "c",
                                "rawText": "c",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 68,
                                "end": 69
                            },
                            "flags": 32,
                            "transformFlags": 2,
                            "start": 67,
                            "end": 69
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 60,
                        "end": 69
                    },
                    "flags": 60,
                    "transformFlags": 0,
                    "start": 33,
                    "end": 70
                },
                "template": {
                    "kind": 458761,
                    "text": "",
                    "rawText": "",
                    "flags": 134217824,
                    "transformFlags": 0,
                    "start": 70,
                    "end": 72
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 60,
                "end": 72
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 60,
            "end": 73
        },
        {
            "kind": 120,
            "expression": {
                "kind": 458761,
                "text": "a\\nb",
                "rawText": "a\\\\nb",
                "flags": 134217824,
                "transformFlags": 0,
                "start": 73,
                "end": 82
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 73,
            "end": 83
        },
        {
            "kind": 120,
            "expression": {
                "kind": 458761,
                "text": "a b",
                "rawText": "a\\u2029b",
                "flags": 134217824,
                "transformFlags": 0,
                "start": 83,
                "end": 95
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 83,
            "end": 96
        },
        {
            "kind": 120,
            "expression": {
                "kind": 227,
                "spans": [
                    {
                        "kind": 65764,
                        "rawText": "a\\r",
                        "text": "ar",
                        "expression": {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 104,
                            "end": 105
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 96,
                        "end": 105
                    }
                ],
                "tail": {
                    "kind": 458761,
                    "text": "",
                    "rawText": "",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 105,
                    "end": 107
                },
                "flags": 33,
                "transformFlags": 0,
                "start": 96,
                "end": 107
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 96,
            "end": 108
        },
        {
            "kind": 120,
            "expression": {
                "kind": 227,
                "spans": [
                    {
                        "kind": 65764,
                        "rawText": "a\\\\n",
                        "text": "a\\n",
                        "expression": {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 117,
                            "end": 118
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 108,
                        "end": 118
                    }
                ],
                "tail": {
                    "kind": 458761,
                    "text": "",
                    "rawText": "",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 118,
                    "end": 120
                },
                "flags": 33,
                "transformFlags": 0,
                "start": 108,
                "end": 120
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 108,
            "end": 121
        },
        {
            "kind": 120,
            "expression": {
                "kind": 227,
                "spans": [
                    {
                        "kind": 65764,
                        "rawText": "a\\u2029",
                        "text": "a ",
                        "expression": {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 133,
                            "end": 134
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 121,
                        "end": 134
                    }
                ],
                "tail": {
                    "kind": 458761,
                    "text": "",
                    "rawText": "",
                    "flags": 16481,
                    "transformFlags": 0,
                    "start": 134,
                    "end": 136
                },
                "flags": 16417,
                "transformFlags": 0,
                "start": 121,
                "end": 136
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 121,
            "end": 137
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
                    "transformFlags": 0,
                    "start": 137,
                    "end": 142
                },
                "template": {
                    "kind": 458761,
                    "text": "a b",
                    "rawText": "a\\u2028b",
                    "flags": 134217824,
                    "transformFlags": 0,
                    "start": 142,
                    "end": 152
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 137,
                "end": 152
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 137,
            "end": 153
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
                    "transformFlags": 0,
                    "start": 153,
                    "end": 158
                },
                "template": {
                    "kind": 227,
                    "spans": [
                        {
                            "kind": 65764,
                            "rawText": "a\\u2029",
                            "text": "a ",
                            "expression": {
                                "kind": 134299649,
                                "text": "b",
                                "rawText": "b",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 168,
                                "end": 169
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 158,
                            "end": 169
                        }
                    ],
                    "tail": {
                        "kind": 458761,
                        "text": "",
                        "rawText": "",
                        "flags": 16480,
                        "transformFlags": 0,
                        "start": 169,
                        "end": 171
                    },
                    "flags": 16416,
                    "transformFlags": 0,
                    "start": 158,
                    "end": 171
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 153,
                "end": 171
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 153,
            "end": 172
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
                    "transformFlags": 0,
                    "start": 172,
                    "end": 177
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
                                "transformFlags": 0,
                                "start": 180,
                                "end": 181
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 177,
                            "end": 181
                        }
                    ],
                    "tail": {
                        "kind": 458761,
                        "text": "\\rb",
                        "rawText": "\\\\rb",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 181,
                        "end": 187
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 177,
                    "end": 187
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 172,
                "end": 187
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 172,
            "end": 188
        }
    ],
    "isModule": false,
    "source": "tag`\\\\7`;\n\ntag`\\\\8`;\n\ntag`\\\\unicode${x}`;\n\ntag``;\n\n(a?.b)``;\n\n(a?.b.c)``;\n\n`a\\\\nb`;\n\n`a\\u2029b`;\n\n`a\\r${b}`;\n\n`a\\\\n${b}`;\n\n`a\\u2029${b}`;\n\ntag`a\\u2028b`;\n\ntag`a\\u2029${b}`;\n\ntag`${a}\\\\rb`;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 188
}
```

### Printed

```javascript
tag`\\7`;
tag`\\8`;

tag`\\unicode${x}`;

tag``;

(a?.b)``;

(a?.b.c)``;

`a\\nb`;

`a\u2029b`;

`a\r${b}`;

`a\\n${b}`;

`a\u2029${b}`;

tag`a\u2028b`;

tag`a\u2029${b}`;

tag`${a}\\rb`;

```

### Diagnostics

```javascript
✔ No errors
```

