# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: d
> :: test: assignment paren wrapped
> :: case: debugge\u0072
## Input

`````js
(debugge\u0072 = x);
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
            "kind": 171,
            "debuggerKeyword": {
                "kind": 37757010,
                "flags": 768,
                "start": 1,
                "end": 14
            },
            "flags": 1,
            "start": 128,
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
    "text": "(debugge\\u0072 = x);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 20
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Expression expected - start: 1, end: 14
✖ Statement expected - start: 14, end: 16
✖ Statement expected - start: 18, end: 19

```

