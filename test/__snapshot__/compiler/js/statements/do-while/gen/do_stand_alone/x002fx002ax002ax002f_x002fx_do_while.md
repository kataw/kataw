# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-17
- From: kataw8\test\__snapshot__/compiler/js/statements/do-while/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\statements\do-while\gen\do_stand_alone
> :: test: do stand alone
> :: case: /**/ /x do while
## Input

`````js
do /**/ /x do while
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "do /**/ /x do while",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097218,
                "expression": {
                    "kind": 131322,
                    "text": "",
                    "flags": 6,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 19,
                    "end": 19
                },
                "statement": {
                    "kind": 2097233,
                    "expression": {
                        "kind": 4260544,
                        "text": "/x do while",
                        "flags": 524288,
                        "intersects": false,
                        "transformFlags": 0,
                        "parent": null,
                        "emitNode": null,
                        "start": 2,
                        "end": 19
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 2,
                    "end": 19
                },
                "flags": 2,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 0,
                "end": 19
            }
        ],
        "transformFlags": 0,
        "flags": 2,
        "intersects": false,
        "parent": null,
        "emitNode": null,
        "start": 0,
        "end": 19
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 0,
            "message": "Unterminated regular expression literal",
            "start": 19,
            "length": 1
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'while' expected.",
            "start": 8,
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
    "end": 19
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

