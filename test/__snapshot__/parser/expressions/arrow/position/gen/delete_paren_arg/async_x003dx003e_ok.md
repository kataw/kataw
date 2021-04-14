# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: g
> :: test: delete paren arg
> :: case: async => ok
## Input

`````js
delete (async => ok)
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
                "kind": 126,
                "operandToken": {
                    "kind": 4259886,
                    "flags": 768,
                    "start": 0,
                    "end": 6
                },
                "expression": {
                    "kind": 121,
                    "expression": {
                        "kind": 271,
                        "arrowToken": {
                            "kind": 10,
                            "flags": 768,
                            "start": 13,
                            "end": 16
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
                                    "start": 8,
                                    "end": 13
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": null,
                                "flags": 256,
                                "start": 8,
                                "end": 13
                            }
                        ],
                        "asyncToken": {
                            "kind": 82031,
                            "flags": 768,
                            "start": 8,
                            "end": 13
                        },
                        "returnType": null,
                        "contents": {
                            "kind": 81921,
                            "text": "ok",
                            "rawText": "ok",
                            "flags": 768,
                            "start": 16,
                            "end": 19
                        },
                        "flags": 2304,
                        "start": 8,
                        "end": 19
                    },
                    "flags": 256,
                    "start": 6,
                    "end": 20
                },
                "flags": 256,
                "start": 0,
                "end": 20
            },
            "flags": 128,
            "start": 0,
            "end": 20
        }
    ],
    "isModule": false,
    "text": "delete (async => ok)",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 20
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: g
> :: test: delete paren arg
> :: case: async => ok
## Input

`````js
delete (async => ok)
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: g
> :: test: delete paren arg
> :: case: async => ok
## Input

`````js
delete (async => ok)
`````
```

