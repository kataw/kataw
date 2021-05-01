# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: g
> :: test: call arg
> :: case: async => ok
## Input

`````js
foo(async => ok)
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
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "original": "foo",
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 96,
                    "start": 0,
                    "end": 3
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 0,
                                "start": 9,
                                "end": 12
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
                                        "start": 4,
                                        "end": 9
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": null,
                                    "flags": 32,
                                    "start": 4,
                                    "end": 9
                                }
                            ],
                            "asyncToken": {
                                "kind": 82031,
                                "flags": 64,
                                "start": 4,
                                "end": 9
                            },
                            "returnType": null,
                            "contents": {
                                "kind": 134299649,
                                "original": "ok",
                                "text": "ok",
                                "rawText": " ok",
                                "flags": 96,
                                "start": 12,
                                "end": 15
                            },
                            "flags": 32,
                            "start": 4,
                            "end": 15
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 4,
                    "end": 15
                },
                "flags": 32,
                "start": 0,
                "end": 16
            },
            "flags": 16,
            "start": 0,
            "end": 16
        }
    ],
    "isModule": false,
    "source": "foo(async => ok)",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 16
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

