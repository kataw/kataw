# Kataw parser test case

## Input

`````js
"\11
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
                "text": "11",
                "rawText": "\"\\11",
                "flags": 2359392,
                "start": 0,
                "end": 4
            },
            "flags": 16,
            "start": 0,
            "end": 4
        }
    ],
    "isModule": false,
    "source": "\"\\11",
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
✖ Unterminated string literal - start: 0, end: 4

```

