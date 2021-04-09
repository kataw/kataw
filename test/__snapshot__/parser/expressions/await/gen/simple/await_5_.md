# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: await 5;
## Input

`````js
await 5;
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
                "kind": 81921,
                "value": "await",
                "autofix": 0,
                "flags": 768,
                "start": 0,
                "end": 5
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 5
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 5,
                "autofix": 0,
                "flags": 768,
                "start": 5,
                "end": 7
            },
            "autofix": 0,
            "flags": 128,
            "start": 5,
            "end": 8
        }
    ],
    "isModule": false,
    "text": "await 5;",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 5,
            "end": 7
        }
    ],
    "start": 0,
    "end": 8
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: await 5;
## Input

`````js
await 5;
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: await 5;
## Input

`````js
await 5;
`````
```

