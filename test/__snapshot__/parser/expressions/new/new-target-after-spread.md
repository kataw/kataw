# Kataw parser test case

## Input

`````js
function f(){ [...new.target] }
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
                                "kind": 119,
                                "elementList": {
                                    "kind": 270,
                                    "elements": [
                                        {
                                            "kind": 223,
                                            "argument": {
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
                                            "start": 15,
                                            "end": 28
                                        }
                                    ],
                                    "trailingComma": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 15,
                                    "end": 28
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 13,
                                "end": 29
                            },
                            "autofix": 0,
                            "flags": 128,
                            "start": 13,
                            "end": 29
                        }
                    ],
                    "multiline": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 13,
                    "end": 29
                },
                "autofix": 0,
                "flags": 256,
                "start": 12,
                "end": 31
            },
            "typeParameters": null,
            "returnType": null,
            "autofix": 0,
            "flags": 256,
            "start": 0,
            "end": 31
        }
    ],
    "isModule": false,
    "text": "function f(){ [...new.target] }",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 31
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

