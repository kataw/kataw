# Kataw parser test case

## Input

`````js
({ responseText: text } = res)
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
                    "kind": 125,
                    "left": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 219,
                                    "asteriskToken": null,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "responseText",
                                        "rawText": "responseText",
                                        "flags": 96,
                                        "start": 2,
                                        "end": 15
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "text",
                                        "rawText": "text",
                                        "flags": 96,
                                        "start": 16,
                                        "end": 21
                                    },
                                    "flags": 32,
                                    "start": 2,
                                    "end": 21
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 2,
                            "end": 21
                        },
                        "flags": 48,
                        "start": 1,
                        "end": 23
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "start": 23,
                        "end": 25
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "res",
                        "rawText": "res",
                        "flags": 96,
                        "start": 25,
                        "end": 29
                    },
                    "flags": 32,
                    "start": 1,
                    "end": 29
                },
                "flags": 0,
                "start": 34,
                "end": 30
            },
            "flags": 16,
            "start": 0,
            "end": 30
        }
    ],
    "isModule": false,
    "source": "({ responseText: text } = res)",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 30
}
```

### Printed

```javascript

({responseText: text} = res);
```

### Diagnostics

```javascript
✔ No errors
```

