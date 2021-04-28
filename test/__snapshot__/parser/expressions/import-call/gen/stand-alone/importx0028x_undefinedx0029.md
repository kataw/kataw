# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: stand-alone
> :: case: import(x,undefined)
## Input

`````js
import(x,undefined)
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
                        "kind": 206,
                        "importKeyword": {
                            "kind": 37814364,
                            "flags": 768,
                            "start": 0,
                            "end": 6
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 768,
                            "start": 7,
                            "end": 8
                        },
                        "flags": 256,
                        "start": 6,
                        "end": 8
                    },
                    {
                        "kind": 134299649,
                        "text": "undefined",
                        "rawText": "undefined",
                        "flags": 768,
                        "start": 9,
                        "end": 18
                    }
                ],
                "flags": 256,
                "start": 6,
                "end": 18
            },
            "flags": 128,
            "start": 6,
            "end": 18
        }
    ],
    "isModule": false,
    "text": "import(x,undefined)",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 19
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Statement expected - start: 18, end: 19

```

