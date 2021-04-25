# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: d
> :: test: assignment paren wrapped
> :: case: \u0063ontinue
## Input

`````js
(\u0063ontinue = x);
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
                "kind": 121,
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "autofix": 0,
                    "flags": 12,
                    "start": 1,
                    "end": 1
                },
                "flags": 256,
                "start": 0,
                "end": 1
            },
            "flags": 128,
            "start": 0,
            "end": 1
        },
        {
            "kind": 172,
            "continueKeyword": {
                "kind": 37757009,
                "flags": 768,
                "start": 1,
                "end": 14
            },
            "label": {
                "kind": 16637,
                "text": "",
                "autofix": 0,
                "flags": 12,
                "start": 14,
                "end": 14
            },
            "flags": 128,
            "start": 1,
            "end": 14
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 768,
                "start": 16,
                "end": 18
            },
            "flags": 128,
            "start": 16,
            "end": 18
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 19,
            "end": 20
        }
    ],
    "isModule": false,
    "text": "(\\u0063ontinue = x);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 20
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2716}@ Expression expected - start: 1, end: 14
@{x2716}@ Unexpected token. - start: 1, end: 14
@{x2716}@ Unexpected token. - start: 1, end: 14
@{x2716}@ A 'continue' statement can only be used within an enclosing iteration statement. - start: 1, end: 14
@{x2716}@ Expression expected - start: 14, end: 16
@{x2716}@ Unexpected token. - start: 14, end: 16
@{x2716}@ Statement expected - start: 14, end: 16
@{x2716}@ Unexpected token. - start: 18, end: 19
@{x2716}@ Statement expected - start: 18, end: 19

```

