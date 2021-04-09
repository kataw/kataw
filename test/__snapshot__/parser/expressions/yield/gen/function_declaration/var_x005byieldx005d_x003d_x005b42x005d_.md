# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: function declaration
> :: case: var [yield] = [42];
## Input

`````js
function not_gen() { var [yield] = [42]; }}
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
                                            "kind": 201,
                                            "elementList": {
                                                "kind": 202,
                                                "elements": [
                                                    {
                                                        "kind": 244,
                                                        "ellipsisToken": null,
                                                        "binding": {
                                                            "kind": 81921,
                                                            "value": "yield",
                                                            "autofix": 0,
                                                            "flags": 768,
                                                            "start": 26,
                                                            "end": 31
                                                        },
                                                        "optionalToken": null,
                                                        "type": null,
                                                        "initializer": null,
                                                        "autofix": 0,
                                                        "flags": 256,
                                                        "start": 26,
                                                        "end": 31
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 26,
                                                "end": 31
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 24,
                                            "end": 32
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": {
                                            "kind": 119,
                                            "elementList": {
                                                "kind": 270,
                                                "elements": [
                                                    {
                                                        "kind": 81921,
                                                        "value": 42,
                                                        "autofix": 0,
                                                        "flags": 768,
                                                        "start": 36,
                                                        "end": 38
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 36,
                                                "end": 38
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 34,
                                            "end": 39
                                        },
                                        "autofix": 0,
                                        "flags": 128,
                                        "start": 24,
                                        "end": 39
                                    }
                                ],
                                "autofix": 0,
                                "flags": 128,
                                "start": 24,
                                "end": 39
                            },
                            "autofix": 0,
                            "flags": 128,
                            "start": 20,
                            "end": 40
                        }
                    ],
                    "multiline": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 20,
                    "end": 40
                },
                "autofix": 0,
                "flags": 256,
                "start": 18,
                "end": 42
            },
            "typeParameters": null,
            "returnType": null,
            "autofix": 0,
            "flags": 256,
            "start": 0,
            "end": 42
        }
    ],
    "isModule": false,
    "text": "function not_gen() { var [yield] = [42]; }}",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 42,
            "end": 43
        }
    ],
    "start": 0,
    "end": 43
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: function declaration
> :: case: var [yield] = [42];
## Input

`````js
function not_gen() { var [yield] = [42]; }}
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: function declaration
> :: case: var [yield] = [42];
## Input

`````js
function not_gen() { var [yield] = [42]; }}
`````
```

