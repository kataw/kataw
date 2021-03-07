# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/statements/switch/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\statements\switch\gen\with_unclosed_array
> :: test: with unclosed array
> :: case: false
## Input

`````js
switch[ false
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "switch[ false",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097362,
                "expression": {
                    "kind": 67207686,
                    "elementList": {
                        "kind": 65605,
                        "elements": [
                            {
                                "kind": 4260391,
                                "text": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 7,
                                "end": 13
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 2,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 7,
                        "end": 13
                    },
                    "flags": 2,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 6,
                    "end": 13
                },
                "caseBlock": {
                    "kind": 2093,
                    "clauses": [],
                    "flags": 2,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 13,
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
            "message": "'(' expected.",
            "start": 6,
            "length": 0
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

