# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-11
- From: kataw/test/__snapshot__/parser/statements/block/autogen.md
- Path: kataw/test/__snapshot__/parser/statements/block/gen/x007b_triple
> :: test: { triple
> :: case: abstract class function !!
## Options

`````js
{}
`````
## Input

`````js
{ { { abstract class function !!
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
                            "statements": [
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
                                                    "start": 5,
                                                    "end": 14
                                                },
                                                "flags": 16,
                                                "start": 5,
                                                "end": 14
                                            },
                                            {
                                                "kind": 178,
                                                "declareKeyword": null,
                                                "decorators": null,
                                                "classKeyword": {
                                                    "kind": 37822544,
                                                    "flags": 80,
                                                    "start": 14,
                                                    "end": 20
                                                },
                                                "name": {
                                                    "kind": 16637,
                                                    "text": "",
                                                    "flags": 64,
                                                    "start": 20,
                                                    "end": 20
                                                },
                                                "typeParameters": null,
                                                "tail": {
                                                    "kind": 277,
                                                    "classHeritage": null,
                                                    "body": {
                                                        "kind": 262,
                                                        "elements": [],
                                                        "flags": 32,
                                                        "start": 20,
                                                        "end": 20
                                                    },
                                                    "flags": 20,
                                                    "start": 32,
                                                    "end": 20
                                                },
                                                "flags": 16,
                                                "start": 14,
                                                "end": 20
                                            },
                                            {
                                                "kind": 176,
                                                "declareKeyword": null,
                                                "asyncKeyword": null,
                                                "functionKeyword": {
                                                    "kind": 37822554,
                                                    "flags": 64,
                                                    "start": 20,
                                                    "end": 29
                                                },
                                                "generatorToken": null,
                                                "name": null,
                                                "formalParameters": {
                                                    "kind": 214,
                                                    "formalParameterList": [],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "start": 29,
                                                    "end": 29
                                                },
                                                "contents": {
                                                    "kind": 216,
                                                    "functionStatementList": {
                                                        "kind": 217,
                                                        "directives": [],
                                                        "statements": [],
                                                        "flags": 32,
                                                        "start": 29,
                                                        "end": 29
                                                    },
                                                    "flags": 32,
                                                    "start": 29,
                                                    "end": 29
                                                },
                                                "typeParameters": null,
                                                "returnType": null,
                                                "flags": 16,
                                                "start": 20,
                                                "end": 29
                                            },
                                            {
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 126,
                                                    "operandToken": {
                                                        "kind": 65584,
                                                        "flags": 64,
                                                        "start": 29,
                                                        "end": 31
                                                    },
                                                    "operand": {
                                                        "kind": 126,
                                                        "operandToken": {
                                                            "kind": 65584,
                                                            "flags": 64,
                                                            "start": 31,
                                                            "end": 32
                                                        },
                                                        "operand": {
                                                            "kind": 16637,
                                                            "text": "",
                                                            "flags": 64,
                                                            "start": 32,
                                                            "end": 32
                                                        },
                                                        "flags": 32,
                                                        "start": 31,
                                                        "end": 32
                                                    },
                                                    "flags": 32,
                                                    "start": 29,
                                                    "end": 32
                                                },
                                                "flags": 16,
                                                "start": 29,
                                                "end": 32
                                            }
                                        ],
                                        "flags": 16,
                                        "start": 5,
                                        "end": 32
                                    },
                                    "flags": 16,
                                    "start": 3,
                                    "end": 32
                                }
                            ],
                            "flags": 16,
                            "start": 3,
                            "end": 32
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 32
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 32
            },
            "flags": 16,
            "start": 0,
            "end": 32
        }
    ],
    "isModule": false,
    "source": "{ { { abstract class function !!",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 32
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a `;` - start: 14, end: 20
✖ Binding identifier expected - start: 20, end: 29
✖ Binding identifier expected - start: 29, end: 31
✖ Missing an opening parentheses - '( - start: 30, end: 31
✖ Identifier expected - start: 32, end: 32

```

