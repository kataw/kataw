# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: a
> :: test: comma
> :: case: a + b / c
## Input

`````js
x, a + b / c
`````

## Output
### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 132,
                "expressions": [
                    {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 0,
                        "end": 1
                    },
                    {
                        "kind": 198,
                        "left": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 2,
                            "end": 4
                        },
                        "operatorToken": {
                            "kind": 34098,
                            "flags": 64,
                            "start": 4,
                            "end": 6
                        },
                        "right": {
                            "kind": 198,
                            "left": {
                                "kind": 134299649,
                                "text": "b",
                                "rawText": "b",
                                "flags": 96,
                                "start": 6,
                                "end": 8
                            },
                            "operatorToken": {
                                "kind": 35640,
                                "flags": 64,
                                "start": 8,
                                "end": 10
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "c",
                                "rawText": "c",
                                "flags": 96,
                                "start": 10,
                                "end": 12
                            },
                            "flags": 32,
                            "start": 8,
                            "end": 12
                        },
                        "flags": 32,
                        "start": 2,
                        "end": 12
                    }
                ],
                "flags": 32,
                "start": 0,
                "end": 12
            },
            "flags": 16,
            "start": 0,
            "end": 12
        }
    ],
    "isModule": false,
    "source": "x, a + b / c",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 12
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

