# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: function generator
> :: case: function *a(){yield 2e308}
## Input

`````js
function * gen() { function not_gen() { function *a(){yield 2e308} }}
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
                                                "end": 50
                                            },
                                            "name": {
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 768,
                                                "start": 50,
                                                "end": 51
                                            },
                                            "formalParameters": {
                                                "kind": 214,
                                                "formalParameterList": [],
                                                "trailingComma": false,
                                                "flags": 256,
                                                "start": 51,
                                                "end": 53
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
                                                                "kind": 229,
                                                                "yieldKeyword": {
                                                                    "kind": 8454253,
                                                                    "flags": 54,
                                                                    "start": 0,
                                                                    "end": 59
                                                                },
                                                                "delegate": false,
                                                                "asteriskToken": null,
                                                                "expression": {
                                                                    "kind": 201392130,
                                                                    "text": null,
                                                                    "rawText": "2e308",
                                                                    "flags": 768,
                                                                    "start": 59,
                                                                    "end": 65
                                                                },
                                                                "flags": 256,
                                                                "start": 54,
                                                                "end": 65
                                                            },
                                                            "flags": 128,
                                                            "start": 54,
                                                            "end": 65
                                                        }
                                                    ],
                                                    "multiline": false,
                                                    "flags": 256,
                                                    "start": 54,
                                                    "end": 65
                                                },
                                                "flags": 256,
                                                "start": 53,
                                                "end": 66
                                            },
                                            "typeParameters": null,
                                            "returnType": null,
                                            "flags": 2176,
                                            "start": 39,
                                            "end": 66
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 256,
                                    "start": 39,
                                    "end": 66
                                },
                                "flags": 256,
                                "start": 37,
                                "end": 68
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "flags": 128,
                            "start": 18,
                            "end": 68
                        }
                    ],
                    "multiline": false,
                    "flags": 256,
                    "start": 18,
                    "end": 68
                },
                "flags": 256,
                "start": 16,
                "end": 69
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 2176,
            "start": 0,
            "end": 69
        }
    ],
    "isModule": false,
    "text": "function * gen() { function not_gen() { function *a(){yield 2e308} }}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 69
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

