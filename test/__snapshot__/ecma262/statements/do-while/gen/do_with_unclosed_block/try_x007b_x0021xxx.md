# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/statements/do-while/autogen.md
- Path: kataw/test/__snapshot__/parser/statements/do-while/gen/do_with_unclosed_block
> :: test: do with unclosed block
> :: case: try { !xxx
## Options

`````js
{}
`````
## Input

`````js
do {} while (x) { try { !xxx
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
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 4,
                    "end": 4
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 2,
                "end": 5
            },
            "whileKeyword": {
                "kind": 37757028,
                "flags": 80,
                "transformFlags": 0,
                "start": 5,
                "end": 11
            },
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "transformFlags": 0,
                "start": 13,
                "end": 14
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 15
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [
                    {
                        "kind": 159,
                        "tryKeyword": {
                            "kind": 37757027,
                            "flags": 80,
                            "transformFlags": 0,
                            "start": 17,
                            "end": 21
                        },
                        "block": {
                            "kind": 124,
                            "block": {
                                "kind": 249,
                                "statements": [
                                    {
                                        "kind": 120,
                                        "expression": {
                                            "kind": 126,
                                            "operandToken": {
                                                "kind": 65584,
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 23,
                                                "end": 25
                                            },
                                            "operand": {
                                                "kind": 134299649,
                                                "text": "xxx",
                                                "rawText": "xxx",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 25,
                                                "end": 28
                                            },
                                            "flags": 32,
                                            "transformFlags": 1024,
                                            "start": 23,
                                            "end": 28
                                        },
                                        "flags": 16,
                                        "transformFlags": 4096,
                                        "start": 23,
                                        "end": 28
                                    }
                                ],
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 23,
                                "end": 28
                            },
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 21,
                            "end": 28
                        },
                        "catchClause": null,
                        "finallyKeyword": null,
                        "finallyBlock": {
                            "kind": 124,
                            "block": {
                                "kind": 249,
                                "statements": [],
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 28,
                                "end": 28
                            },
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 28,
                            "end": 28
                        },
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 17,
                        "end": 28
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 17,
                "end": 28
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 15,
            "end": 28
        }
    ],
    "isModule": false,
    "source": "do {} while (x) { try { !xxx",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 28
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The parser expected to find a '}' to match the '{' token here - start: 25, end: 28

```

