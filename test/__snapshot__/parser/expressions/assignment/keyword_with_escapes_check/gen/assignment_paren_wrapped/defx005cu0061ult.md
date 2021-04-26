# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: d
> :: test: assignment paren wrapped
> :: case: def\u0061ult
## Input

`````js
(def\u0061ult = x);
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
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 768,
                "start": 15,
                "end": 17
            },
            "flags": 128,
            "start": 15,
            "end": 17
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 18,
            "end": 19
        }
    ],
    "isModule": false,
    "text": "(def\\u0061ult = x);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 19
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2716}@ Expression expected - start: 1, end: 13
@{x2716}@ Statement expected - start: 1, end: 13
@{x2716}@ Statement expected - start: 13, end: 15
@{x2716}@ Statement expected - start: 17, end: 18

```

