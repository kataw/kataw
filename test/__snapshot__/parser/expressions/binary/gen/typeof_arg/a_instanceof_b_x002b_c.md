# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: g
> :: test: typeof arg
> :: case: a instanceof b + c
## Input

`````js
typeof a instanceof b + c
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
                    "kind": 198,
                    "left": {
                        "kind": 126,
                        "operandToken": {
                            "kind": 4259885,
                            "flags": 768,
                            "start": 0,
                            "end": 6
                        },
                        "expression": {
                            "kind": 81921,
                            "text": "a",
                            "rawText": "a",
                            "flags": 768,
                            "start": 6,
                            "end": 8
                        },
                        "flags": 256,
                        "start": 0,
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
                        "text": "b",
                        "rawText": "b",
                        "flags": 768,
                        "start": 19,
                        "end": 21
                    },
                    "flags": 256,
                    "start": 0,
                    "end": 21
                },
                "operatorToken": {
                    "kind": 34098,
                    "flags": 768,
                    "start": 21,
                    "end": 23
                },
                "right": {
                    "kind": 81921,
                    "text": "c",
                    "rawText": "c",
                    "flags": 768,
                    "start": 23,
                    "end": 25
                },
                "flags": 256,
                "start": 0,
                "end": 25
            },
            "flags": 128,
            "start": 0,
            "end": 25
        }
    ],
    "isModule": false,
    "text": "typeof a instanceof b + c",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 25
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: g
> :: test: typeof arg
> :: case: a instanceof b + c
## Input

`````js
typeof a instanceof b + c
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: g
> :: test: typeof arg
> :: case: a instanceof b + c
## Input

`````js
typeof a instanceof b + c
`````
```

