# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-03
- From: kataw8/test\__snapshot__/parser/statements/block/autogen.md
- Path: kataw8/test\__snapshot__\parser\statements\block\gen\x007b_triple
> :: test: { triple
> :: case: let  =
## Input

`````js
{ { { let  =
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
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 125,
                                                    "left": {
                                                        "kind": 134299649,
                                                        "text": "let",
                                                        "rawText": "let",
                                                        "flags": 96,
                                                        "start": 5,
                                                        "end": 9
                                                    },
                                                    "operatorToken": {
                                                        "kind": 4125,
                                                        "flags": 64,
                                                        "start": 9,
                                                        "end": 12
                                                    },
                                                    "right": {
                                                        "kind": 16637,
                                                        "text": "",
                                                        "flags": 64,
                                                        "start": 12,
                                                        "end": 12
                                                    },
                                                    "flags": 32,
                                                    "start": 5,
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
    "source": "{ { { let  =",
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
✖ Identifier expected - start: 12, end: 12

```

