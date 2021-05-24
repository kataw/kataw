# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-21
- From: d
- Path: t
> :: test: class-set
> :: case: var f = function { super(); }
## Input

`````js
class C { set x(_) { var f = function { super(); } } }
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
                            "getKeyword": {
                                "kind": 16499,
                                "flags": 64,
                                "start": 9,
                                "end": 13
                            },
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
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
                                                "flags": 96,
                                                "start": 16,
                                                "end": 17
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "flags": 32,
                                            "start": 16,
                                            "end": 17
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 544,
                                    "start": 16,
                                    "end": 18
                                },
                                "returnType": null,
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
                                                                "flags": 96,
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
                                                                    "flags": 0,
                                                                    "start": 28,
                                                                    "end": 37
                                                                },
                                                                "generatorToken": null,
                                                                "name": null,
                                                                "formalParameters": {
                                                                    "kind": 214,
                                                                    "formalParameterList": [],
                                                                    "trailingComma": false,
                                                                    "flags": 32,
                                                                    "start": 37,
                                                                    "end": 37
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
                                                                                            "start": 39,
                                                                                            "end": 45
                                                                                        },
                                                                                        "flags": 96,
                                                                                        "start": 39,
                                                                                        "end": 45
                                                                                    },
                                                                                    "argumentList": {
                                                                                        "kind": 256,
                                                                                        "elements": [],
                                                                                        "trailingComma": false,
                                                                                        "flags": 32,
                                                                                        "start": 46,
                                                                                        "end": 46
                                                                                    },
                                                                                    "flags": 268435488,
                                                                                    "start": 39,
                                                                                    "end": 47
                                                                                },
                                                                                "flags": 16,
                                                                                "start": 39,
                                                                                "end": 48
                                                                            }
                                                                        ],
                                                                        "flags": 32,
                                                                        "start": 39,
                                                                        "end": 48
                                                                    },
                                                                    "flags": 32,
                                                                    "start": 37,
                                                                    "end": 50
                                                                },
                                                                "typeParameters": null,
                                                                "returnType": null,
                                                                "flags": 32,
                                                                "start": 28,
                                                                "end": 50
                                                            },
                                                            "flags": 16,
                                                            "start": 24,
                                                            "end": 50
                                                        }
                                                    ],
                                                    "flags": 16,
                                                    "start": 24,
                                                    "end": 50
                                                },
                                                "flags": 16,
                                                "start": 20,
                                                "end": 50
                                            }
                                        ],
                                        "flags": 32,
                                        "start": 20,
                                        "end": 50
                                    },
                                    "flags": 32,
                                    "start": 18,
                                    "end": 52
                                },
                                "flags": 512,
                                "start": 15,
                                "end": 52
                            },
                            "flags": 512,
                            "start": 9,
                            "end": 52
                        }
                    ],
                    "flags": 32,
                    "start": 9,
                    "end": 52
                },
                "flags": 7,
                "start": 32,
                "end": 54
            },
            "flags": 16,
            "start": 0,
            "end": 54
        }
    ],
    "isModule": false,
    "source": "class C { set x(_) { var f = function { super(); } } }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 54
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Missing an opening parentheses - '( - start: 37, end: 39
✖ 'super' can only be referenced in members of derived classes or object literal expressions - start: 45, end: 46

```

