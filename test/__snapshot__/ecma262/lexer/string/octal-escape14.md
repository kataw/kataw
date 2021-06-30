# Kataw parser test case

## Input

`````js
"\66*"
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
                "text": "66*",
                "rawText": "\"\\66*\"",
                "flags": 262240,
                "start": 0,
                "end": 6
            },
            "flags": 16,
            "start": 0,
            "end": 6
        }
    ],
    "isModule": false,
    "source": "\"\\66*\"",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 6
}
```

### Printed

```javascript

'"\66*"';

```

### Diagnostics

```javascript
✔ No errors
```

