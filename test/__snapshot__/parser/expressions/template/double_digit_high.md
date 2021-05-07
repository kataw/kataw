# Kataw parser test case

## Input

`````js
`\40`
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
                "text": "40",
                "rawText": "\\40",
                "flags": 134217824,
                "start": 0,
                "end": 5
            },
            "flags": 16,
            "start": 0,
            "end": 5
        }
    ],
    "isModule": false,
    "source": "`\\40`",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 5
}
```

### Printed

```javascript

`40`;
```

### Diagnostics

```javascript
✔ No errors
```

