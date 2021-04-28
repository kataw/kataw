# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: return return
> :: case: =! class function try while with foo!
## Input

`````js
return =! class function try while with foo! return
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 161,
            "returnKeyword": {
                "kind": 37757022,
                "flags": 0,
                "start": 0,
                "end": 6
            },
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 16637,
                    "text": "",
                    "flags": 12,
                    "start": 6,
                    "end": 6
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 6,
                    "start": 512,
                    "end": 8
                },
                "right": {
                    "kind": 126,
                    "operandToken": {
                        "kind": 65584,
                        "flags": 8,
                        "start": 512,
                        "end": 9
                    },
                    "expression": {
                        "kind": 189,
                        "decorators": null,
                        "classKeyword": {
                            "kind": 37822544,
                            "flags": 9,
                            "start": 0,
                            "end": 15
                        },
                        "name": null,
                        "typeParameters": null,
                        "classHeritage": null,
                        "members": {
                            "kind": 277,
                            "elements": [],
                            "flags": 256,
                            "start": 9,
                            "end": 9
                        },
                        "flags": 256,
                        "start": 9,
                        "end": 15
                    },
                    "flags": 256,
                    "start": 8,
                    "end": 15
                },
                "flags": 256,
                "start": 6,
                "end": 15
            },
            "flags": 128,
            "start": 0,
            "end": 0
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 15,
                "start": 0,
                "end": 24
            },
            "generatorToken": null,
            "name": {
                "kind": 16637,
                "text": "",
                "flags": 12,
                "start": 24,
                "end": 24
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 256,
                "start": 24,
                "end": 24
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "multiline": false,
                    "flags": 256,
                    "start": 24,
                    "end": 24
                },
                "flags": 256,
                "start": 24,
                "end": 24
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 128,
            "start": 15,
            "end": 24
        },
        {
            "kind": 159,
            "tryKeyword": {
                "kind": 37757027,
                "flags": 24,
                "start": 0,
                "end": 28
            },
            "block": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [],
                    "multiLine": false,
                    "flags": 128,
                    "start": 28,
                    "end": 28
                },
                "flags": 128,
                "start": 28,
                "end": 28
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
                    "start": 34,
                    "end": 34
                },
                "flags": 128,
                "start": 34,
                "end": 34
            },
            "flags": 128,
            "start": 24,
            "end": 34
        },
        {
            "kind": 153,
            "withKeyword": {
                "kind": 37757029,
                "flags": 34,
                "start": 0,
                "end": 39
            },
            "expression": {
                "kind": 134299649,
                "text": "foo",
                "rawText": "foo",
                "flags": 768,
                "start": 39,
                "end": 43
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 126,
                    "operandToken": {
                        "kind": 65584,
                        "flags": 43,
                        "start": 512,
                        "end": 44
                    },
                    "expression": {
                        "kind": 16637,
                        "text": "",
                        "flags": 12,
                        "start": 44,
                        "end": 44
                    },
                    "flags": 256,
                    "start": 43,
                    "end": 44
                },
                "flags": 128,
                "start": 43,
                "end": 44
            },
            "flags": 128,
            "start": 34,
            "end": 44
        },
        {
            "kind": 161,
            "returnKeyword": {
                "kind": 37757022,
                "flags": 44,
                "start": 0,
                "end": 51
            },
            "expression": null,
            "flags": 128,
            "start": 0,
            "end": 44
        }
    ],
    "isModule": false,
    "text": "return =! class function try while with foo! return",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 51
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ A return statement can only be used within a function_body - start: 0, end: 6
✖ Expression expected - start: 6, end: 8
✖ Binding identifier expected - start: 24, end: 28
✖ Unexpected token. - start: 24, end: 28
✖ Expression expected - start: 44, end: 51
✖ A return statement can only be used within a function_body - start: 44, end: 51

```

