# Kataw parser test case

## Input

`````js
({a, b} = c = d)
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "({a, b} = c = d)",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097233,
                "expression": {
                    "kind": 66224,
                    "expression": {
                        "kind": 65550,
                        "left": {
                            "kind": 67224232,
                            "propertyList": {
                                "kind": 65722,
                                "properties": [
                                    {
                                        "kind": 196711,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 2,
                                        "end": 3
                                    },
                                    {
                                        "kind": 196712,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 4,
                                        "end": 6
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 2,
                                "end": 6
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 1,
                            "end": 7
                        },
                        "operator": "=",
                        "right": {
                            "kind": 65550,
                            "left": {
                                "kind": 196712,
                                "text": "c",
                                "rawText": "c",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 9,
                                "end": 11
                            },
                            "operator": "=",
                            "right": {
                                "kind": 196712,
                                "text": "d",
                                "rawText": "d",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 13,
                                "end": 15
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 9,
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
                    "end": 16
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 16
            }
        ],
        "transformFlags": 0,
        "flags": 0,
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

