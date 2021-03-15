# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true, module: true }
`````


## Input

`````js
result = [...[x, y]] = vals;
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 149,
    "source": "result = [...[x, y]] = vals;",
    "filename": "",
    "moduleBody": {
        "kind": 150,
        "statements": [
            {
                "kind": 2097233,
                "expression": {
                    "kind": 65550,
                    "left": {
                        "kind": 196712,
                        "text": "result",
                        "rawText": "result",
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 6
                    },
                    "operator": "=",
                    "right": {
                        "kind": 65550,
                        "left": {
                            "kind": 67207686,
                            "elementList": {
                                "kind": 65605,
                                "elements": [
                                    {
                                        "kind": 65740,
                                        "argument": {
                                            "kind": 67207686,
                                            "elementList": {
                                                "kind": 65605,
                                                "elements": [
                                                    {
                                                        "kind": 196712,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 65536,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 14,
                                                        "end": 15
                                                    },
                                                    {
                                                        "kind": 196712,
                                                        "text": "y",
                                                        "rawText": "y",
                                                        "flags": 65536,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 16,
                                                        "end": 18
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "multiline": false,
                                                "flags": 65536,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 14,
                                                "end": 18
                                            },
                                            "flags": 65536,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 13,
                                            "end": 19
                                        },
                                        "flags": 65536,
                                        "intersects": false,
                                        "transformFlags": 2,
                                        "start": 10,
                                        "end": 19
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 10,
                                "end": 19
                            },
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 8,
                            "end": 20
                        },
                        "operator": "=",
                        "right": {
                            "kind": 196712,
                            "text": "vals",
                            "rawText": "vals",
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 22,
                            "end": 27
                        },
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 8,
                        "end": 27
                    },
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 27
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 28
            }
        ],
        "transformFlags": 0,
        "flags": 65536,
        "intersects": false,
        "start": 0,
        "end": 28
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 28
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

