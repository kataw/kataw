# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/expressions/binary/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\expressions\binary\gen\do
> :: test: do
> :: case: a instanceof b + c
## Input

`````js
do a instanceof b + c while (x);
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "do a instanceof b + c while (x);",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097218,
                "expression": {
                    "kind": 196712,
                    "text": "x",
                    "rawText": "x",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 29,
                    "end": 30
                },
                "statement": {
                    "kind": 2097233,
                    "expression": {
                        "kind": 65563,
                        "left": {
                            "kind": 196712,
                            "text": "a",
                            "rawText": "a",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 2,
                            "end": 4
                        },
                        "operator": "instanceof",
                        "right": {
                            "kind": 65563,
                            "left": {
                                "kind": 196712,
                                "text": "b",
                                "rawText": "b",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 15,
                                "end": 17
                            },
                            "operator": "+",
                            "right": {
                                "kind": 196712,
                                "text": "c",
                                "rawText": "c",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 19,
                                "end": 21
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 17,
                            "end": 21
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 2,
                        "end": 21
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 2,
                    "end": 21
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 32
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 32
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 22,
            "length": 0
        }
    ],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 32
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

