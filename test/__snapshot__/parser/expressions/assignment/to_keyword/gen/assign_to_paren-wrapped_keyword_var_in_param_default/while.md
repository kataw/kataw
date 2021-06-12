# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-12
- From: kataw8/test\__snapshot__/parser/expressions/assignment/to_keyword/autogen.md
- Path: kataw8/test\__snapshot__\parser\expressions\assignment\to_keyword\gen\assign_to_paren-wrapped_keyword_var_in_param_default
> :: test: assign to paren-wrapped keyword var in param default
> :: case: while
## Input

`````js
(x = (while) = f) => {}
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
                    "kind": 132,
                    "expressions": [],
                    "flags": 32,
                    "start": 0,
                    "end": 6
                },
                "flags": 32,
                "start": 0,
                "end": 6
            },
            "flags": 16,
            "start": 0,
            "end": 6
        },
        {
            "kind": 154,
            "whileKeyword": {
                "kind": 37757028,
                "flags": 80,
                "start": 6,
                "end": 11
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "flags": 64,
                "start": 11,
                "end": 11
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 125,
                    "left": {
                        "kind": 16637,
                        "text": "",
                        "flags": 64,
                        "start": 12,
                        "end": 12
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 64,
                        "start": 12,
                        "end": 14
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "f",
                        "rawText": "f",
                        "flags": 96,
                        "start": 14,
                        "end": 16
                    },
                    "flags": 32,
                    "start": 12,
                    "end": 16
                },
                "flags": 16,
                "start": 12,
                "end": 16
            },
            "flags": 80,
            "start": 6,
            "end": 16
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "start": 22,
                "end": 22
            },
            "flags": 16,
            "start": 20,
            "end": 23
        }
    ],
    "isModule": false,
    "source": "(x = (while) = f) => {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 23
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 6, end: 11
✖ Missing an opening parentheses - '( - start: 11, end: 12
✖ Identifier expected - start: 12, end: 14
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 12, end: 14
✖ Expected a `;` - start: 16, end: 17
✖ Declaration or statement expected - start: 17, end: 20

```

