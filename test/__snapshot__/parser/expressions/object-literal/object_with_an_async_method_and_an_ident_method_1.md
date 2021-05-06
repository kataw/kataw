# Kataw parser test case

## Input

`````js
x({async foo(){}, bar(){}});
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
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 0,
                    "end": 1
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
                                        "kind": 257,
                                        "asyncKeyword": {
                                            "kind": 82031,
                                            "flags": 64,
                                            "start": 3,
                                            "end": 8
                                        },
                                        "generatorToken": null,
                                        "getKeyword": null,
                                        "setKeyword": null,
                                        "method": {
                                            "kind": 209,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "foo",
                                                "rawText": "foo",
                                                "flags": 96,
                                                "start": 8,
                                                "end": 12
                                            },
                                            "typeParameters": null,
                                            "formalParameters": {
                                                "kind": 214,
                                                "formalParameterList": [],
                                                "trailingComma": false,
                                                "flags": 288,
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
                                                    "flags": 32,
                                                    "start": 15,
                                                    "end": 15
                                                },
                                                "flags": 32,
                                                "start": 14,
                                                "end": 16
                                            },
                                            "flags": 288,
                                            "start": 12,
                                            "end": 16
                                        },
                                        "flags": 32,
                                        "start": 3,
                                        "end": 16
                                    },
                                    {
                                        "kind": 257,
                                        "asyncKeyword": null,
                                        "generatorToken": null,
                                        "getKeyword": null,
                                        "setKeyword": null,
                                        "method": {
                                            "kind": 209,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "bar",
                                                "rawText": "bar",
                                                "flags": 96,
                                                "start": 17,
                                                "end": 21
                                            },
                                            "typeParameters": null,
                                            "formalParameters": {
                                                "kind": 214,
                                                "formalParameterList": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 22,
                                                "end": 23
                                            },
                                            "type": null,
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [],
                                                    "flags": 32,
                                                    "start": 24,
                                                    "end": 24
                                                },
                                                "flags": 32,
                                                "start": 23,
                                                "end": 25
                                            },
                                            "flags": 32,
                                            "start": 21,
                                            "end": 25
                                        },
                                        "flags": 32,
                                        "start": 17,
                                        "end": 25
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 3,
                                "end": 25
                            },
                            "flags": 32,
                            "start": 2,
                            "end": 26
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 2,
                    "end": 26
                },
                "flags": 32,
                "start": 0,
                "end": 27
            },
            "flags": 16,
            "start": 0,
            "end": 28
        }
    ],
    "isModule": false,
    "source": "x({async foo(){}, bar(){}});",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 28
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

