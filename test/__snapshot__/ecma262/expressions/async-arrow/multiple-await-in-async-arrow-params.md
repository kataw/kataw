# Kataw parser test case

## Input

`````js
async ({ x = [ await ], y = { await } }) => {}
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
                "kind": 271,
                "asyncKeyword": {
                    "kind": 82031,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 5
                },
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [
                        {
                            "kind": 212,
                            "propertyList": {
                                "kind": 213,
                                "properties": [
                                    {
                                        "kind": 281,
                                        "ellipsisToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 8,
                                            "end": 10
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "right": {
                                            "kind": 119,
                                            "elementList": {
                                                "kind": 270,
                                                "elements": [
                                                    {
                                                        "kind": 134299649,
                                                        "text": "await",
                                                        "rawText": "await",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 14,
                                                        "end": 20
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 14,
                                                "end": 20
                                            },
                                            "flags": 32,
                                            "transformFlags": 8,
                                            "start": 12,
                                            "end": 22
                                        },
                                        "flags": 32,
                                        "transformFlags": 4096,
                                        "start": 8,
                                        "end": 22
                                    },
                                    {
                                        "kind": 281,
                                        "ellipsisToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "y",
                                            "rawText": "y",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 23,
                                            "end": 25
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "right": {
                                            "kind": 220,
                                            "propertyList": {
                                                "kind": 218,
                                                "properties": [
                                                    {
                                                        "kind": 134299649,
                                                        "text": "await",
                                                        "rawText": "await",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 29,
                                                        "end": 35
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 16,
                                                "transformFlags": 0,
                                                "start": 29,
                                                "end": 35
                                            },
                                            "flags": 48,
                                            "transformFlags": 8,
                                            "start": 27,
                                            "end": 37
                                        },
                                        "flags": 32,
                                        "transformFlags": 4096,
                                        "start": 23,
                                        "end": 37
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 8,
                                "end": 37
                            },
                            "flags": 48,
                            "transformFlags": 0,
                            "start": 7,
                            "end": 39
                        }
                    ],
                    "trailingComma": false,
                    "flags": 34,
                    "transformFlags": 0,
                    "start": 7,
                    "end": 40
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 40,
                    "end": 43
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 45,
                        "end": 45
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 43,
                    "end": 46
                },
                "flags": 290,
                "transformFlags": 0,
                "start": 0,
                "end": 46
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 46
        }
    ],
    "isModule": false,
    "source": "async ({ x = [ await ], y = { await } }) => {}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 46
}
```

### Printed

```javascript
async ({ x = [await], y = { await } }) => {};
```

### Diagnostics

```javascript
✔ No errors
```

