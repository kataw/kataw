# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-12
- From: kataw8/test\__snapshot__/parser/expressions/assignment/keyword_with_escapes_check/autogen.md
- Path: kataw8/test\__snapshot__\parser\expressions\assignment\keyword_with_escapes_check\gen\assignment_unwrapped
> :: test: assignment unwrapped
> :: case: \u0073witch
## Input

`````js
\u0073witch = x;
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 160,
            "switchKeyword": {
                "kind": 37757024,
                "flags": 16464,
                "start": 0,
                "end": 11
            },
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 16637,
                    "text": "",
                    "flags": 64,
                    "start": 11,
                    "end": 11
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 11,
                    "end": 13
                },
                "right": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 13,
                    "end": 15
                },
                "flags": 32,
                "start": 11,
                "end": 15
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [],
                "flags": 16,
                "start": 15,
                "end": 15
            },
            "flags": 80,
            "start": 0,
            "end": 15
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 15,
            "end": 16
        }
    ],
    "isModule": false,
    "source": "\\u0073witch = x;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 16
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Keywords cannot contain escape characters - start: 0, end: 11
✖ Missing an opening parentheses - '( - start: 11, end: 13
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 11, end: 13
✖ Declaration or statement expected - start: 15, end: 16

```

