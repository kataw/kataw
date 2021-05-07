# Kataw parser test case

## Input

`````js
`a \4 b`;
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
                "kind": 458761,
                "text": "a 4 b",
                "rawText": "a \\4 b",
                "flags": 134217824,
                "start": 0,
                "end": 8
            },
            "flags": 16,
            "start": 0,
            "end": 9
        }
    ],
    "isModule": false,
    "source": "`a \\4 b`;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 9
}
```

### Printed

```javascript

`a 4 b`;
```

### Diagnostics

```javascript
✔ No errors
```

