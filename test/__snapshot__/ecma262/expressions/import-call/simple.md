# Kataw parser test case

## Input

`````js
import.call
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
                "kind": 299,
                "importKeyword": {
                    "kind": 37814364,
                    "flags": 80,
                    "start": 0,
                    "end": 6
                },
                "metaIdentifier": null,
                "flags": 6,
                "start": 96,
                "end": 7
            },
            "flags": 16,
            "start": 6,
            "end": 7
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "call",
                "rawText": "call",
                "flags": 96,
                "start": 7,
                "end": 11
            },
            "flags": 16,
            "start": 7,
            "end": 11
        }
    ],
    "isModule": false,
    "source": "import.call",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 11
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Cannot use 'import.meta' outside a module - start: 6, end: 11
✖ 'import.meta' is the only valid meta property for import - start: 6, end: 11

```

