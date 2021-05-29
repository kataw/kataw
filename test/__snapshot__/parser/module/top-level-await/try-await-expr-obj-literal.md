# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
try {
  await { function() {} };
} catch(e) {
  await { function() {} };
} finally {
  await { function() {} };
}
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 159,
            "tryKeyword": {
                "kind": 37757027,
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "block": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 208,
                                "awaitKeyword": {
                                    "kind": 82196,
                                    "flags": 65,
                                    "start": 5,
                                    "end": 13
                                },
                                "expression": {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [
                                            {
                                                "kind": 257,
                                                "asyncKeyword": null,
                                                "generatorToken": null,
                                                "getKeyword": null,
                                                "setKeyword": null,
                                                "method": {
                                                    "kind": 209,
                                                    "name": {
                                                        "kind": 134299649,
                                                        "text": "function",
                                                        "rawText": "function",
                                                        "flags": 96,
                                                        "start": 15,
                                                        "end": 24
                                                    },
                                                    "typeParameters": null,
                                                    "formalParameters": {
                                                        "kind": 214,
                                                        "formalParameterList": [],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "start": 25,
                                                        "end": 26
                                                    },
                                                    "returnType": null,
                                                    "contents": {
                                                        "kind": 216,
                                                        "functionStatementList": {
                                                            "kind": 217,
                                                            "directives": [],
                                                            "statements": [],
                                                            "flags": 32,
                                                            "start": 28,
                                                            "end": 28
                                                        },
                                                        "flags": 32,
                                                        "start": 26,
                                                        "end": 29
                                                    },
                                                    "flags": 32,
                                                    "start": 24,
                                                    "end": 29
                                                },
                                                "flags": 32,
                                                "start": 15,
                                                "end": 29
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 16,
                                        "start": 15,
                                        "end": 29
                                    },
                                    "flags": 48,
                                    "start": 13,
                                    "end": 31
                                },
                                "flags": 32,
                                "start": 5,
                                "end": 31
                            },
                            "flags": 16,
                            "start": 5,
                            "end": 32
                        }
                    ],
                    "flags": 17,
                    "start": 5,
                    "end": 32
                },
                "flags": 16,
                "start": 3,
                "end": 34
            },
            "catchClause": {
                "kind": 173,
                "catchKeyword": {
                    "kind": 4202575,
                    "flags": 80,
                    "start": 34,
                    "end": 40
                },
                "catchParameter": {
                    "kind": 134299649,
                    "text": "e",
                    "rawText": "e",
                    "flags": 96,
                    "start": 41,
                    "end": 42
                },
                "initializer": null,
                "block": {
                    "kind": 124,
                    "block": {
                        "kind": 249,
                        "statements": [
                            {
                                "kind": 120,
                                "expression": {
                                    "kind": 208,
                                    "awaitKeyword": {
                                        "kind": 82196,
                                        "flags": 65,
                                        "start": 45,
                                        "end": 53
                                    },
                                    "expression": {
                                        "kind": 220,
                                        "propertyList": {
                                            "kind": 218,
                                            "properties": [
                                                {
                                                    "kind": 257,
                                                    "asyncKeyword": null,
                                                    "generatorToken": null,
                                                    "getKeyword": null,
                                                    "setKeyword": null,
                                                    "method": {
                                                        "kind": 209,
                                                        "name": {
                                                            "kind": 134299649,
                                                            "text": "function",
                                                            "rawText": "function",
                                                            "flags": 96,
                                                            "start": 55,
                                                            "end": 64
                                                        },
                                                        "typeParameters": null,
                                                        "formalParameters": {
                                                            "kind": 214,
                                                            "formalParameterList": [],
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
                                                    "start": 55,
                                                    "end": 69
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 16,
                                            "start": 55,
                                            "end": 69
                                        },
                                        "flags": 48,
                                        "start": 53,
                                        "end": 71
                                    },
                                    "flags": 32,
                                    "start": 45,
                                    "end": 71
                                },
                                "flags": 16,
                                "start": 45,
                                "end": 72
                            }
                        ],
                        "flags": 17,
                        "start": 45,
                        "end": 72
                    },
                    "flags": 16,
                    "start": 43,
                    "end": 74
                },
                "flags": 16,
                "start": 34,
                "end": 74
            },
            "finallyKeyword": {
                "kind": 37757016,
                "flags": 64,
                "start": 74,
                "end": 82
            },
            "finallyBlock": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 208,
                                "awaitKeyword": {
                                    "kind": 82196,
                                    "flags": 65,
                                    "start": 84,
                                    "end": 92
                                },
                                "expression": {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [
                                            {
                                                "kind": 257,
                                                "asyncKeyword": null,
                                                "generatorToken": null,
                                                "getKeyword": null,
                                                "setKeyword": null,
                                                "method": {
                                                    "kind": 209,
                                                    "name": {
                                                        "kind": 134299649,
                                                        "text": "function",
                                                        "rawText": "function",
                                                        "flags": 96,
                                                        "start": 94,
                                                        "end": 103
                                                    },
                                                    "typeParameters": null,
                                                    "formalParameters": {
                                                        "kind": 214,
                                                        "formalParameterList": [],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "start": 104,
                                                        "end": 105
                                                    },
                                                    "returnType": null,
                                                    "contents": {
                                                        "kind": 216,
                                                        "functionStatementList": {
                                                            "kind": 217,
                                                            "directives": [],
                                                            "statements": [],
                                                            "flags": 32,
                                                            "start": 107,
                                                            "end": 107
                                                        },
                                                        "flags": 32,
                                                        "start": 105,
                                                        "end": 108
                                                    },
                                                    "flags": 32,
                                                    "start": 103,
                                                    "end": 108
                                                },
                                                "flags": 32,
                                                "start": 94,
                                                "end": 108
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 16,
                                        "start": 94,
                                        "end": 108
                                    },
                                    "flags": 48,
                                    "start": 92,
                                    "end": 110
                                },
                                "flags": 32,
                                "start": 84,
                                "end": 110
                            },
                            "flags": 16,
                            "start": 84,
                            "end": 111
                        }
                    ],
                    "flags": 17,
                    "start": 84,
                    "end": 111
                },
                "flags": 16,
                "start": 82,
                "end": 113
            },
            "flags": 16,
            "start": 0,
            "end": 113
        }
    ],
    "isModule": true,
    "source": "try {\n  await { function() {} };\n} catch(e) {\n  await { function() {} };\n} finally {\n  await { function() {} };\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 113
}
```

### Printed

```javascript

try {
  await { function() {} };
} catch (e) {
  await { function() {} };
} try{
  await { function() {} };
}
```

### Diagnostics

```javascript
✔ No errors
```

