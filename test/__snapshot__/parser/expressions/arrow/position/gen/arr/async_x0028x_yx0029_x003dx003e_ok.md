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
### CST

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
                                "flags": 0,
                                "start": 13,
                                "end": 16
                            },
                            "typeParameters": null,
                            "parameters": [
                                {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 8,
                                    "end": 9
                                },
                                {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 96,
                                    "start": 10,
                                    "end": 12
                                }
                            ],
                            "asyncToken": {
                                "kind": 82031,
                                "flags": 64,
                                "start": 1,
                                "end": 6
                            },
                            "returnType": null,
                            "contents": {
                                "kind": 134299649,
                                "text": "ok",
                                "rawText": "ok",
                                "flags": 96,
                                "start": 16,
                                "end": 19
                            },
                            "flags": 288,
                            "start": 1,
                            "end": 19
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 1,
                    "end": 19
                },
                "flags": 32,
                "start": 0,
                "end": 20
            },
            "flags": 16,
            "start": 0,
            "end": 20
        }
    ],
    "isModule": false,
    "source": "[async (x, y) => ok]",
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

