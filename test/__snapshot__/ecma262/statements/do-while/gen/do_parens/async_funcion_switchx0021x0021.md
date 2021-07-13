# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/statements/do-while/autogen.md
- Path: kataw/test/__snapshot__/ecma262/statements/do-while/gen/do_parens
> :: test: do parens
> :: case: async funcion switch!!
## Options

`````js
{}
`````
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
                "transformFlags": 0,
                "start": 0,
                "end": 2
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 121,
                    "expression": {
                        "kind": 132,
                        "expressions": [],
                        "flags": 32,
                        "transformFlags": 1024,
                        "start": 2,
                        "end": 17
                    },
                    "flags": 2,
                    "transformFlags": 0,
                    "start": 32,
                    "end": 17
                },
                "flags": 16,
                "transformFlags": 4096,
                "start": 2,
                "end": 17
            },
            "whileKeyword": null,
            "expression": {
                "kind": 16637,
                "text": "",
                "rawText": "",
                "flags": 64,
                "transformFlags": 0,
                "start": 17,
                "end": 17
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 17
        },
        {
            "kind": 160,
            "switchKeyword": {
                "kind": 37757024,
                "flags": 80,
                "transformFlags": 0,
                "start": 17,
                "end": 24
            },
            "expression": {
                "kind": 126,
                "operandToken": {
                    "kind": 65584,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 24,
                    "end": 25
                },
                "operand": {
                    "kind": 126,
                    "operandToken": {
                        "kind": 65584,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 25,
                        "end": 26
                    },
                    "operand": {
                        "kind": 16637,
                        "text": "",
                        "rawText": "",
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 26,
                        "end": 26
                    },
                    "flags": 32,
                    "transformFlags": 1024,
                    "start": 25,
                    "end": 26
                },
                "flags": 32,
                "transformFlags": 1024,
                "start": 24,
                "end": 26
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [],
                "flags": 16,
                "transformFlags": 0,
                "start": 26,
                "end": 26
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 17,
            "end": 26
        },
        {
            "kind": 154,
            "whileKeyword": {
                "kind": 37757028,
                "flags": 80,
                "transformFlags": 0,
                "start": 26,
                "end": 32
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "rawText": "",
                "flags": 64,
                "transformFlags": 0,
                "start": 32,
                "end": 32
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "rawText": "",
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 32,
                    "end": 32
                },
                "flags": 16,
                "transformFlags": 4096,
                "start": 32,
                "end": 32
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 26,
            "end": 32
        }
    ],
    "isModule": false,
    "source": "do( async funcion switch!! while",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 32
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'async' modifier cannot be used here - start: 17, end: 24
✖ Identifier expected - start: 17, end: 24
✖ Missing an opening parentheses - '( - start: 24, end: 25
✖ Identifier expected - start: 26, end: 32

```

