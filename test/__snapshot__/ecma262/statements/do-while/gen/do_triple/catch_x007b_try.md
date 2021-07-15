# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/statements/do-while/autogen.md
- Path: kataw/test/__snapshot__/ecma262/statements/do-while/gen/do_triple
> :: test: do triple
> :: case: catch { try
## Options

`````js
{}
`````
## Input

`````js
do do do catch { try while while while
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
                        "tryKeyword": null,
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
                        "catchClause": {
                            "kind": 173,
                            "catchKeyword": {
                                "kind": 4202575,
                                "flags": 80,
                                "transformFlags": 0,
                                "start": 8,
                                "end": 14
                            },
                            "catchParameter": null,
                            "block": {
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
                                                "start": 16,
                                                "end": 20
                                            },
                                            "block": {
                                                "kind": 124,
                                                "block": {
                                                    "kind": 249,
                                                    "statements": [],
                                                    "flags": 16,
                                                    "transformFlags": 0,
                                                    "start": 20,
                                                    "end": 20
                                                },
                                                "flags": 16,
                                                "transformFlags": 0,
                                                "start": 20,
                                                "end": 20
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
                                                    "start": 20,
                                                    "end": 20
                                                },
                                                "flags": 16,
                                                "transformFlags": 0,
                                                "start": 20,
                                                "end": 20
                                            },
                                            "flags": 16,
                                            "transformFlags": 0,
                                            "start": 16,
                                            "end": 20
                                        },
                                        {
                                            "kind": 154,
                                            "whileKeyword": {
                                                "kind": 37757028,
                                                "flags": 80,
                                                "transformFlags": 0,
                                                "start": 20,
                                                "end": 26
                                            },
                                            "expression": {
                                                "kind": 16637,
                                                "text": "",
                                                "rawText": "",
                                                "flags": 64,
                                                "transformFlags": 0,
                                                "start": 26,
                                                "end": 26
                                            },
                                            "statement": {
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
                                                    "kind": 154,
                                                    "whileKeyword": {
                                                        "kind": 37757028,
                                                        "flags": 80,
                                                        "transformFlags": 0,
                                                        "start": 32,
                                                        "end": 38
                                                    },
                                                    "expression": {
                                                        "kind": 16637,
                                                        "text": "",
                                                        "rawText": "",
                                                        "flags": 64,
                                                        "transformFlags": 0,
                                                        "start": 38,
                                                        "end": 38
                                                    },
                                                    "statement": {
                                                        "kind": 120,
                                                        "expression": {
                                                            "kind": 16637,
                                                            "text": "",
                                                            "rawText": "",
                                                            "flags": 64,
                                                            "transformFlags": 0,
                                                            "start": 38,
                                                            "end": 38
                                                        },
                                                        "flags": 16,
                                                        "transformFlags": 4096,
                                                        "start": 38,
                                                        "end": 38
                                                    },
                                                    "flags": 80,
                                                    "transformFlags": 0,
                                                    "start": 32,
                                                    "end": 38
                                                },
                                                "flags": 80,
                                                "transformFlags": 0,
                                                "start": 26,
                                                "end": 38
                                            },
                                            "flags": 80,
                                            "transformFlags": 0,
                                            "start": 20,
                                            "end": 38
                                        }
                                    ],
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 16,
                                    "end": 38
                                },
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 14,
                                "end": 38
                            },
                            "flags": 80,
                            "transformFlags": 0,
                            "start": 8,
                            "end": 38
                        },
                        "finallyKeyword": null,
                        "finallyBlock": null,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 8,
                        "end": 38
                    },
                    "whileKeyword": null,
                    "expression": {
                        "kind": 16637,
                        "text": "",
                        "rawText": "",
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 38,
                        "end": 38
                    },
                    "flags": 80,
                    "transformFlags": 0,
                    "start": 5,
                    "end": 38
                },
                "whileKeyword": null,
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "rawText": "",
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 38,
                    "end": 38
                },
                "flags": 80,
                "transformFlags": 0,
                "start": 2,
                "end": 38
            },
            "whileKeyword": null,
            "expression": {
                "kind": 16637,
                "text": "",
                "rawText": "",
                "flags": 64,
                "transformFlags": 0,
                "start": 38,
                "end": 38
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 38
        }
    ],
    "isModule": false,
    "source": "do do do catch { try while while while",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 38
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'try' expected - start: 8, end: 14
✖ 'catch' expected - start: 20, end: 26
✖ Missing an opening parentheses - '( - start: 27, end: 32
✖ Missing an opening parentheses - '( - start: 33, end: 38

```

