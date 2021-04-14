# Kataw parser test case

## Input

`````js
wrap({* foo(){},*bar(){}});
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
                                            "text": "foo",
                                            "rawText": "foo",
                                            "flags": 768,
                                            "start": 7,
                                            "end": 11
                                        },
                                        "typeParameters": null,
                                        "formalParameters": {
                                            "kind": 214,
                                            "formalParameterList": [],
                                            "trailingComma": false,
                                            "flags": 1280,
                                            "start": 12,
                                            "end": 13
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
                                                "start": 14,
                                                "end": 14
                                            },
                                            "flags": 256,
                                            "start": 13,
                                            "end": 15
                                        },
                                        "flags": 1280,
                                        "start": 11,
                                        "end": 15
                                    },
                                    {
                                        "kind": 209,
                                        "name": {
                                            "kind": 81921,
                                            "text": "bar",
                                            "rawText": "bar",
                                            "flags": 768,
                                            "start": 17,
                                            "end": 20
                                        },
                                        "typeParameters": null,
                                        "formalParameters": {
                                            "kind": 214,
                                            "formalParameterList": [],
                                            "trailingComma": false,
                                            "flags": 1280,
                                            "start": 21,
                                            "end": 22
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
                                                "start": 23,
                                                "end": 23
                                            },
                                            "flags": 256,
                                            "start": 22,
                                            "end": 24
                                        },
                                        "flags": 1280,
                                        "start": 20,
                                        "end": 24
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "start": 6,
                                "end": 24
                            },
                            "flags": 256,
                            "start": 5,
                            "end": 25
                        }
                    ],
                    "trailingComma": false,
                    "flags": 256,
                    "start": 5,
                    "end": 25
                },
                "flags": 256,
                "start": 0,
                "end": 26
            },
            "flags": 128,
            "start": 0,
            "end": 27
        }
    ],
    "isModule": false,
    "text": "wrap({* foo(){},*bar(){}});",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 27
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

