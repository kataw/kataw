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
### CST

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
                "flags": 96,
                "start": 8,
                "end": 16
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
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
                                "flags": 0,
                                "start": 20,
                                "end": 29
                            },
                            "generatorToken": {
                                "kind": 67143222,
                                "flags": 64,
                                "start": 29,
                                "end": 31
                            },
                            "name": {
                                "kind": 134299649,
                                "text": "gf",
                                "rawText": "gf",
                                "flags": 96,
                                "start": 31,
                                "end": 33
                            },
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 32,
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
                                            "kind": 176,
                                            "declareKeyword": null,
                                            "asyncKeyword": null,
                                            "functionKeyword": {
                                                "kind": 37822554,
                                                "flags": 0,
                                                "start": 36,
                                                "end": 45
                                            },
                                            "generatorToken": null,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "yield",
                                                "rawText": "yield",
                                                "flags": 96,
                                                "start": 45,
                                                "end": 51
                                            },
                                            "formalParameters": {
                                                "kind": 214,
                                                "formalParameterList": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 51,
                                                "end": 53
                                            },
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [],
                                                    "flags": 32,
                                                    "start": 54,
                                                    "end": 54
                                                },
                                                "flags": 32,
                                                "start": 53,
                                                "end": 55
                                            },
                                            "typeParameters": null,
                                            "returnType": null,
                                            "flags": 16,
                                            "start": 36,
                                            "end": 55
                                        },
                                        {
                                            "kind": 168,
                                            "flags": 16,
                                            "start": 55,
                                            "end": 56
                                        }
                                    ],
                                    "flags": 32,
                                    "start": 36,
                                    "end": 56
                                },
                                "flags": 32,
                                "start": 35,
                                "end": 58
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "flags": 272,
                            "start": 20,
                            "end": 58
                        }
                    ],
                    "flags": 32,
                    "start": 20,
                    "end": 58
                },
                "flags": 32,
                "start": 18,
                "end": 60
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 60
        }
    ],
    "isModule": false,
    "source": "function not_gen() { function *gf(){ function yield(){}; } }}",
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
✖ 'yield' cannot be used as an identifier here - start: 45, end: 51
✖ Declaration or statement expected - start: 60, end: 61

```

