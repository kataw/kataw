# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/statements/block/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\statements\block\gen\x007b_triple
> :: test: { triple
> :: case: default
## Input

`````js
{ { { default
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "{ { { default",
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
                                        "statements": [],
                                        "multiline": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 5,
                                        "end": 5
                                    },
                                    "flags": 1,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 3,
                                    "end": 5
                                }
                            ],
                            "multiline": false,
                            "flags": 1,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 5
                        },
                        "flags": 1,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 5
                    }
                ],
                "multiline": false,
                "flags": 1,
                "intersects": false,
                "transformFlags": 0,
                "start": 1,
                "end": 5
            },
            "flags": 1,
            "intersects": false,
            "transformFlags": 0,
            "start": 0,
            "end": 5
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "'}' expected.",
            "start": 6,
            "length": 0
        }
    ],
    "intersects": false,
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 13
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

