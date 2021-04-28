# Kataw parser test case

## Input

`````js
({ responseText: text } = res)
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
                                        "kind": 134299649,
                                        "text": "text",
                                        "rawText": "text",
                                        "flags": 768,
                                        "start": 16,
                                        "end": 21
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "responseText",
                                        "rawText": "responseText",
                                        "flags": 768,
                                        "start": 2,
                                        "end": 15
                                    },
                                    "flags": 256,
                                    "start": 2,
                                    "end": 21
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "start": 2,
                            "end": 21
                        },
                        "flags": 256,
                        "start": 1,
                        "end": 23
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 23,
                        "start": 512,
                        "end": 25
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "res",
                        "rawText": "res",
                        "flags": 768,
                        "start": 25,
                        "end": 29
                    },
                    "flags": 256,
                    "start": 1,
                    "end": 29
                },
                "flags": 256,
                "start": 0,
                "end": 30
            },
            "flags": 128,
            "start": 0,
            "end": 30
        }
    ],
    "isModule": false,
    "text": "({ responseText: text } = res)",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 30
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

