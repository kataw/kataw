# Kataw parser test case

## Input

`````js
(false);

(false, true);
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 134,
                    "value": false,
                    "autofix": 0,
                    "flags": 768,
                    "start": 1,
                    "end": 6
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 7
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 8
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 132,
                    "expressions": [
                        {
                            "kind": 134,
                            "value": false,
                            "autofix": 0,
                            "flags": 768,
                            "start": 11,
                            "end": 16
                        },
                        {
                            "kind": 134,
                            "value": true,
                            "autofix": 0,
                            "flags": 768,
                            "start": 17,
                            "end": 22
                        }
                    ],
                    "autofix": 0,
                    "flags": 256,
                    "start": 8,
                    "end": 22
                },
                "autofix": 0,
                "flags": 256,
                "start": 8,
                "end": 23
            },
            "autofix": 0,
            "flags": 128,
            "start": 8,
            "end": 24
        }
    ],
    "isModule": false,
    "text": "(false);\n\n(false, true);",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 24
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

