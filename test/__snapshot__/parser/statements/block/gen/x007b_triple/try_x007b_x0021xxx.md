# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-11
- From: kataw/test/__snapshot__/parser/statements/block/autogen.md
- Path: kataw/test/__snapshot__/parser/statements/block/gen/x007b_triple
> :: test: { triple
> :: case: try { !xxx
## Options

`````js
{}
`````
## Input

`````js
{ { { try { !xxx
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
                            "statements": [
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
                                                    "start": 5,
                                                    "end": 9
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
                                                                        "flags": 64,
                                                                        "start": 11,
                                                                        "end": 13
                                                                    },
                                                                    "operand": {
                                                                        "kind": 134299649,
                                                                        "text": "xxx",
                                                                        "rawText": "xxx",
                                                                        "flags": 96,
                                                                        "start": 13,
                                                                        "end": 16
                                                                    },
                                                                    "flags": 32,
                                                                    "start": 11,
                                                                    "end": 16
                                                                },
                                                                "flags": 16,
                                                                "start": 11,
                                                                "end": 16
                                                            }
                                                        ],
                                                        "flags": 16,
                                                        "start": 11,
                                                        "end": 16
                                                    },
                                                    "flags": 16,
                                                    "start": 9,
                                                    "end": 16
                                                },
                                                "catchClause": null,
                                                "finallyKeyword": null,
                                                "finallyBlock": {
                                                    "kind": 124,
                                                    "block": {
                                                        "kind": 249,
                                                        "statements": [],
                                                        "flags": 16,
                                                        "start": 16,
                                                        "end": 16
                                                    },
                                                    "flags": 16,
                                                    "start": 16,
                                                    "end": 16
                                                },
                                                "flags": 16,
                                                "start": 5,
                                                "end": 16
                                            }
                                        ],
                                        "flags": 16,
                                        "start": 5,
                                        "end": 16
                                    },
                                    "flags": 16,
                                    "start": 3,
                                    "end": 16
                                }
                            ],
                            "flags": 16,
                            "start": 3,
                            "end": 16
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 16
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 16
            },
            "flags": 16,
            "start": 0,
            "end": 16
        }
    ],
    "isModule": false,
    "source": "{ { { try { !xxx",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 16
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The parser expected to find a '}' to match the '{' token here - start: 13, end: 16

```

