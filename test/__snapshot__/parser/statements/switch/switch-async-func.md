# Kataw parser test case

## Input

`````js
switch (0) { case 1: async function* f() {} default: function f() {} }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 160,
            "expression": {
                "kind": 81921,
                "value": 0,
                "autofix": 0,
                "flags": 768,
                "start": 8,
                "end": 9
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [
                    {
                        "kind": 175,
                        "expression": {
                            "kind": 81921,
                            "value": 1,
                            "autofix": 0,
                            "flags": 768,
                            "start": 17,
                            "end": 19
                        },
                        "statements": [
                            {
                                "kind": 176,
                                "asyncToken": {
                                    "kind": 82031,
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 20,
                                    "end": 26
                                },
                                "generatorToken": {
                                    "kind": 67143222,
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 35,
                                    "end": 36
                                },
                                "name": {
                                    "kind": 81921,
                                    "value": "f",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 36,
                                    "end": 38
                                },
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 39,
                                    "end": 40
                                },
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "statements": [],
                                        "multiline": false,
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 42,
                                        "end": 42
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 40,
                                    "end": 43
                                },
                                "typeParameters": null,
                                "returnType": null,
                                "autofix": 0,
                                "flags": 3328,
                                "start": 20,
                                "end": 43
                            }
                        ],
                        "autofix": 0,
                        "flags": 128,
                        "start": 12,
                        "end": 43
                    },
                    {
                        "kind": 170,
                        "statements": [
                            {
                                "kind": 176,
                                "asyncToken": null,
                                "generatorToken": null,
                                "name": {
                                    "kind": 81921,
                                    "value": "f",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 61,
                                    "end": 63
                                },
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 64,
                                    "end": 65
                                },
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "statements": [],
                                        "multiline": false,
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 67,
                                        "end": 67
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 65,
                                    "end": 68
                                },
                                "typeParameters": null,
                                "returnType": null,
                                "autofix": 0,
                                "flags": 256,
                                "start": 52,
                                "end": 68
                            }
                        ],
                        "autofix": 0,
                        "flags": 128,
                        "start": 43,
                        "end": 68
                    }
                ],
                "autofix": 0,
                "flags": 128,
                "start": 10,
                "end": 70
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 70
        }
    ],
    "isModule": false,
    "text": "switch (0) { case 1: async function* f() {} default: function f() {} }",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 70
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

