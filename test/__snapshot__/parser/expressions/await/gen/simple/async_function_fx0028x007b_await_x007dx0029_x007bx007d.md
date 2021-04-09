# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: async function f({ await }) {}
## Input

`````js
async function f({ await }) {}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 176,
            "asyncToken": {
                "kind": 82031,
                "autofix": 0,
                "flags": 0,
                "start": 0,
                "end": 5
            },
            "generatorToken": null,
            "name": {
                "kind": 81921,
                "value": "f",
                "autofix": 0,
                "flags": 768,
                "start": 14,
                "end": 16
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [
                    {
                        "kind": 215,
                        "ellipsisToken": null,
                        "binding": {
                            "kind": 212,
                            "propertyList": {
                                "kind": 213,
                                "properties": [
                                    {
                                        "kind": 222,
                                        "ellipsisToken": null,
                                        "left": {
                                            "kind": 81921,
                                            "value": "await",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 18,
                                            "end": 24
                                        },
                                        "right": null,
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 18,
                                        "end": 24
                                    }
                                ],
                                "multiline": false,
                                "trailingComma": false,
                                "autofix": 0,
                                "flags": 256,
                                "start": 18,
                                "end": 24
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 17,
                            "end": 26
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "autofix": 0,
                        "flags": 256,
                        "start": 17,
                        "end": 26
                    }
                ],
                "trailingComma": false,
                "autofix": 0,
                "flags": 256,
                "start": 17,
                "end": 27
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "statements": [],
                    "multiline": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 29,
                    "end": 29
                },
                "autofix": 0,
                "flags": 256,
                "start": 27,
                "end": 30
            },
            "typeParameters": null,
            "returnType": null,
            "autofix": 0,
            "flags": 1280,
            "start": 0,
            "end": 30
        }
    ],
    "isModule": false,
    "text": "async function f({ await }) {}",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 30
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: async function f({ await }) {}
## Input

`````js
async function f({ await }) {}
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: async function f({ await }) {}
## Input

`````js
async function f({ await }) {}
`````
```

