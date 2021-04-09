# Kataw parser test case

## Input

`````js
({}.length) = z
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
                "kind": 125,
                "left": {
                    "kind": 121,
                    "expression": {
                        "kind": 129,
                        "member": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [],
                                "trailingComma": false,
                                "multiline": false,
                                "autofix": 0,
                                "flags": 0,
                                "start": 2,
                                "end": 2
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 1,
                            "end": 3
                        },
                        "expression": {
                            "kind": 81921,
                            "value": "length",
                            "autofix": 0,
                            "flags": 768,
                            "start": 4,
                            "end": 10
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 0,
                        "end": 10
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 0,
                    "end": 11
                },
                "operatorToken": {
                    "kind": 81921,
                    "autofix": 0,
                    "flags": 0,
                    "start": 0,
                    "end": 13
                },
                "right": {
                    "kind": 81921,
                    "value": "z",
                    "autofix": 0,
                    "flags": 768,
                    "start": 13,
                    "end": 15
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 15
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 15
        }
    ],
    "isModule": false,
    "text": "({}.length) = z",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 15
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

