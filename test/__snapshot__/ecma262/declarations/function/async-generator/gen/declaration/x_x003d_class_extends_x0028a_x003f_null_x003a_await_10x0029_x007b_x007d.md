# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/declarations/function/async-generator/autogen.md
- Path: kataw/test/__snapshot__/parser/declarations/function/async-generator/gen/declaration
> :: test: declaration
> :: case: x = class extends (a ? null : await 10) { }
## Options

`````js
{}
`````
## Input

`````js
async function * gen() {x = class extends (a ? null : await 10) { }}

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
                                "kind": 125,
                                "left": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 24,
                                    "end": 25
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 96,
                                    "start": 25,
                                    "end": 27
                                },
                                "right": {
                                    "kind": 189,
                                    "decorators": null,
                                    "classKeyword": {
                                        "kind": 37822544,
                                        "flags": 64,
                                        "start": 27,
                                        "end": 33
                                    },
                                    "name": null,
                                    "typeParameters": null,
                                    "tail": {
                                        "kind": 277,
                                        "classHeritage": {
                                            "kind": 279,
                                            "extendsKeyword": {
                                                "kind": 4194391,
                                                "flags": 80,
                                                "start": 33,
                                                "end": 41
                                            },
                                            "expression": {
                                                "kind": 121,
                                                "expression": {
                                                    "kind": 197,
                                                    "shortCircuit": {
                                                        "kind": 134299649,
                                                        "text": "a",
                                                        "rawText": "a",
                                                        "flags": 96,
                                                        "start": 43,
                                                        "end": 44
                                                    },
                                                    "questionToken": {
                                                        "kind": 134217750,
                                                        "flags": 64,
                                                        "start": 44,
                                                        "end": 46
                                                    },
                                                    "consequent": {
                                                        "kind": 138477575,
                                                        "flags": 96,
                                                        "start": 46,
                                                        "end": 51
                                                    },
                                                    "colonToken": {
                                                        "kind": 21,
                                                        "flags": 64,
                                                        "start": 51,
                                                        "end": 53
                                                    },
                                                    "alternate": {
                                                        "kind": 208,
                                                        "awaitKeyword": {
                                                            "kind": 82196,
                                                            "flags": 64,
                                                            "start": 53,
                                                            "end": 59
                                                        },
                                                        "expression": {
                                                            "kind": 201392130,
                                                            "text": 10,
                                                            "rawText": "10",
                                                            "flags": 96,
                                                            "start": 59,
                                                            "end": 62
                                                        },
                                                        "flags": 32,
                                                        "start": 53,
                                                        "end": 62
                                                    },
                                                    "flags": 32,
                                                    "start": 41,
                                                    "end": 62
                                                },
                                                "flags": 32,
                                                "start": 41,
                                                "end": 63
                                            },
                                            "typeParameter": null,
                                            "flags": 16,
                                            "start": 41,
                                            "end": 63
                                        },
                                        "body": {
                                            "kind": 303,
                                            "elements": [],
                                            "flags": 32,
                                            "start": 65,
                                            "end": 65
                                        },
                                        "flags": 33,
                                        "start": 32,
                                        "end": 67
                                    },
                                    "flags": 32,
                                    "start": 27,
                                    "end": 67
                                },
                                "flags": 32,
                                "start": 24,
                                "end": 67
                            },
                            "flags": 16,
                            "start": 24,
                            "end": 67
                        }
                    ],
                    "flags": 32,
                    "start": 24,
                    "end": 67
                },
                "flags": 32,
                "start": 22,
                "end": 68
            },
            "returnType": null,
            "flags": 400,
            "start": 0,
            "end": 68
        }
    ],
    "isModule": false,
    "source": "async function * gen() {x = class extends (a ? null : await 10) { }}\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 69
}
```

### Printed

```javascript

async function * gen() {
  x = class   {};
}
```

### Diagnostics

```javascript
✔ No errors
```

