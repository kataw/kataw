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
                                "generatorToken": null,
                                "left": {
                                    "kind": 134299649,
                                    "text": "__proto__",
                                    "rawText": "__proto__",
                                    "flags": 96,
                                    "start": 2,
                                    "end": 12
                                },
                                "right": {
                                    "kind": 138477575,
                                    "flags": 96,
                                    "start": 13,
                                    "end": 18
                                },
                                "flags": 36,
                                "start": 2,
                                "end": 18
                            },
                            {
                                "kind": 257,
                                "asyncKeyword": null,
                                "generatorToken": null,
                                "getKeyword": {
                                    "kind": 16498,
                                    "flags": 64,
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
                                        "start": 23,
                                        "end": 33
                                    },
                                    "typeParameters": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 1056,
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
                                            "start": 36,
                                            "end": 36
                                        },
                                        "flags": 32,
                                        "start": 35,
                                        "end": 37
                                    },
                                    "flags": 1056,
                                    "start": 33,
                                    "end": 37
                                },
                                "flags": 32,
                                "start": 19,
                                "end": 37
                            },
                            {
                                "kind": 257,
                                "asyncKeyword": null,
                                "generatorToken": null,
                                "getKeyword": null,
                                "setKeyword": {
                                    "kind": 16499,
                                    "flags": 64,
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
                                        "start": 42,
                                        "end": 52
                                    },
                                    "typeParameters": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [
                                            {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 53,
                                                "end": 54
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 608,
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
                                            "start": 56,
                                            "end": 56
                                        },
                                        "flags": 32,
                                        "start": 55,
                                        "end": 57
                                    },
                                    "flags": 544,
                                    "start": 52,
                                    "end": 57
                                },
                                "flags": 32,
                                "start": 38,
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
                                "kind": 219,
                                "generatorToken": null,
                                "left": {
                                    "kind": 201392130,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 96,
                                    "start": 65,
                                    "end": 67
                                },
                                "right": {
                                    "kind": 201392131,
                                    "text": "__proto__",
                                    "rawText": "\"__proto__\"",
                                    "flags": 96,
                                    "start": 68,
                                    "end": 80
                                },
                                "flags": 32,
                                "start": 65,
                                "end": 80
                            },
                            {
                                "kind": 219,
                                "generatorToken": null,
                                "left": {
                                    "kind": 201392130,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 96,
                                    "start": 81,
                                    "end": 83
                                },
                                "right": {
                                    "kind": 201392131,
                                    "text": "__proto__",
                                    "rawText": "\"__proto__\"",
                                    "flags": 96,
                                    "start": 84,
                                    "end": 96
                                },
                                "flags": 32,
                                "start": 81,
                                "end": 96
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 65,
                        "end": 96
                    },
                    "flags": 48,
                    "start": 64,
                    "end": 98
                },
                "flags": 32,
                "start": 61,
                "end": 99
            },
            "flags": 16,
            "start": 61,
            "end": 100
        }
    ],
    "isModule": false,
    "source": "({ __proto__: null, get __proto__(){}, set __proto__(x){} });\n\n({ 1: \"__proto__\", 1: \"__proto__\" });",
    "fileName": "__root__",
    "flags": 0,
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

