# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: k
> :: test: switch with unclosed block
> :: case: function while
## Input

`````js
switch {} default(x) { function while
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
                "flags": 0,
                "start": 0,
                "end": 6
            },
            "expression": {
                "kind": 220,
                "propertyList": {
                    "kind": 218,
                    "properties": [],
                    "trailingComma": false,
                    "multiline": false,
                    "flags": 0,
                    "start": 8,
                    "end": 8
                },
                "flags": 32,
                "start": 6,
                "end": 9
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [
                    {
                        "kind": 170,
                        "defaultKeyword": {
                            "kind": 4194387,
                            "flags": 0,
                            "start": 9,
                            "end": 17
                        },
                        "statements": [
                            {
                                "kind": 120,
                                "expression": {
                                    "kind": 121,
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 18,
                                        "end": 19
                                    },
                                    "flags": 32,
                                    "start": 17,
                                    "end": 20
                                },
                                "flags": 16,
                                "start": 17,
                                "end": 20
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
                                                "flags": 0,
                                                "start": 22,
                                                "end": 31
                                            },
                                            "generatorToken": null,
                                            "name": {
                                                "kind": 16637,
                                                "text": "",
                                                "flags": 68,
                                                "start": 31,
                                                "end": 31
                                            },
                                            "formalParameters": {
                                                "kind": 214,
                                                "formalParameterList": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 31,
                                                "end": 31
                                            },
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [],
                                                    "multiline": false,
                                                    "flags": 32,
                                                    "start": 31,
                                                    "end": 31
                                                },
                                                "flags": 32,
                                                "start": 31,
                                                "end": 31
                                            },
                                            "typeParameters": null,
                                            "returnType": null,
                                            "flags": 16,
                                            "start": 22,
                                            "end": 31
                                        },
                                        {
                                            "kind": 154,
                                            "whileKeyword": {
                                                "kind": 37757028,
                                                "flags": 0,
                                                "start": 31,
                                                "end": 37
                                            },
                                            "expression": {
                                                "kind": 16637,
                                                "text": "",
                                                "flags": 68,
                                                "start": 37,
                                                "end": 37
                                            },
                                            "statement": {
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 16637,
                                                    "text": "",
                                                    "flags": 68,
                                                    "start": 37,
                                                    "end": 37
                                                },
                                                "flags": 16,
                                                "start": 37,
                                                "end": 37
                                            },
                                            "flags": 16,
                                            "start": 31,
                                            "end": 37
                                        }
                                    ],
                                    "multiLine": false,
                                    "flags": 16,
                                    "start": 22,
                                    "end": 37
                                },
                                "flags": 16,
                                "start": 20,
                                "end": 37
                            }
                        ],
                        "flags": 16,
                        "start": 9,
                        "end": 37
                    }
                ],
                "flags": 16,
                "start": 9,
                "end": 37
            },
            "flags": 16,
            "start": 0,
            "end": 37
        }
    ],
    "isModule": false,
    "text": "switch {} default(x) { function while",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 37
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Binding identifier expected - start: 31, end: 37
✖ Unexpected token. - start: 31, end: 37
✖ Expression expected - start: 37, end: 37
✖ Expression expected - start: 37, end: 37

```

