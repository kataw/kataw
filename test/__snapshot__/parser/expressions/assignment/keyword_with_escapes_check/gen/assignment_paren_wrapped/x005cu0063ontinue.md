# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/expressions/assignment/keyword_with_escapes_check/autogen.md
- Path: kataw8/test\__snapshot__\parser\expressions\assignment\keyword_with_escapes_check\gen\assignment_paren_wrapped
> :: test: assignment paren wrapped
> :: case: \u0063ontinue
## Input

`````js
(\u0063ontinue = x);
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
            "kind": 172,
            "continueKeyword": {
                "kind": 37757009,
                "flags": 16464,
                "start": 1,
                "end": 14
            },
            "label": {
                "kind": 16637,
                "text": "",
                "flags": 64,
                "start": 14,
                "end": 14
            },
            "flags": 16,
            "start": 1,
            "end": 14
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 16,
                "end": 18
            },
            "flags": 16,
            "start": 16,
            "end": 18
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 19,
            "end": 20
        }
    ],
    "isModule": false,
    "source": "(\\u0063ontinue = x);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 20
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 1, end: 14
✖ A 'continue' statement can only be used within an enclosing iteration statement. - start: 1, end: 14
✖ Keywords cannot contain escape characters - start: 1, end: 14
✖ Identifier expected - start: 14, end: 16
✖ A 'continue' statement can only jump to a label of an enclosing iteration statement. - start: 1, end: 16
✖ Expected a `;` - start: 18, end: 19

```

