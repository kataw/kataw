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
                            "rawText": "foo",
                            "text": "foo",
                            "expression": {
                                "kind": 226,
                                "member": {
                                    "kind": 16637,
                                    "text": "",
                                    "flags": 68,
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
                                                "kind": 134299649,
                                                "text": "bar",
                                                "rawText": "bar",
                                                "flags": 96,
                                                "start": 12,
                                                "end": 15
                                            },
                                            "flags": 32,
                                            "start": 6,
                                            "end": 15
                                        }
                                    ],
                                    "tail": {
                                        "kind": 458761,
                                        "text": "baz",
                                        "rawText": "baz",
                                        "flags": 96,
                                        "start": 15,
                                        "end": 20
                                    },
                                    "flags": 32,
                                    "start": 6,
                                    "end": 20
                                },
                                "flags": 32,
                                "start": 6,
                                "end": 20
                            },
                            "flags": 32,
                            "start": 0,
                            "end": 20
                        }
                    ],
                    "tail": {
                        "kind": 458761,
                        "text": "baz",
                        "rawText": "baz",
                        "flags": 96,
                        "start": 20,
                        "end": 25
                    },
                    "flags": 32,
                    "start": 0,
                    "end": 25
                },
                "flags": 32,
                "start": 0,
                "end": 25
            },
            "flags": 16,
            "start": 0,
            "end": 25
        }
    ],
    "isModule": false,
    "text": "`foo${`foo${bar}baz`}baz`",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 25
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Expression expected - start: 0, end: 6
✖ Expression expected - start: 6, end: 12

```

