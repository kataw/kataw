# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/statements/do-while/autogen.md
- Path: kataw/test/__snapshot__/parser/statements/do-while/gen/do_triple
> :: test: do triple
> :: case: async funcion switch!!
## Options

`````js
{}
`````
## Input

`````js
do do do async funcion switch!! while while while
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
            "statement": {
                "kind": 169,
                "doKeyword": {
                    "kind": 4202580,
                    "flags": 80,
                    "start": 2,
                    "end": 5
                },
                "statement": {
                    "kind": 169,
                    "doKeyword": {
                        "kind": 4202580,
                        "flags": 80,
                        "start": 5,
                        "end": 8
                    },
                    "statement": {
                        "kind": 120,
                        "expression": {
                            "kind": 271,
                            "asyncKeyword": {
                                "kind": 82031,
                                "flags": 64,
                                "start": 8,
                                "end": 14
                            },
                            "typeParameters": null,
                            "parameters": {
                                "kind": 134299649,
                                "text": "funcion",
                                "rawText": "funcion",
                                "flags": 96,
                                "start": 14,
                                "end": 22
                            },
                            "returnType": null,
                            "arrowToken": null,
                            "contents": {
                                "kind": 16637,
                                "text": "",
                                "rawText": "",
                                "flags": 64,
                                "start": 22,
                                "end": 22
                            },
                            "flags": 288,
                            "start": 8,
                            "end": 22
                        },
                        "flags": 16,
                        "start": 8,
                        "end": 22
                    },
                    "whileKeyword": null,
                    "expression": {
                        "kind": 16637,
                        "text": "",
                        "rawText": "",
                        "flags": 64,
                        "start": 22,
                        "end": 22
                    },
                    "flags": 80,
                    "start": 5,
                    "end": 22
                },
                "whileKeyword": null,
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "rawText": "",
                    "flags": 64,
                    "start": 22,
                    "end": 22
                },
                "flags": 80,
                "start": 2,
                "end": 22
            },
            "whileKeyword": null,
            "expression": {
                "kind": 16637,
                "text": "",
                "rawText": "",
                "flags": 64,
                "start": 22,
                "end": 22
            },
            "flags": 80,
            "start": 0,
            "end": 22
        },
        {
            "kind": 160,
            "switchKeyword": {
                "kind": 37757024,
                "flags": 80,
                "start": 22,
                "end": 29
            },
            "expression": {
                "kind": 126,
                "operandToken": {
                    "kind": 65584,
                    "flags": 96,
                    "start": 29,
                    "end": 30
                },
                "operand": {
                    "kind": 126,
                    "operandToken": {
                        "kind": 65584,
                        "flags": 96,
                        "start": 30,
                        "end": 31
                    },
                    "operand": {
                        "kind": 16637,
                        "text": "",
                        "rawText": "",
                        "flags": 64,
                        "start": 31,
                        "end": 31
                    },
                    "flags": 32,
                    "start": 30,
                    "end": 31
                },
                "flags": 32,
                "start": 29,
                "end": 31
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [],
                "flags": 16,
                "start": 31,
                "end": 31
            },
            "flags": 80,
            "start": 22,
            "end": 31
        },
        {
            "kind": 154,
            "whileKeyword": {
                "kind": 37757028,
                "flags": 80,
                "start": 31,
                "end": 37
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "rawText": "",
                "flags": 64,
                "start": 37,
                "end": 37
            },
            "statement": {
                "kind": 154,
                "whileKeyword": {
                    "kind": 37757028,
                    "flags": 80,
                    "start": 37,
                    "end": 43
                },
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "rawText": "",
                    "flags": 64,
                    "start": 43,
                    "end": 43
                },
                "statement": {
                    "kind": 154,
                    "whileKeyword": {
                        "kind": 37757028,
                        "flags": 80,
                        "start": 43,
                        "end": 49
                    },
                    "expression": {
                        "kind": 16637,
                        "text": "",
                        "rawText": "",
                        "flags": 64,
                        "start": 49,
                        "end": 49
                    },
                    "statement": {
                        "kind": 120,
                        "expression": {
                            "kind": 16637,
                            "text": "",
                            "rawText": "",
                            "flags": 64,
                            "start": 49,
                            "end": 49
                        },
                        "flags": 16,
                        "start": 49,
                        "end": 49
                    },
                    "flags": 80,
                    "start": 43,
                    "end": 49
                },
                "flags": 80,
                "start": 37,
                "end": 49
            },
            "flags": 80,
            "start": 31,
            "end": 49
        }
    ],
    "isModule": false,
    "source": "do do do async funcion switch!! while while while",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 49
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Function declarations cannot be used in a single-statement context - start: 8, end: 14
✖ Identifier expected - start: 22, end: 29
✖ Missing an opening parentheses - '( - start: 29, end: 30
✖ Identifier expected - start: 31, end: 37
✖ Missing an opening parentheses - '( - start: 38, end: 43
✖ Missing an opening parentheses - '( - start: 44, end: 49

```

