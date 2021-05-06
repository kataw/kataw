# Kataw parser test case

## Input

`````js

?? b;

a ??;

a || b ?? c;

a && b ?? c;

a ?? b || c;

a ?? b && c;

a+1 || b+1 ?? c

a+1 && b+1 ?? c;

a+1 ?? b+1 || c;

a+1 ?? b+1 && c;
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
                "kind": 198,
                "left": {
                    "kind": 16637,
                    "text": "",
                    "flags": 68,
                    "start": 0,
                    "end": 0
                },
                "operatorToken": {
                    "kind": 33047,
                    "flags": 65,
                    "start": 0,
                    "end": 3
                },
                "right": {
                    "kind": 134299649,
                    "text": "b",
                    "rawText": "b",
                    "flags": 96,
                    "start": 3,
                    "end": 5
                },
                "flags": 32,
                "start": 0,
                "end": 5
            },
            "flags": 16,
            "start": 0,
            "end": 6
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "start": 6,
                    "end": 9
                },
                "operatorToken": {
                    "kind": 33047,
                    "flags": 64,
                    "start": 9,
                    "end": 12
                },
                "right": {
                    "kind": 16637,
                    "text": "",
                    "flags": 68,
                    "start": 12,
                    "end": 12
                },
                "flags": 32,
                "start": 6,
                "end": 12
            },
            "flags": 16,
            "start": 6,
            "end": 13
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "a",
                        "rawText": "a",
                        "flags": 96,
                        "start": 13,
                        "end": 16
                    },
                    "operatorToken": {
                        "kind": 33339,
                        "flags": 64,
                        "start": 16,
                        "end": 19
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "start": 19,
                        "end": 21
                    },
                    "flags": 32,
                    "start": 13,
                    "end": 21
                },
                "operatorToken": {
                    "kind": 33047,
                    "flags": 64,
                    "start": 21,
                    "end": 24
                },
                "right": {
                    "kind": 134299649,
                    "text": "c",
                    "rawText": "c",
                    "flags": 96,
                    "start": 24,
                    "end": 26
                },
                "flags": 32,
                "start": 13,
                "end": 26
            },
            "flags": 16,
            "start": 13,
            "end": 27
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "a",
                        "rawText": "a",
                        "flags": 96,
                        "start": 27,
                        "end": 30
                    },
                    "operatorToken": {
                        "kind": 33594,
                        "flags": 64,
                        "start": 30,
                        "end": 33
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "start": 33,
                        "end": 35
                    },
                    "flags": 32,
                    "start": 27,
                    "end": 35
                },
                "operatorToken": {
                    "kind": 33047,
                    "flags": 64,
                    "start": 35,
                    "end": 38
                },
                "right": {
                    "kind": 134299649,
                    "text": "c",
                    "rawText": "c",
                    "flags": 96,
                    "start": 38,
                    "end": 40
                },
                "flags": 32,
                "start": 27,
                "end": 40
            },
            "flags": 16,
            "start": 27,
            "end": 41
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "start": 41,
                    "end": 44
                },
                "operatorToken": {
                    "kind": 33047,
                    "flags": 64,
                    "start": 44,
                    "end": 47
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "start": 47,
                        "end": 49
                    },
                    "operatorToken": {
                        "kind": 33339,
                        "flags": 64,
                        "start": 49,
                        "end": 52
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "c",
                        "rawText": "c",
                        "flags": 96,
                        "start": 52,
                        "end": 54
                    },
                    "flags": 32,
                    "start": 49,
                    "end": 54
                },
                "flags": 32,
                "start": 41,
                "end": 54
            },
            "flags": 16,
            "start": 41,
            "end": 55
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "start": 55,
                    "end": 58
                },
                "operatorToken": {
                    "kind": 33047,
                    "flags": 64,
                    "start": 58,
                    "end": 61
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "start": 61,
                        "end": 63
                    },
                    "operatorToken": {
                        "kind": 33594,
                        "flags": 64,
                        "start": 63,
                        "end": 66
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "c",
                        "rawText": "c",
                        "flags": 96,
                        "start": 66,
                        "end": 68
                    },
                    "flags": 32,
                    "start": 63,
                    "end": 68
                },
                "flags": 32,
                "start": 55,
                "end": 68
            },
            "flags": 16,
            "start": 55,
            "end": 69
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 198,
                    "left": {
                        "kind": 198,
                        "left": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 69,
                            "end": 72
                        },
                        "operatorToken": {
                            "kind": 34098,
                            "flags": 64,
                            "start": 72,
                            "end": 73
                        },
                        "right": {
                            "kind": 201392130,
                            "text": 1,
                            "rawText": "1",
                            "flags": 96,
                            "start": 73,
                            "end": 74
                        },
                        "flags": 32,
                        "start": 69,
                        "end": 74
                    },
                    "operatorToken": {
                        "kind": 33339,
                        "flags": 64,
                        "start": 74,
                        "end": 77
                    },
                    "right": {
                        "kind": 198,
                        "left": {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "start": 77,
                            "end": 79
                        },
                        "operatorToken": {
                            "kind": 34098,
                            "flags": 64,
                            "start": 79,
                            "end": 80
                        },
                        "right": {
                            "kind": 201392130,
                            "text": 1,
                            "rawText": "1",
                            "flags": 96,
                            "start": 80,
                            "end": 81
                        },
                        "flags": 32,
                        "start": 79,
                        "end": 81
                    },
                    "flags": 32,
                    "start": 69,
                    "end": 81
                },
                "operatorToken": {
                    "kind": 33047,
                    "flags": 64,
                    "start": 81,
                    "end": 84
                },
                "right": {
                    "kind": 134299649,
                    "text": "c",
                    "rawText": "c",
                    "flags": 96,
                    "start": 84,
                    "end": 86
                },
                "flags": 32,
                "start": 69,
                "end": 86
            },
            "flags": 16,
            "start": 69,
            "end": 86
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 198,
                    "left": {
                        "kind": 198,
                        "left": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 86,
                            "end": 89
                        },
                        "operatorToken": {
                            "kind": 34098,
                            "flags": 64,
                            "start": 89,
                            "end": 90
                        },
                        "right": {
                            "kind": 201392130,
                            "text": 1,
                            "rawText": "1",
                            "flags": 96,
                            "start": 90,
                            "end": 91
                        },
                        "flags": 32,
                        "start": 86,
                        "end": 91
                    },
                    "operatorToken": {
                        "kind": 33594,
                        "flags": 64,
                        "start": 91,
                        "end": 94
                    },
                    "right": {
                        "kind": 198,
                        "left": {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "start": 94,
                            "end": 96
                        },
                        "operatorToken": {
                            "kind": 34098,
                            "flags": 64,
                            "start": 96,
                            "end": 97
                        },
                        "right": {
                            "kind": 201392130,
                            "text": 1,
                            "rawText": "1",
                            "flags": 96,
                            "start": 97,
                            "end": 98
                        },
                        "flags": 32,
                        "start": 96,
                        "end": 98
                    },
                    "flags": 32,
                    "start": 86,
                    "end": 98
                },
                "operatorToken": {
                    "kind": 33047,
                    "flags": 64,
                    "start": 98,
                    "end": 101
                },
                "right": {
                    "kind": 134299649,
                    "text": "c",
                    "rawText": "c",
                    "flags": 96,
                    "start": 101,
                    "end": 103
                },
                "flags": 32,
                "start": 86,
                "end": 103
            },
            "flags": 16,
            "start": 86,
            "end": 104
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "a",
                        "rawText": "a",
                        "flags": 96,
                        "start": 104,
                        "end": 107
                    },
                    "operatorToken": {
                        "kind": 34098,
                        "flags": 64,
                        "start": 107,
                        "end": 108
                    },
                    "right": {
                        "kind": 201392130,
                        "text": 1,
                        "rawText": "1",
                        "flags": 96,
                        "start": 108,
                        "end": 109
                    },
                    "flags": 32,
                    "start": 104,
                    "end": 109
                },
                "operatorToken": {
                    "kind": 33047,
                    "flags": 64,
                    "start": 109,
                    "end": 112
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 198,
                        "left": {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "start": 112,
                            "end": 114
                        },
                        "operatorToken": {
                            "kind": 34098,
                            "flags": 64,
                            "start": 114,
                            "end": 115
                        },
                        "right": {
                            "kind": 201392130,
                            "text": 1,
                            "rawText": "1",
                            "flags": 96,
                            "start": 115,
                            "end": 116
                        },
                        "flags": 32,
                        "start": 114,
                        "end": 116
                    },
                    "operatorToken": {
                        "kind": 33339,
                        "flags": 64,
                        "start": 116,
                        "end": 119
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "c",
                        "rawText": "c",
                        "flags": 96,
                        "start": 119,
                        "end": 121
                    },
                    "flags": 32,
                    "start": 114,
                    "end": 121
                },
                "flags": 32,
                "start": 104,
                "end": 121
            },
            "flags": 16,
            "start": 104,
            "end": 122
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "a",
                        "rawText": "a",
                        "flags": 96,
                        "start": 122,
                        "end": 125
                    },
                    "operatorToken": {
                        "kind": 34098,
                        "flags": 64,
                        "start": 125,
                        "end": 126
                    },
                    "right": {
                        "kind": 201392130,
                        "text": 1,
                        "rawText": "1",
                        "flags": 96,
                        "start": 126,
                        "end": 127
                    },
                    "flags": 32,
                    "start": 122,
                    "end": 127
                },
                "operatorToken": {
                    "kind": 33047,
                    "flags": 64,
                    "start": 127,
                    "end": 130
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 198,
                        "left": {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "start": 130,
                            "end": 132
                        },
                        "operatorToken": {
                            "kind": 34098,
                            "flags": 64,
                            "start": 132,
                            "end": 133
                        },
                        "right": {
                            "kind": 201392130,
                            "text": 1,
                            "rawText": "1",
                            "flags": 96,
                            "start": 133,
                            "end": 134
                        },
                        "flags": 32,
                        "start": 132,
                        "end": 134
                    },
                    "operatorToken": {
                        "kind": 33594,
                        "flags": 64,
                        "start": 134,
                        "end": 137
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "c",
                        "rawText": "c",
                        "flags": 96,
                        "start": 137,
                        "end": 139
                    },
                    "flags": 32,
                    "start": 132,
                    "end": 139
                },
                "flags": 32,
                "start": 122,
                "end": 139
            },
            "flags": 16,
            "start": 122,
            "end": 140
        }
    ],
    "isModule": false,
    "source": "\n?? b;\n\na ??;\n\na || b ?? c;\n\na && b ?? c;\n\na ?? b || c;\n\na ?? b && c;\n\na+1 || b+1 ?? c\n\na+1 && b+1 ?? c;\n\na+1 ?? b+1 || c;\n\na+1 ?? b+1 && c;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 140
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expression expected - start: 0, end: 3
✖ Expression expected - start: 12, end: 13
✖ '&&' and '??' operations cannot be mixed without parentheses - start: 21, end: 24
✖ '&&' and '??' operations cannot be mixed without parentheses - start: 35, end: 38
✖ '&&' and '??' operations cannot be mixed without parentheses - start: 49, end: 52
✖ '&&' and '??' operations cannot be mixed without parentheses - start: 63, end: 66
✖ '&&' and '??' operations cannot be mixed without parentheses - start: 116, end: 119
✖ '&&' and '??' operations cannot be mixed without parentheses - start: 134, end: 137

```

