# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: comma lhs
> :: case: async x => {}
## Input

`````js
async x => {}, a
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
                            "start": 7,
                            "end": 10
                        },
                        "typeParameters": null,
                        "parameters": [
                            {
                                "kind": 215,
                                "ellipsisToken": null,
                                "binding": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 768,
                                    "start": 5,
                                    "end": 7
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": null,
                                "flags": 256,
                                "start": 0,
                                "end": 7
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
                                "start": 12,
                                "end": 12
                            },
                            "flags": 256,
                            "start": 10,
                            "end": 13
                        },
                        "flags": 2304,
                        "start": 0,
                        "end": 13
                    },
                    {
                        "kind": 134299649,
                        "text": "a",
                        "rawText": "a",
                        "flags": 768,
                        "start": 14,
                        "end": 16
                    }
                ],
                "flags": 256,
                "start": 0,
                "end": 16
            },
            "flags": 128,
            "start": 0,
            "end": 16
        }
    ],
    "isModule": false,
    "text": "async x => {}, a",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 16
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: comma lhs
> :: case: async x => {}
## Input

`````js
async x => {}, a
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: comma lhs
> :: case: async x => {}
## Input

`````js
async x => {}, a
`````
```

