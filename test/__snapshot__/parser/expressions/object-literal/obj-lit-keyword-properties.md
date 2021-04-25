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
                                    "flags": 768,
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
                                                "flags": 768,
                                                "start": 8,
                                                "end": 9
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "flags": 256,
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
                                                "flags": 768,
                                                "start": 10,
                                                "end": 12
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "flags": 256,
                                            "start": 10,
                                            "end": 12
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 256,
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
                                        "multiline": false,
                                        "flags": 256,
                                        "start": 15,
                                        "end": 15
                                    },
                                    "flags": 256,
                                    "start": 13,
                                    "end": 16
                                },
                                "flags": 256,
                                "start": 7,
                                "end": 16
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 2,
                        "end": 16
                    },
                    "flags": 256,
                    "start": 1,
                    "end": 17
                },
                "flags": 256,
                "start": 0,
                "end": 18
            },
            "flags": 128,
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
                                    "flags": 768,
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
                                                "flags": 768,
                                                "start": 30,
                                                "end": 31
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "flags": 256,
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
                                                "flags": 768,
                                                "start": 32,
                                                "end": 34
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "flags": 256,
                                            "start": 32,
                                            "end": 34
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 256,
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
                                        "multiline": false,
                                        "flags": 256,
                                        "start": 37,
                                        "end": 37
                                    },
                                    "flags": 256,
                                    "start": 35,
                                    "end": 38
                                },
                                "flags": 256,
                                "start": 29,
                                "end": 38
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 22,
                        "end": 38
                    },
                    "flags": 256,
                    "start": 21,
                    "end": 39
                },
                "flags": 256,
                "start": 19,
                "end": 40
            },
            "flags": 128,
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
                                    "flags": 768,
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
                                                "flags": 768,
                                                "start": 52,
                                                "end": 53
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "flags": 256,
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
                                                "flags": 768,
                                                "start": 54,
                                                "end": 56
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "flags": 256,
                                            "start": 54,
                                            "end": 56
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 256,
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
                                        "multiline": false,
                                        "flags": 256,
                                        "start": 59,
                                        "end": 59
                                    },
                                    "flags": 256,
                                    "start": 57,
                                    "end": 60
                                },
                                "flags": 256,
                                "start": 51,
                                "end": 60
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 44,
                        "end": 60
                    },
                    "flags": 256,
                    "start": 43,
                    "end": 61
                },
                "flags": 256,
                "start": 41,
                "end": 62
            },
            "flags": 128,
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
                                    "flags": 768,
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
                                                "flags": 768,
                                                "start": 71,
                                                "end": 72
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "flags": 256,
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
                                                "flags": 768,
                                                "start": 73,
                                                "end": 75
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "flags": 256,
                                            "start": 73,
                                            "end": 75
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 256,
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
                                        "multiline": false,
                                        "flags": 256,
                                        "start": 78,
                                        "end": 78
                                    },
                                    "flags": 256,
                                    "start": 76,
                                    "end": 79
                                },
                                "flags": 256,
                                "start": 70,
                                "end": 79
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 66,
                        "end": 79
                    },
                    "flags": 256,
                    "start": 65,
                    "end": 80
                },
                "flags": 256,
                "start": 63,
                "end": 81
            },
            "flags": 128,
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
                                    "flags": 768,
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
                                                "flags": 768,
                                                "start": 92,
                                                "end": 93
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "flags": 256,
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
                                                "flags": 768,
                                                "start": 94,
                                                "end": 96
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "flags": 256,
                                            "start": 94,
                                            "end": 96
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 256,
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
                                        "multiline": false,
                                        "flags": 256,
                                        "start": 99,
                                        "end": 99
                                    },
                                    "flags": 256,
                                    "start": 97,
                                    "end": 100
                                },
                                "flags": 256,
                                "start": 91,
                                "end": 100
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 85,
                        "end": 100
                    },
                    "flags": 256,
                    "start": 84,
                    "end": 101
                },
                "flags": 256,
                "start": 82,
                "end": 102
            },
            "flags": 128,
            "start": 82,
            "end": 103
        }
    ],
    "isModule": false,
    "text": "({throw(x, y) {}});\n({package(x, y) {}});\n({package(x, y) {}});\n({this(x, y) {}});\n({switch(x, y) {}});",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 103
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2714}@ No errors
```

