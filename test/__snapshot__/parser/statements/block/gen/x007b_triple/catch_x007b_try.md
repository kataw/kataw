# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-05
- From: kataw8/test\__snapshot__/parser/statements/block/autogen.md
- Path: kataw8/test\__snapshot__\parser\statements\block\gen\x007b_triple
> :: test: { triple
> :: case: catch { try
## Input

`````js
{ { { catch { try
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
                                                "tryKeyword": null,
                                                "block": {
                                                    "kind": 124,
                                                    "block": {
                                                        "kind": 249,
                                                        "statements": [],
                                                        "flags": 16,
                                                        "start": 5,
                                                        "end": 5
                                                    },
                                                    "flags": 16,
                                                    "start": 5,
                                                    "end": 5
                                                },
                                                "catchClause": {
                                                    "kind": 173,
                                                    "catchKeyword": {
                                                        "kind": 4202575,
                                                        "flags": 80,
                                                        "start": 5,
                                                        "end": 11
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
                                                                        "start": 13,
                                                                        "end": 17
                                                                    },
                                                                    "block": {
                                                                        "kind": 124,
                                                                        "block": {
                                                                            "kind": 249,
                                                                            "statements": [],
                                                                            "flags": 16,
                                                                            "start": 17,
                                                                            "end": 17
                                                                        },
                                                                        "flags": 16,
                                                                        "start": 17,
                                                                        "end": 17
                                                                    },
                                                                    "catchClause": null,
                                                                    "finallyKeyword": null,
                                                                    "finallyBlock": {
                                                                        "kind": 124,
                                                                        "block": {
                                                                            "kind": 249,
                                                                            "statements": [],
                                                                            "flags": 16,
                                                                            "start": 17,
                                                                            "end": 17
                                                                        },
                                                                        "flags": 16,
                                                                        "start": 17,
                                                                        "end": 17
                                                                    },
                                                                    "flags": 16,
                                                                    "start": 13,
                                                                    "end": 17
                                                                }
                                                            ],
                                                            "flags": 16,
                                                            "start": 13,
                                                            "end": 17
                                                        },
                                                        "flags": 16,
                                                        "start": 11,
                                                        "end": 17
                                                    },
                                                    "flags": 16,
                                                    "start": 5,
                                                    "end": 17
                                                },
                                                "finallyKeyword": null,
                                                "finallyBlock": null,
                                                "flags": 16,
                                                "start": 5,
                                                "end": 17
                                            }
                                        ],
                                        "flags": 16,
                                        "start": 5,
                                        "end": 17
                                    },
                                    "flags": 16,
                                    "start": 3,
                                    "end": 17
                                }
                            ],
                            "flags": 16,
                            "start": 3,
                            "end": 17
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 17
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 17
            },
            "flags": 16,
            "start": 0,
            "end": 17
        }
    ],
    "isModule": false,
    "source": "{ { { catch { try",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 17
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'try' expected - start: 5, end: 11
✖ Declaration or statement expected - start: 17, end: 17

```

