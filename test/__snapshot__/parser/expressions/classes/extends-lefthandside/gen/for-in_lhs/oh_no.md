# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: for-in lhs
> :: case: oh,no
## Input

`````js
for (oh,no in x) ;
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 768,
                "start": 0,
                "end": 3
            },
            "initializer": {
                "kind": 132,
                "expressions": [
                    {
                        "kind": 134299649,
                        "text": "oh",
                        "rawText": "oh",
                        "flags": 768,
                        "start": 5,
                        "end": 7
                    },
                    {
                        "kind": 198,
                        "left": {
                            "kind": 134299649,
                            "text": "no",
                            "rawText": "no",
                            "flags": 768,
                            "start": 8,
                            "end": 10
                        },
                        "operatorToken": {
                            "kind": 21006388,
                            "flags": 768,
                            "start": 10,
                            "end": 13
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 768,
                            "start": 13,
                            "end": 15
                        },
                        "flags": 256,
                        "start": 8,
                        "end": 15
                    }
                ],
                "flags": 256,
                "start": 0,
                "end": 15
            },
            "condition": null,
            "incrementor": {
                "kind": 16637,
                "text": "",
                "autofix": 0,
                "flags": 12,
                "start": 15,
                "end": 15
            },
            "statement": {
                "kind": 168,
                "flags": 128,
                "start": 16,
                "end": 18
            },
            "flags": 128,
            "start": 0,
            "end": 18
        }
    ],
    "isModule": false,
    "text": "for (oh,no in x) ;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 18
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2716}@ Expression expected - start: 15, end: 16

```

