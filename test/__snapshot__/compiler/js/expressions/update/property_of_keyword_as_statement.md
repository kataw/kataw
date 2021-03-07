# Kataw parser test case

## Input

`````js
--this.x
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "--this.x",
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
                            "kind": 4260571,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 2,
                            "end": 6
                        },
                        "expression": {
                            "kind": 196711,
                            "text": "x",
                            "rawText": "x",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 7,
                            "end": 8
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 6,
                        "end": 8,
                        "period": {
                            "kind": 254,
                            "pos": 6,
                            "end": 7
                        }
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 8
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 8
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 8
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 8
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

