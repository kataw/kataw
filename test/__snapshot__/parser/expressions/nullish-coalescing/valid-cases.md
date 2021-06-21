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
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 33047,
                    "flags": 96,
                    "start": 1,
                    "end": 4
                },
                "right": {
                    "kind": 134299649,
                    "text": "b",
                    "rawText": "b",
                    "flags": 96,
                    "start": 4,
                    "end": 6
                },
                "flags": 32,
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
                "kind": 198,
                "left": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "a",
                        "rawText": "a",
                        "flags": 96,
                        "start": 7,
                        "end": 10
                    },
                    "operatorToken": {
                        "kind": 134251592,
                        "flags": 96,
                        "start": 10,
                        "end": 12
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "start": 12,
                        "end": 14
                    },
                    "flags": 32,
                    "start": 7,
                    "end": 14
                },
                "operatorToken": {
                    "kind": 33047,
                    "flags": 96,
                    "start": 14,
                    "end": 17
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "c",
                        "rawText": "c",
                        "flags": 96,
                        "start": 17,
                        "end": 19
                    },
                    "operatorToken": {
                        "kind": 134251592,
                        "flags": 96,
                        "start": 19,
                        "end": 21
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "d",
                        "rawText": "d",
                        "flags": 96,
                        "start": 21,
                        "end": 23
                    },
                    "flags": 32,
                    "start": 19,
                    "end": 23
                },
                "flags": 32,
                "start": 7,
                "end": 23
            },
            "flags": 16,
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
                        "flags": 96,
                        "start": 24,
                        "end": 27
                    },
                    "operatorToken": {
                        "kind": 33047,
                        "flags": 96,
                        "start": 27,
                        "end": 30
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "start": 30,
                        "end": 32
                    },
                    "flags": 32,
                    "start": 24,
                    "end": 32
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 64,
                    "start": 32,
                    "end": 34
                },
                "consequent": {
                    "kind": 134299649,
                    "text": "c",
                    "rawText": "c",
                    "flags": 96,
                    "start": 34,
                    "end": 36
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 64,
                    "start": 36,
                    "end": 38
                },
                "alternate": {
                    "kind": 134299649,
                    "text": "d",
                    "rawText": "d",
                    "flags": 96,
                    "start": 38,
                    "end": 40
                },
                "flags": 32,
                "start": 24,
                "end": 40
            },
            "flags": 16,
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
                            "flags": 96,
                            "start": 44,
                            "end": 45
                        },
                        "operatorToken": {
                            "kind": 33339,
                            "flags": 96,
                            "start": 45,
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
                        "start": 41,
                        "end": 50
                    },
                    "flags": 32,
                    "start": 41,
                    "end": 51
                },
                "operatorToken": {
                    "kind": 33047,
                    "flags": 96,
                    "start": 51,
                    "end": 54
                },
                "right": {
                    "kind": 134299649,
                    "text": "c",
                    "rawText": "c",
                    "flags": 96,
                    "start": 54,
                    "end": 56
                },
                "flags": 32,
                "start": 41,
                "end": 56
            },
            "flags": 16,
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
                        "flags": 96,
                        "start": 57,
                        "end": 60
                    },
                    "operatorToken": {
                        "kind": 33047,
                        "flags": 96,
                        "start": 60,
                        "end": 63
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "start": 63,
                        "end": 65
                    },
                    "flags": 32,
                    "start": 57,
                    "end": 65
                },
                "operatorToken": {
                    "kind": 33047,
                    "flags": 96,
                    "start": 65,
                    "end": 68
                },
                "right": {
                    "kind": 134299649,
                    "text": "c",
                    "rawText": "c",
                    "flags": 96,
                    "start": 68,
                    "end": 70
                },
                "flags": 32,
                "start": 57,
                "end": 70
            },
            "flags": 16,
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
                        "flags": 96,
                        "start": 71,
                        "end": 74
                    },
                    "operatorToken": {
                        "kind": 33047,
                        "flags": 96,
                        "start": 74,
                        "end": 77
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "start": 77,
                        "end": 79
                    },
                    "flags": 32,
                    "start": 71,
                    "end": 79
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 64,
                    "start": 79,
                    "end": 81
                },
                "consequent": {
                    "kind": 134299649,
                    "text": "c",
                    "rawText": "c",
                    "flags": 96,
                    "start": 81,
                    "end": 83
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 64,
                    "start": 83,
                    "end": 85
                },
                "alternate": {
                    "kind": 134299649,
                    "text": "d",
                    "rawText": "d",
                    "flags": 96,
                    "start": 85,
                    "end": 87
                },
                "flags": 32,
                "start": 71,
                "end": 87
            },
            "flags": 16,
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
                            "flags": 96,
                            "start": 88,
                            "end": 91
                        },
                        "operatorToken": {
                            "kind": 33047,
                            "flags": 96,
                            "start": 91,
                            "end": 94
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "start": 94,
                            "end": 96
                        },
                        "flags": 32,
                        "start": 88,
                        "end": 96
                    },
                    "operatorToken": {
                        "kind": 33047,
                        "flags": 96,
                        "start": 96,
                        "end": 99
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "c",
                        "rawText": "c",
                        "flags": 96,
                        "start": 99,
                        "end": 101
                    },
                    "flags": 32,
                    "start": 88,
                    "end": 101
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 64,
                    "start": 101,
                    "end": 103
                },
                "consequent": {
                    "kind": 134299649,
                    "text": "d",
                    "rawText": "d",
                    "flags": 96,
                    "start": 103,
                    "end": 105
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 64,
                    "start": 105,
                    "end": 107
                },
                "alternate": {
                    "kind": 134299649,
                    "text": "e",
                    "rawText": "e",
                    "flags": 96,
                    "start": 107,
                    "end": 109
                },
                "flags": 32,
                "start": 88,
                "end": 109
            },
            "flags": 16,
            "start": 88,
            "end": 110
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "use strict",
                "rawText": "\"use strict\"",
                "flags": 97,
                "start": 110,
                "end": 124
            },
            "flags": 16,
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
                            "flags": 96,
                            "start": 125,
                            "end": 127
                        },
                        "operatorToken": {
                            "kind": 33047,
                            "flags": 96,
                            "start": 127,
                            "end": 130
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "start": 130,
                            "end": 132
                        },
                        "flags": 32,
                        "start": 125,
                        "end": 132
                    },
                    "operatorToken": {
                        "kind": 33047,
                        "flags": 96,
                        "start": 132,
                        "end": 135
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "c",
                        "rawText": "c",
                        "flags": 96,
                        "start": 135,
                        "end": 137
                    },
                    "flags": 32,
                    "start": 125,
                    "end": 137
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 64,
                    "start": 137,
                    "end": 139
                },
                "consequent": {
                    "kind": 134299649,
                    "text": "d",
                    "rawText": "d",
                    "flags": 96,
                    "start": 139,
                    "end": 141
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 64,
                    "start": 141,
                    "end": 143
                },
                "alternate": {
                    "kind": 134299649,
                    "text": "e",
                    "rawText": "e",
                    "flags": 96,
                    "start": 143,
                    "end": 145
                },
                "flags": 32,
                "start": 125,
                "end": 145
            },
            "flags": 16,
            "start": 125,
            "end": 146
        }
    ],
    "isModule": false,
    "source": "a ?? b;\n\na | b ?? c | d;\n\na ?? b ? c : d;\n\n(a || b) ?? c;\n\na ?? b ?? c;\n\na ?? b ? c : d;\n\na ?? b ?? c ? d : e;\n\n\"use strict\"; a ?? b ?? c ? d : e;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 146
}
```

### Printed

```javascript

 a ?? b; a | b ?? c | d; a ?? b ? c : d; (a || b) ?? c; a ?? b ?? c; a ?? b ? c : d; a ?? b ?? c ? d : e; "use strict"; a ?? b ?? c ? d : e; 
```

### Diagnostics

```javascript
✔ No errors
```

