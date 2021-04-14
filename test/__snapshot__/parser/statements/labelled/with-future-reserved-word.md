# Kataw parser test case

## Input

`````js
interface: x;
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
                "text": "interface",
                "rawText": "interface",
                "flags": 768,
                "start": 0,
                "end": 9
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 81921,
                    "text": "x",
                    "rawText": "x",
                    "flags": 768,
                    "start": 10,
                    "end": 12
                },
                "flags": 128,
                "start": 10,
                "end": 13
            },
            "flags": 128,
            "start": 0,
            "end": 13
        }
    ],
    "isModule": false,
    "text": "interface: x;",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 13
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

