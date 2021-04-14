# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: i
> :: test: rhs div asi
> :: case: async x => ok
## Input

`````js
x
/ async x => ok
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
                "kind": 198,
                "left": {
                    "kind": 81921,
                    "text": "x",
                    "rawText": "x",
                    "flags": 768,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 35640,
                    "flags": 768,
                    "start": 1,
                    "end": 3
                },
                "right": {
                    "kind": 271,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 768,
                        "start": 11,
                        "end": 14
                    },
                    "typeParameters": null,
                    "parameters": [
                        {
                            "kind": 215,
                            "ellipsisToken": null,
                            "binding": {
                                "kind": 81921,
                                "text": "x",
                                "rawText": "x",
                                "flags": 768,
                                "start": 9,
                                "end": 11
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "flags": 256,
                            "start": 3,
                            "end": 11
                        }
                    ],
                    "asyncToken": {
                        "kind": 82031,
                        "flags": 768,
                        "start": 3,
                        "end": 9
                    },
                    "returnType": null,
                    "contents": {
                        "kind": 81921,
                        "text": "ok",
                        "rawText": "ok",
                        "flags": 768,
                        "start": 14,
                        "end": 17
                    },
                    "flags": 2304,
                    "start": 3,
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
    "text": "x\n/ async x => ok",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 17
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: i
> :: test: rhs div asi
> :: case: async x => ok
## Input

`````js
x
/ async x => ok
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: i
> :: test: rhs div asi
> :: case: async x => ok
## Input

`````js
x
/ async x => ok
`````
```

