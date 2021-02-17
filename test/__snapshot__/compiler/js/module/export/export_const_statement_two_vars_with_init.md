# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
export const x = 10, y = 20
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 149,
    "source": "export const x = 10, y = 20",
    "filename": "",
    "moduleBody": {
        "kind": 150,
        "statements": [
            {
                "kind": 76,
                "declaration": {
                    "kind": 142,
                    "isConst": true,
                    "binding": {
                        "kind": 31,
                        "bindingList": [
                            {
                                "kind": 141,
                                "binding": {
                                    "kind": 131102,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 1025,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 12,
                                    "end": 14
                                },
                                "exclamation": false,
                                "type": null,
                                "initializer": {
                                    "kind": 4261540,
                                    "text": 10,
                                    "rawText": "10",
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 16,
                                    "end": 19
                                },
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 12,
                                "end": 19
                            },
                            {
                                "kind": 141,
                                "binding": {
                                    "kind": 131102,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 1025,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 20,
                                    "end": 22
                                },
                                "exclamation": false,
                                "type": null,
                                "initializer": {
                                    "kind": 4261540,
                                    "text": 20,
                                    "rawText": "20",
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 24,
                                    "end": 27
                                },
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 20,
                                "end": 27
                            }
                        ],
                        "flags": 65552,
                        "intersects": false,
                        "transformFlags": 0,
                        "parent": null,
                        "emitNode": null,
                        "start": 12,
                        "end": 27
                    },
                    "flags": 65552,
                    "intersects": false,
                    "transformFlags": 769,
                    "parent": null,
                    "emitNode": null,
                    "start": 0,
                    "end": 27
                },
                "namedExports": null,
                "exportFromClause": null,
                "fromClause": null,
                "isTypeOnly": false,
                "flags": 65536,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 0,
                "end": 27
            }
        ],
        "transformFlags": 0,
        "flags": 65536,
        "intersects": false,
        "parent": null,
        "emitNode": null,
        "start": 0,
        "end": 27
    },
    "jsx": true,
    "printable": true,
    "diagnostics": [],
    "parent": null,
    "emitNode": null,
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 27
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

