# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: k
> :: test: missing parens and block
> :: case: =! class function try while with foo!
## Input

`````js
if else =! class function try while with foo!
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
                "kind": 120,
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "flags": 12,
                    "start": 2,
                    "end": 2
                },
                "flags": 128,
                "start": 2,
                "end": 2
            },
            "elseKeyword": {
                "kind": 4194389,
                "flags": 2,
                "start": 512,
                "end": 7
            },
            "alternate": {
                "kind": 120,
                "expression": {
                    "kind": 125,
                    "left": {
                        "kind": 16637,
                        "text": "",
                        "flags": 12,
                        "start": 7,
                        "end": 7
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 7,
                        "start": 512,
                        "end": 9
                    },
                    "right": {
                        "kind": 126,
                        "operandToken": {
                            "kind": 65584,
                            "flags": 9,
                            "start": 512,
                            "end": 10
                        },
                        "expression": {
                            "kind": 189,
                            "decorators": null,
                            "classKeyword": {
                                "kind": 37822544,
                                "flags": 10,
                                "start": 0,
                                "end": 16
                            },
                            "name": null,
                            "typeParameters": null,
                            "classHeritage": null,
                            "members": {
                                "kind": 277,
                                "elements": [],
                                "flags": 256,
                                "start": 10,
                                "end": 10
                            },
                            "flags": 256,
                            "start": 10,
                            "end": 16
                        },
                        "flags": 256,
                        "start": 9,
                        "end": 16
                    },
                    "flags": 256,
                    "start": 7,
                    "end": 16
                },
                "flags": 128,
                "start": 7,
                "end": 16
            },
            "flags": 128,
            "start": 0,
            "end": 16
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 16,
                "start": 0,
                "end": 25
            },
            "generatorToken": null,
            "name": {
                "kind": 16637,
                "text": "",
                "flags": 12,
                "start": 25,
                "end": 25
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 256,
                "start": 25,
                "end": 25
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "multiline": false,
                    "flags": 256,
                    "start": 25,
                    "end": 25
                },
                "flags": 256,
                "start": 25,
                "end": 25
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 128,
            "start": 16,
            "end": 25
        },
        {
            "kind": 159,
            "tryKeyword": {
                "kind": 37757027,
                "flags": 25,
                "start": 0,
                "end": 29
            },
            "block": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [],
                    "multiLine": false,
                    "flags": 128,
                    "start": 29,
                    "end": 29
                },
                "flags": 128,
                "start": 29,
                "end": 29
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
                    "start": 35,
                    "end": 35
                },
                "flags": 128,
                "start": 35,
                "end": 35
            },
            "flags": 128,
            "start": 25,
            "end": 35
        },
        {
            "kind": 153,
            "withKeyword": {
                "kind": 37757029,
                "flags": 35,
                "start": 0,
                "end": 40
            },
            "expression": {
                "kind": 134299649,
                "text": "foo",
                "rawText": "foo",
                "flags": 768,
                "start": 40,
                "end": 44
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 126,
                    "operandToken": {
                        "kind": 65584,
                        "flags": 44,
                        "start": 512,
                        "end": 45
                    },
                    "expression": {
                        "kind": 16637,
                        "text": "",
                        "flags": 12,
                        "start": 45,
                        "end": 45
                    },
                    "flags": 256,
                    "start": 44,
                    "end": 45
                },
                "flags": 128,
                "start": 44,
                "end": 45
            },
            "flags": 128,
            "start": 35,
            "end": 45
        }
    ],
    "isModule": false,
    "text": "if else =! class function try while with foo!",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 45
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Expression expected - start: 2, end: 7
✖ Expression expected - start: 2, end: 7
✖ Expression expected - start: 7, end: 9
✖ Binding identifier expected - start: 25, end: 29
✖ Unexpected token. - start: 25, end: 29
✖ Expression expected - start: 45, end: 45

```

