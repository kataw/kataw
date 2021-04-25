# Kataw parser test case

## Input

`````js
({async});
({async: await});
({async: (await) ? yield : foo});
({async: true});
({async() { }});
({async foo() { }});
({x, y, z () {}});
({async delete() {}});
({async [foo](){}});
({async 100(){}});
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
                                "kind": 134299649,
                                "text": "async",
                                "rawText": "async",
                                "flags": 768,
                                "start": 2,
                                "end": 7
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 2,
                        "end": 7
                    },
                    "flags": 256,
                    "start": 1,
                    "end": 8
                },
                "flags": 256,
                "start": 0,
                "end": 9
            },
            "flags": 128,
            "start": 0,
            "end": 10
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
                                    "kind": 134299649,
                                    "text": "await",
                                    "rawText": "await",
                                    "flags": 768,
                                    "start": 19,
                                    "end": 25
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "async",
                                    "rawText": "async",
                                    "flags": 768,
                                    "start": 13,
                                    "end": 18
                                },
                                "flags": 256,
                                "start": 13,
                                "end": 25
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 13,
                        "end": 25
                    },
                    "flags": 256,
                    "start": 12,
                    "end": 26
                },
                "flags": 256,
                "start": 10,
                "end": 27
            },
            "flags": 128,
            "start": 10,
            "end": 28
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
                                    "kind": 197,
                                    "shortCircuit": {
                                        "kind": 121,
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "await",
                                            "rawText": "await",
                                            "flags": 768,
                                            "start": 39,
                                            "end": 44
                                        },
                                        "flags": 256,
                                        "start": 37,
                                        "end": 45
                                    },
                                    "questionToken": {
                                        "kind": 134217750,
                                        "flags": 768,
                                        "start": 45,
                                        "end": 47
                                    },
                                    "consequent": {
                                        "kind": 134299649,
                                        "text": "yield",
                                        "rawText": "yield",
                                        "flags": 768,
                                        "start": 47,
                                        "end": 53
                                    },
                                    "colonToken": {
                                        "kind": 21,
                                        "flags": 768,
                                        "start": 53,
                                        "end": 55
                                    },
                                    "alternate": {
                                        "kind": 134299649,
                                        "text": "foo",
                                        "rawText": "foo",
                                        "flags": 768,
                                        "start": 55,
                                        "end": 59
                                    },
                                    "flags": 256,
                                    "start": 31,
                                    "end": 59
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "async",
                                    "rawText": "async",
                                    "flags": 768,
                                    "start": 31,
                                    "end": 36
                                },
                                "flags": 256,
                                "start": 31,
                                "end": 59
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 31,
                        "end": 59
                    },
                    "flags": 256,
                    "start": 30,
                    "end": 60
                },
                "flags": 256,
                "start": 28,
                "end": 61
            },
            "flags": 128,
            "start": 28,
            "end": 62
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
                                    "kind": 134,
                                    "text": true,
                                    "flags": 768,
                                    "start": 71,
                                    "end": 76
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "async",
                                    "rawText": "async",
                                    "flags": 768,
                                    "start": 65,
                                    "end": 70
                                },
                                "flags": 256,
                                "start": 65,
                                "end": 76
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 65,
                        "end": 76
                    },
                    "flags": 256,
                    "start": 64,
                    "end": 77
                },
                "flags": 256,
                "start": 62,
                "end": 78
            },
            "flags": 128,
            "start": 62,
            "end": 79
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
                                    "text": "async",
                                    "rawText": "async",
                                    "flags": 768,
                                    "start": 82,
                                    "end": 87
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 256,
                                    "start": 88,
                                    "end": 89
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
                                        "start": 91,
                                        "end": 91
                                    },
                                    "flags": 256,
                                    "start": 89,
                                    "end": 93
                                },
                                "flags": 256,
                                "start": 87,
                                "end": 93
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 82,
                        "end": 93
                    },
                    "flags": 256,
                    "start": 81,
                    "end": 94
                },
                "flags": 256,
                "start": 79,
                "end": 95
            },
            "flags": 128,
            "start": 79,
            "end": 96
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
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 768,
                                    "start": 104,
                                    "end": 108
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 2304,
                                    "start": 109,
                                    "end": 110
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
                                        "start": 112,
                                        "end": 112
                                    },
                                    "flags": 256,
                                    "start": 110,
                                    "end": 114
                                },
                                "flags": 2304,
                                "start": 108,
                                "end": 114
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 99,
                        "end": 114
                    },
                    "flags": 256,
                    "start": 98,
                    "end": 115
                },
                "flags": 256,
                "start": 96,
                "end": 116
            },
            "flags": 128,
            "start": 96,
            "end": 117
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
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 768,
                                "start": 120,
                                "end": 121
                            },
                            {
                                "kind": 134299649,
                                "text": "y",
                                "rawText": "y",
                                "flags": 768,
                                "start": 122,
                                "end": 124
                            },
                            {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "z",
                                    "rawText": "z",
                                    "flags": 768,
                                    "start": 125,
                                    "end": 127
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 256,
                                    "start": 129,
                                    "end": 130
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
                                        "start": 132,
                                        "end": 132
                                    },
                                    "flags": 256,
                                    "start": 130,
                                    "end": 133
                                },
                                "flags": 256,
                                "start": 127,
                                "end": 133
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 120,
                        "end": 133
                    },
                    "flags": 256,
                    "start": 119,
                    "end": 134
                },
                "flags": 256,
                "start": 117,
                "end": 135
            },
            "flags": 128,
            "start": 117,
            "end": 136
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
                                "kind": 134299649,
                                "text": "async",
                                "rawText": "async",
                                "flags": 768,
                                "start": 139,
                                "end": 144
                            },
                            {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "delete",
                                    "rawText": "delete",
                                    "flags": 768,
                                    "start": 144,
                                    "end": 151
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 256,
                                    "start": 152,
                                    "end": 153
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
                                        "start": 155,
                                        "end": 155
                                    },
                                    "flags": 256,
                                    "start": 153,
                                    "end": 156
                                },
                                "flags": 256,
                                "start": 151,
                                "end": 156
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 139,
                        "end": 156
                    },
                    "flags": 256,
                    "start": 138,
                    "end": 157
                },
                "flags": 256,
                "start": 136,
                "end": 158
            },
            "flags": 128,
            "start": 136,
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
                                "kind": 209,
                                "name": {
                                    "kind": 194,
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "foo",
                                        "rawText": "foo",
                                        "flags": 768,
                                        "start": 169,
                                        "end": 172
                                    },
                                    "flags": 256,
                                    "start": 167,
                                    "end": 173
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 2304,
                                    "start": 174,
                                    "end": 175
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
                                        "start": 176,
                                        "end": 176
                                    },
                                    "flags": 256,
                                    "start": 175,
                                    "end": 177
                                },
                                "flags": 2304,
                                "start": 173,
                                "end": 177
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 162,
                        "end": 177
                    },
                    "flags": 256,
                    "start": 161,
                    "end": 178
                },
                "flags": 256,
                "start": 159,
                "end": 179
            },
            "flags": 128,
            "start": 159,
            "end": 180
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
                                    "kind": 201392130,
                                    "text": 100,
                                    "rawText": "100",
                                    "flags": 768,
                                    "start": 188,
                                    "end": 192
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 2304,
                                    "start": 193,
                                    "end": 194
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
                                        "start": 195,
                                        "end": 195
                                    },
                                    "flags": 256,
                                    "start": 194,
                                    "end": 196
                                },
                                "flags": 2304,
                                "start": 192,
                                "end": 196
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 183,
                        "end": 196
                    },
                    "flags": 256,
                    "start": 182,
                    "end": 197
                },
                "flags": 256,
                "start": 180,
                "end": 198
            },
            "flags": 128,
            "start": 180,
            "end": 199
        }
    ],
    "isModule": false,
    "text": "({async});\n({async: await});\n({async: (await) ? yield : foo});\n({async: true});\n({async() { }});\n({async foo() { }});\n({x, y, z () {}});\n({async delete() {}});\n({async [foo](){}});\n({async 100(){}});",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 199
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2716}@ ',' expected - start: 144, end: 151

```

