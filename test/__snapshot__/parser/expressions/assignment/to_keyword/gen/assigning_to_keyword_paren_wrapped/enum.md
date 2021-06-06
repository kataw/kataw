# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/expressions/assignment/to_keyword/autogen.md
- Path: kataw8/test\__snapshot__\parser\expressions\assignment\to_keyword\gen\assigning_to_keyword_paren_wrapped
> :: test: assigning to keyword paren wrapped
> :: case: enum
## Input

`````js
(enum = x)
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
                        "text": "enum",
                        "rawText": "enum",
                        "flags": 96,
                        "start": 1,
                        "end": 5
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 64,
                        "start": 5,
                        "end": 7
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 7,
                        "end": 9
                    },
                    "flags": 32,
                    "start": 0,
                    "end": 9
                },
                "flags": 32,
                "start": 0,
                "end": 10
            },
            "flags": 16,
            "start": 0,
            "end": 10
        }
    ],
    "isModule": false,
    "source": "(enum = x)",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 10
}
```

### Printed

```javascript

(enum = x);
```

### Diagnostics

```javascript
✔ No errors
```

