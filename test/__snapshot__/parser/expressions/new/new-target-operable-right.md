# Kataw parser test case

## Input

`````js
function f(){ foo + new.target }
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
                                "kind": 198,
                                "left": {
                                    "kind": 81921,
                                    "value": "foo",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 13,
                                    "end": 17
                                },
                                "operatorToken": {
                                    "kind": 34098,
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 17,
                                    "end": 19
                                },
                                "right": {
                                    "kind": 211,
                                    "name": {
                                        "kind": 81921,
                                        "value": "target",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 24,
                                        "end": 30
                                    },
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 19,
                                    "end": 30
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 13,
                                "end": 30
                            },
                            "autofix": 0,
                            "flags": 128,
                            "start": 13,
                            "end": 30
                        }
                    ],
                    "multiline": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 13,
                    "end": 30
                },
                "autofix": 0,
                "flags": 256,
                "start": 12,
                "end": 32
            },
            "typeParameters": null,
            "returnType": null,
            "autofix": 0,
            "flags": 256,
            "start": 0,
            "end": 32
        }
    ],
    "isModule": false,
    "text": "function f(){ foo + new.target }",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
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

