# Kataw parser test case

## Input

`````js
while(z) continue foo
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 154,
            "expression": {
                "kind": 81921,
                "value": "z",
                "autofix": 0,
                "flags": 768,
                "start": 6,
                "end": 7
            },
            "statement": {
                "kind": 172,
                "label": {
                    "kind": 81921,
                    "value": "foo",
                    "autofix": 0,
                    "flags": 768,
                    "start": 17,
                    "end": 21
                },
                "autofix": 0,
                "flags": 128,
                "start": 8,
                "end": 21
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 21
        }
    ],
    "isModule": false,
    "text": "while(z) continue foo",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 21
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

