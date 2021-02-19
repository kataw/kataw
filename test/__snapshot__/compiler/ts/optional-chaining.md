# Kataw parser test case

## Input

`````js
example.inner?.greet<string>()
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "example.inner?.greet<string>()",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097233,
                "expression": {
                    "kind": 66091,
                    "expression": {
                        "kind": 65708,
                        "member": {
                            "kind": 74424,
                            "member": {
                                "kind": 196712,
                                "text": "example",
                                "rawText": "example",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 0,
                                "end": 7
                            },
                            "expression": {
                                "kind": 196711,
                                "text": "inner",
                                "rawText": "inner",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 8,
                                "end": 13
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 7,
                            "end": 13
                        },
                        "chain": {
                            "kind": 65707,
                            "chain": {
                                "kind": 65719,
                                "chain": null,
                                "expression": {
                                    "kind": 196711,
                                    "text": "greet",
                                    "rawText": "greet",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 15,
                                    "end": 20
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 32,
                                "parent": null,
                                "emitNode": null,
                                "start": 15,
                                "end": 20
                            },
                            "flags": 0,
                            "pos": 15,
                            "end": 20
                        },
                        "flags": 0,
                        "pos": 13,
                        "end": 20
                    },
                    "typeArguments": {
                        "kind": 227,
                        "typeArgumentsList": [
                            {
                                "kind": 4194510,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 21,
                                "end": 27
                            }
                        ],
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 21,
                        "end": 28
                    },
                    "argumentList": {
                        "kind": 3,
                        "elements": [],
                        "trailingComma": false,
                        "transformFlags": 0,
                        "flags": 0,
                        "intersects": false,
                        "parent": null,
                        "emitNode": null,
                        "start": 29,
                        "end": 29
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "parent": null,
                    "emitNode": null,
                    "start": 20,
                    "end": 30
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 0,
                "end": 30
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "parent": null,
        "emitNode": null,
        "start": 0,
        "end": 30
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
    "end": 30
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

