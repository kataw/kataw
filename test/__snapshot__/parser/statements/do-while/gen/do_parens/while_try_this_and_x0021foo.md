# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-03
- From: kataw8/test\__snapshot__/parser/statements/do-while/autogen.md
- Path: kataw8/test\__snapshot__\parser\statements\do-while\gen\do_parens
> :: test: do parens
> :: case: while try this and !foo
## Input

`````js
do( while try this and !foo while
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
                "start": 9,
                "end": 9
            },
            "whileKeyword": {
                "kind": 37757028,
                "flags": 64,
                "start": 3,
                "end": 9
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 121,
                    "expression": {
                        "kind": 16637,
                        "text": "",
                        "flags": 64,
                        "start": 3,
                        "end": 3
                    },
                    "flags": 32,
                    "start": 2,
                    "end": 3
                },
                "flags": 16,
                "start": 2,
                "end": 3
            },
            "flags": 16,
            "start": 0,
            "end": 9
        },
        {
            "kind": 159,
            "tryKeyword": {
                "kind": 37757027,
                "flags": 80,
                "start": 9,
                "end": 13
            },
            "block": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "start": 13,
                    "end": 13
                },
                "flags": 16,
                "start": 13,
                "end": 13
            },
            "catchClause": null,
            "finallyKeyword": null,
            "finallyBlock": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "start": 13,
                    "end": 13
                },
                "flags": 16,
                "start": 13,
                "end": 13
            },
            "flags": 16,
            "start": 9,
            "end": 13
        },
        {
            "kind": 120,
            "expression": {
                "kind": 4276321,
                "flags": 96,
                "start": 13,
                "end": 18
            },
            "flags": 16,
            "start": 13,
            "end": 18
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "and",
                "rawText": "and",
                "flags": 96,
                "start": 18,
                "end": 22
            },
            "flags": 16,
            "start": 18,
            "end": 22
        },
        {
            "kind": 120,
            "expression": {
                "kind": 126,
                "operandToken": {
                    "kind": 65584,
                    "flags": 64,
                    "start": 22,
                    "end": 24
                },
                "operand": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 96,
                    "start": 24,
                    "end": 27
                },
                "flags": 32,
                "start": 22,
                "end": 27
            },
            "flags": 16,
            "start": 22,
            "end": 27
        },
        {
            "kind": 154,
            "whileKeyword": {
                "kind": 37757028,
                "flags": 80,
                "start": 27,
                "end": 33
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "flags": 64,
                "start": 33,
                "end": 33
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "flags": 64,
                    "start": 33,
                    "end": 33
                },
                "flags": 16,
                "start": 33,
                "end": 33
            },
            "flags": 16,
            "start": 27,
            "end": 33
        }
    ],
    "isModule": false,
    "source": "do( while try this and !foo while",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 33
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 3, end: 9
✖ Missing an opening parentheses - '( - start: 9, end: 13
✖ Declaration or statement expected - start: 13, end: 18
✖ Expected a `;` - start: 18, end: 22
✖ Expected a `;` - start: 22, end: 24
✖ Expected a `;` - start: 27, end: 33

```

