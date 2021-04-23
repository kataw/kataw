# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: (yield) ? yield : yield
## Input

`````js
(yield) ? yield : yield
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
                "kind": 197,
                "shortCircuit": {
                    "kind": 121,
                    "expression": {
                        "kind": 134299649,
                        "text": "yield",
                        "rawText": "yield",
                        "flags": 768,
                        "start": 1,
                        "end": 6
                    },
                    "flags": 256,
                    "start": 0,
                    "end": 7
                },
                "questionToken": {
                    "kind": 22,
                    "flags": 768,
                    "start": 7,
                    "end": 9
                },
                "consequent": {
                    "kind": 134299649,
                    "text": "yield",
                    "rawText": "yield",
                    "flags": 768,
                    "start": 9,
                    "end": 15
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 768,
                    "start": 15,
                    "end": 17
                },
                "alternate": {
                    "kind": 134299649,
                    "text": "yield",
                    "rawText": "yield",
                    "flags": 768,
                    "start": 17,
                    "end": 23
                },
                "flags": 256,
                "start": 0,
                "end": 23
            },
            "flags": 128,
            "start": 0,
            "end": 23
        }
    ],
    "isModule": false,
    "text": "(yield) ? yield : yield",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 23
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

