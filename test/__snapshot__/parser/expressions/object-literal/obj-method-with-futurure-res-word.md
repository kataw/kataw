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
                                    "text": "method",
                                    "rawText": "method",
                                    "flags": 768,
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
                                                "text": "public",
                                                "rawText": "public",
                                                "flags": 768,
                                                "start": 10,
                                                "end": 16
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "flags": 256,
                                            "start": 10,
                                            "end": 16
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 1280,
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
                                        "multiline": false,
                                        "flags": 256,
                                        "start": 18,
                                        "end": 18
                                    },
                                    "flags": 256,
                                    "start": 17,
                                    "end": 19
                                },
                                "flags": 1280,
                                "start": 9,
                                "end": 19
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 2,
                        "end": 19
                    },
                    "flags": 256,
                    "start": 1,
                    "end": 20
                },
                "flags": 256,
                "start": 0,
                "end": 21
            },
            "flags": 128,
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
                                    "text": "method",
                                    "rawText": "method",
                                    "flags": 768,
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
                                                "text": "protected",
                                                "rawText": "protected",
                                                "flags": 768,
                                                "start": 32,
                                                "end": 41
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "flags": 256,
                                            "start": 32,
                                            "end": 41
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 256,
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
                                        "multiline": false,
                                        "flags": 256,
                                        "start": 43,
                                        "end": 43
                                    },
                                    "flags": 256,
                                    "start": 42,
                                    "end": 44
                                },
                                "flags": 256,
                                "start": 31,
                                "end": 44
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 25,
                        "end": 44
                    },
                    "flags": 256,
                    "start": 24,
                    "end": 45
                },
                "flags": 256,
                "start": 22,
                "end": 46
            },
            "flags": 128,
            "start": 22,
            "end": 47
        }
    ],
    "isModule": false,
    "text": "({*method(public){}});\n({method(protected){}});",
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

