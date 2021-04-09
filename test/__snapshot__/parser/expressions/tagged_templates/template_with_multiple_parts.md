# Kataw parser test case

## Input

`````js
foo`x${a}y${b}z`
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
                "kind": 226,
                "member": {
                    "kind": 81921,
                    "value": "foo",
                    "autofix": 0,
                    "flags": 768,
                    "start": 0,
                    "end": 3
                },
                "template": {
                    "kind": 227,
                    "spans": [
                        {
                            "kind": 228,
                            "rawText": "x",
                            "text": "x",
                            "expression": {
                                "kind": 81921,
                                "value": "a",
                                "autofix": 0,
                                "flags": 768,
                                "start": 7,
                                "end": 8
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 3,
                            "end": 8
                        },
                        {
                            "kind": 228,
                            "rawText": "y",
                            "text": "y",
                            "expression": {
                                "kind": 81921,
                                "value": "b",
                                "autofix": 0,
                                "flags": 768,
                                "start": 12,
                                "end": 13
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 8,
                            "end": 13
                        }
                    ],
                    "tail": {
                        "kind": 458761,
                        "rawText": "z",
                        "text": "z",
                        "autofix": 0,
                        "flags": 256,
                        "start": 13,
                        "end": 16
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 3,
                    "end": 16
                },
                "optional": false,
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 16
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 16
        }
    ],
    "isModule": false,
    "text": "foo`x${a}y${b}z`",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 16
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

