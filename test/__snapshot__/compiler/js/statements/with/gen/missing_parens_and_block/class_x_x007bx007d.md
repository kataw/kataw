# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-17
- From: kataw8\test\__snapshot__/compiler/js/statements/with/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\statements\with\gen\missing_parens_and_block
> :: test: missing parens and block
> :: case: class x {}
## Input

`````js
with with class x {}
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "with with class x {}",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097400,
                "expression": {
                    "kind": 131322,
                    "text": "",
                    "flags": 6,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 4,
                    "end": 4
                },
                "statement": {
                    "kind": 2097400,
                    "expression": {
                        "kind": 82483,
                        "name": {
                            "kind": 131102,
                            "text": "x",
                            "rawText": "x",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1025,
                            "parent": null,
                            "emitNode": null,
                            "start": 15,
                            "end": 17
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
                            "parent": null,
                            "emitNode": null,
                            "start": 19,
                            "end": 20
                        },
                        "decorators": null,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 1,
                        "parent": null,
                        "emitNode": null,
                        "start": 9,
                        "end": 20
                    },
                    "statement": {
                        "kind": 2097233,
                        "expression": {
                            "kind": 131322,
                            "text": "",
                            "flags": 6,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 20,
                            "end": 20
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "parent": null,
                        "emitNode": null,
                        "start": 20,
                        "end": 20
                    },
                    "flags": 2,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 4,
                    "end": 20
                },
                "flags": 2,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 0,
                "end": 20
            }
        ],
        "transformFlags": 0,
        "flags": 2,
        "intersects": false,
        "parent": null,
        "emitNode": null,
        "start": 0,
        "end": 20
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "'(' expected.",
            "start": 5,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'(' expected.",
            "start": 10,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "')' expected.",
            "start": 19,
            "length": 0
        }
    ],
    "parent": null,
    "emitNode": null,
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

