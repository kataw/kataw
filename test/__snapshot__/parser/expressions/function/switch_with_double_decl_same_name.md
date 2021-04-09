# Kataw parser test case

## Input

`````js
switch (0) {
  case 1:
    function f() {}
  default:
    function f() {}
}
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
                            "start": 19,
                            "end": 21
                        },
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
                                    "start": 35,
                                    "end": 37
                                },
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 38,
                                    "end": 39
                                },
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "statements": [],
                                        "multiline": false,
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 41,
                                        "end": 41
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 39,
                                    "end": 42
                                },
                                "typeParameters": null,
                                "returnType": null,
                                "autofix": 0,
                                "flags": 256,
                                "start": 22,
                                "end": 42
                            }
                        ],
                        "autofix": 0,
                        "flags": 128,
                        "start": 12,
                        "end": 42
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
                                    "start": 66,
                                    "end": 68
                                },
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 69,
                                    "end": 70
                                },
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "statements": [],
                                        "multiline": false,
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 72,
                                        "end": 72
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 70,
                                    "end": 73
                                },
                                "typeParameters": null,
                                "returnType": null,
                                "autofix": 0,
                                "flags": 256,
                                "start": 53,
                                "end": 73
                            }
                        ],
                        "autofix": 0,
                        "flags": 128,
                        "start": 42,
                        "end": 73
                    }
                ],
                "autofix": 0,
                "flags": 128,
                "start": 10,
                "end": 75
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 75
        }
    ],
    "isModule": false,
    "text": "switch (0) {\n  case 1:\n    function f() {}\n  default:\n    function f() {}\n}",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 75
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

