# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-11
- From: kataw/test/__snapshot__/parser/statements/do-while/autogen.md
- Path: kataw/test/__snapshot__/parser/statements/do-while/gen/missing_parens_and_block
> :: test: missing parens and block
> :: case: while try this and !foo
## Options

`````js
{}
`````
## Input

`````js
do while try this and !foo while
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
                "kind": 4276321,
                "flags": 96,
                "start": 12,
                "end": 17
            },
            "whileKeyword": null,
            "statement": {
                "kind": 154,
                "whileKeyword": {
                    "kind": 37757028,
                    "flags": 80,
                    "start": 2,
                    "end": 8
                },
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "flags": 64,
                    "start": 8,
                    "end": 8
                },
                "statement": {
                    "kind": 159,
                    "tryKeyword": {
                        "kind": 37757027,
                        "flags": 80,
                        "start": 8,
                        "end": 12
                    },
                    "block": {
                        "kind": 124,
                        "block": {
                            "kind": 249,
                            "statements": [],
                            "flags": 16,
                            "start": 12,
                            "end": 12
                        },
                        "flags": 16,
                        "start": 12,
                        "end": 12
                    },
                    "catchClause": null,
                    "finallyKeyword": null,
                    "finallyBlock": {
                        "kind": 124,
                        "block": {
                            "kind": 249,
                            "statements": [],
                            "flags": 16,
                            "start": 12,
                            "end": 12
                        },
                        "flags": 16,
                        "start": 12,
                        "end": 12
                    },
                    "flags": 16,
                    "start": 8,
                    "end": 12
                },
                "flags": 80,
                "start": 2,
                "end": 12
            },
            "flags": 80,
            "start": 0,
            "end": 17
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "and",
                "rawText": "and",
                "flags": 96,
                "start": 17,
                "end": 21
            },
            "flags": 16,
            "start": 17,
            "end": 21
        },
        {
            "kind": 120,
            "expression": {
                "kind": 126,
                "operandToken": {
                    "kind": 65584,
                    "flags": 96,
                    "start": 21,
                    "end": 23
                },
                "operand": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 96,
                    "start": 23,
                    "end": 26
                },
                "flags": 32,
                "start": 21,
                "end": 26
            },
            "flags": 16,
            "start": 21,
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
            "flags": 80,
            "start": 26,
            "end": 32
        }
    ],
    "isModule": false,
    "source": "do while try this and !foo while",
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
✖ Missing an opening parentheses - '( - start: 9, end: 12
✖ Declaration or statement expected - start: 12, end: 17
✖ Declaration or statement expected - start: 18, end: 21
✖ Expected a `;` - start: 21, end: 23
✖ Expected a `;` - start: 26, end: 32

```

