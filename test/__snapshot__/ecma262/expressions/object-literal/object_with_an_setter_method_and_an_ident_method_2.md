# Kataw parser test case

## Input

`````js
wrap({[foo](){}, set [bar](e){}});
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
                    "transformFlags": 0,
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
                                        "kind": 351,
                                        "asyncKeyword": null,
                                        "asteriskToken": null,
                                        "getKeyword": null,
                                        "setKeyword": null,
                                        "method": {
                                            "kind": 209,
                                            "name": {
                                                "kind": 194,
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "foo",
                                                    "rawText": "foo",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 7,
                                                    "end": 10
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 6,
                                                "end": 11
                                            },
                                            "typeParameters": null,
                                            "formalParameterList": {
                                                "kind": 214,
                                                "formalParameters": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "transformFlags": 0,
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
                                                    "transformFlags": 0,
                                                    "start": 14,
                                                    "end": 14
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 13,
                                                "end": 15
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 11,
                                            "end": 15
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 6,
                                        "end": 15
                                    },
                                    {
                                        "kind": 351,
                                        "asyncKeyword": null,
                                        "asteriskToken": null,
                                        "getKeyword": null,
                                        "setKeyword": {
                                            "kind": 16499,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 16,
                                            "end": 20
                                        },
                                        "method": {
                                            "kind": 209,
                                            "name": {
                                                "kind": 194,
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "bar",
                                                    "rawText": "bar",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 22,
                                                    "end": 25
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 20,
                                                "end": 26
                                            },
                                            "typeParameters": null,
                                            "formalParameterList": {
                                                "kind": 214,
                                                "formalParameters": [
                                                    {
                                                        "kind": 134299649,
                                                        "text": "e",
                                                        "rawText": "e",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 27,
                                                        "end": 28
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 608,
                                                "transformFlags": 0,
                                                "start": 27,
                                                "end": 29
                                            },
                                            "returnType": null,
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [],
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 30,
                                                    "end": 30
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 29,
                                                "end": 31
                                            },
                                            "flags": 544,
                                            "transformFlags": 0,
                                            "start": 26,
                                            "end": 31
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 16,
                                        "end": 31
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 6,
                                "end": 31
                            },
                            "flags": 48,
                            "transformFlags": 8,
                            "start": 5,
                            "end": 32
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 5,
                    "end": 32
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 0,
                "end": 33
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 34
        }
    ],
    "isModule": false,
    "source": "wrap({[foo](){}, set [bar](e){}});",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 34
}
```

### Printed

```javascript

wrap({ [foo]() {}, set [bar](e) {} });
```

### Diagnostics

```javascript
✔ No errors
```

