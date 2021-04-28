# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: j
> :: test: obj
> :: case: x => ok
## Input

`````js
x = {arrow: x => ok}
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
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 768,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 1,
                    "start": 512,
                    "end": 3
                },
                "right": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 219,
                                "left": {
                                    "kind": 271,
                                    "arrowToken": {
                                        "kind": 10,
                                        "flags": 13,
                                        "start": 0,
                                        "end": 16
                                    },
                                    "typeParameters": null,
                                    "parameters": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 768,
                                        "start": 11,
                                        "end": 13
                                    },
                                    "asyncToken": null,
                                    "returnType": null,
                                    "contents": {
                                        "kind": 134299649,
                                        "text": "ok",
                                        "rawText": "ok",
                                        "flags": 768,
                                        "start": 16,
                                        "end": 19
                                    },
                                    "flags": 256,
                                    "start": 11,
                                    "end": 19
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "arrow",
                                    "rawText": "arrow",
                                    "flags": 768,
                                    "start": 5,
                                    "end": 10
                                },
                                "flags": 256,
                                "start": 5,
                                "end": 19
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 5,
                        "end": 19
                    },
                    "flags": 256,
                    "start": 3,
                    "end": 20
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
    "text": "x = {arrow: x => ok}",
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

