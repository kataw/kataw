# Kataw parser test case

## Input

`````js
wrap({"a":b});
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
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 201392131,
                                            "text": "a",
                                            "rawText": "\"a\"",
                                            "flags": 96,
                                            "start": 6,
                                            "end": 9
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 96,
                                            "start": 10,
                                            "end": 11
                                        },
                                        "flags": 32,
                                        "start": 6,
                                        "end": 11
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 6,
                                "end": 11
                            },
                            "flags": 48,
                            "start": 5,
                            "end": 12
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 5,
                    "end": 12
                },
                "flags": 268435488,
                "start": 0,
                "end": 13
            },
            "flags": 16,
            "start": 0,
            "end": 14
        }
    ],
    "isModule": false,
    "source": "wrap({\"a\":b});",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 14
}
```

### Printed

```javascript

wrap({"\"a\"": b});
```

### Diagnostics

```javascript
✔ No errors
```

