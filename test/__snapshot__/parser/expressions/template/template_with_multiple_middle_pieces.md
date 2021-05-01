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
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 226,
                "member": {
                    "kind": 16637,
                    "text": "",
                    "flags": 68,
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
                                "kind": 134299649,
                                "original": "a",
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "start": 7,
                                "end": 8
                            },
                            "flags": 32,
                            "start": 0,
                            "end": 8
                        },
                        {
                            "kind": 228,
                            "rawText": " and ",
                            "text": " and ",
                            "expression": {
                                "kind": 134299649,
                                "original": "b",
                                "text": "b",
                                "rawText": "b",
                                "flags": 96,
                                "start": 16,
                                "end": 17
                            },
                            "flags": 32,
                            "start": 8,
                            "end": 17
                        },
                        {
                            "kind": 228,
                            "rawText": " and ",
                            "text": " and ",
                            "expression": {
                                "kind": 134299649,
                                "original": "c",
                                "text": "c",
                                "rawText": "c",
                                "flags": 96,
                                "start": 25,
                                "end": 26
                            },
                            "flags": 32,
                            "start": 17,
                            "end": 26
                        }
                    ],
                    "tail": {
                        "kind": 458761,
                        "text": " baz",
                        "rawText": " baz",
                        "flags": 96,
                        "start": 26,
                        "end": 32
                    },
                    "flags": 32,
                    "start": 0,
                    "end": 32
                },
                "flags": 32,
                "start": 0,
                "end": 32
            },
            "flags": 16,
            "start": 0,
            "end": 32
        }
    ],
    "isModule": false,
    "source": "`foo ${a} and ${b} and ${c} baz`",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 32
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Expression expected - start: 0, end: 7

```

