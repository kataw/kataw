# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: y
> :: test: in array
> :: case: a instanceof b > c
## Input

`````js
[ a instanceof b > c ]
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
                                "kind": 198,
                                "left": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 768,
                                    "start": 1,
                                    "end": 3
                                },
                                "operatorToken": {
                                    "kind": 4229173,
                                    "flags": 768,
                                    "start": 3,
                                    "end": 14
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 768,
                                    "start": 14,
                                    "end": 16
                                },
                                "flags": 256,
                                "start": 1,
                                "end": 16
                            },
                            "operatorToken": {
                                "kind": 34883,
                                "flags": 768,
                                "start": 16,
                                "end": 18
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "c",
                                "rawText": "c",
                                "flags": 768,
                                "start": 18,
                                "end": 20
                            },
                            "flags": 256,
                            "start": 1,
                            "end": 20
                        }
                    ],
                    "trailingComma": false,
                    "flags": 256,
                    "start": 1,
                    "end": 20
                },
                "flags": 256,
                "start": 0,
                "end": 22
            },
            "flags": 128,
            "start": 0,
            "end": 22
        }
    ],
    "isModule": false,
    "text": "[ a instanceof b > c ]",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 22
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

