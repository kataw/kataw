# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-30
- From: kataw7/test\__snapshot__/parser/statements/do-while/autogen.md
- Path: kataw7/test\__snapshot__\parser\statements\do-while\gen\do_triple
> :: test: do triple
> :: case: async try while { catch }
## Input

`````js
do do do async try while { catch } while while while
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 169,
            "doKeyword": {
                "kind": 4202580,
                "flags": 80,
                "start": 0,
                "end": 2
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "flags": 64,
                "start": 14,
                "end": 14
            },
            "whileKeyword": null,
            "statement": {
                "kind": 169,
                "doKeyword": {
                    "kind": 4202580,
                    "flags": 80,
                    "start": 2,
                    "end": 5
                },
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "flags": 64,
                    "start": 14,
                    "end": 14
                },
                "whileKeyword": null,
                "statement": {
                    "kind": 169,
                    "doKeyword": {
                        "kind": 4202580,
                        "flags": 80,
                        "start": 5,
                        "end": 8
                    },
                    "expression": {
                        "kind": 16637,
                        "text": "",
                        "flags": 64,
                        "start": 14,
                        "end": 14
                    },
                    "whileKeyword": null,
                    "statement": {
                        "kind": 120,
                        "expression": {
                            "kind": 134299649,
                            "text": "async",
                            "rawText": "async",
                            "flags": 96,
                            "start": 8,
                            "end": 14
                        },
                        "flags": 16,
                        "start": 8,
                        "end": 14
                    },
                    "flags": 16,
                    "start": 5,
                    "end": 14
                },
                "flags": 16,
                "start": 2,
                "end": 14
            },
            "flags": 16,
            "start": 0,
            "end": 14
        },
        {
            "kind": 159,
            "tryKeyword": {
                "kind": 37757027,
                "flags": 80,
                "start": 14,
                "end": 18
            },
            "block": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "start": 18,
                    "end": 18
                },
                "flags": 16,
                "start": 18,
                "end": 18
            },
            "catchClause": null,
            "finallyKeyword": null,
            "finallyBlock": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "start": 18,
                    "end": 18
                },
                "flags": 16,
                "start": 18,
                "end": 18
            },
            "flags": 16,
            "start": 14,
            "end": 18
        },
        {
            "kind": 154,
            "whileKeyword": {
                "kind": 37757028,
                "flags": 80,
                "start": 18,
                "end": 24
            },
            "expression": {
                "kind": 220,
                "propertyList": {
                    "kind": 218,
                    "properties": [
                        {
                            "kind": 134299649,
                            "text": "catch",
                            "rawText": "catch",
                            "flags": 96,
                            "start": 26,
                            "end": 32
                        }
                    ],
                    "trailingComma": false,
                    "flags": 16,
                    "start": 26,
                    "end": 32
                },
                "flags": 48,
                "start": 24,
                "end": 34
            },
            "statement": {
                "kind": 154,
                "whileKeyword": {
                    "kind": 37757028,
                    "flags": 80,
                    "start": 34,
                    "end": 40
                },
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "flags": 64,
                    "start": 40,
                    "end": 40
                },
                "statement": {
                    "kind": 154,
                    "whileKeyword": {
                        "kind": 37757028,
                        "flags": 80,
                        "start": 40,
                        "end": 46
                    },
                    "expression": {
                        "kind": 16637,
                        "text": "",
                        "flags": 64,
                        "start": 46,
                        "end": 46
                    },
                    "statement": {
                        "kind": 154,
                        "whileKeyword": {
                            "kind": 37757028,
                            "flags": 80,
                            "start": 46,
                            "end": 52
                        },
                        "expression": {
                            "kind": 16637,
                            "text": "",
                            "flags": 64,
                            "start": 52,
                            "end": 52
                        },
                        "statement": {
                            "kind": 120,
                            "expression": {
                                "kind": 16637,
                                "text": "",
                                "flags": 64,
                                "start": 52,
                                "end": 52
                            },
                            "flags": 16,
                            "start": 52,
                            "end": 52
                        },
                        "flags": 16,
                        "start": 46,
                        "end": 52
                    },
                    "flags": 16,
                    "start": 40,
                    "end": 52
                },
                "flags": 16,
                "start": 34,
                "end": 52
            },
            "flags": 16,
            "start": 18,
            "end": 52
        }
    ],
    "isModule": false,
    "source": "do do do async try while { catch } while while while",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 52
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Function declarations cannot be used in a single-statement context - start: 8, end: 14
✖ Expected a `;` - start: 14, end: 18
✖ Missing an opening parentheses - '( - start: 24, end: 26
✖ Property definition expected. Did you mean to use a ':'? - start: 32, end: 34
✖ Declaration or statement expected - start: 34, end: 40
✖ Missing an opening parentheses - '( - start: 40, end: 46
✖ Missing an opening parentheses - '( - start: 46, end: 52

```

