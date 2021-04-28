# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: function declaration
> :: case: function* g(){ x ? yield : y }
## Input

`````js
function not_gen() { function* g(){ x ? yield : y } }}
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
                                "end": 30
                            },
                            "name": {
                                "kind": 134299649,
                                "text": "g",
                                "rawText": "g",
                                "flags": 768,
                                "start": 30,
                                "end": 32
                            },
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 256,
                                "start": 32,
                                "end": 34
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
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 768,
                                                    "start": 35,
                                                    "end": 37
                                                },
                                                "questionToken": {
                                                    "kind": 134217750,
                                                    "flags": 37,
                                                    "start": 0,
                                                    "end": 39
                                                },
                                                "consequent": {
                                                    "kind": 229,
                                                    "yieldKeyword": {
                                                        "kind": 8454253,
                                                        "flags": 39,
                                                        "start": 0,
                                                        "end": 45
                                                    },
                                                    "delegate": false,
                                                    "asteriskToken": null,
                                                    "expression": null,
                                                    "flags": 256,
                                                    "start": 39,
                                                    "end": 45
                                                },
                                                "colonToken": {
                                                    "kind": 21,
                                                    "flags": 45,
                                                    "start": 0,
                                                    "end": 47
                                                },
                                                "alternate": {
                                                    "kind": 134299649,
                                                    "text": "y",
                                                    "rawText": "y",
                                                    "flags": 768,
                                                    "start": 47,
                                                    "end": 49
                                                },
                                                "flags": 256,
                                                "start": 35,
                                                "end": 49
                                            },
                                            "flags": 128,
                                            "start": 35,
                                            "end": 49
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 256,
                                    "start": 35,
                                    "end": 49
                                },
                                "flags": 256,
                                "start": 34,
                                "end": 51
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "flags": 2176,
                            "start": 20,
                            "end": 51
                        }
                    ],
                    "multiline": false,
                    "flags": 256,
                    "start": 20,
                    "end": 51
                },
                "flags": 256,
                "start": 18,
                "end": 53
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 128,
            "start": 0,
            "end": 53
        }
    ],
    "isModule": false,
    "text": "function not_gen() { function* g(){ x ? yield : y } }}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 54
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Statement expected - start: 53, end: 54

```

