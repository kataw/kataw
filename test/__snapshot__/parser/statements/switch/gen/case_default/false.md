# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: t
> :: test: case default
> :: case: false
## Input

`````js
case false default
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
                "kind": 134,
                "text": false,
                "flags": 96,
                "start": 4,
                "end": 10
            },
            "flags": 16,
            "start": 4,
            "end": 10
        }
    ],
    "isModule": false,
    "text": "case false default",
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
✖ Statement expected - start: 0, end: 4
✖ Statement expected - start: 10, end: 18

```

