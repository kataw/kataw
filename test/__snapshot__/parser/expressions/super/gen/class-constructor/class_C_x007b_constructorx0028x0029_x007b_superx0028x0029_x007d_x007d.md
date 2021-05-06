# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: class-constructor
> :: case: class C { constructor() { super(); } }
## Input

`````js
class C { constructor() { class C { constructor() { super(); } } } }
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
                                                                "text": "constructor",
                                                                "rawText": "constructor",
                                                                "flags": 96,
                                                                "start": 35,
                                                                "end": 47
                                                            },
                                                            "typeParameters": null,
                                                            "formalParameters": {
                                                                "kind": 214,
                                                                "formalParameterList": [],
                                                                "trailingComma": false,
                                                                "flags": 2048,
                                                                "start": 48,
                                                                "end": 49
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
                                                                                        "start": 51,
                                                                                        "end": 57
                                                                                    },
                                                                                    "flags": 96,
                                                                                    "start": 51,
                                                                                    "end": 57
                                                                                },
                                                                                "argumentList": {
                                                                                    "kind": 256,
                                                                                    "elements": [],
                                                                                    "trailingComma": false,
                                                                                    "flags": 32,
                                                                                    "start": 58,
                                                                                    "end": 58
                                                                                },
                                                                                "flags": 32,
                                                                                "start": 51,
                                                                                "end": 59
                                                                            },
                                                                            "flags": 16,
                                                                            "start": 51,
                                                                            "end": 60
                                                                        }
                                                                    ],
                                                                    "flags": 32,
                                                                    "start": 51,
                                                                    "end": 60
                                                                },
                                                                "flags": 32,
                                                                "start": 49,
                                                                "end": 62
                                                            },
                                                            "flags": 2048,
                                                            "start": 47,
                                                            "end": 62
                                                        },
                                                        "flags": 2048,
                                                        "start": 35,
                                                        "end": 62
                                                    }
                                                ],
                                                "flags": 32,
                                                "start": 35,
                                                "end": 64
                                            },
                                            "flags": 16,
                                            "start": 25,
                                            "end": 64
                                        }
                                    ],
                                    "flags": 32,
                                    "start": 25,
                                    "end": 64
                                },
                                "flags": 32,
                                "start": 23,
                                "end": 66
                            },
                            "flags": 2048,
                            "start": 21,
                            "end": 66
                        },
                        "flags": 2048,
                        "start": 9,
                        "end": 66
                    }
                ],
                "flags": 32,
                "start": 9,
                "end": 68
            },
            "flags": 16,
            "start": 0,
            "end": 68
        }
    ],
    "isModule": false,
    "source": "class C { constructor() { class C { constructor() { super(); } } } }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 68
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ 'super' can only be referenced in members of derived classes or object literal expressions - start: 57, end: 58

```

