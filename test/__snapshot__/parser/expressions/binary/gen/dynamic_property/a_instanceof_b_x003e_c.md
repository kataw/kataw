# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: y
> :: test: dynamic property
> :: case: a instanceof b > c
## Input

`````js
foo[ a instanceof b > c ]
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
                "kind": 130,
                "member": {
                    "kind": 134299649,
                    "original": "foo",
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 96,
                    "start": 0,
                    "end": 3
                },
                "expression": {
                    "kind": 198,
                    "left": {
                        "kind": 198,
                        "left": {
                            "kind": 134299649,
                            "original": "a",
                            "text": "a",
                            "rawText": " a",
                            "flags": 96,
                            "start": 4,
                            "end": 6
                        },
                        "operatorToken": {
                            "kind": 4229173,
                            "flags": 64,
                            "start": 6,
                            "end": 17
                        },
                        "right": {
                            "kind": 134299649,
                            "original": "b",
                            "text": "b",
                            "rawText": " b",
                            "flags": 96,
                            "start": 17,
                            "end": 19
                        },
                        "flags": 32,
                        "start": 4,
                        "end": 19
                    },
                    "operatorToken": {
                        "kind": 34883,
                        "flags": 64,
                        "start": 19,
                        "end": 21
                    },
                    "right": {
                        "kind": 134299649,
                        "original": "c",
                        "text": "c",
                        "rawText": " c",
                        "flags": 96,
                        "start": 21,
                        "end": 23
                    },
                    "flags": 32,
                    "start": 4,
                    "end": 23
                },
                "flags": 32,
                "start": 0,
                "end": 25
            },
            "flags": 16,
            "start": 0,
            "end": 25
        }
    ],
    "isModule": false,
    "source": "foo[ a instanceof b > c ]",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 25
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

