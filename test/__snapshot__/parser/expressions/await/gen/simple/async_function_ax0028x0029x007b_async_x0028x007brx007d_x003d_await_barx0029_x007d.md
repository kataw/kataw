# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: async function a(){     async ({r} = await bar);     }
## Input

`````js
async function a(){     async ({r} = await bar);     }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 176,
            "asyncKeyword": {
                "kind": 82031,
                "flags": 768,
                "start": 0,
                "end": 5
            },
            "functionKeyword": {
                "kind": 37814362,
                "flags": 768,
                "start": 5,
                "end": 14
            },
            "generatorToken": null,
            "name": {
                "kind": 81921,
                "text": "a",
                "rawText": "a",
                "flags": 768,
                "start": 14,
                "end": 16
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 256,
                "start": 16,
                "end": 18
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 131,
                            "expression": {
                                "kind": 81921,
                                "text": "async",
                                "rawText": "async",
                                "flags": 768,
                                "start": 19,
                                "end": 29
                            },
                            "argumentList": {
                                "kind": 256,
                                "elements": [
                                    {
                                        "kind": 125,
                                        "left": {
                                            "kind": 220,
                                            "propertyList": {
                                                "kind": 218,
                                                "properties": [
                                                    {
                                                        "kind": 81921,
                                                        "text": "r",
                                                        "rawText": "r",
                                                        "flags": 768,
                                                        "start": 32,
                                                        "end": 33
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "multiline": false,
                                                "flags": 0,
                                                "start": 32,
                                                "end": 33
                                            },
                                            "flags": 256,
                                            "start": 31,
                                            "end": 34
                                        },
                                        "operatorToken": {
                                            "kind": 4125,
                                            "flags": 768,
                                            "start": 34,
                                            "end": 36
                                        },
                                        "right": {
                                            "kind": 208,
                                            "awaitToken": {
                                                "kind": 82032,
                                                "flags": 768,
                                                "start": 36,
                                                "end": 42
                                            },
                                            "expression": {
                                                "kind": 81921,
                                                "text": "bar",
                                                "rawText": "bar",
                                                "flags": 768,
                                                "start": 42,
                                                "end": 46
                                            },
                                            "flags": 256,
                                            "start": 36,
                                            "end": 46
                                        },
                                        "flags": 256,
                                        "start": 31,
                                        "end": 46
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 256,
                                "start": 19,
                                "end": 19
                            },
                            "flags": 256,
                            "start": 19,
                            "end": 47
                        },
                        {
                            "kind": 168,
                            "flags": 128,
                            "start": 47,
                            "end": 48
                        }
                    ],
                    "multiline": false,
                    "flags": 256,
                    "start": 19,
                    "end": 48
                },
                "flags": 256,
                "start": 18,
                "end": 54
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 1280,
            "start": 0,
            "end": 54
        }
    ],
    "isModule": false,
    "text": "async function a(){     async ({r} = await bar);     }",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 54
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: async function a(){     async ({r} = await bar);     }
## Input

`````js
async function a(){     async ({r} = await bar);     }
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: async function a(){     async ({r} = await bar);     }
## Input

`````js
async function a(){     async ({r} = await bar);     }
`````
```

