# Kataw parser test case

## Input

`````js
a = b + c = d
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "a = b + c = d",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097233,
                "expression": {
                    "kind": 65550,
                    "left": {
                        "kind": 196712,
                        "text": "a",
                        "rawText": "a",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 1
                    },
                    "operator": "=",
                    "right": {
                        "kind": 65550,
                        "left": {
                            "kind": 65563,
                            "left": {
                                "kind": 196712,
                                "text": "b",
                                "rawText": "b",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 3,
                                "end": 5
                            },
                            "operator": "+",
                            "right": {
                                "kind": 196712,
                                "text": "c",
                                "rawText": "c",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 7,
                                "end": 9
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 9
                        },
                        "operator": "=",
                        "right": {
                            "kind": 196712,
                            "text": "d",
                            "rawText": "d",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 11,
                            "end": 13
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 3,
                        "end": 13
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 13
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 13
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 13
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 13
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

