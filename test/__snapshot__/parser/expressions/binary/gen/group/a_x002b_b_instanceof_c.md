# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: p
> :: test: group
> :: case: a + b instanceof c
## Input

`````js
( a + b instanceof c )
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
                "kind": 121,
                "expression": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "a",
                        "rawText": "a",
                        "flags": 96,
                        "start": 1,
                        "end": 3
                    },
                    "operatorToken": {
                        "kind": 34098,
                        "flags": 64,
                        "start": 3,
                        "end": 5
                    },
                    "right": {
                        "kind": 198,
                        "left": {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
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
                            "text": "c",
                            "rawText": "c",
                            "flags": 96,
                            "start": 18,
                            "end": 20
                        },
                        "flags": 32,
                        "start": 7,
                        "end": 20
                    },
                    "flags": 32,
                    "start": 0,
                    "end": 20
                },
                "flags": 32,
                "start": 0,
                "end": 22
            },
            "flags": 16,
            "start": 0,
            "end": 22
        }
    ],
    "isModule": false,
    "source": "( a + b instanceof c )",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 22
}
```

### Printed

```javascript

(a + b inctanceof c);
```

### Diagnostics

```javascript
✔ No errors
```

