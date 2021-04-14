# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: a
> :: test: comma
> :: case: a > b instanceof c
## Input

`````js
x, a > b instanceof c
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
                        "kind": 81921,
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
                                "kind": 81921,
                                "text": "a",
                                "rawText": "a",
                                "flags": 768,
                                "start": 2,
                                "end": 4
                            },
                            "operatorToken": {
                                "kind": 34883,
                                "flags": 768,
                                "start": 4,
                                "end": 6
                            },
                            "right": {
                                "kind": 81921,
                                "text": "b",
                                "rawText": "b",
                                "flags": 768,
                                "start": 6,
                                "end": 8
                            },
                            "flags": 256,
                            "start": 2,
                            "end": 8
                        },
                        "operatorToken": {
                            "kind": 4229173,
                            "flags": 768,
                            "start": 8,
                            "end": 19
                        },
                        "right": {
                            "kind": 81921,
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
    "text": "x, a > b instanceof c",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 21
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: a
> :: test: comma
> :: case: a > b instanceof c
## Input

`````js
x, a > b instanceof c
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: a
> :: test: comma
> :: case: a > b instanceof c
## Input

`````js
x, a > b instanceof c
`````
```

