# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/expressions/arrow/position/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\expressions\arrow\position\gen\template_tail
> :: test: template tail
> :: case: async x => ok
## Input

`````js
`a ${async x => ok} b`.length
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "`a ${async x => ok} b`.length",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097233,
                "expression": {
                    "kind": 66232,
                    "member": {
                        "kind": 66261,
                        "spans": [
                            {
                                "kind": 66263,
                                "rawText": "a ",
                                "text": "a ",
                                "expression": {
                                    "kind": 65552,
                                    "typeParameters": null,
                                    "arrowParameters": {
                                        "kind": 65545,
                                        "elements": [
                                            {
                                                "kind": 89,
                                                "ellipsis": false,
                                                "binding": {
                                                    "kind": 131102,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 1025,
                                                    "start": 10,
                                                    "end": 12
                                                },
                                                "isOptional": false,
                                                "type": null,
                                                "initializer": null,
                                                "decorators": null,
                                                "accessModifier": null,
                                                "isReadOnly": false,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 1,
                                                "start": 15,
                                                "end": 12
                                            }
                                        ],
                                        "type": null,
                                        "accessModifier": null,
                                        "trailingComma": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 5,
                                        "end": 12
                                    },
                                    "contents": {
                                        "kind": 196712,
                                        "text": "ok",
                                        "rawText": "ok",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 15,
                                        "end": 18
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 5,
                                    "end": 18
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1,
                                "start": 0,
                                "end": 18
                            }
                        ],
                        "tail": {
                            "kind": 4260568,
                            "rawText": " b",
                            "text": " b",
                            "literal": false,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 18,
                            "end": 22
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 1,
                        "start": 0,
                        "end": 22
                    },
                    "expression": {
                        "kind": 196711,
                        "text": "length",
                        "rawText": "length",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 23,
                        "end": 29
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 22,
                    "end": 29,
                    "period": {
                        "kind": 254,
                        "pos": 22,
                        "end": 23
                    }
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 29
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 29
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 29
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

