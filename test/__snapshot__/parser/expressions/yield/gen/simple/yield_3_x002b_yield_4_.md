# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: yield 3 + yield 4;
## Input

`````js
yield 3 + yield 4;
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
                "kind": 134299649,
                "text": "yield",
                "rawText": "yield",
                "flags": 768,
                "start": 0,
                "end": 5
            },
            "flags": 128,
            "start": 0,
            "end": 5
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 134299649,
                    "text": 3,
                    "rawText": "3",
                    "flags": 768,
                    "start": 5,
                    "end": 7
                },
                "operatorToken": {
                    "kind": 34098,
                    "flags": 768,
                    "start": 7,
                    "end": 9
                },
                "right": {
                    "kind": 134299649,
                    "text": "yield",
                    "rawText": "yield",
                    "flags": 768,
                    "start": 9,
                    "end": 15
                },
                "flags": 256,
                "start": 5,
                "end": 15
            },
            "flags": 128,
            "start": 5,
            "end": 15
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": 4,
                "rawText": "4",
                "flags": 768,
                "start": 15,
                "end": 17
            },
            "flags": 128,
            "start": 15,
            "end": 18
        }
    ],
    "isModule": false,
    "text": "yield 3 + yield 4;",
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
@{x2716}@ Unexpected token. - start: 5, end: 7
@{x2716}@ Unexpected token. - start: 15, end: 17

```

