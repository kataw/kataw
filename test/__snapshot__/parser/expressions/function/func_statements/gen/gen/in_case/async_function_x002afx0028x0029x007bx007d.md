# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: in case
> :: case: async function *f(){}
## Input

`````js
switch (x) {
  case foo:
    async function *f(){}
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
                        "kind": 175,
                        "caseKeyword": {
                            "kind": 4194382,
                            "flags": 1,
                            "start": 12,
                            "end": 19
                        },
                        "expression": {
                            "kind": 134299649,
                            "original": "foo",
                            "text": "foo",
                            "rawText": " foo",
                            "flags": 96,
                            "start": 19,
                            "end": 23
                        },
                        "statements": [
                            {
                                "kind": 176,
                                "declareKeyword": null,
                                "asyncKeyword": {
                                    "kind": 82031,
                                    "flags": 65,
                                    "start": 24,
                                    "end": 34
                                },
                                "functionKeyword": {
                                    "kind": 37822554,
                                    "flags": 0,
                                    "start": 34,
                                    "end": 43
                                },
                                "generatorToken": {
                                    "kind": 67143222,
                                    "flags": 64,
                                    "start": 43,
                                    "end": 45
                                },
                                "name": {
                                    "kind": 134299649,
                                    "original": "f",
                                    "text": "f",
                                    "rawText": "f",
                                    "flags": 96,
                                    "start": 45,
                                    "end": 46
                                },
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 46,
                                    "end": 48
                                },
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 49,
                                        "end": 49
                                    },
                                    "flags": 32,
                                    "start": 48,
                                    "end": 50
                                },
                                "typeParameters": null,
                                "returnType": null,
                                "flags": 400,
                                "start": 24,
                                "end": 50
                            }
                        ],
                        "flags": 16,
                        "start": 12,
                        "end": 50
                    }
                ],
                "flags": 16,
                "start": 10,
                "end": 52
            },
            "flags": 16,
            "start": 0,
            "end": 52
        }
    ],
    "isModule": false,
    "source": "switch (x) {\n  case foo:\n    async function *f(){}\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 52
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

