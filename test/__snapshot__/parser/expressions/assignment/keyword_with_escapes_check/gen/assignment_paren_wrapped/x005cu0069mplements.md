# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-11
- From: kataw/test/__snapshot__/parser/expressions/assignment/keyword_with_escapes_check/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/assignment/keyword_with_escapes_check/gen/assignment_paren_wrapped
> :: test: assignment paren wrapped
> :: case: \u0069mplements
## Options

`````js
{}
`````
## Input

`````js
(\u0069mplements = x);
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
                    "kind": 125,
                    "left": {
                        "kind": 134299649,
                        "text": "implements",
                        "rawText": "\\u0069mplements",
                        "flags": 96,
                        "start": 1,
                        "end": 16
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "start": 16,
                        "end": 18
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
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
                "end": 21
            },
            "flags": 16,
            "start": 0,
            "end": 22
        }
    ],
    "isModule": false,
    "source": "(\\u0069mplements = x);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 22
}
```

### Printed

```javascript

(implements = x);
```

### Diagnostics

```javascript
✔ No errors
```

