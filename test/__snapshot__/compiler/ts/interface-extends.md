# Kataw parser test case

## Input

`````js
interface I extends X.Y<Z> {}
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 149,
    "source": "interface I extends X.Y<Z> {}",
    "filename": "",
    "moduleBody": {
        "kind": 150,
        "statements": [
            {
                "kind": 119,
                "name": {
                    "kind": 196712,
                    "text": "I",
                    "rawText": "I",
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 9,
                    "end": 11
                },
                "typeParameters": null,
                "heritageClauses": {
                    "kind": 102,
                    "clauses": [
                        {
                            "kind": 101,
                            "type": {
                                "kind": 236,
                                "typeName": {
                                    "kind": 191,
                                    "left": {
                                        "kind": 196711,
                                        "text": "X",
                                        "rawText": "X",
                                        "flags": 65536,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 19,
                                        "end": 21
                                    },
                                    "right": {
                                        "kind": 196711,
                                        "text": "Y",
                                        "rawText": "Y",
                                        "flags": 65536,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 22,
                                        "end": 23
                                    },
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 19,
                                    "end": 23
                                },
                                "typeArguments": {
                                    "kind": 227,
                                    "typeArgumentsList": [
                                        {
                                            "kind": 236,
                                            "typeName": {
                                                "kind": 196711,
                                                "text": "Z",
                                                "rawText": "Z",
                                                "flags": 65536,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 24,
                                                "end": 25
                                            },
                                            "typeArguments": null,
                                            "flags": 65536,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 24,
                                            "end": 26
                                        }
                                    ],
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 24,
                                    "end": 25
                                },
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 19,
                                "end": 28
                            },
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 19,
                            "end": 26
                        }
                    ],
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "parent": null,
                    "emitNode": null,
                    "start": 19,
                    "end": 26
                },
                "objectTypeMembers": {
                    "kind": 169,
                    "members": [],
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "parent": null,
                    "emitNode": null,
                    "start": 28,
                    "end": 28
                },
                "flags": 65536,
                "intersects": false,
                "transformFlags": 2097152,
                "parent": null,
                "emitNode": null,
                "start": 0,
                "end": 29
            }
        ],
        "transformFlags": 0,
        "flags": 65536,
        "intersects": false,
        "parent": null,
        "emitNode": null,
        "start": 0,
        "end": 29
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
    "end": 29
}
```

### Printed


```javascript

interface I extends X.Y<Z>  {
}

```

### Diagnostics


```javascript
@{x2714}@ No errors
```

