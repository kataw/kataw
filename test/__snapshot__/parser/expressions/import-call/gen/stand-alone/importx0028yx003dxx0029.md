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
                    "flags": 768,
                    "start": 0,
                    "end": 6
                },
                "expression": {
                    "kind": 125,
                    "left": {
                        "kind": 81921,
                        "text": "y",
                        "rawText": "y",
                        "flags": 768,
                        "start": 7,
                        "end": 8
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 768,
                        "start": 8,
                        "end": 9
                    },
                    "right": {
                        "kind": 81921,
                        "text": "x",
                        "rawText": "x",
                        "flags": 768,
                        "start": 9,
                        "end": 10
                    },
                    "flags": 256,
                    "start": 7,
                    "end": 10
                },
                "flags": 256,
                "start": 6,
                "end": 11
            },
            "flags": 128,
            "start": 6,
            "end": 11
        }
    ],
    "isModule": false,
    "text": "import(y=x)",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 11
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: stand-alone
> :: case: import(y=x)
## Input

`````js
import(y=x)
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: stand-alone
> :: case: import(y=x)
## Input

`````js
import(y=x)
`````
```

