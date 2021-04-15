# Kataw parser test case

## Input

`````js
({set ["a"](x) {}});
({set [0](x) {}});
({set [0](x) { super.m("b", v); }});
({set [0](x) { super.m("1", v); }});
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
                                    "kind": 194,
                                    "expression": {
                                        "kind": 201392131,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 768,
                                        "start": 7,
                                        "end": 10
                                    },
                                    "flags": 256,
                                    "start": 5,
                                    "end": 11
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
                                                "start": 12,
                                                "end": 13
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "flags": 256,
                                            "start": 12,
                                            "end": 13
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 4352,
                                    "start": 12,
                                    "end": 14
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
                                        "start": 16,
                                        "end": 16
                                    },
                                    "flags": 256,
                                    "start": 14,
                                    "end": 17
                                },
                                "flags": 4352,
                                "start": 11,
                                "end": 17
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 2,
                        "end": 17
                    },
                    "flags": 256,
                    "start": 1,
                    "end": 18
                },
                "flags": 256,
                "start": 0,
                "end": 19
            },
            "flags": 128,
            "start": 0,
            "end": 20
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
                                    "kind": 194,
                                    "expression": {
                                        "kind": 134299649,
                                        "text": 0,
                                        "rawText": "0",
                                        "flags": 768,
                                        "start": 28,
                                        "end": 29
                                    },
                                    "flags": 256,
                                    "start": 26,
                                    "end": 30
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
                                                "start": 31,
                                                "end": 32
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "flags": 256,
                                            "start": 31,
                                            "end": 32
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 4352,
                                    "start": 31,
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
                                        "start": 35,
                                        "end": 35
                                    },
                                    "flags": 256,
                                    "start": 33,
                                    "end": 36
                                },
                                "flags": 4352,
                                "start": 30,
                                "end": 36
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 23,
                        "end": 36
                    },
                    "flags": 256,
                    "start": 22,
                    "end": 37
                },
                "flags": 256,
                "start": 20,
                "end": 38
            },
            "flags": 128,
            "start": 20,
            "end": 39
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
                                    "kind": 194,
                                    "expression": {
                                        "kind": 134299649,
                                        "text": 0,
                                        "rawText": "0",
                                        "flags": 768,
                                        "start": 47,
                                        "end": 48
                                    },
                                    "flags": 256,
                                    "start": 45,
                                    "end": 49
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
                                                "start": 50,
                                                "end": 51
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "flags": 256,
                                            "start": 50,
                                            "end": 51
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 4352,
                                    "start": 50,
                                    "end": 52
                                },
                                "type": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [
                                            {
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 131,
                                                    "expression": {
                                                        "kind": 129,
                                                        "member": {
                                                            "kind": 225,
                                                            "superKeyword": {
                                                                "kind": 4259935,
                                                                "flags": 768,
                                                                "start": 54,
                                                                "end": 60
                                                            },
                                                            "flags": 768,
                                                            "start": 54,
                                                            "end": 60
                                                        },
                                                        "expression": {
                                                            "kind": 134299649,
                                                            "text": "m",
                                                            "rawText": "m",
                                                            "flags": 768,
                                                            "start": 61,
                                                            "end": 62
                                                        },
                                                        "autofix": 0,
                                                        "flags": 256,
                                                        "start": 54,
                                                        "end": 62
                                                    },
                                                    "argumentList": {
                                                        "kind": 256,
                                                        "elements": [
                                                            {
                                                                "kind": 201392131,
                                                                "text": "b",
                                                                "rawText": "b",
                                                                "flags": 768,
                                                                "start": 63,
                                                                "end": 66
                                                            },
                                                            {
                                                                "kind": 134299649,
                                                                "text": "v",
                                                                "rawText": "v",
                                                                "flags": 768,
                                                                "start": 67,
                                                                "end": 69
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 256,
                                                        "start": 63,
                                                        "end": 69
                                                    },
                                                    "flags": 256,
                                                    "start": 54,
                                                    "end": 70
                                                },
                                                "flags": 128,
                                                "start": 54,
                                                "end": 71
                                            }
                                        ],
                                        "multiline": false,
                                        "flags": 256,
                                        "start": 54,
                                        "end": 71
                                    },
                                    "flags": 256,
                                    "start": 52,
                                    "end": 73
                                },
                                "flags": 4352,
                                "start": 49,
                                "end": 73
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 42,
                        "end": 73
                    },
                    "flags": 256,
                    "start": 41,
                    "end": 74
                },
                "flags": 256,
                "start": 39,
                "end": 75
            },
            "flags": 128,
            "start": 39,
            "end": 76
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
                                    "kind": 194,
                                    "expression": {
                                        "kind": 134299649,
                                        "text": 0,
                                        "rawText": "0",
                                        "flags": 768,
                                        "start": 84,
                                        "end": 85
                                    },
                                    "flags": 256,
                                    "start": 82,
                                    "end": 86
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
                                                "start": 87,
                                                "end": 88
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "flags": 256,
                                            "start": 87,
                                            "end": 88
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 4352,
                                    "start": 87,
                                    "end": 89
                                },
                                "type": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [
                                            {
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 131,
                                                    "expression": {
                                                        "kind": 129,
                                                        "member": {
                                                            "kind": 225,
                                                            "superKeyword": {
                                                                "kind": 4259935,
                                                                "flags": 768,
                                                                "start": 91,
                                                                "end": 97
                                                            },
                                                            "flags": 768,
                                                            "start": 91,
                                                            "end": 97
                                                        },
                                                        "expression": {
                                                            "kind": 134299649,
                                                            "text": "m",
                                                            "rawText": "m",
                                                            "flags": 768,
                                                            "start": 98,
                                                            "end": 99
                                                        },
                                                        "autofix": 0,
                                                        "flags": 256,
                                                        "start": 91,
                                                        "end": 99
                                                    },
                                                    "argumentList": {
                                                        "kind": 256,
                                                        "elements": [
                                                            {
                                                                "kind": 201392131,
                                                                "text": "1",
                                                                "rawText": "1",
                                                                "flags": 768,
                                                                "start": 100,
                                                                "end": 103
                                                            },
                                                            {
                                                                "kind": 134299649,
                                                                "text": "v",
                                                                "rawText": "v",
                                                                "flags": 768,
                                                                "start": 104,
                                                                "end": 106
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 256,
                                                        "start": 100,
                                                        "end": 106
                                                    },
                                                    "flags": 256,
                                                    "start": 91,
                                                    "end": 107
                                                },
                                                "flags": 128,
                                                "start": 91,
                                                "end": 108
                                            }
                                        ],
                                        "multiline": false,
                                        "flags": 256,
                                        "start": 91,
                                        "end": 108
                                    },
                                    "flags": 256,
                                    "start": 89,
                                    "end": 110
                                },
                                "flags": 4352,
                                "start": 86,
                                "end": 110
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 79,
                        "end": 110
                    },
                    "flags": 256,
                    "start": 78,
                    "end": 111
                },
                "flags": 256,
                "start": 76,
                "end": 112
            },
            "flags": 128,
            "start": 76,
            "end": 113
        }
    ],
    "isModule": false,
    "text": "({set [\"a\"](x) {}});\n({set [0](x) {}});\n({set [0](x) { super.m(\"b\", v); }});\n({set [0](x) { super.m(\"1\", v); }});",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 113
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

