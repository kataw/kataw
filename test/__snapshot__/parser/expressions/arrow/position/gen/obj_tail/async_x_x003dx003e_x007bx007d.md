# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: l
> :: test: obj tail
> :: case: async x => {}
## Input

`````js
x = {arrow: async x => {}}.y
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
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "original": "x",
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 1,
                    "end": 3
                },
                "right": {
                    "kind": 129,
                    "member": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 219,
                                    "generatorToken": null,
                                    "asyncKeyword": null,
                                    "getKeyword": null,
                                    "setKeyword": null,
                                    "left": {
                                        "kind": 271,
                                        "arrowToken": {
                                            "kind": 10,
                                            "flags": 0,
                                            "start": 19,
                                            "end": 22
                                        },
                                        "typeParameters": null,
                                        "parameters": [
                                            {
                                                "kind": 215,
                                                "ellipsisToken": null,
                                                "binding": {
                                                    "kind": 134299649,
                                                    "original": "x",
                                                    "text": "x",
                                                    "rawText": " x",
                                                    "flags": 96,
                                                    "start": 17,
                                                    "end": 19
                                                },
                                                "optionalToken": null,
                                                "type": null,
                                                "initializer": null,
                                                "flags": 32,
                                                "start": 11,
                                                "end": 19
                                            }
                                        ],
                                        "asyncToken": {
                                            "kind": 82031,
                                            "flags": 64,
                                            "start": 11,
                                            "end": 17
                                        },
                                        "returnType": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "start": 24,
                                                "end": 24
                                            },
                                            "flags": 32,
                                            "start": 22,
                                            "end": 25
                                        },
                                        "flags": 288,
                                        "start": 11,
                                        "end": 25
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "original": "arrow",
                                        "text": "arrow",
                                        "rawText": "arrow",
                                        "flags": 96,
                                        "start": 5,
                                        "end": 10
                                    },
                                    "flags": 32,
                                    "start": 5,
                                    "end": 25
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 5,
                            "end": 25
                        },
                        "flags": 32,
                        "start": 3,
                        "end": 26
                    },
                    "expression": {
                        "kind": 134299649,
                        "original": "y",
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "start": 27,
                        "end": 28
                    },
                    "flags": 32,
                    "start": 3,
                    "end": 28
                },
                "flags": 32,
                "start": 0,
                "end": 28
            },
            "flags": 16,
            "start": 0,
            "end": 28
        }
    ],
    "isModule": false,
    "source": "x = {arrow: async x => {}}.y",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 28
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

