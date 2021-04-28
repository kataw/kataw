# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: switch triple
> :: case: =! class function try while with foo!
## Input

`````js
switch switch switch =! class function try while with foo!
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 160,
            "switchKeyword": {
                "kind": 37757024,
                "flags": 0,
                "start": 0,
                "end": 6
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "flags": 12,
                "start": 6,
                "end": 6
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [],
                "flags": 128,
                "start": 6,
                "end": 6
            },
            "flags": 128,
            "start": 0,
            "end": 6
        },
        {
            "kind": 160,
            "switchKeyword": {
                "kind": 37757024,
                "flags": 6,
                "start": 0,
                "end": 13
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "flags": 12,
                "start": 13,
                "end": 13
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [],
                "flags": 128,
                "start": 13,
                "end": 13
            },
            "flags": 128,
            "start": 6,
            "end": 13
        },
        {
            "kind": 160,
            "switchKeyword": {
                "kind": 37757024,
                "flags": 13,
                "start": 0,
                "end": 20
            },
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 16637,
                    "text": "",
                    "flags": 12,
                    "start": 20,
                    "end": 20
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 20,
                    "start": 512,
                    "end": 22
                },
                "right": {
                    "kind": 126,
                    "operandToken": {
                        "kind": 65584,
                        "flags": 22,
                        "start": 512,
                        "end": 23
                    },
                    "expression": {
                        "kind": 189,
                        "decorators": null,
                        "classKeyword": {
                            "kind": 37822544,
                            "flags": 23,
                            "start": 0,
                            "end": 29
                        },
                        "name": null,
                        "typeParameters": null,
                        "classHeritage": null,
                        "members": {
                            "kind": 277,
                            "elements": [],
                            "flags": 256,
                            "start": 23,
                            "end": 23
                        },
                        "flags": 256,
                        "start": 23,
                        "end": 29
                    },
                    "flags": 256,
                    "start": 22,
                    "end": 29
                },
                "flags": 256,
                "start": 20,
                "end": 29
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [],
                "flags": 128,
                "start": 29,
                "end": 29
            },
            "flags": 128,
            "start": 13,
            "end": 29
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 29,
                "start": 0,
                "end": 38
            },
            "generatorToken": null,
            "name": {
                "kind": 16637,
                "text": "",
                "flags": 12,
                "start": 38,
                "end": 38
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 256,
                "start": 38,
                "end": 38
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "multiline": false,
                    "flags": 256,
                    "start": 38,
                    "end": 38
                },
                "flags": 256,
                "start": 38,
                "end": 38
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 128,
            "start": 29,
            "end": 38
        },
        {
            "kind": 159,
            "tryKeyword": {
                "kind": 37757027,
                "flags": 38,
                "start": 0,
                "end": 42
            },
            "block": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [],
                    "multiLine": false,
                    "flags": 128,
                    "start": 42,
                    "end": 42
                },
                "flags": 128,
                "start": 42,
                "end": 42
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
                    "start": 48,
                    "end": 48
                },
                "flags": 128,
                "start": 48,
                "end": 48
            },
            "flags": 128,
            "start": 38,
            "end": 48
        },
        {
            "kind": 153,
            "withKeyword": {
                "kind": 37757029,
                "flags": 48,
                "start": 0,
                "end": 53
            },
            "expression": {
                "kind": 134299649,
                "text": "foo",
                "rawText": "foo",
                "flags": 768,
                "start": 53,
                "end": 57
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 126,
                    "operandToken": {
                        "kind": 65584,
                        "flags": 57,
                        "start": 512,
                        "end": 58
                    },
                    "expression": {
                        "kind": 16637,
                        "text": "",
                        "flags": 12,
                        "start": 58,
                        "end": 58
                    },
                    "flags": 256,
                    "start": 57,
                    "end": 58
                },
                "flags": 128,
                "start": 57,
                "end": 58
            },
            "flags": 128,
            "start": 48,
            "end": 58
        }
    ],
    "isModule": false,
    "text": "switch switch switch =! class function try while with foo!",
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
✖ Expression expected - start: 6, end: 13
✖ Expression expected - start: 13, end: 20
✖ Expression expected - start: 20, end: 22
✖ Binding identifier expected - start: 38, end: 42
✖ Unexpected token. - start: 38, end: 42
✖ Expression expected - start: 58, end: 58

```

