# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/expressions/classes/extends-lefthandside/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\expressions\classes\extends-lefthandside\gen\new_arg
> :: test: new arg
> :: case: oh,no
## Input

`````js
new oh,no
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "new oh,no",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097233,
                "expression": {
                    "kind": 65590,
                    "expressions": [
                        {
                            "kind": 66204,
                            "expression": {
                                "kind": 196712,
                                "text": "oh",
                                "rawText": "oh",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 3,
                                "end": 6
                            },
                            "typeArguments": null,
                            "argumentList": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 32,
                            "start": 0,
                            "end": 6
                        },
                        {
                            "kind": 196712,
                            "text": "no",
                            "rawText": "no",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 7,
                            "end": 9
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 9
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 9
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 9
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 9
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

