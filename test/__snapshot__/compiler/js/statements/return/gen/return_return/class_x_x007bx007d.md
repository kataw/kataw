# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/statements/return/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\statements\return\gen\return_return
> :: test: return return
> :: case: class x {}
## Input

`````js
return class x {} return
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "return class x {} return",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097346,
                "expression": {
                    "kind": 82483,
                    "name": {
                        "kind": 131102,
                        "text": "x",
                        "rawText": "x",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 1025,
                        "start": 12,
                        "end": 14
                    },
                    "typeParameters": null,
                    "classHeritage": null,
                    "implementClauses": null,
                    "members": {
                        "kind": 50,
                        "elements": [],
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 1,
                        "start": 16,
                        "end": 17
                    },
                    "decorators": null,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1,
                    "start": 6,
                    "end": 17
                },
                "flags": 2,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 17
            },
            {
                "kind": 2097346,
                "expression": null,
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 17,
                "end": 24
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 24
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 18,
            "length": 0
        }
    ],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 24
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```
