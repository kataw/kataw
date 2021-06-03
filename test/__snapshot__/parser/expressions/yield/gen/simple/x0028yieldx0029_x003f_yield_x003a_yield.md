# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-03
- From: kataw8/test\__snapshot__/parser/expressions/yield/autogen.md
- Path: kataw8/test\__snapshot__\parser\expressions\yield\gen\simple
> :: test: simple
> :: case: (yield) ? yield : yield
## Input

`````js
(yield) ? yield : yield
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
                "kind": 197,
                "shortCircuit": {
                    "kind": 121,
                    "expression": {
                        "kind": 134299649,
                        "text": "yield",
                        "rawText": "yield",
                        "flags": 96,
                        "start": 1,
                        "end": 6
                    },
                    "flags": 32,
                    "start": 0,
                    "end": 7
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 64,
                    "start": 7,
                    "end": 9
                },
                "consequent": {
                    "kind": 134299649,
                    "text": "yield",
                    "rawText": "yield",
                    "flags": 96,
                    "start": 9,
                    "end": 15
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 64,
                    "start": 15,
                    "end": 17
                },
                "alternate": {
                    "kind": 134299649,
                    "text": "yield",
                    "rawText": "yield",
                    "flags": 96,
                    "start": 17,
                    "end": 23
                },
                "flags": 32,
                "start": 0,
                "end": 23
            },
            "flags": 16,
            "start": 0,
            "end": 23
        }
    ],
    "isModule": false,
    "source": "(yield) ? yield : yield",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 23
}
```

### Printed

```javascript

(yield) ? yield : yield;
```

### Diagnostics

```javascript
✔ No errors
```

