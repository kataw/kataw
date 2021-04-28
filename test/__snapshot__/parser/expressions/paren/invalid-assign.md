# Kataw parser test case

## Input

`````js
({foo: {x:y} += x});

({x:y} += x);
(({x:y}) += x);
(a = b)++;
({foo: {x:y} += x});
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
                "kind": 121,
                "expression": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 219,
                                "left": {
                                    "kind": 125,
                                    "left": {
                                        "kind": 220,
                                        "propertyList": {
                                            "kind": 218,
                                            "properties": [
                                                {
                                                    "kind": 219,
                                                    "left": {
                                                        "kind": 134299649,
                                                        "text": "y",
                                                        "rawText": "y",
                                                        "flags": 768,
                                                        "start": 10,
                                                        "end": 11
                                                    },
                                                    "right": {
                                                        "kind": 134299649,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 768,
                                                        "start": 8,
                                                        "end": 9
                                                    },
                                                    "flags": 256,
                                                    "start": 8,
                                                    "end": 11
                                                }
                                            ],
                                            "trailingComma": false,
                                            "multiline": false,
                                            "flags": 0,
                                            "start": 8,
                                            "end": 11
                                        },
                                        "flags": 256,
                                        "start": 6,
                                        "end": 12
                                    },
                                    "operatorToken": {
                                        "kind": 4130,
                                        "flags": 512,
                                        "start": 12,
                                        "end": 15
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 768,
                                        "start": 15,
                                        "end": 17
                                    },
                                    "flags": 256,
                                    "start": 6,
                                    "end": 17
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 768,
                                    "start": 2,
                                    "end": 5
                                },
                                "flags": 256,
                                "start": 2,
                                "end": 17
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 2,
                        "end": 17
                    },
                    "flags": 256,
                    "start": 1,
                    "end": 18
                },
                "flags": 256,
                "start": 0,
                "end": 19
            },
            "flags": 128,
            "start": 0,
            "end": 20
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 125,
                    "left": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 219,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 768,
                                        "start": 26,
                                        "end": 27
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 768,
                                        "start": 24,
                                        "end": 25
                                    },
                                    "flags": 256,
                                    "start": 24,
                                    "end": 27
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "start": 24,
                            "end": 27
                        },
                        "flags": 256,
                        "start": 23,
                        "end": 28
                    },
                    "operatorToken": {
                        "kind": 4130,
                        "flags": 512,
                        "start": 28,
                        "end": 31
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 768,
                        "start": 31,
                        "end": 33
                    },
                    "flags": 256,
                    "start": 23,
                    "end": 33
                },
                "flags": 256,
                "start": 20,
                "end": 34
            },
            "flags": 128,
            "start": 20,
            "end": 35
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 125,
                    "left": {
                        "kind": 121,
                        "expression": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 219,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "y",
                                            "rawText": "y",
                                            "flags": 768,
                                            "start": 41,
                                            "end": 42
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 768,
                                            "start": 39,
                                            "end": 40
                                        },
                                        "flags": 256,
                                        "start": 39,
                                        "end": 42
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "start": 39,
                                "end": 42
                            },
                            "flags": 256,
                            "start": 38,
                            "end": 43
                        },
                        "flags": 256,
                        "start": 37,
                        "end": 44
                    },
                    "operatorToken": {
                        "kind": 4130,
                        "flags": 512,
                        "start": 44,
                        "end": 47
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 768,
                        "start": 47,
                        "end": 49
                    },
                    "flags": 256,
                    "start": 37,
                    "end": 49
                },
                "flags": 256,
                "start": 35,
                "end": 50
            },
            "flags": 128,
            "start": 35,
            "end": 51
        },
        {
            "kind": 120,
            "expression": {
                "kind": 127,
                "operandToken": {
                    "kind": 196635,
                    "flags": 512,
                    "start": 59,
                    "end": 61
                },
                "expression": {
                    "kind": 121,
                    "expression": {
                        "kind": 125,
                        "left": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 768,
                            "start": 53,
                            "end": 54
                        },
                        "operatorToken": {
                            "kind": 4125,
                            "flags": 512,
                            "start": 54,
                            "end": 56
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 768,
                            "start": 56,
                            "end": 58
                        },
                        "flags": 256,
                        "start": 51,
                        "end": 58
                    },
                    "flags": 256,
                    "start": 51,
                    "end": 59
                },
                "flags": 256,
                "start": 51,
                "end": 61
            },
            "flags": 128,
            "start": 51,
            "end": 62
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 219,
                                "left": {
                                    "kind": 125,
                                    "left": {
                                        "kind": 220,
                                        "propertyList": {
                                            "kind": 218,
                                            "properties": [
                                                {
                                                    "kind": 219,
                                                    "left": {
                                                        "kind": 134299649,
                                                        "text": "y",
                                                        "rawText": "y",
                                                        "flags": 768,
                                                        "start": 73,
                                                        "end": 74
                                                    },
                                                    "right": {
                                                        "kind": 134299649,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 768,
                                                        "start": 71,
                                                        "end": 72
                                                    },
                                                    "flags": 256,
                                                    "start": 71,
                                                    "end": 74
                                                }
                                            ],
                                            "trailingComma": false,
                                            "multiline": false,
                                            "flags": 0,
                                            "start": 71,
                                            "end": 74
                                        },
                                        "flags": 256,
                                        "start": 69,
                                        "end": 75
                                    },
                                    "operatorToken": {
                                        "kind": 4130,
                                        "flags": 512,
                                        "start": 75,
                                        "end": 78
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 768,
                                        "start": 78,
                                        "end": 80
                                    },
                                    "flags": 256,
                                    "start": 69,
                                    "end": 80
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 768,
                                    "start": 65,
                                    "end": 68
                                },
                                "flags": 256,
                                "start": 65,
                                "end": 80
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 65,
                        "end": 80
                    },
                    "flags": 256,
                    "start": 64,
                    "end": 81
                },
                "flags": 256,
                "start": 62,
                "end": 82
            },
            "flags": 128,
            "start": 62,
            "end": 83
        }
    ],
    "isModule": false,
    "text": "({foo: {x:y} += x});\n\n({x:y} += x);\n(({x:y}) += x);\n(a = b)++;\n({foo: {x:y} += x});",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 83
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Expression exprected. A compound assignment or an logical assignment cannot follow an object literal - start: 12, end: 15
✖ Expression exprected. A compound assignment or an logical assignment cannot follow an object literal - start: 28, end: 31
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 44, end: 47
✖ The operand of an increment or decrement operator must be a variable or a property access - start: 59, end: 61
✖ Expression exprected. A compound assignment or an logical assignment cannot follow an object literal - start: 75, end: 78

```

