# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true }
`````

## Input

`````js
abc\uD835\uDFD0def
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "original": "abc\\uD835\\uDFD0def",
                "text": "abc𝟐def",
                "rawText": "abc\\uD835\\uDFD0def",
                "flags": 96,
                "start": 0,
                "end": 18
            },
            "flags": 16,
            "start": 0,
            "end": 18
        }
    ],
    "isModule": false,
    "source": "abc\\uD835\\uDFD0def",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 18
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

