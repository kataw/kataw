# Kataw parser test case

## Input

`````js
({throw(x, y) {}});
({package(x, y) {}});
({package(x, y) {}});
({this(x, y) {}});
({switch(x, y) {}});
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
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
                                    "kind": 134299649,
                                    "text": "throw",
                                    "rawText": "throw",
                                    "flags": 96,
                                    "start": 2,
                                    "end": 7
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [
                                        {
                                            "kind": 215,
                                            "ellipsisToken": null,
                                            "binding": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 8,
                                                "end": 9
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "flags": 32,
                                            "start": 8,
                                            "end": 9
                                        },
                                        {
                                            "kind": 215,
                                            "ellipsisToken": null,
                                            "binding": {
                                                "kind": 134299649,
                                                "text": "y",
                                                "rawText": "y",
                                                "flags": 96,
                                                "start": 10,
                                                "end": 12
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "flags": 32,
                                            "start": 10,
                                            "end": 12
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 8,
                                    "end": 13
                                },
                                "type": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 15,
                                        "end": 15
                                    },
                                    "flags": 32,
                                    "start": 13,
                                    "end": 16
                                },
                                "flags": 32,
                                "start": 7,
                                "end": 16
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 2,
                        "end": 16
                    },
                    "flags": 32,
                    "start": 1,
                    "end": 17
                },
                "flags": 32,
                "start": 0,
                "end": 18
            },
            "flags": 16,
            "start": 0,
            "end": 19
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
                                    "kind": 134299649,
                                    "text": "package",
                                    "rawText": "package",
                                    "flags": 96,
                                    "start": 22,
                                    "end": 29
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [
                                        {
                                            "kind": 215,
                                            "ellipsisToken": null,
                                            "binding": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 30,
                                                "end": 31
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "flags": 32,
                                            "start": 30,
                                            "end": 31
                                        },
                                        {
                                            "kind": 215,
                                            "ellipsisToken": null,
                                            "binding": {
                                                "kind": 134299649,
                                                "text": "y",
                                                "rawText": "y",
                                                "flags": 96,
                                                "start": 32,
                                                "end": 34
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "flags": 32,
                                            "start": 32,
                                            "end": 34
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 30,
                                    "end": 35
                                },
                                "type": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 37,
                                        "end": 37
                                    },
                                    "flags": 32,
                                    "start": 35,
                                    "end": 38
                                },
                                "flags": 32,
                                "start": 29,
                                "end": 38
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 22,
                        "end": 38
                    },
                    "flags": 32,
                    "start": 21,
                    "end": 39
                },
                "flags": 32,
                "start": 19,
                "end": 40
            },
            "flags": 16,
            "start": 19,
            "end": 41
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
                                    "kind": 134299649,
                                    "text": "package",
                                    "rawText": "package",
                                    "flags": 96,
                                    "start": 44,
                                    "end": 51
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [
                                        {
                                            "kind": 215,
                                            "ellipsisToken": null,
                                            "binding": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 52,
                                                "end": 53
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "flags": 32,
                                            "start": 52,
                                            "end": 53
                                        },
                                        {
                                            "kind": 215,
                                            "ellipsisToken": null,
                                            "binding": {
                                                "kind": 134299649,
                                                "text": "y",
                                                "rawText": "y",
                                                "flags": 96,
                                                "start": 54,
                                                "end": 56
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "flags": 32,
                                            "start": 54,
                                            "end": 56
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 52,
                                    "end": 57
                                },
                                "type": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 59,
                                        "end": 59
                                    },
                                    "flags": 32,
                                    "start": 57,
                                    "end": 60
                                },
                                "flags": 32,
                                "start": 51,
                                "end": 60
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 44,
                        "end": 60
                    },
                    "flags": 32,
                    "start": 43,
                    "end": 61
                },
                "flags": 32,
                "start": 41,
                "end": 62
            },
            "flags": 16,
            "start": 41,
            "end": 63
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
                                    "kind": 134299649,
                                    "text": "this",
                                    "rawText": "this",
                                    "flags": 96,
                                    "start": 66,
                                    "end": 70
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [
                                        {
                                            "kind": 215,
                                            "ellipsisToken": null,
                                            "binding": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 71,
                                                "end": 72
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "flags": 32,
                                            "start": 71,
                                            "end": 72
                                        },
                                        {
                                            "kind": 215,
                                            "ellipsisToken": null,
                                            "binding": {
                                                "kind": 134299649,
                                                "text": "y",
                                                "rawText": "y",
                                                "flags": 96,
                                                "start": 73,
                                                "end": 75
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "flags": 32,
                                            "start": 73,
                                            "end": 75
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 71,
                                    "end": 76
                                },
                                "type": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 78,
                                        "end": 78
                                    },
                                    "flags": 32,
                                    "start": 76,
                                    "end": 79
                                },
                                "flags": 32,
                                "start": 70,
                                "end": 79
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 66,
                        "end": 79
                    },
                    "flags": 32,
                    "start": 65,
                    "end": 80
                },
                "flags": 32,
                "start": 63,
                "end": 81
            },
            "flags": 16,
            "start": 63,
            "end": 82
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
                                    "kind": 134299649,
                                    "text": "switch",
                                    "rawText": "switch",
                                    "flags": 96,
                                    "start": 85,
                                    "end": 91
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [
                                        {
                                            "kind": 215,
                                            "ellipsisToken": null,
                                            "binding": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 92,
                                                "end": 93
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "flags": 32,
                                            "start": 92,
                                            "end": 93
                                        },
                                        {
                                            "kind": 215,
                                            "ellipsisToken": null,
                                            "binding": {
                                                "kind": 134299649,
                                                "text": "y",
                                                "rawText": "y",
                                                "flags": 96,
                                                "start": 94,
                                                "end": 96
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "flags": 32,
                                            "start": 94,
                                            "end": 96
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 92,
                                    "end": 97
                                },
                                "type": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 99,
                                        "end": 99
                                    },
                                    "flags": 32,
                                    "start": 97,
                                    "end": 100
                                },
                                "flags": 32,
                                "start": 91,
                                "end": 100
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 85,
                        "end": 100
                    },
                    "flags": 32,
                    "start": 84,
                    "end": 101
                },
                "flags": 32,
                "start": 82,
                "end": 102
            },
            "flags": 16,
            "start": 82,
            "end": 103
        }
    ],
    "isModule": false,
    "source": "({throw(x, y) {}});\n({package(x, y) {}});\n({package(x, y) {}});\n({this(x, y) {}});\n({switch(x, y) {}});",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 103
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

