# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: function declaration
> :: case: function *a(){yield 2e308}
## Input

`````js
function not_gen() { function *a(){yield 2e308} }}
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
                                "end": 31
                            },
                            "name": {
                                "kind": 81921,
                                "text": "a",
                                "rawText": "a",
                                "flags": 768,
                                "start": 31,
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
                                                "kind": 229,
                                                "yieldKeyword": {
                                                    "kind": 8454253,
                                                    "flags": 768,
                                                    "start": 35,
                                                    "end": 40
                                                },
                                                "delegate": false,
                                                "asteriskToken": null,
                                                "expression": {
                                                    "kind": 81921,
                                                    "text": null,
                                                    "rawText": "2e308",
                                                    "flags": 768,
                                                    "start": 40,
                                                    "end": 46
                                                },
                                                "flags": 256,
                                                "start": 35,
                                                "end": 46
                                            },
                                            "flags": 128,
                                            "start": 35,
                                            "end": 46
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 256,
                                    "start": 35,
                                    "end": 46
                                },
                                "flags": 256,
                                "start": 34,
                                "end": 47
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "flags": 2304,
                            "start": 20,
                            "end": 47
                        }
                    ],
                    "multiline": false,
                    "flags": 256,
                    "start": 20,
                    "end": 47
                },
                "flags": 256,
                "start": 18,
                "end": 49
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 256,
            "start": 0,
            "end": 49
        }
    ],
    "isModule": false,
    "text": "function not_gen() { function *a(){yield 2e308} }}",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 49,
            "end": 50
        }
    ],
    "start": 0,
    "end": 50
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: function declaration
> :: case: function *a(){yield 2e308}
## Input

`````js
function not_gen() { function *a(){yield 2e308} }}
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: function declaration
> :: case: function *a(){yield 2e308}
## Input

`````js
function not_gen() { function *a(){yield 2e308} }}
`````
```

