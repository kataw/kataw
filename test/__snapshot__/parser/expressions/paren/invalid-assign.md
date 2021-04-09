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
                                                        "kind": 81921,
                                                        "value": "y",
                                                        "autofix": 0,
                                                        "flags": 768,
                                                        "start": 10,
                                                        "end": 11
                                                    },
                                                    "right": {
                                                        "kind": 81921,
                                                        "value": "x",
                                                        "autofix": 0,
                                                        "flags": 768,
                                                        "start": 8,
                                                        "end": 9
                                                    },
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 8,
                                                    "end": 11
                                                }
                                            ],
                                            "trailingComma": false,
                                            "multiline": false,
                                            "autofix": 0,
                                            "flags": 0,
                                            "start": 8,
                                            "end": 11
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 6,
                                        "end": 12
                                    },
                                    "operatorToken": {
                                        "kind": 4130,
                                        "autofix": 0,
                                        "flags": 0,
                                        "start": 12,
                                        "end": 15
                                    },
                                    "right": {
                                        "kind": 81921,
                                        "value": "x",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 15,
                                        "end": 17
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 6,
                                    "end": 17
                                },
                                "right": {
                                    "kind": 81921,
                                    "value": "foo",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 2,
                                    "end": 5
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 2,
                                "end": 17
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "autofix": 0,
                        "flags": 0,
                        "start": 2,
                        "end": 17
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 1,
                    "end": 18
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 19
            },
            "autofix": 0,
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
                                        "kind": 81921,
                                        "value": "y",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 26,
                                        "end": 27
                                    },
                                    "right": {
                                        "kind": 81921,
                                        "value": "x",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 24,
                                        "end": 25
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 24,
                                    "end": 27
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "autofix": 0,
                            "flags": 0,
                            "start": 24,
                            "end": 27
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 23,
                        "end": 28
                    },
                    "operatorToken": {
                        "kind": 4130,
                        "autofix": 0,
                        "flags": 0,
                        "start": 28,
                        "end": 31
                    },
                    "right": {
                        "kind": 81921,
                        "value": "x",
                        "autofix": 0,
                        "flags": 768,
                        "start": 31,
                        "end": 33
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 23,
                    "end": 33
                },
                "autofix": 0,
                "flags": 256,
                "start": 20,
                "end": 34
            },
            "autofix": 0,
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
                                            "kind": 81921,
                                            "value": "y",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 41,
                                            "end": 42
                                        },
                                        "right": {
                                            "kind": 81921,
                                            "value": "x",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 39,
                                            "end": 40
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 39,
                                        "end": 42
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "autofix": 0,
                                "flags": 0,
                                "start": 39,
                                "end": 42
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 38,
                            "end": 43
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 37,
                        "end": 44
                    },
                    "operatorToken": {
                        "kind": 81921,
                        "autofix": 0,
                        "flags": 0,
                        "start": 37,
                        "end": 47
                    },
                    "right": {
                        "kind": 81921,
                        "value": "x",
                        "autofix": 0,
                        "flags": 768,
                        "start": 47,
                        "end": 49
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 37,
                    "end": 49
                },
                "autofix": 0,
                "flags": 256,
                "start": 35,
                "end": 50
            },
            "autofix": 0,
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
                    "autofix": 0,
                    "flags": 0,
                    "start": 59,
                    "end": 61
                },
                "expression": {
                    "kind": 121,
                    "expression": {
                        "kind": 125,
                        "left": {
                            "kind": 81921,
                            "value": "a",
                            "autofix": 0,
                            "flags": 768,
                            "start": 53,
                            "end": 54
                        },
                        "operatorToken": {
                            "kind": 81921,
                            "autofix": 0,
                            "flags": 0,
                            "start": 51,
                            "end": 56
                        },
                        "right": {
                            "kind": 81921,
                            "value": "b",
                            "autofix": 0,
                            "flags": 768,
                            "start": 56,
                            "end": 58
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 51,
                        "end": 58
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 51,
                    "end": 59
                },
                "autofix": 0,
                "flags": 256,
                "start": 51,
                "end": 61
            },
            "autofix": 0,
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
                                                        "kind": 81921,
                                                        "value": "y",
                                                        "autofix": 0,
                                                        "flags": 768,
                                                        "start": 73,
                                                        "end": 74
                                                    },
                                                    "right": {
                                                        "kind": 81921,
                                                        "value": "x",
                                                        "autofix": 0,
                                                        "flags": 768,
                                                        "start": 71,
                                                        "end": 72
                                                    },
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 71,
                                                    "end": 74
                                                }
                                            ],
                                            "trailingComma": false,
                                            "multiline": false,
                                            "autofix": 0,
                                            "flags": 0,
                                            "start": 71,
                                            "end": 74
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 69,
                                        "end": 75
                                    },
                                    "operatorToken": {
                                        "kind": 4130,
                                        "autofix": 0,
                                        "flags": 0,
                                        "start": 75,
                                        "end": 78
                                    },
                                    "right": {
                                        "kind": 81921,
                                        "value": "x",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 78,
                                        "end": 80
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 69,
                                    "end": 80
                                },
                                "right": {
                                    "kind": 81921,
                                    "value": "foo",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 65,
                                    "end": 68
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 65,
                                "end": 80
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "autofix": 0,
                        "flags": 0,
                        "start": 65,
                        "end": 80
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 64,
                    "end": 81
                },
                "autofix": 0,
                "flags": 256,
                "start": 62,
                "end": 82
            },
            "autofix": 0,
            "flags": 128,
            "start": 62,
            "end": 83
        }
    ],
    "isModule": false,
    "text": "({foo: {x:y} += x});\n\n({x:y} += x);\n(({x:y}) += x);\n(a = b)++;\n({foo: {x:y} += x});",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 23,
            "error": "Expression exprected. A compound assignment cannot follow an object literal",
            "start": 12,
            "end": 15
        },
        {
            "kind": 2,
            "source": 2,
            "code": 23,
            "error": "Expression exprected. A compound assignment cannot follow an object literal",
            "start": 28,
            "end": 31
        },
        {
            "kind": 2,
            "source": 2,
            "code": 24,
            "error": "The left-hand side of an assignment expression must be a variable or a property access",
            "start": 44,
            "end": 47
        },
        {
            "kind": 2,
            "source": 2,
            "code": 25,
            "error": "The operand of an increment or decrement operator must be a variable or a property access",
            "start": 59,
            "end": 61
        },
        {
            "kind": 2,
            "source": 2,
            "code": 23,
            "error": "Expression exprected. A compound assignment cannot follow an object literal",
            "start": 75,
            "end": 78
        }
    ],
    "start": 0,
    "end": 83
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

