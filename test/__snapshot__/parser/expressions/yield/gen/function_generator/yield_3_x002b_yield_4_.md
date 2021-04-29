# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: function generator
> :: case: yield 3 + yield 4;
## Input

`````js
function * gen() { function not_gen() { yield 3 + yield 4; }}
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
                                                "kind": 134299649,
                                                "text": "yield",
                                                "rawText": "yield",
                                                "flags": 96,
                                                "start": 39,
                                                "end": 45
                                            },
                                            "flags": 16,
                                            "start": 39,
                                            "end": 45
                                        },
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 198,
                                                "left": {
                                                    "kind": 201392130,
                                                    "text": 3,
                                                    "rawText": "3",
                                                    "flags": 96,
                                                    "start": 45,
                                                    "end": 47
                                                },
                                                "operatorToken": {
                                                    "kind": 34098,
                                                    "flags": 64,
                                                    "start": 47,
                                                    "end": 49
                                                },
                                                "right": {
                                                    "kind": 134299649,
                                                    "text": "yield",
                                                    "rawText": "yield",
                                                    "flags": 96,
                                                    "start": 49,
                                                    "end": 55
                                                },
                                                "flags": 32,
                                                "start": 45,
                                                "end": 55
                                            },
                                            "flags": 16,
                                            "start": 45,
                                            "end": 55
                                        },
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 201392130,
                                                "text": 4,
                                                "rawText": "4",
                                                "flags": 96,
                                                "start": 55,
                                                "end": 57
                                            },
                                            "flags": 16,
                                            "start": 55,
                                            "end": 58
                                        }
                                    ],
                                    "flags": 32,
                                    "start": 39,
                                    "end": 58
                                },
                                "flags": 32,
                                "start": 37,
                                "end": 60
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "flags": 16,
                            "start": 18,
                            "end": 60
                        }
                    ],
                    "flags": 32,
                    "start": 18,
                    "end": 60
                },
                "flags": 32,
                "start": 16,
                "end": 61
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 272,
            "start": 0,
            "end": 61
        }
    ],
    "isModule": false,
    "source": "function * gen() { function not_gen() { yield 3 + yield 4; }}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 61
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

