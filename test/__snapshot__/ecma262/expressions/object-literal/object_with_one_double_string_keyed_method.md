# Kataw parser test case

## Input

`````js
wrap({"foo"(){}});
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
                                                "kind": 201392131,
                                                "text": "foo",
                                                "rawText": "\"foo\"",
                                                "flags": 96,
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
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 6,
                                "end": 15
                            },
                            "flags": 48,
                            "transformFlags": 8,
                            "start": 5,
                            "end": 16
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 5,
                    "end": 16
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 0,
                "end": 17
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 18
        }
    ],
    "isModule": false,
    "source": "wrap({\"foo\"(){}});",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 18
}
```

### Printed

```javascript
wrap({ "\"foo\""() {} });
```

### Diagnostics

```javascript
✔ No errors
```

