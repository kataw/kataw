# Kataw parser test case

## Input

`````js
async ({} + 1);
`````

## Output

### Hybrid CST

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
                        "kind": 198,
                        "left": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "start": 8,
                                "end": 8
                            },
                            "flags": 32,
                            "start": 7,
                            "end": 9
                        },
                        "operatorToken": {
                            "kind": 34098,
                            "flags": 64,
                            "start": 9,
                            "end": 11
                        },
                        "right": {
                            "kind": 201392130,
                            "text": 1,
                            "rawText": "1",
                            "flags": 96,
                            "start": 11,
                            "end": 13
                        },
                        "flags": 32,
                        "start": 7,
                        "end": 13
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 0,
                "end": 0
            },
            "flags": 32,
            "start": 0,
            "end": 14
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 14,
            "end": 15
        }
    ],
    "isModule": false,
    "text": "async ({} + 1);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 15
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

