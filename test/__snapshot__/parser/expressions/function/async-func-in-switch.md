# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true, module: true }
`````

## Input

`````js
switch (x) {
  case foo:
    async function f(){}
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
                "value": "x",
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
                            "value": "foo",
                            "autofix": 0,
                            "flags": 768,
                            "start": 19,
                            "end": 23
                        },
                        "statements": [
                            {
                                "kind": 176,
                                "asyncToken": {
                                    "kind": 82031,
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 24,
                                    "end": 34
                                },
                                "generatorToken": null,
                                "name": {
                                    "kind": 81921,
                                    "value": "f",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 43,
                                    "end": 45
                                },
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 46,
                                    "end": 47
                                },
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "statements": [],
                                        "multiline": false,
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 48,
                                        "end": 48
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 47,
                                    "end": 49
                                },
                                "typeParameters": null,
                                "returnType": null,
                                "autofix": 0,
                                "flags": 1280,
                                "start": 24,
                                "end": 49
                            }
                        ],
                        "autofix": 0,
                        "flags": 128,
                        "start": 12,
                        "end": 49
                    }
                ],
                "autofix": 0,
                "flags": 128,
                "start": 10,
                "end": 51
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 51
        }
    ],
    "isModule": true,
    "text": "switch (x) {\n  case foo:\n    async function f(){}\n}",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 51
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

