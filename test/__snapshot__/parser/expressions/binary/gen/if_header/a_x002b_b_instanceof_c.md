# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: if header
> :: case: a + b instanceof c
## Input

`````js
if ( a + b instanceof c ) ;
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
                    "kind": 81921,
                    "value": "a",
                    "autofix": 0,
                    "flags": 768,
                    "start": 4,
                    "end": 6
                },
                "operatorToken": {
                    "kind": 34098,
                    "autofix": 0,
                    "flags": 0,
                    "start": 6,
                    "end": 8
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 81921,
                        "value": "b",
                        "autofix": 0,
                        "flags": 768,
                        "start": 8,
                        "end": 10
                    },
                    "operatorToken": {
                        "kind": 4229173,
                        "autofix": 0,
                        "flags": 0,
                        "start": 10,
                        "end": 21
                    },
                    "right": {
                        "kind": 81921,
                        "value": "c",
                        "autofix": 0,
                        "flags": 768,
                        "start": 21,
                        "end": 23
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 10,
                    "end": 23
                },
                "autofix": 0,
                "flags": 256,
                "start": 4,
                "end": 23
            },
            "consequent": {
                "kind": 168,
                "autofix": 0,
                "flags": 128,
                "start": 25,
                "end": 27
            },
            "alternate": null,
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 27
        }
    ],
    "isModule": false,
    "text": "if ( a + b instanceof c ) ;",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 27
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: if header
> :: case: a + b instanceof c
## Input

`````js
if ( a + b instanceof c ) ;
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: if header
> :: case: a + b instanceof c
## Input

`````js
if ( a + b instanceof c ) ;
`````
```

