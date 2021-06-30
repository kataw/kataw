# Kataw parser test case

## Input

`````js
"\023a"
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
                "text": "\u000023a",
                "rawText": "\"\\023a\"",
                "flags": 96,
                "start": 0,
                "end": 7
            },
            "flags": 16,
            "start": 0,
            "end": 7
        }
    ],
    "isModule": false,
    "source": "\"\\023a\"",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 7
}
```

### Printed

```javascript

'"\023a"';

```

### Diagnostics

```javascript
✔ No errors
```

