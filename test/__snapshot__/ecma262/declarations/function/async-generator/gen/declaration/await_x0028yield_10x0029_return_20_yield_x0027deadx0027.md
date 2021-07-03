# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/declarations/function/async-generator/autogen.md
- Path: kataw/test/__snapshot__/parser/declarations/function/async-generator/gen/declaration
> :: test: declaration
> :: case: await (yield 10); return 20; yield 'dead'
## Options

`````js
{}
`````
## Input

`````js
async function * gen() {await (yield 10); return 20; yield 'dead'}

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
            "asteriskToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 14,
                "end": 16
            },
            "name": {
                "kind": 134299649,
                "text": "gen",
                "rawText": "gen",
                "flags": 96,
                "start": 16,
                "end": 20
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 21,
                "end": 21
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
                                    "flags": 64,
                                    "start": 24,
                                    "end": 29
                                },
                                "expression": {
                                    "kind": 121,
                                    "expression": {
                                        "kind": 229,
                                        "yieldKeyword": {
                                            "kind": 8454253,
                                            "flags": 64,
                                            "start": 31,
                                            "end": 36
                                        },
                                        "delegate": false,
                                        "asteriskToken": null,
                                        "expression": {
                                            "kind": 201392130,
                                            "text": 10,
                                            "rawText": "10",
                                            "flags": 96,
                                            "start": 36,
                                            "end": 39
                                        },
                                        "flags": 32,
                                        "start": 31,
                                        "end": 39
                                    },
                                    "flags": 29,
                                    "start": 32,
                                    "end": 40
                                },
                                "flags": 32,
                                "start": 24,
                                "end": 40
                            },
                            "flags": 16,
                            "start": 24,
                            "end": 41
                        },
                        {
                            "kind": 161,
                            "returnKeyword": {
                                "kind": 37757022,
                                "flags": 80,
                                "start": 41,
                                "end": 48
                            },
                            "expression": {
                                "kind": 201392130,
                                "text": 20,
                                "rawText": "20",
                                "flags": 96,
                                "start": 48,
                                "end": 51
                            },
                            "flags": 80,
                            "start": 41,
                            "end": 52
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 229,
                                "yieldKeyword": {
                                    "kind": 8454253,
                                    "flags": 64,
                                    "start": 52,
                                    "end": 58
                                },
                                "delegate": false,
                                "asteriskToken": null,
                                "expression": {
                                    "kind": 201392131,
                                    "text": "dead",
                                    "rawText": "'dead'",
                                    "flags": 4194400,
                                    "start": 58,
                                    "end": 65
                                },
                                "flags": 32,
                                "start": 52,
                                "end": 65
                            },
                            "flags": 16,
                            "start": 52,
                            "end": 65
                        }
                    ],
                    "flags": 32,
                    "start": 24,
                    "end": 65
                },
                "flags": 32,
                "start": 22,
                "end": 66
            },
            "returnType": null,
            "flags": 400,
            "start": 0,
            "end": 66
        }
    ],
    "isModule": false,
    "source": "async function * gen() {await (yield 10); return 20; yield 'dead'}\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 67
}
```

### Printed

```javascript

async function * gen() {
  await (yield  10);
  return 20;
  yield  '\'dead\'';
}

```

### Diagnostics

```javascript
✔ No errors
```

