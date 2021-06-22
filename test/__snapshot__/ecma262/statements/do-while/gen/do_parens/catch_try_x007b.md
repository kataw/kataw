# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/statements/do-while/autogen.md
- Path: kataw/test/__snapshot__/parser/statements/do-while/gen/do_parens
> :: test: do parens
> :: case: catch try {
## Options

`````js
{}
`````
## Input

`````js
do( catch try { while
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
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 121,
                    "expression": {
                        "kind": 16637,
                        "text": "",
                        "rawText": "",
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
            "whileKeyword": null,
            "expression": {
                "kind": 16637,
                "text": "",
                "rawText": "",
                "flags": 64,
                "start": 3,
                "end": 3
            },
            "flags": 80,
            "start": 0,
            "end": 3
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
                    "start": 3,
                    "end": 3
                },
                "flags": 16,
                "start": 3,
                "end": 3
            },
            "catchClause": {
                "kind": 173,
                "catchKeyword": {
                    "kind": 4202575,
                    "flags": 80,
                    "start": 3,
                    "end": 9
                },
                "catchParameter": null,
                "block": {
                    "kind": 124,
                    "block": {
                        "kind": 249,
                        "statements": [],
                        "flags": 16,
                        "start": 9,
                        "end": 9
                    },
                    "flags": 16,
                    "start": 9,
                    "end": 9
                },
                "flags": 80,
                "start": 3,
                "end": 9
            },
            "finallyKeyword": null,
            "finallyBlock": null,
            "flags": 16,
            "start": 3,
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
                    "statements": [
                        {
                            "kind": 154,
                            "whileKeyword": {
                                "kind": 37757028,
                                "flags": 80,
                                "start": 15,
                                "end": 21
                            },
                            "expression": {
                                "kind": 16637,
                                "text": "",
                                "rawText": "",
                                "flags": 64,
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
                                    "start": 21,
                                    "end": 21
                                },
                                "flags": 16,
                                "start": 21,
                                "end": 21
                            },
                            "flags": 80,
                            "start": 15,
                            "end": 21
                        }
                    ],
                    "flags": 16,
                    "start": 15,
                    "end": 21
                },
                "flags": 16,
                "start": 13,
                "end": 21
            },
            "catchClause": null,
            "finallyKeyword": null,
            "finallyBlock": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "start": 21,
                    "end": 21
                },
                "flags": 16,
                "start": 21,
                "end": 21
            },
            "flags": 16,
            "start": 9,
            "end": 21
        }
    ],
    "isModule": false,
    "source": "do( catch try { while",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 21
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 3, end: 9
✖ 'try' expected - start: 3, end: 9
✖ Missing an opening parentheses - '( - start: 16, end: 21

```

