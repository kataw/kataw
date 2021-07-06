# Kataw parser test case

## Input

`````js
({ set x(foo) {} });
({ get x() { return 1 } });
({ set x(a) {} });
({ get x() {} });
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
                                "kind": 351,
                                "asyncKeyword": null,
                                "asteriskToken": null,
                                "getKeyword": null,
                                "setKeyword": {
                                    "kind": 16499,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 2,
                                    "end": 6
                                },
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 6,
                                        "end": 8
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [
                                            {
                                                "kind": 134299649,
                                                "text": "foo",
                                                "rawText": "foo",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 9,
                                                "end": 12
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 608,
                                        "transformFlags": 0,
                                        "start": 9,
                                        "end": 13
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
                                            "start": 15,
                                            "end": 15
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 13,
                                        "end": 16
                                    },
                                    "flags": 544,
                                    "transformFlags": 0,
                                    "start": 8,
                                    "end": 16
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 2,
                                "end": 16
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 2,
                        "end": 16
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 1,
                    "end": 18
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 34,
                "end": 19
            },
            "flags": 16,
            "transformFlags": 0,
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
                                "kind": 351,
                                "asyncKeyword": null,
                                "asteriskToken": null,
                                "getKeyword": {
                                    "kind": 16498,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 23,
                                    "end": 27
                                },
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 27,
                                        "end": 29
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [],
                                        "trailingComma": false,
                                        "flags": 1056,
                                        "transformFlags": 0,
                                        "start": 30,
                                        "end": 31
                                    },
                                    "returnType": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [
                                                {
                                                    "kind": 161,
                                                    "returnKeyword": {
                                                        "kind": 37757022,
                                                        "flags": 80,
                                                        "transformFlags": 0,
                                                        "start": 33,
                                                        "end": 40
                                                    },
                                                    "expression": {
                                                        "kind": 201392130,
                                                        "text": 1,
                                                        "rawText": "1",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 40,
                                                        "end": 42
                                                    },
                                                    "flags": 80,
                                                    "transformFlags": 256,
                                                    "start": 33,
                                                    "end": 42
                                                }
                                            ],
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 33,
                                            "end": 42
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 31,
                                        "end": 44
                                    },
                                    "flags": 1056,
                                    "transformFlags": 0,
                                    "start": 29,
                                    "end": 44
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 23,
                                "end": 44
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 23,
                        "end": 44
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 22,
                    "end": 46
                },
                "flags": 20,
                "transformFlags": 0,
                "start": 35,
                "end": 47
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 20,
            "end": 48
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
                                    "start": 51,
                                    "end": 55
                                },
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 55,
                                        "end": 57
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [
                                            {
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 58,
                                                "end": 59
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 608,
                                        "transformFlags": 0,
                                        "start": 58,
                                        "end": 60
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
                                            "start": 62,
                                            "end": 62
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 60,
                                        "end": 63
                                    },
                                    "flags": 544,
                                    "transformFlags": 0,
                                    "start": 57,
                                    "end": 63
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 51,
                                "end": 63
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 51,
                        "end": 63
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 50,
                    "end": 65
                },
                "flags": 48,
                "transformFlags": 0,
                "start": 35,
                "end": 66
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 48,
            "end": 67
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
                                    "start": 70,
                                    "end": 74
                                },
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 74,
                                        "end": 76
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [],
                                        "trailingComma": false,
                                        "flags": 1056,
                                        "transformFlags": 0,
                                        "start": 77,
                                        "end": 78
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
                                            "start": 80,
                                            "end": 80
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 78,
                                        "end": 81
                                    },
                                    "flags": 1056,
                                    "transformFlags": 0,
                                    "start": 76,
                                    "end": 81
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 70,
                                "end": 81
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 70,
                        "end": 81
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 69,
                    "end": 83
                },
                "flags": 67,
                "transformFlags": 0,
                "start": 35,
                "end": 84
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 67,
            "end": 85
        }
    ],
    "isModule": false,
    "source": "({ set x(foo) {} });\n({ get x() { return 1 } });\n({ set x(a) {} });\n({ get x() {} });",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 85
}
```

### Printed

```javascript
({ set x(foo) {} });
({ get x() {
      return 1;
    } });

({ set x(a) {} });

({ get x() {} });

```

### Diagnostics

```javascript
✔ No errors
```

