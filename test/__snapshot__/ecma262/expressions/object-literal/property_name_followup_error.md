# Kataw parser test case

## Input

`````js
({foo += bar})
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
                    "kind": 132,
                    "expressions": [],
                    "flags": 32,
                    "start": 0,
                    "end": 12
                },
                "flags": 0,
                "start": 34,
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

```

### Diagnostics

```javascript
✖ Property definition expected. Did you mean to use a ':'? - start: 5, end: 8
✖ ',' expected - start: 6, end: 8
✖ Expression exprected. A compound assignment or an logical assignment cannot follow an object literal - start: 1, end: 8
✖ Expected a ')' to match the '(' token here - start: 12, end: 13
✖ Declaration or statement expected - start: 13, end: 14

```

