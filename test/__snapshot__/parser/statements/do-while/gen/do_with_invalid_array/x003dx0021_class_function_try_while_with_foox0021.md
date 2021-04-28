# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: y
> :: test: do with invalid array
> :: case: =! class function try while with foo!
## Input

`````js
do while [catch] =! class function try while with foo!
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 169,
            "doKeyword": {
                "kind": 4202580,
                "flags": 0,
                "start": 0,
                "end": 2
            },
            "expression": {
                "kind": 126,
                "operandToken": {
                    "kind": 65584,
                    "flags": 512,
                    "start": 18,
                    "end": 19
                },
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 19,
                        "start": 0,
                        "end": 25
                    },
                    "name": null,
                    "typeParameters": null,
                    "classHeritage": null,
                    "members": {
                        "kind": 277,
                        "elements": [],
                        "flags": 256,
                        "start": 19,
                        "end": 19
                    },
                    "flags": 256,
                    "start": 19,
                    "end": 25
                },
                "flags": 256,
                "start": 18,
                "end": 25
            },
            "whileKeyword": null,
            "statement": {
                "kind": 154,
                "whileKeyword": {
                    "kind": 37757028,
                    "flags": 2,
                    "start": 0,
                    "end": 8
                },
                "expression": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 10,
                        "end": 10
                    },
                    "flags": 256,
                    "start": 8,
                    "end": 10
                },
                "statement": {
                    "kind": 159,
                    "tryKeyword": null,
                    "block": {
                        "kind": 249,
                        "block": {
                            "kind": 124,
                            "statements": [],
                            "multiLine": false,
                            "flags": 128,
                            "start": 15,
                            "end": 15
                        },
                        "flags": 128,
                        "start": 15,
                        "end": 15
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
                            "start": 16,
                            "end": 16
                        },
                        "flags": 128,
                        "start": 16,
                        "end": 16
                    },
                    "flags": 128,
                    "start": 10,
                    "end": 16
                },
                "flags": 128,
                "start": 2,
                "end": 16
            },
            "flags": 128,
            "start": 0,
            "end": 25
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 25,
                "start": 0,
                "end": 34
            },
            "generatorToken": null,
            "name": {
                "kind": 16637,
                "text": "",
                "flags": 12,
                "start": 34,
                "end": 34
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 256,
                "start": 34,
                "end": 34
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "multiline": false,
                    "flags": 256,
                    "start": 34,
                    "end": 34
                },
                "flags": 256,
                "start": 34,
                "end": 34
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 128,
            "start": 25,
            "end": 34
        },
        {
            "kind": 159,
            "tryKeyword": {
                "kind": 37757027,
                "flags": 34,
                "start": 0,
                "end": 38
            },
            "block": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [],
                    "multiLine": false,
                    "flags": 128,
                    "start": 38,
                    "end": 38
                },
                "flags": 128,
                "start": 38,
                "end": 38
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
                    "start": 44,
                    "end": 44
                },
                "flags": 128,
                "start": 44,
                "end": 44
            },
            "flags": 128,
            "start": 34,
            "end": 44
        },
        {
            "kind": 153,
            "withKeyword": {
                "kind": 37757029,
                "flags": 44,
                "start": 0,
                "end": 49
            },
            "expression": {
                "kind": 134299649,
                "text": "foo",
                "rawText": "foo",
                "flags": 768,
                "start": 49,
                "end": 53
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 126,
                    "operandToken": {
                        "kind": 65584,
                        "flags": 512,
                        "start": 53,
                        "end": 54
                    },
                    "expression": {
                        "kind": 16637,
                        "text": "",
                        "flags": 12,
                        "start": 54,
                        "end": 54
                    },
                    "flags": 256,
                    "start": 53,
                    "end": 54
                },
                "flags": 128,
                "start": 53,
                "end": 54
            },
            "flags": 128,
            "start": 44,
            "end": 54
        }
    ],
    "isModule": false,
    "text": "do while [catch] =! class function try while with foo!",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 54
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Binding identifier expected - start: 34, end: 38
✖ Unexpected token. - start: 34, end: 38
✖ Expression expected - start: 54, end: 54

```

