# Kataw parser test case

## Input

`````js
y/[]=x
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
                "kind": 198,
                "left": {
                    "kind": 134299649,
                    "text": "y",
                    "rawText": "y",
                    "flags": 768,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 35640,
                    "flags": 1,
                    "start": 512,
                    "end": 2
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
                            "start": 3,
                            "end": 3
                        },
                        "flags": 256,
                        "start": 2,
                        "end": 4
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 4,
                        "start": 512,
                        "end": 5
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 768,
                        "start": 5,
                        "end": 6
                    },
                    "flags": 256,
                    "start": 2,
                    "end": 6
                },
                "flags": 256,
                "start": 0,
                "end": 6
            },
            "flags": 128,
            "start": 0,
            "end": 6
        }
    ],
    "isModule": false,
    "text": "y/[]=x",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 6
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

