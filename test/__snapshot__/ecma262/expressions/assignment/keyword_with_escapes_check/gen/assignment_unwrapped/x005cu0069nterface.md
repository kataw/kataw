# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/assignment/keyword_with_escapes_check/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/assignment/keyword_with_escapes_check/gen/assignment_unwrapped
> :: test: assignment unwrapped
> :: case: \u0069nterface
## Options

`````js
{}
`````
## Input

`````js
\u0069nterface = x;
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
                    "text": "interface",
                    "rawText": "\\u0069nterface",
                    "flags": 96,
                    "start": 0,
                    "end": 14
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
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
    "source": "\\u0069nterface = x;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 19
}
```

### Printed

```javascript

interface = x;
```

### Diagnostics

```javascript
✔ No errors
```

