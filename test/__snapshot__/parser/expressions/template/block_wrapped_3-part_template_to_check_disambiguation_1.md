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
    "directives": [],
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
                                "kind": 16637,
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
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 768,
                                            "start": 8,
                                            "end": 9
                                        },
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
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 768,
                                            "start": 17,
                                            "end": 18
                                        },
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
                                            "text": "c",
                                            "rawText": "c",
                                            "flags": 768,
                                            "start": 26,
                                            "end": 27
                                        },
                                        "flags": 256,
                                        "start": 18,
                                        "end": 27
                                    }
                                ],
                                "tail": {
                                    "kind": 458761,
                                    "text": " baz",
                                    "rawText": " baz",
                                    "flags": 768,
                                    "start": 27,
                                    "end": 33
                                },
                                "flags": 256,
                                "start": 1,
                                "end": 33
                            },
                            "flags": 256,
                            "start": 1,
                            "end": 33
                        },
                        "flags": 128,
                        "start": 1,
                        "end": 33
                    }
                ],
                "multiLine": false,
                "flags": 128,
                "start": 1,
                "end": 33
            },
            "flags": 128,
            "start": 0,
            "end": 34
        }
    ],
    "isModule": false,
    "text": "{`foo ${a} and ${b} and ${c} baz`}",
    "fileName": "__root__",
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

