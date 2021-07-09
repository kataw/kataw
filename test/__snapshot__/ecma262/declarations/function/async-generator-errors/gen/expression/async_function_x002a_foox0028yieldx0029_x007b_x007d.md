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
                                "kind": 351,
                                "asyncKeyword": {
                                    "kind": 82031,
                                    "flags": 352,
                                    "transformFlags": 0,
                                    "start": 2,
                                    "end": 8
                                },
                                "asteriskToken": {
                                    "kind": 67143222,
                                    "flags": 64,
                                    "transformFlags": 32,
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
                                        "transformFlags": 0,
                                        "start": 10,
                                        "end": 14
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [],
                                        "trailingComma": false,
                                        "flags": 416,
                                        "transformFlags": 0,
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
                                                        "transformFlags": 0,
                                                        "start": 19,
                                                        "end": 24
                                                    },
                                                    "functionKeyword": {
                                                        "kind": 37822554,
                                                        "flags": 64,
                                                        "transformFlags": 0,
                                                        "start": 24,
                                                        "end": 33
                                                    },
                                                    "asteriskToken": {
                                                        "kind": 67143222,
                                                        "flags": 64,
                                                        "transformFlags": 32,
                                                        "start": 33,
                                                        "end": 35
                                                    },
                                                    "name": {
                                                        "kind": 134299649,
                                                        "text": "foo",
                                                        "rawText": "foo",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 35,
                                                        "end": 39
                                                    },
                                                    "typeParameters": null,
                                                    "formalParameterList": {
                                                        "kind": 214,
                                                        "formalParameters": [
                                                            {
                                                                "kind": 134299649,
                                                                "text": "yield",
                                                                "rawText": "yield",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 40,
                                                                "end": 45
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "transformFlags": 0,
                                                        "start": 40,
                                                        "end": 45
                                                    },
                                                    "contents": {
                                                        "kind": 216,
                                                        "functionStatementList": {
                                                            "kind": 217,
                                                            "directives": [],
                                                            "statements": [],
                                                            "flags": 32,
                                                            "transformFlags": 0,
                                                            "start": 48,
                                                            "end": 48
                                                        },
                                                        "flags": 32,
                                                        "transformFlags": 0,
                                                        "start": 46,
                                                        "end": 50
                                                    },
                                                    "returnType": null,
                                                    "flags": 400,
                                                    "transformFlags": 0,
                                                    "start": 19,
                                                    "end": 50
                                                }
                                            ],
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 19,
                                            "end": 50
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 17,
                                        "end": 51
                                    },
                                    "flags": 416,
                                    "transformFlags": 0,
                                    "start": 14,
                                    "end": 51
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 2,
                                "end": 51
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 2,
                        "end": 51
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 1,
                    "end": 53
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 34,
                "end": 54
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 54
        }
    ],
    "isModule": false,
    "source": "({ async * gen () {async function * foo(yield) { }} })",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
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

