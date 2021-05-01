# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: t
> :: test: in default
> :: case: async function f(){}
## Input

`````js
switch (x) {
  default:
    async function f(){}
}
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
                "kind": 134299649,
                "original": "x",
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 8,
                "end": 9
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [
                    {
                        "kind": 170,
                        "defaultKeyword": {
                            "kind": 4194387,
                            "flags": 1,
                            "start": 12,
                            "end": 22
                        },
                        "statements": [
                            {
                                "kind": 176,
                                "declareKeyword": null,
                                "asyncKeyword": {
                                    "kind": 82031,
                                    "flags": 65,
                                    "start": 23,
                                    "end": 33
                                },
                                "functionKeyword": {
                                    "kind": 37822554,
                                    "flags": 0,
                                    "start": 33,
                                    "end": 42
                                },
                                "generatorToken": null,
                                "name": {
                                    "kind": 134299649,
                                    "original": "f",
                                    "text": "f",
                                    "rawText": " f",
                                    "flags": 96,
                                    "start": 42,
                                    "end": 44
                                },
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 44,
                                    "end": 46
                                },
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 47,
                                        "end": 47
                                    },
                                    "flags": 32,
                                    "start": 46,
                                    "end": 48
                                },
                                "typeParameters": null,
                                "returnType": null,
                                "flags": 144,
                                "start": 23,
                                "end": 48
                            }
                        ],
                        "flags": 16,
                        "start": 12,
                        "end": 48
                    }
                ],
                "flags": 16,
                "start": 10,
                "end": 50
            },
            "flags": 16,
            "start": 0,
            "end": 50
        }
    ],
    "isModule": false,
    "source": "switch (x) {\n  default:\n    async function f(){}\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 50
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

