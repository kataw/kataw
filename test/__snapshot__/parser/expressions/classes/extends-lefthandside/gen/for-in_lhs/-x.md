# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: for-in lhs
> :: case: -x
## Input

`````js
for (-x in x) ;
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "forKeyword": {
                "kind": 37757017,
                "flags": 0,
                "start": 0,
                "end": 3
            },
            "inKeyword": {
                "kind": 21006388,
                "flags": 64,
                "start": 7,
                "end": 10
            },
            "kind": 166,
            "initializer": {
                "kind": 126,
                "operandToken": {
                    "kind": 35379,
                    "flags": 64,
                    "start": 5,
                    "end": 6
                },
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 6,
                    "end": 7
                },
                "flags": 32,
                "start": 5,
                "end": 7
            },
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 10,
                "end": 12
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 13,
                "end": 15
            },
            "flags": 16,
            "start": 0,
            "end": 15
        }
    ],
    "isModule": false,
    "source": "for (-x in x) ;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 15
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Invalid left-hand side in for-in loop - start: 10, end: 12

```

