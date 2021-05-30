# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-30
- From: kataw7/test\__snapshot__/parser/expressions/assignment/keyword_with_escapes_check/autogen.md
- Path: kataw7/test\__snapshot__\parser\expressions\assignment\keyword_with_escapes_check\gen\assignment_unwrapped
> :: test: assignment unwrapped
> :: case: \u0062rguments
## Input

`````js
\u0062rguments = x;
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
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "brguments",
                    "rawText": "\\u0062rguments",
                    "flags": 96,
                    "start": 0,
                    "end": 14
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 14,
                    "end": 16
                },
                "right": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 16,
                    "end": 18
                },
                "flags": 32,
                "start": 0,
                "end": 18
            },
            "flags": 16,
            "start": 0,
            "end": 19
        }
    ],
    "isModule": false,
    "source": "\\u0062rguments = x;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 19
}
```

### Printed

```javascript

brguments = x;
```

### Diagnostics

```javascript
✔ No errors
```

