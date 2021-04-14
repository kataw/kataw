# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: comma lhs
> :: case: async async => ok
## Input

`````js
async async => ok, a
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
                "kind": 132,
                "expressions": [
                    {
                        "kind": 271,
                        "arrowToken": {
                            "kind": 10,
                            "flags": 768,
                            "start": 11,
                            "end": 14
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
                                    "end": 11
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": null,
                                "flags": 256,
                                "start": 0,
                                "end": 11
                            }
                        ],
                        "asyncToken": {
                            "kind": 82031,
                            "flags": 768,
                            "start": 0,
                            "end": 5
                        },
                        "returnType": null,
                        "contents": {
                            "kind": 134299649,
                            "text": "ok",
                            "rawText": "ok",
                            "flags": 768,
                            "start": 14,
                            "end": 17
                        },
                        "flags": 2304,
                        "start": 0,
                        "end": 17
                    },
                    {
                        "kind": 134299649,
                        "text": "a",
                        "rawText": "a",
                        "flags": 768,
                        "start": 18,
                        "end": 20
                    }
                ],
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
    "text": "async async => ok, a",
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
- Path: s
> :: test: comma lhs
> :: case: async async => ok
## Input

`````js
async async => ok, a
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: comma lhs
> :: case: async async => ok
## Input

`````js
async async => ok, a
`````
```

