# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: p
> :: test: group
> :: case: a > b instanceof c
## Input

`````js
( a > b instanceof c )
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
                "kind": 121,
                "expression": {
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
                            "kind": 34883,
                            "flags": 768,
                            "start": 3,
                            "end": 5
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 768,
                            "start": 5,
                            "end": 7
                        },
                        "flags": 256,
                        "start": 0,
                        "end": 7
                    },
                    "operatorToken": {
                        "kind": 4229173,
                        "flags": 768,
                        "start": 7,
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
                    "start": 0,
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
    "text": "( a > b instanceof c )",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 22
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

