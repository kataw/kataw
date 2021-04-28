# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: class-gen
> :: case: var f = function*() { super(); }
## Input

`````js
class C { *method() { var f = function*() { super(); } } }
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
                        "getKeyword": null,
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
                                            "kind": 155,
                                            "declareKeyword": null,
                                            "varKeyword": {
                                                "kind": 37757002,
                                                "flags": 21,
                                                "start": 0,
                                                "end": 25
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
                                                                "flags": 29,
                                                                "start": 0,
                                                                "end": 38
                                                            },
                                                            "generatorToken": {
                                                                "kind": 67143222,
                                                                "flags": 38,
                                                                "start": 512,
                                                                "end": 39
                                                            },
                                                            "name": null,
                                                            "formalParameters": {
                                                                "kind": 214,
                                                                "formalParameterList": [],
                                                                "trailingComma": false,
                                                                "flags": 256,
                                                                "start": 39,
                                                                "end": 41
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
                                                                                        "flags": 43,
                                                                                        "start": 0,
                                                                                        "end": 49
                                                                                    },
                                                                                    "flags": 768,
                                                                                    "start": 43,
                                                                                    "end": 49
                                                                                },
                                                                                "argumentList": {
                                                                                    "kind": 256,
                                                                                    "elements": [],
                                                                                    "trailingComma": false,
                                                                                    "flags": 256,
                                                                                    "start": 50,
                                                                                    "end": 50
                                                                                },
                                                                                "flags": 256,
                                                                                "start": 43,
                                                                                "end": 51
                                                                            },
                                                                            "flags": 128,
                                                                            "start": 43,
                                                                            "end": 52
                                                                        }
                                                                    ],
                                                                    "multiline": false,
                                                                    "flags": 256,
                                                                    "start": 43,
                                                                    "end": 52
                                                                },
                                                                "flags": 256,
                                                                "start": 41,
                                                                "end": 54
                                                            },
                                                            "typeParameters": null,
                                                            "returnType": null,
                                                            "flags": 2304,
                                                            "start": 29,
                                                            "end": 54
                                                        },
                                                        "flags": 128,
                                                        "start": 25,
                                                        "end": 54
                                                    }
                                                ],
                                                "flags": 128,
                                                "start": 25,
                                                "end": 54
                                            },
                                            "flags": 128,
                                            "start": 21,
                                            "end": 54
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 256,
                                    "start": 21,
                                    "end": 54
                                },
                                "flags": 256,
                                "start": 19,
                                "end": 56
                            },
                            "flags": 0,
                            "start": 17,
                            "end": 56
                        },
                        "flags": 0,
                        "start": 9,
                        "end": 56
                    }
                ],
                "flags": 256,
                "start": 9,
                "end": 58
            },
            "flags": 128,
            "start": 0,
            "end": 58
        }
    ],
    "isModule": false,
    "text": "class C { *method() { var f = function*() { super(); } } }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 58
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ 'super' can only be referenced in members of derived classes or object literal expressions - start: 49, end: 50

```

