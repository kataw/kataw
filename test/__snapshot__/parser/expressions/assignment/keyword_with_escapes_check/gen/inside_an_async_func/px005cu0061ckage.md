# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: c
> :: test: inside an async func
> :: case: p\u0061ckage
## Input

`````js
async () => {  p\u0061ckage = x  }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 271,
            "arrowToken": {
                "kind": 10,
                "flags": 768,
                "start": 8,
                "end": 11
            },
            "typeParameters": null,
            "parameters": [],
            "asyncToken": {
                "kind": 82031,
                "flags": 768,
                "start": 0,
                "end": 5
            },
            "returnType": null,
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 125,
                                "left": {
                                    "kind": 81921,
                                    "text": "package",
                                    "rawText": "p\\u0061ckage",
                                    "flags": 768,
                                    "start": 13,
                                    "end": 27
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 768,
                                    "start": 27,
                                    "end": 29
                                },
                                "right": {
                                    "kind": 81921,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 768,
                                    "start": 29,
                                    "end": 31
                                },
                                "flags": 256,
                                "start": 13,
                                "end": 31
                            },
                            "flags": 128,
                            "start": 13,
                            "end": 31
                        }
                    ],
                    "multiline": false,
                    "flags": 256,
                    "start": 13,
                    "end": 31
                },
                "flags": 256,
                "start": 11,
                "end": 34
            },
            "flags": 2304,
            "start": 0,
            "end": 34
        }
    ],
    "isModule": false,
    "text": "async () => {  p\\u0061ckage = x  }",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 34
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: c
> :: test: inside an async func
> :: case: p\u0061ckage
## Input

`````js
async () => {  p\u0061ckage = x  }
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: c
> :: test: inside an async func
> :: case: p\u0061ckage
## Input

`````js
async () => {  p\u0061ckage = x  }
`````
```

