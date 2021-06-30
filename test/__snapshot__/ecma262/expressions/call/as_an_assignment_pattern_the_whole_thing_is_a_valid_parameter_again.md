# Kataw parser test case

## Input

`````js
async({c=3} = {})
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 131,
            "expression": {
                "kind": 134299649,
                "text": "async",
                "rawText": "async",
                "flags": 96,
                "start": 0,
                "end": 5
            },
            "argumentList": {
                "kind": 256,
                "elements": [
                    {
                        "kind": 125,
                        "left": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 301,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "c",
                                            "rawText": "c",
                                            "flags": 96,
                                            "start": 7,
                                            "end": 8
                                        },
                                        "right": {
                                            "kind": 201392130,
                                            "text": 3,
                                            "rawText": "3",
                                            "flags": 96,
                                            "start": 9,
                                            "end": 10
                                        },
                                        "flags": 32,
                                        "start": 7,
                                        "end": 10
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 7,
                                "end": 10
                            },
                            "flags": 48,
                            "start": 6,
                            "end": 11
                        },
                        "operatorToken": {
                            "kind": 4125,
                            "flags": 96,
                            "start": 11,
                            "end": 13
                        },
                        "right": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 15,
                                "end": 15
                            },
                            "flags": 48,
                            "start": 13,
                            "end": 16
                        },
                        "flags": 32,
                        "start": 6,
                        "end": 16
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 0,
                "end": 0
            },
            "flags": 268435490,
            "start": 0,
            "end": 17
        }
    ],
    "isModule": false,
    "source": "async({c=3} = {})",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 17
}
```

### Printed

```javascript

async({ c = 3 } = {})

```

### Diagnostics

```javascript
✔ No errors
```

