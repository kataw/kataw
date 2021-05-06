# Kataw parser test case

## Input

`````js
"\xdq"
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
                "text": "q",
                "rawText": "\"\\xdq\"",
                "flags": 96,
                "start": 0,
                "end": 6
            },
            "flags": 16,
            "start": 0,
            "end": 6
        }
    ],
    "isModule": false,
    "source": "\"\\xdq\"",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 6
}
```

### Printed

```javascript

"\"\xdq\"";
```

### Diagnostics

```javascript
✖ Invalid hexadecimal escape sequence - start: 0, end: 4

```

