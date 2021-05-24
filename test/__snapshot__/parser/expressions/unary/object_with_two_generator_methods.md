# Kataw parser test case

## Input

`````js
wrap({* foo(){},*bar(){}});
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
                                        "kind": 257,
                                        "asyncKeyword": null,
                                        "generatorToken": {
                                            "kind": 67143222,
                                            "flags": 64,
                                            "start": 6,
                                            "end": 7
                                        },
                                        "getKeyword": null,
                                        "setKeyword": null,
                                        "method": {
                                            "kind": 209,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "foo",
                                                "rawText": "foo",
                                                "flags": 96,
                                                "start": 7,
                                                "end": 11
                                            },
                                            "typeParameters": null,
                                            "formalParameters": {
                                                "kind": 214,
                                                "formalParameterList": [],
                                                "trailingComma": false,
                                                "flags": 160,
                                                "start": 12,
                                                "end": 13
                                            },
                                            "returnType": null,
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
                                            "flags": 160,
                                            "start": 11,
                                            "end": 15
                                        },
                                        "flags": 32,
                                        "start": 6,
                                        "end": 15
                                    },
                                    {
                                        "kind": 257,
                                        "asyncKeyword": null,
                                        "generatorToken": {
                                            "kind": 67143222,
                                            "flags": 64,
                                            "start": 16,
                                            "end": 17
                                        },
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
                                                "end": 20
                                            },
                                            "typeParameters": null,
                                            "formalParameters": {
                                                "kind": 214,
                                                "formalParameterList": [],
                                                "trailingComma": false,
                                                "flags": 160,
                                                "start": 21,
                                                "end": 22
                                            },
                                            "returnType": null,
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [],
                                                    "flags": 32,
                                                    "start": 23,
                                                    "end": 23
                                                },
                                                "flags": 32,
                                                "start": 22,
                                                "end": 24
                                            },
                                            "flags": 160,
                                            "start": 20,
                                            "end": 24
                                        },
                                        "flags": 32,
                                        "start": 16,
                                        "end": 24
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 6,
                                "end": 24
                            },
                            "flags": 48,
                            "start": 5,
                            "end": 25
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 5,
                    "end": 25
                },
                "flags": 268435488,
                "start": 0,
                "end": 26
            },
            "flags": 16,
            "start": 0,
            "end": 27
        }
    ],
    "isModule": false,
    "source": "wrap({* foo(){},*bar(){}});",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 27
}
```

### Printed

```javascript

wrap({ * foo() {}, * bar() {} });
```

### Diagnostics

```javascript
✔ No errors
```

