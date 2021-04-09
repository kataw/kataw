# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: template
> :: case: async (x, y) => ok
## Input

`````js
`a ${async (x, y) => ok} b`
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
                            "rawText": "a ",
                            "text": "a ",
                            "expression": {
                                "kind": 131,
                                "expression": {
                                    "kind": 81921,
                                    "value": "async",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 5,
                                    "end": 10
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 81921,
                                            "value": "x",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 12,
                                            "end": 13
                                        },
                                        {
                                            "kind": 81921,
                                            "value": "y",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 14,
                                            "end": 16
                                        }
                                    ],
                                    "trailingComma": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 12,
                                    "end": 16
                                },
                                "flags": 256,
                                "start": 5,
                                "end": 17
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 0,
                            "end": 17
                        }
                    ],
                    "tail": {
                        "kind": 458761,
                        "rawText": " ok} b",
                        "text": " ok} b",
                        "autofix": 0,
                        "flags": 256,
                        "start": 17,
                        "end": 27
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 0,
                    "end": 27
                },
                "optional": false,
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 27
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 27
        }
    ],
    "isModule": false,
    "text": "`a ${async (x, y) => ok} b`",
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
            "end": 5
        }
    ],
    "start": 0,
    "end": 27
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: template
> :: case: async (x, y) => ok
## Input

`````js
`a ${async (x, y) => ok} b`
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: template
> :: case: async (x, y) => ok
## Input

`````js
`a ${async (x, y) => ok} b`
`````
```

