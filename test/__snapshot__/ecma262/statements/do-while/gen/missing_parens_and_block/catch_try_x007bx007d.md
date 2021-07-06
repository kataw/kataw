# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/statements/do-while/autogen.md
- Path: kataw/test/__snapshot__/ecma262/statements/do-while/gen/missing_parens_and_block
> :: test: missing parens and block
> :: case: catch try {}
## Options

`````js
{}
`````
## Input

`````js
do catch try {} while
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
                "kind": 159,
                "tryKeyword": null,
                "block": {
                    "kind": 124,
                    "block": {
                        "kind": 249,
                        "statements": [],
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 2,
                        "end": 2
                    },
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 2,
                    "end": 2
                },
                "catchClause": {
                    "kind": 173,
                    "catchKeyword": {
                        "kind": 4202575,
                        "flags": 80,
                        "transformFlags": 0,
                        "start": 2,
                        "end": 8
                    },
                    "catchParameter": null,
                    "block": {
                        "kind": 124,
                        "block": {
                            "kind": 249,
                            "statements": [],
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 8,
                            "end": 8
                        },
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 8,
                        "end": 8
                    },
                    "flags": 80,
                    "transformFlags": 0,
                    "start": 2,
                    "end": 8
                },
                "finallyKeyword": null,
                "finallyBlock": null,
                "flags": 16,
                "transformFlags": 0,
                "start": 2,
                "end": 8
            },
            "whileKeyword": null,
            "expression": {
                "kind": 16637,
                "text": "",
                "rawText": "",
                "flags": 64,
                "transformFlags": 0,
                "start": 8,
                "end": 8
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 8
        },
        {
            "kind": 159,
            "tryKeyword": {
                "kind": 37757027,
                "flags": 80,
                "transformFlags": 0,
                "start": 8,
                "end": 12
            },
            "block": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 14,
                    "end": 14
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 12,
                "end": 15
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
                    "start": 15,
                    "end": 15
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 15,
                "end": 15
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 8,
            "end": 15
        },
        {
            "kind": 154,
            "whileKeyword": {
                "kind": 37757028,
                "flags": 80,
                "transformFlags": 0,
                "start": 15,
                "end": 21
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "rawText": "",
                "flags": 64,
                "transformFlags": 0,
                "start": 21,
                "end": 21
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "rawText": "",
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 21,
                    "end": 21
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 21,
                "end": 21
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 15,
            "end": 21
        }
    ],
    "isModule": false,
    "source": "do catch try {} while",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 21
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'try' expected - start: 2, end: 8
✖ Missing an opening parentheses - '( - start: 9, end: 12
✖ Declaration or statement expected - start: 15, end: 21

```

