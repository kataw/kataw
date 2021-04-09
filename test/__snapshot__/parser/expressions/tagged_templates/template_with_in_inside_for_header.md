# Kataw parser test case

## Input

`````js
for(t`${x in y}`;;);
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 165,
            "initializer": {
                "kind": 226,
                "member": {
                    "kind": 81921,
                    "value": "t",
                    "autofix": 0,
                    "flags": 768,
                    "start": 4,
                    "end": 5
                },
                "template": {
                    "kind": 227,
                    "spans": [
                        {
                            "kind": 228,
                            "rawText": "",
                            "text": "",
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 81921,
                                    "value": "x",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 8,
                                    "end": 9
                                },
                                "operatorToken": {
                                    "kind": 21006388,
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 9,
                                    "end": 12
                                },
                                "right": {
                                    "kind": 81921,
                                    "value": "y",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 12,
                                    "end": 14
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 8,
                                "end": 14
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 5,
                            "end": 14
                        }
                    ],
                    "tail": {
                        "kind": 458761,
                        "rawText": "",
                        "text": "",
                        "autofix": 0,
                        "flags": 256,
                        "start": 14,
                        "end": 16
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 5,
                    "end": 16
                },
                "optional": false,
                "autofix": 0,
                "flags": 256,
                "start": 4,
                "end": 16
            },
            "condition": null,
            "incrementor": null,
            "statement": {
                "kind": 168,
                "autofix": 0,
                "flags": 128,
                "start": 19,
                "end": 20
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 20
        }
    ],
    "isModule": false,
    "text": "for(t`${x in y}`;;);",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 20
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

