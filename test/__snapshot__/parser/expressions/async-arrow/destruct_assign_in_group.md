# Kataw parser test case

## Input

`````js
async ({x} = y);
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
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 8,
                                        "end": 9
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 8,
                                "end": 9
                            },
                            "flags": 32,
                            "start": 7,
                            "end": 10
                        },
                        "operatorToken": {
                            "kind": 4125,
                            "flags": 64,
                            "start": 10,
                            "end": 12
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 12,
                            "end": 14
                        },
                        "flags": 32,
                        "start": 7,
                        "end": 14
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 0,
                "end": 0
            },
            "flags": 268435488,
            "start": 0,
            "end": 15
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 15,
            "end": 16
        }
    ],
    "isModule": false,
    "source": "async ({x} = y);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 16
}
```

### Printed

```javascript

async({ x } = y)

```

### Diagnostics

```javascript
✔ No errors
```

