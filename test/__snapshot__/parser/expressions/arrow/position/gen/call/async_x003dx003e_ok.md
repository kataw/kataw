# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: l
> :: test: call
> :: case: async => ok
## Input

`````js
async => ok()
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
                    "flags": 0,
                    "start": 5,
                    "end": 8
                },
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 215,
                        "ellipsisToken": null,
                        "binding": {
                            "kind": 134299649,
                            "original": "async",
                            "text": "async",
                            "rawText": "async",
                            "flags": 96,
                            "start": 0,
                            "end": 5
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 32,
                        "start": 0,
                        "end": 5
                    }
                ],
                "asyncToken": {
                    "kind": 82031,
                    "flags": 64,
                    "start": 0,
                    "end": 5
                },
                "returnType": null,
                "contents": {
                    "kind": 131,
                    "expression": {
                        "kind": 134299649,
                        "original": "ok",
                        "text": "ok",
                        "rawText": " ok",
                        "flags": 96,
                        "start": 8,
                        "end": 11
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 12,
                        "end": 12
                    },
                    "flags": 32,
                    "start": 8,
                    "end": 13
                },
                "flags": 288,
                "start": 0,
                "end": 13
            },
            "flags": 16,
            "start": 0,
            "end": 13
        }
    ],
    "isModule": false,
    "source": "async => ok()",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 13
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

