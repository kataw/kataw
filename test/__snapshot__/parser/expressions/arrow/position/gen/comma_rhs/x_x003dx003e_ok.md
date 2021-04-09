# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: comma rhs
> :: case: x => ok
## Input

`````js
a, x => ok
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
                "kind": 132,
                "expressions": [
                    {
                        "kind": 81921,
                        "value": "a",
                        "autofix": 0,
                        "flags": 768,
                        "start": 0,
                        "end": 1
                    },
                    {
                        "kind": 271,
                        "typeParameters": null,
                        "parameters": {
                            "kind": 81921,
                            "value": "x",
                            "autofix": 0,
                            "flags": 768,
                            "start": 2,
                            "end": 4
                        },
                        "asyncToken": null,
                        "returnType": null,
                        "contents": {
                            "kind": 81921,
                            "value": "ok",
                            "autofix": 0,
                            "flags": 768,
                            "start": 7,
                            "end": 10
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 2,
                        "end": 10
                    }
                ],
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 10
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 10
        }
    ],
    "isModule": false,
    "text": "a, x => ok",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 10
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: comma rhs
> :: case: x => ok
## Input

`````js
a, x => ok
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: comma rhs
> :: case: x => ok
## Input

`````js
a, x => ok
`````
```

