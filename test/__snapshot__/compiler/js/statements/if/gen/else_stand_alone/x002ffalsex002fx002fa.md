# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/statements/if/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\statements\if\gen\else_stand_alone
> :: test: else stand alone
> :: case: /false//a
## Input

`````js
else /false//a
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "else /false//a",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097233,
                "expression": {
                    "kind": 65563,
                    "left": {
                        "kind": 4260544,
                        "text": "/false/",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 4,
                        "end": 12
                    },
                    "operator": "/",
                    "right": {
                        "kind": 196712,
                        "text": "a",
                        "rawText": "a",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 13,
                        "end": 14
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 4,
                    "end": 14
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 4,
                "end": 14
            }
        ],
        "transformFlags": 0,
        "flags": 0,
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
            "message": "Declaration or statement expected",
            "start": 0,
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

