# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/declarations/function/async-generator-errors/autogen.md
- Path: kataw/test/__snapshot__/parser/declarations/function/async-generator-errors/gen/declaration
> :: test: declaration
> :: case: (async function * yield() { })
## Options

`````js
{}
`````
## Input

`````js
async function * gen() {(async function * yield() { })}

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
                                "kind": 121,
                                "expression": {
                                    "kind": 177,
                                    "asyncKeyword": {
                                        "kind": 82031,
                                        "flags": 64,
                                        "start": 25,
                                        "end": 30
                                    },
                                    "functionKeyword": {
                                        "kind": 37822554,
                                        "flags": 64,
                                        "start": 30,
                                        "end": 39
                                    },
                                    "generatorToken": {
                                        "kind": 67143222,
                                        "flags": 64,
                                        "start": 39,
                                        "end": 41
                                    },
                                    "name": {
                                        "kind": 134299649,
                                        "text": "yield",
                                        "rawText": "yield",
                                        "flags": 96,
                                        "start": 41,
                                        "end": 47
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 47,
                                        "end": 49
                                    },
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "start": 51,
                                            "end": 51
                                        },
                                        "flags": 32,
                                        "start": 49,
                                        "end": 53
                                    },
                                    "returnType": null,
                                    "flags": 416,
                                    "start": 25,
                                    "end": 53
                                },
                                "flags": 32,
                                "start": 24,
                                "end": 54
                            },
                            "flags": 16,
                            "start": 24,
                            "end": 54
                        }
                    ],
                    "flags": 32,
                    "start": 24,
                    "end": 54
                },
                "flags": 32,
                "start": 22,
                "end": 55
            },
            "returnType": null,
            "flags": 400,
            "start": 0,
            "end": 55
        }
    ],
    "isModule": false,
    "source": "async function * gen() {(async function * yield() { })}\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 56
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Cannot use 'yield' as a name on a generator function expression - start: 41, end: 47

```

