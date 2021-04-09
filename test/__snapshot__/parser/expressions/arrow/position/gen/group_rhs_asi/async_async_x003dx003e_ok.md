# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: i
> :: test: group rhs asi
> :: case: async async => ok
## Input

`````js
x *
(async async => ok)
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
                "kind": 198,
                "left": {
                    "kind": 81921,
                    "value": "x",
                    "autofix": 0,
                    "flags": 768,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 67143222,
                    "autofix": 0,
                    "flags": 0,
                    "start": 1,
                    "end": 3
                },
                "right": {
                    "kind": 121,
                    "expression": {
                        "kind": 271,
                        "typeParameters": null,
                        "parameters": [
                            {
                                "kind": 215,
                                "ellipsisToken": null,
                                "binding": {
                                    "kind": 81921,
                                    "value": "async",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 10,
                                    "end": 16
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": null,
                                "autofix": 0,
                                "flags": 256,
                                "start": 5,
                                "end": 16
                            }
                        ],
                        "asyncToken": {
                            "kind": 82031,
                            "autofix": 0,
                            "flags": 0,
                            "start": 5,
                            "end": 10
                        },
                        "returnType": null,
                        "contents": {
                            "kind": 81921,
                            "value": "ok",
                            "autofix": 0,
                            "flags": 768,
                            "start": 19,
                            "end": 22
                        },
                        "autofix": 0,
                        "flags": 2304,
                        "start": 5,
                        "end": 22
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 3,
                    "end": 23
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 23
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 23
        }
    ],
    "isModule": false,
    "text": "x *\n(async async => ok)",
    "fileName": "__root__",
    "autofix": 0,
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
- Path: i
> :: test: group rhs asi
> :: case: async async => ok
## Input

`````js
x *
(async async => ok)
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: i
> :: test: group rhs asi
> :: case: async async => ok
## Input

`````js
x *
(async async => ok)
`````
```

