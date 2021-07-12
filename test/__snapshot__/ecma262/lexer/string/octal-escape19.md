# Kataw parser test case

## Input

`````js
"\7"
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
                "text": "7",
                "rawText": "\"\\7\"",
                "flags": 262240,
                "start": 0,
                "end": 4
            },
            "flags": 16,
            "start": 0,
            "end": 4
        }
    ],
    "isModule": false,
    "source": "\"\\7\"",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 4
}
```

### Printed

```javascript

  "\"\7\"";

```

### Diagnostics

```javascript
✔ No errors
```

