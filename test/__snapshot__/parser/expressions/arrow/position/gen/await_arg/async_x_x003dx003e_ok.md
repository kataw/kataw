# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-28
- From: d
- Path: g
> :: test: await arg
> :: case: async x => ok
## Input

`````js
async function f() {
  await async x => ok
}
`````
## Output

### CST

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
                "text": "f",
                "rawText": "f",
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
                            "kind": 120,
                            "expression": {
                                "kind": 208,
                                "awaitKeyword": {
                                    "kind": 82196,
                                    "flags": 1,
                                    "start": 20,
                                    "end": 28
                                },
                                "expression": {
                                    "kind": 271,
                                    "arrowToken": {
                                        "kind": 10,
                                        "flags": 0,
                                        "start": 36,
                                        "end": 39
                                    },
                                    "typeParameters": null,
                                    "parameters": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 34,
                                        "end": 36
                                    },
                                    "asyncKeyword": {
                                        "kind": 82031,
                                        "flags": 64,
                                        "start": 28,
                                        "end": 34
                                    },
                                    "returnType": null,
                                    "contents": {
                                        "kind": 134299649,
                                        "text": "ok",
                                        "rawText": "ok",
                                        "flags": 96,
                                        "start": 39,
                                        "end": 42
                                    },
                                    "flags": 288,
                                    "start": 28,
                                    "end": 42
                                },
                                "flags": 32,
                                "start": 20,
                                "end": 42
                            },
                            "flags": 16,
                            "start": 20,
                            "end": 42
                        }
                    ],
                    "flags": 33,
                    "start": 20,
                    "end": 42
                },
                "flags": 32,
                "start": 18,
                "end": 44
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 144,
            "start": 0,
            "end": 44
        }
    ],
    "isModule": false,
    "source": "async function f() {\n  await async x => ok\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 44
}
```

### Printed

```javascript

async function f() {
  await async x =>  ok;
}
```

### Diagnostics

```javascript
✔ No errors
```

