# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/yield/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/yield/gen/function_generator
> :: test: function generator
> :: case: function *gf(){ function yield(){}; }
## Options

`````js
{}
`````
## Input

`````js
function * gen() { function not_gen() { function *gf(){ function yield(){}; } }}
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
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 0,
                "end": 8
            },
            "asteriskToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 8,
                "end": 10
            },
            "name": {
                "kind": 134299649,
                "text": "gen",
                "rawText": "gen",
                "flags": 96,
                "start": 10,
                "end": 14
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 14,
                "end": 14
            },
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
                                "start": 18,
                                "end": 27
                            },
                            "asteriskToken": null,
                            "name": {
                                "kind": 134299649,
                                "text": "not_gen",
                                "rawText": "not_gen",
                                "flags": 96,
                                "start": 27,
                                "end": 35
                            },
                            "typeParameters": null,
                            "formalParameterList": {
                                "kind": 214,
                                "formalParameters": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 35,
                                "end": 35
                            },
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
                                                "start": 39,
                                                "end": 48
                                            },
                                            "asteriskToken": {
                                                "kind": 67143222,
                                                "flags": 64,
                                                "start": 48,
                                                "end": 50
                                            },
                                            "name": {
                                                "kind": 134299649,
                                                "text": "gf",
                                                "rawText": "gf",
                                                "flags": 96,
                                                "start": 50,
                                                "end": 52
                                            },
                                            "typeParameters": null,
                                            "formalParameterList": {
                                                "kind": 214,
                                                "formalParameters": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 52,
                                                "end": 52
                                            },
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
                                                                "start": 55,
                                                                "end": 64
                                                            },
                                                            "asteriskToken": null,
                                                            "name": {
                                                                "kind": 134299649,
                                                                "text": "yield",
                                                                "rawText": "yield",
                                                                "flags": 96,
                                                                "start": 64,
                                                                "end": 70
                                                            },
                                                            "typeParameters": null,
                                                            "formalParameterList": {
                                                                "kind": 214,
                                                                "formalParameters": [],
                                                                "trailingComma": false,
                                                                "flags": 32,
                                                                "start": 70,
                                                                "end": 70
                                                            },
                                                            "contents": {
                                                                "kind": 216,
                                                                "functionStatementList": {
                                                                    "kind": 217,
                                                                    "directives": [],
                                                                    "statements": [],
                                                                    "flags": 32,
                                                                    "start": 73,
                                                                    "end": 73
                                                                },
                                                                "flags": 32,
                                                                "start": 72,
                                                                "end": 74
                                                            },
                                                            "returnType": null,
                                                            "flags": 16,
                                                            "start": 55,
                                                            "end": 74
                                                        },
                                                        {
                                                            "kind": 168,
                                                            "flags": 16,
                                                            "start": 74,
                                                            "end": 75
                                                        }
                                                    ],
                                                    "flags": 32,
                                                    "start": 55,
                                                    "end": 75
                                                },
                                                "flags": 32,
                                                "start": 54,
                                                "end": 77
                                            },
                                            "returnType": null,
                                            "flags": 272,
                                            "start": 39,
                                            "end": 77
                                        }
                                    ],
                                    "flags": 32,
                                    "start": 39,
                                    "end": 77
                                },
                                "flags": 32,
                                "start": 37,
                                "end": 79
                            },
                            "returnType": null,
                            "flags": 16,
                            "start": 18,
                            "end": 79
                        }
                    ],
                    "flags": 32,
                    "start": 18,
                    "end": 79
                },
                "flags": 32,
                "start": 16,
                "end": 80
            },
            "returnType": null,
            "flags": 272,
            "start": 0,
            "end": 80
        }
    ],
    "isModule": false,
    "source": "function * gen() { function not_gen() { function *gf(){ function yield(){}; } }}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 80
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Cannot use 'yield' as a name on a async generator declaration - start: 64, end: 70

```

