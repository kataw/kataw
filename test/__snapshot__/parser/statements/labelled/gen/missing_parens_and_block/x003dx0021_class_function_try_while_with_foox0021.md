# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: k
> :: test: missing parens and block
> :: case: =! class function try while with foo!
## Input

`````js
try catch =! class function try while with foo!
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 159,
            "tryKeyword": {
                "kind": 37757027,
                "flags": 768,
                "start": 0,
                "end": 3
            },
            "block": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [],
                    "multiLine": false,
                    "flags": 128,
                    "start": 3,
                    "end": 3
                },
                "flags": 128,
                "start": 3,
                "end": 3
            },
            "catchClause": {
                "kind": 173,
                "catchKeyword": {
                    "kind": 4202575,
                    "flags": 768,
                    "start": 3,
                    "end": 9
                },
                "catchParameter": null,
                "block": {
                    "kind": 249,
                    "block": {
                        "kind": 124,
                        "statements": [],
                        "multiLine": false,
                        "flags": 128,
                        "start": 9,
                        "end": 9
                    },
                    "flags": 128,
                    "start": 9,
                    "end": 9
                },
                "flags": 128,
                "start": 3,
                "end": 9
            },
            "finallyKeyword": null,
            "finallyBlock": null,
            "flags": 128,
            "start": 0,
            "end": 9
        },
        {
            "kind": 120,
            "expression": {
                "kind": 126,
                "operandToken": {
                    "kind": 65584,
                    "flags": 768,
                    "start": 11,
                    "end": 12
                },
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 768,
                        "start": 12,
                        "end": 18
                    },
                    "name": null,
                    "typeParameters": null,
                    "classHeritage": null,
                    "members": {
                        "kind": 277,
                        "elements": [],
                        "flags": 256,
                        "start": 12,
                        "end": 12
                    },
                    "flags": 256,
                    "start": 12,
                    "end": 18
                },
                "flags": 256,
                "start": 11,
                "end": 18
            },
            "flags": 128,
            "start": 11,
            "end": 18
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 768,
                "start": 18,
                "end": 27
            },
            "generatorToken": null,
            "name": {
                "kind": 16637,
                "text": "",
                "autofix": 0,
                "flags": 12,
                "start": 27,
                "end": 27
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 256,
                "start": 27,
                "end": 27
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "multiline": false,
                    "flags": 256,
                    "start": 27,
                    "end": 27
                },
                "flags": 256,
                "start": 27,
                "end": 27
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 128,
            "start": 18,
            "end": 27
        },
        {
            "kind": 159,
            "tryKeyword": {
                "kind": 37757027,
                "flags": 768,
                "start": 27,
                "end": 31
            },
            "block": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [],
                    "multiLine": false,
                    "flags": 128,
                    "start": 31,
                    "end": 31
                },
                "flags": 128,
                "start": 31,
                "end": 31
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
                    "start": 37,
                    "end": 37
                },
                "flags": 128,
                "start": 37,
                "end": 37
            },
            "flags": 128,
            "start": 27,
            "end": 37
        },
        {
            "kind": 153,
            "withKeyword": {
                "kind": 37757029,
                "flags": 768,
                "start": 37,
                "end": 42
            },
            "expression": {
                "kind": 134299649,
                "text": "foo",
                "rawText": "foo",
                "flags": 768,
                "start": 42,
                "end": 46
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 126,
                    "operandToken": {
                        "kind": 65584,
                        "flags": 768,
                        "start": 46,
                        "end": 47
                    },
                    "expression": {
                        "kind": 16637,
                        "text": "",
                        "autofix": 0,
                        "flags": 12,
                        "start": 47,
                        "end": 47
                    },
                    "flags": 256,
                    "start": 46,
                    "end": 47
                },
                "flags": 128,
                "start": 46,
                "end": 47
            },
            "flags": 128,
            "start": 37,
            "end": 47
        }
    ],
    "isModule": false,
    "text": "try catch =! class function try while with foo!",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 47
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

