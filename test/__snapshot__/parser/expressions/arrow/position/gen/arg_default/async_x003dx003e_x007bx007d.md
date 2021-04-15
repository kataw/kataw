# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: t
> :: test: arg default
> :: case: async => {}
## Input

`````js
function f(a = async => {}) {}
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
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 768,
                "start": 0,
                "end": 8
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 768,
                "start": 8,
                "end": 10
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
                            "start": 11,
                            "end": 12
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 768,
                                "start": 20,
                                "end": 23
                            },
                            "typeParameters": null,
                            "parameters": [
                                {
                                    "kind": 215,
                                    "ellipsisToken": null,
                                    "binding": {
                                        "kind": 134299649,
                                        "text": "async",
                                        "rawText": "async",
                                        "flags": 768,
                                        "start": 14,
                                        "end": 20
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": null,
                                    "flags": 256,
                                    "start": 14,
                                    "end": 20
                                }
                            ],
                            "asyncToken": {
                                "kind": 82031,
                                "flags": 768,
                                "start": 14,
                                "end": 20
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
                                    "start": 25,
                                    "end": 25
                                },
                                "flags": 256,
                                "start": 23,
                                "end": 26
                            },
                            "flags": 2304,
                            "start": 14,
                            "end": 26
                        },
                        "flags": 258,
                        "start": 11,
                        "end": 26
                    }
                ],
                "trailingComma": false,
                "flags": 258,
                "start": 10,
                "end": 27
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "multiline": false,
                    "flags": 256,
                    "start": 29,
                    "end": 29
                },
                "flags": 256,
                "start": 27,
                "end": 30
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 128,
            "start": 0,
            "end": 30
        }
    ],
    "isModule": false,
    "text": "function f(a = async => {}) {}",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 30
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

