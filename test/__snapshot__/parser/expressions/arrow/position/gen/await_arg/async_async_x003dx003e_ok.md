# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: g
> :: test: await arg
> :: case: async async => ok
## Input

`````js
async function f() {
  await async async => ok
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
                                "kind": 208,
                                "awaitToken": {
                                    "kind": 82032,
                                    "flags": 768,
                                    "start": 20,
                                    "end": 28
                                },
                                "expression": {
                                    "kind": 271,
                                    "arrowToken": {
                                        "kind": 10,
                                        "flags": 768,
                                        "start": 40,
                                        "end": 43
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
                                                "start": 34,
                                                "end": 40
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "flags": 256,
                                            "start": 28,
                                            "end": 40
                                        }
                                    ],
                                    "asyncToken": {
                                        "kind": 82031,
                                        "flags": 768,
                                        "start": 28,
                                        "end": 34
                                    },
                                    "returnType": null,
                                    "contents": {
                                        "kind": 134299649,
                                        "text": "ok",
                                        "rawText": "ok",
                                        "flags": 768,
                                        "start": 43,
                                        "end": 46
                                    },
                                    "flags": 2304,
                                    "start": 28,
                                    "end": 46
                                },
                                "flags": 256,
                                "start": 20,
                                "end": 46
                            },
                            "flags": 128,
                            "start": 20,
                            "end": 46
                        }
                    ],
                    "multiline": true,
                    "flags": 256,
                    "start": 20,
                    "end": 46
                },
                "flags": 256,
                "start": 18,
                "end": 48
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 1280,
            "start": 0,
            "end": 48
        }
    ],
    "isModule": false,
    "text": "async function f() {\n  await async async => ok\n}",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 48
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: g
> :: test: await arg
> :: case: async async => ok
## Input

`````js
async function f() {
  await async async => ok
}
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: g
> :: test: await arg
> :: case: async async => ok
## Input

`````js
async function f() {
  await async async => ok
}
`````
```

