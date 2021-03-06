# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/statements/block/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\statements\block\gen\with_unclosed_array
> :: test: with unclosed array
> :: case: {{{ &/ function while}}
## Input

`````js
{[ {{{ &/ function while}}
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "{[ {{{ &/ function while}}",
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
                                            "kind": 67224232,
                                            "propertyList": {
                                                "kind": 65722,
                                                "properties": [],
                                                "trailingComma": false,
                                                "multiline": false,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 4,
                                                "end": 4
                                            },
                                            "flags": 2,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 2,
                                            "end": 4
                                        },
                                        {
                                            "kind": 67224232,
                                            "propertyList": {
                                                "kind": 65722,
                                                "properties": [],
                                                "trailingComma": false,
                                                "multiline": false,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 5,
                                                "end": 5
                                            },
                                            "flags": 2,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 4,
                                            "end": 5
                                        },
                                        {
                                            "kind": 65563,
                                            "left": {
                                                "kind": 67224232,
                                                "propertyList": {
                                                    "kind": 65722,
                                                    "properties": [],
                                                    "trailingComma": false,
                                                    "multiline": false,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 6,
                                                    "end": 6
                                                },
                                                "flags": 2,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 5,
                                                "end": 6
                                            },
                                            "operator": "&",
                                            "right": {
                                                "kind": 4260544,
                                                "text": "/ function while}}",
                                                "flags": 524288,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 8,
                                                "end": 26
                                            },
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 5,
                                            "end": 26
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "flags": 2,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 2,
                                    "end": 26
                                },
                                "flags": 2,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 1,
                                "end": 26
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 1,
                            "end": 26
                        }
                    ],
                    "multiline": false,
                    "flags": 2,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 26
                },
                "flags": 2,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 26
            }
        ],
        "transformFlags": 0,
        "flags": 2,
        "intersects": false,
        "start": 0,
        "end": 26
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
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'}' expected.",
            "start": 5,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'}' expected.",
            "start": 7,
            "length": 0
        },
        {
            "kind": 2,
            "source": 0,
            "message": "Unterminated regular expression literal",
            "start": 26,
            "length": 1
        },
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 8,
            "length": 0
        }
    ],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 26
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

