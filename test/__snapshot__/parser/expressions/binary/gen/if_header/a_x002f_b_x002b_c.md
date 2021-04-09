# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: if header
> :: case: a / b + c
## Input

`````js
if ( a / b + c ) ;
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 164,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 198,
                    "left": {
                        "kind": 81921,
                        "value": "a",
                        "autofix": 0,
                        "flags": 768,
                        "start": 4,
                        "end": 6
                    },
                    "operatorToken": {
                        "kind": 35640,
                        "autofix": 0,
                        "flags": 0,
                        "start": 6,
                        "end": 8
                    },
                    "right": {
                        "kind": 81921,
                        "value": "b",
                        "autofix": 0,
                        "flags": 768,
                        "start": 8,
                        "end": 10
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 4,
                    "end": 10
                },
                "operatorToken": {
                    "kind": 34098,
                    "autofix": 0,
                    "flags": 0,
                    "start": 10,
                    "end": 12
                },
                "right": {
                    "kind": 81921,
                    "value": "c",
                    "autofix": 0,
                    "flags": 768,
                    "start": 12,
                    "end": 14
                },
                "autofix": 0,
                "flags": 256,
                "start": 4,
                "end": 14
            },
            "consequent": {
                "kind": 168,
                "autofix": 0,
                "flags": 128,
                "start": 16,
                "end": 18
            },
            "alternate": null,
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 18
        }
    ],
    "isModule": false,
    "text": "if ( a / b + c ) ;",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 18
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: if header
> :: case: a / b + c
## Input

`````js
if ( a / b + c ) ;
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: if header
> :: case: a / b + c
## Input

`````js
if ( a / b + c ) ;
`````
```

