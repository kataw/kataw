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
                "chainToken": {
                    "kind": 393240,
                    "flags": 0,
                    "start": 1,
                    "end": 3
                },
                "member": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
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
                                    "kind": 65764,
                                    "rawText": "a",
                                    "text": "a",
                                    "expression": {
                                        "kind": 205,
                                        "chainToken": {
                                            "kind": 393240,
                                            "flags": 0,
                                            "start": 3,
                                            "end": 5
                                        },
                                        "member": {
                                            "kind": 16637,
                                            "text": "",
                                            "flags": 68,
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
                                                    "flags": 96,
                                                    "start": 5,
                                                    "end": 6
                                                },
                                                "flags": 32,
                                                "start": 5,
                                                "end": 6
                                            },
                                            "flags": 32,
                                            "start": 5,
                                            "end": 6
                                        },
                                        "flags": 32,
                                        "start": 3,
                                        "end": 6
                                    },
                                    "flags": 32,
                                    "start": 3,
                                    "end": 6
                                }
                            ],
                            "tail": {
                                "kind": 458761,
                                "text": "",
                                "rawText": "b",
                                "flags": 96,
                                "start": 6,
                                "end": 6
                            },
                            "flags": 32,
                            "start": 3,
                            "end": 6
                        },
                        "flags": 32,
                        "start": 3,
                        "end": 6
                    },
                    "flags": 32,
                    "start": 3,
                    "end": 6
                },
                "flags": 32,
                "start": 0,
                "end": 6
            },
            "flags": 16,
            "start": 0,
            "end": 6
        }
    ],
    "isModule": false,
    "source": "a?.?.b",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 6
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Tagged template expressions are not permitted in an optional chain. - start: 3, end: 5
✖ Expression expected - start: 3, end: 5
✖ Unterminated template literal - start: 6, end: 6

```

