# Kataw parser test case

## Input

`````js
({foo += bar})
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
                    "end": 12
                },
                "flags": 32,
                "start": 0,
                "end": 12
            },
            "flags": 16,
            "start": 0,
            "end": 12
        }
    ],
    "isModule": false,
    "source": "({foo += bar})",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 14
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Property assignment expected - start: 5, end: 8
✖ ',' expected - start: 5, end: 8
✖ The parser expected to find a '}' to match the '{' token here - start: 5, end: 8
✖ Expression exprected. A compound assignment or an logical assignment cannot follow an object literal - start: 5, end: 8
✖ Declaration or statement expected - start: 12, end: 13
✖ Declaration or statement expected - start: 13, end: 14

```

