# Kataw parser test case

## Input

`````js
declare enum E {
 e = 3
}
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 149,
    "source": "declare enum E {\n e = 3\n}",
    "filename": "",
    "moduleBody": {
        "kind": 150,
        "statements": [
            {
                "kind": 71,
                "name": {
                    "kind": 196712,
                    "text": "E",
                    "rawText": "E",
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 12,
                    "end": 14
                },
                "members": {
                    "kind": 73,
                    "enumMembersList": [
                        {
                            "kind": 72,
                            "name": {
                                "kind": 196711,
                                "text": "e",
                                "rawText": "e",
                                "flags": 81920,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 16,
                                "end": 19
                            },
                            "initializer": {
                                "kind": 4261540,
                                "text": 3,
                                "rawText": "3",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 21,
                                "end": 23
                            },
                            "flags": 81920,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 16,
                            "end": 23
                        }
                    ],
                    "flags": 81920,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "parent": null,
                    "emitNode": null,
                    "start": 16,
                    "end": 23
                },
                "isConst": false,
                "flags": 201392128,
                "intersects": false,
                "transformFlags": 2097152,
                "parent": null,
                "emitNode": null,
                "start": 7,
                "end": 25
            }
        ],
        "transformFlags": 0,
        "flags": 65536,
        "intersects": false,
        "parent": null,
        "emitNode": null,
        "start": 0,
        "end": 25
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
    "end": 25
}
```

### Printed


```javascript

declare enum E {
    e = 3
}

```

### Diagnostics


```javascript
@{x2714}@ No errors
```

