# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: function declaration
> :: case: function *a(){yield typeof 0}
## Input

`````js
function not_gen() { function *a(){yield typeof 0} }}
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
                                "end": 31
                            },
                            "name": {
                                "kind": 134299649,
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
                                                    "flags": 35,
                                                    "start": 0,
                                                    "end": 40
                                                },
                                                "delegate": false,
                                                "asteriskToken": null,
                                                "expression": {
                                                    "kind": 126,
                                                    "operandToken": {
                                                        "kind": 138477613,
                                                        "flags": 512,
                                                        "start": 40,
                                                        "end": 47
                                                    },
                                                    "expression": {
                                                        "kind": 201392130,
                                                        "text": 0,
                                                        "rawText": "0",
                                                        "flags": 768,
                                                        "start": 47,
                                                        "end": 49
                                                    },
                                                    "flags": 256,
                                                    "start": 40,
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
                                "end": 50
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "flags": 2176,
                            "start": 20,
                            "end": 50
                        }
                    ],
                    "multiline": false,
                    "flags": 256,
                    "start": 20,
                    "end": 50
                },
                "flags": 256,
                "start": 18,
                "end": 52
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 128,
            "start": 0,
            "end": 52
        }
    ],
    "isModule": false,
    "text": "function not_gen() { function *a(){yield typeof 0} }}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 53
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Statement expected - start: 52, end: 53

```

