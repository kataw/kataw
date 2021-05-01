# Kataw parser test case

## Input

`````js
wrap({15:b});
`````

## Output

### Hybrid CST

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
                    "original": "wrap",
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
                                        "generatorToken": null,
                                        "asyncKeyword": null,
                                        "getKeyword": null,
                                        "setKeyword": null,
                                        "left": {
                                            "kind": 134299649,
                                            "original": "b",
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 96,
                                            "start": 9,
                                            "end": 10
                                        },
                                        "right": {
                                            "kind": 201392130,
                                            "text": 15,
                                            "original": "15",
                                            "rawText": "15",
                                            "flags": 96,
                                            "start": 6,
                                            "end": 8
                                        },
                                        "flags": 32,
                                        "start": 6,
                                        "end": 10
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 6,
                                "end": 10
                            },
                            "flags": 32,
                            "start": 5,
                            "end": 11
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 5,
                    "end": 11
                },
                "flags": 32,
                "start": 0,
                "end": 12
            },
            "flags": 16,
            "start": 0,
            "end": 13
        }
    ],
    "isModule": false,
    "source": "wrap({15:b});",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 13
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

