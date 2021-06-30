# Kataw parser test case

## Input

`````js
var count = 0;
for (let x = 0; x < 10;) {
  x++;
  for (let y = 0; y < 2;) {
    y++;
    count++;
  }
  continue;
}
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "count",
                            "rawText": "count",
                            "flags": 96,
                            "start": 3,
                            "end": 9
                        },
                        "type": null,
                        "initializer": {
                            "kind": 201392130,
                            "text": 0,
                            "rawText": "0",
                            "flags": 96,
                            "start": 11,
                            "end": 13
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 13
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 13
            },
            "flags": 16,
            "start": 0,
            "end": 14
        },
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "start": 14,
                "end": 18
            },
            "initializer": {
                "kind": 162,
                "lexicalKeyword": {
                    "kind": 41951307,
                    "flags": 64,
                    "start": 14,
                    "end": 23
                },
                "binding": {
                    "kind": 151,
                    "bindingList": [
                        {
                            "kind": 190,
                            "binding": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 23,
                                "end": 25
                            },
                            "type": null,
                            "initializer": {
                                "kind": 201392130,
                                "text": 0,
                                "rawText": "0",
                                "flags": 96,
                                "start": 27,
                                "end": 29
                            },
                            "flags": 16,
                            "start": 23,
                            "end": 29
                        }
                    ],
                    "flags": 16,
                    "start": 23,
                    "end": 29
                },
                "flags": 33554448,
                "start": 14,
                "end": 29
            },
            "condition": null,
            "incrementor": {
                "kind": 198,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 30,
                    "end": 32
                },
                "operatorToken": {
                    "kind": 536971330,
                    "flags": 96,
                    "start": 32,
                    "end": 34
                },
                "right": {
                    "kind": 201392130,
                    "text": 10,
                    "rawText": "10",
                    "flags": 96,
                    "start": 34,
                    "end": 37
                },
                "flags": 32,
                "start": 30,
                "end": 37
            },
            "statement": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 127,
                                "operandToken": {
                                    "kind": 196635,
                                    "flags": 96,
                                    "start": 45,
                                    "end": 47
                                },
                                "operand": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 41,
                                    "end": 45
                                },
                                "flags": 32,
                                "start": 41,
                                "end": 47
                            },
                            "flags": 16,
                            "start": 41,
                            "end": 48
                        },
                        {
                            "kind": 165,
                            "forKeyword": {
                                "kind": 37757017,
                                "flags": 81,
                                "start": 48,
                                "end": 54
                            },
                            "initializer": {
                                "kind": 162,
                                "lexicalKeyword": {
                                    "kind": 41951307,
                                    "flags": 64,
                                    "start": 48,
                                    "end": 59
                                },
                                "binding": {
                                    "kind": 151,
                                    "bindingList": [
                                        {
                                            "kind": 190,
                                            "binding": {
                                                "kind": 134299649,
                                                "text": "y",
                                                "rawText": "y",
                                                "flags": 96,
                                                "start": 59,
                                                "end": 61
                                            },
                                            "type": null,
                                            "initializer": {
                                                "kind": 201392130,
                                                "text": 0,
                                                "rawText": "0",
                                                "flags": 96,
                                                "start": 63,
                                                "end": 65
                                            },
                                            "flags": 16,
                                            "start": 59,
                                            "end": 65
                                        }
                                    ],
                                    "flags": 16,
                                    "start": 59,
                                    "end": 65
                                },
                                "flags": 33554448,
                                "start": 48,
                                "end": 65
                            },
                            "condition": null,
                            "incrementor": {
                                "kind": 198,
                                "left": {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 96,
                                    "start": 66,
                                    "end": 68
                                },
                                "operatorToken": {
                                    "kind": 536971330,
                                    "flags": 96,
                                    "start": 68,
                                    "end": 70
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 2,
                                    "rawText": "2",
                                    "flags": 96,
                                    "start": 70,
                                    "end": 72
                                },
                                "flags": 32,
                                "start": 66,
                                "end": 72
                            },
                            "statement": {
                                "kind": 124,
                                "block": {
                                    "kind": 249,
                                    "statements": [
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 127,
                                                "operandToken": {
                                                    "kind": 196635,
                                                    "flags": 96,
                                                    "start": 82,
                                                    "end": 84
                                                },
                                                "operand": {
                                                    "kind": 134299649,
                                                    "text": "y",
                                                    "rawText": "y",
                                                    "flags": 96,
                                                    "start": 76,
                                                    "end": 82
                                                },
                                                "flags": 32,
                                                "start": 76,
                                                "end": 84
                                            },
                                            "flags": 16,
                                            "start": 76,
                                            "end": 85
                                        },
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 127,
                                                "operandToken": {
                                                    "kind": 196635,
                                                    "flags": 96,
                                                    "start": 95,
                                                    "end": 97
                                                },
                                                "operand": {
                                                    "kind": 134299649,
                                                    "text": "count",
                                                    "rawText": "count",
                                                    "flags": 96,
                                                    "start": 85,
                                                    "end": 95
                                                },
                                                "flags": 32,
                                                "start": 85,
                                                "end": 97
                                            },
                                            "flags": 16,
                                            "start": 85,
                                            "end": 98
                                        }
                                    ],
                                    "flags": 17,
                                    "start": 76,
                                    "end": 98
                                },
                                "flags": 16,
                                "start": 74,
                                "end": 102
                            },
                            "flags": 81,
                            "start": 48,
                            "end": 102
                        },
                        {
                            "kind": 172,
                            "continueKeyword": {
                                "kind": 37757009,
                                "flags": 81,
                                "start": 102,
                                "end": 113
                            },
                            "label": null,
                            "flags": 16,
                            "start": 102,
                            "end": 114
                        }
                    ],
                    "flags": 17,
                    "start": 41,
                    "end": 114
                },
                "flags": 16,
                "start": 39,
                "end": 116
            },
            "flags": 81,
            "start": 14,
            "end": 116
        }
    ],
    "isModule": false,
    "source": "var count = 0;\nfor (let x = 0; x < 10;) {\n  x++;\n  for (let y = 0; y < 2;) {\n    y++;\n    count++;\n  }\n  continue;\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 116
}
```

### Printed

```javascript

var count = 0;
for (let x = 0;; x  < 10) {
  x++;
  for (let y = 0;; y  < 2) {
    y++;
    count++;
  }
  continue;
}

```

### Diagnostics

```javascript
✔ No errors
```

