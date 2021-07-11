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

### CST

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
                                "flags": 96,
                                "start": 2,
                                "end": 7
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 2,
                        "end": 7
                    },
                    "flags": 48,
                    "start": 1,
                    "end": 8
                },
                "flags": 32,
                "start": 0,
                "end": 9
            },
            "flags": 16,
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
                                "asteriskToken": null,
                                "left": {
                                    "kind": 134299649,
                                    "text": "async",
                                    "rawText": "async",
                                    "flags": 96,
                                    "start": 13,
                                    "end": 18
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "await",
                                    "rawText": "await",
                                    "flags": 96,
                                    "start": 19,
                                    "end": 25
                                },
                                "flags": 32,
                                "start": 13,
                                "end": 25
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 13,
                        "end": 25
                    },
                    "flags": 48,
                    "start": 12,
                    "end": 26
                },
                "flags": 32,
                "start": 10,
                "end": 27
            },
            "flags": 16,
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
                                "asteriskToken": null,
                                "left": {
                                    "kind": 134299649,
                                    "text": "async",
                                    "rawText": "async",
                                    "flags": 96,
                                    "start": 31,
                                    "end": 36
                                },
                                "right": {
                                    "kind": 197,
                                    "shortCircuit": {
                                        "kind": 121,
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "await",
                                            "rawText": "await",
                                            "flags": 96,
                                            "start": 39,
                                            "end": 44
                                        },
                                        "flags": 32,
                                        "start": 37,
                                        "end": 45
                                    },
                                    "questionToken": {
                                        "kind": 134217750,
                                        "flags": 64,
                                        "start": 45,
                                        "end": 47
                                    },
                                    "consequent": {
                                        "kind": 134299649,
                                        "text": "yield",
                                        "rawText": "yield",
                                        "flags": 96,
                                        "start": 47,
                                        "end": 53
                                    },
                                    "colonToken": {
                                        "kind": 21,
                                        "flags": 64,
                                        "start": 53,
                                        "end": 55
                                    },
                                    "alternate": {
                                        "kind": 134299649,
                                        "text": "foo",
                                        "rawText": "foo",
                                        "flags": 96,
                                        "start": 55,
                                        "end": 59
                                    },
                                    "flags": 32,
                                    "start": 31,
                                    "end": 59
                                },
                                "flags": 32,
                                "start": 31,
                                "end": 59
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 31,
                        "end": 59
                    },
                    "flags": 48,
                    "start": 30,
                    "end": 60
                },
                "flags": 32,
                "start": 28,
                "end": 61
            },
            "flags": 16,
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
                                "asteriskToken": null,
                                "left": {
                                    "kind": 134299649,
                                    "text": "async",
                                    "rawText": "async",
                                    "flags": 96,
                                    "start": 65,
                                    "end": 70
                                },
                                "right": {
                                    "kind": 24752947,
                                    "flags": 96,
                                    "start": 71,
                                    "end": 76
                                },
                                "flags": 32,
                                "start": 65,
                                "end": 76
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 65,
                        "end": 76
                    },
                    "flags": 48,
                    "start": 64,
                    "end": 77
                },
                "flags": 32,
                "start": 62,
                "end": 78
            },
            "flags": 16,
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
                                "kind": 351,
                                "asyncKeyword": null,
                                "asteriskToken": null,
                                "getKeyword": null,
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "async",
                                        "rawText": "async",
                                        "flags": 96,
                                        "start": 82,
                                        "end": 87
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 88,
                                        "end": 89
                                    },
                                    "returnType": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "start": 91,
                                            "end": 91
                                        },
                                        "flags": 32,
                                        "start": 89,
                                        "end": 93
                                    },
                                    "flags": 32,
                                    "start": 87,
                                    "end": 93
                                },
                                "flags": 32,
                                "start": 82,
                                "end": 93
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 82,
                        "end": 93
                    },
                    "flags": 48,
                    "start": 81,
                    "end": 94
                },
                "flags": 32,
                "start": 79,
                "end": 95
            },
            "flags": 16,
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
                                "kind": 351,
                                "asyncKeyword": {
                                    "kind": 82031,
                                    "flags": 352,
                                    "start": 99,
                                    "end": 104
                                },
                                "asteriskToken": null,
                                "getKeyword": null,
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "foo",
                                        "rawText": "foo",
                                        "flags": 96,
                                        "start": 104,
                                        "end": 108
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [],
                                        "trailingComma": false,
                                        "flags": 288,
                                        "start": 109,
                                        "end": 110
                                    },
                                    "returnType": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "start": 112,
                                            "end": 112
                                        },
                                        "flags": 32,
                                        "start": 110,
                                        "end": 114
                                    },
                                    "flags": 288,
                                    "start": 108,
                                    "end": 114
                                },
                                "flags": 32,
                                "start": 99,
                                "end": 114
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 99,
                        "end": 114
                    },
                    "flags": 48,
                    "start": 98,
                    "end": 115
                },
                "flags": 32,
                "start": 96,
                "end": 116
            },
            "flags": 16,
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
                                "flags": 96,
                                "start": 120,
                                "end": 121
                            },
                            {
                                "kind": 134299649,
                                "text": "y",
                                "rawText": "y",
                                "flags": 96,
                                "start": 122,
                                "end": 124
                            },
                            {
                                "kind": 351,
                                "asyncKeyword": null,
                                "asteriskToken": null,
                                "getKeyword": null,
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "z",
                                        "rawText": "z",
                                        "flags": 96,
                                        "start": 125,
                                        "end": 127
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 129,
                                        "end": 130
                                    },
                                    "returnType": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "start": 132,
                                            "end": 132
                                        },
                                        "flags": 32,
                                        "start": 130,
                                        "end": 133
                                    },
                                    "flags": 32,
                                    "start": 127,
                                    "end": 133
                                },
                                "flags": 32,
                                "start": 125,
                                "end": 133
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 120,
                        "end": 133
                    },
                    "flags": 48,
                    "start": 119,
                    "end": 134
                },
                "flags": 32,
                "start": 117,
                "end": 135
            },
            "flags": 16,
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
                                "kind": 351,
                                "asyncKeyword": {
                                    "kind": 82031,
                                    "flags": 352,
                                    "start": 139,
                                    "end": 144
                                },
                                "asteriskToken": null,
                                "getKeyword": null,
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "delete",
                                        "rawText": "delete",
                                        "flags": 96,
                                        "start": 144,
                                        "end": 151
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [],
                                        "trailingComma": false,
                                        "flags": 288,
                                        "start": 152,
                                        "end": 153
                                    },
                                    "returnType": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "start": 155,
                                            "end": 155
                                        },
                                        "flags": 32,
                                        "start": 153,
                                        "end": 156
                                    },
                                    "flags": 288,
                                    "start": 151,
                                    "end": 156
                                },
                                "flags": 32,
                                "start": 139,
                                "end": 156
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 139,
                        "end": 156
                    },
                    "flags": 48,
                    "start": 138,
                    "end": 157
                },
                "flags": 32,
                "start": 136,
                "end": 158
            },
            "flags": 16,
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
                                "kind": 351,
                                "asyncKeyword": {
                                    "kind": 82031,
                                    "flags": 352,
                                    "start": 162,
                                    "end": 167
                                },
                                "asteriskToken": null,
                                "getKeyword": null,
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 194,
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "foo",
                                            "rawText": "foo",
                                            "flags": 96,
                                            "start": 169,
                                            "end": 172
                                        },
                                        "flags": 32,
                                        "start": 167,
                                        "end": 173
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [],
                                        "trailingComma": false,
                                        "flags": 288,
                                        "start": 174,
                                        "end": 175
                                    },
                                    "returnType": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "start": 176,
                                            "end": 176
                                        },
                                        "flags": 32,
                                        "start": 175,
                                        "end": 177
                                    },
                                    "flags": 288,
                                    "start": 173,
                                    "end": 177
                                },
                                "flags": 32,
                                "start": 162,
                                "end": 177
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 162,
                        "end": 177
                    },
                    "flags": 48,
                    "start": 161,
                    "end": 178
                },
                "flags": 32,
                "start": 159,
                "end": 179
            },
            "flags": 16,
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
                                "kind": 351,
                                "asyncKeyword": {
                                    "kind": 82031,
                                    "flags": 352,
                                    "start": 183,
                                    "end": 188
                                },
                                "asteriskToken": null,
                                "getKeyword": null,
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 201392130,
                                        "text": 100,
                                        "rawText": "100",
                                        "flags": 96,
                                        "start": 188,
                                        "end": 192
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [],
                                        "trailingComma": false,
                                        "flags": 288,
                                        "start": 193,
                                        "end": 194
                                    },
                                    "returnType": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "start": 195,
                                            "end": 195
                                        },
                                        "flags": 32,
                                        "start": 194,
                                        "end": 196
                                    },
                                    "flags": 288,
                                    "start": 192,
                                    "end": 196
                                },
                                "flags": 32,
                                "start": 183,
                                "end": 196
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 183,
                        "end": 196
                    },
                    "flags": 48,
                    "start": 182,
                    "end": 197
                },
                "flags": 32,
                "start": 180,
                "end": 198
            },
            "flags": 16,
            "start": 180,
            "end": 199
        }
    ],
    "isModule": false,
    "source": "({async});\n({async: await});\n({async: (await) ? yield : foo});\n({async: true});\n({async() { }});\n({async foo() { }});\n({x, y, z () {}});\n({async delete() {}});\n({async [foo](){}});\n({async 100(){}});",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 199
}
```

### Printed

```javascript

({ async });
({ async: await });
({ async: (await) ? yield : foo });
({ async: true });
({ async() {} });
({ async foo() {} });
({ x, y, z() {} });
({ async delete() {} });
({ async [foo]() {} });
({ async 100() {} });

```

### Diagnostics

```javascript
✔ No errors
```

