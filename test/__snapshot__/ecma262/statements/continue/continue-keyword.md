# Kataw parser test case

## Input

`````js
continue
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 172,
            "continueKeyword": {
                "kind": 37757009,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 8
            },
            "label": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 8
        }
    ],
    "isModule": false,
    "source": "continue",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 8
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ A 'continue' statement can only be used within an enclosing iteration statement. - start: 0, end: 8

```

