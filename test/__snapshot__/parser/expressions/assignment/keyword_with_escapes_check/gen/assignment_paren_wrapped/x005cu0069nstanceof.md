# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: d
> :: test: assignment paren wrapped
> :: case: \u0069nstanceof
## Input

`````js
(\u0069nstanceof = x);
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
                    "kind": 121,
                    "expression": {
                        "kind": 198,
                        "left": {
                            "kind": 16637,
                            "text": "",
                            "flags": 68,
                            "start": 1,
                            "end": 1
                        },
                        "operatorToken": {
                            "kind": 4229173,
                            "flags": 16448,
                            "start": 1,
                            "end": 16
                        },
                        "right": {
                            "kind": 16637,
                            "text": "",
                            "flags": 68,
                            "start": 16,
                            "end": 16
                        },
                        "flags": 32,
                        "start": 1,
                        "end": 16
                    },
                    "flags": 32,
                    "start": 0,
                    "end": 16
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
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
            "flags": 16,
            "start": 0,
            "end": 20
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 21,
            "end": 22
        }
    ],
    "isModule": false,
    "source": "(\\u0069nstanceof = x);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 22
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Expression expected - start: 1, end: 16
✖ Expression expected - start: 16, end: 18
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 16, end: 18
✖ Expected a `;` - start: 20, end: 21

```

