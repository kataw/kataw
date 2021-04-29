# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: stand-alone
> :: case: import(y=x)
## Input

`````js
import(y=x)
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
                "kind": 206,
                "importKeyword": {
                    "kind": 37814364,
                    "flags": 0,
                    "start": 0,
                    "end": 6
                },
                "expression": {
                    "kind": 125,
                    "left": {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "start": 7,
                        "end": 8
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 64,
                        "start": 8,
                        "end": 9
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 9,
                        "end": 10
                    },
                    "flags": 32,
                    "start": 7,
                    "end": 10
                },
                "flags": 32,
                "start": 6,
                "end": 11
            },
            "flags": 16,
            "start": 6,
            "end": 11
        }
    ],
    "isModule": false,
    "source": "import(y=x)",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 11
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

