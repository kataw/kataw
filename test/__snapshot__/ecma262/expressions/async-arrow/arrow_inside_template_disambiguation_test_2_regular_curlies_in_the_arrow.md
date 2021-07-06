# Kataw parser test case

## Input

`````js
`X${async a => b + {}}Y`
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
                "kind": 227,
                "spans": [
                    {
                        "kind": 65764,
                        "rawText": "X",
                        "text": "X",
                        "expression": {
                            "kind": 271,
                            "asyncKeyword": {
                                "kind": 82031,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 4,
                                "end": 9
                            },
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 9,
                                "end": 11
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 11,
                                "end": 14
                            },
                            "contents": {
                                "kind": 198,
                                "left": {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 14,
                                    "end": 16
                                },
                                "operatorToken": {
                                    "kind": 99634,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 16,
                                    "end": 18
                                },
                                "right": {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [],
                                        "trailingComma": false,
                                        "flags": 16,
                                        "transformFlags": 0,
                                        "start": 20,
                                        "end": 20
                                    },
                                    "flags": 48,
                                    "transformFlags": 8,
                                    "start": 18,
                                    "end": 21
                                },
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 14,
                                "end": 21
                            },
                            "flags": 288,
                            "transformFlags": 0,
                            "start": 4,
                            "end": 21
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 21
                    }
                ],
                "tail": {
                    "kind": 458761,
                    "text": "Y",
                    "rawText": "Y",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 21,
                    "end": 24
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 0,
                "end": 24
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 24
        }
    ],
    "isModule": false,
    "source": "`X${async a => b + {}}Y`",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 24
}
```

### Printed

```javascript

`X${async a => b + {}}Y`;
```

### Diagnostics

```javascript
✔ No errors
```

