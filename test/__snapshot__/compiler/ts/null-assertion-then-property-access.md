# Kataw parser test case

## Input

`````js
x!.y;
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "x!.y;",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097233,
                "expression": {
                    "kind": 66232,
                    "member": {
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
                    "expression": {
                        "kind": 196711,
                        "text": "y",
                        "rawText": "y",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 3,
                        "end": 4
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 2,
                    "end": 4,
                    "period": {
                        "kind": 254,
                        "pos": 2,
                        "end": 3
                    }
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 5
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 5
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
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
