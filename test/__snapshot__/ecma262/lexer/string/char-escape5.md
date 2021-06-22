# Kataw parser test case

## Input

`````js
"\@{x200}@"
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
                "kind": 201392131,
                "text": "@{x200}@",
                "rawText": "\"\\@{x200}@\"",
                "flags": 96,
                "start": 0,
                "end": 11
            },
            "flags": 16,
            "start": 0,
            "end": 11
        }
    ],
    "isModule": false,
    "source": "\"\\@{x200}@\"",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 11
}
```

### Printed

```javascript

"\"@{x200}@\"";
```

### Diagnostics

```javascript
✔ No errors
```

