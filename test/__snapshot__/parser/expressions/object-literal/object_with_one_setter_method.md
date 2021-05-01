# Kataw parser test case

## Input

`````js
wrap({set [foo](a){}});
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
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "original": "wrap",
                    "text": "wrap",
                    "rawText": "wrap",
                    "flags": 96,
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
                                        "kind": 134299649,
                                        "original": "set",
                                        "text": "set",
                                        "rawText": "set",
                                        "flags": 96,
                                        "start": 6,
                                        "end": 9
                                    },
                                    {
                                        "kind": 209,
                                        "name": {
                                            "kind": 194,
                                            "expression": {
                                                "kind": 134299649,
                                                "original": "foo",
                                                "text": "foo",
                                                "rawText": "foo",
                                                "flags": 96,
                                                "start": 11,
                                                "end": 14
                                            },
                                            "flags": 32,
                                            "start": 9,
                                            "end": 15
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
                                                        "original": "a",
                                                        "text": "a",
                                                        "rawText": "a",
                                                        "flags": 96,
                                                        "start": 16,
                                                        "end": 17
                                                    },
                                                    "optionalToken": null,
                                                    "type": null,
                                                    "initializer": null,
                                                    "flags": 32,
                                                    "start": 16,
                                                    "end": 17
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 16,
                                            "end": 18
                                        },
                                        "type": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "start": 19,
                                                "end": 19
                                            },
                                            "flags": 32,
                                            "start": 18,
                                            "end": 20
                                        },
                                        "flags": 32,
                                        "start": 15,
                                        "end": 20
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 6,
                                "end": 20
                            },
                            "flags": 32,
                            "start": 5,
                            "end": 21
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 5,
                    "end": 21
                },
                "flags": 32,
                "start": 0,
                "end": 22
            },
            "flags": 16,
            "start": 0,
            "end": 23
        }
    ],
    "isModule": false,
    "source": "wrap({set [foo](a){}});",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 23
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ ',' expected - start: 9, end: 11

```

