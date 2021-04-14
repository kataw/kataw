# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: l
> :: test: template tail
> :: case: async => ok
## Input

`````js
`a ${async => ok} b`.length
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
                                    "kind": 271,
                                    "arrowToken": {
                                        "kind": 10,
                                        "flags": 768,
                                        "start": 10,
                                        "end": 13
                                    },
                                    "typeParameters": null,
                                    "parameters": [
                                        {
                                            "kind": 215,
                                            "ellipsisToken": null,
                                            "binding": {
                                                "kind": 134299649,
                                                "text": "async",
                                                "rawText": "async",
                                                "flags": 768,
                                                "start": 5,
                                                "end": 10
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "flags": 256,
                                            "start": 5,
                                            "end": 10
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
                                        "start": 13,
                                        "end": 16
                                    },
                                    "flags": 2304,
                                    "start": 5,
                                    "end": 16
                                },
                                "flags": 256,
                                "start": 0,
                                "end": 16
                            }
                        ],
                        "tail": {
                            "kind": 458761,
                            "text": " b",
                            "rawText": " b",
                            "flags": 768,
                            "start": 16,
                            "end": 20
                        },
                        "flags": 256,
                        "start": 0,
                        "end": 20
                    },
                    "flags": 256,
                    "start": 0,
                    "end": 20
                },
                "expression": {
                    "kind": 134299649,
                    "text": "length",
                    "rawText": "length",
                    "flags": 768,
                    "start": 21,
                    "end": 27
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 27
            },
            "flags": 128,
            "start": 0,
            "end": 27
        }
    ],
    "isModule": false,
    "text": "`a ${async => ok} b`.length",
    "fileName": "__root__",
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
- Path: l
> :: test: template tail
> :: case: async => ok
## Input

`````js
`a ${async => ok} b`.length
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: l
> :: test: template tail
> :: case: async => ok
## Input

`````js
`a ${async => ok} b`.length
`````
```

