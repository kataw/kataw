# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: t
> :: test: class-set
> :: case: var f = function*() { super(); }
## Input

`````js
class C { set x(_) { var f = function*() { super(); } } }
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
                        "declareToken": null,
                        "decorators": null,
                        "staticKeyword": null,
                        "asyncKeyword": null,
                        "setKeyword": null,
                        "getKeyword": {
                            "kind": 82031,
                            "flags": 768,
                            "start": 9,
                            "end": 13
                        },
                        "method": {
                            "kind": 209,
                            "name": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 768,
                                "start": 13,
                                "end": 15
                            },
                            "typeParameters": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [
                                    {
                                        "kind": 215,
                                        "ellipsisToken": null,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "_",
                                            "rawText": "_",
                                            "flags": 768,
                                            "start": 16,
                                            "end": 17
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": null,
                                        "flags": 256,
                                        "start": 16,
                                        "end": 17
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 4352,
                                "start": 16,
                                "end": 18
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
                                                "start": 20,
                                                "end": 24
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
                                                            "start": 24,
                                                            "end": 26
                                                        },
                                                        "optionalToken": null,
                                                        "type": null,
                                                        "initializer": {
                                                            "kind": 177,
                                                            "asyncKeyword": null,
                                                            "functionKeyword": {
                                                                "kind": 37822554,
                                                                "flags": 768,
                                                                "start": 28,
                                                                "end": 37
                                                            },
                                                            "generatorToken": {
                                                                "kind": 67143222,
                                                                "flags": 768,
                                                                "start": 37,
                                                                "end": 38
                                                            },
                                                            "name": null,
                                                            "formalParameters": {
                                                                "kind": 214,
                                                                "formalParameterList": [],
                                                                "trailingComma": false,
                                                                "flags": 256,
                                                                "start": 38,
                                                                "end": 40
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
                                                                                        "start": 42,
                                                                                        "end": 48
                                                                                    },
                                                                                    "flags": 768,
                                                                                    "start": 42,
                                                                                    "end": 48
                                                                                },
                                                                                "argumentList": {
                                                                                    "kind": 256,
                                                                                    "elements": [],
                                                                                    "trailingComma": false,
                                                                                    "flags": 256,
                                                                                    "start": 49,
                                                                                    "end": 49
                                                                                },
                                                                                "flags": 256,
                                                                                "start": 42,
                                                                                "end": 50
                                                                            },
                                                                            "flags": 128,
                                                                            "start": 42,
                                                                            "end": 51
                                                                        }
                                                                    ],
                                                                    "multiline": false,
                                                                    "flags": 256,
                                                                    "start": 42,
                                                                    "end": 51
                                                                },
                                                                "flags": 256,
                                                                "start": 40,
                                                                "end": 53
                                                            },
                                                            "typeParameters": null,
                                                            "returnType": null,
                                                            "flags": 2304,
                                                            "start": 28,
                                                            "end": 53
                                                        },
                                                        "flags": 128,
                                                        "start": 24,
                                                        "end": 53
                                                    }
                                                ],
                                                "flags": 128,
                                                "start": 24,
                                                "end": 53
                                            },
                                            "flags": 128,
                                            "start": 20,
                                            "end": 53
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 256,
                                    "start": 20,
                                    "end": 53
                                },
                                "flags": 256,
                                "start": 18,
                                "end": 55
                            },
                            "flags": 4096,
                            "start": 15,
                            "end": 55
                        },
                        "flags": 4096,
                        "start": 9,
                        "end": 55
                    }
                ],
                "flags": 256,
                "start": 9,
                "end": 57
            },
            "flags": 128,
            "start": 0,
            "end": 57
        }
    ],
    "isModule": false,
    "text": "class C { set x(_) { var f = function*() { super(); } } }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 57
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2716}@ 'super' can only be referenced in members of derived classes or object literal expressions - start: 48, end: 49

```

