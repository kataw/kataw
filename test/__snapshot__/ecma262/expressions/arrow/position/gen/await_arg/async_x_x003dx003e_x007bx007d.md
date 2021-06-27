# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/arrow/position/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/arrow/position/gen/await_arg
> :: test: await arg
> :: case: async x => {}
## Options

`````js
{}
`````
## Input

`````js
async function f() {
  await async x => {}
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
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 14,
                "end": 16
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 17,
                "end": 17
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
                                    "asyncKeyword": {
                                        "kind": 82031,
                                        "flags": 64,
                                        "start": 28,
                                        "end": 34
                                    },
                                    "typeParameters": null,
                                    "arrowPatameterList": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 34,
                                        "end": 36
                                    },
                                    "returnType": null,
                                    "arrowToken": {
                                        "kind": 10,
                                        "flags": 64,
                                        "start": 36,
                                        "end": 39
                                    },
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "start": 41,
                                            "end": 41
                                        },
                                        "flags": 32,
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
            "returnType": null,
            "flags": 144,
            "start": 0,
            "end": 44
        }
    ],
    "isModule": false,
    "source": "async function f() {\n  await async x => {}\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 44
}
```

### Printed

```javascript

async function f() {
  await async x =>  {};
}
```

### Diagnostics

```javascript
✔ No errors
```

