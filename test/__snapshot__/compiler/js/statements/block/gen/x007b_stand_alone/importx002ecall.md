# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/statements/block/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\statements\block\gen\x007b_stand_alone
> :: test: { stand alone
> :: case: import.call
## Input

`````js
{ import.call
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "{ import.call",
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
                            "kind": 2097233,
                            "expression": {
                                "kind": 66232,
                                "member": {
                                    "kind": 4194416,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 32,
                                    "start": 1,
                                    "end": 8
                                },
                                "expression": {
                                    "kind": 196711,
                                    "text": "call",
                                    "rawText": "call",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 9,
                                    "end": 13
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 8,
                                "end": 13,
                                "period": {
                                    "kind": 254,
                                    "pos": 8,
                                    "end": 9
                                }
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 1,
                            "end": 13
                        }
                    ],
                    "multiline": false,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 13
                },
                "flags": 2,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 13
            }
        ],
        "transformFlags": 0,
        "flags": 2,
        "intersects": false,
        "start": 0,
        "end": 13
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "'}' expected.",
            "start": 9,
            "length": 0
        }
    ],
    "incremental": false,
    "flags": 0,
    "intersects": false,
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
