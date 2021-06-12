# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-12
- From: kataw8/test\__snapshot__/parser/statements/block/autogen.md
- Path: kataw8/test\__snapshot__\parser\statements\block\gen\with_unclosed_array
> :: test: with unclosed array
> :: case: catch { try
## Input

`````js
{[ catch { try
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
                        "kind": 120,
                        "expression": {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 2,
                                "end": 2
                            },
                            "flags": 32,
                            "start": 1,
                            "end": 2
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 2
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
                                "start": 2,
                                "end": 2
                            },
                            "flags": 16,
                            "start": 2,
                            "end": 2
                        },
                        "catchClause": {
                            "kind": 173,
                            "catchKeyword": {
                                "kind": 4202575,
                                "flags": 80,
                                "start": 2,
                                "end": 8
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
                                                "start": 10,
                                                "end": 14
                                            },
                                            "block": {
                                                "kind": 124,
                                                "block": {
                                                    "kind": 249,
                                                    "statements": [],
                                                    "flags": 16,
                                                    "start": 14,
                                                    "end": 14
                                                },
                                                "flags": 16,
                                                "start": 14,
                                                "end": 14
                                            },
                                            "catchClause": null,
                                            "finallyKeyword": null,
                                            "finallyBlock": {
                                                "kind": 124,
                                                "block": {
                                                    "kind": 249,
                                                    "statements": [],
                                                    "flags": 16,
                                                    "start": 14,
                                                    "end": 14
                                                },
                                                "flags": 16,
                                                "start": 14,
                                                "end": 14
                                            },
                                            "flags": 16,
                                            "start": 10,
                                            "end": 14
                                        }
                                    ],
                                    "flags": 16,
                                    "start": 10,
                                    "end": 14
                                },
                                "flags": 16,
                                "start": 8,
                                "end": 14
                            },
                            "flags": 80,
                            "start": 2,
                            "end": 14
                        },
                        "finallyKeyword": null,
                        "finallyBlock": null,
                        "flags": 16,
                        "start": 2,
                        "end": 14
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 14
            },
            "flags": 16,
            "start": 0,
            "end": 14
        }
    ],
    "isModule": false,
    "source": "{[ catch { try",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 14
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Did you forgot a ']' to match the `[` token? - start: 2, end: 8
✖ 'try' expected - start: 2, end: 8
✖ Declaration or statement expected - start: 14, end: 14

```

