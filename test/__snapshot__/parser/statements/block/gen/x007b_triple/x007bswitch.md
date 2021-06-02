# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-02
- From: kataw8/test\__snapshot__/parser/statements/block/autogen.md
- Path: kataw8/test\__snapshot__\parser\statements\block\gen\x007b_triple
> :: test: { triple
> :: case: {switch
## Input

`````js
{ { { {switch
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
                                                "kind": 124,
                                                "block": {
                                                    "kind": 249,
                                                    "statements": [
                                                        {
                                                            "kind": 160,
                                                            "switchKeyword": {
                                                                "kind": 37757024,
                                                                "flags": 80,
                                                                "start": 7,
                                                                "end": 13
                                                            },
                                                            "expression": {
                                                                "kind": 16637,
                                                                "text": "",
                                                                "flags": 64,
                                                                "start": 13,
                                                                "end": 13
                                                            },
                                                            "caseBlock": {
                                                                "kind": 152,
                                                                "clauses": [],
                                                                "flags": 16,
                                                                "start": 13,
                                                                "end": 13
                                                            },
                                                            "flags": 16,
                                                            "start": 7,
                                                            "end": 13
                                                        }
                                                    ],
                                                    "flags": 16,
                                                    "start": 7,
                                                    "end": 13
                                                },
                                                "flags": 16,
                                                "start": 5,
                                                "end": 13
                                            }
                                        ],
                                        "flags": 16,
                                        "start": 5,
                                        "end": 13
                                    },
                                    "flags": 16,
                                    "start": 3,
                                    "end": 13
                                }
                            ],
                            "flags": 16,
                            "start": 3,
                            "end": 13
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 13
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 13
            },
            "flags": 16,
            "start": 0,
            "end": 13
        }
    ],
    "isModule": false,
    "source": "{ { { {switch",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 13
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Missing an opening parentheses - '( - start: 13, end: 13

```

