# Kataw parser test case

## Input

`````js
a ?? b;

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
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 768,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 37143,
                    "flags": 768,
                    "start": 1,
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
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 768,
                    "start": 7,
                    "end": 10
                },
                "operatorToken": {
                    "kind": 37143,
                    "flags": 768,
                    "start": 10,
                    "end": 13
                },
                "right": {
                    "kind": 125,
                    "left": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 768,
                        "start": 13,
                        "end": 15
                    },
                    "operatorToken": {
                        "kind": 37143,
                        "flags": 768,
                        "start": 15,
                        "end": 18
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "c",
                        "rawText": "c",
                        "flags": 768,
                        "start": 18,
                        "end": 20
                    },
                    "flags": 256,
                    "start": 13,
                    "end": 20
                },
                "flags": 256,
                "start": 7,
                "end": 20
            },
            "flags": 128,
            "start": 7,
            "end": 21
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 768,
                    "start": 21,
                    "end": 24
                },
                "operatorToken": {
                    "kind": 37143,
                    "flags": 768,
                    "start": 24,
                    "end": 27
                },
                "right": {
                    "kind": 197,
                    "shortCircuit": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 768,
                        "start": 27,
                        "end": 29
                    },
                    "questionToken": {
                        "kind": 134217750,
                        "flags": 768,
                        "start": 29,
                        "end": 31
                    },
                    "consequent": {
                        "kind": 134299649,
                        "text": "c",
                        "rawText": "c",
                        "flags": 768,
                        "start": 31,
                        "end": 33
                    },
                    "colonToken": {
                        "kind": 21,
                        "flags": 768,
                        "start": 33,
                        "end": 35
                    },
                    "alternate": {
                        "kind": 134299649,
                        "text": "d",
                        "rawText": "d",
                        "flags": 768,
                        "start": 35,
                        "end": 37
                    },
                    "flags": 256,
                    "start": 27,
                    "end": 37
                },
                "flags": 256,
                "start": 21,
                "end": 37
            },
            "flags": 128,
            "start": 21,
            "end": 38
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 768,
                    "start": 38,
                    "end": 41
                },
                "operatorToken": {
                    "kind": 37143,
                    "flags": 768,
                    "start": 41,
                    "end": 44
                },
                "right": {
                    "kind": 125,
                    "left": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 768,
                        "start": 44,
                        "end": 46
                    },
                    "operatorToken": {
                        "kind": 37143,
                        "flags": 768,
                        "start": 46,
                        "end": 49
                    },
                    "right": {
                        "kind": 197,
                        "shortCircuit": {
                            "kind": 134299649,
                            "text": "c",
                            "rawText": "c",
                            "flags": 768,
                            "start": 49,
                            "end": 51
                        },
                        "questionToken": {
                            "kind": 134217750,
                            "flags": 768,
                            "start": 51,
                            "end": 53
                        },
                        "consequent": {
                            "kind": 134299649,
                            "text": "d",
                            "rawText": "d",
                            "flags": 768,
                            "start": 53,
                            "end": 55
                        },
                        "colonToken": {
                            "kind": 21,
                            "flags": 768,
                            "start": 55,
                            "end": 57
                        },
                        "alternate": {
                            "kind": 134299649,
                            "text": "e",
                            "rawText": "e",
                            "flags": 768,
                            "start": 57,
                            "end": 59
                        },
                        "flags": 256,
                        "start": 49,
                        "end": 59
                    },
                    "flags": 256,
                    "start": 44,
                    "end": 59
                },
                "flags": 256,
                "start": 38,
                "end": 59
            },
            "flags": 128,
            "start": 38,
            "end": 60
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "use strict",
                "rawText": "use strict",
                "flags": 769,
                "start": 60,
                "end": 74
            },
            "flags": 128,
            "start": 60,
            "end": 75
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 768,
                    "start": 75,
                    "end": 77
                },
                "operatorToken": {
                    "kind": 37143,
                    "flags": 768,
                    "start": 77,
                    "end": 80
                },
                "right": {
                    "kind": 125,
                    "left": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 768,
                        "start": 80,
                        "end": 82
                    },
                    "operatorToken": {
                        "kind": 37143,
                        "flags": 768,
                        "start": 82,
                        "end": 85
                    },
                    "right": {
                        "kind": 197,
                        "shortCircuit": {
                            "kind": 134299649,
                            "text": "c",
                            "rawText": "c",
                            "flags": 768,
                            "start": 85,
                            "end": 87
                        },
                        "questionToken": {
                            "kind": 134217750,
                            "flags": 768,
                            "start": 87,
                            "end": 89
                        },
                        "consequent": {
                            "kind": 134299649,
                            "text": "d",
                            "rawText": "d",
                            "flags": 768,
                            "start": 89,
                            "end": 91
                        },
                        "colonToken": {
                            "kind": 21,
                            "flags": 768,
                            "start": 91,
                            "end": 93
                        },
                        "alternate": {
                            "kind": 134299649,
                            "text": "e",
                            "rawText": "e",
                            "flags": 768,
                            "start": 93,
                            "end": 95
                        },
                        "flags": 256,
                        "start": 85,
                        "end": 95
                    },
                    "flags": 256,
                    "start": 80,
                    "end": 95
                },
                "flags": 256,
                "start": 75,
                "end": 95
            },
            "flags": 128,
            "start": 75,
            "end": 96
        }
    ],
    "isModule": false,
    "text": "a ?? b;\n\na ?? b ?? c;\n\na ?? b ? c : d;\n\na ?? b ?? c ? d : e;\n\n\"use strict\"; a ?? b ?? c ? d : e;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 96
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2714}@ No errors
```

