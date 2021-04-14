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
                                            "kind": 178,
                                            "decorators": null,
                                            "classKeyword": {
                                                "kind": 37814352,
                                                "flags": 768,
                                                "start": 37,
                                                "end": 43
                                            },
                                            "name": {
                                                "kind": 81921,
                                                "text": "C",
                                                "rawText": "C",
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
                                                            "kind": 16637,
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
                                                                "text": "yield",
                                                                "rawText": "yield",
                                                                "flags": 768,
                                                                "start": 49,
                                                                "end": 54
                                                            },
                                                            "typeParameters": null,
                                                            "formalParameters": {
                                                                "kind": 214,
                                                                "formalParameterList": [],
                                                                "trailingComma": false,
                                                                "flags": 0,
                                                                "start": 55,
                                                                "end": 56
                                                            },
                                                            "type": null,
                                                            "contents": {
                                                                "kind": 216,
                                                                "functionStatementList": {
                                                                    "kind": 217,
                                                                    "directives": [],
                                                                    "statements": [],
                                                                    "multiline": false,
                                                                    "flags": 256,
                                                                    "start": 58,
                                                                    "end": 58
                                                                },
                                                                "flags": 256,
                                                                "start": 56,
                                                                "end": 60
                                                            },
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
                                    "flags": 256,
                                    "start": 37,
                                    "end": 62
                                },
                                "flags": 256,
                                "start": 35,
                                "end": 64
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "flags": 2304,
                            "start": 20,
                            "end": 64
                        }
                    ],
                    "multiline": false,
                    "flags": 256,
                    "start": 20,
                    "end": 64
                },
                "flags": 256,
                "start": 18,
                "end": 66
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 256,
            "start": 0,
            "end": 66
        }
    ],
    "isModule": false,
    "text": "function not_gen() { function* gf() { class C { *yield() { } } } }}",
    "fileName": "__root__",
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

