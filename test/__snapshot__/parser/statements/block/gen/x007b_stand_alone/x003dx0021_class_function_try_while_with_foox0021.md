# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: { stand alone
> :: case: =! class function try while with foo!
## Input

`````js
{ =! class function try while with foo!
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
                "start": 1,
                "end": 1
            },
            "flags": 128,
            "start": 0,
            "end": 3
        },
        {
            "kind": 120,
            "expression": {
                "kind": 126,
                "operandToken": {
                    "kind": 65584,
                    "flags": 3,
                    "start": 512,
                    "end": 4
                },
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 4,
                        "start": 0,
                        "end": 10
                    },
                    "name": null,
                    "typeParameters": null,
                    "classHeritage": null,
                    "members": {
                        "kind": 277,
                        "elements": [],
                        "flags": 256,
                        "start": 4,
                        "end": 4
                    },
                    "flags": 256,
                    "start": 4,
                    "end": 10
                },
                "flags": 256,
                "start": 3,
                "end": 10
            },
            "flags": 128,
            "start": 3,
            "end": 10
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 10,
                "start": 0,
                "end": 19
            },
            "generatorToken": null,
            "name": {
                "kind": 16637,
                "text": "",
                "flags": 12,
                "start": 19,
                "end": 19
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 256,
                "start": 19,
                "end": 19
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "multiline": false,
                    "flags": 256,
                    "start": 19,
                    "end": 19
                },
                "flags": 256,
                "start": 19,
                "end": 19
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 128,
            "start": 10,
            "end": 19
        },
        {
            "kind": 159,
            "tryKeyword": {
                "kind": 37757027,
                "flags": 19,
                "start": 0,
                "end": 23
            },
            "block": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [],
                    "multiLine": false,
                    "flags": 128,
                    "start": 23,
                    "end": 23
                },
                "flags": 128,
                "start": 23,
                "end": 23
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
                    "start": 29,
                    "end": 29
                },
                "flags": 128,
                "start": 29,
                "end": 29
            },
            "flags": 128,
            "start": 19,
            "end": 29
        },
        {
            "kind": 153,
            "withKeyword": {
                "kind": 37757029,
                "flags": 29,
                "start": 0,
                "end": 34
            },
            "expression": {
                "kind": 134299649,
                "text": "foo",
                "rawText": "foo",
                "flags": 768,
                "start": 34,
                "end": 38
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 126,
                    "operandToken": {
                        "kind": 65584,
                        "flags": 38,
                        "start": 512,
                        "end": 39
                    },
                    "expression": {
                        "kind": 16637,
                        "text": "",
                        "flags": 12,
                        "start": 39,
                        "end": 39
                    },
                    "flags": 256,
                    "start": 38,
                    "end": 39
                },
                "flags": 128,
                "start": 38,
                "end": 39
            },
            "flags": 128,
            "start": 29,
            "end": 39
        }
    ],
    "isModule": false,
    "text": "{ =! class function try while with foo!",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 39
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Declaration or statement expected. This follows a block of statements so if you intended to write a destructuring assignment you might need to wrap the whole assignment in parentheses - start: 3, end: 4
✖ Binding identifier expected - start: 19, end: 23
✖ Unexpected token. - start: 19, end: 23
✖ Expression expected - start: 39, end: 39

```

