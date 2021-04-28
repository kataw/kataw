# Kataw parser test case

## Input

`````js
({a:(b) = c} = 1)
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
                "kind": 121,
                "expression": {
                    "kind": 125,
                    "left": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 219,
                                    "left": {
                                        "kind": 125,
                                        "left": {
                                            "kind": 121,
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "b",
                                                "rawText": "b",
                                                "flags": 768,
                                                "start": 5,
                                                "end": 6
                                            },
                                            "flags": 256,
                                            "start": 4,
                                            "end": 7
                                        },
                                        "operatorToken": {
                                            "kind": 4125,
                                            "flags": 7,
                                            "start": 512,
                                            "end": 9
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "c",
                                            "rawText": "c",
                                            "flags": 768,
                                            "start": 9,
                                            "end": 11
                                        },
                                        "flags": 256,
                                        "start": 2,
                                        "end": 11
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 768,
                                        "start": 2,
                                        "end": 3
                                    },
                                    "flags": 256,
                                    "start": 2,
                                    "end": 11
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "start": 2,
                            "end": 11
                        },
                        "flags": 256,
                        "start": 1,
                        "end": 12
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 12,
                        "start": 512,
                        "end": 14
                    },
                    "right": {
                        "kind": 201392130,
                        "text": 1,
                        "rawText": "1",
                        "flags": 768,
                        "start": 14,
                        "end": 16
                    },
                    "flags": 256,
                    "start": 1,
                    "end": 16
                },
                "flags": 256,
                "start": 0,
                "end": 17
            },
            "flags": 128,
            "start": 0,
            "end": 17
        }
    ],
    "isModule": false,
    "text": "({a:(b) = c} = 1)",
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

