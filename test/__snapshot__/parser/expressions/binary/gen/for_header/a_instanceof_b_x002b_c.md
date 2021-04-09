# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: for header
> :: case: a instanceof b + c
## Input

`````js
for ( a instanceof b + c ;;);
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 165,
            "initializer": {
                "kind": 198,
                "left": {
                    "kind": 198,
                    "left": {
                        "kind": 81921,
                        "value": "a",
                        "autofix": 0,
                        "flags": 768,
                        "start": 5,
                        "end": 7
                    },
                    "operatorToken": {
                        "kind": 4229173,
                        "autofix": 0,
                        "flags": 0,
                        "start": 7,
                        "end": 18
                    },
                    "right": {
                        "kind": 81921,
                        "value": "b",
                        "autofix": 0,
                        "flags": 768,
                        "start": 18,
                        "end": 20
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 0,
                    "end": 20
                },
                "operatorToken": {
                    "kind": 34098,
                    "autofix": 0,
                    "flags": 0,
                    "start": 20,
                    "end": 22
                },
                "right": {
                    "kind": 81921,
                    "value": "c",
                    "autofix": 0,
                    "flags": 768,
                    "start": 22,
                    "end": 24
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 24
            },
            "condition": null,
            "incrementor": null,
            "statement": {
                "kind": 168,
                "autofix": 0,
                "flags": 128,
                "start": 28,
                "end": 29
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 29
        }
    ],
    "isModule": false,
    "text": "for ( a instanceof b + c ;;);",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 29
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: for header
> :: case: a instanceof b + c
## Input

`````js
for ( a instanceof b + c ;;);
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: for header
> :: case: a instanceof b + c
## Input

`````js
for ( a instanceof b + c ;;);
`````
```

