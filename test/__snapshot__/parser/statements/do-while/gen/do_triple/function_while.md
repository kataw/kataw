# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/statements/do-while/autogen.md
- Path: kataw/test/__snapshot__/parser/statements/do-while/gen/do_triple
> :: test: do triple
> :: case: function while
## Options

`````js
{}
`````
## Input

`````js
do do do function while while while while
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
                "start": 35,
                "end": 35
            },
            "whileKeyword": {
                "kind": 37757028,
                "flags": 64,
                "start": 29,
                "end": 35
            },
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
                    "start": 29,
                    "end": 29
                },
                "whileKeyword": {
                    "kind": 37757028,
                    "flags": 64,
                    "start": 23,
                    "end": 29
                },
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
                        "start": 23,
                        "end": 23
                    },
                    "whileKeyword": {
                        "kind": 37757028,
                        "flags": 64,
                        "start": 17,
                        "end": 23
                    },
                    "statement": {
                        "kind": 176,
                        "declareKeyword": null,
                        "asyncKeyword": null,
                        "functionKeyword": {
                            "kind": 37822554,
                            "flags": 64,
                            "start": 8,
                            "end": 17
                        },
                        "generatorToken": null,
                        "name": null,
                        "formalParameters": {
                            "kind": 214,
                            "formalParameterList": [],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 17,
                            "end": 17
                        },
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "directives": [],
                                "statements": [],
                                "flags": 32,
                                "start": 17,
                                "end": 17
                            },
                            "flags": 32,
                            "start": 17,
                            "end": 17
                        },
                        "typeParameters": null,
                        "returnType": null,
                        "flags": 16,
                        "start": 8,
                        "end": 17
                    },
                    "flags": 80,
                    "start": 5,
                    "end": 23
                },
                "flags": 80,
                "start": 2,
                "end": 29
            },
            "flags": 80,
            "start": 0,
            "end": 35
        },
        {
            "kind": 154,
            "whileKeyword": {
                "kind": 37757028,
                "flags": 80,
                "start": 35,
                "end": 41
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "flags": 64,
                "start": 41,
                "end": 41
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "flags": 64,
                    "start": 41,
                    "end": 41
                },
                "flags": 16,
                "start": 41,
                "end": 41
            },
            "flags": 80,
            "start": 35,
            "end": 41
        }
    ],
    "isModule": false,
    "source": "do do do function while while while while",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 41
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Function declarations cannot be used in a single-statement context - start: 8, end: 17
✖ Binding identifier expected - start: 17, end: 23
✖ Missing an opening parentheses - '( - start: 18, end: 23
✖ Missing an opening parentheses - '( - start: 24, end: 29
✖ Missing an opening parentheses - '( - start: 30, end: 35
✖ Missing an opening parentheses - '( - start: 36, end: 41

```

