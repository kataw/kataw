# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: double
> :: case: async async => ok
## Input

`````js
async async => ok async async => ok
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
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 11,
                    "start": 0,
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
                    "flags": 0,
                    "start": 512,
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
            "flags": 128,
            "start": 0,
            "end": 17
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 29,
                    "start": 0,
                    "end": 32
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
                            "start": 23,
                            "end": 29
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 256,
                        "start": 17,
                        "end": 29
                    }
                ],
                "asyncToken": {
                    "kind": 82031,
                    "flags": 17,
                    "start": 512,
                    "end": 23
                },
                "returnType": null,
                "contents": {
                    "kind": 134299649,
                    "text": "ok",
                    "rawText": "ok",
                    "flags": 768,
                    "start": 32,
                    "end": 35
                },
                "flags": 2304,
                "start": 17,
                "end": 35
            },
            "flags": 128,
            "start": 17,
            "end": 35
        }
    ],
    "isModule": false,
    "text": "async async => ok async async => ok",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 35
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

