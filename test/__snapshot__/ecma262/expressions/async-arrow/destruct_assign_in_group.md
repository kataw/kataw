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
                "transformFlags": 0,
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
                                        "transformFlags": 0,
                                        "start": 8,
                                        "end": 9
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 8,
                                "end": 9
                            },
                            "flags": 48,
                            "transformFlags": 8,
                            "start": 7,
                            "end": 10
                        },
                        "operatorToken": {
                            "kind": 4125,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 10,
                            "end": 12
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 12,
                            "end": 14
                        },
                        "flags": 32,
                        "transformFlags": 128,
                        "start": 7,
                        "end": 14
                    }
                ],
                "trailingComma": false,
                "flags": 34,
                "transformFlags": 0,
                "start": 0,
                "end": 0
            },
            "flags": 268435490,
            "transformFlags": 1,
            "start": 0,
            "end": 15
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 15,
            "end": 16
        }
    ],
    "isModule": false,
    "source": "async ({x} = y);",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
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

