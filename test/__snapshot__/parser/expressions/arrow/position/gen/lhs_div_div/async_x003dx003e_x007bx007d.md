# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: v
> :: test: lhs div div
> :: case: async => {}
## Input

`````js
async => {}
/ x / g
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
            "flags": 128,
            "start": 0,
            "end": 11
        },
        {
            "kind": 120,
            "expression": {
                "kind": 221,
                "text": "/ x /",
                "flags": 768,
                "start": 11,
                "end": 17
            },
            "flags": 128,
            "start": 11,
            "end": 17
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "text": "g",
                "rawText": "g",
                "flags": 768,
                "start": 17,
                "end": 19
            },
            "flags": 128,
            "start": 17,
            "end": 19
        }
    ],
    "isModule": false,
    "text": "async => {}\n/ x / g",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 17,
            "end": 19
        }
    ],
    "start": 0,
    "end": 19
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: v
> :: test: lhs div div
> :: case: async => {}
## Input

`````js
async => {}
/ x / g
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: v
> :: test: lhs div div
> :: case: async => {}
## Input

`````js
async => {}
/ x / g
`````
```

