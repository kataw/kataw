# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: await.b[c] => async
## Input

`````js
await.b[c] => async
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 130,
                "member": {
                    "kind": 129,
                    "member": {
                        "kind": 81921,
                        "text": "await",
                        "rawText": "await",
                        "flags": 768,
                        "start": 0,
                        "end": 5
                    },
                    "expression": {
                        "kind": 81921,
                        "text": "b",
                        "rawText": "b",
                        "flags": 768,
                        "start": 6,
                        "end": 7
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 0,
                    "end": 7
                },
                "expression": {
                    "kind": 81921,
                    "text": "c",
                    "rawText": "c",
                    "flags": 768,
                    "start": 8,
                    "end": 9
                },
                "flags": 256,
                "start": 0,
                "end": 10
            },
            "flags": 128,
            "start": 0,
            "end": 10
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "text": "async",
                "rawText": "async",
                "flags": 768,
                "start": 13,
                "end": 19
            },
            "flags": 128,
            "start": 13,
            "end": 19
        }
    ],
    "isModule": false,
    "text": "await.b[c] => async",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 10,
            "end": 13
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 10,
            "end": 13
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
- Path: e
> :: test: simple
> :: case: await.b[c] => async
## Input

`````js
await.b[c] => async
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: await.b[c] => async
## Input

`````js
await.b[c] => async
`````
```

