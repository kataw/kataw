# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: function declaration
> :: case: function *gf(){ function yield(){}; }
## Input

`````js
function not_gen() { function *gf(){ function yield(){}; } }}
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
                                "end": 31
                            },
                            "name": {
                                "kind": 81921,
                                "value": "gf",
                                "autofix": 0,
                                "flags": 768,
                                "start": 31,
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
                                            "kind": 176,
                                            "asyncToken": null,
                                            "generatorToken": null,
                                            "name": {
                                                "kind": 81921,
                                                "value": "yield",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 45,
                                                "end": 51
                                            },
                                            "formalParameters": {
                                                "kind": 214,
                                                "formalParameterList": [],
                                                "trailingComma": false,
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 52,
                                                "end": 53
                                            },
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "statements": [],
                                                    "multiline": false,
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 54,
                                                    "end": 54
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 53,
                                                "end": 55
                                            },
                                            "typeParameters": null,
                                            "returnType": null,
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 36,
                                            "end": 55
                                        },
                                        {
                                            "kind": 168,
                                            "autofix": 0,
                                            "flags": 128,
                                            "start": 55,
                                            "end": 56
                                        }
                                    ],
                                    "multiline": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 36,
                                    "end": 56
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 35,
                                "end": 58
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "autofix": 0,
                            "flags": 2304,
                            "start": 20,
                            "end": 58
                        }
                    ],
                    "multiline": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 20,
                    "end": 58
                },
                "autofix": 0,
                "flags": 256,
                "start": 18,
                "end": 60
            },
            "typeParameters": null,
            "returnType": null,
            "autofix": 0,
            "flags": 256,
            "start": 0,
            "end": 60
        }
    ],
    "isModule": false,
    "text": "function not_gen() { function *gf(){ function yield(){}; } }}",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 60,
            "end": 61
        }
    ],
    "start": 0,
    "end": 61
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: function declaration
> :: case: function *gf(){ function yield(){}; }
## Input

`````js
function not_gen() { function *gf(){ function yield(){}; } }}
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: function declaration
> :: case: function *gf(){ function yield(){}; }
## Input

`````js
function not_gen() { function *gf(){ function yield(){}; } }}
`````
```

