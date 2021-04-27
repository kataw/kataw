# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: var asyncArrow = async(...await) => {};
## Input

`````js
var asyncArrow = async(...await) => {};
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 768,
                "start": 0,
                "end": 3
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "asyncArrow",
                            "rawText": "asyncArrow",
                            "flags": 768,
                            "start": 3,
                            "end": 14
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 768,
                                "start": 32,
                                "end": 35
                            },
                            "typeParameters": null,
                            "parameters": [
                                {
                                    "kind": 223,
                                    "ellipsisToken": {
                                        "kind": 524302,
                                        "flags": 768,
                                        "start": 23,
                                        "end": 26
                                    },
                                    "flags": 256,
                                    "start": 23,
                                    "end": 31
                                }
                            ],
                            "asyncToken": {
                                "kind": 82031,
                                "flags": 768,
                                "start": 16,
                                "end": 22
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
                                    "start": 37,
                                    "end": 37
                                },
                                "flags": 256,
                                "start": 35,
                                "end": 38
                            },
                            "flags": 2304,
                            "start": 16,
                            "end": 38
                        },
                        "flags": 128,
                        "start": 3,
                        "end": 38
                    }
                ],
                "flags": 128,
                "start": 3,
                "end": 38
            },
            "flags": 128,
            "start": 0,
            "end": 39
        }
    ],
    "isModule": false,
    "text": "var asyncArrow = async(...await) => {};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 39
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2716}@ The left hand side of the arrow is not destructible  - start: 32, end: 35

```

