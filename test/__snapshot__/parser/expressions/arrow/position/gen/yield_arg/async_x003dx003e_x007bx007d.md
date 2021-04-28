# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: g
> :: test: yield arg
> :: case: async => {}
## Input

`````js
function *f() {
  yield async => {}
}
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
                "flags": 0,
                "start": 0,
                "end": 8
            },
            "generatorToken": {
                "kind": 67143222,
                "flags": 8,
                "start": 512,
                "end": 10
            },
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 768,
                "start": 10,
                "end": 11
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 256,
                "start": 11,
                "end": 13
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
                                "kind": 229,
                                "yieldKeyword": {
                                    "kind": 8454253,
                                    "flags": 15,
                                    "start": 1,
                                    "end": 23
                                },
                                "delegate": false,
                                "asteriskToken": null,
                                "expression": {
                                    "kind": 271,
                                    "arrowToken": {
                                        "kind": 10,
                                        "flags": 29,
                                        "start": 0,
                                        "end": 32
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
                                                "start": 23,
                                                "end": 29
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "flags": 256,
                                            "start": 23,
                                            "end": 29
                                        }
                                    ],
                                    "asyncToken": {
                                        "kind": 82031,
                                        "flags": 23,
                                        "start": 512,
                                        "end": 29
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
                                            "start": 34,
                                            "end": 34
                                        },
                                        "flags": 256,
                                        "start": 32,
                                        "end": 35
                                    },
                                    "flags": 2304,
                                    "start": 23,
                                    "end": 35
                                },
                                "flags": 256,
                                "start": 15,
                                "end": 35
                            },
                            "flags": 128,
                            "start": 15,
                            "end": 35
                        }
                    ],
                    "multiline": true,
                    "flags": 256,
                    "start": 15,
                    "end": 35
                },
                "flags": 256,
                "start": 13,
                "end": 37
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 2176,
            "start": 0,
            "end": 37
        }
    ],
    "isModule": false,
    "text": "function *f() {\n  yield async => {}\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 37
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

