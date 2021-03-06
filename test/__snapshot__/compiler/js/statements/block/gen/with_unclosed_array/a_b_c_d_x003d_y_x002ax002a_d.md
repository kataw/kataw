# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/statements/block/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\statements\block\gen\with_unclosed_array
> :: test: with unclosed array
> :: case: a,b, c d = y ** d
## Input

`````js
{[ a,b, c d = y ** d
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "{[ a,b, c d = y ** d",
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
                                            "kind": 196712,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 2,
                                            "end": 4
                                        },
                                        {
                                            "kind": 196712,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 5,
                                            "end": 6
                                        },
                                        {
                                            "kind": 196712,
                                            "text": "c",
                                            "rawText": "c",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 7,
                                            "end": 9
                                        },
                                        {
                                            "kind": 65550,
                                            "left": {
                                                "kind": 196712,
                                                "text": "d",
                                                "rawText": "d",
                                                "flags": 2,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 9,
                                                "end": 11
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
                                                    "start": 13,
                                                    "end": 15
                                                },
                                                "operator": "**",
                                                "right": {
                                                    "kind": 196712,
                                                    "text": "d",
                                                    "rawText": "d",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 18,
                                                    "end": 20
                                                },
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2,
                                                "start": 13,
                                                "end": 20
                                            },
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 9,
                                            "end": 20
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "flags": 2,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 2,
                                    "end": 20
                                },
                                "flags": 2,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 1,
                                "end": 20
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 1,
                            "end": 20
                        }
                    ],
                    "multiline": false,
                    "flags": 2,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 20
                },
                "flags": 2,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 20
            }
        ],
        "transformFlags": 0,
        "flags": 2,
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
            "message": "',' expected.",
            "start": 10,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 19,
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

