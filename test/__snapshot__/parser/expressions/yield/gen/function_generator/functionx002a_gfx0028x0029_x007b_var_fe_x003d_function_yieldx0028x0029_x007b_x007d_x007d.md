# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: function generator
> :: case: function* gf() { var fe = function yield() { } }
## Input

`````js
function * gen() { function not_gen() { function* gf() { var fe = function yield() { } } }}
`````

## Output

### Hybrid CST

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
                "flags": 0,
                "start": 0,
                "end": 8
            },
            "generatorToken": {
                "kind": 67143222,
                "flags": 8,
                "start": 512,
                "end": 10
            },
            "name": {
                "kind": 134299649,
                "text": "gen",
                "rawText": "gen",
                "flags": 768,
                "start": 10,
                "end": 14
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 256,
                "start": 14,
                "end": 16
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
                                "flags": 18,
                                "start": 0,
                                "end": 27
                            },
                            "generatorToken": null,
                            "name": {
                                "kind": 134299649,
                                "text": "not_gen",
                                "rawText": "not_gen",
                                "flags": 768,
                                "start": 27,
                                "end": 35
                            },
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 256,
                                "start": 35,
                                "end": 37
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
                                                "flags": 39,
                                                "start": 0,
                                                "end": 48
                                            },
                                            "generatorToken": {
                                                "kind": 67143222,
                                                "flags": 48,
                                                "start": 512,
                                                "end": 49
                                            },
                                            "name": {
                                                "kind": 134299649,
                                                "text": "gf",
                                                "rawText": "gf",
                                                "flags": 768,
                                                "start": 49,
                                                "end": 52
                                            },
                                            "formalParameters": {
                                                "kind": 214,
                                                "formalParameterList": [],
                                                "trailingComma": false,
                                                "flags": 256,
                                                "start": 52,
                                                "end": 54
                                            },
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [
                                                        {
                                                            "kind": 155,
                                                            "declareKeyword": null,
                                                            "varKeyword": {
                                                                "kind": 37757002,
                                                                "flags": 56,
                                                                "start": 0,
                                                                "end": 60
                                                            },
                                                            "declarationList": {
                                                                "kind": 156,
                                                                "declarations": [
                                                                    {
                                                                        "kind": 157,
                                                                        "binding": {
                                                                            "kind": 134299649,
                                                                            "text": "fe",
                                                                            "rawText": "fe",
                                                                            "flags": 768,
                                                                            "start": 60,
                                                                            "end": 63
                                                                        },
                                                                        "optionalToken": null,
                                                                        "type": null,
                                                                        "initializer": {
                                                                            "kind": 177,
                                                                            "asyncKeyword": null,
                                                                            "functionKeyword": {
                                                                                "kind": 37822554,
                                                                                "flags": 65,
                                                                                "start": 0,
                                                                                "end": 74
                                                                            },
                                                                            "generatorToken": null,
                                                                            "name": {
                                                                                "kind": 134299649,
                                                                                "text": "yield",
                                                                                "rawText": "yield",
                                                                                "flags": 768,
                                                                                "start": 74,
                                                                                "end": 80
                                                                            },
                                                                            "formalParameters": {
                                                                                "kind": 214,
                                                                                "formalParameterList": [],
                                                                                "trailingComma": false,
                                                                                "flags": 256,
                                                                                "start": 80,
                                                                                "end": 82
                                                                            },
                                                                            "contents": {
                                                                                "kind": 216,
                                                                                "functionStatementList": {
                                                                                    "kind": 217,
                                                                                    "directives": [],
                                                                                    "statements": [],
                                                                                    "multiline": false,
                                                                                    "flags": 256,
                                                                                    "start": 84,
                                                                                    "end": 84
                                                                                },
                                                                                "flags": 256,
                                                                                "start": 82,
                                                                                "end": 86
                                                                            },
                                                                            "typeParameters": null,
                                                                            "returnType": null,
                                                                            "flags": 256,
                                                                            "start": 65,
                                                                            "end": 86
                                                                        },
                                                                        "flags": 128,
                                                                        "start": 60,
                                                                        "end": 86
                                                                    }
                                                                ],
                                                                "flags": 128,
                                                                "start": 60,
                                                                "end": 86
                                                            },
                                                            "flags": 128,
                                                            "start": 56,
                                                            "end": 86
                                                        }
                                                    ],
                                                    "multiline": false,
                                                    "flags": 256,
                                                    "start": 56,
                                                    "end": 86
                                                },
                                                "flags": 256,
                                                "start": 54,
                                                "end": 88
                                            },
                                            "typeParameters": null,
                                            "returnType": null,
                                            "flags": 2176,
                                            "start": 39,
                                            "end": 88
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 256,
                                    "start": 39,
                                    "end": 88
                                },
                                "flags": 256,
                                "start": 37,
                                "end": 90
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "flags": 128,
                            "start": 18,
                            "end": 90
                        }
                    ],
                    "multiline": false,
                    "flags": 256,
                    "start": 18,
                    "end": 90
                },
                "flags": 256,
                "start": 16,
                "end": 91
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 2176,
            "start": 0,
            "end": 91
        }
    ],
    "isModule": false,
    "text": "function * gen() { function not_gen() { function* gf() { var fe = function yield() { } } }}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 91
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Identifier expected. 'yield' is a reserved word in strict mode - start: 74, end: 80

```

