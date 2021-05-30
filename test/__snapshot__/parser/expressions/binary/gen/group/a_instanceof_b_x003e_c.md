# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-30
- From: kataw7/test\__snapshot__/parser/expressions/binary/autogen.md
- Path: kataw7/test\__snapshot__\parser\expressions\binary\gen\group
> :: test: group
> :: case: a instanceof b > c
## Input

`````js
( a instanceof b > c )
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
                "kind": 121,
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
                            "kind": 4229173,
                            "flags": 64,
                            "start": 3,
                            "end": 14
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "start": 14,
                            "end": 16
                        },
                        "flags": 32,
                        "start": 0,
                        "end": 16
                    },
                    "operatorToken": {
                        "kind": 34883,
                        "flags": 64,
                        "start": 16,
                        "end": 18
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "c",
                        "rawText": "c",
                        "flags": 96,
                        "start": 18,
                        "end": 20
                    },
                    "flags": 32,
                    "start": 0,
                    "end": 20
                },
                "flags": 32,
                "start": 0,
                "end": 22
            },
            "flags": 16,
            "start": 0,
            "end": 22
        }
    ],
    "isModule": false,
    "source": "( a instanceof b > c )",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 22
}
```

### Printed

```javascript

(a inctanceof b > c);
```

### Diagnostics

```javascript
✔ No errors
```

