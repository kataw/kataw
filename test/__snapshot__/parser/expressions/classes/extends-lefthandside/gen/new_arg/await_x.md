# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: g
> :: test: new arg
> :: case: await x
## Input

`````js
new await x
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
                "kind": 210,
                "expression": {
                    "kind": 81921,
                    "value": "await",
                    "autofix": 0,
                    "flags": 768,
                    "start": 3,
                    "end": 9
                },
                "argumentList": null,
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 9
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 9
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": "x",
                "autofix": 0,
                "flags": 768,
                "start": 9,
                "end": 11
            },
            "autofix": 0,
            "flags": 128,
            "start": 9,
            "end": 11
        }
    ],
    "isModule": false,
    "text": "new await x",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 9,
            "end": 11
        }
    ],
    "start": 0,
    "end": 11
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: g
> :: test: new arg
> :: case: await x
## Input

`````js
new await x
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: g
> :: test: new arg
> :: case: await x
## Input

`````js
new await x
`````
```

