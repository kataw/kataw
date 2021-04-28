# Kataw parser test case

## Input

`````js
x = {...[a, b]}
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
                    "text": "x",
                    "rawText": "x",
                    "flags": 768,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 1,
                    "start": 512,
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
                                    "flags": 5,
                                    "start": 0,
                                    "end": 8
                                },
                                "argument": {
                                    "kind": 119,
                                    "elementList": {
                                        "kind": 270,
                                        "elements": [
                                            {
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 768,
                                                "start": 9,
                                                "end": 10
                                            },
                                            {
                                                "kind": 134299649,
                                                "text": "b",
                                                "rawText": "b",
                                                "flags": 768,
                                                "start": 11,
                                                "end": 13
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 256,
                                        "start": 9,
                                        "end": 13
                                    },
                                    "flags": 256,
                                    "start": 8,
                                    "end": 14
                                },
                                "flags": 256,
                                "start": 5,
                                "end": 14
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 5,
                        "end": 14
                    },
                    "flags": 256,
                    "start": 3,
                    "end": 15
                },
                "flags": 256,
                "start": 0,
                "end": 15
            },
            "flags": 128,
            "start": 0,
            "end": 15
        }
    ],
    "isModule": false,
    "text": "x = {...[a, b]}",
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

