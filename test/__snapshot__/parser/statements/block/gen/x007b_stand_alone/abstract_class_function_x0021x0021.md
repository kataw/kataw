# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: { stand alone
> :: case: abstract class function !!
## Input

`````js
{ abstract class function !!
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
                "statements": [
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 134299649,
                            "text": "abstract",
                            "rawText": "abstract",
                            "flags": 768,
                            "start": 1,
                            "end": 10
                        },
                        "flags": 128,
                        "start": 1,
                        "end": 10
                    },
                    {
                        "kind": 178,
                        "declareKeyword": null,
                        "decorators": null,
                        "classKeyword": {
                            "kind": 37822544,
                            "flags": 768,
                            "start": 10,
                            "end": 16
                        },
                        "name": {
                            "kind": 16637,
                            "text": "",
                            "flags": 12,
                            "start": 16,
                            "end": 16
                        },
                        "typeParameters": null,
                        "classHeritage": null,
                        "members": {
                            "kind": 277,
                            "elements": [],
                            "flags": 256,
                            "start": 10,
                            "end": 10
                        },
                        "flags": 128,
                        "start": 10,
                        "end": 16
                    },
                    {
                        "kind": 176,
                        "declareKeyword": null,
                        "asyncKeyword": null,
                        "functionKeyword": {
                            "kind": 37822554,
                            "flags": 768,
                            "start": 16,
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
                        "kind": 120,
                        "expression": {
                            "kind": 126,
                            "operandToken": {
                                "kind": 65584,
                                "flags": 768,
                                "start": 25,
                                "end": 27
                            },
                            "expression": {
                                "kind": 126,
                                "operandToken": {
                                    "kind": 65584,
                                    "flags": 768,
                                    "start": 27,
                                    "end": 28
                                },
                                "expression": {
                                    "kind": 16637,
                                    "text": "",
                                    "flags": 12,
                                    "start": 28,
                                    "end": 28
                                },
                                "flags": 256,
                                "start": 27,
                                "end": 28
                            },
                            "flags": 256,
                            "start": 25,
                            "end": 28
                        },
                        "flags": 128,
                        "start": 25,
                        "end": 28
                    }
                ],
                "multiLine": false,
                "flags": 128,
                "start": 1,
                "end": 28
            },
            "flags": 128,
            "start": 0,
            "end": 28
        }
    ],
    "isModule": false,
    "text": "{ abstract class function !!",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 28
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2716}@ Binding identifier expected - start: 16, end: 25
@{x2716}@ Binding identifier expected - start: 25, end: 27
@{x2716}@ Unexpected token. - start: 25, end: 27
@{x2716}@ Expression expected - start: 28, end: 28

```

