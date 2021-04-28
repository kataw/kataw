# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: arr
> :: case: async (x, y) => ok
## Input

`````js
[async (x, y) => ok]
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
                                "flags": 13,
                                "start": 0,
                                "end": 16
                            },
                            "typeParameters": null,
                            "parameters": [
                                {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 768,
                                    "start": 8,
                                    "end": 9
                                },
                                {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 768,
                                    "start": 10,
                                    "end": 12
                                }
                            ],
                            "asyncToken": {
                                "kind": 82031,
                                "flags": 512,
                                "start": 1,
                                "end": 6
                            },
                            "returnType": null,
                            "contents": {
                                "kind": 134299649,
                                "text": "ok",
                                "rawText": "ok",
                                "flags": 768,
                                "start": 16,
                                "end": 19
                            },
                            "flags": 2304,
                            "start": 1,
                            "end": 19
                        }
                    ],
                    "trailingComma": false,
                    "flags": 256,
                    "start": 1,
                    "end": 19
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
    "text": "[async (x, y) => ok]",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 20
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

