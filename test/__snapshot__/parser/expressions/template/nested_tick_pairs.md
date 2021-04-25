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
                                    "kind": 16637,
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
                                                "kind": 134299649,
                                                "text": "bar",
                                                "rawText": "bar",
                                                "flags": 768,
                                                "start": 12,
                                                "end": 15
                                            },
                                            "flags": 256,
                                            "start": 6,
                                            "end": 15
                                        }
                                    ],
                                    "tail": {
                                        "kind": 458761,
                                        "text": "baz",
                                        "rawText": "baz",
                                        "flags": 768,
                                        "start": 15,
                                        "end": 20
                                    },
                                    "flags": 256,
                                    "start": 6,
                                    "end": 20
                                },
                                "flags": 256,
                                "start": 6,
                                "end": 20
                            },
                            "flags": 256,
                            "start": 0,
                            "end": 20
                        }
                    ],
                    "tail": {
                        "kind": 458761,
                        "text": "baz",
                        "rawText": "baz",
                        "flags": 768,
                        "start": 20,
                        "end": 25
                    },
                    "flags": 256,
                    "start": 0,
                    "end": 25
                },
                "flags": 256,
                "start": 0,
                "end": 25
            },
            "flags": 128,
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
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2716}@ Expression expected - start: 0, end: 6
@{x2716}@ Expression expected - start: 6, end: 12

```

