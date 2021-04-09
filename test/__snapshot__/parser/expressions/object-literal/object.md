# Kataw parser test case

## Input

`````js
({790: this})
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
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 219,
                                "left": {
                                    "kind": 135,
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 6,
                                    "end": 11
                                },
                                "right": {
                                    "kind": 81921,
                                    "value": 790,
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 2,
                                    "end": 5
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 2,
                                "end": 11
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "autofix": 0,
                        "flags": 0,
                        "start": 2,
                        "end": 11
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 1,
                    "end": 12
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 13
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 13
        }
    ],
    "isModule": false,
    "text": "({790: this})",
    "fileName": "__root__",
    "autofix": 0,
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

