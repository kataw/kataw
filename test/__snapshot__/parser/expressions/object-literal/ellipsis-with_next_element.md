# Kataw parser test case

## Input

`````js
x = {...y, b}
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
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "original": "x",
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 1,
                    "end": 3
                },
                "right": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 224,
                                "ellipsisToken": {
                                    "kind": 524302,
                                    "flags": 0,
                                    "start": 5,
                                    "end": 8
                                },
                                "argument": {
                                    "kind": 134299649,
                                    "original": "y",
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 96,
                                    "start": 8,
                                    "end": 9
                                },
                                "flags": 32,
                                "start": 5,
                                "end": 9
                            },
                            {
                                "kind": 134299649,
                                "original": "b",
                                "text": "b",
                                "rawText": " b",
                                "flags": 96,
                                "start": 10,
                                "end": 12
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 5,
                        "end": 12
                    },
                    "flags": 32,
                    "start": 3,
                    "end": 13
                },
                "flags": 32,
                "start": 0,
                "end": 13
            },
            "flags": 16,
            "start": 0,
            "end": 13
        }
    ],
    "isModule": false,
    "source": "x = {...y, b}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 13
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

