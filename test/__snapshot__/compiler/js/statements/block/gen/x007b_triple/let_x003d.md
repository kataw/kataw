# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/statements/block/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\statements\block\gen\x007b_triple
> :: test: { triple
> :: case: let  =
## Input

`````js
{ { { let  =
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "{ { { let  =",
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
                                                    "kind": 65550,
                                                    "left": {
                                                        "kind": 196712,
                                                        "text": "let",
                                                        "rawText": "let",
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 5,
                                                        "end": 9
                                                    },
                                                    "operator": "=",
                                                    "right": {
                                                        "kind": 131322,
                                                        "text": "",
                                                        "flags": 3,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 12,
                                                        "end": 12
                                                    },
                                                    "flags": 1,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 5,
                                                    "end": 12
                                                },
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 5,
                                                "end": 12
                                            }
                                        ],
                                        "multiline": false,
                                        "flags": 1,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 5,
                                        "end": 12
                                    },
                                    "flags": 1,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 3,
                                    "end": 12
                                }
                            ],
                            "multiline": false,
                            "flags": 1,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 12
                        },
                        "flags": 1,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 12
                    }
                ],
                "multiline": false,
                "flags": 1,
                "intersects": false,
                "transformFlags": 0,
                "start": 1,
                "end": 12
            },
            "flags": 1,
            "intersects": false,
            "transformFlags": 0,
            "start": 0,
            "end": 12
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 11,
            "length": 0
        }
    ],
    "intersects": false,
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 12
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

