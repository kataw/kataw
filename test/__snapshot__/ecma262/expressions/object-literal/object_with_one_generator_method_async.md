# Kataw parser test case

## Input

`````js
wrap({*async(){}});
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
                                        "asteriskToken": {
                                            "kind": 201360950,
                                            "flags": 64,
                                            "transformFlags": 32,
                                            "start": 6,
                                            "end": 7
                                        },
                                        "getKeyword": null,
                                        "setKeyword": null,
                                        "method": {
                                            "kind": 209,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "async",
                                                "rawText": "async",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 7,
                                                "end": 12
                                            },
                                            "typeParameters": null,
                                            "formalParameterList": {
                                                "kind": 214,
                                                "formalParameters": [],
                                                "trailingComma": false,
                                                "flags": 160,
                                                "transformFlags": 0,
                                                "start": 13,
                                                "end": 14
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
                                                    "start": 15,
                                                    "end": 15
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 14,
                                                "end": 16
                                            },
                                            "flags": 160,
                                            "transformFlags": 0,
                                            "start": 12,
                                            "end": 16
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 6,
                                        "end": 16
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 6,
                                "end": 16
                            },
                            "flags": 48,
                            "transformFlags": 8,
                            "start": 5,
                            "end": 17
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 5,
                    "end": 17
                },
                "flags": 32,
                "transformFlags": 1,
                "start": 0,
                "end": 18
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 19
        }
    ],
    "isModule": false,
    "source": "wrap({*async(){}});",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 19
}
```

### Printed

```javascript
wrap({ *async() {} });
```

### Diagnostics

```javascript
✔ No errors
```

