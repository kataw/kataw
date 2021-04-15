# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: function generator
> :: case: async function wrap() { async function await() { } };
## Input

`````js
function * gen() { function not_gen() { async function wrap() { async function await() { } }; }}
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
                                            "asyncKeyword": {
                                                "kind": 82031,
                                                "flags": 768,
                                                "start": 39,
                                                "end": 45
                                            },
                                            "functionKeyword": {
                                                "kind": 37822554,
                                                "flags": 768,
                                                "start": 45,
                                                "end": 54
                                            },
                                            "generatorToken": null,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "wrap",
                                                "rawText": "wrap",
                                                "flags": 768,
                                                "start": 54,
                                                "end": 59
                                            },
                                            "formalParameters": {
                                                "kind": 214,
                                                "formalParameterList": [],
                                                "trailingComma": false,
                                                "flags": 256,
                                                "start": 59,
                                                "end": 61
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
                                                            "asyncKeyword": {
                                                                "kind": 82031,
                                                                "flags": 768,
                                                                "start": 63,
                                                                "end": 69
                                                            },
                                                            "functionKeyword": {
                                                                "kind": 37822554,
                                                                "flags": 768,
                                                                "start": 69,
                                                                "end": 78
                                                            },
                                                            "generatorToken": null,
                                                            "name": {
                                                                "kind": 134299649,
                                                                "text": "await",
                                                                "rawText": "await",
                                                                "flags": 768,
                                                                "start": 78,
                                                                "end": 84
                                                            },
                                                            "formalParameters": {
                                                                "kind": 214,
                                                                "formalParameterList": [],
                                                                "trailingComma": false,
                                                                "flags": 256,
                                                                "start": 84,
                                                                "end": 86
                                                            },
                                                            "contents": {
                                                                "kind": 216,
                                                                "functionStatementList": {
                                                                    "kind": 217,
                                                                    "directives": [],
                                                                    "statements": [],
                                                                    "multiline": false,
                                                                    "flags": 256,
                                                                    "start": 88,
                                                                    "end": 88
                                                                },
                                                                "flags": 256,
                                                                "start": 86,
                                                                "end": 90
                                                            },
                                                            "typeParameters": null,
                                                            "returnType": null,
                                                            "flags": 1152,
                                                            "start": 63,
                                                            "end": 90
                                                        }
                                                    ],
                                                    "multiline": false,
                                                    "flags": 256,
                                                    "start": 63,
                                                    "end": 90
                                                },
                                                "flags": 256,
                                                "start": 61,
                                                "end": 92
                                            },
                                            "typeParameters": null,
                                            "returnType": null,
                                            "flags": 1152,
                                            "start": 39,
                                            "end": 92
                                        },
                                        {
                                            "kind": 168,
                                            "flags": 128,
                                            "start": 92,
                                            "end": 93
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 256,
                                    "start": 39,
                                    "end": 93
                                },
                                "flags": 256,
                                "start": 37,
                                "end": 95
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "flags": 128,
                            "start": 18,
                            "end": 95
                        }
                    ],
                    "multiline": false,
                    "flags": 256,
                    "start": 18,
                    "end": 95
                },
                "flags": 256,
                "start": 16,
                "end": 96
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 2176,
            "start": 0,
            "end": 96
        }
    ],
    "isModule": false,
    "text": "function * gen() { function not_gen() { async function wrap() { async function await() { } }; }}",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 96
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

