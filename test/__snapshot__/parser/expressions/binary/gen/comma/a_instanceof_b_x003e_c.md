# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: a
> :: test: comma
> :: case: a instanceof b > c
## Input

`````js
x, a instanceof b > c
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
                "kind": 132,
                "expressions": [
                    {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 768,
                        "start": 0,
                        "end": 1
                    },
                    {
                        "kind": 198,
                        "left": {
                            "kind": 198,
                            "left": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 768,
                                "start": 2,
                                "end": 4
                            },
                            "operatorToken": {
                                "kind": 4229173,
                                "flags": 768,
                                "start": 4,
                                "end": 15
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "b",
                                "rawText": "b",
                                "flags": 768,
                                "start": 15,
                                "end": 17
                            },
                            "flags": 256,
                            "start": 2,
                            "end": 17
                        },
                        "operatorToken": {
                            "kind": 34883,
                            "flags": 768,
                            "start": 17,
                            "end": 19
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "c",
                            "rawText": "c",
                            "flags": 768,
                            "start": 19,
                            "end": 21
                        },
                        "flags": 256,
                        "start": 2,
                        "end": 21
                    }
                ],
                "flags": 256,
                "start": 0,
                "end": 21
            },
            "flags": 128,
            "start": 0,
            "end": 21
        }
    ],
    "isModule": false,
    "text": "x, a instanceof b > c",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 21
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

