# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: i
> :: test: lhs mul asi
> :: case: async => {}
## Input

`````js
async => {}
* x
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
                "operatorToken": {
                    "kind": 67143222,
                    "flags": 768,
                    "start": 11,
                    "end": 13
                },
                "right": {
                    "kind": 81921,
                    "text": "x",
                    "rawText": "x",
                    "flags": 768,
                    "start": 13,
                    "end": 15
                },
                "flags": 256,
                "start": 0,
                "end": 15
            },
            "flags": 128,
            "start": 0,
            "end": 15
        }
    ],
    "isModule": false,
    "text": "async => {}\n* x",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 28,
            "error": "An arrow function can not be part of an operator to the right",
            "start": 11,
            "end": 13
        }
    ],
    "start": 0,
    "end": 15
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: i
> :: test: lhs mul asi
> :: case: async => {}
## Input

`````js
async => {}
* x
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: i
> :: test: lhs mul asi
> :: case: async => {}
## Input

`````js
async => {}
* x
`````
```

