# Kataw parser test case

## Input

`````js
async (x = z = yield)
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
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 768,
                            "start": 7,
                            "end": 8
                        },
                        "operatorToken": {
                            "kind": 4125,
                            "flags": 768,
                            "start": 8,
                            "end": 10
                        },
                        "right": {
                            "kind": 125,
                            "left": {
                                "kind": 134299649,
                                "text": "z",
                                "rawText": "z",
                                "flags": 768,
                                "start": 10,
                                "end": 12
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 768,
                                "start": 12,
                                "end": 14
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "yield",
                                "rawText": "yield",
                                "flags": 768,
                                "start": 14,
                                "end": 20
                            },
                            "flags": 256,
                            "start": 10,
                            "end": 20
                        },
                        "flags": 256,
                        "start": 7,
                        "end": 20
                    }
                ],
                "trailingComma": false,
                "flags": 256,
                "start": 0,
                "end": 0
            },
            "flags": 256,
            "start": 0,
            "end": 21
        }
    ],
    "isModule": false,
    "text": "async (x = z = yield)",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 21
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

