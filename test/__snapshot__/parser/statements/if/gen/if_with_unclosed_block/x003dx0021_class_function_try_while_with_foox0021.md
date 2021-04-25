# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: k
> :: test: if with unclosed block
> :: case: =! class function try while with foo!
## Input

`````js
else {} if(x) { =! class function try while with foo!
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "multiLine": false,
                "flags": 128,
                "start": 6,
                "end": 6
            },
            "flags": 128,
            "start": 4,
            "end": 7
        },
        {
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 768,
                "start": 7,
                "end": 10
            },
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 768,
                "start": 11,
                "end": 12
            },
            "consequent": {
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
                "start": 13,
                "end": 17
            },
            "elseKeyword": null,
            "alternate": null,
            "flags": 128,
            "start": 7,
            "end": 17
        },
        {
            "kind": 120,
            "expression": {
                "kind": 126,
                "operandToken": {
                    "kind": 65584,
                    "flags": 768,
                    "start": 17,
                    "end": 18
                },
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 768,
                        "start": 18,
                        "end": 24
                    },
                    "name": null,
                    "typeParameters": null,
                    "classHeritage": null,
                    "members": {
                        "kind": 277,
                        "elements": [],
                        "flags": 256,
                        "start": 18,
                        "end": 18
                    },
                    "flags": 256,
                    "start": 18,
                    "end": 24
                },
                "flags": 256,
                "start": 17,
                "end": 24
            },
            "flags": 128,
            "start": 17,
            "end": 24
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 768,
                "start": 24,
                "end": 33
            },
            "generatorToken": null,
            "name": {
                "kind": 16637,
                "text": "",
                "autofix": 0,
                "flags": 12,
                "start": 33,
                "end": 33
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 256,
                "start": 33,
                "end": 33
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "multiline": false,
                    "flags": 256,
                    "start": 33,
                    "end": 33
                },
                "flags": 256,
                "start": 33,
                "end": 33
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 128,
            "start": 24,
            "end": 33
        },
        {
            "kind": 159,
            "tryKeyword": {
                "kind": 37757027,
                "flags": 768,
                "start": 33,
                "end": 37
            },
            "block": {
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
            "catchClause": null,
            "finallyKeyword": null,
            "finallyBlock": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [],
                    "multiLine": false,
                    "flags": 128,
                    "start": 43,
                    "end": 43
                },
                "flags": 128,
                "start": 43,
                "end": 43
            },
            "flags": 128,
            "start": 33,
            "end": 43
        },
        {
            "kind": 153,
            "withKeyword": {
                "kind": 37757029,
                "flags": 768,
                "start": 43,
                "end": 48
            },
            "expression": {
                "kind": 134299649,
                "text": "foo",
                "rawText": "foo",
                "flags": 768,
                "start": 48,
                "end": 52
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 126,
                    "operandToken": {
                        "kind": 65584,
                        "flags": 768,
                        "start": 52,
                        "end": 53
                    },
                    "expression": {
                        "kind": 16637,
                        "text": "",
                        "autofix": 0,
                        "flags": 12,
                        "start": 53,
                        "end": 53
                    },
                    "flags": 256,
                    "start": 52,
                    "end": 53
                },
                "flags": 128,
                "start": 52,
                "end": 53
            },
            "flags": 128,
            "start": 43,
            "end": 53
        }
    ],
    "isModule": false,
    "text": "else {} if(x) { =! class function try while with foo!",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 53
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2716}@ Statement expected - start: 0, end: 4
@{x2716}@ Unexpected token. - start: 15, end: 17
@{x2716}@ Declaration or statement expected. This follows a block of statements so if you intended to write a destructuring assignment you might need to wrap the whole assignment in parentheses - start: 17, end: 18
@{x2716}@ Unexpected token. - start: 24, end: 33
@{x2716}@ Unexpected token. - start: 24, end: 33
@{x2716}@ Binding identifier expected - start: 33, end: 37
@{x2716}@ Unexpected token. - start: 33, end: 37
@{x2716}@ Unexpected token. - start: 33, end: 37
@{x2716}@ Unexpected token. - start: 33, end: 37
@{x2716}@ Unexpected token. - start: 37, end: 43
@{x2716}@ Unexpected token. - start: 37, end: 43
@{x2716}@ Unexpected token. - start: 43, end: 48
@{x2716}@ Unexpected token. - start: 48, end: 52
@{x2716}@ Unexpected token. - start: 52, end: 53
@{x2716}@ Expression expected - start: 53, end: 53

```

