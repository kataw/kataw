# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/declarations/function/async-generator/autogen.md
- Path: kataw/test/__snapshot__/parser/declarations/function/async-generator/gen/declaration
> :: test: declaration
> :: case: x = class extends (null, yield) { }
## Options

`````js
{}
`````
## Input

`````js
async function * gen() {x = class extends (null, yield) { }}

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
                                                    "kind": 132,
                                                    "expressions": [
                                                        {
                                                            "kind": 138477575,
                                                            "flags": 96,
                                                            "start": 43,
                                                            "end": 47
                                                        },
                                                        {
                                                            "kind": 229,
                                                            "yieldKeyword": {
                                                                "kind": 8454253,
                                                                "flags": 64,
                                                                "start": 48,
                                                                "end": 54
                                                            },
                                                            "delegate": false,
                                                            "asteriskToken": null,
                                                            "expression": null,
                                                            "flags": 32,
                                                            "start": 48,
                                                            "end": 54
                                                        }
                                                    ],
                                                    "flags": 32,
                                                    "start": 41,
                                                    "end": 54
                                                },
                                                "flags": 32,
                                                "start": 41,
                                                "end": 55
                                            },
                                            "typeParameter": null,
                                            "flags": 16,
                                            "start": 41,
                                            "end": 55
                                        },
                                        "body": {
                                            "kind": 303,
                                            "elements": [],
                                            "flags": 32,
                                            "start": 57,
                                            "end": 57
                                        },
                                        "flags": 33,
                                        "start": 32,
                                        "end": 59
                                    },
                                    "flags": 32,
                                    "start": 27,
                                    "end": 59
                                },
                                "flags": 32,
                                "start": 24,
                                "end": 59
                            },
                            "flags": 16,
                            "start": 24,
                            "end": 59
                        }
                    ],
                    "flags": 32,
                    "start": 24,
                    "end": 59
                },
                "flags": 32,
                "start": 22,
                "end": 60
            },
            "returnType": null,
            "flags": 400,
            "start": 0,
            "end": 60
        }
    ],
    "isModule": false,
    "source": "async function * gen() {x = class extends (null, yield) { }}\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 61
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

