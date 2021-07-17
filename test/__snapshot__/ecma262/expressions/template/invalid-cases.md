# Kataw parser test case

## Input

`````js
a?.b``;
a?.(b)``;
a?.b.c``;
a?.(b).c``;
a?.[b].c``;

a?.[b]`${d}`;
a?.(b).c`${d}`;
a?.[b].c`${d}`;
a?.b
``;

`\7`;
`\8`;
`\9`;
`\00`;
`\00${x}`;
`${x}\00`;
`${x}\00${y}`;
`\unicode`;
`\unicode${x}`;
`${x}\unicode`;
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
                "kind": 205,
                "chainToken": {
                    "kind": 393240,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 3
                },
                "member": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 1
                },
                "chain": {
                    "kind": 226,
                    "member": {
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
                                "start": 3,
                                "end": 4
                            },
                            "flags": 32,
                            "transformFlags": 2,
                            "start": 3,
                            "end": 4
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 3,
                        "end": 4
                    },
                    "template": {
                        "kind": 458761,
                        "text": "",
                        "rawText": "",
                        "flags": 134217824,
                        "transformFlags": 0,
                        "start": 4,
                        "end": 6
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 4,
                    "end": 6
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 0,
                "end": 6
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 7
        },
        {
            "kind": 120,
            "expression": {
                "kind": 205,
                "chainToken": {
                    "kind": 393240,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 9,
                    "end": 11
                },
                "member": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 7,
                    "end": 9
                },
                "chain": {
                    "kind": 226,
                    "member": {
                        "kind": 302,
                        "chain": {
                            "kind": 204,
                            "chain": null,
                            "typeArguments": null,
                            "argumentList": {
                                "kind": 256,
                                "elements": [
                                    {
                                        "kind": 134299649,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 12,
                                        "end": 13
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 12,
                                "end": 13
                            },
                            "flags": 32,
                            "transformFlags": 1,
                            "start": 11,
                            "end": 14
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 11,
                        "end": 14
                    },
                    "template": {
                        "kind": 458761,
                        "text": "",
                        "rawText": "",
                        "flags": 134217824,
                        "transformFlags": 0,
                        "start": 14,
                        "end": 16
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 14,
                    "end": 16
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 7,
                "end": 16
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 7,
            "end": 17
        },
        {
            "kind": 120,
            "expression": {
                "kind": 226,
                "member": {
                    "kind": 205,
                    "chainToken": {
                        "kind": 393240,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 19,
                        "end": 21
                    },
                    "member": {
                        "kind": 134299649,
                        "text": "a",
                        "rawText": "a",
                        "flags": 97,
                        "transformFlags": 0,
                        "start": 17,
                        "end": 19
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
                                    "start": 21,
                                    "end": 22
                                },
                                "flags": 32,
                                "transformFlags": 2,
                                "start": 21,
                                "end": 22
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 21,
                            "end": 22
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "c",
                            "rawText": "c",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 23,
                            "end": 24
                        },
                        "flags": 32,
                        "transformFlags": 2,
                        "start": 22,
                        "end": 24
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 17,
                    "end": 24
                },
                "template": {
                    "kind": 458761,
                    "text": "",
                    "rawText": "",
                    "flags": 134217824,
                    "transformFlags": 0,
                    "start": 24,
                    "end": 26
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 17,
                "end": 26
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 17,
            "end": 27
        },
        {
            "kind": 120,
            "expression": {
                "kind": 226,
                "member": {
                    "kind": 205,
                    "chainToken": {
                        "kind": 393240,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 29,
                        "end": 31
                    },
                    "member": {
                        "kind": 134299649,
                        "text": "a",
                        "rawText": "a",
                        "flags": 97,
                        "transformFlags": 0,
                        "start": 27,
                        "end": 29
                    },
                    "chain": {
                        "kind": 202,
                        "chain": {
                            "kind": 302,
                            "chain": {
                                "kind": 204,
                                "chain": null,
                                "typeArguments": null,
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 134299649,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 32,
                                            "end": 33
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 32,
                                    "end": 33
                                },
                                "flags": 32,
                                "transformFlags": 1,
                                "start": 31,
                                "end": 34
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 31,
                            "end": 34
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "c",
                            "rawText": "c",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 35,
                            "end": 36
                        },
                        "flags": 32,
                        "transformFlags": 2,
                        "start": 34,
                        "end": 36
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 27,
                    "end": 36
                },
                "template": {
                    "kind": 458761,
                    "text": "",
                    "rawText": "",
                    "flags": 134217824,
                    "transformFlags": 0,
                    "start": 36,
                    "end": 38
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 27,
                "end": 38
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 27,
            "end": 39
        },
        {
            "kind": 120,
            "expression": {
                "kind": 226,
                "member": {
                    "kind": 205,
                    "chainToken": {
                        "kind": 393240,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 41,
                        "end": 43
                    },
                    "member": {
                        "kind": 134299649,
                        "text": "a",
                        "rawText": "a",
                        "flags": 97,
                        "transformFlags": 0,
                        "start": 39,
                        "end": 41
                    },
                    "chain": {
                        "kind": 202,
                        "chain": {
                            "kind": 302,
                            "chain": {
                                "kind": 203,
                                "chain": null,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 44,
                                    "end": 45
                                },
                                "flags": 32,
                                "transformFlags": 4,
                                "start": 43,
                                "end": 45
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 43,
                            "end": 46
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "c",
                            "rawText": "c",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 47,
                            "end": 48
                        },
                        "flags": 32,
                        "transformFlags": 2,
                        "start": 46,
                        "end": 48
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 39,
                    "end": 48
                },
                "template": {
                    "kind": 458761,
                    "text": "",
                    "rawText": "",
                    "flags": 134217824,
                    "transformFlags": 0,
                    "start": 48,
                    "end": 50
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 39,
                "end": 50
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 39,
            "end": 51
        },
        {
            "kind": 120,
            "expression": {
                "kind": 205,
                "chainToken": {
                    "kind": 393240,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 54,
                    "end": 56
                },
                "member": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 51,
                    "end": 54
                },
                "chain": {
                    "kind": 226,
                    "member": {
                        "kind": 302,
                        "chain": {
                            "kind": 203,
                            "chain": null,
                            "expression": {
                                "kind": 134299649,
                                "text": "b",
                                "rawText": "b",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 57,
                                "end": 58
                            },
                            "flags": 32,
                            "transformFlags": 4,
                            "start": 56,
                            "end": 58
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 56,
                        "end": 59
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
                                    "text": "d",
                                    "rawText": "d",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 62,
                                    "end": 63
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 59,
                                "end": 63
                            }
                        ],
                        "tail": {
                            "kind": 458761,
                            "text": "",
                            "rawText": "",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 63,
                            "end": 65
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 59,
                        "end": 65
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 59,
                    "end": 65
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 51,
                "end": 65
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 51,
            "end": 66
        },
        {
            "kind": 120,
            "expression": {
                "kind": 226,
                "member": {
                    "kind": 205,
                    "chainToken": {
                        "kind": 393240,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 68,
                        "end": 70
                    },
                    "member": {
                        "kind": 134299649,
                        "text": "a",
                        "rawText": "a",
                        "flags": 97,
                        "transformFlags": 0,
                        "start": 66,
                        "end": 68
                    },
                    "chain": {
                        "kind": 202,
                        "chain": {
                            "kind": 302,
                            "chain": {
                                "kind": 204,
                                "chain": null,
                                "typeArguments": null,
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 134299649,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 71,
                                            "end": 72
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 71,
                                    "end": 72
                                },
                                "flags": 32,
                                "transformFlags": 1,
                                "start": 70,
                                "end": 73
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 70,
                            "end": 73
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "c",
                            "rawText": "c",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 74,
                            "end": 75
                        },
                        "flags": 32,
                        "transformFlags": 2,
                        "start": 73,
                        "end": 75
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 66,
                    "end": 75
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
                                "text": "d",
                                "rawText": "d",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 78,
                                "end": 79
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 75,
                            "end": 79
                        }
                    ],
                    "tail": {
                        "kind": 458761,
                        "text": "",
                        "rawText": "",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 79,
                        "end": 81
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 75,
                    "end": 81
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 66,
                "end": 81
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 66,
            "end": 82
        },
        {
            "kind": 120,
            "expression": {
                "kind": 226,
                "member": {
                    "kind": 205,
                    "chainToken": {
                        "kind": 393240,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 84,
                        "end": 86
                    },
                    "member": {
                        "kind": 134299649,
                        "text": "a",
                        "rawText": "a",
                        "flags": 97,
                        "transformFlags": 0,
                        "start": 82,
                        "end": 84
                    },
                    "chain": {
                        "kind": 202,
                        "chain": {
                            "kind": 302,
                            "chain": {
                                "kind": 203,
                                "chain": null,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 87,
                                    "end": 88
                                },
                                "flags": 32,
                                "transformFlags": 4,
                                "start": 86,
                                "end": 88
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 86,
                            "end": 89
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "c",
                            "rawText": "c",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 90,
                            "end": 91
                        },
                        "flags": 32,
                        "transformFlags": 2,
                        "start": 89,
                        "end": 91
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 82,
                    "end": 91
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
                                "text": "d",
                                "rawText": "d",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 94,
                                "end": 95
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 91,
                            "end": 95
                        }
                    ],
                    "tail": {
                        "kind": 458761,
                        "text": "",
                        "rawText": "",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 95,
                        "end": 97
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 91,
                    "end": 97
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 82,
                "end": 97
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 82,
            "end": 98
        },
        {
            "kind": 120,
            "expression": {
                "kind": 205,
                "chainToken": {
                    "kind": 393240,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 100,
                    "end": 102
                },
                "member": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 98,
                    "end": 100
                },
                "chain": {
                    "kind": 226,
                    "member": {
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
                                "start": 102,
                                "end": 103
                            },
                            "flags": 32,
                            "transformFlags": 2,
                            "start": 102,
                            "end": 103
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 102,
                        "end": 103
                    },
                    "template": {
                        "kind": 458761,
                        "text": "",
                        "rawText": "",
                        "flags": 134217824,
                        "transformFlags": 0,
                        "start": 103,
                        "end": 106
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 103,
                    "end": 106
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 98,
                "end": 106
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 98,
            "end": 107
        },
        {
            "kind": 120,
            "expression": {
                "kind": 458761,
                "text": "7",
                "rawText": "\\7",
                "flags": 134217824,
                "transformFlags": 0,
                "start": 107,
                "end": 113
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 107,
            "end": 114
        },
        {
            "kind": 120,
            "expression": {
                "kind": 458761,
                "text": "8",
                "rawText": "\\8",
                "flags": 134217824,
                "transformFlags": 0,
                "start": 114,
                "end": 119
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 114,
            "end": 120
        },
        {
            "kind": 120,
            "expression": {
                "kind": 458761,
                "text": "9",
                "rawText": "\\9",
                "flags": 134217824,
                "transformFlags": 0,
                "start": 120,
                "end": 125
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 120,
            "end": 126
        },
        {
            "kind": 120,
            "expression": {
                "kind": 458761,
                "text": "00",
                "rawText": "\\00",
                "flags": 134217824,
                "transformFlags": 0,
                "start": 126,
                "end": 132
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 126,
            "end": 133
        },
        {
            "kind": 120,
            "expression": {
                "kind": 227,
                "spans": [
                    {
                        "kind": 65764,
                        "rawText": "\\00",
                        "text": "00",
                        "expression": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 140,
                            "end": 141
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 133,
                        "end": 141
                    }
                ],
                "tail": {
                    "kind": 458761,
                    "text": "",
                    "rawText": "",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 141,
                    "end": 143
                },
                "flags": 33,
                "transformFlags": 0,
                "start": 133,
                "end": 143
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 133,
            "end": 144
        },
        {
            "kind": 120,
            "expression": {
                "kind": 227,
                "spans": [
                    {
                        "kind": 65764,
                        "rawText": "",
                        "text": "",
                        "expression": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 148,
                            "end": 149
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 144,
                        "end": 149
                    }
                ],
                "tail": {
                    "kind": 458761,
                    "text": "00",
                    "rawText": "\\00",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 149,
                    "end": 154
                },
                "flags": 33,
                "transformFlags": 0,
                "start": 144,
                "end": 154
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 144,
            "end": 155
        },
        {
            "kind": 120,
            "expression": {
                "kind": 227,
                "spans": [
                    {
                        "kind": 65764,
                        "rawText": "",
                        "text": "",
                        "expression": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 159,
                            "end": 160
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 155,
                        "end": 160
                    },
                    {
                        "kind": 65764,
                        "rawText": "\\00",
                        "text": "00",
                        "expression": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 166,
                            "end": 167
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 160,
                        "end": 167
                    }
                ],
                "tail": {
                    "kind": 458761,
                    "text": "",
                    "rawText": "",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 167,
                    "end": 169
                },
                "flags": 33,
                "transformFlags": 0,
                "start": 155,
                "end": 169
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 155,
            "end": 170
        },
        {
            "kind": 120,
            "expression": {
                "kind": 458761,
                "text": "unicode",
                "rawText": "\\unicode",
                "flags": 134217824,
                "transformFlags": 0,
                "start": 170,
                "end": 181
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 170,
            "end": 182
        },
        {
            "kind": 120,
            "expression": {
                "kind": 227,
                "spans": [
                    {
                        "kind": 65764,
                        "rawText": "\\unicode",
                        "text": "unicode",
                        "expression": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 194,
                            "end": 195
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 182,
                        "end": 195
                    }
                ],
                "tail": {
                    "kind": 458761,
                    "text": "",
                    "rawText": "",
                    "flags": 16481,
                    "transformFlags": 0,
                    "start": 195,
                    "end": 197
                },
                "flags": 16417,
                "transformFlags": 0,
                "start": 182,
                "end": 197
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 182,
            "end": 198
        },
        {
            "kind": 120,
            "expression": {
                "kind": 227,
                "spans": [
                    {
                        "kind": 65764,
                        "rawText": "",
                        "text": "",
                        "expression": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 202,
                            "end": 203
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 198,
                        "end": 203
                    }
                ],
                "tail": {
                    "kind": 458761,
                    "text": "unicode",
                    "rawText": "\\unicode",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 203,
                    "end": 213
                },
                "flags": 33,
                "transformFlags": 0,
                "start": 198,
                "end": 213
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 198,
            "end": 214
        }
    ],
    "isModule": false,
    "source": "a?.b``;\na?.(b)``;\na?.b.c``;\na?.(b).c``;\na?.[b].c``;\n\na?.[b]`${d}`;\na?.(b).c`${d}`;\na?.[b].c`${d}`;\na?.b\n``;\n\n`\\7`;\n`\\8`;\n`\\9`;\n`\\00`;\n`\\00${x}`;\n`${x}\\00`;\n`${x}\\00${y}`;\n`\\unicode`;\n`\\unicode${x}`;\n`${x}\\unicode`;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 214
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Tagged template expressions are not permitted in an optional chain. - start: 4, end: 6
✖ Tagged template expressions are not permitted in an optional chain. - start: 14, end: 16
✖ Tagged template expressions are not permitted in an optional chain. - start: 59, end: 62
✖ Tagged template expressions are not permitted in an optional chain. - start: 103, end: 106
✖ Octal escape sequences are not allowed in template literal - start: 110, end: 112
✖ Escapes \8 or \9 are not syntactically valid escapes - start: 116, end: 118
✖ Escapes \8 or \9 are not syntactically valid escapes - start: 122, end: 124
✖ Octal escape sequences are not allowed in template literal - start: 128, end: 130
✖ Octal escape sequences are not allowed in template literal - start: 135, end: 137
✖ Octal escape sequences are not allowed in template literal - start: 150, end: 152
✖ Octal escape sequences are not allowed in template literal - start: 161, end: 163
✖ Invalid hexadecimal escape sequence - start: 172, end: 174
✖ Invalid hexadecimal escape sequence - start: 184, end: 186
✖ Invalid hexadecimal escape sequence - start: 204, end: 206

```

