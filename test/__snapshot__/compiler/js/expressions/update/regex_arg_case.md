# Kataw parser test case

## Input

`````js
--/b/.c
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "--/b/.c",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097233,
                "expression": {
                    "kind": 65715,
                    "operator": "--",
                    "operand": {
                        "kind": 66232,
                        "member": {
                            "kind": 4260544,
                            "text": "/b/",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 2,
                            "end": 5
                        },
                        "expression": {
                            "kind": 196711,
                            "text": "c",
                            "rawText": "c",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 6,
                            "end": 7
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 5,
                        "end": 7,
                        "period": {
                            "kind": 254,
                            "pos": 5,
                            "end": 6
                        }
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 7
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 7
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 7
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 7
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

