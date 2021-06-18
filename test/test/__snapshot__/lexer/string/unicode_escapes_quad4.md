# Kataw parser test case

## Input

`````js
"\u"
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
                "text": "",
                "rawText": "\"\\u\"",
                "flags": 16480,
                "start": 0,
                "end": 4
            },
            "flags": 16,
            "start": 0,
            "end": 4
        }
    ],
    "isModule": false,
    "source": "\"\\u\"",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 4
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Invalid hexadecimal escape sequence - start: 0, end: 3

```

