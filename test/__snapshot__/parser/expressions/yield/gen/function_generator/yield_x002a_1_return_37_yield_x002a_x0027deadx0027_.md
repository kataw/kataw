# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: function generator
> :: case: yield * 1; return 37; yield * 'dead';
## Input

`````js
function * gen() { function not_gen() { yield * 1; return 37; yield * 'dead'; }}
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
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
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
                                "flags": 0,
                                "start": 18,
                                "end": 27
                            },
                            "generatorToken": null,
                            "name": {
                                "kind": 134299649,
                                "text": "not_gen",
                                "rawText": "not_gen",
                                "flags": 96,
                                "start": 27,
                                "end": 35
                            },
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 32,
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
                                                "kind": 198,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "yield",
                                                    "rawText": "yield",
                                                    "flags": 96,
                                                    "start": 39,
                                                    "end": 45
                                                },
                                                "operatorToken": {
                                                    "kind": 67143222,
                                                    "flags": 64,
                                                    "start": 45,
                                                    "end": 47
                                                },
                                                "right": {
                                                    "kind": 201392130,
                                                    "text": 1,
                                                    "rawText": "1",
                                                    "flags": 96,
                                                    "start": 47,
                                                    "end": 49
                                                },
                                                "flags": 32,
                                                "start": 39,
                                                "end": 49
                                            },
                                            "flags": 16,
                                            "start": 39,
                                            "end": 50
                                        },
                                        {
                                            "kind": 161,
                                            "returnKeyword": {
                                                "kind": 37757022,
                                                "flags": 0,
                                                "start": 50,
                                                "end": 57
                                            },
                                            "expression": {
                                                "kind": 201392130,
                                                "text": 37,
                                                "rawText": "37",
                                                "flags": 96,
                                                "start": 57,
                                                "end": 60
                                            },
                                            "flags": 16,
                                            "start": 0,
                                            "end": 50
                                        },
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 198,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "yield",
                                                    "rawText": "yield",
                                                    "flags": 96,
                                                    "start": 61,
                                                    "end": 67
                                                },
                                                "operatorToken": {
                                                    "kind": 67143222,
                                                    "flags": 64,
                                                    "start": 67,
                                                    "end": 69
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "dead",
                                                    "rawText": "dead",
                                                    "flags": 4194400,
                                                    "start": 69,
                                                    "end": 76
                                                },
                                                "flags": 32,
                                                "start": 61,
                                                "end": 76
                                            },
                                            "flags": 16,
                                            "start": 61,
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
                            "typeParameters": null,
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
            "typeParameters": null,
            "returnType": null,
            "flags": 272,
            "start": 0,
            "end": 80
        }
    ],
    "isModule": false,
    "source": "function * gen() { function not_gen() { yield * 1; return 37; yield * 'dead'; }}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 80
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

