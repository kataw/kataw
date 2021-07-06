# Kataw parser test case

## Input

`````js
async ({} + 1);
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
                        "kind": 198,
                        "left": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [],
                                "trailingComma": false,
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 8,
                                "end": 8
                            },
                            "flags": 48,
                            "transformFlags": 8,
                            "start": 7,
                            "end": 9
                        },
                        "operatorToken": {
                            "kind": 99634,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 9,
                            "end": 11
                        },
                        "right": {
                            "kind": 201392130,
                            "text": 1,
                            "rawText": "1",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 11,
                            "end": 13
                        },
                        "flags": 48,
                        "transformFlags": 1024,
                        "start": 7,
                        "end": 13
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
            "end": 14
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 14,
            "end": 15
        }
    ],
    "isModule": false,
    "source": "async ({} + 1);",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 15
}
```

### Printed

```javascript

async(
  {} + 1
)
```

### Diagnostics

```javascript
✔ No errors
```

