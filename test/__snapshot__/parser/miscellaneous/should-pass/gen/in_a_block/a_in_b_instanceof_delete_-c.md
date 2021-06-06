# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/miscellaneous/should-pass/autogen.md
- Path: kataw8/test\__snapshot__\parser\miscellaneous\should-pass\gen\in_a_block
> :: test: in a block
> :: case: a in b instanceof delete -c
## Input

`````js
{ a in b instanceof delete -c }
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
                            "kind": 198,
                            "left": {
                                "kind": 198,
                                "left": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "start": 1,
                                    "end": 3
                                },
                                "operatorToken": {
                                    "kind": 21006388,
                                    "flags": 64,
                                    "start": 3,
                                    "end": 6
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 96,
                                    "start": 6,
                                    "end": 8
                                },
                                "flags": 32,
                                "start": 1,
                                "end": 8
                            },
                            "operatorToken": {
                                "kind": 4229173,
                                "flags": 64,
                                "start": 8,
                                "end": 19
                            },
                            "right": {
                                "kind": 126,
                                "operandToken": {
                                    "kind": 4259886,
                                    "flags": 64,
                                    "start": 19,
                                    "end": 26
                                },
                                "operand": {
                                    "kind": 126,
                                    "operandToken": {
                                        "kind": 100915,
                                        "flags": 64,
                                        "start": 26,
                                        "end": 28
                                    },
                                    "operand": {
                                        "kind": 134299649,
                                        "text": "c",
                                        "rawText": "c",
                                        "flags": 96,
                                        "start": 28,
                                        "end": 29
                                    },
                                    "flags": 32,
                                    "start": 26,
                                    "end": 29
                                },
                                "flags": 32,
                                "start": 19,
                                "end": 29
                            },
                            "flags": 32,
                            "start": 1,
                            "end": 29
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 29
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 29
            },
            "flags": 16,
            "start": 0,
            "end": 31
        }
    ],
    "isModule": false,
    "source": "{ a in b instanceof delete -c }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 31
}
```

### Printed

```javascript

{
  a in b inctanceof delete -c;
}
```

### Diagnostics

```javascript
✔ No errors
```

