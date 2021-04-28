# Kataw parser test case

## Input

`````js
[y<t]({}=y)
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
                "kind": 131,
                "expression": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
                                "kind": 198,
                                "left": {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 768,
                                    "start": 1,
                                    "end": 2
                                },
                                "operatorToken": {
                                    "kind": 536971330,
                                    "flags": 2,
                                    "start": 512,
                                    "end": 3
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "t",
                                    "rawText": "t",
                                    "flags": 768,
                                    "start": 3,
                                    "end": 4
                                },
                                "flags": 256,
                                "start": 1,
                                "end": 4
                            }
                        ],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 1,
                        "end": 4
                    },
                    "flags": 256,
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
                                    "properties": [],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "flags": 0,
                                    "start": 7,
                                    "end": 7
                                },
                                "flags": 256,
                                "start": 6,
                                "end": 8
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 8,
                                "start": 512,
                                "end": 9
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "y",
                                "rawText": "y",
                                "flags": 768,
                                "start": 9,
                                "end": 10
                            },
                            "flags": 256,
                            "start": 6,
                            "end": 10
                        }
                    ],
                    "trailingComma": false,
                    "flags": 256,
                    "start": 6,
                    "end": 10
                },
                "flags": 256,
                "start": 0,
                "end": 11
            },
            "flags": 128,
            "start": 0,
            "end": 11
        }
    ],
    "isModule": false,
    "text": "[y<t]({}=y)",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 11
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

