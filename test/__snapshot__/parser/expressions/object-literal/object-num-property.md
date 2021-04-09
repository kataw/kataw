# Kataw parser test case

## Input

`````js
({1: 1, set 1(v) {}});
({1: 1, get 1() {}});
({1: 1, set "1"(v) {}});
({foo: 1, bar: 2});
({1: 1, 2: 2});
({get foo() {}});
({set foo(v) {}});
({set 1(v) {}});
({foo: 1, get bar() {}});
({1: 1, get 2() {}});
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
                                "kind": 219,
                                "left": {
                                    "kind": 81921,
                                    "value": 1,
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 4,
                                    "end": 6
                                },
                                "right": {
                                    "kind": 81921,
                                    "value": 1,
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 2,
                                    "end": 3
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 2,
                                "end": 6
                            },
                            {
                                "kind": 209,
                                "name": {
                                    "kind": 81921,
                                    "value": 1,
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 11,
                                    "end": 13
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
                                                "value": "v",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 14,
                                                "end": 15
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 14,
                                            "end": 15
                                        }
                                    ],
                                    "trailingComma": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 14,
                                    "end": 16
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
                                        "start": 18,
                                        "end": 18
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 16,
                                    "end": 19
                                },
                                "autofix": 0,
                                "flags": 4352,
                                "start": 13,
                                "end": 19
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "autofix": 0,
                        "flags": 0,
                        "start": 2,
                        "end": 19
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 1,
                    "end": 20
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 21
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 22
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
                                "kind": 219,
                                "left": {
                                    "kind": 81921,
                                    "value": 1,
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 27,
                                    "end": 29
                                },
                                "right": {
                                    "kind": 81921,
                                    "value": 1,
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 25,
                                    "end": 26
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 25,
                                "end": 29
                            },
                            {
                                "kind": 209,
                                "name": {
                                    "kind": 81921,
                                    "value": 1,
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 34,
                                    "end": 36
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 37,
                                    "end": 38
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
                                        "start": 40,
                                        "end": 40
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 38,
                                    "end": 41
                                },
                                "autofix": 0,
                                "flags": 8448,
                                "start": 36,
                                "end": 41
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "autofix": 0,
                        "flags": 0,
                        "start": 25,
                        "end": 41
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 24,
                    "end": 42
                },
                "autofix": 0,
                "flags": 256,
                "start": 22,
                "end": 43
            },
            "autofix": 0,
            "flags": 128,
            "start": 22,
            "end": 44
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
                                "kind": 219,
                                "left": {
                                    "kind": 81921,
                                    "value": 1,
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 49,
                                    "end": 51
                                },
                                "right": {
                                    "kind": 81921,
                                    "value": 1,
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 47,
                                    "end": 48
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 47,
                                "end": 51
                            },
                            {
                                "kind": 209,
                                "name": {
                                    "kind": 67174403,
                                    "value": "1",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 56,
                                    "end": 60
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
                                                "value": "v",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 61,
                                                "end": 62
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 61,
                                            "end": 62
                                        }
                                    ],
                                    "trailingComma": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 61,
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
                                        "start": 65,
                                        "end": 65
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 63,
                                    "end": 66
                                },
                                "autofix": 0,
                                "flags": 4352,
                                "start": 60,
                                "end": 66
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "autofix": 0,
                        "flags": 0,
                        "start": 47,
                        "end": 66
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 46,
                    "end": 67
                },
                "autofix": 0,
                "flags": 256,
                "start": 44,
                "end": 68
            },
            "autofix": 0,
            "flags": 128,
            "start": 44,
            "end": 69
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
                                "kind": 219,
                                "left": {
                                    "kind": 81921,
                                    "value": 1,
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 76,
                                    "end": 78
                                },
                                "right": {
                                    "kind": 81921,
                                    "value": "foo",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 72,
                                    "end": 75
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 72,
                                "end": 78
                            },
                            {
                                "kind": 219,
                                "left": {
                                    "kind": 81921,
                                    "value": 2,
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 84,
                                    "end": 86
                                },
                                "right": {
                                    "kind": 81921,
                                    "value": "bar",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 79,
                                    "end": 83
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 79,
                                "end": 86
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "autofix": 0,
                        "flags": 0,
                        "start": 72,
                        "end": 86
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 71,
                    "end": 87
                },
                "autofix": 0,
                "flags": 256,
                "start": 69,
                "end": 88
            },
            "autofix": 0,
            "flags": 128,
            "start": 69,
            "end": 89
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
                                "kind": 219,
                                "left": {
                                    "kind": 81921,
                                    "value": 1,
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 94,
                                    "end": 96
                                },
                                "right": {
                                    "kind": 81921,
                                    "value": 1,
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 92,
                                    "end": 93
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 92,
                                "end": 96
                            },
                            {
                                "kind": 219,
                                "left": {
                                    "kind": 81921,
                                    "value": 2,
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 100,
                                    "end": 102
                                },
                                "right": {
                                    "kind": 81921,
                                    "value": 2,
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 97,
                                    "end": 99
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 97,
                                "end": 102
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "autofix": 0,
                        "flags": 0,
                        "start": 92,
                        "end": 102
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 91,
                    "end": 103
                },
                "autofix": 0,
                "flags": 256,
                "start": 89,
                "end": 104
            },
            "autofix": 0,
            "flags": 128,
            "start": 89,
            "end": 105
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
                                    "value": "foo",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 111,
                                    "end": 115
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 116,
                                    "end": 117
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
                                        "start": 119,
                                        "end": 119
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 117,
                                    "end": 120
                                },
                                "autofix": 0,
                                "flags": 8448,
                                "start": 115,
                                "end": 120
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "autofix": 0,
                        "flags": 0,
                        "start": 108,
                        "end": 120
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 107,
                    "end": 121
                },
                "autofix": 0,
                "flags": 256,
                "start": 105,
                "end": 122
            },
            "autofix": 0,
            "flags": 128,
            "start": 105,
            "end": 123
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
                                    "value": "foo",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 129,
                                    "end": 133
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
                                                "value": "v",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 134,
                                                "end": 135
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 134,
                                            "end": 135
                                        }
                                    ],
                                    "trailingComma": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 134,
                                    "end": 136
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
                                        "start": 138,
                                        "end": 138
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 136,
                                    "end": 139
                                },
                                "autofix": 0,
                                "flags": 4352,
                                "start": 133,
                                "end": 139
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "autofix": 0,
                        "flags": 0,
                        "start": 126,
                        "end": 139
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 125,
                    "end": 140
                },
                "autofix": 0,
                "flags": 256,
                "start": 123,
                "end": 141
            },
            "autofix": 0,
            "flags": 128,
            "start": 123,
            "end": 142
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
                                    "value": 1,
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 148,
                                    "end": 150
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
                                                "value": "v",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 151,
                                                "end": 152
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 151,
                                            "end": 152
                                        }
                                    ],
                                    "trailingComma": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 151,
                                    "end": 153
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
                                        "start": 155,
                                        "end": 155
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 153,
                                    "end": 156
                                },
                                "autofix": 0,
                                "flags": 4352,
                                "start": 150,
                                "end": 156
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "autofix": 0,
                        "flags": 0,
                        "start": 145,
                        "end": 156
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 144,
                    "end": 157
                },
                "autofix": 0,
                "flags": 256,
                "start": 142,
                "end": 158
            },
            "autofix": 0,
            "flags": 128,
            "start": 142,
            "end": 159
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
                                "kind": 219,
                                "left": {
                                    "kind": 81921,
                                    "value": 1,
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 166,
                                    "end": 168
                                },
                                "right": {
                                    "kind": 81921,
                                    "value": "foo",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 162,
                                    "end": 165
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 162,
                                "end": 168
                            },
                            {
                                "kind": 209,
                                "name": {
                                    "kind": 81921,
                                    "value": "bar",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 173,
                                    "end": 177
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 178,
                                    "end": 179
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
                                        "start": 181,
                                        "end": 181
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 179,
                                    "end": 182
                                },
                                "autofix": 0,
                                "flags": 8448,
                                "start": 177,
                                "end": 182
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "autofix": 0,
                        "flags": 0,
                        "start": 162,
                        "end": 182
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 161,
                    "end": 183
                },
                "autofix": 0,
                "flags": 256,
                "start": 159,
                "end": 184
            },
            "autofix": 0,
            "flags": 128,
            "start": 159,
            "end": 185
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
                                "kind": 219,
                                "left": {
                                    "kind": 81921,
                                    "value": 1,
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 190,
                                    "end": 192
                                },
                                "right": {
                                    "kind": 81921,
                                    "value": 1,
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 188,
                                    "end": 189
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 188,
                                "end": 192
                            },
                            {
                                "kind": 209,
                                "name": {
                                    "kind": 81921,
                                    "value": 2,
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 197,
                                    "end": 199
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 200,
                                    "end": 201
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
                                        "start": 203,
                                        "end": 203
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 201,
                                    "end": 204
                                },
                                "autofix": 0,
                                "flags": 8448,
                                "start": 199,
                                "end": 204
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "autofix": 0,
                        "flags": 0,
                        "start": 188,
                        "end": 204
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 187,
                    "end": 205
                },
                "autofix": 0,
                "flags": 256,
                "start": 185,
                "end": 206
            },
            "autofix": 0,
            "flags": 128,
            "start": 185,
            "end": 207
        }
    ],
    "isModule": false,
    "text": "({1: 1, set 1(v) {}});\n({1: 1, get 1() {}});\n({1: 1, set \"1\"(v) {}});\n({foo: 1, bar: 2});\n({1: 1, 2: 2});\n({get foo() {}});\n({set foo(v) {}});\n({set 1(v) {}});\n({foo: 1, get bar() {}});\n({1: 1, get 2() {}});",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 207
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

