# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: for-in lhs
> :: case: x in y
## Input

`````js
for (x in y in x) ;
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
                "flags": 768,
                "start": 0,
                "end": 3
            },
            "kind": 166,
            "initializer": {
                "kind": 81921,
                "text": "x",
                "rawText": "x",
                "flags": 768,
                "start": 5,
                "end": 6
            },
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 81921,
                    "text": "y",
                    "rawText": "y",
                    "flags": 768,
                    "start": 9,
                    "end": 11
                },
                "operatorToken": {
                    "kind": 21006388,
                    "flags": 768,
                    "start": 11,
                    "end": 14
                },
                "right": {
                    "kind": 81921,
                    "text": "x",
                    "rawText": "x",
                    "flags": 768,
                    "start": 14,
                    "end": 16
                },
                "flags": 256,
                "start": 9,
                "end": 16
            },
            "statement": {
                "kind": 168,
                "flags": 128,
                "start": 17,
                "end": 19
            },
            "flags": 128,
            "start": 0,
            "end": 19
        }
    ],
    "isModule": false,
    "text": "for (x in y in x) ;",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
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
> :: case: x in y
## Input

`````js
for (x in y in x) ;
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: for-in lhs
> :: case: x in y
## Input

`````js
for (x in y in x) ;
`````
```

