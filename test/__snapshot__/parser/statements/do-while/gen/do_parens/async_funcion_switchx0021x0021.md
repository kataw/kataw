# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-01
- From: kataw8/test\__snapshot__/parser/statements/do-while/autogen.md
- Path: kataw8/test\__snapshot__\parser\statements\do-while\gen\do_parens
> :: test: do parens
> :: case: async funcion switch!!
## Input

`````js
do( async funcion switch!! while
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
                "start": 17,
                "end": 17
            },
            "whileKeyword": null,
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 121,
                    "expression": {
                        "kind": 132,
                        "expressions": [],
                        "flags": 32,
                        "start": 2,
                        "end": 17
                    },
                    "flags": 32,
                    "start": 2,
                    "end": 17
                },
                "flags": 16,
                "start": 2,
                "end": 17
            },
            "flags": 16,
            "start": 0,
            "end": 17
        },
        {
            "kind": 160,
            "switchKeyword": {
                "kind": 37757024,
                "flags": 80,
                "start": 17,
                "end": 24
            },
            "expression": {
                "kind": 126,
                "operandToken": {
                    "kind": 65584,
                    "flags": 64,
                    "start": 24,
                    "end": 25
                },
                "operand": {
                    "kind": 126,
                    "operandToken": {
                        "kind": 65584,
                        "flags": 64,
                        "start": 25,
                        "end": 26
                    },
                    "operand": {
                        "kind": 16637,
                        "text": "",
                        "flags": 64,
                        "start": 26,
                        "end": 26
                    },
                    "flags": 32,
                    "start": 25,
                    "end": 26
                },
                "flags": 32,
                "start": 24,
                "end": 26
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [],
                "flags": 16,
                "start": 26,
                "end": 26
            },
            "flags": 16,
            "start": 17,
            "end": 26
        },
        {
            "kind": 154,
            "whileKeyword": {
                "kind": 37757028,
                "flags": 80,
                "start": 26,
                "end": 32
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "flags": 64,
                "start": 32,
                "end": 32
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "flags": 64,
                    "start": 32,
                    "end": 32
                },
                "flags": 16,
                "start": 32,
                "end": 32
            },
            "flags": 16,
            "start": 26,
            "end": 32
        }
    ],
    "isModule": false,
    "source": "do( async funcion switch!! while",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 32
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 17, end: 24
✖ Missing an opening parentheses - '( - start: 24, end: 25
✖ Identifier expected - start: 26, end: 32

```

