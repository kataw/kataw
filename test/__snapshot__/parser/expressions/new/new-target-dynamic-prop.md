# Kataw parser test case

## Input

`````js
function f(){ x({[new.target]:y}) }
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
                                "kind": 131,
                                "expression": {
                                    "kind": 81921,
                                    "value": "x",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 13,
                                    "end": 15
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 220,
                                            "propertyList": {
                                                "kind": 218,
                                                "properties": [
                                                    {
                                                        "kind": 219,
                                                        "left": {
                                                            "kind": 81921,
                                                            "value": "y",
                                                            "autofix": 0,
                                                            "flags": 768,
                                                            "start": 30,
                                                            "end": 31
                                                        },
                                                        "right": {
                                                            "kind": 194,
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
                                                            "start": 17,
                                                            "end": 29
                                                        },
                                                        "autofix": 0,
                                                        "flags": 256,
                                                        "start": 17,
                                                        "end": 31
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "multiline": false,
                                                "autofix": 0,
                                                "flags": 0,
                                                "start": 17,
                                                "end": 31
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 16,
                                            "end": 32
                                        }
                                    ],
                                    "trailingComma": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 16,
                                    "end": 32
                                },
                                "flags": 256,
                                "start": 13,
                                "end": 33
                            },
                            "autofix": 0,
                            "flags": 128,
                            "start": 13,
                            "end": 33
                        }
                    ],
                    "multiline": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 13,
                    "end": 33
                },
                "autofix": 0,
                "flags": 256,
                "start": 12,
                "end": 35
            },
            "typeParameters": null,
            "returnType": null,
            "autofix": 0,
            "flags": 256,
            "start": 0,
            "end": 35
        }
    ],
    "isModule": false,
    "text": "function f(){ x({[new.target]:y}) }",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 35
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

