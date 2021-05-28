# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-21
- From: d
- Path: d
> :: test: assignment paren wrapped
> :: case: \u0064elete
## Input

`````js
(\u0064elete = x);
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
                        "kind": 126,
                        "operandToken": {
                            "kind": 4259886,
                            "flags": 16448,
                            "start": 1,
                            "end": 12
                        },
                        "operand": {
                            "kind": 16637,
                            "text": "",
                            "flags": 64,
                            "start": 12,
                            "end": 12
                        },
                        "flags": 32,
                        "start": 1,
                        "end": 12
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 64,
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
                    "start": 1,
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
    "source": "(\\u0064elete = x);",
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
✖ Keywords cannot contain escape characters - start: 12, end: 14
✖ Keywords cannot contain escape characters - start: 12, end: 14
✖ Identifier expected - start: 12, end: 14
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 12, end: 14

```

