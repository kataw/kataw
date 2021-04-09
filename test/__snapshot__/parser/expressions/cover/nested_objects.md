# Kataw parser test case

## Input

`````js
({ident: {x: y}})
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
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 81921,
                                                    "value": "y",
                                                    "autofix": 0,
                                                    "flags": 768,
                                                    "start": 12,
                                                    "end": 14
                                                },
                                                "right": {
                                                    "kind": 81921,
                                                    "value": "x",
                                                    "autofix": 0,
                                                    "flags": 768,
                                                    "start": 10,
                                                    "end": 11
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 10,
                                                "end": 14
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": false,
                                        "autofix": 0,
                                        "flags": 0,
                                        "start": 10,
                                        "end": 14
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 8,
                                    "end": 15
                                },
                                "right": {
                                    "kind": 81921,
                                    "value": "ident",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 2,
                                    "end": 7
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 2,
                                "end": 15
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "autofix": 0,
                        "flags": 0,
                        "start": 2,
                        "end": 15
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 1,
                    "end": 16
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 17
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 17
        }
    ],
    "isModule": false,
    "text": "({ident: {x: y}})",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 17
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

