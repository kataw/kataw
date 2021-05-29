# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-28
- From: d
- Path: g
> :: test: await arg
> :: case: x => ok
## Input

`````js
async function f() {
  await x => ok
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
                "flags": 64,
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
                                    "flags": 65,
                                    "start": 20,
                                    "end": 28
                                },
                                "expression": {
                                    "kind": 271,
                                    "arrowToken": {
                                        "kind": 10,
                                        "flags": 64,
                                        "start": 30,
                                        "end": 33
                                    },
                                    "typeParameters": null,
                                    "parameters": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 28,
                                        "end": 30
                                    },
                                    "asyncKeyword": null,
                                    "returnType": null,
                                    "contents": {
                                        "kind": 134299649,
                                        "text": "ok",
                                        "rawText": "ok",
                                        "flags": 96,
                                        "start": 33,
                                        "end": 36
                                    },
                                    "flags": 32,
                                    "start": 28,
                                    "end": 36
                                },
                                "flags": 32,
                                "start": 20,
                                "end": 36
                            },
                            "flags": 16,
                            "start": 20,
                            "end": 36
                        }
                    ],
                    "flags": 33,
                    "start": 20,
                    "end": 36
                },
                "flags": 32,
                "start": 18,
                "end": 38
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 144,
            "start": 0,
            "end": 38
        }
    ],
    "isModule": false,
    "source": "async function f() {\n  await x => ok\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 38
}
```

### Printed

```javascript

async function f() {
  await x =>  ok;
}
```

### Diagnostics

```javascript
✔ No errors
```

