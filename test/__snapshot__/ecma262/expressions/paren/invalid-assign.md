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

### CST

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
                                "asteriskToken": null,
                                "left": {
                                    "kind": 134299649,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 2,
                                    "end": 5
                                },
                                "right": {
                                    "kind": 125,
                                    "left": {
                                        "kind": 220,
                                        "propertyList": {
                                            "kind": 218,
                                            "properties": [
                                                {
                                                    "kind": 219,
                                                    "asteriskToken": null,
                                                    "left": {
                                                        "kind": 134299649,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 8,
                                                        "end": 9
                                                    },
                                                    "right": {
                                                        "kind": 134299649,
                                                        "text": "y",
                                                        "rawText": "y",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 10,
                                                        "end": 11
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 128,
                                                    "start": 8,
                                                    "end": 11
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 16,
                                            "transformFlags": 0,
                                            "start": 8,
                                            "end": 11
                                        },
                                        "flags": 48,
                                        "transformFlags": 8,
                                        "start": 6,
                                        "end": 12
                                    },
                                    "operatorToken": {
                                        "kind": 4130,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 12,
                                        "end": 15
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 15,
                                        "end": 17
                                    },
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 6,
                                    "end": 17
                                },
                                "flags": 32,
                                "transformFlags": 128,
                                "start": 2,
                                "end": 17
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 2,
                        "end": 17
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 1,
                    "end": 18
                },
                "flags": 34,
                "transformFlags": 0,
                "start": 0,
                "end": 19
            },
            "flags": 16,
            "transformFlags": 4096,
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
                                    "asteriskToken": null,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 24,
                                        "end": 25
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 26,
                                        "end": 27
                                    },
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 24,
                                    "end": 27
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 24,
                            "end": 27
                        },
                        "flags": 48,
                        "transformFlags": 8,
                        "start": 23,
                        "end": 28
                    },
                    "operatorToken": {
                        "kind": 4130,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 28,
                        "end": 31
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 31,
                        "end": 33
                    },
                    "flags": 32,
                    "transformFlags": 128,
                    "start": 23,
                    "end": 33
                },
                "flags": 35,
                "transformFlags": 0,
                "start": 20,
                "end": 34
            },
            "flags": 16,
            "transformFlags": 4096,
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
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 39,
                                            "end": 40
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "y",
                                            "rawText": "y",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 41,
                                            "end": 42
                                        },
                                        "flags": 32,
                                        "transformFlags": 128,
                                        "start": 39,
                                        "end": 42
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 39,
                                "end": 42
                            },
                            "flags": 48,
                            "transformFlags": 8,
                            "start": 38,
                            "end": 43
                        },
                        "flags": 34,
                        "transformFlags": 0,
                        "start": 37,
                        "end": 44
                    },
                    "operatorToken": {
                        "kind": 4130,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 44,
                        "end": 47
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 47,
                        "end": 49
                    },
                    "flags": 0,
                    "transformFlags": 128,
                    "start": 37,
                    "end": 49
                },
                "flags": 33,
                "transformFlags": 0,
                "start": 35,
                "end": 50
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 35,
            "end": 51
        },
        {
            "kind": 120,
            "expression": {
                "kind": 127,
                "operandToken": {
                    "kind": 196635,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 59,
                    "end": 61
                },
                "operand": {
                    "kind": 121,
                    "expression": {
                        "kind": 125,
                        "left": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 53,
                            "end": 54
                        },
                        "operatorToken": {
                            "kind": 4125,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 54,
                            "end": 56
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 56,
                            "end": 58
                        },
                        "flags": 32,
                        "transformFlags": 128,
                        "start": 51,
                        "end": 58
                    },
                    "flags": 35,
                    "transformFlags": 0,
                    "start": 51,
                    "end": 59
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 51,
                "end": 61
            },
            "flags": 16,
            "transformFlags": 4096,
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
                                "asteriskToken": null,
                                "left": {
                                    "kind": 134299649,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 65,
                                    "end": 68
                                },
                                "right": {
                                    "kind": 125,
                                    "left": {
                                        "kind": 220,
                                        "propertyList": {
                                            "kind": 218,
                                            "properties": [
                                                {
                                                    "kind": 219,
                                                    "asteriskToken": null,
                                                    "left": {
                                                        "kind": 134299649,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 71,
                                                        "end": 72
                                                    },
                                                    "right": {
                                                        "kind": 134299649,
                                                        "text": "y",
                                                        "rawText": "y",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 73,
                                                        "end": 74
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 128,
                                                    "start": 71,
                                                    "end": 74
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 16,
                                            "transformFlags": 0,
                                            "start": 71,
                                            "end": 74
                                        },
                                        "flags": 48,
                                        "transformFlags": 8,
                                        "start": 69,
                                        "end": 75
                                    },
                                    "operatorToken": {
                                        "kind": 4130,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 75,
                                        "end": 78
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 78,
                                        "end": 80
                                    },
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 69,
                                    "end": 80
                                },
                                "flags": 32,
                                "transformFlags": 128,
                                "start": 65,
                                "end": 80
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 65,
                        "end": 80
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 64,
                    "end": 81
                },
                "flags": 35,
                "transformFlags": 0,
                "start": 62,
                "end": 82
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 62,
            "end": 83
        }
    ],
    "isModule": false,
    "source": "({foo: {x:y} += x});\n\n({x:y} += x);\n(({x:y}) += x);\n(a = b)++;\n({foo: {x:y} += x});",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 83
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expression exprected. A compound assignment or an logical assignment cannot follow an object literal - start: 6, end: 15
✖ Expression exprected. A compound assignment or an logical assignment cannot follow an object literal - start: 23, end: 31
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 44, end: 47
✖ The operand of an increment or decrement operator must be a variable or a property access - start: 59, end: 61
✖ Expression exprected. A compound assignment or an logical assignment cannot follow an object literal - start: 69, end: 78

```

