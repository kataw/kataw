# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: c
> :: test: inside an async func
> :: case: \u0069nstanceof
## Input

`````js
async () => {  \u0069nstanceof = x  }
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
                                "kind": 198,
                                "left": {
                                    "kind": 16637,
                                    "text": "",
                                    "autofix": 0,
                                    "flags": 12,
                                    "start": 13,
                                    "end": 13
                                },
                                "operatorToken": {
                                    "kind": 4229173,
                                    "flags": 768,
                                    "start": 13,
                                    "end": 30
                                },
                                "right": {
                                    "kind": 16637,
                                    "text": "",
                                    "autofix": 0,
                                    "flags": 12,
                                    "start": 30,
                                    "end": 30
                                },
                                "flags": 256,
                                "start": 13,
                                "end": 30
                            },
                            "flags": 128,
                            "start": 13,
                            "end": 30
                        }
                    ],
                    "multiline": false,
                    "flags": 256,
                    "start": 13,
                    "end": 30
                },
                "flags": 256,
                "start": 11,
                "end": 30
            },
            "flags": 2304,
            "start": 0,
            "end": 30
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "text": "x",
                "rawText": "x",
                "flags": 768,
                "start": 32,
                "end": 34
            },
            "flags": 128,
            "start": 32,
            "end": 34
        }
    ],
    "isModule": false,
    "text": "async () => {  \\u0069nstanceof = x  }",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 13,
            "end": 30
        },
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 30,
            "end": 32
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 30,
            "end": 32
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 30,
            "end": 32
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 30,
            "end": 32
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 34,
            "end": 37
        }
    ],
    "start": 0,
    "end": 37
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: c
> :: test: inside an async func
> :: case: \u0069nstanceof
## Input

`````js
async () => {  \u0069nstanceof = x  }
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: c
> :: test: inside an async func
> :: case: \u0069nstanceof
## Input

`````js
async () => {  \u0069nstanceof = x  }
`````
```

