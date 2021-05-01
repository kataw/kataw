# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: function generator
> :: case: var foo = yield = 1;
## Input

`````js
function * gen() { function not_gen() { var foo = yield = 1; }}
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
                "original": "gen",
                "text": "gen",
                "rawText": " gen",
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
                                "original": "not_gen",
                                "text": "not_gen",
                                "rawText": " not_gen",
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
                                            "kind": 155,
                                            "declareKeyword": null,
                                            "varKeyword": {
                                                "kind": 37757002,
                                                "flags": 0,
                                                "start": 39,
                                                "end": 43
                                            },
                                            "declarationList": {
                                                "kind": 156,
                                                "declarations": [
                                                    {
                                                        "kind": 157,
                                                        "binding": {
                                                            "kind": 134299649,
                                                            "original": "foo",
                                                            "text": "foo",
                                                            "rawText": " foo",
                                                            "flags": 96,
                                                            "start": 43,
                                                            "end": 47
                                                        },
                                                        "optionalToken": null,
                                                        "type": null,
                                                        "initializer": {
                                                            "kind": 125,
                                                            "left": {
                                                                "kind": 134299649,
                                                                "original": "yield",
                                                                "text": "yield",
                                                                "rawText": " yield",
                                                                "flags": 96,
                                                                "start": 49,
                                                                "end": 55
                                                            },
                                                            "operatorToken": {
                                                                "kind": 4125,
                                                                "flags": 64,
                                                                "start": 55,
                                                                "end": 57
                                                            },
                                                            "right": {
                                                                "kind": 201392130,
                                                                "text": 1,
                                                                "original": "1",
                                                                "rawText": " 1",
                                                                "flags": 96,
                                                                "start": 57,
                                                                "end": 59
                                                            },
                                                            "flags": 32,
                                                            "start": 49,
                                                            "end": 59
                                                        },
                                                        "flags": 16,
                                                        "start": 43,
                                                        "end": 59
                                                    }
                                                ],
                                                "flags": 16,
                                                "start": 43,
                                                "end": 59
                                            },
                                            "flags": 16,
                                            "start": 39,
                                            "end": 60
                                        }
                                    ],
                                    "flags": 32,
                                    "start": 39,
                                    "end": 60
                                },
                                "flags": 32,
                                "start": 37,
                                "end": 62
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "flags": 16,
                            "start": 18,
                            "end": 62
                        }
                    ],
                    "flags": 32,
                    "start": 18,
                    "end": 62
                },
                "flags": 32,
                "start": 16,
                "end": 63
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 272,
            "start": 0,
            "end": 63
        }
    ],
    "isModule": false,
    "source": "function * gen() { function not_gen() { var foo = yield = 1; }}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 63
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

