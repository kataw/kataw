# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: class-gen
> :: case: class C { method() { super(); } }
## Input

`````js
class C { *method() { class C { method() { super(); } } } }
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
                "flags": 0,
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
            "classHeritage": null,
            "members": {
                "kind": 277,
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
                            "type": null,
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
                                            "classHeritage": null,
                                            "members": {
                                                "kind": 277,
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
                                                                "start": 31,
                                                                "end": 38
                                                            },
                                                            "typeParameters": null,
                                                            "formalParameters": {
                                                                "kind": 214,
                                                                "formalParameterList": [],
                                                                "trailingComma": false,
                                                                "flags": 0,
                                                                "start": 39,
                                                                "end": 40
                                                            },
                                                            "type": null,
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
                                                                                        "flags": 0,
                                                                                        "start": 42,
                                                                                        "end": 48
                                                                                    },
                                                                                    "flags": 96,
                                                                                    "start": 42,
                                                                                    "end": 48
                                                                                },
                                                                                "argumentList": {
                                                                                    "kind": 256,
                                                                                    "elements": [],
                                                                                    "trailingComma": false,
                                                                                    "flags": 32,
                                                                                    "start": 49,
                                                                                    "end": 49
                                                                                },
                                                                                "flags": 268435488,
                                                                                "start": 42,
                                                                                "end": 50
                                                                            },
                                                                            "flags": 16,
                                                                            "start": 42,
                                                                            "end": 51
                                                                        }
                                                                    ],
                                                                    "flags": 32,
                                                                    "start": 42,
                                                                    "end": 51
                                                                },
                                                                "flags": 32,
                                                                "start": 40,
                                                                "end": 53
                                                            },
                                                            "flags": 0,
                                                            "start": 38,
                                                            "end": 53
                                                        },
                                                        "flags": 0,
                                                        "start": 31,
                                                        "end": 53
                                                    }
                                                ],
                                                "flags": 32,
                                                "start": 31,
                                                "end": 55
                                            },
                                            "flags": 16,
                                            "start": 21,
                                            "end": 55
                                        }
                                    ],
                                    "flags": 32,
                                    "start": 21,
                                    "end": 55
                                },
                                "flags": 32,
                                "start": 19,
                                "end": 57
                            },
                            "flags": 0,
                            "start": 17,
                            "end": 57
                        },
                        "flags": 0,
                        "start": 9,
                        "end": 57
                    }
                ],
                "flags": 32,
                "start": 9,
                "end": 59
            },
            "flags": 16,
            "start": 0,
            "end": 59
        }
    ],
    "isModule": false,
    "source": "class C { *method() { class C { method() { super(); } } } }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 59
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'super' can only be referenced in members of derived classes or object literal expressions - start: 48, end: 49

```

