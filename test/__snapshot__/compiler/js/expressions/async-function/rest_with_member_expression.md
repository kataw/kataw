# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true, module: true }
`````


## Input

`````js
[...x.list] = a;
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 149,
    "source": "[...x.list] = a;",
    "filename": "",
    "moduleBody": {
        "kind": 150,
        "statements": [
            {
                "kind": 2097233,
                "expression": {
                    "kind": 65550,
                    "left": {
                        "kind": 67207686,
                        "elementList": {
                            "kind": 65605,
                            "elements": [
                                {
                                    "kind": 65740,
                                    "argument": {
                                        "kind": 66232,
                                        "member": {
                                            "kind": 196712,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 65536,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 4,
                                            "end": 5
                                        },
                                        "expression": {
                                            "kind": 196711,
                                            "text": "list",
                                            "rawText": "list",
                                            "flags": 65536,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 6,
                                            "end": 10
                                        },
                                        "flags": 65536,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 5,
                                        "end": 10,
                                        "period": {
                                            "kind": 254,
                                            "pos": 5,
                                            "end": 6
                                        }
                                    },
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 2,
                                    "start": 1,
                                    "end": 10
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 1,
                            "end": 10
                        },
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 11
                    },
                    "operator": "=",
                    "right": {
                        "kind": 196712,
                        "text": "a",
                        "rawText": "a",
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 13,
                        "end": 15
                    },
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 15
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 16
            }
        ],
        "transformFlags": 0,
        "flags": 65536,
        "intersects": false,
        "start": 0,
        "end": 16
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
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
