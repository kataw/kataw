# Kataw parser test case

## Input

`````js
 while (x) { break; }
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
                "value": "x",
                "autofix": 0,
                "flags": 768,
                "start": 8,
                "end": 9
            },
            "statement": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [
                        {
                            "kind": 150,
                            "label": null,
                            "autofix": 0,
                            "flags": 128,
                            "start": 12,
                            "end": 19
                        }
                    ],
                    "multiLine": false,
                    "autofix": 0,
                    "flags": 128,
                    "start": 12,
                    "end": 19
                },
                "autofix": 0,
                "flags": 128,
                "start": 10,
                "end": 21
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 21
        }
    ],
    "isModule": false,
    "text": " while (x) { break; }",
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

