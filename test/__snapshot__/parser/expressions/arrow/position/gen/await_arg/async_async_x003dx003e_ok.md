# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-30
- From: kataw7/test\__snapshot__/parser/expressions/arrow/position/autogen.md
- Path: kataw7/test\__snapshot__\parser\expressions\arrow\position\gen\await_arg
> :: test: await arg
> :: case: async async => ok
## Input

`````js
async function f() {
  await async async => ok
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
                                        "start": 40,
                                        "end": 43
                                    },
                                    "typeParameters": null,
                                    "parameters": {
                                        "kind": 134299649,
                                        "text": "async",
                                        "rawText": "async",
                                        "flags": 96,
                                        "start": 34,
                                        "end": 40
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
                                        "start": 43,
                                        "end": 46
                                    },
                                    "flags": 288,
                                    "start": 28,
                                    "end": 46
                                },
                                "flags": 32,
                                "start": 20,
                                "end": 46
                            },
                            "flags": 16,
                            "start": 20,
                            "end": 46
                        }
                    ],
                    "flags": 33,
                    "start": 20,
                    "end": 46
                },
                "flags": 32,
                "start": 18,
                "end": 48
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 144,
            "start": 0,
            "end": 48
        }
    ],
    "isModule": false,
    "source": "async function f() {\n  await async async => ok\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 48
}
```

### Printed

```javascript

async function f() {
  await async async =>  ok;
}
```

### Diagnostics

```javascript
✔ No errors
```

