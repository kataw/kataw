# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: d
> :: test: assignment paren wrapped
> :: case: functi\u006fn
## Input

`````js
(functi\u006fn = x);
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 125,
                    "left": {
                        "kind": 177,
                        "asyncKeyword": null,
                        "functionKeyword": {
                            "kind": 37814362,
                            "flags": 768,
                            "start": 1,
                            "end": 14
                        },
                        "generatorToken": null,
                        "name": {
                            "kind": 16637,
                            "text": "",
                            "autofix": 0,
                            "flags": 12,
                            "start": 14,
                            "end": 14
                        },
                        "formalParameters": {
                            "kind": 214,
                            "formalParameterList": [],
                            "trailingComma": false,
                            "flags": 256,
                            "start": 14,
                            "end": 14
                        },
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "directives": [],
                                "statements": [],
                                "multiline": false,
                                "flags": 256,
                                "start": 14,
                                "end": 14
                            },
                            "flags": 256,
                            "start": 14,
                            "end": 14
                        },
                        "typeParameters": null,
                        "returnType": null,
                        "flags": 256,
                        "start": 1,
                        "end": 14
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 768,
                        "start": 14,
                        "end": 16
                    },
                    "right": {
                        "kind": 81921,
                        "text": "x",
                        "rawText": "x",
                        "flags": 768,
                        "start": 16,
                        "end": 18
                    },
                    "flags": 256,
                    "start": 1,
                    "end": 18
                },
                "flags": 256,
                "start": 0,
                "end": 19
            },
            "flags": 128,
            "start": 0,
            "end": 20
        }
    ],
    "isModule": false,
    "text": "(functi\\u006fn = x);",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 14,
            "end": 16
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 14,
            "end": 16
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 14,
            "end": 16
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 14,
            "end": 16
        },
        {
            "kind": 2,
            "source": 2,
            "code": 24,
            "error": "The left-hand side of an assignment expression must be a variable or a property access",
            "start": 14,
            "end": 16
        }
    ],
    "start": 0,
    "end": 20
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: d
> :: test: assignment paren wrapped
> :: case: functi\u006fn
## Input

`````js
(functi\u006fn = x);
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: d
> :: test: assignment paren wrapped
> :: case: functi\u006fn
## Input

`````js
(functi\u006fn = x);
`````
```

