# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-11
- From: kataw/test/__snapshot__/parser/expressions/assignment/keyword_with_escapes_check/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/assignment/keyword_with_escapes_check/gen/assignment_paren_wrapped
> :: test: assignment paren wrapped
> :: case: st\u0061tic
## Options

`````js
{}
`````
## Input

`````js
(st\u0061tic = x);
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
                        "text": "static",
                        "rawText": "st\\u0061tic",
                        "flags": 96,
                        "start": 1,
                        "end": 12
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "start": 12,
                        "end": 14
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 14,
                        "end": 16
                    },
                    "flags": 32,
                    "start": 0,
                    "end": 16
                },
                "flags": 32,
                "start": 0,
                "end": 17
            },
            "flags": 16,
            "start": 0,
            "end": 18
        }
    ],
    "isModule": false,
    "source": "(st\\u0061tic = x);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 18
}
```

### Printed

```javascript

(static = x);
```

### Diagnostics

```javascript
✔ No errors
```

