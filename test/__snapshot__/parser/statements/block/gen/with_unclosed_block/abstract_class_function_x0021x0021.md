# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-21
- From: d
- Path: k
> :: test: with unclosed block
> :: case: abstract class function !!
## Input

`````js
{ {} finally(x) { abstract class function !!
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [
                    {
                        "kind": 124,
                        "block": {
                            "kind": 249,
                            "statements": [],
                            "flags": 16,
                            "start": 3,
                            "end": 3
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 4
                    },
                    {
                        "kind": 159,
                        "tryKeyword": null,
                        "block": {
                            "kind": 124,
                            "block": {
                                "kind": 249,
                                "statements": [],
                                "flags": 16,
                                "start": 4,
                                "end": 4
                            },
                            "flags": 16,
                            "start": 4,
                            "end": 4
                        },
                        "catchClause": null,
                        "finallyKeyword": {
                            "kind": 37757016,
                            "flags": 0,
                            "start": 4,
                            "end": 12
                        },
                        "finallyBlock": {
                            "kind": 124,
                            "block": {
                                "kind": 249,
                                "statements": [],
                                "flags": 16,
                                "start": 12,
                                "end": 12
                            },
                            "flags": 16,
                            "start": 12,
                            "end": 12
                        },
                        "flags": 16,
                        "start": 4,
                        "end": 12
                    },
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 121,
                            "expression": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 13,
                                "end": 14
                            },
                            "flags": 32,
                            "start": 12,
                            "end": 15
                        },
                        "flags": 16,
                        "start": 12,
                        "end": 15
                    },
                    {
                        "kind": 124,
                        "block": {
                            "kind": 249,
                            "statements": [
                                {
                                    "kind": 120,
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "abstract",
                                        "rawText": "abstract",
                                        "flags": 96,
                                        "start": 17,
                                        "end": 26
                                    },
                                    "flags": 16,
                                    "start": 17,
                                    "end": 26
                                },
                                {
                                    "kind": 178,
                                    "declareKeyword": null,
                                    "decorators": null,
                                    "classKeyword": {
                                        "kind": 37822544,
                                        "flags": 0,
                                        "start": 26,
                                        "end": 32
                                    },
                                    "name": {
                                        "kind": 16637,
                                        "text": "",
                                        "flags": 64,
                                        "start": 32,
                                        "end": 32
                                    },
                                    "typeParameters": null,
                                    "tail": {
                                        "kind": 277,
                                        "classHeritage": null,
                                        "body": {
                                            "kind": 262,
                                            "elements": [],
                                            "flags": 32,
                                            "start": 32,
                                            "end": 32
                                        },
                                        "flags": 32,
                                        "start": 32,
                                        "end": 32
                                    },
                                    "flags": 16,
                                    "start": 26,
                                    "end": 32
                                },
                                {
                                    "kind": 176,
                                    "declareKeyword": null,
                                    "asyncKeyword": null,
                                    "functionKeyword": {
                                        "kind": 37822554,
                                        "flags": 0,
                                        "start": 32,
                                        "end": 41
                                    },
                                    "generatorToken": null,
                                    "name": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 41,
                                        "end": 41
                                    },
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "start": 41,
                                            "end": 41
                                        },
                                        "flags": 32,
                                        "start": 41,
                                        "end": 41
                                    },
                                    "typeParameters": null,
                                    "returnType": null,
                                    "flags": 16,
                                    "start": 32,
                                    "end": 41
                                },
                                {
                                    "kind": 120,
                                    "expression": {
                                        "kind": 126,
                                        "operandToken": {
                                            "kind": 65584,
                                            "flags": 64,
                                            "start": 41,
                                            "end": 43
                                        },
                                        "operand": {
                                            "kind": 126,
                                            "operandToken": {
                                                "kind": 65584,
                                                "flags": 64,
                                                "start": 43,
                                                "end": 44
                                            },
                                            "operand": {
                                                "kind": 16637,
                                                "text": "",
                                                "flags": 64,
                                                "start": 44,
                                                "end": 44
                                            },
                                            "flags": 32,
                                            "start": 43,
                                            "end": 44
                                        },
                                        "flags": 32,
                                        "start": 41,
                                        "end": 44
                                    },
                                    "flags": 16,
                                    "start": 41,
                                    "end": 44
                                }
                            ],
                            "flags": 16,
                            "start": 17,
                            "end": 44
                        },
                        "flags": 16,
                        "start": 15,
                        "end": 44
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 44
            },
            "flags": 16,
            "start": 0,
            "end": 44
        }
    ],
    "isModule": false,
    "source": "{ {} finally(x) { abstract class function !!",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 44
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'try' expected - start: 4, end: 12
✖ Expected a `;` - start: 15, end: 17
✖ Expected a `;` - start: 26, end: 32
✖ Binding identifier expected - start: 32, end: 41
✖ Binding identifier expected - start: 41, end: 43
✖ Missing an opening parentheses - '( - start: 41, end: 43
✖ Expression expected - start: 41, end: 43
✖ Identifier expected - start: 44, end: 44

```

