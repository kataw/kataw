# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: function declaration
> :: case: function* gf() { class C { *yield() { } } }
## Input

`````js
function not_gen() { function* gf() { class C { *yield() { } } } }}
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
                            "kind": 176,
                            "asyncToken": null,
                            "generatorToken": {
                                "kind": 67143222,
                                "autofix": 0,
                                "flags": 0,
                                "start": 29,
                                "end": 30
                            },
                            "name": {
                                "kind": 81921,
                                "value": "gf",
                                "autofix": 0,
                                "flags": 768,
                                "start": 30,
                                "end": 33
                            },
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "autofix": 0,
                                "flags": 256,
                                "start": 34,
                                "end": 35
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "statements": [
                                        {
                                            "kind": 178,
                                            "decorators": null,
                                            "name": {
                                                "kind": 81921,
                                                "value": "C",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 43,
                                                "end": 45
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
                                                            "kind": 253,
                                                            "text": "",
                                                            "autofix": 0,
                                                            "flags": 12,
                                                            "start": 47,
                                                            "end": 47
                                                        },
                                                        "optionalToken": null,
                                                        "type": null,
                                                        "initializer": null,
                                                        "flags": 256,
                                                        "start": 47,
                                                        "end": 49
                                                    },
                                                    {
                                                        "kind": 278,
                                                        "decorators": null,
                                                        "staticToken": null,
                                                        "method": {
                                                            "kind": 209,
                                                            "name": {
                                                                "kind": 81921,
                                                                "value": "yield",
                                                                "autofix": 0,
                                                                "flags": 768,
                                                                "start": 49,
                                                                "end": 54
                                                            },
                                                            "typeParameters": null,
                                                            "formalParameters": {
                                                                "kind": 214,
                                                                "formalParameterList": [],
                                                                "trailingComma": false,
                                                                "autofix": 0,
                                                                "flags": 256,
                                                                "start": 55,
                                                                "end": 56
                                                            },
                                                            "type": null,
                                                            "contents": {
                                                                "kind": 216,
                                                                "functionStatementList": {
                                                                    "kind": 217,
                                                                    "statements": [],
                                                                    "multiline": false,
                                                                    "autofix": 0,
                                                                    "flags": 256,
                                                                    "start": 58,
                                                                    "end": 58
                                                                },
                                                                "autofix": 0,
                                                                "flags": 256,
                                                                "start": 56,
                                                                "end": 60
                                                            },
                                                            "autofix": 0,
                                                            "flags": 0,
                                                            "start": 54,
                                                            "end": 60
                                                        },
                                                        "flags": 256,
                                                        "start": 49,
                                                        "end": 60
                                                    }
                                                ],
                                                "flags": 256,
                                                "start": 47,
                                                "end": 62
                                            },
                                            "flags": 128,
                                            "start": 37,
                                            "end": 62
                                        }
                                    ],
                                    "multiline": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 37,
                                    "end": 62
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 35,
                                "end": 64
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "autofix": 0,
                            "flags": 2304,
                            "start": 20,
                            "end": 64
                        }
                    ],
                    "multiline": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 20,
                    "end": 64
                },
                "autofix": 0,
                "flags": 256,
                "start": 18,
                "end": 66
            },
            "typeParameters": null,
            "returnType": null,
            "autofix": 0,
            "flags": 256,
            "start": 0,
            "end": 66
        }
    ],
    "isModule": false,
    "text": "function not_gen() { function* gf() { class C { *yield() { } } } }}",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 18,
            "error": "A rest element cannot have an initializer",
            "start": 47,
            "end": 49
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 66,
            "end": 67
        }
    ],
    "start": 0,
    "end": 67
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: function declaration
> :: case: function* gf() { class C { *yield() { } } }
## Input

`````js
function not_gen() { function* gf() { class C { *yield() { } } } }}
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: function declaration
> :: case: function* gf() { class C { *yield() { } } }
## Input

`````js
function not_gen() { function* gf() { class C { *yield() { } } } }}
`````
```

