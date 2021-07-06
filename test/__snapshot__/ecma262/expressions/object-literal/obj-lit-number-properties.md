# Kataw parser test case

## Input

`````js
x({.9:a, 0x84:b, 0b1:c, 0o27:d, 1e234:e});

x({.9(){}, 0x84(){}, 0b1(){}, 0o27(){}, 1e234(){}});
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
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 1
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 201392130,
                                            "text": 0.9,
                                            "rawText": ".9",
                                            "flags": 32864,
                                            "transformFlags": 0,
                                            "start": 3,
                                            "end": 5
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 6,
                                            "end": 7
                                        },
                                        "flags": 32800,
                                        "transformFlags": 128,
                                        "start": 3,
                                        "end": 7
                                    },
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 201392130,
                                            "text": 132,
                                            "rawText": "0x84",
                                            "flags": 1048672,
                                            "transformFlags": 0,
                                            "start": 8,
                                            "end": 13
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 14,
                                            "end": 15
                                        },
                                        "flags": 1048608,
                                        "transformFlags": 128,
                                        "start": 8,
                                        "end": 15
                                    },
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 201392130,
                                            "text": 1,
                                            "rawText": "0b1",
                                            "flags": 524384,
                                            "transformFlags": 0,
                                            "start": 16,
                                            "end": 20
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "c",
                                            "rawText": "c",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 21,
                                            "end": 22
                                        },
                                        "flags": 524320,
                                        "transformFlags": 128,
                                        "start": 16,
                                        "end": 22
                                    },
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 201392130,
                                            "text": 23,
                                            "rawText": "0o27",
                                            "flags": 262240,
                                            "transformFlags": 0,
                                            "start": 23,
                                            "end": 28
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "d",
                                            "rawText": "d",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 29,
                                            "end": 30
                                        },
                                        "flags": 262176,
                                        "transformFlags": 128,
                                        "start": 23,
                                        "end": 30
                                    },
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 201392130,
                                            "text": 1e+234,
                                            "rawText": "1e234",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 31,
                                            "end": 37
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "e",
                                            "rawText": "e",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 38,
                                            "end": 39
                                        },
                                        "flags": 32,
                                        "transformFlags": 128,
                                        "start": 31,
                                        "end": 39
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32784,
                                "transformFlags": 0,
                                "start": 3,
                                "end": 39
                            },
                            "flags": 32816,
                            "transformFlags": 8,
                            "start": 2,
                            "end": 40
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 2,
                    "end": 40
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 0,
                "end": 41
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 42
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 42,
                    "end": 45
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
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
                                                "kind": 201392130,
                                                "text": 0.9,
                                                "rawText": ".9",
                                                "flags": 32864,
                                                "transformFlags": 0,
                                                "start": 47,
                                                "end": 49
                                            },
                                            "typeParameters": null,
                                            "formalParameterList": {
                                                "kind": 214,
                                                "formalParameters": [],
                                                "trailingComma": false,
                                                "flags": 32800,
                                                "transformFlags": 0,
                                                "start": 50,
                                                "end": 51
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
                                                    "start": 52,
                                                    "end": 52
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 51,
                                                "end": 53
                                            },
                                            "flags": 32800,
                                            "transformFlags": 0,
                                            "start": 49,
                                            "end": 53
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 47,
                                        "end": 53
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
                                                "kind": 201392130,
                                                "text": 132,
                                                "rawText": "0x84",
                                                "flags": 1048672,
                                                "transformFlags": 0,
                                                "start": 54,
                                                "end": 59
                                            },
                                            "typeParameters": null,
                                            "formalParameterList": {
                                                "kind": 214,
                                                "formalParameters": [],
                                                "trailingComma": false,
                                                "flags": 1048608,
                                                "transformFlags": 0,
                                                "start": 60,
                                                "end": 61
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
                                                "start": 61,
                                                "end": 63
                                            },
                                            "flags": 1048608,
                                            "transformFlags": 0,
                                            "start": 59,
                                            "end": 63
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 54,
                                        "end": 63
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
                                                "kind": 201392130,
                                                "text": 1,
                                                "rawText": "0b1",
                                                "flags": 524384,
                                                "transformFlags": 0,
                                                "start": 64,
                                                "end": 68
                                            },
                                            "typeParameters": null,
                                            "formalParameterList": {
                                                "kind": 214,
                                                "formalParameters": [],
                                                "trailingComma": false,
                                                "flags": 524320,
                                                "transformFlags": 0,
                                                "start": 69,
                                                "end": 70
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
                                                    "start": 71,
                                                    "end": 71
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 70,
                                                "end": 72
                                            },
                                            "flags": 524320,
                                            "transformFlags": 0,
                                            "start": 68,
                                            "end": 72
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 64,
                                        "end": 72
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
                                                "kind": 201392130,
                                                "text": 23,
                                                "rawText": "0o27",
                                                "flags": 262240,
                                                "transformFlags": 0,
                                                "start": 73,
                                                "end": 78
                                            },
                                            "typeParameters": null,
                                            "formalParameterList": {
                                                "kind": 214,
                                                "formalParameters": [],
                                                "trailingComma": false,
                                                "flags": 262176,
                                                "transformFlags": 0,
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
                                                    "transformFlags": 0,
                                                    "start": 81,
                                                    "end": 81
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 80,
                                                "end": 82
                                            },
                                            "flags": 262176,
                                            "transformFlags": 0,
                                            "start": 78,
                                            "end": 82
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 73,
                                        "end": 82
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
                                                "kind": 201392130,
                                                "text": 1e+234,
                                                "rawText": "1e234",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 83,
                                                "end": 89
                                            },
                                            "typeParameters": null,
                                            "formalParameterList": {
                                                "kind": 214,
                                                "formalParameters": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 90,
                                                "end": 91
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
                                                    "start": 92,
                                                    "end": 92
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 91,
                                                "end": 93
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 89,
                                            "end": 93
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 83,
                                        "end": 93
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32784,
                                "transformFlags": 0,
                                "start": 47,
                                "end": 93
                            },
                            "flags": 32816,
                            "transformFlags": 8,
                            "start": 46,
                            "end": 94
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 46,
                    "end": 94
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 42,
                "end": 95
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 42,
            "end": 96
        }
    ],
    "isModule": false,
    "source": "x({.9:a, 0x84:b, 0b1:c, 0o27:d, 1e234:e});\n\nx({.9(){}, 0x84(){}, 0b1(){}, 0o27(){}, 1e234(){}});",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 96
}
```

### Printed

```javascript

x({ 0.9: a, 0x84: b, 0b1: c, 0o27: d, 1e234: e });
x({ 0.9() {}, 0x84() {}, 0b1() {}, 0o27() {}, 1e234() {} });

```

### Diagnostics

```javascript
✔ No errors
```

