# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: if triple
> :: case: =! class function try while with foo!
## Input

`````js
if if if =! class function try while with foo!
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 0,
                "start": 0,
                "end": 2
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "flags": 12,
                "start": 2,
                "end": 2
            },
            "consequent": {
                "kind": 164,
                "ifKeyword": {
                    "kind": 37757019,
                    "flags": 2,
                    "start": 0,
                    "end": 5
                },
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "flags": 12,
                    "start": 5,
                    "end": 5
                },
                "consequent": {
                    "kind": 164,
                    "ifKeyword": {
                        "kind": 37757019,
                        "flags": 5,
                        "start": 0,
                        "end": 8
                    },
                    "expression": {
                        "kind": 125,
                        "left": {
                            "kind": 16637,
                            "text": "",
                            "flags": 12,
                            "start": 8,
                            "end": 8
                        },
                        "operatorToken": {
                            "kind": 4125,
                            "flags": 8,
                            "start": 512,
                            "end": 10
                        },
                        "right": {
                            "kind": 126,
                            "operandToken": {
                                "kind": 65584,
                                "flags": 10,
                                "start": 512,
                                "end": 11
                            },
                            "expression": {
                                "kind": 189,
                                "decorators": null,
                                "classKeyword": {
                                    "kind": 37822544,
                                    "flags": 11,
                                    "start": 0,
                                    "end": 17
                                },
                                "name": null,
                                "typeParameters": null,
                                "classHeritage": null,
                                "members": {
                                    "kind": 277,
                                    "elements": [],
                                    "flags": 256,
                                    "start": 11,
                                    "end": 11
                                },
                                "flags": 256,
                                "start": 11,
                                "end": 17
                            },
                            "flags": 256,
                            "start": 10,
                            "end": 17
                        },
                        "flags": 256,
                        "start": 8,
                        "end": 17
                    },
                    "consequent": {
                        "kind": 176,
                        "declareKeyword": null,
                        "asyncKeyword": null,
                        "functionKeyword": {
                            "kind": 37822554,
                            "flags": 17,
                            "start": 0,
                            "end": 26
                        },
                        "generatorToken": null,
                        "name": {
                            "kind": 16637,
                            "text": "",
                            "flags": 12,
                            "start": 26,
                            "end": 26
                        },
                        "formalParameters": {
                            "kind": 214,
                            "formalParameterList": [],
                            "trailingComma": false,
                            "flags": 256,
                            "start": 26,
                            "end": 26
                        },
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "directives": [],
                                "statements": [],
                                "multiline": false,
                                "flags": 256,
                                "start": 26,
                                "end": 26
                            },
                            "flags": 256,
                            "start": 26,
                            "end": 26
                        },
                        "typeParameters": null,
                        "returnType": null,
                        "flags": 128,
                        "start": 17,
                        "end": 26
                    },
                    "elseKeyword": null,
                    "alternate": null,
                    "flags": 128,
                    "start": 5,
                    "end": 26
                },
                "elseKeyword": null,
                "alternate": null,
                "flags": 128,
                "start": 2,
                "end": 26
            },
            "elseKeyword": null,
            "alternate": null,
            "flags": 128,
            "start": 0,
            "end": 26
        },
        {
            "kind": 159,
            "tryKeyword": {
                "kind": 37757027,
                "flags": 26,
                "start": 0,
                "end": 30
            },
            "block": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [],
                    "multiLine": false,
                    "flags": 128,
                    "start": 30,
                    "end": 30
                },
                "flags": 128,
                "start": 30,
                "end": 30
            },
            "catchClause": null,
            "finallyKeyword": null,
            "finallyBlock": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [],
                    "multiLine": false,
                    "flags": 128,
                    "start": 36,
                    "end": 36
                },
                "flags": 128,
                "start": 36,
                "end": 36
            },
            "flags": 128,
            "start": 26,
            "end": 36
        },
        {
            "kind": 153,
            "withKeyword": {
                "kind": 37757029,
                "flags": 36,
                "start": 0,
                "end": 41
            },
            "expression": {
                "kind": 134299649,
                "text": "foo",
                "rawText": "foo",
                "flags": 768,
                "start": 41,
                "end": 45
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 126,
                    "operandToken": {
                        "kind": 65584,
                        "flags": 45,
                        "start": 512,
                        "end": 46
                    },
                    "expression": {
                        "kind": 16637,
                        "text": "",
                        "flags": 12,
                        "start": 46,
                        "end": 46
                    },
                    "flags": 256,
                    "start": 45,
                    "end": 46
                },
                "flags": 128,
                "start": 45,
                "end": 46
            },
            "flags": 128,
            "start": 36,
            "end": 46
        }
    ],
    "isModule": false,
    "text": "if if if =! class function try while with foo!",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 46
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Expression expected - start: 2, end: 5
✖ Expression expected - start: 5, end: 8
✖ Expression expected - start: 8, end: 10
✖ Binding identifier expected - start: 26, end: 30
✖ Unexpected token. - start: 26, end: 30
✖ Expression expected - start: 46, end: 46

```

