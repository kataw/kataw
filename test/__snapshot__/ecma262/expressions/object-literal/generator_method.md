# Kataw parser test case

## Input

`````js
({   async *[ha+ha](){}   })
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
                                "asyncKeyword": {
                                    "kind": 82031,
                                    "flags": 352,
                                    "transformFlags": 0,
                                    "start": 2,
                                    "end": 10
                                },
                                "asteriskToken": {
                                    "kind": 67143222,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 10,
                                    "end": 12
                                },
                                "getKeyword": null,
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 194,
                                        "expression": {
                                            "kind": 198,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "ha",
                                                "rawText": "ha",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 13,
                                                "end": 15
                                            },
                                            "operatorToken": {
                                                "kind": 99634,
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 15,
                                                "end": 16
                                            },
                                            "right": {
                                                "kind": 134299649,
                                                "text": "ha",
                                                "rawText": "ha",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 16,
                                                "end": 18
                                            },
                                            "flags": 96,
                                            "transformFlags": 5120,
                                            "start": 13,
                                            "end": 18
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 12,
                                        "end": 19
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [],
                                        "trailingComma": false,
                                        "flags": 416,
                                        "transformFlags": 0,
                                        "start": 20,
                                        "end": 21
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
                                            "start": 22,
                                            "end": 22
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 21,
                                        "end": 23
                                    },
                                    "flags": 416,
                                    "transformFlags": 0,
                                    "start": 19,
                                    "end": 23
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 2,
                                "end": 23
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 2,
                        "end": 23
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 1,
                    "end": 27
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 34,
                "end": 28
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 28
        }
    ],
    "isModule": false,
    "source": "({   async *[ha+ha](){}   })",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 28
}
```

### Printed

```javascript
({ async *[ha + ha]() {} });
```

### Diagnostics

```javascript
✔ No errors
```

