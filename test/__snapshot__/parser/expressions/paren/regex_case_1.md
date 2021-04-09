# Kataw parser test case

## Input

`````js
([delete /a/.x]);
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
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
                                "kind": 126,
                                "operandToken": {
                                    "kind": 4259886,
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 2,
                                    "end": 8
                                },
                                "expression": {
                                    "kind": 129,
                                    "member": {
                                        "kind": 221,
                                        "text": "/a/",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 8,
                                        "end": 12
                                    },
                                    "expression": {
                                        "kind": 81921,
                                        "value": "x",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 13,
                                        "end": 14
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 8,
                                    "end": 14
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 2,
                                "end": 14
                            }
                        ],
                        "trailingComma": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 2,
                        "end": 14
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 1,
                    "end": 15
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 16
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 17
        }
    ],
    "isModule": false,
    "text": "([delete /a/.x]);",
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

