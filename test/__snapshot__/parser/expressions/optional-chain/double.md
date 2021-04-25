# Kataw parser test case

## Input

`````js
a?.?.b
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
                "kind": 205,
                "member": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 768,
                    "start": 0,
                    "end": 1
                },
                "chain": {
                    "kind": 206,
                    "chain": {
                        "kind": 226,
                        "member": null,
                        "template": {
                            "kind": 227,
                            "spans": [
                                {
                                    "kind": 228,
                                    "rawText": "a",
                                    "text": "a",
                                    "expression": {
                                        "kind": 205,
                                        "member": {
                                            "kind": 16637,
                                            "text": "",
                                            "autofix": 0,
                                            "flags": 12,
                                            "start": 3,
                                            "end": 3
                                        },
                                        "chain": {
                                            "kind": 206,
                                            "chain": {
                                                "kind": 202,
                                                "chain": null,
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "b",
                                                    "rawText": "b",
                                                    "flags": 768,
                                                    "start": 5,
                                                    "end": 6
                                                },
                                                "flags": 256,
                                                "start": 5,
                                                "end": 6
                                            },
                                            "flags": 256,
                                            "start": 5,
                                            "end": 6
                                        },
                                        "flags": 256,
                                        "start": 3,
                                        "end": 6
                                    },
                                    "flags": 256,
                                    "start": 3,
                                    "end": 6
                                }
                            ],
                            "tail": {
                                "kind": 458761,
                                "text": "",
                                "rawText": "b",
                                "flags": 768,
                                "start": 6,
                                "end": 6
                            },
                            "flags": 256,
                            "start": 3,
                            "end": 6
                        },
                        "flags": 256,
                        "start": 3,
                        "end": 6
                    },
                    "flags": 256,
                    "start": 3,
                    "end": 6
                },
                "flags": 256,
                "start": 0,
                "end": 6
            },
            "flags": 128,
            "start": 0,
            "end": 6
        }
    ],
    "isModule": false,
    "text": "a?.?.b",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 6
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2716}@ Tagged template expressions are not permitted in an optional chain. - start: 3, end: 5
@{x2716}@ Unexpected token. - start: 3, end: 5
@{x2716}@ Expression expected - start: 3, end: 5
@{x2716}@ Unterminated template literal - start: 6, end: 6

```

