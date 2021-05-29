# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-29
- From: kataw7/test\__snapshot__/parser/expressions/super/autogen.md
- Path: kataw7/test\__snapshot__\parser\expressions\super\gen\class-constructor
> :: test: class-constructor
> :: case: class C { method() { super(); } }
## Input

`````js
class C { constructor() { class C { method() { super(); } } } }
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 80,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "C",
                "rawText": "C",
                "flags": 96,
                "start": 5,
                "end": 7
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
                                    "text": "constructor",
                                    "rawText": "constructor",
                                    "flags": 96,
                                    "start": 9,
                                    "end": 21
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 2048,
                                    "start": 22,
                                    "end": 23
                                },
                                "returnType": null,
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
                                                    "start": 25,
                                                    "end": 31
                                                },
                                                "name": {
                                                    "kind": 134299649,
                                                    "text": "C",
                                                    "rawText": "C",
                                                    "flags": 96,
                                                    "start": 31,
                                                    "end": 33
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
                                                                        "text": "method",
                                                                        "rawText": "method",
                                                                        "flags": 96,
                                                                        "start": 35,
                                                                        "end": 42
                                                                    },
                                                                    "typeParameters": null,
                                                                    "formalParameters": {
                                                                        "kind": 214,
                                                                        "formalParameterList": [],
                                                                        "trailingComma": false,
                                                                        "flags": 0,
                                                                        "start": 43,
                                                                        "end": 44
                                                                    },
                                                                    "returnType": null,
                                                                    "contents": {
                                                                        "kind": 216,
                                                                        "functionStatementList": {
                                                                            "kind": 217,
                                                                            "directives": [],
                                                                            "statements": [
                                                                                {
                                                                                    "kind": 120,
                                                                                    "expression": {
                                                                                        "kind": 131,
                                                                                        "expression": {
                                                                                            "kind": 225,
                                                                                            "superKeyword": {
                                                                                                "kind": 4259935,
                                                                                                "flags": 96,
                                                                                                "start": 46,
                                                                                                "end": 52
                                                                                            },
                                                                                            "flags": 96,
                                                                                            "start": 46,
                                                                                            "end": 52
                                                                                        },
                                                                                        "argumentList": {
                                                                                            "kind": 256,
                                                                                            "elements": [],
                                                                                            "trailingComma": false,
                                                                                            "flags": 32,
                                                                                            "start": 53,
                                                                                            "end": 53
                                                                                        },
                                                                                        "flags": 268435488,
                                                                                        "start": 46,
                                                                                        "end": 54
                                                                                    },
                                                                                    "flags": 16,
                                                                                    "start": 46,
                                                                                    "end": 55
                                                                                }
                                                                            ],
                                                                            "flags": 32,
                                                                            "start": 46,
                                                                            "end": 55
                                                                        },
                                                                        "flags": 32,
                                                                        "start": 44,
                                                                        "end": 57
                                                                    },
                                                                    "flags": 0,
                                                                    "start": 42,
                                                                    "end": 57
                                                                },
                                                                "flags": 0,
                                                                "start": 35,
                                                                "end": 57
                                                            }
                                                        ],
                                                        "flags": 32,
                                                        "start": 35,
                                                        "end": 57
                                                    },
                                                    "flags": 33,
                                                    "start": 32,
                                                    "end": 59
                                                },
                                                "flags": 16,
                                                "start": 25,
                                                "end": 59
                                            }
                                        ],
                                        "flags": 32,
                                        "start": 25,
                                        "end": 59
                                    },
                                    "flags": 32,
                                    "start": 23,
                                    "end": 61
                                },
                                "flags": 2048,
                                "start": 21,
                                "end": 61
                            },
                            "flags": 2048,
                            "start": 9,
                            "end": 61
                        }
                    ],
                    "flags": 32,
                    "start": 9,
                    "end": 61
                },
                "flags": 7,
                "start": 32,
                "end": 63
            },
            "flags": 16,
            "start": 0,
            "end": 63
        }
    ],
    "isModule": false,
    "source": "class C { constructor() { class C { method() { super(); } } } }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 63
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'super' can only be referenced in members of derived classes or object literal expressions - start: 46, end: 53

```

