# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: y
> :: test: try with invalid array
> :: case: =! class function try while with foo!
## Input

`````js
try [catch] =! class function try while with foo!
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
                "flags": 0,
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
            "catchClause": null,
            "finallyKeyword": null,
            "finallyBlock": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [],
                    "multiLine": false,
                    "flags": 128,
                    "start": 5,
                    "end": 5
                },
                "flags": 128,
                "start": 5,
                "end": 5
            },
            "flags": 128,
            "start": 0,
            "end": 5
        },
        {
            "kind": 159,
            "tryKeyword": null,
            "block": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [],
                    "multiLine": false,
                    "flags": 128,
                    "start": 10,
                    "end": 10
                },
                "flags": 128,
                "start": 10,
                "end": 10
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
                    "start": 11,
                    "end": 11
                },
                "flags": 128,
                "start": 11,
                "end": 11
            },
            "flags": 128,
            "start": 5,
            "end": 11
        },
        {
            "kind": 120,
            "expression": {
                "kind": 126,
                "operandToken": {
                    "kind": 65584,
                    "flags": 13,
                    "start": 512,
                    "end": 14
                },
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 14,
                        "start": 0,
                        "end": 20
                    },
                    "name": null,
                    "typeParameters": null,
                    "classHeritage": null,
                    "members": {
                        "kind": 277,
                        "elements": [],
                        "flags": 256,
                        "start": 14,
                        "end": 14
                    },
                    "flags": 256,
                    "start": 14,
                    "end": 20
                },
                "flags": 256,
                "start": 13,
                "end": 20
            },
            "flags": 128,
            "start": 13,
            "end": 20
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 20,
                "start": 0,
                "end": 29
            },
            "generatorToken": null,
            "name": {
                "kind": 16637,
                "text": "",
                "flags": 12,
                "start": 29,
                "end": 29
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 256,
                "start": 29,
                "end": 29
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "multiline": false,
                    "flags": 256,
                    "start": 29,
                    "end": 29
                },
                "flags": 256,
                "start": 29,
                "end": 29
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 128,
            "start": 20,
            "end": 29
        },
        {
            "kind": 159,
            "tryKeyword": {
                "kind": 37757027,
                "flags": 29,
                "start": 0,
                "end": 33
            },
            "block": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [],
                    "multiLine": false,
                    "flags": 128,
                    "start": 33,
                    "end": 33
                },
                "flags": 128,
                "start": 33,
                "end": 33
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
                    "start": 39,
                    "end": 39
                },
                "flags": 128,
                "start": 39,
                "end": 39
            },
            "flags": 128,
            "start": 29,
            "end": 39
        },
        {
            "kind": 153,
            "withKeyword": {
                "kind": 37757029,
                "flags": 39,
                "start": 0,
                "end": 44
            },
            "expression": {
                "kind": 134299649,
                "text": "foo",
                "rawText": "foo",
                "flags": 768,
                "start": 44,
                "end": 48
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 126,
                    "operandToken": {
                        "kind": 65584,
                        "flags": 48,
                        "start": 512,
                        "end": 49
                    },
                    "expression": {
                        "kind": 16637,
                        "text": "",
                        "flags": 12,
                        "start": 49,
                        "end": 49
                    },
                    "flags": 256,
                    "start": 48,
                    "end": 49
                },
                "flags": 128,
                "start": 48,
                "end": 49
            },
            "flags": 128,
            "start": 39,
            "end": 49
        }
    ],
    "isModule": false,
    "text": "try [catch] =! class function try while with foo!",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 49
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Statement expected - start: 11, end: 13
✖ Binding identifier expected - start: 29, end: 33
✖ Unexpected token. - start: 29, end: 33
✖ Expression expected - start: 49, end: 49

```

