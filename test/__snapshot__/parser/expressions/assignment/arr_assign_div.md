# Kataw parser test case

## Input

`````js
[y/[]=x]
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
                                "kind": 35640,
                                "flags": 512,
                                "start": 2,
                                "end": 3
                            },
                            "right": {
                                "kind": 125,
                                "left": {
                                    "kind": 119,
                                    "elementList": {
                                        "kind": 270,
                                        "elements": [],
                                        "trailingComma": false,
                                        "flags": 256,
                                        "start": 4,
                                        "end": 4
                                    },
                                    "flags": 256,
                                    "start": 3,
                                    "end": 5
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 512,
                                    "start": 5,
                                    "end": 6
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 768,
                                    "start": 6,
                                    "end": 7
                                },
                                "flags": 256,
                                "start": 3,
                                "end": 7
                            },
                            "flags": 256,
                            "start": 1,
                            "end": 7
                        }
                    ],
                    "trailingComma": false,
                    "flags": 256,
                    "start": 1,
                    "end": 7
                },
                "flags": 256,
                "start": 0,
                "end": 8
            },
            "flags": 128,
            "start": 0,
            "end": 8
        }
    ],
    "isModule": false,
    "text": "[y/[]=x]",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 8
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

