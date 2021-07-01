# Kataw parser test case

## Input

`````js
({ set(...a) { } });
({ set(a, ...b) { } });
({ set([a], ...b) { } });
({ set({a: A}, ...b) { } });
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
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "set",
                                        "rawText": "set",
                                        "flags": 96,
                                        "start": 2,
                                        "end": 6
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [
                                            {
                                                "kind": 281,
                                                "ellipsisToken": {
                                                    "kind": 524302,
                                                    "flags": 64,
                                                    "start": 7,
                                                    "end": 10
                                                },
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "a",
                                                    "rawText": "a",
                                                    "flags": 96,
                                                    "start": 10,
                                                    "end": 11
                                                },
                                                "optionalToken": null,
                                                "type": null,
                                                "right": null,
                                                "flags": 34,
                                                "start": 7,
                                                "end": 11
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 34,
                                        "start": 7,
                                        "end": 12
                                    },
                                    "returnType": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "start": 14,
                                            "end": 14
                                        },
                                        "flags": 32,
                                        "start": 12,
                                        "end": 16
                                    },
                                    "flags": 32,
                                    "start": 6,
                                    "end": 16
                                },
                                "flags": 32,
                                "start": 2,
                                "end": 16
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 2,
                        "end": 16
                    },
                    "flags": 48,
                    "start": 1,
                    "end": 18
                },
                "flags": 32,
                "start": 0,
                "end": 19
            },
            "flags": 16,
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
                                "getKeyword": null,
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "set",
                                        "rawText": "set",
                                        "flags": 96,
                                        "start": 23,
                                        "end": 27
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
                                                "start": 28,
                                                "end": 29
                                            },
                                            {
                                                "kind": 281,
                                                "ellipsisToken": {
                                                    "kind": 524302,
                                                    "flags": 64,
                                                    "start": 30,
                                                    "end": 34
                                                },
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "b",
                                                    "rawText": "b",
                                                    "flags": 96,
                                                    "start": 34,
                                                    "end": 35
                                                },
                                                "optionalToken": null,
                                                "type": null,
                                                "right": null,
                                                "flags": 34,
                                                "start": 30,
                                                "end": 35
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 98,
                                        "start": 28,
                                        "end": 36
                                    },
                                    "returnType": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "start": 38,
                                            "end": 38
                                        },
                                        "flags": 32,
                                        "start": 36,
                                        "end": 40
                                    },
                                    "flags": 32,
                                    "start": 27,
                                    "end": 40
                                },
                                "flags": 32,
                                "start": 23,
                                "end": 40
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 23,
                        "end": 40
                    },
                    "flags": 48,
                    "start": 22,
                    "end": 42
                },
                "flags": 32,
                "start": 20,
                "end": 43
            },
            "flags": 16,
            "start": 20,
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
                                "kind": 351,
                                "asyncKeyword": null,
                                "asteriskToken": null,
                                "getKeyword": null,
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "set",
                                        "rawText": "set",
                                        "flags": 96,
                                        "start": 47,
                                        "end": 51
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [
                                            {
                                                "kind": 201,
                                                "elementList": {
                                                    "kind": 324,
                                                    "elements": [
                                                        {
                                                            "kind": 134299649,
                                                            "text": "a",
                                                            "rawText": "a",
                                                            "flags": 96,
                                                            "start": 53,
                                                            "end": 54
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 0,
                                                    "start": 53,
                                                    "end": 54
                                                },
                                                "flags": 32,
                                                "start": 52,
                                                "end": 55
                                            },
                                            {
                                                "kind": 281,
                                                "ellipsisToken": {
                                                    "kind": 524302,
                                                    "flags": 64,
                                                    "start": 56,
                                                    "end": 60
                                                },
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "b",
                                                    "rawText": "b",
                                                    "flags": 96,
                                                    "start": 60,
                                                    "end": 61
                                                },
                                                "optionalToken": null,
                                                "type": null,
                                                "right": null,
                                                "flags": 34,
                                                "start": 56,
                                                "end": 61
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 34,
                                        "start": 52,
                                        "end": 62
                                    },
                                    "returnType": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "start": 64,
                                            "end": 64
                                        },
                                        "flags": 32,
                                        "start": 62,
                                        "end": 66
                                    },
                                    "flags": 32,
                                    "start": 51,
                                    "end": 66
                                },
                                "flags": 32,
                                "start": 47,
                                "end": 66
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 47,
                        "end": 66
                    },
                    "flags": 48,
                    "start": 46,
                    "end": 68
                },
                "flags": 32,
                "start": 44,
                "end": 69
            },
            "flags": 16,
            "start": 44,
            "end": 70
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
                                        "text": "set",
                                        "rawText": "set",
                                        "flags": 96,
                                        "start": 73,
                                        "end": 77
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [
                                            {
                                                "kind": 212,
                                                "propertyList": {
                                                    "kind": 213,
                                                    "properties": [
                                                        {
                                                            "kind": 329,
                                                            "key": {
                                                                "kind": 134299649,
                                                                "text": "a",
                                                                "rawText": "a",
                                                                "flags": 96,
                                                                "start": 79,
                                                                "end": 80
                                                            },
                                                            "value": {
                                                                "kind": 134299649,
                                                                "text": "A",
                                                                "rawText": "A",
                                                                "flags": 96,
                                                                "start": 81,
                                                                "end": 83
                                                            },
                                                            "initializer": null,
                                                            "flags": 32,
                                                            "start": 79,
                                                            "end": 83
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "start": 79,
                                                    "end": 83
                                                },
                                                "flags": 32,
                                                "start": 78,
                                                "end": 84
                                            },
                                            {
                                                "kind": 281,
                                                "ellipsisToken": {
                                                    "kind": 524302,
                                                    "flags": 64,
                                                    "start": 85,
                                                    "end": 89
                                                },
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "b",
                                                    "rawText": "b",
                                                    "flags": 96,
                                                    "start": 89,
                                                    "end": 90
                                                },
                                                "optionalToken": null,
                                                "type": null,
                                                "right": null,
                                                "flags": 34,
                                                "start": 85,
                                                "end": 90
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 34,
                                        "start": 78,
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
                                            "start": 93,
                                            "end": 93
                                        },
                                        "flags": 32,
                                        "start": 91,
                                        "end": 95
                                    },
                                    "flags": 32,
                                    "start": 77,
                                    "end": 95
                                },
                                "flags": 32,
                                "start": 73,
                                "end": 95
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 73,
                        "end": 95
                    },
                    "flags": 48,
                    "start": 72,
                    "end": 97
                },
                "flags": 32,
                "start": 70,
                "end": 98
            },
            "flags": 16,
            "start": 70,
            "end": 99
        }
    ],
    "isModule": false,
    "source": "({ set(...a) { } });\n({ set(a, ...b) { } });\n({ set([a], ...b) { } });\n({ set({a: A}, ...b) { } });",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 99
}
```

### Printed

```javascript

({ set(...a) {} });
({ set(a, ...b) {} });
({ set([a], ...b) {} });
({ set({
      a: A
    }, ...b) {} });

```

### Diagnostics

```javascript
✔ No errors
```

