# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: t
> :: test: in object
> :: case: a > b instanceof c
## Input

`````js
x = { a: a > b instanceof c }
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
                    "flags": 768,
                    "start": 1,
                    "end": 3
                },
                "right": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 219,
                                "left": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 198,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 768,
                                            "start": 8,
                                            "end": 10
                                        },
                                        "operatorToken": {
                                            "kind": 34883,
                                            "flags": 768,
                                            "start": 10,
                                            "end": 12
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 768,
                                            "start": 12,
                                            "end": 14
                                        },
                                        "flags": 256,
                                        "start": 5,
                                        "end": 14
                                    },
                                    "operatorToken": {
                                        "kind": 4229173,
                                        "flags": 768,
                                        "start": 14,
                                        "end": 25
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "c",
                                        "rawText": "c",
                                        "flags": 768,
                                        "start": 25,
                                        "end": 27
                                    },
                                    "flags": 256,
                                    "start": 5,
                                    "end": 27
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 768,
                                    "start": 5,
                                    "end": 7
                                },
                                "flags": 256,
                                "start": 5,
                                "end": 27
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 5,
                        "end": 27
                    },
                    "flags": 256,
                    "start": 3,
                    "end": 29
                },
                "flags": 256,
                "start": 0,
                "end": 29
            },
            "flags": 128,
            "start": 0,
            "end": 29
        }
    ],
    "isModule": false,
    "text": "x = { a: a > b instanceof c }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 29
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

