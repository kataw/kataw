# Kataw parser test case

## Input

`````js
function f() {
  (new.target) = 1;
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
                            "kind": 120,
                            "expression": {
                                "kind": 125,
                                "left": {
                                    "kind": 121,
                                    "expression": {
                                        "kind": 211,
                                        "name": {
                                            "kind": 81921,
                                            "value": "target",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 22,
                                            "end": 28
                                        },
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 18,
                                        "end": 28
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 14,
                                    "end": 29
                                },
                                "operatorToken": {
                                    "kind": 67174402,
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 14,
                                    "end": 31
                                },
                                "right": {
                                    "kind": 81921,
                                    "value": 1,
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 31,
                                    "end": 33
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 14,
                                "end": 33
                            },
                            "autofix": 0,
                            "flags": 128,
                            "start": 14,
                            "end": 34
                        }
                    ],
                    "multiline": true,
                    "autofix": 0,
                    "flags": 256,
                    "start": 14,
                    "end": 34
                },
                "autofix": 0,
                "flags": 256,
                "start": 12,
                "end": 36
            },
            "typeParameters": null,
            "returnType": null,
            "autofix": 0,
            "flags": 256,
            "start": 0,
            "end": 36
        }
    ],
    "isModule": false,
    "text": "function f() {\n  (new.target) = 1;\n}",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 36
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

