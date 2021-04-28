# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: v
> :: test: lhs div div
> :: case: async => ok
## Input

`````js
async => ok
/ x / g
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
                    "flags": 5,
                    "start": 0,
                    "end": 8
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
                            "start": 0,
                            "end": 5
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 256,
                        "start": 0,
                        "end": 5
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
                    "kind": 198,
                    "left": {
                        "kind": 198,
                        "left": {
                            "kind": 134299649,
                            "text": "ok",
                            "rawText": "ok",
                            "flags": 768,
                            "start": 8,
                            "end": 11
                        },
                        "operatorToken": {
                            "kind": 35640,
                            "flags": 11,
                            "start": 513,
                            "end": 13
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 768,
                            "start": 13,
                            "end": 15
                        },
                        "flags": 256,
                        "start": 8,
                        "end": 15
                    },
                    "operatorToken": {
                        "kind": 35640,
                        "flags": 15,
                        "start": 512,
                        "end": 17
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "g",
                        "rawText": "g",
                        "flags": 768,
                        "start": 17,
                        "end": 19
                    },
                    "flags": 256,
                    "start": 8,
                    "end": 19
                },
                "flags": 2304,
                "start": 0,
                "end": 19
            },
            "flags": 128,
            "start": 0,
            "end": 19
        }
    ],
    "isModule": false,
    "text": "async => ok\n/ x / g",
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

