# Kataw parser test case

## Input

`````js
"\ua"
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
                "text": "a",
                "rawText": "\"\\ua\"",
                "flags": 16480,
                "start": 0,
                "end": 5
            },
            "flags": 16,
            "start": 0,
            "end": 5
        }
    ],
    "isModule": false,
    "source": "\"\\ua\"",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 5
}
```

### Printed

```javascript

"\"\ua\"";
```

### Diagnostics

```javascript
✖ Invalid hexadecimal escape sequence - start: 0, end: 3

```

