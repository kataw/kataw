# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw/test/__snapshot__/parser/expressions/assignment/to_keyword/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/assignment/to_keyword/gen/assigning_to_keyword_paren_wrapped
> :: test: assigning to keyword paren wrapped
> :: case: switch
## Input

`````js
(switch = x)
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
                    "kind": 16637,
                    "text": "",
                    "flags": 64,
                    "start": 1,
                    "end": 1
                },
                "flags": 32,
                "start": 0,
                "end": 1
            },
            "flags": 16,
            "start": 0,
            "end": 1
        },
        {
            "kind": 160,
            "switchKeyword": {
                "kind": 37757024,
                "flags": 80,
                "start": 1,
                "end": 7
            },
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 16637,
                    "text": "",
                    "flags": 64,
                    "start": 7,
                    "end": 7
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 7,
                    "end": 9
                },
                "right": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 9,
                    "end": 11
                },
                "flags": 32,
                "start": 7,
                "end": 11
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [],
                "flags": 16,
                "start": 12,
                "end": 12
            },
            "flags": 16,
            "start": 1,
            "end": 12
        }
    ],
    "isModule": false,
    "source": "(switch = x)",
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
✖ Identifier expected - start: 1, end: 7
✖ Missing an opening parentheses - '( - start: 7, end: 9
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 7, end: 9
✖ The parser expected to find a '}' to match the '{' token here - start: 12, end: 12

```

