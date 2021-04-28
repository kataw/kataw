# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: l
> :: test: template tail
> :: case: async x => ok
## Input

`````js
`a ${async x => ok} b`.length
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
                "kind": 129,
                "member": {
                    "kind": 226,
                    "member": {
                        "kind": 16637,
                        "text": "",
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
                                    "kind": 271,
                                    "arrowToken": {
                                        "kind": 10,
                                        "flags": 768,
                                        "start": 12,
                                        "end": 15
                                    },
                                    "typeParameters": null,
                                    "parameters": [
                                        {
                                            "kind": 215,
                                            "ellipsisToken": null,
                                            "binding": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 768,
                                                "start": 10,
                                                "end": 12
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "flags": 256,
                                            "start": 5,
                                            "end": 12
                                        }
                                    ],
                                    "asyncToken": {
                                        "kind": 82031,
                                        "flags": 768,
                                        "start": 5,
                                        "end": 10
                                    },
                                    "returnType": null,
                                    "contents": {
                                        "kind": 134299649,
                                        "text": "ok",
                                        "rawText": "ok",
                                        "flags": 768,
                                        "start": 15,
                                        "end": 18
                                    },
                                    "flags": 2304,
                                    "start": 5,
                                    "end": 18
                                },
                                "flags": 256,
                                "start": 0,
                                "end": 18
                            }
                        ],
                        "tail": {
                            "kind": 458761,
                            "text": " b",
                            "rawText": " b",
                            "flags": 768,
                            "start": 18,
                            "end": 22
                        },
                        "flags": 256,
                        "start": 0,
                        "end": 22
                    },
                    "flags": 256,
                    "start": 0,
                    "end": 22
                },
                "expression": {
                    "kind": 134299649,
                    "text": "length",
                    "rawText": "length",
                    "flags": 768,
                    "start": 23,
                    "end": 29
                },
                "flags": 256,
                "start": 0,
                "end": 29
            },
            "flags": 128,
            "start": 0,
            "end": 29
        }
    ],
    "isModule": false,
    "text": "`a ${async x => ok} b`.length",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 29
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Expression expected - start: 0, end: 5

```

