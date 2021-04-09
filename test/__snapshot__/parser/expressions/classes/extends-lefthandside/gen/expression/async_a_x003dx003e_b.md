# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: expression
> :: case: async a => b
## Input

`````js
(class B extends async a => b {})
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
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "name": {
                        "kind": 81921,
                        "value": "B",
                        "autofix": 0,
                        "flags": 768,
                        "start": 6,
                        "end": 8
                    },
                    "typeParameters": null,
                    "classHeritage": {
                        "kind": 279,
                        "expression": {
                            "kind": 271,
                            "typeParameters": null,
                            "parameters": [
                                {
                                    "kind": 215,
                                    "ellipsisToken": null,
                                    "binding": {
                                        "kind": 81921,
                                        "value": "a",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 22,
                                        "end": 24
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": null,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 16,
                                    "end": 24
                                }
                            ],
                            "asyncToken": {
                                "kind": 82031,
                                "autofix": 0,
                                "flags": 0,
                                "start": 16,
                                "end": 22
                            },
                            "returnType": null,
                            "contents": {
                                "kind": 81921,
                                "value": "b",
                                "autofix": 0,
                                "flags": 768,
                                "start": 27,
                                "end": 29
                            },
                            "autofix": 0,
                            "flags": 2304,
                            "start": 16,
                            "end": 29
                        },
                        "typeParameter": null,
                        "flags": 128,
                        "start": 16,
                        "end": 29
                    },
                    "members": {
                        "kind": 277,
                        "elements": [],
                        "flags": 256,
                        "start": 31,
                        "end": 32
                    },
                    "flags": 256,
                    "start": 1,
                    "end": 32
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 33
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 33
        }
    ],
    "isModule": false,
    "text": "(class B extends async a => b {})",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 33
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: expression
> :: case: async a => b
## Input

`````js
(class B extends async a => b {})
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: expression
> :: case: async a => b
## Input

`````js
(class B extends async a => b {})
`````
```

