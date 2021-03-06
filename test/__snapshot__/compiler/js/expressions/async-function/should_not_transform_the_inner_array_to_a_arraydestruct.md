# Kataw parser test case

## Input

`````js
[a,b=[x,y]] = z
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "[a,b=[x,y]] = z",
    "filename": "",
    "scriptBody": {
        "kind": 197,
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
                                    "kind": 196712,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 1,
                                    "end": 2
                                },
                                {
                                    "kind": 65550,
                                    "left": {
                                        "kind": 196712,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 3,
                                        "end": 4
                                    },
                                    "operator": "=",
                                    "right": {
                                        "kind": 67207686,
                                        "elementList": {
                                            "kind": 65605,
                                            "elements": [
                                                {
                                                    "kind": 196712,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 6,
                                                    "end": 7
                                                },
                                                {
                                                    "kind": 196712,
                                                    "text": "y",
                                                    "rawText": "y",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 8,
                                                    "end": 9
                                                }
                                            ],
                                            "trailingComma": false,
                                            "multiline": false,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 6,
                                            "end": 9
                                        },
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 5,
                                        "end": 10
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 3,
                                    "end": 10
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 1,
                            "end": 10
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 11
                    },
                    "operator": "=",
                    "right": {
                        "kind": 196712,
                        "text": "z",
                        "rawText": "z",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 13,
                        "end": 15
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 15
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 15
            }
        ],
        "transformFlags": 0,
        "flags": 0,
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

