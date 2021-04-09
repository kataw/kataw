# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: comma double
> :: case: async x => {}
## Input

`````js
async x => {}, async x => {}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 132,
                "expressions": [
                    {
                        "kind": 271,
                        "typeParameters": null,
                        "parameters": [
                            {
                                "kind": 215,
                                "ellipsisToken": null,
                                "binding": {
                                    "kind": 81921,
                                    "value": "x",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 5,
                                    "end": 7
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": null,
                                "autofix": 0,
                                "flags": 256,
                                "start": 0,
                                "end": 7
                            }
                        ],
                        "asyncToken": {
                            "kind": 82031,
                            "autofix": 0,
                            "flags": 0,
                            "start": 0,
                            "end": 5
                        },
                        "returnType": null,
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "statements": [],
                                "multiline": false,
                                "autofix": 0,
                                "flags": 256,
                                "start": 12,
                                "end": 12
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 10,
                            "end": 13
                        },
                        "autofix": 0,
                        "flags": 2304,
                        "start": 0,
                        "end": 13
                    },
                    {
                        "kind": 271,
                        "typeParameters": null,
                        "parameters": [
                            {
                                "kind": 215,
                                "ellipsisToken": null,
                                "binding": {
                                    "kind": 81921,
                                    "value": "x",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 20,
                                    "end": 22
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": null,
                                "autofix": 0,
                                "flags": 256,
                                "start": 14,
                                "end": 22
                            }
                        ],
                        "asyncToken": {
                            "kind": 82031,
                            "autofix": 0,
                            "flags": 0,
                            "start": 14,
                            "end": 20
                        },
                        "returnType": null,
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "statements": [],
                                "multiline": false,
                                "autofix": 0,
                                "flags": 256,
                                "start": 27,
                                "end": 27
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 25,
                            "end": 28
                        },
                        "autofix": 0,
                        "flags": 2304,
                        "start": 14,
                        "end": 28
                    }
                ],
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 28
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 28
        }
    ],
    "isModule": false,
    "text": "async x => {}, async x => {}",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 28
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: comma double
> :: case: async x => {}
## Input

`````js
async x => {}, async x => {}
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: comma double
> :: case: async x => {}
## Input

`````js
async x => {}, async x => {}
`````
```

