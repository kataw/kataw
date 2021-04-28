# Kataw parser test case

## Input

`````js
a ?? b;

a | b ?? c | d;

a ?? b ? c : d;

(a || b) ?? c;

a ?? b ?? c;

a ?? b ? c : d;

a ?? b ?? c ? d : e;

"use strict"; a ?? b ?? c ? d : e;
`````

## Output

### Hybrid CST

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
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 768,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 33047,
                    "flags": 1,
                    "start": 512,
                    "end": 4
                },
                "right": {
                    "kind": 134299649,
                    "text": "b",
                    "rawText": "b",
                    "flags": 768,
                    "start": 4,
                    "end": 6
                },
                "flags": 256,
                "start": 0,
                "end": 6
            },
            "flags": 128,
            "start": 0,
            "end": 7
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
                        "flags": 768,
                        "start": 7,
                        "end": 10
                    },
                    "operatorToken": {
                        "kind": 134251592,
                        "flags": 10,
                        "start": 512,
                        "end": 12
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 768,
                        "start": 12,
                        "end": 14
                    },
                    "flags": 256,
                    "start": 7,
                    "end": 14
                },
                "operatorToken": {
                    "kind": 33047,
                    "flags": 14,
                    "start": 512,
                    "end": 17
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "c",
                        "rawText": "c",
                        "flags": 768,
                        "start": 17,
                        "end": 19
                    },
                    "operatorToken": {
                        "kind": 134251592,
                        "flags": 19,
                        "start": 512,
                        "end": 21
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "d",
                        "rawText": "d",
                        "flags": 768,
                        "start": 21,
                        "end": 23
                    },
                    "flags": 256,
                    "start": 19,
                    "end": 23
                },
                "flags": 256,
                "start": 7,
                "end": 23
            },
            "flags": 128,
            "start": 7,
            "end": 24
        },
        {
            "kind": 120,
            "expression": {
                "kind": 197,
                "shortCircuit": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "a",
                        "rawText": "a",
                        "flags": 768,
                        "start": 24,
                        "end": 27
                    },
                    "operatorToken": {
                        "kind": 33047,
                        "flags": 27,
                        "start": 512,
                        "end": 30
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 768,
                        "start": 30,
                        "end": 32
                    },
                    "flags": 256,
                    "start": 24,
                    "end": 32
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 32,
                    "start": 0,
                    "end": 34
                },
                "consequent": {
                    "kind": 134299649,
                    "text": "c",
                    "rawText": "c",
                    "flags": 768,
                    "start": 34,
                    "end": 36
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 36,
                    "start": 0,
                    "end": 38
                },
                "alternate": {
                    "kind": 134299649,
                    "text": "d",
                    "rawText": "d",
                    "flags": 768,
                    "start": 38,
                    "end": 40
                },
                "flags": 256,
                "start": 24,
                "end": 40
            },
            "flags": 128,
            "start": 24,
            "end": 41
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 121,
                    "expression": {
                        "kind": 198,
                        "left": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 768,
                            "start": 44,
                            "end": 45
                        },
                        "operatorToken": {
                            "kind": 33339,
                            "flags": 45,
                            "start": 512,
                            "end": 48
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 768,
                            "start": 48,
                            "end": 50
                        },
                        "flags": 256,
                        "start": 41,
                        "end": 50
                    },
                    "flags": 256,
                    "start": 41,
                    "end": 51
                },
                "operatorToken": {
                    "kind": 33047,
                    "flags": 51,
                    "start": 512,
                    "end": 54
                },
                "right": {
                    "kind": 134299649,
                    "text": "c",
                    "rawText": "c",
                    "flags": 768,
                    "start": 54,
                    "end": 56
                },
                "flags": 256,
                "start": 41,
                "end": 56
            },
            "flags": 128,
            "start": 41,
            "end": 57
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
                        "flags": 768,
                        "start": 57,
                        "end": 60
                    },
                    "operatorToken": {
                        "kind": 33047,
                        "flags": 60,
                        "start": 512,
                        "end": 63
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 768,
                        "start": 63,
                        "end": 65
                    },
                    "flags": 256,
                    "start": 57,
                    "end": 65
                },
                "operatorToken": {
                    "kind": 33047,
                    "flags": 65,
                    "start": 512,
                    "end": 68
                },
                "right": {
                    "kind": 134299649,
                    "text": "c",
                    "rawText": "c",
                    "flags": 768,
                    "start": 68,
                    "end": 70
                },
                "flags": 256,
                "start": 57,
                "end": 70
            },
            "flags": 128,
            "start": 57,
            "end": 71
        },
        {
            "kind": 120,
            "expression": {
                "kind": 197,
                "shortCircuit": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "a",
                        "rawText": "a",
                        "flags": 768,
                        "start": 71,
                        "end": 74
                    },
                    "operatorToken": {
                        "kind": 33047,
                        "flags": 74,
                        "start": 512,
                        "end": 77
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 768,
                        "start": 77,
                        "end": 79
                    },
                    "flags": 256,
                    "start": 71,
                    "end": 79
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 79,
                    "start": 0,
                    "end": 81
                },
                "consequent": {
                    "kind": 134299649,
                    "text": "c",
                    "rawText": "c",
                    "flags": 768,
                    "start": 81,
                    "end": 83
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 83,
                    "start": 0,
                    "end": 85
                },
                "alternate": {
                    "kind": 134299649,
                    "text": "d",
                    "rawText": "d",
                    "flags": 768,
                    "start": 85,
                    "end": 87
                },
                "flags": 256,
                "start": 71,
                "end": 87
            },
            "flags": 128,
            "start": 71,
            "end": 88
        },
        {
            "kind": 120,
            "expression": {
                "kind": 197,
                "shortCircuit": {
                    "kind": 198,
                    "left": {
                        "kind": 198,
                        "left": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 768,
                            "start": 88,
                            "end": 91
                        },
                        "operatorToken": {
                            "kind": 33047,
                            "flags": 91,
                            "start": 512,
                            "end": 94
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 768,
                            "start": 94,
                            "end": 96
                        },
                        "flags": 256,
                        "start": 88,
                        "end": 96
                    },
                    "operatorToken": {
                        "kind": 33047,
                        "flags": 96,
                        "start": 512,
                        "end": 99
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "c",
                        "rawText": "c",
                        "flags": 768,
                        "start": 99,
                        "end": 101
                    },
                    "flags": 256,
                    "start": 88,
                    "end": 101
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 101,
                    "start": 0,
                    "end": 103
                },
                "consequent": {
                    "kind": 134299649,
                    "text": "d",
                    "rawText": "d",
                    "flags": 768,
                    "start": 103,
                    "end": 105
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 105,
                    "start": 0,
                    "end": 107
                },
                "alternate": {
                    "kind": 134299649,
                    "text": "e",
                    "rawText": "e",
                    "flags": 768,
                    "start": 107,
                    "end": 109
                },
                "flags": 256,
                "start": 88,
                "end": 109
            },
            "flags": 128,
            "start": 88,
            "end": 110
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "use strict",
                "rawText": "use strict",
                "flags": 769,
                "start": 110,
                "end": 124
            },
            "flags": 128,
            "start": 110,
            "end": 125
        },
        {
            "kind": 120,
            "expression": {
                "kind": 197,
                "shortCircuit": {
                    "kind": 198,
                    "left": {
                        "kind": 198,
                        "left": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 768,
                            "start": 125,
                            "end": 127
                        },
                        "operatorToken": {
                            "kind": 33047,
                            "flags": 127,
                            "start": 512,
                            "end": 130
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 768,
                            "start": 130,
                            "end": 132
                        },
                        "flags": 256,
                        "start": 125,
                        "end": 132
                    },
                    "operatorToken": {
                        "kind": 33047,
                        "flags": 132,
                        "start": 512,
                        "end": 135
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "c",
                        "rawText": "c",
                        "flags": 768,
                        "start": 135,
                        "end": 137
                    },
                    "flags": 256,
                    "start": 125,
                    "end": 137
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 137,
                    "start": 0,
                    "end": 139
                },
                "consequent": {
                    "kind": 134299649,
                    "text": "d",
                    "rawText": "d",
                    "flags": 768,
                    "start": 139,
                    "end": 141
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 141,
                    "start": 0,
                    "end": 143
                },
                "alternate": {
                    "kind": 134299649,
                    "text": "e",
                    "rawText": "e",
                    "flags": 768,
                    "start": 143,
                    "end": 145
                },
                "flags": 256,
                "start": 125,
                "end": 145
            },
            "flags": 128,
            "start": 125,
            "end": 146
        }
    ],
    "isModule": false,
    "text": "a ?? b;\n\na | b ?? c | d;\n\na ?? b ? c : d;\n\n(a || b) ?? c;\n\na ?? b ?? c;\n\na ?? b ? c : d;\n\na ?? b ?? c ? d : e;\n\n\"use strict\"; a ?? b ?? c ? d : e;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 146
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

