# Kataw parser test case

## Input

`````js
({*=f(){}})
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
                    "end": 7
                },
                "flags": 0,
                "start": 34,
                "end": 7
            },
            "flags": 16,
            "start": 0,
            "end": 7
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "start": 8,
                "end": 8
            },
            "flags": 16,
            "start": 7,
            "end": 9
        }
    ],
    "isModule": false,
    "source": "({*=f(){}})",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 11
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The parser expected to find a '}' to match the '{' token here - start: 2, end: 4
✖ Expression exprected. A compound assignment or an logical assignment cannot follow an object literal - start: 1, end: 4
✖ Expected a ')' to match the '(' token here - start: 7, end: 8
✖ Declaration or statement expected - start: 9, end: 10
✖ Declaration or statement expected - start: 10, end: 11

```

