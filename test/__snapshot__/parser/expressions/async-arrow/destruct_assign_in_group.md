# Kataw parser test case

## Input

`````js
async ({x} = y);
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
                "flags": 768,
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
                                        "flags": 768,
                                        "start": 8,
                                        "end": 9
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "start": 8,
                                "end": 9
                            },
                            "flags": 256,
                            "start": 7,
                            "end": 10
                        },
                        "operatorToken": {
                            "kind": 4125,
                            "flags": 768,
                            "start": 10,
                            "end": 12
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 768,
                            "start": 12,
                            "end": 14
                        },
                        "flags": 256,
                        "start": 7,
                        "end": 14
                    }
                ],
                "trailingComma": false,
                "flags": 256,
                "start": 0,
                "end": 0
            },
            "flags": 256,
            "start": 0,
            "end": 15
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 15,
            "end": 16
        }
    ],
    "isModule": false,
    "text": "async ({x} = y);",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 16
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

