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
                    "kind": 16637,
                    "text": "",
                    "flags": 68,
                    "start": 1,
                    "end": 1
                },
                "flags": 32,
                "start": 0,
                "end": 1
            },
            "flags": 16,
            "start": 0,
            "end": 1
        },
        {
            "kind": 171,
            "debuggerKeyword": {
                "kind": 37757010,
                "flags": 16384,
                "start": 1,
                "end": 14
            },
            "flags": 16,
            "start": 1,
            "end": 14
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 16,
                "end": 18
            },
            "flags": 16,
            "start": 16,
            "end": 18
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 19,
            "end": 20
        }
    ],
    "isModule": false,
    "source": "(debugge\\u0072 = x);",
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
✖ Expected a `;` - start: 14, end: 16
✖ Expected a `;` - start: 18, end: 19

```

