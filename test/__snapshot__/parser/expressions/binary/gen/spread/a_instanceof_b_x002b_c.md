# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: d
> :: test: spread
> :: case: a instanceof b + c
## Input

`````js
[ ... a instanceof b + c ]
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
                            "kind": 223,
                            "ellipsisToken": {
                                "kind": 524302,
                                "flags": 0,
                                "start": 1,
                                "end": 5
                            },
                            "argument": {
                                "kind": 198,
                                "left": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 134299649,
                                        "original": "a",
                                        "text": "a",
                                        "rawText": " a",
                                        "flags": 96,
                                        "start": 5,
                                        "end": 7
                                    },
                                    "operatorToken": {
                                        "kind": 4229173,
                                        "flags": 64,
                                        "start": 7,
                                        "end": 18
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "original": "b",
                                        "text": "b",
                                        "rawText": " b",
                                        "flags": 96,
                                        "start": 18,
                                        "end": 20
                                    },
                                    "flags": 32,
                                    "start": 5,
                                    "end": 20
                                },
                                "operatorToken": {
                                    "kind": 34098,
                                    "flags": 64,
                                    "start": 20,
                                    "end": 22
                                },
                                "right": {
                                    "kind": 134299649,
                                    "original": "c",
                                    "text": "c",
                                    "rawText": " c",
                                    "flags": 96,
                                    "start": 22,
                                    "end": 24
                                },
                                "flags": 32,
                                "start": 5,
                                "end": 24
                            },
                            "flags": 32,
                            "start": 1,
                            "end": 24
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 1,
                    "end": 24
                },
                "flags": 32,
                "start": 0,
                "end": 26
            },
            "flags": 16,
            "start": 0,
            "end": 26
        }
    ],
    "isModule": false,
    "source": "[ ... a instanceof b + c ]",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 26
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

