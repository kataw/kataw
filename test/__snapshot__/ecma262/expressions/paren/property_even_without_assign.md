# Kataw parser test case

## Input

`````js
([{x = y}.z])
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
                    "transformFlags": 0,
                    "start": 0,
                    "end": 11
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 34,
                "end": 11
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 11
        }
    ],
    "isModule": false,
    "source": "([{x = y}.z])",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 13
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ ',' expected - start: 9, end: 10
✖ Did you mean to use a ':'? An '=' can only follow a property name when the containing object literal is part of a destructuring - start: 9, end: 10
✖ Expected a ')' to match the '(' token here - start: 11, end: 12
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 11, end: 12
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 11, end: 12
✖ Declaration or statement expected - start: 12, end: 13

```

