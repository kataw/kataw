# Kataw parser test case

## Input

`````js
({* try(){}});
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
                "kind": 121,
                "expression": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 351,
                                "asyncKeyword": null,
                                "asteriskToken": {
                                    "kind": 67143222,
                                    "flags": 64,
                                    "transformFlags": 32,
                                    "start": 2,
                                    "end": 3
                                },
                                "getKeyword": null,
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "try",
                                        "rawText": "try",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 3,
                                        "end": 7
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [],
                                        "trailingComma": false,
                                        "flags": 160,
                                        "transformFlags": 0,
                                        "start": 8,
                                        "end": 9
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
                                            "start": 10,
                                            "end": 10
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 9,
                                        "end": 11
                                    },
                                    "flags": 160,
                                    "transformFlags": 0,
                                    "start": 7,
                                    "end": 11
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 2,
                                "end": 11
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 2,
                        "end": 11
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 1,
                    "end": 12
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 34,
                "end": 13
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 14
        }
    ],
    "isModule": false,
    "source": "({* try(){}});",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 14
}
```

### Printed

```javascript
({ *try() {} });
```

### Diagnostics

```javascript
✔ No errors
```

