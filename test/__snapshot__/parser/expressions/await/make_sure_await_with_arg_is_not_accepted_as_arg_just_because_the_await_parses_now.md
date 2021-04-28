# Kataw parser test case

## Input

`````js
async function f(){  (await fail) => x  }
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
                "flags": 768,
                "start": 0,
                "end": 5
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 768,
                "start": 5,
                "end": 14
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
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
                            "kind": 120,
                            "expression": {
                                "kind": 271,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 768,
                                    "start": 33,
                                    "end": 36
                                },
                                "typeParameters": null,
                                "parameters": [
                                    {
                                        "kind": 208,
                                        "awaitToken": {
                                            "kind": 82032,
                                            "flags": 768,
                                            "start": 22,
                                            "end": 27
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "fail",
                                            "rawText": "fail",
                                            "flags": 768,
                                            "start": 27,
                                            "end": 32
                                        },
                                        "flags": 256,
                                        "start": 22,
                                        "end": 32
                                    }
                                ],
                                "asyncToken": null,
                                "returnType": null,
                                "contents": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 768,
                                    "start": 36,
                                    "end": 38
                                },
                                "flags": 256,
                                "start": 19,
                                "end": 38
                            },
                            "flags": 128,
                            "start": 19,
                            "end": 38
                        }
                    ],
                    "multiline": false,
                    "flags": 256,
                    "start": 19,
                    "end": 38
                },
                "flags": 256,
                "start": 18,
                "end": 41
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 1152,
            "start": 0,
            "end": 41
        }
    ],
    "isModule": false,
    "text": "async function f(){  (await fail) => x  }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 41
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ The left hand side of the arrow is not destructible  - start: 33, end: 36

```

