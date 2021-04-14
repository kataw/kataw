# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: l
> :: test: obj tail
> :: case: async async => ok
## Input

`````js
x = {arrow: async async => ok}.y
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
                "kind": 125,
                "left": {
                    "kind": 81921,
                    "text": "x",
                    "rawText": "x",
                    "flags": 768,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 768,
                    "start": 1,
                    "end": 3
                },
                "right": {
                    "kind": 129,
                    "member": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 219,
                                    "left": {
                                        "kind": 271,
                                        "arrowToken": {
                                            "kind": 10,
                                            "flags": 768,
                                            "start": 23,
                                            "end": 26
                                        },
                                        "typeParameters": null,
                                        "parameters": [
                                            {
                                                "kind": 215,
                                                "ellipsisToken": null,
                                                "binding": {
                                                    "kind": 81921,
                                                    "text": "async",
                                                    "rawText": "async",
                                                    "flags": 768,
                                                    "start": 17,
                                                    "end": 23
                                                },
                                                "optionalToken": null,
                                                "type": null,
                                                "initializer": null,
                                                "flags": 256,
                                                "start": 11,
                                                "end": 23
                                            }
                                        ],
                                        "asyncToken": {
                                            "kind": 82031,
                                            "flags": 768,
                                            "start": 11,
                                            "end": 17
                                        },
                                        "returnType": null,
                                        "contents": {
                                            "kind": 81921,
                                            "text": "ok",
                                            "rawText": "ok",
                                            "flags": 768,
                                            "start": 26,
                                            "end": 29
                                        },
                                        "flags": 2304,
                                        "start": 11,
                                        "end": 29
                                    },
                                    "right": {
                                        "kind": 81921,
                                        "text": "arrow",
                                        "rawText": "arrow",
                                        "flags": 768,
                                        "start": 5,
                                        "end": 10
                                    },
                                    "flags": 256,
                                    "start": 5,
                                    "end": 29
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "start": 5,
                            "end": 29
                        },
                        "flags": 256,
                        "start": 3,
                        "end": 30
                    },
                    "expression": {
                        "kind": 81921,
                        "text": "y",
                        "rawText": "y",
                        "flags": 768,
                        "start": 31,
                        "end": 32
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 3,
                    "end": 32
                },
                "flags": 256,
                "start": 0,
                "end": 32
            },
            "flags": 128,
            "start": 0,
            "end": 32
        }
    ],
    "isModule": false,
    "text": "x = {arrow: async async => ok}.y",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 32
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: l
> :: test: obj tail
> :: case: async async => ok
## Input

`````js
x = {arrow: async async => ok}.y
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: l
> :: test: obj tail
> :: case: async async => ok
## Input

`````js
x = {arrow: async async => ok}.y
`````
```

