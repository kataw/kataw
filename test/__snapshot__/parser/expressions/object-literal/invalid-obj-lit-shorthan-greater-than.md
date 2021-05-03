# Kataw parser test case

## Input

`````js
(({w = x} >(-9)
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
                    "kind": 121,
                    "expression": {
                        "kind": 132,
                        "flags": 32,
                        "start": 1,
                        "end": 15
                    },
                    "flags": 32,
                    "start": 1,
                    "end": 15
                },
                "flags": 32,
                "start": 0,
                "end": 15
            },
            "flags": 16,
            "start": 0,
            "end": 15
        }
    ],
    "isModule": false,
    "source": "(({w = x} >(-9)",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 15
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Did you mean to use a ':'? An '=' can only follow a property name when the containing object literal is part of a destructuring - start: 9, end: 11
✖ Expected a ')' to match the '(' token here - start: 15, end: 15
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 15, end: 15
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 15, end: 15
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 15, end: 15
✖ Expected a ')' to match the '(' token here - start: 15, end: 15

```

