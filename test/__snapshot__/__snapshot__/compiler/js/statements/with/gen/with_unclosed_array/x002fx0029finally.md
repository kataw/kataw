# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-16
- From: kataw_dev\test\__snapshot__/compiler/js/statements/with/autogen.md
- Path: kataw_dev\test\__snapshot__\compiler\js\statements\with\gen\with_unclosed_array
> :: test: with unclosed array
> :: case: /)finally
## Input

`````js
with[ /)finally
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "with[ /)finally",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097400,
                "expression": {
                    "kind": 67207686,
                    "elementList": {
                        "kind": 65605,
                        "elements": [
                            {
                                "kind": 4260544,
                                "text": "/)finally",
                                "flags": 524288,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 5,
                                "end": 15
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 2,
                        "intersects": false,
                        "transformFlags": 0,
                        "parent": null,
                        "emitNode": null,
                        "start": 5,
                        "end": 15
                    },
                    "flags": 2,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 4,
                    "end": 15
                },
                "statement": {
                    "kind": 2097233,
                    "expression": {
                        "kind": 131322,
                        "text": "",
                        "flags": 6,
                        "intersects": false,
                        "transformFlags": 0,
                        "parent": null,
                        "emitNode": null,
                        "start": 15,
                        "end": 15
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 15,
                    "end": 15
                },
                "flags": 2,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 0,
                "end": 15
            }
        ],
        "transformFlags": 0,
        "flags": 2,
        "intersects": false,
        "parent": null,
        "emitNode": null,
        "start": 0,
        "end": 15
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "'(' expected.",
            "start": 4,
            "length": 0
        },
        {
            "kind": 2,
            "source": 0,
            "message": "Unterminated regular expression literal",
            "start": 15,
            "length": 1
        },
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 6,
            "length": 0
        }
    ],
    "parent": null,
    "emitNode": null,
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 15
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

