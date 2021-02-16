# Kataw parser test case

## Input

`````js
try {} catch
 {}
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "try {} catch\n {}",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097375,
                "block": {
                    "kind": 2099237,
                    "block": {
                        "kind": 2084,
                        "statements": [],
                        "multiline": false,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "parent": null,
                        "emitNode": null,
                        "start": 5,
                        "end": 5
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 3,
                    "end": 6
                },
                "catchClause": {
                    "kind": 2095,
                    "catchParameter": null,
                    "block": {
                        "kind": 2099237,
                        "block": {
                            "kind": 2084,
                            "statements": [],
                            "multiline": false,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 15,
                            "end": 15
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "parent": null,
                        "emitNode": null,
                        "start": 12,
                        "end": 16
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 16,
                    "parent": null,
                    "emitNode": null,
                    "start": 6,
                    "end": 16
                },
                "finallyBlock": null,
                "flags": 0,
                "intersects": false,
                "transformFlags": 16,
                "parent": null,
                "emitNode": null,
                "start": 0,
                "end": 16
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "parent": null,
        "emitNode": null,
        "start": 0,
        "end": 16
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
    "end": 16
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

