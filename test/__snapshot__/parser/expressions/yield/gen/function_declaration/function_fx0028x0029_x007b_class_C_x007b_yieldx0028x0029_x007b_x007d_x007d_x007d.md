# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: function declaration
> :: case: function f() { class C { yield() { } } }
## Input

`````js
function not_gen() { function f() { class C { yield() { } } } }}
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
                            "generatorToken": null,
                            "name": {
                                "kind": 81921,
                                "text": "f",
                                "rawText": "f",
                                "flags": 768,
                                "start": 29,
                                "end": 31
                            },
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 256,
                                "start": 31,
                                "end": 33
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
                                                "start": 35,
                                                "end": 41
                                            },
                                            "name": {
                                                "kind": 81921,
                                                "text": "C",
                                                "rawText": "C",
                                                "flags": 768,
                                                "start": 41,
                                                "end": 43
                                            },
                                            "typeParameters": null,
                                            "classHeritage": null,
                                            "members": {
                                                "kind": 277,
                                                "elements": [
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
                                                                "start": 45,
                                                                "end": 51
                                                            },
                                                            "typeParameters": null,
                                                            "formalParameters": {
                                                                "kind": 214,
                                                                "formalParameterList": [],
                                                                "trailingComma": false,
                                                                "flags": 0,
                                                                "start": 52,
                                                                "end": 53
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
                                                                    "start": 55,
                                                                    "end": 55
                                                                },
                                                                "flags": 256,
                                                                "start": 53,
                                                                "end": 57
                                                            },
                                                            "flags": 0,
                                                            "start": 51,
                                                            "end": 57
                                                        },
                                                        "flags": 256,
                                                        "start": 45,
                                                        "end": 57
                                                    }
                                                ],
                                                "flags": 256,
                                                "start": 45,
                                                "end": 59
                                            },
                                            "flags": 128,
                                            "start": 35,
                                            "end": 59
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 256,
                                    "start": 35,
                                    "end": 59
                                },
                                "flags": 256,
                                "start": 33,
                                "end": 61
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "flags": 256,
                            "start": 20,
                            "end": 61
                        }
                    ],
                    "multiline": false,
                    "flags": 256,
                    "start": 20,
                    "end": 61
                },
                "flags": 256,
                "start": 18,
                "end": 63
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 256,
            "start": 0,
            "end": 63
        }
    ],
    "isModule": false,
    "text": "function not_gen() { function f() { class C { yield() { } } } }}",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 63,
            "end": 64
        }
    ],
    "start": 0,
    "end": 64
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: function declaration
> :: case: function f() { class C { yield() { } } }
## Input

`````js
function not_gen() { function f() { class C { yield() { } } } }}
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: function declaration
> :: case: function f() { class C { yield() { } } }
## Input

`````js
function not_gen() { function f() { class C { yield() { } } } }}
`````
```

