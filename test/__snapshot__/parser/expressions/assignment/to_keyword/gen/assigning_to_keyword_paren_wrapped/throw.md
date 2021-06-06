# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/expressions/assignment/to_keyword/autogen.md
- Path: kataw8/test\__snapshot__\parser\expressions\assignment\to_keyword\gen\assigning_to_keyword_paren_wrapped
> :: test: assigning to keyword paren wrapped
> :: case: throw
## Input

`````js
(throw = x)
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
            "kind": 158,
            "throwKeyword": {
                "kind": 37757026,
                "flags": 80,
                "start": 1,
                "end": 6
            },
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 16637,
                    "text": "",
                    "flags": 64,
                    "start": 6,
                    "end": 6
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 6,
                    "end": 8
                },
                "right": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 8,
                    "end": 10
                },
                "flags": 32,
                "start": 6,
                "end": 10
            },
            "flags": 16,
            "start": 1,
            "end": 10
        }
    ],
    "isModule": false,
    "source": "(throw = x)",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 11
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 1, end: 6
✖ Identifier expected - start: 6, end: 8
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 6, end: 8
✖ Expected a `;` - start: 10, end: 11

```

