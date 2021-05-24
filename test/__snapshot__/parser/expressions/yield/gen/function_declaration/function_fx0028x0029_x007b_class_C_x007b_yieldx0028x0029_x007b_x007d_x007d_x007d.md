# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-21
- From: d
- Path: n
> :: test: function declaration
> :: case: function f() { class C { yield() { } } }
## Input

`````js
function not_gen() { function f() { class C { yield() { } } } }}
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
                            "generatorToken": null,
                            "name": {
                                "kind": 134299649,
                                "text": "f",
                                "rawText": "f",
                                "flags": 96,
                                "start": 29,
                                "end": 31
                            },
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 32,
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
                                            "declareKeyword": null,
                                            "decorators": null,
                                            "classKeyword": {
                                                "kind": 37822544,
                                                "flags": 0,
                                                "start": 35,
                                                "end": 41
                                            },
                                            "name": {
                                                "kind": 134299649,
                                                "text": "C",
                                                "rawText": "C",
                                                "flags": 96,
                                                "start": 41,
                                                "end": 43
                                            },
                                            "typeParameters": null,
                                            "tail": {
                                                "kind": 277,
                                                "classHeritage": null,
                                                "body": {
                                                    "kind": 262,
                                                    "elements": [
                                                        {
                                                            "kind": 278,
                                                            "declareToken": null,
                                                            "decorators": null,
                                                            "generatorToken": null,
                                                            "staticKeyword": null,
                                                            "asyncKeyword": null,
                                                            "setKeyword": null,
                                                            "getKeyword": null,
                                                            "method": {
                                                                "kind": 209,
                                                                "name": {
                                                                    "kind": 134299649,
                                                                    "text": "yield",
                                                                    "rawText": "yield",
                                                                    "flags": 96,
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
                                                                "returnType": null,
                                                                "contents": {
                                                                    "kind": 216,
                                                                    "functionStatementList": {
                                                                        "kind": 217,
                                                                        "directives": [],
                                                                        "statements": [],
                                                                        "flags": 32,
                                                                        "start": 55,
                                                                        "end": 55
                                                                    },
                                                                    "flags": 32,
                                                                    "start": 53,
                                                                    "end": 57
                                                                },
                                                                "flags": 0,
                                                                "start": 51,
                                                                "end": 57
                                                            },
                                                            "flags": 0,
                                                            "start": 45,
                                                            "end": 57
                                                        }
                                                    ],
                                                    "flags": 32,
                                                    "start": 45,
                                                    "end": 57
                                                },
                                                "flags": 43,
                                                "start": 32,
                                                "end": 59
                                            },
                                            "flags": 16,
                                            "start": 35,
                                            "end": 59
                                        }
                                    ],
                                    "flags": 32,
                                    "start": 35,
                                    "end": 59
                                },
                                "flags": 32,
                                "start": 33,
                                "end": 61
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "flags": 16,
                            "start": 20,
                            "end": 61
                        }
                    ],
                    "flags": 32,
                    "start": 20,
                    "end": 61
                },
                "flags": 32,
                "start": 18,
                "end": 63
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 63
        }
    ],
    "isModule": false,
    "source": "function not_gen() { function f() { class C { yield() { } } } }}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 64
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected. 'yield' is a reserved word in strict mode - start: 45, end: 51
✖ Declaration or statement expected - start: 63, end: 64

```

