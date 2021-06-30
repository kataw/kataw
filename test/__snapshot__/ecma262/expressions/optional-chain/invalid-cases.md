# Kataw parser test case

## Input

`````js
x?.#[] = 0;

x?.[] = 0;

x?.x?.[ = 0;

x?.x?.] = 0;

x?.x?. = 0;

x?.[] = 0;

x?.x?.x?.x?.x?.x?.x?.[] = 0;

x?.x?.x?.x?.x?.x?.x?.] = 0;

x?.x?.[] = 0;

x?.x?.x?.x?.x?.x?.x?.x?.[] = 0;

x?.x = 0;

x?.x?.x?.x = 0;

x?.x?.x?.x /= 0;

x?.x?. = 0;

#x?.x?. = 0;

#x?.#x?. = 0;

x?.#x?. = 0;

x?.()x?. = 0;

x?.(x?. = 0;

x?.)x?. = 0;

x?.()?. = 0;

x?.y = 0;
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
                "kind": 125,
                "left": {
                    "kind": 205,
                    "chainToken": {
                        "kind": 393240,
                        "flags": 64,
                        "start": 1,
                        "end": 3
                    },
                    "member": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 0,
                        "end": 1
                    },
                    "chain": {
                        "kind": 302,
                        "chain": {
                            "kind": 202,
                            "chain": null,
                            "expression": {
                                "kind": 67191035,
                                "text": "#",
                                "rawText": "x",
                                "flags": 96,
                                "start": 3,
                                "end": 4
                            },
                            "flags": 536870944,
                            "start": 3,
                            "end": 4
                        },
                        "flags": 32,
                        "start": 3,
                        "end": 4
                    },
                    "flags": 32,
                    "start": 0,
                    "end": 6
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 6,
                    "end": 8
                },
                "right": {
                    "kind": 201392130,
                    "text": 0,
                    "rawText": "0",
                    "flags": 96,
                    "start": 8,
                    "end": 10
                },
                "flags": 32,
                "start": 0,
                "end": 10
            },
            "flags": 16,
            "start": 0,
            "end": 11
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 205,
                    "chainToken": {
                        "kind": 393240,
                        "flags": 64,
                        "start": 14,
                        "end": 16
                    },
                    "member": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 11,
                        "end": 14
                    },
                    "chain": {
                        "kind": 302,
                        "chain": null,
                        "flags": 32,
                        "start": 16,
                        "end": 18
                    },
                    "flags": 32,
                    "start": 11,
                    "end": 18
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 18,
                    "end": 20
                },
                "right": {
                    "kind": 201392130,
                    "text": 0,
                    "rawText": "0",
                    "flags": 96,
                    "start": 20,
                    "end": 22
                },
                "flags": 32,
                "start": 11,
                "end": 22
            },
            "flags": 16,
            "start": 11,
            "end": 23
        },
        {
            "kind": 120,
            "expression": {
                "kind": 205,
                "chainToken": {
                    "kind": 393240,
                    "flags": 64,
                    "start": 29,
                    "end": 31
                },
                "member": {
                    "kind": 205,
                    "chainToken": {
                        "kind": 393240,
                        "flags": 64,
                        "start": 26,
                        "end": 28
                    },
                    "member": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 23,
                        "end": 26
                    },
                    "chain": {
                        "kind": 302,
                        "chain": {
                            "kind": 202,
                            "chain": null,
                            "expression": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 28,
                                "end": 29
                            },
                            "flags": 536870944,
                            "start": 28,
                            "end": 29
                        },
                        "flags": 32,
                        "start": 28,
                        "end": 29
                    },
                    "flags": 32,
                    "start": 23,
                    "end": 29
                },
                "chain": {
                    "kind": 302,
                    "chain": {
                        "kind": 203,
                        "chain": null,
                        "expression": {
                            "kind": 125,
                            "left": {
                                "kind": 16637,
                                "text": "",
                                "rawText": "",
                                "flags": 64,
                                "start": 32,
                                "end": 32
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 96,
                                "start": 32,
                                "end": 34
                            },
                            "right": {
                                "kind": 201392130,
                                "text": 0,
                                "rawText": "0",
                                "flags": 96,
                                "start": 34,
                                "end": 36
                            },
                            "flags": 32,
                            "start": 32,
                            "end": 36
                        },
                        "flags": 536870944,
                        "start": 31,
                        "end": 36
                    },
                    "flags": 32,
                    "start": 31,
                    "end": 36
                },
                "flags": 32,
                "start": 23,
                "end": 36
            },
            "flags": 16,
            "start": 23,
            "end": 37
        },
        {
            "kind": 120,
            "expression": {
                "kind": 205,
                "chainToken": {
                    "kind": 393240,
                    "flags": 64,
                    "start": 43,
                    "end": 45
                },
                "member": {
                    "kind": 205,
                    "chainToken": {
                        "kind": 393240,
                        "flags": 64,
                        "start": 40,
                        "end": 42
                    },
                    "member": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 37,
                        "end": 40
                    },
                    "chain": {
                        "kind": 302,
                        "chain": {
                            "kind": 202,
                            "chain": null,
                            "expression": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 42,
                                "end": 43
                            },
                            "flags": 536870944,
                            "start": 42,
                            "end": 43
                        },
                        "flags": 32,
                        "start": 42,
                        "end": 43
                    },
                    "flags": 32,
                    "start": 37,
                    "end": 43
                },
                "chain": {
                    "kind": 302,
                    "chain": null,
                    "flags": 32,
                    "start": 45,
                    "end": 45
                },
                "flags": 32,
                "start": 37,
                "end": 45
            },
            "flags": 16,
            "start": 37,
            "end": 45
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 0,
                "rawText": "0",
                "flags": 96,
                "start": 48,
                "end": 50
            },
            "flags": 16,
            "start": 48,
            "end": 51
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 205,
                    "chainToken": {
                        "kind": 393240,
                        "flags": 64,
                        "start": 57,
                        "end": 59
                    },
                    "member": {
                        "kind": 205,
                        "chainToken": {
                            "kind": 393240,
                            "flags": 64,
                            "start": 54,
                            "end": 56
                        },
                        "member": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 51,
                            "end": 54
                        },
                        "chain": {
                            "kind": 302,
                            "chain": {
                                "kind": 202,
                                "chain": null,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 56,
                                    "end": 57
                                },
                                "flags": 536870944,
                                "start": 56,
                                "end": 57
                            },
                            "flags": 32,
                            "start": 56,
                            "end": 57
                        },
                        "flags": 32,
                        "start": 51,
                        "end": 57
                    },
                    "chain": {
                        "kind": 302,
                        "chain": null,
                        "flags": 32,
                        "start": 59,
                        "end": 59
                    },
                    "flags": 32,
                    "start": 51,
                    "end": 59
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 59,
                    "end": 61
                },
                "right": {
                    "kind": 201392130,
                    "text": 0,
                    "rawText": "0",
                    "flags": 96,
                    "start": 61,
                    "end": 63
                },
                "flags": 32,
                "start": 51,
                "end": 63
            },
            "flags": 16,
            "start": 51,
            "end": 64
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 205,
                    "chainToken": {
                        "kind": 393240,
                        "flags": 64,
                        "start": 67,
                        "end": 69
                    },
                    "member": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 64,
                        "end": 67
                    },
                    "chain": {
                        "kind": 302,
                        "chain": null,
                        "flags": 32,
                        "start": 69,
                        "end": 71
                    },
                    "flags": 32,
                    "start": 64,
                    "end": 71
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 71,
                    "end": 73
                },
                "right": {
                    "kind": 201392130,
                    "text": 0,
                    "rawText": "0",
                    "flags": 96,
                    "start": 73,
                    "end": 75
                },
                "flags": 32,
                "start": 64,
                "end": 75
            },
            "flags": 16,
            "start": 64,
            "end": 76
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 205,
                    "chainToken": {
                        "kind": 393240,
                        "flags": 64,
                        "start": 97,
                        "end": 99
                    },
                    "member": {
                        "kind": 205,
                        "chainToken": {
                            "kind": 393240,
                            "flags": 64,
                            "start": 94,
                            "end": 96
                        },
                        "member": {
                            "kind": 205,
                            "chainToken": {
                                "kind": 393240,
                                "flags": 64,
                                "start": 91,
                                "end": 93
                            },
                            "member": {
                                "kind": 205,
                                "chainToken": {
                                    "kind": 393240,
                                    "flags": 64,
                                    "start": 88,
                                    "end": 90
                                },
                                "member": {
                                    "kind": 205,
                                    "chainToken": {
                                        "kind": 393240,
                                        "flags": 64,
                                        "start": 85,
                                        "end": 87
                                    },
                                    "member": {
                                        "kind": 205,
                                        "chainToken": {
                                            "kind": 393240,
                                            "flags": 64,
                                            "start": 82,
                                            "end": 84
                                        },
                                        "member": {
                                            "kind": 205,
                                            "chainToken": {
                                                "kind": 393240,
                                                "flags": 64,
                                                "start": 79,
                                                "end": 81
                                            },
                                            "member": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 76,
                                                "end": 79
                                            },
                                            "chain": {
                                                "kind": 302,
                                                "chain": {
                                                    "kind": 202,
                                                    "chain": null,
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 96,
                                                        "start": 81,
                                                        "end": 82
                                                    },
                                                    "flags": 536870944,
                                                    "start": 81,
                                                    "end": 82
                                                },
                                                "flags": 32,
                                                "start": 81,
                                                "end": 82
                                            },
                                            "flags": 32,
                                            "start": 76,
                                            "end": 82
                                        },
                                        "chain": {
                                            "kind": 302,
                                            "chain": {
                                                "kind": 202,
                                                "chain": null,
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "start": 84,
                                                    "end": 85
                                                },
                                                "flags": 536870944,
                                                "start": 84,
                                                "end": 85
                                            },
                                            "flags": 32,
                                            "start": 84,
                                            "end": 85
                                        },
                                        "flags": 32,
                                        "start": 76,
                                        "end": 85
                                    },
                                    "chain": {
                                        "kind": 302,
                                        "chain": {
                                            "kind": 202,
                                            "chain": null,
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 87,
                                                "end": 88
                                            },
                                            "flags": 536870944,
                                            "start": 87,
                                            "end": 88
                                        },
                                        "flags": 32,
                                        "start": 87,
                                        "end": 88
                                    },
                                    "flags": 32,
                                    "start": 76,
                                    "end": 88
                                },
                                "chain": {
                                    "kind": 302,
                                    "chain": {
                                        "kind": 202,
                                        "chain": null,
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 90,
                                            "end": 91
                                        },
                                        "flags": 536870944,
                                        "start": 90,
                                        "end": 91
                                    },
                                    "flags": 32,
                                    "start": 90,
                                    "end": 91
                                },
                                "flags": 32,
                                "start": 76,
                                "end": 91
                            },
                            "chain": {
                                "kind": 302,
                                "chain": {
                                    "kind": 202,
                                    "chain": null,
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 93,
                                        "end": 94
                                    },
                                    "flags": 536870944,
                                    "start": 93,
                                    "end": 94
                                },
                                "flags": 32,
                                "start": 93,
                                "end": 94
                            },
                            "flags": 32,
                            "start": 76,
                            "end": 94
                        },
                        "chain": {
                            "kind": 302,
                            "chain": {
                                "kind": 202,
                                "chain": null,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 96,
                                    "end": 97
                                },
                                "flags": 536870944,
                                "start": 96,
                                "end": 97
                            },
                            "flags": 32,
                            "start": 96,
                            "end": 97
                        },
                        "flags": 32,
                        "start": 76,
                        "end": 97
                    },
                    "chain": {
                        "kind": 302,
                        "chain": null,
                        "flags": 32,
                        "start": 99,
                        "end": 101
                    },
                    "flags": 32,
                    "start": 76,
                    "end": 101
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 101,
                    "end": 103
                },
                "right": {
                    "kind": 201392130,
                    "text": 0,
                    "rawText": "0",
                    "flags": 96,
                    "start": 103,
                    "end": 105
                },
                "flags": 32,
                "start": 76,
                "end": 105
            },
            "flags": 16,
            "start": 76,
            "end": 106
        },
        {
            "kind": 120,
            "expression": {
                "kind": 205,
                "chainToken": {
                    "kind": 393240,
                    "flags": 64,
                    "start": 127,
                    "end": 129
                },
                "member": {
                    "kind": 205,
                    "chainToken": {
                        "kind": 393240,
                        "flags": 64,
                        "start": 124,
                        "end": 126
                    },
                    "member": {
                        "kind": 205,
                        "chainToken": {
                            "kind": 393240,
                            "flags": 64,
                            "start": 121,
                            "end": 123
                        },
                        "member": {
                            "kind": 205,
                            "chainToken": {
                                "kind": 393240,
                                "flags": 64,
                                "start": 118,
                                "end": 120
                            },
                            "member": {
                                "kind": 205,
                                "chainToken": {
                                    "kind": 393240,
                                    "flags": 64,
                                    "start": 115,
                                    "end": 117
                                },
                                "member": {
                                    "kind": 205,
                                    "chainToken": {
                                        "kind": 393240,
                                        "flags": 64,
                                        "start": 112,
                                        "end": 114
                                    },
                                    "member": {
                                        "kind": 205,
                                        "chainToken": {
                                            "kind": 393240,
                                            "flags": 64,
                                            "start": 109,
                                            "end": 111
                                        },
                                        "member": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 106,
                                            "end": 109
                                        },
                                        "chain": {
                                            "kind": 302,
                                            "chain": {
                                                "kind": 202,
                                                "chain": null,
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "start": 111,
                                                    "end": 112
                                                },
                                                "flags": 536870944,
                                                "start": 111,
                                                "end": 112
                                            },
                                            "flags": 32,
                                            "start": 111,
                                            "end": 112
                                        },
                                        "flags": 32,
                                        "start": 106,
                                        "end": 112
                                    },
                                    "chain": {
                                        "kind": 302,
                                        "chain": {
                                            "kind": 202,
                                            "chain": null,
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 114,
                                                "end": 115
                                            },
                                            "flags": 536870944,
                                            "start": 114,
                                            "end": 115
                                        },
                                        "flags": 32,
                                        "start": 114,
                                        "end": 115
                                    },
                                    "flags": 32,
                                    "start": 106,
                                    "end": 115
                                },
                                "chain": {
                                    "kind": 302,
                                    "chain": {
                                        "kind": 202,
                                        "chain": null,
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 117,
                                            "end": 118
                                        },
                                        "flags": 536870944,
                                        "start": 117,
                                        "end": 118
                                    },
                                    "flags": 32,
                                    "start": 117,
                                    "end": 118
                                },
                                "flags": 32,
                                "start": 106,
                                "end": 118
                            },
                            "chain": {
                                "kind": 302,
                                "chain": {
                                    "kind": 202,
                                    "chain": null,
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 120,
                                        "end": 121
                                    },
                                    "flags": 536870944,
                                    "start": 120,
                                    "end": 121
                                },
                                "flags": 32,
                                "start": 120,
                                "end": 121
                            },
                            "flags": 32,
                            "start": 106,
                            "end": 121
                        },
                        "chain": {
                            "kind": 302,
                            "chain": {
                                "kind": 202,
                                "chain": null,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 123,
                                    "end": 124
                                },
                                "flags": 536870944,
                                "start": 123,
                                "end": 124
                            },
                            "flags": 32,
                            "start": 123,
                            "end": 124
                        },
                        "flags": 32,
                        "start": 106,
                        "end": 124
                    },
                    "chain": {
                        "kind": 302,
                        "chain": {
                            "kind": 202,
                            "chain": null,
                            "expression": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 126,
                                "end": 127
                            },
                            "flags": 536870944,
                            "start": 126,
                            "end": 127
                        },
                        "flags": 32,
                        "start": 126,
                        "end": 127
                    },
                    "flags": 32,
                    "start": 106,
                    "end": 127
                },
                "chain": {
                    "kind": 302,
                    "chain": null,
                    "flags": 32,
                    "start": 129,
                    "end": 129
                },
                "flags": 32,
                "start": 106,
                "end": 129
            },
            "flags": 16,
            "start": 106,
            "end": 129
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 0,
                "rawText": "0",
                "flags": 96,
                "start": 132,
                "end": 134
            },
            "flags": 16,
            "start": 132,
            "end": 135
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 205,
                    "chainToken": {
                        "kind": 393240,
                        "flags": 64,
                        "start": 141,
                        "end": 143
                    },
                    "member": {
                        "kind": 205,
                        "chainToken": {
                            "kind": 393240,
                            "flags": 64,
                            "start": 138,
                            "end": 140
                        },
                        "member": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 135,
                            "end": 138
                        },
                        "chain": {
                            "kind": 302,
                            "chain": {
                                "kind": 202,
                                "chain": null,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 140,
                                    "end": 141
                                },
                                "flags": 536870944,
                                "start": 140,
                                "end": 141
                            },
                            "flags": 32,
                            "start": 140,
                            "end": 141
                        },
                        "flags": 32,
                        "start": 135,
                        "end": 141
                    },
                    "chain": {
                        "kind": 302,
                        "chain": null,
                        "flags": 32,
                        "start": 143,
                        "end": 145
                    },
                    "flags": 32,
                    "start": 135,
                    "end": 145
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 145,
                    "end": 147
                },
                "right": {
                    "kind": 201392130,
                    "text": 0,
                    "rawText": "0",
                    "flags": 96,
                    "start": 147,
                    "end": 149
                },
                "flags": 32,
                "start": 135,
                "end": 149
            },
            "flags": 16,
            "start": 135,
            "end": 150
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 205,
                    "chainToken": {
                        "kind": 393240,
                        "flags": 64,
                        "start": 174,
                        "end": 176
                    },
                    "member": {
                        "kind": 205,
                        "chainToken": {
                            "kind": 393240,
                            "flags": 64,
                            "start": 171,
                            "end": 173
                        },
                        "member": {
                            "kind": 205,
                            "chainToken": {
                                "kind": 393240,
                                "flags": 64,
                                "start": 168,
                                "end": 170
                            },
                            "member": {
                                "kind": 205,
                                "chainToken": {
                                    "kind": 393240,
                                    "flags": 64,
                                    "start": 165,
                                    "end": 167
                                },
                                "member": {
                                    "kind": 205,
                                    "chainToken": {
                                        "kind": 393240,
                                        "flags": 64,
                                        "start": 162,
                                        "end": 164
                                    },
                                    "member": {
                                        "kind": 205,
                                        "chainToken": {
                                            "kind": 393240,
                                            "flags": 64,
                                            "start": 159,
                                            "end": 161
                                        },
                                        "member": {
                                            "kind": 205,
                                            "chainToken": {
                                                "kind": 393240,
                                                "flags": 64,
                                                "start": 156,
                                                "end": 158
                                            },
                                            "member": {
                                                "kind": 205,
                                                "chainToken": {
                                                    "kind": 393240,
                                                    "flags": 64,
                                                    "start": 153,
                                                    "end": 155
                                                },
                                                "member": {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "start": 150,
                                                    "end": 153
                                                },
                                                "chain": {
                                                    "kind": 302,
                                                    "chain": {
                                                        "kind": 202,
                                                        "chain": null,
                                                        "expression": {
                                                            "kind": 134299649,
                                                            "text": "x",
                                                            "rawText": "x",
                                                            "flags": 96,
                                                            "start": 155,
                                                            "end": 156
                                                        },
                                                        "flags": 536870944,
                                                        "start": 155,
                                                        "end": 156
                                                    },
                                                    "flags": 32,
                                                    "start": 155,
                                                    "end": 156
                                                },
                                                "flags": 32,
                                                "start": 150,
                                                "end": 156
                                            },
                                            "chain": {
                                                "kind": 302,
                                                "chain": {
                                                    "kind": 202,
                                                    "chain": null,
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 96,
                                                        "start": 158,
                                                        "end": 159
                                                    },
                                                    "flags": 536870944,
                                                    "start": 158,
                                                    "end": 159
                                                },
                                                "flags": 32,
                                                "start": 158,
                                                "end": 159
                                            },
                                            "flags": 32,
                                            "start": 150,
                                            "end": 159
                                        },
                                        "chain": {
                                            "kind": 302,
                                            "chain": {
                                                "kind": 202,
                                                "chain": null,
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "start": 161,
                                                    "end": 162
                                                },
                                                "flags": 536870944,
                                                "start": 161,
                                                "end": 162
                                            },
                                            "flags": 32,
                                            "start": 161,
                                            "end": 162
                                        },
                                        "flags": 32,
                                        "start": 150,
                                        "end": 162
                                    },
                                    "chain": {
                                        "kind": 302,
                                        "chain": {
                                            "kind": 202,
                                            "chain": null,
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 164,
                                                "end": 165
                                            },
                                            "flags": 536870944,
                                            "start": 164,
                                            "end": 165
                                        },
                                        "flags": 32,
                                        "start": 164,
                                        "end": 165
                                    },
                                    "flags": 32,
                                    "start": 150,
                                    "end": 165
                                },
                                "chain": {
                                    "kind": 302,
                                    "chain": {
                                        "kind": 202,
                                        "chain": null,
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 167,
                                            "end": 168
                                        },
                                        "flags": 536870944,
                                        "start": 167,
                                        "end": 168
                                    },
                                    "flags": 32,
                                    "start": 167,
                                    "end": 168
                                },
                                "flags": 32,
                                "start": 150,
                                "end": 168
                            },
                            "chain": {
                                "kind": 302,
                                "chain": {
                                    "kind": 202,
                                    "chain": null,
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 170,
                                        "end": 171
                                    },
                                    "flags": 536870944,
                                    "start": 170,
                                    "end": 171
                                },
                                "flags": 32,
                                "start": 170,
                                "end": 171
                            },
                            "flags": 32,
                            "start": 150,
                            "end": 171
                        },
                        "chain": {
                            "kind": 302,
                            "chain": {
                                "kind": 202,
                                "chain": null,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 173,
                                    "end": 174
                                },
                                "flags": 536870944,
                                "start": 173,
                                "end": 174
                            },
                            "flags": 32,
                            "start": 173,
                            "end": 174
                        },
                        "flags": 32,
                        "start": 150,
                        "end": 174
                    },
                    "chain": {
                        "kind": 302,
                        "chain": null,
                        "flags": 32,
                        "start": 176,
                        "end": 178
                    },
                    "flags": 32,
                    "start": 150,
                    "end": 178
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 178,
                    "end": 180
                },
                "right": {
                    "kind": 201392130,
                    "text": 0,
                    "rawText": "0",
                    "flags": 96,
                    "start": 180,
                    "end": 182
                },
                "flags": 32,
                "start": 150,
                "end": 182
            },
            "flags": 16,
            "start": 150,
            "end": 183
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 205,
                    "chainToken": {
                        "kind": 393240,
                        "flags": 64,
                        "start": 186,
                        "end": 188
                    },
                    "member": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 183,
                        "end": 186
                    },
                    "chain": {
                        "kind": 302,
                        "chain": {
                            "kind": 202,
                            "chain": null,
                            "expression": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 188,
                                "end": 189
                            },
                            "flags": 536870944,
                            "start": 188,
                            "end": 189
                        },
                        "flags": 32,
                        "start": 188,
                        "end": 189
                    },
                    "flags": 32,
                    "start": 183,
                    "end": 189
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 189,
                    "end": 191
                },
                "right": {
                    "kind": 201392130,
                    "text": 0,
                    "rawText": "0",
                    "flags": 96,
                    "start": 191,
                    "end": 193
                },
                "flags": 32,
                "start": 183,
                "end": 193
            },
            "flags": 16,
            "start": 183,
            "end": 194
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 205,
                    "chainToken": {
                        "kind": 393240,
                        "flags": 64,
                        "start": 203,
                        "end": 205
                    },
                    "member": {
                        "kind": 205,
                        "chainToken": {
                            "kind": 393240,
                            "flags": 64,
                            "start": 200,
                            "end": 202
                        },
                        "member": {
                            "kind": 205,
                            "chainToken": {
                                "kind": 393240,
                                "flags": 64,
                                "start": 197,
                                "end": 199
                            },
                            "member": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 194,
                                "end": 197
                            },
                            "chain": {
                                "kind": 302,
                                "chain": {
                                    "kind": 202,
                                    "chain": null,
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 199,
                                        "end": 200
                                    },
                                    "flags": 536870944,
                                    "start": 199,
                                    "end": 200
                                },
                                "flags": 32,
                                "start": 199,
                                "end": 200
                            },
                            "flags": 32,
                            "start": 194,
                            "end": 200
                        },
                        "chain": {
                            "kind": 302,
                            "chain": {
                                "kind": 202,
                                "chain": null,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 202,
                                    "end": 203
                                },
                                "flags": 536870944,
                                "start": 202,
                                "end": 203
                            },
                            "flags": 32,
                            "start": 202,
                            "end": 203
                        },
                        "flags": 32,
                        "start": 194,
                        "end": 203
                    },
                    "chain": {
                        "kind": 302,
                        "chain": {
                            "kind": 202,
                            "chain": null,
                            "expression": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 205,
                                "end": 206
                            },
                            "flags": 536870944,
                            "start": 205,
                            "end": 206
                        },
                        "flags": 32,
                        "start": 205,
                        "end": 206
                    },
                    "flags": 32,
                    "start": 194,
                    "end": 206
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 206,
                    "end": 208
                },
                "right": {
                    "kind": 201392130,
                    "text": 0,
                    "rawText": "0",
                    "flags": 96,
                    "start": 208,
                    "end": 210
                },
                "flags": 32,
                "start": 194,
                "end": 210
            },
            "flags": 16,
            "start": 194,
            "end": 211
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 205,
                    "chainToken": {
                        "kind": 393240,
                        "flags": 64,
                        "start": 220,
                        "end": 222
                    },
                    "member": {
                        "kind": 205,
                        "chainToken": {
                            "kind": 393240,
                            "flags": 64,
                            "start": 217,
                            "end": 219
                        },
                        "member": {
                            "kind": 205,
                            "chainToken": {
                                "kind": 393240,
                                "flags": 64,
                                "start": 214,
                                "end": 216
                            },
                            "member": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 211,
                                "end": 214
                            },
                            "chain": {
                                "kind": 302,
                                "chain": {
                                    "kind": 202,
                                    "chain": null,
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 216,
                                        "end": 217
                                    },
                                    "flags": 536870944,
                                    "start": 216,
                                    "end": 217
                                },
                                "flags": 32,
                                "start": 216,
                                "end": 217
                            },
                            "flags": 32,
                            "start": 211,
                            "end": 217
                        },
                        "chain": {
                            "kind": 302,
                            "chain": {
                                "kind": 202,
                                "chain": null,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 219,
                                    "end": 220
                                },
                                "flags": 536870944,
                                "start": 219,
                                "end": 220
                            },
                            "flags": 32,
                            "start": 219,
                            "end": 220
                        },
                        "flags": 32,
                        "start": 211,
                        "end": 220
                    },
                    "chain": {
                        "kind": 302,
                        "chain": {
                            "kind": 202,
                            "chain": null,
                            "expression": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 222,
                                "end": 223
                            },
                            "flags": 536870944,
                            "start": 222,
                            "end": 223
                        },
                        "flags": 32,
                        "start": 222,
                        "end": 223
                    },
                    "flags": 32,
                    "start": 211,
                    "end": 223
                },
                "operatorToken": {
                    "kind": 4133,
                    "flags": 96,
                    "start": 223,
                    "end": 226
                },
                "right": {
                    "kind": 201392130,
                    "text": 0,
                    "rawText": "0",
                    "flags": 96,
                    "start": 226,
                    "end": 228
                },
                "flags": 32,
                "start": 211,
                "end": 228
            },
            "flags": 16,
            "start": 211,
            "end": 229
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 205,
                    "chainToken": {
                        "kind": 393240,
                        "flags": 64,
                        "start": 235,
                        "end": 237
                    },
                    "member": {
                        "kind": 205,
                        "chainToken": {
                            "kind": 393240,
                            "flags": 64,
                            "start": 232,
                            "end": 234
                        },
                        "member": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 229,
                            "end": 232
                        },
                        "chain": {
                            "kind": 302,
                            "chain": {
                                "kind": 202,
                                "chain": null,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 234,
                                    "end": 235
                                },
                                "flags": 536870944,
                                "start": 234,
                                "end": 235
                            },
                            "flags": 32,
                            "start": 234,
                            "end": 235
                        },
                        "flags": 32,
                        "start": 229,
                        "end": 235
                    },
                    "chain": {
                        "kind": 302,
                        "chain": null,
                        "flags": 32,
                        "start": 237,
                        "end": 237
                    },
                    "flags": 32,
                    "start": 229,
                    "end": 237
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 237,
                    "end": 239
                },
                "right": {
                    "kind": 201392130,
                    "text": 0,
                    "rawText": "0",
                    "flags": 96,
                    "start": 239,
                    "end": 241
                },
                "flags": 32,
                "start": 229,
                "end": 241
            },
            "flags": 16,
            "start": 229,
            "end": 242
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 205,
                    "chainToken": {
                        "kind": 393240,
                        "flags": 64,
                        "start": 249,
                        "end": 251
                    },
                    "member": {
                        "kind": 205,
                        "chainToken": {
                            "kind": 393240,
                            "flags": 64,
                            "start": 246,
                            "end": 248
                        },
                        "member": {
                            "kind": 67191035,
                            "text": "#x",
                            "rawText": "#x",
                            "flags": 96,
                            "start": 242,
                            "end": 246
                        },
                        "chain": {
                            "kind": 302,
                            "chain": {
                                "kind": 202,
                                "chain": null,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 248,
                                    "end": 249
                                },
                                "flags": 536870944,
                                "start": 248,
                                "end": 249
                            },
                            "flags": 32,
                            "start": 248,
                            "end": 249
                        },
                        "flags": 32,
                        "start": 242,
                        "end": 249
                    },
                    "chain": {
                        "kind": 302,
                        "chain": null,
                        "flags": 32,
                        "start": 251,
                        "end": 251
                    },
                    "flags": 32,
                    "start": 242,
                    "end": 251
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 251,
                    "end": 253
                },
                "right": {
                    "kind": 201392130,
                    "text": 0,
                    "rawText": "0",
                    "flags": 96,
                    "start": 253,
                    "end": 255
                },
                "flags": 32,
                "start": 242,
                "end": 255
            },
            "flags": 16,
            "start": 242,
            "end": 256
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 205,
                    "chainToken": {
                        "kind": 393240,
                        "flags": 64,
                        "start": 264,
                        "end": 266
                    },
                    "member": {
                        "kind": 205,
                        "chainToken": {
                            "kind": 393240,
                            "flags": 64,
                            "start": 260,
                            "end": 262
                        },
                        "member": {
                            "kind": 67191035,
                            "text": "#x",
                            "rawText": "#x",
                            "flags": 96,
                            "start": 256,
                            "end": 260
                        },
                        "chain": {
                            "kind": 302,
                            "chain": {
                                "kind": 202,
                                "chain": null,
                                "expression": {
                                    "kind": 67191035,
                                    "text": "#x",
                                    "rawText": "#x",
                                    "flags": 96,
                                    "start": 262,
                                    "end": 264
                                },
                                "flags": 536870944,
                                "start": 262,
                                "end": 264
                            },
                            "flags": 32,
                            "start": 262,
                            "end": 264
                        },
                        "flags": 32,
                        "start": 256,
                        "end": 264
                    },
                    "chain": {
                        "kind": 302,
                        "chain": null,
                        "flags": 32,
                        "start": 266,
                        "end": 266
                    },
                    "flags": 32,
                    "start": 256,
                    "end": 266
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 266,
                    "end": 268
                },
                "right": {
                    "kind": 201392130,
                    "text": 0,
                    "rawText": "0",
                    "flags": 96,
                    "start": 268,
                    "end": 270
                },
                "flags": 32,
                "start": 256,
                "end": 270
            },
            "flags": 16,
            "start": 256,
            "end": 271
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 205,
                    "chainToken": {
                        "kind": 393240,
                        "flags": 64,
                        "start": 278,
                        "end": 280
                    },
                    "member": {
                        "kind": 205,
                        "chainToken": {
                            "kind": 393240,
                            "flags": 64,
                            "start": 274,
                            "end": 276
                        },
                        "member": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 271,
                            "end": 274
                        },
                        "chain": {
                            "kind": 302,
                            "chain": {
                                "kind": 202,
                                "chain": null,
                                "expression": {
                                    "kind": 67191035,
                                    "text": "#x",
                                    "rawText": "#x",
                                    "flags": 96,
                                    "start": 276,
                                    "end": 278
                                },
                                "flags": 536870944,
                                "start": 276,
                                "end": 278
                            },
                            "flags": 32,
                            "start": 276,
                            "end": 278
                        },
                        "flags": 32,
                        "start": 271,
                        "end": 278
                    },
                    "chain": {
                        "kind": 302,
                        "chain": null,
                        "flags": 32,
                        "start": 280,
                        "end": 280
                    },
                    "flags": 32,
                    "start": 271,
                    "end": 280
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 280,
                    "end": 282
                },
                "right": {
                    "kind": 201392130,
                    "text": 0,
                    "rawText": "0",
                    "flags": 96,
                    "start": 282,
                    "end": 284
                },
                "flags": 32,
                "start": 271,
                "end": 284
            },
            "flags": 16,
            "start": 271,
            "end": 285
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 205,
                    "chainToken": {
                        "kind": 393240,
                        "flags": 64,
                        "start": 293,
                        "end": 295
                    },
                    "member": {
                        "kind": 205,
                        "chainToken": {
                            "kind": 393240,
                            "flags": 64,
                            "start": 288,
                            "end": 290
                        },
                        "member": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 285,
                            "end": 288
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
                                        "elements": [],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 291,
                                        "end": 291
                                    },
                                    "flags": 268435488,
                                    "start": 290,
                                    "end": 292
                                },
                                "flags": 32,
                                "start": 290,
                                "end": 292
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 292,
                                "end": 293
                            },
                            "flags": 536870944,
                            "start": 292,
                            "end": 293
                        },
                        "flags": 32,
                        "start": 285,
                        "end": 293
                    },
                    "chain": {
                        "kind": 302,
                        "chain": null,
                        "flags": 32,
                        "start": 295,
                        "end": 295
                    },
                    "flags": 32,
                    "start": 285,
                    "end": 295
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 295,
                    "end": 297
                },
                "right": {
                    "kind": 201392130,
                    "text": 0,
                    "rawText": "0",
                    "flags": 96,
                    "start": 297,
                    "end": 299
                },
                "flags": 32,
                "start": 285,
                "end": 299
            },
            "flags": 16,
            "start": 285,
            "end": 300
        },
        {
            "kind": 120,
            "expression": {
                "kind": 205,
                "chainToken": {
                    "kind": 393240,
                    "flags": 64,
                    "start": 303,
                    "end": 305
                },
                "member": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 300,
                    "end": 303
                },
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
                                    "kind": 125,
                                    "left": {
                                        "kind": 205,
                                        "chainToken": {
                                            "kind": 393240,
                                            "flags": 64,
                                            "start": 307,
                                            "end": 309
                                        },
                                        "member": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 306,
                                            "end": 307
                                        },
                                        "chain": {
                                            "kind": 302,
                                            "chain": null,
                                            "flags": 32,
                                            "start": 309,
                                            "end": 309
                                        },
                                        "flags": 32,
                                        "start": 306,
                                        "end": 309
                                    },
                                    "operatorToken": {
                                        "kind": 4125,
                                        "flags": 96,
                                        "start": 309,
                                        "end": 311
                                    },
                                    "right": {
                                        "kind": 201392130,
                                        "text": 0,
                                        "rawText": "0",
                                        "flags": 96,
                                        "start": 311,
                                        "end": 313
                                    },
                                    "flags": 32,
                                    "start": 306,
                                    "end": 313
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 306,
                            "end": 313
                        },
                        "flags": 268435488,
                        "start": 305,
                        "end": 313
                    },
                    "flags": 32,
                    "start": 305,
                    "end": 313
                },
                "flags": 32,
                "start": 300,
                "end": 313
            },
            "flags": 16,
            "start": 300,
            "end": 314
        },
        {
            "kind": 120,
            "expression": {
                "kind": 205,
                "chainToken": {
                    "kind": 393240,
                    "flags": 64,
                    "start": 317,
                    "end": 319
                },
                "member": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 314,
                    "end": 317
                },
                "chain": {
                    "kind": 302,
                    "chain": null,
                    "flags": 32,
                    "start": 319,
                    "end": 319
                },
                "flags": 32,
                "start": 314,
                "end": 319
            },
            "flags": 16,
            "start": 314,
            "end": 319
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 205,
                    "chainToken": {
                        "kind": 393240,
                        "flags": 64,
                        "start": 321,
                        "end": 323
                    },
                    "member": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 320,
                        "end": 321
                    },
                    "chain": {
                        "kind": 302,
                        "chain": null,
                        "flags": 32,
                        "start": 323,
                        "end": 323
                    },
                    "flags": 32,
                    "start": 320,
                    "end": 323
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 323,
                    "end": 325
                },
                "right": {
                    "kind": 201392130,
                    "text": 0,
                    "rawText": "0",
                    "flags": 96,
                    "start": 325,
                    "end": 327
                },
                "flags": 32,
                "start": 320,
                "end": 327
            },
            "flags": 16,
            "start": 320,
            "end": 328
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 205,
                    "chainToken": {
                        "kind": 393240,
                        "flags": 64,
                        "start": 335,
                        "end": 337
                    },
                    "member": {
                        "kind": 205,
                        "chainToken": {
                            "kind": 393240,
                            "flags": 64,
                            "start": 331,
                            "end": 333
                        },
                        "member": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 328,
                            "end": 331
                        },
                        "chain": {
                            "kind": 302,
                            "chain": {
                                "kind": 204,
                                "chain": null,
                                "typeArguments": null,
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 334,
                                    "end": 334
                                },
                                "flags": 268435488,
                                "start": 333,
                                "end": 335
                            },
                            "flags": 32,
                            "start": 333,
                            "end": 335
                        },
                        "flags": 32,
                        "start": 328,
                        "end": 335
                    },
                    "chain": {
                        "kind": 302,
                        "chain": null,
                        "flags": 32,
                        "start": 337,
                        "end": 337
                    },
                    "flags": 32,
                    "start": 328,
                    "end": 337
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 337,
                    "end": 339
                },
                "right": {
                    "kind": 201392130,
                    "text": 0,
                    "rawText": "0",
                    "flags": 96,
                    "start": 339,
                    "end": 341
                },
                "flags": 32,
                "start": 328,
                "end": 341
            },
            "flags": 16,
            "start": 328,
            "end": 342
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 205,
                    "chainToken": {
                        "kind": 393240,
                        "flags": 64,
                        "start": 345,
                        "end": 347
                    },
                    "member": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 342,
                        "end": 345
                    },
                    "chain": {
                        "kind": 302,
                        "chain": {
                            "kind": 202,
                            "chain": null,
                            "expression": {
                                "kind": 134299649,
                                "text": "y",
                                "rawText": "y",
                                "flags": 96,
                                "start": 347,
                                "end": 348
                            },
                            "flags": 536870944,
                            "start": 347,
                            "end": 348
                        },
                        "flags": 32,
                        "start": 347,
                        "end": 348
                    },
                    "flags": 32,
                    "start": 342,
                    "end": 348
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 348,
                    "end": 350
                },
                "right": {
                    "kind": 201392130,
                    "text": 0,
                    "rawText": "0",
                    "flags": 96,
                    "start": 350,
                    "end": 352
                },
                "flags": 32,
                "start": 342,
                "end": 352
            },
            "flags": 16,
            "start": 342,
            "end": 353
        }
    ],
    "isModule": false,
    "source": "x?.#[] = 0;\n\nx?.[] = 0;\n\nx?.x?.[ = 0;\n\nx?.x?.] = 0;\n\nx?.x?. = 0;\n\nx?.[] = 0;\n\nx?.x?.x?.x?.x?.x?.x?.[] = 0;\n\nx?.x?.x?.x?.x?.x?.x?.] = 0;\n\nx?.x?.[] = 0;\n\nx?.x?.x?.x?.x?.x?.x?.x?.[] = 0;\n\nx?.x = 0;\n\nx?.x?.x?.x = 0;\n\nx?.x?.x?.x /= 0;\n\nx?.x?. = 0;\n\n#x?.x?. = 0;\n\n#x?.#x?. = 0;\n\nx?.#x?. = 0;\n\nx?.()x?. = 0;\n\nx?.(x?. = 0;\n\nx?.)x?. = 0;\n\nx?.()?. = 0;\n\nx?.y = 0;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 353
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Invalid character - start: 3, end: 4
✖ Private identifiers are not allowed outside class bodies - start: 3, end: 4
✖ An member access expression should take an argument. - start: 5, end: 6
✖ The left-hand side of an assignment expression may not be an optional property access - start: 4, end: 8
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 6, end: 8
✖ An member access expression should take an argument. - start: 17, end: 18
✖ The left-hand side of an assignment expression may not be an optional property access - start: 16, end: 20
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 18, end: 20
✖ Identifier expected - start: 32, end: 34
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 32, end: 34
✖ Expected a `;` - start: 45, end: 46
✖ Declaration or statement expected - start: 46, end: 48
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 59, end: 61
✖ An member access expression should take an argument. - start: 70, end: 71
✖ The left-hand side of an assignment expression may not be an optional property access - start: 69, end: 73
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 71, end: 73
✖ An member access expression should take an argument. - start: 100, end: 101
✖ The left-hand side of an assignment expression may not be an optional property access - start: 99, end: 103
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 101, end: 103
✖ Expected a `;` - start: 129, end: 130
✖ Declaration or statement expected - start: 130, end: 132
✖ An member access expression should take an argument. - start: 144, end: 145
✖ The left-hand side of an assignment expression may not be an optional property access - start: 143, end: 147
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 145, end: 147
✖ An member access expression should take an argument. - start: 177, end: 178
✖ The left-hand side of an assignment expression may not be an optional property access - start: 176, end: 180
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 178, end: 180
✖ The left-hand side of an assignment expression may not be an optional property access - start: 188, end: 191
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 189, end: 191
✖ The left-hand side of an assignment expression may not be an optional property access - start: 205, end: 208
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 206, end: 208
✖ The left-hand side of an assignment expression may not be an optional property access - start: 222, end: 226
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 223, end: 226
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 237, end: 239
✖ Private identifiers are not allowed outside class bodies - start: 242, end: 246
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 251, end: 253
✖ Private identifiers are not allowed outside class bodies - start: 256, end: 260
✖ Private identifiers are not allowed outside class bodies - start: 262, end: 264
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 266, end: 268
✖ Private identifiers are not allowed outside class bodies - start: 276, end: 278
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 280, end: 282
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 295, end: 297
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 309, end: 311
✖ ',' expected - start: 313, end: 314
✖ Expected a `;` - start: 319, end: 320
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 323, end: 325
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 337, end: 339
✖ The left-hand side of an assignment expression may not be an optional property access - start: 347, end: 350
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 348, end: 350

```

