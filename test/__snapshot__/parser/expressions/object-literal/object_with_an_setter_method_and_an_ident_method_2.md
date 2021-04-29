# Kataw parser test case

## Input

`````js
wrap({[foo](){}, set [bar](e){}});
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
                                        "kind": 209,
                                        "name": {
                                            "kind": 194,
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "foo",
                                                "rawText": "foo",
                                                "flags": 96,
                                                "start": 7,
                                                "end": 10
                                            },
                                            "flags": 32,
                                            "start": 6,
                                            "end": 11
                                        },
                                        "typeParameters": null,
                                        "formalParameters": {
                                            "kind": 214,
                                            "formalParameterList": [],
                                            "trailingComma": false,
                                            "flags": 32,
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
                                                "flags": 32,
                                                "start": 14,
                                                "end": 14
                                            },
                                            "flags": 32,
                                            "start": 13,
                                            "end": 15
                                        },
                                        "flags": 32,
                                        "start": 11,
                                        "end": 15
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": "set",
                                        "rawText": "set",
                                        "flags": 96,
                                        "start": 16,
                                        "end": 20
                                    },
                                    {
                                        "kind": 209,
                                        "name": {
                                            "kind": 194,
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "bar",
                                                "rawText": "bar",
                                                "flags": 96,
                                                "start": 22,
                                                "end": 25
                                            },
                                            "flags": 32,
                                            "start": 20,
                                            "end": 26
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
                                                        "text": "e",
                                                        "rawText": "e",
                                                        "flags": 96,
                                                        "start": 27,
                                                        "end": 28
                                                    },
                                                    "optionalToken": null,
                                                    "type": null,
                                                    "initializer": null,
                                                    "flags": 32,
                                                    "start": 27,
                                                    "end": 28
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 27,
                                            "end": 29
                                        },
                                        "type": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "start": 30,
                                                "end": 30
                                            },
                                            "flags": 32,
                                            "start": 29,
                                            "end": 31
                                        },
                                        "flags": 32,
                                        "start": 26,
                                        "end": 31
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 6,
                                "end": 31
                            },
                            "flags": 32,
                            "start": 5,
                            "end": 32
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 5,
                    "end": 32
                },
                "flags": 32,
                "start": 0,
                "end": 33
            },
            "flags": 16,
            "start": 0,
            "end": 34
        }
    ],
    "isModule": false,
    "source": "wrap({[foo](){}, set [bar](e){}});",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 34
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ ',' expected - start: 20, end: 22

```

