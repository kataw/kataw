# Kataw parser test case

## Input

`````js
x = { method(test) { } };

x = { method(test: string) { } };

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
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 768,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 768,
                    "start": 1,
                    "end": 3
                },
                "right": {
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
                                    "start": 5,
                                    "end": 12
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
                                                "text": "test",
                                                "rawText": "test",
                                                "flags": 768,
                                                "start": 13,
                                                "end": 17
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "flags": 256,
                                            "start": 13,
                                            "end": 17
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 256,
                                    "start": 13,
                                    "end": 18
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
                                        "start": 20,
                                        "end": 20
                                    },
                                    "flags": 256,
                                    "start": 18,
                                    "end": 22
                                },
                                "flags": 256,
                                "start": 12,
                                "end": 22
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 5,
                        "end": 22
                    },
                    "flags": 256,
                    "start": 3,
                    "end": 24
                },
                "flags": 256,
                "start": 0,
                "end": 24
            },
            "flags": 128,
            "start": 0,
            "end": 25
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 768,
                    "start": 25,
                    "end": 28
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 768,
                    "start": 28,
                    "end": 30
                },
                "right": {
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
                                    "start": 32,
                                    "end": 39
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
                                                "text": "test",
                                                "rawText": "test",
                                                "flags": 768,
                                                "start": 40,
                                                "end": 44
                                            },
                                            "optionalToken": null,
                                            "type": {
                                                "kind": 139,
                                                "type": {
                                                    "kind": 134234347,
                                                    "flags": 768,
                                                    "start": 45,
                                                    "end": 52
                                                },
                                                "flags": 0,
                                                "start": 44,
                                                "end": 52
                                            },
                                            "initializer": null,
                                            "flags": 256,
                                            "start": 40,
                                            "end": 52
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 256,
                                    "start": 40,
                                    "end": 53
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
                                        "start": 55,
                                        "end": 55
                                    },
                                    "flags": 256,
                                    "start": 53,
                                    "end": 57
                                },
                                "flags": 256,
                                "start": 39,
                                "end": 57
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 32,
                        "end": 57
                    },
                    "flags": 256,
                    "start": 30,
                    "end": 59
                },
                "flags": 256,
                "start": 25,
                "end": 59
            },
            "flags": 128,
            "start": 25,
            "end": 60
        }
    ],
    "isModule": false,
    "text": "x = { method(test) { } };\n\nx = { method(test: string) { } };\n",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 61
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

