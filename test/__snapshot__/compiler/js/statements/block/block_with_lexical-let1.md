# Kataw parser test case

## Input

`````js
{ let [] = y }
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "{ let [] = y }",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2099237,
                "block": {
                    "kind": 2084,
                    "statements": [
                        {
                            "kind": 142,
                            "isConst": false,
                            "binding": {
                                "kind": 31,
                                "bindingList": [
                                    {
                                        "kind": 141,
                                        "binding": {
                                            "kind": 33554437,
                                            "elementList": {
                                                "kind": 29,
                                                "elements": [],
                                                "trailingComma": false,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 1,
                                                "start": 7,
                                                "end": 7
                                            },
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1025,
                                            "start": 5,
                                            "end": 8
                                        },
                                        "exclamation": false,
                                        "type": null,
                                        "initializer": {
                                            "kind": 196712,
                                            "text": "y",
                                            "rawText": "y",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 10,
                                            "end": 12
                                        },
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 5,
                                        "end": 12
                                    }
                                ],
                                "flags": 16,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 5,
                                "end": 12
                            },
                            "flags": 16,
                            "intersects": false,
                            "transformFlags": 769,
                            "start": 1,
                            "end": 12
                        }
                    ],
                    "multiline": false,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 12
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 14
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 14
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 14
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

