# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: function declaration
> :: case: function* gf() { yield++; }
## Input

`````js
function not_gen() { function* gf() { yield++; } }}
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
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37814362,
                "flags": 768,
                "start": 0,
                "end": 8
            },
            "generatorToken": null,
            "name": {
                "kind": 81921,
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
                            "asyncKeyword": null,
                            "functionKeyword": {
                                "kind": 37814362,
                                "flags": 768,
                                "start": 20,
                                "end": 29
                            },
                            "generatorToken": {
                                "kind": 67143222,
                                "flags": 768,
                                "start": 29,
                                "end": 30
                            },
                            "name": {
                                "kind": 81921,
                                "text": "gf",
                                "rawText": "gf",
                                "flags": 768,
                                "start": 30,
                                "end": 33
                            },
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 256,
                                "start": 33,
                                "end": 35
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
                                                    "flags": 768,
                                                    "start": 37,
                                                    "end": 43
                                                },
                                                "delegate": false,
                                                "asteriskToken": null,
                                                "expression": {
                                                    "kind": 128,
                                                    "operandToken": {
                                                        "kind": 196635,
                                                        "flags": 768,
                                                        "start": 43,
                                                        "end": 45
                                                    },
                                                    "expression": {
                                                        "kind": 16637,
                                                        "text": "",
                                                        "autofix": 0,
                                                        "flags": 12,
                                                        "start": 45,
                                                        "end": 45
                                                    },
                                                    "flags": 256,
                                                    "start": 43,
                                                    "end": 45
                                                },
                                                "flags": 256,
                                                "start": 37,
                                                "end": 45
                                            },
                                            "flags": 128,
                                            "start": 37,
                                            "end": 46
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 256,
                                    "start": 37,
                                    "end": 46
                                },
                                "flags": 256,
                                "start": 35,
                                "end": 48
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "flags": 2304,
                            "start": 20,
                            "end": 48
                        }
                    ],
                    "multiline": false,
                    "flags": 256,
                    "start": 20,
                    "end": 48
                },
                "flags": 256,
                "start": 18,
                "end": 50
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 256,
            "start": 0,
            "end": 50
        }
    ],
    "isModule": false,
    "text": "function not_gen() { function* gf() { yield++; } }}",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 45,
            "end": 46
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 50,
            "end": 51
        }
    ],
    "start": 0,
    "end": 51
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: function declaration
> :: case: function* gf() { yield++; }
## Input

`````js
function not_gen() { function* gf() { yield++; } }}
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: function declaration
> :: case: function* gf() { yield++; }
## Input

`````js
function not_gen() { function* gf() { yield++; } }}
`````
```

