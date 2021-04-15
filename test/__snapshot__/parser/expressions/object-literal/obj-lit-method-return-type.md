# Kataw parser test case

## Input

`````js
x = { method(test: string): number { } };
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
                                            "type": {
                                                "kind": 139,
                                                "type": {
                                                    "kind": 134234347,
                                                    "flags": 768,
                                                    "start": 18,
                                                    "end": 25
                                                },
                                                "autofix": 0,
                                                "flags": 0,
                                                "start": 17,
                                                "end": 25
                                            },
                                            "initializer": null,
                                            "flags": 256,
                                            "start": 13,
                                            "end": 25
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 256,
                                    "start": 13,
                                    "end": 26
                                },
                                "type": {
                                    "kind": 139,
                                    "type": {
                                        "kind": 134234345,
                                        "flags": 768,
                                        "start": 27,
                                        "end": 34
                                    },
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 26,
                                    "end": 34
                                },
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "multiline": false,
                                        "flags": 256,
                                        "start": 36,
                                        "end": 36
                                    },
                                    "flags": 256,
                                    "start": 34,
                                    "end": 38
                                },
                                "flags": 256,
                                "start": 12,
                                "end": 38
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 5,
                        "end": 38
                    },
                    "flags": 256,
                    "start": 3,
                    "end": 40
                },
                "flags": 256,
                "start": 0,
                "end": 40
            },
            "flags": 128,
            "start": 0,
            "end": 41
        }
    ],
    "isModule": false,
    "text": "x = { method(test: string): number { } };",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 41
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

