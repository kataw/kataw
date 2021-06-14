# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/declarations/function/async-generator-errors/autogen.md
- Path: kataw/test/__snapshot__/parser/declarations/function/async-generator-errors/gen/expression
> :: test: expression
> :: case: async function * foo(yield) { }
## Options

`````js
{}
`````
## Input

`````js
({ async * gen () {async function * foo(yield) { }} })
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 257,
                                "asyncKeyword": {
                                    "kind": 82031,
                                    "flags": 352,
                                    "start": 2,
                                    "end": 8
                                },
                                "generatorToken": {
                                    "kind": 67143222,
                                    "flags": 64,
                                    "start": 8,
                                    "end": 10
                                },
                                "getKeyword": null,
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "gen",
                                        "rawText": "gen",
                                        "flags": 96,
                                        "start": 10,
                                        "end": 14
                                    },
                                    "typeParameters": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 416,
                                        "start": 16,
                                        "end": 17
                                    },
                                    "returnType": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [
                                                {
                                                    "kind": 176,
                                                    "declareKeyword": null,
                                                    "asyncKeyword": {
                                                        "kind": 82031,
                                                        "flags": 64,
                                                        "start": 19,
                                                        "end": 24
                                                    },
                                                    "functionKeyword": {
                                                        "kind": 37822554,
                                                        "flags": 64,
                                                        "start": 24,
                                                        "end": 33
                                                    },
                                                    "generatorToken": {
                                                        "kind": 67143222,
                                                        "flags": 64,
                                                        "start": 33,
                                                        "end": 35
                                                    },
                                                    "name": {
                                                        "kind": 134299649,
                                                        "text": "foo",
                                                        "rawText": "foo",
                                                        "flags": 96,
                                                        "start": 35,
                                                        "end": 39
                                                    },
                                                    "formalParameters": {
                                                        "kind": 214,
                                                        "formalParameterList": [
                                                            {
                                                                "kind": 134299649,
                                                                "text": "yield",
                                                                "rawText": "yield",
                                                                "flags": 96,
                                                                "start": 40,
                                                                "end": 45
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "start": 39,
                                                        "end": 46
                                                    },
                                                    "contents": {
                                                        "kind": 216,
                                                        "functionStatementList": {
                                                            "kind": 217,
                                                            "directives": [],
                                                            "statements": [],
                                                            "flags": 32,
                                                            "start": 48,
                                                            "end": 48
                                                        },
                                                        "flags": 32,
                                                        "start": 46,
                                                        "end": 50
                                                    },
                                                    "typeParameters": null,
                                                    "returnType": null,
                                                    "flags": 400,
                                                    "start": 19,
                                                    "end": 50
                                                }
                                            ],
                                            "flags": 32,
                                            "start": 19,
                                            "end": 50
                                        },
                                        "flags": 32,
                                        "start": 17,
                                        "end": 51
                                    },
                                    "flags": 416,
                                    "start": 14,
                                    "end": 51
                                },
                                "flags": 32,
                                "start": 2,
                                "end": 51
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 2,
                        "end": 51
                    },
                    "flags": 48,
                    "start": 1,
                    "end": 53
                },
                "flags": 32,
                "start": 0,
                "end": 54
            },
            "flags": 16,
            "start": 0,
            "end": 54
        }
    ],
    "isModule": false,
    "source": "({ async * gen () {async function * foo(yield) { }} })",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 54
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ `yield` expression cannot be used in function parameters - start: 40, end: 45

```

