# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/statements/block/autogen.md
- Path: kataw/test/__snapshot__/parser/statements/block/gen/x007b_triple
> :: test: { triple
> :: case: function while
## Options

`````js
{}
`````
## Input

`````js
{ { { function while
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
                                                "kind": 176,
                                                "declareKeyword": null,
                                                "asyncKeyword": null,
                                                "functionKeyword": {
                                                    "kind": 37822554,
                                                    "flags": 64,
                                                    "start": 5,
                                                    "end": 14
                                                },
                                                "asteriskToken": null,
                                                "name": null,
                                                "typeParameters": null,
                                                "formalParameterList": {
                                                    "kind": 214,
                                                    "formalParameters": [],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "start": 14,
                                                    "end": 14
                                                },
                                                "contents": {
                                                    "kind": 216,
                                                    "functionStatementList": {
                                                        "kind": 217,
                                                        "directives": [],
                                                        "statements": [],
                                                        "flags": 32,
                                                        "start": 14,
                                                        "end": 14
                                                    },
                                                    "flags": 32,
                                                    "start": 14,
                                                    "end": 14
                                                },
                                                "returnType": null,
                                                "flags": 16,
                                                "start": 5,
                                                "end": 14
                                            },
                                            {
                                                "kind": 154,
                                                "whileKeyword": {
                                                    "kind": 37757028,
                                                    "flags": 80,
                                                    "start": 14,
                                                    "end": 20
                                                },
                                                "expression": {
                                                    "kind": 16637,
                                                    "text": "",
                                                    "rawText": "",
                                                    "flags": 64,
                                                    "start": 20,
                                                    "end": 20
                                                },
                                                "statement": {
                                                    "kind": 120,
                                                    "expression": {
                                                        "kind": 16637,
                                                        "text": "",
                                                        "rawText": "",
                                                        "flags": 64,
                                                        "start": 20,
                                                        "end": 20
                                                    },
                                                    "flags": 16,
                                                    "start": 20,
                                                    "end": 20
                                                },
                                                "flags": 80,
                                                "start": 14,
                                                "end": 20
                                            }
                                        ],
                                        "flags": 16,
                                        "start": 5,
                                        "end": 20
                                    },
                                    "flags": 16,
                                    "start": 3,
                                    "end": 20
                                }
                            ],
                            "flags": 16,
                            "start": 3,
                            "end": 20
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 20
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 20
            },
            "flags": 16,
            "start": 0,
            "end": 20
        }
    ],
    "isModule": false,
    "source": "{ { { function while",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 20
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Binding identifier expected - start: 14, end: 20
✖ Missing an opening parentheses - '( - start: 15, end: 20

```

