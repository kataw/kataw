# Kataw parser test case

## Input

`````js
var count = 0;
for (let x = 0; x < 10;) {
  x++;
  count++;
  {
    let x = "hello";
    continue;
  }
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
                            "kind": 120,
                            "expression": {
                                "kind": 127,
                                "operandToken": {
                                    "kind": 196635,
                                    "flags": 96,
                                    "start": 56,
                                    "end": 58
                                },
                                "operand": {
                                    "kind": 134299649,
                                    "text": "count",
                                    "rawText": "count",
                                    "flags": 96,
                                    "start": 48,
                                    "end": 56
                                },
                                "flags": 32,
                                "start": 48,
                                "end": 58
                            },
                            "flags": 16,
                            "start": 48,
                            "end": 59
                        },
                        {
                            "kind": 124,
                            "block": {
                                "kind": 249,
                                "statements": [
                                    {
                                        "kind": 162,
                                        "lexicalKeyword": {
                                            "kind": 41951307,
                                            "flags": 81,
                                            "start": 63,
                                            "end": 71
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
                                                        "start": 71,
                                                        "end": 73
                                                    },
                                                    "type": null,
                                                    "initializer": {
                                                        "kind": 201392131,
                                                        "text": "hello",
                                                        "rawText": "\"hello\"",
                                                        "flags": 96,
                                                        "start": 75,
                                                        "end": 83
                                                    },
                                                    "flags": 16,
                                                    "start": 71,
                                                    "end": 83
                                                }
                                            ],
                                            "flags": 17,
                                            "start": 71,
                                            "end": 83
                                        },
                                        "flags": 33554448,
                                        "start": 63,
                                        "end": 84
                                    },
                                    {
                                        "kind": 172,
                                        "continueKeyword": {
                                            "kind": 37757009,
                                            "flags": 81,
                                            "start": 84,
                                            "end": 97
                                        },
                                        "label": null,
                                        "flags": 16,
                                        "start": 84,
                                        "end": 98
                                    }
                                ],
                                "flags": 17,
                                "start": 63,
                                "end": 98
                            },
                            "flags": 17,
                            "start": 59,
                            "end": 102
                        }
                    ],
                    "flags": 17,
                    "start": 41,
                    "end": 102
                },
                "flags": 16,
                "start": 39,
                "end": 104
            },
            "flags": 81,
            "start": 14,
            "end": 104
        }
    ],
    "isModule": false,
    "source": "var count = 0;\nfor (let x = 0; x < 10;) {\n  x++;\n  count++;\n  {\n    let x = \"hello\";\n    continue;\n  }\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 104
}
```

### Printed

```javascript

 var count = 0; for(let x = 0;; x  < 10){ x++; count++; { let x = "hello"; continue; } } 
```

### Diagnostics

```javascript
✔ No errors
```

