# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/yield/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/yield/gen/function_declaration
> :: test: function declaration
> :: case: function* gf() { class C { *yield() { } } }
## Options

`````js
{}
`````
## Input

`````js
function not_gen() { function* gf() { class C { *yield() { } } } }}
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
                "flags": 64,
                "start": 0,
                "end": 8
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "not_gen",
                "rawText": "not_gen",
                "flags": 96,
                "start": 8,
                "end": 16
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
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
                                "flags": 64,
                                "start": 20,
                                "end": 29
                            },
                            "asteriskToken": {
                                "kind": 67143222,
                                "flags": 64,
                                "start": 29,
                                "end": 30
                            },
                            "name": {
                                "kind": 134299649,
                                "text": "gf",
                                "rawText": "gf",
                                "flags": 96,
                                "start": 30,
                                "end": 33
                            },
                            "typeParameters": null,
                            "formalParameterList": {
                                "kind": 214,
                                "formalParameters": [],
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
                                            "kind": 178,
                                            "declareKeyword": null,
                                            "decorators": null,
                                            "classKeyword": {
                                                "kind": 37822544,
                                                "flags": 80,
                                                "start": 37,
                                                "end": 43
                                            },
                                            "name": {
                                                "kind": 134299649,
                                                "text": "C",
                                                "rawText": "C",
                                                "flags": 96,
                                                "start": 43,
                                                "end": 45
                                            },
                                            "typeParameters": null,
                                            "tail": {
                                                "kind": 277,
                                                "classHeritage": null,
                                                "body": {
                                                    "kind": 303,
                                                    "elements": [
                                                        {
                                                            "kind": 278,
                                                            "declareToken": null,
                                                            "decorators": null,
                                                            "asteriskToken": {
                                                                "kind": 67143222,
                                                                "flags": 64,
                                                                "start": 47,
                                                                "end": 49
                                                            },
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
                                                                    "start": 49,
                                                                    "end": 54
                                                                },
                                                                "typeParameters": null,
                                                                "formalParameterList": {
                                                                    "kind": 214,
                                                                    "formalParameters": [],
                                                                    "trailingComma": false,
                                                                    "flags": 0,
                                                                    "start": 55,
                                                                    "end": 56
                                                                },
                                                                "returnType": null,
                                                                "contents": {
                                                                    "kind": 216,
                                                                    "functionStatementList": {
                                                                        "kind": 217,
                                                                        "directives": [],
                                                                        "statements": [],
                                                                        "flags": 32,
                                                                        "start": 58,
                                                                        "end": 58
                                                                    },
                                                                    "flags": 32,
                                                                    "start": 56,
                                                                    "end": 60
                                                                },
                                                                "flags": 0,
                                                                "start": 54,
                                                                "end": 60
                                                            },
                                                            "flags": 0,
                                                            "start": 47,
                                                            "end": 60
                                                        }
                                                    ],
                                                    "flags": 32,
                                                    "start": 47,
                                                    "end": 60
                                                },
                                                "flags": 45,
                                                "start": 32,
                                                "end": 62
                                            },
                                            "flags": 16,
                                            "start": 37,
                                            "end": 62
                                        }
                                    ],
                                    "flags": 32,
                                    "start": 37,
                                    "end": 62
                                },
                                "flags": 32,
                                "start": 35,
                                "end": 64
                            },
                            "returnType": null,
                            "flags": 272,
                            "start": 20,
                            "end": 64
                        }
                    ],
                    "flags": 32,
                    "start": 20,
                    "end": 64
                },
                "flags": 32,
                "start": 18,
                "end": 66
            },
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 66
        }
    ],
    "isModule": false,
    "source": "function not_gen() { function* gf() { class C { *yield() { } } } }}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 67
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Declaration or statement expected - start: 66, end: 67

```

