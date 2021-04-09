# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: g
> :: test: delete paren arg
> :: case: x => ok
## Input

`````js
delete (x => ok)
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
                "kind": 126,
                "operandToken": {
                    "kind": 4259886,
                    "autofix": 0,
                    "flags": 0,
                    "start": 0,
                    "end": 6
                },
                "expression": {
                    "kind": 121,
                    "expression": {
                        "kind": 271,
                        "typeParameters": null,
                        "parameters": {
                            "kind": 81921,
                            "value": "x",
                            "autofix": 0,
                            "flags": 768,
                            "start": 8,
                            "end": 9
                        },
                        "asyncToken": null,
                        "returnType": null,
                        "contents": {
                            "kind": 81921,
                            "value": "ok",
                            "autofix": 0,
                            "flags": 768,
                            "start": 12,
                            "end": 15
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 8,
                        "end": 15
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 6,
                    "end": 16
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 16
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 16
        }
    ],
    "isModule": false,
    "text": "delete (x => ok)",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 16
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: g
> :: test: delete paren arg
> :: case: x => ok
## Input

`````js
delete (x => ok)
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: g
> :: test: delete paren arg
> :: case: x => ok
## Input

`````js
delete (x => ok)
`````
```

