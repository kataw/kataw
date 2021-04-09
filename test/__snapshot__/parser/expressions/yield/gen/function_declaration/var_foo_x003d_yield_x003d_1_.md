# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: function declaration
> :: case: var foo = yield = 1;
## Input

`````js
function not_gen() { var foo = yield = 1; }}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 176,
            "asyncToken": null,
            "generatorToken": null,
            "name": {
                "kind": 81921,
                "value": "not_gen",
                "autofix": 0,
                "flags": 768,
                "start": 8,
                "end": 16
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "autofix": 0,
                "flags": 256,
                "start": 17,
                "end": 18
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "statements": [
                        {
                            "kind": 155,
                            "declarationList": {
                                "kind": 156,
                                "declarations": [
                                    {
                                        "kind": 157,
                                        "binding": {
                                            "kind": 81921,
                                            "value": "foo",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 24,
                                            "end": 28
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": {
                                            "kind": 125,
                                            "left": {
                                                "kind": 81921,
                                                "value": "yield",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 30,
                                                "end": 36
                                            },
                                            "operatorToken": {
                                                "kind": 67174402,
                                                "autofix": 0,
                                                "flags": 0,
                                                "start": 30,
                                                "end": 38
                                            },
                                            "right": {
                                                "kind": 81921,
                                                "value": 1,
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 38,
                                                "end": 40
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 30,
                                            "end": 40
                                        },
                                        "autofix": 0,
                                        "flags": 128,
                                        "start": 24,
                                        "end": 40
                                    }
                                ],
                                "autofix": 0,
                                "flags": 128,
                                "start": 24,
                                "end": 40
                            },
                            "autofix": 0,
                            "flags": 128,
                            "start": 20,
                            "end": 41
                        }
                    ],
                    "multiline": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 20,
                    "end": 41
                },
                "autofix": 0,
                "flags": 256,
                "start": 18,
                "end": 43
            },
            "typeParameters": null,
            "returnType": null,
            "autofix": 0,
            "flags": 256,
            "start": 0,
            "end": 43
        }
    ],
    "isModule": false,
    "text": "function not_gen() { var foo = yield = 1; }}",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 43,
            "end": 44
        }
    ],
    "start": 0,
    "end": 44
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: function declaration
> :: case: var foo = yield = 1;
## Input

`````js
function not_gen() { var foo = yield = 1; }}
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: function declaration
> :: case: var foo = yield = 1;
## Input

`````js
function not_gen() { var foo = yield = 1; }}
`````
```

