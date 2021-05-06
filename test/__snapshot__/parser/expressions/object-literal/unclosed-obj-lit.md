# Kataw parser test case

## Input

`````js
({e=[]}==(;
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
                    "flags": 32,
                    "start": 0,
                    "end": 10
                },
                "flags": 32,
                "start": 0,
                "end": 10
            },
            "flags": 16,
            "start": 0,
            "end": 11
        }
    ],
    "isModule": false,
    "source": "({e=[]}==(;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 11
}
```

### Printed

```javascript

();
```

### Diagnostics

```javascript
✖ Did you mean to use a ':'? An '=' can only follow a property name when the containing object literal is part of a destructuring - start: 7, end: 9
✖ Expression expected - start: 10, end: 11
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 10, end: 11
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 10, end: 11
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 10, end: 11

```

