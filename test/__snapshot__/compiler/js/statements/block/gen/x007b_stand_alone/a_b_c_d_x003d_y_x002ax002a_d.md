# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/statements/block/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\statements\block\gen\x007b_stand_alone
> :: test: { stand alone
> :: case: a,b, c d = y ** d
## Input

`````js
{ a,b, c d = y ** d
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "{ a,b, c d = y ** d",
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
                                "kind": 65590,
                                "expressions": [
                                    {
                                        "kind": 196712,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 1,
                                        "end": 3
                                    },
                                    {
                                        "kind": 196712,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 4,
                                        "end": 5
                                    },
                                    {
                                        "kind": 196712,
                                        "text": "c",
                                        "rawText": "c",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 6,
                                        "end": 8
                                    }
                                ],
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 1,
                                "end": 8
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 1,
                            "end": 8
                        },
                        {
                            "kind": 2097233,
                            "expression": {
                                "kind": 65550,
                                "left": {
                                    "kind": 196712,
                                    "text": "d",
                                    "rawText": "d",
                                    "flags": 2,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 8,
                                    "end": 10
                                },
                                "operator": "=",
                                "right": {
                                    "kind": 65563,
                                    "left": {
                                        "kind": 196712,
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 12,
                                        "end": 14
                                    },
                                    "operator": "**",
                                    "right": {
                                        "kind": 196712,
                                        "text": "d",
                                        "rawText": "d",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 17,
                                        "end": 19
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2,
                                    "start": 12,
                                    "end": 19
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 8,
                                "end": 19
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 8,
                            "end": 19
                        }
                    ],
                    "multiline": false,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 19
                },
                "flags": 2,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 19
            }
        ],
        "transformFlags": 0,
        "flags": 2,
        "intersects": false,
        "start": 0,
        "end": 19
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 9,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'}' expected.",
            "start": 18,
            "length": 0
        }
    ],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 19
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

