# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-29
- From: d
- Path: n
> :: test: class-gen
> :: case: class C { constructor() { super(); } }
## Input

`````js
class C { *method() { class C { constructor() { super(); } } } }
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
                            "generatorToken": {
                                "kind": 67143222,
                                "flags": 64,
                                "start": 9,
                                "end": 11
                            },
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
                                    "start": 11,
                                    "end": 17
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 18,
                                    "end": 19
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
                                                    "start": 21,
                                                    "end": 27
                                                },
                                                "name": {
                                                    "kind": 134299649,
                                                    "text": "C",
                                                    "rawText": "C",
                                                    "flags": 96,
                                                    "start": 27,
                                                    "end": 29
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
                                                                        "start": 31,
                                                                        "end": 43
                                                                    },
                                                                    "typeParameters": null,
                                                                    "formalParameters": {
                                                                        "kind": 214,
                                                                        "formalParameterList": [],
                                                                        "trailingComma": false,
                                                                        "flags": 2048,
                                                                        "start": 44,
                                                                        "end": 45
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
                                                                                                "start": 47,
                                                                                                "end": 53
                                                                                            },
                                                                                            "flags": 96,
                                                                                            "start": 47,
                                                                                            "end": 53
                                                                                        },
                                                                                        "argumentList": {
                                                                                            "kind": 256,
                                                                                            "elements": [],
                                                                                            "trailingComma": false,
                                                                                            "flags": 32,
                                                                                            "start": 54,
                                                                                            "end": 54
                                                                                        },
                                                                                        "flags": 268435488,
                                                                                        "start": 47,
                                                                                        "end": 55
                                                                                    },
                                                                                    "flags": 16,
                                                                                    "start": 47,
                                                                                    "end": 56
                                                                                }
                                                                            ],
                                                                            "flags": 32,
                                                                            "start": 47,
                                                                            "end": 56
                                                                        },
                                                                        "flags": 32,
                                                                        "start": 45,
                                                                        "end": 58
                                                                    },
                                                                    "flags": 2048,
                                                                    "start": 43,
                                                                    "end": 58
                                                                },
                                                                "flags": 2048,
                                                                "start": 31,
                                                                "end": 58
                                                            }
                                                        ],
                                                        "flags": 32,
                                                        "start": 31,
                                                        "end": 58
                                                    },
                                                    "flags": 29,
                                                    "start": 32,
                                                    "end": 60
                                                },
                                                "flags": 16,
                                                "start": 21,
                                                "end": 60
                                            }
                                        ],
                                        "flags": 32,
                                        "start": 21,
                                        "end": 60
                                    },
                                    "flags": 32,
                                    "start": 19,
                                    "end": 62
                                },
                                "flags": 0,
                                "start": 17,
                                "end": 62
                            },
                            "flags": 0,
                            "start": 9,
                            "end": 62
                        }
                    ],
                    "flags": 32,
                    "start": 9,
                    "end": 62
                },
                "flags": 7,
                "start": 32,
                "end": 64
            },
            "flags": 16,
            "start": 0,
            "end": 64
        }
    ],
    "isModule": false,
    "source": "class C { *method() { class C { constructor() { super(); } } } }",
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
✖ 'super' can only be referenced in members of derived classes or object literal expressions - start: 47, end: 54

```

