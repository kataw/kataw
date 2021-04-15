# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: class-constructor
> :: case: var f = function*() { super(); }
## Input

`````js
class C { constructor() { var f = function*() { super(); } } }
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
                                "start": 9,
                                "end": 21
                            },
                            "typeParameters": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
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
                                            "kind": 155,
                                            "declareKeyword": null,
                                            "varKeyword": {
                                                "kind": 37757002,
                                                "flags": 768,
                                                "start": 25,
                                                "end": 29
                                            },
                                            "declarationList": {
                                                "kind": 156,
                                                "declarations": [
                                                    {
                                                        "kind": 157,
                                                        "binding": {
                                                            "kind": 134299649,
                                                            "text": "f",
                                                            "rawText": "f",
                                                            "flags": 768,
                                                            "start": 29,
                                                            "end": 31
                                                        },
                                                        "optionalToken": null,
                                                        "type": null,
                                                        "initializer": {
                                                            "kind": 177,
                                                            "asyncKeyword": null,
                                                            "functionKeyword": {
                                                                "kind": 37814362,
                                                                "flags": 768,
                                                                "start": 33,
                                                                "end": 42
                                                            },
                                                            "generatorToken": {
                                                                "kind": 67143222,
                                                                "flags": 768,
                                                                "start": 42,
                                                                "end": 43
                                                            },
                                                            "name": null,
                                                            "formalParameters": {
                                                                "kind": 214,
                                                                "formalParameterList": [],
                                                                "trailingComma": false,
                                                                "flags": 256,
                                                                "start": 43,
                                                                "end": 45
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
                                                            "typeParameters": null,
                                                            "returnType": null,
                                                            "flags": 2304,
                                                            "start": 33,
                                                            "end": 58
                                                        },
                                                        "flags": 128,
                                                        "start": 29,
                                                        "end": 58
                                                    }
                                                ],
                                                "flags": 128,
                                                "start": 29,
                                                "end": 58
                                            },
                                            "flags": 128,
                                            "start": 25,
                                            "end": 58
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 256,
                                    "start": 25,
                                    "end": 58
                                },
                                "flags": 256,
                                "start": 23,
                                "end": 60
                            },
                            "flags": 0,
                            "start": 21,
                            "end": 60
                        },
                        "flags": 256,
                        "start": 9,
                        "end": 60
                    }
                ],
                "flags": 256,
                "start": 9,
                "end": 62
            },
            "flags": 128,
            "start": 0,
            "end": 62
        }
    ],
    "isModule": false,
    "text": "class C { constructor() { var f = function*() { super(); } } }",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
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
    "end": 62
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

