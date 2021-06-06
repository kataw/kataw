# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw/test/__snapshot__/parser/declarations/function/async-generator-errors/autogen.md
- Path: kataw/test/__snapshot__/parser/declarations/function/async-generator-errors/gen/expression
> :: test: expression
> :: case: function await() { }
## Input

`````js
({ async * gen () {function await() { }} })
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
                                    "flags": 64,
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
                                                    "asyncKeyword": null,
                                                    "functionKeyword": {
                                                        "kind": 37822554,
                                                        "flags": 64,
                                                        "start": 19,
                                                        "end": 27
                                                    },
                                                    "generatorToken": null,
                                                    "name": {
                                                        "kind": 134299649,
                                                        "text": "await",
                                                        "rawText": "await",
                                                        "flags": 96,
                                                        "start": 27,
                                                        "end": 33
                                                    },
                                                    "formalParameters": {
                                                        "kind": 214,
                                                        "formalParameterList": [],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "start": 33,
                                                        "end": 35
                                                    },
                                                    "contents": {
                                                        "kind": 216,
                                                        "functionStatementList": {
                                                            "kind": 217,
                                                            "directives": [],
                                                            "statements": [],
                                                            "flags": 32,
                                                            "start": 37,
                                                            "end": 37
                                                        },
                                                        "flags": 32,
                                                        "start": 35,
                                                        "end": 39
                                                    },
                                                    "typeParameters": null,
                                                    "returnType": null,
                                                    "flags": 16,
                                                    "start": 19,
                                                    "end": 39
                                                }
                                            ],
                                            "flags": 32,
                                            "start": 19,
                                            "end": 39
                                        },
                                        "flags": 32,
                                        "start": 17,
                                        "end": 40
                                    },
                                    "flags": 416,
                                    "start": 14,
                                    "end": 40
                                },
                                "flags": 32,
                                "start": 2,
                                "end": 40
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 2,
                        "end": 40
                    },
                    "flags": 48,
                    "start": 1,
                    "end": 42
                },
                "flags": 32,
                "start": 0,
                "end": 43
            },
            "flags": 16,
            "start": 0,
            "end": 43
        }
    ],
    "isModule": false,
    "source": "({ async * gen () {function await() { }} })",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 43
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Cannot use 'await' as a name on a async function declaration - start: 27, end: 33

```

