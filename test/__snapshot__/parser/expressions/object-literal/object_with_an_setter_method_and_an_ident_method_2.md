# Kataw parser test case

## Input

`````js
wrap({[foo](){}, set [bar](e){}});
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
                "kind": 131,
                "expression": {
                    "kind": 81921,
                    "value": "wrap",
                    "autofix": 0,
                    "flags": 768,
                    "start": 0,
                    "end": 4
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
                                        "kind": 209,
                                        "name": {
                                            "kind": 194,
                                            "expression": {
                                                "kind": 81921,
                                                "value": "foo",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 7,
                                                "end": 10
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 6,
                                            "end": 11
                                        },
                                        "typeParameters": null,
                                        "formalParameters": {
                                            "kind": 214,
                                            "formalParameterList": [],
                                            "trailingComma": false,
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 12,
                                            "end": 13
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
                                                "start": 14,
                                                "end": 14
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 13,
                                            "end": 15
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 11,
                                        "end": 15
                                    },
                                    {
                                        "kind": 209,
                                        "name": {
                                            "kind": 194,
                                            "expression": {
                                                "kind": 81921,
                                                "value": "bar",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 22,
                                                "end": 25
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 20,
                                            "end": 26
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
                                                        "value": "e",
                                                        "autofix": 0,
                                                        "flags": 768,
                                                        "start": 27,
                                                        "end": 28
                                                    },
                                                    "optionalToken": null,
                                                    "type": null,
                                                    "initializer": null,
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 27,
                                                    "end": 28
                                                }
                                            ],
                                            "trailingComma": false,
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 27,
                                            "end": 29
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
                                                "start": 30,
                                                "end": 30
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 29,
                                            "end": 31
                                        },
                                        "autofix": 0,
                                        "flags": 4352,
                                        "start": 26,
                                        "end": 31
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "autofix": 0,
                                "flags": 0,
                                "start": 6,
                                "end": 31
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 5,
                            "end": 32
                        }
                    ],
                    "trailingComma": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 5,
                    "end": 32
                },
                "flags": 256,
                "start": 0,
                "end": 33
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 34
        }
    ],
    "isModule": false,
    "text": "wrap({[foo](){}, set [bar](e){}});",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 34
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

