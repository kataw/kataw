# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true, module: true }
`````

## Input

`````js
[...x = y] = a;
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 149,
    "source": "[...x = y] = a;",
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
                                        "kind": 65550,
                                        "left": {
                                            "kind": 196712,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 65536,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 4,
                                            "end": 5
                                        },
                                        "operator": "=",
                                        "right": {
                                            "kind": 196712,
                                            "text": "y",
                                            "rawText": "y",
                                            "flags": 65536,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 7,
                                            "end": 9
                                        },
                                        "flags": 65536,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 4,
                                        "end": 9
                                    },
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 2,
                                    "start": 1,
                                    "end": 9
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 1,
                            "end": 9
                        },
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 10
                    },
                    "operator": "=",
                    "right": {
                        "kind": 196712,
                        "text": "a",
                        "rawText": "a",
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 12,
                        "end": 14
                    },
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 14
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 15
            }
        ],
        "transformFlags": 0,
        "flags": 65536,
        "intersects": false,
        "start": 0,
        "end": 15
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 15
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

