# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/declarations/function/async-generator/autogen.md
- Path: kataw/test/__snapshot__/parser/declarations/function/async-generator/gen/declaration
> :: test: declaration
> :: case: (yield)
>          ? yield : yield
## Options

`````js
{}
`````
## Input

`````js
async function * gen() {(yield)
? yield : yield}

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
            "generatorToken": {
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
                "start": 20,
                "end": 22
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
                                "kind": 197,
                                "shortCircuit": {
                                    "kind": 121,
                                    "expression": {
                                        "kind": 229,
                                        "yieldKeyword": {
                                            "kind": 8454253,
                                            "flags": 64,
                                            "start": 25,
                                            "end": 30
                                        },
                                        "delegate": false,
                                        "asteriskToken": null,
                                        "expression": null,
                                        "flags": 32,
                                        "start": 25,
                                        "end": 30
                                    },
                                    "flags": 32,
                                    "start": 24,
                                    "end": 31
                                },
                                "questionToken": {
                                    "kind": 134217750,
                                    "flags": 65,
                                    "start": 31,
                                    "end": 33
                                },
                                "consequent": {
                                    "kind": 229,
                                    "yieldKeyword": {
                                        "kind": 8454253,
                                        "flags": 64,
                                        "start": 33,
                                        "end": 39
                                    },
                                    "delegate": false,
                                    "asteriskToken": null,
                                    "expression": null,
                                    "flags": 32,
                                    "start": 33,
                                    "end": 39
                                },
                                "colonToken": {
                                    "kind": 21,
                                    "flags": 64,
                                    "start": 39,
                                    "end": 41
                                },
                                "alternate": {
                                    "kind": 229,
                                    "yieldKeyword": {
                                        "kind": 8454253,
                                        "flags": 64,
                                        "start": 41,
                                        "end": 47
                                    },
                                    "delegate": false,
                                    "asteriskToken": null,
                                    "expression": null,
                                    "flags": 32,
                                    "start": 41,
                                    "end": 47
                                },
                                "flags": 32,
                                "start": 24,
                                "end": 47
                            },
                            "flags": 16,
                            "start": 24,
                            "end": 47
                        }
                    ],
                    "flags": 32,
                    "start": 24,
                    "end": 47
                },
                "flags": 32,
                "start": 22,
                "end": 48
            },
            "returnType": null,
            "flags": 400,
            "start": 0,
            "end": 48
        }
    ],
    "isModule": false,
    "source": "async function * gen() {(yield)\n? yield : yield}\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 49
}
```

### Printed

```javascript

async function * gen() {
  ( yield) ?  yield :  yield;
}
```

### Diagnostics

```javascript
✔ No errors
```

