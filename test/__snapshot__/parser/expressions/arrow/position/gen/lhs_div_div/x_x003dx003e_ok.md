# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: v
> :: test: lhs div div
> :: case: x => ok
## Input

`````js
x => ok
/ x / g
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "typeParameters": null,
                "parameters": {
                    "kind": 81921,
                    "value": "x",
                    "autofix": 0,
                    "flags": 768,
                    "start": 0,
                    "end": 1
                },
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 198,
                    "left": {
                        "kind": 198,
                        "left": {
                            "kind": 81921,
                            "value": "ok",
                            "autofix": 0,
                            "flags": 768,
                            "start": 4,
                            "end": 7
                        },
                        "operatorToken": {
                            "kind": 35640,
                            "autofix": 0,
                            "flags": 0,
                            "start": 7,
                            "end": 9
                        },
                        "right": {
                            "kind": 81921,
                            "value": "x",
                            "autofix": 0,
                            "flags": 768,
                            "start": 9,
                            "end": 11
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 4,
                        "end": 11
                    },
                    "operatorToken": {
                        "kind": 35640,
                        "autofix": 0,
                        "flags": 0,
                        "start": 11,
                        "end": 13
                    },
                    "right": {
                        "kind": 81921,
                        "value": "g",
                        "autofix": 0,
                        "flags": 768,
                        "start": 13,
                        "end": 15
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 4,
                    "end": 15
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 15
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 15
        }
    ],
    "isModule": false,
    "text": "x => ok\n/ x / g",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 15
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: v
> :: test: lhs div div
> :: case: x => ok
## Input

`````js
x => ok
/ x / g
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: v
> :: test: lhs div div
> :: case: x => ok
## Input

`````js
x => ok
/ x / g
`````
```

