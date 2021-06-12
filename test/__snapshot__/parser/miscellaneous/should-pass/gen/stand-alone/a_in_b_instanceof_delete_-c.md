# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-12
- From: kataw8/test\__snapshot__/parser/miscellaneous/should-pass/autogen.md
- Path: kataw8/test\__snapshot__\parser\miscellaneous\should-pass\gen\stand-alone
> :: test: stand-alone
> :: case: a in b instanceof delete -c
## Input

`````js
a in b instanceof delete -c
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
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
                        "start": 0,
                        "end": 1
                    },
                    "operatorToken": {
                        "kind": 21006388,
                        "flags": 64,
                        "start": 1,
                        "end": 4
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "start": 4,
                        "end": 6
                    },
                    "flags": 32,
                    "start": 0,
                    "end": 6
                },
                "operatorToken": {
                    "kind": 4229173,
                    "flags": 64,
                    "start": 6,
                    "end": 17
                },
                "right": {
                    "kind": 126,
                    "operandToken": {
                        "kind": 4259886,
                        "flags": 64,
                        "start": 17,
                        "end": 24
                    },
                    "operand": {
                        "kind": 126,
                        "operandToken": {
                            "kind": 134318643,
                            "flags": 64,
                            "start": 24,
                            "end": 26
                        },
                        "operand": {
                            "kind": 134299649,
                            "text": "c",
                            "rawText": "c",
                            "flags": 96,
                            "start": 26,
                            "end": 27
                        },
                        "flags": 32,
                        "start": 24,
                        "end": 27
                    },
                    "flags": 32,
                    "start": 17,
                    "end": 27
                },
                "flags": 32,
                "start": 0,
                "end": 27
            },
            "flags": 16,
            "start": 0,
            "end": 27
        }
    ],
    "isModule": false,
    "source": "a in b instanceof delete -c",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 27
}
```

### Printed

```javascript

a in b inctanceof delete -c;
```

### Diagnostics

```javascript
✔ No errors
```

