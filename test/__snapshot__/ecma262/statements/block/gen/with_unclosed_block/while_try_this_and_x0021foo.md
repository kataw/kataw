# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/statements/block/autogen.md
- Path: kataw/test/__snapshot__/parser/statements/block/gen/with_unclosed_block
> :: test: with unclosed block
> :: case: while try this and !foo
## Options

`````js
{}
`````
## Input

`````js
{ {} finally(x) { while try this and !foo
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [
                    {
                        "kind": 124,
                        "block": {
                            "kind": 249,
                            "statements": [],
                            "flags": 16,
                            "start": 3,
                            "end": 3
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 4
                    },
                    {
                        "kind": 159,
                        "tryKeyword": null,
                        "block": {
                            "kind": 124,
                            "block": {
                                "kind": 249,
                                "statements": [],
                                "flags": 16,
                                "start": 4,
                                "end": 4
                            },
                            "flags": 16,
                            "start": 4,
                            "end": 4
                        },
                        "catchClause": null,
                        "finallyKeyword": {
                            "kind": 37757016,
                            "flags": 64,
                            "start": 4,
                            "end": 12
                        },
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
                        "start": 4,
                        "end": 12
                    },
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 121,
                            "expression": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 13,
                                "end": 14
                            },
                            "flags": 12,
                            "start": 32,
                            "end": 15
                        },
                        "flags": 16,
                        "start": 12,
                        "end": 15
                    },
                    {
                        "kind": 124,
                        "block": {
                            "kind": 249,
                            "statements": [
                                {
                                    "kind": 154,
                                    "whileKeyword": {
                                        "kind": 37757028,
                                        "flags": 80,
                                        "start": 17,
                                        "end": 23
                                    },
                                    "expression": {
                                        "kind": 16637,
                                        "text": "",
                                        "rawText": "",
                                        "flags": 64,
                                        "start": 23,
                                        "end": 23
                                    },
                                    "statement": {
                                        "kind": 159,
                                        "tryKeyword": {
                                            "kind": 37757027,
                                            "flags": 80,
                                            "start": 23,
                                            "end": 27
                                        },
                                        "block": {
                                            "kind": 124,
                                            "block": {
                                                "kind": 249,
                                                "statements": [],
                                                "flags": 16,
                                                "start": 27,
                                                "end": 27
                                            },
                                            "flags": 16,
                                            "start": 27,
                                            "end": 27
                                        },
                                        "catchClause": null,
                                        "finallyKeyword": null,
                                        "finallyBlock": {
                                            "kind": 124,
                                            "block": {
                                                "kind": 249,
                                                "statements": [],
                                                "flags": 16,
                                                "start": 27,
                                                "end": 27
                                            },
                                            "flags": 16,
                                            "start": 27,
                                            "end": 27
                                        },
                                        "flags": 16,
                                        "start": 23,
                                        "end": 27
                                    },
                                    "flags": 80,
                                    "start": 17,
                                    "end": 27
                                },
                                {
                                    "kind": 120,
                                    "expression": {
                                        "kind": 4276321,
                                        "flags": 96,
                                        "start": 27,
                                        "end": 32
                                    },
                                    "flags": 16,
                                    "start": 27,
                                    "end": 32
                                },
                                {
                                    "kind": 120,
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "and",
                                        "rawText": "and",
                                        "flags": 96,
                                        "start": 32,
                                        "end": 36
                                    },
                                    "flags": 16,
                                    "start": 32,
                                    "end": 36
                                },
                                {
                                    "kind": 120,
                                    "expression": {
                                        "kind": 126,
                                        "operandToken": {
                                            "kind": 65584,
                                            "flags": 96,
                                            "start": 36,
                                            "end": 38
                                        },
                                        "operand": {
                                            "kind": 134299649,
                                            "text": "foo",
                                            "rawText": "foo",
                                            "flags": 96,
                                            "start": 38,
                                            "end": 41
                                        },
                                        "flags": 32,
                                        "start": 36,
                                        "end": 41
                                    },
                                    "flags": 16,
                                    "start": 36,
                                    "end": 41
                                }
                            ],
                            "flags": 16,
                            "start": 17,
                            "end": 41
                        },
                        "flags": 16,
                        "start": 15,
                        "end": 41
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 41
            },
            "flags": 16,
            "start": 0,
            "end": 41
        }
    ],
    "isModule": false,
    "source": "{ {} finally(x) { while try this and !foo",
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
✖ 'try' expected - start: 4, end: 12
✖ Expected a `;` - start: 15, end: 17
✖ Missing an opening parentheses - '( - start: 24, end: 27
✖ Declaration or statement expected - start: 27, end: 32
✖ Expected a `;` - start: 32, end: 36
✖ Expected a `;` - start: 36, end: 38
✖ The parser expected to find a '}' to match the '{' token here - start: 38, end: 41

```

