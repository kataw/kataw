# Kataw parser test case

## Input

`````js
({ async a(b = await (0)) {} })
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
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 768,
                                    "start": 8,
                                    "end": 10
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
                                                "text": "b",
                                                "rawText": "b",
                                                "flags": 768,
                                                "start": 11,
                                                "end": 12
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": {
                                                "kind": 208,
                                                "awaitToken": {
                                                    "kind": 82032,
                                                    "flags": 768,
                                                    "start": 14,
                                                    "end": 20
                                                },
                                                "expression": {
                                                    "kind": 121,
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": 0,
                                                        "rawText": "0",
                                                        "flags": 768,
                                                        "start": 22,
                                                        "end": 23
                                                    },
                                                    "flags": 256,
                                                    "start": 20,
                                                    "end": 24
                                                },
                                                "flags": 256,
                                                "start": 14,
                                                "end": 24
                                            },
                                            "flags": 258,
                                            "start": 11,
                                            "end": 24
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 2306,
                                    "start": 11,
                                    "end": 25
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
                                        "start": 27,
                                        "end": 27
                                    },
                                    "flags": 256,
                                    "start": 25,
                                    "end": 28
                                },
                                "flags": 2304,
                                "start": 10,
                                "end": 28
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 2,
                        "end": 28
                    },
                    "flags": 256,
                    "start": 1,
                    "end": 30
                },
                "flags": 256,
                "start": 0,
                "end": 31
            },
            "flags": 128,
            "start": 0,
            "end": 31
        }
    ],
    "isModule": false,
    "text": "({ async a(b = await (0)) {} })",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 31
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

