# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/statements/block/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\statements\block\gen\unclosed_parens
> :: test: unclosed parens
> :: case: let const x = var
## Input

`````js
{( let const x = var
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "{( let const x = var",
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
                                "kind": 66224,
                                "expression": {
                                    "kind": 196712,
                                    "text": "let",
                                    "rawText": "let",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 2,
                                    "end": 6
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 1,
                                "end": 6
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 1,
                            "end": 6
                        },
                        {
                            "kind": 142,
                            "isConst": true,
                            "binding": {
                                "kind": 31,
                                "bindingList": [
                                    {
                                        "kind": 141,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1025,
                                            "start": 12,
                                            "end": 14
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": {
                                            "kind": 131322,
                                            "text": "",
                                            "flags": 6,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 16,
                                            "end": 16
                                        },
                                        "flags": 2,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 12,
                                        "end": 16
                                    }
                                ],
                                "flags": 18,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 12,
                                "end": 16
                            },
                            "flags": 18,
                            "intersects": false,
                            "transformFlags": 769,
                            "start": 6,
                            "end": 16
                        },
                        {
                            "kind": 2097397,
                            "declarationList": {
                                "kind": 244,
                                "declarations": [],
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 20,
                                "end": 20
                            },
                            "flags": 2,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 16,
                            "end": 20
                        }
                    ],
                    "multiline": false,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 20
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 20
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 20
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 7,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 17,
            "length": 0
        }
    ],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 20
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

