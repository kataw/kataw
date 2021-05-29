# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-29
- From: kataw7/test\__snapshot__/parser/statements/block/autogen.md
- Path: kataw7/test\__snapshot__\parser\statements\block\gen\x007b_triple
> :: test: { triple
> :: case: {{function let}}
## Input

`````js
{ { { {{function let}}
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
                                                                            "start": 8,
                                                                            "end": 16
                                                                        },
                                                                        "generatorToken": null,
                                                                        "name": {
                                                                            "kind": 134299649,
                                                                            "text": "let",
                                                                            "rawText": "let",
                                                                            "flags": 96,
                                                                            "start": 16,
                                                                            "end": 20
                                                                        },
                                                                        "formalParameters": {
                                                                            "kind": 214,
                                                                            "formalParameterList": [],
                                                                            "trailingComma": false,
                                                                            "flags": 32,
                                                                            "start": 20,
                                                                            "end": 20
                                                                        },
                                                                        "contents": {
                                                                            "kind": 216,
                                                                            "functionStatementList": {
                                                                                "kind": 217,
                                                                                "directives": [],
                                                                                "statements": [],
                                                                                "flags": 32,
                                                                                "start": 20,
                                                                                "end": 20
                                                                            },
                                                                            "flags": 32,
                                                                            "start": 20,
                                                                            "end": 20
                                                                        },
                                                                        "typeParameters": null,
                                                                        "returnType": null,
                                                                        "flags": 16,
                                                                        "start": 8,
                                                                        "end": 20
                                                                    }
                                                                ],
                                                                "flags": 16,
                                                                "start": 8,
                                                                "end": 20
                                                            },
                                                            "flags": 16,
                                                            "start": 7,
                                                            "end": 21
                                                        }
                                                    ],
                                                    "flags": 16,
                                                    "start": 7,
                                                    "end": 21
                                                },
                                                "flags": 16,
                                                "start": 5,
                                                "end": 22
                                            }
                                        ],
                                        "flags": 16,
                                        "start": 5,
                                        "end": 22
                                    },
                                    "flags": 16,
                                    "start": 3,
                                    "end": 22
                                }
                            ],
                            "flags": 16,
                            "start": 3,
                            "end": 22
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 22
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 22
            },
            "flags": 16,
            "start": 0,
            "end": 22
        }
    ],
    "isModule": false,
    "source": "{ { { {{function let}}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 22
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Missing an opening parentheses - '( - start: 20, end: 21
✖ Expression expected - start: 20, end: 21
✖ The parser expected to find a '}' to match the '{' token here - start: 22, end: 22

```

