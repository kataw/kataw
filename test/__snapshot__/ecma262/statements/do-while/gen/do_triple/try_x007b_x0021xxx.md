# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/statements/do-while/autogen.md
- Path: kataw/test/__snapshot__/ecma262/statements/do-while/gen/do_triple
> :: test: do triple
> :: case: try { !xxx
## Options

`````js
{}
`````
## Input

`````js
do do do try { !xxx while while while
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
                "kind": 169,
                "doKeyword": {
                    "kind": 4202580,
                    "flags": 80,
                    "transformFlags": 0,
                    "start": 2,
                    "end": 5
                },
                "statement": {
                    "kind": 169,
                    "doKeyword": {
                        "kind": 4202580,
                        "flags": 80,
                        "transformFlags": 0,
                        "start": 5,
                        "end": 8
                    },
                    "statement": {
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
                                "statements": [
                                    {
                                        "kind": 120,
                                        "expression": {
                                            "kind": 126,
                                            "operandToken": {
                                                "kind": 65584,
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 14,
                                                "end": 16
                                            },
                                            "operand": {
                                                "kind": 134299649,
                                                "text": "xxx",
                                                "rawText": "xxx",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 16,
                                                "end": 19
                                            },
                                            "flags": 32,
                                            "transformFlags": 16384,
                                            "start": 14,
                                            "end": 19
                                        },
                                        "flags": 16,
                                        "transformFlags": 4096,
                                        "start": 14,
                                        "end": 19
                                    },
                                    {
                                        "kind": 154,
                                        "whileKeyword": {
                                            "kind": 37757028,
                                            "flags": 80,
                                            "transformFlags": 0,
                                            "start": 19,
                                            "end": 25
                                        },
                                        "expression": {
                                            "kind": 16637,
                                            "text": "",
                                            "rawText": "",
                                            "flags": 64,
                                            "transformFlags": 0,
                                            "start": 25,
                                            "end": 25
                                        },
                                        "statement": {
                                            "kind": 154,
                                            "whileKeyword": {
                                                "kind": 37757028,
                                                "flags": 80,
                                                "transformFlags": 0,
                                                "start": 25,
                                                "end": 31
                                            },
                                            "expression": {
                                                "kind": 16637,
                                                "text": "",
                                                "rawText": "",
                                                "flags": 64,
                                                "transformFlags": 0,
                                                "start": 31,
                                                "end": 31
                                            },
                                            "statement": {
                                                "kind": 154,
                                                "whileKeyword": {
                                                    "kind": 37757028,
                                                    "flags": 80,
                                                    "transformFlags": 0,
                                                    "start": 31,
                                                    "end": 37
                                                },
                                                "expression": {
                                                    "kind": 16637,
                                                    "text": "",
                                                    "rawText": "",
                                                    "flags": 64,
                                                    "transformFlags": 0,
                                                    "start": 37,
                                                    "end": 37
                                                },
                                                "statement": {
                                                    "kind": 120,
                                                    "expression": {
                                                        "kind": 16637,
                                                        "text": "",
                                                        "rawText": "",
                                                        "flags": 64,
                                                        "transformFlags": 0,
                                                        "start": 37,
                                                        "end": 37
                                                    },
                                                    "flags": 16,
                                                    "transformFlags": 4096,
                                                    "start": 37,
                                                    "end": 37
                                                },
                                                "flags": 80,
                                                "transformFlags": 0,
                                                "start": 31,
                                                "end": 37
                                            },
                                            "flags": 80,
                                            "transformFlags": 0,
                                            "start": 25,
                                            "end": 37
                                        },
                                        "flags": 80,
                                        "transformFlags": 0,
                                        "start": 19,
                                        "end": 37
                                    }
                                ],
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 14,
                                "end": 37
                            },
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 12,
                            "end": 37
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
                                "start": 37,
                                "end": 37
                            },
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 37,
                            "end": 37
                        },
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 8,
                        "end": 37
                    },
                    "whileKeyword": null,
                    "expression": {
                        "kind": 16637,
                        "text": "",
                        "rawText": "",
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 37,
                        "end": 37
                    },
                    "flags": 80,
                    "transformFlags": 0,
                    "start": 5,
                    "end": 37
                },
                "whileKeyword": null,
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "rawText": "",
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 37,
                    "end": 37
                },
                "flags": 80,
                "transformFlags": 0,
                "start": 2,
                "end": 37
            },
            "whileKeyword": null,
            "expression": {
                "kind": 16637,
                "text": "",
                "rawText": "",
                "flags": 64,
                "transformFlags": 0,
                "start": 37,
                "end": 37
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 37
        }
    ],
    "isModule": false,
    "source": "do do do try { !xxx while while while",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 37
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ '; ' expected - start: 19, end: 25
✖ Missing an opening parentheses - '( - start: 26, end: 31
✖ Missing an opening parentheses - '( - start: 32, end: 37

```

