# Kataw parser test case

## Input

`````js
const x = y;
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "const x = y;",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
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
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 5,
                                "end": 7
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 196712,
                                "text": "y",
                                "rawText": "y",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 9,
                                "end": 11
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 5,
                            "end": 11
                        }
                    ],
                    "flags": 16,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 5,
                    "end": 11
                },
                "flags": 16,
                "intersects": false,
                "transformFlags": 769,
                "start": 0,
                "end": 12
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 12
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 12
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

