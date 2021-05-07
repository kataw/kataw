# Kataw parser test case

## Input

`````js
({ __proto__: null, set __proto__(x){} })
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
                                    "kind": 269,
                                    "text": null,
                                    "flags": 96,
                                    "start": 13,
                                    "end": 18
                                },
                                "flags": 32,
                                "start": 2,
                                "end": 18
                            },
                            {
                                "kind": 257,
                                "asyncKeyword": null,
                                "generatorToken": null,
                                "getKeyword": null,
                                "setKeyword": {
                                    "kind": 16499,
                                    "flags": 64,
                                    "start": 19,
                                    "end": 23
                                },
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
                                        "formalParameterList": [
                                            {
                                                "kind": 215,
                                                "ellipsisToken": null,
                                                "binding": {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "start": 34,
                                                    "end": 35
                                                },
                                                "optionalToken": null,
                                                "type": null,
                                                "initializer": null,
                                                "flags": 32,
                                                "start": 34,
                                                "end": 35
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 544,
                                        "start": 34,
                                        "end": 36
                                    },
                                    "type": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "start": 37,
                                            "end": 37
                                        },
                                        "flags": 32,
                                        "start": 36,
                                        "end": 38
                                    },
                                    "flags": 544,
                                    "start": 33,
                                    "end": 38
                                },
                                "flags": 32,
                                "start": 19,
                                "end": 38
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 2,
                        "end": 38
                    },
                    "flags": 32,
                    "start": 1,
                    "end": 40
                },
                "flags": 32,
                "start": 0,
                "end": 41
            },
            "flags": 16,
            "start": 0,
            "end": 41
        }
    ],
    "isModule": false,
    "source": "({ __proto__: null, set __proto__(x){} })",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 41
}
```

### Printed

```javascript

({ __proto__: null, set __proto__(x) {} });
```

### Diagnostics

```javascript
✔ No errors
```

