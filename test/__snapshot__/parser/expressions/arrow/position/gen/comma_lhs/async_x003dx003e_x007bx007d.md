# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: comma lhs
> :: case: async => {}
## Input

`````js
async => {}, a
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
                "kind": 132,
                "expressions": [
                    {
                        "kind": 271,
                        "arrowToken": {
                            "kind": 10,
                            "flags": 768,
                            "start": 5,
                            "end": 8
                        },
                        "typeParameters": null,
                        "parameters": [
                            {
                                "kind": 215,
                                "ellipsisToken": null,
                                "binding": {
                                    "kind": 81921,
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
                                "statements": [],
                                "multiline": false,
                                "flags": 256,
                                "start": 10,
                                "end": 10
                            },
                            "flags": 256,
                            "start": 8,
                            "end": 11
                        },
                        "flags": 2304,
                        "start": 0,
                        "end": 11
                    },
                    {
                        "kind": 81921,
                        "text": "a",
                        "rawText": "a",
                        "flags": 768,
                        "start": 12,
                        "end": 14
                    }
                ],
                "flags": 256,
                "start": 0,
                "end": 14
            },
            "flags": 128,
            "start": 0,
            "end": 14
        }
    ],
    "isModule": false,
    "text": "async => {}, a",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 14
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: comma lhs
> :: case: async => {}
## Input

`````js
async => {}, a
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: comma lhs
> :: case: async => {}
## Input

`````js
async => {}, a
`````
```

