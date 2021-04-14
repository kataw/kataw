# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: c
> :: test: inside an async func
> :: case: v\u006fid
## Input

`````js
async () => {  v\u006fid = x  }
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
                                    "kind": 126,
                                    "operandToken": {
                                        "kind": 4259887,
                                        "flags": 768,
                                        "start": 13,
                                        "end": 24
                                    },
                                    "expression": {
                                        "kind": 16637,
                                        "text": "",
                                        "autofix": 0,
                                        "flags": 12,
                                        "start": 24,
                                        "end": 24
                                    },
                                    "flags": 256,
                                    "start": 13,
                                    "end": 24
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 768,
                                    "start": 24,
                                    "end": 26
                                },
                                "right": {
                                    "kind": 81921,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 768,
                                    "start": 26,
                                    "end": 28
                                },
                                "flags": 256,
                                "start": 13,
                                "end": 28
                            },
                            "flags": 128,
                            "start": 13,
                            "end": 28
                        }
                    ],
                    "multiline": false,
                    "flags": 256,
                    "start": 13,
                    "end": 28
                },
                "flags": 256,
                "start": 11,
                "end": 31
            },
            "flags": 2304,
            "start": 0,
            "end": 31
        }
    ],
    "isModule": false,
    "text": "async () => {  v\\u006fid = x  }",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 24,
            "end": 26
        },
        {
            "kind": 2,
            "source": 2,
            "code": 24,
            "error": "The left-hand side of an assignment expression must be a variable or a property access",
            "start": 24,
            "end": 26
        }
    ],
    "start": 0,
    "end": 31
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: c
> :: test: inside an async func
> :: case: v\u006fid
## Input

`````js
async () => {  v\u006fid = x  }
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: c
> :: test: inside an async func
> :: case: v\u006fid
## Input

`````js
async () => {  v\u006fid = x  }
`````
```

