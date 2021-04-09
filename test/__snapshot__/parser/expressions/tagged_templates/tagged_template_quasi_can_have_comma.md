# Kataw parser test case

## Input

`````js
y`${y,0}`
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
                    "value": "y",
                    "autofix": 0,
                    "flags": 768,
                    "start": 0,
                    "end": 1
                },
                "template": {
                    "kind": 227,
                    "spans": [
                        {
                            "kind": 228,
                            "rawText": "",
                            "text": "",
                            "expression": {
                                "kind": 132,
                                "expressions": [
                                    {
                                        "kind": 81921,
                                        "value": "y",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 4,
                                        "end": 5
                                    },
                                    {
                                        "kind": 81921,
                                        "value": 0,
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 6,
                                        "end": 7
                                    }
                                ],
                                "autofix": 0,
                                "flags": 256,
                                "start": 4,
                                "end": 7
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 1,
                            "end": 7
                        }
                    ],
                    "tail": {
                        "kind": 458761,
                        "rawText": "",
                        "text": "",
                        "autofix": 0,
                        "flags": 256,
                        "start": 7,
                        "end": 9
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 1,
                    "end": 9
                },
                "optional": false,
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 9
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 9
        }
    ],
    "isModule": false,
    "text": "y`${y,0}`",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 9
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

