# Kataw parser test case

## Input

`````js
break
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 150,
            "breakKeyword": {
                "kind": 37757005,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 5
            },
            "label": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 5
        }
    ],
    "isModule": false,
    "source": "break",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 5
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ A 'break' statement can only be used within an enclosing iteration or switch statement. - start: 5, end: 5

```

