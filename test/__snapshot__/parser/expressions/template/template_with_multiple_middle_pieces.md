# Kataw parser test case

## Input

`````js
`foo ${a} and ${b} and ${c} baz`
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
                            "rawText": "foo ",
                            "text": "foo ",
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
                            "start": 0,
                            "end": 8
                        },
                        {
                            "kind": 228,
                            "rawText": " and ",
                            "text": " and ",
                            "expression": {
                                "kind": 81921,
                                "value": "b",
                                "autofix": 0,
                                "flags": 768,
                                "start": 16,
                                "end": 17
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 8,
                            "end": 17
                        },
                        {
                            "kind": 228,
                            "rawText": " and ",
                            "text": " and ",
                            "expression": {
                                "kind": 81921,
                                "value": "c",
                                "autofix": 0,
                                "flags": 768,
                                "start": 25,
                                "end": 26
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 17,
                            "end": 26
                        }
                    ],
                    "tail": {
                        "kind": 458761,
                        "rawText": " baz",
                        "text": " baz",
                        "autofix": 0,
                        "flags": 256,
                        "start": 26,
                        "end": 32
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 0,
                    "end": 32
                },
                "optional": false,
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 32
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 32
        }
    ],
    "isModule": false,
    "text": "`foo ${a} and ${b} and ${c} baz`",
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
            "end": 7
        }
    ],
    "start": 0,
    "end": 32
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

