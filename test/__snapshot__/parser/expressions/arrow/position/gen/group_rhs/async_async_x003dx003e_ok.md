# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: group rhs
> :: case: async async => ok
## Input

`````js
x * (async async => ok)
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
                "kind": 198,
                "left": {
                    "kind": 81921,
                    "text": "x",
                    "rawText": "x",
                    "flags": 768,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 67143222,
                    "flags": 768,
                    "start": 1,
                    "end": 3
                },
                "right": {
                    "kind": 121,
                    "expression": {
                        "kind": 271,
                        "arrowToken": {
                            "kind": 10,
                            "flags": 768,
                            "start": 16,
                            "end": 19
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
                                    "start": 10,
                                    "end": 16
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": null,
                                "flags": 256,
                                "start": 5,
                                "end": 16
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
                            "kind": 81921,
                            "text": "ok",
                            "rawText": "ok",
                            "flags": 768,
                            "start": 19,
                            "end": 22
                        },
                        "flags": 2304,
                        "start": 5,
                        "end": 22
                    },
                    "flags": 256,
                    "start": 3,
                    "end": 23
                },
                "flags": 256,
                "start": 0,
                "end": 23
            },
            "flags": 128,
            "start": 0,
            "end": 23
        }
    ],
    "isModule": false,
    "text": "x * (async async => ok)",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 23
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: group rhs
> :: case: async async => ok
## Input

`````js
x * (async async => ok)
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: group rhs
> :: case: async async => ok
## Input

`````js
x * (async async => ok)
`````
```

