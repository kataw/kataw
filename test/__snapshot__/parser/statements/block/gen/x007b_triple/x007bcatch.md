# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-01
- From: kataw8/test\__snapshot__/parser/statements/block/autogen.md
- Path: kataw8/test\__snapshot__\parser\statements\block\gen\x007b_triple
> :: test: { triple
> :: case: {catch
## Input

`````js
{ { { {catch
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
                                                            "tryKeyword": null,
                                                            "block": {
                                                                "kind": 124,
                                                                "block": {
                                                                    "kind": 249,
                                                                    "statements": [],
                                                                    "flags": 16,
                                                                    "start": 7,
                                                                    "end": 7
                                                                },
                                                                "flags": 16,
                                                                "start": 7,
                                                                "end": 7
                                                            },
                                                            "catchClause": {
                                                                "kind": 173,
                                                                "catchKeyword": {
                                                                    "kind": 4202575,
                                                                    "flags": 80,
                                                                    "start": 7,
                                                                    "end": 12
                                                                },
                                                                "catchParameter": null,
                                                                "block": {
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
                                                                "start": 7,
                                                                "end": 12
                                                            },
                                                            "finallyKeyword": null,
                                                            "finallyBlock": null,
                                                            "flags": 16,
                                                            "start": 7,
                                                            "end": 12
                                                        }
                                                    ],
                                                    "flags": 16,
                                                    "start": 7,
                                                    "end": 12
                                                },
                                                "flags": 16,
                                                "start": 5,
                                                "end": 12
                                            }
                                        ],
                                        "flags": 16,
                                        "start": 5,
                                        "end": 12
                                    },
                                    "flags": 16,
                                    "start": 3,
                                    "end": 12
                                }
                            ],
                            "flags": 16,
                            "start": 3,
                            "end": 12
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 12
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 12
            },
            "flags": 16,
            "start": 0,
            "end": 12
        }
    ],
    "isModule": false,
    "source": "{ { { {catch",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 12
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'try' expected - start: 7, end: 12
✖ The parser expected to find a '}' to match the '{' token here - start: 12, end: 12

```

