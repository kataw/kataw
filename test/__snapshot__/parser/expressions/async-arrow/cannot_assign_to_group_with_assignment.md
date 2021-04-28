# Kataw parser test case

## Input

`````js
async (a=/i/) = /i/
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
                            "text": "a",
                            "rawText": "a",
                            "flags": 768,
                            "start": 7,
                            "end": 8
                        },
                        "operatorToken": {
                            "kind": 4125,
                            "flags": 512,
                            "start": 8,
                            "end": 9
                        },
                        "right": {
                            "kind": 221,
                            "text": "/i/",
                            "flags": 768,
                            "start": 9,
                            "end": 12
                        },
                        "flags": 256,
                        "start": 7,
                        "end": 12
                    }
                ],
                "trailingComma": false,
                "flags": 256,
                "start": 0,
                "end": 0
            },
            "flags": 256,
            "start": 0,
            "end": 13
        },
        {
            "kind": 120,
            "expression": {
                "kind": 221,
                "text": "/i/",
                "flags": 768,
                "start": 15,
                "end": 19
            },
            "flags": 128,
            "start": 15,
            "end": 19
        }
    ],
    "isModule": false,
    "text": "async (a=/i/) = /i/",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 19
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Statement expected - start: 13, end: 15

```

