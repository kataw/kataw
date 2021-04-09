# Kataw parser test case

## Input

`````js
function f(){ return --a; }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
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
                "start": 8,
                "end": 10
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "autofix": 0,
                "flags": 256,
                "start": 11,
                "end": 12
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "statements": [
                        {
                            "kind": 161,
                            "expression": {
                                "kind": 128,
                                "operandToken": {
                                    "kind": 196636,
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 20,
                                    "end": 23
                                },
                                "expression": {
                                    "kind": 81921,
                                    "value": "a",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 23,
                                    "end": 24
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 20,
                                "end": 24
                            },
                            "autofix": 0,
                            "flags": 128,
                            "start": 0,
                            "end": 13
                        }
                    ],
                    "multiline": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 13,
                    "end": 25
                },
                "autofix": 0,
                "flags": 256,
                "start": 12,
                "end": 27
            },
            "typeParameters": null,
            "returnType": null,
            "autofix": 0,
            "flags": 256,
            "start": 0,
            "end": 27
        }
    ],
    "isModule": false,
    "text": "function f(){ return --a; }",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 27
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

