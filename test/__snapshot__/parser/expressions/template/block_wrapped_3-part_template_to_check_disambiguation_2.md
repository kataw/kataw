# Kataw parser test case

## Input

`````js
{`foo ${a} and ${b} and ${`w ${d} x ${e} y ${f} z`} baz`}
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
                                            "kind": 226,
                                            "member": {
                                                "kind": 253,
                                                "text": "",
                                                "autofix": 0,
                                                "flags": 12,
                                                "start": 26,
                                                "end": 26
                                            },
                                            "template": {
                                                "kind": 227,
                                                "spans": [
                                                    {
                                                        "kind": 228,
                                                        "rawText": "w ",
                                                        "text": "w ",
                                                        "expression": {
                                                            "kind": 81921,
                                                            "value": "d",
                                                            "autofix": 0,
                                                            "flags": 768,
                                                            "start": 31,
                                                            "end": 32
                                                        },
                                                        "autofix": 0,
                                                        "flags": 256,
                                                        "start": 26,
                                                        "end": 32
                                                    },
                                                    {
                                                        "kind": 228,
                                                        "rawText": " x ",
                                                        "text": " x ",
                                                        "expression": {
                                                            "kind": 81921,
                                                            "value": "e",
                                                            "autofix": 0,
                                                            "flags": 768,
                                                            "start": 38,
                                                            "end": 39
                                                        },
                                                        "autofix": 0,
                                                        "flags": 256,
                                                        "start": 32,
                                                        "end": 39
                                                    },
                                                    {
                                                        "kind": 228,
                                                        "rawText": " y ",
                                                        "text": " y ",
                                                        "expression": {
                                                            "kind": 81921,
                                                            "value": "f",
                                                            "autofix": 0,
                                                            "flags": 768,
                                                            "start": 45,
                                                            "end": 46
                                                        },
                                                        "autofix": 0,
                                                        "flags": 256,
                                                        "start": 39,
                                                        "end": 46
                                                    }
                                                ],
                                                "tail": {
                                                    "kind": 458761,
                                                    "rawText": " z",
                                                    "text": " z",
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 46,
                                                    "end": 50
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 26,
                                                "end": 50
                                            },
                                            "optional": false,
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 26,
                                            "end": 50
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 18,
                                        "end": 50
                                    }
                                ],
                                "tail": {
                                    "kind": 458761,
                                    "rawText": " baz",
                                    "text": " baz",
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 50,
                                    "end": 56
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 1,
                                "end": 56
                            },
                            "optional": false,
                            "autofix": 0,
                            "flags": 256,
                            "start": 1,
                            "end": 56
                        },
                        "autofix": 0,
                        "flags": 128,
                        "start": 1,
                        "end": 56
                    }
                ],
                "multiLine": false,
                "autofix": 0,
                "flags": 128,
                "start": 1,
                "end": 56
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 57
        }
    ],
    "isModule": false,
    "text": "{`foo ${a} and ${b} and ${`w ${d} x ${e} y ${f} z`} baz`}",
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
        },
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 26,
            "end": 31
        }
    ],
    "start": 0,
    "end": 57
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

