# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: y
> :: test: block with invalid array
> :: case: {{function let}}
## Input

`````js
{ [catch] {{function let}}
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
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 3,
                                "end": 3
                            },
                            "flags": 32,
                            "start": 1,
                            "end": 3
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 3
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
                                "start": 8,
                                "end": 8
                            },
                            "flags": 16,
                            "start": 8,
                            "end": 8
                        },
                        "catchClause": null,
                        "finallyKeyword": null,
                        "finallyBlock": {
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
                                                        "start": 12,
                                                        "end": 20
                                                    },
                                                    "generatorToken": null,
                                                    "name": {
                                                        "kind": 134299649,
                                                        "text": "let",
                                                        "rawText": "let",
                                                        "flags": 96,
                                                        "start": 20,
                                                        "end": 24
                                                    },
                                                    "formalParameters": {
                                                        "kind": 214,
                                                        "formalParameterList": [],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "start": 24,
                                                        "end": 24
                                                    },
                                                    "contents": {
                                                        "kind": 216,
                                                        "functionStatementList": {
                                                            "kind": 217,
                                                            "directives": [],
                                                            "statements": [],
                                                            "flags": 32,
                                                            "start": 24,
                                                            "end": 24
                                                        },
                                                        "flags": 32,
                                                        "start": 24,
                                                        "end": 24
                                                    },
                                                    "typeParameters": null,
                                                    "returnType": null,
                                                    "flags": 16,
                                                    "start": 12,
                                                    "end": 24
                                                }
                                            ],
                                            "flags": 16,
                                            "start": 12,
                                            "end": 24
                                        },
                                        "flags": 16,
                                        "start": 11,
                                        "end": 25
                                    }
                                ],
                                "flags": 16,
                                "start": 11,
                                "end": 25
                            },
                            "flags": 16,
                            "start": 9,
                            "end": 26
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 26
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 26
            },
            "flags": 16,
            "start": 0,
            "end": 26
        }
    ],
    "isModule": false,
    "source": "{ [catch] {{function let}}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 26
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Did you forgot a ']' to match the `[` token? - start: 3, end: 8
✖ Expected a `;` - start: 3, end: 8
✖ 'try' expected - start: 3, end: 8
✖ Unexpected token. - start: 24, end: 25
✖ The parser expected to find a '}' to match the '{' token here - start: 26, end: 26

```

