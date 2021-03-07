# Kataw parser test case

## Input

`````js
x! / 2
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "x! / 2",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097233,
                "expression": {
                    "kind": 65563,
                    "left": {
                        "kind": 74398,
                        "expression": {
                            "kind": 196712,
                            "text": "x",
                            "rawText": "x",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 0,
                            "end": 1
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 1,
                        "end": 2
                    },
                    "operator": "/",
                    "right": {
                        "kind": 4261540,
                        "text": 2,
                        "rawText": "2",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 4,
                        "end": 6
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 6
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 6
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 6
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 6
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

