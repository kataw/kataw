# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/expressions/import-call/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\expressions\import-call\gen\new-expr
> :: test: new-expr
> :: case: import(import(x))
## Input

`````js
import(import(x))
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "import(import(x))",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097233,
                "expression": {
                    "kind": 66156,
                    "typeArguments": null,
                    "expression": {
                        "kind": 66156,
                        "typeArguments": null,
                        "expression": {
                            "kind": 196712,
                            "text": "x",
                            "rawText": "x",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 14,
                            "end": 15
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 262152,
                        "parent": null,
                        "emitNode": null,
                        "start": 7,
                        "end": 16
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 262152,
                    "parent": null,
                    "emitNode": null,
                    "start": 0,
                    "end": 17
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 0,
                "end": 17
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "parent": null,
        "emitNode": null,
        "start": 0,
        "end": 17
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "parent": null,
    "emitNode": null,
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 17
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

