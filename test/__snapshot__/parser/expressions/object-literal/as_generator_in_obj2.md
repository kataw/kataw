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
                                    "text": "type",
                                    "rawText": "type",
                                    "flags": 768,
                                    "start": 4,
                                    "end": 9
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 1280,
                                    "start": 10,
                                    "end": 11
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
                                        "start": 12,
                                        "end": 12
                                    },
                                    "flags": 256,
                                    "start": 11,
                                    "end": 13
                                },
                                "flags": 1280,
                                "start": 9,
                                "end": 13
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 3,
                        "end": 13
                    },
                    "flags": 256,
                    "start": 2,
                    "end": 14
                },
                "flags": 256,
                "start": 0,
                "end": 15
            },
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
                                    "kind": 134299649,
                                    "text": "interface",
                                    "rawText": "interface",
                                    "flags": 768,
                                    "start": 21,
                                    "end": 31
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 1280,
                                    "start": 32,
                                    "end": 33
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
                                        "start": 34,
                                        "end": 34
                                    },
                                    "flags": 256,
                                    "start": 33,
                                    "end": 35
                                },
                                "flags": 1280,
                                "start": 31,
                                "end": 35
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 20,
                        "end": 35
                    },
                    "flags": 256,
                    "start": 19,
                    "end": 36
                },
                "flags": 256,
                "start": 16,
                "end": 37
            },
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
                                    "kind": 134299649,
                                    "text": "in",
                                    "rawText": "in",
                                    "flags": 768,
                                    "start": 43,
                                    "end": 46
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 1280,
                                    "start": 47,
                                    "end": 48
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
                                        "start": 49,
                                        "end": 49
                                    },
                                    "flags": 256,
                                    "start": 48,
                                    "end": 50
                                },
                                "flags": 1280,
                                "start": 46,
                                "end": 50
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 42,
                        "end": 50
                    },
                    "flags": 256,
                    "start": 41,
                    "end": 51
                },
                "flags": 256,
                "start": 38,
                "end": 52
            },
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
                                    "kind": 134299649,
                                    "text": "of",
                                    "rawText": "of",
                                    "flags": 768,
                                    "start": 58,
                                    "end": 61
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 1280,
                                    "start": 62,
                                    "end": 63
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
                                        "start": 64,
                                        "end": 64
                                    },
                                    "flags": 256,
                                    "start": 63,
                                    "end": 65
                                },
                                "flags": 1280,
                                "start": 61,
                                "end": 65
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 57,
                        "end": 65
                    },
                    "flags": 256,
                    "start": 56,
                    "end": 66
                },
                "flags": 256,
                "start": 53,
                "end": 67
            },
            "flags": 128,
            "start": 53,
            "end": 68
        }
    ],
    "isModule": false,
    "text": "\n({* type(){}});\n\n({* interface(){}});\n\n({* in(){}});\n\n({* of(){}});",
    "fileName": "__root__",
    "flags": 0,
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
@{x2714}@ No errors
```

