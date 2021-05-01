# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: new-expr
> :: case: import(import(x))
## Input

`````js
import(import(x))
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
                    "kind": 120,
                    "expression": {
                        "kind": 206,
                        "importKeyword": {
                            "kind": 37814364,
                            "flags": 0,
                            "start": 7,
                            "end": 13
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 14,
                            "end": 15
                        },
                        "flags": 32,
                        "start": 13,
                        "end": 16
                    },
                    "flags": 16,
                    "start": 13,
                    "end": 16
                },
                "flags": 32,
                "start": 6,
                "end": 17
            },
            "flags": 16,
            "start": 6,
            "end": 17
        }
    ],
    "isModule": false,
    "source": "import(import(x))",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 17
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Expected a `;` - start: 16, end: 17

```

