# Kataw parser test case

## Input

`````js
((((((((((x))))))))));
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "((((((((((x))))))))));",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097233,
                "expression": {
                    "kind": 66224,
                    "expression": {
                        "kind": 66224,
                        "expression": {
                            "kind": 66224,
                            "expression": {
                                "kind": 66224,
                                "expression": {
                                    "kind": 66224,
                                    "expression": {
                                        "kind": 66224,
                                        "expression": {
                                            "kind": 66224,
                                            "expression": {
                                                "kind": 66224,
                                                "expression": {
                                                    "kind": 66224,
                                                    "expression": {
                                                        "kind": 66224,
                                                        "expression": {
                                                            "kind": 196712,
                                                            "text": "x",
                                                            "rawText": "x",
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "start": 10,
                                                            "end": 11
                                                        },
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 9,
                                                        "end": 12
                                                    },
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 8,
                                                    "end": 13
                                                },
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 7,
                                                "end": 14
                                            },
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 6,
                                            "end": 15
                                        },
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 5,
                                        "end": 16
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 4,
                                    "end": 17
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 3,
                                "end": 18
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 2,
                            "end": 19
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 20
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 21
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 22
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 22
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 22
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

