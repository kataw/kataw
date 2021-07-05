# Kataw parser test case

## Input

`````js
`some \" quote`;
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
                "text": "some \" quote",
                "rawText": "some \\\" quote",
                "flags": 134217824,
                "start": 0,
                "end": 15
            },
            "flags": 16,
            "start": 0,
            "end": 16
        }
    ],
    "isModule": false,
    "source": "`some \\\" quote`;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 16
}
```

### Printed

```javascript

`some \" quote`;
```

### Diagnostics

```javascript
✔ No errors
```

