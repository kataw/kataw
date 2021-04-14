# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: c
> :: test: inside an async func
> :: case: publ\u0069c
## Input

`````js
async () => {  publ\u0069c = x  }
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
                                    "text": "public",
                                    "rawText": "publ\\u0069c",
                                    "flags": 768,
                                    "start": 13,
                                    "end": 26
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 768,
                                    "start": 26,
                                    "end": 28
                                },
                                "right": {
                                    "kind": 81921,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 768,
                                    "start": 28,
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
                "end": 33
            },
            "flags": 2304,
            "start": 0,
            "end": 33
        }
    ],
    "isModule": false,
    "text": "async () => {  publ\\u0069c = x  }",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 33
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: c
> :: test: inside an async func
> :: case: publ\u0069c
## Input

`````js
async () => {  publ\u0069c = x  }
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: c
> :: test: inside an async func
> :: case: publ\u0069c
## Input

`````js
async () => {  publ\u0069c = x  }
`````
```

