# Kataw parser test case

## Input

`````js
let a
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "let a",
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
                                "text": "a",
                                "rawText": "a",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "parent": null,
                                "emitNode": null,
                                "start": 3,
                                "end": 5
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 3,
                            "end": 5
                        }
                    ],
                    "flags": 16,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 3,
                    "end": 5
                },
                "flags": 16,
                "intersects": false,
                "transformFlags": 769,
                "parent": null,
                "emitNode": null,
                "start": 0,
                "end": 5
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "parent": null,
        "emitNode": null,
        "start": 0,
        "end": 5
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
    "end": 5
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

