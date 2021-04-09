# Kataw parser test case

## Input

`````js
`${n
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
                    "kind": 253,
                    "text": "",
                    "autofix": 0,
                    "flags": 12,
                    "start": 0,
                    "end": 0
                },
                "template": {
                    "kind": 227,
                    "spans": [
                        {
                            "kind": 228,
                            "rawText": "",
                            "text": "",
                            "expression": {
                                "kind": 81921,
                                "value": "n",
                                "autofix": 0,
                                "flags": 768,
                                "start": 3,
                                "end": 4
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 0,
                            "end": 4
                        }
                    ],
                    "tail": {
                        "kind": 458761,
                        "rawText": "",
                        "text": "",
                        "autofix": 0,
                        "flags": 256,
                        "start": 4,
                        "end": 4
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 0,
                    "end": 4
                },
                "optional": false,
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 4
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 4
        }
    ],
    "isModule": false,
    "text": "`${n",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 0,
            "end": 3
        },
        {
            "kind": 2,
            "source": 0,
            "code": 1,
            "error": "Unexpected token.",
            "start": 4,
            "end": 4
        }
    ],
    "start": 0,
    "end": 4
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

