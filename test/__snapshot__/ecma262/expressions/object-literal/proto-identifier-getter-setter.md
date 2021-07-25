# Kataw parser test case

## Input

`````js
({ __proto__: null, get __proto__(){}, set __proto__(x){} });

({ 1: "__proto__", 1: "__proto__" });
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
                                    "text": "__proto__",
                                    "rawText": "__proto__",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 2,
                                    "end": 12
                                },
                                "right": {
                                    "kind": 138477575,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 13,
                                    "end": 18
                                },
                                "flags": 36,
                                "transformFlags": 128,
                                "start": 2,
                                "end": 18
                            },
                            {
                                "kind": 351,
                                "asyncKeyword": null,
                                "asteriskToken": null,
                                "getKeyword": {
                                    "kind": 16498,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 19,
                                    "end": 23
                                },
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "__proto__",
                                        "rawText": "__proto__",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 23,
                                        "end": 33
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [],
                                        "trailingComma": false,
                                        "flags": 1056,
                                        "transformFlags": 0,
                                        "start": 34,
                                        "end": 35
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
                                            "start": 36,
                                            "end": 36
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 35,
                                        "end": 37
                                    },
                                    "flags": 1056,
                                    "transformFlags": 0,
                                    "start": 33,
                                    "end": 37
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 19,
                                "end": 37
                            },
                            {
                                "kind": 351,
                                "asyncKeyword": null,
                                "asteriskToken": null,
                                "getKeyword": null,
                                "setKeyword": {
                                    "kind": 16499,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 38,
                                    "end": 42
                                },
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "__proto__",
                                        "rawText": "__proto__",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 42,
                                        "end": 52
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
                                                "start": 53,
                                                "end": 54
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 608,
                                        "transformFlags": 0,
                                        "start": 53,
                                        "end": 55
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
                                            "start": 56,
                                            "end": 56
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 55,
                                        "end": 57
                                    },
                                    "flags": 544,
                                    "transformFlags": 0,
                                    "start": 52,
                                    "end": 57
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 38,
                                "end": 57
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 2,
                        "end": 57
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 1,
                    "end": 59
                },
                "flags": 34,
                "transformFlags": 0,
                "start": 0,
                "end": 60
            },
            "flags": 16,
            "transformFlags": 4096,
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
                                "kind": 219,
                                "asteriskToken": null,
                                "left": {
                                    "kind": 201392130,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 65,
                                    "end": 67
                                },
                                "right": {
                                    "kind": 201392131,
                                    "text": "__proto__",
                                    "rawText": "\"__proto__\"",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 68,
                                    "end": 80
                                },
                                "flags": 32,
                                "transformFlags": 128,
                                "start": 65,
                                "end": 80
                            },
                            {
                                "kind": 219,
                                "asteriskToken": null,
                                "left": {
                                    "kind": 201392130,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 81,
                                    "end": 83
                                },
                                "right": {
                                    "kind": 201392131,
                                    "text": "__proto__",
                                    "rawText": "\"__proto__\"",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 84,
                                    "end": 96
                                },
                                "flags": 32,
                                "transformFlags": 128,
                                "start": 81,
                                "end": 96
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 65,
                        "end": 96
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 64,
                    "end": 98
                },
                "flags": 35,
                "transformFlags": 0,
                "start": 61,
                "end": 99
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 61,
            "end": 100
        }
    ],
    "isModule": false,
    "source": "({ __proto__: null, get __proto__(){}, set __proto__(x){} });\n\n({ 1: \"__proto__\", 1: \"__proto__\" });",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 100
}
```

### Printed

```javascript
({ __proto__: null, get __proto__() {}, set __proto__(x) {} });
({ 1: "\"__proto__\"", 1: "\"__proto__\"" });

```

### Diagnostics

```javascript
✔ No errors
```

