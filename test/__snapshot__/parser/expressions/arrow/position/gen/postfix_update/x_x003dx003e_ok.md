# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: postfix update
> :: case: x => ok
## Input

`````js
x => ok++
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
                    "kind": 127,
                    "operandToken": {
                        "kind": 196635,
                        "autofix": 0,
                        "flags": 0,
                        "start": 7,
                        "end": 9
                    },
                    "expression": {
                        "kind": 81921,
                        "value": "ok",
                        "autofix": 0,
                        "flags": 768,
                        "start": 4,
                        "end": 7
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 4,
                    "end": 9
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 9
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 9
        }
    ],
    "isModule": false,
    "text": "x => ok++",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 9
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: postfix update
> :: case: x => ok
## Input

`````js
x => ok++
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: postfix update
> :: case: x => ok
## Input

`````js
x => ok++
`````
```

