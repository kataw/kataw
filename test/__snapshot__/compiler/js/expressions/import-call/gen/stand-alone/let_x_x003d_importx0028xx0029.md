# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/expressions/import-call/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\expressions\import-call\gen\stand-alone
> :: test: stand-alone
> :: case: let x = import(x)
## Input

`````js
let x = import(x)
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "let x = import(x)",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 142,
                "isConst": false,
                "binding": {
                    "kind": 31,
                    "bindingList": [
                        {
                            "kind": 141,
                            "binding": {
                                "kind": 131102,
                                "text": "x",
                                "rawText": "x",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 3,
                                "end": 5
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 66156,
                                "typeArguments": null,
                                "expression": {
                                    "kind": 196712,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 15,
                                    "end": 16
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 262152,
                                "start": 7,
                                "end": 17
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 17
                        }
                    ],
                    "flags": 16,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 3,
                    "end": 17
                },
                "flags": 16,
                "intersects": false,
                "transformFlags": 769,
                "start": 0,
                "end": 17
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 17
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
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

