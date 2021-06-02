# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-02
- From: kataw8/test\__snapshot__/parser/statements/block/autogen.md
- Path: kataw8/test\__snapshot__\parser\statements\block\gen\x007b_triple
> :: test: { triple
> :: case: {try
## Input

`````js
{ { { {try
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
                                                            "kind": 159,
                                                            "tryKeyword": {
                                                                "kind": 37757027,
                                                                "flags": 80,
                                                                "start": 7,
                                                                "end": 10
                                                            },
                                                            "block": {
                                                                "kind": 124,
                                                                "block": {
                                                                    "kind": 249,
                                                                    "statements": [],
                                                                    "flags": 16,
                                                                    "start": 10,
                                                                    "end": 10
                                                                },
                                                                "flags": 16,
                                                                "start": 10,
                                                                "end": 10
                                                            },
                                                            "catchClause": null,
                                                            "finallyKeyword": null,
                                                            "finallyBlock": {
                                                                "kind": 124,
                                                                "block": {
                                                                    "kind": 249,
                                                                    "statements": [],
                                                                    "flags": 16,
                                                                    "start": 10,
                                                                    "end": 10
                                                                },
                                                                "flags": 16,
                                                                "start": 10,
                                                                "end": 10
                                                            },
                                                            "flags": 16,
                                                            "start": 7,
                                                            "end": 10
                                                        }
                                                    ],
                                                    "flags": 16,
                                                    "start": 7,
                                                    "end": 10
                                                },
                                                "flags": 16,
                                                "start": 5,
                                                "end": 10
                                            }
                                        ],
                                        "flags": 16,
                                        "start": 5,
                                        "end": 10
                                    },
                                    "flags": 16,
                                    "start": 3,
                                    "end": 10
                                }
                            ],
                            "flags": 16,
                            "start": 3,
                            "end": 10
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 10
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 10
            },
            "flags": 16,
            "start": 0,
            "end": 10
        }
    ],
    "isModule": false,
    "source": "{ { { {try",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 10
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Declaration or statement expected - start: 10, end: 10

```

