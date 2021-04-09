# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: { stand alone
> :: case: super[b?.a]
## Input

`````js
{ super[b?.a]
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 130,
                            "member": {
                                "kind": 225,
                                "autofix": 0,
                                "flags": 768,
                                "start": 1,
                                "end": 7
                            },
                            "expression": {
                                "kind": 205,
                                "member": {
                                    "kind": 81921,
                                    "value": "b",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 8,
                                    "end": 9
                                },
                                "chain": {
                                    "kind": 206,
                                    "chain": {
                                        "kind": 202,
                                        "chain": null,
                                        "expression": {
                                            "kind": 81921,
                                            "value": "a",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 11,
                                            "end": 12
                                        },
                                        "flags": 256,
                                        "start": 11,
                                        "end": 12
                                    },
                                    "flags": 256,
                                    "start": 11,
                                    "end": 12
                                },
                                "flags": 256,
                                "start": 8,
                                "end": 12
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 1,
                            "end": 13
                        },
                        "autofix": 0,
                        "flags": 128,
                        "start": 1,
                        "end": 13
                    }
                ],
                "multiLine": false,
                "autofix": 0,
                "flags": 128,
                "start": 1,
                "end": 13
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 13
        }
    ],
    "isModule": false,
    "text": "{ super[b?.a]",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 73,
            "error": "'super' can only be referenced in members of derived classes or object literal expressions",
            "start": 7,
            "end": 8
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 13,
            "end": 13
        }
    ],
    "start": 0,
    "end": 13
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: { stand alone
> :: case: super[b?.a]
## Input

`````js
{ super[b?.a]
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: { stand alone
> :: case: super[b?.a]
## Input

`````js
{ super[b?.a]
`````
```

