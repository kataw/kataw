# Kataw parser test case

## Input

`````js
import.call
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
                "kind": 207,
                "importKeyword": {
                    "kind": 37814364,
                    "flags": 768,
                    "start": 0,
                    "end": 6
                },
                "flags": 768,
                "start": 6,
                "end": 11
            },
            "flags": 128,
            "start": 6,
            "end": 11
        }
    ],
    "isModule": false,
    "text": "import.call",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 11
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2716}@ 'import.meta' must not contain escaped characters - start: 7, end: 11
@{x2716}@ Cannot use 'import.meta' outside a module - start: 11, end: 11

```

