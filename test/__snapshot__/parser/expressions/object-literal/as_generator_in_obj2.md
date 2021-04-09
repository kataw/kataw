# Kataw parser test case

## Input

`````js

({* type(){}});

({* interface(){}});

({* in(){}});

({* of(){}});
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
                                    "value": "type",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 4,
                                    "end": 9
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 10,
                                    "end": 11
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
                                        "start": 12,
                                        "end": 12
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 11,
                                    "end": 13
                                },
                                "autofix": 0,
                                "flags": 1280,
                                "start": 9,
                                "end": 13
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "autofix": 0,
                        "flags": 0,
                        "start": 3,
                        "end": 13
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 2,
                    "end": 14
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 15
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 16
        },
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
                                    "value": "interface",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 21,
                                    "end": 31
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 32,
                                    "end": 33
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
                                        "start": 34,
                                        "end": 34
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 33,
                                    "end": 35
                                },
                                "autofix": 0,
                                "flags": 1280,
                                "start": 31,
                                "end": 35
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "autofix": 0,
                        "flags": 0,
                        "start": 20,
                        "end": 35
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 19,
                    "end": 36
                },
                "autofix": 0,
                "flags": 256,
                "start": 16,
                "end": 37
            },
            "autofix": 0,
            "flags": 128,
            "start": 16,
            "end": 38
        },
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
                                    "value": "in",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 43,
                                    "end": 46
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 47,
                                    "end": 48
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
                                        "start": 49,
                                        "end": 49
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 48,
                                    "end": 50
                                },
                                "autofix": 0,
                                "flags": 1280,
                                "start": 46,
                                "end": 50
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "autofix": 0,
                        "flags": 0,
                        "start": 42,
                        "end": 50
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 41,
                    "end": 51
                },
                "autofix": 0,
                "flags": 256,
                "start": 38,
                "end": 52
            },
            "autofix": 0,
            "flags": 128,
            "start": 38,
            "end": 53
        },
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
                                    "value": "of",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 58,
                                    "end": 61
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 62,
                                    "end": 63
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
                                        "start": 64,
                                        "end": 64
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 63,
                                    "end": 65
                                },
                                "autofix": 0,
                                "flags": 1280,
                                "start": 61,
                                "end": 65
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "autofix": 0,
                        "flags": 0,
                        "start": 57,
                        "end": 65
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 56,
                    "end": 66
                },
                "autofix": 0,
                "flags": 256,
                "start": 53,
                "end": 67
            },
            "autofix": 0,
            "flags": 128,
            "start": 53,
            "end": 68
        }
    ],
    "isModule": false,
    "text": "\n({* type(){}});\n\n({* interface(){}});\n\n({* in(){}});\n\n({* of(){}});",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 68
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

