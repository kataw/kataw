# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: d
> :: test: assignment paren wrapped
> :: case: inst\u0061nceof
## Input

`````js
(inst\u0061nceof = x);
`````

## Output

### Hybrid CST

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
                            "flags": 12,
                            "start": 1,
                            "end": 1
                        },
                        "operatorToken": {
                            "kind": 4229173,
                            "flags": 768,
                            "start": 1,
                            "end": 16
                        },
                        "right": {
                            "kind": 16637,
                            "text": "",
                            "flags": 12,
                            "start": 16,
                            "end": 16
                        },
                        "flags": 256,
                        "start": 1,
                        "end": 16
                    },
                    "flags": 256,
                    "start": 0,
                    "end": 16
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 768,
                    "start": 16,
                    "end": 18
                },
                "right": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 768,
                    "start": 18,
                    "end": 20
                },
                "flags": 256,
                "start": 0,
                "end": 20
            },
            "flags": 128,
            "start": 0,
            "end": 20
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 21,
            "end": 22
        }
    ],
    "isModule": false,
    "text": "(inst\\u0061nceof = x);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 22
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2716}@ Expression expected - start: 1, end: 16
@{x2716}@ Expression expected - start: 16, end: 18
@{x2716}@ The left-hand side of an assignment expression must be a variable or a property access - start: 16, end: 18
@{x2716}@ Statement expected - start: 20, end: 21

```

