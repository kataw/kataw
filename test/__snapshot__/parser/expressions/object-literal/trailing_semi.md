# Kataw parser test case

## Input

`````js
({x:y;})
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
                    "kind": 132,
                    "flags": 32,
                    "start": 0,
                    "end": 5
                },
                "flags": 32,
                "start": 0,
                "end": 5
            },
            "flags": 16,
            "start": 0,
            "end": 6
        }
    ],
    "isModule": false,
    "source": "({x:y;})",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 8
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ ',' expected - start: 5, end: 6
✖ The parser expected to find a '}' to match the '{' token here - start: 5, end: 6
✖ Expected a ')' to match the '(' token here - start: 5, end: 6
✖ Declaration or statement expected - start: 6, end: 7
✖ Declaration or statement expected - start: 7, end: 8

```

