# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: arr
> :: case: async async => {}
## Input

`````js
[async async => {}]
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
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 12,
                                "start": 0,
                                "end": 15
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
                                        "start": 6,
                                        "end": 12
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": null,
                                    "flags": 256,
                                    "start": 1,
                                    "end": 12
                                }
                            ],
                            "asyncToken": {
                                "kind": 82031,
                                "flags": 1,
                                "start": 512,
                                "end": 6
                            },
                            "returnType": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "multiline": false,
                                    "flags": 256,
                                    "start": 17,
                                    "end": 17
                                },
                                "flags": 256,
                                "start": 15,
                                "end": 18
                            },
                            "flags": 2304,
                            "start": 1,
                            "end": 18
                        }
                    ],
                    "trailingComma": false,
                    "flags": 256,
                    "start": 1,
                    "end": 18
                },
                "flags": 256,
                "start": 0,
                "end": 19
            },
            "flags": 128,
            "start": 0,
            "end": 19
        }
    ],
    "isModule": false,
    "text": "[async async => {}]",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 19
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

