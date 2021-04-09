# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: for-in lhs
> :: case: /crap/
## Input

`````js
for (/crap/ in x) ;
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 166,
            "initializer": {
                "kind": 221,
                "text": "/crap/",
                "autofix": 0,
                "flags": 768,
                "start": 5,
                "end": 11
            },
            "expression": {
                "kind": 81921,
                "value": "x",
                "autofix": 0,
                "flags": 768,
                "start": 14,
                "end": 16
            },
            "statement": {
                "kind": 168,
                "autofix": 0,
                "flags": 128,
                "start": 17,
                "end": 19
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 19
        }
    ],
    "isModule": false,
    "text": "for (/crap/ in x) ;",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 62,
            "error": "Invalid left-hand side in for-in loop",
            "start": 14,
            "end": 16
        }
    ],
    "start": 0,
    "end": 19
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: for-in lhs
> :: case: /crap/
## Input

`````js
for (/crap/ in x) ;
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: for-in lhs
> :: case: /crap/
## Input

`````js
for (/crap/ in x) ;
`````
```

