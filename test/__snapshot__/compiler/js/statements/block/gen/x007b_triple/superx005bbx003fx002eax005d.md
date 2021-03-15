# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/statements/block/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\statements\block\gen\x007b_triple
> :: test: { triple
> :: case: super[b?.a]
## Input

`````js
{ { { super[b?.a]
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "{ { { super[b?.a]",
    "filename": "",
    "statements": [
        {
            "kind": 2099237,
            "block": {
                "kind": 2084,
                "statements": [
                    {
                        "kind": 2099237,
                        "block": {
                            "kind": 2084,
                            "statements": [
                                {
                                    "kind": 2099237,
                                    "block": {
                                        "kind": 2084,
                                        "statements": [
                                            {
                                                "kind": 2097233,
                                                "expression": {
                                                    "kind": 67174980,
                                                    "member": {
                                                        "kind": 4260561,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 5,
                                                        "end": 11
                                                    },
                                                    "expression": {
                                                        "kind": 65708,
                                                        "member": {
                                                            "kind": 196712,
                                                            "text": "b",
                                                            "rawText": "b",
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "start": 12,
                                                            "end": 13
                                                        },
                                                        "chain": {
                                                            "kind": 65707,
                                                            "chain": {
                                                                "kind": 67174583,
                                                                "chain": null,
                                                                "expression": {
                                                                    "kind": 196711,
                                                                    "text": "a",
                                                                    "rawText": "a",
                                                                    "flags": 0,
                                                                    "intersects": false,
                                                                    "transformFlags": 0,
                                                                    "start": 15,
                                                                    "end": 16
                                                                },
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 32,
                                                                "start": 15,
                                                                "end": 16
                                                            },
                                                            "flags": 0,
                                                            "pos": 15,
                                                            "end": 16
                                                        },
                                                        "flags": 0,
                                                        "pos": 13,
                                                        "end": 16
                                                    },
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 11,
                                                    "end": 17
                                                },
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 5,
                                                "end": 17
                                            }
                                        ],
                                        "multiline": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 5,
                                        "end": 17
                                    },
                                    "flags": 1,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 3,
                                    "end": 17
                                }
                            ],
                            "multiline": false,
                            "flags": 1,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 17
                        },
                        "flags": 1,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 17
                    }
                ],
                "multiline": false,
                "flags": 1,
                "intersects": false,
                "transformFlags": 0,
                "start": 1,
                "end": 17
            },
            "flags": 1,
            "intersects": false,
            "transformFlags": 0,
            "start": 0,
            "end": 17
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "'}' expected.",
            "start": 16,
            "length": 0
        }
    ],
    "intersects": false,
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 17
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

