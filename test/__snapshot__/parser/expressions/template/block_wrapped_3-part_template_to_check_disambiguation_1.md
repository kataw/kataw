# Kataw parser test case

## Input

`````js
{`foo ${a} and ${b} and ${c} baz`}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 249,
            "block": {
                "kind": 124,
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
                                "start": 1,
                                "end": 1
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
                                            "start": 8,
                                            "end": 9
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 1,
                                        "end": 9
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
                                            "start": 17,
                                            "end": 18
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 9,
                                        "end": 18
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
                                            "start": 26,
                                            "end": 27
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 18,
                                        "end": 27
                                    }
                                ],
                                "tail": {
                                    "kind": 458761,
                                    "rawText": " baz",
                                    "text": " baz",
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 27,
                                    "end": 33
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 1,
                                "end": 33
                            },
                            "optional": false,
                            "autofix": 0,
                            "flags": 256,
                            "start": 1,
                            "end": 33
                        },
                        "autofix": 0,
                        "flags": 128,
                        "start": 1,
                        "end": 33
                    }
                ],
                "multiLine": false,
                "autofix": 0,
                "flags": 128,
                "start": 1,
                "end": 33
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 34
        }
    ],
    "isModule": false,
    "text": "{`foo ${a} and ${b} and ${c} baz`}",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 1,
            "end": 8
        }
    ],
    "start": 0,
    "end": 34
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

