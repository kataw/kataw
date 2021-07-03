# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/statements/do-while/autogen.md
- Path: kataw/test/__snapshot__/parser/statements/do-while/gen/do_parens
> :: test: do parens
> :: case: try { !xxx
## Options

`````js
{}
`````
## Input

`````js
do( try { !xxx while
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
                    "flags": 2,
                    "start": 32,
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
            "tryKeyword": {
                "kind": 37757027,
                "flags": 80,
                "start": 3,
                "end": 7
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
                                    "start": 9,
                                    "end": 11
                                },
                                "operand": {
                                    "kind": 134299649,
                                    "text": "xxx",
                                    "rawText": "xxx",
                                    "flags": 96,
                                    "start": 11,
                                    "end": 14
                                },
                                "flags": 32,
                                "start": 9,
                                "end": 14
                            },
                            "flags": 16,
                            "start": 9,
                            "end": 14
                        },
                        {
                            "kind": 154,
                            "whileKeyword": {
                                "kind": 37757028,
                                "flags": 80,
                                "start": 14,
                                "end": 20
                            },
                            "expression": {
                                "kind": 16637,
                                "text": "",
                                "rawText": "",
                                "flags": 64,
                                "start": 20,
                                "end": 20
                            },
                            "statement": {
                                "kind": 120,
                                "expression": {
                                    "kind": 16637,
                                    "text": "",
                                    "rawText": "",
                                    "flags": 64,
                                    "start": 20,
                                    "end": 20
                                },
                                "flags": 16,
                                "start": 20,
                                "end": 20
                            },
                            "flags": 80,
                            "start": 14,
                            "end": 20
                        }
                    ],
                    "flags": 16,
                    "start": 9,
                    "end": 20
                },
                "flags": 16,
                "start": 7,
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
                    "start": 20,
                    "end": 20
                },
                "flags": 16,
                "start": 20,
                "end": 20
            },
            "flags": 16,
            "start": 3,
            "end": 20
        }
    ],
    "isModule": false,
    "source": "do( try { !xxx while",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 20
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 3, end: 7
✖ Expected a `;` - start: 14, end: 20

```

