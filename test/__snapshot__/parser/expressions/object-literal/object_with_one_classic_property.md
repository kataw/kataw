# Kataw parser test case

## Input

`````js
wrap({a:b});
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
                                            "start": 8,
                                            "end": 9
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "original": "a",
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "start": 6,
                                            "end": 7
                                        },
                                        "flags": 32,
                                        "start": 6,
                                        "end": 9
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 6,
                                "end": 9
                            },
                            "flags": 32,
                            "start": 5,
                            "end": 10
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 5,
                    "end": 10
                },
                "flags": 32,
                "start": 0,
                "end": 11
            },
            "flags": 16,
            "start": 0,
            "end": 12
        }
    ],
    "isModule": false,
    "source": "wrap({a:b});",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 12
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

