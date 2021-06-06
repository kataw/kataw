# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/miscellaneous/should-pass/autogen.md
- Path: kataw8/test\__snapshot__\parser\miscellaneous\should-pass\gen\in_a_block
> :: test: in a block
> :: case: delete void 0
## Input

`````js
{ delete void 0 }
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
                            "kind": 126,
                            "operandToken": {
                                "kind": 4259886,
                                "flags": 64,
                                "start": 1,
                                "end": 8
                            },
                            "operand": {
                                "kind": 126,
                                "operandToken": {
                                    "kind": 138477615,
                                    "flags": 64,
                                    "start": 8,
                                    "end": 13
                                },
                                "operand": {
                                    "kind": 201392130,
                                    "text": 0,
                                    "rawText": "0",
                                    "flags": 96,
                                    "start": 13,
                                    "end": 15
                                },
                                "flags": 32,
                                "start": 8,
                                "end": 15
                            },
                            "flags": 32,
                            "start": 1,
                            "end": 15
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 15
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 15
            },
            "flags": 16,
            "start": 0,
            "end": 17
        }
    ],
    "isModule": false,
    "source": "{ delete void 0 }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 17
}
```

### Printed

```javascript

{
  delete void 0;
}
```

### Diagnostics

```javascript
✔ No errors
```

