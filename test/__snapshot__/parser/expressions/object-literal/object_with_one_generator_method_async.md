# Kataw parser test case

## Input

`````js
wrap({*async(){}});
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 81921,
                    "text": "wrap",
                    "rawText": "wrap",
                    "flags": 768,
                    "start": 0,
                    "end": 4
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 209,
                                        "name": {
                                            "kind": 81921,
                                            "text": "async",
                                            "rawText": "async",
                                            "flags": 768,
                                            "start": 7,
                                            "end": 12
                                        },
                                        "typeParameters": null,
                                        "formalParameters": {
                                            "kind": 214,
                                            "formalParameterList": [],
                                            "trailingComma": false,
                                            "flags": 1280,
                                            "start": 13,
                                            "end": 14
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
                                                "start": 15,
                                                "end": 15
                                            },
                                            "flags": 256,
                                            "start": 14,
                                            "end": 16
                                        },
                                        "flags": 1280,
                                        "start": 12,
                                        "end": 16
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "start": 6,
                                "end": 16
                            },
                            "flags": 256,
                            "start": 5,
                            "end": 17
                        }
                    ],
                    "trailingComma": false,
                    "flags": 256,
                    "start": 5,
                    "end": 17
                },
                "flags": 256,
                "start": 0,
                "end": 18
            },
            "flags": 128,
            "start": 0,
            "end": 19
        }
    ],
    "isModule": false,
    "text": "wrap({*async(){}});",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 19
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

