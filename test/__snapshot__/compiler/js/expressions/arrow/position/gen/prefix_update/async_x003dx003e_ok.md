# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/expressions/arrow/position/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\expressions\arrow\position\gen\prefix_update
> :: test: prefix update
> :: case: async => ok
## Input

`````js
++async => ok
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "++async => ok",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097233,
                "expression": {
                    "kind": 65715,
                    "operator": "++",
                    "operand": {
                        "kind": 196712,
                        "text": "async",
                        "rawText": "async",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 2,
                        "end": 7
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 7
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 7
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 196712,
                    "text": "ok",
                    "rawText": "ok",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 10,
                    "end": 13
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 10,
                "end": 13
            }
        ],
        "transformFlags": 0,
        "flags": 0,
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
            "message": "';' expected.",
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

