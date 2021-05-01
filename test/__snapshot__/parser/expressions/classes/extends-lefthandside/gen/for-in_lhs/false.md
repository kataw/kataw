# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: for-in lhs
> :: case: false
## Input

`````js
for (false in x) ;
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "forKeyword": {
                "kind": 37757017,
                "flags": 0,
                "start": 0,
                "end": 3
            },
            "inKeyword": {
                "kind": 21006388,
                "flags": 64,
                "start": 10,
                "end": 13
            },
            "kind": 166,
            "initializer": {
                "kind": 134,
                "text": false,
                "flags": 96,
                "start": 5,
                "end": 10
            },
            "expression": {
                "kind": 134299649,
                "original": "x",
                "text": "x",
                "rawText": " x",
                "flags": 96,
                "start": 13,
                "end": 15
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 16,
                "end": 18
            },
            "flags": 16,
            "start": 0,
            "end": 18
        }
    ],
    "isModule": false,
    "source": "for (false in x) ;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 18
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Invalid left-hand side in for-in loop - start: 13, end: 15

```

