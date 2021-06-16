# Kataw parser test case

## Input

`````js
var count = 0;
label: for (let x = 0; x < 10;) {
  while (true) {
    x++;
    count++;
    continue label;
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
                        "optionalToken": null,
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
            "kind": 163,
            "label": {
                "kind": 134299649,
                "text": "label",
                "rawText": "label",
                "flags": 96,
                "start": 14,
                "end": 20
            },
            "colonToken": {
                "kind": 21,
                "flags": 64,
                "start": 20,
                "end": 21
            },
            "statement": {
                "kind": 165,
                "forKeyword": {
                    "kind": 37757017,
                    "flags": 80,
                    "start": 21,
                    "end": 25
                },
                "initializer": {
                    "kind": 151,
                    "bindingList": [
                        {
                            "kind": 190,
                            "binding": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 30,
                                "end": 32
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": {
                                "kind": 201392130,
                                "text": 0,
                                "rawText": "0",
                                "flags": 96,
                                "start": 34,
                                "end": 36
                            },
                            "flags": 16,
                            "start": 30,
                            "end": 36
                        }
                    ],
                    "flags": 16,
                    "start": 30,
                    "end": 36
                },
                "condition": null,
                "incrementor": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 37,
                        "end": 39
                    },
                    "operatorToken": {
                        "kind": 536971330,
                        "flags": 96,
                        "start": 39,
                        "end": 41
                    },
                    "right": {
                        "kind": 201392130,
                        "text": 10,
                        "rawText": "10",
                        "flags": 96,
                        "start": 41,
                        "end": 44
                    },
                    "flags": 32,
                    "start": 37,
                    "end": 44
                },
                "statement": {
                    "kind": 124,
                    "block": {
                        "kind": 249,
                        "statements": [
                            {
                                "kind": 154,
                                "whileKeyword": {
                                    "kind": 37757028,
                                    "flags": 81,
                                    "start": 48,
                                    "end": 56
                                },
                                "expression": {
                                    "kind": 24752947,
                                    "flags": 96,
                                    "start": 58,
                                    "end": 62
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
                                                        "start": 71,
                                                        "end": 73
                                                    },
                                                    "operand": {
                                                        "kind": 134299649,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 96,
                                                        "start": 65,
                                                        "end": 71
                                                    },
                                                    "flags": 32,
                                                    "start": 65,
                                                    "end": 73
                                                },
                                                "flags": 16,
                                                "start": 65,
                                                "end": 74
                                            },
                                            {
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 127,
                                                    "operandToken": {
                                                        "kind": 196635,
                                                        "flags": 96,
                                                        "start": 84,
                                                        "end": 86
                                                    },
                                                    "operand": {
                                                        "kind": 134299649,
                                                        "text": "count",
                                                        "rawText": "count",
                                                        "flags": 96,
                                                        "start": 74,
                                                        "end": 84
                                                    },
                                                    "flags": 32,
                                                    "start": 74,
                                                    "end": 86
                                                },
                                                "flags": 16,
                                                "start": 74,
                                                "end": 87
                                            },
                                            {
                                                "kind": 172,
                                                "continueKeyword": {
                                                    "kind": 37757009,
                                                    "flags": 81,
                                                    "start": 87,
                                                    "end": 100
                                                },
                                                "label": {
                                                    "kind": 134299649,
                                                    "text": "label",
                                                    "rawText": "label",
                                                    "flags": 96,
                                                    "start": 100,
                                                    "end": 106
                                                },
                                                "flags": 16,
                                                "start": 87,
                                                "end": 107
                                            }
                                        ],
                                        "flags": 17,
                                        "start": 65,
                                        "end": 107
                                    },
                                    "flags": 16,
                                    "start": 63,
                                    "end": 111
                                },
                                "flags": 81,
                                "start": 48,
                                "end": 111
                            }
                        ],
                        "flags": 17,
                        "start": 48,
                        "end": 111
                    },
                    "flags": 16,
                    "start": 46,
                    "end": 113
                },
                "flags": 80,
                "start": 21,
                "end": 113
            },
            "flags": 17,
            "start": 14,
            "end": 113
        }
    ],
    "isModule": false,
    "source": "var count = 0;\nlabel: for (let x = 0; x < 10;) {\n  while (true) {\n    x++;\n    count++;\n    continue label;\n  }\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 113
}
```

### Printed

```javascript

var count = 0;
label: for (let; ; x  < 10)
  {}
```

### Diagnostics

```javascript
✔ No errors
```

