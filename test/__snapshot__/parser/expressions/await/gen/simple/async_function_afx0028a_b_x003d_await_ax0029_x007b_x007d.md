# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: async function af(a, b = await a) { }
## Input

`````js
async function af(a, b = await a) { }
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
                "text": "af",
                "rawText": "af",
                "flags": 768,
                "start": 14,
                "end": 17
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [
                    {
                        "kind": 215,
                        "ellipsisToken": null,
                        "binding": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 768,
                            "start": 18,
                            "end": 19
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 256,
                        "start": 18,
                        "end": 19
                    },
                    {
                        "kind": 215,
                        "ellipsisToken": null,
                        "binding": {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 768,
                            "start": 20,
                            "end": 22
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 208,
                            "awaitToken": {
                                "kind": 82032,
                                "flags": 768,
                                "start": 24,
                                "end": 30
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 768,
                                "start": 30,
                                "end": 32
                            },
                            "flags": 256,
                            "start": 24,
                            "end": 32
                        },
                        "flags": 258,
                        "start": 20,
                        "end": 32
                    }
                ],
                "trailingComma": false,
                "flags": 258,
                "start": 17,
                "end": 33
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "multiline": false,
                    "flags": 256,
                    "start": 35,
                    "end": 35
                },
                "flags": 256,
                "start": 33,
                "end": 37
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 1152,
            "start": 0,
            "end": 37
        }
    ],
    "isModule": false,
    "text": "async function af(a, b = await a) { }",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 37
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

