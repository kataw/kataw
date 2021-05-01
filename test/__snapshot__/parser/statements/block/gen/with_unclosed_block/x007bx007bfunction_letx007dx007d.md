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
                            "kind": 249,
                            "block": {
                                "kind": 124,
                                "statements": [],
                                "flags": 16,
                                "start": 12,
                                "end": 12
                            },
                            "flags": 16,
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
                                "flags": 16,
                                "start": 13,
                                "end": 13
                            },
                            "flags": 16,
                            "start": 13,
                            "end": 13
                        },
                        "flags": 16,
                        "start": 4,
                        "end": 13
                    },
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 13,
                            "end": 14
                        },
                        "flags": 16,
                        "start": 13,
                        "end": 14
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 14
            },
            "flags": 16,
            "start": 0,
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
                                                "declareKeyword": null,
                                                "asyncKeyword": null,
                                                "functionKeyword": {
                                                    "kind": 37822554,
                                                    "flags": 0,
                                                    "start": 20,
                                                    "end": 28
                                                },
                                                "generatorToken": null,
                                                "name": {
                                                    "kind": 134299649,
                                                    "text": "let",
                                                    "rawText": " let",
                                                    "flags": 96,
                                                    "start": 28,
                                                    "end": 32
                                                },
                                                "formalParameters": {
                                                    "kind": 214,
                                                    "formalParameterList": [],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "start": 32,
                                                    "end": 32
                                                },
                                                "contents": {
                                                    "kind": 216,
                                                    "functionStatementList": {
                                                        "kind": 217,
                                                        "directives": [],
                                                        "statements": [],
                                                        "flags": 32,
                                                        "start": 32,
                                                        "end": 32
                                                    },
                                                    "flags": 32,
                                                    "start": 32,
                                                    "end": 32
                                                },
                                                "typeParameters": null,
                                                "returnType": null,
                                                "flags": 16,
                                                "start": 20,
                                                "end": 32
                                            }
                                        ],
                                        "flags": 16,
                                        "start": 20,
                                        "end": 32
                                    },
                                    "flags": 16,
                                    "start": 19,
                                    "end": 33
                                }
                            ],
                            "flags": 16,
                            "start": 19,
                            "end": 33
                        },
                        "flags": 16,
                        "start": 17,
                        "end": 34
                    }
                ],
                "flags": 16,
                "start": 17,
                "end": 34
            },
            "flags": 16,
            "start": 15,
            "end": 34
        }
    ],
    "isModule": false,
    "source": "{ {} finally(x) { {{function let}}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 34
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ 'try' expected - start: 4, end: 12
✖ Expected a `;` - start: 14, end: 15
✖ Statement expected - start: 14, end: 15
✖ Unexpected token. - start: 32, end: 33

```

