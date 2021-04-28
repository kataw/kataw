# Kataw parser test case

## Input

`````js
continue
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 172,
            "continueKeyword": {
                "kind": 37757009,
                "flags": 0,
                "start": 0,
                "end": 8
            },
            "label": null,
            "flags": 16,
            "start": 0,
            "end": 8
        }
    ],
    "isModule": false,
    "text": "continue",
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
✖ A 'continue' statement can only be used within an enclosing iteration statement. - start: 0, end: 8

```

