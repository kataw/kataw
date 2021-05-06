# Kataw parser test case

## Input

`````js
`\1239`
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
                "text": "1239",
                "rawText": "\\1239",
                "flags": 134217824,
                "start": 0,
                "end": 7
            },
            "flags": 16,
            "start": 0,
            "end": 7
        }
    ],
    "isModule": false,
    "source": "`\\1239`",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 7
}
```

### Printed

```javascript

`1239`;
```

### Diagnostics

```javascript
✔ No errors
```

