# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: l
> :: test: lexical
> :: case: import(x,y,,)
## Input

`````js
import(x,y,,)
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
                            "flags": 0,
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
                        "text": "y",
                        "rawText": "y",
                        "flags": 768,
                        "start": 9,
                        "end": 10
                    },
                    {
                        "kind": 16637,
                        "text": "",
                        "flags": 12,
                        "start": 11,
                        "end": 11
                    },
                    {
                        "kind": 16637,
                        "text": "",
                        "flags": 12,
                        "start": 12,
                        "end": 12
                    }
                ],
                "flags": 256,
                "start": 6,
                "end": 12
            },
            "flags": 128,
            "start": 6,
            "end": 12
        }
    ],
    "isModule": false,
    "text": "import(x,y,,)",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 13
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Expression expected - start: 11, end: 12
✖ Expression expected - start: 12, end: 13
✖ Statement expected - start: 12, end: 13

```

