# Kataw parser test case

## Input

`````js
wrap({1:b, 0:d});
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
                                            "kind": 201392130,
                                            "text": 1,
                                            "original": "1",
                                            "rawText": "1",
                                            "flags": 96,
                                            "start": 6,
                                            "end": 7
                                        },
                                        "flags": 32,
                                        "start": 6,
                                        "end": 9
                                    },
                                    {
                                        "kind": 219,
                                        "generatorToken": null,
                                        "asyncKeyword": null,
                                        "getKeyword": null,
                                        "setKeyword": null,
                                        "left": {
                                            "kind": 134299649,
                                            "original": "d",
                                            "text": "d",
                                            "rawText": "d",
                                            "flags": 96,
                                            "start": 13,
                                            "end": 14
                                        },
                                        "right": {
                                            "kind": 201392130,
                                            "text": 0,
                                            "original": "0",
                                            "rawText": " 0",
                                            "flags": 96,
                                            "start": 10,
                                            "end": 12
                                        },
                                        "flags": 32,
                                        "start": 10,
                                        "end": 14
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 6,
                                "end": 14
                            },
                            "flags": 32,
                            "start": 5,
                            "end": 15
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 5,
                    "end": 15
                },
                "flags": 32,
                "start": 0,
                "end": 16
            },
            "flags": 16,
            "start": 0,
            "end": 17
        }
    ],
    "isModule": false,
    "source": "wrap({1:b, 0:d});",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 17
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

