# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: function declaration
> :: case: function * gen() { (yield) ? yield : yield }
## Input

`````js
function not_gen() { function * gen() { (yield) ? yield : yield } }}
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
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "not_gen",
                "rawText": "not_gen",
                "flags": 768,
                "start": 8,
                "end": 16
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 256,
                "start": 16,
                "end": 18
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
                                "flags": 20,
                                "start": 0,
                                "end": 29
                            },
                            "generatorToken": {
                                "kind": 67143222,
                                "flags": 29,
                                "start": 512,
                                "end": 31
                            },
                            "name": {
                                "kind": 134299649,
                                "text": "gen",
                                "rawText": "gen",
                                "flags": 768,
                                "start": 31,
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
                                            "kind": 120,
                                            "expression": {
                                                "kind": 197,
                                                "shortCircuit": {
                                                    "kind": 121,
                                                    "expression": {
                                                        "kind": 229,
                                                        "yieldKeyword": {
                                                            "kind": 8454253,
                                                            "flags": 41,
                                                            "start": 0,
                                                            "end": 46
                                                        },
                                                        "delegate": false,
                                                        "asteriskToken": null,
                                                        "expression": null,
                                                        "flags": 256,
                                                        "start": 41,
                                                        "end": 46
                                                    },
                                                    "flags": 256,
                                                    "start": 39,
                                                    "end": 47
                                                },
                                                "questionToken": {
                                                    "kind": 134217750,
                                                    "flags": 47,
                                                    "start": 0,
                                                    "end": 49
                                                },
                                                "consequent": {
                                                    "kind": 229,
                                                    "yieldKeyword": {
                                                        "kind": 8454253,
                                                        "flags": 49,
                                                        "start": 0,
                                                        "end": 55
                                                    },
                                                    "delegate": false,
                                                    "asteriskToken": null,
                                                    "expression": null,
                                                    "flags": 256,
                                                    "start": 49,
                                                    "end": 55
                                                },
                                                "colonToken": {
                                                    "kind": 21,
                                                    "flags": 55,
                                                    "start": 0,
                                                    "end": 57
                                                },
                                                "alternate": {
                                                    "kind": 229,
                                                    "yieldKeyword": {
                                                        "kind": 8454253,
                                                        "flags": 57,
                                                        "start": 0,
                                                        "end": 63
                                                    },
                                                    "delegate": false,
                                                    "asteriskToken": null,
                                                    "expression": null,
                                                    "flags": 256,
                                                    "start": 57,
                                                    "end": 63
                                                },
                                                "flags": 256,
                                                "start": 39,
                                                "end": 63
                                            },
                                            "flags": 128,
                                            "start": 39,
                                            "end": 63
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 256,
                                    "start": 39,
                                    "end": 63
                                },
                                "flags": 256,
                                "start": 37,
                                "end": 65
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "flags": 2176,
                            "start": 20,
                            "end": 65
                        }
                    ],
                    "multiline": false,
                    "flags": 256,
                    "start": 20,
                    "end": 65
                },
                "flags": 256,
                "start": 18,
                "end": 67
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 128,
            "start": 0,
            "end": 67
        }
    ],
    "isModule": false,
    "text": "function not_gen() { function * gen() { (yield) ? yield : yield } }}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 68
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Statement expected - start: 67, end: 68

```

