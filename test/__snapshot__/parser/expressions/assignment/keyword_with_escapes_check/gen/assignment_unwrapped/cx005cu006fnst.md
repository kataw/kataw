# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-30
- From: kataw7/test\__snapshot__/parser/expressions/assignment/keyword_with_escapes_check/autogen.md
- Path: kataw7/test\__snapshot__\parser\expressions\assignment\keyword_with_escapes_check\gen\assignment_unwrapped
> :: test: assignment unwrapped
> :: case: c\u006fnst
## Input

`````js
c\u006fnst = x;
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 16448,
                "start": 0,
                "end": 10
            },
            "binding": {
                "kind": 151,
                "bindingList": [],
                "flags": 16777232,
                "start": 10,
                "end": 10
            },
            "flags": 33554448,
            "start": 0,
            "end": 10
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 12,
                "end": 14
            },
            "flags": 16,
            "start": 12,
            "end": 15
        }
    ],
    "isModule": false,
    "source": "c\\u006fnst = x;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 15
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Keywords cannot contain escape characters - start: 10, end: 12
✖ Expected a `;` - start: 10, end: 12

```

