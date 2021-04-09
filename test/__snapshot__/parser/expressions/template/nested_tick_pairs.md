# Kataw parser test case

## Input

`````js
`foo${`foo${bar}baz`}baz`
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
                            "rawText": "foo",
                            "text": "foo",
                            "expression": {
                                "kind": 226,
                                "member": {
                                    "kind": 253,
                                    "text": "",
                                    "autofix": 0,
                                    "flags": 12,
                                    "start": 6,
                                    "end": 6
                                },
                                "template": {
                                    "kind": 227,
                                    "spans": [
                                        {
                                            "kind": 228,
                                            "rawText": "foo",
                                            "text": "foo",
                                            "expression": {
                                                "kind": 81921,
                                                "value": "bar",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 12,
                                                "end": 15
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 6,
                                            "end": 15
                                        }
                                    ],
                                    "tail": {
                                        "kind": 458761,
                                        "rawText": "baz",
                                        "text": "baz",
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 15,
                                        "end": 20
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 6,
                                    "end": 20
                                },
                                "optional": false,
                                "autofix": 0,
                                "flags": 256,
                                "start": 6,
                                "end": 20
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 0,
                            "end": 20
                        }
                    ],
                    "tail": {
                        "kind": 458761,
                        "rawText": "baz",
                        "text": "baz",
                        "autofix": 0,
                        "flags": 256,
                        "start": 20,
                        "end": 25
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 0,
                    "end": 25
                },
                "optional": false,
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 25
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 25
        }
    ],
    "isModule": false,
    "text": "`foo${`foo${bar}baz`}baz`",
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
            "end": 6
        },
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 6,
            "end": 12
        }
    ],
    "start": 0,
    "end": 25
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

