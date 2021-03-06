# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/statements/block/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\statements\block\gen\with_unclosed_array
> :: test: with unclosed array
> :: case: super[b?.a]
## Input

`````js
{[ super[b?.a]
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "{[ super[b?.a]",
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
                                "kind": 67207686,
                                "elementList": {
                                    "kind": 65605,
                                    "elements": [
                                        {
                                            "kind": 66116,
                                            "member": {
                                                "kind": 4260561,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 2,
                                                "end": 8
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
                                                    "start": 9,
                                                    "end": 10
                                                },
                                                "chain": {
                                                    "kind": 65707,
                                                    "chain": {
                                                        "kind": 65719,
                                                        "chain": null,
                                                        "expression": {
                                                            "kind": 196711,
                                                            "text": "a",
                                                            "rawText": "a",
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "start": 12,
                                                            "end": 13
                                                        },
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 32,
                                                        "start": 12,
                                                        "end": 13
                                                    },
                                                    "flags": 0,
                                                    "pos": 12,
                                                    "end": 13
                                                },
                                                "flags": 0,
                                                "pos": 10,
                                                "end": 13
                                            },
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 8,
                                            "end": 14
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "flags": 2,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 2,
                                    "end": 14
                                },
                                "flags": 2,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 1,
                                "end": 14
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 1,
                            "end": 14
                        }
                    ],
                    "multiline": false,
                    "flags": 2,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 14
                },
                "flags": 2,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 14
            }
        ],
        "transformFlags": 0,
        "flags": 2,
        "intersects": false,
        "start": 0,
        "end": 14
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 13,
            "length": 0
        }
    ],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 14
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

