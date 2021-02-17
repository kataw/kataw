# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-17
- From: kataw8\test\__snapshot__/compiler/js/statements/throw/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\statements\throw\gen\throw_throw
> :: test: throw throw
> :: case: /)finally
## Input

`````js
throw /)finally throw
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "throw /)finally throw",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097373,
                "expression": {
                    "kind": 4260544,
                    "text": "/)finally throw",
                    "flags": 524288,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 5,
                    "end": 21
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 0,
                "end": 21
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "parent": null,
        "emitNode": null,
        "start": 0,
        "end": 21
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 0,
            "message": "Unterminated regular expression literal",
            "start": 21,
            "length": 1
        }
    ],
    "parent": null,
    "emitNode": null,
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 21
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

