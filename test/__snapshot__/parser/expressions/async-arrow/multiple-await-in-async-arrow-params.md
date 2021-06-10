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
            "kind": 271,
            "arrowToken": {
                "kind": 10,
                "flags": 64,
                "start": 40,
                "end": 43
            },
            "typeParameters": null,
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
                                                "start": 14,
                                                "end": 20
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 14,
                                        "end": 20
                                    },
                                    "flags": 32,
                                    "start": 12,
                                    "end": 22
                                },
                                "flags": 32,
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
                                                "start": 29,
                                                "end": 35
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 16,
                                        "start": 29,
                                        "end": 35
                                    },
                                    "flags": 48,
                                    "start": 27,
                                    "end": 37
                                },
                                "flags": 32,
                                "start": 23,
                                "end": 37
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 8,
                        "end": 37
                    },
                    "flags": 48,
                    "start": 7,
                    "end": 39
                }
            ],
            "asyncKeyword": {
                "kind": 82031,
                "flags": 64,
                "start": 0,
                "end": 5
            },
            "returnType": null,
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 45,
                    "end": 45
                },
                "flags": 32,
                "start": 43,
                "end": 46
            },
            "flags": 290,
            "start": 0,
            "end": 46
        }
    ],
    "isModule": false,
    "source": "async ({ x = [ await ], y = { await } }) => {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 46
}
```

### Printed

```javascript

async ({
  x = [await],
  y = { await }
}) =>  {}
```

### Diagnostics

```javascript
✔ No errors
```

