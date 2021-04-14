# Kataw parser test case

## Input

`````js
eval: x;
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 163,
            "label": {
                "kind": 81921,
                "text": "eval",
                "rawText": "eval",
                "flags": 768,
                "start": 0,
                "end": 4
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 81921,
                    "text": "x",
                    "rawText": "x",
                    "flags": 768,
                    "start": 5,
                    "end": 7
                },
                "flags": 128,
                "start": 5,
                "end": 8
            },
            "flags": 128,
            "start": 0,
            "end": 8
        }
    ],
    "isModule": false,
    "text": "eval: x;",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 8
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

