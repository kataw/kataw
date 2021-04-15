# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: class-gen
> :: case: class C { constructor() { super(); } }
## Input

`````js
class C { *method() { class C { constructor() { super(); } } } }
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
                "kind": 37814352,
                "flags": 768,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "C",
                "rawText": "C",
                "flags": 768,
                "start": 5,
                "end": 7
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
                            "start": 9,
                            "end": 9
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 256,
                        "start": 9,
                        "end": 11
                    },
                    {
                        "kind": 278,
                        "decorators": null,
                        "staticToken": null,
                        "method": {
                            "kind": 209,
                            "name": {
                                "kind": 134299649,
                                "text": "method",
                                "rawText": "method",
                                "flags": 768,
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
                                                "kind": 37814352,
                                                "flags": 768,
                                                "start": 21,
                                                "end": 27
                                            },
                                            "name": {
                                                "kind": 134299649,
                                                "text": "C",
                                                "rawText": "C",
                                                "flags": 768,
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
                                                        "decorators": null,
                                                        "staticToken": null,
                                                        "method": {
                                                            "kind": 209,
                                                            "name": {
                                                                "kind": 134299649,
                                                                "text": "constructor",
                                                                "rawText": "constructor",
                                                                "flags": 768,
                                                                "start": 31,
                                                                "end": 43
                                                            },
                                                            "typeParameters": null,
                                                            "formalParameters": {
                                                                "kind": 214,
                                                                "formalParameterList": [],
                                                                "trailingComma": false,
                                                                "flags": 0,
                                                                "start": 44,
                                                                "end": 45
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
                                                                                        "flags": 768,
                                                                                        "start": 47,
                                                                                        "end": 53
                                                                                    },
                                                                                    "flags": 768,
                                                                                    "start": 47,
                                                                                    "end": 53
                                                                                },
                                                                                "argumentList": {
                                                                                    "kind": 256,
                                                                                    "elements": [],
                                                                                    "trailingComma": false,
                                                                                    "flags": 256,
                                                                                    "start": 54,
                                                                                    "end": 54
                                                                                },
                                                                                "flags": 256,
                                                                                "start": 47,
                                                                                "end": 55
                                                                            },
                                                                            "flags": 128,
                                                                            "start": 47,
                                                                            "end": 56
                                                                        }
                                                                    ],
                                                                    "multiline": false,
                                                                    "flags": 256,
                                                                    "start": 47,
                                                                    "end": 56
                                                                },
                                                                "flags": 256,
                                                                "start": 45,
                                                                "end": 58
                                                            },
                                                            "flags": 0,
                                                            "start": 43,
                                                            "end": 58
                                                        },
                                                        "flags": 256,
                                                        "start": 31,
                                                        "end": 58
                                                    }
                                                ],
                                                "flags": 256,
                                                "start": 31,
                                                "end": 60
                                            },
                                            "flags": 128,
                                            "start": 21,
                                            "end": 60
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 256,
                                    "start": 21,
                                    "end": 60
                                },
                                "flags": 256,
                                "start": 19,
                                "end": 62
                            },
                            "flags": 0,
                            "start": 17,
                            "end": 62
                        },
                        "flags": 256,
                        "start": 11,
                        "end": 62
                    }
                ],
                "flags": 256,
                "start": 9,
                "end": 64
            },
            "flags": 128,
            "start": 0,
            "end": 64
        }
    ],
    "isModule": false,
    "text": "class C { *method() { class C { constructor() { super(); } } } }",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 18,
            "error": "A rest element cannot have an initializer",
            "start": 9,
            "end": 11
        },
        {
            "kind": 2,
            "source": 2,
            "code": 73,
            "error": "'super' can only be referenced in members of derived classes or object literal expressions",
            "start": 53,
            "end": 54
        }
    ],
    "start": 0,
    "end": 64
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

