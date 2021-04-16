# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: function generator
> :: case: function* gf() { class C { *yield() { } } }
## Input

`````js
function * gen() { function not_gen() { function* gf() { class C { *yield() { } } } }}
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
                "flags": 768,
                "start": 0,
                "end": 8
            },
            "generatorToken": {
                "kind": 67143222,
                "flags": 768,
                "start": 8,
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
                                "flags": 768,
                                "start": 18,
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
                                                "flags": 768,
                                                "start": 39,
                                                "end": 48
                                            },
                                            "generatorToken": {
                                                "kind": 67143222,
                                                "flags": 768,
                                                "start": 48,
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
                                                            "kind": 178,
                                                            "declareKeyword": null,
                                                            "decorators": null,
                                                            "classKeyword": {
                                                                "kind": 37822544,
                                                                "flags": 768,
                                                                "start": 56,
                                                                "end": 62
                                                            },
                                                            "name": {
                                                                "kind": 134299649,
                                                                "text": "C",
                                                                "rawText": "C",
                                                                "flags": 768,
                                                                "start": 62,
                                                                "end": 64
                                                            },
                                                            "typeParameters": null,
                                                            "classHeritage": null,
                                                            "members": {
                                                                "kind": 277,
                                                                "elements": [
                                                                    {
                                                                        "kind": 280,
                                                                        "decorators": null,
                                                                        "declaredToken": null,
                                                                        "staticToken": null,
                                                                        "key": {
                                                                            "kind": 16637,
                                                                            "text": "",
                                                                            "autofix": 0,
                                                                            "flags": 12,
                                                                            "start": 66,
                                                                            "end": 66
                                                                        },
                                                                        "optionalToken": null,
                                                                        "type": null,
                                                                        "initializer": null,
                                                                        "flags": 256,
                                                                        "start": 66,
                                                                        "end": 68
                                                                    },
                                                                    {
                                                                        "kind": 278,
                                                                        "declareToken": null,
                                                                        "decorators": null,
                                                                        "staticToken": null,
                                                                        "method": {
                                                                            "kind": 209,
                                                                            "name": {
                                                                                "kind": 134299649,
                                                                                "text": "yield",
                                                                                "rawText": "yield",
                                                                                "flags": 768,
                                                                                "start": 68,
                                                                                "end": 73
                                                                            },
                                                                            "typeParameters": null,
                                                                            "formalParameters": {
                                                                                "kind": 214,
                                                                                "formalParameterList": [],
                                                                                "trailingComma": false,
                                                                                "flags": 0,
                                                                                "start": 74,
                                                                                "end": 75
                                                                            },
                                                                            "type": null,
                                                                            "contents": {
                                                                                "kind": 216,
                                                                                "functionStatementList": {
                                                                                    "kind": 217,
                                                                                    "directives": [],
                                                                                    "statements": [],
                                                                                    "multiline": false,
                                                                                    "flags": 256,
                                                                                    "start": 77,
                                                                                    "end": 77
                                                                                },
                                                                                "flags": 256,
                                                                                "start": 75,
                                                                                "end": 79
                                                                            },
                                                                            "flags": 0,
                                                                            "start": 73,
                                                                            "end": 79
                                                                        },
                                                                        "flags": 256,
                                                                        "start": 68,
                                                                        "end": 79
                                                                    }
                                                                ],
                                                                "flags": 256,
                                                                "start": 66,
                                                                "end": 81
                                                            },
                                                            "flags": 128,
                                                            "start": 56,
                                                            "end": 81
                                                        }
                                                    ],
                                                    "multiline": false,
                                                    "flags": 256,
                                                    "start": 56,
                                                    "end": 81
                                                },
                                                "flags": 256,
                                                "start": 54,
                                                "end": 83
                                            },
                                            "typeParameters": null,
                                            "returnType": null,
                                            "flags": 2176,
                                            "start": 39,
                                            "end": 83
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 256,
                                    "start": 39,
                                    "end": 83
                                },
                                "flags": 256,
                                "start": 37,
                                "end": 85
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "flags": 128,
                            "start": 18,
                            "end": 85
                        }
                    ],
                    "multiline": false,
                    "flags": 256,
                    "start": 18,
                    "end": 85
                },
                "flags": 256,
                "start": 16,
                "end": 86
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 2176,
            "start": 0,
            "end": 86
        }
    ],
    "isModule": false,
    "text": "function * gen() { function not_gen() { function* gf() { class C { *yield() { } } } }}",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 18,
            "error": "A rest element cannot have an initializer",
            "start": 66,
            "end": 68
        }
    ],
    "start": 0,
    "end": 86
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

