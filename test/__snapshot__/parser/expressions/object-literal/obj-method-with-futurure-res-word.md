# Kataw parser test case

## Input

`````js
({*method(public){}});
({method(protected){}});
`````

## Output

### Hybrid CST

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
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "original": "method",
                                    "text": "method",
                                    "rawText": "method",
                                    "flags": 96,
                                    "start": 3,
                                    "end": 9
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
                                                "original": "public",
                                                "text": "public",
                                                "rawText": "public",
                                                "flags": 96,
                                                "start": 10,
                                                "end": 16
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "flags": 32,
                                            "start": 10,
                                            "end": 16
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 160,
                                    "start": 10,
                                    "end": 17
                                },
                                "type": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 18,
                                        "end": 18
                                    },
                                    "flags": 32,
                                    "start": 17,
                                    "end": 19
                                },
                                "flags": 160,
                                "start": 9,
                                "end": 19
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 2,
                        "end": 19
                    },
                    "flags": 32,
                    "start": 1,
                    "end": 20
                },
                "flags": 32,
                "start": 0,
                "end": 21
            },
            "flags": 16,
            "start": 0,
            "end": 22
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
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "original": "method",
                                    "text": "method",
                                    "rawText": "method",
                                    "flags": 96,
                                    "start": 25,
                                    "end": 31
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
                                                "original": "protected",
                                                "text": "protected",
                                                "rawText": "protected",
                                                "flags": 96,
                                                "start": 32,
                                                "end": 41
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "flags": 32,
                                            "start": 32,
                                            "end": 41
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 32,
                                    "end": 42
                                },
                                "type": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 43,
                                        "end": 43
                                    },
                                    "flags": 32,
                                    "start": 42,
                                    "end": 44
                                },
                                "flags": 32,
                                "start": 31,
                                "end": 44
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 25,
                        "end": 44
                    },
                    "flags": 32,
                    "start": 24,
                    "end": 45
                },
                "flags": 32,
                "start": 22,
                "end": 46
            },
            "flags": 16,
            "start": 22,
            "end": 47
        }
    ],
    "isModule": false,
    "source": "({*method(public){}});\n({method(protected){}});",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 47
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

