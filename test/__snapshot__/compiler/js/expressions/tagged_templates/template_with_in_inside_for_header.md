# Kataw parser test case

## Input

`````js
for(t`${x in y}`;;);
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "for(t`${x in y}`;;);",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2099288,
                "initializer": {
                    "kind": 66260,
                    "member": {
                        "kind": 196712,
                        "text": "t",
                        "rawText": "t",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "parent": null,
                        "emitNode": null,
                        "start": 4,
                        "end": 5
                    },
                    "typeArguments": null,
                    "template": {
                        "kind": 66261,
                        "spans": [
                            {
                                "kind": 66263,
                                "rawText": "",
                                "text": "",
                                "expression": {
                                    "kind": 65563,
                                    "left": {
                                        "kind": 196712,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 8,
                                        "end": 9
                                    },
                                    "operator": "in",
                                    "right": {
                                        "kind": 196712,
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 12,
                                        "end": 14
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 8,
                                    "end": 14
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1,
                                "parent": null,
                                "emitNode": null,
                                "start": 5,
                                "end": 14
                            }
                        ],
                        "tail": {
                            "kind": 4260568,
                            "rawText": "",
                            "text": "",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1,
                            "parent": null,
                            "emitNode": null,
                            "start": 14,
                            "end": 16
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 1,
                        "parent": null,
                        "emitNode": null,
                        "start": 5,
                        "end": 16
                    },
                    "optional": false,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1,
                    "parent": null,
                    "emitNode": null,
                    "start": 5,
                    "end": 16
                },
                "condition": null,
                "incrementor": null,
                "isVariableDeclarationList": false,
                "statement": {
                    "kind": 6291526,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 19,
                    "end": 20
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 0,
                "end": 20
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "parent": null,
        "emitNode": null,
        "start": 0,
        "end": 20
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

