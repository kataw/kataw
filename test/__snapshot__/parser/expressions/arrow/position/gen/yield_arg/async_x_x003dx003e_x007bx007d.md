# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: g
> :: test: yield arg
> :: case: async x => {}
## Input

`````js
function *f() {
  yield async x => {}
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
                                        "flags": 31,
                                        "start": 0,
                                        "end": 34
                                    },
                                    "typeParameters": null,
                                    "parameters": [
                                        {
                                            "kind": 215,
                                            "ellipsisToken": null,
                                            "binding": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 768,
                                                "start": 29,
                                                "end": 31
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "flags": 256,
                                            "start": 23,
                                            "end": 31
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
                                            "start": 36,
                                            "end": 36
                                        },
                                        "flags": 256,
                                        "start": 34,
                                        "end": 37
                                    },
                                    "flags": 2304,
                                    "start": 23,
                                    "end": 37
                                },
                                "flags": 256,
                                "start": 15,
                                "end": 37
                            },
                            "flags": 128,
                            "start": 15,
                            "end": 37
                        }
                    ],
                    "multiline": true,
                    "flags": 256,
                    "start": 15,
                    "end": 37
                },
                "flags": 256,
                "start": 13,
                "end": 39
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 2176,
            "start": 0,
            "end": 39
        }
    ],
    "isModule": false,
    "text": "function *f() {\n  yield async x => {}\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 39
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

