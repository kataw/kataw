# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/statements/block/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\statements\block\gen\x007b_stand_alone
> :: test: { stand alone
> :: case: { /a/iui
## Input

`````js
{ { /a/iui
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "{ { /a/iui",
    "filename": "",
    "scriptBody": {
        "kind": 197,
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
                                            "kind": 4260544,
                                            "text": "/a/iui",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 3,
                                            "end": 10
                                        },
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 3,
                                        "end": 10
                                    }
                                ],
                                "multiline": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 3,
                                "end": 10
                            },
                            "flags": 2,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 1,
                            "end": 10
                        }
                    ],
                    "multiline": false,
                    "flags": 2,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 10
                },
                "flags": 2,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 10
            }
        ],
        "transformFlags": 0,
        "flags": 2,
        "intersects": false,
        "start": 0,
        "end": 10
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "'}' expected.",
            "start": 4,
            "length": 0
        }
    ],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 10
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```
