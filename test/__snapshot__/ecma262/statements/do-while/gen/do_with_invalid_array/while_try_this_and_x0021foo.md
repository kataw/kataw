# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/statements/do-while/autogen.md
- Path: kataw/test/__snapshot__/ecma262/statements/do-while/gen/do_with_invalid_array
> :: test: do with invalid array
> :: case: while try this and !foo
## Options

`````js
{}
`````
## Input

`````js
do while [catch] while try this and !foo
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
                "kind": 154,
                "whileKeyword": {
                    "kind": 37757028,
                    "flags": 80,
                    "transformFlags": 0,
                    "start": 2,
                    "end": 8
                },
                "expression": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [],
                        "trailingComma": false,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 10,
                        "end": 10
                    },
                    "flags": 32,
                    "transformFlags": 8,
                    "start": 8,
                    "end": 10
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
                            "start": 10,
                            "end": 10
                        },
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 10,
                        "end": 10
                    },
                    "catchClause": {
                        "kind": 173,
                        "catchKeyword": {
                            "kind": 4202575,
                            "flags": 80,
                            "transformFlags": 0,
                            "start": 10,
                            "end": 15
                        },
                        "catchParameter": null,
                        "block": {
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
                        "flags": 80,
                        "transformFlags": 0,
                        "start": 10,
                        "end": 15
                    },
                    "finallyKeyword": null,
                    "finallyBlock": null,
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 10,
                    "end": 15
                },
                "flags": 80,
                "transformFlags": 0,
                "start": 2,
                "end": 15
            },
            "whileKeyword": null,
            "expression": {
                "kind": 16637,
                "text": "",
                "rawText": "",
                "flags": 64,
                "transformFlags": 0,
                "start": 15,
                "end": 15
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 15
        },
        {
            "kind": 154,
            "whileKeyword": {
                "kind": 37757028,
                "flags": 80,
                "transformFlags": 0,
                "start": 16,
                "end": 22
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "rawText": "",
                "flags": 64,
                "transformFlags": 0,
                "start": 22,
                "end": 22
            },
            "statement": {
                "kind": 159,
                "tryKeyword": {
                    "kind": 37757027,
                    "flags": 80,
                    "transformFlags": 0,
                    "start": 22,
                    "end": 26
                },
                "block": {
                    "kind": 124,
                    "block": {
                        "kind": 249,
                        "statements": [],
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 26,
                        "end": 26
                    },
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 26,
                    "end": 26
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
                        "start": 26,
                        "end": 26
                    },
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 26,
                    "end": 26
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 22,
                "end": 26
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 16,
            "end": 26
        },
        {
            "kind": 120,
            "expression": {
                "kind": 4276321,
                "flags": 96,
                "transformFlags": 0,
                "start": 26,
                "end": 31
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 26,
            "end": 31
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "and",
                "rawText": "and",
                "flags": 96,
                "transformFlags": 0,
                "start": 31,
                "end": 35
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 31,
            "end": 35
        },
        {
            "kind": 120,
            "expression": {
                "kind": 126,
                "operandToken": {
                    "kind": 65584,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 35,
                    "end": 37
                },
                "operand": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 37,
                    "end": 40
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 35,
                "end": 40
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 35,
            "end": 40
        }
    ],
    "isModule": false,
    "source": "do while [catch] while try this and !foo",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 40
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Missing an opening parentheses - '( - start: 9, end: 10
✖ Did you forgot a ']' to match the `[` token? - start: 10, end: 15
✖ 'try' expected - start: 10, end: 15
✖ Missing an opening parentheses - '( - start: 15, end: 16
✖ Missing an opening parentheses - '( - start: 23, end: 26
✖ Declaration or statement expected - start: 26, end: 31
✖ Expected a `;` - start: 31, end: 35
✖ Expected a `;` - start: 35, end: 37

```

