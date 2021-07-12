# Kataw parser test case

## Input

`````js
({ "__proto___": "__proto___", "__proto___": "__proto___" });
({ get prototype() {} });
({ set prototype(x) {} });
({ *prototype() {} });
({ async prototype() {} });
({ async* prototype() {} });
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
                                "kind": 219,
                                "asteriskToken": null,
                                "left": {
                                    "kind": 201392131,
                                    "text": "__proto___",
                                    "rawText": "\"__proto___\"",
                                    "flags": 96,
                                    "start": 2,
                                    "end": 15
                                },
                                "right": {
                                    "kind": 201392131,
                                    "text": "__proto___",
                                    "rawText": "\"__proto___\"",
                                    "flags": 96,
                                    "start": 16,
                                    "end": 29
                                },
                                "flags": 32,
                                "start": 2,
                                "end": 29
                            },
                            {
                                "kind": 219,
                                "asteriskToken": null,
                                "left": {
                                    "kind": 201392131,
                                    "text": "__proto___",
                                    "rawText": "\"__proto___\"",
                                    "flags": 96,
                                    "start": 30,
                                    "end": 43
                                },
                                "right": {
                                    "kind": 201392131,
                                    "text": "__proto___",
                                    "rawText": "\"__proto___\"",
                                    "flags": 96,
                                    "start": 44,
                                    "end": 57
                                },
                                "flags": 32,
                                "start": 30,
                                "end": 57
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 2,
                        "end": 57
                    },
                    "flags": 48,
                    "start": 1,
                    "end": 59
                },
                "flags": 32,
                "start": 0,
                "end": 60
            },
            "flags": 16,
            "start": 0,
            "end": 61
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
                                "getKeyword": {
                                    "kind": 16498,
                                    "flags": 96,
                                    "start": 64,
                                    "end": 68
                                },
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "prototype",
                                        "rawText": "prototype",
                                        "flags": 96,
                                        "start": 68,
                                        "end": 78
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [],
                                        "trailingComma": false,
                                        "flags": 1056,
                                        "start": 79,
                                        "end": 80
                                    },
                                    "returnType": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "start": 82,
                                            "end": 82
                                        },
                                        "flags": 32,
                                        "start": 80,
                                        "end": 83
                                    },
                                    "flags": 1056,
                                    "start": 78,
                                    "end": 83
                                },
                                "flags": 32,
                                "start": 64,
                                "end": 83
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 64,
                        "end": 83
                    },
                    "flags": 48,
                    "start": 63,
                    "end": 85
                },
                "flags": 32,
                "start": 61,
                "end": 86
            },
            "flags": 16,
            "start": 61,
            "end": 87
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
                                "setKeyword": {
                                    "kind": 16499,
                                    "flags": 96,
                                    "start": 90,
                                    "end": 94
                                },
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "prototype",
                                        "rawText": "prototype",
                                        "flags": 96,
                                        "start": 94,
                                        "end": 104
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [
                                            {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 105,
                                                "end": 106
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 608,
                                        "start": 105,
                                        "end": 107
                                    },
                                    "returnType": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "start": 109,
                                            "end": 109
                                        },
                                        "flags": 32,
                                        "start": 107,
                                        "end": 110
                                    },
                                    "flags": 544,
                                    "start": 104,
                                    "end": 110
                                },
                                "flags": 32,
                                "start": 90,
                                "end": 110
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 90,
                        "end": 110
                    },
                    "flags": 48,
                    "start": 89,
                    "end": 112
                },
                "flags": 32,
                "start": 87,
                "end": 113
            },
            "flags": 16,
            "start": 87,
            "end": 114
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
                                "asteriskToken": {
                                    "kind": 67143222,
                                    "flags": 64,
                                    "start": 117,
                                    "end": 119
                                },
                                "getKeyword": null,
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "prototype",
                                        "rawText": "prototype",
                                        "flags": 96,
                                        "start": 119,
                                        "end": 128
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [],
                                        "trailingComma": false,
                                        "flags": 160,
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
                                    "flags": 160,
                                    "start": 128,
                                    "end": 133
                                },
                                "flags": 32,
                                "start": 117,
                                "end": 133
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 117,
                        "end": 133
                    },
                    "flags": 48,
                    "start": 116,
                    "end": 135
                },
                "flags": 32,
                "start": 114,
                "end": 136
            },
            "flags": 16,
            "start": 114,
            "end": 137
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
                                    "start": 140,
                                    "end": 146
                                },
                                "asteriskToken": null,
                                "getKeyword": null,
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "prototype",
                                        "rawText": "prototype",
                                        "flags": 96,
                                        "start": 146,
                                        "end": 156
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [],
                                        "trailingComma": false,
                                        "flags": 288,
                                        "start": 157,
                                        "end": 158
                                    },
                                    "returnType": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "start": 160,
                                            "end": 160
                                        },
                                        "flags": 32,
                                        "start": 158,
                                        "end": 161
                                    },
                                    "flags": 288,
                                    "start": 156,
                                    "end": 161
                                },
                                "flags": 32,
                                "start": 140,
                                "end": 161
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 140,
                        "end": 161
                    },
                    "flags": 48,
                    "start": 139,
                    "end": 163
                },
                "flags": 32,
                "start": 137,
                "end": 164
            },
            "flags": 16,
            "start": 137,
            "end": 165
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
                                    "start": 168,
                                    "end": 174
                                },
                                "asteriskToken": {
                                    "kind": 67143222,
                                    "flags": 64,
                                    "start": 174,
                                    "end": 175
                                },
                                "getKeyword": null,
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "prototype",
                                        "rawText": "prototype",
                                        "flags": 96,
                                        "start": 175,
                                        "end": 185
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [],
                                        "trailingComma": false,
                                        "flags": 416,
                                        "start": 186,
                                        "end": 187
                                    },
                                    "returnType": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "start": 189,
                                            "end": 189
                                        },
                                        "flags": 32,
                                        "start": 187,
                                        "end": 190
                                    },
                                    "flags": 416,
                                    "start": 185,
                                    "end": 190
                                },
                                "flags": 32,
                                "start": 168,
                                "end": 190
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 168,
                        "end": 190
                    },
                    "flags": 48,
                    "start": 167,
                    "end": 192
                },
                "flags": 32,
                "start": 165,
                "end": 193
            },
            "flags": 16,
            "start": 165,
            "end": 194
        }
    ],
    "isModule": false,
    "source": "({ \"__proto___\": \"__proto___\", \"__proto___\": \"__proto___\" });\n({ get prototype() {} });\n({ set prototype(x) {} });\n({ *prototype() {} });\n({ async prototype() {} });\n({ async* prototype() {} });",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 194
}
```

### Printed

```javascript

  ({ "\"__proto___\"": "\"__proto___\"", "\"__proto___\"": "\"__proto___\"" });
  ({ get prototype() {} });
  ({ set prototype(x) {} });
  ({ * prototype() {} });
  ({ async prototype() {} });
  ({ async* prototype() {} });

```

### Diagnostics

```javascript
✔ No errors
```

