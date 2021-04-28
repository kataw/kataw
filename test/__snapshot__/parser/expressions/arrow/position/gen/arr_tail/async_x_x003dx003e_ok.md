# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: l
> :: test: arr tail
> :: case: async x => ok
## Input

`````js
[async x => ok].x
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
                                    "flags": 8,
                                    "start": 0,
                                    "end": 11
                                },
                                "typeParameters": null,
                                "parameters": [
                                    {
                                        "kind": 215,
                                        "ellipsisToken": null,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 768,
                                            "start": 6,
                                            "end": 8
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": null,
                                        "flags": 256,
                                        "start": 1,
                                        "end": 8
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
                                    "kind": 134299649,
                                    "text": "ok",
                                    "rawText": "ok",
                                    "flags": 768,
                                    "start": 11,
                                    "end": 14
                                },
                                "flags": 2304,
                                "start": 1,
                                "end": 14
                            }
                        ],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 1,
                        "end": 14
                    },
                    "flags": 256,
                    "start": 0,
                    "end": 15
                },
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 768,
                    "start": 16,
                    "end": 17
                },
                "flags": 256,
                "start": 0,
                "end": 17
            },
            "flags": 128,
            "start": 0,
            "end": 17
        }
    ],
    "isModule": false,
    "text": "[async x => ok].x",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 17
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

