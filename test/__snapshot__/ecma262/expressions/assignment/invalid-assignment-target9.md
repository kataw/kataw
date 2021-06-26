# Kataw parser test case

## Input

`````js
[...x = y] = 0;
x() = 0;
x?.y = 0;
x?.[y] = 0;
({x: 0} = 0);
({x() {}} = 0);
({x: 0 = y} = 0);
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
                "kind": 125,
                "left": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
                                "kind": 223,
                                "ellipsisToken": {
                                    "kind": 524302,
                                    "flags": 64,
                                    "start": 1,
                                    "end": 4
                                },
                                "argument": {
                                    "kind": 125,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 4,
                                        "end": 5
                                    },
                                    "operatorToken": {
                                        "kind": 4125,
                                        "flags": 96,
                                        "start": 5,
                                        "end": 7
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 96,
                                        "start": 7,
                                        "end": 9
                                    },
                                    "flags": 32,
                                    "start": 4,
                                    "end": 9
                                },
                                "flags": 1073741856,
                                "start": 1,
                                "end": 9
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 1,
                        "end": 9
                    },
                    "flags": 32,
                    "start": 0,
                    "end": 10
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 10,
                    "end": 12
                },
                "right": {
                    "kind": 201392130,
                    "text": 0,
                    "rawText": "0",
                    "flags": 96,
                    "start": 12,
                    "end": 14
                },
                "flags": 32,
                "start": 0,
                "end": 14
            },
            "flags": 16,
            "start": 0,
            "end": 15
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 131,
                    "expression": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 15,
                        "end": 17
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 18,
                        "end": 18
                    },
                    "flags": 268435488,
                    "start": 15,
                    "end": 19
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 19,
                    "end": 21
                },
                "right": {
                    "kind": 201392130,
                    "text": 0,
                    "rawText": "0",
                    "flags": 96,
                    "start": 21,
                    "end": 23
                },
                "flags": 32,
                "start": 15,
                "end": 23
            },
            "flags": 16,
            "start": 15,
            "end": 24
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 205,
                    "chainToken": {
                        "kind": 393240,
                        "flags": 64,
                        "start": 26,
                        "end": 28
                    },
                    "member": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 24,
                        "end": 26
                    },
                    "chain": {
                        "kind": 302,
                        "chain": {
                            "kind": 202,
                            "chain": null,
                            "expression": {
                                "kind": 134299649,
                                "text": "y",
                                "rawText": "y",
                                "flags": 96,
                                "start": 28,
                                "end": 29
                            },
                            "flags": 536870944,
                            "start": 28,
                            "end": 29
                        },
                        "flags": 32,
                        "start": 28,
                        "end": 29
                    },
                    "flags": 32,
                    "start": 24,
                    "end": 29
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 29,
                    "end": 31
                },
                "right": {
                    "kind": 201392130,
                    "text": 0,
                    "rawText": "0",
                    "flags": 96,
                    "start": 31,
                    "end": 33
                },
                "flags": 32,
                "start": 24,
                "end": 33
            },
            "flags": 16,
            "start": 24,
            "end": 34
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 205,
                    "chainToken": {
                        "kind": 393240,
                        "flags": 64,
                        "start": 36,
                        "end": 38
                    },
                    "member": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 34,
                        "end": 36
                    },
                    "chain": {
                        "kind": 302,
                        "chain": {
                            "kind": 203,
                            "chain": null,
                            "expression": {
                                "kind": 134299649,
                                "text": "y",
                                "rawText": "y",
                                "flags": 96,
                                "start": 39,
                                "end": 40
                            },
                            "flags": 536870944,
                            "start": 38,
                            "end": 40
                        },
                        "flags": 32,
                        "start": 38,
                        "end": 41
                    },
                    "flags": 32,
                    "start": 34,
                    "end": 41
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 41,
                    "end": 43
                },
                "right": {
                    "kind": 201392130,
                    "text": 0,
                    "rawText": "0",
                    "flags": 96,
                    "start": 43,
                    "end": 45
                },
                "flags": 32,
                "start": 34,
                "end": 45
            },
            "flags": 16,
            "start": 34,
            "end": 46
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 125,
                    "left": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 219,
                                    "asteriskToken": null,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 49,
                                        "end": 50
                                    },
                                    "right": {
                                        "kind": 201392130,
                                        "text": 0,
                                        "rawText": "0",
                                        "flags": 96,
                                        "start": 51,
                                        "end": 53
                                    },
                                    "flags": 32,
                                    "start": 49,
                                    "end": 53
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 49,
                            "end": 53
                        },
                        "flags": 48,
                        "start": 48,
                        "end": 54
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "start": 54,
                        "end": 56
                    },
                    "right": {
                        "kind": 201392130,
                        "text": 0,
                        "rawText": "0",
                        "flags": 96,
                        "start": 56,
                        "end": 58
                    },
                    "flags": 32,
                    "start": 48,
                    "end": 58
                },
                "flags": 32,
                "start": 46,
                "end": 59
            },
            "flags": 16,
            "start": 46,
            "end": 60
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 125,
                    "left": {
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
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 63,
                                            "end": 64
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 65,
                                            "end": 66
                                        },
                                        "returnType": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "start": 68,
                                                "end": 68
                                            },
                                            "flags": 32,
                                            "start": 66,
                                            "end": 69
                                        },
                                        "flags": 32,
                                        "start": 64,
                                        "end": 69
                                    },
                                    "flags": 32,
                                    "start": 63,
                                    "end": 69
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 63,
                            "end": 69
                        },
                        "flags": 48,
                        "start": 62,
                        "end": 70
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "start": 70,
                        "end": 72
                    },
                    "right": {
                        "kind": 201392130,
                        "text": 0,
                        "rawText": "0",
                        "flags": 96,
                        "start": 72,
                        "end": 74
                    },
                    "flags": 32,
                    "start": 62,
                    "end": 74
                },
                "flags": 32,
                "start": 60,
                "end": 75
            },
            "flags": 16,
            "start": 60,
            "end": 76
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 125,
                    "left": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 219,
                                    "asteriskToken": null,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 79,
                                        "end": 80
                                    },
                                    "right": {
                                        "kind": 125,
                                        "left": {
                                            "kind": 201392130,
                                            "text": 0,
                                            "rawText": "0",
                                            "flags": 96,
                                            "start": 81,
                                            "end": 83
                                        },
                                        "operatorToken": {
                                            "kind": 4125,
                                            "flags": 96,
                                            "start": 83,
                                            "end": 85
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "y",
                                            "rawText": "y",
                                            "flags": 96,
                                            "start": 85,
                                            "end": 87
                                        },
                                        "flags": 32,
                                        "start": 79,
                                        "end": 87
                                    },
                                    "flags": 32,
                                    "start": 79,
                                    "end": 87
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 79,
                            "end": 87
                        },
                        "flags": 48,
                        "start": 78,
                        "end": 88
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "start": 88,
                        "end": 90
                    },
                    "right": {
                        "kind": 201392130,
                        "text": 0,
                        "rawText": "0",
                        "flags": 96,
                        "start": 90,
                        "end": 92
                    },
                    "flags": 32,
                    "start": 78,
                    "end": 92
                },
                "flags": 32,
                "start": 76,
                "end": 93
            },
            "flags": 16,
            "start": 76,
            "end": 94
        }
    ],
    "isModule": false,
    "source": "[...x = y] = 0;\nx() = 0;\nx?.y = 0;\nx?.[y] = 0;\n({x: 0} = 0);\n({x() {}} = 0);\n({x: 0 = y} = 0);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 94
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The left-hand side must be a variable or a property access. - start: 10, end: 12
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 19, end: 21
✖ The left-hand side of an assignment expression may not be an optional property access - start: 28, end: 31
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 29, end: 31
✖ The left-hand side of an assignment expression may not be an optional property access - start: 38, end: 43
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 41, end: 43
✖ The left-hand side must be a variable or a property access. - start: 48, end: 56
✖ The left-hand side must be a variable or a property access. - start: 62, end: 72
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 83, end: 85

```

