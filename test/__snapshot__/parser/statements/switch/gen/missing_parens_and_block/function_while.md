# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: k
> :: test: missing parens and block
> :: case: function while
## Input

`````js
switch case function while
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 160,
            "switchKeyword": {
                "kind": 37757024,
                "flags": 768,
                "start": 0,
                "end": 6
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "flags": 12,
                "start": 6,
                "end": 6
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [
                    {
                        "kind": 175,
                        "caseKeyword": {
                            "kind": 4194382,
                            "flags": 768,
                            "start": 6,
                            "end": 11
                        },
                        "expression": {
                            "kind": 177,
                            "asyncKeyword": null,
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 768,
                                "start": 11,
                                "end": 20
                            },
                            "generatorToken": null,
                            "name": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 256,
                                "start": 20,
                                "end": 20
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "multiline": false,
                                    "flags": 256,
                                    "start": 20,
                                    "end": 20
                                },
                                "flags": 256,
                                "start": 20,
                                "end": 20
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "flags": 256,
                            "start": 11,
                            "end": 20
                        },
                        "statements": [
                            {
                                "kind": 154,
                                "whileKeyword": {
                                    "kind": 37757028,
                                    "flags": 768,
                                    "start": 20,
                                    "end": 26
                                },
                                "expression": {
                                    "kind": 16637,
                                    "text": "",
                                    "flags": 12,
                                    "start": 26,
                                    "end": 26
                                },
                                "statement": {
                                    "kind": 120,
                                    "expression": {
                                        "kind": 16637,
                                        "text": "",
                                        "flags": 12,
                                        "start": 26,
                                        "end": 26
                                    },
                                    "flags": 128,
                                    "start": 26,
                                    "end": 26
                                },
                                "flags": 128,
                                "start": 20,
                                "end": 26
                            }
                        ],
                        "flags": 128,
                        "start": 6,
                        "end": 26
                    }
                ],
                "flags": 128,
                "start": 6,
                "end": 26
            },
            "flags": 128,
            "start": 0,
            "end": 26
        }
    ],
    "isModule": false,
    "text": "switch case function while",
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
✖ Expression expected - start: 6, end: 11
✖ Unexpected token. - start: 20, end: 26
✖ Expression expected - start: 26, end: 26
✖ Expression expected - start: 26, end: 26

```

