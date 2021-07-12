# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true }
`````

## Input

`````js
"\u{0000000000000000000010ffff}"
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
                "text": "пϿ",
                "rawText": "\"\\u{0000000000000000000010ffff}\"",
                "flags": 8288,
                "start": 0,
                "end": 32
            },
            "flags": 16,
            "start": 0,
            "end": 32
        }
    ],
    "isModule": false,
    "source": "\"\\u{0000000000000000000010ffff}\"",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 32
}
```

### Printed

```javascript

  "\"\u{0000000000000000000010ffff}\"";

```

### Diagnostics

```javascript
✔ No errors
```

