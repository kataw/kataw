# Kataw parser test case

## Input

`````js
function* g() {
  (yield) = 1;
}
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
            "generatorToken": {
                "kind": 67143222,
                "autofix": 0,
                "flags": 0,
                "start": 8,
                "end": 9
            },
            "name": {
                "kind": 81921,
                "value": "g",
                "autofix": 0,
                "flags": 768,
                "start": 9,
                "end": 11
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "autofix": 0,
                "flags": 256,
                "start": 12,
                "end": 13
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "statements": [
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 125,
                                "left": {
                                    "kind": 121,
                                    "expression": {
                                        "kind": 229,
                                        "delegate": false,
                                        "asteriskToken": null,
                                        "expression": null,
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 19,
                                        "end": 24
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 15,
                                    "end": 25
                                },
                                "operatorToken": {
                                    "kind": 67174402,
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 15,
                                    "end": 27
                                },
                                "right": {
                                    "kind": 81921,
                                    "value": 1,
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 27,
                                    "end": 29
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 15,
                                "end": 29
                            },
                            "autofix": 0,
                            "flags": 128,
                            "start": 15,
                            "end": 30
                        }
                    ],
                    "multiline": true,
                    "autofix": 0,
                    "flags": 256,
                    "start": 15,
                    "end": 30
                },
                "autofix": 0,
                "flags": 256,
                "start": 13,
                "end": 32
            },
            "typeParameters": null,
            "returnType": null,
            "autofix": 0,
            "flags": 2304,
            "start": 0,
            "end": 32
        }
    ],
    "isModule": false,
    "text": "function* g() {\n  (yield) = 1;\n}",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 24,
            "error": "The left-hand side of an assignment expression must be a variable or a property access",
            "start": 25,
            "end": 27
        }
    ],
    "start": 0,
    "end": 32
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

