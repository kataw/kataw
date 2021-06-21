# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-12
- From: d
- Path: d
> :: test: assignment unwrapped
> :: case: \u0063ontinue
## Options

`````js
{}
`````
## Input

`````js
\u0063ontinue = x;
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 172,
            "continueKeyword": {
                "kind": 37757009,
                "flags": 16464,
                "start": 0,
                "end": 13
            },
            "label": {
                "kind": 16637,
                "text": "",
                "rawText": "",
                "flags": 64,
                "start": 13,
                "end": 13
            },
            "flags": 16,
            "start": 0,
            "end": 13
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 15,
                "end": 17
            },
            "flags": 16,
            "start": 15,
            "end": 18
        }
    ],
    "isModule": false,
    "source": "\\u0063ontinue = x;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 18
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ A 'continue' statement can only be used within an enclosing iteration statement. - start: 0, end: 13
✖ Keywords cannot contain escape characters - start: 0, end: 13
✖ Identifier expected - start: 13, end: 15
✖ A 'continue' statement can only jump to a label of an enclosing iteration statement. - start: 0, end: 15

```

