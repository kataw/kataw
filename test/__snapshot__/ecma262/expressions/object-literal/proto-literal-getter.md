# Kataw parser test case

## Input

`````js
({ "__proto__": null, get __proto__(){} })
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
                                    "text": "__proto__",
                                    "rawText": "\"__proto__\"",
                                    "flags": 96,
                                    "start": 2,
                                    "end": 14
                                },
                                "right": {
                                    "kind": 138477575,
                                    "flags": 96,
                                    "start": 15,
                                    "end": 20
                                },
                                "flags": 36,
                                "start": 2,
                                "end": 20
                            },
                            {
                                "kind": 351,
                                "asyncKeyword": null,
                                "asteriskToken": null,
                                "getKeyword": {
                                    "kind": 16498,
                                    "flags": 96,
                                    "start": 21,
                                    "end": 25
                                },
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "__proto__",
                                        "rawText": "__proto__",
                                        "flags": 96,
                                        "start": 25,
                                        "end": 35
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [],
                                        "trailingComma": false,
                                        "flags": 1056,
                                        "start": 36,
                                        "end": 37
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
                                        "start": 37,
                                        "end": 39
                                    },
                                    "flags": 1056,
                                    "start": 35,
                                    "end": 39
                                },
                                "flags": 32,
                                "start": 21,
                                "end": 39
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 2,
                        "end": 39
                    },
                    "flags": 48,
                    "start": 1,
                    "end": 41
                },
                "flags": 32,
                "start": 0,
                "end": 42
            },
            "flags": 16,
            "start": 0,
            "end": 42
        }
    ],
    "isModule": false,
    "source": "({ \"__proto__\": null, get __proto__(){} })",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 42
}
```

### Printed

```javascript

({ "\"__proto__\"": null, get __proto__() {} });

```

### Diagnostics

```javascript
✔ No errors
```

