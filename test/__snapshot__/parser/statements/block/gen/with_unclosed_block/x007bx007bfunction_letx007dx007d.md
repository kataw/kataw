# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: k
> :: test: with unclosed block
> :: case: {{function let}}
## Input

`````js
{ {} finally(x) { {{function let}}
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
                        "start": 1,
                        "end": 4
                    }
                ],
                "multiLine": false,
                "flags": 128,
                "start": 1,
                "end": 4
            },
            "flags": 128,
            "start": 0,
            "end": 4
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
                    "start": 12,
                    "end": 12
                },
                "flags": 128,
                "start": 12,
                "end": 12
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
                    "start": 13,
                    "end": 13
                },
                "flags": 128,
                "start": 13,
                "end": 13
            },
            "flags": 128,
            "start": 4,
            "end": 13
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "text": "x",
                "rawText": "x",
                "flags": 768,
                "start": 13,
                "end": 14
            },
            "flags": 128,
            "start": 13,
            "end": 14
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [
                    {
                        "kind": 249,
                        "block": {
                            "kind": 124,
                            "statements": [
                                {
                                    "kind": 249,
                                    "block": {
                                        "kind": 124,
                                        "statements": [
                                            {
                                                "kind": 176,
                                                "asyncKeyword": null,
                                                "functionKeyword": {
                                                    "kind": 37814362,
                                                    "flags": 768,
                                                    "start": 20,
                                                    "end": 28
                                                },
                                                "generatorToken": null,
                                                "name": {
                                                    "kind": 81921,
                                                    "text": "let",
                                                    "rawText": "let",
                                                    "flags": 768,
                                                    "start": 28,
                                                    "end": 32
                                                },
                                                "formalParameters": {
                                                    "kind": 214,
                                                    "formalParameterList": [],
                                                    "trailingComma": false,
                                                    "flags": 256,
                                                    "start": 32,
                                                    "end": 32
                                                },
                                                "contents": {
                                                    "kind": 216,
                                                    "functionStatementList": {
                                                        "kind": 217,
                                                        "directives": [],
                                                        "statements": [],
                                                        "multiline": false,
                                                        "flags": 256,
                                                        "start": 32,
                                                        "end": 32
                                                    },
                                                    "flags": 256,
                                                    "start": 32,
                                                    "end": 32
                                                },
                                                "typeParameters": null,
                                                "returnType": null,
                                                "flags": 256,
                                                "start": 20,
                                                "end": 32
                                            }
                                        ],
                                        "multiLine": false,
                                        "flags": 128,
                                        "start": 20,
                                        "end": 32
                                    },
                                    "flags": 128,
                                    "start": 19,
                                    "end": 33
                                }
                            ],
                            "multiLine": false,
                            "flags": 128,
                            "start": 19,
                            "end": 33
                        },
                        "flags": 128,
                        "start": 17,
                        "end": 34
                    }
                ],
                "multiLine": false,
                "flags": 128,
                "start": 17,
                "end": 34
            },
            "flags": 128,
            "start": 15,
            "end": 34
        }
    ],
    "isModule": false,
    "text": "{ {} finally(x) { {{function let}}",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 4,
            "end": 12
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 4,
            "end": 12
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 12,
            "end": 13
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 12,
            "end": 13
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 13,
            "end": 14
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 14,
            "end": 15
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 14,
            "end": 15
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 32,
            "end": 33
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 32,
            "end": 33
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 32,
            "end": 33
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 34,
            "end": 34
        }
    ],
    "start": 0,
    "end": 34
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: k
> :: test: with unclosed block
> :: case: {{function let}}
## Input

`````js
{ {} finally(x) { {{function let}}
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: k
> :: test: with unclosed block
> :: case: {{function let}}
## Input

`````js
{ {} finally(x) { {{function let}}
`````
```

