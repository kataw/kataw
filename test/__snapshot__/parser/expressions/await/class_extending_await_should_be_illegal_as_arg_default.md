# Kataw parser test case

## Input

`````js
async function f(){    (fail = class A extends await foo {}) => fail    }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": {
                "kind": 82031,
                "flags": 768,
                "start": 0,
                "end": 5
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 768,
                "start": 5,
                "end": 14
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 768,
                "start": 14,
                "end": 16
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 256,
                "start": 16,
                "end": 18
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
                                "kind": 271,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 768,
                                    "start": 60,
                                    "end": 63
                                },
                                "typeParameters": null,
                                "parameters": [
                                    {
                                        "kind": 125,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "fail",
                                            "rawText": "fail",
                                            "flags": 768,
                                            "start": 24,
                                            "end": 28
                                        },
                                        "operatorToken": {
                                            "kind": 4125,
                                            "flags": 768,
                                            "start": 28,
                                            "end": 30
                                        },
                                        "right": {
                                            "kind": 189,
                                            "decorators": null,
                                            "classKeyword": {
                                                "kind": 37822544,
                                                "flags": 768,
                                                "start": 30,
                                                "end": 36
                                            },
                                            "name": {
                                                "kind": 134299649,
                                                "text": "A",
                                                "rawText": "A",
                                                "flags": 768,
                                                "start": 36,
                                                "end": 38
                                            },
                                            "typeParameters": null,
                                            "classHeritage": {
                                                "kind": 279,
                                                "extendsKeyword": {
                                                    "kind": 4194391,
                                                    "flags": 768,
                                                    "start": 38,
                                                    "end": 46
                                                },
                                                "expression": {
                                                    "kind": 208,
                                                    "awaitToken": {
                                                        "kind": 82032,
                                                        "flags": 768,
                                                        "start": 46,
                                                        "end": 52
                                                    },
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "foo",
                                                        "rawText": "foo",
                                                        "flags": 768,
                                                        "start": 52,
                                                        "end": 56
                                                    },
                                                    "flags": 256,
                                                    "start": 46,
                                                    "end": 56
                                                },
                                                "typeParameter": null,
                                                "flags": 128,
                                                "start": 46,
                                                "end": 56
                                            },
                                            "members": {
                                                "kind": 277,
                                                "elements": [],
                                                "flags": 256,
                                                "start": 58,
                                                "end": 59
                                            },
                                            "flags": 256,
                                            "start": 30,
                                            "end": 59
                                        },
                                        "flags": 256,
                                        "start": 19,
                                        "end": 59
                                    }
                                ],
                                "asyncToken": null,
                                "returnType": null,
                                "contents": {
                                    "kind": 134299649,
                                    "text": "fail",
                                    "rawText": "fail",
                                    "flags": 768,
                                    "start": 63,
                                    "end": 68
                                },
                                "flags": 256,
                                "start": 19,
                                "end": 68
                            },
                            "flags": 128,
                            "start": 19,
                            "end": 68
                        }
                    ],
                    "multiline": false,
                    "flags": 256,
                    "start": 19,
                    "end": 68
                },
                "flags": 256,
                "start": 18,
                "end": 73
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 1152,
            "start": 0,
            "end": 73
        }
    ],
    "isModule": false,
    "text": "async function f(){    (fail = class A extends await foo {}) => fail    }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 73
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2714}@ No errors
```

