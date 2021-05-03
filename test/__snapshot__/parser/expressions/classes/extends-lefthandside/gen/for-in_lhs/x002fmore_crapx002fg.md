# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: for-in lhs
> :: case: /more crap/g
## Input

`````js
for (/more crap/g in x) ;
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
                "start": 17,
                "end": 20
            },
            "kind": 166,
            "initializer": {
                "kind": 221,
                "text": "/more crap/g",
                "flags": 96,
                "start": 5,
                "end": 17
            },
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 20,
                "end": 22
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 23,
                "end": 25
            },
            "flags": 16,
            "start": 0,
            "end": 25
        }
    ],
    "isModule": false,
    "source": "for (/more crap/g in x) ;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 25
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ The left-hand side of a 'for...in' statement must be a variable or a property access. - start: 20, end: 22

```

