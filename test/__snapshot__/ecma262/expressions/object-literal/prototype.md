# Kataw parser test case

## Input

`````js
({ prototype: 1 });
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
                                    "kind": 134299649,
                                    "text": "prototype",
                                    "rawText": "prototype",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 2,
                                    "end": 12
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 13,
                                    "end": 15
                                },
                                "flags": 32,
                                "transformFlags": 128,
                                "start": 2,
                                "end": 15
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 2,
                        "end": 15
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 1,
                    "end": 17
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 34,
                "end": 18
            },
            "flags": 16,
            "transformFlags": 4096,
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
                                "kind": 351,
                                "asyncKeyword": null,
                                "asteriskToken": null,
                                "getKeyword": {
                                    "kind": 16498,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 22,
                                    "end": 26
                                },
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "prototype",
                                        "rawText": "prototype",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 26,
                                        "end": 36
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [],
                                        "trailingComma": false,
                                        "flags": 1056,
                                        "transformFlags": 0,
                                        "start": 37,
                                        "end": 38
                                    },
                                    "returnType": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 40,
                                            "end": 40
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 38,
                                        "end": 41
                                    },
                                    "flags": 1056,
                                    "transformFlags": 0,
                                    "start": 36,
                                    "end": 41
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 22,
                                "end": 41
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 22,
                        "end": 41
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 21,
                    "end": 43
                },
                "flags": 19,
                "transformFlags": 0,
                "start": 35,
                "end": 44
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 19,
            "end": 45
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
                                    "transformFlags": 0,
                                    "start": 48,
                                    "end": 52
                                },
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "prototype",
                                        "rawText": "prototype",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 52,
                                        "end": 62
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
                                                "transformFlags": 0,
                                                "start": 63,
                                                "end": 64
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 608,
                                        "transformFlags": 0,
                                        "start": 63,
                                        "end": 65
                                    },
                                    "returnType": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 67,
                                            "end": 67
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 65,
                                        "end": 68
                                    },
                                    "flags": 544,
                                    "transformFlags": 0,
                                    "start": 62,
                                    "end": 68
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 48,
                                "end": 68
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 48,
                        "end": 68
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 47,
                    "end": 70
                },
                "flags": 45,
                "transformFlags": 0,
                "start": 35,
                "end": 71
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 45,
            "end": 72
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
                                    "transformFlags": 32,
                                    "start": 75,
                                    "end": 77
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
                                        "transformFlags": 0,
                                        "start": 77,
                                        "end": 86
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [],
                                        "trailingComma": false,
                                        "flags": 160,
                                        "transformFlags": 0,
                                        "start": 87,
                                        "end": 88
                                    },
                                    "returnType": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 90,
                                            "end": 90
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 88,
                                        "end": 91
                                    },
                                    "flags": 160,
                                    "transformFlags": 0,
                                    "start": 86,
                                    "end": 91
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 75,
                                "end": 91
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 75,
                        "end": 91
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 74,
                    "end": 93
                },
                "flags": 72,
                "transformFlags": 0,
                "start": 35,
                "end": 94
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 72,
            "end": 95
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
                                    "transformFlags": 0,
                                    "start": 98,
                                    "end": 104
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
                                        "transformFlags": 0,
                                        "start": 104,
                                        "end": 114
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [],
                                        "trailingComma": false,
                                        "flags": 288,
                                        "transformFlags": 0,
                                        "start": 115,
                                        "end": 116
                                    },
                                    "returnType": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 118,
                                            "end": 118
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 116,
                                        "end": 119
                                    },
                                    "flags": 288,
                                    "transformFlags": 0,
                                    "start": 114,
                                    "end": 119
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 98,
                                "end": 119
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 98,
                        "end": 119
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 97,
                    "end": 121
                },
                "flags": 95,
                "transformFlags": 0,
                "start": 35,
                "end": 122
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 95,
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
                                "kind": 351,
                                "asyncKeyword": {
                                    "kind": 82031,
                                    "flags": 352,
                                    "transformFlags": 0,
                                    "start": 126,
                                    "end": 132
                                },
                                "asteriskToken": {
                                    "kind": 67143222,
                                    "flags": 64,
                                    "transformFlags": 32,
                                    "start": 132,
                                    "end": 133
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
                                        "transformFlags": 0,
                                        "start": 133,
                                        "end": 143
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [],
                                        "trailingComma": false,
                                        "flags": 416,
                                        "transformFlags": 0,
                                        "start": 144,
                                        "end": 145
                                    },
                                    "returnType": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 147,
                                            "end": 147
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 145,
                                        "end": 148
                                    },
                                    "flags": 416,
                                    "transformFlags": 0,
                                    "start": 143,
                                    "end": 148
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 126,
                                "end": 148
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 126,
                        "end": 148
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 125,
                    "end": 150
                },
                "flags": 123,
                "transformFlags": 0,
                "start": 35,
                "end": 151
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 123,
            "end": 152
        }
    ],
    "isModule": false,
    "source": "({ prototype: 1 });\n({ get prototype() {} });\n({ set prototype(x) {} });\n({ *prototype() {} });\n({ async prototype() {} });\n({ async* prototype() {} });",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 152
}
```

### Printed

```javascript
({ prototype: 1 });
({ get prototype() {} });

({ set prototype(x) {} });

({ *prototype() {} });

({ async prototype() {} });

({ async *prototype() {} });

```

### Diagnostics

```javascript
✔ No errors
```

