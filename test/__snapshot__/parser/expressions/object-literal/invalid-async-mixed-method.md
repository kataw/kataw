# Kataw parser test case

## Input

`````js
({ async a(b = await (0)) {} })
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 209,
                                "name": {
                                    "kind": 81921,
                                    "value": "a",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 8,
                                    "end": 10
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [
                                        {
                                            "kind": 215,
                                            "ellipsisToken": null,
                                            "binding": {
                                                "kind": 81921,
                                                "value": "b",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 11,
                                                "end": 12
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": {
                                                "kind": 208,
                                                "expression": {
                                                    "kind": 121,
                                                    "expression": {
                                                        "kind": 81921,
                                                        "value": 0,
                                                        "autofix": 0,
                                                        "flags": 768,
                                                        "start": 22,
                                                        "end": 23
                                                    },
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 20,
                                                    "end": 24
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 14,
                                                "end": 24
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 11,
                                            "end": 24
                                        }
                                    ],
                                    "trailingComma": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 11,
                                    "end": 25
                                },
                                "type": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "statements": [],
                                        "multiline": false,
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 27,
                                        "end": 27
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 25,
                                    "end": 28
                                },
                                "autofix": 0,
                                "flags": 2304,
                                "start": 10,
                                "end": 28
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "autofix": 0,
                        "flags": 0,
                        "start": 2,
                        "end": 28
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 1,
                    "end": 30
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 31
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 31
        }
    ],
    "isModule": false,
    "text": "({ async a(b = await (0)) {} })",
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

