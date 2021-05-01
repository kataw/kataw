# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: class-gen
> :: case: var f = function { super(); }
## Input

`````js
class C { *method() { var f = function { super(); } } }
`````

## Output

### Hybrid CST

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
                "original": "C",
                "text": "C",
                "rawText": " C",
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
                                "original": "method",
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
                                            "kind": 155,
                                            "declareKeyword": null,
                                            "varKeyword": {
                                                "kind": 37757002,
                                                "flags": 0,
                                                "start": 21,
                                                "end": 25
                                            },
                                            "declarationList": {
                                                "kind": 156,
                                                "declarations": [
                                                    {
                                                        "kind": 157,
                                                        "binding": {
                                                            "kind": 134299649,
                                                            "original": "f",
                                                            "text": "f",
                                                            "rawText": " f",
                                                            "flags": 96,
                                                            "start": 25,
                                                            "end": 27
                                                        },
                                                        "optionalToken": null,
                                                        "type": null,
                                                        "initializer": {
                                                            "kind": 177,
                                                            "asyncKeyword": null,
                                                            "functionKeyword": {
                                                                "kind": 37822554,
                                                                "flags": 0,
                                                                "start": 29,
                                                                "end": 38
                                                            },
                                                            "generatorToken": null,
                                                            "name": null,
                                                            "formalParameters": {
                                                                "kind": 214,
                                                                "formalParameterList": [],
                                                                "trailingComma": false,
                                                                "flags": 32,
                                                                "start": 38,
                                                                "end": 38
                                                            },
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
                                                                                        "start": 40,
                                                                                        "end": 46
                                                                                    },
                                                                                    "flags": 96,
                                                                                    "start": 40,
                                                                                    "end": 46
                                                                                },
                                                                                "argumentList": {
                                                                                    "kind": 256,
                                                                                    "elements": [],
                                                                                    "trailingComma": false,
                                                                                    "flags": 32,
                                                                                    "start": 47,
                                                                                    "end": 47
                                                                                },
                                                                                "flags": 32,
                                                                                "start": 40,
                                                                                "end": 48
                                                                            },
                                                                            "flags": 16,
                                                                            "start": 40,
                                                                            "end": 49
                                                                        }
                                                                    ],
                                                                    "flags": 32,
                                                                    "start": 40,
                                                                    "end": 49
                                                                },
                                                                "flags": 32,
                                                                "start": 38,
                                                                "end": 51
                                                            },
                                                            "typeParameters": null,
                                                            "returnType": null,
                                                            "flags": 32,
                                                            "start": 29,
                                                            "end": 51
                                                        },
                                                        "flags": 16,
                                                        "start": 25,
                                                        "end": 51
                                                    }
                                                ],
                                                "flags": 16,
                                                "start": 25,
                                                "end": 51
                                            },
                                            "flags": 16,
                                            "start": 21,
                                            "end": 51
                                        }
                                    ],
                                    "flags": 32,
                                    "start": 21,
                                    "end": 51
                                },
                                "flags": 32,
                                "start": 19,
                                "end": 53
                            },
                            "flags": 0,
                            "start": 17,
                            "end": 53
                        },
                        "flags": 0,
                        "start": 9,
                        "end": 53
                    }
                ],
                "flags": 32,
                "start": 9,
                "end": 55
            },
            "flags": 16,
            "start": 0,
            "end": 55
        }
    ],
    "isModule": false,
    "source": "class C { *method() { var f = function { super(); } } }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 55
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ 'super' can only be referenced in members of derived classes or object literal expressions - start: 46, end: 47

```

