# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: unclosed parens
> :: case: {{function let}}
## Input

`````js
{( {{function let}}
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
                            "kind": 121,
                            "expression": {
                                "kind": 132,
                                "flags": 256,
                                "start": 1,
                                "end": 4
                            },
                            "flags": 256,
                            "start": 1,
                            "end": 4
                        },
                        "flags": 128,
                        "start": 1,
                        "end": 4
                    },
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
                                        "flags": 768,
                                        "start": 5,
                                        "end": 13
                                    },
                                    "generatorToken": null,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "let",
                                        "rawText": "let",
                                        "flags": 768,
                                        "start": 13,
                                        "end": 17
                                    },
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 256,
                                        "start": 17,
                                        "end": 17
                                    },
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "multiline": false,
                                            "flags": 256,
                                            "start": 17,
                                            "end": 17
                                        },
                                        "flags": 256,
                                        "start": 17,
                                        "end": 17
                                    },
                                    "typeParameters": null,
                                    "returnType": null,
                                    "flags": 128,
                                    "start": 5,
                                    "end": 17
                                }
                            ],
                            "multiLine": false,
                            "flags": 128,
                            "start": 5,
                            "end": 17
                        },
                        "flags": 128,
                        "start": 4,
                        "end": 18
                    }
                ],
                "multiLine": false,
                "flags": 128,
                "start": 1,
                "end": 18
            },
            "flags": 128,
            "start": 0,
            "end": 19
        }
    ],
    "isModule": false,
    "text": "{( {{function let}}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 19
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

