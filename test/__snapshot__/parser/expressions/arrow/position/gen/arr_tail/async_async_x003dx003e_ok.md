# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: l
> :: test: arr tail
> :: case: async async => ok
## Input

`````js
[async async => ok].x
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
                "kind": 129,
                "member": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
                                "kind": 271,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 768,
                                    "start": 12,
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
                                    "flags": 768,
                                    "start": 1,
                                    "end": 6
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 134299649,
                                    "text": "ok",
                                    "rawText": "ok",
                                    "flags": 768,
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
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 768,
                    "start": 20,
                    "end": 21
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 21
            },
            "flags": 128,
            "start": 0,
            "end": 21
        }
    ],
    "isModule": false,
    "text": "[async async => ok].x",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 21
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: l
> :: test: arr tail
> :: case: async async => ok
## Input

`````js
[async async => ok].x
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: l
> :: test: arr tail
> :: case: async async => ok
## Input

`````js
[async async => ok].x
`````
```

