# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: async function a(){     async ([v] = await bar);     }
## Input

`````js
async function a(){     async ([v] = await bar);     }
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
            "declareKeyword": null,
            "asyncKeyword": {
                "kind": 82031,
                "flags": 64,
                "start": 0,
                "end": 5
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 0,
                "start": 5,
                "end": 14
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "a",
                "rawText": " a",
                "flags": 96,
                "start": 14,
                "end": 16
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
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
                                "kind": 134299649,
                                "text": "async",
                                "rawText": "async",
                                "flags": 96,
                                "start": 19,
                                "end": 29
                            },
                            "argumentList": {
                                "kind": 256,
                                "elements": [
                                    {
                                        "kind": 125,
                                        "left": {
                                            "kind": 119,
                                            "elementList": {
                                                "kind": 270,
                                                "elements": [
                                                    {
                                                        "kind": 134299649,
                                                        "text": "v",
                                                        "rawText": "v",
                                                        "flags": 96,
                                                        "start": 32,
                                                        "end": 33
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 32,
                                                "end": 33
                                            },
                                            "flags": 32,
                                            "start": 31,
                                            "end": 34
                                        },
                                        "operatorToken": {
                                            "kind": 4125,
                                            "flags": 64,
                                            "start": 34,
                                            "end": 36
                                        },
                                        "right": {
                                            "kind": 208,
                                            "awaitToken": {
                                                "kind": 82032,
                                                "flags": 0,
                                                "start": 36,
                                                "end": 42
                                            },
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "bar",
                                                "rawText": " bar",
                                                "flags": 96,
                                                "start": 42,
                                                "end": 46
                                            },
                                            "flags": 32,
                                            "start": 36,
                                            "end": 46
                                        },
                                        "flags": 32,
                                        "start": 31,
                                        "end": 46
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 19,
                                "end": 19
                            },
                            "flags": 32,
                            "start": 19,
                            "end": 47
                        },
                        {
                            "kind": 168,
                            "flags": 16,
                            "start": 47,
                            "end": 48
                        }
                    ],
                    "flags": 32,
                    "start": 19,
                    "end": 48
                },
                "flags": 32,
                "start": 18,
                "end": 54
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 144,
            "start": 0,
            "end": 54
        }
    ],
    "isModule": false,
    "source": "async function a(){     async ([v] = await bar);     }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 54
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

